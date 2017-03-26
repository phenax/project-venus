
import React from 'react';

import Wrapper from './WrapperComponent';
import Navbar from './components/Navbar';

export default class ProfilePage extends React.Component {


	render() {

		return (
			<Wrapper title={`${this.props.user.name}'s profile | Venus`}>

				<Navbar request={this.props.request} />

				<div className='container' style={{ margin: '2em auto' }}>

					<div className="cover row">
						<div className='col-md-4'>
							<img className="user-pic" src={this.props.user.image} />
						</div>
						<div className='col-md-8 text-left'>
							<h2 className="user-name">{this.props.user.name}</h2>
							<p className="user-bio">{this.props.user.bio}</p>
						</div>
					</div>

					<div style={{ padding: '1em' }}>

						<h2>Reviews by user</h2>

						{this.props.user.reviews
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
							.map(review => (
								<div className='card'>
									<div className='card__info'>
										<div className='row'>
											<a href={`/${review.page.category.alias}/${review.page.alias}`}>
												<div className='col-md-9'>
													<div className='text-primary text-uppercase'>
														<strong>{review.page.name}</strong>
													</div>
													<div className='text-muted'>{review.dataValues.createdAtFormatted}</div>
												</div>
											</a>
											<h3 className={`col-md-3 text-right ${review.className}`} style={{ margin: '0' }}>
												{review.rating}/10
											</h3>
										</div>
									</div>
									<div className='card__content'>{review.content}</div>
								</div>
							)
						)}
					</div>

				</div>

				<br />
				<br />
				<br />
				<br />

			</Wrapper>
		);
	}

}
