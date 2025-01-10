import React from "react";
import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { getAllPostsApi } from "@/services/postServices";
import queryString from "query-string";

async function BlogPage({ searchParams }) {
  const search = await searchParams;
  const queries = `${queryString.stringify(search)}`;

  const cookieStore = await cookies();
  const options = setCookiesOnReq(cookieStore);
  const {posts} = await getAllPostsApi(queries, options);
  const searchText=search.search


  return (
    <>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? " هیچ پستی با این مشخصات پیدا نشد "
            : `نشان دادن ${posts.length} نتیجه برای`}
          <span className="font-bold">&quot;{searchText}&quot;</span>
        </p>
      ) : null}
      <PostList posts={posts} />
    </>
  );
}

export default BlogPage;
