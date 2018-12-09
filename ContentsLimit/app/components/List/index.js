import React from 'react';
import PropTypes from 'prop-types';

import CategoryList from '../CategoryList';
import { Container } from './styledComponents';

function List({ list }) {
  return (
    <Container>
      {list.map(item => (
        <CategoryList
          key={item.category}
          category={item.category}
          total={item.total}
          items={item.items}
        />
      ))}
    </Container>
  );
}

List.propTypes = {
  list: PropTypes.array,
};

export default List;
