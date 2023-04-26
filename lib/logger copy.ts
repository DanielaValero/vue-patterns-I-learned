import log from "loglevel";

const isProd = process.env.NODE_ENV === "production";

export function setLogLevel() {
  if (process.env.VUE_APP_LOG_EVENTS && JSON.parse(process.env.VUE_APP_LOG_EVENTS) === true) {
    log.setLevel(log.levels.DEBUG);
  } else if (isProd) {
    log.setLevel(log.levels.SILENT);
  } else {
    log.setLevel(log.levels.DEBUG);
  }
}
