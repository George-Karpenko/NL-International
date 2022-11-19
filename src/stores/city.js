import { defineStore } from "pinia";
import * as city from "@/api/city";

export const useCityStore = defineStore("city", {
  state: () => {
    return {
      city: JSON.parse(localStorage.getItem("city")) || false,
      cities: [],
      errors: [],
    };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    async allCities() {
      this.cities = await city.allCities();
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
