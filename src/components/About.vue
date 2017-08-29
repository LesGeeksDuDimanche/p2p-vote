<template>
  <!-- if you want automatic padding use "layout-padding" class -->

  <div class="layout-padding" style="">

  <vue-markdown style="text-align: left;" source="https://raw.githubusercontent.com/LesGeeksDuDimanche/p2p-vote/master/README.md">
    
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

# lint code
$ quasar lint
```



  </vue-markdown>
    

    <img style=" bottom: 3rem; width: 60%;" src="../assets/easytohandle_illu.png">
        

  </div>
</template>

<script>
import { QBtn } from 'quasar'
import VueMarkdown from 'vue-markdown'

export default {
  data () {
    const stubData={
      sponsor: "everything@democracy.is",
      questions: {
        answers: ["Cats", "Beyonce", "Fritz"],
        title: "Who should rule the world ?"
      },
      title: "World Leadership Vote",
      start: "2017-08-26T17:57:58.441Z"
    }

    return {
    	url: "",
      stubData,
      stubDataString: JSON.stringify(stubData)
    }
  },
  components: { QBtn, VueMarkdown },
  computed : {},
  methods : {
  	// feedURL () {
  	// 	this.url=this.createURL(this.testURL())
  	// }
  }

}
</script>

<style>
</style>
