import React from 'react';

import Wrapper from './WrapperComponent';

export default class ReactComponent extends React.Component {

	constructor(props) {
		super(props);
		
	}
	
	render() {
		return (
			<Wrapper>
				<div className='fooo'>
					Hello world
				</div>
			</Wrapper>
		);
	}
}
