import { Metadata } from "next";
import { BASE_URL } from "../../lib/constants/baseURL";
import InfiniteScrollComponent from "../../components/infinit-scroll-component";
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const query = searchParams.q;
  return {
    title: `فروشگاه اینترنتی آترامارت | جستجو برای ${query}`,
  };
}

interface Params {
  product_limit: string;
  category_limit: string;
  type: string;
  q: string;
  sort: string;
  attributes: string;
}

async function getSearchData({
  category_limit,
  product_limit,
  q,
  type,
  sort,
  attributes,
}: Params): Promise<Answers | any> {
  const params = {
    product_limit,
    category_limit,
    type,
    q,
    sort,
    attributes,
  };

  const res = await fetch(`${BASE_URL}/search?${new URLSearchParams(params)}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function Search({ searchParams }: Props) {
  const data = await getSearchData({
    category_limit: searchParams.category_limit?.toString() || "10",
    product_limit: searchParams.product_limit?.toString() || "10",
    q: searchParams.q?.toString() || "",
    type: "product_category",
    sort: searchParams.sort?.toString() || "",
    attributes: searchParams.attributes?.toString() || "",
  });

  return <InfiniteScrollComponent initialItems={data.response.products} />;
}
export default Search;
