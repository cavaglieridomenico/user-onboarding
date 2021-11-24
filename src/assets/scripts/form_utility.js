/**
 *Check for empty fields
 * @param {string}
 * @returns {boolean}
 */
const containEmptyString = (...rest) => {
  return rest.some(item => item === '');
};

/**
 * *Check for empty array (useful for checkbox)
 * @param {array}
 * @returns {boolean}
 */
const containEmptyArray = array => array.length === 0;

/**
 *Check minimum length full name
 * @param {string}
 * @returns {boolean}
 */
const containNameTooShort = inputValue => {
  let usernameFormat = /^.{3,}$/;
  return inputValue.match(usernameFormat) === null;
};

/**
 *Check invalid email format
 * @param {string}
 * @returns {boolean} true if match is correct
 */
const containInvalidEmail = inputValue => {
  let emailFormat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return inputValue.match(emailFormat) === null;
};

/**
 *Check invalid range format
 * @param {number} startRange
 * @param {number} endRange
 * @returns {boolean}
 */
const containInvalidRange = (startRange, endRange) => {
  return startRange >= endRange;
};

/**
 *A value cannot be less than or greater than the range
 * @param {number} position
 * @param {number} start
 * @param {number} stop
 * @returns {number}
 */
const onlyInRange = (position, start, stop) => {
  if (position <= start) {
    return (position = start);
  }
  if (position >= stop) {
    return (position = stop);
  }
  return position;
};

export {
  containEmptyString,
  containEmptyArray,
  containNameTooShort,
  containInvalidEmail,
  onlyInRange,
  containInvalidRange,
};
