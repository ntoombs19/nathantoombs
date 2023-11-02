<template>
  <h1>Articles</h1>
  <ul>
    <li v-for="article in articles" :key="article.id">
      <NuxtLink :to="`/articles/${article.attributes?.slug}`">{{ article.attributes.title }}</NuxtLink>
    </li>
  </ul>
  <ol>
    <li v-for="(key) in pageCount" :key="key">
      <NuxtLink :to="`/articles?page=${key}`">{{ key }}</NuxtLink>
    </li>
  </ol>
</template>

<script lang="ts" setup>
import {GET_ALL_ARTICLES} from "~/graphql/articles";

const {page} = useRoute().query

const {data} = await useAsyncQuery(GET_ALL_ARTICLES, {
  pagination: {page: Number(page ?? 1), pageSize: 10},
  sort: 'publishedAt:desc'
})
const articles = data.value?.articles?.data
const pageCount = data.value?.articles?.meta?.pagination.pageCount
</script>
<script lang="ts">
export default {
  watch: {
    '$route.query.page'(to: string, from: string) {
      console.log('Query parameters changed: ', to, from)
      this.$router.go({query: {page: to}})
    },
  }
}
</script>