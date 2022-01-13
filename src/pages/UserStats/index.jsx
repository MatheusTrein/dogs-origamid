import React from 'react';

import Container from '../../Components/Container';
import Head from '../../Components/Head';
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';

import useFetch from '../../hooks/useFetch';
import { STATS_GET } from '../../api/api';

const UserStatics = React.lazy(() => import('../../Components/UserStatics'));

const UserStats = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function getStat() {
      const token = JSON.parse(window.localStorage.getItem('token'));

      const { url, options } = STATS_GET({ token });

      await request(url, options);
    }

    getStat();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <>
        {data.length === 0 ? (
          <Container>
            <p>Você não tem fotos ainda</p>
          </Container>
        ) : (
          <>
            <Head
              title="Estatísticas"
              description="Estatísticas da sua conta"
            />
            <Container>
              <React.Suspense fallback={<div />}>
                <UserStatics data={data} />
              </React.Suspense>
            </Container>
          </>
        )}
      </>
    );
  else return null;
};

export default UserStats;
