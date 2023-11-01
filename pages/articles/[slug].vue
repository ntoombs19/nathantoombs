<template>
  <pre>{{response}}</pre>
</template>

<script>
import {GET_ALL_ARTICLES} from "~/graphql/queries.js";

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