<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      class: [this.$props.disabled && "button_disabled"],
    };
  },
  updated() {
    this.class = [this.$props.disabled && "button_disabled"];
  },
  methods: {
    d() {
      alert(2);
    },
  },
};
</script>

<template>
  <button @click="d" :class="class" class="button">
    <slot></slot>
  </button>
</template>

<style>
.button {
  position: relative;
  display: block;
  width: 212px;
  height: 40px;
  display: block;
  border: none;
  border-radius: 24px;
  color: #ffffff;
  cursor: pointer;
  background: linear-gradient(270deg, #ffa800 0%, #ff6f00 100%);
  z-index: 0;
}
.button::before {
  content: "";
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: calc(100% - 18px);
  height: 28px;
  margin: auto;
  background: linear-gradient(270deg, #ffa800 0%, #ff6f00 100%);
  filter: blur(13.5914px);
  border-radius: 24px;
  transform: translateY(17px);
  z-index: -1;
}
.button_disabled {
  background: transparent;
  border: 2px solid rgba(151, 151, 151, 0.3);
  color: #acacac;
  mix-blend-mode: normal;
  cursor: not-allowed;
}
.button_disabled::before {
  content: none;
}
</style>
