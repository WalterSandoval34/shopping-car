import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Input from './Components/Input';
import List from './Components/List';
import Cart from './Components/Cart';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([
    {name: 'Kiwi', price: 3000, unit: 'kilo', image: 'https://th.bing.com/th/id/R.0c5e3b62d8da9fac6f6ef01710060d1e?rik=XmucAZ6nDTQV5Q&pid=ImgRaw&r=0' },    
    {name: 'Banana', price: 2000, unit: 'kilo', image: 'https://th.bing.com/th/id/R.754fbb882363319e242ae3482bb2edda?rik=2Ws8J9ZDOI4Irw&pid=ImgRaw&r=0' },
    {name: 'Naranja Criolla', price: 1500, unit: 'kilo', image: 'https://tse4.mm.bing.net/th/id/OIP.L7hw952ZmC8zwgw2qMCEJgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3' },
    {name: 'Manzana Roja', price: 2500, unit: 'kilo', image: 'https://tse3.mm.bing.net/th/id/OIP.aVhbDiXhTeFg-MsWWdAIUAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3' },
    {name: 'Cereza', price: 10000, unit: 'kilo', image:'https://www.dole.com/sites/default/files/styles/1024w768h-80/public/media/2025-01/cherries.png?itok=lfWDLVbE-gi5zzgti'},
    {name: 'Frutilla', price: 8000, unit: 'kilo', image: 'https://tse3.mm.bing.net/th/id/OIP.4i8iC7Gwnxknk2GS5ZC8pgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3'},
    {name: 'Sandidia', price: 12000, unit: 'kilo', image: 'https://escofruit.com/wp-content/uploads/2023/05/deliciosas-sandias-enteras-cortadas-como-fondo.jpg'}

  ]);

  const [cart, setCart] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleAddToCart = (product, quantity = 1) => {
    const existing = cart.find(item => item.name === product.name);
    if (existing) {
      setCart(cart.map(item =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Input onAddProduct={handleAddProduct} />
            <Main products={products} onAddToCart={handleAddToCart} />
            <List cart={cart} />
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
