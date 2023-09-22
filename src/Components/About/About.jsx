import './About.css';
import aboutImg1 from '../../Assets/aboutImg1.jpg';

const About = () => {
	return (
		<section className='about'>
			<div className='aboutWrapper'>
				<h1>About Us</h1>
				<p>Lorem ipsum dolor sit amet consectetur.</p>
				<div className='aboutContainer'>
					<div className='aboutText'>
						<h2>Who we are</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fuga, sunt ipsum enim dolore eligendi autem aperiam minus deleniti nihil? Molestiae illum optio laboriosam aperiam
							itaque doloremque quisquam, repellendus doloribus, veniam eum alias perferendis. Cum asperiores repudiandae vero delectus ipsa beatae temporibus repellat magni. Minus suscipit iste eos
							quos dignissimos.
						</p>
						<br />
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, inventore eum quas non dolore nam molestiae error tempora ad, itaque quod ratione debitis facere sit quam officia.
							Distinctio libero, veniam atque earum ipsum omnis quidem molestiae blanditiis facere dolor impedit itaque exercitationem eaque minima cumque magnam, assumenda officiis reiciendis.
						</p>
					</div>
					<div className='aboutImg'>
						<img src={aboutImg1} alt='buring-fire-by-the-river-and-snowcapped-mountain-and-forest' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
