/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';

import { App } from '../index';
import List from '../../../components/List';
import { TotalText } from '../styledComponents';
import AddToList from '../../../components/AddToList';

describe('<App />', () => {
  const props = {
    list: [],
    onAddItemClick: () => {},
  };

  it('should exist', () => {
    expect(shallow(<App {...props} />).exists()).toBe(true);
  });

  it('should render List component', () => {
    expect(shallow(<App {...props} />).find(List).length).toBe(1);
  });

  it('should render TotalText component', () => {
    expect(shallow(<App {...props} />).find(TotalText).length).toBe(1);
  });

  it('should render AddToList component', () => {
    expect(shallow(<App {...props} />).find(AddToList).length).toBe(1);
  });
});
