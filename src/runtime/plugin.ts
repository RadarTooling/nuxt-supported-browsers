import { defineNuxtPlugin, addRouteMiddleware } from "#app";
import supportedBrowsers from "./middleware/supported-browsers";

export default defineNuxtPlugin(() => {
  const global = { global: true };
  addRouteMiddleware("supportedBrowsers", supportedBrowsers, global);
});
