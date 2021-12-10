import { isNoEmpty } from './list_utility';

test('It should return true if even one value is not an empty string or an empty array, false otherwise', () => {
  expect(isNoEmpty('word')).toEqual(true);
});

test('It should return true if even one value is not an empty string or an empty array, false otherwise', () => {
  expect(isNoEmpty('word', 'word', 'word')).toEqual(true);
});

test('It should return true if even one value is not an empty string or an empty array, false otherwise', () => {
  expect(isNoEmpty('word', 123, 'word')).toEqual(true);
});

test('It should return true if even one value is not an empty string or an empty array, false otherwise', () => {
  expect(isNoEmpty('word', 0, 'word')).toEqual(true);
});

test('It should return true if even one value is not an empty string or an empty array, false otherwise', () => {
  expect(isNoEmpty(['item'], 'word')).toEqual(true);
});

test('It should return true if even one value is not an empty string or an empty array, false otherwise', () => {
  expect(isNoEmpty([])).toEqual(false);
});

test('It should return true if even one value is not an empty string or an empty array, false otherwise', () => {
  expect(isNoEmpty('word', [])).toEqual(false);
});

test('It should return true if even one value is not an empty string or an empty array, false otherwise', () => {
  expect(isNoEmpty('')).toEqual(false);
});

test('It should return true if even one value is not an empty string or an empty array, false otherwise', () => {
  expect(isNoEmpty('', '', '')).toEqual(false);
});

test('It should return true if even one value is not an empty string or an empty array, false otherwise', () => {
  expect(isNoEmpty('', 'word', '')).toEqual(false);
});

test('It should return true if even one value is not an empty string or an empty array, false otherwise', () => {
  expect(isNoEmpty('', 1, '')).toEqual(false);
});
