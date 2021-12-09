import { isValidEmail } from './isValidEmail';

test(`It should return true if the format of the email is valid and false otherwise`, () => {
  expect(isValidEmail('cavaglieridomenico@gmail.com')).toEqual(true);
});

test(`It should return true if the format of the email is valid and false otherwise`, () => {
  expect(isValidEmail('domenico.cavaglieri')).toEqual(false);
});

test(`It should return true if the format of the email is valid and false otherwise`, () => {
  expect(isValidEmail('domenico@cavaglieri')).toEqual(false);
});

test(`It should return true if the format of the email is valid and false otherwise`, () => {
  expect(isValidEmail('domenico@cavaglieri.')).toEqual(false);
});

test(`It should return true if the format of the email is valid and false otherwise`, () => {
  expect(isValidEmail('domenicomassimo.cavaglieri@gmail.commercial')).toEqual(
    false
  );
});
