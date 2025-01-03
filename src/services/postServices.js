import http from "./httpService";

export async function getPostBySlug(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
  );
  const { data } = await res.json();
  const { post } = data || {};
  return post;
}

export async function getPosts(queries, options) {
  if (typeof queries == "string") {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queries}`,
      options
    );

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    const { data } = await res.json();
    const { posts = [] } = data || {};
    return posts;
  }
}

export async function likePostApi(postId) {
  return (await http.post(`/post/like/${postId}`)).data.data;
}

export async function bookmarkPostApi(postId) {
  return (await http.post(`/post/bookmark/${postId}`)).data.data;
}
