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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: luohong\n * @Date: 2019-08-12 09:09:29\n * @LastEditors: luohong\n * @LastEditTime: 2019-08-13 14:51:12\n * @Description: \n * @email: 3300536651@qq.com\n -->\n<nz-layout class=\"layout-wrap\">\n  <nz-header>\n    <div class=\"logo\">\n      <i nz-icon nzType=\"layout\" nzTheme=\"outline\"></i>\n      <span>可视化布局</span>\n    </div>\n    <div class=\"header-menu\">\n      <a class=\"item\" href=\"https://github.com/luohong123/AngularDragLayout\" target=\"_blank\" nzPlacement=\"left\"\n        nz-tooltip nzTitle=\"github\">\n        <i nz-icon class=\"header-icon\" nzType=\"github\" nzTheme=\"outline\"></i>\n      </a>\n      <nz-button-group class=\"item\" nzSize=\"small\">\n        <button nz-button nzType=\"default\"><i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>编辑</button>\n        <button nz-button nzType=\"default\"><i nz-icon nzType=\"form\" nzTheme=\"outline\"></i>布局编辑</button>\n        <button nz-button nzType=\"default\" (click)=\"preview()\"><i nz-icon nzType=\"eye\" nzTheme=\"outline\"></i>预览</button>\n      </nz-button-group>\n      <nz-button-group class=\"item\" nzSize=\"small\">\n        <button nz-button nzType=\"default\" (click)=\"openCode()\"><i nz-icon nzType=\"code\"\n            nzTheme=\"outline\"></i>CODE</button>\n        <button nz-button nzType=\"default\"><i nz-icon nzType=\"cloud-download\" nzTheme=\"outline\"></i>下载</button>\n        <button nz-button nzType=\"default\"><i nz-icon nzType=\"save\" nzTheme=\"outline\"></i>保存</button>\n        <button nz-button nzType=\"default\" (click)=\"empty()\"><i nz-icon nzType=\"delete\"\n            nzTheme=\"outline\"></i>清空</button>\n      </nz-button-group>\n      <nz-button-group class=\"item\" nzSize=\"small\">\n        <button nz-button nzType=\"default\"><i nz-icon nzType=\"rollback\" nzTheme=\"outline\"></i>撤销</button>\n        <button nz-button nzType=\"default\"><i nz-icon nzType=\"retweet\" nzTheme=\"outline\"></i>重做</button>\n      </nz-button-group>\n    </div>\n  </nz-header>\n  <nz-layout>\n    <!-- 拖拽组件 -->\n    <nz-sider nzWidth=\"200px\">\n      <ul nz-menu nzMode=\"inline\" nzTheme=\"light\" class=\"sider-menu\">\n        <li nz-menu-item>\n          <nz-select style=\"width: 100px;\" nzSize=\"small\" [(ngModel)]=\"selectedUi\" nzAllowClear nzPlaceHolder=\"请选择UI组件\">\n            <nz-option [nzValue]=\"item.value\" [nzLabel]=\"item.label\" *ngFor=\"let item of uiTypes \"></nz-option>\n          </nz-select>\n          - UI\n        </li>\n        <li nz-submenu nzOpen nzIcon=\"user\" nzTitle=\"布局设置\">\n          <ul>\n            <li nz-menu-item>\n              <input nz-input class=\"grid-setting\" [(ngModel)]=\"grid1\" nzSize=\"small\" />\n              <drag-button class=\"drag\" [draggable]=\"true\" dragName=\"grid1\">\n              </drag-button>\n            </li>\n            <li nz-menu-item>\n              <input nz-input class=\"grid-setting\" [(ngModel)]=\"grid2\" nzSize=\"small\" />\n              <drag-button class=\"drag\" [draggable]=\"true\" dragName=\"grid2\"></drag-button>\n            </li>\n            <li nz-menu-item>\n              <input nz-input class=\"grid-setting\" [(ngModel)]=\"grid2\" nzSize=\"small\" />\n              <drag-button class=\"drag\" [draggable]=\"true\" dragName=\"grid3\"></drag-button>\n            </li>\n            <li nz-menu-item>\n              <input nz-input class=\"grid-setting\" [(ngModel)]=\"grid2\" nzSize=\"small\" />\n              <drag-button class=\"drag\" [draggable]=\"true\" dragName=\"grid4\"></drag-button>\n            </li>\n          </ul>\n        </li>\n        <li nz-submenu nzOpen nzTitle=\"通用\" nzIcon=\"laptop\">\n          <ul>\n            <li nz-menu-item>\n              <antd-button-ui [draggable]=\"true\" dragName=\"button\"></antd-button-ui>\n              <!-- <drag-button class=\"drag\" [draggable]=\"true\" dragName=\"button\">\n              </drag-button> -->\n            </li>\n            <li nz-menu-item>\n              图标\n              <drag-button class=\"drag\" [draggable]=\"true\" dragName=\"icon\">\n              </drag-button>\n            </li>\n            <li nz-menu-item>\n              评分\n              <drag-button class=\"drag\" [draggable]=\"true\" dragName=\"rate\">\n              </drag-button>\n            </li>\n          </ul>\n        </li>\n        <li nz-submenu nzOpen nzTitle=\"subnav 3\" nzIcon=\"notification\">\n          <ul>\n            <li nz-menu-item>option9</li>\n          </ul>\n        </li>\n      </ul>\n    </nz-sider>\n    <nz-layout class=\"inner-layout\">\n      <nz-content class=\"container\" #container (dragover)=\"dragover_handler($event)\"\n        (dragenter)=\"dragenter_handler($event)\" (drop)=\"drop_handler($event)\">\n        <!-- 拖拽组件到这里 -->\n\n      </nz-content>\n    </nz-layout>\n    <!-- 定义组件属性 -->\n    <nz-sider nzWidth=\"200px\">\n      <ul nz-menu nzMode=\"inline\" nzTheme=\"light\" class=\"sider-menu\">\n        <li nz-menu-item nzSelected>\n          <nz-select style=\"width: 100px;\" nzSize=\"small\" [(ngModel)]=\"componentType\" nzAllowClear\n            nzPlaceHolder=\"请选择UI组件\">\n            <nz-option [nzValue]=\"item.value\" [nzLabel]=\"item.label\" *ngFor=\"let item of componentMarks\"></nz-option>\n          </nz-select>\n          {{selectedComponent}}\n        </li>\n        <li nz-menu-item [nzSelected]=\"false\">\n          大小-\n          <nz-select style=\"width: 120px;\" [(ngModel)]=\"selectedSize\" (ngModelChange)=\"propertyChange($event,'size')\"\n            nzSize=\"small\" nzAllowClear nzPlaceHolder=\"请选择大小\">\n            <nz-option [nzValue]=\"item.value\" [nzLabel]=\"item.label\" *ngFor=\"let item of properties.size\"></nz-option>\n          </nz-select>\n        </li>\n      </ul>\n\n    </nz-sider>\n  </nz-layout>\n</nz-layout>\n\n<!-- 预览代码 -->\n<nz-drawer #previewCodeDrawer [ngStyle]=\"{ 'height': '0'}\" [nzMask]=\"true\" [nzClosable]=\"true\"\n  nzWrapClassName=\"copyCode\" [nzVisible]=\"visible\" [nzPlacement]=\"placement\" nzTitle=\"代码预览\" (nzOnClose)=\"closeCode()\"\n  [nzBodyStyle]=\"{'overflow':'auto','height': '200px' }\">\n  <i nzTitle=\"复制代码\" nz-tooltip nz-icon [nzType]=\"copied ? 'check' : 'snippets'\" class=\"code-box-code-copy\"\n    [ngStyle]=\"{'cursor':'pointer'}\" [class.ant-tooltip-open]=\"copied\" (click)=\"copyCode(nzRawCode)\"></i>\n  <div>\n    <pre class=\"language-angular\"><code [innerText]=\"code1\"></code></pre>\n  </div>\n</nz-drawer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/drag-button/drag-button.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/drag-button/drag-button.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button nz-button nzType=\"primary\" nzSize=\"small\" nz-tooltip nzTitle=\"拖动\"  class=\"drag-button\"><i nz-icon nzType=\"drag\"></i></button>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
 * @Author: luohong
 * @Date: 2019-08-07 10:32:58
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-12 18:02:06
 * @Description:
 * @email: 3300536651@qq.com
 */


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layout-wrap {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.logo {\n  height: 64px;\n  line-height: 64px;\n  margin: 16px 30px 16px 0;\n  float: left;\n  color: #fff;\n  font-size: 26px;\n  margin: 0 20px 0 0;\n  white-space: nowrap;\n  font-family: \"IBM Plex Mono ExtraLight\", \"Segoe UI\", \"Helvetica Neue\", Helvetica, Roboto, 'Open Sans', FreeSans, sans-serif;\n  font-style: italic;\n}\n.logo i {\n  margin-right: 5px;\n}\n.layout-wrap .ant-layout-header {\n  padding-left: 20px;\n  background: #1890ff;\n}\n.header-menu {\n  line-height: 64px;\n  background-color: #1890ff;\n}\n.header-menu .item {\n  margin-right: 20px;\n  color: #fff;\n}\n.header-menu .header-icon {\n  font-size: 22px;\n}\n.sider-menu {\n  overflow: auto;\n  height: 100%;\n  border-right: 0;\n  border-left: 1px solid #ebedf0;\n}\n.sider-menu .drag {\n  position: absolute;\n  right: 5px;\n  top: 1px;\n}\n.inner-layout {\n  padding: 20px;\n  background: #fff;\n}\n.inner-layout .container {\n  position: relative;\n  background: transparent;\n  border: 2px solid #bec8c8;\n  padding: 30px 20px;\n  height: 100%;\n  overflow: auto;\n  border-radius: 8px;\n}\n.inner-layout .container::after {\n  content: 'container';\n  height: 22px;\n  line-height: 22px;\n  padding: 0 2px;\n  background-color: #bec8c8;\n  color: #fff;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-bottom-right-radius: 2px;\n}\nnz-breadcrumb {\n  margin: 16px 0;\n}\nnz-content {\n  background: #fff;\n  padding: 24px;\n  min-height: 280px;\n}\n.grid-setting {\n  width: 100px;\n}\n:host ::ng-deep .ant-drawer-top.ant-drawer-open,\n:host ::ng-deep .ant-drawer-bottom.ant-drawer-open {\n  height: 0 !important;\n}\n:global .ant-drawer {\n  height: 0 !important;\n}\n:host ::ng-deep .ant-drawer {\n  height: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvaG9uZ2hvbmcvZ2l0aHViL25nYW50ZC1kcmFnLWZvcm0vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkhBQUE7RUFDQSxrQkFBQTtBQ0FGO0FER0E7RUFDRSxpQkFBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDRkY7QURLQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUNIRjtBREtFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDSEo7QURPQTtFQUNFLGVBQUE7QUNMRjtBRFFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNORjtBRFNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ1BGO0FEVUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNSRjtBRFlBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDVkY7QURhQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSwrQkFBQTtBQ1hGO0FEY0E7RUFDRSxjQUFBO0FDWkY7QURlQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDYkY7QURpQkE7RUFDRSxZQUFBO0FDZkY7QURtQkE7O0VBRUUsb0JBQUE7QUNqQkY7QURvQkE7RUFDRSxvQkFBQTtBQ2xCRjtBRHFCQTtFQUNFLG9CQUFBO0FDbkJGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmxheW91dC13cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxvZ28ge1xuICBoZWlnaHQ6IDY0cHg7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDE2cHggMzBweCAxNnB4IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBtYXJnaW46IDAgMjBweCAwIDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IE1vbm8gRXh0cmFMaWdodFwiLCBcIlNlZ29lIFVJXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBSb2JvdG8sICdPcGVuIFNhbnMnLCBGcmVlU2Fucywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubG9nbyBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5sYXlvdXQtd3JhcCAuYW50LWxheW91dC1oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMxODkwZmY7XG59XG5cbi5oZWFkZXItbWVudSB7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5MGZmO1xuXG4gICYgLml0ZW0ge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuXG4uaGVhZGVyLW1lbnUgLmhlYWRlci1pY29uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uc2lkZXItbWVudSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWJlZGYwO1xufVxuXG4uc2lkZXItbWVudSAuZHJhZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiAxcHg7XG59XG5cbi5pbm5lci1sYXlvdXQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAvLyBiYWNrZ3JvdW5kOiAjMjIyODMxO1xufVxuXG4uaW5uZXItbGF5b3V0IC5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTkwLCAyMDAsIDIwMCk7XG4gIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uaW5uZXItbGF5b3V0IC5jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogJ2NvbnRhaW5lcic7XG4gIGhlaWdodDogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIHBhZGRpbmc6IDAgMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkwLCAyMDAsIDIwMCk7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJweDtcbn1cblxubnotYnJlYWRjcnVtYiB7XG4gIG1hcmdpbjogMTZweCAwO1xufVxuXG5uei1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMjRweDtcbiAgbWluLWhlaWdodDogMjgwcHg7XG59XG5cbi8vIOWIoOagvOiuvue9rlxuLmdyaWQtc2V0dGluZyB7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuXG46aG9zdCA6Om5nLWRlZXAgLmFudC1kcmF3ZXItdG9wLmFudC1kcmF3ZXItb3Blbixcbjpob3N0IDo6bmctZGVlcCAuYW50LWRyYXdlci1ib3R0b20uYW50LWRyYXdlci1vcGVuIHtcbiAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbjpnbG9iYWwgLmFudC1kcmF3ZXIge1xuICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtZHJhd2VyIHtcbiAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG4iLCIubGF5b3V0LXdyYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmxvZ28ge1xuICBoZWlnaHQ6IDY0cHg7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDE2cHggMzBweCAxNnB4IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBtYXJnaW46IDAgMjBweCAwIDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IE1vbm8gRXh0cmFMaWdodFwiLCBcIlNlZ29lIFVJXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBSb2JvdG8sICdPcGVuIFNhbnMnLCBGcmVlU2Fucywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmxvZ28gaSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmxheW91dC13cmFwIC5hbnQtbGF5b3V0LWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgYmFja2dyb3VuZDogIzE4OTBmZjtcbn1cbi5oZWFkZXItbWVudSB7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5MGZmO1xufVxuLmhlYWRlci1tZW51IC5pdGVtIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkZXItbWVudSAuaGVhZGVyLWljb24ge1xuICBmb250LXNpemU6IDIycHg7XG59XG4uc2lkZXItbWVudSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWJlZGYwO1xufVxuLnNpZGVyLW1lbnUgLmRyYWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogMXB4O1xufVxuLmlubmVyLWxheW91dCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uaW5uZXItbGF5b3V0IC5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjYmVjOGM4O1xuICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5pbm5lci1sYXlvdXQgLmNvbnRhaW5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiAnY29udGFpbmVyJztcbiAgaGVpZ2h0OiAyMnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgcGFkZGluZzogMCAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZWM4Yzg7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJweDtcbn1cbm56LWJyZWFkY3J1bWIge1xuICBtYXJnaW46IDE2cHggMDtcbn1cbm56LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAyNHB4O1xuICBtaW4taGVpZ2h0OiAyODBweDtcbn1cbi5ncmlkLXNldHRpbmcge1xuICB3aWR0aDogMTAwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC1kcmF3ZXItdG9wLmFudC1kcmF3ZXItb3Blbixcbjpob3N0IDo6bmctZGVlcCAuYW50LWRyYXdlci1ib3R0b20uYW50LWRyYXdlci1vcGVuIHtcbiAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG46Z2xvYmFsIC5hbnQtZHJhd2VyIHtcbiAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC1kcmF3ZXIge1xuICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _core_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/common/common.service */ "./src/app/core/common/common.service.ts");
/* harmony import */ var _core_service_aditem_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/service/aditem.service */ "./src/app/core/service/aditem.service.ts");
/* harmony import */ var _core_components_preview_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/preview/preview.component */ "./src/app/core/components/preview/preview.component.ts");
/* harmony import */ var _core_service_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/service/store.service */ "./src/app/core/service/store.service.ts");
/* harmony import */ var _core_service_share_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/service/share.service */ "./src/app/core/service/share.service.ts");

