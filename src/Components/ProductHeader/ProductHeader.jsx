import React, { useState } from 'react';
import { productItems } from '../ProductHeader/ProductItems';
import { Link } from 'react-router-dom';
import './ProductHeader.css';
import './Reviews.css';

const ProductHeader = () => {
	
	const [openSliderId, setOpenSliderId] = useState(null);
	const [slideNumber, setSlideNumber] = useState(0);

	
	const handleOpen = (id, index) => {
		setSlideNumber(index);
		setOpenSliderId(id);
	};

	
	const handleClose = () => {
		setOpenSliderId(null);
	};

	// Function to handle slider movement (left or right)
	const handleMove = direction => {
		let newSlideNumber;
		const imagesCount = productItems[slideNumber].images.length;

		if (direction === 'L') {
			newSlideNumber = slideNumber === 0 ? imagesCount - 1 : slideNumber - 1;
		} else {
			newSlideNumber = slideNumber === imagesCount - 1 ? 0 : slideNumber + 1;
		}

		setSlideNumber(newSlideNumber);
	};

	return (
		<div>
		
			{productItems.map((item, id) => {
				return (
				
					<div className='Container' key={id}>
					
						<div className='productContainer'>
						
							{openSliderId === id && (
								<div className='slider'>
								
									<i className='fa-solid fa-x' onClick={handleClose}></i>
								
									<i className='fa-solid fa-arrow-left' onClick={() => handleMove('L')}></i>
									
									<div className='sliderWrapper'>
										<img src={item.images[slideNumber].src} alt={item.images[slideNumber].altText} className='sliderImg' />
									</div>
								
									<i className='fa-solid fa-arrow-right' onClick={() => handleMove('R')}></i>
								</div>
							)}
							
							<div className='productWrapper'>
								
								<h2 className='productTitle'>{item.title}</h2>
								<div className='productAdress'>
									<span>{item.address}</span>
								</div>
								<span className='productDistance'>{item.distance}</span>
								<span className='productPrice'>{item.price}</span>
							
								<div className='productImages'>
									{item.images.map((i, index) => (
										<div className='productImgWrapper' key={index}>
											<img onClick={() => handleOpen(id, index)} src={i.src} alt={i.altText} className='productImg' />
										</div>
									))}
								</div>
							
								<div className='productDetails'>
									
									<div className='productDetailsText'>
										<h2 className='productTitle'>{item.title}</h2>
										<p className='productDescription'>{item.description}</p>
									</div>
								
									<div className='productDetailsPrice'>
										<h2>{item.detailedTitle}</h2>
										<span>{item.detailedText}</span>
										<h3>
											<b>{item.detailedPrice}</b>
										</h3>
									
										<Link to='/booking' className='productDetailsPriceLink'>
											<button>Book Now!</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
						
						<div className='reviewContainer'>
							
							<div className='reviewHeader'>
								<h2>Reviews</h2>
							</div>
						
							<div className='reviewBoxContainer'>
								{/* Mapping through reviews and creating review boxes */}
								{item.reviews.map((review, index) => (
									<div className='reviewBox' key={index}>
									
										<div className='boxTop'>
									
											<div className='profile'>
												<div className='profileImg'>
													<img src={review.src} alt={review.altText} />
												</div>
												<div className='nameUser'>
													<strong>{review.name}</strong>
												</div>
											</div>
											{/* Star ratings */}
											<div className='review'>
												{[...Array(review.rating)].map((_, i) => (
													<i key={i} className='fas fa-star'></i>
												))}
												{[...Array(5 - review.rating)].map((_, i) => (
													<i key={i} className='far fa-star'></i>
												))}
											</div>
										</div>
									
										<div className='clientComment'>
											<p>{review.comment}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ProductHeader;
