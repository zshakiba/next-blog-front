import React, { Suspense } from "react";
import CardWrapper from "./_/components/CardWrapper";
import Fallback from "@/ui/Fallback";
import LatestPosts from "./_/components/LatestPosts";

async function Profile() {
  return (
    <>
      <h1 className="text-xl mb-8 text-secondary-700 ">داشبورد</h1>
      <Suspense fallback={<Fallback />}>
        <CardWrapper />
      </Suspense>
      <h2 className="text-xl mb-8 text-secondary-600">آخرین پست ها</h2>
      <Suspense fallback={<Fallback />}>
        <LatestPosts />
      </Suspense>
    </>
  );
}

export default Profile;
