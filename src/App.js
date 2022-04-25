import './App.css';
import NavBar from './componentes/NavBar';
import Cards from './componentes/Cards';
import Carrusel from './componentes/Carrusel';
import Footer from './componentes/Footer';
import ItemsListContainer from './componentes/ItemsListContainer';
import ItemCount from './componentes/ItemCount';


function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <ItemsListContainer titulo="Props!" />
      <hr></hr>
      <ItemCount/>
      <Carrusel/> 

      <Cards>  
        <div class="card-body">
          <img src="https://silloneseuropa.com.ar/wp-content/uploads/2020/05/oxford1.jpg" alt="sofa"/>
          <h2 class="card-title">Sofa!</h2>
          <p>Texto descriptivo de tarjeta.</p>
            <div class="card-actions justify-center">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
      </Cards>

      <Cards>  
        <div class="card-body">
          <img src="https://silloneseuropa.com.ar/wp-content/uploads/2020/05/oxford1.jpg" alt="sofa"/>
          <h2 class="card-title">Sofa!</h2>
          <p>Texto descriptivo de tarjeta.</p>
            <div class="card-actions justify-center">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
      </Cards>

      <Cards>  
        <div class="card-body">
          <img src="https://silloneseuropa.com.ar/wp-content/uploads/2020/05/oxford1.jpg" alt="sofa"/>
          <h2 class="card-title">Sofa!</h2>
          <p>Texto descriptivo de tarjeta.</p>
            <div class="card-actions justify-center">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
      </Cards>
      {/*<header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
    <Footer/>
    </div>
  );
}

export default App;
