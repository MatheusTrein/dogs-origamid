import styled from 'styled-components';

import View from '../../assets/visualizacao.svg';

export const PhotoItem = styled.li`
  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  div {
    grid-area: 1/1;
  }

  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;
  }

  &:hover {
    span {
      display: flex;
    }
  }

  @media (max-width: 40rem) {
    &:nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }
`;

export const Hits = styled.span`
  grid-area: 1/1;
  display: none;
  align-items: center;
  justify-content: center;
  color: white;
  background: rgba(0, 0, 0, 0.3);

  &:before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 10px;
    margin-right: 0.25rem;
    background: url(${View});
  }
`;
