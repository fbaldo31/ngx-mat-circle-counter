(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./projects/ngx-mat-circle-counter/src/lib/ngx-mat-circle-component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/ngx-mat-circle-counter/src/lib/ngx-mat-circle-component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"sizeNumber\" class=\"circle-counter-wrapper\" [ngClass]=\"sizeClass\">\n    <mat-progress-spinner \n        class=\"circle-counter\" \n        [color]=\"color\" [mode]=\"'determinate'\" \n        [value]=\"percent\" [diameter]=\"sizeNumber\"\n        [strokeWidth]=\"thickness\"></mat-progress-spinner>\n    <!--<span *ngIf=\"mode === 'pageinit' || (mode === 'viewport' && isElementInViewport())\"\n    class=\"circle-counter-value mat-h{{2}}\" \n    [ngStyle]=\"{'color':textColor}\">{{count}}</span>-->\n    <mat-progress-spinner \n        class=\"circle-counter\" \n        [color]=\"color\" [mode]=\"'determinate'\" \n        [value]=\"100\" [diameter]=\"sizeNumber\"\n        [strokeWidth]=\"thickness\"></mat-progress-spinner>\n    <span *ngIf=\"mode === 'pageinit' || (mode === 'viewport' && isElementInViewport())\"\n    class=\"circle-counter-value mat-h{{2}}\" \n    [ngStyle]=\"{'color':textColor}\">{{count}}</span>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Menu -->\n<div style=\"text-align:right\">\n  <a mat-icon-button href=\"https://github.com/fbaldo31/ngx-mat-circle-counter/blob/master/README.md\">\n    <mat-icon class=\"octicon octicon-file\"></mat-icon>\n  </a>\n  <a mat-icon-button href=\"https://github.com/fbaldo31/ngx-mat-circle-counter.git\">\n    <mat-icon class=\"octicon octicon-mark-github\"></mat-icon>\n  </a>\n</div>\n\n<!-- Title -->\n<div class=\"header\" style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  <img width=\"100\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n  </h1>\n</div>\n\n<!-- Doc  <section class=\"doc\">\n  <h2 class=\"mat-h2\">Installation  <pre><code>yarn add ngx-mat-circle-counter</code></pre></h2>\n  \n  Then import <pre><code> NgxMatCircleCounterModule</code></pre> in your <pre><code>app.module</code></pre>\n\n  <h2 class=\"mat-h2\">Documentation</h2>\n\n  <table>\n    <tr><th>Attributes</th><th>Type</th><th>Default value</th><th>Description</th></tr>\n    \n    <tr><td>start</td><td>number</td><td>0</td><td>The value from the counter starts</td></tr>\n    <tr><td>size</td><td>'xs' | 's' | 'm' | 'l' | 'xl'</td><td>'m'</td><td>From 100px to 300px</td></tr>\n    <tr><td>color</td><td>string</td><td>'primary'</td><td>Angular Material theme based color.</td></tr>\n    <tr><td>textColor</td><td>string</td><td>'' (black)</td><td>As there is no way to inherit font color from theme, put directly the font color there.</td></tr>\n    <tr><td>speed</td><td>number</td><td>10</td><td>Delay in millisecond to increase the counter.</td></tr>\n    <tr><td>value</td><td>number</td><td>100</td><td>The value to the counter ends</td></tr>\n    <tr><td>mode</td><td>'viewport' | 'pageinit'</td><td>'viewport'</td><td>In viewport mode, counter won't start untill it is visible.</td></tr>    \n  </table>\n</section> -->\n\n<section class=\"doc\">\n  <a mat-icon-button href=\"https://github.com/fbaldo31/ngx-mat-circle-counter/blob/master/README.md\">\n    Read documentation\n  </a>\n</section>\n\n<!-- Form -->\n<section class=\"aside\">\n    <h2 class=\"mat-h4\">Play with the API</h2>\n    <mat-form-field class=\"col-2\">\n      <mat-label>Start</mat-label>\n      <input matInput type=\"number\" name=\"start\" [(ngModel)]=\"start\" (change)=\"applyChanges()\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Size</mat-label>\n      <mat-select [(ngModel)]=\"size\" name=\"size\" (change)=\"applyChanges()\">\n        <mat-option [value]=\"'xs'\">xs</mat-option>\n        <mat-option [value]=\"'s'\">s</mat-option>\n        <mat-option [value]=\"'m'\" selected>m</mat-option>\n        <mat-option [value]=\"'l'\">l</mat-option>\n        <mat-option [value]=\"'xl'\">xl</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Color</mat-label>\n      <input matInput type=\"text\" name=\"color\" [(ngModel)]=\"color\" (change)=\"applyChanges()\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Text color</mat-label>\n      <input matInput type=\"text\" name=\"textColor\" [(ngModel)]=\"textColor\" (change)=\"applyChanges()\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Speed</mat-label>\n      <input matInput type=\"number\" name=\"speed\" [(ngModel)]=\"speed\" (change)=\"applyChanges()\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Value</mat-label>\n      <input matInput type=\"number\" name=\"value\" [(ngModel)]=\"value\" (change)=\"applyChanges()\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Mode</mat-label>\n      <mat-select [(ngModel)]=\"mode\" (change)=\"applyChanges()\">\n      <mat-option [value]=\"'pageinit'\">pageinit</mat-option>\n      <mat-option [value]=\"'viewport'\" selected>viewport</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Thickness</mat-label>\n      <input matInput type=\"number\" name=\"thickness\" [(ngModel)]=\"thickness\" min=\"1\" max=\"100\" (change)=\"applyChanges()\">\n    </mat-form-field>\n\n    <button mat-raised-button color=\"primary\" (click)=\"applyChanges()\">Apply Changes</button>\n  \n</section>\n\n<!-- Example -->\n<section class=\"main\">\n    <mat-grid-list cols=\"2\" rowHeight=\"1:1\">\n    <mat-grid-tile>\n      <div>\n        <pre class=\"code\">\n        <code>\n          &lt;ngx-mat-circle-counter \n            [start]=\"{{start}}\"\n            [color]=\"'{{color}}'\" \n            [textColor]=\"'{{textColor}}'\" \n            [size]=\"'{{size}}'\"\n            [speed]=\"{{speed}}\"\n            [value]=\"{{value}}\"\n            [mode]=\"{{mode}}\"\n            [thickness]=\"{{thickness}}\">\n          &lt;/ngx-mat-circle-counter>\n        </code>\n        </pre>\n          \n      </div>\n    </mat-grid-tile>\n    <mat-grid-tile>\n      <ngx-mat-circle-counter *ngIf=\"isVisible\"\n        [start]=\"start\"\n        [color]=\"color\" \n        [textColor]=\"textColor\" \n        [size]=\"size\"\n        [speed]=\"speed\"\n        [value]=\"value\"\n        [mode]=\"mode\"\n        [thickness]=\"thickness\"></ngx-mat-circle-counter>\n    </mat-grid-tile>\n  </mat-grid-list>\n\n</section>\n\n<footer>\n  &copy; 2019 All rights reserved.\n</footer>"

/***/ }),

