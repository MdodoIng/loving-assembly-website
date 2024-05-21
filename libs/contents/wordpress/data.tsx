import { API_URL, WORDPRESS_AUTH_REFRESH_TOKEN } from "./clinet";
import {
  contactUsQuery,
  homeQuery,
  kidsOfExcellenceQuery,
  manOfValourQuery,
  ministriesQuery,
  teamPageQuery,
  teamsQuery,
} from "./queries";

async function fetchApi(query = "", { variables }: Record<string, any> = {}) {
  const headers: any = { "Content-Type": "application/json" };

  if (WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers["Authorization"] = `Bearer ${WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    cache: "no-store",
  });
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPageContent(
  id:
    | "home"
    | "kids-of-excellence"
    | "man-of-valour"
    | "contact-us"
    | "teams"
    | "team-page"
) {
  const query = {
    home: homeQuery,
    "kids-of-excellence": kidsOfExcellenceQuery,
    "man-of-valour": manOfValourQuery,
    "contact-us": contactUsQuery,
    teams: teamsQuery,
    "team-page": teamPageQuery,
  };
  const data = await fetchApi(query[id], { variables: {} });
  return data;
}

export async function getMinistriesPageContentBySlug(slug: string) {
  const data = await fetchApi(ministriesQuery, {
    variables: { slug },
  });
  return data;
}
