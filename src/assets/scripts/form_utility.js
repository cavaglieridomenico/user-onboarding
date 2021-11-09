/**
 *Check for empty fields
 * @param {string}
 * @returns {boolean}
 */
const areThereAnyEmptyString = (...rest) => {
  return rest.some(item => item === '');
};

/**
 * *Check for empty array (useful for checkbox)
 * @param {array}
 * @returns {boolean}
 */
const isAnEmptyArray = array => {
  return array.length === 0;
};

/**
 *Check minimum length full name
 * @param {string}
 * @returns {boolean}
 */
const isTheNameTooShort = inputValue => {
  let usernameFormat = /^.{3,}$/;
  return inputValue.match(usernameFormat) === null;
};

/**
 *Check valid email format
 * @param {string}
 * @returns {boolean} true if match is correct
 */
const isItAnInvalidEmail = inputValue => {
  let emailFormat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return inputValue.match(emailFormat) === null;
};

export {
  areThereAnyEmptyString,
  isAnEmptyArray,
  isTheNameTooShort,
  isItAnInvalidEmail,
};
