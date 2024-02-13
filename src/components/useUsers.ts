/**
 * fetchData function fetches data from the dummyjson user database to then use in later components such as averageAge, brownHair,
 * tallest user, TableScrollArea, and App. Uses async/await, with useEffect and useState.
 *
 * @returns {{ user, isLoading }} allows for the use of user and isLoading into components.
 */

import { useState, useEffect } from "react";

const apiUrl = "https://dummyjson.com/users";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  height: number;
  hair: {
    color: string;
  };
}

export default function useUsers() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(apiUrl);
        const usersData = (await response.json()) as { users: User[] };
        setUsers(usersData.users);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);
  return { users, isLoading };
}
