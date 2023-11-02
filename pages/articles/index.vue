<template>
  <pre>{{ data.articles.data }}</pre>
  <h1>Articles</h1>
  <li v-for="article in data.articles?.data" :key="article.id">
    <NuxtLink :to="`/articles/${article.attributes?.slug}`">{{ article.attributes.title }}</NuxtLink>
  </li>

</template>

<script lang="ts" setup>
import { GET_ALL_ARTICLES } from "~/graphql/articles";
const { data } = await useAsyncQuery(GET_ALL_ARTICLES, { pagination: { page: 1 }})
</script>