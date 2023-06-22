"use server";

import { redirect } from "next/navigation";
import { BASE_URL } from "../lib/constants/baseURL";
import { URL } from "url";

export async function startSearch(query: string) {
  console.log("s");

  const params = {
    q: query,
    type: "product_category",
    product_limit: "5",
    category_limit: "5",
  };
  const searchParams = new URLSearchParams(params).toString();
  const url = BASE_URL + "/search?" + searchParams;

  console.log(url);

  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export async function submitSearch(url) {
  redirect("/search?q=" + encodeURIComponent(url.get("q")));
}
