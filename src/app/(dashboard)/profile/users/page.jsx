import { Suspense } from "react";
import queryString from "query-string";
import Spinner from "@/ui/Spinner";
import PostsTable from "../posts/_/components/PostsTable";
import Pagination from "@/ui/Pagination";
import { getAllUsersApi } from "@/services/authService";

async function Page() {

  const data = await getAllUsersApi();
  console.log(data);
  
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center ">
        <h1>لیست کاربران </h1>
        {/* <Search /> */}
        {/* <CreatePost /> */}
      </div>
      <Suspense fallback={<Spinner />} >
        <PostsTable  />
      </Suspense>
      {/* <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div> */}
    </div>
  );
}
export default Page;
