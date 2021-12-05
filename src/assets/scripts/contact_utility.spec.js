import {
  containEmptyString,
  containEmptyArray,
  containNameTooShort,
  containInvalidEmail,
  onlyInRange,
  getCheckedList,
} from './contact_utility';
//Test of filling in the form fields

/*Empty fields*/
test('It should return true if a single input is an empty string', () => {
  expect(containEmptyString('')).toEqual(true);
});

test('It should return true if multiple inputs are an empty string', () => {
  expect(containEmptyString('', '', '')).toEqual(true);
});

test('It should return true if even one of the inputs is an empty string', () => {
  expect(containEmptyString('', 'word', '')).toEqual(true);
});

test('It should return false if a single input is an string', () => {
  expect(containEmptyString('word')).toEqual(false);
});

test('It should return false if an array is not empty', () => {
  expect(containEmptyString('word', 'word', 'word')).toEqual(false);
});

/*Empty array*/
test('It should return true if an array is empty', () => {
  expect(containEmptyArray([])).toEqual(true);
});

test('It should return false if an array is not empty', () => {
  expect(containEmptyArray(['word'])).toEqual(false);
});

test('It should return false if an array is not empty', () => {
  expect(containEmptyArray(['item', 'item'])).toEqual(false);
});

/*Name too short*/
test(`It should return true if the input is a string 
withless than of 3 characters`, () => {
  expect(containNameTooShort('Hu')).toEqual(true);
});

test(`It should return false if the input is a string
with 3 characters`, () => {
  expect(containNameTooShort('Hua')).toEqual(false);
});

test(`It should return false if the input is a string 
with a minimum of 3 characters`, () => {
  expect(containNameTooShort('Domenico')).toEqual(false);
});

test(`It should return false if the input is a string 
with blank space`, () => {
  expect(containNameTooShort('Domenico Cavaglieri')).toEqual(false);
});

test(`It should return false if the input is a string 
with two or more blank space`, () => {
  expect(containNameTooShort('Domenico Massimo Cavaglieri')).toEqual(false);
});

/*Invalid email format*/
test(`It should return true if the format of the mail is invalid`, () => {
  expect(containInvalidEmail('domenico.cavaglieri')).toEqual(true);
});

test(`It should return false if the format of the mail is valid`, () => {
  expect(containInvalidEmail('cavaglieridomenico@gmail.com')).toEqual(false);
});

test(`It should return false if the format of the mail is valid`, () => {
  expect(containInvalidEmail('domenicomassimo.cavaglieri@gmail.com')).toEqual(
    false
  );
});

test(`It should return false if the format of the mail is valid`, () => {
  expect(containInvalidEmail('dom@dom.it')).toEqual(false);
});
