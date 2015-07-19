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

### Dev server
- Run a [BrowserSync](https://browsersync.io) server
- Update on CSS or view changes
- OS X error notifications

### CSS
- Compile Scss files
- [Autoprefix](https://github.com/postcss/autoprefixer) CSS
- Compress CSS with [CSSO](https://github.com/css/csso)

### Liquid
- Compile Liquid files

## Deploy
Deploy to [Surge](https://surge.sh) with one line; `npm run deploy`.

## What is there to do?

- Should output not minified version
- Liquid filter current url
- Version assets
- Support other templating languages (such as Jade)
- Support other CSS preprocessors (such as Stylus)
- Support PostCSS
- JavaScript compilation (Browserify and Babel)
- Add editorconfig
- Blog things