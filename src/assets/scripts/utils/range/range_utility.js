/**
 * A value cannot be less than or greater than the range
 * @param {number} position
 * @param {number} start
 * @param {number} stop
 * @returns {number}
 */
const onlyInRange = (position, start, stop) => {
  if (position <= start) {
    return (position = start);
  } else if (position >= stop) {
    return (position = stop);
  } else {
    return position;
  }
};

/**
 * Check if a number is within a range
 * @param {number} value
 * @param {number} fromValue
 * @param {number} toValue
 * @returns {boolean}
 */
const isInRange = (value, fromValue, toValue) => {
  return value >= fromValue && value <= toValue ? true : false;
};

/**
 * Check invalid range format
 * @param {number} startRange
 * @param {number} endRange
 * @returns {boolean}
 */
const isValidRange = (startRange, endRange) => {
  return startRange < endRange;
};

const getRightClass = (value, fromValue, toValue, selected, error) => {
  if (!isValidRange(fromValue, toValue)) {
    return error;
  } else if (isInRange(value, fromValue, toValue)) {
    return selected;
  } else {
    return '';
  }
};

export { onlyInRange, isInRange, isValidRange, getRightClass };
