import styled from 'styled-components';

import usuario from '../../assets/usuario.svg';

export const Container = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  /* padding: 0.5rem 0; */
  position: fixed;
  width: 100%;
  z-index: 101;
  background: white;
  top: 0px;
  background-color: white;

  .logo:active {
    svg {
      .firstEye,
      .lastEye {
        transition: 0.1s;
        fill: white;
      }
    }
  }

  #login {
    display: flex;
    align-items: center;
  }

  #login::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url(${usuario}) no-repeat center center;
    margin-left: 0.5rem;
    position: relative;
    top: -1px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
`;
