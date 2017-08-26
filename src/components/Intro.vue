<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding" style="position: relative; padding-bottom: 300px;">
    <h1>Welcome to P2P Vote</h1>

    <!-- <router-link :to="{ name: 'vote-view', params: { voteID: 'FirstVOTE' }, query: { data: stubDataString}}">Sample Vote</router-link> -->
    <!-- <div v-on:click="feedURL()">TEST URL</div> -->
    <br>
    <div style="position: relative; top: 100px; right: 150px;">
      <router-link to="createvote">
        <q-btn>
          Create a new vote
        </q-btn>
      </router-link>
    </div>
    <img style="position: absolute; bottom: 0; right: 0; width: 50%;" src="../assets/heroslide_right.png">
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
