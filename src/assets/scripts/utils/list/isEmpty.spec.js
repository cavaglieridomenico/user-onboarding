import { isEmpty } from './list_utility';

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
  expect(isEmpty([])).toEqual(true);
});

test('It should return true if even one value is an empty string or an empty array, false otherwise', () => {
  expect(isEmpty('word', [])).toEqual(true);
});

test('It should return true if even one value is an empty string or an empty array, false otherwise', () => {
  expect(isEmpty('word')).toEqual(false);
});

test('It should return true if even one value is an empty string or an empty array, false otherwise', () => {
  expect(isEmpty('word', 'word', 'word')).toEqual(false);
});

test('It should return true if even one value is an empty string or an empty array, false otherwise', () => {
  expect(isEmpty(['word'])).toEqual(false);
});

test('It should return true if even one value is an empty string or an empty array, false otherwise', () => {
  expect(isEmpty(['item', 'item'])).toEqual(false);
});

test('It should return true if even one value is an empty string or an empty array, false otherwise', () => {
  expect(isEmpty(['item'], 0, 'word')).toEqual(false);
});
