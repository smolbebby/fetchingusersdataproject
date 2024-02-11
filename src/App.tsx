import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import useUsers from './components/fetchData';
import AverageAge from './components/averageAge';
import { TableScrollArea } from './components/TableScrollArea/TableScrollArea';
import React, { useState, useEffect } from 'react';
import TallestUser from './components/tallestUser';
import BrownHair from './components/brownHair';

export default function App() {
  const { users, isLoading } = useUsers();
  const { averageAge } = AverageAge();
  const { tallestHeight } = TallestUser();
  const { brownHair } = BrownHair();

  return (
    <MantineProvider theme={theme}>
      <div>
        <h1>Users Table</h1>
        {isLoading ? (
         <p>Loading users...</p> 
        ) : (
        < TableScrollArea data={users}/>)}
        <p>Average Age: {averageAge}</p>
        <p>Tallest User: {tallestHeight}cm </p>
        <p>Users with Brown Hair: {brownHair}</p>
      </div>
    </MantineProvider>
  );
}
