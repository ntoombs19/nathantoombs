import getAllArticles from "./getAllArticles";
import getArticleBySlug from "./getArticleBySlug.js";
import { graphql } from "~/types/gql";

const GET_ALL_ARTICLES = graphql(getAllArticles)
const GET_ARTICLE_BY_SLUG = graphql(getArticleBySlug)

export {
    GET_ALL_ARTICLES,
    GET_ARTICLE_BY_SLUG,
}