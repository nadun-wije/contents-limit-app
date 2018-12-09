/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Application from '../Application';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Application} />
    </Switch>
  );
}
