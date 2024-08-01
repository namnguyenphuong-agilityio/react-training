import { RatingScore } from "../RatingScore";
import './ratingDescription.css';

interface RatingDescriptionProps {
  rate: number;
  author: string;
  description: string;
}

export const RatingDescription = ({ rate = 5, author, description }: RatingDescriptionProps) => {
  return (
    <div className="rating-description">
      <RatingScore rate={rate} />
      <h5 className="rating__author">{author}</h5>
      <p className="rating__text">{description}</p>
    </div>
  );
}
