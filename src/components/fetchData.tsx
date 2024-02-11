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

async function fetchUsers(): Promise<User[]> {
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Request failed, please try again later.');
    }
    return await response.json() as User[];
}

export default fetchUsers;