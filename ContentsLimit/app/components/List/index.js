import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styledComponents';
import CategoryList from '../CategoryList';

function List({ list, onDeleteClick }) {
  return (
    <Container>
      {list.map(item => (
        <CategoryList
          key={item.category}
          category={item.category}
          total={item.total}
          items={item.items}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </Container>
  );
}

List.propTypes = {
  list: PropTypes.array,
  onDeleteClick: PropTypes.func,
};

export default List;
