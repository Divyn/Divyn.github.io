# Blockchain Data Observability: When Your Data Pipeline Goes Offline

You're running a Solana trading bot that depends on real-time low-latency price feeds. Suddenly, your dashboard shows stale data from 5 minutes ago. Is it a network issue? An API problem? Your application crash? Or just Solana's network congestion? Without proper observability, you're flying blind which in crypto equals losing money.

Most blockchain developers running their own nodes either to trade, to build onchain data or sell it as service need extensive monitoring.Their business depends on guaranteed uptime SLAs, data accuracy, and operational resilience.

![](/img/observability/question.png)

## The Solution: Real-Time Observability Pipeline

The answer to this problem is to monitor, trace, and track every step from a node ( or another data provider) to your database.
Therefore, in this article, we will see how to build an observability pipeline that streams **OHLC/K-line data + technical indicators (SMA/EMA) and USD volumes every second** from Bitquery for both **Solana** and **BSC**. Here's what makes it a good starting point:

- **Real-time monitoring**: Every message, error, and connection state is tracked
- **Cross-chain comparison**: Side-by-side visibility into how different chains vary in network statistics; Solana's staggering **~3952 TPS** vs BSC's **~146 TPS**
- **Production resilience**: Handles network blips, API rate limits, and sudden traffic spikes
- **Open-source stack**: OpenTelemetry + SigNoz for enterprise-grade monitoring without vendor lock-in

