"use client";

import { MenuButton } from "@chakra-ui/react";
import { Listbox, Menu } from "@headlessui/react";
import flag1 from "../../public/images/flag-1.png";
import flag2 from "../../public/images/flag-2.png";
import flag3 from "../../public/images/flag-3.png";
import Image from "next/image";

const options = [
  { value: "Fa", image: flag1, label: "فارسی" },
  { value: "En", image: flag2, label: "انگلیسی" },
  { value: "Ar", image: flag3, label: "عربی" },
];

function LanguageMenu() {
  return (
    <Listbox
      as="div"
      className="relative "
      name="language"
      defaultValue={options[0]}
    >
      <Listbox.Button>
        {({ value }) => (
          <div className="flex items-center  gap-2">
            <span className="atra-icon-arrow-down" />
            <Image src={value.image} alt={value.value} className="h-7 w-7" />
          </div>
        )}
      </Listbox.Button>
      <Listbox.Options className="absolute -left-4 top-8 z-20 flex  w-24 flex-col  gap-4 rounded-2xl bg-white px-2 pb-4 pt-5  shadow before:absolute before:left-1/2  before:top-0 before:h-1 before:w-16 before:-translate-x-1/2 before:rounded-b-2xl before:bg-text-500 before:content-['']">
        {options.map((option, index) => (
          <Listbox.Option
            key={index}
            value={option}
            className="ui flex cursor-pointer items-center justify-between gap-2 
             ui-disabled:cursor-not-allowed
             ui-disabled:opacity-50
            "
            disabled={index === 0 ? false : true}
          >
            <Image src={option.image} alt={option.value} className="h-4 w-4" />
            <span className="text-[10px] font-medium">{option.label}</span>
            <div className=" h-1.5 w-1.5 rounded-full bg-gray-200 ui-selected:bg-secondary" />
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
export default LanguageMenu;
