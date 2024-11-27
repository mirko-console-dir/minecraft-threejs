import React from 'react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import CloseBtn from "../explanation_commands_game/CloseBtn"

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((Slide ,index) => (
            <div className="embla__slide" key={index}>
              <Slide/>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} children={"Prev"}/>
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} children={"Next"}/>
          {nextBtnDisabled && (
            <CloseBtn toggleModalCommands={options.toggleModalCommands} />
          )}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
