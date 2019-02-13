import React from "react";
import PropTypes from "prop-types";

const InputGroup = ({
  name,
  label,
  type,
  placeholder,
  rows,
  onChange,
  error,
  required,
  value,
  id,
  date,
  autoComplete
}) => {
  return (
    <div className="form-group">
      {label && (
        <label htmlFor={name}>
          <strong>{label}</strong>
        </label>
      )}
      {rows > 1 ? (
        <textarea
          type={type}
          name={name}
          id={id}
          required={required}
          placeholder={placeholder}
          className="form-control"
          rows={rows}
          onChange={onChange}
          value={value}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={id}
          required={required}
          placeholder={placeholder}
          className={`form-control ${date ? "datePicker" : ""}`}
          onChange={onChange}
          value={value}
          autoComplete={autoComplete}
        />
      )}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  rows: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  value: PropTypes.any,
  id: PropTypes.string
};

InputGroup.defaultProps = {
  rows: "1",
  type: "text"
};

export default InputGroup;
