
import React from 'react';

import Wrapper from './WrapperComponent';
import Navbar from './components/Navbar';

export default class HomePage extends React.Component {


	plural(name='') {
		name= name.toLowerCase();

		if(name.endsWith('s')) {
			name+= '\'';
		} else {
			name+= 's';
		}

		return name;
	}

	render() {

		return (
			<Wrapper title='Home | Venus'>

				<Navbar request={this.props.request} />

				<div className='masthead' style={{ backgroundImage: 'url(/img/bg.jpeg)' }}>
					<div className='masthead__overlay' />
					<h2 className='masthead__title'>Venus</h2>
					<p className='masthead__content'>Receding camera engine j-pop papier-mache ablative dissident apophenia</p>
					<a href="/auth/google" className="btn btn-danger" style={{ textShadow: 'none' }}>
						<span className="fa fa-google-plus"></span>
						&nbsp;&nbsp;&nbsp;&nbsp;Sign up with Google
					</a>
				</div>

				<div className='container'>

					<br />

					<section className='trending' style={{ padding: '1em' }}>

						<h2>Categories</h2>

						{this.props.categories.map(cat => (
							<a
								className='label label-primary'
								href={`/category/${cat.alias}`}
								style={{ marginRight: '1em' }}
							>{cat.name}</a>
						))}

					</section>

					<br />

					<section className='trending' style={{ padding: '1em' }}>

						<h2>Suggested pages</h2>

						{this.props.pages.map(page => (
							<div className='card'>
								<br />
								<div className='card__title'>
									{page.category.name} - {page.name}
								</div>
								<div className='card__content'>
									{page.description}
								</div>
								<div className='card__action'>
									<a href={`/category/${page.category.alias}`} className='btn btn-default btn-sm'>
										View more {this.plural(page.category.name)}
									</a>
									<a href={`/${page.category.alias}/${page.alias}`} className='btn btn-success btn-sm'>
										Go to review page&nbsp;&nbsp;<i className='fa fa-arrow-right' />
									</a>
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
