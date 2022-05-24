import './App.css';
import NavBar from './componentes/NavBar';
import Carrusel from './componentes/Carrusel';
import Footer from './componentes/Footer';
import ItemsListContainer from './componentes/ItemsListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { CartContextProvider } from "./store/CartContext";
import CartView from './componentes/CartView';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Carrusel/>
          <Routes>
            <Route path="/" element={<ItemsListContainer titulo="Nuestro Stock" />} />
            <Route path="/category/:categoryid" element={<ItemsListContainer titulo="Nuestro Stock" />} />
            <Route path="/mueble/:itemid" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<CartView/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
      
    </div>
  );
}

export default App;
