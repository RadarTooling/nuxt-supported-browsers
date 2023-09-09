import { BrowsersVersion } from "../../types";
import { BrowserInfo } from "./detectBrowser";

type CheckBrowserCompatibility = {
  supportedBrowsers: BrowsersVersion;
  currentBrowser: BrowserInfo;
};

export function useCheckBrowserCompatibility({
  supportedBrowsers,
  currentBrowser,
}: CheckBrowserCompatibility): boolean {
  console.log(supportedBrowsers, currentBrowser);

  // FIX: fix error (Object is possibly 'null' or 'undefined')
  return (
    currentBrowser.name in supportedBrowsers &&
    currentBrowser.version >= supportedBrowsers[currentBrowser.name] &&
    Number.isFinite(supportedBrowsers[currentBrowser.name])
  );
}
