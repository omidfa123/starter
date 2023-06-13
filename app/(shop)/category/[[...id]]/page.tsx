import { notFound } from "next/navigation";

function Category({ params }: { params: { id: string[] } }) {
  if (!params.id) {
    notFound();
  }

  return <div>Category</div>;
}
export default Category;
