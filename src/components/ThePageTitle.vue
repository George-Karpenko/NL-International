<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="row h1">
      <RouterLink
        v-if="$route.name !== 'home'"
        class="h1__link"
        :to="{ name: 'home' }"
      >
        <i class="h1__icon icon-arrow-left"></i>
      </RouterLink>
      <h1 class="h1__title">{{ title }}</h1>
    </div>
  </div>
</template>

<style>
.row.h1 {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 35px;
  margin-bottom: 20px;
}
.h1__title {
  font-size: min(44px, 8vw);
  line-height: 44px;
  margin: 0;
}
.h1__link {
  margin-top: 3px;
}
.h1__icon {
  color: #000;
  font-size: 30px;
  cursor: pointer;
}
</style>
