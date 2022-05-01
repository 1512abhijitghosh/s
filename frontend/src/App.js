import data from './data';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    // <div>
    //   <header>
    //     <a href="/">SefKam</a>
    //   </header>
    //   <main>
    //     <h1>Featured Products</h1>
    //     <div className="products">
    //       {data.products.map((product) => (
    //         <div className="product" key={product.slug}>
    //           <a href={`/product/${product.slug}`}>
    //             <img src={product.image} alt={product.name} />
    //           </a>
    //           <div className="product-info">
    //             <a href={`/product/${product.slug}`}>
    //               <p>{product.name}</p>
    //             </a>
    //             <p>
    //               <strong>${product.price}</strong>
    //             </p>
    //             <button>Add to cart</button>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </main>
    // </div>

    <BrowserRouter>
      <div>
        <header>
          <Link to="/">SefKam</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
