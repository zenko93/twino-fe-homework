<template>
  <div>
    <sub-header
      class="mb-10"
      :width="width"
      :numberOfGroup="numberOfGroup"
      :title="title"
    />
    <quiz
      :quiz="quiz"
      @nextQuestion="nextQuestion"
      @previousQuestion="previousQuestion"
    />
  </div>
</template>

<script>
import Quiz from "@/components/Quiz";
import SubHeader from "@/components/SubHeader";
import { mapGetters } from "vuex";

export default {
  name: "Questions",
  components: {
    SubHeader,
    Quiz,
  },
  data() {
    return {
      numberOfGroup: 0,
      numberOfQuiz: 0,
      width: 0,
    };
  },
  computed: {
    ...mapGetters(["data", "amountOfGroups"]),
    title() {
      return this.data[this.numberOfGroup].fieldName;
    },
    amountOfQuestions() {
      return this.data[this.numberOfGroup].questions.length - 1;
    },
    quiz() {
      const { fieldName, questions } = this.data[this.numberOfGroup];
      const groupFieldName = fieldName;
      const question = questions[this.numberOfQuiz];

      return { ...question, groupFieldName };
    },
  },
  methods: {
    nextQuestion() {
      if (
        this.numberOfQuiz === this.amountOfQuestions &&
        this.numberOfGroup !== this.amountOfGroups
      ) {
        this.numberOfGroup = this.numberOfGroup + 1;
        this.numberOfQuiz = 0;
      } else if (
        this.numberOfGroup !== this.amountOfGroups ||
        this.numberOfQuiz !== this.amountOfQuestions
      ) {
        this.numberOfQuiz = this.numberOfQuiz + 1;
      } else {
        this.$router.push("overview");
      }
    },
    previousQuestion() {
      if (this.numberOfQuiz === 0 && this.numberOfGroup !== 0) {
        this.numberOfGroup = this.numberOfGroup - 1;
        this.numberOfQuiz = this.amountOfQuestions;
      } else if (this.numberOfGroup !== 0 || this.numberOfQuiz !== 0) {
        this.numberOfQuiz = this.numberOfQuiz - 1;
      }
    },
  },
};
</script>
