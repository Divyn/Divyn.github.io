---
layout: default
title: Basic Commands
parent: CKAD
---
#Secrets

- Convert your secret data to a base-64 representation
eg. username- "divy12345"

pw- "67878ff87@"

```
echo -n 'divy12345' | base64

echo -n '67878ff87@' | base64
```

- use the base64 value to create a Secret that holds your username and password - Secret.yaml

```
apiVersion: v1
kind: Secret
metadata:
  name: mysecret
data:
  username: generatedBase64_value
  password: generatedBase64_value

```
- Create the Secret command from separate files

```
kubectl create secret generic db-user-pass \
  --from-file=./username.txt \
  --from-file=./password.txt
  ```
In this case, we are creating a secret based on a file, the key will default to the basename of the file, and the value will default to the file content. 

- Create the Secret from a .yaml file
```
kubectl apply -f secret.yaml
```

- View it

```
kubectl get secret mysecret
```