/*
 * @Author: luohong
 * @Date: 2019-08-07 10:32:58
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-14 17:22:13
 * @Description:
 * @email: 3300536651@qq.com
 */








var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, injector, componentFactoryResolver, storeService, commonService, dom, modalService, shareService, message, cdr, aditemService) {
        var _this = this;
        this.renderer = renderer;
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
        this.storeService = storeService;
        this.commonService = commonService;
        this.dom = dom;
        this.modalService = modalService;
        this.shareService = shareService;
        this.message = message;
        this.cdr = cdr;
        this.aditemService = aditemService;
        // 预览代码
        this.visible = false;
        // 抽屉位置
        this.placement = 'bottom';
        // 复制
        this.copied = false;
        // 标题
        this.title = 'AngularDragLayout';
        // 删格 24
        this.grid1 = '24';
        this.grid2 = '12 12';
        // 代码
        this.code1 = '';
        // UI类型
        this.uiTypes = [{
                value: 'antd', label: 'Ant Design'
            }, {
                value: 'materil', label: 'Material'
            }];
        // UI组件
        this.selectedUi = this.uiTypes[0].value;
        // 选中的组件
        this.selectedComponent = '';
        // 组件标志
        this.componentMarks = [{
                label: '属性',
                value: 'property'
            }, {
                label: '其它',
                value: 'other'
            }];
        // 组件标志类型
        this.componentType = this.componentMarks[0].value;
        // 存动态组件
        this.dynamicComponents = [];
        // 属性
        this.properties = {
            size: [
                { label: '大', value: 'big' },
                { label: '默认', value: 'default' },
                { label: '小', value: 'small' }
            ]
        };
        // 是否插槽
        this.isSlot = 'N';
        this.shareService.subject.subscribe(function (data) {
            switch (data.eventName) {
                case 'grid1': // 动态添加子组件，潜入到删格组件中
                    // let component = this.ads.filter(item => {
                    //   return item.data['name'] === event.dataTransfer.types[0]
                    // })
                    _this.isSlot = 'Y';
                    _this.slotId = data.param.id;
                    var gridRef = data.param.ref;
                    _this.loadDynamicComponent(_this.ads[1].component, gridRef, _this.ads[1], data.param.renderer);
                    break;
                default:
                    break;
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.ads = this.aditemService.getAds();
        localStorage.setItem('store', JSON.stringify(this.storeService.state));
        // 从缓存中读取组件
        // 根据ui类型获取组件
    };
    /**
     * 当元素或选中的文本被拖到一个可释放目标上时触发
     * @param event
     */
    AppComponent.prototype.dragover_handler = function (event) {
        this.isSlot = 'N';
        event.preventDefault();
    };
    AppComponent.prototype.dragenter_handler = function (event) {
        if (event.target.className && event.target.className.includes('container')) {
        }
    };
    /**
   * 执行释放
   * @param event
   */
    AppComponent.prototype.drop_handler = function (event) {
        var component = this.ads.filter(function (item) {
            return item.data['name'] === event.dataTransfer.types[0];
        });
        if (event.target.className && event.target.className.includes('container')) {
        }
        if (this.isSlot === 'N') {
            this.loadDynamicComponent(component[0].component, this.viewContainerRef, component[0]);
        }
    };
    /**
     * 添加布局
     * @param parentNode
     */
    AppComponent.prototype.loadDynamicComponent = function (component, ref, data, renderer) {
        console.log(this.isSlot);
        var factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.dynamicComponent = ref.createComponent(factory);
        var id = this.dynamicComponent.instance['id'];
        this.code1 += this.dynamicComponent.instance.getAttributes(id);
        if (!id || id === '' || id === undefined || id === null) {
            this.dynamicComponent.instance['id'] = this.commonService.uuidv4();
        }
        // 拖拽删格组件
        // this.renderer.listen(this.dynamicComponent.location.nativeElement, 'dragover', (event) => {
        // })
        // this.renderer.listen(this.dynamicComponent.location.nativeElement, 'dragenter', (event) => {
        //   console.log('dragenter')
        // })
        // this.renderer.listen(this.dynamicComponent.location.nativeElement, 'click', (event) => {
        //   this.selectedComponent = data.data.name
        // })
        // 不插槽
        if (this.isSlot === 'N') {
            this.renderer.appendChild(ref.element.nativeElement, this.dynamicComponent.location.nativeElement);
        }
        else {
            // 通过 id 查找 动态父组件
            // 插槽
            // renderer.appendChild(
            //   ref.element.nativeElement,
            //   this.dynamicComponent.location.nativeElement
            // )
            // let idMark = '#' + this.slotId
            // const exampleDiv = this.containerTemplate.nativeElement.querySelector(idMark);
            // exampleDiv.appendChild(this.dynamicComponent.location.nativeElement)
            // let newC = ref.createComponent(factory, 0)
            this.renderer.appendChild(ref.element.nativeElement, this.dynamicComponent.location.nativeElement);
        }
        this.dynamicComponents.push(this.dynamicComponent);
    };
    // slotDynamicComponent(event, ref: any) {
    //   let component = this.ads.filter(item => {
    //     return item.data['name'] === event.dataTransfer.types[0]
    //   })
    //   let factory = this.componentFactoryResolver.resolveComponentFactory(component[0].component);
    //   let childDynamicComponent = ref.createComponent(factory);
    //   this.renderer.appendChild(
    //     ref.element.nativeElement,
    //     childDynamicComponent.location.nativeElement
    //   );
    // }
    /**
     * 预览
     */
    AppComponent.prototype.preview = function () {
        var _this = this;
        var modal = this.modalService.create({
            nzTitle: '预览',
            nzWidth: '80%',
            nzContent: _core_components_preview_preview_component__WEBPACK_IMPORTED_MODULE_6__["PreviewComponent"],
            nzComponentParams: {
                code: this.code1
            },
            nzFooter: [
                {
                    label: '复制代码',
                    type: 'primary',
                    onClick: function (componentInstance) {
                        _this.copyCode(_this.nzRawCode);
                        _this.message.info('代码已复制！');
                        modal.destroy();
                    }
                }
            ]
        });
    };
    /**
     * 清空
     */
    AppComponent.prototype.empty = function () {
        var len = this.dynamicComponents.length;
        while (len > 0) {
            this.dynamicComponents[len - 1].destroy();
            --len;
            this.dynamicComponents.length = len;
        }
    };
    /**
     * 属性改变
     * @param event
     * @param type 属性类型
     */
    AppComponent.prototype.propertyChange = function (event, type) {
        switch (type) {
            case 'size': // 大小
                console.log(event);
                break;
            default:
                break;
        }
    };
    AppComponent.prototype.openCode = function () {
        this.visible = true;
        this.previewCodeDrawer.element.nativeElement.style.height = '0';
        console.dir(this.previewCodeDrawer.element.nativeElement, 'this.previewCodeDrawer.element.nativeElement');
    };
    AppComponent.prototype.closeCode = function () {
        this.visible = false;
    };
    Object.defineProperty(AppComponent.prototype, "code", {
        get: function () {
            return this.code1 || '';
        },
        set: function (value) {
            this.code1 = decodeURIComponent(value).trim();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "nzRawCode", {
        get: function () {
            this.rawCode = this.code1;
            return this.rawCode;
        },
        set: function (value) {
            this.rawCode = decodeURIComponent(value).trim();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 复制代码
     */
    AppComponent.prototype.copy = function (value) {
        var _this = this;
        var promise = new Promise(function (resolve) {
            // @ts-ignore
            var copyTextArea = null;
            try {
                copyTextArea = _this.dom.createElement('textarea');
                copyTextArea.style.height = '0px';
                copyTextArea.style.opacity = '0';
                copyTextArea.style.width = '0px';
                _this.dom.body.appendChild(copyTextArea);
                copyTextArea.value = value;
                copyTextArea.select();
                _this.dom.execCommand('copy');
                resolve(value);
            }
            finally {
                if (copyTextArea && copyTextArea.parentNode) {
                    copyTextArea.parentNode.removeChild(copyTextArea);
                }
            }
        });
        return promise;
    };
    AppComponent.prototype.check = function () {
        this.cdr.markForCheck();
    };
    AppComponent.prototype.copyCode = function (code) {
        var _this = this;
        this.copy(code).then(function () {
            _this.copied = true;
            setTimeout(function () {
                _this.copied = false;
                _this.check();
            }, 1000);
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"] },
        { type: _core_service_store_service__WEBPACK_IMPORTED_MODULE_7__["StoreService"] },
        { type: _core_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] },
        { type: _core_service_share_service__WEBPACK_IMPORTED_MODULE_8__["ShareService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _core_service_aditem_service__WEBPACK_IMPORTED_MODULE_5__["AditemService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('previewCodeDrawer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], static: false })
    ], AppComponent.prototype, "previewCodeDrawer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], static: false })
    ], AppComponent.prototype, "viewContainerRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('container', { static: false })
    ], AppComponent.prototype, "containerTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], AppComponent.prototype, "code", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], AppComponent.prototype, "nzRawCode", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]))
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_template_antd_antdtemplate_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/template/antd/antdtemplate.module */ "./src/app/components/template/antd/antdtemplate.module.ts");
/* harmony import */ var _core_common_common_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/common/common.service */ "./src/app/core/common/common.service.ts");
/* harmony import */ var _core_components_drag_button_drag_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/components/drag-button/drag-button.component */ "./src/app/core/components/drag-button/drag-button.component.ts");
/* harmony import */ var _core_components_preview_preview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/components/preview/preview.component */ "./src/app/core/components/preview/preview.component.ts");
/* harmony import */ var _core_components_share_share_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/components/share/share.component */ "./src/app/core/components/share/share.component.ts");
/* harmony import */ var _core_directive_dragname_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/directive/dragname.directive */ "./src/app/core/directive/dragname.directive.ts");
/* harmony import */ var _core_service_aditem_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/service/aditem.service */ "./src/app/core/service/aditem.service.ts");
/* harmony import */ var _core_service_drag_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/service/drag.service */ "./src/app/core/service/drag.service.ts");
/* harmony import */ var _core_service_store_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/service/store.service */ "./src/app/core/service/store.service.ts");
/* harmony import */ var _components_ui_material_materialui_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/ui/material/materialui.module */ "./src/app/components/ui/material/materialui.module.ts");
/* harmony import */ var _components_ui_antd_index_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/ui/antd/index.module */ "./src/app/components/ui/antd/index.module.ts");
/* harmony import */ var _core_service_share_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./core/service/share.service */ "./src/app/core/service/share.service.ts");

