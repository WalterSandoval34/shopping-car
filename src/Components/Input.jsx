import { useState } from 'react';
import Button from './Button';
import './Input.css';

function Input({ onAddProduct }) {
  const [name, setName] = useState('');
  const [unit, setUnit] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !unit || !price) return;

    const finalPrice = parseFloat(price);

    onAddProduct({
      name,
      unit,
      price: finalPrice.toFixed(2),
      image: '/images/default.png'
    });

    setName('');
    setUnit('');
    setPrice('');
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <h2>Agregar Producto</h2>
      <input 
        type="text" 
        placeholder="Nombre del producto" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Unidad de medida" 
        value={unit} 
        onChange={(e) => setUnit(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Precio" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
      />
      
      <Button 
        text="AGREGAR" 
        type="submit" 
        styleType="secondary" 
      />
    </form>
  );
}

export default Input;
