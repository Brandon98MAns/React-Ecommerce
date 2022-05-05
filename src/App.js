import './App.css';
import NavBar from './componentes/NavBar';
import Carrusel from './componentes/Carrusel';
import Footer from './componentes/Footer';
/*import ItemsListContainer from './componentes/ItemsListContainer';*/
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemCount from './componentes/ItemCount';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ItemsListContainer from './componentes/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemsListContainer titulo="Mensaje desde React Router" />} />
            <Route path="/category/:categoryid" element={<ItemsListContainer titulo="Categoria de Productos" />} />
            <Route path="/mueble/:itemid" element={<ItemDetailContainer id={3} />} />
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
