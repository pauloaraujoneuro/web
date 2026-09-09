import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { BlogFrontmatter, BlogPost } from "@/content/types";
import { TREATMENTS } from "@/app/lib/treatments";
import {
  validatePosts,
  validateTreatmentPostReferences,
} from "@/app/lib/content-validation";

const postsDirectory = path.join(process.cwd(), "content", "posts");

function slugifyHeading(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function extractHeadings(body: string): BlogPost["headings"] {
  return body
    .split("\n")
    .flatMap((line) => {
      const match = /^(##|###)\s+(.+)$/.exec(line);
      if (!match) return [];
      return [
        {
          id: slugifyHeading(match[2]),
          text: match[2],
          level: match[1].length as 2 | 3,
        },
      ];
    });
}

function parsePost(filename: string): BlogPost {
  const raw = fs.readFileSync(path.join(postsDirectory, filename), "utf8");
  const { data, content } = matter(raw);
  return {
    ...(data as BlogFrontmatter),
    publishDate:
      data.publishDate instanceof Date
        ? data.publishDate.toISOString().slice(0, 10)
        : String(data.publishDate),
    lastModified:
      data.lastModified instanceof Date
        ? data.lastModified.toISOString().slice(0, 10)
        : String(data.lastModified),
    body: content.trim(),
    headings: extractHeadings(content),
  };
}

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) return [];
  const posts = fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".md"))
    .toSorted()
    .map(parsePost);
  validatePosts(posts, TREATMENTS);
  validateTreatmentPostReferences(TREATMENTS, posts);
  return posts;
}

/** Articles with a real page: rendered, listed on the hub and linked. */
export function getVisiblePosts() {
  return getAllPosts()
    .filter((post) => post.state === "published")
    .toSorted(
      (a, b) =>
        b.publishDate.localeCompare(a.publishDate) ||
        a.order - b.order ||
        a.slug.localeCompare(b.slug),
    );
}

export function getVisiblePost(slug: string) {
  return getVisiblePosts().find((post) => post.slug === slug);
}

/** The discovery surface: only these reach the sitemap and llms.txt. */
export function getPublishedPosts() {
  return getVisiblePosts().filter((post) => post.indexable);
}

export function getPublishedPost(slug: string) {
  return getPublishedPosts().find((post) => post.slug === slug);
}
