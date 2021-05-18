<template>
  <div>
    <sub-header :number-of-group="amountOfGroups" />
    <h2 class="mb-6">Answers overview</h2>
    <p class="mb-8">Here you can see and change your answers</p>
    <overview-tab v-for="group in data" :key="group.fieldName" :group="group" />
  </div>
</template>

<script>
import OverviewTab from "@/components/OverviewTab";
import SubHeader from "@/components/SubHeader";
import { mapGetters } from "vuex";

export default {
  name: "SuitabilityTest",
  components: { SubHeader, OverviewTab },
  computed: {
    ...mapGetters(["data", "amountOfGroups"]),
  },
};
</script>
