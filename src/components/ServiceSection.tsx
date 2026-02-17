import ServiceCard from "./ServiceCard";
import { Services } from "../data/DataServices";

function ServiceSection() {
  return (
    <section className="serviciosContenedor">
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