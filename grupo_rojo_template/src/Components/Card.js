import React, { Component } from "react";

class Card extends Component {

	render(){

		const {
			icon,
			title,
			desc,
			link
		} = this.props;

		return (
			<div className="col-md-4 animate-box">
				<div className="feature-left">
					<span className="icon">
						<i className={ icon }></i>
					</span>
					<div className="feature-copy">
						<h3>{ title }</h3>
						<p>{ desc }</p>
						<p><a href={ link }>Learn More</a></p>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;