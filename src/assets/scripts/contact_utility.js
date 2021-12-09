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

/**
 * Check invalid email format
 * @param {string}
 * @returns {boolean} true if match is correct
 */
const isInvalidEmail = inputValue => {
  let emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return inputValue.match(emailFormat) === null;
};

export { isEmpty, isInvalidLength, isInvalidEmail };
