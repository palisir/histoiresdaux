import { createClient } from "contentful";
import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

interface ITypePostFields {
  title: EntryFieldTypes.Symbol;
  content: EntryFieldTypes.RichText;
  publishDate: EntryFieldTypes.Date;
  slug: EntryFieldTypes.Symbol;
}

type TypePostSkeleton = EntrySkeletonType<ITypePostFields, "post">;
type TypePost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypePostSkeleton, Modifiers, Locales>;

interface ITypeStaticPageFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  content: EntryFieldTypes.RichText;
  publishedDate: EntryFieldTypes.Date;
  metaTitle?: EntryFieldTypes.Symbol;
  metaDescription?: EntryFieldTypes.RichText;
}

type TypeStaticPageSkeleton = EntrySkeletonType<
  ITypeStaticPageFields,
  "static-page"
>;
type TypeStaticPage<
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

    if (response.items.length === 0) {
      return null;
    }

    return response.items[0];
  } catch (error) {
    console.error("Error fetching static page:", error);
    throw error;
  }
}
