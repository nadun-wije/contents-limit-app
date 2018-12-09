/**
 *
 * CategoryList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '../ListItem';
import { Container } from './styledComponents';

function CategoryList({ category, total, items }) {
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
          />
        ))}
      </Container>
    </React.Fragment>
  );
}

CategoryList.propTypes = {
  category: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default CategoryList;
