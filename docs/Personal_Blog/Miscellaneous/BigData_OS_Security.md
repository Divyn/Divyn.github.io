---
layout: default
title: Big Data Analytics and Autonomic Computing in Anticipating Operating System Threats
parent: Miscellaneous
---

# Big Data Analytics and Autonomic Computing in Anticipating Operating System Threats

A major portion of the world’s population now has Internet access, with the number of connected devices currently in the billions. The decline in the cost of hardware resources, especially the cost of storage devices, is one factor that enables organizations to store every bit of data, leading to the accumulation of data in volumes unimaginable. Traditional network perimeter defense systems become ineffective in resisting targeted attacks as they are not scalable to the size of organizational networks.

## Introduction

The operating system (OS) manages resources within the system. It determines the allocation of these resources to multiple tasks and allows them access in an orderly manner. An OS consists of large and complex programs, making security a critical concern. Security issues include the external environment of the system and the need to protect it from unauthorized access, malicious modification, destruction, or operational inconsistencies.

The OS must protect itself from security breaches, including **denial of service, memory-access violations, stack overflow violations, execution of programs with excessive privileges**, and many others. Having the right tools to organize and interpret data is crucial. Data about users' and hosts' activities within an organization’s network—collected by firewalls, web proxies, domain controllers, intrusion detection systems, and Virtual Private Network (VPN) servers—can provide insights into system behavior in various situations and aid in detecting stealthy attacks.

Big data not only helps restrict access to data to authorized entities but also facilitates high-speed data transmission due to advanced distributed file systems. The proliferation of Internet-connected sensors and devices has led to a massive increase in data streams. **Cloud computing** provides external, scalable processing capabilities and the vast amounts of storage required for big data.

## Big Data in Autonomic Computing

In the computing world, systems are being programmed to become **self-managing**, a concept known as **autonomic computing**. The system makes decisions on its own using high-level policies, constantly checks and optimizes its status, and automatically adapts to changing conditions. An autonomic application should be able to detect suboptimal processes and optimize itself for improved execution.

Big data plays a major role in achieving these objectives. Technological advances in **storage, processing, and analysis** of big data include:
- Rapidly decreasing cost of storage
- The development of new frameworks such as **Hadoop**
- The flexibility and cost-effectiveness of **cloud computing**

These capabilities enable analysts to **predict system behavior** from a vast set of possible scenarios to counter any changes in the system.

**Advanced Persistent Threats (APT)** occur in multiple stages, with each action by an attacker providing an opportunity to detect behavioral deviations from the norm. **Correlating independent events** can reveal evidence of intrusion and expose stealthy attacks that traditional methods may fail to identify.

Big data alone does not reveal insights—it requires **human analysis**. For example, **malicious domains tend to last for short durations**, whereas **legitimate domains** persist longer and resolve to multiple geographically distributed IP addresses. Data derived from **Domain Name Server (DNS) responses** should be collected and classified to identify infected hosts and malicious domains. Combining these insights with **malicious site data from Internet Service Providers (ISP)** enhances detection capabilities.

## Metadata in Analytics

Applying **search algorithms** to metadata allows for the creation of **high-confidence results**. This is particularly beneficial in **operating system security**, as irrelevant information can be excluded from analysis. **Big data scientists** can quickly locate the right information despite the vast amount of content stored in repositories. 

Metadata also plays a crucial role in determining **data authenticity and quality (provenance)**. Whenever big data changes state, the received provenance information is recorded as metadata. This enables efficient data handling, **improving overall big data and metadata efficiency**.

## Theory and Big Data

**Batch processing (offline processing)** involves processing large quantities of data in batches, commonly implemented using **MapReduce algorithms**. However, the downside of big data is the risk of **multiple comparisons**. 

John Ioannidis, in his paper ["Why Most Published Research Findings Are False"](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC1182327/), discusses a similar effect: when many researchers process a large amount of scientific data (even without big data technology), the likelihood of obtaining a **false positive result** increases significantly.

