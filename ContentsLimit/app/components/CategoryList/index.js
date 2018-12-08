import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styledComponents';
import ListItem from '../ListItem';

function CategoryList(props) {
  return (
    <React.Fragment>
      <ListItem name={props.category} price={props.total} />
      <Container>
        {props.items.map(item => (
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
