/**
 * Check invalid name format:
 * Minimum 3 and maximum 30 characters
 * @param {string}
 * @returns {boolean} true if match is correct
 */
const isValidFullName = inputValue => {
  const pattern =
    /^\b(?!.*\s\s)(?!.*--)[a-zA-Zàèéìòù\s-]{3,30}\b[\s]\b[a-zA-Zàèéìòù\s-]{3,30}\b$/;
  return pattern.test(inputValue);
};

/**
 * Check invalid email format
 * @param {string}
 * @returns {boolean} true if match is correct
 */
const isValidEmail = inputValue => {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return pattern.test(inputValue);
};

const isValidPhoneNumber = inputValue => {
  const pattern = /^[+|\d][\d\s\-+,]{4,22}\b$/;
  return pattern.test(inputValue);
};

export { isValidFullName, isValidEmail, isValidPhoneNumber };
