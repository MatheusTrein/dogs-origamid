import React from 'react';

import Feed from '../../Components/Feed';
import Head from '../../Components/Head';

const Home = () => {
  return (
    <>
      <Head
        title="Home"
        description="Bem vindo ao site Dogs! A rede social para pets."
      />
      <Feed user="0" total="6" />
    </>
  );
};

export default Home;
