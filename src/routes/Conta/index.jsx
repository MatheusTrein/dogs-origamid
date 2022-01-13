import React from 'react';
import { Routes, Route } from 'react-router-dom';

import UserAccount from '../../pages/UserAccount';
import UserStats from '../../pages/UserStats';
import UserPhotoPost from '../../pages/UserPhotoPost';
import NotFound from '../../pages/NotFound';

import UserHeader from '../../Components/UserHeader';

const ContaRoutes = () => {
  return (
    <>
      <UserHeader />
      <Routes>
        <Route path="/" element={<UserAccount />} />
        <Route path="/estatisticas" element={<UserStats />} />
        <Route path="/adicionar" element={<UserPhotoPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default ContaRoutes;
