import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = props => {
	return (
		<>
			{/* Hero section with provided className name */}
			<section className={props.cName}>
				{/* Hero image */}
				<img src={props.heroImgSrc} alt={props.heroImgText} className='heroImg' />
				{/* Hero text including title, description, and a button */}
				<div className='heroText'>
					<h1>{props.title}</h1> {/* Hero title */}
					<p>{props.text}</p> {/* Hero description text */}
					<Link to={props.url} className={props.btnClass}>
						{props.btnText} {/* Button with text provided as props */}
					</Link>
				</div>
			</section>
		</>
	);
};

export default Hero;
