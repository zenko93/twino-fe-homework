<template>
  <div>
    <sub-header class="mb-10" :width="width" :numberOfGroup="numberOfGroup" :title="this.data[this.numberOfGroup].fieldName" />
    <quiz :quiz="quiz" @nextQuestion="nextQuestion" @previousQuestion="previousQuestion" />
  </div>
</template>

<script>
import Quiz from "@/components/Quiz";
import SubHeader from "@/components/SubHeader";

export default {
  name: "Questions",
  components: {
    SubHeader,
    Quiz
  },
  data() {
    return {
      numberOfGroup: 0,
      numberOfQuiz: 0,
      width: 0,
      data: this.$store.state.data,
    }
  },
  computed: {
    quiz() {
      const group = this.data[this.numberOfGroup];
      const groupFieldName = group.fieldName;
      const question = group.questions[this.numberOfQuiz];

      return { ...question, groupFieldName };
    },
  },
  methods: {
    nextQuestion() {
      if (this.numberOfQuiz === this.data[this.numberOfGroup].questions.length - 1 && this.numberOfGroup !== this.data.length - 1) {
        this.numberOfGroup = this.numberOfGroup + 1;
        this.numberOfQuiz = 0;
        this.pushProgressBar();
      } else if (this.numberOfGroup !== this.data.length - 1 || this.numberOfQuiz !== this.data[this.numberOfGroup].questions.length - 1) {
        this.numberOfQuiz = this.numberOfQuiz + 1;
        this.pushProgressBar();
      } else {
        this.$router.push('overview');
      }
    },
    pushProgressBar() {
      this.width = this.width + 33;
    },
    previousQuestion() {
      if (this.numberOfQuiz === 0 && this.numberOfGroup !== 0) {
        this.numberOfGroup = this.numberOfGroup - 1;
        this.numberOfQuiz = this.data[this.numberOfGroup].questions.length - 1;
      }
      else if (this.numberOfGroup !== 0 || this.numberOfQuiz !== 0) {
        this.numberOfQuiz = this.numberOfQuiz - 1;
      }
    }
  }
}
</script>
