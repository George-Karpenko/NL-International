<script>
import { mapState, mapActions } from "pinia";
import { useCategoryStore, useCityStore } from "@/stores";
import BaseLoader from "../components/BaseLoader.vue";
import TheAside from "../components/TheAside.vue";
import ProductCard from "../components/ProductCard.vue";
import ThePageTitle from "../components/ThePageTitle.vue";
export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isNewProducts: false,
    };
  },
  computed: {
    ...mapState(useCategoryStore, ["category", "products"]),
    ...mapState(useCityStore, ["city"]),
    isAside() {
      return this.category.children.length >= 2;
    },
  },
  created() {
    this.findCategory(this.city.id, this.slug).then(() => {
      this.isNewProducts = true;
    });
  },
  methods: {
    ...mapActions(useCategoryStore, ["findCategory"]),
  },
  watch: {
    "city.id"(newCityId) {
      this.findCategory(newCityId, this.slug);
    },
  },
  components: { BaseLoader, TheAside, ProductCard, ThePageTitle },
};
</script>

<template>
  <template v-if="isNewProducts">
    <ThePageTitle :title="category.name" />
    <div class="container">
      <div :class="!isAside && 'category__no-aside'" class="category row">
        <TheAside
          v-if="isAside"
          class="category__aside"
          :subcategories="category.children"
          :slug="slug"
        />
        <main v-if="isNewProducts" class="category__main">
          <ProductCard v-for="product in products" :product="product" />
        </main>
      </div>
    </div>
  </template>
  <BaseLoader v-else />
</template>

<style>
.category {
  display: grid;
  gap: 34px;
  grid-template-columns: 1fr;
  margin-bottom: 194px;
}

.category__no-aside {
  grid-template-columns: 1fr !important;
}

.category__main {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
  justify-content: center;
  gap: 24px;
}
@media (min-width: 700px) {
  .category {
    grid-template-columns: 240px 1fr;
  }
}
</style>
