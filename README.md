# thenuxtorigin-client

> My remarkable Nuxt.js starting project

# Multi-language setup
> This project has multi-language support
> View at ~/locales/README.md

# Use the project

## assets
- Custom your CSS by making change to ~/assets/scss/main.scss
- Custom your bootstrap-vue by making change to ~/assets/scss/bootstrap-vue/...
## common
- Contain your common components, which are used anywhere 
## components
- Contains project's components
## constants
- Contains global variables added by inject()
- Use this.$variable to retrieve them
## data
- Contains exported seeded data
## layout
- Contains project's layout
## locales
- Contains project's language files, see README.md in here for more!
## middleware
- Contains project's middleware
## pages
- Contains project's pages
## plugins
- Contains project's plugin files
## static
- Contains project's static files
## store
- Contains project's VueX Store, seperated into 4 files for cleaner code and control more easily (instead of index.js)
## templates
- Contains pages' templates
## utils
- Contains project's utility files including:
- bus.js for Event Bus, use this.$bus.$on and this.$bus.$emit
- utils.js for global functions use this.$function_name()

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
