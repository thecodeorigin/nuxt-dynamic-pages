# thenuxtorigin-client

> My remarkable Nuxt.js starting project

# Theme setup
> This project support multi-theme support
## .env file
> Choose your themes by changing
``` bash
.env
# with the following content:
THEME=[YOUR_THEME_NAME]
ASSETS_URL='~/themes/[YOUR_THEME_NAME]/assets/'
COMPONENTS_URL='~/themes/[YOUR_THEME_NAME]/components/'
CONTAINERS_URL='~/themes/[YOUR_THEME_NAME]/containers/'
# Changing .env file required re-run the project with npm run ...
```
## Create theme's files and folders
> Create your theme's files and folders:
``` bash
# Create these folders
~/themes/[YOUR_THEME_NAME]/assets
~/themes/[YOUR_THEME_NAME]/containers
~/themes/[YOUR_THEME_NAME]/components
```
## Create theme's layout
Create a layout file with your theme's name (Ex: [YOUR_THEME_NAME].vue) from the sample in layouts' README.md
in conclusion:
- Edit the .env file
- Create your theme layout (use the template in ~/layouts/README.md)
- Create your theme files and folders

# Multi-language setup
> This project has multi-language support
> View at ~/locales/README.md

# Use the project
## As usual, you do the project with
-layouts
-middleware
-pages
-static
-store
-plugins
## Now you have
-constants
-data
-locales
-themes
## All your assets and components are moved to ~themes/[YOUR_THEME_FOLDER]

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
