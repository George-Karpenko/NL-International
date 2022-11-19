<script>
import { mapState } from "pinia";
import { useCategoryStore, useCityStore } from "@/stores";
import BaseLoader from "../components/BaseLoader.vue";
import ThePageTitle from "../components/ThePageTitle.vue";
export default {
  computed: {
    ...mapState(useCategoryStore, ["categories"]),
    ...mapState(useCityStore, ["city"]),
  },
  components: { BaseLoader, ThePageTitle },
};
</script>

<template>
  <ThePageTitle title="Категории товаров" />
  <main class="container">
    <div v-if="categories.length" class="cardCategories row">
      <RouterLink
        v-for="tag in categories"
        class="cardCategory"
        :to="{ name: 'category', params: { slug: tag.slug } }"
      >
        <div
          class="cardCategory__background"
          :style="`background-image: url(${tag.image})`"
        >
          <p class="cardCategory__text" :style="`color: ${tag.text_color}`">
            {{ tag.name }}
          </p>
        </div>
      </RouterLink>
    </div>
    <BaseLoader v-else />
  </main>
</template>

<style>
.cardCategories {
  display: grid;
  grid-template-columns: repeat(auto-fill, 271px);
  gap: 20px;
  justify-content: center;
}
.cardCategory__background {
  display: inline-block;
  width: 100%;
  height: 152px;
  border-radius: 5px;
  background-size: 100% 100%;
}
.cardCategory__text {
  font-size: 24px;
  line-height: 28px;
  margin: 20px;
}
</style>
