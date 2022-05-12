import './App.css';
import NavBar from './componentes/NavBar';
/*import Carrusel from './componentes/Carrusel';*/
import Footer from './componentes/Footer';
import ItemsListContainer from './componentes/ItemsListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemCount from './componentes/ItemCount';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { CartContextProvider } from "./store/CartContext";
import ItemList from './componentes/ItemList';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/categoría/:categoríaid" element={<ItemsListContainer titulo="Categoria de Productos" />} />
            <Route path="/" element={<ItemList />} />
            <Route path="/mueble/:itemid" element={<ItemDetailContainer />} />
          </Routes>
          {/*<Carrusel/>*/}
          <ItemCount/>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
      
    </div>
  );
}

export default App;
