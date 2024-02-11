import { useState, useEffect } from 'react';
import useUsers from './fetchData';
/**
 * import fetchData
 * 
 * declare function tallestUser
 * use filter to search userbase
 * return value
 * use console.log to confirm values
 * 
 * export tallestUser
 */

export default function tallestHeight() {
    const { users, isLoading } = useUsers();
    const [tallestHeight, setTallestHeight] = useState(0);

    useEffect(() => {
        if (users.length > 0) {
            const tallestUser = users.filter((user) => user.height === Math.max(...users.map((u) => u.height)));
            setTallestHeight(tallestUser[0].height);
        }

    }, [users]);
    return { tallestHeight };
}
