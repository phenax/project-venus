
import React from 'react';

import Wrapper from './WrapperComponent';
import Navbar from './components/Navbar';

export default class HomePage extends React.Component {


	render() {

		return (
			<Wrapper title='Reviews'>

				<Navbar request={this.props.request} />

				<div className='container'>

					<section className='trending' style={{ padding: '1em' }}>

						<h2>Trending pages</h2>

						{this.props.pages.map(page => (
							<div className='card'>
								<div className='card__title'>{page.name}</div>
								<div className='card__content'>
									<div className='text-left'>
										<span className='label label-primary'>{page.category.name}</span>
									</div>
									{page.description}
								</div>
							</div>
						))}

					</section>

					<br />
					<br />
					<br />
					<br />
				</div>
			</Wrapper>
		);
	}

}
