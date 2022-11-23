import { defineStore } from "pinia";
import api from "@/api";

export const useCityStore = defineStore("city", {
  state: () => {
    return {
      city: JSON.parse(localStorage.getItem("city")) || false,
      cities: [],
    };
  },
  actions: {
    async allCities() {
      const response = await await api.get("/city/", {
        params: {
          term: "sas",
          country: "ru",
        },
      });
      this.cities = response.data.data;
      if (this.city) {
        return;
      }
      localStorage.setItem("city", JSON.stringify(this.cities[0]));
      this.city = this.cities[0];
    },
    updateCity(value) {
      localStorage.setItem("city", JSON.stringify(value));
      this.city = value;
    }
  },
});
