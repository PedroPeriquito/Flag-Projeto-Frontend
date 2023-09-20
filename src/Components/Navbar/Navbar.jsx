import { Component } from 'react';
import './Navbar.css';
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
								<a href={item.url} className={item.cName}>
									<p>
										<i class={item.icon}></i>
										{item.title}
									</p>
								</a>
							</li>
						);
					})}
					<div className='signUp'>
						<button className='navbtn'>Sign Up</button>
					</div>
				</ul>
			</nav>
		);
	}
}

export default Navbar;
