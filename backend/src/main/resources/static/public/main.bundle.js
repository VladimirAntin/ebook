webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_user_user_component__ = __webpack_require__("../../../../../src/app/users/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categories_categories_component__ = __webpack_require__("../../../../../src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__languages_languages_component__ = __webpack_require__("../../../../../src/app/languages/languages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__categories_category_category_component__ = __webpack_require__("../../../../../src/app/categories/category/category.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_3__users_users_component__["a" /* UsersComponent */] },
    { path: 'users/:id', component: __WEBPACK_IMPORTED_MODULE_4__users_user_user_component__["a" /* UserComponent */] },
    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_6__categories_categories_component__["a" /* CategoriesComponent */] },
    { path: 'categories/:id', component: __WEBPACK_IMPORTED_MODULE_8__categories_category_category_component__["a" /* CategoryComponent */] },
    { path: 'languages', component: __WEBPACK_IMPORTED_MODULE_7__languages_languages_component__["a" /* LanguagesComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <img width=\"100\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<app-navigation></app-navigation>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__users_add_user_add_user_component__ = __webpack_require__("../../../../../src/app/users/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__users_user_user_component__ = __webpack_require__("../../../../../src/app/users/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__users_edit_user_edit_user_component__ = __webpack_require__("../../../../../src/app/users/edit-user/edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__categories_categories_component__ = __webpack_require__("../../../../../src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__categories_add_edit_category_add_edit_category_component__ = __webpack_require__("../../../../../src/app/categories/add-edit-category/add-edit-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pipes_search_pipe__ = __webpack_require__("../../../../../src/app/pipes/search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__languages_languages_component__ = __webpack_require__("../../../../../src/app/languages/languages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_language_service__ = __webpack_require__("../../../../../src/app/services/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__languages_add_edit_lang_add_edit_lang_component__ = __webpack_require__("../../../../../src/app/languages/add-edit-lang/add-edit-lang.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__categories_category_category_component__ = __webpack_require__("../../../../../src/app/categories/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__categories_add_ebook_add_ebook_component__ = __webpack_require__("../../../../../src/app/categories/add-ebook/add-ebook.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_ebook_service__ = __webpack_require__("../../../../../src/app/services/ebook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__categories_edit_ebook_edit_ebook_component__ = __webpack_require__("../../../../../src/app/categories/edit-ebook/edit-ebook.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__change_password_change_password_component__ = __webpack_require__("../../../../../src/app/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* enableProdMode */])();
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_10__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_12__users_add_user_add_user_component__["a" /* AddUserComponent */], __WEBPACK_IMPORTED_MODULE_15__users_user_user_component__["a" /* UserComponent */], __WEBPACK_IMPORTED_MODULE_16__navigation_navigation_component__["a" /* NavigationComponent */], __WEBPACK_IMPORTED_MODULE_17__users_edit_user_edit_user_component__["a" /* EditUserComponent */], __WEBPACK_IMPORTED_MODULE_18__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_19__categories_categories_component__["a" /* CategoriesComponent */], __WEBPACK_IMPORTED_MODULE_20__categories_add_edit_category_add_edit_category_component__["a" /* AddEditCategoryComponent */], __WEBPACK_IMPORTED_MODULE_21__pipes_search_pipe__["a" /* SearchPipe */], __WEBPACK_IMPORTED_MODULE_22__languages_languages_component__["a" /* LanguagesComponent */], __WEBPACK_IMPORTED_MODULE_24__languages_add_edit_lang_add_edit_lang_component__["a" /* AddEditLangComponent */],
                __WEBPACK_IMPORTED_MODULE_25__categories_category_category_component__["a" /* CategoryComponent */], __WEBPACK_IMPORTED_MODULE_27__categories_add_ebook_add_ebook_component__["a" /* AddEbookComponent */], __WEBPACK_IMPORTED_MODULE_29__categories_edit_ebook_edit_ebook_component__["a" /* EditEbookComponent */], __WEBPACK_IMPORTED_MODULE_30__change_password_change_password_component__["a" /* ChangePasswordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_14__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatStepperModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatStepperModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatSlideToggleModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_12__users_add_user_add_user_component__["a" /* AddUserComponent */], __WEBPACK_IMPORTED_MODULE_17__users_edit_user_edit_user_component__["a" /* EditUserComponent */], __WEBPACK_IMPORTED_MODULE_30__change_password_change_password_component__["a" /* ChangePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_20__categories_add_edit_category_add_edit_category_component__["a" /* AddEditCategoryComponent */], __WEBPACK_IMPORTED_MODULE_24__languages_add_edit_lang_add_edit_lang_component__["a" /* AddEditLangComponent */], __WEBPACK_IMPORTED_MODULE_27__categories_add_ebook_add_ebook_component__["a" /* AddEbookComponent */], __WEBPACK_IMPORTED_MODULE_29__categories_edit_ebook_edit_ebook_component__["a" /* EditEbookComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_11__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_13__services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_23__services_language_service__["a" /* LanguageService */], __WEBPACK_IMPORTED_MODULE_26__services_file_service__["a" /* FileService */],
                __WEBPACK_IMPORTED_MODULE_28__services_ebook_service__["a" /* EbookService */], __WEBPACK_IMPORTED_MODULE_31__services_search_service__["a" /* SearchService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/categories/add-ebook/add-ebook.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categories/add-ebook/add-ebook.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add new Ebook</h2>\n<mat-dialog-content>\n  <mat-horizontal-stepper linear>\n    <mat-step>\n      <ng-template matStepLabel>Upload file</ng-template>\n      <form>\n        <input type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload\"\n               accept=\".pdf\" required>\n      </form>\n      <br>\n      <button mat-button matStepperNext [disabled]=\"file===null\">Next</button>\n    </mat-step>\n    <mat-step *ngIf=\"file!==null\">\n      <ng-template matStepLabel>Edit Ebook</ng-template>\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Title\" maxlength=\"80\" [(ngModel)]=\"ebook.title\" required>\n        <mat-hint align=\"end\">{{ebook.title.length}}/80</mat-hint>\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Author\" maxlength=\"120\" [(ngModel)]=\"ebook.author\" required>\n        <mat-hint align=\"end\">{{ebook.author.length}}/120</mat-hint>\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Publication Year\" type=\"number\" [(ngModel)]=\"ebook.publicationYear\" required\n               style=\"margin-bottom: 0.5em\">\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <mat-chip-list #keywordList>\n          <mat-chip *ngFor=\"let key of keywords\"\n                    [removable]=\"true\" (remove)=\"removeKey(key)\">\n            {{key}}\n            <mat-icon matChipRemove>cancel</mat-icon>\n          </mat-chip>\n          <input placeholder=\"Keywords\"\n                 [matChipInputFor]=\"keywordList\"\n                 [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                 [matChipInputAddOnBlur]=\"true\"\n                 (matChipInputTokenEnd)=\"addKey($event)\" />\n        </mat-chip-list>\n        <mat-hint align=\"end\">{{ebook.keywords.length}}/120</mat-hint>\n        <mat-hint>Please add keywords</mat-hint>\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <mat-select placeholder=\"Category\" [(ngModel)]=\"ebook.category\" required\n                    style=\"margin-bottom: 0.5em\">\n          <mat-option *ngFor=\"let c of categories\" [value]=\"c.id\">\n            {{ c.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <mat-select placeholder=\"Language\" [(ngModel)]=\"ebook.language\" required>\n          <mat-option *ngFor=\"let l of languages\" [value]=\"l.id\">\n            {{ l.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </mat-step>\n  </mat-horizontal-stepper>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button [disabled]=\"ebook.language<=0 ||\n    ebook.category<=0 || ebook.keywords==='' ||\n    ebook.title==='' || ebook.author==='' ||\n    ebook.publicationYear<=0\" [mat-dialog-close]=\"{ok:true, ebook:ebook, file: file }\" matTooltip=\"Add new Ebook\">\n    <mat-icon>add</mat-icon>\n  </button>\n  <span class=\"spacer\"></span>\n  <button mat-button [mat-dialog-close] matTooltip=\"Close\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/categories/add-ebook/add-ebook.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEbookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_ebook__ = __webpack_require__("../../../../../src/app/model/ebook.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_keycodes__ = __webpack_require__("../../../cdk/esm5/keycodes.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ebook_service__ = __webpack_require__("../../../../../src/app/services/ebook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_language_service__ = __webpack_require__("../../../../../src/app/services/language.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var AddEbookComponent = (function () {
    function AddEbookComponent(data, snackBar, fileService, ebookService, categoryService, languageService) {
        this.data = data;
        this.snackBar = snackBar;
        this.fileService = fileService;
        this.ebookService = ebookService;
        this.categoryService = categoryService;
        this.languageService = languageService;
        this.file = null;
        this.separatorKeysCodes = [__WEBPACK_IMPORTED_MODULE_4__angular_cdk_keycodes__["g" /* ENTER */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_keycodes__["c" /* COMMA */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_keycodes__["o" /* SPACE */]];
        this.ebook = new __WEBPACK_IMPORTED_MODULE_3__model_ebook__["a" /* Ebook */]();
        this.keywords = [];
        this.categories = [];
        this.languages = [];
        this.getCategoriesAndLanguages();
    }
    AddEbookComponent.prototype.fileChange = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length === 1) {
            this.file = fileList[0];
            this.ebookService.checkUploadEbook(this.file).subscribe(function (data) {
                _this.ebook = data;
                if (_this.ebook.title === null) {
                    _this.ebook.title = '';
                }
                if (_this.ebook.author === null) {
                    _this.ebook.author = '';
                }
                if (_this.ebook.keywords === null) {
                    _this.ebook.keywords = '';
                }
                else {
                    _this.keywords = _this.ebook.keywords.split(', ');
                }
            });
        }
        else {
            this.snackBar.open('Only one file can be uploaded', 'Ok', {
                duration: 4000, verticalPosition: 'top'
            });
        }
    };
    AddEbookComponent.prototype.getCategoriesAndLanguages = function () {
        var _this = this;
        this.categoryService.getAll().subscribe(function (data) { return _this.categories = data; });
        this.languageService.getAll().subscribe(function (data) { return _this.languages = data; });
    };
    AddEbookComponent.prototype.addKey = function (event) {
        var input = event.input;
        var value = event.value;
        if ((value || '').trim()) {
            this.keywords.push(value.trim());
        }
        if (input) {
            input.value = '';
        }
        this.ebook.keywords = this.keywords.join(', ');
    };
    AddEbookComponent.prototype.removeKey = function (key) {
        var index = this.keywords.indexOf(key);
        if (index >= 0) {
            this.keywords.splice(index, 1);
        }
        this.ebook.keywords = this.keywords.join(', ');
    };
    AddEbookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-ebook',
            template: __webpack_require__("../../../../../src/app/categories/add-ebook/add-ebook.component.html"),
            styles: [__webpack_require__("../../../../../src/app/categories/add-ebook/add-ebook.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_2__services_file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_5__services_ebook_service__["a" /* EbookService */],
            __WEBPACK_IMPORTED_MODULE_6__services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_7__services_language_service__["a" /* LanguageService */]])
    ], AddEbookComponent);
    return AddEbookComponent;
}());



