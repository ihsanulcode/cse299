import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import google from "../../assets/google.png";
import "../Login/Login.css";
import { GoogleAuthProvider } from "firebase/auth";
import FormInput from "../../components/FormInput";

function Registration() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const { createUser, googleLogin, updateUserName } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Enter Your name",
      errorMessage: "Please enter a name ",
      required: true,
    },
    {
      id: 2,
      name: "phone",
      type: "text",
      placeholder: "Enter Your Phone number",
      errorMessage: " ",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please enter a valid email address!",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be at least 6 characters long",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      pattern: values.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    createUser(values.email, values.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        handleUpdateUser(values.name);
      })
      .catch((e) => console.log(e));
  };
  const handleUpdateUser = (name) => {
    updateUserName(name)
      .then(() => {
        console.log("username updated");
        navigate("/");
      })
      .catch((e) => console.error("error in updating user", e));
  };

  const handleGoogleRegister = () => {
    googleLogin(googleProvider)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form my-4">
        <span className="title">Create Account</span>
        <div>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
        </div>
        <div className="input-field ">
          <button type="submit" className="button w-100 p-2 mt-0">
            Sign up
          </button>
        </div>
        <div className="login-signup d-block">
          <p className="text">
            Already have an account?
            <Link to={"/login"} className="text login-link">
              {" "}
              Login Now!
            </Link>
            <h5>or register with</h5>
            <button
              className="btn btn-light border-primary w-100"
              onClick={handleGoogleRegister}
            >
              <img src={google} style={{ width: "20px" }} className="me-2" />{" "}
              Google
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Registration;
