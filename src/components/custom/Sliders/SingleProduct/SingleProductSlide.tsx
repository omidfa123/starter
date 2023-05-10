import { Box, Center, useDisclosure } from '@chakra-ui/react';
import SingleProductModal from 'components/custom/Modals/SingleProductModal';
import {
  KeenSliderInstance,
  KeenSliderPlugin,
  useKeenSlider,
} from 'keen-slider/react';
import Image from "next/image";
import { MutableRefObject, useState } from 'react';

export function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return slider => {
    function removeActive() {
      slider.slides.forEach(slide => {
        slide.classList.remove('active');
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add('active');
    }
    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on('created', () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on('animationStarted', main => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function SingleProductsSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setActiveSlide(slider.track.details.rel);
    },
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 5,
        spacing: 16,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <Center
        gap="42px"
        border="1.5px solid #eee"
        rounded={32}
        flexDir="column"
        w="437.5px"
        p="32px 31px 16px 31px "
        gridArea="slider"
        mb={8}
      >
        <Box
          ref={sliderRef}
          className="keen-slider"
          sx={{
            '& > div': {
              w: '354px',
              h: '258px',
            },
          }}
          onClick={onOpen}
        >
          <Box className="keen-slider__slide number-slide1">
            <Image src="/images/monitor.png" fill alt="monitor" />
          </Box>
          <Box className="keen-slider__slide number-slide2">
            <Image src="/images/tumb2.png" fill alt="monitor" />
          </Box>
          <Box className="keen-slider__slide number-slide3">
            <Image src="/images/tumb3.png" fill alt="monitor" />
          </Box>
          <Box className="keen-slider__slide number-slide4">
            <Image src="/images/tumb4.png" fill alt="monitor" />
          </Box>
          <Box className="keen-slider__slide number-slide5">
            <Image src="/images/tumb5.png" fill alt="monitor" />
          </Box>
        </Box>

        <Box
          ref={thumbnailRef}
          className="keen-slider thumbnail"
          sx={{
            '& > div': {
              rounded: '16',
              border: '1px solid #eee',
              w: '62.5px',
              h: '62.5px',
            },
          }}
        >
          <Box className="keen-slider__slide">
            <Image src="/images/tumb1.png" fill alt="monitor" />
          </Box>
          <Box className="keen-slider__slide">
            <Image src="/images/tumb2.png" fill alt="monitor" />
          </Box>
          <Box className="keen-slider__slide ">
            <Image src="/images/tumb3.png" fill alt="monitor" />
          </Box>
          <Box className="keen-slider__slide">
            <Image src="/images/tumb4.png" fill alt="monitor" />
          </Box>
          <Box className="keen-slider__slide">
            <Image src="/images/tumb5.png" fill alt="monitor" />
          </Box>
        </Box>
      </Center>
      <SingleProductModal
        isOpen={isOpen}
        onClose={onClose}
        activeSlide={activeSlide}
      />
    </>
  );
}
