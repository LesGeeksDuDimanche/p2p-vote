<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <h1>Welcome to P2P Vote</h1>
    <!-- <q-btn round style="color: #FF0080" v-on:click="feedURL()">feedURL</q-btn> -->
    <!-- <a v-bind:href="feedURL()"> Sample vote </a> -->
<!--     <router-link to="'feedURL()'">Sample vote</router-link>
 -->
    <router-link :to="{ name: 'vote-view', params: { voteID: 'FirstVOTE' }, query: { sponsor:'everything@democracy.is', questions :{ answers: ['Cats', 'Beyonce', 'Fritz'],title: 'Who runs the World\?'} ,start: '2017-08-26T17:57:58.441Z'}}">Sample Vote</router-link>
    <div v-on:click="feedURL()">TEST URL</div>

    <br>



    <router-link to="createvote">Create a new vote</router-link>



  </div>
</template>

<script>
import { QBtn } from 'quasar'

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
      stubData
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
