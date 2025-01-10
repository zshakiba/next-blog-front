import { fetchCardData } from "@/services/data";
import React, { Suspense } from "react";
import { Card } from "./_/components/Cards";
import PostList from "app/(blogs)/blogs/_components/PostList";
import { getAllPostsApi } from "@/services/postServices";
import { cookies } from "next/headers";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import PostsTable from "./posts/page";
import CardWrapper from "./_/components/CardWrapper";
import Fallback from "@/ui/Fallback";
import LatestPosts from "./_/components/LatestPosts";

async function Profile() {
  return (
    <>
      <Suspense fallback={<Fallback />}>
        <CardWrapper />
      </Suspense>

      <Suspense fallback={<Fallback />}>
        <LatestPosts />
      </Suspense>
    </>
  );
}

export default Profile;
