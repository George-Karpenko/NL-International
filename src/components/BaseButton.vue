<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      class: [this.$props.disabled && "button-disabled"],
    };
  },
  updated() {
    this.class = [this.$props.disabled && "button-disabled"];
  },
};
</script>

<template>
  <button :class="class" class="button">{{ text }}</button>
</template>

<style>
.button {
  width: 212px;
  height: 40px;
  display: block;
  border: none;
  border-radius: 24px;
  color: #ffffff;
  cursor: pointer;
  background: linear-gradient(270deg, #ffa800 0%, #ff6f00 100%);
}
.button-disabled {
  background: transparent;
  border: 2px solid rgba(151, 151, 151, 0.3);
  color: #acacac;
  mix-blend-mode: normal;
  cursor: not-allowed;
}
</style>
