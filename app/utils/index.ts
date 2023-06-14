export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface StylesObject {
  style: { [key: string]: string };
}

export function parseStyles(stylesString: string): StylesObject {
  const stylesArray = stylesString.split(";").filter(Boolean);

  const stylesObject: StylesObject = {
    style: {},
  };

  stylesArray.forEach((style) => {
    const [property, value] = style.split(":").map((item) => item.trim());
    const formattedProperty = property.replace(/-([a-z])/g, (match, letter) =>
      letter.toUpperCase()
    );

    stylesObject.style[formattedProperty] = value;
  });

  return stylesObject;
}
