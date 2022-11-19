<script>
import { mapState, mapActions } from "pinia";
import { useCategoryStore, useCityStore } from "@/stores";
import BaseLoader from "../components/BaseLoader.vue";
import TheAside from "../components/TheAside.vue";
import ProductCard from "../components/ProductCard.vue";
import ThePageTitle from "../components/ThePageTitle.vue";
export default {
  data() {
    return {
      isNewProducts: false,
    };
  },
  computed: {
    ...mapState(useCategoryStore, ["category", "products"]),
    ...mapState(useCityStore, ["city"]),
  },
  created() {
    this.findCategory(this.city.id, this.$route.params.slug).then(() => {
      this.isNewProducts = true;
    });
  },
  methods: {
    ...mapActions(useCategoryStore, ["findCategory"]),
  },
  watch: {
    city(newCity) {
      this.findCategory(newCity.id, this.$route.params.slug);
    },
  },
  components: { BaseLoader, TheAside, ProductCard, ThePageTitle },
};
</script>

<template>
  <template v-if="isNewProducts">
    <ThePageTitle :title="category.name">
      <RouterLink :to="{ name: 'home' }">
        <i class="h1__icon icon-arrow-left"></i>
      </RouterLink>
    </ThePageTitle>
    <div class="container category">
      <aside class="category__aside">
        <TheAside
          :subcategories="category.children"
          :slug="$route.params.slug"
        />
      </aside>
      <main v-if="isNewProducts" class="category__main">
        <ProductCard v-for="product in products" :="product" />
      </main>
    </div>
  </template>
  <BaseLoader v-else />
</template>

<style>
.h1__icon {
  background-color: #000;
  color: #fff;
  padding: 16px;
  border-radius: 50%;
  font-size: 14px;
  cursor: pointer;
}
.category {
  display: grid;
  gap: 34px;
  grid-template-columns: 240px 1fr;
}

.category__main {
  display: grid;
  grid-template-columns: repeat(auto-fill, 276px);
  justify-content: center;
  gap: 24px;
}
</style>
