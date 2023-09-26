import './Navbar.css';
import { MenuItems } from '../MenuItems/MenuItems';
import '../Button/Button.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(!clicked);
	};

	return (
		<nav className='navbarItems'>
			<h1>
				<Link to='/' className='navHomeLink'>
					<i className='fa-solid fa-leaf'></i>Nature Adventure
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
				<button className='navbtn'>Sign Up</button>
			</ul>
		</nav>
	);
};

export default Navbar;
