import { expect, describe, it } from "vitest";
import { useDetectBrowser } from "./detectBrowser";

describe("detectBrowser function", () => {
  it("should detect Internet Explorer correctly", () => {
    const ua =
      "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; AS; rv:11.0) like Gecko";
    const result = useDetectBrowser(ua);
    expect(result).toEqual({ name: "Internet Explorer", version: 11 });
  });

  it("should detect Chrome correctly", () => {
    const ua =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36";
    const result = useDetectBrowser(ua);
    expect(result).toEqual({ name: "Chrome", version: 90 });
  });

  it("should detect Opera correctly", () => {
    const ua =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) OPiOS/33.0.2022.16.06.10.17 Opera/21.0.1439.421";
    const result = useDetectBrowser(ua);
    expect(result).toEqual({ name: "Opera", version: 21 });
  });
});
