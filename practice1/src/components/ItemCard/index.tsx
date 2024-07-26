import HalfStarIcon from '../icons/HalfStarIcon';
import StarIcon from '../icons/StarIcon';
import './itemCard.css';

// discount is represented as a percentage
interface ItemCardProps {
  image: string;
  title: string;
  rate: number;
  originalPrice: number;
  discount?: number;
}

const renderStars = (rate: number) => {
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 !== 0;

  const stars = Array.from({ length: fullStars }, (_, i) => (
    <StarIcon key={i} className='rating__icon' />
  ));

  if (hasHalfStar) {
    stars.push(<HalfStarIcon key={fullStars} className='rating__icon' />);
  }

  return stars;
};

export const ItemCard = ({ image, title, rate, originalPrice, discount = 0 }: ItemCardProps) => {
  if (!Number.isInteger(originalPrice)) {
    throw new Error('Price must be an integer');
  }

  const discountedPrice = originalPrice * (1 - discount / 100);
  return (
    <div className='item-card'>
      <img src={image} alt={title} className='item-card__image' />
      <h3 className='item-card__title'>{title}</h3>
      <div className='item-card__rate'>
        {renderStars(rate)}
        <span className='rating__number'>{rate}/5</span>
      </div>
      <div className='item-card__price'>
        {discount !== 0 && <p className='item-card__price--discounted'>${discountedPrice}</p>}
        <span className={`item-card__price--original ${discount !== 0 ? 'has-discount' : ''}`}>
          ${originalPrice}
        </span>
        {discount !== 0 && <span className='item-card__price--discount'>-{discount}%</span>}
      </div>
    </div>
  );
};