/***/ "./projects/ngx-mat-circle-counter/src/lib/ngx-mat-circle-component.scss":
/*!*******************************************************************************!*\
  !*** ./projects/ngx-mat-circle-counter/src/lib/ngx-mat-circle-component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep {\n  /* SIZE M */\n}\n:host ::ng-deep .circle-counter-wrapper {\n  position: relative;\n}\n:host ::ng-deep .circle-counter-wrapper .circle-counter, :host ::ng-deep .circle-counter-wrapper .circle-counter-value {\n  position: absolute;\n}\n:host ::ng-deep .circle-counter-wrapper .circle-counter-value {\n  top: calc(50% + 35px);\n  font-size: 30px;\n  font-weight: bold;\n  text-align: center;\n}\n:host ::ng-deep .circle-counter-wrapper .circle-counter:nth-child(2) {\n  opacity: 0.35;\n}\n:host ::ng-deep .size-xs, :host ::ng-deep .size-xs .circle-counter, :host ::ng-deep .size-xs .circle-counter-value {\n  width: 100px !important;\n}\n:host ::ng-deep .size-xs .circle-counter-value, :host ::ng-deep .size-xs .circle-counter .circle-counter-value, :host ::ng-deep .size-xs .circle-counter-value .circle-counter-value {\n  top: calc(50% + 35px);\n  font-size: 35px;\n}\n:host ::ng-deep .size-s, :host ::ng-deep .size-s .circle-counter, :host ::ng-deep .size-s .circle-counter-value {\n  width: 150px !important;\n}\n:host ::ng-deep .size-s .circle-counter-value, :host ::ng-deep .size-s .circle-counter .circle-counter-value, :host ::ng-deep .size-s .circle-counter-value .circle-counter-value {\n  top: calc(50% + 60px);\n  font-size: 60px;\n}\n:host ::ng-deep .size-m, :host ::ng-deep .size-m .circle-counter, :host ::ng-deep .size-m .circle-counter-value {\n  width: 200px !important;\n}\n:host ::ng-deep .size-m .circle-counter-value, :host ::ng-deep .size-m .circle-counter .circle-counter-value, :host ::ng-deep .size-m .circle-counter-value .circle-counter-value {\n  top: calc(50% + 85px);\n  font-size: 70px;\n}\n:host ::ng-deep .size-l, :host ::ng-deep .size-l .circle-counter, :host ::ng-deep .size-l .circle-counter-value {\n  width: 250px !important;\n}\n:host ::ng-deep .size-l .circle-counter-value, :host ::ng-deep .size-l .circle-counter .circle-counter-value, :host ::ng-deep .size-l .circle-counter-value .circle-counter-value {\n  top: calc(50% + 110px);\n  font-size: 100px;\n}\n:host ::ng-deep .size-xl, :host ::ng-deep .size-xl .circle-counter, :host ::ng-deep .size-xl .circle-counter-value {\n  width: 300px !important;\n}\n:host ::ng-deep .size-xl .circle-counter-value, :host ::ng-deep .size-xl .circle-counter .circle-counter-value, :host ::ng-deep .size-xl .circle-counter-value .circle-counter-value {\n  top: calc(50% + 137px);\n  font-size: 125px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZyZWQvRG9jdW1lbnRzL3d3dy9Bbmd1bGFyLW1vZHVsZXMvbWF0LWNpcmNsZS1jb3VudGVyL3Byb2plY3RzL25neC1tYXQtY2lyY2xlLWNvdW50ZXIvc3JjL2xpYi9uZ3gtbWF0LWNpcmNsZS1jb21wb25lbnQuc2NzcyIsInByb2plY3RzL25neC1tYXQtY2lyY2xlLWNvdW50ZXIvc3JjL2xpYi9uZ3gtbWF0LWNpcmNsZS1jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQXFDSSxXQUFBO0FDbkNKO0FEREk7RUFDSSxrQkFBQTtBQ0dSO0FERFE7RUFDSSxrQkFBQTtBQ0daO0FERFE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDR1o7QURBUTtFQUNJLGFBQUE7QUNFWjtBREVJO0VBQ0ksdUJBQUE7QUNBUjtBREVRO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FDQVo7QURJSTtFQUNJLHVCQUFBO0FDRlI7QURJUTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBQ0ZaO0FET0k7RUFDSSx1QkFBQTtBQ0xSO0FET1E7RUFDSSxxQkFBQTtFQUNBLGVBQUE7QUNMWjtBRFNJO0VBQ0ksdUJBQUE7QUNQUjtBRFNRO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQ1BaO0FEV0k7RUFDSSx1QkFBQTtBQ1RSO0FEV1E7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0FDVFoiLCJmaWxlIjoicHJvamVjdHMvbmd4LW1hdC1jaXJjbGUtY291bnRlci9zcmMvbGliL25neC1tYXQtY2lyY2xlLWNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHtcbiAgICAuY2lyY2xlLWNvdW50ZXItd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgXG4gICAgICAgIC5jaXJjbGUtY291bnRlciwgLmNpcmNsZS1jb3VudGVyLXZhbHVlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuICAgICAgICAuY2lyY2xlLWNvdW50ZXItdmFsdWUge1xuICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSArIDM1cHgpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY2lyY2xlLWNvdW50ZXI6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMzU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnNpemUteHMsIC5zaXplLXhzIC5jaXJjbGUtY291bnRlciwgLnNpemUteHMgLmNpcmNsZS1jb3VudGVyLXZhbHVlIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgLmNpcmNsZS1jb3VudGVyLXZhbHVlIHtcbiAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgKyAzNXB4KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuc2l6ZS1zLCAuc2l6ZS1zIC5jaXJjbGUtY291bnRlciwgLnNpemUtcyAuY2lyY2xlLWNvdW50ZXItdmFsdWUge1xuICAgICAgICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcblxuICAgICAgICAuY2lyY2xlLWNvdW50ZXItdmFsdWUge1xuICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSArIDYwcHgpO1xuICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qIFNJWkUgTSAqL1xuICAgIC5zaXplLW0sIC5zaXplLW0gLmNpcmNsZS1jb3VudGVyLCAuc2l6ZS1tIC5jaXJjbGUtY291bnRlci12YWx1ZSB7XG4gICAgICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICAgICAgICBcbiAgICAgICAgLmNpcmNsZS1jb3VudGVyLXZhbHVlIHtcbiAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgKyA4NXB4KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zaXplLWwsIC5zaXplLWwgLmNpcmNsZS1jb3VudGVyLCAuc2l6ZS1sIC5jaXJjbGUtY291bnRlci12YWx1ZSB7XG4gICAgICAgIHdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgIC5jaXJjbGUtY291bnRlci12YWx1ZSB7XG4gICAgICAgICAgICB0b3A6IGNhbGMoNTAlICsgMTEwcHgpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMDBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zaXplLXhsLCAuc2l6ZS14bCAuY2lyY2xlLWNvdW50ZXIsIC5zaXplLXhsIC5jaXJjbGUtY291bnRlci12YWx1ZSB7XG4gICAgICAgIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgIC5jaXJjbGUtY291bnRlci12YWx1ZSB7XG4gICAgICAgICAgICB0b3A6IGNhbGMoNTAlICsgMTM3cHgpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMjVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIjpob3N0IDo6bmctZGVlcCB7XG4gIC8qIFNJWkUgTSAqL1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jaXJjbGUtY291bnRlci13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jaXJjbGUtY291bnRlci13cmFwcGVyIC5jaXJjbGUtY291bnRlciwgOmhvc3QgOjpuZy1kZWVwIC5jaXJjbGUtY291bnRlci13cmFwcGVyIC5jaXJjbGUtY291bnRlci12YWx1ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbjpob3N0IDo6bmctZGVlcCAuY2lyY2xlLWNvdW50ZXItd3JhcHBlciAuY2lyY2xlLWNvdW50ZXItdmFsdWUge1xuICB0b3A6IGNhbGMoNTAlICsgMzVweCk7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCAuY2lyY2xlLWNvdW50ZXItd3JhcHBlciAuY2lyY2xlLWNvdW50ZXI6bnRoLWNoaWxkKDIpIHtcbiAgb3BhY2l0eTogMC4zNTtcbn1cbjpob3N0IDo6bmctZGVlcCAuc2l6ZS14cywgOmhvc3QgOjpuZy1kZWVwIC5zaXplLXhzIC5jaXJjbGUtY291bnRlciwgOmhvc3QgOjpuZy1kZWVwIC5zaXplLXhzIC5jaXJjbGUtY291bnRlci12YWx1ZSB7XG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zaXplLXhzIC5jaXJjbGUtY291bnRlci12YWx1ZSwgOmhvc3QgOjpuZy1kZWVwIC5zaXplLXhzIC5jaXJjbGUtY291bnRlciAuY2lyY2xlLWNvdW50ZXItdmFsdWUsIDpob3N0IDo6bmctZGVlcCAuc2l6ZS14cyAuY2lyY2xlLWNvdW50ZXItdmFsdWUgLmNpcmNsZS1jb3VudGVyLXZhbHVlIHtcbiAgdG9wOiBjYWxjKDUwJSArIDM1cHgpO1xuICBmb250LXNpemU6IDM1cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnNpemUtcywgOmhvc3QgOjpuZy1kZWVwIC5zaXplLXMgLmNpcmNsZS1jb3VudGVyLCA6aG9zdCA6Om5nLWRlZXAgLnNpemUtcyAuY2lyY2xlLWNvdW50ZXItdmFsdWUge1xuICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuc2l6ZS1zIC5jaXJjbGUtY291bnRlci12YWx1ZSwgOmhvc3QgOjpuZy1kZWVwIC5zaXplLXMgLmNpcmNsZS1jb3VudGVyIC5jaXJjbGUtY291bnRlci12YWx1ZSwgOmhvc3QgOjpuZy1kZWVwIC5zaXplLXMgLmNpcmNsZS1jb3VudGVyLXZhbHVlIC5jaXJjbGUtY291bnRlci12YWx1ZSB7XG4gIHRvcDogY2FsYyg1MCUgKyA2MHB4KTtcbiAgZm9udC1zaXplOiA2MHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zaXplLW0sIDpob3N0IDo6bmctZGVlcCAuc2l6ZS1tIC5jaXJjbGUtY291bnRlciwgOmhvc3QgOjpuZy1kZWVwIC5zaXplLW0gLmNpcmNsZS1jb3VudGVyLXZhbHVlIHtcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnNpemUtbSAuY2lyY2xlLWNvdW50ZXItdmFsdWUsIDpob3N0IDo6bmctZGVlcCAuc2l6ZS1tIC5jaXJjbGUtY291bnRlciAuY2lyY2xlLWNvdW50ZXItdmFsdWUsIDpob3N0IDo6bmctZGVlcCAuc2l6ZS1tIC5jaXJjbGUtY291bnRlci12YWx1ZSAuY2lyY2xlLWNvdW50ZXItdmFsdWUge1xuICB0b3A6IGNhbGMoNTAlICsgODVweCk7XG4gIGZvbnQtc2l6ZTogNzBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuc2l6ZS1sLCA6aG9zdCA6Om5nLWRlZXAgLnNpemUtbCAuY2lyY2xlLWNvdW50ZXIsIDpob3N0IDo6bmctZGVlcCAuc2l6ZS1sIC5jaXJjbGUtY291bnRlci12YWx1ZSB7XG4gIHdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zaXplLWwgLmNpcmNsZS1jb3VudGVyLXZhbHVlLCA6aG9zdCA6Om5nLWRlZXAgLnNpemUtbCAuY2lyY2xlLWNvdW50ZXIgLmNpcmNsZS1jb3VudGVyLXZhbHVlLCA6aG9zdCA6Om5nLWRlZXAgLnNpemUtbCAuY2lyY2xlLWNvdW50ZXItdmFsdWUgLmNpcmNsZS1jb3VudGVyLXZhbHVlIHtcbiAgdG9wOiBjYWxjKDUwJSArIDExMHB4KTtcbiAgZm9udC1zaXplOiAxMDBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuc2l6ZS14bCwgOmhvc3QgOjpuZy1kZWVwIC5zaXplLXhsIC5jaXJjbGUtY291bnRlciwgOmhvc3QgOjpuZy1kZWVwIC5zaXplLXhsIC5jaXJjbGUtY291bnRlci12YWx1ZSB7XG4gIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zaXplLXhsIC5jaXJjbGUtY291bnRlci12YWx1ZSwgOmhvc3QgOjpuZy1kZWVwIC5zaXplLXhsIC5jaXJjbGUtY291bnRlciAuY2lyY2xlLWNvdW50ZXItdmFsdWUsIDpob3N0IDo6bmctZGVlcCAuc2l6ZS14bCAuY2lyY2xlLWNvdW50ZXItdmFsdWUgLmNpcmNsZS1jb3VudGVyLXZhbHVlIHtcbiAgdG9wOiBjYWxjKDUwJSArIDEzN3B4KTtcbiAgZm9udC1zaXplOiAxMjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./projects/ngx-mat-circle-counter/src/lib/ngx-mat-circle-counter.component.ts":
/*!*************************************************************************************!*\
  !*** ./projects/ngx-mat-circle-counter/src/lib/ngx-mat-circle-counter.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SizeConverter, NgxMatCircleCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeConverter", function() { return SizeConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatCircleCounterComponent", function() { return NgxMatCircleCounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var SizeConverter;
(function (SizeConverter) {
    SizeConverter[SizeConverter["xs"] = 100] = "xs";
    SizeConverter[SizeConverter["s"] = 150] = "s";
    SizeConverter[SizeConverter["m"] = 200] = "m";
    SizeConverter[SizeConverter["l"] = 250] = "l";
    SizeConverter[SizeConverter["xl"] = 300] = "xl";
})(SizeConverter || (SizeConverter = {}));
let NgxMatCircleCounterComponent = class NgxMatCircleCounterComponent {
    constructor(hostElement) {
        this.hostElement = hostElement;
        this.start = 0;
        this.color = 'primary';
        this.textColor = '';
        this.speed = 10;
        this.value = 100;
        this.mode = 'pageinit';
        this.thickness = 10;
        this.count = 0;
        this.percent = 0;
        this.onWindowChange = () => {
            if (this.mode !== 'viewport') {
                return;
            }
            if (!this.animationHasRun && this.isElementInViewport()) {
                this.startAnimation();
            }
        };
    }
    ngOnInit() {
        this.sizeClass = 'size-' + (this.size || 'm');
        this.sizeNumber = +SizeConverter[(this.size || 'm')];
        // console.log('size', this.size);
        if (this.mode === 'pageinit') {
            this.startAnimation();
        }
    }
    startAnimation() {
        this.animationHasRun = true;
        // Start
        const interval = setInterval(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.count++;
            this.percent = +((this.count / this.value) * 100).toFixed(0);
            // End
            if (this.count === this.value) {
                // console.log('End');
                clearInterval(interval);
            }
            // console.log(this.count === this.value, this.count, this.percent + ' %');
        }), this.speed);
    }
    listenEvents() {
        if (this.mode !== 'viewport') {
            return;
        }
        if (!this.animationHasRun && this.isElementInViewport()) {
            this.startAnimation();
        }
    }
    isElementInViewport() {
        // console.log('viewport', this.size);
        const rect = this.hostElement.nativeElement.getBoundingClientRect();
        // tslint:disable-next-line
        return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    }
};
NgxMatCircleCounterComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxMatCircleCounterComponent.prototype, "start", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxMatCircleCounterComponent.prototype, "size", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxMatCircleCounterComponent.prototype, "color", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxMatCircleCounterComponent.prototype, "textColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxMatCircleCounterComponent.prototype, "speed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxMatCircleCounterComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxMatCircleCounterComponent.prototype, "mode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxMatCircleCounterComponent.prototype, "thickness", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], NgxMatCircleCounterComponent.prototype, "onWindowChange", void 0);
NgxMatCircleCounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'ngx-mat-circle-counter',
        template: __webpack_require__(/*! raw-loader!./ngx-mat-circle-component.html */ "./node_modules/raw-loader/index.js!./projects/ngx-mat-circle-counter/src/lib/ngx-mat-circle-component.html"),
        styles: [__webpack_require__(/*! ./ngx-mat-circle-component.scss */ "./projects/ngx-mat-circle-counter/src/lib/ngx-mat-circle-component.scss")]
    })
], NgxMatCircleCounterComponent);



