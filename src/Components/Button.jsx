import './Button.css';

function Button({ text, onClick, type = "button", styleType = "primary" }) {
  return (
    <button 
      className={`btn ${styleType}`} 
      type={type} 
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;

