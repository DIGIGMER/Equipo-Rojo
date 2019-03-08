import React, { Component } from "react";

class Input extends Component {

	_label = "Nombre";

	state = {
		value: ""
	};

	render(){
		return (
			<div>
				<label>{ this._label }: ({ this.state.value }) </label>
				<input
					onChange={({ target: { value } }) => {
						console.log(value);
						this.setState({ value: value });
					}}
				/>
			</div>
		);
	}
}

export default Input;