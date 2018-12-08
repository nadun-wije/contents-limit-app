import React from 'react';
import PropTypes from 'prop-types';

import DeleteIcon from '../../images/delete.png';
import { Price, Item, Container } from './styledComponents';

function ListItem(props) {
  return (
    <Container>
      <Item>{props.name}</Item>
      <Price>{props.price}</Price>
      <img src={DeleteIcon} alt="Delete" />
    </Container>
  );
}

ListItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};

export default ListItem;