/*
 * @Author: luohong
 * @Date: 2019-08-07 10:32:58
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-26 14:00:30
 * @Description:
 * @email: 3300536651@qq.com
 */












// import { AntduiModule } from './components/ui/antd/antdui.module';











Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            entryComponents: [
                _core_components_preview_preview_component__WEBPACK_IMPORTED_MODULE_15__["PreviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                _components_ui_antd_index_module__WEBPACK_IMPORTED_MODULE_22__["AntduiModule"],
                _components_template_antd_antdtemplate_module__WEBPACK_IMPORTED_MODULE_12__["AntdtemplateModule"],
                _components_ui_material_materialui_module__WEBPACK_IMPORTED_MODULE_21__["MaterialuiModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _core_directive_dragname_directive__WEBPACK_IMPORTED_MODULE_17__["DragnameDirective"],
                _core_components_preview_preview_component__WEBPACK_IMPORTED_MODULE_15__["PreviewComponent"],
                _core_components_share_share_component__WEBPACK_IMPORTED_MODULE_16__["ShareComponent"],
                _core_components_drag_button_drag_button_component__WEBPACK_IMPORTED_MODULE_14__["DragbuttonComponent"]
            ],
            exports: [],
            providers: [
                {
                    provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NZ_I18N"],
                    useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["zh_CN"]
                },
                _core_service_aditem_service__WEBPACK_IMPORTED_MODULE_18__["AditemService"],
                _core_common_common_service__WEBPACK_IMPORTED_MODULE_13__["CommonService"],
                _core_service_drag_service__WEBPACK_IMPORTED_MODULE_19__["DragService"],
                _core_service_share_service__WEBPACK_IMPORTED_MODULE_23__["ShareService"],
                _core_service_store_service__WEBPACK_IMPORTED_MODULE_20__["StoreService"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/template/antd/antdtemplate.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/template/antd/antdtemplate.module.ts ***!
  \*****************************************************************/
/*! exports provided: AntdtemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntdtemplateModule", function() { return AntdtemplateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./button/button.component */ "./src/app/components/template/antd/button/button.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/components/template/antd/grid/grid.component.ts");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icon/icon.component */ "./src/app/components/template/antd/icon/icon.component.ts");
/* harmony import */ var _rate_rate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rate/rate.component */ "./src/app/components/template/antd/rate/rate.component.ts");

/*
 * @Author: luohong
 * @Date: 2019-08-12 09:09:29
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-26 13:59:16
 * @Description:
 * @email: 3300536651@qq.com
 */










Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_2___default.a);
var AntdtemplateModule = /** @class */ (function () {
    function AntdtemplateModule() {
    }
    AntdtemplateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            entryComponents: [
                _button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"],
                _icon_icon_component__WEBPACK_IMPORTED_MODULE_9__["IconComponent"],
                _rate_rate_component__WEBPACK_IMPORTED_MODULE_10__["RateComponent"],
                _grid_grid_component__WEBPACK_IMPORTED_MODULE_8__["GridComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            declarations: [
                _button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"],
                _icon_icon_component__WEBPACK_IMPORTED_MODULE_9__["IconComponent"],
                _rate_rate_component__WEBPACK_IMPORTED_MODULE_10__["RateComponent"],
                _grid_grid_component__WEBPACK_IMPORTED_MODULE_8__["GridComponent"]
            ],
            exports: [
                _button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"],
                _icon_icon_component__WEBPACK_IMPORTED_MODULE_9__["IconComponent"],
                _rate_rate_component__WEBPACK_IMPORTED_MODULE_10__["RateComponent"],
                _grid_grid_component__WEBPACK_IMPORTED_MODULE_8__["GridComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["zh_CN"] }]
        })
    ], AntdtemplateModule);
    return AntdtemplateModule;
}());



