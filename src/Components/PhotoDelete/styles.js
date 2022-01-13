import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  background: #eee;
  padding: 0.3rem 0.6rem;
  border: 2px solid transparent;
  font-size: 0.875rem;
  border-radius: 0.5rem;

  &:focus,
  &:hover {
    background: white;
    border-color: #c53030;
  }
`;
