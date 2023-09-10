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
  redirect: string;
  versions: MinimumBrowsersVersion;
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

  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    nuxt.options.runtimeConfig.public.supportedBrowsers = defu(
      nuxt.options.runtimeConfig.public.supportedBrowsers,
      options
    );

    addPlugin(resolver.resolve("./runtime/plugin"));
  },
});
