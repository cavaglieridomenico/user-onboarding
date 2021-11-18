import {
  areThereAnyEmptyString,
  isAnEmptyArray,
  isTheNameTooShort,
  isItAnInvalidEmail,
  onlyInTheRange,
  isItAnInvalidRange,
} from './form_utility';
//Test of filling in the form fields

/*Empty fields*/
test('It should return true if a single input is an empty string', () => {
  expect(areThereAnyEmptyString('')).toEqual(true);
});

test('It should return true if multiple inputs are an empty string', () => {
  expect(areThereAnyEmptyString('', '', '')).toEqual(true);
});

test('It should return true if even one of the inputs is an empty string', () => {
  expect(areThereAnyEmptyString('', 'word', '')).toEqual(true);
});

test('It should return false if a single input is an string', () => {
  expect(areThereAnyEmptyString('word')).toEqual(false);
});

test('It should return false if an array is not empty', () => {
  expect(areThereAnyEmptyString('word', 'word', 'word')).toEqual(false);
});

/*Empty array*/
test('It should return true if an array is empty', () => {
  expect(isAnEmptyArray([])).toEqual(true);
});

test('It should return false if an array is not empty', () => {
  expect(isAnEmptyArray(['word'])).toEqual(false);
});

test('It should return false if an array is not empty', () => {
  expect(isAnEmptyArray(['item', 'item'])).toEqual(false);
});

/*Name too short*/
test(`It should return true if the input is a string 
withless than of 3 characters`, () => {
  expect(isTheNameTooShort('Hu')).toEqual(true);
});

test(`It should return false if the input is a string
with 3 characters`, () => {
  expect(isTheNameTooShort('Hua')).toEqual(false);
});

test(`It should return false if the input is a string 
with a minimum of 3 characters`, () => {
  expect(isTheNameTooShort('Domenico')).toEqual(false);
});

test(`It should return false if the input is a string 
with blank space`, () => {
  expect(isTheNameTooShort('Domenico Cavaglieri')).toEqual(false);
});

test(`It should return false if the input is a string 
with two or more blank space`, () => {
  expect(isTheNameTooShort('Domenico Massimo Cavaglieri')).toEqual(false);
});

/*Invalid email format*/
test(`It should return true if the format of the mail is invalid`, () => {
  expect(isItAnInvalidEmail('domenico.cavaglieri')).toEqual(true);
});

test(`It should return false if the format of the mail is valid`, () => {
  expect(isItAnInvalidEmail('cavaglieridomenico@gmail.com')).toEqual(false);
});

test(`It should return false if the format of the mail is valid`, () => {
  expect(isItAnInvalidEmail('domenicomassimo.cavaglieri@gmail.com')).toEqual(
    false
  );
});

test(`It should return false if the format of the mail is valid`, () => {
  expect(isItAnInvalidEmail('dom@dom.it')).toEqual(false);
});

/*Invalid range*/
test('It should return true if the first parameter is grater than or equal to the second', () => {
  expect(isItAnInvalidRange(5, 3)).toEqual(true);
});

test('It should return true if the first parameter is equal to the second', () => {
  expect(isItAnInvalidRange(5, 5)).toEqual(true);
});

test('It should return false if the first parameter is less than the second', () => {
  expect(isItAnInvalidRange(3, 5)).toEqual(false);
});

/*A value only in a range*/
test('It should return 0 if the first parameter is less than 0', () => {
  expect(onlyInTheRange(-10, 0, 600)).toEqual(0);
});

test('It should return 600 if the first parameter is greater than 600', () => {
  expect(onlyInTheRange(650, 0, 600)).toEqual(600);
});

test('It should return 0 if the first parameter is equal to 0', () => {
  expect(onlyInTheRange(0, 0, 600)).toEqual(0);
});

test('It should return 0 if the first parameter is equal to 600', () => {
  expect(onlyInTheRange(600, 0, 600)).toEqual(600);
});

test('It should return the first parameter if the first parameter is in the range', () => {
  expect(onlyInTheRange(300, 0, 600)).toEqual(300);
});
