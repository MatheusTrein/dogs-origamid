import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Section, DivForms } from './styles';
import { UserContext } from '../../contexts/UserContext';
import Container from '../../Components/Container';

import Login from '../../pages/Login';
import LoginCreate from '../../pages/LoginCreate';
import LoginPasswordLost from '../../pages/LoginPasswordLost';
import LoginPasswordReset from '../../pages/LoginPasswordReset';
import NotFound from '../../pages/NotFound';

const LoginRoutes = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/conta" />;

  return (
    <Section>
      <DivForms>
        <Routes>
          <Route
            path="/"
            element={
              <Container>
                <Login />
              </Container>
            }
          />
          <Route path="/criar" element={<LoginCreate />} />
          <Route path="/perdeu" element={<LoginPasswordLost />} />
          <Route path="/reset" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DivForms>
    </Section>
  );
};

export default LoginRoutes;
