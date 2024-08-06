import './inputForm.css';

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon: React.ElementType;
}

export const InputForm = ({ Icon, placeholder }: InputFormProps) => {
  return (
    <div className="input-field">
      <Icon className="input__icon"/>
      <input placeholder={placeholder} />
    </div>
  );
}
