![](https://user-images.githubusercontent.com/4195550/147338199-cff47e80-f05c-4b3d-afe0-1c7b8aad08e4.png)

# Top Nuxt 3 Starter Template

![Netlify Status](https://api.netlify.com/api/v1/badges/76c6759d-35ef-4432-816a-a45faa514aa7/deploy-status)

Fastest and most comfortable development experience started template  
 With 💚  from  [@ctwhome](https://github.com/ctwhome), inspired by [@antfu vitesse](https://github.com/antfu/vitesse)

## Features

*   [x] [❇️  Nuxt 3](https://v3.nuxtjs.org)
    * [x] 🔥 The `<script setup>` syntax
    * [x] 🏎  Zero-config cloud functions and deploy SSR working with Netlify thanks to the new Nuxt 3 Functions
    * [x] 📥 APIs auto importing - for Composition API, VueUse and custom composables.
    * [x] ESR, File-based routing, components auto importing, modules, etc.
*   [x] ⚡️ Vite - Instant HMR
*   [x] 📴  PWA - [vite-plugin-pwa](https://github.com/antfu/vite-plugin-pwa) (thanks to [@userquin](https://github.com/userquin) for the contribution)
    *   Offline mode, new content available prompt,
*   [x] 🎨 [TailwindCSS 3](https://tailwindcss.com/) - JIT engine by default
    *   [x] 👩‍🎨 [DaisyUI](https://daisyui.com) - Theme CSS components for TailwindCSS
    *   [x] [🌈 Theme switcher](https://github.com/saadeghi/theme-change) - Custom theme and 22 themes to choose from.
*   [x] 🦾 TypeScript
*   [x] 💻 .env settings environments
*   [x] ⭐️ Format on save with ESLint (VSCode Settings file and WebStorm)
*   [x] ✨ All [Iconify](https://iconify.design/) on-demand - +100.000 SVG icons completely customizable
*   [x] 🌐 Multi-language support with [vue-i18n-next](https://github.com/intlify/vue-i18n-next) thanks to [@intlify/nuxt3](https://github.com/intlify/nuxt3)
    *   [x] YAML, JSON, JSON5 locale files
    *   [ ] Localize routes (/en/about, /es/about, ...)
*   [ ] 🐘 Supabase - WIP - Full stack development with Auth, Realtime, Storage, and of course PostgreSQL
*   [ ] 🍍 [State Management via Pinia](https://pinia.esm.dev/)
*   [ ] 📄 Markdown HTML pages
*   [ ] 📤 Feed RSS generator

### Nuxt Modules

*   [x] [VueUse](https://github.com/vueuse/vueuse) - a collection of useful composition APIs
*   [ ] [Pinia](https://pinia.esm.dev/) - intuitive, type-safe, light, and flexible Store for Vue.

## Installation and running locally

```bash
npx degit ctwhome/top-nuxt3 <directory-name>
yarn install
```
## Updaging fork

1.Add remote from original repository in your forked repository:
```shell
git remote add upstream git://github.com/ctwhome/top-nuxt3.git
git fetch upstream
```
2. Updating your fork from original repo to keep up with their changes:
```git pull upstream main```

Start the development server on [http://localhost:3000](http://localhost:3000)

```bash
yarn dev
```

## IDE

We recommend using [VS Code](https://code.visualstudio.com/) with [Volar](https://github.com/johnsoncodehk/volar) to get the best experience (You might want to disable Vetur if you have it).

## Production

Build the application for production:

```bash
yarn build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).
