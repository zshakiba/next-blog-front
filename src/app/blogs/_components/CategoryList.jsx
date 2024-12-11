import Link from "next/link";

async function CategoryList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();
  // console.log(categories);
  const listItems = categories.map((cat) => <li key={cat._id}>{cat.title}</li>);
  return <ul>{listItems}</ul>;
}
export default CategoryList;
