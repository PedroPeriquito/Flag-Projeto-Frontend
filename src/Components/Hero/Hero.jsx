import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = props => {
	return (
		<>
		
			<section className={props.cName}>
			
				<img src={props.heroImgSrc} alt={props.heroImgText} className='heroImg' />
			
				<div className='heroText'>
					<h1>{props.title}</h1> 
					<p>{props.text}</p> 
					<Link to={props.url} className={props.btnClass}>
						{props.btnText} 
					</Link>
				</div>
			</section>
		</>
	);
};

export default Hero;
