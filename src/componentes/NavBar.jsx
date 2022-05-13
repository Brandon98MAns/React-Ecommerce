import imgLogo from '../assets/logoappreact.png';
import IconoCarrito from './IconoCarrito';
import {Link} from 'react-router-dom';
import useCartContext from '../store/CartContext';


function NavBar(){
    const { contextFunction } = useCartContext();
    contextFunction();

  return (
    <header className=" bg-gray-100 container-fluid shadow-xl text-white-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-white-900 mb-4 md:mb-0">
          <img width="130" src={imgLogo} alt="logo" />
        </Link>
        <nav className="md:mr-auto md:ml-8 md:py-1 md:pl-7 md:border-5 md:border-green-400 flex flex-wrap">
          <Link to="/" className="mr-20 hover:text-green-600">Inicio</Link>
          <Link to="/category/:Industrial" className="mr-20 hover:text-green-600">Mesas</Link>
          <Link to="/category/:Living" className="mr-20 hover:text-green-600">Sillones</Link>
          <Link to="/" className="mr-5 hover:text-green-600">Contacto</Link>          
        </nav>
        <div>
          <IconoCarrito />
        </div>
      </div>
    </header> 
  )
  }
export default NavBar

