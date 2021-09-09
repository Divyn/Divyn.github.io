---
layout: default
title: Basic Commands
parent: Kubernetes
---

# Wiki

The Scheduler that decides which node a part goes to.

The scheduler takes into consideration the amount of resources required by a part and those available

on the nodes.

By default Kubernetes assumes that a port or a container

within a port requires point five CPU and 256 megabyte of memory.

This is known as the resource request for a container, the minimum amount of CPU or memory requested

by the container when the scheduler tries to place the port on a note.

It uses these numbers to identify a node which has sufficient amount of resources available.

## Point to Note
A container cannot use more CPU resources than its limit.

However, this is not the case with the memory.

A container can use more memory resources than its limit.