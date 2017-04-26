import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<nav className="nav navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a href="#" className="navbar-brand">Tony Nguyen</a>
					</div>
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav navbar-right">
        			<li><a href="#">Projects</a></li>
        			<li><a href="#">About Me</a></li>
        			<li><a href="#">About Site</a></li>
            </ul>
					</div>
				</div>
			</nav>	
		)			
	}	
}

export default Navbar;
