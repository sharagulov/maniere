// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HelloPage from '@/pages/HelloPage/HelloPage';
import MainPage from '@/pages/MainPage/MainPage';
import { CurtainProvider } from '@/contexts/CurtainContext';
import CurtainOverlay from '@/components/curtain/CurtainComponent';

export default function App() {
  return (
    <BrowserRouter>
      <CurtainProvider>
        <CurtainOverlay />
        <Routes>
          <Route path="/" element={<HelloPage />} />
          <Route path="/carousel" element={<MainPage />} />
        </Routes>
      </CurtainProvider>
    </BrowserRouter>
  );
}
