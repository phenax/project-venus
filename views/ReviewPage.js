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
						<h4 className='masthead__title'>{this.props.page.name}</h4>
						<p className='masthead__content' style={{ fontSize: '.9em' }}>{this.props.page.description}</p> 
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

							{this.props.page.reviews.map(review => (
								<div className='card'>
									<div className='card__info'>
										<div>{review.user.name}</div>
										<div>@{review.user.username}</div>
									</div>
									<div>
										{review.content}
									</div>
								</div>
							))}
						</div>
					</div>

					<br />
					<br />
					<br />
				</div>
			</Wrapper>
		);
	}
}
