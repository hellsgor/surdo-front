interface GraphQLError {
  message: string;
}

interface GraphQLResponse {
  errors?: GraphQLError[];
  data?: unknown;
}

export function handleGraphQLResponse({ errors, data }: GraphQLResponse): void {
  if (errors && errors.length > 0) {
    const errorMessages = errors.map((err) => err.message).join('; ');
    throw new Error(`GraphQL errors: ${errorMessages}`);
  }

  if (!data) {
    throw new Error('No data received from GraphQL');
  }
}
