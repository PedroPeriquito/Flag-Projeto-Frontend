import { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { MenuItems } from '../MenuItems/MenuItems';
class Navbar extends Component {
	render() {
		return (
			<nav className='navbarItems'>
				<h1 className='navbarLogo'>Nature Adventure</h1>
				<ul className='navMenu'>
					{MenuItems.map((item, index) => {
						return (
							<li key={index}>
								<a href='/' className={item.cName}>
									<i class={item.icon}>{item.title}</i>
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		);
	}
}

export default Navbar;
