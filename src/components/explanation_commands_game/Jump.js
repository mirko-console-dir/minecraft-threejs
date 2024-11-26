import React from 'react'
import BgSlide from './BgSlide'
import { bg_jump } from '../../images/images'
function Jump() {
  return (
    <div className="container-instruction">
      <BgSlide bgImage={bg_jump} />
      <div className="content-instruction">
      <h2>Jump</h2>
          Spacebar
          <h2>Fly</h2>
          W + Hold Jump + R repeately
      </div>
    </div>

  )
}

export default Jump