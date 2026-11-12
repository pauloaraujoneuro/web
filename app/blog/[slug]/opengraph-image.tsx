import { OG_CONTENT_TYPE, OG_SIZE, renderFigureOgImage, renderOgImage } from "@/app/lib/og";
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
  // The first teaching figure the article shows; the doctor's photo when it has none.
  const figure = post?.figures[0]?.src;
  if (figure) return renderFigureOgImage(figure);

  return renderOgImage({
    eyebrow: "Conteúdo educativo",
    title: post?.title ?? "Blog e conteúdo educativo",
    description: post?.dek,
  });
}
