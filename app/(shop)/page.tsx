import { revalidateTag } from "next/cache";
import Features from "../components/features";
import PageContent from "../components/page-content";
import { BASE_URL } from "../lib/constants/baseURL";
import { Suspense } from "react";

async function fetchPageInfo(): Promise<Page> {
  const res = await fetch(`${BASE_URL}/page?url_key=/&type=json`, {
    cache: "reload",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch dat page");
  }
  return res.json() as Promise<Page>;
}
export default async function Home() {
  const content = fetchPageInfo();
  revalidateTag;
  return (
    <>
      <Suspense fallback="loading...">
        <PageContent page={content} />
      </Suspense>
      <Features />
    </>
  );
}
