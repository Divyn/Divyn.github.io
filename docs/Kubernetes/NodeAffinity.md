---
layout: default
title: Node Affinity
parent: Kubernetes
---

nodeSelector provides a very simple way to constrain pods to nodes with particular labels. 

 __The affinity/anti-affinity language is more expressive. The language offers more matching rules besides exact matches created with a logical AND operation__

You can indicate that the rule is "soft"/"preference" rather than a hard requirement, so if the scheduler can't satisfy it, the pod will still be scheduled;

There are currently two types of node affinity, called __requiredDuringSchedulingIgnoredDuringExecution_ and __preferredDuringSchedulingIgnoredDuringExecution__

```
spec:
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
        - matchExpressions:
          - key: kubernetes.io/e2e-az-name
            operator: In
            values:
            - e2e-az1
            - e2e-az2
      preferredDuringSchedulingIgnoredDuringExecution:
      - weight: 1
        preference:
          matchExpressions:
          - key: another-node-label-key
            operator: In
            values:
            - another-node-label-value

```