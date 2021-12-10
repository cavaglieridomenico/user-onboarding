const isValidPhoneNumber = inputValue => {
  const pattern = /^[+|\d][\d\s\-+,]{4,22}\b$/;
  return pattern.test(inputValue);
};
export { isValidPhoneNumber };
