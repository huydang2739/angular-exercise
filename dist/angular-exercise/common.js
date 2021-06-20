(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "Gw4x":
/*!******************************************!*\
  !*** ./src/app/shared/list-container.ts ***!
  \******************************************/
/*! exports provided: ListContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListContainer", function() { return ListContainer; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class ListContainer {
    constructor(route, router, quantity = 10, useRoute = true, cdr = null) {
        this.route = route;
        this.router = router;
        this.quantity = quantity;
        this.useRoute = useRoute;
        this.cdr = cdr;
        this.currentPage = 1;
        this.params = {};
        this.refreshTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    get totalPages() {
        return Math.ceil(this.total / this.quantity);
    }
    get currentParams() {
        return this.useRoute ? this.route.snapshot.params : {};
    }
    ngOnInit() {
        this.subscribe();
    }
    onPageChanged(pageNumber) {
        this.navigate(Object.assign(Object.assign({}, this.currentParams), { page: pageNumber }));
    }
    onQuantityChanged(quantity) {
        this.navigate(Object.assign(Object.assign({}, this.currentParams), { page: 1, quantity: quantity }));
    }
    refresh() {
        this.refreshTrigger.next(this.route.snapshot.params);
    }
    queryParam(value) {
        this.query = value.inputValue;
        this.navigate(Object.assign(Object.assign({}, this.currentParams), { page: 1, query: this.query }));
        this.subscribe();
    }
    getQuery() {
        return this.query;
    }
    subscribe() {
        const next = result => {
            this.isLoading = false;
            this.handleResult(result);
        };
        const error = reason => {
            this.isLoading = false;
            this.handleError(reason);
        };
        if (this.useRoute) {
            console.log(this.useRoute);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.refreshTrigger, this.route.params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(this.readRouteParams.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => {
                this.isLoading = true;
                return this.fetch().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
                    if (this.cdr) {
                        this.cdr.detectChanges();
                    }
                }));
            })).subscribe(next, error);
        }
        else {
            this.refreshTrigger.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => {
                this.isLoading = true;
                return this.fetch().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
                    if (this.cdr) {
                        this.cdr.detectChanges();
                    }
                }));
            })).subscribe(next, error);
        }
    }
    readRouteParams(params) {
        const { page, quantity, sort, query } = params;
        this.currentPage = +page || 1;
        this.quantity = +quantity || this.quantity;
        this.sort = sort;
        this.query = query;
        const parsedParams = {};
        // tslint:disable-next-line:forin
        for (const key in params) {
            try {
                parsedParams[key] = JSON.parse(params[key]);
            }
            catch (e) {
                parsedParams[key] = params[key];
            }
        }
        this.params = parsedParams;
    }
    navigate(params) {
        if (this.useRoute) {
            params = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["omitBy"])(Object.assign({}, params), lodash_es__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]);
            this.router.navigate([params], { relativeTo: this.route });
        }
        else {
            this.mergeParams(params);
            this.refreshTrigger.next();
        }
    }
    mergeParams(params) {
        this.currentPage = params.page || 1;
        this.quantity = params.quantity || this.quantity;
        this.params = Object.assign({}, this.params, params);
    }
    handleResult(result) {
        this.total = result.count;
        this.items = result.items;
        console.log(this.total, this.items);
    }
    detechChange() {
        if (this.cdr) {
            this.cdr.detectChanges();
        }
    }
}
ListContainer.ɵfac = function ListContainer_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinvalidFactory"](); };
ListContainer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: ListContainer });


/***/ }),

/***/ "hUyP":
/*!******************************************!*\
  !*** ./src/app/api/get-image.service.ts ***!
  \******************************************/
/*! exports provided: GetImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetImageService", function() { return GetImageService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class GetImageService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'https://60ab7dc75a4de40017cca339.mockapi.io/api/';
    }
    createParams(params) {
        return Object.keys(params).reduce((m, k) => {
            if (params[k] != null) {
                return m.set(k, params[k].toString());
            }
            return m;
        }, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]());
    }
    getAnimalImage(params) {
        return this.httpClient.get(`${this.baseUrl}/animals`, { params: this.createParams(params) });
    }
    getFoodImage(params) {
        return this.httpClient.get(`${this.baseUrl}/foods`, { params: this.createParams(params) });
    }
}
GetImageService.ɵfac = function GetImageService_Factory(t) { return new (t || GetImageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
GetImageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GetImageService, factory: GetImageService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map