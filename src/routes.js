import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import Projects from './components/Projects';


const AppRouter = () => (
	<Router>
		<div>
			<Route exact path="/" component={App} />
			<Route path="/projects" component={Projects} />
		</div>
	</Router>
)

export default AppRouter;
