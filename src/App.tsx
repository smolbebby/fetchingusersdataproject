import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import UserData from './components/userData';
import AverageAge from './components/averageAge';


export default function App() {
  return (
    <MantineProvider theme={theme}>
      < UserData />
      < AverageAge />
    </MantineProvider>
  );
}
