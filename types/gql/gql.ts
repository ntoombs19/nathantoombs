/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query getAllArticles($pagination: PaginationArg) {\n        articles(pagination: $pagination) {\n            data {\n                attributes {\n                    mainImage {\n                        data {\n                            attributes {\n                                url\n                            }\n                        }\n                    }\n                    content\n                    publishedAt\n                    category {\n                        data {\n                            attributes {\n                                title\n                            }\n                        }\n                    }\n                    title\n                    summary\n                    thumbnailImage {\n                        data {\n                            id\n                            attributes {\n                                name\n                                alternativeText\n                                caption\n                                width\n                                height\n                                formats\n                                size\n                                url\n                            }\n                        }\n                    }\n                    slug\n                    updatedAt\n                    isFeatured\n                }\n                id\n            }\n            meta {\n                pagination {\n                    page\n                    pageSize\n                    pageCount\n                    total\n                }\n            }\n        }\n    }": types.GetAllArticlesDocument,
    "\n    query getArticleBySlug($slug: String) {\n        articles(filters:{slug:{eq:$slug}}) {\n            data {\n                attributes {\n                    title\n                    slug\n                    summary\n                    isFeatured\n                    content\n                    createdAt\n                    updatedAt\n                    publishedAt\n                }\n            }\n        }\n    }": types.GetArticleBySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getAllArticles($pagination: PaginationArg) {\n        articles(pagination: $pagination) {\n            data {\n                attributes {\n                    mainImage {\n                        data {\n                            attributes {\n                                url\n                            }\n                        }\n                    }\n                    content\n                    publishedAt\n                    category {\n                        data {\n                            attributes {\n                                title\n                            }\n                        }\n                    }\n                    title\n                    summary\n                    thumbnailImage {\n                        data {\n                            id\n                            attributes {\n                                name\n                                alternativeText\n                                caption\n                                width\n                                height\n                                formats\n                                size\n                                url\n                            }\n                        }\n                    }\n                    slug\n                    updatedAt\n                    isFeatured\n                }\n                id\n            }\n            meta {\n                pagination {\n                    page\n                    pageSize\n                    pageCount\n                    total\n                }\n            }\n        }\n    }"): (typeof documents)["\n    query getAllArticles($pagination: PaginationArg) {\n        articles(pagination: $pagination) {\n            data {\n                attributes {\n                    mainImage {\n                        data {\n                            attributes {\n                                url\n                            }\n                        }\n                    }\n                    content\n                    publishedAt\n                    category {\n                        data {\n                            attributes {\n                                title\n                            }\n                        }\n                    }\n                    title\n                    summary\n                    thumbnailImage {\n                        data {\n                            id\n                            attributes {\n                                name\n                                alternativeText\n                                caption\n                                width\n                                height\n                                formats\n                                size\n                                url\n                            }\n                        }\n                    }\n                    slug\n                    updatedAt\n                    isFeatured\n                }\n                id\n            }\n            meta {\n                pagination {\n                    page\n                    pageSize\n                    pageCount\n                    total\n                }\n            }\n        }\n    }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getArticleBySlug($slug: String) {\n        articles(filters:{slug:{eq:$slug}}) {\n            data {\n                attributes {\n                    title\n                    slug\n                    summary\n                    isFeatured\n                    content\n                    createdAt\n                    updatedAt\n                    publishedAt\n                }\n            }\n        }\n    }"): (typeof documents)["\n    query getArticleBySlug($slug: String) {\n        articles(filters:{slug:{eq:$slug}}) {\n            data {\n                attributes {\n                    title\n                    slug\n                    summary\n                    isFeatured\n                    content\n                    createdAt\n                    updatedAt\n                    publishedAt\n                }\n            }\n        }\n    }"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;