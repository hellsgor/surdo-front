import { strapiConfig } from '@/config/strapi';

import { handleGraphQLResponse } from './lib/handleGraphQLResponse';

export async function client<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  try {
    const response = await fetch(strapiConfig.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
      next: { tags: ['strapi'] },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    handleGraphQLResponse(result);
    return result.data as T;
  } catch (error) {
    console.error(`GraphQL fetch error [${strapiConfig.API_URL}]:`, error);
    throw error;
  }
}
