import { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { MenuItems } from '../MenuItems/MenuItems';
class Navbar extends Component {
	state = { clicked: false };
	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};
	render() {
		return (
			<nav className='navbarItems'>
				<h1 className='navbarLogo'>Nature Adventure</h1>
				<div className='menuIcons' onClick={this.handleClick}>
					<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
				</div>
				<ul className={this.state.clicked ? 'navMenu active' : 'navMenu'}>
					{MenuItems.map((item, index) => {
						return (
							<li key={index}>
								<a href='/' className={item.cName}>
									<i class={item.icon}>{item.title}</i>
								</a>
							</li>
						);
					})}
					<button>Sign Up</button>
				</ul>
			</nav>
		);
	}
}

export default Navbar;
