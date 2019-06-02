import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Content from './components/Content'
import './styles/app.css';

class App extends Component {
	render() {
		return (
			<div id='app'>
				<NavBar />
				<Content />
			</div>
		);
	}
}

export default App;
