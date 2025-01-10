"use server"


import setCookiesOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import { getAllUsersApi } from "./authService";
import { getAllCommentsApi } from "./commentService";
import {getAllPostsApi} from "./postServices"

export async function fetchCardData() {
  const cookieStore =await cookies();
  const options = setCookiesOnReq(cookieStore);
  try {
    const data = await Promise.all([
      getAllUsersApi(options),
      getAllPostsApi(),
      getAllCommentsApi(options),
    ]);

    const numberOfUsers = Number(data[0].users.length ?? "0");
    const numberOfPosts = Number(data[1].posts.length ?? "0");
    const numberOfComments = Number(data[2].commentsCount ?? "0");

    return {
      numberOfPosts,
      numberOfUsers,
      numberOfComments,
    };
  } catch (error) {
    console.error("خطا", error.response.data.message);
    throw new Error("خطا در بارگذاری اطلاعات");
  }
}