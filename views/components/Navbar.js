
import React from 'react';


export default class Navbar extends React.Component {

	render() {

		let navbarActions= (
			<ul className="nav navbar-nav navbar-right">
				<li><a href='/auth/google'>Login with google</a></li>
			</ul>
		);

		if(this.props.request.isAuthenticated()) {
			navbarActions= (
				<ul className="nav navbar-nav navbar-right">
					<li><a href='/me'>{this.props.request.user.name}</a></li>
					<li><a href='/logout'>Logout</a></li>
				</ul>
			);
		}

		return (
			<div className='header'>

				<nav className="navbar navbar-default" style={{ 'borderRadius': '0', 'boxShadow': '0 1px 5px 1px rgba(0,0,0,.3)' }}>

					<div className="container-fluid">

						<div className="navbar-header">

							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsable-nav-bar">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>

							<a className="navbar-brand" href="/">
								{/*<i className='fa fa-globe fa-lg' style={{ opacity: '.5', padding: '0 .5em 0 .3em' }} />*/}
								<span style={{ padding: '0 .5em 0 .3em' }}>Project Venus</span>
							</a>

						</div>

						<div className="collapse navbar-collapse search" id="collapsable-nav-bar">

							{/*<form className="navbar-form navbar-left" role="search" style={{ width: 'auto' }}>

								<div className="form-group search__input-wrapper">
									<input className="form-control search__input" placeholder="Search" type="text" />
								</div>

								<button type="submit" className="btn btn-default search__btn"><i className='fa fa-search'></i></button>

							</form>*/}

							{/* Navigation bar actions(right) */}
							{navbarActions}

						</div>

					</div>
				</nav>
			</div>
		);
	}
}

Navbar.propTypes= {
	
};

