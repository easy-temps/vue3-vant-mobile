<h1 align="center">Vue3-Vant-Mobile</h1>

<p align='center'>
  <a href="https://vue3-vant-mobile.netlify.app">Live Demo</a>
</p>

<p align="center">
  An mobile web apps template based on the Vue 3 ecosystem
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/CharleeWa/vue3-vant-mobile" alt="license" />
  <img src="https://img.shields.io/github/package-json/v/CharleeWa/vue3-vant-mobile" alt="version" />
  <img src="https://img.shields.io/github/repo-size/CharleeWa/vue3-vant-mobile" alt="repo-size" />
  <img src="https://img.shields.io/github/languages/top/CharleeWa/vue3-vant-mobile" alt="languages" />
  <img src="https://img.shields.io/github/issues-closed/CharleeWa/vue3-vant-mobile" alt="issues" />
</p>

<br>

<p align='center'>
<b>English</b> / <a href="https://github.com/CharleeWa/vue3-vant-mobile/blob/main/README.zh-CN.md">简体中文</a>
</p>

<br>

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 5](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 [File based routing](./src/router)

- 📦 [Components auto importing](./src/components)

- 🍍 [State Management via Pinia](https://pinia.vuejs.org)

- 📑 [Layout system](./src/layouts)

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- 💪 TypeScript, of course

- ⚙️ Unit Testing with [Vitest](https://github.com/vitest-dev/vitest)

- 💾 [Mock](https://github.com/pengzhanbo/vite-plugin-mock-dev-server) server Support

- 🌈 Git [hooks](./.husky) - lint and commit

- 🪶 [Vant](https://github.com/youzan/vant) - Vue UI library for mobile web apps

- 🔭 [vConsole](https://github.com/vadxq/vite-plugin-vconsole) - the developer tool for mobile web page

- 📱 Browser adaptation - use viewport vw/vh units

- 💻 [Desktop optimization](https://github.com/wswmsword/postcss-mobile-forever) - the mobile area

- 🌓 Dark Mode Support

- 🛡️ Configure [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) as default

- ☁️ Deploy on [Netlify](https://www.netlify.com), zero-config

<br>

## Pre-packed

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine
  - [`@unocss/preset-rem-to-px`](https://github.com/unocss/unocss/tree/main/packages/preset-rem-to-px) - Converts rem to px for all utilities
  - [`eslint-plugin-unocss`](https://github.com/devunt/eslint-plugin-unocss) - ESLint plugin for UnoCSS
- [Vant](https://github.com/youzan/vant) - Vue UI library for mobile web apps
  - [`vant-touch-emulator`](https://github.com/youzan/vant/tree/main/packages/vant-touch-emulator) - Simulate mobile touch events on the desktop
  - [`vant-use`](https://github.com/youzan/vant/tree/main/packages/vant-use) - Built-in composition APIs of Vant

### Plugins

- [Vue Router](https://github.com/vuejs/router)
  - [`unplugin-vue-router`](https://github.com/posva/unplugin-vue-router) - file system based routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layouts for pages
- [Pinia](https://pinia.vuejs.org) - Intuitive, type safe, light and flexible Store for Vue using the composition api
  - [`pinia-plugin-persistedstate`](https://github.com/prazdevs/pinia-plugin-persistedstate) -  Configurable persistence and rehydration of Pinia stores
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - components auto import
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [vite-plugin-vconsole](https://github.com/vadxq/vite-plugin-vconsole) - A lightweight, extendable front-end developer tool for mobile web page
- [vite-plugin-mock-dev-server](https://github.com/pengzhanbo/vite-plugin-mock-dev-server) - Vite Plugin for API mock dev server
- [postcss-mobile-forever](https://github.com/wswmsword/postcss-mobile-forever) - To adapt different displays by one mobile viewport
- [vite-plugin-vue-devtools](https://github.com/vuejs/devtools-next) - Designed to enhance the Vue developer experience
- [vueuse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- [@unhead/vue](https://github.com/unjs/unhead) - manipulate document head reactively
- [vite-plugin-pwa](https://github.com/antfu/vite-plugin-pwa) - PWA
- [vite-plugin-sitemap](https://github.com/jbaubree/vite-plugin-sitemap) - sitemap and robots generator

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config), single quotes, no semi

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - Unit testing powered by Vite
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [Netlify](https://www.netlify.com/) - zero-config deployment
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Try it now

> Vue3-Vant-Mobile requires Node 18+

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/CharleeWa/vue3-vant-mobile/generate)

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit CharleeWa/vue3-vant-mobile my-mobile-app
cd my-mobile-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `index.html`
- [ ] Change the hostname in `vite.config.ts`
- [ ] Change the favicon in `public`
- [ ] Clean up the READMEs and remove routes

And, enjoy :)

## Usage

### Development

Just run and visit <http://localhost:3000>

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way, and your App will be live in a minute.

## Contributors

<table>
<tr>
  <td align="center">
    <a href="https://github.com/CharleeWa">
      <img src="https://avatars.githubusercontent.com/u/22477554?s=96&v=4" width="90;" alt="CharleeWa"/>
      <br />
      <sub><b>Charlie Wang</b></sub>
    </a>
  </td>
  <td align="center">
    <a href="https://github.com/weiq">
      <img src="https://avatars.githubusercontent.com/u/1697158?v=4" width="90;" alt="weiq"/>
      <br />
      <sub><b>魏小雨</b></sub>
    </a>
  </td>
  <td align="center">
    <a href="https://github.com/AlphaYoung111">
      <img src="https://avatars.githubusercontent.com/u/54132313?v=4" width="90;" alt="AlphaYoung"/>
      <br />
      <sub><b>AlphaYoung</b></sub>
    </a>
  </td>
  <td align="center">
    <a href="https://github.com/Leezon">
      <img src="https://avatars.githubusercontent.com/u/38120280?v=4" width="90;" alt="Leezon"/>
      <br />
      <sub><b>Leezon</b></sub>
    </a>
  </td>
  <td align="center">
    <a href="https://github.com/leo4developer">
      <img src="https://avatars.githubusercontent.com/u/15160478?v=4" width="90;" alt="liuNing"/>
      <br />
      <sub><b>liuNing</b></sub>
    </a>
  </td>
  <td align="center">
    <a href="https://github.com/wswmsword">
      <img src="https://avatars.githubusercontent.com/u/26893092?v=4" width="90;" alt="wswmsword"/>
      <br />
      <sub><b>wswmsword</b></sub>
    </a>
  </td>
</tr>
<tr>
  <td align="center">
    <a href="https://github.com/Kysen777">
      <img src="https://avatars.githubusercontent.com/u/63892082?v=4" width="90;" alt="Kysen"/>
      <br />
      <sub><b>Kysen</b></sub>
    </a>
  </td>
  <td align="center">
    <a href="https://github.com/smartsf">
      <img src="https://avatars.githubusercontent.com/u/19995400?v=4" width="90;" alt="smartsf"/>
      <br />
      <sub><b>阿峰</b></sub>
    </a>
  </td>
  <td align="center">
    <a href="https://github.com/ReginYuan">
      <img src="https://avatars.githubusercontent.com/u/49477488?v=4" width="90;" alt="ReginYuan"/>
      <br />
      <sub><b>ReginYuan</b></sub>
    </a>
  </td>
  <td align="center">
    <a href="https://github.com/InsHomePgup">
      <img src="https://avatars.githubusercontent.com/u/47906083?v=4" width="90;" alt="Abraham K."/>
      <br />
      <sub><b>Abraham K.</b></sub>
    </a>
  </td>
</tr>
</table>

## Star History

<p align="left">
  <a target="_blank" href="https://star-history.com/#CharleeWa/vue3-vant-mobile&Date">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=CharleeWa/vue3-vant-mobile&type=Date&theme=dark">
      <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=CharleeWa/vue3-vant-mobile&type=Date">
    </picture>
  </a>
</p>
