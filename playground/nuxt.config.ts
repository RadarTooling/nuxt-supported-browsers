export default defineNuxtConfig({
  modules: ["../src/module"],
  supportedBrowsers: {
    page: "/unsupported-browser",
    versions: {
      Chrome: 86,
      Firefox: 70,
      Safari: 14.1,
      Edge: 86,
      Opera: 12,
      "Internet Explorer": null,
      "Unknown Browser": 12,
    },
  },
  devtools: { enabled: true },
});
