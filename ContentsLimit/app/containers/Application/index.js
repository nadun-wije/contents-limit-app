/* eslint-disable linebreak-style */

/**
 *
 * Application
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectApplication from './selectors';
import reducer from './reducer';
import List from '../../components/List';
import { AppContainer, TotalText } from './styledComponents';
import AddToList from '../../components/AddToList';
import { CATEGORY_LIST } from './constants';

function Application({ total, onAddItemClick, onDeleteItemClick }) {
  return (
    <AppContainer>
      <List
        categories={[
          {
            category: 'Electronics',
            total: 123,
            items: [
              { id: 1, name: 'First', price: 10 },
              { id: 2, name: 'Second', price: 20 },
            ],
          },
          {
            category: 'Clothing',
            total: 123,
            items: [
              { id: 3, name: 'Third', price: 10 },
              { id: 4, name: 'Fourth', price: 20 },
            ],
          },
        ]}
      />

      <TotalText>Total: {total}</TotalText>

      <AddToList categories={CATEGORY_LIST} onAddClick={onAddItemClick} />
    </AppContainer>
  );
}

Application.propTypes = {
  total: PropTypes.number,
  onAddItemClick: PropTypes.func,
  onDeleteItemClick: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  application: makeSelectApplication(),
});

const mapDispatchToProps = dispatch => ({
  onDeleteItemClick: () => {
    console.log('onDeleteItemClick');
  },
  onAddItemClick: () => {
    console.log('onAddItemClick');
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'application', reducer });

export default compose(
  withReducer,
  withConnect,
)(Application);
