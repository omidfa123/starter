import { notFound } from "next/navigation";
import { BASE_URL } from "../../../lib/constants/baseURL";

async function getCategories(): Promise<any> {
  const res = await fetch(
    `${BASE_URL}/catalog/categories/detail?id=5&page=2&per_page=20`,
    {
      cache: "reload",
    }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json() as Promise<any>;
}

async function Category({ params }: { params: { id: string[] } }) {
  if (!params.id) {
    notFound();
  }
  const categories = await getCategories();

  console.log(categories);

  return <div>Category</div>;
}
export default Category;
