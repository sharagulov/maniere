// InitialPage.jsx

import React, { useState, useEffect, useRef } from 'react';
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
  const observerRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2, rootMargin: "50px 0px" }
    );

    observerRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();

  })

  


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
      <div className='m-total'>
        {goods.map((item, index) => (
          <div key={item.id} ref={(el) => (observerRef.current[index] = el)} className='m-container autoShow'>
            <div className='m-blocks'>
              <div className='m-block'>
                
                <div className={`m-top-block`}>
                  <div className='m-left-img'>
                    <img src={item.imgpath} alt="" />
                  </div>
                  <div className='m-left-text'>
                    <span className='mega'>{item.number}</span>
                  </div>
                </div>

                <div className={`m-bot-block`}>
                  <div className='m-bot-desc'>
                    <div className='m-bot-desc-flex'>
                      <h2>{item.name}</h2>
                      <Button variant="greyed" onClick={handlePurchase}>See more</Button>
                    </div>
                    
                    <div className='m-bot-desc-flex'>
                      <Button onClick={handlePurchase}>Purchase</Button>
                      <span>only {item.cost} <span className='greyed-text desktop'>or {item.costper}/mo.per month for 12 mo.*</span></span>
                    </div>
                  </div>
                </div>

                <div className={`m-desc-func ${isDesc ? "visible" : ""} `}>
                  <div onClick={handleSeeDesc} className={`m-desc-show`}>
                    <span className='greyed-text'>{isDesc ? "Hide" : "See"} description</span>
                        <HiChevronDown className={`greyed-text chevron ${isDesc ? "rotate" : ""}`} size={15}/>
                  </div>
                  <span className={`description ${isDesc ? "visible" : ""}`}>{item.desc}</span>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
  	);
};
