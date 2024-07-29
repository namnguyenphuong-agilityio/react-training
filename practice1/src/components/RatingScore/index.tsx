import HalfStarIcon from '../icons/HalfStarIcon';
import StarIcon from '../icons/StarIcon';
import './rating.css';

interface RatingScoreProps {
  rate: number;
}

export const RatingScore = ({ rate }: RatingScoreProps) => {
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 !== 0;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<StarIcon key={i} className='rating__icon' />);
  }

  if (hasHalfStar) {
    stars.push(<HalfStarIcon key={fullStars} className='rating__icon' />);
  }
  return stars;
};
