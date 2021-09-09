Taints and tolerations are used to set restrictions on what pods can be shared.Taints and tolerations have nothing to do with security or intrusion on a cluster. 

For eg;
Assume we have dedicated resources on node 1 for a particular Application A.Then we dont want pods with any other applications on Node 1, so you place a taint on node 1.
To allow the pods with A we add a Toleration to nodes which have A.

```
kubectl taint nodes node1 key1=value1:NoSchedule
```

```
tolerations:
- key: "key1"
  operator: "Equal"
  value: "value1"
  effect: "NoSchedule"
```