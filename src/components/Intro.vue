<template>
  <!-- if you want automatic padding use "layout-padding" class -->

  <div class="layout-padding" style="position: relative; padding-bottom: 300px;">
<!--    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> -->

    <h1 style="color=#013D4E; font-family='kalam'">Welcome to P2P Vote</h1>
    <!-- <q-btn round style="color: #FF0080" v-on:click="feedURL()">feedURL</q-btn> -->
    <!-- <a v-bind:href="feedURL()"> Sample vote </a> -->
<!--     <router-link to="'feedURL()'">Sample vote</router-link>
 -->
    <!-- <div v-on:click="feedURL()">TEST URL</div> -->
<!-- <router-link  style="color:gray;" :to="{ name: 'vote-view', params: { voteID: 'FirstVOTE' }, query: { sponsor:'everything@democracy.is', answers: ['Cats', 'Beyonce', 'Fritz'],title: 'Who runs the World\?' ,start: '2017-08-26T18:57:58.441Z'}}">Vote</router-link> -->

<!-- http://localhost:8080/vote/FirstVOTE?sponsor=everything%40democracy.is&answers=Cats&answers=Beyonce&answers=Fritz&title=Who%20runs%20the%20World%3F&start=2017-08-26T18%3A57%3A58.441Z
 -->



        <!-- <q-btn class="mt3" v-on:click="vote()">Vote</q-btn> -->


    <!-- <router-link :to="{ name: 'vote-view', params: { voteID: 'FirstVOTE' }, query: { data: stubDataString}}">Sample Vote</router-link> -->

 
    <div>
      
      <img style="position: absolute; bottom: 3rem; left: 1rem; width: 40%;" src="../assets/heroslide_left.png">
      <div style="position: relative; top: 8vh;">
        <router-link to="createvote">
          <q-btn  color="secondary">
            Create a new vote
          </q-btn>
        </router-link>
      </div>
      <img style="position: absolute; bottom: 3rem; right: 1rem; width: 40%;" src="../assets/heroslide_right.png">
    </div>
        

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
