
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

import userData from './userData';

function averageAge() {
    const age: any = userData;

    const average = age.reduce((a, {age}) => a + age, 0) / age.length;

    console.log(averageAge);
}

export default averageAge;
