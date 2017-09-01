import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */
  mode: 'history',

  routes: [
    { path: '/', component: load('Intro') },
    { path: '/intro', component: load('Intro') },
    { path: '/createvote', component: load('Createvote') },
    { path: '/waiting', component: load('Waiting') },
    { name: 'vote-view', path: '/vote/:voteID', component: load('Vote'), props:true },
    { path: '/results', component: load('Results') },
    { path: '/about', component: load('About') },


    { path: '/robert', component: load('Robert'),
      children: [
        { path: '', component: load('RobertHome'), meta: { auth: false } },
        { path: 'create', component: load('RobertCreate'), meta: { auth: true } },
        { path: 'show/:voteId', component: load('RobertShow'), meta: { auth: true } },
      ]
    },

    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
