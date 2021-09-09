---
layout: default
title: Basic Commands
parent: Kubernetes
---

# Microservices 

 At times you may need two micro services which were developed and deployed separately to work together such as a web server and a logging service. And that is why you have multi container pods that share the same lifecycle which means they are created together and destroyed together. They share the same network space which means they can refer to each other as local host and they have access to the same storage volumes.

 ```
 apiVersion: v1
kind: Pod
metadata:
  name: multi-pod
spec:

  restartPolicy: Never

  volumes:
  - name: shared-data
    emptyDir: {}

  containers:

  - name: nginx-container
    image: nginx
    volumeMounts:
    - name: shared-data
      mountPath: /usr/share/nginx/html

  - name: ubuntu-container
    image: ubuntu
    volumeMounts:
    - name: shared-data
      mountPath: /pod-data
    command: ["/bin/sh"]
    args: ["-c", "echo Hello, World!!! > /pod-data/index.html"]

```

# Design Patterns
 - Sidecar pattern
 - Adapter pattern
 - Ambassador pattern.
