# ngx-mat-circle-counter

A customizable angular material circle counter using progress spinner.

[![Codefresh build status]( https://g.codefresh.io/api/badges/pipeline/fbaldo31/fbaldo31%2Fngx-mat-circle-counter%2Fngx-mat-circle-counter?branch=master&key=eyJhbGciOiJIUzI1NiJ9.NWM2MTFjNmMxMmE5NTYyZTZhYWQ3YTRl.S6H0kL3RuTkulI3shIONacgTBojrmumEo9peBrC4buw&type=cf-1)]( https://g.codefresh.io/pipelines/ngx-mat-circle-counter/builds?repoOwner=fbaldo31&repoName=ngx-mat-circle-counter&serviceName=fbaldo31%2Fngx-mat-circle-counter&filter=trigger:build~Build;branch:master;pipeline:5c80c0134cdef24ecbf23179~ngx-mat-circle-counter) ![David](https://img.shields.io/david/fbaldo31/ngx-mat-circle-counter.svg)

[Changelog](https://github.com/fbaldo31/ngx-mat-circle-counter/blob/master/CHANGELOG.md)

## Demo

You can look at the [demo](https://fbaldo31.github.io/ngx-mat-circle-counter/) to play with the API.

## Installation

`ng add @angular/material @angular/cdk`

`yarn add ngx-mat-circle-counter`

## use

```html
<ngx-circle-counter [color]="'primary'" [textColor]="'#69f0ae'" [size]="'xs'"></ngx-circle-counter>
```

## Api

Attributes|Type|Default value|Description
----------|----|-------------|-----------
start|number|0|The value from the counter starts|
size|'xs' - 's' - 'm' - 'l' - 'xl'|'m'|From 100px to 300px
color|string|'primary'|Angular Material theme based color.
textColor|string|'' (black)|As there is no way to inherit font color from theme, put directly the font color there.
speed|number|10|Delay in millisecond to increase the counter.
value|number|100|The value to the counter ends|
mode|'viewport' or 'pageinit'|'viewport'|In viewport mode, counter won't start untill it is visible.

------------------------------------------------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
