import "../styles/hero.css";
import HeroImg from "../img/hero-image.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Charlie Barber</h1>
        <p className="hero-subtitle">Estilo Urbano • Precisión Elegante</p>
        <p>Donde cada corte cuenta una historia. Experiencia premium para hombres modernos.</p>
        <a href="#servicios"><button>Nuestros Servicios</button></a>
      </div>
    </section>
  );
};

export default Hero;

