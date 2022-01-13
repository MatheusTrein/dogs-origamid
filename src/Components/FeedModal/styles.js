import styled from 'styled-components';

export const Screen = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.4);
  padding: 2rem calc(4rem + 15px) 2rem 4rem;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20000;

  @media (max-width: 40rem) {
    padding: 2rem calc(2rem + 4px) 2rem 2rem;
  }
`;
