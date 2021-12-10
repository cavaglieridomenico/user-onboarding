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

export { isValidFullName };
