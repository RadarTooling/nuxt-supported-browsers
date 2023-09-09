import { defineNuxtRouteMiddleware, navigateTo, useRuntimeConfig } from "#app";
import { useDetectBrowser } from "../composable/detectBrowser";
import { useCheckBrowserCompatibility } from "../composable/checkBrowserCompatibility";
import { BrowsersVersion, SupportedBrowsers } from "../../types";

export default defineNuxtRouteMiddleware((to) => {
  if (process.server) return;

  const supportedBrowser: SupportedBrowsers =
    useRuntimeConfig().public.supportedBrowser;

  if (!supportedBrowser) {
    throw new Error("Supported browser module options are required");
  }

  const supportedBrowsers: BrowsersVersion = supportedBrowser.versions;
  const page: string = supportedBrowser.page;

  const currentBrowser = useDetectBrowser(navigator.userAgent);

  const isAtUnsuportedPage: boolean = to.path === page;

  const isBrowserSupported: boolean = useCheckBrowserCompatibility({
    supportedBrowsers,
    currentBrowser,
  });

  if (!isBrowserSupported && !isAtUnsuportedPage) {
    return navigateTo(page, {
      replace: true,
    });
  }

  if (isBrowserSupported && isAtUnsuportedPage) {
    return navigateTo("/", {
      replace: true,
    });
  }
});
