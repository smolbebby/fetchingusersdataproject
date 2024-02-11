import useUsers from './fetchData';
import { useState, useEffect } from 'react';
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

export default function averageAge() {
    const { users, isLoading } = useUsers();
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

