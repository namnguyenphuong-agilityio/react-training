import './button.css';

interface ButtonProps {
  variant?: 'primary' | 'tertiary';
  color?: 'black' | 'white' | 'lightGray';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = 'primary',
  size = 'medium',
  color,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={['button', `button--${size}`, `button--${variant}`, `button--${color}`].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
