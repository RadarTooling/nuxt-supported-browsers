import { defineNuxtRouteMiddleware, navigateTo, useRuntimeConfig } from "#app";
import { useDetectBrowser } from "../composable/detectBrowser";
import { useCheckBrowserCompatibility } from "../composable/checkBrowserCompatibility";

export default defineNuxtRouteMiddleware((to) => {
  if (process.server) return;

  const {
    supportedBrowsers: { versions, redirect },
  } = useRuntimeConfig().public;

  if (!versions || !redirect) {
    console.warn(
      "[Nuxt Supported browsers]: module options are required, module is disabled"
    );
    return;
  }

  const isUnsuportedPage: boolean = to.path === redirect;

  const { name, version } = useDetectBrowser(navigator.userAgent);

  const isSupportedBrowser = useCheckBrowserCompatibility({
    supportedBrowsers: versions,
    currentBrowser: { name, version },
  });

  if (!isSupportedBrowser && !isUnsuportedPage) {
    return navigateTo(redirect, {
      replace: true,
    });
  }

  if (isSupportedBrowser && isUnsuportedPage) {
    return navigateTo("/", {
      replace: true,
    });
  }
});
