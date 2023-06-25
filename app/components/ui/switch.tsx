"use client";
import { Switch as HSwitch } from "@headlessui/react";

interface Props {
  text: string;
}

export default function Switch({ text }: Props) {
  return (
    <HSwitch.Group>
      <div className="mb-4 flex w-full items-center justify-between px-4">
        <HSwitch.Label className="font-medium">{text}</HSwitch.Label>
        <HSwitch
          dir="ltr"
          className="border-#D9D9D9 relative inline-flex h-[22px] w-[42px] shrink-0 cursor-pointer items-center  rounded-full border transition-colors duration-200 ease-in-out  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75  ui-checked:border-secondary"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none ml-0.5
            inline-block h-4 w-4 translate-x-0 transform rounded-full bg-[#D9D9D9] shadow-lg ring-0 transition duration-200 ease-in-out ui-checked:translate-x-5 ui-checked:bg-secondary"
          />
        </HSwitch>
      </div>

      <div className="mx-auto mb-4  w-[88%] border-t border-[#D9D9D9]" />
    </HSwitch.Group>
  );
}
