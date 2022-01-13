import React from 'react';

import { GenericError } from './styles';

const Error = ({ error }) => {
  if (!error) return null;
  return <GenericError>{error}</GenericError>;
};

export default Error;
