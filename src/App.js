import './App.css';
import NavBar from './componentes/NavBar';
import Carrusel from './componentes/Carrusel';
import Footer from './componentes/Footer';
/*import ItemsListContainer from './componentes/ItemsListContainer';*/
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemCount from './componentes/ItemCount';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ItemsListContainer from './componentes/ItemsListContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/categoría/:categoríaid" element={<ItemsListContainer titulo="Categoria de Productos" />} />
            <Route path="/mueble/:itemid" element={<ItemDetailContainer />} />
          </Routes>
          <Carrusel/>
          {/*<div className="Catalogo">*/}
          {/*<ItemsListContainer titulo="Nuestro Catalogo" />*/}
          {/*</div>/*/}
          {/*<hr></hr>*/}
          {/*<ItemDetailContainer/>*/}
         {/*<ItemCount/>*/}
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
