import { useState, useEffect } from 'react';
import useUsers from './fetchData';
/**
 * import fetchData
 * 
 * declare function brownHair
 * use filter to search userbase
 * return value
 * use console.log to confirm values
 * 
 * export brownHair
 */

export default function brownHair() {
    const { users, isLoading } = useUsers();
    const [brownHair, setBrownHair] = useState(0);

    useEffect(() => {
        if (users.length > 0) {
            const count = users.filter((user) => user.hair.color.toLowerCase() === 'brown').map(() => 1).reduce((acc, num) => acc + num, 0);
            setBrownHair(count);
        }
    }, [users]);
    return { brownHair };
}
