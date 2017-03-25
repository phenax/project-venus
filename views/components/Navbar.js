
import React from 'react';


export default class Navbar extends React.Component {

	constructor(props) {
		super(props);


	}

	render() {

		return (
			<div className='header'>
				<nav className="navbar navbar-default" style={{ 'borderRadius': '0', 'boxShadow': '0 1px 5px 1px rgba(0,0,0,.3)' }}>
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

						<div className="collapse navbar-collapse search" id="bs-example-navbar-collapse-1">
							<form className="navbar-form navbar-left" role="search">
								<div className="form-group">
									<input className="form-control search__input" placeholder="Search" type="text" />
									<select className="form-control dropdown search__select">
										<option value="movie">Movie</option>
										<option value="restaurants">Restaurants</option>
										<option value="something">Something</option>
									</select>
								</div>
								<button type="submit" className="btn btn-default search__btn">Submit</button>
							</form>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

Navbar.propTypes= {
	
};

