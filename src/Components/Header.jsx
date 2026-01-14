import './Header.css'
<Header className="css"></Header>;

function Header() {
  return (
    <header className="header">
      <h1>Shopping </h1>
      <button className="add-product-btn">AGREGAR PRODUCTO 🛒</button>
    </header>
  );
}

export default Header;