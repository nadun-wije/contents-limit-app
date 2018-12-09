/* eslint-disable linebreak-style */

/**
 *
 * App Container
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import List from '../../components/List';
import AddToList from '../../components/AddToList';

import { getStructuredList, getTotal } from './selectors';
import { AppContainer, TotalText, ListContainer } from './styledComponents';
import { CATEGORY_LIST } from './constants';
import { addToList } from './actions';

export function App({ list, total, onAddItemClick }) {
  return (
    <AppContainer>
      <ListContainer>
        <List list={list} />
        <TotalText>Total: $ {total}</TotalText>
      </ListContainer>

      <AddToList categories={CATEGORY_LIST} onAddClick={onAddItemClick} />
    </AppContainer>
  );
}

App.propTypes = {
  list: PropTypes.array,
  total: PropTypes.number,
  onAddItemClick: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  list: getStructuredList,
  total: getTotal,
});

const mapDispatchToProps = dispatch => ({
  onAddItemClick: item => {
    dispatch(addToList(item));
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);
