import './About.css';
import aboutImg1 from '../../Assets/aboutImg1.jpg';
import { useState } from 'react';

const About = () => {
	const [toggleTab, setToggleTab] = useState(1);

	return (
		<section className='about'>
			<div className='row'>
				<div className='column left'>
					<div className='aboutImg'>
						<img src={aboutImg1} alt='' />
					</div>
				</div>
				<div className='column right'>
					<div className='tabs'>
						<div className={toggleTab === 1 ? 'singleTab singleTabShow' : 'singleTab'} onClick={() => setToggleTab(1)}>
							<h2>About</h2>
						</div>
						<div className={toggleTab === 2 ? 'singleTab singleTabShow' : 'singleTab'} onClick={() => setToggleTab(2)}>
							<h2>Origin</h2>
						</div>
						<div className={toggleTab === 3 ? 'singleTab singleTabShow' : 'singleTab'} onClick={() => setToggleTab(3)}>
							<h2>Vision</h2>
						</div>
					</div>
					<div className='tabContent'>
						<div className={toggleTab === 1 ? 'content contentShow' : 'content'}>
							{/* About content */}
							<h2>Who we are</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellat sed nam illo deleniti fugiat molestias hic porro veniam eos, ex sit! Est exercitationem deserunt voluptatibus!
								Ut dolor qui nemo ea modi explicabo laborum aut quae ipsa quo optio molestias blanditiis voluptatibus excepturi architecto inventore sapiente, libero perspiciatis expedita sequi?
							</p>
							<h3> Lorem ipsum dolor sit.</h3>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto fugit porro impedit itaque, iure quasi!</p>
						</div>

						<div className={toggleTab === 2 ? 'content contentShow' : 'content'}>
							{/* Origin content */}
							<h2>The begining</h2>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint sit nam natus repudiandae iste ratione dolorum quibusdam quod, laborum quam perspiciatis a explicabo inventore? Iure
								sequi necessitatibus esse ipsa magnam.
							</p>

							<h3> Lorem ipsum dolor sit.</h3>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto fugit porro impedit itaque, iure quasi!</p>

							<h3> Lorem ipsum.</h3>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto fugit porro impedit itaque, iure quasi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, corporis?</p>
						</div>
						<div className={toggleTab === 3 ? 'content contentShow' : 'content'}>
							{/* Vision content */}
							<div className='visionColumn'>
								<h2>The future</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nam delectus reiciendis explicabo eius quas accusamus ratione sed sint nobis eveniet odio enim facere optio aliquam
									animi aliquid nemo beatae accusantium rem reprehenderit modi dolorum. Minus dicta laborum eos aperiam dolor voluptatem? Et, laborum illum.
								</p>
							</div>
							<div className='visionColumn'>
								<h2>Objective</h2>
								<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam aliquid maiores maxime error cumque sit quod voluptatum suscipit beatae assumenda.</p>
							</div>
							<div className='visionColumn'>
								<h2>Our mission</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ad itaque fugit quos, possimus velit autem officia recusandae neque animi?</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
