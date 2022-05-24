import { ChevronRightRounded } from '@mui/icons-material'
import React from 'react'
import './Category.css';

export default function Category({name})
 {
  return (

    <div className="dishconatiner">

    <div className='category'>
        <h3>{name}</h3>
        <div className="viewall">
            {/* <p>view all</p> */}
            <i><ChevronRightRounded /></i>
        </div>
      
    </div>
    </div>
  )
}
