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
	
					<div className="jumbotron masthead" style={{ backgroundImage: 'url(/img/bg.jpeg)', 'transform': 'none', 'minHeight': '400px' }}>
						<div className='masthead__overlay' />
						<h4 className='masthead__title'>Bootstrap Tutorial</h4>
						<p className='masthead__content' style={{ fontSize: '.9em' }}>Bootstrap is the most popular HTML, CSS, and JS framework for developing
						responsive, mobile-first projects on the web.</p> 
					</div>

					<div className="row">
						<div className='col-md-3'>
							<div style={{ margin: '' }}>
								<div>
									Top rated
								</div>
							</div>
						</div>
						<div className='col-md-9'>
							<div>
								Reviews
							</div>

							<div className='card'>
								<div>
									<div>Hello world</div>
									<div>@helloworld</div>
								</div>
							</div>
							<div className='card'>
								<div>
									<div>Hello world</div>
									<div>@helloworld</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		);
	}
}
