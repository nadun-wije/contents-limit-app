/* eslint-disable react/prefer-stateless-function */
/**
 *
 * AddToList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { AddToListContainer, Select, Input, Button } from './styledComponents';

export class AddToList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      category: props.categories && props.categories[0],
    };

    this.updateName = this.updateName.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.addClickHandler = this.addClickHandler.bind(this);
  }

  updateName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  updatePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }

  updateCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }

  addClickHandler() {
    this.props.onAddClick({
      name: this.state.name,
      price: this.state.price.toString(),
      category: this.state.category,
    });
  }

  render() {
    const { categories } = this.props;
    return (
      <AddToListContainer>
        <div>
          <Input
            type="text"
            name="NAME"
            placeholder="Item name"
            onChange={this.updateName}
          />
          <Input type="number" name="PRICE" onChange={this.updatePrice} />
          <Select onChange={this.updateCategory}>
            {categories.map(category => (
              <option key={category}>{category}</option>
            ))}
          </Select>
        </div>
        <Button
          type="button"
          onClick={this.addClickHandler}
          disabled={!this.state.name || !this.state.price}
        >
          Add
        </Button>
      </AddToListContainer>
    );
  }
}

AddToList.propTypes = {
  categories: PropTypes.array.isRequired,
  onAddClick: PropTypes.func.isRequired,
};

export default AddToList;
