import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:1337/graphql',
  documents: 'src/services/graphql/queries/**/*.ts',
  generates: {
    'src/services/graphql/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        avoidOptionals: true,
        enumsAsTypes: true,
      },
    },
  },
};

export default config;
