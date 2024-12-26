import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { Document } from '@contentful/rich-text-types';

interface RichTextProps {
  content: Document;
}

export function RichText({ content }: RichTextProps) {
  // This options object gives you fine-grained control over how each node type is rendered
  const options = {
    renderMark: {
      // Custom rendering for text marks (bold, italic, etc.)
      [MARKS.BOLD]: (text: React.ReactNode) => (
        <strong className="font-bold">{text}</strong>
      ),
      [MARKS.ITALIC]: (text: React.ReactNode) => (
        <em className="italic">{text}</em>
      ),
      [MARKS.CODE]: (text: React.ReactNode) => (
        <code className="bg-gray-100 rounded px-1">{text}</code>
      ),
    },
    renderNode: {
      // Custom rendering for block-level nodes
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <p className="mb-4">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
        <h1 className="text-3xl font-bold mb-4">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
        <h2 className="text-2xl font-bold mb-3">{children}</h2>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
        <ul className="list-disc ml-6 mb-4">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
        <ol className="list-decimal ml-6 mb-4">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
        <li className="mb-1">{children}</li>
      ),
      // Handle embedded assets (like images)
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { url, title, width, height } = node.data.target.fields;
        return (
          <img
            src={url}
            alt={title}
            width={width}
            height={height}
            className="my-4"
          />
        );
      },
      // Handle hyperlinks
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
        
          href={node.data.uri}
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
  };

  return <>{documentToReactComponents(content, options)}</>;
}