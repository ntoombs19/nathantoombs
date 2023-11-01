<template>
  <pre>{{ articles }}</pre>
  <ul>
    <li v-for="article in articles.data" :key="article.id">
      <NuxtLink :to="`/articles/${article.attributes.slug}`">{{ article.attributes.title }}</NuxtLink>
    </li>
  </ul>
</template>

<script>
import { GET_ALL_ARTICLES } from "~/graphql/queries";

export default {
  data() {
    return {
      articles: []
    }
  },
  apollo: {
    articles: {
      prefetch: true,
      query: GET_ALL_ARTICLES,
    }
  }
}
</script>