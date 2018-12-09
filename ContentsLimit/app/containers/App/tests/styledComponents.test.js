/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { AppContainer, TotalText, ListContainer } from '../styledComponents';

describe('App styled components', () => {
  describe('AppContainer styled component', () => {
    it('should exist', () => {
      expect(shallow(<AppContainer />).exists()).toBe(true);
    });

    it('should render with styles', () => {
      const tree = renderer.create(<AppContainer />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('TotalText styled component', () => {
    it('should exist', () => {
      expect(shallow(<TotalText />).exists()).toBe(true);
    });

    it('should render with styles', () => {
      const tree = renderer.create(<TotalText />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

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
