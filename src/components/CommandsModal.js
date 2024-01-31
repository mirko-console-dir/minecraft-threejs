import React from "react"

export const CommandsModal = ({toggleModalCommands}) => {
    return (
        <div className="modal z-20" style={{position: 'fixed',width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.40)'}}>
        <div className="modal-content" style={{position: 'fixed',  top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'white', paddingLeft: '5rem', paddingRight: '5rem', borderRadius: 10}}>
          <div className="flex" style={{flexDirection: 'column', justifyContent: 'space-around'}}>
            <h2>Commands:</h2>
            <ul style={{margin: 0}}>
              <li>Select material: 1-2-3-4-5</li>
              <li>Movement: W-A-S-D</li>
              <li>Jump: Spacebar</li>
              <li>Fly: W + Hold Jump + R continuously</li>
              <li>Camera Direction: Mouse</li>
              <li>Create Block: Mouse click</li>
              <li>Exit Game Mode: Esc</li>
            </ul>
            <div style={{alignSelf: 'center', marginTop: '0.83em', marginBottom: '0.83em'}}>
              <button style={{padding: '0 30px 0 30px', fontWeight:'bold', borderRadius: 10,  background: 'green', color: 'white', cursor: 'pointer'}}
              onClick={toggleModalCommands}
              >
                <h2>Close</h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}