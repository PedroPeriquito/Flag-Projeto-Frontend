import React from 'react';
import './ProductHeader.css';
import { productItems } from '../ProductHeader/ProductItems';
import { Link } from 'react-router-dom';

const ProductHeader = () => {
	return (
		<div>
			{productItems.map((item, id) => {
				return (
					<div className='productContainer' key={id}>
						<div className='productWrapper'>
							<h2 className='productTitle'>{item.title}</h2>
							<div className='productAdress'>
								<span>{item.adress}</span>
							</div>
							<span className='productDistance'>{item.distance}</span>
							<span className='productPrice'>{item.price}</span>
							<div className='productImages'>
								{[1, 2, 3, 4, 5, 6].map(index => (
									<div className='productImgWrapper' key={index}>
										<img src={item[`src${index}`]} alt={item[`altText${index}`]} className='productImg' />
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
