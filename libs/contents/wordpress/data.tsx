import { API_URL, WORDPRESS_AUTH_REFRESH_TOKEN } from "./clinet";
import {
  blogsBySlugQuery,
  blogsQuery,
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
    | "blogs"
    | "blogs-by-slug"
    | "ministries-by-slug",
  slug?: string
) {
  const query = {
    home: homeQuery,
    "kids-of-excellence": kidsOfExcellenceQuery,
    "man-of-valour": manOfValourQuery,
    "contact-us": contactUsQuery,
    teams: teamsQuery,
    "team-page": teamPageQuery,
    blogs: blogsQuery,
    "blogs-by-slug": blogsBySlugQuery,
    "ministries-by-slug": ministriesQuery,
  };
  const data = await fetchApi(query[id], { variables: { slug } });
  return data;
}
