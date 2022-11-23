<script>
import { RouterView } from "vue-router";
import { mapActions, mapState } from "pinia";
import { useCategoryStore, useCityStore } from "@/stores";

import BaseModal from "@/components/BaseModal.vue";
import BaseInputSearch from "@/components/BaseInputSearch.vue";
import BaseLoader from "@/components/BaseLoader.vue";
import TheHeader from "@/components/TheHeader.vue";

export default {
  data() {
    return {
      isOpenModal: false,
      cityStore: useCityStore(),
    };
  },
  components: {
    BaseModal,
    BaseInputSearch,
    BaseLoader,
    TheHeader,
  },
  computed: {
    ...mapState(useCityStore, ["cities"]),
    city: {
      get() {
        return useCityStore().city;
      },
      set(city) {
        this.updateCity(city);
      },
    },
  },
  watch: {
    "city.id"(newCityId) {
      this.allCategories(newCityId);
    },
  },
  methods: {
    ...mapActions(useCategoryStore, ["allCategories"]),
    ...mapActions(useCityStore, ["updateCity", "allCities"]),
    openModal() {
      this.isOpenModal = true;
    },
    closeModal() {
      this.isOpenModal = false;
    },
  },
  created() {
    this.allCities().then(() => {
      this.allCategories();
    });
  },
};
</script>

<template>
  <TheHeader @openModal="openModal" :cityName="city.city" />
  <template v-if="city" :class="isOpenModal && 'overflow-hidden'">
    <RouterView />
  </template>
  <BaseLoader v-else />
  <BaseModal v-if="isOpenModal" @closeModal="closeModal">
    <BaseInputSearch
      v-model="city"
      :placeholder="'Например, Санкт-петербург'"
      :labelValue="'Выбор населённого пункта:'"
      :options="cities"
      :keyOption="'label'"
      @update:modelValue="closeModal"
    >
    </BaseInputSearch>
  </BaseModal>
</template>

<style>
.overflow-hidden {
  overflow: hidden;
}
</style>
