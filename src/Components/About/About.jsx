import './About.css';
import AboutImg from '../../Assets/AboutImg.jpg';

const About = () => {
	return (
		<section className='about'>
			<div className='aboutContainer'>
				<div className='aboutText'>
					<h2>About us</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, esse? Fuga fugit iusto molestiae. Asperiores, laborum et velit voluptates quasi fugit placeat odio quaerat harum deleniti
						libero a, magnam veritatis.
					</p>
					<div className='aboutList'>
						<ul>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
							<li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, ea natus.</li>
							<li>Lorem ipsum dolor sit amet.</li>
						</ul>
						<img src={AboutImg} alt='' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
