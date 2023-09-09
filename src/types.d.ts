export * from "./types";

type PredefinedBrowsers =
  | "Chrome"
  | "Safari"
  | "Edge"
  | "Firefox"
  | "Opera"
  | "Internet Explorer";

export type BrowsersVersion = {
  [key in PredefinedBrowsers]?: number | null | undefined;
} & {
  [key: string]: number | null | undefined;
};

export type SupportedBrowsers = {
  page: string;
  versions: BrowsersVersion;
};

//FIX: at least one version required
type AtLeastOneVersionRequired<T> = T extends BrowsersVersionBase
  ? {
      [key in PredefinedBrowsers]: Exclude<T[key], null | undefined>;
    } & {
      [key in Exclude<keyof T, PredefinedBrowsers>]?: T[key];
    }
  : T;

declare module "@nuxt/schema" {
  interface NuxtConfig {
    supportedBrowsers: SupportedBrowsers;
  }
  interface NuxtOptions {
    supportedBrowsers: SupportedBrowsers;
  }
}
