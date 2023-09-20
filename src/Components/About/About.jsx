import './About.css';
import AboutImg1 from '../../Assets/AboutImg1.jpg';

const About = () => {
	return (
		<section className='about'>
			<h1>About Us</h1>
			<p>Lorem ipsum dolor sit amet consectetur.</p>
			<div className='aboutContainer'>
				<div className='aboutText'>
					<h2>Who we are</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fuga, sunt ipsum enim dolore eligendi autem aperiam minus deleniti nihil? Molestiae illum optio laboriosam aperiam itaque doloremque quisquam, repellendus doloribus, veniam eum alias perferendis. Cum asperiores repudiandae vero delectus ipsa beatae temporibus repellat magni. Minus suscipit iste eos quos dignissimos.
					</p>
					<div className='aboutList'>
						<div className='aboutImg'>
							<img src={AboutImg1} alt='buring-fire-by-the-river-and-snowcapped-mountain-and-forest' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
