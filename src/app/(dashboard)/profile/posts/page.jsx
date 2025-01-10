import { Suspense } from "react";
import PostsTable from "./_/components/PostsTable";
import Spinner from "@/ui/Spinner";
import { CreatePost } from "./_/components/Buttons";
import Search from "@/ui/Search";
import queryString from "query-string";
import { getAllPostsApi } from "@/services/postServices";
import Pagination from "@/ui/Pagination";

async function Page({ searchParams }) {
  const query = queryString.stringify(searchParams);
  const { totalPages } = await getAllPostsApi(query);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center ">
        <h1>لیست پست ها </h1>
        <Search />
        <CreatePost />
      </div>
      <Suspense fallback={<Spinner />} key={query}>
        <PostsTable query={query} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
export default Page;
