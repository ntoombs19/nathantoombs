<template>
  <h1>{{ article?.title }}</h1>
  <p>Written by Nathan Toombs on {{ new Date(article?.publishedAt).toDateString() }}</p>
  <NuxtImg fit="inside" :src="`http://127.0.0.1:1337${article?.mainImage?.data?.attributes?.url}`" :alt="article?.mainImage?.data?.attributes?.alternativeText" width="1000" />
  <article v-html="article?.content" />
</template>

<script lang="ts" setup>
const route = useRoute()
import { GET_ARTICLE_BY_SLUG } from "~/graphql/articles";
const { data } = await useAsyncQuery(GET_ARTICLE_BY_SLUG, { slug: route.params.slug })
const article = data.value?.articles?.data[0].attributes
</script>
