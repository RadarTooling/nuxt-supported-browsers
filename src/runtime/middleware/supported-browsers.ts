import { defineNuxtRouteMiddleware, navigateTo, useRuntimeConfig } from "#app";
import { useDetectBrowser } from "../composable/detectBrowser";

export default defineNuxtRouteMiddleware((to) => {
  if (process.server) return;

  const { supportedBrowser } = useRuntimeConfig().public;

  if (!supportedBrowser) {
    console.warn(
      "[Nuxt Supported browsers]: module options are required, module is disabled"
    );
    return;
  }

  const browsersVersion = supportedBrowser.versions;
  const redirect = supportedBrowser.redirect;

  const isUnsuportedPage: boolean = to.path === redirect;

  const { name, version } = useDetectBrowser(navigator.userAgent);

  const isSupportedBrowser: boolean =
    name in browsersVersion &&
    version >= browsersVersion[name] &&
    Number.isFinite(browsersVersion[name]);

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
