import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Nav } from './styles';
import { ReactComponent as Logo } from '../../assets/dogs.svg';

import { UserContext } from '../../contexts/UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <Container>
      <Nav className="container">
        <Link className="logo" to="/" aria-label="Dogs - Home" id="logo">
          <Logo />
        </Link>
        {data && data.email}
        {data ? (
          <Link to="/conta" id="login">
            {data.username}
          </Link>
        ) : (
          <Link to="/login" id="login">
            Login | Criar
          </Link>
        )}
      </Nav>
    </Container>
  );
};

export default Header;
