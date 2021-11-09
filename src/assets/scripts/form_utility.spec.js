import { isOneFieldEmpty } from './form_utility';
//Test of filling in the form fields

//Empty field
test('It should return true if the input is an empty string', () => {
  const inputString = '';
  expect(isOneFieldEmpty(inputString)).toEqual(true);
});
