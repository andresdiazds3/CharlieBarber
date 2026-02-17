import Reviews from "./Reviews";
import { ReviewsList } from "../data/DataReviews";

const ReviewsSection = () => {
    return (
        <section>
            <h1> Clientes Satisfechos </h1>
            <div>
                {ReviewsList.map((x) => (
                    <Reviews 
                      key= {x.id}
                      nombre={x.nombre}
                      pfp = {x.pfp}
                      desc = {x.desc} />
                    
                ))}
            </div>
        </section>
    );
}

export default ReviewsSection;