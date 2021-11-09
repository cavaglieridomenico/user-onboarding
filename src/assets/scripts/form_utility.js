/**
 *Check for empty field
 * @param {string} inputValue
 * @returns {boolean}
 */
function areThereAnyEmptyString(...rest) {
  return rest.some(item => item === '');
}

/**
 *Check Regular Expression username
 * @param {string} inputValue
 * @returns {boolean}
 */
function isTheNameTooShort(inputValue) {
  let usernameFormat = /^.{3,}$/;
  return inputValue.match(usernameFormat) === null;
}

export { areThereAnyEmptyString, isTheNameTooShort };
