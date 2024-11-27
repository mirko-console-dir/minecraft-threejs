import React from 'react'
import BgSlide from './BgSlide'
import { bg_block, material, create_block } from '../../images/images'

const CreateBlocks = () => {
  return (
    <div className="slide-container">
      <BgSlide bgImage={bg_block} />
      <div className="content-instruction">
        <div className="instruction">
          <div className="instruction-text-container">
            <h2 className="instruction-text">Select</h2>
            <h2 className="instruction-text">Material</h2>
          </div>
          <div className="control-img-contaier">
            <img src={material} alt="select material command"  className='control-img' style={{width: '80%'}}/>
          </div>
        </div>
        <div className="instruction">
          <div className="instruction-text-container">
            <h2 className="instruction-text">Create</h2>
            <h2 className="instruction-text">Block</h2>
          </div>

          <div className="control-img-contaier">
            <img src={create_block} alt="mouse create block command" className='control-img' style={{width: '40%'}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateBlocks