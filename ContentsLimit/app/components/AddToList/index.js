import React from 'react';
import PropTypes from 'prop-types';

import { Container, InputFields, Input, Button } from './styledComponents';

function AddToList({ categories, onAddClick }) {
  return (
    <Container>
      <InputFields>
        <Input type="text" name="NAME" placeholder="Item name" />
        <Input type="number" name="PRICE" />
        <select>
          {categories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </InputFields>
      <Button type="button" onClick={onAddClick}>
        Add
      </Button>
    </Container>
  );
}

AddToList.propTypes = {
  categories: PropTypes.array.isRequired,
  onAddClick: PropTypes.func,
};

export default AddToList;
