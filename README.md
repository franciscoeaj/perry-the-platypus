# perry-the-platypus

Just another super secret project you may have to ask Perry the Platypus' help to figure it out

![](./perry.jpg)

## Starting the app

Basically all you need to do is build our docker image and let docker-compose handle all the rest:

```
$ docker build -t perry-the-platypus .
$ docker-compose up -d
```

## Future work

Put the web and api modules on a docker config (maybe play a bit with k8s for personal experience) file to use them as separate microservices
