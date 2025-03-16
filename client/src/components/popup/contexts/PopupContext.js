import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const [popupData, setPopupData] = useState(null);

  const showPopup = (data) => {
    setIsVisible(true);
    setPopupData(data);
  };
  
  const hidePopup = () => {
    setIsVisible(false);
    setTimeout(() => {
      setPopupData(null);
    }, 300)
  };


  return (
    <PopupContext.Provider value={{ isVisible, showPopup, hidePopup, popupData }}>
      {children}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  return useContext(PopupContext);
}
