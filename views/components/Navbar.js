
import React from 'react';


export default class Navbar extends React.Component {

	constructor(props) {
		super(props);


	}

	render() {

		return (
			<nav className="navbar navbar-default" style={{ 'borderRadius': '0', 'boxShadow': '0 1px 5px 1px #888' }}>
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">Venus</a>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<form className="navbar-form navbar-left" role="search">
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Search" />
							</div>
							<button type="submit" className="btn btn-default">Submit</button>
						</form>
						<ul className="nav navbar-nav navbar-right">
							<li><a href="#">Link</a></li>
							<li><a href="#">Link</a></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

Navbar.propTypes= {
	
};

