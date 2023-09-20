import './Hero.css';


const Hero = props => {
	return (
		<section className={props.cName}>
			<img src={props.heroImgSrc} alt={props.heroImgText} />
			<div className='heroText'>
				<h1>{props.title}</h1>
				<p>{props.text}</p>
				<a href={props.url} className={props.btnClass}>
					<button>{props.btnText}</button>
				</a>
			</div>
		</section>
	);
};

export default Hero;
