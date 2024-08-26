import './inputForm.css';

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon: React.ElementType;
  customClassNames?: string;
}

export const InputForm = ({ Icon, placeholder, customClassNames }: InputFormProps) => {
  return (
    <div className={`input-field ${customClassNames}`}>
      <Icon className="input__icon"/>
      <input placeholder={placeholder} />
    </div>
  );
}
