/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

import { Container, InputFields, Input, Button } from './styledComponents';

export class AddToList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      category: '',
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
      price: this.state.price,
      category: this.state.category,
    });
  }

  render() {
    const { categories } = this.props;
    return (
      <Container>
        <InputFields>
          <Input
            type="text"
            name="NAME"
            placeholder="Item name"
            onChange={this.updateName}
          />
          <Input type="number" name="PRICE" onChange={this.updatePrice} />
          <select onChange={this.updateCategory}>
            {categories.map(category => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </InputFields>
        <Button
          type="button"
          onClick={this.addClickHandler}
          disabled={!this.state.name || !this.state.price}
        >
          Add
        </Button>
      </Container>
    );
  }
}

AddToList.propTypes = {
  categories: PropTypes.array.isRequired,
  onAddClick: PropTypes.func,
};

export default AddToList;
