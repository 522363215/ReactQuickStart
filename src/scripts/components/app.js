import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import {
	is
} from 'immutable';
import {
	Router,
	Route,
	hashHistory,
	browserHistory
} from 'react-router';

import '../../styles/app.css';


class App extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !(this.props === nextProps || is(this.props, nextProps)) ||
			!(this.state === nextState || is(this.state, nextState));
	}

	handleClick(names) {}

	render() {
		const {
			somestate
		} = this.props;
	}
}


export default connect(state => ({
	somestate: state.get('somestate')
}))(App);