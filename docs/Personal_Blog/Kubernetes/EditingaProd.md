---
layout: post
title: "Edit a POD"
parent: "Kubernetes"
date: 2025-03-07
categories: [Kubernetes, Pods]
tags: [Kubernetes, Editing, Pods]
---

# Edit a POD

Remember, you **CANNOT** edit specifications of an existing **POD** other than the fields below:

```
spec.containers[*].image
spec.initContainers[*].image
spec.activeDeadlineSeconds
spec.tolerations
```

For example, you **cannot** edit the **environment variables, service accounts, resource limits** (all of which we will discuss later) of a running pod. However, if you really need to, you have two options:

---

## **Option 1: `kubectl edit pod` Command**

Run the following command:

```
kubectl edit pod <pod-name>
```

This will open the **pod specification** in an editor (**vi editor** by default).  
Edit the required properties, but when you try to save, you **will be denied** because some fields are **immutable**.

However, a **copy of the edited file** is saved in a temporary location.

You can then **delete the existing pod**:

```
kubectl delete pod webapp
```

And create a **new pod** using the temporary file:

```
kubectl create -f /tmp/kubectl-edit-ccvrq.yaml
```

---

## **Option 2: Extract, Edit & Recreate the Pod**

1. Extract the pod definition in **YAML format** to a file:

   ```
   kubectl get pod webapp -o yaml > my-new-pod.yaml
   ```

2. Open the extracted file in a text editor:

   ```
   vi my-new-pod.yaml
   ```

3. Make the required changes and **save the file**.

4. Delete the existing pod:

   ```
   kubectl delete pod webapp
   ```

5. Recreate the **new pod** with the edited YAML file:

   ```
   kubectl create -f my-new-pod.yaml
   ```

---

## **Editing Deployments**

With **Deployments**, you can **easily** edit any field/property of the **POD template**.

Since the pod template is a **child of the deployment specification**, every change automatically **deletes the old pod and creates a new one** with the updated changes.

If you need to edit a property of a POD **within a deployment**, simply run:

```
kubectl edit deployment my-deployment
```

This will open the **deployment specification** in an editor where you can make the required changes. After saving, the **Deployment Controller** will **update the pods** accordingly.

---

### **Final Notes**

- **You cannot edit a running pod directly** (except for specific fields).
- **For Deployments, the pod template updates automatically** when you edit the Deployment.

This method ensures **zero downtime** and keeps your Kubernetes cluster running smoothly! 🚀

---

_Thanks for reading! If you have any questions, feel free to leave a comment._ 🎯
