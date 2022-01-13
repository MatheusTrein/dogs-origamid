import React from 'react';

import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import useMedia from '../../hooks/useMedia';

import { Nav, MobileButton } from './styles';

import { ReactComponent as Feed } from '../../assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../assets/estatisticas.svg';
import { ReactComponent as Adicionar } from '../../assets/adicionar.svg';
import { ReactComponent as Sair } from '../../assets/sair.svg';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [menuMobile, setMenuMobile] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    if (menuMobile) {
      setMenuMobile(false);
    }
  }, [pathname]);

  React.useEffect(() => {
    function changeMenuMobile() {
      if (menuMobile) {
        setMenuMobile(false);
      }
    }

    window.addEventListener('click', changeMenuMobile);

    return () => window.removeEventListener('click', changeMenuMobile);
  }, [menuMobile]);

  return (
    <>
      {mobile && (
        <MobileButton
          onClick={() => setMenuMobile(!menuMobile)}
          aria-label="mobileButton"
          className={menuMobile ? 'active' : ''}
        />
      )}
      <Nav
        className={`${!mobile && 'navWeb'} ${
          mobile && menuMobile ? 'navMobileActive animeLeft' : ''
        } ${mobile && !menuMobile ? 'navMobileDisabled' : ''}`}
      >
        <NavLink to="/conta" end>
          <Feed /> {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas /> {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/adicionar">
          <Adicionar /> {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={userLogout}>
          <Sair /> {mobile && 'Sair'}
        </button>
      </Nav>
    </>
  );
};

export default UserHeaderNav;
