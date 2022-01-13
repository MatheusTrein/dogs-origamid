import React from 'react';

const types = {
  email: {
    regex:
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
    message: 'Email inválido.',
  },
};

const useForm = type => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(input) {
    if (type === false) return true;
    if (input.length === 0) {
      setError('Digite algum valor.');
      return false;
    } else if (types[type] && !types[type].regex.test(input)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    setValue(target.value);
    if (error) validate(target.value);
  }

  function clearInput() {
    setValue('');
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
    clearInput,
  };
};

export default useForm;
