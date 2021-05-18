<template>
  <div>
    <h3 class="mb-3 font-bold">{{ quiz.question }}</h3>
    <div v-for="answer in quiz.answers" :key="answer">
      <div class="flex items-center mb-4">
        <input @click="setAnswer(answer)" :id="answer" type="radio" name="radio" class="hidden" />
        <label :for="answer" class="flex items-center cursor-pointer text-xl text-blue-900">
          <span class="w-6 h-6 min-width inline-block mr-2 rounded-full border border-gray-500 flex-no-shrink" />
          {{ answer }}
        </label>
      </div>
    </div>
    <div v-if="noAnswer" class="flex justify-center p-2 border border-red-500">Please provide answer</div>
    <div class="flex flex-col">
      <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 my-4 rounded focus:outline-none rounded"
          @click="nextQuestion"
      >
        Next question
      </button>
      <button class="underline text-blue-500 focus:outline-none rounded" @click="$emit('previousQuestion')">Previous question</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quiz",
  props: {
    quiz: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      noAnswer: false,
      answer: ''
    }
  },
  methods: {
    setAnswer(answer) {
      this.answer = answer;
      this.noAnswer = false;

      const data = {
        group: this.quiz.groupFieldName,
        question: this.quiz.fieldName,
        answer
      };

      this.$store.commit('SET_ANSWER', data);
    },
    nextQuestion() {
      if (!this.answer) {
        this.noAnswer = true;
        return;
      }

      this.$emit('nextQuestion');
      this.answer = '';
    }
  }
}
</script>

<style scoped>
.min-width {
  min-width: 1.2em;
}

input[type="radio"] + label span {
  transition: background .2s,
  transform .2s;
}

input[type="radio"] + label span:hover,
input[type="radio"] + label:hover span{
  transform: scale(1.2);
}

input[type="radio"]:checked + label span {
  background-color: white;
  box-shadow: 0 0 0 6px #3490DC inset;
  border-color: #3490DC;
}

input[type="radio"]:checked + label{
  color: #3490DC;
}
</style>
