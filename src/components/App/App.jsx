
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Messages from '../Messages';

class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path="/" component={Home} />
				</Switch>
				<Messages />
			</div>
		);
	}
}

export default App;