import React from 'react'
import BgSlide from './BgSlide'
import { bg_block } from '../../images/images'

const CreateBlocks = () => {
  return (
    <div className="container-instruction">
      <BgSlide bgImage={bg_block} />
      <div className="content-instruction">
        <h2>Select material</h2>
        1-2-3-4-5
        <h2>Create Block</h2>
        Mouse click
      </div>
    </div>
  )
}

export default CreateBlocks