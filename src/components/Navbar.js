import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<nav className="nav navbar-default custom-nav">
				<div className="container-fluid">
					<div className="navbar-header">
						<a href="#" className="navbar-brand nav-links">Photo Gallery</a>
					</div>
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav navbar-right">
        			<li><a className="nav-links" href="#">Projects</a></li>
        			<li><a className="nav-links" href="#">About</a></li>
        			<li><a className="nav-links" href="#">About Site</a></li>
            </ul>
					</div>
				</div>
			</nav>	
		)			
	}	
}

export default Navbar;
