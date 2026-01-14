import { useState } from "react";
import Button from "./Button";
import "./List.css";

function List({ cart }) {
  const [showMessage, setShowMessage] = useState(false);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePay = () => {
    setShowMessage(true); // ✅ activa el mensaje
  };

  return (
    <div className="cart-list">
      <h2>Productos Agregados</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <p>{item.name} - {item.unit}</p>
          <p>Precio: S/. {item.price} x {item.quantity}</p>
          <p>Total: S/. {(item.price * item.quantity).toFixed(2)}</p>
        </div>
      ))}
      <h3>TOTAL: S/. {total.toFixed(2)}</h3>
      
      <Button text="PAGAR" onClick={handlePay} styleType="danger" />

      {showMessage && (
        <div className="thankyou-message">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp logo"
            className="whatsapp-logo"
          />
          <p>¡Gracias por su compra!</p>
        </div>
      )}
    </div>
  );
}

export default List;
