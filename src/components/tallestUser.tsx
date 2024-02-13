/**
 * tallestUser component calculates tallest user by using Math.max and .map array iterator.
 * to determine tallest height.
 * 
 * @returns {{ height }} Obtain containing calculated value.
 */
import User from './useUsers';

export default function tallestHeight(users: User[]) {
    const height = Math.max(...users.map((u) => u.height));
    return height;
}
