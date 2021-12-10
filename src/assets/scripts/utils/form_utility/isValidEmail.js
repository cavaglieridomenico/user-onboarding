/**
 * Check invalid email format
 * @param {string}
 * @returns {boolean} true if match is correct
 */
const isValidEmail = inputValue => {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return pattern.test(inputValue);
};

export { isValidEmail };
