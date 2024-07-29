import './price.css'

interface PriceProps {
  originalPrice: number;
  discount?: number;
}

const Price = ({ originalPrice, discount = 0 }: PriceProps) => {
  const discountedPrice = originalPrice * (1 - discount / 100);

  const originalPriceValue = Number.isInteger(originalPrice) ? originalPrice : originalPrice.toFixed(2);
  const discountedPriceValue = Number.isInteger(discountedPrice) ? discountedPrice : discountedPrice.toFixed(2);

  return (
    <div className='price'>
      {discount !== 0 && <p className='price--discounted'>${discountedPriceValue}</p>}
      <span className={`price--original ${discount !== 0 ? 'has-discount' : ''}`}>
        ${originalPriceValue}
      </span>
      {discount !== 0 && <span className='price--discount'>-{discount}%</span>}
    </div>
  );
};

export default Price;
