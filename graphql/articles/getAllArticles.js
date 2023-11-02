import { graphql } from "~/types/gql";

export default graphql(`
    query getAllArticles($pagination: PaginationArg, $sort: [String]) {
        articles(pagination: $pagination, sort: $sort) {
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
    }`)