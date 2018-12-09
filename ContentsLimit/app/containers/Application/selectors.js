/* eslint-disable linebreak-style */
import { createSelector } from 'reselect';
import { initialState } from './reducer';
import get from 'lodash/get';

/**
 * Direct selector to the application state domain
 */

export const getApplication = state => state.get('application', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Application
 */

export const getList = createSelector(getApplication, application =>
  get(application, 'list'),
);

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
      total,
      items: categoryList,
    };
    structuredList.push(structuredListItem);
  });

  return structuredList;
});
