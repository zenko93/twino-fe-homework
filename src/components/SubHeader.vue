<template>
  <div>
    <div class="flex mb-3">
      <progress-bar
        v-for="(group, index) in groups"
        :key="group.fieldName"
        :width="getGroupProgressBarWidth(group)"
        :bgColor="index <= numberOfGroup"
        class="mr-2"
      />
    </div>
    <div v-if="!isShowSubHeader" class="flex items-center justify-between">
      <span class="text-blue-900">{{ titleCapitalize }}</span>
      <span class="text-gray-500">{{ getGroupProgressBarWidth(groups[numberOfGroup]) }}% Completed</span>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";
import { mapGetters } from "vuex";

export default {
  name: "SubHeader",
  components: { ProgressBar },
  props: {
    numberOfGroup: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapGetters({
      groups: "data",
      answers: "answers",
    }),
    isShowSubHeader() {
      return ["overview"].includes(this.$route.name);
    },
    titleCapitalize() {
      return `${this.title.charAt(0).toLocaleUpperCase()}${this.title.slice(1)}`;
    },
  },
  methods: {
    getGroupProgressBarWidth({ questions, fieldName }) {
      const answeredQuestions = questions
        .map((question) => this.answers[fieldName][question.fieldName])
        .filter((answer) => answer).length;

      return ((answeredQuestions * 100) / questions.length).toFixed(0);
    },
  },
};
</script>
