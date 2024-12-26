import { createClient } from "contentful";
import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface ITypePostFields {
  title: EntryFieldTypes.Symbol;
  content: EntryFieldTypes.RichText;
  publishDate: EntryFieldTypes.Date;
  slug: EntryFieldTypes.Symbol;
}

export type TypePostSkeleton = EntrySkeletonType<ITypePostFields, "post">;
export type TypePost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypePostSkeleton, Modifiers, Locales>;

export interface ITypeStaticPageFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  content: EntryFieldTypes.RichText;
  publishedDate: EntryFieldTypes.Date;
  metaTitle?: EntryFieldTypes.Symbol;
  metaDescription?: EntryFieldTypes.RichText;
}

export type TypeStaticPageSkeleton = EntrySkeletonType<
  ITypeStaticPageFields,
  "static-page"
>;
export type TypeStaticPage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeStaticPageSkeleton, Modifiers, Locales>;

const client = createClient({
  space: process.env.VITE_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN!,
});

// For both static pages and posts
const CONTENT_GRAPHQL_FIELDS = `
  slug
  title
  publishDate
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
`;

async function fetchGraphQL(query: string): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.VITE_CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.VITE_CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["posts"] },
    }
  ).then((response) => response.json());
}

function extractPost(fetchResponse: any): any {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.postCollection?.items;
}

export async function getAllPosts() {
  try {
    const response = await client.getEntries<TypePostSkeleton>({
      content_type: "post",
      limit: 12,
      include: 1,
      order: ["-fields.publishDate"],
    });

    return response.items;
  } catch (error) {
    console.error("Error fetching static page:", error);
    throw error;
  }
}

export async function getStaticPageBySlug(slug: string) {
  try {
    const response = await client.getEntries<TypeStaticPageSkeleton>({
      content_type: "static-page",
      "fields.slug": slug,
      limit: 1,
      include: 1,
    });

    if (response.items.length === 0) {
      return null;
    }

    return response.items[0];
  } catch (error) {
    console.error("Error fetching static page:", error);
    throw error;
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const response = await client.getEntries<TypePostSkeleton>({
      content_type: "post",
      "fields.slug": slug,
      limit: 1,
      include: 1,
    });

    // Return null if no entry is found
    if (response.items.length === 0) {
      return null;
    }

    return response.items[0];
  } catch (error) {
    console.error("Error fetching static page:", error);
    throw error;
  }
}
