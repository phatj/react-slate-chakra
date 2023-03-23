import { BaseEditor, BaseText } from 'slate';
import { HistoryEditor } from 'slate-history';
import { ReactEditor } from 'slate-react';

export const ElementTypes = [
  'block-quote',
  'bulleted-list',
  'heading-one',
  'heading-two',
  'link',
  'list-item',
  'numbered-list',
  'paragraph',
] as const;
export type ElementTypes = (typeof ElementTypes)[number];

export const TextFormats = ['bold', 'italic', 'underline', 'code'] as const;
export type TextFormats = (typeof TextFormats)[number];

export const ListTypes = ['numbered-list', 'bulleted-list'];

type CustomText = BaseText & Partial<Record<TextFormats, boolean>>;
type CustomElement = { type: ElementTypes; children: CustomText[] };

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
