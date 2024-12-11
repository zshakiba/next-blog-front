import Link from "next/link";
import React from "react";

async function BlogList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();
  console.log(posts);
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default BlogList;
