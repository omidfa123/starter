"use client";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { MouseEvent, Fragment } from "react";
import Image from "next/image";

import menuPic1 from "../../public/images/menus-pic-1.png";
import menuPic2 from "../../public/images/menus-pic-2.png";
import {
  MegaMenuIconPurple,
  MegaMenuIconRed,
  MegaMenuIconYellow,
} from "components/common/Icons";
export default function CategoryTabs({
  mainCategories,
  subCategories,
}: {
  mainCategories: String[];
  subCategories: SubCategoryEntity[][];
}) {
  function handleHover(e: MouseEvent<HTMLButtonElement>) {
    e.currentTarget.click();
  }
  return (
    <Tab.Group as="div" className="relative flex gap-6 " vertical>
      <Tab.List className="flex  flex-col gap-6 text-[13px] font-medium text-text ">
        {mainCategories.map((category, index) => (
          <Tab
            key={index}
            onMouseEnter={handleHover}
            className="relative flex w-full  items-center justify-start gap-1  whitespace-nowrap font-semibold outline-none transition-all before:absolute before:-left-[26px]  before:h-full before:border-l-2 before:content-[''] ui-selected:text-secondary ui-selected:before:border-secondary"
          >
            <span className="atra-icon-phone text-2xl"></span>
            <div>{category}</div>
          </Tab>
        ))}
        {/* <Image src={menuPic1} alt=";" className="mt-auto" /> */}
        <Image src={menuPic2} alt=";" className="mt-auto" />
      </Tab.List>
      <div className="h-full border-l-2 border-text-400" />
      <Tab.Panels className="w-full">
        {subCategories.map((subCategoryList, i) => (
          <Tab.Panel
            key={i}
            as="ul"
            className=" flex h-[486px] max-h-[486px] flex-col flex-wrap gap-2"
          >
            {subCategoryList.map((subCategory) => (
              <Fragment key={subCategory.id}>
                <li className="mb-2 text-[13px] font-medium text-secondary ">
                  <Link
                    href={subCategory.link || "/"}
                    className="flex items-center gap-1"
                  >
                    <span className="atra-icon-diamond text-[14px]"></span>
                    <span>{subCategory.name}</span>
                    <span className="atra-icon-arrow-left-1 text-[8px]"></span>
                  </Link>
                </li>
                {subCategory.sub_category.map((childSubCategory) => (
                  <li
                    key={childSubCategory.id}
                    className="text-[13px] text-text-200 hover:text-secondary"
                  >
                    <Link href={childSubCategory.link || "/"}>
                      {childSubCategory.name}
                    </Link>
                  </li>
                ))}
              </Fragment>
            ))}
          </Tab.Panel>
        ))}
      </Tab.Panels>
      <div className="absolute  -bottom-[17px] -left-2 ">
        <svg className="sr-only">
          <filter id="inset-shadow">
            <feOffset dx="0" dy="0" />
            <feGaussianBlur stdDeviation="7" result="offset-blur" />
            <feComposite
              operator="out"
              in="SourceGraphic"
              in2="offset-blur"
              result="inverse"
            />
            <feFlood floodColor="white" floodOpacity=".95" result="color" />
            <feComposite
              operator="in"
              in="color"
              in2="inverse"
              result="shadow"
            />
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>
        </svg>
        <svg
          width="143"
          height="180"
          viewBox="0 0 143 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0"
          style={{
            filter:
              "url(#inset-shadow) drop-shadow(8px 0px 20px rgba(0, 0, 0, 0.08))",
          }}
        >
          <g filter="url(#filter0_i_365_156)">
            <path
              d="M0 22.2116C0 14.7294 2.59341 7.16907 9.32575 3.90436C20.7171 -1.61964 42.6365 -4.91041 75.59 20.5592C125.748 59.3261 86.4312 66.1511 124.575 103.817C125.888 105.114 127.204 106.569 128.272 108.073C156.833 148.304 135.776 168.855 124.783 176.097C121.261 178.417 117.041 179.194 112.823 179.194H32C14.3269 179.194 0 164.867 0 147.194V22.2116Z"
              fill="#9773FF"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_365_156"
              x="0"
              y="0.0300293"
              width="142.62"
              height="179.164"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="9.5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_365_156"
              />
            </filter>
          </defs>
        </svg>
        <svg
          width="124"
          height="157"
          viewBox="0 0 124 157"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0"
          style={{
            filter:
              "url(#inset-shadow) drop-shadow(8px 0px 20px rgba(0, 0, 0, 0.08))",
          }}
        >
          <path
            d="M0 21.6327C0 14.1505 2.60588 6.5165 9.48836 3.58153C19.7084 -0.776733 38.2636 -2.41845 65.5355 18.6598C108.907 52.1816 75.1137 58.156 107.745 90.586C109.053 91.8863 110.36 93.3267 111.423 94.8345C135.278 128.68 118.539 146.385 108.886 153.037C105.412 155.43 101.184 156.194 96.9662 156.194H32C14.3269 156.194 0 141.867 0 124.194V21.6327Z"
            fill="#FFA826"
          />
        </svg>
        <svg
          width="103"
          height="130"
          viewBox="0 0 103 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0"
          style={{
            filter:
              "url(#inset-shadow) drop-shadow(8px 0px 20px rgba(0, 0, 0, 0.08))",
          }}
        >
          <path
            d="M0.407227 20.1257C0.407227 12.6435 3.04092 4.89501 10.1201 2.47257C18.8973 -0.530949 33.6864 -0.592317 54.7427 15.682C90.5551 43.3612 62.9123 48.3874 89.4092 74.987C90.711 76.2939 92.0035 77.7106 93.0582 79.224C111.736 106.026 99.6082 120.53 91.5728 126.46C88.1789 128.965 83.9281 129.712 79.7099 129.712H32.4072C14.7341 129.712 0.407227 115.385 0.407227 97.7118V20.1257Z"
            fill="#FF5E5E"
          />
        </svg>
      </div>
    </Tab.Group>
  );
}
