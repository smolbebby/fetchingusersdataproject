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

export default function users() {
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
    
    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="list">
            <h1 className="title">Users List</h1>
            <ul>
                {users.map((user) => {
                    return <li key={user.id}>{user.firstName} {user.lastName}, {user.age}, {user.height}cm, {user.hair.color}</li>
                })}
            </ul>
        </div>
    )
}