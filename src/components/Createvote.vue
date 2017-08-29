<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding ">
    <h1>Create vote</h1>
    <br>
    <div class=" docs-input row justify-center">
      <div style="width: 500px; max-width: 90vw;">
        <q-input type="text" align="left" float-label="Question" v-model="title"/>
        <q-input type="text" align="left" placeholder="Author" float-label="Vote organizer" v-model="author"/>
        <q-datetime type="datetime" float-label="End Time and Date" placeholder="End Date and Time" v-model="endDate" :display-value=prettyDate />
        <q-chips-input v-model="options" placeholder="Add option" float-label="Vote options"/>
        <div class="mt4">
          <router-link :to="{ name: 'vote-view', params: { voteID: voteID }, query: { data: urlData }}">
            <q-btn color="secondary">Create Vote</q-btn>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { QInput, QDatetime, QBtn, QIcon, QList, QItem, QChipsInput, QField} from 'quasar';
import moment from 'moment';
export default {
  components: { QInput, QDatetime, QBtn, QIcon, QList, QItem, QChipsInput,QField },
  data () {
    return {
      title: 'Who runs the world?',
      author: 'Democracy Is Everything',
      question: 'Who runs the world?',
      options: ['Cats','Beyonce'],
      endDate: moment().add(2, 'days').toDate(),
      voteID: Math.round(Math.random() * 10000000)
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
