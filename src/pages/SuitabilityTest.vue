<template>
  <div>
    <sub-header :number-of-group="data.length - 1" />
    <h2 class="mb-6">Answers overview</h2>
    <p class="mb-8">Here you can see and change your answers</p>
    <overview-tab v-for="group in data" :key="group.fieldName" :group="group" />
  </div>
</template>

<script>
import OverviewTab from "@/components/OverviewTab";
import SubHeader from "@/components/SubHeader";

export default {
  name: "SuitabilityTest",
  components: { SubHeader, OverviewTab },
  data() {
    return {
      data: this.$store.state.data,
    };
  },
};
</script>
