/* eslint-disable no-console */
const log = console.log;
const logEvents = JSON.parse(process.env.VUE_APP_LOG_EVENTS);

class Logger {
  static logInfo = (...data: unknown[]) => logEvents && log("ℹ️", "[Info]", ...data);

  static logSuccess = (...data: unknown[]) => logEvents && log("✅", "[Success]", ...data);

  static logWarning = (...data: unknown[]) => logEvents && log("🤔", "[Warning]", ...data);

  static logError = (...data: unknown[]) => logEvents && log("🚨", "[Error]", ...data);
}

export { Logger };
