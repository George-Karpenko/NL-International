<script>
export default {
  props: {
    cityName: {
      type: String,
      required: true,
    },
  },
  emits: ["openModal"],
  methods: {
    openModal() {
      this.$emit("openModal");
    },
  },
};
</script>
<template>
  <header class="header">
    <div class="container header__container">
      <div class="row">
        <div class="header__content" @click="openModal">
          <i class="header__icon icon-location"></i>
          <span class="header__text">{{ cityName }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.header {
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(39, 39, 39, 0.1);
  height: 72px;
}

.header__container {
  display: flex;
  align-items: center;
  height: 100%;
}
.header__content {
  margin-bottom: 4px;
  display: flex;
  align-items: center;
}
.header__text {
  font-size: 15px;
  line-height: 24px;
  margin-top: 1px;
}
.header__icon {
  color: var(--grey);
  font-size: 16px;
  margin-right: 7px;
}
</style>
