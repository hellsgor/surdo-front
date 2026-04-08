const urlVar = process.env.NODE_ENV === "production" ? "STRAPI_PROD_URL" : "STRAPI_DEV_URL";
const BASE_URL = process.env[urlVar];
const GRAPHQL_PATH = process.env.GRAPHQL_PATH;

if (!BASE_URL) throw new Error(`Missing env variable: ${urlVar}`);
if (!GRAPHQL_PATH) throw new Error("Missing env variable: GRAPHQL_PATH");
export const strapiConfig = {
    API_URL: BASE_URL + GRAPHQL_PATH,
    MEDIA_URL: BASE_URL,
};

export function toAbsoluteUrl(url: string | null | undefined): string | null {
    if (!url) return null;
    if (url.startsWith("http")) return url;
    return strapiConfig.MEDIA_URL + url;
}
