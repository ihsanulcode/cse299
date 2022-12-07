import { useState } from "react";
import "./FormInput.css";
import "../Pages/Login/Login.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div>
      <input
        className="form-input"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />

      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
