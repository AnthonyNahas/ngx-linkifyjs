<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/anthonynahas/ngx-linkifyjs/master/demo/src/assets/logo.svg">
</p>

# ngx-linkifyjs - Angular V6 wrapper for linkifyjs -  library for finding links in plain text and converting them to HTML &lt;a&gt; tags via linkifyjs

[![npm version](https://badge.fury.io/js/ngx-linkifyjs.svg)](https://badge.fury.io/js/ngx-linkifyjs),
[![Build Status](https://travis-ci.org/anthonynahas/ngx-linkifyjs.svg?branch=master)](https://travis-ci.org/anthonynahas/ngx-linkifyjs)
[![Coverage Status](https://coveralls.io/repos/github/anthonynahas/ngx-linkifyjs/badge.svg?branch=master)](https://coveralls.io/github/anthonynahas/ngx-linkifyjs?branch=master)
[![dependency Status](https://david-dm.org/anthonynahas/ngx-linkifyjs/status.svg)](https://david-dm.org/anthonynahas/ngx-linkifyjs)
[![devDependency Status](https://david-dm.org/anthonynahas/ngx-linkifyjs/dev-status.svg?branch=master)](https://david-dm.org/anthonynahas/ngx-linkifyjs#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/anthonynahas/ngx-linkifyjs.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://anthonynahas.github.io/ngx-linkifyjs

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `ngx-linkifyjs` via:
```shell
npm install --save ngx-linkifyjs
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-linkifyjs`:
```js
map: {
  'ngx-linkifyjs': 'node_modules/ngx-linkifyjs/bundles/ngx-linkifyjs.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'ngx-linkifyjs';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'ngx-linkifyjs';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'ngx-linkifyjs';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2018 Anthony Nahas. Licensed under the MIT License (MIT)

