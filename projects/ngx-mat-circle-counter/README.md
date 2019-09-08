# ngx-mat-circle-counter

An angular material circle counter using progress spinner.

## Installation

`yarn add ngx-mat-circle-counter @angular/material`

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

## Demo

You can look at the [demo]() for examples.

------------------------------------------------

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Code scaffolding

Run `ng generate component component-name --project ngx-circle-counter` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-circle-counter`.
> Note: Don't forget to add `--project ngx-circle-counter` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-circle-counter` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-circle-counter`, go to the dist folder `cd dist/ngx-circle-counter` and run `npm publish`.

## Running unit tests

Run `ng test ngx-circle-counter` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
