import '../../index.css';
import './quality.css';

interface QualityProps {
  quantity: string;
  label: string;
}

export const Quality = ({ quantity, label }: QualityProps) => {
  return (
    <div className="quality">
      <p className="quality__number">{quantity}</p>
      <p className="quality__label">{label}</p>
    </div>
  );
}
