import { Button, Icon } from '@chakra-ui/react';
import { FC } from 'react';
import { useSlate } from 'slate-react';
import { IconKeys, IconMap, isBlockActive, toggleBlock } from './utils';
import { ElementTypes } from './utils/types';

type BlockButtonProps = {
  format: ElementTypes;
  icon: IconKeys;
};

export const BlockButton: FC<BlockButtonProps> = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      isActive={isBlockActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <Icon as={IconMap[icon]} />
    </Button>
  );
};
