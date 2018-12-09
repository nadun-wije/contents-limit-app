/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './containers/App';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  );
}
