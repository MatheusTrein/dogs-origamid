import styled from 'styled-components';

export const GridPhotos = styled.ul`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
