/**
 * App component is the rendering for interface.
 * Imports all* components to correctly implement into site.
 *
 * @returns {JSX.Element} App UI with relevant data displayed.
 *
 * *completed components.
 *
 */

import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import useUsers from "./components/useUsers";
import AverageAge from "./components/averageAge";
import { TableScrollArea } from "./components/TableScrollArea/TableScrollArea";
import TallestUser from "./components/tallestUser";
import BrownHair from "./components/brownHair";

export default function App() {
  const { users, isLoading } = useUsers();
  const age = AverageAge(users);
  const height = TallestUser(users);
  const hair = BrownHair(users);

  return (
    <MantineProvider theme={theme}>
      <div>
        <h1>Users Table</h1>
        {isLoading ? <p>Loading users...</p> : <TableScrollArea data={users} />}
        <p>Average Age: {age}</p>
        <p>Tallest User: {height}cm </p>
        <p>Users with Brown Hair: {hair}</p>
      </div>
    </MantineProvider>
  );
}
