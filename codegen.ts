import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: `${process.env.STRAPI_URL}${process.env.STRAPI_GRAPHQL_ENDPOINT}`,
    documents: 'graphql/**/*.js',
    generates: {
        './types/gql/': {
            plugins: ["typescript"],
            preset: 'client',
            config: {
                useTypeImports: true
            },

        }
    },
};

export default config;