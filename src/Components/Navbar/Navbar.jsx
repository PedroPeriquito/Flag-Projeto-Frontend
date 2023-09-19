import { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<nav className='navbarItems'>
				<h1 className='navbarLogo'>Nature Adventure</h1>
				<ul>
					<li>
						<Link>
							<i class='fa-solid fa-house'>Home</i>
						</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Navbar;

/* import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	return (
		<section className='navbar'>
			<div className='navContainer'>
				<Link to='/' className='navLogo'>
					Nature Adventure
				</Link>

			 	<div className='menuIcon'>
					<i className='{click ? 'fas fa-times' : <FontAwesomeIcon icon={faBars} />></i>

				
				<div className='navitems'>
					<ul className='navList'>
						<li className='navItem'>
							<Link to='/' className='navLink'></Link>Home
						</li>
						<li className='navItem'>
							<Link to='/Destinations' className='navLink'></Link>Destinations
						</li>
						<li className='navItem'>
							<Link to='/Booking' className='navLink'></Link>Booking
						</li>
						<li className='navItem'>
							<Link to='/Contacts' className='navLink'></Link>Contacts
						</li>
					</ul>
					<button className='navButton'>Sign Up</button>
					<button className='navButton'>Login</button>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
 */
