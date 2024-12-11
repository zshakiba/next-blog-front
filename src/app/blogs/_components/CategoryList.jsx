import Link from "next/link";

async function CategoryList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();
  // console.log(categories);

  return (
    <ul className="space-y-4">
      {categories.map((category) => (
        <li key={category.id}>
          <Link href={`/blogs/${category.slug}`}>{category.title}</Link>
        </li>
      ))}
    </ul>
  );
}
export default CategoryList;