/***/ }),

/***/ "./src/app/components/template/antd/button/button.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/template/antd/button/button.component.ts ***!
  \*********************************************************************/
/*! exports provided: structure, ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "structure", function() { return structure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * @Author: luohong
 * @Date: 2019-08-08 14:52:47
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-12 17:28:41
 * @Description:
 * @email: 3300536651@qq.com
 */

function structure() {
    var attributes = {
        title: {
            type: 'text',
            value: 'App Bar'
        },
        zDepth: {
            type: 'slider',
            value: 0,
            max: 5,
            min: 0,
            step: 1
        },
        titleClass: {
            type: 'text',
            value: ''
        }
    };
    var slots = {
        left: [],
        right: [],
        default: []
    };
    var template = "\n  <button nz-button nzType=\"primary\">Primary</button>\n  ";
    return { template: template, attributes: attributes, slots: slots };
}
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
        this.getAttributes(this.id);
    };
    ButtonComponent.prototype.ngOnChanges = function () {
    };
    ButtonComponent.prototype.getAttributes = function (id) {
        var obj = localStorage.getItem('store');
        var template = structure().template;
        return template;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('id')
    ], ButtonComponent.prototype, "id", void 0);
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'antd-button-template',
            template: "<div> " + structure().template + " </div>",
            styles: ["\n  "]
        })
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/template/antd/grid/grid.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/template/antd/grid/grid.component.ts ***!
  \*****************************************************************/
