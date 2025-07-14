---
layout: default
title: Security Context
parent: Kubernetes
---
#Need for permissions
 SecurityContext is one option to make sure that containers and pods don't request more than what it should request in terms of process privileges.
To specify security settings for a Pod, include the securityContext field in the Pod specification. 

##Example

security-context.yaml

```
apiVersion: v1
kind: Pod
metadata:
  name: security-context-sample
spec:
  securityContext:
    runAsUser: 1000   //user UID 1000
    runAsGroup: 3000
    fsGroup: 2000
  volumes:
  - name: sec-ctx-vol
    emptyDir: {}
  containers:
  - name: sec-ctx-demo
    image: busybox
    command: [ "sh", "-c", "sleep 1h" ]
    volumeMounts:
    - name: sec-ctx-vol
      mountPath: /data/demo
    securityContext:
      allowPrivilegeEscalation: false
```
