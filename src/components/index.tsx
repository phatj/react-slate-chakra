import { ButtonGroupProps, forwardRef } from '@chakra-ui/react';

export const Toolbar = forwardRef<ButtonGroupProps, 'div'>(({ children }) => (
  <>{children}</>
));

export * from './Button';
export * from './Icon';
