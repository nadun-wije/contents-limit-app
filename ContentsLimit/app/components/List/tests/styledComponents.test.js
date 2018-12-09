/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ListContainer } from '../styledComponents';

describe('List styled components', () => {
  describe('ListContainer styled component', () => {
    it('should exist', () => {
      expect(shallow(<ListContainer />).exists()).toBe(true);
    });

    it('should render with styles', () => {
      const tree = renderer.create(<ListContainer />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
