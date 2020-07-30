# nacelle-yotpo-loyalty

Adds Vue.js components for integrating [yotpo](https://www.yotpo.com/platform/loyalty/) loyalty and referrals in your [Nacelle](https://getnacelle.com/) Nuxt project.

## Requirements

- A Nacelle project set up locally. See https://docs.getnacelle.com for getting started.
- A Yotpo app installed and setup on your Shopify store.

## Setup

### Add Module to Nacelle

Once you hace Nacelle and Yotpo set up you can install this module in your project from `npm`:

```
npm install @nacelle/nacelle-yotpo-loyalty --save
```

After the package has installed, open `nuxt.config.js`. Under `modules` add `@nacelle/nacelle-yotpo-loyalty` to the array. It should look something like this:

```
modules: [
  '@nuxtjs/pwa',
  '@nuxtjs/dotenv',
  '@nacelle/nacelle-nuxt-module',
  '@nuxtjs/sitemap',
  '@nacelle/nacelle-yotpo-loyalty'
],
```

Then add your Yotpo GUID to your environment variables `.env` file.
[![Yotpo](yotpo_settings_guide.png)](./yotpo_settings_guid.png)

```
YOTPO_GUID=xxxxxxxxxxxxx
```

### Add the components to your Nacelle Storefront

To make the Yotpo widget visible in your store, open up `layouts/default.vue` and paste `<yotpo-widget />` just before the closing `div` in the template.

### Shopify Setup

To complete the integration a liquid snippet needs to be added to your Shopify theme.

Open your Shopify theme code editor under "Actions > Edit Code". Under "Snippets" click "Add new snippet". Name the snippet `yotpo-nacelle-init.liquid`, paste the following code found [here](liquid/yotpo-nacelle-init.md).

Open `layout/theme.liquid` and and before the closing `body` tag paste `{% include 'yotpo-nacelle-init' %}`. Your Shopify account pages will now set the correct Yotpo data to be used in your Nacelle store.
