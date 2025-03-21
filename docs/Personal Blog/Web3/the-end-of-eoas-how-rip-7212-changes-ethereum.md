---
sidebar_position: 1
---

# The End of EOAs? How RIP-7212 Changes Everything

In this blog, we'll explore what this proposal is about, what problem it solves, why it matters, and its current status, among other details.

The Ethereum community is constantly evolving, with developers and researchers submitting proposals to improve its scalability, security, and functionality. One of the proposals generating significant buzz is RIP-7212, the first-ever Rollup Improvement Proposal.

Initially proposed as EIP-7212, this proposal introduces a precompiled contract for secp256r1 curve support, which has far-reaching implications for the future of Ethereum, particularly with respect to account abstraction.

In this blog, we'll explore what this proposal is about, what problem it solves, why it matters, and its current status, among other details.

## What is RIP-7212?

RIP-7212 focuses on optimizing elliptic curve cryptography within Ethereum. Elliptic curve cryptography is a powerful tool used for secure digital signatures, and secp256r1 is a specific curve widely used in blockchain technology, including Bitcoin.

7212 uses this specific elliptic curve secp256r1 which is preferred for two main reasons;

### Expand on Hardware Acceleration

secp256r1 is often implemented in hardware security modules (HSMs) and secure enclaves, which significantly speeds up signature verification and enhances security. This is because these specialized hardware components are designed to perform the complex mathematical operations required by elliptic curve cryptography much faster than general-purpose CPUs.

### NIST Curve Controversy

Stemming from the early days of Bitcoin when developers were wary of relying on NIST-standardized curves. This distrust arose from a desire to avoid any potential human-introduced vulnerabilities and ensure the Bitcoin protocol doesn't rely on any human errors.

![](/img/nist.png)

### A simplified flow of how RIP-7212 works

## What problem is RIP-7212 Solving?

By introducing a precompiled contract specifically designed for secp256r1 signature verification, RIP-7212 aims to achieve the following:

- **Efficiency**: Precompiled contracts are executed in highly optimized native code, resulting in significantly lower gas costs and faster transaction speeds compared to performing the same operations within a smart contract. This optimization is crucial for rollups, which rely on efficient transaction processing to achieve scalability.

- **Improved Security**: Precompiled contracts are generally considered more secure due to their optimized implementation and reduced attack surface. This ensures that signature verification, a critical security component, is handled with the highest level of robustness.

- **Simplified Development**: Developers can leverage the precompiled contract for secp256r1 signature verification without needing to write complex code themselves, streamlining the development process and reducing the potential for errors.

## Why secp256r1?

While Ethereum currently utilizes the secp256k1 curve for its signature scheme, adding support for secp256r1 opens up new possibilities. As Ulaş Erdoğan highlighted in the initial proposal, secp256r1 is already widely adopted in various security solutions like TLS, DNSSEC, Apple's Secure Enclave, Passkeys, and Android Keystore. This broader adoption makes it easier to integrate real-world security solutions with Ethereum, particularly in the context of account abstraction.

## Addressing Concerns and Exploring Alternatives

There are some interesting discussions within the Ethereum community about this proposal. Some concerns have been raised about the potential for a backdoor in secp256r1, although no concrete evidence has been found. Others have suggested exploring alternative curves like Ed25519, which offers potential benefits in terms of computational efficiency.

Additionally, secp256r1 has been shown to have gas cost efficiency and performance efficiency in many cases, further supporting its use within Ethereum.

Proponents of RIP-7212 argue that the widespread hardware acceleration and secure storage support for secp256r1 make it a compelling choice for practical implementation, especially when considering its role in facilitating account abstraction.

## The Significance of Account Abstraction

Account abstraction (ERC-4337) is a major development path for Ethereum, aiming to replace traditional Externally Owned Accounts (EOAs) with more flexible and customizable smart contract wallets. This transition promises a more user-friendly and secure experience, allowing for features like social recovery, session keys, and multi-signature wallets.

RIP-7212 directly addresses the challenges of account abstraction by enabling smart contract wallets to utilize native secp256r1 signatures. This means users can enjoy the benefits of account abstraction without needing to manage seed phrases or deal with unfamiliar key management systems. Imagine a future where onboarding new users becomes as simple as using their existing secure enclaves on their mobile devices!

## Why RIP-7212 Benefits Rollups and Beyond

Rollups are layer-2 scaling solutions that execute transactions off-chain and submit proof of those transactions to the Ethereum mainnet. This significantly increases transaction throughput and reduces costs. RIP-7212 further enhances the efficiency of rollups by optimizing signature verification, a crucial component of transaction processing.

Furthermore, this precompile opens up exciting opportunities for projects like ENSDAO, which could leverage DNSSEC integration to enhance security and trust.

## The Road Ahead

RIP-7212, initially discussed as EIP-7212, is gaining traction within the Ethereum community. Reference implementations are already being developed for clients like go-Ethereum, and the proposal has been discussed in ACDE calls. The successful implementation of RIP-7212 could be a significant milestone for Ethereum, paving the way for wider adoption of account abstraction and further improvements in scalability and security.

## Conclusion

RIP-7212 represents a crucial step in the ongoing evolution of the Ethereum network. By optimizing elliptic curve cryptography and facilitating account abstraction, this proposal has the potential to unlock new possibilities for developers, users, and the broader blockchain ecosystem. As Ethereum continues to push the boundaries of decentralized technology, RIP-7212 stands out as a key innovation to watch.
