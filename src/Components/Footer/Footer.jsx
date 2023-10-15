import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footerLeft'>
				<h4>
					<i>©</i>
					<p>2023</p>
					Nature Adventure
				</h4>
				<ul className='footerLinks'>
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
			<div className='footerRight'>
				<Link to='https://www.linkedin.com' className='footerIcon' target='_blank'>
					<i className='fa-brands fa-linkedin'></i>
				</Link>
				<Link to='https://github.com' className='footerIcon' target='_blank'>
					<i className='fa-brands fa-github'></i>
				</Link>
			</div>
		</div>
	);
};

export default Footer;
