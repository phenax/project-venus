import React from 'react';

import Wrapper from './WrapperComponent';
import Navbar from './components/Navbar';

export default class ReactComponent extends React.Component {
	
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
								<div>Top rated</div>
							</div>
						</div>
						<div className='col-md-9'>
							<div>Reviews</div>

							{this.props.page.reviews
								.map(review => {

									review.className= 'text-success';

									if(review.rating < 2) {
										review.className= 'text-danger';
									} else if(review.rating < 5) {
										review.className= 'text-warning';
									} else if(review.rating < 7) {
										review.className= 'text-info';
									}

									return review;
								})
								.map((review, i) => (
									<div className='card' key={i}>
										<div className='card__info row'>
											<div className='col-md-9'>
												<div style={{ fontSize: '1.2em' }}>{review.user.name}</div>
												<div>@{review.user.username}</div>
											</div>
											<h3 className={`col-md-3 text-right ${review.className}`} style={{ margin: '0' }}>
												{review.rating}/10
											</h3>
										</div>
										<div className='card__content'>
											{review.content}
										</div>
										<div className='card__actions'>

										</div>
									</div>
								)
							)}
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