/*! exports provided: structure, GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "structure", function() { return structure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_core_service_share_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/share.service */ "./src/app/core/service/share.service.ts");

/*
 * @Author: luohong
 * @Date: 2019-08-12 09:09:29
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-14 17:23:25
 * @Description:
 * @email: 3300536651@qq.com
 */



function structure() {
    var attributes = {
        title: {
            type: 'text',
            value: 'App Bar'
        },
        zDepth: {
            type: 'slider',
            value: 0,
            max: 5,
            min: 0,
            step: 1
        },
        titleClass: {
            type: 'text',
            value: ''
        }
    };
    var slots = {
        left: [],
        right: [],
        default: []
    };
    var template = "\n  <div nz-row nzGutter=\"32\">\n    <div nz-col  nzSpan=\"12\">\n      <ng-container #firstContainer></ng-container>\n    </div>\n  </div>\n  ";
    return { template: template, attributes: attributes, slots: slots };
}
var GridComponent = /** @class */ (function () {
    function GridComponent(cfResolver, vcRef, renderer, compiler, shareService) {
        this.cfResolver = cfResolver;
        this.vcRef = vcRef;
        this.renderer = renderer;
        this.compiler = compiler;
        this.shareService = shareService;
    }
    // 拖拽事件
    GridComponent.prototype.onDrop = function () {
        this.shareService.subject.next({
            eventName: 'grid1',
            param: { ref: this.firstContainerRef, id: this.id }
        });
    };
    GridComponent.prototype.ngOnInit = function () {
        this.getAttributes(this.id);
        console.log(this.vcRef);
    };
    GridComponent.prototype.ngOnChanges = function () {
    };
    /**
     * 添加动态子组件
     * @param dynamicComponent
     */
    // public appendChildComponent(dynamicComponent: Type<any>) {
    //   this.createComponentModule(dynamicComponent)
    //   // https://stackoverflow.com/questions/38093727/angular2-insert-a-dynamic-component-as-child-of-a-container-in-the-dom
    //   // this.compiler.compileModuleSync(this.createComponentModule(dynamicComponent));
    //   let factory = this.cfResolver.resolveComponentFactory(dynamicComponent);
    //   let componentRef = this.vcRef.createComponent(factory);
    //   // console.log(componentRef.injector.get(dynamicComponent).elRef.nativeElement,'componentRef.injector.get(dynamicComponent).elRef.nativeElement')
    //   // this.renderer.appendChild(
    //   //   this.vcRef.element.nativeElement,
    //   //   componentRef.injector.get(dynamicComponent).elRef.nativeElement
    //   //   // componentRef.location.nativeElement
    //   // );
    // }
    GridComponent.prototype.getAttributes = function (id) {
        var obj = localStorage.getItem('store');
        var template = structure().template;
        return template;
    };
    GridComponent.prototype.createComponentModule = function (componentType) {
        var runtimeComponentModule = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NgZorroAntdModule"]
            ],
            declarations: [
                componentType
            ],
            entryComponents: [componentType]
        })(/** @class */ (function () {
            function RuntimeComponentModule() {
            }
            return RuntimeComponentModule;
        }()));
        return runtimeComponentModule;
    };
    GridComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"] },
        { type: src_app_core_service_share_service__WEBPACK_IMPORTED_MODULE_3__["ShareService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('id')
    ], GridComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('firstContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: false })
    ], GridComponent.prototype, "firstContainerRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event'])
    ], GridComponent.prototype, "onDrop", null);
    GridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'antd-grid-template',
            template: "\n  <div class=\"drag-grid\">\n    <span class=\"row-mark\">row</span>\n    <div class=\"drag-grid-toolbar\">\n      <button nz-button nzType=\"dashed\" nzSize=\"small\" nz-tooltip nzTitle=\"\u62D6\u52A8\" class=\"drag-button\"><i nz-icon\n          nzType=\"drag\"></i></button>\n      <button nz-button nzType=\"dashed\" nzSize=\"small\" nz-tooltip nzTitle=\"\u5220\u9664\" class=\"drag-button\"><i nz-icon\n          nzType=\"delete\"></i></button>\n    </div>\n    " + structure().template + "\n  </div>\n",
            styles: ["\n    .drag-grid {\n      color: #dfa612;\n      border: 2px solid #f2f4f5;\n      padding: 30px 20px 20px;\n      position: relative;\n      margin: 10px;\n      border-radius: 4px;\n      background: #e8e8e8;\n    }\n    .row-mark {\n      height: 22px;\n      line-height: 22px;\n      padding: 0 2px;\n      background-color: rgb(190, 200, 200);\n      color: #fff;\n      position: absolute;\n      left: 0;\n      top: 0;\n      border-bottom-right-radius: 2px;\n    }\n    .drag-grid .ant-row>div{\n      padding: 40px 20px 20px;\n      border-radius: 4px;\n      position: relative;\n      border: 1px solid rgb(190, 200, 200);\n      background: #fff;\n    }\n    .drag-grid .ant-row>div::after{\n      content: 'column';\n      height: 22px;\n      line-height: 22px;\n      padding: 0 2px;\n      background-color: rgb(190, 200, 200);\n      color: #fff;\n      position: absolute;\n      left: 0;\n      top: 0;\n      border-bottom-right-radius: 2px;\n    }\n    .drag-grid-toolbar {\n      position: absolute;\n      right: 5px;\n      top: 0px;\n    }\n    .drag-grid-toolbar button {\n      margin-left: 10px;\n    }\n  "]
        })
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/components/template/antd/icon/icon.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/template/antd/icon/icon.component.ts ***!
  \*****************************************************************/
