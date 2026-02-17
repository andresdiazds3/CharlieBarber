type ServicioProps = {
  titulo: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

const ServiceCard = ({ titulo, descripcion, precio, imagen }: ServicioProps) => {
  return (
    <div>
      <img src={imagen} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <h2>${precio}</h2>
    </div>
  );
}

export default ServiceCard;

