<script>
export default {
  props: {
    slug: {
      type: String,
      default: "",
    },
    subcategories: {
      type: Array,
      default: [],
    },
  },
};
</script>

<template>
  <ul class="nav">
    <RouterLink :to="{ name: 'category', params: { slug } }">
      <li class="nav__item">Все продукты</li>
    </RouterLink>
    <RouterLink
      v-for="subcategory in subcategories"
      :to="{
        name: 'subcategory',
        params: {
          categorySlug: slug,
          subcategorySlug: subcategory.slug,
        },
      }"
    >
      <li class="nav__item">{{ subcategory.name }}</li>
    </RouterLink>
  </ul>
</template>

<style>
.nav {
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
}
.nav__item {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 8px 12px;
  border-bottom: 1px solid #e9eef3;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
.router-link-active .nav__item {
  background: #e9eef3;
}
</style>
