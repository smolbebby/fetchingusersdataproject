import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import UserData from './components/userData';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      < UserData />
    </MantineProvider>
  );
}
