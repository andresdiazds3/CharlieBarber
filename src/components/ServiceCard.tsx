type ServicioProps = {
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

const ServiceCard = ({ nombre, descripcion, precio, imagen }: ServicioProps) => {
  return (
    <div>
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <h2>${precio}</h2>
    </div>
  );
}

export default ServiceCard;

