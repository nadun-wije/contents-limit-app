import React from 'react';
import { shallow } from 'enzyme';

import { ListItem } from '../index';
import { Name, Price } from '../styledComponents';

describe('<ListItem />', () => {
  const props = {
    name: 'some name',
    price: '100',
    id: 1,
  };

  it('should exist', () => {
    expect(shallow(<ListItem {...props} />).exists()).toBe(true);
  });

  it('should render a Name component', () => {
    expect(shallow(<ListItem {...props} />).find(Name).length).toEqual(1);
  });

  it('should render a Price component', () => {
    expect(shallow(<ListItem {...props} />).find(Price).length).toEqual(1);
  });

  describe('Rendering delete button', () => {
    it('should render a button when isCategory is false', () => {
      expect(
        shallow(<ListItem {...props} isCategory={false} />).find('button')
          .length,
      ).toEqual(1);
    });

    it('should NOT render a button when isCategory is true', () => {
      expect(
        shallow(<ListItem {...props} isCategory />).find('button').length,
      ).toEqual(0);
    });
  });
});
