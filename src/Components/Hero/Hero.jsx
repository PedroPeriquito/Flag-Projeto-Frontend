import './Hero.css';
import Img1 from '../../Assets/HomeHero.jpg';

const Hero = () => {
	return (
		<section className='hero'>
			<img src={Img1} alt='' />
			<div className='heroContainer'>
				<div className='heroText'>
					<h1 className='heroTitle'>Adventure Awaits</h1>
					<p className='heroDescription'>What are you waiting for?</p>
					<button className='heroButton'>Get Started</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
