import React from "react";

function Input(props) {
  return (
    <>
      <input
        type={props.type}
        id={props.id}
        className='form-control login-heading font-18 ps-3 mb-3 shadow-none'
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </>
  );
}

export default Input;
