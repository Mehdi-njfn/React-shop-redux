import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import Nav  from './component/nav';
import { ShopContextProvider } from './context/shopContext'
import Well from './component/wellcomemsg';
function App() {
  return (
    <div className="App">
      <Router>
        <ShopContextProvider>
          <Nav />
          <Well />
          <Routes>
            <Route path='/' element={<Shop />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </ShopContextProvider>
      </Router>
    </div>
  );
}

export default App;
