import { Container } from '@chakra-ui/react';
import { FC } from 'react';
import { RichTextEditor } from './Editors/RichTextEditor';

const App: FC = () => {
  return (
    <Container maxW="container.xl" className="App">
      <RichTextEditor />
    </Container>
  );
};

export default App;
