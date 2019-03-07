# perry-the-platypus

Just another super secret project you may have to ask Perry the Platypus' help to figure it out

![](./perry.jpg)

## Starting the app

Basically all you need to get the api module up and then the web module up. To do so, run the following commands (assuming you're on the root folder of this project):

```
$ cd api
$ yarn
$ yarn start
$ cd ../web
$ yarn
$ yarn start
```

Note: as for 0.1.0, `yarn start` on the web module is just an alias for `yarn serve`

## Future work

Put the web and api modules on a docker config (maybe play a bit with k8s for personal experience) file to use them as separate microservices
