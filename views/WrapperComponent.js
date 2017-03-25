
import React from 'react';

export default ({ title, children }) => (
	<html>
		<head>
			<title>{title}</title>
			<link rel='stylesheet' href='/css/bootstrap.min.css' />
		</head>
		<body>
			<div className='render-hook'>
				{children}
			</div>
		</body>
	</html>
);
