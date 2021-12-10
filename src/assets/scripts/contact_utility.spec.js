import { isEmpty, isInvalidLength } from './contact_utility';

/*Empty fields*/
test('It should return true if even one value is an empty string or an empty array, false otherwise', () => {
  expect(isEmpty('')).toEqual(true);
});

test('It should return true if even one value is an empty string or an empty array, false otherwise', () => {
  expect(isEmpty('', '', '')).toEqual(true);
});

test('It should return true if even one value is an empty string or an empty array, false otherwise', () => {
  expect(isEmpty('', 'word', '')).toEqual(true);
});

test('It should return true if even one value is an empty string or an empty array, false otherwise', () => {
  expect(isEmpty('', 1, '')).toEqual(true);
});

test('It should return true if even one value is an empty string or an empty array, false otherwise', () => {
  expect(isEmpty('word')).toEqual(false);
});

test('It should return true if even one value is an empty string or an empty array, false otherwise', () => {
  expect(isEmpty('word', 'word', 'word')).toEqual(false);
});

/*Empty array*/
test('It should return true if even one value is an empty string or an empty array, false otherwise', () => {
  expect(isEmpty([])).toEqual(true);
});

test('It should return true if even one value is an empty string or an empty array, false otherwise', () => {
  expect(isEmpty('word', [])).toEqual(true);
});

test('It should return true if even one value is an empty string or an empty array, false otherwise', () => {
  expect(isEmpty(['word'])).toEqual(false);
});

test('It should return true if even one value is an empty string or an empty array, false otherwise', () => {
  expect(isEmpty(['item', 'item'])).toEqual(false);
});

/*Value too short*/
test(`It should return true if even a single value has a length less than 3, false otherwise`, () => {
  expect(isInvalidLength('Hu')).toEqual(true);
});

test(`It should return true if even a single value has a length less than 3, false otherwise`, () => {
  expect(isInvalidLength('Hu', 'Domenico')).toEqual(true);
});

test(`It should return true if even a single value has a length less than 3, false otherwise`, () => {
  expect(isInvalidLength('H ', 'Domenico')).toEqual(true);
});

test(`It should return true if even a single value has a length less than 3, false otherwise`, () => {
  expect(isInvalidLength(['cat', 'dog'])).toEqual(true);
});

test(`It should return true if even a single value has a length less than 3, false otherwise`, () => {
  expect(isInvalidLength(['cat', 'dog'], 'Domenico')).toEqual(true);
});

test(`It should return true if even a single value has a length less than 3, false otherwise`, () => {
  expect(isInvalidLength('Hua')).toEqual(false);
});

test(`It should return true if even a single value has a length less than 3, false otherwise`, () => {
  expect(isInvalidLength('Hu ')).toEqual(false);
});

test(`It should return true if even a single value has a length less than 3, false otherwise`, () => {
  expect(isInvalidLength('Domenico')).toEqual(false);
});

test(`It should return true if even a single value has a length less than 3, false otherwise`, () => {
  expect(isInvalidLength('Domenico Cavaglieri')).toEqual(false);
});

test(`It should return true if even a single value has a length less than 3, false otherwise`, () => {
  expect(isInvalidLength('Domenico Massimo Cavaglieri')).toEqual(false);
});

test(`It should return true if even a single value has a length less than 3, false otherwise`, () => {
  expect(isInvalidLength(['gatto', 1, 'cat'])).toEqual(false);
});
