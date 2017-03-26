import React from 'react';

import Wrapper from './WrapperComponent';
import Navbar from './components/Navbar';

export default class ReactComponent extends React.Component {
	
	render() {

		return (
			<Wrapper title='Reviews'>

				<Navbar request={this.props.request} />

				<div className="container">
	
					<div className="jumbotron masthead" style={{ backgroundImage: 'url(/img/bg.jpeg)', 'transform': 'none', 'minHeight': '400px' }}>
						<div className='masthead__overlay' />
						<h4 className='masthead__title'>{this.props.page.name}</h4>
						<p className='masthead__content' style={{ fontSize: '.9em' }}>{this.props.page.description}</p>
						<div className=''>{this.props.page.dataValues.numberOfReviews}</div>
					</div>

					<br />
					<br />

					<div className="row">
						<div className='col-md-3'>
							<div style={{ margin: '' }}>
								<div>Top rated</div>
							</div>
						</div>
						<div className='col-md-9'>


							<div className='card'>
								<form action='/api/reviews/add' method='POST' className='card__content'>
									<label>Review: </label>
									<textarea
										placeholder='Add review'
										name='content'
										className='form-control'
										row='5'
										style={{ resizeX: 'none' }}
									/>
									<br />
									<div className='row'>
										<div className='col-md-8'>
											<label style={{ fontSize: '1.2em', padding: '0 1em' }}>Rating: </label>
											<select className='form-control' style={{ width: 'auto', display: 'inline-block' }}>
												{Array(10).fill(1).map((_, i) => (
													<option value={i + 1}>{i + 1}</option>
												))}
											</select>
										</div>
										<div className='col-md-4'>
											<div className='text-right' style={{ padding: '1em 0 0' }}>
												<button className='btn btn-primary'>Submit</button>
											</div>
										</div>
									</div>
								</form>
							</div>


							<br />
							<br />


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
												<a href={`/user/${review.user.id}`}>
													<div className='row'>
														<div className='col-md-2' style={{ paddingLeft: '1em' }}>
															<img src={review.user.image} className='card__info__img' />
														</div>
														<div className='col-md-10'>
															<div style={{ fontSize: '1.2em' }} className='text-primary'>{review.user.name}</div>
															<strong
																style={{ fontSize: '.9em' }}
																className='text-muted'>
																{review.dataValues.createdAtFormatted}
															</strong>
														</div>
													</div>
												</a>
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
