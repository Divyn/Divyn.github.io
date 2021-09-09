---
layout: default
title: Scheduling
parent: CKAD
---

# Scheduling
A scheduler takes care of placing new pods onto nodes within the cluster.

" The scheduler code has a clean separation that watches new pods as they get created and identifies the most suitable node to host them. It then creates bindings (pod to node bindings) for the pods using the master API. "


# Label Selectors

When you create a pod will get scheduled on a node whose label has been mentioned in pod configuration file.

To get the list of nodes in your cluster and their labels:

```
kubectl get nodes --show-labels=true
```


Sample pod configuration file (from https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes/)

```
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    env: test
spec:
  containers:
  - name: nginx
    image: nginx
    imagePullPolicy: IfNotPresent
  nodeSelector:
    disktype: ssd
```
Here the pod will get scheduled to node with label mentioned in 'nodeSelector:' field
i.e 'disktype: ssd'