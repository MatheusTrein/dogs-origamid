import React from 'react';

import { ReactComponent as Dogs } from '../../assets/dogs.svg';

import { Wrapper, LogoFooter, TextFooter } from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <LogoFooter>
        <Dogs />
        <TextFooter>Dogs. Alguns direitos reservados.</TextFooter>
      </LogoFooter>
    </Wrapper>
  );
};

export default Footer;
