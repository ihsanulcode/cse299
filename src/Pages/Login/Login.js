import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import google from "../../assets/google.png";
// import "./Login.css";
import { GoogleAuthProvider } from "firebase/auth";
import FormInput from "../../components/FormInput";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { signIn, googleLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathName || "/";

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please enter a valid email address!",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "",
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    signIn(values.email, values.password)
      .then((res) => {
        const user = res.user;
        form.reset();
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((e) => {
        console.error(e);
        setError("Wrong Email/Password. Please Try again");
      });
  };

  const handleGoogleSignIn = () => {
    googleLogin(googleProvider)
      .then((res) => {
        const user = res.user;
        navigate("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="form login my-4">
      <span className="title">Welcome Back!</span>
      <div className="log">
        <h5>Login to continue</h5>
      </div>

      <form onSubmit={handleLogin}>
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
        <p>
          <small className="text-danger">{error}</small>
        </p>

        <div className="input-field ">
          <button type="submit" className="button w-100 p-2 mt-0">
            log in
          </button>
        </div>
      </form>

      <div className="login-signup">
        <p className="text">
          Don't have an account?
          <Link to={"/register"} className="text signup-link">
            Signup Now!
          </Link>
          <h5>or login with</h5>
          <button
            className="btn btn-light border-primary w-100"
            onClick={handleGoogleSignIn}
          >
            <img src={google} style={{ width: "20px" }} className="me-2" />{" "}
            Google
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
