import './Navbar.css';
import { MenuItems } from '../MenuItems/MenuItems';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import favicon from '../../Assets/favicon32x.png';

const Navbar = ({ toggleTheme }) => {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(!clicked);
	};

	return (
		<nav className='navbarItems'>
			<h1>
				<Link to='/' className='navHomeLink'>
					<img src={favicon} alt='leaf' />
					Nature Adventure
				</Link>
			</h1>
			<div className='menuIcons' onClick={handleClick}>
				<i className={clicked ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
			</div>
			<ul className={clicked ? 'navMenu active' : 'navMenu'}>
				{MenuItems.map((item, index) => (
					<li key={index}>
						<Link to={item.url} className={item.cName}>
							<p>{item.title}</p>
						</Link>
					</li>
				))}
				<button className='navBtn'>Sign Up</button>
				<button className='toggleBtn' onClick={toggleTheme}>
					Toggle <p>Theme</p>
				</button>
			</ul>
		</nav>
	);
};

export default Navbar;
