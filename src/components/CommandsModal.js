import React from "react"
import CreateBlocks from "./explanation_commands_game/CreateBlocks"
import Jump from "./explanation_commands_game/Jump"
import Movement from "./explanation_commands_game/Movement"
import EmblaCarousel from "./carousel/EmblaCarousel"
export const CommandsModal = ({toggleModalCommands}) => {

    return (
      <div className="modal">
        <div className="modal-content">
          <EmblaCarousel slides={[ Movement , CreateBlocks , Jump ]} options={{toggleModalCommands}} />
          <div className="modal_footer_btns">
            
          </div>
        </div>
      </div>
    )
}