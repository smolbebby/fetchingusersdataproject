
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

import fetchUsers from './fetchData';

async function calculateAverageAge(): Promise<number> {
    const users = await fetchUsers();
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return totalAge / users.length;
}
console.log(calculateAverageAge);

export default calculateAverageAge;

