import React from "react";

interface InputProps {
  type: string;
  label?: string;
  placeholder?: string;
  value?: string | number | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  style?: React.CSSProperties;
  accept?: string;
  min?: string;
  max?: string;
  step?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  placeholder,
  value,
  onChange,
  id,
  name,
  className,
  required,
  disabled,
  readOnly,
  autoFocus,
  accept,
  min,
  max,
  step,
  style,
}) => {
  return (
    <div>
      <label htmlFor={id} className="label flex justify-between items-center">
        <div className="flex gap-1">
          {label}
          {required && (
            <span className="text-rose-500 font-bold text-[16px]">*</span>
          )}
        </div>
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value as string}
        id={id}
        name={name}
        accept={accept}
        min={min}
        max={max}
        step={step}
        className={`input ${className}`}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        autoFocus={autoFocus}
        style={style}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
