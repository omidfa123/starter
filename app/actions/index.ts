"use server";

import { redirect } from "next/navigation";
import { BASE_URL } from "../lib/constants/baseURL";

export async function startSearch(query: string) {
  const url = new URL(BASE_URL + "/search");
  url.searchParams.set("q", query);
  url.searchParams.set("type", "product_category");

  const res = await fetch(url.toString());
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}
