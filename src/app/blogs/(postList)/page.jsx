import React, { Suspense } from "react";
import PostList from "../_components/PostList";
import Spinner from "@/ui/Spinner";
import { cookies } from "next/headers";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";

async function BlogList() {
  const cookieStore = await cookies();
  const options = setCookiesOnReq(cookieStore);
  const posts = await getPosts(options);
  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
}

export default BlogList;
