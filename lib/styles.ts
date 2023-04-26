export const getComputedStyleValue = (propertyName: string, element = document.documentElement) =>
  getComputedStyle(element).getPropertyValue(propertyName);
