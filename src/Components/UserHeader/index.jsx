import React from 'react';

import { useLocation } from 'react-router-dom';

import { Header } from './styles';
import UserHeaderNav from '../UserHeaderNav';

const UserHeader = () => {
  const [title, setTitle] = React.useState(null);
  const { pathname } = useLocation();

  React.useEffect(() => {
    switch (pathname) {
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
      case '/conta/adicionar':
        setTitle('Poste Sua Foto');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [pathname]);

  return (
    <Header className="container animeLeft">
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </Header>
  );
};

export default UserHeader;
