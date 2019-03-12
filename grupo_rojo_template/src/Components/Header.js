import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {

	render(){
		return (
			<header id="fh5co-header-section" className="sticky-banner">
				<div className="container">
					<div className="nav-header">
						<Link 
							to="/"
							className="js-fh5co-nav-toggle fh5co-nav-toggle dark"
						><i></i></Link>
						<h1 id="fh5co-logo">
							<Link to="/">
								<i className="icon-home"></i>
								Home<span>state</span>
							</Link>
						</h1>
						<nav id="fh5co-menu-wrap" role="navigation">
							<ul className="sf-menu" id="fh5co-primary-menu">
								<li className="active"><Link to="/">Home</Link></li>
								<li>
									<a 
										href="properties.html" 
										className="fh5co-sub-ddown"
									>Properties</a>
									<ul className="fh5co-sub-menu">
										<li><Link to="#">Family</Link></li>
										<li><Link to="#">CSS3 &amp; HTML5</Link></li>
										<li><Link to="#">Angular JS</Link></li>
										<li><Link to="#">Node JS</Link></li>
										<li><Link to="#">Django &amp; Python</Link></li>
									</ul>
								</li>
								<li><Link to="/agent">Agent</Link></li>
								<li><Link to="/blog">Blog</Link></li>
								<li><Link to="/contact">Contact</Link></li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		);
	}
} 

export default Header;