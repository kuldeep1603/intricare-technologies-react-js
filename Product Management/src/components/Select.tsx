import React from "react";

interface Option {
  label: string;
  value: string | number;
}

interface SelectProps {
  options: Option[];
  value?: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  name?: string;
  id?: string;
  required?: boolean;
  label?: string;
  RowclassName?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  className,
  style,
  id,
  placeholder,
  name,
  label,
  RowclassName,
  required = false,
}) => {
  return (
    <div className={`${RowclassName}`}>
      <label htmlFor={id} className="label">
        {label}{" "}
        {required && (
          <span className="text-rose-500 font-bold text-[16px]">*</span>
        )}
      </label>
      <select
        value={value}
        onChange={onChange}
        className={`input  ${className}`}
        style={style}
        id={id}
        name={name}
        required={required}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
