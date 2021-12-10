import { isEmpty } from './contact_utility';

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
