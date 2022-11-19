<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="row h1">
      <slot></slot>
      <h1 class="h1__title">{{ title }}</h1>
    </div>
  </div>
</template>

<style>
.h1 {
  display: flex;
  align-items: center;
  gap: 10px;
}
.h1__title {
  font-size: 44px;
  line-height: 44px;
}
</style>