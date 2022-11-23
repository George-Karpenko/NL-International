<script>
import { mapState, mapActions } from "pinia";
import { useCategoryStore, useCityStore } from "@/stores";
import TheAside from "../components/TheAside.vue";
import ProductCard from "../components/ProductCard.vue";
import ThePageTitle from "../components/ThePageTitle.vue";
export default {
  props: {
    categorySlug: {
      type: String,
      required: true,
    },
    subcategorySlug: {
      type: String,
      required: true,
    },
  },
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
    "city.id"(newCityId) {
      this.findCategory(newCityId, this.categorySlug);
    },
  },
  created() {
    this.findCategory(this.city.id, this.categorySlug).then(() => {
      this.products = this.categoryProducts.filter((product) => {
        return product.tags.filter((tag) => tag.slug === this.subcategorySlug)
          .length;
      });
    });
  },
  beforeUpdate() {
    this.products = this.categoryProducts.filter((product) => {
      return product.tags.filter((tag) => tag.slug === this.subcategorySlug)
        .length;
    });
  },
  components: { TheAside, ProductCard, ThePageTitle },
};
</script>

<template>
  <ThePageTitle :title="category.name" />
  <div class="container">
    <div class="subcategory row">
      <TheAside
        class="subcategory__aside"
        :subcategories="category.children"
        :slug="categorySlug"
      />
      <main class="subcategory__main">
        <ProductCard v-for="product in products" :product="product" />
      </main>
    </div>
  </div>
</template>

<style>
.subcategory {
  display: grid;
  gap: 34px;
  grid-template-columns: auto;
  margin-bottom: 194px;
}

.subcategory__main {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
  justify-content: center;
  gap: 24px;
}
@media (min-width: 700px) {
  .subcategory {
    grid-template-columns: 240px 1fr;
  }
}
</style>
