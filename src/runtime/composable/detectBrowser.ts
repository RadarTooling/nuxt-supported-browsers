export interface BrowserInfo {
  name: string;
  version: number;
}
/**
 * Detects the user's web browser based on the User-Agent string.
 *
 * @param {string} ua - The User-Agent string to parse and detect the browser from.
 * @returns {BrowserInfo} - An object containing information about the detected browser.
 */
export function useDetectBrowser(ua: string): BrowserInfo {
  // Temporary variable used for extracting and storing browser version information.
  let temp;

  // Detect the browser and version.
  const agent =
    ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) ??
    [];

  // Check for Internet Explorer (IE).
  if (/trident/i.test(agent[1])) {
    temp = /\brv[ :]+(\d+)/g.exec(ua) ?? [];
    return { name: "Internet Explorer", version: +temp[1] || 0 };
  }

  // Check for Chrome and Chromium-based browsers.
  if (agent[1] === "Chrome") {
    temp = ua.match(/\b(OPR|Edge|Edg)\/(\d+)/);

    if (temp != null) {
      if (temp[1] === "Edg") return { name: "Edge", version: +temp[2] };
      if (temp[1] === "OPR") return { name: "Opera", version: +temp[2] };
    }
  }

  // Assign the browser version.
  agent[2] = agent[2] || navigator.userAgent || "-?";

  // Update the version if found in the User-Agent string.
  if ((temp = ua.match(/version\/(\d+)/i)) != null) {
    agent[2] = temp[1];
  }

  // Return the detected browser and its version.
  return { name: agent[1], version: +agent[2] };
}
