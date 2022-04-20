import IconoCarrito from './IconoCarrito';

const NavBar = () => {
  
  return (
    <div className="navbar bg-base-200">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Walgos</a>
        </div>
        <div className="botonesNav">
              <ul>
                <li className="btn btn-ghost btn-circle">Home</li>
                <li className="btn btn-ghost btn-circle">Sillones</li>
                <li className="btn btn-ghost btn-circle">Mesas</li>
                <li className="btn btn-ghost btn-circle">Contacto</li>
              </ul>
        </div>
        <IconoCarrito/>   
        <div className="dropdown dropdown-end">
            <label tabindex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://cryptologos.cc/logos/aave-aave-logo.png" />
              </div>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Mi cuenta
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Configuracion</a></li>
              <li><a>Salir</a></li>
            </ul>
        </div>
    </div>
      
  )
}
export default NavBar

