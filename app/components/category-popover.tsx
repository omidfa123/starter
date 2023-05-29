"use client";

import { Popover, Transition } from "@headlessui/react";
import { Fragment, ReactNode, useRef } from "react";

interface CategoryPopoverProps {
  className?: string;
  labelText: string;
  children: ReactNode;
}

// duration can be tweaked at convenience
const timeoutDuration = 200;
export const CategoryPopover = ({
  className,
  labelText,
  children,
}: CategoryPopoverProps) => {
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const timeOutRef = useRef<number | undefined | NodeJS.Timeout>(undefined);

  const handleEnter = (isOpen: boolean) => {
    clearTimeout(timeOutRef.current);
    !isOpen && triggerRef.current?.click();
  };

  const handleLeave = (isOpen: boolean) => {
    timeOutRef.current = setTimeout(() => {
      isOpen && triggerRef.current?.click();
    }, timeoutDuration);
  };

  return (
    <Popover as="li" className="z-2">
      {({ open }) => {
        return (
          <div
            onMouseEnter={() => handleEnter(open)}
            onMouseLeave={() => handleLeave(open)}
          >
            <Popover.Button
              className="flex items-center gap-2 outline-none transition-colors hover:text-text"
              ref={triggerRef}
            >
              <span>{labelText}</span>
              <span className="atra-icon-arrow-down text-[8px]"></span>
            </Popover.Button>
            <Transition
              as={Fragment}
              // show={true}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 z-10 mt-5  grid  transform grid-flow-col grid-cols-container rounded-[32px] bg-white pb-4 pl-2 pr-6  pt-6 shadow-[0px_10px_16px_rgba(0,0,0,0.12)]">
                {children}
              </Popover.Panel>
            </Transition>
          </div>
        );
      }}
    </Popover>
  );
};
