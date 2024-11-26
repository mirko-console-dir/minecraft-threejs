import React from 'react'

const BgSlide = ({bgImage}) => {
  return (
    <div 
        className="slide-img"
        style={{backgroundImage: `url(${bgImage})`}}
    ></div>
  )
}

export default BgSlide