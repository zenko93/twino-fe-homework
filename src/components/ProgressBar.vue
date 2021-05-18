<template>
  <div
    class="w-full bg-gray-200 h-1 relative overflow-hidden"
    :class="{ 'bg-green-100': bgColor }"
  >
    <div
      class="h-full progressbar"
      :class="{ 'bg-green-500': bgColor }"
      role="progressbar"
      :style="styleBar"
      :aria-valuenow="percentage"
    />
  </div>
</template>
<script>
export default {
  name: "ProgressBar",
  props: {
    color: {
      type: String,
      default: "teal",
    },
    key: {
      type: Number,
      default: null,
    },
    width: {
      type: Number,
      default: 0,
    },
    bgColor: {
      type: Boolean,
      default: false,
    },
    percentage: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    styleBar() {
      return this.bgColor ? { width: `${this.width}%` } : { width: `0%` };
    },
  },
};
</script>
<style scoped>
.progressbar {
  transition: width 0.25s ease;
}
</style>
