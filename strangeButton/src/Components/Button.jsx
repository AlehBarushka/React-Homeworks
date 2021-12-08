import React from 'react';

export const Button = (props) => {
	return (
		<div>
			<button style={ { backgroundColor: props.backgroundColor } }>
				LSD button
			</button>
		</div>
	);
};
