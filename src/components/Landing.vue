<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div>
  <!-- <img src="assets/landing-page.png"> -->
    
  <router-link to="createvote">
    <img src="../assets/landing-page.png" style="width=100%">
    
  </router-link>
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
