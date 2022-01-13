import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin-top: 2rem;

  textarea {
    display: block;
    width: 100%;
    border: 1px solid #eee;
    border-radius: 0.4rem;
    background: #eee;
    padding: 0.8rem;
    font-size: 1rem;
    transition: 0.2s;
    resize: none;

    &:focus,
    &:hover {
      outline: none;
      border: 1px solid #fb1;
      box-shadow: 0 0 0 3px #fea;
      background: white;
    }
  }

  button {
    background-color: white;
    border: none;
    display: flex;
    align-items: center;
    margin-left: 0.5rem;

    &:hover,
    &:focus {
      svg path {
        fill: #fea;
        stroke: #fb1;
      }
      svg g {
        animation: latir 0.725s infinite;

        @keyframes latir {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      }
    }
  }
`;
