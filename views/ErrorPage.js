import React from 'react';

import Wrapper from './WrapperComponent';
import Navbar from './components/Navbar';

export default class ReactComponent extends React.Component {
	
	render() {
		return (
			<Wrapper title='Something went wrong'>
				<Navbar request={this.props.request} />
				<div className='container'>
					<br />
					<br />
					<h2 className='fooo'>
						{this.props.message}
					</h2>
					<div className='fooo'>
						{JSON.stringify(this.props.error)}
					</div>
				</div>
			</Wrapper>
		);
	}
}
