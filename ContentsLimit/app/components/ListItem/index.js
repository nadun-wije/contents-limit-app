/**
 *
 * ListItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { deleteFromList } from '../../containers/App/actions';
import DeleteIcon from '../../images/delete.png';

import { Price, Name, Container } from './styledComponents';

export function ListItem({ name, price, id, isCategory, onDeleteClick }) {
  return (
    <Container isCategory={isCategory}>
      <Name isBold={isCategory}>{name}</Name>
      <Price isBold={isCategory}>$ {price}</Price>

      {/* Only display delete button if it's not a category header */}
      {!isCategory && (
        <button
          type="button"
          onClick={() => {
            onDeleteClick(id);
          }}
        >
          <img src={DeleteIcon} alt="Delete" />
        </button>
      )}
    </Container>
  );
}

ListItem.defaultProps = {
  isCategory: false,
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.number,
  isCategory: PropTypes.bool,
  onDeleteClick: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onDeleteClick: id => {
    dispatch(deleteFromList(id));
  },
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(ListItem);
