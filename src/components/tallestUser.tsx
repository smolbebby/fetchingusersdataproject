/**
 * tallestUser component calculates tallest user by using .filter and .map array iterators.
 * to determine tallest height.
 * 
 * @returns {{ tallestHeight }} Obtain containing calculated value.
 */

import { useState, useEffect } from 'react';
import useUsers from './fetchData';

export default function tallestHeight() {
    const { users } = useUsers();
    const [tallestHeight, setTallestHeight] = useState(0);

    useEffect(() => {
        if (users.length > 0) {
            const tallestUser = users.filter((user) => user.height === Math.max(...users.map((u) => u.height)));
            setTallestHeight(tallestUser[0].height);
        }

    }, [users]);
    return { tallestHeight };
}
