import { defineNuxtPlugin, addRouteMiddleware, useRuntimeConfig } from "#app";
import supportedBrowsers from "./middleware/supported-browsers";

export default defineNuxtPlugin(() => {
  const { globalAppMiddleware } = useRuntimeConfig().public.supportedBrowsers
  addRouteMiddleware("supportedBrowsers", supportedBrowsers, {
    global: globalAppMiddleware
  });
});
