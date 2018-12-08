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
import ListItem from '../../components/ListItem';
import CategoryList from '../../components/CategoryList';

function Application() {
  return (
    <CategoryList
      category="asdf"
      total="456"
      items={[
        { id: 1, name: 'First', price: 10 },
        { id: 2, name: 'Second', price: 20 },
      ]}
    />
  );
}

Application.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  application: makeSelectApplication(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'application', reducer });

export default compose(
  withReducer,
  withConnect,
)(Application);
