export const ElementTypes = [
  'block-quote',
  'bulleted-list',
  'heading-one',
  'heading-two',
  'list-item',
  'numbered-list',
  'paragraph',
] as const;
export type ElementTypes = (typeof ElementTypes)[number];

export const TextFormats = ['bold', 'italic', 'underline', 'code'] as const;
export type TextFormats = (typeof TextFormats)[number];

export const ListTypes = ['numbered-list', 'bulleted-list'];

type TextFormatMap = Partial<Record<TextFormats, boolean>>;

declare module 'slate' {
  interface BaseElement {
    type: ElementTypes;
  }

  interface BaseText extends TextFormatMap {}
}
