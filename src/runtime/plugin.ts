import { defineNuxtPlugin, addRouteMiddleware } from "#app";
import supportedBrowsers from "./middleware/supported-browsers";

export default defineNuxtPlugin(() => {
  addRouteMiddleware("supportedBrowsers", supportedBrowsers, {
    global: true,
  });
});
