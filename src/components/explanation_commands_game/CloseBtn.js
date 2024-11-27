import React from 'react'

const CloseBtn = ({toggleModalCommands}) => {
  return (
    <button className="pushable start__btn start__btn__pushable" onClick={toggleModalCommands}>
      <span className="front start__btn__front">
        Start
      </span>
    </button>
  )
}

export default React.memo(CloseBtn)