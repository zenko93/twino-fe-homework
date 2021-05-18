<template>
  <div >
    <div class="flex items-center justify-between">
      <h3>{{ group.title }}</h3>
      <button @click="key = !key" class="text-blue-500 font-bold py-3 px-4 my-4 focus:outline-none rounded">{{ symbol }}</button>
    </div>
    <div v-if="key">
      <div v-for="question in group.questions" :key="question" >
        <p class="font-bold mb-2">{{ question.question }}</p>
        <div class="mb-7 text-gray-500">
          {{ getAnswerForQuestion(group, question) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OverviewTab",
  props: {
    group: {
      type: Object,
      required: true
    },
    toggle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      answers: this.$store.state.answers,
      key: true,
    }
  },
  computed: {
    symbol() {
      return this.key ? '- Show less' : '+ Show more';
    }
  },
  methods: {
    getAnswerForQuestion(group, question) {
      return this.answers[group.fieldName][question.fieldName];
    }
  }
}
</script>
