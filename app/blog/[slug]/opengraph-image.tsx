import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/app/lib/og";
import { getPublishedPost, getPublishedPosts } from "@/app/lib/blog";

export const alt = "Artigo";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPublishedPost(slug);

  return renderOgImage({
    eyebrow: "Conteúdo educativo",
    title: post?.title ?? "Blog e conteúdo educativo",
    description: post?.dek,
  });
}
