import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 2rem;

  & + a {
    padding: 0.5rem 0;
    color: #666;
    display: inline-block;

    &:after {
      content: '';
      width: 100%;
      height: 2px;
      background-color: currentColor;
      display: block;
    }
  }
`;

export const Div = styled.div`
  margin-top: 4rem;

  h2 {
    font-family: var(--type-second);
    line-height: 1;
    font-size: 2rem;

    &:after {
      content: '';
      display: block;
      width: 3rem;
      height: 0.5rem;
      background-color: #ddd;
      border-radius: 0.2rem;
    }
  }

  p {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;