Francis Bacon, a philosopher advocating an **empirical, inductive approach**, believed that the foundation of **true scientific inquiry** was a repository of **natural and experimental history**. However, he also emphasized the need for theories to predict outcomes beyond the available data. Theories provide **context for data retention and preservation**.

For instance, **strong ground motion is modeled by recording time-series files** at the surface of a simulated volume. Various parameters, such as **peak ground acceleration and shaking duration**, are derived from these time series. This data is essential for evaluating **seismic hazards** and modifying **building codes** accordingly.

The **Southern California Earthquake Center** developed **TeraShake**, a large-scale earthquake simulation project to assess threats from earthquakes on the **San Andreas Fault**. TeraShake uses a **supercomputer with 240 processors** to solve wave equations over a **600 km × 300 km × 80 km** volume with **200-meter resolution**. A **three-minute simulation** generates nearly **50 terabytes of data**, which scientists use for further research.

Big data analysis integrates **traditional statistical methods** with **computational techniques**. After executing **diagnostic statistical analysis**, **big data computational techniques** can be applied. Over time, organizations will **combine real-time data streaming with batch analysis** to identify patterns and trends.

## Big Data and Security

Managing **big data systems** introduces various **security challenges**. New **resource management** and **scheduling mechanisms** are required to **utilize big data tools effectively**. While **several open-source and proprietary solutions** exist, the benefits of big data for **data accumulation and analysis** outweigh its security liabilities.

Big data can be used to **correlate events across time and space** for enhanced security monitoring. **Visualization and predictive analytics** can help identify security threats. **Big data analytics systems**, such as **MapReduce and Spark**, offer high resistance to failures and ensure computational efficiency in **security analysis**.

Security events generate **enormous amounts of data**, posing a risk of **overwhelming analysts**. **Big data tools help frame data within the context of users, devices, and events** to extract relevant insights. 

Big data security analytics **collects data from all IP-connected devices**, including **laptops, smartphones, and IoT devices**. Additionally, it can be used for **software security analysis** to monitor vulnerabilities in both **physical and virtual environments**.

## Conclusion

We can assess networks, scan for vulnerabilities, and prioritize measures to understand system configurations and detect errors.

Big data is essential for **business strategy**, handling **dynamic real-world entities (people)**. Similarly, **computer security analysis deals with dynamic threats**. 

Big data enables **predictive analysis** of how **personal systems operate under threats** and can integrate **self-resurrecting programs** to resolve minor issues **without manufacturer intervention**. Large organizations should maintain a **dedicated IT security team** using **big data tools** to monitor **internal data transmission**.

Big data helps prevent **cyberattacks on critical business operations**, **protect customer data**, and **strengthen security**. Further development in **big data-driven security mechanisms** will significantly **enhance cybersecurity resilience**.

---

## References

1. *Big Data Fundamentals* by Thomas Erl, Wajid Khattak, Paul Buhler  
2. *Computer Security* by David K. Hsiao, Douglas S. Kerr, Stuart E. Madnick  
3. *Towards a Big Data Architecture for Facilitating Cyber Threat Intelligence* by Charles Wheelus, Elias Bou-Harb, Xingquan Zhu  
4. [ASEE Paper on Big Data Security](http://asee-ne.org/proceedings/2014/Student%20Papers/210.pdf)  
5. [SIAM Research on Earthquakes](http://www.siam.org/careers/pdf/earthquake.pdf)  
6. [Big Data & Metadata Success](http://www.datasciencecentral.com/profiles/blogs/why-you-need-metadata-for-big-data-success)  
7. [Big Data in Security Analytics](https://securityintelligence.com/the-use-case-for-big-data-and-security-analytics-an-interview-with-ben-wuest/)  
8. [Cloud Security Alliance Report](https://downloads.cloudsecurityalliance.org/initiatives/bdwg/Big_Data_Analytics_for_Security_Intelligence.pdf)  
