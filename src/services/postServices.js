export async function getPostBySlug(slug) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
    );
    const { data } = await res.json();
    const { post } = data || {};
    return post;
  }
  