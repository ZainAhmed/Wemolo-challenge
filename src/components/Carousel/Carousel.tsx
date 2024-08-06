import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from "./CarouselSelectedSnapDisplay";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carousel.module.scss";
import { ParkingLot } from "../../types/ParkingLot";
import Card from "../Card";
import CarouselActionButton from "./CarouselActionButton";
import { usePrevNextButtons } from "../../hooks/usePrevNextButtons";
type PropsType = { slides: ParkingLot[] };
const Carousel = ({ slides }: PropsType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    align: "start",
    containScroll: "trimSnaps",
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((lot) => (
            <div className={styles.embla__slide} key={lot.id}>
              <div className={styles.embla__slide__number}>
                <Card parkingLot={lot} zIndex={10} isCardView={false} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__buttons}>
          <CarouselActionButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            btnClass="embla__button--prev"
            icon={<ArrowCircleLeftIcon color="primary" />}
          />
          <CarouselActionButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            btnClass="embla__button--next"
            icon={<ArrowCircleRightIcon color="primary" />}
          />
        </div>

        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
      </div>
    </section>
  );
};

export default Carousel;
