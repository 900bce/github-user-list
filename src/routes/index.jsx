import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from '../views/List';
import UserDetail from '../views/UserDetail';

function RootRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="detail/:userName" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoute;