/***/ }),

/***/ "../../../../../src/app/categories/add-edit-category/add-edit-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categories/add-edit-category/add-edit-category.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{data.title}}</h2>\n<mat-dialog-content>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Name\" maxlength=\"30\" [(ngModel)]=\"data.category.name\" required>\n    <mat-hint align=\"end\">{{data.category.name.length}}/30</mat-hint>\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-icon-button [mat-dialog-close]=\"{result:true, category:data.category}\"\n          color=\"primary\" matTooltip=\"{{data.tooltip}}\"\n          [disabled]=\"data.category.name.trim()===''\">\n    <mat-icon>{{data.icon}}</mat-icon>\n  </button>\n  <span class=\"spacer\"></span>\n  <button mat-icon-button mat-dialog-close matTooltip=\"Close\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/categories/add-edit-category/add-edit-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEditCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AddEditCategoryComponent = (function () {
    function AddEditCategoryComponent(data) {
        this.data = data;
        if (this.data.add) {
            this.data.category.name = '';
        }
    }
    AddEditCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-edit-category',
            template: __webpack_require__("../../../../../src/app/categories/add-edit-category/add-edit-category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/categories/add-edit-category/add-edit-category.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], AddEditCategoryComponent);
    return AddEditCategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/categories/categories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div style=\"padding: 8px 24px 0\">\n    <mat-form-field class=\"full-width f20\">\n      <mat-icon matPrefix>search</mat-icon>\n      <input matInput placeholder=\"Filter\" [(ngModel)]=\"filter\">\n    </mat-form-field>\n    <mat-toolbar *ngIf=\"isAdmin\">\n      <button mat-fab color=\"primary\" matTooltip=\"Add new category\" (click)=\"add()\">\n        <mat-icon>library_add</mat-icon>\n      </button>\n      <span class=\"spacer\"></span>\n      <button mat-fab color=\"primary\" (click)=\"getAll()\" matTooltip=\"Refresh\">\n        <mat-icon>refresh</mat-icon>\n      </button>\n    </mat-toolbar>\n  </div>\n  <mat-list>\n    <mat-list-item *ngFor=\"let c of categories | search:'name':filter\">\n      <mat-icon mat-list-icon>web_asset</mat-icon>\n      <h4 mat-line>{{c.name}}</h4>\n      <button mat-button [routerLink]=\"['/categories/', c.id]\" color=\"primary\" matTooltip=\"Open\">\n        <mat-icon>library_books</mat-icon>\n      </button>\n      <button mat-button color=\"accent\" *ngIf=\"isAdmin\" (click)=\"edit(c)\" matTooltip=\"Update\">\n        <mat-icon>edit</mat-icon>\n      </button>\n      <button mat-button color=\"warn\" *ngIf=\"isAdmin\" (click)=\"deleteCategory(c)\" matTooltip=\"Delete\">\n        <mat-icon>delete</mat-icon>\n      </button>\n    </mat-list-item>\n  </mat-list>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_edit_category_add_edit_category_component__ = __webpack_require__("../../../../../src/app/categories/add-edit-category/add-edit-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_category_or_lang__ = __webpack_require__("../../../../../src/app/model/category-or-lang.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoriesComponent = (function () {
    function CategoriesComponent(dialog, snackBar, categoryService, authService) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.categoryService = categoryService;
        this.authService = authService;
        this.isAdmin = false;
        this.getAll();
        this.checkAdmin();
    }
    CategoriesComponent.prototype.getAll = function () {
        var _this = this;
        this.categoryService.getAll().subscribe(function (data) { return _this.categories = data; });
    };
    CategoriesComponent.prototype.checkAdmin = function () {
        var _this = this;
        this.authService.me().subscribe(function (data) {
            _this.isAdmin = data.authorities.indexOf('admin') !== -1;
        });
    };
    CategoriesComponent.prototype.add = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__add_edit_category_add_edit_category_component__["a" /* AddEditCategoryComponent */], {
            panelClass: 'dialog-600x400',
            data: {
                add: true, title: 'Add new category', icon: 'add',
                tooltip: 'Add category', category: new __WEBPACK_IMPORTED_MODULE_5__model_category_or_lang__["a" /* CategoryOrLang */]()
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.categoryService.add(result.category).subscribe(function (data) {
                    _this.categories.push(data);
                    _this.snackBar.open('Successfully added!', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                }, function () {
                    _this.snackBar.open('Error with add new category!', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                });
            }
        });
    };
    CategoriesComponent.prototype.edit = function (category) {
        var _this = this;
        var index = this.categories.indexOf(category);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__add_edit_category_add_edit_category_component__["a" /* AddEditCategoryComponent */], {
            panelClass: 'dialog-600x400',
            data: {
                title: 'Edit category', icon: 'edit',
                tooltip: 'Edit category', category: Object.assign({}, category)
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.categoryService.edit(result.category).subscribe(function (data) {
                    _this.categories[index] = data;
                    _this.snackBar.open('Successfully changed!', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                }, function () {
                    _this.snackBar.open('Error with change category attributes', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                });
            }
        });
    };
    CategoriesComponent.prototype.deleteCategory = function (category) {
        var _this = this;
        var index = this.categories.indexOf(category);
        this.snackBar.open('All users and ebooks will be deleted which belong on this category. ' +
            'Are you sure? ', 'Yes', {
            duration: 10000, verticalPosition: 'top'
        }).onAction().subscribe(function () {
            _this.categoryService.delete(category).subscribe(function () { return _this.categories.splice(index, 1); });
        });
    };
    CategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-categories',
            template: __webpack_require__("../../../../../src/app/categories/categories.component.html"),
            styles: [__webpack_require__("../../../../../src/app/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_1__services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/categories/category/category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categories/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"category!==null\">\n  <h1 class=\"center\">{{category.name}}</h1>\n  <div class=\"w45 left\">\n    <div style=\"padding: 8px 24px 0\">\n      <mat-form-field class=\"full-width f20\">\n        <mat-icon matPrefix>search</mat-icon>\n        <input matInput placeholder=\"Search users\" [(ngModel)]=\"filterUser\">\n      </mat-form-field>\n    </div>\n    <mat-list>\n      <mat-list-item *ngFor=\"let u of usersList| search:'username':filterUser\">\n        <mat-icon mat-list-icon>person</mat-icon>\n        <p mat-line>Username: <b class=\"right\">{{u.username}}</b></p>\n        <p mat-line>Name: <b class=\"right\">{{u.firstName + ' ' + u.lastName}}</b></p>\n        <p mat-line>Authorities: <b class=\"right\">{{u.authorities}}</b></p>\n        <a mat-fab color=\"primary\" [routerLink]=\"['/users',u.username]\" matTooltip=\"Open\">\n          <mat-icon>person</mat-icon>\n        </a>\n      </mat-list-item>\n    </mat-list>\n  </div>\n  <div class=\"w45 right\">\n    <div style=\"padding: 8px 24px 0\">\n      <mat-form-field class=\"full-width f20\">\n        <mat-icon matPrefix>search</mat-icon>\n        <input matInput placeholder=\"Search ebooks\" [(ngModel)]=\"filterEbook\">\n      </mat-form-field>\n      <mat-toolbar *ngIf=\"isAdmin\">\n        <button mat-fab color=\"primary\" matTooltip=\"Add new ebook in category\" (click)=\"add()\">\n          <mat-icon>add_box</mat-icon>\n        </button>\n      </mat-toolbar>\n    </div>\n    <mat-list>\n      <mat-list-item *ngFor=\"let e of ebooks | search:'title,author,keywords,publicationYear':filterEbook\">\n        <mat-icon mat-list-icon>web_asset</mat-icon>\n        <p mat-line><b>{{e.title}}</b></p>\n        <button mat-button color=\"primary\" (click)=\"openPdf(e.href)\" matTooltip=\"Open in new tab\" *ngIf=\"e.filename\">\n          <mat-icon>open_in_new</mat-icon>\n        </button>\n        <button mat-button color=\"primary\" (click)=\"download(e.filename)\" matTooltip=\"Download file\" *ngIf=\"e.filename\">\n          <mat-icon>file_download</mat-icon>\n        </button>\n        <button mat-button color=\"accent\" *ngIf=\"isAdmin\" (click)=\"edit(e)\" matTooltip=\"Update\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button mat-button color=\"warn\" *ngIf=\"isAdmin\" (click)=\"delete(e)\" matTooltip=\"Delete\">\n          <mat-icon>delete</mat-icon>\n        </button>\n        <p mat-line>Author: <b class=\"right\">{{e.author}}</b></p>\n        <p mat-line>Keywords: <b class=\"right\">{{e.keywords}}</b></p>\n        <p mat-line>Publication Year: <b class=\"right\">{{e.publicationYear}}</b></p>\n        <mat-divider></mat-divider>\n      </mat-list-item>\n    </mat-list>\n  </div>\n</div>\n<app-not-found *ngIf=\"category===null\"></app-not-found>\n"

/***/ }),

/***/ "../../../../../src/app/categories/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_category_or_lang__ = __webpack_require__("../../../../../src/app/model/category-or-lang.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_ebook_add_ebook_component__ = __webpack_require__("../../../../../src/app/categories/add-ebook/add-ebook.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_ebook_service__ = __webpack_require__("../../../../../src/app/services/ebook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__edit_ebook_edit_ebook_component__ = __webpack_require__("../../../../../src/app/categories/edit-ebook/edit-ebook.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CategoryComponent = (function () {
    function CategoryComponent(route, categoryService, fileService, authService, dialog, ebookService, snackBar) {
        this.route = route;
        this.categoryService = categoryService;
        this.fileService = fileService;
        this.authService = authService;
        this.dialog = dialog;
        this.ebookService = ebookService;
        this.snackBar = snackBar;
        this.category = new __WEBPACK_IMPORTED_MODULE_3__model_category_or_lang__["a" /* CategoryOrLang */]();
        this.ebooks = [];
        this.usersList = [];
        this.isAdmin = false;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.get();
        this.auth();
    };
    CategoryComponent.prototype.get = function () {
        var _this = this;
        this.categoryService.get(this.id).subscribe(function (data) {
            _this.category = data;
            _this.getEbooks();
            _this.categoryService.getUsers(_this.id).subscribe(function (dataUsers) { return _this.usersList = dataUsers; });
        }, function () { return _this.category = null; });
    };
    CategoryComponent.prototype.getEbooks = function () {
        var _this = this;
        this.categoryService.getEbooks(this.id).subscribe(function (dataEbooks) {
            _this.ebooks = dataEbooks;
            _this.ebooks.forEach(function (value, index) {
                _this.fileService.getBlob(_this.ebooks[index]);
            });
        });
    };
    CategoryComponent.prototype.auth = function () {
        var _this = this;
        this.authService.me().subscribe(function (data) { return _this.isAdmin = data.authorities.indexOf('admin') !== -1; }, function () { });
    };
    CategoryComponent.prototype.openPdf = function (link) { window.open(link, '_blank'); };
    CategoryComponent.prototype.download = function (filename) { this.fileService.downloadFile(filename); };
    CategoryComponent.prototype.add = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__add_ebook_add_ebook_component__["a" /* AddEbookComponent */], {
            panelClass: 'dialog-600x800'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.ebookService.add(result.file, result.ebook).subscribe(function () {
                    _this.getEbooks();
                    _this.snackBar.open('Success, new book is added', 'OK', {
                        duration: 4000, verticalPosition: 'top'
                    });
                }, function () {
                    _this.snackBar.open('Error, ebook is not added', 'OK', {
                        duration: 4000, verticalPosition: 'top'
                    });
                });
            }
        });
    };
    CategoryComponent.prototype.edit = function (ebook) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__edit_ebook_edit_ebook_component__["a" /* EditEbookComponent */], {
            panelClass: 'dialog-600x600',
            data: {
                ebook: Object.assign({}, ebook)
            }
        });
        var index = this.ebooks.indexOf(ebook);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.ebookService.edit(result.ebook).subscribe(function (data) {
                    _this.ebooks[index] = data;
                    _this.snackBar.open('Success, ebook is changed!', 'OK', {
                        duration: 4000, verticalPosition: 'top'
                    });
                }, function () {
                    _this.snackBar.open('Error, ebook is not changed!', 'OK', {
                        duration: 4000, verticalPosition: 'top'
                    });
                });
            }
        });
    };
    CategoryComponent.prototype.delete = function (ebook) {
        var _this = this;
        var index = this.ebooks.indexOf(ebook);
        this.snackBar.open("Ebook with title: '" + ebook.title + "' will be deleted. " +
            'Are you sure?', 'Yes', {
            duration: 10000, verticalPosition: 'top'
        }).onAction().subscribe(function () {
            _this.ebookService.delete(ebook).subscribe(function () { return _this.ebooks.splice(index, 1); }, function () { });
        });
    };
    CategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-category',
            template: __webpack_require__("../../../../../src/app/categories/category/category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/categories/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_5__services_file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_8__services_ebook_service__["a" /* EbookService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatSnackBar */]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/categories/edit-ebook/edit-ebook.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categories/edit-ebook/edit-ebook.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title> Edit ebook</h2>\n<mat-dialog-content>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Title\" maxlength=\"80\" [(ngModel)]=\"data.ebook.title\" required>\n    <mat-hint align=\"end\">{{data.ebook.title.length}}/80</mat-hint>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Author\" maxlength=\"120\" [(ngModel)]=\"data.ebook.author\" required>\n    <mat-hint align=\"end\">{{data.ebook.author.length}}/120</mat-hint>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Publication Year\" type=\"number\" [(ngModel)]=\"data.ebook.publicationYear\" required>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <mat-chip-list #keywordList>\n      <mat-chip *ngFor=\"let key of keywords\"\n                [removable]=\"true\" (remove)=\"removeKey(key)\">\n        {{key}}\n        <mat-icon matChipRemove>cancel</mat-icon>\n      </mat-chip>\n      <input placeholder=\"Keywords\"\n             [matChipInputFor]=\"keywordList\"\n             [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n             [matChipInputAddOnBlur]=\"true\"\n             (matChipInputTokenEnd)=\"addKey($event)\" />\n    </mat-chip-list>\n    <mat-hint align=\"end\">{{data.ebook.keywords.length}}/120</mat-hint>\n    <mat-hint>Please add keywords</mat-hint>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <mat-select placeholder=\"Category\" [(ngModel)]=\"data.ebook.category\" required>\n      <mat-option *ngFor=\"let c of categories\" [value]=\"c.id\">\n        {{ c.name}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <mat-select placeholder=\"Language\" [(ngModel)]=\"data.ebook.language\" required>\n      <mat-option *ngFor=\"let l of languages\" [value]=\"l.id\">\n        {{ l.name}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-icon-button [mat-dialog-close]=\"{ebook:data.ebook}\"\n          color=\"primary\" matTooltip=\"Edit ebook\" [disabled]=\"data.ebook.language<=0 ||\n    data.ebook.category<=0 || data.ebook.keywords==='' ||\n    data.ebook.title==='' || data.ebook.author==='' ||\n    data.ebook.publicationYear<=0\">\n    <mat-icon>edit</mat-icon>\n  </button>\n  <span class=\"spacer\"></span>\n  <button mat-icon-button mat-dialog-close matTooltip=\"Close\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/categories/edit-ebook/edit-ebook.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEbookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_language_service__ = __webpack_require__("../../../../../src/app/services/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_keycodes__ = __webpack_require__("../../../cdk/esm5/keycodes.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EditEbookComponent = (function () {
    function EditEbookComponent(data, categoryService, languageService) {
        this.data = data;
        this.categoryService = categoryService;
        this.languageService = languageService;
        this.separatorKeysCodes = [__WEBPACK_IMPORTED_MODULE_4__angular_cdk_keycodes__["g" /* ENTER */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_keycodes__["c" /* COMMA */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_keycodes__["o" /* SPACE */]];
        this.keywords = [];
        this.getCategoriesAndLanguages();
        this.keywords = this.data.ebook.keywords.split(', ');
    }
    EditEbookComponent.prototype.getCategoriesAndLanguages = function () {
        var _this = this;
        this.categoryService.getAll().subscribe(function (data) { return _this.categories = data; });
        this.languageService.getAll().subscribe(function (data) { return _this.languages = data; });
    };
    EditEbookComponent.prototype.addKey = function (event) {
        var input = event.input;
        var value = event.value;
        if ((value || '').trim()) {
            this.keywords.push(value.trim());
        }
        if (input) {
            input.value = '';
        }
        this.data.ebook.keywords = this.keywords.join(', ');
    };
    EditEbookComponent.prototype.removeKey = function (key) {
        var index = this.keywords.indexOf(key);
        if (index >= 0) {
            this.keywords.splice(index, 1);
        }
        this.data.ebook.keywords = this.keywords.join(', ');
    };
    EditEbookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-ebook',
            template: __webpack_require__("../../../../../src/app/categories/edit-ebook/edit-ebook.component.html"),
            styles: [__webpack_require__("../../../../../src/app/categories/edit-ebook/edit-ebook.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_3__services_language_service__["a" /* LanguageService */]])
    ], EditEbookComponent);
    return EditEbookComponent;
}());



/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Edit Profile</h2>\n<mat-dialog-content>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Old password\" type=\"password\" maxlength=\"30\" [(ngModel)]=\"data.user.oldPassword\" required>\n    <mat-hint align=\"end\">{{data.user.oldPassword.length}}/30</mat-hint>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"New password\" type=\"password\" maxlength=\"30\" [(ngModel)]=\"data.user.newPassword\" required>\n    <mat-hint align=\"end\">{{data.user.newPassword.length}}/30</mat-hint>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Repeat new password\" type=\"password\" maxlength=\"30\" [(ngModel)]=\"data.user.newPasswordRepeat\" required>\n    <mat-hint align=\"end\">{{data.user.newPasswordRepeat.length}}/30</mat-hint>\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-icon-button [mat-dialog-close]=\"{user:data.user }\"\n          color=\"primary\" matTooltip=\"Edit\"\n          [disabled]=\"data.user.oldPassword.trim()==='' ||\n                      data.user.newPassword.trim()==='' ||\n                      data.user.newPasswordRepeat.trim()==='' ||\n                      data.user.newPassword!==data.user.newPasswordRepeat\">\n    <mat-icon>edit</mat-icon>\n  </button>\n  <span class=\"spacer\"></span>\n  <button mat-icon-button mat-dialog-close matTooltip=\"Close\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(data) {
        this.data = data;
    }
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-change-password',
            template: __webpack_require__("../../../../../src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/change-password/change-password.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-slide-toggle {\n  margin-top: 1em;\n}\n#bool_button {\n  margin-bottom: 5em;\n}\n.content{\n  margin-top: 2em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center f20\">\n  <mat-slide-toggle color=\"accent\" id=\"bool_button\"\n                    [checked]=\"queryType\" (change)=\"changeQueryType(queryType)\">\n    {{queryType? 'Boolean Query' : 'Standard Query'}}\n  </mat-slide-toggle>\n  <br>\n  <div *ngIf=\"!queryType\">\n    <mat-form-field>\n      <mat-select placeholder=\"Field\" [(ngModel)]=\"query.field\">\n        <mat-option *ngFor=\"let f of fields\" [value]=\"f\">{{f | uppercase}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field class=\"w30\">\n      <input matInput type=\"text\" placeholder=\"Search\" [(ngModel)]=\"query.value\">\n    </mat-form-field>\n    <mat-form-field>\n      <mat-select placeholder=\"Query\" [(ngModel)]=\"query.numQ\">\n        <mat-option *ngFor=\"let q of queries; let i=index\" [value]=\"i\">{{q}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <br>\n    <button mat-fab color=\"primary\" (click)=\"search()\" [disabled]=\"query.value===''\">\n      <mat-icon>search</mat-icon>\n    </button>\n  </div>\n  <div *ngIf=\"queryType\">\n    <div *ngFor=\"let b of boolQuery.queries\">\n      <mat-form-field>\n        <mat-select placeholder=\"Field\" [(ngModel)]=\"b.field\">\n          <mat-option *ngFor=\"let f of fields\" [value]=\"f\">{{f | uppercase}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field class=\"w30\">\n        <input matInput type=\"text\" placeholder=\"Search\" [(ngModel)]=\"b.value\">\n      </mat-form-field>\n      <button mat-mini-fab color=\"primary\" matTooltip=\"Add new Field\" (click)=\"addField()\"\n              [disabled]=\"boolQuery.queries.length >= 15\">\n        <mat-icon>add</mat-icon>\n      </button>\n      <button mat-mini-fab color=\"warn\" matTooltip=\"Remove field\" (click)=\"removeField(b)\"\n              [disabled]=\"boolQuery.queries.length == 1\">\n        <mat-icon>delete</mat-icon>\n      </button>\n    </div>\n    <mat-slide-toggle color=\"accent\"\n                      [checked]=\"must\" (change)=\"changeQuery(must)\">\n      {{must? 'Must' : 'Should'}}\n    </mat-slide-toggle>\n    <button mat-fab color=\"primary\" [disabled]=\"isValidBool()\" (click)=\"search(true)\">\n      <mat-icon>search</mat-icon>\n    </button>\n  </div>\n</div>\n<div *ngIf=\"result.length!==0\" >\n  <mat-list>\n    <mat-list-item *ngFor=\"let r of result\" class=\"content\">\n      <p mat-line><b>{{r.title}}</b></p>\n      <p mat-line><i>{{r.keywords}}</i></p>\n      <p mat-line [innerHTML]=\"r.highlight\"></p>\n      <button mat-button color=\"primary\" (click)=\"openPdf(r.href)\" matTooltip=\"Open in new tab\" *ngIf=\"r.location\">\n        <mat-icon>open_in_new</mat-icon>\n      </button>\n      <button mat-button color=\"primary\" (click)=\"download(r.location)\" matTooltip=\"Download file\" *ngIf=\"r.location\">\n        <mat-icon>file_download</mat-icon>\n      </button>\n      <mat-divider></mat-divider>\n    </mat-list-item>\n  </mat-list>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_query__ = __webpack_require__("../../../../../src/app/model/query.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_bool_query__ = __webpack_require__("../../../../../src/app/model/bool-query.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = (function () {
    function HomeComponent(searchService, snackBar, fileService) {
        this.searchService = searchService;
        this.snackBar = snackBar;
        this.fileService = fileService;
        this.fields = ['title', 'author', 'keyword', 'text', 'language'];
        this.queries = ['Regular', 'Fuzzy', 'Pharse', 'Range', 'Prefix'];
        this.result = [];
        this.must = false;
        this.queryType = false;
        this.query = new __WEBPACK_IMPORTED_MODULE_1__model_query__["a" /* Query */]();
        this.boolQuery = new __WEBPACK_IMPORTED_MODULE_5__model_bool_query__["a" /* BoolQuery */]();
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.changeQueryType = function (v) { this.queryType = !v; };
    HomeComponent.prototype.changeQuery = function (v) { this.must = !v; };
    HomeComponent.prototype.openPdf = function (link) { window.open(link, '_blank'); };
    HomeComponent.prototype.download = function (filename) { this.fileService.downloadFile(filename); };
    HomeComponent.prototype.search = function (bool) {
        var _this = this;
        var queryTypeReturnService;
        if (bool) {
            queryTypeReturnService = this.searchService.searchBool(this.boolQuery);
        }
        else {
            queryTypeReturnService = this.searchService.search(this.query);
        }
        queryTypeReturnService.subscribe(function (data) {
            _this.result = data;
            if (_this.result.length === 0) {
                _this.snackBar.open('Result is empty, try again!', 'Ok', {
                    duration: 4000, verticalPosition: 'top'
                });
            }
            else {
                _this.result.forEach(function (value, index) {
                    _this.fileService.getBlobResult(_this.result[index]);
                    _this.result[index].highlight = _this.result[index].highlight.split('\n').join('</br>');
                    _this.result[index].highlight = _this.result[index].highlight.replace('null', '');
                });
            }
        }, function () {
            _this.snackBar.open('Error with your query, try again!', 'Ok', {
                duration: 4000, verticalPosition: 'top'
            });
        });
    };
    HomeComponent.prototype.addField = function () { this.boolQuery.queries.push(new __WEBPACK_IMPORTED_MODULE_1__model_query__["a" /* Query */]()); };
    HomeComponent.prototype.removeField = function (b) {
        var index = this.boolQuery.queries.indexOf(b);
        this.boolQuery.queries.splice(index, 1);
    };
    HomeComponent.prototype.isValidBool = function () { return this.boolQuery.queries.filter(function (v) { return v.value.trim() === ''; }).length > 0; };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_4__services_file_service__["a" /* FileService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/languages/add-edit-lang/add-edit-lang.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/languages/add-edit-lang/add-edit-lang.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{data.title}}</h2>\n<mat-dialog-content>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Name\" maxlength=\"30\" [(ngModel)]=\"data.lang.name\" required>\n    <mat-hint align=\"end\">{{data.lang.name.length}}/30</mat-hint>\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-icon-button [mat-dialog-close]=\"{result:true, lang:data.lang}\"\n          color=\"primary\" matTooltip=\"{{data.tooltip}}\"\n          [disabled]=\"data.lang.name.trim()===''\">\n    <mat-icon>{{data.icon}}</mat-icon>\n  </button>\n  <span class=\"spacer\"></span>\n  <button mat-icon-button mat-dialog-close matTooltip=\"Close\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/languages/add-edit-lang/add-edit-lang.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEditLangComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AddEditLangComponent = (function () {
    function AddEditLangComponent(data) {
        this.data = data;
        if (this.data.add) {
            this.data.lang.name = '';
        }
    }
    AddEditLangComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-edit-lang',
            template: __webpack_require__("../../../../../src/app/languages/add-edit-lang/add-edit-lang.component.html"),
            styles: [__webpack_require__("../../../../../src/app/languages/add-edit-lang/add-edit-lang.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], AddEditLangComponent);
    return AddEditLangComponent;
}());



/***/ }),

/***/ "../../../../../src/app/languages/languages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/languages/languages.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isAdmin\">\n  <div style=\"padding: 8px 24px 0\">\n    <mat-form-field class=\"full-width f20\">\n      <mat-icon matPrefix>search</mat-icon>\n      <input matInput placeholder=\"Filter\" [(ngModel)]=\"filter\">\n    </mat-form-field>\n    <mat-toolbar>\n      <button mat-fab color=\"primary\" matTooltip=\"Add new language\" (click)=\"add()\">\n        <mat-icon>add</mat-icon>\n      </button>\n      <span class=\"spacer\"></span>\n      <button mat-fab color=\"primary\" (click)=\"getAll()\" matTooltip=\"Refresh\">\n        <mat-icon>refresh</mat-icon>\n      </button>\n    </mat-toolbar>\n  </div>\n  <mat-list>\n    <mat-list-item *ngFor=\"let l of languages | search:'name':filter\">\n      <mat-icon mat-list-icon>language</mat-icon>\n      <h4 mat-line>{{l.name}}</h4>\n      <button mat-button color=\"primary\" *ngIf=\"isAdmin\" (click)=\"edit(l)\" matTooltip=\"Update\">\n        <mat-icon>edit</mat-icon>\n      </button>\n      <button mat-button color=\"warn\" *ngIf=\"isAdmin\" (click)=\"deleteLanguage(l)\" matTooltip=\"delete\">\n        <mat-icon>delete</mat-icon>\n      </button>\n    </mat-list-item>\n  </mat-list>\n</div>\n<app-not-found *ngIf=\"!isAdmin\"></app-not-found>\n"

/***/ }),

/***/ "../../../../../src/app/languages/languages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_category_or_lang__ = __webpack_require__("../../../../../src/app/model/category-or-lang.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_language_service__ = __webpack_require__("../../../../../src/app/services/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_edit_lang_add_edit_lang_component__ = __webpack_require__("../../../../../src/app/languages/add-edit-lang/add-edit-lang.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LanguagesComponent = (function () {
    function LanguagesComponent(dialog, snackBar, languageService, authService) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.languageService = languageService;
        this.authService = authService;
        this.isAdmin = false;
        this.getAll();
        this.checkAdmin();
    }
    LanguagesComponent.prototype.getAll = function () {
        var _this = this;
        this.languageService.getAll().subscribe(function (data) {
            _this.languages = data;
        }, function () {
            _this.snackBar.open('Error with read languages!', 'Ok', {
                duration: 4000, verticalPosition: 'top'
            });
        });
    };
    LanguagesComponent.prototype.checkAdmin = function () {
        var _this = this;
        this.authService.me().subscribe(function (data) {
            _this.isAdmin = data.authorities.indexOf('admin') !== -1;
        }, function () { });
    };
    LanguagesComponent.prototype.add = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__add_edit_lang_add_edit_lang_component__["a" /* AddEditLangComponent */], {
            panelClass: 'dialog-600x400',
            data: {
                add: true, title: 'Add new language', icon: 'add',
                tooltip: 'Add category', lang: new __WEBPACK_IMPORTED_MODULE_3__model_category_or_lang__["a" /* CategoryOrLang */]()
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.languageService.add(result.lang).subscribe(function (data) {
                    _this.languages.push(data);
                    _this.snackBar.open('Successfully added!', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                }, function () {
                    _this.snackBar.open('Error with add new language', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                });
            }
        });
    };
    LanguagesComponent.prototype.edit = function (lang) {
        var _this = this;
        var index = this.languages.indexOf(lang);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__add_edit_lang_add_edit_lang_component__["a" /* AddEditLangComponent */], {
            panelClass: 'dialog-600x400',
            data: {
                title: 'Edit language', icon: 'edit',
                tooltip: 'Edit language', lang: Object.assign({}, lang)
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.languageService.edit(result.lang).subscribe(function (data) {
                    _this.languages[index] = data;
                    _this.snackBar.open('Successfully changed!', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                }, function () {
                    _this.snackBar.open('Error with change language attributes', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                });
            }
        });
    };
    LanguagesComponent.prototype.deleteLanguage = function (lang) {
        var _this = this;
        var index = this.languages.indexOf(lang);
        this.snackBar.open("All ebooks written in the " + lang.name + " will be deleted. " +
            'Are you sure?', 'Yes', {
            duration: 10000, verticalPosition: 'top'
        }).onAction().subscribe(function () {
            _this.languageService.delete(lang).subscribe(function () { return _this.languages.splice(index, 1); }, function () { });
        });
    };
    LanguagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-languages',
            template: __webpack_require__("../../../../../src/app/languages/languages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/languages/languages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__services_language_service__["a" /* LanguageService */], __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], LanguagesComponent);
    return LanguagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Login page</h2>\n<mat-dialog-content>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Username\" [(ngModel)]=\"data.user.username\" required>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"data.user.password\" required>\n  </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"{result:true, user:data.user }\">Login</button>\n  <button mat-button mat-dialog-close>Cancel</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var LoginComponent = (function () {
    function LoginComponent(data) {
        this.data = data;
    }
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/bool-query.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoolQuery; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__query__ = __webpack_require__("../../../../../src/app/model/query.ts");

var BoolQuery = (function () {
    function BoolQuery() {
        this.queries = [];
        this.queries.push(new __WEBPACK_IMPORTED_MODULE_0__query__["a" /* Query */]());
        this.must = false;
    }
    return BoolQuery;
}());



/***/ }),

/***/ "../../../../../src/app/model/category-or-lang.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryOrLang; });
var CategoryOrLang = (function () {
    function CategoryOrLang() {
    }
    return CategoryOrLang;
}());



/***/ }),

/***/ "../../../../../src/app/model/ebook.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ebook; });
var Ebook = (function () {
    function Ebook() {
        this.title = '';
        this.author = '';
        this.keywords = '';
        this.filename = '';
        return this;
    }
    return Ebook;
}());



/***/ }),

