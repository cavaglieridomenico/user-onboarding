/**
 * Check for empty string or empty array
 * @param {string, array}
 * @returns {boolean}
 */
const isEmpty = (...value) => {
  return value.some(value => value.length === 0);
};

/**
 * Check for empty string or empty array
 * @param {string, array}
 * @returns {boolean}
 */
const isInvalidLength = (...value) => {
  return value.some(value => value.length < 3);
};

export { isEmpty, isInvalidLength };
