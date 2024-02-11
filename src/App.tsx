import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import FetchUsers from './components/fetchData';
import AverageAge from './components/averageAge';
import { TableScrollArea } from './components/TableScrollArea/TableScrollArea';
import React, { useState, useEffect } from 'react';
import fetchUsers from './components/fetchData';

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);

      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [])


  return (
    <MantineProvider theme={theme}>
      <div>
        <h1>Users Table</h1>
        {loading ? (
         <p>Loading users...</p> 
        ) : (
        < TableScrollArea data={users}/>)}
      </div>
    </MantineProvider>
  );
}
