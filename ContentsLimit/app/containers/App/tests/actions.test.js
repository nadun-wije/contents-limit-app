/* eslint-disable linebreak-style */
import { addToList, deleteFromList } from '../actions';
import { ADD_TO_LIST, DELETE_FROM_LIST } from '../constants';

describe('App actions', () => {
  describe('addToList', () => {
    it('should have the correct type and item', () => {
      const item = 'foo';
      const expected = {
        type: ADD_TO_LIST,
        item,
      };
      expect(addToList(item)).toEqual(expected);
    });
  });

  describe('deleteFromList', () => {
    it('should have the correct type and itemId', () => {
      const itemId = 'foo';
      const expected = {
        type: DELETE_FROM_LIST,
        itemId,
      };
      expect(deleteFromList(itemId)).toEqual(expected);
    });
  });
});
