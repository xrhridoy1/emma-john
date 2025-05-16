import React from 'react';
import './Card.css'

const Card = (props) => {
  const data = props.card;


  let total = 0;
  data.forEach(element => {
    total = total + element.price 
  });


  let shipping = 0;
  if (total > 35) {
    shipping = 3;
  }
  else if (total > 15) {
    shipping = 5
  }
  else if (total > 5) {
    shipping = 7
  }

  let tax = total / 20





  return (
    <div>
      <h2>Order Summary</h2>
      <h6>Items Ordered : $ {data.length}</h6>
      <p>Items Price : $ {total}</p>
      <p>Shipping &amp; Handing : $ {shipping} </p>
      <p>Total before tax: $ {total + shipping}</p>
      <p>Estimated Tax : $ {tax} </p>
      <p>Order Total : $ {total + shipping + tax} </p>
    </div>
  );
};

export default Card;