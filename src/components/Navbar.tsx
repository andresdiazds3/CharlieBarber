import '../styles/navbar.css'
import { FaHome, FaCut, FaStar, FaMapMarkerAlt, FaShareAlt } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Charlie Barber</div>
      <ul className="navbar-links">
        <li><a href="#home"><FaHome /> Home</a></li>
        <li><a href="#servicios"><FaCut /> Servicios</a></li>
        <li><a href="#ubicacion"><FaMapMarkerAlt /> Ubicación</a></li>
        <li><a href="#reviews"><FaStar /> Reviews</a></li>
        <li><a href="#redes"><FaShareAlt /> Redes</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;