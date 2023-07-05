docker build -t georgiosktistakis/complex-client:latest -t georgiosktistakis/complex-client:$SHA -f ./client/Dockerfile ./client
docker build -t georgiosktistakis/complex-server:latest -t georgiosktistakis/complex-server:$SHA -f ./server/Dockerfile ./server
docker build -t georgiosktistakis/complex-worker:latest -t georgiosktistakis/complex-worker:$SHA -f ./worker/Dockerfile ./worker

docker push georgiosktistakis/complex-client:latest
docker push georgiosktistakis/complex-server:latest
docker push georgiosktistakis/complex-worker:latest

docker push georgiosktistakis/complex-client:$SHA
docker push georgiosktistakis/complex-server:$SHA
docker push georgiosktistakis/complex-worker:$SHA

kubectl apply -f k8s
kubectl set image deploymenets/client-deployment client=georgiosktistakis/complex-client:$SHA
kubectl set image deploymenets/server-deployment server=georgiosktistakis/complex-server:$SHA
kubectl set image deploymenets/worker-deployment worker=georgiosktistakis/complex-worker:$SHA
