// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import VueResource from 'vue-resource'
import VueMarkdown from 'vue-markdown'

Vue.config.productionTip = false
Vue.use(Quasar) // Install Quasar Framework
Vue.use(VueResource)

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

/*
// navigation guard
import Authorisation from './lib/Authorisation'
import { QBtn, QCard, QCardTitle } from 'quasar';
// why this does not work to export globablly?
export default {
  components: {
    QBtn,
    QCard,
    QCardTitle
  }
}

// from https://web-und-die-welt.de/web/authentifizierung-vue-app/
router.beforeEach((to, from, next) => {
  console.log(to.meta);
  if (to.meta.auth && !Authorisation.authenticated()) {
    next('/robert')
  } else {
    next()
  }
});
*/

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    render: h => h(require('./App')),
    data: {
      session: 'nein'
    }
  })
})

Vue.mixin({
  methods: {
    createURL(voteInfo) {
      let urlParameters = Object.keys(voteInfo).map((i) => i+'='+voteInfo[i]).join('&')
      return urlParameters;
    },
    getVoteParams(voteID) {
      this.$http.get('statics/votes/simplevote').then((response) => {
        var voteParams= JSON.parse(response.bodyText)
        return voteParams
      }, (response) => {
        console.log("Error in getVoteParams")
      });
    },
    feedURL() {
      this.$http.get('statics/votes/simplevote').then((response) => {
        // console.log(response.bodyText)
        var voteParams= JSON.parse(response.bodyText)
        console.log(voteParams)
        // alert(this.createURL(voteParams))
        return this.createURL(voteParams)
        // console.log(this.currentItem)
        // success callback
      }, (response) => {
        // error callback
        console.log("Error in feedURL")

      });
    }
  }
})
