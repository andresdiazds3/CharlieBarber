type ReviewsProps = {
    nombre:string,
    pfp: string,
    desc: string
}

const Reviews = ({ nombre, pfp, desc }: ReviewsProps) => {
  return (
    <div className="Contenedor Review">
      <img src={pfp} alt={nombre} />
      <h1>{nombre}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default Reviews;