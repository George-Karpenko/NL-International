<script>
import { mapState } from "pinia";
import { useErrorStore } from "@/stores";
import TheError from "../components/TheError.vue";

export default {
  computed: {
    ...mapState(useErrorStore, ["error"]),
  },
  components: { TheError },
};
</script>

<template>
  <TheError
    title="Ошибка 404"
    :message="`Страница с адресом ${$route.params.catchAll} не найдена.`"
  />
</template>
