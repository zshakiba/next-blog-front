import Spinner from "@/ui/Spinner";
import React from "react";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center">
        <span className="text-lg text-secondary-500">در حال بارگذاری اطلاعات</span>
      <Spinner />
    </div>
  );
}

export default Loading;
