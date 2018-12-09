/* eslint-disable linebreak-style */
/*
 *
 * Application reducer
 *
 */

import { fromJS } from 'immutable';
import { ADD_TO_LIST, DELETE_FROM_LIST } from './constants';

export const initialState = {
  list: [],
};

function applicationReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_LIST: {
      // Create new item with an ID
      let lastId = 0;
      if (state.list.length > 0) lastId = state.list[state.list.length - 1].id;
      const newItem = { ...action.item, id: lastId + 1 };
      // Add item to the list
      return {
        ...state,
        list: [...state.list, newItem],
      };
    }
    case DELETE_FROM_LIST: {
      // Remove the item from the list
      const newList = state.list.filter(item => item.id !== action.itemId);
      // Update the list in state
      return {
        ...state,
        list: newList,
      };
    }
    default:
      return state;
  }
}

export default applicationReducer;
