import React from 'react'
import { bg_movement, movement, direction } from '../../images/images'
import BgSlide from './BgSlide'

const Movement = () => {
  return (
    <div className="slide-container">
      <BgSlide bgImage={bg_movement} />
      <div className="content-instruction">
        <div className="instruction">
          <div className="instruction-text-container">
            <h2 className="instruction-text">Movement</h2>
            <h2 className="instruction-text">Control</h2>
          </div>
          <div className="control-img-contaier">
            <img src={movement} alt="wasd movement"  className='control-img' style={{width: '50%'}}/>
          </div>
        </div>
        <div className="instruction">
          <div className="instruction-text-container">
            <h2 className="instruction-text">Direction</h2>
            <h2 className="instruction-text">Control</h2>
          </div>
          <div className="control-img-contaier">
            <img src={direction} alt="mouse direction" className='control-img' style={{width: '40%'}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movement