"use client";
import { Switch as HSwitch } from "@headlessui/react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  text: string;
  attributes: { id: string; value: string };
}

export default function Switch({ text, attributes }: Props) {
  const getSearchParam = useSearchParams();
  const [enabled, setEnabled] = useState(false);
  const attribute = getSearchParam?.get("attributes");
  const router = useRouter();

  function handleChange(checked: boolean) {
    let url = "/search?";
    setEnabled(checked);
    if (checked) {
      getSearchParam?.forEach((value, key) => {
        if (key === "attributes") {
          url += `attributes=[{id:${attributes.id},value:${
            attributes.value
          }},${value.slice(1, -1)}]`;
          return;
        }
        url += `${key}=${value}&`;
      });
      getSearchParam?.has("attributes") ||
        (url += `attributes=[{id:${attributes.id},value:${attributes.value}}]`);
      router.push(url);
    }
    if (!checked) {
      getSearchParam?.forEach((value, key) => {
        if (key === "attributes") {
          if (value.length <= 25) return;

          url += `attributes=[${value
            .slice(1, -1)
            .replaceAll(
              `{id:${attributes.id},value:${attributes.value}}`,
              ""
            )}]`;
          return;
        }
        url += `${key}=${value}&`;
      });
      router.push(url);
    }
  }

  return (
    <HSwitch.Group>
      <div className="mb-4 flex w-full items-center justify-between px-4">
        <HSwitch.Label className="font-medium">{text}</HSwitch.Label>
        <HSwitch
          dir="ltr"
          className="border-#D9D9D9 group relative inline-flex h-[22px] w-[42px] shrink-0 cursor-pointer  items-center rounded-full border transition-colors duration-200  ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white  focus-visible:ring-opacity-75 data-[attributes='true']:border-secondary ui-checked:border-secondary"
          onChange={handleChange}
          checked={attribute?.includes(attributes.id) || enabled}
          data-attributes={attribute?.includes(attributes.id)}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none ml-0.5
            inline-block h-4 w-4 translate-x-0 transform rounded-full bg-[#D9D9D9] shadow-lg ring-0 transition duration-200 ease-in-out group-data-[attributes='true']:translate-x-5 group-data-[attributes='true']:bg-secondary ui-checked:translate-x-5 ui-checked:bg-secondary  "
          />
        </HSwitch>
      </div>

      <div className="mx-auto mb-4  w-[88%] border-t border-[#D9D9D9]" />
    </HSwitch.Group>
  );
}
