import {graphql} from "~/types/gql";

export default graphql(`
    query getArticleBySlug($slug: String) {
        articles(filters:{slug:{eq:$slug}}) {
            data {
                attributes {
                    title
                    summary
                    mainImage {
                        data {
                            attributes {
                                alternativeText
                                width
                                height
                                url
                            }
                        }
                    }
                    content
                    seo {
                        metaTitle
                        metaDescription
                        metaImage {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                        keywords
                        metaRobots
                    }
                    publishedAt
                    updatedAt
                }
            }
        }
    }`)
