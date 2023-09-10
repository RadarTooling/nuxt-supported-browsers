export default defineNuxtConfig({
  modules: ["../src/module"],
  supportedBrowsers: {
    redirect: "/unsupported-browser",
    versions: {
      Chrome: 86,
      Firefox: 70,
      Safari: 14.1,
      Edge: 86,
      Opera: null,
      "Internet Explorer": undefined,
      "Unknown Browser": 12,
    },
  },
  devtools: { enabled: true },
});
