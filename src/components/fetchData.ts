import { useState, useEffect } from 'react';
/**
 * declare fetch function
 * 
 * use async function to fetch data
 * confirm with a console.log to track data
 * 
 * export fetchData
 */
const apiUrl = 'https://dummyjson.com/users';

interface User {
    id:number,
    firstName:string,
    lastName:string,
    age:number,
    height:number,
    hair:string
}


export default function fetchUsers() {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true);
            const response = await fetch(`${apiUrl}`);
            const users = await response.json() as { users: User[] };
            setUsers(users.users);
            setIsLoading(false);
        };

        fetchUsers();
    }, []);

    }
