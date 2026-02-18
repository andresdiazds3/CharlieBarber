import '../styles/serviceCard.css'

type ServicioProps = {
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

const ServiceCard = ({ nombre, descripcion, precio, imagen }: ServicioProps) => {
  return (
    <div className="service-card">
      <div className="service-img-container">
        <img src={imagen} alt={nombre} />
      </div>

      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <span className="price">${precio.toLocaleString()}</span>
    </div>
  );
}

export default ServiceCard;
