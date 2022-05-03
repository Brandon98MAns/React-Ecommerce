import './App.css';
import NavBar from './componentes/NavBar';
import Carrusel from './componentes/Carrusel';
import Footer from './componentes/Footer';
/*import ItemsListContainer from './componentes/ItemsListContainer';*/
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemCount from './componentes/ItemCount';


function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Carrusel/>
      {/*<div className="Catalogo">*/}
      {/*<ItemsListContainer titulo="Nuestro Catalogo" />*/}
      {/*</div>/*/}
      <hr></hr>
      <ItemDetailContainer/>
      <ItemCount/>
      <Footer/>
    </div>
  );
}

export default App;
