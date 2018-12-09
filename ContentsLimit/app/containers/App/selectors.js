/* eslint-disable linebreak-style */
/*
 *
 * App Selectors
 *
 */

import { createSelector } from 'reselect';
import get from 'lodash/get';

import { initialState } from './reducer';

// Get app state from global state
export const getApp = state => state.get('app', initialState);

// Get the list property
export const getList = createSelector(getApp, app => get(app, 'list'));

export const getStructuredList = createSelector(getList, list => {
  // Create a set of unique categories
  const categories = list.map(item => item.category);
  const uniqueCategories = [...new Set(categories)];

  const structuredList = [];

  uniqueCategories.forEach(category => {
    // Get the items in that category
    const categoryList = list.filter(item => item.category === category);
    // Get the sum of prices in that list
    const total = categoryList.reduce(
      (accumulator, item) => accumulator + parseFloat(item.price),
      0,
    );
    // Create object with the necessary parameters and add to array
    const structuredListItem = {
      category,
      total: total.toString(),
      items: categoryList,
    };
    structuredList.push(structuredListItem);
  });

  return structuredList;
});

export const getTotal = createSelector(getList, list => {
  // Get the sum of prices in the entire list
  const total = list.reduce(
    (accumulator, item) => accumulator + parseFloat(item.price),
    0,
  );
  return total;
});
