import log from "loglevel";

// Disabling rule here to skip execution of toPascalCase if the incoming string is empty
/* eslint-disable consistent-return */
export function toPascalCase(stringToConvert: string): string {
  if (stringToConvert === "") {
    log.error("[@hobi-web/shared] [toPascalCase]: Incoming string can't be an empty string");
    return stringToConvert;
  }
  // remove first letter
  const slided = stringToConvert?.slice(1);
  // convert first letter to upper case, concatenate with slided
  return stringToConvert[0].toUpperCase().concat(slided);
}
/* eslint-enable consistent-return */
