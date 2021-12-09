import React, { Component } from 'react';

export default class Button extends Component {

	// stops rendering after "yellow" comes to props.
	shouldComponentUpdate = (nextProps) => {
		if (nextProps.backgroundColor === 'yellow') {
			alert("lol");
			return false;
		}; return true;
	};
	render() {
		const { backgroundColor } = this.props;
		return (
			<div>
				<button style={ { backgroundColor: backgroundColor } }>
					LSD button
				</button>
			</div>
		);
	}
}
