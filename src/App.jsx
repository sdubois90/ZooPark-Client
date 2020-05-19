import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavMain from './components/NavMain';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/Profile';
import Main from './pages/Main';
import 'semantic-ui-css/semantic.min.css';

function App() {
	return (
		<div className="App">
			<NavMain />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/signin" component={Signin} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/main" component={Main} />
				<ProtectedRoute exact path="/profile" component={Profile} />
			</Switch>
		</div>
	);
}

export default App;
