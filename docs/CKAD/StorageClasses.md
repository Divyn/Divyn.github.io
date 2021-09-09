---
layout: default
title: Storage Classes
parent: CKAD
---
# Volume
Volumes are used by pods to store data.

# PV
"Persistent" -> the method used to store data is such that it continues beyond the lifetime of a pod as well.
A Persistent Volume is a storage unit available cluster-wide whose lifecycle independant of a single pod.

# PVC
PersistentVolumeClaim (PVC) is a request for storage by a user. It is similar to a pod. Pods consume node resources and PVCs consume PV resources. 

# Dynamic provisioning of volumes
By enabling dynamic provisioning of volumes, storage gets provisioned automatically when the application requires it,
To enable dynamic provisioning, a cluster administrator needs to pre-create one or more StorageClass objects for users. StorageClass objects define which provisioner should be used and what parameters should be passed to that provisioner when dynamic provisioning is invoked. The name of a StorageClass object must be a valid DNS subdomain name.


```
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: claim1
spec:
  accessModes:
    - ReadWriteOnce
  storageClassName: fast
  resources:
    requests:
      storage: 30Gi

```