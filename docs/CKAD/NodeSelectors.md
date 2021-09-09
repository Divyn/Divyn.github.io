You have different kinds of workloads running in your cluster.
We can set a limitation on the pods so that they only run on larger nodes.
There are two ways to do this.
 - Node Selector
 - Node Affinity

nodeSelector is a field of PodSpec. It specifies a map of key-value pairs.
The key value pair of size and large are in fact labels assigned to the nodes. The Scheduler uses these
labels to match and identify the right node to place the pods on labels and selectors .

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