import '../../index.css';
import './button.css';

// ButtonProps will now include all the standard properties of an HTML button element,
// such as disabled, form, name, type, and value and TypeScript will type check these properties
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'tertiary';
  size: 'small' | 'medium' | 'large';
  label: string;
  isFullWidth?: boolean;
  onClick?: () => void;
}

const getButtonClassName = (value?: string) => (value ? `button--${value}` : '');

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = 'primary',
  size = 'medium',
  label,
  isFullWidth = false,
  ...props
}: ButtonProps) => {
  const variantClass = getButtonClassName(variant);
  const sizeClass = getButtonClassName(size);
  const fullWidthClass = isFullWidth ? 'button--block' : '';
  const className = ['button', sizeClass, variantClass, fullWidthClass].join(
    ' '
  );
  return (
    <button className={className} {...props}>
      {label}
    </button>
  );
};
