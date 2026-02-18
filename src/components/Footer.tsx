import "../styles/footer.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer id="redes" className="footer">
      <div className="footer-content">

        <h2 className="footer-logo">Charlie Barber</h2>
        <p className="footer-slogan">
          Estilo • Precisión • Actitud
        </p>

        <div className="footer-stats">
          <div className="stat">
            <h3>500+</h3>
            <p>Clientes Satisfechos</p>
          </div>
          <div className="stat">
            <h3>5</h3>
            <p>Años de Experiencia</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>Calidad Garantizada</p>
          </div>
        </div>

        <div className="footer-socials">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a 
            href="https://wa.me/573123177113" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Charlie Barber. Todos los derechos reservados
          Developed By DiazDev.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
