import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styledComponents';
import ListItem from '../ListItem';

function CategoryList({ category, total, items, onDeleteClick }) {
  return (
    <React.Fragment>
      <ListItem name={category} price={total} isCategory />
      <Container>
        {items.map(item => (
          <ListItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </Container>
    </React.Fragment>
  );
}

CategoryList.propTypes = {
  category: PropTypes.string,
  total: PropTypes.number,
  items: PropTypes.array,
  onDeleteClick: PropTypes.func,
};

export default CategoryList;
