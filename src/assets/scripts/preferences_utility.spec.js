import { getCheckedList } from './preferences_utility';

/*An element in a list*/
test('It should return an array containing only the second argument', () => {
  expect(getCheckedList([], 'cat')).toEqual(['cat']);
});

test('It should return an array containing its own elements and the new element', () => {
  expect(getCheckedList(['cat', 'dog', 'fish'], 'bird')).toEqual([
    'cat',
    'dog',
    'fish',
    'bird',
  ]);
});

test('It should return an array containing its own elements without the element equal to the second argument', () => {
  expect(getCheckedList(['cat', 'dog', 'fish'], 'cat')).toEqual([
    'dog',
    'fish',
  ]);
});

test('It should return an array containing its own elements and the new element', () => {
  expect(getCheckedList(['cat', 'dog', 'fish'], 12)).toEqual([
    'cat',
    'dog',
    'fish',
    12,
  ]);
});
