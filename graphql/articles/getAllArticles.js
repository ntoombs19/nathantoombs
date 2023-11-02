import { gql } from "graphql-tag"

export default `
    query getAllArticles($pagination: PaginationArg) {
        articles(pagination: $pagination) {
            data {
                attributes {
                    mainImage {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                    content
                    publishedAt
                    category {
                        data {
                            attributes {
                                title
                            }
                        }
                    }
                    title
                    summary
                    thumbnailImage {
                        data {
                            id
                            attributes {
                                name
                                alternativeText
                                caption
                                width
                                height
                                formats
                                size
                                url
                            }
                        }
                    }
                    slug
                    updatedAt
                    isFeatured
                }
                id
            }
            meta {
                pagination {
                    page
                    pageSize
                    pageCount
                    total
                }
            }
        }
    }`
