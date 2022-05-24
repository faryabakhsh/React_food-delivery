import React from 'react'
import "./MenuCard.css";


export default function MenuCard({imgSrc, name, isActive}) {

  return (
        <div className="dishContainer">
      <div className="rowContainer">
          
                 <div className='rowMenuCard' >
                 {/* <div className={`rowMenuCard ${isActive ? `active` : ``}`}> */}
                 <div className="imgBox">
                     <img src={imgSrc} />
                 </div>
               <h3>{name}</h3>
             </div>
          {/* </div> */}
    </div>
    </div>
          );
}
