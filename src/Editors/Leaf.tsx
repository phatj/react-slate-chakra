import { FC, ReactNode } from 'react';
import { TextFormats } from './utils/types';

export type LeafProps = {
  attributes: Record<string, unknown>;
  children: ReactNode;
  leaf: Partial<Record<TextFormats, boolean>>;
};

export const Leaf: FC<LeafProps> = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};
