
import React from 'react';

import Wrapper from './WrapperComponent';
import Navbar from './components/Navbar';

export default class ProfilePage extends React.Component {


	render() {

		return (
			<Wrapper title='Reviews'>

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

				</div>

				<br />
				<br />
				<br />
				<br />

			</Wrapper>
		);
	}

}
