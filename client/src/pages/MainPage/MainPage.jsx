// InitialPage.jsx

import React, { useState } from 'react';
import './MainPage.scss';
import Button from '@/components/button/Button';
import { useCurtain } from "@/contexts/CurtainContext";
import goods from "@/mockdb";
import { HiChevronDown } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

export default function InitialPage() {
  const navigate = useNavigate();
  const [isDesc, setIsDesc] = useState(true);
  const { showCurtain, hideCurtain } = useCurtain();

  const fixedRandoms = Array.from({ length: 18 }, (_, i) => (i * 13) % 21 + 10);

  const handleSeeDesc = async () => {
    setIsDesc(!isDesc);
  }

  const handlePurchase = async () => {
    showCurtain(750);
    let timeout = setTimeout(() => {
      navigate("/")
    }, 250);
    return () => clearTimeout(timeout);
  }

  	return (
      <div className='m-container'>
        <div className='m-blocks'>
          <div className='m-block'>
            <div className='m-top-block'>
              <div className='m-left-img'>
                <img src={goods[0].imgpath} alt="" />
              </div>
              <div className='m-left-text'>
                <span className='mega'>{goods[0].number}</span>
              </div>
            </div>
            <div className='m-bot-block'>
              <div className='m-bot-desc'>
                <h2>{goods[0].name}</h2>
                <div className='m-bot-buy'>
                  <Button onClick={handlePurchase}>Purchase</Button>
                  <span>only $3,999.00 <span className='greyed-text desktop'>or $333.25/mo.per month for 12 mo.*</span></span>
                </div>
              </div>
            </div>
            <div className={`m-desc-func ${isDesc ? "visible" : ""}`}>

              <div onClick={handleSeeDesc} className={`m-desc-show`}>
                <span className='greyed-text'>{isDesc ? "Hide" : "See"} description</span>
                    <HiChevronDown className={`greyed-text chevron ${isDesc ? "rotate" : ""}`} size={15}/>
              </div>

              <span className={`description ${isDesc ? "visible" : ""}`}>{goods[0].desc}</span>

            </div>
          </div>
        </div>
      </div>
  	);
};
