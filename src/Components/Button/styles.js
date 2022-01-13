import styled from 'styled-components';

export const ButtonForm = styled.button`
  font-size: 1rem;
  color: var(--type-first);
  padding: 0.8rem 1.2rem;
  background: #fb1;
  border: none;
  color: #764701;
  border-radius: 0.4rem;
  min-width: 8rem;
  cursor: pointer;
  box-sizing: border-box;
  transition: 0.2s;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
