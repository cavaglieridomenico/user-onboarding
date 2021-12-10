import {
  onlyInRange,
  isInRange,
  isValidRange,
  getRightClass,
} from './range_utility';

/*A value only in a range*/
test('It should return 0 if the first parameter is less than 0', () => {
  expect(onlyInRange(-10, 0, 600)).toEqual(0);
});

test('It should return 600 if the first parameter is greater than 600', () => {
  expect(onlyInRange(650, 0, 600)).toEqual(600);
});

test('It should return 0 if the first parameter is equal to 0', () => {
  expect(onlyInRange(0, 0, 600)).toEqual(0);
});

test('It should return 0 if the first parameter is equal to 600', () => {
  expect(onlyInRange(600, 0, 600)).toEqual(600);
});

test('It should return the first parameter if the first parameter is in the range', () => {
  expect(onlyInRange(300, 0, 600)).toEqual(300);
});

/*Number in range*/
test('It should return true if the first value is within the range of the second to third value', () => {
  expect(isInRange(100000, 50000, 200000)).toEqual(true);
});

test('It should return true if the first value is within the range of the second to third value', () => {
  expect(isInRange(50000, 50000, 200000)).toEqual(true);
});

test('It should return true if the first value is within the range of the second to third value', () => {
  expect(isInRange(200000, 50000, 200000)).toEqual(true);
});

test('It should return false if the first value is outside the range of the second to third value', () => {
  expect(isInRange(10000, 50000, 200000)).toEqual(false);
});

test('It should return false if the first value is outside the range of the second to third value', () => {
  expect(isInRange(1000000, 50000, 200000)).toEqual(false);
});

/*Invalid range*/
test('It should return true if the first value is less than the second, false otherwise', () => {
  expect(isValidRange(3, 5)).toEqual(true);
});

test('It should return true if the first value is less than the second, false otherwise', () => {
  expect(isValidRange(5, 5)).toEqual(false);
});

test('It should return true if the first value is less than the second, false otherwise', () => {
  expect(isValidRange(5, 3)).toEqual(false);
});

/*Right class*/
test('It should return selected if the first value is within the range of the second to third value', () => {
  expect(getRightClass(100000, 50000, 200000, 'selected', 'error')).toEqual(
    'selected'
  );
});

test('It should return error if the first value is within the range of the second to third value', () => {
  expect(getRightClass(10000, 100000, 100000, 'selected', 'error')).toEqual(
    'error'
  );
});

test('It should return error if the first value is within the range of the second to third value', () => {
  expect(getRightClass(100000, 100000, 100000, 'selected', 'error')).toEqual(
    'error'
  );
});
