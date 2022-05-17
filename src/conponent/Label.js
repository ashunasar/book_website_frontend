import React from "react";

function Label(props) {
  return (
    <>
      <label htmlFor={props.for} className='form-label login-heading'>
        {props.content}
      </label>
    </>
  );
}

export default Label;
