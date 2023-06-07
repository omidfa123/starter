import { createElement, Fragment, isValidElement } from "react";
import Slider from "./slider";
import SpecialOffer from "./special-offer";
import Vitrin from "./vitrin";
import Banner from "./banner";

const content = {
  tag: "main",
  children: [
    {
      tag: "div",
      children: [
        {
          tag: "slider",
          html: {
            type: "slider",
            pager_control: null,
            pager_speed: null,
            images: [
              {
                title: "12",
                link: "main",
                row: "1",
                path: "https://storage.atramart.com/atramart/sliders/1684789057/NntVg4kiqyAmOGGxRPPNhdNUBucKe2qbhBMvu4aZ.png",
              },
              {
                title: "12",
                link: "main",
                row: "12",
                path: "https://storage.atramart.com/atramart/sliders/1684789057/oiU2OSoYVfyWhjfHFznG57epEJd2kvQBJxgTcYD3.png",
              },
            ],
          },
        },
        {
          tag: "vitrin",
          html: {
            type: "vitrin",
            title: "محصولات تخفیف دار",
            has_banner: 1,
            auto_slide: 1,
            color: "#FFA826",
            banner: [
              {
                title: "اسمبل آنلاین",
                link: "assembly",
                name: "1684785170.png",
                directory: "1684785170",
                path: "https://storage.atramart.com/atramart/vitrins/1684785170/1684785170.png",
              },
              {
                title: "کیس اسمبل شده",
                link: "assembly",
                name: "1684785171.png",
                directory: "1684785170",
                path: "https://storage.atramart.com/atramart/vitrins/1684785170/1684785171.png",
              },
            ],
            products: [],
          },
        },
        {
          tag: "banner",
          html: {
            grid: "3-rtl",
            images: [
              {
                title: "انواع تبلت",
                link: "انواع تبلت",
                name: "1684786596.png",
                path: "https://storage.atramart.com/atramart/banners/1684786596/1684786596.png",
              },
              {
                title: "لپ تاپ",
                link: "لپ تاپ",
                name: "1684786747.png",
                path: "https://storage.atramart.com/atramart/banners/1684786596/1684786747.png",
              },
              {
                title: "هارد",
                link: "hdd",
                name: "1684786767.png",
                path: "https://storage.atramart.com/atramart/banners/1684786596/1684786767.png",
              },
            ],
            type: "banner",
          },
        },
        {
          tag: "vitrin",
          html: {
            type: "vitrin",
            title: "پربازدید",
            has_banner: 1,
            auto_slide: 1,
            color: "#31CEFF",
            banner: [
              {
                title: "پربازدید",
                link: "featured",
                name: "1684785825.png",
                directory: "1684785825",
                path: "https://storage.atramart.com/atramart/vitrins/1684785825/1684785825.png",
              },
            ],
            products: false,
          },
        },
        {
          tag: "banner",
          html: {
            grid: "3-ltr",
            images: [
              {
                title: null,
                link: null,
                name: "1684786846.png",
                directory: "1684786846",
                path: "https://storage.atramart.com/atramart/banners/1684786846/1684786846.png",
              },
              {
                title: null,
                link: null,
                name: "1684786846.png",
                directory: "1684786846",
                path: "https://storage.atramart.com/atramart/banners/1684786846/1684786846.png",
              },
              {
                title: null,
                link: null,
                name: "1684786846.png",
                directory: "1684786846",
                path: "https://storage.atramart.com/atramart/banners/1684786846/1684786846.png",
              },
            ],
            type: "banner",
          },
        },
        {
          tag: "vitrin",
          html: {
            type: "vitrin",
            title: "پربازدید",
            has_banner: 1,
            auto_slide: 1,
            color: "#31CEFF",
            banner: [
              {
                title: "پربازدید",
                link: "featured",
                name: "1684785825.png",
                directory: "1684785825",
                path: "https://storage.atramart.com/atramart/vitrins/1684785825/1684785825.png",
              },
            ],
            products: false,
          },
        },
        {
          tag: "banner",
          html: {
            grid: "3",
            images: [
              {
                title: null,
                link: null,
                name: "1684786926.png",
                directory: "1684786926",
                path: "https://storage.atramart.com/atramart/banners/1684786926/1684786926.png",
              },
              {
                title: null,
                link: null,
                name: "1684786927.png",
                directory: "1684786926",
                path: "https://storage.atramart.com/atramart/banners/1684786926/1684786927.png",
              },
              {
                title: null,
                link: null,
                name: "1684786927.png",
                directory: "1684786926",
                path: "https://storage.atramart.com/atramart/banners/1684786926/1684786927.png",
              },
            ],
            type: "banner",
          },
        },
        {
          tag: "vitrin",
          html: {
            type: "vitrin",
            title: "پربازدید",
            has_banner: 1,
            auto_slide: 1,
            color: "#31CEFF",
            banner: [
              {
                title: "پربازدید",
                link: "featured",
                name: "1684785825.png",
                directory: "1684785825",
                path: "https://storage.atramart.com/atramart/vitrins/1684785825/1684785825.png",
              },
            ],
            products: false,
          },
        },
        {
          tag: "banner",
          html: {
            grid: "2",
            images: [
              {
                title: null,
                link: null,
                name: "1684787010.png",
                directory: "1684787010",
                path: "https://storage.atramart.com/atramart/banners/1684787010/1684787010.png",
              },
              {
                title: null,
                link: null,
                name: "1684787010.png",
                directory: "1684787010",
                path: "https://storage.atramart.com/atramart/banners/1684787010/1684787010.png",
              },
            ],
            type: "banner",
          },
        },
      ],
    },
  ],
};

const CustomComponents: Record<string, React.FC<any>> = {
  slider: (props) => <Slider {...props} />,
  vitrin: (props) =>
    props.title === "محصولات تخفیف دار" ? (
      <SpecialOffer {...props} />
    ) : (
      <Vitrin {...props} />
    ),
  banner: (props) => <Banner {...props} />,
};
const renderElement = (() => {
  const cache = new Map();
  return (elementData: any) => {
    const { tag, children, attributes, html } = elementData;
    if (html && typeof CustomComponents[tag] !== "undefined") {
      return CustomComponents[tag](html);
    }
    const cacheKey = JSON.stringify(elementData);

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    const renderedElement = createElement(
      tag,
      attributes,
      Array.isArray(children)
        ? children.map((child, index) => (
            <Fragment key={index}>{renderElement(child)}</Fragment>
          ))
        : children
    );

    cache.set(cacheKey, renderedElement);

    return renderedElement;
  };
})();

export default async function PageContent({ page }: { page: Promise<Page> }) {
  // const pageData = await page;

  // const pageContent = renderElement(pageData.page.original.children?.at(0));
  const pageContent2 = renderElement(content);

  if (!isValidElement(pageContent2)) {
    return <div>Error</div>;
  }

  return pageContent2;
}
