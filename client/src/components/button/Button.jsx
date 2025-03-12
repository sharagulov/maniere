import React from 'react';
import './Button.scss';
import { HiLogout } from "react-icons/hi";

export default function Button({children, ...props}) {
  return (
    <button className='btn' {...props}><span>{children}</span></button>
  )
}
