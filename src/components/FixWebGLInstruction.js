import React from 'react'
import { screen_chrome_help, hardware_acceleration_help, warning_sign } from "../images/images";

const FixWebGLInstruction = () => {
  return (
    <div className="webGLerrorMsgContainer">
      <div className="flex">
        <h3 className="webGLerrorMsg">Fix Browser limitations to play</h3>
        <img src={warning_sign} alt="warning_sign" className="img_warning"/>
      </div>
      <div className="procedure">
        <details>
          <summary>Activate hardware acceleration</summary>
          <div className="flex j_c_b">
            <ol className="m_0">
              <li className="sm_text">
                <p>Open browser settings:</p>
                <p>browser_name://settings {'->'} chrome://settings, opera://settings, edge://settings</p>
              </li>
              <li className="sm_text"><p>Click on System.</p></li>
              <li className="sm_text"><p>Click the Use hardware acceleration when available.</p></li>
              <li className="sm_text"><p>Relaunch.</p></li>
            </ol>
            <div width="100%">
              <p className="sm_text">Example with Chrome:</p>
              <img src={hardware_acceleration_help} alt="img_example_hardware_acceleration_browser" className="img_example_update_browser"/>
            </div>
          </div>
        </details>
        <details>
          <summary>Make sure your browser is updated to the latest version</summary>
          <div className="flex j_c_b">
            <ol className="m_0">
              <li className="sm_text">
                <p>Open browser settings:</p>
                <p>browser_name://settings {'->'} chrome://settings, opera://settings, edge://settings</p>
              </li>
              <li className="sm_text"><p>Click on About.</p></li>
              <li className="sm_text"><p>Click the update button.</p></li>
              <li className="sm_text"><p>Close your browser and relaunch it.</p></li>
            </ol>
            <div width="100%">
              <p className="sm_text">Example with Chrome:</p>
              <img src={screen_chrome_help} alt="" className="img_example_update_browser"/>
            </div>
          </div>
        </details>
      </div>
    </div>
  )
}
export default FixWebGLInstruction
