/**
 * import fetchData
 * 
 * declare function for average age
 * use reduce to calculate avg
 * return value
 * use console.log to confirm values
 * 
 * export avgAge to use in app and grid(?)
 */

/**
 * averageAge component calculates and returns the average age of all users from fetchData.ts
 * @returns {{ averageAge: number}} Object containing the calculated average.
 */
import useUsers from './fetchData';
import { useState, useEffect } from 'react';

export default function averageAge() {
    const { users } = useUsers();
    const [averageAge, setAverageAge] = useState(0);

    useEffect(() => {
        if (users.length > 0) {
            const totalAge = users.reduce((sum, user) => sum + user.age, 0);
            setAverageAge(Math.floor(totalAge / users.length));
        };

        averageAge;

    }, [users]);
    return { averageAge };
};

