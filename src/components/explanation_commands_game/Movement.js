import React from 'react'
import { bg_movement, movement, direction } from '../../images/images'
import BgSlide from './BgSlide'

const Movement = () => {
  return (
    <div className="container-instruction">
      <BgSlide bgImage={bg_movement} />
      <div className="content-instruction">
        <h2>Movement:</h2>
        <img src={movement} alt="wasd movement" />
        <h2>Direction:</h2>
        <img src={direction} alt="mouse direction" />
      </div>
    </div>
  )
}

export default Movement