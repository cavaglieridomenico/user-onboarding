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
  }
  if (position >= stop) {
    return (position = stop);
  }
  return position;
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
const containInvalidRange = (startRange, endRange) => {
  return startRange >= endRange;
};

const getRightClass = (value, fromValue, toValue, selected, error) => {
  if (containInvalidRange(fromValue, toValue)) {
    return error;
  } else if (isInRange(value, fromValue, toValue)) {
    return selected;
  } else {
    return '';
  }
};

export { onlyInRange, isInRange, containInvalidRange, getRightClass };
