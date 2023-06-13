"use client";

import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { useCallback, useEffect, useState, ReactNode } from "react";
import { classNames } from "../utils";
type DotButtonPropType = {
  selected: boolean;
  onClick: () => void;
};
type PrevNextButtonPropType = {
  enabled: boolean;
  onClick: () => void;
  className?: string;
};

type PropType = {
  children: ReactNode;
  options?: Partial<EmblaOptionsType>;
  arrow?: boolean;
  dots?: boolean;
  arrowStylesRight?: string;
  arrowStylesLeft?: string;
  dotsStyles?: string;
  containerStyles?: string;
};





export const DotButton: React.FC<DotButtonPropType> = (props) => {
  const { selected, onClick } = props;

  return (
    <button
      className={classNames(selected
          ? "w-7 rounded-[22px] bg-secondary shadow-[0px_0px_4px_rgba(151,115,255,0.65)] "
          : "w-3 rounded-full bg-text-600 ",
        "h-3   touch-manipulation border-none opacity-[0.7] transition-all  duration-200 ease-in-out  hover:opacity-100 focus:opacity-100  "
      )}
      type="button"
      onClick={onClick}
    >
      <span className="sr-only"> رفتن به اسلاید</span>
    </button>
  );
};

export const PrevButton: React.FC<PrevNextButtonPropType> = (props) => {
  const { enabled, onClick, className } = props;

  return (
    <button
      className={`disabled:opacity-60 ${className}`}
      onClick={onClick}
      disabled={!enabled}
    >
      <span className="atra-icon-arrow-left-1"></span>
      <span className="sr-only">اسلاید قبلی</span>
    </button>
  );
};
export const NextButton: React.FC<PrevNextButtonPropType> = (props) => {
  const { enabled, onClick, className } = props;

  return (
    <button
      className={` disabled:opacity-90 ${className}`}
      onClick={onClick}
      disabled={!enabled}
    >
      <span className="atra-icon-arrow-right"></span>
      <span className="sr-only">اسلاید بعدی</span>
    </button>
  );
};

export default function BaseSlider({
  options,
  arrow = true,
  children,
  dots = true,
  arrowStylesRight,
  arrowStylesLeft,
  dotsStyles,
  containerStyles,
}: PropType) {
  const [sliderRef, sliderApi] = useEmblaCarousel(options);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const scrollPrev = useCallback(
    () => sliderApi && sliderApi.scrollPrev(),
    [sliderApi]
  );
  const scrollNext = useCallback(
    () => sliderApi && sliderApi.scrollNext(),
    [sliderApi]
  );
  const scrollTo = useCallback(
    (index: number) => sliderApi && sliderApi.scrollTo(index),
    [sliderApi]
  );
  const onSelect = useCallback(() => {
    if (!sliderApi) return;
    setSelectedIndex(sliderApi.selectedScrollSnap());
    setPrevBtnEnabled(sliderApi.canScrollPrev());
    setNextBtnEnabled(sliderApi.canScrollNext());
  }, [sliderApi, setSelectedIndex]);

  useEffect(() => {
    if (!sliderApi) return;
    onSelect();
    setScrollSnaps(sliderApi.scrollSnapList());
    sliderApi.on("select", onSelect);
    sliderApi.on("reInit", onSelect);
  }, [sliderApi, setScrollSnaps, onSelect]);

  return (
    <>
      <div
        className="peer overflow-hidden"
        ref={sliderRef}
        data-last-slide={!nextBtnEnabled}
      >
        {children}
      </div>
      <div className={containerStyles}>
        {arrow && (
          <NextButton
            onClick={scrollPrev}
            enabled={prevBtnEnabled}
            className={arrowStylesRight}
          />
        )}
        <div className={`flex items-center  gap-2 ${dotsStyles}`}>
          {dots &&
            scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                selected={index === selectedIndex}
                onClick={() => scrollTo(index)}
              />
            ))}
        </div>
        {arrow && (
          <PrevButton
            onClick={scrollNext}
            enabled={nextBtnEnabled}
            className={arrowStylesLeft}
          />
        )}
      </div>
    </>
  );
}
