import React from "react"
import CloseBtn from "./explanation_commands_game/CloseBtn"
import useEmblaCarousel from 'embla-carousel-react'
import CreateBlocks from "./explanation_commands_game/CreateBlocks"
import Jump from "./explanation_commands_game/Jump"
import Movement from "./explanation_commands_game/Movement"

export const CommandsModal = ({toggleModalCommands}) => {
  const [emblaRef] = useEmblaCarousel()

    return (
      <div className="modal">
        <div className="modal-content">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <Movement />
              </div>
              <div className="embla__slide">
                <CreateBlocks />
              </div>
              <div className="embla__slide">
                <Jump />
              </div>
            </div>
          </div>
          <div className="modal_footer_btns">
            <CloseBtn toggleModalCommands={toggleModalCommands} />
          </div>
        </div>
      </div>
    )
}