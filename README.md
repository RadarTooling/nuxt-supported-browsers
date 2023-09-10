# Nuxt Supported Browsers

[![npm version][npm-version-src]][https://www.npmjs.com/package/nuxt-supported-browsers?activeTab=versions]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][https://github.com/CavalcanteLeo/nuxt-supported-browsers/blob/main/LICENSE.md]
[![Nuxt][nuxt-src]][nuxt-href]


- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/CavalcanteLeo/nuxt-supported-browsers?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

Meet `Nuxt Supported Browsers`, your project's secret sauce for unleashing the awesomeness of modern CSS! Say goodbye to the headache of old, clunky browsers. With `Nuxt Supported Browsers`, we make sure your web magic shines on the latest browsers. If someone's stuck in the digital Stone Age, we'll politely nudge them to upgrade for a smoother, trendier experience. It's time to level up your project's style game with `Nuxt Supported Browsers`! 😎🚀

## Quick Setup

1. Add `nuxt-supported-browsers` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-supported-browsers

# Using yarn
yarn add --dev nuxt-supported-browsers

# Using npm
npm install --save-dev nuxt-supported-browsers
```

2. Add `nuxt-supported-browsers` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-supported-browsers'
  ]
  ...
  supportedBrowsers: {
    redirect: "/unsupported-browser",
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
})
```

3. Create a page with the name you have set in the Nuxt config, e.g., `unsupported-browser.vue`, and add the desired message.


That's it! You can now use Nuxt Supported Browsers in your Nuxt app ✨



## Roadmap
- [] Create a custom built-in UI page for unsupported browsers
- [] Ensure that at least one version is set in the Nuxt config

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-supported-browsers/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-supported-browsers

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-supported-browsers.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-supported-browsers

[license-src]: https://img.shields.io/npm/l/nuxt-supported-browsers.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-supported-browsers

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
