import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
  const data = props.product;
  return (
    <div className='product-section'>
      <div className='image-part'>
        <img src={data.img} alt="" />
      </div>


      <div className='last-part'>
        <div className='title-part'>
          <h5>{data.name}</h5><br />
          <p>By : {data.seller}</p>
          <h4>Price : ${data.price}</h4>
          <p>Only {data.stock} left in stock - Order Now</p>
          <button className='button' onClick={()=>props.btnActive(data)} > <FontAwesomeIcon icon={faCartShopping} />  Add To Cart</button>
        </div>
        <div className='review'>
          <p>Rating : {data.ratings}</p>
          <p>Count-Rating : {data.ratingsCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;