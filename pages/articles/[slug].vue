<template>
  <pre>{{ data.articles.data }}</pre>
</template>

<script lang="ts" setup>
const route = useRoute()
import { GET_ARTICLE_BY_SLUG } from "~/graphql/articles";
const { data } = await useAsyncQuery(GET_ARTICLE_BY_SLUG, { slug: route.params.slug })
</script>