/*! exports provided: structure, IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "structure", function() { return structure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * @Author: luohong
 * @Date: 2019-08-12 09:09:29
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-26 13:56:43
 * @Description:
 * @email: 3300536651@qq.com
 */

function structure() {
    var attributes = {
        title: {
            type: 'text',
            value: 'App Bar'
        },
        zDepth: {
            type: 'slider',
            value: 0,
            max: 5,
            min: 0,
            step: 1
        },
        titleClass: {
            type: 'text',
            value: ''
        }
    };
    var slots = {
        left: [],
        right: [],
        default: []
    };
    var template = "\n  <i nz-icon nzType=\"ant-design\" nzTheme=\"outline\"></i>\n  ";
    return { template: template, attributes: attributes, slots: slots };
}
var IconComponent = /** @class */ (function () {
    function IconComponent() {
    }
    IconComponent.prototype.ngOnInit = function () {
        this.getAttributes(this.id);
    };
    IconComponent.prototype.ngOnChanges = function () {
    };
    IconComponent.prototype.getAttributes = function (id) {
        var obj = localStorage.getItem('store');
        var template = structure().template;
        return template;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('id')
    ], IconComponent.prototype, "id", void 0);
    IconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'antd-icon-template',
            template: "\n  <div> " + structure().template + " </div>\n  ",
            styles: ["\n  "]
        })
    ], IconComponent);
    return IconComponent;
}());



/***/ }),

/***/ "./src/app/components/template/antd/rate/rate.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/template/antd/rate/rate.component.ts ***!
  \*****************************************************************/
/*! exports provided: structure, RateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "structure", function() { return structure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateComponent", function() { return RateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * @Author: luohong
 * @Date: 2019-08-08 14:52:47
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-26 14:07:26
 * @Description:
 * @email: 3300536651@qq.com
 */

