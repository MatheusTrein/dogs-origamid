import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 1.1rem;
  display: block;
  padding-bottom: 0.5rem;
  line-height: 1;
`;

export const InputForm = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #eee;
  border-radius: 0.4rem;
  background: #eee;
  padding: 0.8rem;
  font-size: 1rem;
  transition: 0.2s;

  &:focus,
  &:hover {
    outline: none;
    border: 1px solid #fb1;
    box-shadow: 0 0 0 3px #fea;
    background: white;
  }
`;

export const Error = styled.p`
  font-size: 0.875rem;
  color: #c30530;
  margin-top: 0.2rem;
`;
