import { BASE_URL } from "../../lib/constants/baseURL";

async function getSearchData(query: string): Promise<any> {
  const url = new URL(BASE_URL + "/search");
  url.searchParams.set("q", query);
  url.searchParams.set("product_limit", "5");
  url.searchParams.set("category_limit", "5");
  url.searchParams.set("type", "product_category");
  const res = await fetch(url.toString(), { cache: "no-store" });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function Search({ searchParams }: { searchParams: { q: string } }) {
  const data = await getSearchData(searchParams.q);

  console.log(data);

  return <div>Search</div>;
}
export default Search;
