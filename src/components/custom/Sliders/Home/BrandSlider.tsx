import { Box, Center } from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image";

const animation = { duration: 11000, easing: (t: number) => t };
function BrandSlider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true ,
    renderMode: 'performance',
    drag: false,
    slides: {
      spacing: 40 , 
      perView: "auto"
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    }
  })
  return (
    <>
<Center ref={sliderRef} className="keen-slider" mb="8" sx={{
  "& div img" : { mx: 'auto' ,   transition: "filter 0.5s ease" , cursor: 'pointer' },
  "& div:hover img" : {filter:"brightness(0)"}
}}>
      <Box className="keen-slider__slide">
        <Image src="/images/brand-1.png" alt="" width="86" height="67"/>
      </Box>
      <Box className="keen-slider__slide">
        <Image src="/images/brand-2.png" alt="" width="170" height="38"/>
      </Box>
      <Box className="keen-slider__slide">
        <Image src="/images/brand-3.png" alt="" width="139" height="36"/>
      </Box>
      <Box className="keen-slider__slide">
        <Image src="/images/brand-4.png" alt="" width="221" height="41"/>
      </Box>
      <Box className="keen-slider__slide">
        <Image src="/images/brand-5.png" alt="" width="173" height="42"/>
      </Box>
    </Center>
      
    </>
  )
}

export default BrandSlider