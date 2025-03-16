// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HelloPage from '@/pages/HelloPage/HelloPage';
import MainPage from '@/pages/MainPage/MainPage';


import { CurtainProvider } from '@/components/curtain/contexts/CurtainContext';
import CurtainOverlay from '@/components/curtain/CurtainComponent';

import { PopupProvider } from '@/components/popup/contexts/PopupContext';
import PopupComponent from '@/components/popup/PopupComponent';

export default function App() {
  return (
    <BrowserRouter>
      <CurtainProvider>
        <PopupProvider>
          <CurtainOverlay />
          <PopupComponent />
          <Routes>
            <Route path="/" element={<HelloPage />} />
            <Route path="/carousel" element={<MainPage />} />
          </Routes>
        </PopupProvider>
      </CurtainProvider>
    </BrowserRouter>
  );
}
