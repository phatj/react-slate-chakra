import { Text, Element, Descendant } from 'slate';

type Node = Element | Text;

export const serialize = (node: Node): string => {
  if (Text.isText(node)) {
    let text = node.text;

    if (node.bold) {
      text = `<strong>${text}</strong>`;
    }
    return text;
  }

  const children = node.children.map((n) => serialize(n)).join('');

  switch (node.type) {
    case 'block-quote':
      return `<blockquote><p>${children}</p></blockquote>`;
    case 'paragraph':
      return `<p>${children}</p>`;
    default:
      return children;
  }
};
