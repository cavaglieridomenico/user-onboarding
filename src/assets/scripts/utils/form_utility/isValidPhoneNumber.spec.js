import { isValidPhoneNumber } from './isValidPhoneNumber';

test('It should return true if the format of the phone number is valid and false otherwise', () => {
  expect(isValidPhoneNumber('34917')).toEqual(true);
});

test('It should return true if the format of the phone number is valid and false otherwise', () => {
  expect(isValidPhoneNumber('3491749229')).toEqual(true);
});

test('It should return true if the format of the phone number is valid and false otherwise', () => {
  expect(isValidPhoneNumber('0039 3491749229')).toEqual(true);
});

test('It should return true if the format of the phone number is valid and false otherwise', () => {
  expect(isValidPhoneNumber('+39 3491749229')).toEqual(true);
});

test('It should return true if the format of the phone number is valid and false otherwise', () => {
  expect(isValidPhoneNumber('0120-44-5678')).toEqual(true);
});

test('It should return true if the format of the phone number is valid and false otherwise', () => {
  expect(isValidPhoneNumber('+61 9 20-44-5678')).toEqual(true);
});

test('It should return true if the format of the phone number is valid and false otherwise', () => {
  expect(isValidPhoneNumber('112')).toEqual(false);
});

test('It should return true if the format of the phone number is valid and false otherwise', () => {
  expect(isValidPhoneNumber('1234')).toEqual(false);
});

test('It should return true if the format of the phone number is valid and false otherwise', () => {
  expect(isValidPhoneNumber(' 3491749229')).toEqual(false);
});

test('It should return true if the format of the phone number is valid and false otherwise', () => {
  expect(isValidPhoneNumber('3491749229 ')).toEqual(false);
});

test('It should return true if the format of the phone number is valid and false otherwise', () => {
  expect(isValidPhoneNumber('3491D749229')).toEqual(false);
});
