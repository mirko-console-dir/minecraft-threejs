import React from 'react'

const CloseBtn = ({toggleModalCommands}) => {
  return (
    <button className='modal_close_btn' onClick={toggleModalCommands}>
        <h2>Close</h2>
    </button>
  )
}

export default React.memo(CloseBtn)