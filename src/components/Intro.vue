<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <h1>Welcome to P2P Vote</h1>

    <!-- <router-link :to="{ name: 'vote-view', params: { voteID: 'FirstVOTE' }, query: { data: stubDataString}}">Sample Vote</router-link> -->
    <!-- <div v-on:click="feedURL()">TEST URL</div> -->
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
      stubData,
      stubDataString: JSON.stringify(stubData)
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
