(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["food-images-food-images-module"],{

/***/ "+7s2":
/*!******************************************************!*\
  !*** ./src/app/food-images/food-images.component.ts ***!
  \******************************************************/
/*! exports provided: FoodImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodImagesComponent", function() { return FoodImagesComponent; });
/* harmony import */ var _shared_list_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/list-container */ "Gw4x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _api_get_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/get-image.service */ "hUyP");
/* harmony import */ var _shared_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/search-input/search-input.component */ "lbjL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/loader/loader.component */ "o7am");
/* harmony import */ var _shared_no_results_no_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/no-results/no-results.component */ "SkJr");
/* harmony import */ var _shared_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/content-card/content-card.component */ "gG1h");
/* harmony import */ var _shared_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/paginator/paginator.component */ "b3De");










function FoodImagesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loader", true)("row", 2)("column", 4);
} }
function FoodImagesComponent_no_results_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "no-results", 12);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("description", "Not Found")("image", "../../../assets/icons/img-course.svg");
} }
function FoodImagesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-content-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", item_r4);
} }
function FoodImagesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-paginator", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changed", function FoodImagesComponent_div_9_Template_app_paginator_changed_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("total", ctx_r3.total)("quantity", ctx_r3.quantity)("page", ctx_r3.currentPage);
} }
class FoodImagesComponent extends _shared_list_container__WEBPACK_IMPORTED_MODULE_0__["ListContainer"] {
    constructor(route, router, getImageService) {
        super(route, router, 8);
        this.getImageService = getImageService;
        this.isLoading = true;
    }
    fetch() {
        const { currentPage, quantity } = this;
        const page = currentPage;
        const limit = quantity;
        const search = this.query;
        return this.getImageService.getAnimalImage({ page, limit, search });
    }
    handleError(reason) {
        console.log('Error');
    }
}
FoodImagesComponent.ɵfac = function FoodImagesComponent_Factory(t) { return new (t || FoodImagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_get_image_service__WEBPACK_IMPORTED_MODULE_3__["GetImageService"])); };
FoodImagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FoodImagesComponent, selectors: [["app-food-images"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 6, consts: [[1, "container"], [1, "my-list-container"], [1, "my-list-header", "mt-2", "mb-2"], [3, "search", "placeholder", "getInputValue"], [1, "my-list-content"], ["class", "loading-content", 4, "ngIf"], ["class", "has-container", 3, "description", "image", 4, "ngIf"], [1, "row", "fade-in-up"], ["class", "col-6 col-md-4 col-lg-3 mb-5", 4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "loading-content"], ["speed", "0.8", "type", "course-card", "height", "240", 3, "loader", "row", "column"], [1, "has-container", 3, "description", "image"], [1, "col-6", "col-md-4", "col-lg-3", "mb-5"], [1, "my-course-card", 3, "content"], [1, "d-flex", "justify-content-center"], [3, "total", "quantity", "page", "changed"]], template: function FoodImagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-search-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("getInputValue", function FoodImagesComponent_Template_app_search_input_getInputValue_3_listener($event) { return ctx.queryParam($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FoodImagesComponent_div_5_Template, 2, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FoodImagesComponent_no_results_6_Template, 1, 2, "no-results", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, FoodImagesComponent_div_8_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, FoodImagesComponent_div_9_Template, 2, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("search", ctx.query)("placeholder", "Search prints...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.items == null ? null : ctx.items.length) && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.items == null ? null : ctx.items.length);
    } }, directives: [_shared_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_4__["SearchInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"], _shared_no_results_no_results_component__WEBPACK_IMPORTED_MODULE_7__["NoResultsComponent"], _shared_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_8__["ContentCardComponent"], _shared_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_9__["PaginatorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb29kLWltYWdlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "4MzV":
/*!****************************************************!*\
  !*** ./src/app/food-images/food-images.routing.ts ***!
  \****************************************************/
/*! exports provided: FoodImagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodImagesRoutes", function() { return FoodImagesRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _food_images_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-images.component */ "+7s2");


const routes = [
    {
        path: '',
        component: _food_images_component__WEBPACK_IMPORTED_MODULE_1__["FoodImagesComponent"]
    },
];
const FoodImagesRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "BdDP":
/*!***************************************************!*\
  !*** ./src/app/food-images/food-images.module.ts ***!
  \***************************************************/
/*! exports provided: FoodImagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodImagesModule", function() { return FoodImagesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _food_images_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-images.component */ "+7s2");
/* harmony import */ var _food_images_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food-images.routing */ "4MzV");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class FoodImagesModule {
}
FoodImagesModule.ɵfac = function FoodImagesModule_Factory(t) { return new (t || FoodImagesModule)(); };
FoodImagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: FoodImagesModule });
FoodImagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _food_images_routing__WEBPACK_IMPORTED_MODULE_2__["FoodImagesRoutes"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FoodImagesModule, { declarations: [_food_images_component__WEBPACK_IMPORTED_MODULE_1__["FoodImagesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=food-images-food-images-module.js.map