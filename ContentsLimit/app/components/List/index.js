import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styledComponents';
import CategoryList from '../CategoryList';

function List(props) {
  return (
    <Container>
      {props.categories.map(item => (
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
  categories: PropTypes.array,
};

export default List;