/***/ }),

/***/ "./projects/ngx-mat-circle-counter/src/lib/ngx-mat-circle-counter.module.ts":
/*!**********************************************************************************!*\
  !*** ./projects/ngx-mat-circle-counter/src/lib/ngx-mat-circle-counter.module.ts ***!
  \**********************************************************************************/
/*! exports provided: NgxMatCircleCounterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatCircleCounterModule", function() { return NgxMatCircleCounterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _ngx_mat_circle_counter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngx-mat-circle-counter.component */ "./projects/ngx-mat-circle-counter/src/lib/ngx-mat-circle-counter.component.ts");





let NgxMatCircleCounterModule = class NgxMatCircleCounterModule {
};
NgxMatCircleCounterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ngx_mat_circle_counter_component__WEBPACK_IMPORTED_MODULE_4__["NgxMatCircleCounterComponent"]],
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_ngx_mat_circle_counter_component__WEBPACK_IMPORTED_MODULE_4__["NgxMatCircleCounterComponent"]]
    })
], NgxMatCircleCounterModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep {\n  /* MD Styles */\n}\n:host ::ng-deep .header, :host ::ng-deep .doc {\n  margin-top: -30px;\n}\n:host ::ng-deep .header h1 {\n  height: 100px;\n}\n:host ::ng-deep .header h1 img {\n  vertical-align: middle;\n}\n:host ::ng-deep section, :host ::ng-deep footer {\n  padding: 10px;\n  padding-left: 30px;\n}\n:host ::ng-deep section.aside mat-form-field {\n  margin-right: 10px;\n  width: 85px;\n  margin-bottom: 20px;\n}\n:host ::ng-deep section.main {\n  width: 70%;\n  margin-left: 10%;\n  margin-top: -70px;\n}\n:host ::ng-deep section.main .code {\n  width: 350px;\n}\n:host ::ng-deep section.main ngx-mat-circle-counter {\n  margin-top: -50%;\n}\n:host ::ng-deep section.main .circle-counter-wrapper.size-xl {\n  margin-top: -20px;\n}\n:host ::ng-deep pre code {\n  margin: 0;\n  padding: 0;\n  white-space: pre;\n  border: none;\n  background: transparent;\n}\n:host ::ng-deep pre, :host ::ng-deep footer {\n  background-color: #f8f8f8;\n  border: 1px solid #cccccc;\n  font-size: 13px;\n  line-height: 19px;\n  overflow: auto;\n  padding: 6px 10px;\n  border-radius: 3px;\n  display: inline-table;\n}\n:host ::ng-deep pre code, :host ::ng-deep pre tt {\n  background-color: transparent;\n  border: none;\n}\n:host ::ng-deep table {\n  padding: 0;\n}\n:host ::ng-deep table tr {\n  border-top: 1px solid #cccccc;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n}\n:host ::ng-deep table tr:nth-child(2n) {\n  background-color: #f8f8f8;\n}\n:host ::ng-deep table tr th {\n  font-weight: bold;\n  border: 1px solid #cccccc;\n  text-align: left;\n  margin: 0;\n  padding: 6px 13px;\n}\n:host ::ng-deep table tr th :first-child, :host ::ng-deep table tr th table tr td :first-child {\n  margin-top: 0;\n}\n:host ::ng-deep table tr th :last-child, :host ::ng-deep table tr th table tr td :last-child {\n  margin-bottom: 0;\n}\n:host ::ng-deep table tr td {\n  border: 1px solid #cccccc;\n  text-align: left;\n  margin: 0;\n  padding: 6px 13px;\n}\n:host ::ng-deep footer {\n  width: 100%;\n  height: 200px;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZyZWQvRG9jdW1lbnRzL3d3dy9Bbmd1bGFyLW1vZHVsZXMvbWF0LWNpcmNsZS1jb3VudGVyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFnREksY0FBQTtBQzlDSjtBRERJO0VBQ0ksaUJBQUE7QUNHUjtBREFRO0VBQ0ksYUFBQTtBQ0VaO0FEQVk7RUFDSSxzQkFBQTtBQ0VoQjtBREVJO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FDQVI7QURPUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDTFo7QURTSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDUFI7QURVUTtFQUNJLFlBQUE7QUNSWjtBRFdRO0VBQ0ksZ0JBQUE7QUNUWjtBRFlRO0VBQ0ksaUJBQUE7QUNWWjtBRGVJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ2JSO0FEZ0JJO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNkUjtBRGdCUTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBQ2RWO0FEZ0JJO0VBQ0ksVUFBQTtBQ2RSO0FEZ0JRO0VBQ0ksNkJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDZFo7QURnQlk7RUFDSSx5QkFBQTtBQ2RoQjtBRGVZO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDYmhCO0FEZWdCO0VBQ0ksYUFBQTtBQ2JwQjtBRGNnQjtFQUNJLGdCQUFBO0FDWnBCO0FEZVk7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDYmhCO0FEaUJJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FDZlIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAgIC5oZWFkZXIsIC5kb2Mge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICB9XG4gICAgLmhlYWRlciB7ICAgICAgICBcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICBcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzZWN0aW9uLCBmb290ZXIge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgfVxuICAgIFxuICAgIHNlY3Rpb24uYXNpZGUge1xuICAgICAgICAvLyB3aWR0aDogMjAlO1xuICAgICAgICAvLyBmbG9hdDogbGVmdDtcbiAgICBcbiAgICAgICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDg1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNlY3Rpb24ubWFpbiB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IC03MHB4O1xuICAgICAgICAvLyBmbG9hdDogcmlnaHQ7XG5cbiAgICAgICAgLmNvZGUge1xuICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIG5neC1tYXQtY2lyY2xlLWNvdW50ZXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTUwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaXJjbGUtY291bnRlci13cmFwcGVyLnNpemUteGwge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBNRCBTdHlsZXMgKi9cbiAgICBwcmUgY29kZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgXG4gICAgfVxuXG4gICAgcHJlLCBmb290ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xuICAgIH1cbiAgICAgICAgcHJlIGNvZGUsIHByZSB0dCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiBub25lOyB9XG4gICAgXG4gICAgdGFibGUge1xuICAgICAgICBwYWRkaW5nOiAwOyBcblxuICAgICAgICB0ciB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjY2NjYztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMm4pIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4OyB9XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggMTNweDtcblxuICAgICAgICAgICAgICAgIDpmaXJzdC1jaGlsZCwgdGFibGUgdHIgdGQgOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDsgfVxuICAgICAgICAgICAgICAgIDpsYXN0LWNoaWxkLCB0YWJsZSB0ciB0ZCA6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDEzcHg7IH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvb3RlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBib3R0b206IDA7XG4gICAgfVxufSIsIjpob3N0IDo6bmctZGVlcCB7XG4gIC8qIE1EIFN0eWxlcyAqL1xufVxuOmhvc3QgOjpuZy1kZWVwIC5oZWFkZXIsIDpob3N0IDo6bmctZGVlcCAuZG9jIHtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmhlYWRlciBoMSB7XG4gIGhlaWdodDogMTAwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmhlYWRlciBoMSBpbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuOmhvc3QgOjpuZy1kZWVwIHNlY3Rpb24sIDpob3N0IDo6bmctZGVlcCBmb290ZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgc2VjdGlvbi5hc2lkZSBtYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDg1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgc2VjdGlvbi5tYWluIHtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXRvcDogLTcwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgc2VjdGlvbi5tYWluIC5jb2RlIHtcbiAgd2lkdGg6IDM1MHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIHNlY3Rpb24ubWFpbiBuZ3gtbWF0LWNpcmNsZS1jb3VudGVyIHtcbiAgbWFyZ2luLXRvcDogLTUwJTtcbn1cbjpob3N0IDo6bmctZGVlcCBzZWN0aW9uLm1haW4gLmNpcmNsZS1jb3VudGVyLXdyYXBwZXIuc2l6ZS14bCB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIHByZSBjb2RlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIHByZSwgOmhvc3QgOjpuZy1kZWVwIGZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG59XG46aG9zdCA6Om5nLWRlZXAgcHJlIGNvZGUsIDpob3N0IDo6bmctZGVlcCBwcmUgdHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xufVxuOmhvc3QgOjpuZy1kZWVwIHRhYmxlIHtcbiAgcGFkZGluZzogMDtcbn1cbjpob3N0IDo6bmctZGVlcCB0YWJsZSB0ciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIHRhYmxlIHRyOm50aC1jaGlsZCgybikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xufVxuOmhvc3QgOjpuZy1kZWVwIHRhYmxlIHRyIHRoIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNnB4IDEzcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgdGFibGUgdHIgdGggOmZpcnN0LWNoaWxkLCA6aG9zdCA6Om5nLWRlZXAgdGFibGUgdHIgdGggdGFibGUgdHIgdGQgOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbjpob3N0IDo6bmctZGVlcCB0YWJsZSB0ciB0aCA6bGFzdC1jaGlsZCwgOmhvc3QgOjpuZy1kZWVwIHRhYmxlIHRyIHRoIHRhYmxlIHRyIHRkIDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbjpob3N0IDo6bmctZGVlcCB0YWJsZSB0ciB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNnB4IDEzcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvdHRvbTogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ngx-mat-circle-counter';
        // Controls
        this.start = 0;
        this.size = 'm';
        this.color = 'primary';
        this.textColor = '';
        this.speed = 10;
        this.value = 100;
        this.mode = 'pageinit';
        this.thickness = 10;
        this.isVisible = true;
    }
    applyChanges() {
        this.isVisible = false;
        setTimeout(() => this.isVisible = true, 1);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _projects_ngx_mat_circle_counter_src_lib_ngx_mat_circle_counter_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../projects/ngx-mat-circle-counter/src/lib/ngx-mat-circle-counter.module */ "./projects/ngx-mat-circle-counter/src/lib/ngx-mat-circle-counter.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _projects_ngx_mat_circle_counter_src_lib_ngx_mat_circle_counter_module__WEBPACK_IMPORTED_MODULE_6__["NgxMatCircleCounterModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/fred/Documents/www/Angular-modules/mat-circle-counter/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map