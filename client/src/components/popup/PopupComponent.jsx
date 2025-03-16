import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineX } from "react-icons/hi";
import { usePopup } from './contexts/PopupContext';
import { useCurtain } from "@/components/curtain/contexts/CurtainContext";
import './Popup.scss';

import Button from '@/components/button/Button';

export default function PopupComponent() {
  const { isVisible, hidePopup, popupData } = usePopup();
  const navigate = useNavigate();
  const { showCurtain, hideCurtain } = useCurtain();

  const handlePurchase = async () => {
    showCurtain(750);
    let timeout = setTimeout(() => {
      navigate("/")
      hidePopup();
    }, 250);
    return () => clearTimeout(timeout);
  }


  return (
    <div className={`popup-overlay ${isVisible ? "visible" : ""}`} onClick={hidePopup}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className='popup-left'>
          <img src={`img/${popupData?.item?.id || '1'}.jpg`} alt="" />
        </div>
        <div className='popup-right'>
          <HiOutlineX className="popup-close" size={22} onClick={hidePopup}/>
          <h2>{popupData?.item?.name}</h2>
          <div className='popup-char'>
            <div className='popup-char-item'>
              <span className='greyed-text name'>Collection</span>
              <span>{popupData?.item?.collection}</span>
            </div>
            <div className='popup-char-item'>
              <span className='greyed-text name'>Type</span>
              <span>{popupData?.item?.type}</span>
            </div>
            <div className='popup-char-item'>
              <span className='greyed-text name'>Style</span>
              <span>{popupData?.item?.style}</span>
            </div>
            <div className='popup-char-item'>
              <span className='greyed-text name'>Series</span>
              <span>{popupData?.item?.series}</span>
            </div>
            <div className='popup-char-item'>
              <span className='greyed-text name'>Size on model</span>
              <span>{popupData?.item?.sizeOnModel}</span>
            </div>

            <div/>
            <div/>

            <div className='popup-char-item'>
              <span className='greyed-text name'>18+</span>
              <span>{popupData?.item?.explicit}</span>
            </div>
            <div className='popup-char-item'>
              <span className='greyed-text name'>Sleeve Type</span>
              <span>{popupData?.item?.sleeveType}</span>
            </div>
            <div className='popup-char-item'>
              <span className='greyed-text name'>Features</span>
              <span>{popupData?.item?.features}</span>
            </div>
            <div className='popup-char-item'>
              <span className='greyed-text name'>Brand</span>
              <span>{popupData?.item?.brand}</span>
            </div>
          </div>
          <div className='popup-rules'>
              {popupData?.item?.rules?.map((item, index) => (
                <div className='rule-image' key={index}>
                  <img src={item} alt="" />
                </div>
              ))}
          </div>
          <Button onClick={handlePurchase}>Purchase</Button>
        </div>
      </div>
    </div>
  );
}
