import React from 'react'
import Watch from '../assets/Frame 24.png'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'> 
      <div className='container'>
        <h1 className='t1'><strong> Exquisite Watches </strong></h1>
        <h2 className='t2'><strong> Choose Luxury, <span style={{color: '#947F6C'}}>Choose us </span></strong></h2> 

        <p className='p'>
        Discover the Perfect watch for Every Occasion <br></br>
        and Elevate Your Style with Timeless Elegance <br></br>
        and Precision Craftsmanship - watch
        </p>
        

        <p className='price'><strong>$4300.00</strong></p>
        
      </div>
      
      <div className='watch'>
        <img src={Watch} alt=""/>
        <p className='priceColumn'><strong>$4300.00</strong></p>
      </div>

      
    </div>

    
    
  )
}

export default Home
