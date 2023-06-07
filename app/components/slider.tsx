import Image from "next/image";
import BaseSlider from "./base-slider";
import { EmblaOptionsType } from "embla-carousel-react";
import Link from "next/link";

type Images = {
  title: string;
  link: string;
  row: string;
  path: string;
};

type SliderProps = {
  type: string;
  images: Images[];
  pager_control: boolean;
  pager_speed: number;
};

export default function Slider({
  images,
  pager_control,
  pager_speed,
  type,
}: SliderProps) {
  const OPTIONS: EmblaOptionsType = {
    direction: "rtl",
  };
  const controlsStyle = {
    containerStyles: "absolute bottom-4 left-1/2  -translate-x-1/2 ",
  };

  return (
    <div className="relative mx-auto mb-6 max-w-[1920px] ">
      <BaseSlider
        options={OPTIONS}
        containerStyles={controlsStyle.containerStyles}
        arrow={false}
      >
        <div className=" grid grid-flow-col  [grid-auto-columns:100%]">
          {images.map((item, index) => (
            <div key={index} className="relative h-64 w-full ">
              <Link href={item.link}>
                <Image src={item.path} alt={item.title} fill />
              </Link>
            </div>
          ))}
        </div>
      </BaseSlider>
    </div>
  );
}
