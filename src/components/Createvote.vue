<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <h1>Create vote</h1>
      <q-input type="text" placeholder="Vote Title" v-model="title"/>
      <q-input type="text" placeholder="Author" v-model="author"/>
      <q-datetime type="datetime" placeholder="End Date and Time" v-model="endDate" :display-value=prettyDate />
      <q-chips-input v-model="options" placeholder="Add option"/>
      <div class="mt4">
        <router-link :to="{ name: 'vote-view', params: { voteID: voteID }, query: { data: urlData }}">
          <q-btn>Create Vote</q-btn>
        </router-link>
      </div>
  </div>
</template>

<script>
import { QInput, QDatetime, QBtn, QIcon, QList, QItem, QChipsInput } from 'quasar';
import moment from 'moment';
export default {
  components: { QInput, QDatetime, QBtn, QIcon, QList, QItem, QChipsInput },
  data () {
    return {
      title: '',
      author: '',
      question: '',
      voteID: Math.round(Math.random() * 10000000),
      now: moment().toDate(),
      options: [],
      endDate: moment().add(2, 'days').toDate()
    }
  },
  methods: {
    addOption() {
      this.options.push('');
    },
    deleteOption(optionIndex) {
      console.log(`delete ${optionIndex}`);
      this.options.splice(optionIndex, 1);
    },
  },
  computed: {
    prettyDate() {
      return moment(this.endDate+10000).format('MMMM D YYYY, h:mm a')
    },
    urlData() {
      const data = {
        sponsor: this.author,
        questions: {
          title: this.question,
          answers: this.options
        },
        title: this.title,
        start: moment(this.endDate).toISOString(),
      };

      return JSON.stringify(data);
    }
  },
}
</script>

<style>
</style>
