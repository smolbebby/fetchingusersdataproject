/**
 * averageAge component calculates and returns the average age of all users from fetchData.ts.
 * @returns {{ averageAge }} Object containing the calculated average.
 */
import User from "./useUsers";

export default function averageAge(users: User[]) {
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return Math.floor(totalAge / users.length);
}
