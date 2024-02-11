
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

import useUsers from './fetchData';

async function calculateAverageAge(): Promise<number> {
    const users = await useUsers();
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return totalAge / users.length;
}
console.log(calculateAverageAge);

export default calculateAverageAge;

