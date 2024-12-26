import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

export const postDateFormat = (date: Date | string) => {
  const dateObject = typeof date === "string" ? new Date(date) : date;

  return dateObject.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const extractExcerpt = (richText: any, maxLength: number = 160) => {
  const plainText = documentToPlainTextString(richText);
  if (plainText.length <= maxLength) return plainText;

  const trimmed = plainText.slice(0, maxLength);
  const lastSpace = trimmed.lastIndexOf(" ");

  return `${trimmed.slice(0, lastSpace)}...`;
};
