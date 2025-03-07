---
layout: default
title: Services
parent: Kubernetes
---


# What is a Service?
Single-point entry to access one/more pods because 
- pods can go on/off, so we cannot rely on IP addresses to stay the same,
- pods get IP only after going live, so clients cannot get it beforehand

and

- Service abstracts IP address of pod.
- Service can load balance between pods.
- kube-proxy ( a daemon) for virtual-IP generation

