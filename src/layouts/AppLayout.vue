<script>
import { mapState } from "pinia";
import { useErrorStore } from "@/stores";
import TheError from "../components/TheError.vue";

export default {
  computed: {
    ...mapState(useErrorStore, ["errorTitle", "errorMessage"]),
  },
  components: { TheError },
};
</script>

<template>
  <component v-if="!errorTitle" :is="$route.meta.layoutComponent">
    <slot></slot>
  </component>
  <TheError v-else :title="errorTitle" :message="errorMessage" />
</template>
