import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

export const Circle = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  background: rgba(255, 255, 255, 0.4);
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
