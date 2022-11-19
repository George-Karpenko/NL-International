<script>
import BaseLoader from "../components/BaseLoader.vue";
import TheHeader from "../components/TheHeader.vue";

export default {
  props: {
    cityName: {
      type: String,
      default: "",
    },
  },
  components: { BaseLoader, TheHeader },
};
</script>

<template>
  <template v-if="this.$slots.h1">
    <div v-if="this.$slots.h1" class="container container-h1">
      <RouterLink :to="{ name: 'home' }">
        <i class="icon-arrow-left"></i>
      </RouterLink>
      <h1><slot name="h1"></slot></h1>
    </div>
    <div class="container container-category">
      <aside v-if="this.$slots.aside">
        <slot name="aside"></slot>
      </aside>
      <main v-if="this.$slots.default" class="products">
        <slot></slot>
      </main>
      <BaseLoader v-else />
    </div>
  </template>
</template>
