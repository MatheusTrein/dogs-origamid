/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-this-in-sfc */
import React from 'react';

import { VictoryChart, VictoryBar, VictoryPie, VictoryTheme } from 'victory';

import { Section, Stats, StatsBar, Hits, StatsPie } from './styles';

import StatsWrapper from '../StatsWrapper';

const UserStatic = ({ data }) => {
  const [graph, setGraph] = React.useState(null);
  const [hits, setHits] = React.useState(0);

  React.useEffect(() => {
    function transformData() {
      const dataList = data.map(element => {
        return {
          y: Number(element.acessos),
          x: element.title,
        };
      });

      const totalHits = data.reduce((acum, curr) => {
        return Number(acum) + Number(curr.acessos);
      }, 0);

      setGraph(dataList);
      setHits(totalHits);
    }

    transformData();
  }, [data]);

  return (
    <Section>
      <StatsWrapper>
        <Hits>
          <p>Total de acessos: {hits}</p>
        </Hits>
      </StatsWrapper>
      {hits > 0 ? (
        <Stats>
          <StatsWrapper>
            <StatsPie>
              <VictoryPie
                padAngle={1}
                innerRadius={70}
                data={graph}
                theme={VictoryTheme.material}
              />
            </StatsPie>
          </StatsWrapper>
          <StatsWrapper>
            <StatsBar>
              <VictoryChart theme={VictoryTheme.material}>
                <VictoryBar
                  style={{ data: { fill: '#c43a31' } }}
                  data={graph}
                  alignment="start"
                />
              </VictoryChart>
            </StatsBar>
          </StatsWrapper>
        </Stats>
      ) : (
        <p>Suas fotos não obtiveram nenhum acesso ainda.</p>
      )}
    </Section>
  );
};

export default UserStatic;
