<template>
  <div>
    <div class="flex mb-3">
      <progress-bar :width="width" :bgColor="numberOfGroup === 0" :key="numberOfGroup" />
      <progress-bar class="mx-2" :width="width" :bgColor="numberOfGroup === 1" :key="numberOfGroup" />
      <progress-bar :width="width" :bgColor="numberOfGroup === 2" :key="numberOfGroup" />
    </div>
    <div v-if="!isShowSubHeader" class="flex items-center justify-between">
      <span>{{ titleCapitalize }}</span>
      <span>{{ width }}%</span>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";

export default {
  name: "SubHeader",
  components: { ProgressBar },
  props: {
    width: {
      type: Number,
      default: 0
    },
    numberOfGroup: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    isShowSubHeader() {
      return ['overview'].includes(this.$route.name);
    },
    titleCapitalize() {
      return `${this.title.charAt(0).toLocaleUpperCase()}${this.title.slice(1)}`;
    }
  }
}
</script>
