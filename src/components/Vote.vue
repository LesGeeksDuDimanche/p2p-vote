<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <h1>Vote</h1>
    <big class="block mb2">
      {{questions[0].title}}
    </big>
    <q-btn v-for="(item, index) in questions[0].answers" v-on:click="vote(index)">
      {{item}}
    </q-btn>
  </div>
</template>

<script>
import { QBtn } from 'quasar'

const stubData = {
  sponsor: 'robert@riemann.cc',
  participants: ['@gmail.com', 'robert@riemann.cc'],
  questions: [
    { answers: ['red', 'blue', 'green'],
      votes: 1,
      title: 'What is your favourite color?',
      _id: 'fe7e20592780dd4d2ceb26b01251fe4573c96715'
    },
  ],
  title: 'My Vote Title',
  start: "2017-08-25T16:57:58.441Z",
};

export default {
  data () {
    // placeholder for vote data, put in url via
    // data query param in url (?data=)
    const data = this.$route.query.data;
    console.log(data);

    return stubData;
  },
  components: { QBtn },
  methods: {
    vote(answerIndex) {
      const answers = this.questions[0].answers;
      alert(`You voted for ${answers[answerIndex]}`);
    }
  }
}
</script>

<style>
</style>
