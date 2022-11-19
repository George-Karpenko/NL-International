<script>
export default {
  props: {
    cityName: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <component :is="$route.meta.layoutComponent" :cityName="cityName">
    <slot></slot>
  </component>
</template>
