import Image from "next/image";
import BaseSlider from "./base-slider";
import { EmblaOptionsType } from "embla-carousel-react";
import Link from "next/link";

interface banner {
  title: string;
  link: string;
  name: string;
  directory: string;
  path: string;
}

interface VitrenProps {
  type: string;
  title: string;
  has_banner: number;
  auto_slide: number;
  color: string;
  banner: banner[];
  products: boolean;
}

export default function Vitrin({ banner, color }: VitrenProps) {
  const OPTIONS: EmblaOptionsType = {
    direction: "rtl",
    align: "start",
    dragFree: false,
    slidesToScroll: 5,
  };
  const controlsStyle = {
    containerStyles: "absolute top-1/2 right-[161px]  -translate-y-1/2 ",
    arrowStylesLeft:
      " w-6 h-6 flex items-center justify-center rounded-full text-xs bg-black text-white",
    arrowStylesRight:
      "bg-white w-6 h-6 mb-2  flex items-center justify-center rounded-full text-xs",
  };
  return (
    <div className="grid-container mb-14">
      <div className="relative flex">
        <Image
          src={banner[0].path}
          width={186}
          height={236}
          alt={banner[0].title}
          className="ml-10"
        />
        <BaseSlider
          options={OPTIONS}
          dots={false}
          arrowStylesLeft={controlsStyle.arrowStylesLeft}
          arrowStylesRight={controlsStyle.arrowStylesRight}
          containerStyles={controlsStyle.containerStyles}
        >
          <div className=" grid  grid-flow-col  [grid-auto-columns:20%]">
            {Array.from({ length: 20 }).map((item, index) => (
              <div key={index} className="">
                <Link href="/">
                  <Image
                    src={banner[0].path}
                    alt={banner[0].path}
                    width={186}
                    height={236}
                  />
                </Link>
              </div>
            ))}
          </div>
        </BaseSlider>
        <div
          className={
            " absolute left-0  hidden h-full flex-col items-center  justify-center gap-2 rounded-3xl px-5 font-medium text-white  transition-all peer-[[data-last-slide=true]]:flex "
          }
          style={{
            backgroundColor: color,
            boxShadow: `0px 0px 12px ${color}66`,
          }}
        >
          <span className="text-center"> مشاهده محصولات</span>
          <span className="atra-icon-arrow-left text-2xl"></span>
        </div>
      </div>
    </div>
  );
}
