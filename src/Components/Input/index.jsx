import React from 'react';
import { InputForm, Wrapper, Label, Error } from './styles';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <InputForm
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default Input;
