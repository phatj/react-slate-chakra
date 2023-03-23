import { Button, Icon } from '@chakra-ui/react';
import { FC } from 'react';
import { useSlate } from 'slate-react';
import { IconKeys, IconMap, isMarkActive, TextFormats, toggleMark } from './utils';

type MarkButtonProps = {
  format: TextFormats;
  icon: IconKeys;
};

export const MarkButton: FC<MarkButtonProps> = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      isActive={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon as={IconMap[icon]} />
    </Button>
  );
};
