import { defineStore } from "pinia";
import api from "@/api";

export const useCategoryStore = defineStore("category", {
  state: () => {
    return {
      categories: [],
      products: [],
      category: {},
    };
  },
  actions: {
    async allCategories(cityID) {
      const response = await api.get("/menutags/", {
        params: {
          city_id: cityID,
        },
      });
      this.categories = response.data.tags;
    },
    async findCategory(cityID, slug) {
      if (!this.categories.length) {
        await this.allCategories(cityID);
      }
      if (this.category.slug === slug) return;
      this.category = this.categories.find(
        (category) => category.slug === slug
      );
      const response = await api.get(`/menutags/${slug}`, {
        params: {
          city_id: cityID,
        },
      })
      this.products = response.data.products;
    },
  },
});
