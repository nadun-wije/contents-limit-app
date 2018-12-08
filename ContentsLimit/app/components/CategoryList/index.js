import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styledComponents';
import ListItem from '../ListItem';

function CategoryList({ category, total, items }) {
  return (
    <React.Fragment>
      <ListItem name={category} price={total} isCategory={true} />
      <Container>
        {items.map(item => (
          <ListItem key={item.id} name={item.name} price={item.price} />
        ))}
      </Container>
    </React.Fragment>
  );
}

CategoryList.propTypes = {
  category: PropTypes.string,
  total: PropTypes.number,
  items: PropTypes.array,
};

export default CategoryList;
