import { expect, describe, it, vi } from "vitest";
import { useCheckBrowserCompatibility } from "./checkBrowserCompatibility";
import { useDetectBrowser } from "./detectBrowser";

const supportedBrowser = {
  redirect: "/Supported-browser",
  versions: {
    Chrome: 86,
    Firefox: 70,
    Safari: 14.1,
    Edge: 86,
    Opera: 12,
    "Internet Explorer": null,
    "Unknown Browser": 12,
  },
};

// Mock the dependencies (useRuntimeConfig, navigateTo, and detectBrowser)
vi.mock("#app", () => ({
  useRuntimeConfig: () => ({
    public: {
      supportedBrowser,
    },
  }),
}));

// Chrome 90 should be accepted
describe("useCheckBrowserCompatibility", () => {
  //--------------------------------------
  // Chrome 90 should be accepted
  it("Test checkBrowserCompatibility", () => {
    const ua =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36";
    const result = useCheckBrowserCompatibility({
      supportedBrowsers: supportedBrowser.versions,
      currentBrowser: useDetectBrowser(ua),
    });
    expect(result).toBe(true);

    //--------------------------------------
    // Chrome 70 should be rejected
    const ua2 =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.340.132 Safari/537.36";
    const result2 = useCheckBrowserCompatibility({
      supportedBrowsers: supportedBrowser.versions,
      currentBrowser: useDetectBrowser(ua2),
    });
    expect(result2).toBe(false);

    //--------------------------------------
    // Internet explorer 11 should be rejected
    const ua3 =
      "Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko";
    const result3 = useCheckBrowserCompatibility({
      supportedBrowsers: supportedBrowser.versions,
      currentBrowser: useDetectBrowser(ua3),
    });
    expect(result3).toBe(false);
  });
});