**Complete sample code is available [here](https://github.com/Divyn/bitquery-observability-signoz/tree/main)**
The commands needed to run the code are in the [readme file](https://github.com/Divyn/bitquery-observability-signoz/blob/main/README.md)

### Why This Matters: The Observability Gap

- **Data freshness**: How old is your price feed really?
- **Reliability**: Are you missing critical updates during network congestion?
- **Performance**: How does your pipeline handle Solana's 27x faster transaction rate vs BSC?
- **Failures**: When things break, how quickly can you detect and respond?

**Observability bridges this gap, turning blind spots into actionable insights.**

## Architecture Overview

![](/img/observability/flowchart.png)

**Data Source**

- Bitquery GraphQL stream over WebSockets (1-second intervals). Read more on [Bitquery Crypto Price APIs here](https://docs.bitquery.io/docs/trading/crypto-price-api/introduction/)

**Ingestion App**

- Python `asyncio` consumer (one dedicated subscription per network)

**Telemetry Pipeline**

- OpenTelemetry Metrics SDK → OTLP/gRPC → OTel Collector → SigNoz

**Dashboards**

- Message throughput
- Short-window rate increases
- Error spikes
- Connection health

## Setting up SigNoz

1.  Sign up for [SigNoz](http://signoz.io/).
2.  Obtain your **OTLP endpoint** and **`signoz-ingestion-key`** — this key uniquely tags the metrics your application emits.
3.  Configure your OTel Collector to forward these metrics to SigNoz. Sample [config.yaml is here](https://github.com/Divyn/bitquery-observability-signoz/blob/main/otelcol-contrib/config_sample.yml)

## How it’s monitored (driven by the code)

Our application exposes a set of metrics on message count, and errors that maps cleanly to dashboards and alerts. This is a sample that shows how to use an open source solution to monitor your solution that relies on onchain data.

### Setting up Bitquery Price Streams

We will be using two graphQL streams; one for Solana and one for BSC. [Run Stream on Bitquery IDE](https://docs.bitquery.io/docs/trading/crypto-price-api/examples/#ohlc-stream-on-a-chain)

- Solana Price Stream with 1-second OHLC
- Binance Smart Chain Stream with 1-second OHLC

Code sample to setup a websocket is [here](https://docs.bitquery.io/docs/subscriptions/examples/)

### Metrics emitted

To first understand what metrics are available in the OpenTelemetry SDK, you can look it up [here](https://opentelemetry-python.readthedocs.io/en/stable/api/metrics.html#)

**Volume & Rate**

- `bitquery.solana.messages` (Counter)
- `bitquery.bsc.messages` (Counter)

**Reliability**

- `bitquery.solana.errors`, `bitquery.bsc.errors` (Counter)
- `bitquery.solana.connections`, `bitquery.bsc.connections` (Counter)

**Freshness probe (internal)**

- `_last_msg_time[network]` — used to detect stalls.

> Why this works

- Separate counters per chain let us compare networks head-to-head.
- The generic counters with a `network` attribute power rolled-up views and per-network slices without duplicating widget logic.
- Per-network transports and reconnect/backoff ensure one chain’s issues don’t hide the other’s in metrics.

## Dashboards (what we chart and why)

![](/img/observability/charts.png)

### 1) Price Feed Messages (5–10 min window)

- **Panels**: “Solana Price Feed Messages”, “BSC Price Feed Messages”
- **Query**: Sum of `bitquery.<network>.messages` over time (rate)
- **Interpretation**: Slopes reflect throughput—Solana rises more steeply than BSC, matching TPS differences.

### 2) Message Increase (Short Window Burst View)

- **Panels**: “Solana Price Feed Message Increase”, “BSC Price Feed Message Increase”
- **Query**: Delta or increase of message counters per minute
- **Interpretation**: Spikes indicate bursts; flat lines suggest stalls or upstream pauses.

### 3) Reliability

- **Errors**: Rate of `bitquery.<network>.errors`
- **Connections**: Cumulative `bitquery.<network>.connections` with annotations when a reconnect occurs
- **Interpretation**: Sudden error blips + reconnects correlate with gaps in the message panels.

### 4) Cross-Chain Comparison

- **Panel**: “Messages by Network”
- **Query**: `sum(rate(bitquery.messages[1m])) by (network)`
- **Interpretation**: One panel, two lines—quick visual health check across chains.

## Alerts (what we page on)

To fix any out-of-the-normal situations, we need to setup alerts that are triggered based on certain conditions. Detailed docs on each type of alert is available [here](https://signoz.io/docs/alerts/)

![](/img/observability/alert.png)

1.  **No new messages (freshness)**

    - Condition: increase of `bitquery.<network>.messages` ≤ 0 for **5 mins**
    - Action: Page; annotate dashboard

2.  **Error burst**

    - Condition: rate of `bitquery.<network>.errors` > **0.5/s** for **2 min**
    - Action: Slack + issue

3.  **Flapping connections**

    - Condition: delta of `bitquery.<network>.connections` ≥ **3** in **10 min**
    - Action: Investigate upstream or network path

These three cover **data stops**, **bad data risk**, and **transport instability**.

## Operating it

- **One task per network**: `run_stream("Solana", query_solana)` and `run_stream("Binance Smart Chain", query_bsc)` keep pipelines independent.
- **Attributes**: all generic counters include `attributes={"network": ...}` enabling aggregated views and easy filters in SigNoz.
- **Graceful shutdown**: Signals (`SIGINT/SIGTERM`) flip an `asyncio.Event` so the app closes WebSockets cleanly (you’ll see “Transport closed (…)" logs).

## Monitoring Post-Upgrade Network Health

Blockchain teams and governance members often vote on new improvements that improve transaction latency or propagation mechanism. For example, the recent **Alpenglow** upgrade on Solana introduces **Rotor**, a single-layer relayer system that replaces Turbine’s multi-hop block propagation. Rotor **reduces propagation time and variability**, so **validators receive blocks almost simultaneously**. For data teams, that translates to:

- **Lower end-to-end lag** from on-chain event → Bitquery → your consumer → dashboard
- **More uniform message arrival** (fewer jitter spikes), which steadies your “message increase” panels
- **Fewer fork-induced anomalies**, reducing short-term inconsistency in time-series derived from block data

Now how do we see the visual result? Expect smoother lines, quicker recovery after bursts, and fewer alert false positives tied to propagation delays.

## What the charts told us

- **Throughput reality**: Solana’s message curve is consistently steeper than BSC’s, which matches the ~3952 vs ~146 TPS we calculated.
- **Burst behavior**: Even when the Solana feed spikes, the pipeline keeps up with it.

## Final Thoughts

We started with a problem: trading bots running on stale data with no visibility into what's happening. We've solved it with an observability pipeline that monitors the application's blockchain data ingestion.

**What You Now Have:**

- Real-time visibility into data freshness
- Cross-chain performance monitoring
- Automated error detection
- Production-ready infrastructure

**Ready to Test:**
The complete codebase is available at [GitHub](https://github.com/Divyn/bitquery-observability-signoz/tree/main).

_Questions? Issues? Contributions? Open an issue or PR on the repository._
