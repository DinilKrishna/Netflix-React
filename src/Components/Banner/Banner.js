import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='content' >
            <h1 className='title'>Movies</h1>
            {/* <div className='banner_buttons' >
                <button className='button' >Play</button>
                <button className='button' >My list</button>
            </div> */}
            <h1 className='description'>Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner