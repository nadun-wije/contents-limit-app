/* eslint-disable linebreak-style */
import applicationReducer, { initialState } from '../reducer';
import { ADD_TO_LIST, DELETE_FROM_LIST } from '../constants';

describe('App reducer', () => {
  it('returns the initial state', () => {
    expect(applicationReducer(undefined, {})).toEqual(initialState);
  });

  describe('ADD_TO_LIST', () => {
    it('adds the new item to the list with the correct ID', () => {
      const state = {
        list: [{ id: 1, foo: 'bar' }, { id: 2, foo: 'baz' }],
      };
      const action = {
        type: ADD_TO_LIST,
        item: { foo: 'foo' },
      };
      const expected = {
        list: [
          { id: 1, foo: 'bar' },
          { id: 2, foo: 'baz' },
          { id: 3, foo: 'foo' },
        ],
      };

      expect(applicationReducer(state, action)).toEqual(expected);
    });
  });

  describe('DELETE_FROM_LIST', () => {
    it('removes the correct item from the list', () => {
      const state = {
        list: [
          { id: 1, foo: 'bar' },
          { id: 2, foo: 'baz' },
          { id: 3, foo: 'foo' },
        ],
      };
      const action = {
        type: DELETE_FROM_LIST,
        itemId: 2,
      };
      const expected = {
        list: [{ id: 1, foo: 'bar' }, { id: 3, foo: 'foo' }],
      };

      expect(applicationReducer(state, action)).toEqual(expected);
    });
  });
});
