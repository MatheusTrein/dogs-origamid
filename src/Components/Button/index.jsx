import React from 'react';
import { ButtonForm } from './styles';

const Button = ({ children, ...props }) => {
  return <ButtonForm {...props}>{children}</ButtonForm>;
};

export default Button;
