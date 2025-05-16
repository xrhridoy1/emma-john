import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import './Shop.css'
import Product from '../Product/Product';
import Card from '../Card/Card';



const Shop = () => {
  const pro10 = fakeData.slice(40)
  const [post] = useState(pro10)

  
  const [card, setCard] = useState([])
  const handleClick = (props) => {
      const newCard = [...card, props]
      setCard(newCard)
  }
  return (

    <div className='shop-section'>

      <div className='product-main'>
        {
          post.map(data => <Product btnActive={handleClick} product={data} />)
        }
      </div>

      {/* card section here */}

      <div className='card-container'>
        <Card card = {card}/>
      </div>

    </div>
  );
};
export default Shop;