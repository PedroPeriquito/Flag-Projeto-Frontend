import React from 'react';
import './ProductHeader.css';
import forest from '../../Assets/forestTrip.jpg';
import desert from '../../Assets/desertTrip.jpg';

import { productItems } from '../ProductHeader/ProductItems';
import { photos } from '../ProductHeader/ProductItems';

const ProductHeader = () => {
	const photos = [
		{
			src: forest,
		},
		{
			src: desert,
		},
		{
			src: desert,
		},
		{
			src: forest,
		},
		{
			src: forest,
		},
		{
			src: forest,
		},
	];
	return (
		<div>
			{productItems.map((item, id) => {
				return (
					<div className='productContainer' key={id}>
						<div className='productWrapper'>
							<button className='bookNow'>Book Now!</button>
							<h2 className='productTitle'>{item.title}</h2>
							<div className='productAdress'>
								<span>{item.adress}</span>
							</div>
							<span className='productDistance'>{item.distance}</span>
							<span className='productPrice'>{item.price}</span>
							<div className='productImages'>
								{photos.map(photo => (
									<div className='productImgWrapper'>
										<img src={photo.src} alt={photo.altText} className='productImg' />
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
									<h3>{item.detailedPrice}</h3>
									<button>Book Now!</button>
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
