import React from 'react'
import BgSlide from './BgSlide'
import { bg_jump, jump, fly} from '../../images/images'
function Jump() {
  return (
    <div className="slide-container">
      <BgSlide bgImage={bg_jump} />
      <div className="content-instruction">
        <div className="instruction">
          <div className="instruction-text-container">
            <h2 className="instruction-text">Jump</h2>
            <h2 className="instruction-text">Control</h2>
          </div>
          <div className="control-img-contaier">
            <img src={jump} alt="Jump command"  className='control-img' style={{width: '80%'}}/>
          </div>
        </div>
        <div className="instruction">
          <div className="instruction-text-container">
            <h2 className="instruction-text">Fly</h2>
            <h2 className="instruction-text">Control</h2>
          </div>
          <div className="control-img-contaier">
            <img src={fly} alt="Fly command" className='control-img' style={{width: '80%'}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jump