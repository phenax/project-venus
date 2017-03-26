import React from 'react';

import Wrapper from './WrapperComponent';
import Navbar from './components/Navbar';

export default class ReactComponent extends React.Component {
	
	render() {
		return (
			<Wrapper title={`All ${this.props.category.name}`}>

				<Navbar request={this.props.request} />

				<div className='container'>

					<h1>
						<div>{this.props.category.name}</div>
					</h1>

					<div className='center-wrapper'>
						{this.props.category.pages.map(page => (
							<div className='card'>
								<br />
								<div className='card__title'>
									{page.name}
								</div>
								<div className='card__content'>
									{page.description}
								</div>
								<div className='card__action'>
									<a href={`/${this.props.category.alias}/${page.alias}`} className='btn btn-success btn-sm'>
										Go to review page&nbsp;&nbsp;<i className='fa fa-arrow-right' />
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</Wrapper>
		);
	}
}
