/**
 * brownHair component calculates and returns amount of users with brown hair using .filter array iterator.
 * @returns {{ hair }} Object containing final value.
 */
import User from "./useUsers";

export default function brownHair(users: User[]) {
  const hair = users.filter(
    (user) => user.hair.color.toLowerCase() === "brown",
  ).length;
  return hair;
}
