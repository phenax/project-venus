
import React from 'react';

import Wrapper from './WrapperComponent';
import Navbar from './components/Navbar';

export default class ProfilePage extends React.Component {


	render() {

		return (
			<Wrapper title='Reviews'>

				<Navbar />

				<div className='container'>

					<div class="cover">
						<img class="user-pic" src={this.props.user.image} height="90px" width="90px" />
						<h2 class="user-name">{this.props.user.name}</h2>
						<p class="user-bio">{this.props.user.bio}</p>
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
