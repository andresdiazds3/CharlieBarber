import "../styles/reviews.css";
import { FaStar } from 'react-icons/fa';

type ReviewsProps = {
  nombre: string,
  pfp: string,
  desc: string,
  rating: number
}

const Reviews = ({ nombre, pfp, desc, rating }: ReviewsProps) => {
  return (
    <div className="review-card">
      <div className="review-img">
        <img src={pfp} alt={nombre} />
      </div>
      <h3>{nombre}</h3>
      <div className="review-stars">
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar key={i} className={i < rating ? 'star-filled' : 'star-empty'} />
        ))}
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default Reviews;
