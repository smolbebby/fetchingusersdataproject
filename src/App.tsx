import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import FetchData from './components/fetchData';
import AverageAge from './components/averageAge';
import { TableScrollArea } from './components/TableScrollArea/TableScrollArea';


export default function App() {
  return (
    <MantineProvider theme={theme}>
      <div>
        < FetchData />
        < TableScrollArea data={} />
      </div>

    </MantineProvider>
  );
}
