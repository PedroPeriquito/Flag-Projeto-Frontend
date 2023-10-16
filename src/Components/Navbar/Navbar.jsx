import './Navbar.css';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import favicon from '../../Assets/favicon32x.png';

const Navbar = ({ toggleTheme }) => {
	// State to manage the menu visibility
	const [clicked, setClicked] = useState(false);

	// Function to handle menu icon click, toggles the menu visibility
	const handleClick = () => {
		setClicked(!clicked);
	};

	return (
		<nav className='navbarItems'>
			{/* Logo and Home link */}
			<h1>
				<Link to='/' className='navHomeLink'>
					<img src={favicon} alt='leaf' /> {/* Favicon image */}
					Nature Adventure
				</Link>
			</h1>

			{/* Menu icon */}
			<div className='menuIcons' onClick={handleClick}>
				<i className={clicked ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i> {/* Menu icon changes based on menu visibility */}
			</div>

			{/* Menu items and buttons */}
			<ul className={clicked ? 'navMenu active' : 'navMenu'}>
				{/* Iterate through MenuItems and create menu links */}
				{MenuItems.map((item, index) => (
					<li key={index}>
						{/* Link to menu item URL */}
						<Link to={item.url} className={item.cName}>
							<p>{item.title}</p> {/* Menu item title */}
						</Link>
					</li>
				))}

				{/* Sign Up button */}
				<button className='navBtn'>Sign Up</button>

				{/* Theme toggle button */}
				<button className='toggleBtn' onClick={toggleTheme}>
					Toggle <p>Theme</p> {/* Button text */}
				</button>
			</ul>
		</nav>
	);
};

export default Navbar;
