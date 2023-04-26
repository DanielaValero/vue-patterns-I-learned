/**
 * Checks if Link is external or not
 * @param {String} linkUrl The array to inspect.
 */
function isExternalUrl(linkUrl: String): boolean {
  // eslint-disable-next-line no-restricted-globals
  const currentHost = location.origin.toString().replace(/\/$/, "");
  const targetUrl = linkUrl.toString();

  const startsWithCurrentUrl = targetUrl.startsWith(currentHost);
  const startsWithSlash = targetUrl.startsWith("/");
  const startsWithHttp = targetUrl.startsWith("http");

  return !startsWithCurrentUrl && !startsWithSlash && startsWithHttp;
}

export { isExternalUrl };
