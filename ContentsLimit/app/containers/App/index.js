/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Application from '../Application';

const AppWrapper = styled.div`
  border: 1px solid black;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  margin-top: 40px;
  font-size: 16px;
  line-height: 20px;
`;

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Application} />
    </Switch>
  );
}
