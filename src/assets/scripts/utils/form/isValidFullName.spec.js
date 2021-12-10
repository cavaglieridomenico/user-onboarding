import { isValidFullName } from './form_utility';

test(`It should return true if the format of the full name is valid and false otherwise`, () => {
  expect(isValidFullName('Domenico Cavaglieri')).toEqual(true);
});

test(`It should return true if the format of the full name is valid and false otherwise`, () => {
  expect(isValidFullName('Domenico Massimo Cavaglieri')).toEqual(true);
});

test(`It should return true if the format of the full name is valid and false otherwise`, () => {
  expect(isValidFullName('Domenico Massimo Cavaglieri da Silva Rosas')).toEqual(
    true
  );
});

test(`It should return true if the format of the full name is valid and false otherwise`, () => {
  expect(isValidFullName('Antoine de Saint-Exupéry')).toEqual(true);
});

test(`It should return true if the format of the full name is valid and false otherwise`, () => {
  expect(isValidFullName('d o m e n i c o c a v a g l i e r i')).toEqual(true);
});

test(`It should return true if the format of the full name is valid and false otherwise`, () => {
  expect(isValidFullName('Hu Ji')).toEqual(true);
});

test(`It should return true if the format of the full name is valid and false otherwise`, () => {
  expect(isValidFullName('do')).toEqual(false);
});

test(`It should return true if the format of the full name is valid and false otherwise`, () => {
  expect(isValidFullName('Domenico')).toEqual(false);
});

test(`It should return true if the format of the full name is valid and false otherwise`, () => {
  expect(isValidFullName(' Domenico Cavaglieri')).toEqual(false);
});

test(`It should return true if the format of the full name is valid and false otherwise`, () => {
  expect(isValidFullName('Domenico Cavaglieri ')).toEqual(false);
});

test(`It should return true if the format of the full name is valid and false otherwise`, () => {
  expect(isValidFullName('DomenicoDomenicoDomenicoDomenic Caglieri')).toEqual(
    false
  );
});

test(`It should return true if the format of the full name is valid and false otherwise`, () => {
  expect(isValidFullName('Domenico CavaglieriCavaglieriCavaglieriC')).toEqual(
    false
  );
});

test(`It should return true if the format of the full name is valid and false otherwise`, () => {
  expect(isValidFullName('Domenico77 Cavaglieri')).toEqual(false);
});

test(`It should return true if the format of the full name is valid and false otherwise`, () => {
  expect(isValidFullName('Domenico Cavaglieri@')).toEqual(false);
});

test(`It should return true if the format of the full name is valid and false otherwise`, () => {
  expect(isValidFullName('Domenico@')).toEqual(false);
});

test(`It should return true if the format of the full name is valid and false otherwise`, () => {
  expect(isValidFullName('Antoine de Saint--Exupéry')).toEqual(false);
});
