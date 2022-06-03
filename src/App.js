import './App.css';
import NavBar from './componentes/NavBar';
import Carrusel from './componentes/Carrusel';
import CartView from './componentes/CartView';
import Footer from './componentes/Footer';
import ItemsListContainer from './componentes/ItemsListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { CartContextProvider } from "./store/CartContext";



function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Carrusel/>
          <Routes>
            <Route path="/" element={<ItemsListContainer titulo="Nuestro Catalogo" />} />
            <Route path="/category/:categoryid" element={<ItemsListContainer titulo="Nuestras Mesas" />} />
            <Route path="/mueble/:itemid" element={<ItemDetailContainer titulo="Nuestros Sillones"/>} />
            <Route path="/cart" element={<CartView/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
      
    </div>
  );
}

export default App;
