/**
 * Given a list and an element, if the element is not already contained in it, add it,
 * and if it is already contained, remove it and the new list is returned
 * @param {array} list
 * @param {string} newItem
 * @returns {array}
 */
const getCheckedList = (list, newItem) => {
  return list.includes(newItem)
    ? list.filter(itemOldList => itemOldList !== newItem)
    : [...list, newItem];
};

export { getCheckedList };
