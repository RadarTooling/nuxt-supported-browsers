import { MinimumBrowsersVersion } from "../../module";
import { BrowserInfo } from "./detectBrowser";

type CheckBrowserCompatibility = {
  supportedBrowsers: MinimumBrowsersVersion;
  currentBrowser: BrowserInfo;
};

export function useCheckBrowserCompatibility({
  supportedBrowsers,
  currentBrowser,
}: CheckBrowserCompatibility): boolean {
  if (currentBrowser.name in supportedBrowsers === false) {
    return false;
  }

  const mustSuportVersion = supportedBrowsers[currentBrowser.name];

  return (
    typeof mustSuportVersion === "number" &&
    Number.isFinite(mustSuportVersion) &&
    currentBrowser.version >= mustSuportVersion
  );
}
