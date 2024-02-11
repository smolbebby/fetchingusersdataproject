/**
 * brownHair component calculates and returns amount of users with brown hair using .filter, .map, and .reduce array iterators. 
 * @returns {{ brownHair: number }} Object containing final value.
 */

import { useState, useEffect } from 'react';
import useUsers from './fetchData';

export default function brownHair() {
    const { users } = useUsers();
    const [brownHair, setBrownHair] = useState(0);

    useEffect(() => {
        if (users.length > 0) {
            const count = users.filter((user) => user.hair.color.toLowerCase() === 'brown').map(() => 1).reduce((acc, num) => acc + num, 0);
            setBrownHair(count);
        }
    }, [users]);
    return { brownHair };
}
