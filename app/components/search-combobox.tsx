"use client";

import { Combobox, Transition } from "@headlessui/react";
import { ReactNode, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import graphicCart from "../../public/images/product-1.png";
const answers = [
  { id: "1", text: "کارت گرافیک" },
  { id: "1", text: " کارت گرافیک ایسوس" },
  { id: "1", text: "کارت گرافیک گیمینگ" },
];
export default function SearchCombobox() {
  return (
    <Combobox as="div" className="relative ">
      <Combobox.Input
        type="text"
        placeholder="دنبال چی میگردی ؟"
        className="w-full rounded-2xl  border-2 border-transparent px-5  py-4 font-medium shadow-[0px_0px_8px_rgba(0,0,0,0.02)] ring-transparent placeholder:text-text-200  hover:border-primary focus:border-primary focus:outline-none  ui-open:rounded-b-none  ui-open:border-primary"
      />
      <Combobox.Button className="absolute left-2 top-2 ">
        <span className="sr-only">جست جو</span>
        <span className="atra-icon-search flex h-[46px] w-[46px] items-center justify-center rounded-[14px] bg-primary text-2xl text-white shadow-[0px_0px_4px_rgba(255,153,0,0.47)]  "></span>
      </Combobox.Button>
      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Combobox.Options className="absolute z-10   flex h-80 w-full items-start gap-8  rounded-b-2xl  bg-white p-5 shadow-[0px_8px_24px_rgba(0,0,0,0.08)]">
          <div className=" flex w-1/2 max-w-[336px]   flex-col gap-4 ">
            <div className="relative mb-2  flex items-center justify-between rounded-lg border border-text bg-primary px-3 py-1.5  text-white  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:-rotate-1 before:rounded-lg before:bg-text before:content-['']">
              <span className="text-[13px] font-medium ">دسته بندی</span>
              <span className="atra-icon-arrow-left-1 text-xs "></span>
            </div>
            {answers.map((answer) => (
              <Link
                href={`/products/${answer.id}`}
                key={answer.id}
                className="flex place-items-center gap-2 text-text-100"
              >
                <span className="atra-icon-search text-2xl"></span>
                <span className="text-sm font-medium">{answer.text}</span>
              </Link>
            ))}
          </div>

          <div className="h-full border-l" />

          <div className=" flex w-1/2   flex-col gap-4">
            <div className="relative  mb-2 flex max-w-[336px]  items-center justify-between rounded-lg border border-text bg-primary px-3 py-1.5  text-white  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:-rotate-1 before:rounded-lg before:bg-text before:content-['']">
              <span className="text-[13px] font-medium ">محصولات</span>
              <span className="atra-icon-arrow-left-1 text-xs "></span>
            </div>
            <div className="flex h-[104px] w-max rounded-2xl bg-text-500 p-2 ">
              <div className="ml-4 flex h-[88px] w-[88px] items-center justify-center rounded-2xl bg-white">
                <Image src={graphicCart} alt={""} />
              </div>
              <div className="mt-3 flex  flex-col ">
                <span className="mb-2 whitespace-nowrap text-[13px]  font-medium text-text">
                  کارت گرافیک ایسوس DUAL RX 6400 4G
                </span>
                <div>
                  <span className="ss02 text-xl text-secondary">7,350,000</span>
                  <span className="mr-2 text-[13px] text-secondary">تومان</span>
                </div>
              </div>
              <div className="-mr-3  flex flex-col justify-between">
                <span className="atra-icon-hart  self-end text-base text-text"></span>
                <button className="flex w-[90px] items-center justify-center gap-1 rounded-md bg-secondary px-2 py-1 text-white">
                  <span className="atra-icon-shopping-bag text-[10px]"></span>
                  <span className="text-[10px] font-medium">افزودن به سبد</span>
                </button>
              </div>
            </div>
            <div className="flex h-[104px] w-max rounded-2xl bg-text-500 p-2 ">
              <div className="ml-4 flex h-[88px] w-[88px] items-center justify-center rounded-2xl bg-white">
                <Image src={graphicCart} alt={""} />
              </div>
              <div className="mt-3 flex  flex-col ">
                <span className="mb-2 whitespace-nowrap text-[13px]  font-medium text-text">
                  کارت گرافیک ایسوس DUAL RX 6400 4G
                </span>
                <div>
                  <span className="ss02 text-xl text-secondary">7,350,000</span>
                  <span className="mr-2 text-[13px] text-secondary">تومان</span>
                </div>
              </div>
              <div className="-mr-3  flex flex-col justify-between">
                <span className="atra-icon-hart  self-end text-base text-text"></span>
                <button className="flex w-[90px] items-center justify-center gap-1 rounded-md bg-secondary px-2 py-1 text-white">
                  <span className="atra-icon-shopping-bag text-[10px]"></span>
                  <span className="text-[10px] font-medium">افزودن به سبد</span>
                </button>
              </div>
            </div>
          </div>

          <div className="basis-1/3 self-end">
            <button className="mr-auto flex items-center justify-center gap-1 rounded-lg bg-primary px-4 py-2  text-white ">
              <span className="text-xs font-medium"> مشاهد همه</span>
              <span className="atra-icon-arrow-left-1  text-xs"></span>
            </button>
          </div>
        </Combobox.Options>
      </Transition>
    </Combobox>
  );
}
