import { gql } from 'graphql-tag'
export const GET_ALL_ARTICLES = gql`
    query {
        articles {
            data {
                id
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
    }
`

export const GET_ARTICLE_BY_SLUG = gql`
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
    }
`