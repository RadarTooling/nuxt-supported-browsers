import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "Supported-browsers",
    configKey: "supportedBrowsers",
  },

  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    if (!options) {
      throw new Error("Supported browser module options are required");
    }
    //FIX: type error
    nuxt.options.runtimeConfig.public.supportedBrowsers = options;

    addPlugin(resolver.resolve("./runtime/plugin"));
  },
});
