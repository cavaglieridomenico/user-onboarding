import {
  areThereAnyEmptyString,
  isTheNameTooShort,
  isItAnInvalidEmail,
} from './form_utility';
//Test of filling in the form fields

/*Empty fields*/
test('It should return true if a single input is an empty string', () => {
  expect(areThereAnyEmptyString('')).toEqual(true);
});

test('It should return false if a single input is an string', () => {
  expect(areThereAnyEmptyString('word')).toEqual(false);
});

test('It should return true if multiple inputs are an empty string', () => {
  expect(areThereAnyEmptyString('', '', '')).toEqual(true);
});

test('It should return true if even one of the inputs is an empty string', () => {
  expect(areThereAnyEmptyString('', 'word', '')).toEqual(true);
});

test('It should return false if even one of the inputs is an empty string', () => {
  expect(areThereAnyEmptyString('word', 'word', 'word')).toEqual(false);
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
