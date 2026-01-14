
import Card from './Card';
import './Main.css'

function Main({ products, onAddToCart }) {
  return (
    <main className="Main">
      <h2>Productos</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <Card key={index} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </main>
  );
}

export default Main;
