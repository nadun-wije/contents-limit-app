import React from 'react';
import PropTypes from 'prop-types';

import DeleteIcon from '../../images/delete.png';
import { Price, Name, Container } from './styledComponents';

function ListItem({ name, price, isCategory }) {
  return (
    <Container isCategory={isCategory}>
      <Name>{name}</Name>
      <Price>$ {price}</Price>
      {!isCategory && <img src={DeleteIcon} alt="Delete" />}
    </Container>
  );
}

ListItem.defaultProps = {
  isCategory: false,
};

ListItem.propTypes = {
  isCategory: PropTypes.bool,
  name: PropTypes.string,
  price: PropTypes.string,
};

export default ListItem;
