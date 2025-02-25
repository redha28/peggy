type InputProps = {
  placeHolder: string;
  className?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeHolder, className, type = "text", value, onChange }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
      className={`${className} bg-transparent border border-blue-600 px-3 py-3 rounded-2xl`}
    />
  );
};

export default Input;
