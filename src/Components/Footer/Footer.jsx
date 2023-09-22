import './Footer.css';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footerLeft'>
				<h4>
					<i>©</i>Nature Adventure
				</h4>
				<ul className='footerLinks'>
					<a href='/' className='footerLink'>
						<li>Privacidade</li>
					</a>
					<a href='/' className='footerLink'>
						<li>Termos</li>
					</a>
					<a href='/' className='footerLink'>
						<li>Support</li>
					</a>
					<a href='/' className='footerLink'>
						<li>FAQ</li>
					</a>
				</ul>
			</div>
			<div className='footerRight'>
				<a href='/' className='footerIcon'>
					<i class='fa-brands fa-linkedin'></i>
				</a>
				<a href='/' className='footerIcon'>
					<i class='fa-brands fa-github'></i>
				</a>
			</div>
		</div>
	);
};

export default Footer;
