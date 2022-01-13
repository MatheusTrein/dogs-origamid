import React from 'react';

import { useParams } from 'react-router-dom';
import Feed from '../../Components/Feed';
import Head from '../../Components/Head';
import useMedia from '../../hooks/useMedia';

const Profile = () => {
  const { user } = useParams();

  const mobile = useMedia('(max-width: 40rem)');

  return (
    <>
      <Head
        title={user}
        description={`Você esta visiualizando o perfil de ${user}`}
      />
      <Feed total={mobile ? '4' : '3'} user={user} />
    </>
  );
};

export default Profile;
