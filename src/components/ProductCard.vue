<script>
import BaseButton from "./BaseButton.vue";

export default {
  props: {
    main_image_thumb_300: {
      type: String,
      default: "",
    },
    category: {
      type: Object,
      default: {},
    },
    present_name: {
      type: String,
      default: "",
    },
    comment_name: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    alloved: {
      type: Boolean,
      default: false,
    },
    available: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isProductInStock() {
      console.log(
        this.$props.alloved,
        this.$props.available,
        this.$props.alloved && this.$props.available
      );
      return this.$props.alloved && this.$props.available;
    },
    printIsProductInStock() {
      return this.isProductInStock ? "В корзину" : "Нет в наличии";
    },
  },
  components: { BaseButton },
};
</script>

<template>
  <div class="product">
    <img class="product__img" :src="main_image_thumb_300" />
    <p class="product__category">{{ category.name }}</p>
    <p class="product__title">{{ present_name }}</p>
    <p class="product__comment">{{ comment_name }}</p>
    <p class="product__price">{{ price }} ₽</p>
    <BaseButton
      class="product__button"
      :disabled="!isProductInStock"
      :text="printIsProductInStock"
    />
  </div>
</template>

<style>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 276px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(151, 151, 151, 0.2);
  border-radius: 0px 0px 5px 5px;
  border-radius: 5px;
  background-size: 100% 100%;
}
.product__img {
  width: 100%;
}
.product__button {
  margin: 16px auto 23px auto;
}
.product__price {
  font-size: 26px;
  line-height: 24px;
}
.product__comment {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-top: auto;
}
.product__category {
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #979797;
}
.product__title {
  font-size: 20px;
  line-height: 24px;
}
</style>
