import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='footer'>
			{/* Left section of the footer */}
			<div className='footerLeft'>
				<h4>
					<i>©</i>
					<p>2023</p>
					Nature Adventure
				</h4>
				{/* List of footer links */}
				<ul className='footerLinks'>
					{/* Each link redirects to a specific route */}
					<Link to='Privacy' className='footerLink'>
						<li>Privacy</li>
					</Link>
					<Link to='Terms' className='footerLink'>
						<li>Terms</li>
					</Link>
					<Link to='Support' className='footerLink'>
						<li>Support</li>
					</Link>
					<Link to='FAQ' className='footerLink'>
						<li>FAQ</li>
					</Link>
				</ul>
			</div>
			{/* Right section of the footer with social media icons */}
			<div className='footerRight'>
				{/* LinkedIn icon with a link to the LinkedIn page */}
				<Link to='https://www.linkedin.com' className='footerIcon' target='_blank'>
					<i className='fa-brands fa-linkedin'></i>
				</Link>
				{/* GitHub icon with a link to the GitHub page */}
				<Link to='https://github.com' className='footerIcon' target='_blank'>
					<i className='fa-brands fa-github'></i>
				</Link>
			</div>
		</div>
	);
};

export default Footer;
