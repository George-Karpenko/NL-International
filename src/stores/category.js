import { defineStore } from "pinia";
import * as category from "@/api/category";

export const useCategoryStore = defineStore("category", {
  state: () => {
    return {
      categories: [],
      products: [],
      category: {},
    };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    async allCategories(cityID) {
      this.categories = await category.allCategories(cityID);
    },
    async findCategory(cityID, slug) {
      if (!this.categories.length) {
        await this.allCategories(cityID);
      }
      if (this.category.slug === slug) return;
      this.category = this.categories.find(
        (category) => category.slug === slug
      );
      this.products = (await category.findCategory(cityID, slug)).products;
    },
  },
});
