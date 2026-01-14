import './Card.css'
import Counter from './Counter';
import { useState } from 'react';

function Card({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img" />
      <h3>{product.name}</h3>
      <p>Precio: S/. {product.price}</p>
      <Counter count={quantity} setCount={setQuantity} />
      <button className="add-btn" onClick={() => onAddToCart(product, quantity)}>
        🛒 Agregar
      </button>
    </div>
  );
}

export default Card;