/***/ "../../../../../src/app/model/query.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Query; });
var Query = (function () {
    function Query() {
        this.field = 'title';
        this.value = '';
        this.numQ = 0;
    }
    return Query;
}());



/***/ }),

/***/ "../../../../../src/app/model/user-api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserApi; });
var UserApi = (function () {
    function UserApi() {
        this.id = 0;
        this.firstName = '';
        this.lastName = '';
        this.username = '';
        this.password = '';
        this.categories = [];
    }
    return UserApi;
}());



/***/ }),

/***/ "../../../../../src/app/model/user-password.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPassword; });
var UserPassword = (function () {
    function UserPassword() {
        this.oldPassword = '';
        this.newPassword = '';
        this.newPasswordRepeat = '';
    }
    return UserPassword;
}());



/***/ }),

/***/ "../../../../../src/app/model/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <mat-toolbar-row>\n    <span>Ebook</span>\n  </mat-toolbar-row>\n  <mat-toolbar-row *ngIf=\"!nav_items || nav_items.length==0\">\n    <mat-spinner></mat-spinner>\n  </mat-toolbar-row>\n  <mat-toolbar-row>\n    <button *ngFor=\"let nav of nav_items\" mat-button color=\"primary\" [routerLink]=\"[nav.route]\" matTooltip=\"{{nav.name}}\">\n      <mat-icon>{{nav.icon}}</mat-icon>\n      {{nav.name}}\n    </button>\n    <button mat-button color=\"primary\" [routerLink]=\"['users/', me.username]\" *ngIf=\"login\">\n      <mat-icon>person</mat-icon>\n      Profile\n    </button>\n    <span class=\"spacer\"></span>\n    <button mat-button *ngIf=\"login\" color=\"primary\" (click)=\"changePassword()\">\n      <mat-icon>edit</mat-icon>\n      Change password\n    </button>\n    <button mat-button *ngIf=\"login\" color=\"primary\" (click)=\"editProfile()\">\n      <mat-icon>edit</mat-icon>\n      Edit profile\n    </button>\n    <button mat-button *ngIf=\"!login\" (click)=\"loginPage()\">Login</button>\n    <button mat-button *ngIf=\"login\" (click)=\"logout()\">Logout</button>\n  </mat-toolbar-row>\n</mat-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_user_api__ = __webpack_require__("../../../../../src/app/model/user-api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_user__ = __webpack_require__("../../../../../src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_edit_user_edit_user_component__ = __webpack_require__("../../../../../src/app/users/edit-user/edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__change_password_change_password_component__ = __webpack_require__("../../../../../src/app/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model_user_password__ = __webpack_require__("../../../../../src/app/model/user-password.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var NavigationComponent = (function () {
    function NavigationComponent(dialog, authService, userService, snackBar) {
        this.dialog = dialog;
        this.authService = authService;
        this.userService = userService;
        this.snackBar = snackBar;
        this.me = new __WEBPACK_IMPORTED_MODULE_4__model_user_api__["a" /* UserApi */]();
        this.check();
    }
    NavigationComponent.prototype.loginPage = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */], {
            panelClass: 'dialog-600x400',
            data: { user: new __WEBPACK_IMPORTED_MODULE_5__model_user__["a" /* User */]() }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.authService.loginPost(result.user).subscribe(function (data) {
                    _this.authService.setToken(data);
                    window.location.reload();
                }, function () {
                    _this.snackBar.open('Login data is not valid! Please login!', 'Login', {
                        duration: 4000, verticalPosition: 'top'
                    }).onAction().subscribe(function () { return _this.loginPage(); });
                });
            }
        });
    };
    NavigationComponent.prototype.check = function () {
        var _this = this;
        this.login = false;
        this.authService.check().subscribe(function () {
            _this.login = true;
            _this.navItems();
        }, function (err) {
            if (err.status !== 403) {
                _this.authService.removeToken();
                setTimeout(function () { return _this.check(); }, 3000);
            }
            _this.login = false;
            _this.navItems();
        });
    };
    NavigationComponent.prototype.logout = function () { this.authService.logout(); };
    NavigationComponent.prototype.navItems = function () {
        var _this = this;
        this.authService.nav_items().subscribe(function (data) {
            _this.nav_items = data;
            _this.authService.me().subscribe(function (user) { return _this.me = user; }, function () { });
        }, function () { return _this.nav_items = []; });
    };
    NavigationComponent.prototype.editProfile = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__users_edit_user_edit_user_component__["a" /* EditUserComponent */], {
            panelClass: 'dialog-600x600',
            data: { user: Object.assign({}, this.me) }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.userService.update(result.user).subscribe(function (data) {
                    _this.me = data;
                    _this.snackBar.open('Successfully changed!', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                    if (window.location.href.indexOf('users') !== -1) {
                        window.location.reload();
                    }
                });
            }
        });
    };
    NavigationComponent.prototype.changePassword = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__change_password_change_password_component__["a" /* ChangePasswordComponent */], {
            panelClass: 'dialog-600x400',
            data: { user: new __WEBPACK_IMPORTED_MODULE_9__model_user_password__["a" /* UserPassword */]() }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.userService.changePassword(_this.me.id, result.user).subscribe(function () {
                    _this.snackBar.open('Successfully changed!', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                }, function () {
                    _this.snackBar.open('Error with change password!', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                });
            }
        });
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatSnackBar */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n      <h1>Page not found</h1>\n      <img src=\"assets/404-snow.gif\" width=\"400\">\n      <br>\n      <p>{{date | date: 'dd.MM.yyyy.'}}</p>\n      <p>{{date | date: 'HH:mm'}}</p>\n      <p><i>{{location}}</i></p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
        this.location = window.location.href;
        this.date = new Date();
    }
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    // https://stackoverflow.com/questions/40678206/angular-2-filter-search-list
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, keys, term) {
        if (!term) {
            return value;
        }
        return (value || []).filter(function (item) { return keys.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]); }); });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'search'
        })
        // https://stackoverflow.com/questions/40678206/angular-2-filter-search-list
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    // private auth = 'http://localhost:8080/auth/';
    // private api = 'http://localhost:8080/api/';
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.loginPost = function (user) {
        var body = "username=" + user.username + "&password=" + user.password;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };
        return this.http.post('/auth/login', body, httpOptions);
    };
    AuthService.prototype.setToken = function (data) {
        localStorage.setItem('token', "jwt " + data.access_token);
    };
    AuthService.prototype.removeToken = function () {
        localStorage.removeItem('token');
        this.getDefault();
    };
    AuthService.prototype.logout = function () {
        var token = localStorage.getItem('token');
        this.removeToken();
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': token })
        };
        this.http.get('/auth/logout', httpOptions).subscribe(function () {
            setTimeout(function () { return window.location.reload(); }, 1000);
        }, function () { });
    };
    AuthService.prototype.getDefault = function () {
        var _this = this;
        if (!localStorage.getItem('token')) {
            this.http.get('/api/get').subscribe(function (data) { return _this.setToken(data); });
        }
    };
    AuthService.prototype.check = function () {
        this.getDefault();
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': localStorage.getItem('token') })
        };
        return this.http.get('/api/check', httpOptions);
    };
    AuthService.prototype.me = function () {
        this.getDefault();
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': localStorage.getItem('token') })
        };
        return this.http.get('/api/me', httpOptions);
    };
    AuthService.prototype.nav_items = function () {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': localStorage.getItem('token') })
        };
        return this.http.get('/api/nav_items', httpOptions);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
        this.categories = '/api/categories/';
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': localStorage.getItem('token') })
        };
    }
    CategoryService.prototype.getAll = function () {
        return this.http.get(this.categories, this.httpOptions);
    };
    CategoryService.prototype.add = function (category) {
        return this.http.post(this.categories, category, this.httpOptions);
    };
    CategoryService.prototype.edit = function (category) {
        return this.http.put("" + this.categories + category.id, category, this.httpOptions);
    };
    CategoryService.prototype.get = function (id) {
        return this.http.get("" + this.categories + id, this.httpOptions);
    };
    CategoryService.prototype.getEbooks = function (id) {
        return this.http.get("" + this.categories + id + "/ebooks", this.httpOptions);
    };
    CategoryService.prototype.getUsers = function (id) {
        return this.http.get("" + this.categories + id + "/users", this.httpOptions);
    };
    CategoryService.prototype.delete = function (category) {
        var id = typeof category === 'number' ? category : category.id;
        return this.http.delete("" + this.categories + id, this.httpOptions);
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "../../../../../src/app/services/ebook.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EbookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EbookService = (function () {
    function EbookService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': localStorage.getItem('token') })
        };
        this.ebooks = '/api/ebooks/';
    }
    EbookService.prototype.checkUploadEbook = function (file) {
        var formData = new FormData();
        formData.append('file', file);
        return this.http.post(this.ebooks + "upload", formData, this.httpOptions);
    };
    EbookService.prototype.add = function (file, ebook) {
        var formData = new FormData();
        formData.append('file', file);
        formData.append('title', ebook.title);
        formData.append('author', ebook.author);
        formData.append('publicationYear', String(ebook.publicationYear));
        formData.append('keywords', ebook.keywords);
        formData.append('category', String(ebook.category));
        formData.append('language', String(ebook.language));
        return this.http.post("" + this.ebooks, formData, this.httpOptions);
    };
    EbookService.prototype.delete = function (ebook) {
        var id = typeof ebook === 'number' ? ebook : ebook.id;
        return this.http.delete("" + this.ebooks + id, this.httpOptions);
    };
    EbookService.prototype.edit = function (ebook) {
        return this.http.put("" + this.ebooks + ebook.id, ebook, this.httpOptions);
    };
    EbookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], EbookService);
    return EbookService;
}());



