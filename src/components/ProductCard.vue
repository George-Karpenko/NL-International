<script>
import BaseButton from "./BaseButton.vue";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isProductInStock() {
      return this.$props.product.allowed && this.$props.product.available;
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
    <img class="product__img" :src="product.main_image_thumb_300" />
    <p class="product__category">{{ product.category.name }}</p>
    <p class="product__title">{{ product.present_name }}</p>
    <p class="product__comment">{{ product.comment_name }}</p>
    <p class="product__price">{{ product.price }} ₽</p>
    <BaseButton class="product__button" :disabled="!isProductInStock">
      {{ printIsProductInStock }}
    </BaseButton>
  </div>
</template>

<style>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
  padding: 0px 0px 4px 1px;
}
.product__button_disabled {
  color: rgba(39, 39, 39, 0.5);
}
.product__price {
  font-size: 26px;
  line-height: 24px;
  margin-top: 13px;
  margin-right: 7px;
  margin-bottom: 0;
}
.product__comment {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-top: auto;
  margin-bottom: 0;
  margin-left: 1px;
}
.product__category {
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  margin-top: 6px;
  margin-bottom: 0;
  color: var(--grey);
}
.product__title {
  font-size: 20px;
  line-height: 24px;
  margin-top: 4px;
  margin-right: 20px;
  margin-left: 24px;
  margin-bottom: 10px;
}
</style>
