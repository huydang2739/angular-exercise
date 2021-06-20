(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["animal-images-animal-images-module"],{

/***/ "Bewc":
/*!********************************************************!*\
  !*** ./src/app/animal-images/animal-images.routing.ts ***!
  \********************************************************/
/*! exports provided: AnimalImagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalImagesRoutes", function() { return AnimalImagesRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _animal_images_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animal-images.component */ "N4H5");


const routes = [
    {
        path: '',
        component: _animal_images_component__WEBPACK_IMPORTED_MODULE_1__["AnimalImagesComponent"]
    },
];
const AnimalImagesRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "CuuV":
/*!*******************************************************!*\
  !*** ./src/app/animal-images/animal-images.module.ts ***!
  \*******************************************************/
/*! exports provided: AnimalImagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalImagesModule", function() { return AnimalImagesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _animal_images_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animal-images.component */ "N4H5");
/* harmony import */ var _animal_images_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animal-images.routing */ "Bewc");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AnimalImagesModule {
}
AnimalImagesModule.ɵfac = function AnimalImagesModule_Factory(t) { return new (t || AnimalImagesModule)(); };
AnimalImagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AnimalImagesModule });
AnimalImagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _animal_images_routing__WEBPACK_IMPORTED_MODULE_2__["AnimalImagesRoutes"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AnimalImagesModule, { declarations: [_animal_images_component__WEBPACK_IMPORTED_MODULE_1__["AnimalImagesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();


/***/ }),

/***/ "N4H5":
/*!**********************************************************!*\
  !*** ./src/app/animal-images/animal-images.component.ts ***!
  \**********************************************************/
/*! exports provided: AnimalImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalImagesComponent", function() { return AnimalImagesComponent; });
/* harmony import */ var src_app_shared_list_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/list-container */ "Gw4x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_api_get_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/get-image.service */ "hUyP");
/* harmony import */ var _shared_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/search-input/search-input.component */ "lbjL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/loader/loader.component */ "o7am");
/* harmony import */ var _shared_no_results_no_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/no-results/no-results.component */ "SkJr");
/* harmony import */ var _shared_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/content-card/content-card.component */ "gG1h");
/* harmony import */ var _shared_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/paginator/paginator.component */ "b3De");










function AnimalImagesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loader", true)("row", 2)("column", 4);
} }
function AnimalImagesComponent_no_results_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "no-results", 12);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("description", "Not Found")("image", "../../../assets/icons/img-course.svg");
} }
function AnimalImagesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-content-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", item_r4);
} }
function AnimalImagesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-paginator", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changed", function AnimalImagesComponent_div_9_Template_app_paginator_changed_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("total", ctx_r3.total)("quantity", ctx_r3.quantity)("page", ctx_r3.currentPage);
} }
class AnimalImagesComponent extends src_app_shared_list_container__WEBPACK_IMPORTED_MODULE_0__["ListContainer"] {
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
AnimalImagesComponent.ɵfac = function AnimalImagesComponent_Factory(t) { return new (t || AnimalImagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_api_get_image_service__WEBPACK_IMPORTED_MODULE_3__["GetImageService"])); };
AnimalImagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AnimalImagesComponent, selectors: [["app-dog-image"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 6, consts: [[1, "container"], [1, "my-list-container"], [1, "my-list-header", "mt-2", "mb-2"], [3, "search", "placeholder", "getInputValue"], [1, "my-list-content"], ["class", "loading-content", 4, "ngIf"], ["class", "has-container", 3, "description", "image", 4, "ngIf"], [1, "row", "fade-in-up"], ["class", "col-6 col-md-4 col-lg-3 mb-5", 4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "loading-content"], ["speed", "0.8", "height", "240", 3, "loader", "row", "column"], [1, "has-container", 3, "description", "image"], [1, "col-6", "col-md-4", "col-lg-3", "mb-5"], [1, "my-course-card", 3, "content"], [1, "d-flex", "justify-content-center"], [3, "total", "quantity", "page", "changed"]], template: function AnimalImagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-search-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("getInputValue", function AnimalImagesComponent_Template_app_search_input_getInputValue_3_listener($event) { return ctx.queryParam($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AnimalImagesComponent_div_5_Template, 2, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AnimalImagesComponent_no_results_6_Template, 1, 2, "no-results", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AnimalImagesComponent_div_8_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AnimalImagesComponent_div_9_Template, 2, 3, "div", 9);
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
    } }, directives: [_shared_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_4__["SearchInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"], _shared_no_results_no_results_component__WEBPACK_IMPORTED_MODULE_7__["NoResultsComponent"], _shared_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_8__["ContentCardComponent"], _shared_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_9__["PaginatorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmltYWwtaW1hZ2VzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=animal-images-animal-images-module.js.map