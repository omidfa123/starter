"use client";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { MouseEvent, Fragment } from "react";

export default function CategoryTabs({
  mainCategories,
  subCategories,
}: {
  mainCategories: String[];
  subCategories: SubCategoryEntity[][];
}) {
  console.log(subCategories);

  function handleHover(e: MouseEvent<HTMLButtonElement>) {
    e.currentTarget.click();
  }
  return (
    <Tab.Group as="div" className="flex gap-6 " vertical>
      <Tab.List className="flex w-max flex-col gap-6 text-[13px] font-medium text-text ">
        {mainCategories.map((category, index) => (
          <Tab
            key={index}
            onMouseEnter={handleHover}
            className="flex w-max gap-1 ui-selected:text-secondary "
          >
            <span>*</span>
            <div>{category}</div>
          </Tab>
        ))}
      </Tab.List>
      <div className="h-full border-l border-text-400" />
      <Tab.Panels className="w-full">
        {subCategories.map((subCategoryList, i) => (
          <Tab.Panel
            key={i}
            as="ul"
            className=" flex h-[486px] max-h-[486px] flex-col flex-wrap gap-2"
          >
            {subCategoryList.map((subCategory) => (
              <Fragment key={subCategory.id}>
                <li className="mb-2 text-[13px] font-medium text-secondary">
                  <Link href={subCategory.link || "/"}>
                    <span>*</span>
                    <span>{subCategory.name}</span>
                    <span>*</span>
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
    </Tab.Group>
  );
}
