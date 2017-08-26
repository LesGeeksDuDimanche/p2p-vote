<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <h1>Create vote</h1>
      <q-input type="text" placeholder="Vote Title" v-model="title"/>
      <q-input type="text" placeholder="Author" v-model="author"/>
      <q-datetime type="datetime" placeholder="End Date and Time" v-model="endDate" :display-value=prettyDate />
      <q-input type="text" placeholder="Question" v-model="question"/>
      <q-btn class="mt2 mb2" icon="add" v-on:click="addOption">Add Option</q-btn>
      <q-list highlight>
        <template v-for="(item, index) in options">
          <q-item>
            <q-input style="width:100%" type="text" placeholder="Option" v-model="item.value" />
            <q-btn color="red" v-on:click="deleteOption(index)">
              <q-icon name="delete" size="24px"/>
            </q-btn>
          </q-item>
        </template>
      </q-list>
  </div>
</template>

<script>
import { QInput, QDatetime, QBtn, QIcon, QList, QItem } from 'quasar';
import moment from 'moment';
export default {
  components: { QInput, QDatetime, QBtn, QIcon, QList, QItem },
  data () {
    return {
      title: '',
      author: '',
      question: '',
      now: moment().toDate(),
      options: [{ value: ''}],
      endDate: moment().add(2, 'days').toDate()
    }
  },
  methods: {
    addOption() {
      this.options.push({ value: ''});
    },
    deleteOption(optionIndex) {
      console.log(`delete ${optionIndex}`);
      this.options.splice(optionIndex, 1);
    },
  },
  computed: {
    prettyDate() {
      return moment(this.endDate).format('MMMM D YYYY, h:mm a')
    }
  },
}
</script>

<style>
</style>
