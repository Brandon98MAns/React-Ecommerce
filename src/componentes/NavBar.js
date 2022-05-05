import imgLogo from '../assets/logoappreact.png';
import IconoCarrito from './IconoCarrito';
import Link from 'react-router-dom';

function NavBar(){
  
  return (
    <header className=" bg-black container-fluid shadow-xl text-white-600 body-font mb-5">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <link to="/" className="flex title-font font-medium items-center text-white-900 mb-4 md:mb-0">
          <img width="120" src={imgLogo} alt="logo" />
        </link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-green-400 flex flex-wrap">
          <link to="/" className="mr-5 hover:text-green-600">Item 1</link>
          <link to="/" className="mr-5 hover:text-green-600">Item 1</link>
          <link to="/" className="mr-5 hover:text-green-600">Item 1</link>
          <link to="/" className="mr-5 hover:text-green-600">Item 1</link> 
        </nav>
        <div>
          <IconoCarrito />
        </div>
      </div>
    </header> 
  )
}
export default NavBar

