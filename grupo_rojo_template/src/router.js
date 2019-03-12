import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './Components/Header';
import Menu from './Components/Menu';

import Inicio from './Views/Inicio';

class ViewRouter extends Component {


	render(){
		return (
			<Router>
      			<div>
      				<Header/>
      				<Menu />
			 		<Route path={"/"} component={Inicio} />
			    </div>
			</Router>
		);
	}
}

export default ViewRouter;