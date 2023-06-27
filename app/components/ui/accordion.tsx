"use client";

import { Disclosure } from "@headlessui/react";
import LinkWithQuery from "./link-with-query";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const options = [
  { text: "۱۰ تایی", id: 10 },
  { text: "۲۰ تایی", id: 20 },
  { text: "۴۰ تایی", id: 40 },
  { text: "۶۰ تایی", id: 60 },
];

export default function Accordion() {
  const [selected, setSelected] = useState(20);
  const productLimit = useSearchParams()?.get("product_limit");

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="mb-2 flex w-full items-center justify-between px-4">
            <span className="font-medium">
              نمایش تعداد : {productLimit || selected}
            </span>
            <span className="atra-icon-arrow-up -rotate-180 transform text-lg font-medium transition-transform ui-open:rotate-0 " />
          </Disclosure.Button>
          {!open && (
            <div className="mx-auto mb-4 w-[88%] border-t border-[#D9D9D9]" />
          )}
          <Disclosure.Panel className="mb-4 flex flex-col gap-3 bg-text-500 px-4 py-2 text-xs">
            {options.map((option, index) => (
              <LinkWithQuery
                isDefault={index === 0}
                key={option.id}
                text={option.text}
                searchParams={{ product_limit: option.id.toString() }}
                className="group flex items-center gap-2 "
                onClick={() => setSelected(option.id)}
              >
                <span className="flex h-[18px] w-[18px] items-center justify-center rounded-[4px] border border-text bg-white group-data-[limit='true']:bg-secondary ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="none"
                  >
                    <g clip-path="url(#a)">
                      <path
                        fill="#fff"
                        d="M3.674 9.3c-.284.001-.556-.112-.756-.313L.63 6.701a.63.63 0 0 1 .892-.892l2.152 2.153L9.37 2.267a.63.63 0 0 1 .892.891l-5.83 5.83c-.2.2-.473.313-.757.313Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M.445.691h10v10h-10z" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </LinkWithQuery>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
