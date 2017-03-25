
import React from 'react';

import Wrapper from './WrapperComponent';
import Navbar from './components/Navbar';

export default class HomePage extends React.Component {


	render() {

		return (
			<Wrapper title='Reviews'>

				<Navbar />

				<div className='masthead' style={{ backgroundImage: 'url(/img/bg.jpeg)' }}>
					<div className='masthead__overlay' />
					<h2 className='masthead__title'>Venus</h2>
					<p className='masthead__content'>Receding camera engine j-pop papier-mache ablative dissident apophenia</p>
				</div>

				<div className='container'>

					<section className='login'>
						
					</section>

				</div>
			</Wrapper>
		);
	}

}
