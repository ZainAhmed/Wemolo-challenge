import React from "react";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import { SelectedSnapDisplay } from "./CarouselSelectedSnapDisplay";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carousel.module.scss";
import { ParkingLot } from "../../../../types/ParkingLot";
import Card from "../../../Card";
import CarouselActionButton from "./CarouselActionButton";
import { usePrevNextButtons } from "../../../../hooks/usePrevNextButtons";
import { useSelectedSnapDisplay } from "../../../../hooks/useSelectedSnapDisplay";

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

  const getNavigationButtonStyles = (isDisabled: boolean) => {
    return {
      fontSize: 50,
      borderRadius: "50%",
      border: "2px solid",
      padding: 0.25,
      borderColor: isDisabled ? "grey" : "white",
      color: isDisabled ? "grey" : "white",
    };
  };

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
            icon={
              <NavigateBeforeOutlinedIcon
                sx={getNavigationButtonStyles(prevBtnDisabled)}
              />
            }
          />
          <CarouselActionButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            btnClass="embla__button--next"
            icon={
              <NavigateNextOutlinedIcon
                sx={getNavigationButtonStyles(nextBtnDisabled)}
              />
            }
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
