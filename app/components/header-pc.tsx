import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/atramart_logo.png";

import { CategoryPopover } from "./category-popover";
import CategoryTabs from "./category-tabs";

import SearchCombobox from "./search-combobox";
import { BASE_URL } from "../lib/constants/baseURL";
import { NavList } from "./nav-animate-div";
import LanguageMenu from "./language-menu";

interface MainCategories {
  name: string;
  link: any;
  icon: string;
}

interface ReducerResult {
  mainCategories: MainCategories[];
  subCategories: SubCategoryEntity[][];
}

async function fetchHeaderInfo(): Promise<header> {
  const res = await fetch(`${BASE_URL}/header`, {
    next: { revalidate: 360 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json() as Promise<header>;
}
const icons = ["phone", "coine", "phone", "flower-pot", "pc-laptop"];
export default async function Header() {
  const {
    top_menus: topNav,
    info,
    menus,
    categories,
  } = await fetchHeaderInfo();
  const { mainCategories, subCategories } = categories.reduce<ReducerResult>(
    (result, category, index) => {
      result.mainCategories.push({
        name: category.name,
        link: category.link,
        icon: icons[index],
      });
      result.subCategories.push(category.sub_category);
      return result;
    },
    { mainCategories: [], subCategories: [] }
  );

  return (
    <header className="mb-6">
      <nav className="grid-container ss02 mb-6 rounded-b-3xl bg-header-gradient shadow-header">
        <div className="flex items-center justify-between py-2.5  ">
          <ul className="  flex gap-6 text-xs font-medium text-text-100  ">
            {topNav.map((nav) => (
              <li key={nav.id} className="transition-colors hover:text-text">
                <Link href={`/${nav.link}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
          <a
            href="tel:02177602250"
            title={info.name}
            className="group flex items-center justify-center gap-2 text-sm text-text "
          >
            <span className="group-hover:underline">{info.phone_number}</span>
            <span className="atra-icon-lcall flex h-7  w-7 items-center justify-center rounded-full border border-text group-hover:bg-black group-hover:text-white "></span>
          </a>
        </div>
      </nav>

      <nav className="grid-container  ">
        <div className="relative mb-8 flex items-center   justify-between">
          <Link href="/" id="logo" className="scroll-m-20">
            <Image alt="atramart logo" src={logo} priority />
          </Link>
          <ul className="  flex gap-6 text-sm font-medium text-text-200  ">
            <CategoryPopover labelText="محصولات ما">
              <CategoryTabs
                mainCategories={mainCategories}
                subCategories={subCategories}
              />
            </CategoryPopover>

            {menus.map((nav) => (
              <NavList key={nav.id}>
                <Link href={`/${nav.link}`}>{nav.title}</Link>
              </NavList>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <LanguageMenu />
            <div className="h-5 border-l border-text-200" />
            <div className="relative">
              <span className="atra-icon-shopping-bag flex h-9  w-9 items-center justify-center rounded-full border border-text hover:bg-black  hover:text-white" />
              <span className="ss02 ss03 absolute -bottom-2 right-1/2 flex  h-3.5 w-3.5  translate-x-1/2  items-center justify-center  rounded-full border border-text bg-secondary  text-[10px] font-medium text-white">
                2
              </span>
            </div>
            <Link href="/users/login">
              <span className="atra-icon-user flex h-9  w-9 items-center justify-center rounded-full border border-text hover:bg-black hover:text-white" />
              <span className="sr-only">ورود و ثبت‌نام</span>
            </Link>
          </div>
        </div>

        <SearchCombobox />
      </nav>
    </header>
  );
}
