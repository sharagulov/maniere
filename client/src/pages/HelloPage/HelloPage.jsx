// InitialPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HelloPage.scss';
import Button from '@/components/button/Button';
import Marquee from '@/components/marquee/Marquee';
import { useCurtain } from "@/contexts/CurtainContext";

export default function InitialPage() {
  const navigate = useNavigate();
  const { showCurtain, hideCurtain } = useCurtain();

  const handleClick = async () => {
    showCurtain(750);
    let timeout = setTimeout(() => {
      navigate("/carousel")
    }, 250);
    return () => clearTimeout(timeout);
  };

  const fixedRandoms = Array.from({ length: 20 }, (_, i) => (i * 13) % 21 + 10);

  	return (
      <div className='h-container'>
        <div className="h-background">
          {fixedRandoms.map((r, i) => <Marquee key={i} r={r} />)}
        </div>
        <div className='h-main-container'>
          <h2>The place where you can find inspiration.</h2>
          <Button onClick={handleClick}>See variants</Button>
        </div>
      </div>
  	);
};
