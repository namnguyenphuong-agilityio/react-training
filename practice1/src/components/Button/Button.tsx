import './button.css';

interface ButtonProps {
  variant?: 'primary' | 'tertiary';
  color?: 'black' | 'white' | 'lightGray';
  size: 'small' | 'medium' | 'large';
  label: string;
  isFullWidth?: boolean;
  onClick?: () => void;
}

const getVariantClass = (variant?: string) => {
  switch (variant) {
    case 'primary':
      return 'button--primary';
    case 'tertiary':
      return 'button--tertiary';
    default:
      return '';
  }
};

const getColorClass = (color?: string) => {
  switch (color) {
    case 'black':
      return 'button--black';
    case 'white':
      return 'button--white';
    case 'lightGray':
      return 'button--lightGray';
    default:
      return '';
  }
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant,
  size = 'medium',
  color,
  label,
  isFullWidth = false,
  ...props
}: ButtonProps) => {
  const variantClass = getVariantClass(variant);
  const colorClass = getColorClass(color);
  const fullWidthClass = isFullWidth ? 'button--block' : '';
  return (
    <button
      type="button"
      className={`button button--${size} ${variantClass} ${colorClass} ${fullWidthClass}`}
      {...props}
    >
      {label}
    </button>
  );
};
