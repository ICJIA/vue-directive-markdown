# vue-directive-markdown

> Simple Vue 2.0 directive to parse markdown using the [markdown-it](https://github.com/markdown-it/markdown-it) parser.

## Installation

```
$ npm install vue-directive-markdown --save-dev
```

## Initialization

Sample ```main.js```:

```
import Vue from 'vue'
import App from './App.vue'

import VueDirectiveMarkdown from 'vue-directive-markdown'
Vue.directive('md', VueDirectiveMarkdown)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

## Usage

```html
<div v-md>
# Your Markdown Text

- List item 1
- List item 2
- List item 3
</div>
```

## Modifiers

- ```v-md.html```: Allow HTML. Default: ```false```

- ```v-md.xhtmlOut```:  Use '/' to close single tags. This is only for full CommonMark compatibility. Default: ```false```

- ```v-md.breaks```: Convert '\n' in paragraphs into html breaks. Default: ```false```

- ```v-md.linkify```: Autoconvert URL-like text to links. Default: ```false```

- ```v-md.commonmark```: Set into Commonmark mode.

Set modifiers to turn on features. For example:

```html
<div v-md.html.linkify>
  <b>This will display HTML</b><br>
  <a href="">And automatically display links</a>
</div>
```

## Syntax extensions

The following extensions are enabled by default:
- [markdown-it-attrs]()
- [markdown-it-named-headers]()
- [markdown-it-footnote]()

To run without any extensions enabled and have a vanilla [markdown-it](https://github.com/markdown-it/markdown-it) parser, add the ```min```  argument:

```bash
<div v-md:min>
 # Plain markdown-it
</div>
```

## Build

```bash
# Build example

npm run build

# Build distribution

npm run dist
```

## View example

```bash
$ npm run server
```

## TODO

- Configurable syntax extensions
