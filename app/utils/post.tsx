import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";

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

export const richTextDoc = (content: Document) => {
  const docRenderOptions = {
    preserveWhitespace: true,
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        console.log(node.data.target.fields.file.details);
        const imgProps = node.data.target.fields;
        return (
          <Image
            title={imgProps.title}
            alt={imgProps.description}
            src={`https:${imgProps.file.url}`}
            width={imgProps.file.details.image.width}
            height={imgProps.file.details.image.height}
          />
        );
      },
    },
  };
  return documentToReactComponents(content, docRenderOptions);
};
