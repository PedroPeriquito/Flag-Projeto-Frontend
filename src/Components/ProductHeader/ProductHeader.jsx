import React, { useState } from 'react';
import { productItems } from '../ProductHeader/ProductItems';
import { Link } from 'react-router-dom';
import './ProductHeader.css';
import './Reviews.css';

const ProductHeader = () => {
	// State variables for managing slider and slide number
	const [openSliderId, setOpenSliderId] = useState(null);
	const [slideNumber, setSlideNumber] = useState(0);

	// Function to handle opening the slider and setting slide number
	const handleOpen = (id, index) => {
		setSlideNumber(index);
		setOpenSliderId(id);
	};

	// Function to handle closing the slider
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
			{/* Mapping through productItems array */}
			{productItems.map((item, id) => {
				return (
					/* ProductHeader container */
					<div className='Container' key={id}>
						{/* ProductContainer */}
						<div className='productContainer'>
							{/* Slider */}
							{openSliderId === id && (
								<div className='slider'>
									{/* Close slider button */}
									<i className='fa-solid fa-x' onClick={handleClose}></i>
									{/* Left arrow for previous image */}
									<i className='fa-solid fa-arrow-left' onClick={() => handleMove('L')}></i>
									{/* Slider wrapper with current image */}
									<div className='sliderWrapper'>
										<img src={item.images[slideNumber].src} alt={item.images[slideNumber].altText} className='sliderImg' />
									</div>
									{/* Right arrow for next image */}
									<i className='fa-solid fa-arrow-right' onClick={() => handleMove('R')}></i>
								</div>
							)}
							{/* Product details */}
							<div className='productWrapper'>
								{/* Product title, address, distance, and price */}
								<h2 className='productTitle'>{item.title}</h2>
								<div className='productAdress'>
									<span>{item.address}</span>
								</div>
								<span className='productDistance'>{item.distance}</span>
								<span className='productPrice'>{item.price}</span>
								{/* Product images */}
								<div className='productImages'>
									{item.images.map((i, index) => (
										<div className='productImgWrapper' key={index}>
											<img onClick={() => handleOpen(id, index)} src={i.src} alt={i.altText} className='productImg' />
										</div>
									))}
								</div>
								{/* Product details */}
								<div className='productDetails'>
									{/* Product description */}
									<div className='productDetailsText'>
										<h2 className='productTitle'>{item.title}</h2>
										<p className='productDescription'>{item.description}</p>
									</div>
									{/* Product pricing and booking link */}
									<div className='productDetailsPrice'>
										<h2>{item.detailedTitle}</h2>
										<span>{item.detailedText}</span>
										<h3>
											<b>{item.detailedPrice}</b>
										</h3>
										{/* Link to booking page */}
										<Link to='/booking' className='productDetailsPriceLink'>
											<button>Book Now!</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
						{/* Reviews */}
						<div className='reviewContainer'>
							{/* Review header */}
							<div className='reviewHeader'>
								<h2>Reviews</h2>
							</div>
							{/* Review boxes */}
							<div className='reviewBoxContainer'>
								{/* Mapping through reviews and creating review boxes */}
								{item.reviews.map((review, index) => (
									<div className='reviewBox' key={index}>
										{/* Top section of review box with user profile and rating */}
										<div className='boxTop'>
											{/* User profile */}
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
										{/* Client comment */}
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
