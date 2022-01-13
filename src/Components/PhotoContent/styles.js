import styled from 'styled-components';

import View from '../../assets/visualizacao-black.svg';

export const Modal = styled.div`
  display: grid;
  height: 36rem;
  grid-template-columns: 36rem 20rem;
  border-radius: 0.2rem;
  overflow: hidden;
  background: white;
  opacity: 0.5;
  transform: scale(0.5);
  animation: scaleUp 0.3s forwards;

  @keyframes scaleUp {
    to {
      opacity: initial;
      transform: initial;
    }
  }

  @media (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    grid-template-columns: minmax(18rem, 40rem);
    overflow-y: auto;
  }
`;

export const ModalPhoto = styled.div``;

export const Img = styled.img``;

export const ModalInfo = styled.div`
  padding: 1rem 2rem;
  display: grid;
  grid-template-rows: auto 2fr auto;
  overflow-y: auto;
`;

export const InfoDetails = styled.div`
  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;

    span:before {
      content: '';
      margin-right: 0.5rem;
      display: inline-block;
      width: 16px;
      height: 10px;
      background: url(${View});
    }

    span,
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 200;
      color: #aaa;
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  li {
    display: flex;
    font-weight: bold;
    font-size: 1.125rem;

    &:before {
      content: '';
      display: inline-block;
      margin-right: 0.5rem;
      width: 2px;
      height: 20px;
      background: #333;
      margin-bottom: 2rem;
    }
  }
`;
