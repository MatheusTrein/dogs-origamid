import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginRoutes from './Login';
import ContaRoutes from './Conta';
import ProtectedRoute from '../helpers/ProtectedRoute';
import Photo from '../pages/Photo';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';

import Home from '../pages/Home';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/*" element={<LoginRoutes />} />
      <Route
        path="/conta/*"
        element={
          <ProtectedRoute>
            <ContaRoutes />
          </ProtectedRoute>
        }
      />
      <Route path="/foto/:title/:id" element={<Photo />} />
      <Route path="/perfil/:user" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
