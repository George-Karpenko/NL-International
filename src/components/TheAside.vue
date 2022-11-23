<script>
export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
    subcategories: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <aside class="aside">
    <ul class="aside__list">
      <RouterLink :to="{ name: 'category', params: { slug } }">
        <li class="aside__item">Все продукты</li>
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
        <li class="aside__item">{{ subcategory.name }}</li>
      </RouterLink>
    </ul>
  </aside>
</template>

<style>
.aside__list {
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
}
.aside__item {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 8px 12px;
  border-bottom: 1px solid #e9eef3;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
.router-link-active .aside__item {
  background: #e9eef3;
  color: #202648;
}
</style>