function structure() {
    var attributes = {
        title: {
            type: 'text',
            value: 'App Bar'
        },
        zDepth: {
            type: 'slider',
            value: 0,
            max: 5,
            min: 0,
            step: 1
        },
        titleClass: {
            type: 'text',
            value: ''
        }
    };
    var slots = {
        left: [],
        right: [],
        default: []
    };
    var template = "\n  <nz-rate [ngModel]=\"0\"></nz-rate>\n  ";
    return { template: template, attributes: attributes, slots: slots };
}
var RateComponent = /** @class */ (function () {
    function RateComponent() {
    }
    RateComponent.prototype.ngOnInit = function () {
        this.getAttributes(this.id);
    };
    RateComponent.prototype.ngOnChanges = function () {
    };
    RateComponent.prototype.getAttributes = function (id) {
        var obj = localStorage.getItem('store');
        var template = structure().template;
        return template;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('id')
    ], RateComponent.prototype, "id", void 0);
    RateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'antd-rate-template',
            template: "<div>" + structure().template + "</div>",
            styles: ["\n  "]
        })
    ], RateComponent);
    return RateComponent;
}());



/***/ }),

/***/ "./src/app/components/ui/antd/button/button.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/ui/antd/button/button.component.ts ***!
  \***************************************************************/
/*! exports provided: AntdbuttonuiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntdbuttonuiComponent", function() { return AntdbuttonuiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * @Author: luohong
 * @Date: 2019-08-08 14:52:47
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-12 17:28:41
 * @Description:
 * @email: 3300536651@qq.com
 */

var AntdbuttonuiComponent = /** @class */ (function () {
    function AntdbuttonuiComponent() {
    }
    AntdbuttonuiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'antd-button-ui',
            template: "<button nz-button nzType=\"primary\">Primary</button>",
            styles: ["\n  "]
        })
    ], AntdbuttonuiComponent);
    return AntdbuttonuiComponent;
}());



/***/ }),

/***/ "./src/app/components/ui/antd/index.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/ui/antd/index.module.ts ***!
  \****************************************************/
/*! exports provided: AntduiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntduiModule", function() { return AntduiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button/button.component */ "./src/app/components/ui/antd/button/button.component.ts");

/*
 * @Author: luohong
 * @Date: 2019-08-12 09:09:29
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-12 18:11:23
 * @Description:
 * @email: 3300536651@qq.com
 */






Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_2___default.a);
var AntduiModule = /** @class */ (function () {
    function AntduiModule() {
    }
    AntduiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            entryComponents: [],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"]
            ],
            declarations: [
                _button_button_component__WEBPACK_IMPORTED_MODULE_6__["AntdbuttonuiComponent"]
            ],
            exports: [
                _button_button_component__WEBPACK_IMPORTED_MODULE_6__["AntdbuttonuiComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["zh_CN"] }]
        })
    ], AntduiModule);
    return AntduiModule;
}());



/***/ }),

/***/ "./src/app/components/ui/material/materialui.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/ui/material/materialui.module.ts ***!
  \*************************************************************/
/*! exports provided: MaterialuiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialuiModule", function() { return MaterialuiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");

/*
 * @Author: luohong
 * @Date: 2019-08-12 09:09:29
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-12 18:11:23
 * @Description:
 * @email: 3300536651@qq.com
 */





Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_2___default.a);
var MaterialuiModule = /** @class */ (function () {
    function MaterialuiModule() {
    }
    MaterialuiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            entryComponents: [],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"]
            ],
            declarations: [],
            exports: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["zh_CN"] }]
        })
    ], MaterialuiModule);
    return MaterialuiModule;
}());



/***/ }),

/***/ "./src/app/core/common/common.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/common/common.service.ts ***!
  \***********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * @Author: luohong
 * @Date: 2019-08-12 09:09:29
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-12 17:35:25
 * @Description:
 * @email: 3300536651@qq.com
 */

var CommonService = /** @class */ (function () {
    function CommonService() {
    }
    CommonService.prototype.uuidv4 = function () {
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
            d += performance.now();
        }
        return 'xxxxxxxx-xxxx-xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/core/components/aditem.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/components/aditem.component.ts ***!
  \*****************************************************/
/*! exports provided: AdItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdItemComponent", function() { return AdItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * @Author: luohong
 * @Date: 2019-08-12 09:09:29
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-13 17:39:16
 * @Description:
 * @email: 3300536651@qq.com
 */

var AdItemComponent = /** @class */ (function () {
    function AdItemComponent(component, data) {
        this.component = component;
        this.data = data;
    }
    AdItemComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Type"] },
        { type: undefined }
    ]; };
    return AdItemComponent;
}());



/***/ }),

/***/ "./src/app/core/components/drag-button/drag-button.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/drag-button/drag-button.component.ts ***!
  \**********************************************************************/
/*! exports provided: DragbuttonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragbuttonComponent", function() { return DragbuttonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DragbuttonComponent = /** @class */ (function () {
    function DragbuttonComponent() {
    }
    DragbuttonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'drag-button',
            template: __webpack_require__(/*! raw-loader!./drag-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/drag-button/drag-button.component.html"),
            styles: ["\n  button.drag-button .anticon {\n    margin-right: 0;\n  }\n  .drag-button {\n  }\n  "]
        })
    ], DragbuttonComponent);
    return DragbuttonComponent;
}());



/***/ }),

/***/ "./src/app/core/components/preview/preview.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/components/preview/preview.component.ts ***!
  \**************************************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");

/*
 * @Author: luohong
 * @Date: 2019-08-12 09:09:29
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-26 14:08:22
 * @Description:
 * @email: 3300536651@qq.com
 */



var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(renderer, compiler, sanitizer, resolver) {
        this.renderer = renderer;
        this.compiler = compiler;
        this.sanitizer = sanitizer;
        this.resolver = resolver;
        this.bindings = {};
    }
    PreviewComponent.prototype.ngOnInit = function () {
        console.log(typeof this.code, 'code类型');
        this.loadDynamicContent();
    };
    PreviewComponent.prototype.ngOnChanges = function () {
    };
    PreviewComponent.prototype.ngAfterViewInit = function () {
    };
    PreviewComponent.prototype.loadDynamicContent = function () {
        this.dynamicComponent = this.createTemplate(this.code, this.bindings);
        this.dynamicModule = this.compiler.compileModuleSync(this.createComponentModule(this.dynamicComponent));
    };
    PreviewComponent.prototype.createComponentModule = function (componentType) {
        var runtimeComponentModule = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NgZorroAntdModule"],
            ],
            declarations: [
                componentType
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            entryComponents: [componentType]
        })(/** @class */ (function () {
            function RuntimeComponentModule() {
            }
            return RuntimeComponentModule;
        }()));
        return runtimeComponentModule;
    };
    PreviewComponent.prototype.createTemplate = function (template, bindings) {
        var dynamicComponent = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dynamic-component',
            template: template
        })(/** @class */ (function () {
            function DynamicComponent() {
            }
            DynamicComponent.prototype.ngOnInit = function () {
            };
            return DynamicComponent;
        }()));
        return dynamicComponent;
    };
    PreviewComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('previewTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: false })
    ], PreviewComponent.prototype, "previewTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PreviewComponent.prototype, "code", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PreviewComponent.prototype, "bindings", void 0);
    PreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'drag-grid',
            template: " \n   <div>\n   <ng-container *ngComponentOutlet=\"dynamicComponent; ngModuleFactory: dynamicModule;\">\n  </ng-container>\n   </div>\n    ",
            styles: ["\n  \n  "]
        })
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "./src/app/core/components/share/share.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/share/share.component.ts ***!
  \**********************************************************/
