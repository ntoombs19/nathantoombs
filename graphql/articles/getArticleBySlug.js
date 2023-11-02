import {gql} from "graphql-tag"
const query=  `
    query getArticleBySlug($slug: String) {
        articles(filters:{slug:{eq:$slug}}) {
            data {
                attributes {
                    title
                    slug
                    summary
                    isFeatured
                    content
                    createdAt
                    updatedAt
                    publishedAt
                }
            }
        }
    }`

export default query