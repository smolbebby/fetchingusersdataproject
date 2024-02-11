import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import FetchData from './components/fetchData';
import AverageAge from './components/averageAge';


export default function App() {
  return (
    <MantineProvider theme={theme}>
      <div>

      </div>

    </MantineProvider>
  );
}