/*! exports provided: ShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareComponent", function() { return ShareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * @Author: luohong
 * @Date: 2019-08-12 09:09:29
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-12 16:56:41
 * @Description:
 * @email: 3300536651@qq.com
 */

var ShareComponent = /** @class */ (function () {
    function ShareComponent() {
    }
    ShareComponent.prototype.ngOnInit = function () {
    };
    ShareComponent.prototype.ngOnChanges = function () {
    };
    ShareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'drag-grid',
            template: " \n \u5206\u4EAB\n",
            styles: ["\n  \n  "]
        })
    ], ShareComponent);
    return ShareComponent;
}());



/***/ }),

/***/ "./src/app/core/directive/dragname.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/core/directive/dragname.directive.ts ***!
  \******************************************************/
/*! exports provided: DragnameDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragnameDirective", function() { return DragnameDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * @Author: luohong
 * @Date: 2019-08-08 15:54:36
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-14 15:04:05
 * @Description:
 * @email: 3300536651@qq.com
 */

var DragnameDirective = /** @class */ (function () {
    function DragnameDirective() {
    }
    DragnameDirective.prototype.onDragStart = function (event) {
        event.dataTransfer.setData(this.dragComponentName, null);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('dragName')
    ], DragnameDirective.prototype, "dragComponentName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragstart', ['$event'])
    ], DragnameDirective.prototype, "onDragStart", null);
    DragnameDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[dragName]'
        })
    ], DragnameDirective);
    return DragnameDirective;
}());



/***/ }),

/***/ "./src/app/core/service/aditem.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/service/aditem.service.ts ***!
  \************************************************/
/*! exports provided: AditemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AditemService", function() { return AditemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_aditem_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/aditem.component */ "./src/app/core/components/aditem.component.ts");
/* harmony import */ var src_app_components_template_antd_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/template/antd/grid/grid.component */ "./src/app/components/template/antd/grid/grid.component.ts");
/* harmony import */ var src_app_components_template_antd_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/template/antd/button/button.component */ "./src/app/components/template/antd/button/button.component.ts");
/* harmony import */ var src_app_components_template_antd_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/template/antd/icon/icon.component */ "./src/app/components/template/antd/icon/icon.component.ts");
/* harmony import */ var src_app_components_template_antd_rate_rate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/template/antd/rate/rate.component */ "./src/app/components/template/antd/rate/rate.component.ts");

/*
 * @Author: luohong
 * @Date: 2019-08-12 09:09:29
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-12 17:40:30
 * @Description:
 * @email: 3300536651@qq.com
 */






var AditemService = /** @class */ (function () {
    function AditemService() {
    }
    AditemService.prototype.getAds = function () {
        return [
            new _components_aditem_component__WEBPACK_IMPORTED_MODULE_2__["AdItemComponent"](src_app_components_template_antd_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], { name: 'grid1' }),
            new _components_aditem_component__WEBPACK_IMPORTED_MODULE_2__["AdItemComponent"](src_app_components_template_antd_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], { name: 'button' }),
            new _components_aditem_component__WEBPACK_IMPORTED_MODULE_2__["AdItemComponent"](src_app_components_template_antd_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"], { name: 'icon' }),
            new _components_aditem_component__WEBPACK_IMPORTED_MODULE_2__["AdItemComponent"](src_app_components_template_antd_rate_rate_component__WEBPACK_IMPORTED_MODULE_6__["RateComponent"], { name: 'rate' }),
        ];
    };
    AditemService.prototype.getComponentByUi = function (ui) {
        var result;
        if (ui && ui === 'antd') {
            result = [
                { name: 'grid1' },
                { name: 'button' },
                { name: 'icon' },
                { name: 'rate' }
            ];
        }
        return result;
    };
    AditemService.prototype.getAttributes = function (id, callback) {
        var obj = localStorage.getItem('store');
        var template = callback().template;
        return template;
    };
    AditemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AditemService);
    return AditemService;
}());



/***/ }),

/***/ "./src/app/core/service/drag.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/service/drag.service.ts ***!
  \**********************************************/
/*! exports provided: DragService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragService", function() { return DragService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * @Author: luohong
 * @Date: 2019-08-08 16:28:21
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-09 17:54:03
 * @Description: 拖拽核心方法
 * @email: 3300536651@qq.com
 */

/**
 * @description: 拖拽单例服务
 * @param {type}
 * @return:
 */
var DragService = /** @class */ (function () {
    function DragService() {
    }
    /**
     * 开始拖拽动作
     * @param event
     */
    DragService.prototype.dragstart_handler = function (event, handlerName) {
        event.dataTransfer.setData(handlerName, null);
        return this.data = event;
    };
    DragService.prototype.startDrag = function (zone) {
        this.zone = zone;
    };
    DragService.prototype.accepts = function (zone) {
        return zone === this.zone;
    };
    DragService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DragService);
    return DragService;
}());



/***/ }),

/***/ "./src/app/core/service/share.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/service/share.service.ts ***!
  \***********************************************/
/*! exports provided: ShareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareService", function() { return ShareService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__);

/*
 * @Author: luohong
 * @Date: 2019-08-12 09:09:29
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-14 11:21:00
 * @Description:
 * @email: 3300536651@qq.com
 */


var ShareService = /** @class */ (function () {
    function ShareService() {
        this.subject = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ShareService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ShareService);
    return ShareService;
}());



/***/ }),

/***/ "./src/app/core/service/store.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/service/store.service.ts ***!
  \***********************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * @Author: luohong
 * @Date: 2019-08-12 09:09:29
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-12 10:04:03
 * @Description:
 * @email: 3300536651@qq.com
 */

var StoreService = /** @class */ (function () {
    function StoreService() {
        this.state = {
            css: '',
            uitype: 'antd-ui',
            selectedComponent: {},
            components: [],
            backupComponents: [],
            copiedComponents: [] // 复制组件
        };
    }
    StoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], StoreService);
    return StoreService;
}());



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
/*
 * @Author: luohong
 * @Date: 2019-08-07 10:32:58
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-12 18:08:37
 * @Description:
 * @email: 3300536651@qq.com
 */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/honghong/github/ngantd-drag-form/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map