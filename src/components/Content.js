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
				<Route exact path='/rejected/home' component={ Home } />
				<Route path='/rejected/details' component={ Rejected } />
				<Route path='/rejected/tips' component={ Tips } />
				<Route path='/rejected/' component={ Home } />
			</Switch>
		</div>
	);
}

export default Content;
