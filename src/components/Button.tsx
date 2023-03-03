// @ts-nocheck

import { Button as ChakraButton, forwardRef } from '@chakra-ui/react';

export const Button = forwardRef(({ children, ...props }, ref) => {
  return (
    <ChakraButton ref={ref} {...props}>
      {children}
    </ChakraButton>
  );
});
