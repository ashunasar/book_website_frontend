import React, { useState } from "react";
import Input from "./Input";
import Label from "./Label";
import { Link, useHistory } from "react-router-dom";
import Api from "../utils/api_config";

function Login() {
  let history = useHistory();

  const emailplaceholder = "Enter your email";
  const emailTyppe = "Email";
  const emailId = "inputEmail";
  const passwordplaceholder = "Enter your password";
  const passwordTyppe = "password";
  const passwordId = "inputPassword";

  const [email, setEmail] = useState("");
  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  const [password, setPassword] = useState("");
  function onPasswrodChange(event) {
    setPassword(event.target.value);
  }
  async function onSubmit() {
    try {
      const response = await Api.post("/auth/login", {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        alert("successfully login");

        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        history.push("/");
      }
    } catch (error) {
      alert("Error: " + error.response.data.error.message);
    }
  }
  return (
    <>
      <section className='login bg-pri d-grid align-items-center'>
        <div className='container-fluid'>
          <div className='row flex-column form bg-white m-auto'>
            <div className='col-md-11 col-sm-12 m-auto'>
              <Label htmlFor='inputEmail' content='Email' />
              <Input
                type={emailTyppe}
                id={emailId}
                placeholder={emailplaceholder}
                onChange={onEmailChange}
                value={email}
              />
            </div>
            <div className='col-md-11 col-sm-12 mx-auto my-3'>
              <Label htmlFor='inputPassword' content='Password' />
              <Input
                type={passwordTyppe}
                id={passwordId}
                placeholder={passwordplaceholder}
                onChange={onPasswrodChange}
                value={password}
              />
            </div>
            <div className='col-md-11 col-sm-12 m-auto d-flex '>
              <Link
                to='/'
                className='login-heading font-18 ms-auto fw-medium text-decoration-none'
              >
                Forgot password
              </Link>
            </div>
            <div className='col-md-11 col-sm-12 mx-auto my-3'>
              <button
                type='submit'
                className='w-100 login-heading bg-dark-brown p-3 text-white rounded font-26 border-0'
                onClick={onSubmit}
              >
                Sign In
              </button>
            </div>
            <div className='col-md-11 col-sm-12 m-auto mb-3 text-center'>
              <h5 className='login-heading color-light-brown font-21'>
                Don’t have an account?
                <Link
                  to='/signUp'
                  className='font-23 color-dark-brown text-decoration-none'
                >
                  Sign up for free
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
