import cx from 'clsx';
import { useState } from 'react';
import { Table, ScrollArea } from '@mantine/core';
import classes from './TableScrollArea.module.css';

type Props = {
  data: {
      firstName: string,
      lastName: string,
      age: number,
      height: number,
      haircolor: string,
  }[];
}

export function TableScrollArea({ data }: Props) {
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row) => (
    <Table.Tr key={row.firstName}>
      <Table.Td>{row.lastName}</Table.Td>
      <Table.Td>{row.age}</Table.Td>
      <Table.Td>{row.height}</Table.Td>
      <Table.Td>{row.haircolor}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table miw={700}>
        <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <Table.Tr>
            <Table.Th>First Name</Table.Th>
            <Table.Th>Last Name</Table.Th>
            <Table.Th>Age</Table.Th>
            <Table.Th>Height</Table.Th>
            <Table.Th>Hair Colour</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}