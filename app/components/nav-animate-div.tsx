"use client"
import { Transition } from "@headlessui/react"
import { Fragment, ReactNode, useState } from "react"


export function NavList({children}:{children: ReactNode}){
  const [hover , setHover ]  = useState(false)
  return(
    <li
    className=" relative transition-colors hover:text-text"
    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}
  >
   {children}
   <NavAnimateDiv open={hover}/>
  </li>
  )
}



function NavAnimateDiv({open=false}: {open:boolean}) {
  return (
     <Transition className="absolute -bottom-2.5 flex w-full items-center gap-0.5 "  show={open}>
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-out duration-[50ms] "
                    enterFrom="opacity-0 "
                    enterTo="opacity-100 "
                    leave="transition ease-in delay-[50ms]"
                    leaveFrom="opacity-100 "
                    leaveTo="opacity-0 "
                  >
                    <div
                      className="h-[3px] w-2 rounded-full     bg-secondary 
                shadow-[0px_0px_4px_rgba(151,115,255,0.68)] "
                    />
                  </Transition.Child>
                  <Transition.Child
                    as={Fragment}
                    enter="transform delay-[50ms] transition-transform [transition-timing-function:linear] duration-100 origin-right"
                    enterFrom="scale-x-0"
                    enterTo="scale-x-100"
                    leave="transform transition-transform [transition-timing-function:linear] duration-75 origin-right"
                    leaveFrom="scale-x-1"
                    leaveTo="scale-x-0"
                  >
                    <div
                      className="h-[3px] w-full rounded-full bg-secondary
                shadow-[0px_0px_4px_rgba(151,115,255,0.68)]"
                    />
                  </Transition.Child>
                </Transition>
  )
}
export default NavAnimateDiv