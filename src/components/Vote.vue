<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <!-- <h1>Vote</h1> -->
    <q-card-title>
      <h2>{{title}}</h2>
    </q-card-title>
    <div class="text-italic">by {{sponsor}}</div>
      <div class="text-italic">voteID: {{voteID}} </div>
    <br>
    <div class="mb3">Vote ends in {{timeRemaining}}</div>
    <template v-for="(item, index) in questions.answers">
      <!-- TODO: Change this to use radio buttons instead -->
      <!-- v-if just assigns the color -->
      <div class="mr2 inline-block">
        <q-btn v-if="isChosenAnswerIndex(index)" v-on:click="chooseAnswer(index)" color="blue">{{item}}</q-btn>
        <q-btn v-else="isChosenAnswerIndex(index)" v-on:click="chooseAnswer(index)">{{item}}</q-btn>
      </div>
    </template>
    <div>
      <q-btn class="mt3" v-on:click="vote()">Vote</q-btn>
    </div>
  </div>
</template>

<script>
import { QBtn, QCard, QCardTitle } from 'quasar';
import moment from 'moment';

export default {
  created: function () {
    this.countdown();
    // this.$route.params
  },
  data () {
    // placeholder for vote data, put in url via
    // data query param in url (?data=)
    const voteID = this.$route.params.voteID
    const data = JSON.parse(this.$route.query.data);
    console.log(data);

    return Object.assign({},
      data, {
      chosenAnswerIndex: null,
      timeRemaining: '-',
      voteID,
    });
  },
  components: { QBtn, QCard, QCardTitle },
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
        this.$router.push({ path: '../results' });
      } else {
        alert('No chosenAnswerIndex set');
      }
    },
    countdown() {
      const eventTime = moment(this.start);
      const currentTime = moment();
      const diffTime = eventTime - currentTime;
      const interval = 1000;
      let duration = moment.duration(diffTime, 'milliseconds');

      setInterval(() => {
        duration = moment.duration(duration - interval, 'milliseconds');
        this.timeRemaining = `${duration.hours()} hours ${duration.minutes()} minutes ${duration.seconds()} seconds`;
      }, interval);
    },
  }
}
</script>

<style>
</style>
