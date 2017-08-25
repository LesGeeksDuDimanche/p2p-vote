<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <h1>Vote</h1>
    <h2>{{title}}</h2>
    <div class="text-italic mb3">by {{sponsor}}</div>
    <big class="block mb2">
      {{questions[0].title}}
    </big>
    <template v-for="(item, index) in questions[0].answers">
      <!-- v-if just assigns the color -->
      <q-btn v-if="isChosenAnswerIndex(index)" v-on:click="choseAnswer(index)" color="blue">{{item}}</q-btn>
      <q-btn v-else="isChosenAnswerIndex(index)" v-on:click="chooseAnswer(index)">{{item}}</q-btn>
    </template>
    <q-btn class="mt3 block" v-on:click="vote()">Vote</q-btn>
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

    return Object.assign({}, stubData, {
      chosenAnswerIndex: null
    });
  },
  components: { QBtn },
  methods: {
    chooseAnswer(answerIndex) {
      console.log(`voted for ${answerIndex}`);
      this.chosenAnswerIndex = answerIndex;
    },
    isChosenAnswerIndex(index) {
      return index === this.chosenAnswerIndex;
    },
    vote() {
      if (this.chosenAnswerIndex !== null) {
        alert(`Will submit vote now with index ${this.chosenAnswerIndex}`);
      } else {
        alert('No chosenAnswerIndex set');
      }
    }
  }
}
</script>

<style>
</style>
