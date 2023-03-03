import { FC, ReactNode } from 'react';
import { Descendant } from 'slate';
import { ElementTypes } from './utils/types';

export type ElementProps = {
  attributes: Record<string, unknown>;
  children: ReactNode;
  element: {
    children: Descendant[];
    type: ElementTypes;
  };
};

const ElementTypeMap: Record<ElementTypes, keyof JSX.IntrinsicElements> = {
  'block-quote': 'blockquote',
  'bulleted-list': 'ul',
  'heading-one': 'h1',
  'heading-two': 'h2',
  'list-item': 'li',
  'numbered-list': 'ol',
  paragraph: 'p',
};

export const Element: FC<ElementProps> = ({
  attributes,
  children,
  element,
}) => {
  const Component = ElementTypeMap[element.type] ?? 'p';

  return <Component {...attributes}>{children}</Component>;
};
