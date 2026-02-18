import ServiceCard from "./ServiceCard";
import { Services } from "../data/DataServices";
import '../styles/serviceSection.css'

function ServiceSection() {
  return (
    <section id="servicios" className="serviciosContenedor">
      <div className="decorative-shape"></div>
      <h1>Nuestros Servicios</h1>
      <div>
        {Services.map((Service) => (
          <ServiceCard
            key={Service.id}
            imagen={Service.img}
            nombre={Service.nombre}
            descripcion={Service.desc}
            precio={Service.precio}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;