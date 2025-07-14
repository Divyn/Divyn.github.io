---
layout: default
title: Chaos Theory on  COVID-19
parent: Miscellaneous
---
# Wait a minute... There's research on Chaos Theory and the COVID-19

The term chaos is used when there is some change taking place that cannot be explained by classical physics.
Chaos has become a strangely attractive word that you might be interested in this subject even if you hate mathematics.

### Describing the occurence of an epidemic as a chaotic system


The essential feature of chaotic systems is that their long-time behavior is unpredictable, i.e., if we change the initial conditions marginally , the outcome will be nowhere near the former one.

_Unstable and Aperiodic_ — happens more than once but never repeats itself over certain intervals and the impact varies so much that it is impossible to predict the effects accurately.

 The following anecdote mentioned in "Introducing Chaos” by Ziauddin Sardar about Edward Lorenz and weather forecasting will highlight the importance of the above statement.

Lorenz on a fine day in the year 1961 while working with his weather machine wanted to regenerate the previous weather prediction in a longer sequence . He supposedly took a short cut by restarting the sequence half-way through instead of doing it from the beginning. He manually tapped the number 0.506 rounded off from the previous computer reading value of 0.506127.

The output that came out while he went to get a coffee was completely different from the original reading that he exclaimed it looked like the prediction for a different system.

What we know today as the “Butterfly Effect” had its origins here.

### Lorenz System: A mathematical example

###### (PS: You can skip this part )

Although a system described by a set of nonlinear difference equations can exhibit chaos even for one degree of freedom, _a system described by a continuous set of differential equations cannot exhibit chaotic behavior with less than three degrees of freedom._ The Lorenz equations are probably the simplest and most widely known examples of a continuous system that does exhibit chaos and are given by

`dx/dt = a(y- x),`

`dy/dt = x(r-z) -y,`

`dz/dt = xy-bz`

### COVID-19

The main point of comparison between methods chosen to analyze an epidemic is that it has to be able to model the spread of a disease even if important variables are missing. Of course there is a tradeoff that analysts have to make with regards to _**accuracy vs complexity (the choice to put resources and time into building a complex model or sacrificing accuracy for quicker results)**_.

Remember that in order to predict the expected number of cases within a particular time frame the model must be a sufficiently accurate representation of reality in order to provide useful outputs.

#### What is the use of such modelling?

A robust model of an epidemic can provide insights about the immediate evolution of the epidemic, its general trend and help categorize the spread into different stages over a period of time.

Polynomial Model Search (PoMoS) and Global Modeling (GloMo) are two complementary algorithms (freely downloadable at the following address: http://www.cesbio.ups-tlse.fr/us/pomos_et_glomo.html) designed for the modeling of observed dynamical systems based on a small set of time series and applied in epidemology.

After Ebola Virus Disease (EVD) broke out in Guinea in December 2013, researchers used data collected by the World Health Organization in the period between March 2014 and January 2015 to build a four-dimensional model producing a very complex dynamical behavior using time series of the daily numbers of infections and deaths.

#### SEIR : Compartmental Model

Different diseases are represented by different compartmental models. Compartmental models are deterministic, that is, given the same inputs, they produce the same results every time. They are able to predict the various properties of virus spread, can estimate the duration of epidemics, and can be used to understand how different situations or interventions can impact the outcome of the spread.

[![](https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F22be5718-ebb2-4a5f-80c7-f36685a19def_1307x396.png)](https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F22be5718-ebb2-4a5f-80c7-f36685a19def_1307x396.png)

Source: https://docs.idmod.org/projects/emod-hiv/en/latest/model-seir.html

The population sample N to be analyzed is defined by

> N = S + E + I + R.
> 
> _S_ represents the class of susceptible individuals, the disease can be transmitted from any infected individual to any susceptible one.
> 
> _E_ is composed of individuals who are directly exposed to the infected disease but are not contagious.
> 
> _I_ defines the class of infectious individuals, and by definition, any infectious person can transmit the disease.
> 
> R Anyone who was previously infectious and is no longer infectious (recovered or dead)

> _β_ —> controls the rate of spread which represents the probability of transmitting disease between a susceptible and an infectious individual
> 
> γ —> is the transition rate at which and infected individual moves to the recovered class
> 
> σ —> is the rate at which exposed individuals become infectious and
> 
> _ξ_ —> is the rate which recovered individuals return to the susceptible state due to loss of immunity.

### Signature of Chaos and considerations for SEIR

A distinguishing characteristic of chaotic systems is their sensitive dependence on initial conditions – infinitesimally small changes at the start lead to bigger changes later. This behavior is described as the _signature_ of chaos.

Therefore any mathematical model built to analyse epidemics must take clearly state the assumptions and the initial conditions considered.

#### Fractional order SEIR

The fractional-order differential equations of the SEIR model are defined as

[![](https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3dd8b5fd-fbba-4222-a3f7-684054fcc9bd_563x228.png)](https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3dd8b5fd-fbba-4222-a3f7-684054fcc9bd_563x228.png)

_a_, _b_, _c_, _d_ ∈ (0,2].

### How to study the spread using this model?

We are interested in how the number of infections is influenced by the number of susceptible (S), exposed(E), and removed (R) individuals.

-   In order to study the chaotic contribution of the number of susceptible individuals in the number of infected ones, we adjust the parameter _**a**_
-   If we are interested in the chaotic contribution of the number of exposed individuals on the number of infected ones, we have to adjust the parameter _**b**_.
-   The number of recovered individuals _R_ in the system, is independent on the first three equations, therefore _**d**_ variations have no influence over _I_.

#### Sources where you can read more about it

-   [COVID-19 pandemic and chaos theory](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7532837/)
-   [Chaos theory applied to the outbreak of COVID-19: an ancillary approach to decision making in pandemic context](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7231667/)
-   [Polynomial search and global modeling: Two algorithms for modeling chaos](https://pubmed.ncbi.nlm.nih.gov/23214661/)