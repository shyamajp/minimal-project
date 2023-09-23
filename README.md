# minimal-project

Not ideal setup, but this is a minimal project to understand kubernetes and its main components.

## How to start

### Pre-requisite

You have `Docker`, `kubectl` and `minikube` installed.

1. set environment variables in the current shell on minikube

```powershell
minikube docker-env
minikube docker-env | Invoke-Expression
```

2. build image
   `docker build -t node-app .`

   1. !important to have `imagePullPolicy: IfNotPresent` or `imagePullPolicy: Never` in `app-deployment.yaml`

3. assign external service a public address
   `minikube service app-service`