/***/ }),

/***/ "../../../../../src/app/services/file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileService = (function () {
    function FileService(http) {
        this.http = http;
        // private local = 'http://localhost:8080/';
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': localStorage.getItem('token'),
                'Accept': 'application/pdf' })
        };
    }
    FileService.prototype.downloadFile = function (filename) {
        this.http.get(filename, { headers: this.httpOptions.headers, responseType: 'blob' })
            .subscribe(function (data) {
            Object(__WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"])(data, filename.substr(6));
        }, function () { });
    };
    FileService.prototype.getBlob = function (ebook) {
        this.http.get(ebook.filename, { headers: this.httpOptions.headers, responseType: 'blob' })
            .subscribe(function (data) {
            ebook.href = URL.createObjectURL(data);
        }, function () { });
    };
    FileService.prototype.getBlobResult = function (resultData) {
        this.http.get(resultData.location, { headers: this.httpOptions.headers, responseType: 'blob' })
            .subscribe(function (data) {
            resultData.href = URL.createObjectURL(data);
        }, function () { });
    };
    FileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "../../../../../src/app/services/language.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LanguageService = (function () {
    function LanguageService(http) {
        this.http = http;
        this.languages = '/api/languages/';
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': localStorage.getItem('token') })
        };
    }
    LanguageService.prototype.getAll = function () {
        return this.http.get(this.languages, this.httpOptions);
    };
    LanguageService.prototype.add = function (language) {
        return this.http.post(this.languages, language, this.httpOptions);
    };
    LanguageService.prototype.edit = function (language) {
        return this.http.put("" + this.languages + language.id, language, this.httpOptions);
    };
    LanguageService.prototype.delete = function (language) {
        var id = typeof language === 'number' ? language : language.id;
        return this.http.delete("" + this.languages + id, this.httpOptions);
    };
    LanguageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LanguageService);
    return LanguageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': localStorage.getItem('token') })
        };
    }
    SearchService.prototype.search = function (query) {
        return this.http.post('/search', query, this.httpOptions);
    };
    SearchService.prototype.searchBool = function (boolQuery) {
        return this.http.post('/searchb', boolQuery, this.httpOptions);
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.users = '/api/users/';
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': localStorage.getItem('token') })
        };
    }
    UserService.prototype.getAll = function () {
        return this.http.get(this.users, this.httpOptions);
    };
    UserService.prototype.delete = function (user) {
        var id = typeof user === 'number' ? user : user.id;
        return this.http.delete("" + this.users + id, this.httpOptions);
    };
    UserService.prototype.add = function (user) {
        return this.http.post(this.users, user, this.httpOptions);
    };
    UserService.prototype.get = function (id) {
        var byUsername = typeof id === 'number' ? false : true;
        if (byUsername) {
            return this.http.get(this.users + "u=" + id, this.httpOptions);
        }
        else {
            return this.http.get("" + this.users + id, this.httpOptions);
        }
    };
    UserService.prototype.update = function (user) {
        return this.http.put("" + this.users + user.id, user, this.httpOptions);
    };
    UserService.prototype.changePassword = function (id, user) {
        return this.http.patch("" + this.users + id + "/password", user, this.httpOptions);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/users/add-user/add-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/add-user/add-user.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add new user</h2>\n<mat-dialog-content>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"First name\" maxlength=\"30\" [(ngModel)]=\"data.user.firstName\" required>\n    <mat-hint align=\"end\">{{data.user.firstName.length}}/30</mat-hint>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Last name\" maxlength=\"30\" [(ngModel)]=\"data.user.lastName\" required>\n    <mat-hint align=\"end\">{{data.user.lastName.length}}/30</mat-hint>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Username\" maxlength=\"30\" [(ngModel)]=\"data.user.username\" required>\n    <mat-hint align=\"end\">{{data.user.username.length}}/30</mat-hint>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Password\" type=\"password\" maxlength=\"20\" [(ngModel)]=\"data.user.password\" required>\n    <mat-hint align=\"end\">{{data.user.password.length}}/20</mat-hint>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"full-width\">\n    <mat-select placeholder=\"Authority\" [(ngModel)]=\"data.user.authorities\" required>\n      <mat-option *ngFor=\"let authority of authorities\" [value]=\"authority.value\">\n        {{ authority.name}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <mat-select placeholder=\"Categories\" [(ngModel)]=\"data.user.categories\" multiple>\n      <mat-option *ngFor=\"let c of categories\" [value]=\"c\">{{c.name}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-icon-button [mat-dialog-close]=\"{result:true, user:data.user }\"\n          color=\"primary\" matTooltip=\"Add new\"\n          [disabled]=\"data.user.username.trim()==='' ||\n                      data.user.firstName.trim()==='' ||\n                      data.user.lastName.trim()==='' ||\n                      data.user.password.trim()===''\">\n    <mat-icon>add</mat-icon>\n  </button>\n  <span class=\"spacer\"></span>\n  <button mat-icon-button mat-dialog-close matTooltip=\"Close\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/users/add-user/add-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AddUserComponent = (function () {
    function AddUserComponent(data, categoryService) {
        this.data = data;
        this.categoryService = categoryService;
        this.authorities = [
            { name: 'Admin', value: ['admin'] },
            { name: 'Pretplatilac', value: ['pretplatilac'] }
        ];
        this.categories = [];
        // this.data.user.empty();
        this.data.user.authorities = this.authorities[1].value;
        this.getAllCategories();
    }
    AddUserComponent.prototype.getAllCategories = function () {
        var _this = this;
        this.categoryService.getAll().subscribe(function (data) { return _this.categories = data; });
    };
    AddUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-user',
            template: __webpack_require__("../../../../../src/app/users/add-user/add-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/add-user/add-user.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/edit-user/edit-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/edit-user/edit-user.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Edit Profile</h2>\n<mat-dialog-content>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"First name\" maxlength=\"30\" [(ngModel)]=\"data.user.firstName\" required>\n    <mat-hint align=\"end\">{{data.user.firstName.length}}/30</mat-hint>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Last name\" maxlength=\"30\" [(ngModel)]=\"data.user.lastName\" required>\n    <mat-hint align=\"end\">{{data.user.lastName.length}}/30</mat-hint>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Username\" maxlength=\"30\" [(ngModel)]=\"data.user.username\" required>\n    <mat-hint align=\"end\">{{data.user.username.length}}/30</mat-hint>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"full-width\">\n    <mat-select placeholder=\"Authority\" [(ngModel)]=\"data.user.authorities\" required [disabled]=\"!isAdmin\">\n      <mat-option *ngFor=\"let authority of authorities\" [value]=\"authority.value\">\n        {{ authority.name}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\" *ngIf=\"isAdmin && !userIsAdmin\">\n    <mat-select placeholder=\"Categories\" [(ngModel)]=\"data.user.categories\"\n               [compareWith]=\"categoryCompare\" multiple>\n      <mat-option *ngFor=\"let c of categories\" [value]=\"c\">{{c.name}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-icon-button [mat-dialog-close]=\"{result:true, user:data.user }\"\n          color=\"primary\" matTooltip=\"Edit\"\n          [disabled]=\"data.user.username.trim()==='' ||\n                      data.user.firstName.trim()==='' ||\n                      data.user.lastName.trim()===''\">\n    <mat-icon>edit</mat-icon>\n  </button>\n  <span class=\"spacer\"></span>\n  <button mat-icon-button mat-dialog-close matTooltip=\"Close\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/users/edit-user/edit-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var EditUserComponent = (function () {
    function EditUserComponent(data, categoryService, authService) {
        this.data = data;
        this.categoryService = categoryService;
        this.authService = authService;
        this.authorities = [
            { name: 'Admin', value: ['admin'] },
            { name: 'Pretplatilac', value: ['pretplatilac'] }
        ];
        this.isAdmin = false;
        this.userIsAdmin = false;
        if (this.data.user.authorities.indexOf('admin') !== -1) {
            this.data.user.authorities = this.authorities[0].value;
            this.userIsAdmin = true;
        }
        else {
            this.data.user.authorities = this.authorities[1].value;
        }
        this.getMe();
        this.getAllCategories();
    }
    EditUserComponent.prototype.getAllCategories = function () {
        var _this = this;
        this.categoryService.getAll().subscribe(function (data) { return _this.categories = data; });
    };
    EditUserComponent.prototype.getMe = function () {
        var _this = this;
        this.authService.me().subscribe(function (data) {
            if (data.authorities.indexOf('admin') !== -1) {
                _this.isAdmin = true;
            }
        });
    };
    EditUserComponent.prototype.categoryCompare = function (c1, c2) { return c1.id === c2.id; };
    EditUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-user',
            template: __webpack_require__("../../../../../src/app/users/edit-user/edit-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/edit-user/edit-user.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field{\n  font-size: 1.5em;\n}\ndiv{\n  margin-top: 1em;\n  margin-left: 5em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user!=null\">\n    <mat-form-field>\n      <input matInput placeholder=\"Username\" [(ngModel)]=\"user.username\" disabled>\n    </mat-form-field>\n    <br>\n    <mat-form-field>\n      <input matInput placeholder=\"First name\" [(ngModel)]=\"user.firstName\" disabled>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Last name\" [(ngModel)]=\"user.lastName\" disabled>\n    </mat-form-field>\n    <br>\n    <mat-form-field>\n        <input matInput placeholder=\"Authorities\" [(ngModel)]=\"user.authorities\" disabled>\n    </mat-form-field>\n    <p *ngIf=\"!isAdmin\">Categories</p>\n    <mat-chip-list *ngIf=\"!isAdmin\">\n      <mat-chip *ngIf=\"!user.categories || user.categories.length===0\">None</mat-chip>\n      <mat-chip color=\"accent\" *ngFor=\"let c of user.categories\">{{c.name}}</mat-chip>\n    </mat-chip-list>\n</div>\n<app-not-found *ngIf=\"user===null\"></app-not-found>\n"

/***/ }),

/***/ "../../../../../src/app/users/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_user_api__ = __webpack_require__("../../../../../src/app/model/user-api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = (function () {
    function UserComponent(route, userService, _router) {
        this.route = route;
        this.userService = userService;
        this._router = _router;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__model_user_api__["a" /* UserApi */]();
        this.isAdmin = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +this.route.snapshot.paramMap.get('id');
        if (isNaN(this.id)) {
            this.id = this.route.snapshot.paramMap.get('id');
        }
        this.get();
        this._router.events.filter(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
            .subscribe(function (event) {
            if (event.urlAfterRedirects.indexOf('users/') !== -1) {
                _this.id = event.urlAfterRedirects.split('/').pop();
                _this.get();
            }
        });
    };
    UserComponent.prototype.get = function () {
        var _this = this;
        this.userService.get(this.id).subscribe(function (data) {
            _this.user = data;
            _this.isAdmin = data.authorities.indexOf('admin') !== -1;
        }, function () { return _this.user = null; });
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/users/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"users.data!==null\">\n  <div style=\"padding: 8px 24px 0\">\n    <mat-form-field class=\"full-width f20\">\n      <mat-icon matPrefix>search</mat-icon>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n    <mat-toolbar>\n      <button mat-fab color=\"primary\" (click)=\"addUser()\" matTooltip=\"Add new user\">\n        <mat-icon>person_add</mat-icon>\n      </button>\n      <span class=\"spacer\"></span>\n      <button mat-fab color=\"primary\" (click)=\"getAll()\" matTooltip=\"Refresh\">\n        <mat-icon>refresh</mat-icon>\n      </button>\n    </mat-toolbar>\n  </div>\n  <mat-spinner *ngIf=\"loading\"></mat-spinner>\n  <mat-table *ngIf=\"!loading\" #table [dataSource]=\"users\">\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef> First name </mat-header-cell>\n      <mat-cell *matCellDef=\"let user\"> {{user.firstName}} </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"surname\">\n      <mat-header-cell *matHeaderCellDef> Last name </mat-header-cell>\n      <mat-cell *matCellDef=\"let user\"> {{user.lastName}} </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"username\">\n      <mat-header-cell *matHeaderCellDef> Username </mat-header-cell>\n      <mat-cell *matCellDef=\"let user\"> {{user.username}} </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"authorities\">\n      <mat-header-cell *matHeaderCellDef> Authorities </mat-header-cell>\n      <mat-cell *matCellDef=\"let user\"> {{user.authorities}} </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"options\">\n      <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n      <mat-cell *matCellDef=\"let user\">\n        <a mat-button color=\"primary\" [routerLink]=\"['/users',user.username]\" matTooltip=\"Open\">\n          <mat-icon>person</mat-icon>\n        </a>\n        <button *ngIf=\"user.authorities.indexOf('pretplatilac')>-1\" mat-button color=\"accent\"\n                (click)=\"updateUser(user)\" matTooltip=\"Update\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button *ngIf=\"user.authorities.indexOf('pretplatilac')>-1\" mat-button color=\"warn\"\n                (click)=\"deleteUser(user)\" matTooltip=\"Delete\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n  <mat-paginator #paginator [pageSize]=\"5\"\n                 [pageSizeOptions]=\"[5, 10, 20, 50, 100]\">\n  </mat-paginator>\n</div>\n<app-not-found *ngIf=\"users.data===null\"></app-not-found>\n"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_user_api__ = __webpack_require__("../../../../../src/app/model/user-api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_user_add_user_component__ = __webpack_require__("../../../../../src/app/users/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_user_edit_user_component__ = __webpack_require__("../../../../../src/app/users/edit-user/edit-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersComponent = (function () {
    function UsersComponent(dialog, userService, snackBar) {
        this.dialog = dialog;
        this.userService = userService;
        this.snackBar = snackBar;
        this.displayedColumns = ['name', 'surname', 'username', 'authorities', 'options'];
        this.users = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatTableDataSource */]();
    }
    UsersComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.users.filter = filterValue;
    };
    UsersComponent.prototype.ngOnInit = function () {
        this.users.paginator = this.paginator;
        this.getAll();
    };
    UsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.snackBar.open('Are you sure?', 'Yes', {
            duration: 10000, verticalPosition: 'top'
        }).onAction().subscribe(function () {
            _this.users.data = _this.users.data.filter(function (u) { return u !== user; });
            _this.userService.delete(user).subscribe(function () { return _this.getAll(); });
        });
    };
    UsersComponent.prototype.getAll = function () {
        var _this = this;
        this.loading = true;
        this.userService.getAll().subscribe(function (data) {
            _this.users.data = data;
            _this.loading = false;
        }, function (err) {
            if (err.status !== 403) {
                _this.snackBar.open('Something is wrong with the server', 'OK', {
                    duration: 4000, verticalPosition: 'top'
                });
            }
            else {
                _this.users.data = null;
            }
        });
    };
    UsersComponent.prototype.addUser = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__add_user_add_user_component__["a" /* AddUserComponent */], {
            panelClass: 'dialog-600x600',
            data: {
                user: new __WEBPACK_IMPORTED_MODULE_3__model_user_api__["a" /* UserApi */]()
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.userService.add(result.user).subscribe(function () {
                    _this.getAll();
                    _this.snackBar.open('Successfully added!', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                }, function () {
                    _this.snackBar.open("Error, user with username: '" + result.user.username + "' can not be added", 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                });
            }
        });
    };
    UsersComponent.prototype.updateUser = function (user) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__edit_user_edit_user_component__["a" /* EditUserComponent */], {
            panelClass: 'dialog-600x600',
            data: {
                user: Object.assign({}, user)
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.userService.update(result.user).subscribe(function () {
                    _this.getAll();
                    _this.snackBar.open('Successfully changed!', 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                }, function () {
                    _this.snackBar.open("Error, user with username " + result.user.username + " is already exists", 'Ok', {
                        duration: 4000, verticalPosition: 'top'
                    });
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatPaginator */])
    ], UsersComponent.prototype, "paginator", void 0);
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSnackBar */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map