<script>
import { mapState, mapActions } from "pinia";
import { useCategoryStore, useCityStore } from "@/stores";
import DefaultLayout from "../layouts/AppLayoutDefault.vue";
import TheAside from "../components/TheAside.vue";
import ProductCard from "../components/ProductCard.vue";
export default {
    data() {
        return {
            products: [],
        };
    },
    computed: {
        ...mapState(useCategoryStore, {
            categoryProducts: "products",
            category: "category",
        }),
        ...mapState(useCityStore, ["city"]),
    },
    methods: {
        ...mapActions(useCategoryStore, ["findCategory"]),
    },
    watch: {
        city(newCity) {
            this.findCategory(newCity.id, this.$route.params.slug);
        },
    },
    created() {
        this.findCategory(this.city.id, this.$route.params.categorySlug).then(() => {
            this.products = this.categoryProducts.filter((product) => {
                return product.tags.filter((tag) => tag.slug === this.$route.params.subcategorySlug).length;
            });
        });
    },
    beforeUpdate() {
        this.products = this.categoryProducts.filter((product) => {
            return product.tags.filter((tag) => tag.slug === this.$route.params.subcategorySlug).length;
        });
    },
    components: { DefaultLayout, TheAside, ProductCard }
};
</script>

<template>
  <DefaultLayout>
    <template v-if="category.name" #h1>
      {{ category.name }}
    </template>
    <template #aside>
      <TheAside :subcategories="category.children" :slug="$route.params.categorySlug" />
    </template>
    <template v-if="products.length">
      <ProductCard v-for="product in products" :="product" />
    </template>
  </DefaultLayout>
</template>

<style>
.products button {
  width: 212px;
  height: 40px;
  display: block;
  background: linear-gradient(270deg, #ffa800 0%, #ff6f00 100%);
  /* padding: 6px 65px; */
  border: none;
  border-radius: 24px;
  font-family: "Futura PT";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin: 16px auto 23px auto;
  /* identical to box height, or 133% */

  color: #ffffff;
}
.product_price {
  font-family: "Futura PT";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 24px;
  /* identical to box height, or 92% */

  align-items: center;

  color: #272727;
}
.products div p.product__comment {
  font-family: "Futura PT";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-top: auto;
  /* identical to box height, or 125% */

  text-align: center;

  color: #272727;
}
.product__category {
  font-family: "Futura PT";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  /* identical to box height, or 100% */

  text-align: center;

  color: #979797;
}
.product__name {
  font-family: "Futura PT";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  /* or 120% */

  text-align: center;

  color: #272727;
}
.container-category {
  display: grid;

  /* flex-wrap: wrap; */
  gap: 34px;
  grid-template-columns: 240px 1fr;
  /* grid-template-areas:
    "A A A A"
    "B C C C"; */
}

.container-category h1 {
  grid-column: 1/3;
  /* grid-area: A; */
}

.container-category aside {
  /* grid-area: B; */
}

.container-category .products {
  /* grid-area: C; */
}

ul {
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
}
li {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 8px 12px;
  border-bottom: 1px solid #e9eef3;
  font-family: "Futura PT";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
.router-link-active li {
  background: #e9eef3;
}
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  text-align: center;
}
.products div {
  display: flex;
  flex-direction: column;
  width: 276px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(151, 151, 151, 0.2);
  border-radius: 0px 0px 5px 5px;
  border-radius: 5px;
  background-size: 100% 100%;
}
.products div img {
  width: 100%;
}
.products div p {
  margin: 20px;
}
</style>
