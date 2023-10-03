import React from 'react';
import './ProductHeader.css';
import { productItems } from '../ProductHeader/ProductItems';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductHeader = () => {
	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(false);
	const handleOpen = index => {
		setSlideNumber(index);
		setOpen(true);
	};
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
					<div className='productContainer' key={id}>
						{open && (
							<div className='slider'>
								<i className='fa-solid fa-x' onClick={() => setOpen(false)}></i>
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
								<span>{item.adress}</span>
							</div>
							<span className='productDistance'>{item.distance}</span>
							<span className='productPrice'>{item.price}</span>
							<div className='productImages'>
								{item.images.map((i, index) => (
									<div className='productImgWrapper' key={index}>
										<img onClick={() => handleOpen(index)} src={i.src} alt={i.altText} className='productImg' />
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
				);
			})}
		</div>
	);
};

export default ProductHeader;
