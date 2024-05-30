import './button.css';

// ButtonProps will now include all the standard properties of an HTML button element,
// such as disabled, form, name, type, and value and TypeScript will type check these properties
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  color?: 'black' | 'white' | 'lightGray';
  size: 'small' | 'medium' | 'large';
  label: string;
  isFullWidth?: boolean;
  onClick?: () => void;
}

const getClassName = (value?: string) => {
  switch (value) {
    case 'primary':
      return 'button--primary';
    case 'secondary':
      return 'button--secondary';
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
  const variantClass = getClassName(variant);
  const colorClass = getClassName(color);
  const fullWidthClass = isFullWidth ? 'button--block' : '';
const className = [
    'button',
    `button--${size}`,
    variantClass,
    colorClass,
    fullWidthClass,
  ].join(' ');
  return (
    <button
      type="button"
      className={className}
      {...props}
    >
      {label}
    </button>
  );
};
