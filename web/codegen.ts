import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://api:3000/graphql",
  documents: ["gql/*.gql"],
  generates: {
    "src/gql/graphql.ts": {
      plugins: [
        {
          typescript: {},
        },
        {
          "typescript-operations": {
            documentMode: "documentNode",
            importDocumentNodeExternallyFrom: "@graphql-tag",
          },
        },
        "typescript-react-apollo",
      ],
      config: {
        gqlImport: "graphql-tag",
      },
    },
    "src/gql/graphql.schema.json": {
      plugins: ["introspection"],
      config: {
        minify: true,
      },
    },
  },
};

export default config;
