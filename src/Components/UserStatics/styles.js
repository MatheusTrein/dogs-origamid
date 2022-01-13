import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Hits = styled.div`
  width: 100%;
  height: 5rem;

  p {
    font-size: 2rem;
    padding-left: 2rem;
  }

  @media (max-width: 40rem) {
    & {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      p {
        font-size: 1.5rem;
        padding: 0;
      }
    }
  }
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const StatsPie = styled.div``;

export const StatsBar = styled.div``;
