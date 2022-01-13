import React from 'react';

import Head from '../../Components/Head';

const NotFound = () => {
  return (
    <>
      <Head
        title="404"
        description="Opss... Infelizmente a página não foi encontrada."
      />
      <h1 className="title">Erro: 404</h1>
      <span>Opss...Página não encontrada.</span>
    </>
  );
};

export default NotFound;
