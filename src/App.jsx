import RootRoute from './routes';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider >
      <RootRoute />
    </ChakraProvider>
  );
}

export default App;
