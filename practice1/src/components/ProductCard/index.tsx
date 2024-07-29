import { RatingScore } from '../RatingScore';
import Price from './Price';
import './productCard.css';

// Discount is represented as a percentage
interface ProductCardProps {
  image: string;
  title: string;
  rate: number;
  originalPrice: number;
  discount?: number;
}

export const ProductCard = ({ image, title, rate, originalPrice, discount = 0 }: ProductCardProps) => {
  return (
    <div className='product-card'>
      <img src={image} alt={title} className='product-card__image' />
      <h3 className='product-card__title'>{title}</h3>
        <div className='product-card__rate'>
          <RatingScore rate={rate} />
          <span className='rating__number'>{rate}/5</span>
        </div>
        <Price originalPrice={originalPrice} discount={discount} />
      </div>
  );
};
