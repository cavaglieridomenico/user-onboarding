import { isFull } from './list_utility';

test('It should return true if even one value is not an empty string or an empty array, false otherwise', () => {
  expect(isFull('word')).toEqual(true);
});

test('It should return true if even one value is not an empty string or an empty array, false otherwise', () => {
  expect(isFull('word', 'word', 'word')).toEqual(true);
});

test('It should return true if even one value is not an empty string or an empty array, false otherwise', () => {
  expect(isFull('word', 123, 'word')).toEqual(true);
});

test('It should return true if even one value is not an empty string or an empty array, false otherwise', () => {
  expect(isFull('word', 0, 'word')).toEqual(true);
});

test('It should return true if even one value is not an empty string or an empty array, false otherwise', () => {
  expect(isFull(['item'], 'word')).toEqual(true);
});

test('It should return true if even one value is not an empty string or an empty array, false otherwise', () => {
  expect(isFull([])).toEqual(false);
});

test('It should return true if even one value is not an empty string or an empty array, false otherwise', () => {
  expect(isFull('word', [])).toEqual(false);
});

test('It should return true if even one value is not an empty string or an empty array, false otherwise', () => {
  expect(isFull('')).toEqual(false);
});

test('It should return true if even one value is not an empty string or an empty array, false otherwise', () => {
  expect(isFull('', '', '')).toEqual(false);
});

test('It should return true if even one value is not an empty string or an empty array, false otherwise', () => {
  expect(isFull('', 'word', '')).toEqual(false);
});

test('It should return true if even one value is not an empty string or an empty array, false otherwise', () => {
  expect(isFull('', 1, '')).toEqual(false);
});
