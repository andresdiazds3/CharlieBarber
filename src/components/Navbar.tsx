import '../styles/navbar.css' 

function Navbar() {
  return (
    <div className="contenedorNavBar">
      <ul className="listaNavBar">
        <li> Home </li>
        <li> Servicios </li>
        <li> Reviews </li>
        <li> Ubicación </li>
        <li> Redes </li>
      </ul>
    </div>
  );
}

export default Navbar;