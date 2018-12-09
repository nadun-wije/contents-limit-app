/* eslint-disable linebreak-style */
/*
 *
 * App Actions
 *
 */

import { ADD_TO_LIST, DELETE_FROM_LIST } from './constants';

export const addToList = item => ({
  type: ADD_TO_LIST,
  item,
});

export const deleteFromList = itemId => ({
  type: DELETE_FROM_LIST,
  itemId,
});
