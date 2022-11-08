export const mobileRegex = () => /^(?=.*?[1-9])[0-9()+ -]+$/;

export const postalCodeRegex = () =>
  /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/gi;

export const telephoneRegex = () => /^0[0-9]{2,}[0-9]{7,}$/gi;

export const emailRegex = () =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
