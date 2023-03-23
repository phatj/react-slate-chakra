import { ButtonGroup } from '@chakra-ui/react';
import isHotkey from 'is-hotkey';
import { FC, useCallback, useMemo } from 'react';
import { createEditor, Descendant } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';
import { BlockButton } from './BlockButton';
import { Element, ElementProps } from './Element';
import { Leaf, LeafProps } from './Leaf';
import { MarkButton } from './MarkButton';
import { serialize, toggleMark } from './utils';

const HotKeys = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
} as const;

// initial value cannot be empty
const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      { text: '' },
    ],
  },
];

export const RichTextEditor: FC = () => {
  const renderElement = useCallback(
    (props: ElementProps) => <Element {...props} />,
    [],
  );
  const renderLeaf = useCallback((props: LeafProps) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <Slate
      editor={editor}
      value={initialValue}
      onChange={(value) => {
        console.log(value.map(serialize).join(''));
      }}
    >
      <ButtonGroup>
        <MarkButton format="bold" icon="format_bold" />
        <MarkButton format="italic" icon="format_italic" />
        <MarkButton format="underline" icon="format_underlined" />
        <MarkButton format="code" icon="code" />
        <BlockButton format="heading-one" icon="looks_one" />
        <BlockButton format="heading-two" icon="looks_two" />
        <BlockButton format="block-quote" icon="format_quote" />
        <BlockButton format="numbered-list" icon="format_list_numbered" />
        <BlockButton format="bulleted-list" icon="format_list_bulleted" />
      </ButtonGroup>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
        onKeyDown={(event) => {
          for (const hotkey in HotKeys) {
            if (isHotkey(hotkey, event as any)) {
              event.preventDefault();
              const mark = HotKeys[hotkey as keyof typeof HotKeys];
              toggleMark(editor, mark);
            }
          }
        }}
      />
    </Slate>
  );
};


