import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import useUsers from './components/fetchData';
import AverageAge from './components/averageAge';
import { TableScrollArea } from './components/TableScrollArea/TableScrollArea';
import React, { useState, useEffect } from 'react';

export default function App() {
  const { users, isLoading } = useUsers();

  return (
    <MantineProvider theme={theme}>
      <div>
        <h1>Users Table</h1>
        {isLoading ? (
         <p>Loading users...</p> 
        ) : (
        < TableScrollArea data={users}/>)}
      </div>
    </MantineProvider>
  );
}
