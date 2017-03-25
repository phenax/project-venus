import React from 'react';

import Wrapper from './WrapperComponent';
import Navbar from './components/Navbar';

export default class ReactComponent extends React.Component {

	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<Wrapper title='Reviews'>

				<Navbar />


				<div className="container">
	
					<div class="jumbotron">
						<h1>Bootstrap Tutorial</h1> 
						<p>Bootstrap is the most popular HTML, CSS, and JS framework for developing
						responsive, mobile-first projects on the web.</p> 
					</div>

					<div className="sidebar">
						Lsifndjfjsbd 
					</div>

					<div className="body">
						<div className="review">ksjfhsdjk</div>
					</div>
					
					<div className="footer">
					asjkf
					</div>
					
				</div>
			</Wrapper>
		);
	}
}
