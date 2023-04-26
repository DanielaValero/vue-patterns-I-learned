/**
 * It says if an array includes the given values. Returns true also when the arrays are the same
 * @param {Array} array The array to inspect.
 * @param {Array} subset The values to look for in the array.
 */

function includesSubset<T>(array: T[], subset: T[]): boolean {
  const sub = array.filter((x) => subset.includes(x));
  return sub.length > 0 && sub.length <= array.length;
}

/**
 * Returns an array containing the values that are not included in the param values
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to look for in the array.
 */
function difference<T>(array: T[], values: T[]): T[] {
  return values.filter((x) => !array.includes(x));
}

/**
 * Compares two arrays and says if they are equal
 * @param {Array} array The array to inspect.
 * @param {Array} values The second array to compare
 */
function isEqual<T>(array: T[], values: T[]): boolean {
  return array.filter((x) => values.includes(x)).length === array.length;
}

export { difference, includesSubset, isEqual };
