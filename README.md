# P2P Vote

> Decentralized voting app based on Web-RTC 

Work during the .Democracy Hackathon in Factory Berlin by 

* Robert Riemann 
* Chad Carbert
* Xavier Lavayssière
* Antoine Gouy
* Claire Swierkowski

## Current Stage
Frontend and the decentralized vote aggragation work independantly
Connections between the Vue.js framework and services such as login are to be done
For another implementation, please check https://github.com/rriemann/advokat-vote

## Build Setup

``` bash
# install dependencies
$ npm install

# install quasar CLI
$ npm install -g quasar-cli

# serve with hot reload at localhost:8080
$ quasar dev

# build for production with minification
$ quasar build
$ git subtree push --prefix dist origin gh-pages

# lint code
$ quasar lint
```