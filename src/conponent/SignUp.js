import React, { useState } from "react";
import Input from "./Input";
import Label from "./Label";

import { useHistory } from "react-router-dom";
// import axios from "axios";
import Api from "../utils/api_config";
function SignUp() {
  let history = useHistory();

  const FullNamePlaceholder = "Full Name";
  const FullNameTyppe = "text";
  const FullNameId = "inputName";
  const addressPlaceholder = "Address";
  const emailplaceholder = "Enter your Email";
  const emailTyppe = "Email";
  const emailId = "inputEmail";
  const phoneplaceholder = "Enter your Phone Number";
  const phoneTyppe = "number";
  const phoneId = "inputPhone";
  const passwordplaceholder = "Enter your password";
  const passwordTyppe = "password";
  const passwordId = "inputPassword";
  const confirmPasswordplaceholder = "Confirm Password";
  const confirmPasswordTyppe = "password";
  const confirmPasswordId = "inputConfirmPassword";

  const [fullName, setFullName] = useState("");
  function onFullNameChange(event) {
    setFullName(event.target.value);
  }

  const [email, setEmail] = useState("");
  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  const [phoneNumber, setPhoneNumber] = useState("");
  function onPhoneNumberChange(event) {
    setPhoneNumber(event.target.value);
  }

  const [password, setPassword] = useState("");
  function onPasswrodChange(event) {
    setPassword(event.target.value);
  }

  const [conPassword, setConPassword] = useState("");
  function onConPasswrodChange(event) {
    setConPassword(event.target.value);
  }

  const [address, setAddress] = useState("");
  function onAddressChange(event) {
    setAddress(event.target.value);
  }

  async function onSubmit() {
    try {
      const response = await Api.post("/auth/register", {
        fullName: fullName,
        phoneNumber: phoneNumber,
        address: address,
        email: email,
        password: password,
        conPassword: conPassword,
      });
      if (response.status === 200) {
        alert("successfully login");
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);

        history.push("/login");
      }
    } catch (error) {
      alert("Error: " + error.response.data.error.message);
    }
  }
  return (
    <>
      <section className='login bg-pri d-grid align-items-center h-100 pt-5 pb-5'>
        <div className='container-fluid'>
          <div className='row flex-column form bg-white m-auto'>
            <div className='col-md-11 col-sm-12 m-auto'>
              <Label htmlFor='inputEmail' content='Full Name' />
              <Input
                type={FullNameTyppe}
                id={FullNameId}
                placeholder={FullNamePlaceholder}
                onChange={onFullNameChange}
                value={fullName}
              />
            </div>
            <div className='col-md-11 col-sm-12 m-auto my-3'>
              <Label htmlFor='inputEmail' content='Email' />
              <Input
                type={emailTyppe}
                id={emailId}
                placeholder={emailplaceholder}
                onChange={onEmailChange}
                value={email}
              />
            </div>
            <div className='col-md-11 col-sm-12 m-auto my-3'>
              <Label htmlFor='inputEmail' content='Phone Number' />
              <Input
                type={phoneTyppe}
                id={phoneId}
                placeholder={phoneplaceholder}
                onChange={onPhoneNumberChange}
                value={phoneNumber}
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
            <div className='col-md-11 col-sm-12 mx-auto my-3'>
              <Label
                htmlFor='inputConfirmPassword'
                content='Confirm Password'
              />
              <Input
                type={confirmPasswordTyppe}
                id={confirmPasswordId}
                placeholder={confirmPasswordplaceholder}
                onChange={onConPasswrodChange}
                value={conPassword}
              />
            </div>
            <div className='col-md-11 col-sm-12 m-auto my-3'>
              <Label htmlFor='inputEmail' content='Address' />
              <textarea
                className='form-control address'
                placeholder={addressPlaceholder}
                onChange={onAddressChange}
                value={address}
              ></textarea>
            </div>
            <div className='col-md-11 col-sm-12 mx-auto my-3'>
              <button
                type='submit'
                className='w-100 login-heading bg-dark-brown p-3 text-white rounded font-26 border-0'
                onClick={onSubmit}
              >
                Sing Up
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
