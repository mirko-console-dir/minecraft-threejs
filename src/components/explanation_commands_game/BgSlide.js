import React from 'react'

const BgSlide = ({bgImage}) => {
  return (
    <div 
        className="slide-bg-img"
        style={{backgroundImage: `url(${bgImage})`}}
    ></div>
  )
}

export default BgSlide