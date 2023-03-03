import { ChakraProvider } from '@chakra-ui/react';
import 'material-icons/iconfont/material-icons.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
