<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <h1>Welcome to P2P Vote</h1>
    <!-- <q-btn round style="color: #FF0080" v-on:click="feedURL()">feedURL</q-btn> -->
    <a v-bind:href="feedURL()"> Sample vote </a>
    <br>



    <a  href="/createvote/">Create a new vote</a>


  </div>
</template>

<script>
import { QBtn } from 'quasar'

export default {
  data () {
    return {
    	url: ""
    }
  }, 
  components: { QBtn },
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
