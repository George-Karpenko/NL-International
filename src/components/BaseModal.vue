<script>
export default {
  emits: ["closeModal"],
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<template>
  <div @click.self="closeModal" class="modal">
    <div class="modal__dialog">
      <i @click="closeModal" class="model__close icon-close"></i>
      <header v-if="this.$slots.header" class="modal__header">
        <slot name="header"></slot>
      </header>
      <div v-if="this.$slots.default" class="modal__body">
        <slot></slot>
      </div>
      <footer v-if="this.$slots.footer" class="modal__footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<style>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: hsla(237, 15%, 24%, 0.8);
  mix-blend-mode: normal;
}
.modal__dialog {
  position: absolute;
  top: 18px;
  right: 18px;
  height: 16px;
  width: 16px;
  cursor: pointer;
}
.model__close {
  position: relative;
  margin: 400px auto;
  width: 769px;
  height: 144px;
  padding: 28px 18px 23px 19px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(151, 151, 151, 0.2);
  border-radius: 5px;
}
</style>
