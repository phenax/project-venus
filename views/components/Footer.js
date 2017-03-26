
import React from 'react';


export default class Footer extends React.Component {

	render() {

		return (
			<footer
				className='navbar navbar-default text-center'
				style={{
					borderRadius: '0', 'color': '#fff', margin: '0',
					display: 'flex', justifyContent: 'center', alignItems: 'center',
				}}>
				Made with&nbsp;&nbsp;<i className='fa fa-heart' />
			</footer>
		);
	}
}
