type InputProps = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: React.HTMLInputTypeAttribute;
};

const InputStateOutside: React.FC<InputProps> = ({
  name,
  value,
  onChange,
  placeholder,
  type,
}) => {
  return (
    <>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />

      <div>value: {value}</div>
    </>
  );
};

export default InputStateOutside;
