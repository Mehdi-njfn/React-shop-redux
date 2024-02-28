import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import Nav  from './component/nav';
import { ShopContextProvider } from './context/shopContext'
import Well from './component/wellcomemsg';
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import Protect from './component/protect';
import Dashboard from './pages/dashboard';
function App() {
  return (
    <div className="App">
      <Router>
          <Nav />
          <Well />
          <Routes>
            <Route path='/' element={<Shop />}/>
            <Route path='/cart' element={<Cart />} />
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
