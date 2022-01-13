import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 1rem;
  @media (max-width: 40rem) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: ${props => (props.img ? `1fr 1fr` : 'auto')};
  }
`;

export const DivForm = styled.div`
  min-width: 0;
.`;

export const Form = styled.form`
  min-width: 0;

  input[type='file'] {
    white-space: break-spaces;
    word-wrap: break-word;
    width: 200px;
    overflow: auto;
  }

  .inputFile {
    margin-bottom: 1rem;
  }
`;

export const DivImg = styled.div`
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;
