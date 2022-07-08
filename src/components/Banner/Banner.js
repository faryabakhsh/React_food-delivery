import React from 'react'
import './Banner.css';
import { Link } from "react-router-dom";
import Seller from '../Seller/Seller';

function Banner() {
  return (
    
    <div className="banner">
        <div className='banner_content'>
            <h3 className='h3'>
                Sell your food items by clicking here
            </h3>
            <Link to ="/seller" className='a'>
              <button>
              Learn More
              </button>
              </Link>
        </div>
     
    </div>
    
  )
}

export default Banner
