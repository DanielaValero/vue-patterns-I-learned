/**
 * Generates a random numerical ID
 * @returns {number} random ID from 1..(2^32-1)
 */
const randomId = (): number => Math.ceil(Math.random() * 2 ** 32);

export { randomId };
