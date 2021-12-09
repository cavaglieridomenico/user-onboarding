/**
 * Check invalid name format:
 * Minimum 3 and maximum 30 characters
 * @param {string}
 * @returns {boolean} true if match is correct
 */
const isValidFullName = inputValue => {
  let nameFormat =
    /^\b(?!.*\s\s)(?!.*--)[a-zA-Zàèéìòù\s-]{3,30}\b[\s]\b[a-zA-Zàèéìòù\s-]{3,30}\b$/;
  return nameFormat.test(inputValue);
};

export { isValidFullName };
