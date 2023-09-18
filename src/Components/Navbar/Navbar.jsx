import './Navbar.css';

const Navbar = () => {
	return (
		<section className='navbar'>
			<div className='navContainer'>
				<span className='logo'>Nature Adventure</span>
				<div className='navitems'>
					<ul className='navList'>
						<li className='navItem'>
							<a href='#' className='navLink'></a>Home
						</li>
						<li className='navItem'>
							<a href='#' className='navLink'></a>Destinations
						</li>
						<li className='navItem'>
							<a href='#' className='navLink'></a>Booking
						</li>
						<li className='navItem'>
							<a href='#' className='navLink'></a>Contacts
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
