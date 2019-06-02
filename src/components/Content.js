import React from 'react';
import Home from './Home';
import Tips from './Tips';
import Rejected from './Rejected';
import { Switch, Route } from 'react-router-dom';

// Nav bar content.
const Content = () => {
	return (
		<div className='content_body'>
			<Switch>
				<Route exact path='/home' component={ Home } />
				<Route path='/rejected' component={ Rejected } />
				<Route path='/tips' component={ Tips } />
			</Switch>
		</div>
	);
}

export default Content;
