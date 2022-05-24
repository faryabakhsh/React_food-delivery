
import React from 'react'
import './BottomMenu.css'


function BottomMenu({link, icon }) {
  return (
  <li>
      <a href={link}>
          <span className='icon'>{icon}</span>
      </a>
   
  </li>
  );
}

export default BottomMenu
