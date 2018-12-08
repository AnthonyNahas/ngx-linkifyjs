<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.jsdelivr.net/gh/anthonynahas/ngx-linkifyjs/demo/src/assets/logo.svg">
</p>

# ngx-linkifyjs - Angular V7 wrapper for linkifyjs -  library for finding links in plain text and converting them to HTML &lt;a&gt; tags via linkifyjs

[![npm version](https://badge.fury.io/js/ngx-linkifyjs.svg)](https://badge.fury.io/js/ngx-linkifyjs),
[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://anthonynahas.github.io/ngx-linkifyjs)
[![Join the chat at (https://gitter.im/angular-material-extensions/Lobby](https://badges.gitter.im/ngx-auth-firebaseui/Lobby.svg)](https://gitter.im/angular-material-extensions/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![CircleCI branch](https://img.shields.io/circleci/project/github/AnthonyNahas/ngx-linkifyjs/master.svg?label=circleci)](https://circleci.com/gh/AnthonyNahas/ngx-linkifyjs)
[![Build Status](https://travis-ci.org/AnthonyNahas/ngx-linkifyjs.svg?branch=master)](https://travis-ci.org/AnthonyNahas/ngx-linkifyjs)
[![Coverage Status](https://coveralls.io/repos/github/AnthonyNahas/ngx-linkifyjs/badge.svg?branch=master)](https://coveralls.io/github/AnthonyNahas/ngx-linkifyjs?branch=master)
[![dependency Status](https://david-dm.org/anthonynahas/ngx-linkifyjs/status.svg)](https://david-dm.org/anthonynahas/ngx-linkifyjs)
[![devDependency Status](https://david-dm.org/anthonynahas/ngx-linkifyjs/dev-status.svg?branch=master)](https://david-dm.org/anthonynahas/ngx-linkifyjs#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/anthonynahas/ngx-linkifyjs.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/anthonynahas/ngx-linkifyjs.svg?style=flat-square)](https://github.com/AnthonyNahas/ngx-linkifyjs/blob/master/LICENSE)

<p align="center">
  <img alt="ngx-linkifyjs demo" width="320px" style="text-align: center;" 
  src="https://cdn.jsdelivr.net/gh/anthonynahas/ngx-linkifyjs/assets/demo.gif">
</p>

## Built by and for developers :heart:
Do you have any question or suggestion ? Please do not hesitate to contact us!
Alternatively, provide a PR | open an appropriate issue [here](https://github.com/anthonynahas/ngx-linkifyjs/issues)

If you like this project, support [ngx-linkifyjs](https://github.com/anthonynahas/ngx-linkifyjs) 
by starring :star: and sharing it :loudspeaker:



## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Documentation](#documentation)
- [Installation](#installation)
- [Usage](#usage)
- [Config](#config)
- [Run Demo App Locally](#run-demo-app-locally)
- [Other Angular Libraries](#other-angular-libraries)
- [Support](#support)
- [License](#license)

<a name="demo"/>

## Demo

View all the directives in action at https://anthonynahas.github.io/ngx-linkifyjs

<a name="documentation"/>

## [Documentation](https://anthonynahas.github.io/ngx-linkifyjs/doc/index.html)

<a name="dependencies"/>

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 7.x)

<a name="installation"/>

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
import { NgxLinkifyjsModule } from 'ngx-linkifyjs';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` NgxLinkifyjsModule .forRoot()`):
```typescript
import { NgxLinkifyjsModule } from 'ngx-linkifyjs';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgxLinkifyjsModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` NgxLinkifyjsModule `:

```js
import { NgxLinkifyjsModule } from 'ngx-linkifyjs';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [NgxLinkifyjsModule, ...], 
})
export class OtherModule {
}
```

<a name="usage"/>

## Usage

Once the library is imported, you can use its components, directives and pipes in your Angular application:

### Pipe

`{{text | linkify}}`

```html
<span [innerHTML]="'Linkify the following URL: https://github.com/anthonynahas/ngx-linkifyjs and share it <3' | linkify"></span>
```

**result**: Linkify the following URL: [https://github.com/anthonynahas/ngx-linkifyjs](https://github.com/anthonynahas/ngx-linkifyjs) and share it <3

### Service

Inject the `NgxLinkifyjsService` service

```typescript
import {NgxLinkifyjsService, Link, LinkType} from 'ngx-linkifyjs';

constructor(public linkifyService: NgxLinkifyjsService) {
 } 
}
```

#### `linkify` method
```typescript
import {NgxLinkifyjsService, Link, LinkType} from 'ngx-linkifyjs';

constructor(public linkifyService: NgxLinkifyjsService) {
  this.linkifyService.linkify('For help with GitHub.com, please email support@github.com');
  // result --> see below
 } 
}
```

```typescript
'For help with <a href=\"http://github.com\" class=\"linkified\" target=\"_blank\">GitHub.com</a>, please email <a href=\"mailto:support@github.com\" class=\"linkified\">support@github.com</a>'
```

#### `find` method

```typescript
import {Component, OnInit} from '@angular/core';
import {NgxLinkifyjsService, Link, LinkType} from 'ngx-linkifyjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    
  constructor(public linkifyService: NgxLinkifyjsService) {
    const foundLinks: Link[] = this.linkifyService.find('Any links to github.com here? If not, contact test@example.com');
    
    // result - output --> see below 
  }
  
}
```

```typescript
[
  {
    type: LinkType.URL,
    value: 'github.com',
    href: 'http://github.com'
  },
  {
    type: LinkType.EMAIL,
    value: 'test@example.com',
    href: 'mailto:test@example.com'
  }
]
```

#### `test` method

```typescript
import {Component, OnInit} from '@angular/core';
import {NgxLinkifyjsService} from 'ngx-linkifyjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    
  constructor(public linkifyService: NgxLinkifyjsService) {
    this.linkifyService.test('github.com'); // return true
    this.linkifyService.test('dev@example.com'); // return true
    this.linkifyService.test(['github.com', 'email']); // return false
    this.linkifyService.test('helloWorld'); // return false
  }
}
```

<a name="config"/>

#### Enable/Disable the hash and mention

The config argument is 100% optional, otherwise we will take the default values `true`

```typescript
import { NgxLinkifyjsModule } from 'ngx-linkifyjs';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgxLinkifyjsModule.forRoot(
                  {
                    enableHash: false, // optional - default true
                    enableMention: false // optional - default true
                  }), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

take a look @ [@angular-material-extensions/link-preview](https://github.com/angular-material-extensions/link-preview) which is using `ngx-linkifyjs`

## Run Demo App Locally

- [clone this repo](https://github.com/AnthonyNahas/ngx-linkifyjs.git) by running
```bash
$ git clone https://github.com/AnthonyNahas/ngx-linkifyjs.git
```

- link the ngx-linkifyjs package

```bash
$ gulp link
```

- navigate to the demo app directory
```bash
$ cd demo
```

- install the dependencies
```bash
$ npm i
```

- run/start/serve the app
```bash
$ npm run start
```
or
```bash
$ ng serve --open
```
- the app is now hosted by `http://localhost:4200/`

---


<a name="other-angular-libraries"/>

## Other Angular Libraries
- [ngx-auth-firebaseui](https://github.com/anthonynahas/ngx-auth-firebaseui)
- [@firebaseui/ng-bootstrap](https://github.com/firebaseui/ng-bootstrap)
- [@angular-material-extensions/password-strength](https://github.com/angular-material-extensions/password-strength)
- [@angular-material-extensions/link-preview](https://github.com/angular-material-extensions/link-preview)
- [@angular-material-extensions/pages](https://github.com/angular-material-extensions/pages)
- [@angular-material-extensions/contacts](https://github.com/angular-material-extensions/contacts)
- [@angular-material-extensions/faq](https://github.com/angular-material-extensions/faq)
- [@angular-material-extensions/jumbotron](https://github.com/angular-material-extensions/jumbotron)
- [@angular-material-extensions/google-maps-autocomplete](https://github.com/angular-material-extensions/google-maps-autocomplete)
- [@angular-material-extensions/combination-generator](https://github.com/angular-material-extensions/combination-generator)

---

<a name="support"/>

## Support
+ Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de)
+ or open an appropriate [issue](https://github.com/anthonynahas/ngx-linkifyjs/issues)
+ let us chat on [Gitter](https://gitter.im/angular-material-extensions/Lobby)
 
 Built by and for developers :heart: we will help you :punch:

---

---

![jetbrains logo](assets/jetbrains-variant-4_logos/jetbrains-variant-4.png)

This project is supported by [jetbrains](https://www.jetbrains.com/) with 1 ALL PRODUCTS PACK OS LICENSE incl. [webstorm](https://www.jetbrains.com/webstorm)

---

<a name="license"/>

## License

Copyright (c) 2018 Anthony Nahas. Licensed under the MIT License (MIT)

