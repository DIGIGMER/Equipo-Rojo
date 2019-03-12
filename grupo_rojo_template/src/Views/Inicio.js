import React, { Component } from "react";
import Card from '../Components/Card';

class Inicio extends Component {

	render(){
		return (
			<div>
				<div id="fh5co-features">
					<div className="container">
						<div className="row">
							{ this._renderCards(window._my_cards.slice(0,3)) }
						</div>
						<div className="row">
							{ this._renderCards(window._my_cards.slice(3,6)) }
						</div>
					</div>
				</div>
			</div>
		);
	}

	_renderCards = (arr) => {
		return arr.map((item, i) => {
			return (
				<Card {...item}/>
			);
		});
	};

}

export default Inicio;