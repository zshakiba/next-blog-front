import { getPosts } from "@/services/postServices";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import PostList from "app/(blogs)/blogs/_components/PostList";
import { cookies } from "next/headers";
import queryString from "query-string";
import React from "react";

async function Category({ params, searchParams }) {
  const { categorySlug } = await params;
  const  search  = await searchParams;
  
  const queries = `${queryString.stringify(
    search
  )}&categorySlug=${categorySlug}`;
  const cookieStore = await cookies();
  const options = setCookiesOnReq(cookieStore);
  const posts = await getPosts(queries, options);

  return (
    <div>
      {posts.length == 0 ? (
        <p className="text-lg text-secondary-600">
          هیچ پستی در این دسته بندی وجود ندارد
        </p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}

export default Category;
