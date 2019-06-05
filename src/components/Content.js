import React from 'react';
import Home from './Home';
import Tips from './Tips';
import Rejected from './Rejected';
import { Switch, Route } from 'react-router-dom';

// Note: Added '/', '/rejected/', and '/rejected/home'...
// as github.io page and react single page app don't mix well, not using hashrouter either.
const Content = () => {
  return (
    <div className='content_body'>
      <Switch>
        <Route path='/rejected/home' component={ Home } />
        <Route path='/rejected/tips' component={ Tips } />
        <Route path='/rejected/details' component={ Rejected } />
        <Route path='/rejected/' component={ Home } />
        <Route exact path='/' component={ Home } />
      </Switch>
    </div>
  );
}

export default Content;
