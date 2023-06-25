import { Metadata } from "next";
import { BASE_URL } from "../../lib/constants/baseURL";
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
}

async function getSearchData({
  category_limit,
  product_limit,
  q,
  type,
  sort,
}: Params): Promise<any> {
  const params = {
    product_limit,
    category_limit,
    type,
    q,
    sort,
  };

  const res = await fetch(
    `${BASE_URL}/search?${new URLSearchParams(params)}`,
    {}
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function Search({ searchParams }: Props) {
  const data = await getSearchData({
    category_limit: searchParams.category_limit?.toString() || "10",
    product_limit: searchParams.product_limit?.toString() || "20",
    q: searchParams.q?.toString() || "",
    type: searchParams.type?.toString() || "product_category",
    sort: searchParams.sort?.toString() || "",
  });

  console.log(data);
  return (
    <div className="  flex-1 bg-red-500">{JSON.stringify(data, null, 2)}</div>
  );
}
export default Search;
