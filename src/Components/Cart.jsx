import React, { useState } from "react";
import "./Cart.css";

export default function Cart({ items }) {
  const [showMessage, setShowMessage] = useState(false);

  const handlePay = () => {
    
    setShowMessage(true);
  };

  return (
    <div className="cart">
      <h2>Carrito</h2>
      {items && items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} x {item.quantity} → S/. {item.price * item.quantity}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay productos en el carrito</p>
      )}

      <button className="pay-button" onClick={handlePay}>
        Pagar
      </button>

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
