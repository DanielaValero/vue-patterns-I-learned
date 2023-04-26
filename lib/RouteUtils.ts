import { Lang } from "@/i18n";

const reload = () => {
  window.location.reload();
};

const getCurrentUrlParams = () => {
  return window.location.search;
};

const getCurrentUrlPath = () => {
  return `${window.location.origin}${window.location.pathname}`;
};

const getLangByHostname = () => (window.location.hostname.includes(".obi.at") ? Lang.At : Lang.De);

export { getCurrentUrlParams, getCurrentUrlPath, getLangByHostname, reload };
