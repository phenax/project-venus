
import React from 'react';

export default ({ title, children }) => (
	<html>
		<head>
			<title>{title}</title>
			<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
			<link rel='stylesheet' href='/css/bootstrap.min.css' />
			<link rel='stylesheet' href='/css/style.css' />
		</head>
		<body>
			<div className='render-hook'>
				{children}
			</div>
		</body>
	</html>
);
