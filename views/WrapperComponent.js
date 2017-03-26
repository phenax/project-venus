
import React from 'react';

import Footer from './components/Footer';

export default ({ title, children }) => (
	<html>
		<head>
			<title>{title}</title>
			<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
			<link rel='stylesheet' href='/css/bootstrap.min.css' />
			<link rel='stylesheet' href='/css/style.css' />
		</head>
		<body>
			<div className='render-hook'>
				{children}
			</div>
			<Footer />
		</body>
	</html>
);
