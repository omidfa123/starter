"use client";

import { Combobox, Transition } from "@headlessui/react";
import React, { Fragment, useTransition, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import graphicCart from "../../public/images/product-1.png";
import { startSearch } from "../actions";
import { useDebouncedCallback } from "use-debounce";
import { classNames } from "../utils";
import LoadingCircleSvg from "./ui/loading-circle-svg";
import { useRouter } from "next/navigation";

export default function SearchCombobox() {
  const [isPending, startTransition] = useTransition();
  const [answers, setAnswers] = useState<Answers>();
  const [query, setQuery] = useState<string>("");

  const debounced = useDebouncedCallback((value) => {
    startTransition(async () => {
      if (!value) {
        setAnswers(undefined);
        return;
      }
      setQuery(value);
      const res = await startSearch(value);
      setAnswers(res.response);
    });
  }, 600);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query && isPending === false) {
      router.push("/search?" + new URLSearchParams({ q: query }).toString());
    }
  };

  console.log(answers);
  return (
    <Combobox as={"div"} className="relative" defaultValue={query}>
      <div
        className={classNames(
          " peer absolute",
          isPending ? "left-4 top-4 " : "left-2 top-2 "
        )}
      >
        {isPending ? (
          <LoadingCircleSvg />
        ) : (
          <Link
            href={"/search?" + new URLSearchParams({ q: query }).toString()}
            className="atra-icon-search  flex h-[46px] w-[46px] items-center justify-center rounded-[14px] bg-primary text-2xl text-white shadow-[0px_0px_4px_rgba(255,153,0,0.47)] "
          >
            <span className="sr-only">جست جو</span>
          </Link>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <Combobox.Input
          type="text"
          name="search"
          id="search"
          aria-label="search"
          placeholder="دنبال چی میگردی ؟"
          className="w-full appearance-none rounded-2xl border-2 border-transparent px-5  py-4 font-medium shadow-[0px_0px_8px_rgba(0,0,0,0.02)] ring-transparent placeholder:text-text-200  hover:border-primary focus:border-primary focus:outline-none  peer-hover:border-primary  ui-open:rounded-b-none ui-open:border-primary"
          onChange={(e) => debounced(e.target.value)}
        />
      </form>
      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Combobox.Options className=" absolute   z-10 flex h-80 w-full scroll-pt-2 items-start  gap-8  overflow-y-auto rounded-b-2xl bg-white p-5 shadow-[0px_8px_24px_rgba(0,0,0,0.08)]">
          <div className=" flex w-1/2 max-w-[336px] flex-col gap-4">
            <div className="relative mb-2  flex items-center justify-between rounded-lg border border-text bg-primary px-3 py-1.5  text-white  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:-rotate-1 before:rounded-lg before:bg-text before:content-['']">
              <span className="text-[13px] font-medium ">دسته بندی</span>
              <span className="atra-icon-arrow-left-1 text-xs "></span>
            </div>
            {isPending ? (
              Array.from({ length: 4 }).map((_, i) => (
                <svg
                  aria-labelledby="li97cgj-aria"
                  role="img"
                  viewBox="0 0 320 32"
                  className="m-auto h-full w-full"
                  key={i}
                >
                  <title id="li97cgj-aria">Loading...</title>
                  <rect
                    role="presentation"
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    clipPath="url(#1)"
                    style={{ fill: "url(#li97cgj-animated-diff)" }}
                  ></rect>
                  <defs>
                    <clipPath id="1">
                      <rect
                        x="0"
                        y="0"
                        rx="8"
                        ry="8"
                        width="100%"
                        height="32"
                      />
                    </clipPath>
                    <linearGradient id="li97cgj-animated-diff">
                      <stop offset="0%" stopColor="#f3f3f3" stopOpacity="1">
                        <animate
                          attributeName="offset"
                          values="-2; -2; 1"
                          keyTimes="0; 0.25; 1"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                      <stop offset="50%" stopColor="#ecebeb" stopOpacity="1">
                        <animate
                          attributeName="offset"
                          values="-1; -1; 2"
                          keyTimes="0; 0.25; 1"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                      <stop offset="100%" stopColor="#f3f3f3" stopOpacity="1">
                        <animate
                          attributeName="offset"
                          values="0; 0; 3"
                          keyTimes="0; 0.25; 1"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                    </linearGradient>
                  </defs>
                </svg>
              ))
            ) : answers?.categories?.length === 0 ? (
              <div>دسته بندی پیدا نشد</div>
            ) : (
              answers?.categories!.map((cat) => (
                <Combobox.Option
                  as={Link}
                  href={cat.link || "/"}
                  key={cat.id}
                  className="flex cursor-pointer place-items-center gap-2 rounded-lg px-2 py-1 text-text-100  transition-colors hover:bg-primary hover:font-medium hover:text-white ui-active:bg-primary ui-active:font-medium ui-active:text-white  "
                  value={cat.name}
                >
                  <span className="atra-icon-search text-2xl"></span>
                  <span className="text-sm font-medium">{cat.name}</span>
                </Combobox.Option>
              ))
            )}
          </div>
          <div className="h-full border-l" />
          <div className=" flex w-1/2   flex-col gap-4">
            <div className="relative  mb-2 flex max-w-[336px]  items-center justify-between rounded-lg border border-text bg-primary px-3 py-1.5  text-white  before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:-rotate-1 before:rounded-lg before:bg-text before:content-['']">
              <span className="text-[13px] font-medium ">محصولات</span>
              <span className="atra-icon-arrow-left-1 text-xs "></span>
            </div>
            {isPending ? (
              Array.from({ length: 2 }).map((_, i) => (
                <svg
                  aria-labelledby="li97cgj-aria"
                  role="img"
                  viewBox="0 0 320 48"
                  className="m-auto h-full w-full"
                  key={i}
                >
                  <title id="li97cgj-aria">Loading...</title>
                  <rect
                    role="presentation"
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    clipPath="url(#2)"
                    style={{ fill: "url(#li97cgj-animated-diff)" }}
                  ></rect>
                  <defs>
                    <clipPath id="2">
                      <rect
                        x="86%"
                        y="0"
                        rx="8"
                        ry="8"
                        width="44"
                        height="44"
                      />
                      <rect
                        x="40%"
                        y="4%"
                        rx="4"
                        ry="4"
                        width="140"
                        height="10"
                      />
                      <rect
                        x="52%"
                        y="36%"
                        rx="4"
                        ry="4"
                        width="100"
                        height="10"
                      />
                    </clipPath>
                  </defs>
                </svg>
              ))
            ) : answers?.products?.length === 0 ? (
              <div>محصولی پیدا نشد</div>
            ) : (
              answers?.products!.map((product) => (
                <Combobox.Option
                  className="flex h-[104px] w-max rounded-2xl bg-text-500 p-2 ui-active:ring "
                  key={product.id}
                  value={product.name}
                  as={Link}
                  href={product.link || "/"}
                  prefetch={false}
                >
                  <div className="ml-4 flex h-[88px] w-[88px] items-center justify-center rounded-2xl bg-white">
                    <Image src={graphicCart} alt={product.name} />
                  </div>
                  <div className="mt-3 flex  flex-col ">
                    <span className="mb-2 max-w-[234px] text-[13px]  font-medium text-text">
                      {product.name}
                    </span>
                    <div>
                      <span className="ss02 text-xl text-secondary">
                        7,350,000
                      </span>
                      <span className="mr-2 text-[13px] text-secondary">
                        تومان
                      </span>
                    </div>
                  </div>
                  <div className="-mr-3  flex flex-col justify-between">
                    <span className="atra-icon-hart  self-end text-base text-text"></span>
                    <button className="flex w-[90px] items-center justify-center gap-1 rounded-md bg-secondary px-2 py-1 text-white">
                      <span className="atra-icon-shopping-bag text-[10px]"></span>
                      <span className="text-[10px] font-medium">
                        افزودن به سبد
                      </span>
                    </button>
                  </div>
                </Combobox.Option>
              ))
            )}
          </div>
          <Combobox.Option
            value={query}
            as={Link}
            href={"/search?" + new URLSearchParams({ q: query }).toString()}
            className="sticky top-0 basis-1/3 self-end"
          >
            <button className="mr-auto flex items-center justify-center gap-1 rounded-lg bg-primary px-4 py-2  text-white ">
              <span className="text-xs font-medium"> مشاهد همه</span>
              <span className="atra-icon-arrow-left-1  text-xs"></span>
            </button>
          </Combobox.Option>
        </Combobox.Options>
      </Transition>
    </Combobox>
  );
}
