<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="error">
        <h1 class="error__h1">{{ title }}</h1>
        <p class="erroe__message">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.error {
  height: 100vh;
  max-width: 500px;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin: auto;
}
.error__h1 {
  font-size: 2em;
}
.error__message {
  font-size: 1.5em;
}
</style>
