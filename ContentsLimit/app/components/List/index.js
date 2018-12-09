/**
 *
 * List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import CategoryList from '../CategoryList';
import { ListContainer } from './styledComponents';

function List({ list }) {
  return (
    <ListContainer>
      {list.map(item => (
        <CategoryList
          key={item.category}
          category={item.category}
          total={item.total}
          items={item.items}
        />
      ))}
    </ListContainer>
  );
}

List.propTypes = {
  list: PropTypes.array.isRequired,
};

export default List;
