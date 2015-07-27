# Slush Puppie

Slush Puppie is a very simple static site generator for Slush.

Slush Puppie creates a readme in your project that documents its tasks.

```
npm install -g slush slush-puppie
mkdir my-project
cd my-project
slush puppie
```

## What does it do?

- OS X error notifications

### Dev server
- Run a [BrowserSync](https://browsersync.io) server
- Update on CSS or view changes

### CSS
- Compile Scss files
- [Autoprefix](https://github.com/postcss/autoprefixer) CSS
- Compress CSS with [CSSO](https://github.com/css/csso)

### Liquid
- Compile Liquid files

## Deploy
Deploy to [Surge](https://surge.sh) with one line; `npm run deploy`

## Templates

Slush Puppie will look inside your user directory for custom templates.
Any template files found will be placed inside your project. Your template files take precedence over templates that Slush Puppie comes with.

To make use of this feature, place your templates at `~/slush-puppie/templates`.

For example, you could replace the bundled `index.liquid` file by creating
your own at `~/slush-puppie/templates/views/index.liquid`.

## What is there to do?

- Unminified CSS
- Liquid filter current url
- Version assets
- Support other templating languages (such as Jade)
- Support other CSS preprocessors (such as Stylus)
- Support PostCSS
- JavaScript compilation (Browserify and Babel)
- Add editorconfig
- Blog/data things
- Indentation issues