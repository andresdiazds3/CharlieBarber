import "../styles/reviewsSection.css";
import Reviews from "./Reviews";
import { ReviewsList } from "../data/DataReviews";

const ReviewsSection = () => {
  return (
    <section id="reviews" className="reviews-section">
      <div className="decorative-shape"></div>
      <h1>Clientes Satisfechos</h1>

      <div className="reviews-grid">
        {ReviewsList.map((x) => (
          <Reviews
            key={x.id}
            nombre={x.nombre}
            pfp={x.pfp}
            desc={x.desc}
            rating={x.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
