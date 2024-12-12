import Spinner from "@/ui/Spinner";
import Link from "next/link";
import { Suspense } from "react";

async function CategoryList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();
  const listItems = categories.map((cat) => <li key={cat._id}>{cat.title}</li>);

  return (
    <Suspense fallback={<Spinner />}>
      <ul>{listItems}</ul>
    </Suspense>
  );
}
export default CategoryList;
