import React from 'react';

import Feed from '../../Components/Feed';
import Head from '../../Components/Head';
import { UserContext } from '../../contexts/UserContext';
import useMedia from '../../hooks/useMedia';

const UserAccount = () => {
  const { data } = React.useContext(UserContext);

  const mobile = useMedia('(max-width: 40rem)');

  return (
    <>
      <Head
        title="Minha Conta"
        description="Você está visualizando as suas fotos"
      />
      <Feed total={mobile ? '4' : '3'} user={data.id} />
    </>
  );
};

export default UserAccount;
