import { createElement, Fragment, isValidElement } from "react";
import Slider from "./slider";
import SpecialOffer from "./special-offer";
import Vitrin from "./vitrin";
import Banner from "./banner";
import { parseStyles } from "../utils";

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

const renderElement = (elementData: any) => {
  const { tag, children, style, html } = elementData;
  if (html && typeof CustomComponents[tag] !== "undefined") {
    return CustomComponents[tag](html);
  }

  if (children?.length === 1 && typeof children[0] === "string") {
    return createElement(tag, parseStyles(style), children[0]);
  }

  const renderedElement = createElement(
    tag,
    style ? parseStyles(style) : {},
    Array.isArray(children)
      ? children.map((child, index) => (
          <Fragment key={index}>{renderElement(child)}</Fragment>
        ))
      : children
  );

  return renderedElement;
};

export default async function PageContent({ page }: { page: Promise<Page> }) {
  const pageData = await page;
  const pageContent = renderElement(pageData.page.original.children?.at(0));
  if (!isValidElement(pageContent)) {
    return <div>Error</div>;
  }

  return pageContent;
}
