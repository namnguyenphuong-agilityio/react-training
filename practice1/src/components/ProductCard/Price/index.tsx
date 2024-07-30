import './price.css';

interface PriceProps {
  originalPrice: number;
  discount?: number;
}

const formatPrice = (price: number) => Number.isInteger(price) ? price : price.toFixed(2);

const Price = ({ originalPrice, discount = 0 }: PriceProps) => {
  if (originalPrice < 0) {
    return null;
  }

  // discount are not less than 0 and not more than 100
  discount = Math.max(0, Math.min(100, discount));

  const discountedPrice = originalPrice * (1 - discount / 100);

  const originalPriceValue = formatPrice(originalPrice);
  const discountedPriceValue = formatPrice(discountedPrice);

  return (
    <div className='price'>
      {discount > 0 && <p className='price--discounted'>${discountedPriceValue}</p>}
      <span className={`price--original ${discount > 0 ? 'has-discount' : ''}`}>
        ${originalPriceValue}
      </span>
      {discount > 0 && <span className='price--discount'>-{discount}%</span>}
    </div>
  );
};

export default Price;
