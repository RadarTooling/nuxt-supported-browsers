import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";
import { defu } from "defu";

type AcceptedValues = number | null | undefined;

type PredefinedBrowsers =
  | "Chrome"
  | "Safari"
  | "Edge"
  | "Firefox"
  | "Opera"
  | "Internet Explorer";

export type MinimumBrowsersVersion = {
  [key in PredefinedBrowsers]?: AcceptedValues;
} & Record<string, AcceptedValues>;

export interface ModuleOptions {
  redirect?: string;
  versions?: MinimumBrowsersVersion;
  globalAppMiddleware?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-supported-browsers",
    configKey: "supportedBrowsers",
    defaults: {
      redirect: "/unsupported-browser",
      versions: {
        Chrome: 84,
        Firefox: 70,
        Safari: 13,
        Edge: 84,
        Opera: 60,
        "Internet Explorer": undefined,
      },
    },
  },
  defaults: {
    globalAppMiddleware: true
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    if (!options.versions || !options.redirect) {
      console.warn(
        "[Nuxt Supported browsers]: module options are required, module is disabled"
      );
      return;
    }

    nuxt.options.runtimeConfig.public.supportedBrowsers = defu(
      nuxt.options.runtimeConfig.public.supportedBrowsers,
      options
    );

    addPlugin(resolver.resolve("./runtime/plugin"));
  },
});
