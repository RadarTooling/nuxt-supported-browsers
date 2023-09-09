import { defineNuxtRouteMiddleware, navigateTo, useRuntimeConfig } from "#app";
import { BrowsersVersion, UnsupportedBrowsers } from "../types";
import { detectBrowser } from "./composable/detectBrowser";

export default defineNuxtRouteMiddleware((to) => {
  if (process.server) return;

  const unsupportedBrowser: UnsupportedBrowsers =
    useRuntimeConfig().public.unsupportedBrowser;

  if (!unsupportedBrowser) {
    throw new Error("Unsupported browser module options are required");
  }

  const browsersVersion: BrowsersVersion = unsupportedBrowser.versions;
  const page: string = unsupportedBrowser.page;

  const isUnsuportedPage: boolean = to.path === page;

  const { name, version } = detectBrowser(navigator.userAgent);

  const isSupportedBrowser: boolean =
    name in browsersVersion &&
    version >= browsersVersion[name] &&
    Number.isFinite(browsersVersion[name]);

  if (!isSupportedBrowser && !isUnsuportedPage) {
    return navigateTo(page, {
      replace: true,
    });
  }

  if (isSupportedBrowser && isUnsuportedPage) {
    return navigateTo("/", {
      replace: true,
    });
  }
});
