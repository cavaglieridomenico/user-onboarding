import { isEmpty, isInvalidLength, isInvalidEmail } from './contact_utility';

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

/*Invalid email format*/
test(`It should return true if the format of the email is invalid and false if the format of the mail is valid`, () => {
  expect(isInvalidEmail('domenico.cavaglieri')).toEqual(true);
});

test(`It should return true if the format of the email is invalid and false if the format of the mail is valid`, () => {
  expect(isInvalidEmail('domenico@cavaglieri')).toEqual(true);
});

test(`It should return true if the format of the email is invalid and false if the format of the mail is valid`, () => {
  expect(isInvalidEmail('domenicomassimo.cavaglieri@gmail.commercial')).toEqual(
    true
  );
});

test(`It should return true if the format of the email is invalid and false if the format of the mail is valid`, () => {
  expect(isInvalidEmail('domenicomassimo.cavaglieri@gmail.c')).toEqual(true);
});

test(`It should return true if the format of the email is invalid and false if the format of the mail is valid `, () => {
  expect(isInvalidEmail('cavaglieridomenico@gmail.com')).toEqual(false);
});

test(`It should return true if the format of the email is invalid and false if the format of the mail is valid`, () => {
  expect(isInvalidEmail('domenicomassimo.cavaglieri@gmail.com')).toEqual(false);
});

test(`It should return true if the format of the email is invalid and false if the format of the mail is valid`, () => {
  expect(isInvalidEmail('dom@dom.it')).toEqual(false);
});

test(`It should return true if the format of the email is invalid and false if the format of the mail is valid`, () => {
  expect(isInvalidEmail('dom@dom.ital')).toEqual(false);
});
