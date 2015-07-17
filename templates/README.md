# <%= name %>

## What does this do?

### CSS
- Compile Scss files from the `css` directory
- [Autoprefix](https://github.com/postcss/autoprefixer) CSS
- Compress CSS with [CSSO](https://github.com/css/csso)
- Place resultant CSS files in the `public/dist` directory

### Liquid
- Compile Liquid files
- Place resultant HTML files in the `public` directory

## Build

Run `gulp` to watch files and launch the development server. The website will automatically open in your web browser, and update as you work.

Run `gulp package` to build all files. This automatically happens when you deploy, so you shouldn't need to think about it often!

## Deploy

### Previewing with Surge

<%= name %> uses [Surge](https://surge.sh) for preview deployments. When you deploy, the website will be compiled and uploaded to the `homepage` URL specified in `package.json`. This should be a Surge subdomain (like http://foo.surge.sh).

The command to deploy is `npm run deploy`.

Surge will error if your URL is already used. If this happens, change the `homepage` URL specified in `package.json` and try to deploy again.

### Deploying elsewhere

If you need to deploy the project elsewhere, first run `gulp package`, and then simply put the contents of the `public` directory wherever you need. The `public` directory contains all assets required for the website.