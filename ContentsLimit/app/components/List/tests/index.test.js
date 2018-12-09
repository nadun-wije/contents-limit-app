import React from 'react';
import { shallow } from 'enzyme';

import List from '../index';
import CategoryList from '../../CategoryList';

describe('<List />', () => {
  const props = {
    list: [],
  };

  it('should exist', () => {
    expect(shallow(<List {...props} />).exists()).toBe(true);
  });

  it('should render a CategoryList component for each element in list prop', () => {
    expect(
      shallow(
        <List
          list={[
            { category: 'a', total: '10', items: [] },
            { category: 'b', total: '20', items: [] },
            { category: 'c', total: '30', items: [] },
          ]}
        />,
      ).find(CategoryList).length,
    ).toEqual(3);
  });
});
