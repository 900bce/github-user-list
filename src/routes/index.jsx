import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from '../views/List';

function RootRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoute;
