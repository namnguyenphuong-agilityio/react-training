import { RatingScore } from "../RatingScore";
import TickIcon from "../icons/TickIcon";
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
      <div className="rating__author">
        <h3>{author}</h3>
        <TickIcon width={19} height={19} fill="#01AB31"/>
      </div>
      <p className="rating__text">{description}</p>
    </div>
  );
}
