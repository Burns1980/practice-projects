import React from 'react';

const Input = ({ children, ...props }) => {
  return (
    <p>
      <label htmlFor={props.name}>{children}</label>
      <input {...props} id={props.name} />
    </p>
  );
};

export default Input;
