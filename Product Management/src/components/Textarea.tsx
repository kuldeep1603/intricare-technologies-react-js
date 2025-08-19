import React from "react";

interface textareaProps {
  label?: string;
  placeholder?: string;
  value?: string | number | undefined;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id?: string;
  name?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  rows?: number;
  cols?: number;
  style?: React.CSSProperties;
}

const Textarea: React.FC<textareaProps> = ({
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
  style,
  rows = 4,
  cols = 50,
}) => {
  return (
    <>
      <label htmlFor={id} className="label">
        {label}{" "}
        {required && (
          <span className="text-rose-500 font-bold text-[20px]">*</span>
        )}
      </label>
      <textarea
        placeholder={placeholder}
        value={value}
        id={id}
        name={name}
        className={`input ${className}`}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        autoFocus={autoFocus}
        style={style}
        rows={rows}
        cols={cols}
        onChange={onChange}
      />
    </>
  );
};

export default Textarea;
