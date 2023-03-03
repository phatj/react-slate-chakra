import { BaseEditor, Editor, Element, Transforms } from 'slate';
import { ElementTypes, ListTypes } from './types';

export const toggleBlock = (editor: BaseEditor, format: ElementTypes) => {
  const isActive = isBlockActive(editor, format);
  const isList = ListTypes.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) => {
      return (
        !Editor.isEditor(n) &&
        Element.isElement(n) &&
        ListTypes.includes(n.type)
      );
    },
    split: true,
  });
  const newProperties: Partial<Element> = {
    type: isActive ? 'paragraph' : isList ? 'list-item' : format,
  };
  Transforms.setNodes<Element>(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

export const isBlockActive = (editor: Editor, format: string) => {
  const { selection } = editor;
  if (!selection) {
    return false;
  }

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) && Element.isElement(n) && n.type === format,
    }),
  );

  return !!match;
};
