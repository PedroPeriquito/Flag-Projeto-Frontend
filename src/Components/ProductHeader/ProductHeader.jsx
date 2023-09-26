import React from 'react';
import './ProductHeader.css';
import { productItems } from '../ProductHeader/ProductItems';

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
								<div className='productImgWrapper'>
									<img src={item.src1} alt={item.altText1} className='productImg' />
								</div>
								<div className='productImgWrapper'>
									<img src={item.src2} alt={item.altText2} className='productImg' />
								</div>
								<div className='productImgWrapper'>
									<img src={item.src3} alt={item.altText3} className='productImg' />
								</div>
								<div className='productImgWrapper'>
									<img src={item.src4} alt={item.altText4} className='productImg' />
								</div>
								<div className='productImgWrapper'>
									<img src={item.src5} alt={item.altText5} className='productImg' />
								</div>
								<div className='productImgWrapper'>
									<img src={item.src6} alt={item.altText6} className='productImg' />
								</div>
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
