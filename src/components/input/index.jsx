import React from "react";
import "./style.scss";
const InputField = (props) => {
  const { field, form } = props; // tu thang fastfield
  const { name, value, onBlur, onChange } = field; //
  const { errors, touched } = form;
  const { type, label, placeholder, disabled, classname } = props; // tu dinh nghia them

  return (
    <div className="input-field input">
      {label && (
        <label
          htmlFor={name}
          style={{
            display: "block",
            color: " #333",
            fontWeight: "400",
            textTransform: "capitalize",
          }}
        >
          {label}
        </label>
      )}
      <input
        id={name}
        placeholder={placeholder}
        type={type}
        value={value}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        className={
          errors[name] && touched[name]
            ? "text-input error"
            : "text-input input-group "
        }
      />
      {errors[name] && touched[name] && (
        <div className="input-feedback">{errors[name]}</div>
      )}
    </div>
  );
};

export default InputField;
