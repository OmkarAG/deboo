(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apps-apps-module"],{

/***/ "+Pld":
/*!*****************************************************!*\
  !*** ./src/app/apps/services/services.component.ts ***!
  \*****************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 9, vars: 0, consts: [[1, "banner-innerpage"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-6", "no-trans", "align-self-center", "text-center"], [1, "title", 2, "color", "black", "margin-top", "-70px"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "SERVICES PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-services',
                templateUrl: './services.component.html',
                styleUrls: ['./services.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "+YCP":
/*!****************************************************************!*\
  !*** ./src/app/apps/blog/blog-detail/blog-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: BlogDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailComponent", function() { return BlogDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _blog_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog-service.service */ "jYeG");




class BlogDetailComponent {
    constructor(activatedRouter, service, router) {
        this.service = service;
        this.router = router;
        this.blogDetail = null;
        this.id = activatedRouter.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.blogDetail = this.service.Blogs.filter(x => x.id === +this.id)[0];
    }
    loginClick() {
        this.router.navigate([('/login')]);
    }
    newPost() {
        this.service.showEdit = false;
        this.router.navigate([('/post')]);
    }
    editPost() {
        var _a;
        this.service.showEdit = false;
        this.router.navigate([('/editPost'), (_a = this.blogDetail) === null || _a === void 0 ? void 0 : _a.id]);
    }
}
BlogDetailComponent.ɵfac = function BlogDetailComponent_Factory(t) { return new (t || BlogDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceblogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
BlogDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogDetailComponent, selectors: [["app-blog-detail"]], decls: 9, vars: 0, consts: [[1, "banner-innerpage"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-6", "no-trans", "align-self-center", "text-center"], [1, "title", 2, "color", "black", "margin-top", "-70px"]], template: function BlogDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "BLOG PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-detail',
                templateUrl: './blog-detail.component.html',
                styleUrls: ['./blog-detail.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _blog_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceblogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "2iH7":
/*!***********************************************!*\
  !*** ./src/app/apps/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _blog_blog_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog/blog-service.service */ "jYeG");



class AboutComponent {
    constructor(service) {
        this.service = service;
        this.service.showEdit = false;
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_blog_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceblogService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 9, vars: 0, consts: [[1, "banner-innerpage"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-6", "no-trans", "align-self-center", "text-center"], [1, "title", 2, "color", "black", "margin-top", "-70px"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ABOUT PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return [{ type: _blog_blog_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceblogService"] }]; }, null); })();


/***/ }),

/***/ "7+Td":
/*!****************************************************!*\
  !*** ./src/app/apps/layout/full/full.component.ts ***!
  \****************************************************/
/*! exports provided: FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return FullComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/banner/banner.component */ "XkWI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/footer/footer.component */ "LsfF");





class FullComponent {
    constructor() { }
    ngOnInit() {
    }
}
FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(); };
FullComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullComponent, selectors: [["app-full"]], decls: 10, vars: 0, consts: [["id", "main-wrapper"], [1, "page-wrapper"], [1, "container-fluid"], [1, "blog-home2"], ["href", "#top", 1, "bt-top", "btn", "btn-circle", "btn-lg", "btn-info"], [1, "ti-arrow-up"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-full',
                templateUrl: './full.component.html',
                styleUrls: ['./full.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AXmv":
/*!****************************************!*\
  !*** ./src/app/apps/apps.component.ts ***!
  \****************************************/
/*! exports provided: AppsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsComponent", function() { return AppsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AppsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppsComponent.ɵfac = function AppsComponent_Factory(t) { return new (t || AppsComponent)(); };
AppsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppsComponent, selectors: [["app-apps"]], decls: 2, vars: 0, template: function AppsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "apps works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-apps',
                templateUrl: './apps.component.html',
                styleUrls: ['./apps.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Hhwx":
/*!****************************************!*\
  !*** ./src/app/apps/blog/blog-data.ts ***!
  \****************************************/
/*! exports provided: blogs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blogs", function() { return blogs; });
const blogs = [
    {
        id: 1,
        image: 'assets/images/blog/101.jpg',
        heading: 'Magna nostrud incididunt cupidatat cillum incididunt et nisi in ut minim reprehenderit.',
        subHeading: 'Labore irure irure laborum quis tempor aliqua. Dude',
        blogDate: 'Feb 19, 2020',
        blogDetail: 'Est ipsum sint officia quis nulla nisi cupidatat aliquip nisi laboris eiusmod eiusmod aliquip do. Commodo elit excepteur occaecat irure Lorem sit nulla nulla sint duis incididunt. Nostrud ut do mollit et amet velit aute excepteur et culpa culpa velit. Cillum veniam officia anim cupidatat.',
    },
    {
        id: 2,
        image: 'assets/images/blog/202.jpg',
        heading: 'Dolore pariatur amet ullamco aliquip mollit aliqua qui.',
        subHeading: 'Eiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit.',
        blogDate: 'Feb 17, 2020',
        blogDetail: 'Tempor sint cupidatat cillum do ut. Ipsum exercitation est ex id. Sunt ut labore ad nulla.',
    },
    {
        id: 3,
        image: 'assets/images/blog/303.jpg',
        heading: 'Velit esse dolor dolor qui cillum velit in quis exercitation occaecat.',
        subHeading: 'Adipisicing sit minim occaecat nulla proident exercitation do laboris.',
        blogDate: 'Feb 15, 2020',
        blogDetail: 'Laboris culpa ea est et aliqua amet ullamco Lorem non enim laborum incididunt ex Lorem. Minim sint cupidatat magna esse labore id. Do qui incididunt consectetur nulla aliquip consequat nostrud incididunt occaecat ad. Excepteur nulla adipisicing enim ea occaecat fugiat dolore sunt est et. Eu veniam nostrud sit aute consectetur dolore ipsum fugiat anim duis.',
    },
    {
        id: 4,
        image: 'assets/images/blog/404.jpg',
        heading: 'Magna nostrud incididunt cupidatat cillum incididunt et nisi in ut minim reprehenderit.',
        subHeading: 'Labore irure irure laborum quis tempor aliqua. Dude',
        blogDate: 'Feb 19, 2020',
        blogDetail: 'Est ipsum sint officia quis nulla nisi cupidatat aliquip nisi laboris eiusmod eiusmod aliquip do. Commodo elit excepteur occaecat irure Lorem sit nulla nulla sint duis incididunt. Nostrud ut do mollit et amet velit aute excepteur et culpa culpa velit. Cillum veniam officia anim cupidatat.',
    },
    {
        id: 5,
        image: 'assets/images/blog/505.jpg',
        heading: 'Dolore pariatur amet ullamco aliquip mollit aliqua qui.',
        subHeading: 'Eiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit.',
        blogDate: 'Feb 17, 2020',
        blogDetail: 'Tempor sint cupidatat cillum do ut. Ipsum exercitation est ex id. Sunt ut labore ad nulla.',
    },
    {
        id: 6,
        image: 'assets/images/blog/707.jpg',
        heading: 'Velit esse dolor dolor qui cillum velit in quis exercitation occaecat.',
        subHeading: 'Adipisicing sit minim occaecat nulla proident exercitation do laboris.',
        blogDate: 'Feb 15, 2020',
        blogDetail: 'Laboris culpa ea est et aliqua amet ullamco Lorem non enim laborum incididunt ex Lorem. Minim sint cupidatat magna esse labore id. Do qui incididunt consectetur nulla aliquip consequat nostrud incididunt occaecat ad. Excepteur nulla adipisicing enim ea occaecat fugiat dolore sunt est et. Eu veniam nostrud sit aute consectetur dolore ipsum fugiat anim duis.',
    },
    {
        id: 7,
        image: 'assets/images/blog/808.jpg',
        heading: 'Dolore pariatur amet ullamco aliquip mollit aliqua qui.',
        subHeading: 'Eiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit.',
        blogDate: 'Feb 17, 2020',
        blogDetail: 'Tempor sint cupidatat cillum do ut. Ipsum exercitation est ex id. Sunt ut labore ad nulla.',
    },
    {
        id: 8,
        image: 'assets/images/blog/909.jpg',
        heading: 'Velit esse dolor dolor qui cillum velit in quis exercitation occaecat.',
        subHeading: 'Adipisicing sit minim occaecat nulla proident exercitation do laboris.',
        blogDate: 'Feb 15, 2020',
        blogDetail: 'Laboris culpa ea est et aliqua amet ullamco Lorem non enim laborum incididunt ex Lorem. Minim sint cupidatat magna esse labore id. Do qui incididunt consectetur nulla aliquip consequat nostrud incididunt occaecat ad. Excepteur nulla adipisicing enim ea occaecat fugiat dolore sunt est et. Eu veniam nostrud sit aute consectetur dolore ipsum fugiat anim duis.',
    },
];


/***/ }),

/***/ "IYw8":
/*!*************************************!*\
  !*** ./src/app/apps/apps.module.ts ***!
  \*************************************/
/*! exports provided: AppsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsModule", function() { return AppsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _apps_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apps-routing.module */ "aWwC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _apps_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apps.component */ "AXmv");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog/blog.component */ "e6Sk");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "2iH7");
/* harmony import */ var _blog_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog/blog-detail/blog-detail.component */ "+YCP");
/* harmony import */ var _blog_blog_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blog/blog-service.service */ "jYeG");
/* harmony import */ var _about_About_Components_relay_on_relay_on_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/About-Components/relay-on/relay-on.component */ "RvGm");
/* harmony import */ var _about_About_Components_top_content_top_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about/About-Components/top-content/top-content.component */ "jfhW");
/* harmony import */ var _layout_full_full_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/full/full.component */ "7+Td");
/* harmony import */ var _shared_banner_banner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/banner/banner.component */ "XkWI");
/* harmony import */ var _shared_banner_navigation_banner_navigation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/banner-navigation/banner-navigation.component */ "QaM/");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/footer/footer.component */ "LsfF");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "uDbF");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/services.component */ "+Pld");
/* harmony import */ var _topup_topup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./topup/topup.component */ "nlZ4");
/* harmony import */ var _locations_locations_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./locations/locations.component */ "IqaK");
/* harmony import */ var _awards_awards_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./awards/awards.component */ "LMkm");
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./media/media.component */ "b6kG");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./contact/contact.component */ "MHc4");

























class AppsModule {
}
AppsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppsModule });
AppsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppsModule_Factory(t) { return new (t || AppsModule)(); }, providers: [_blog_blog_service_service__WEBPACK_IMPORTED_MODULE_10__["ServiceblogService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _apps_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppsRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppsModule, { declarations: [_apps_component__WEBPACK_IMPORTED_MODULE_6__["AppsComponent"],
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_7__["BlogComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
        _blog_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_9__["BlogDetailComponent"],
        _about_About_Components_relay_on_relay_on_component__WEBPACK_IMPORTED_MODULE_11__["RelayOnComponent"],
        _about_About_Components_top_content_top_content_component__WEBPACK_IMPORTED_MODULE_12__["TopContentComponent"],
        _layout_full_full_component__WEBPACK_IMPORTED_MODULE_13__["FullComponent"],
        _shared_banner_banner_component__WEBPACK_IMPORTED_MODULE_14__["BannerComponent"],
        // BannerContentComponent,
        _shared_banner_navigation_banner_navigation_component__WEBPACK_IMPORTED_MODULE_15__["BannerNavigationComponent"],
        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
        _services_services_component__WEBPACK_IMPORTED_MODULE_18__["ServicesComponent"],
        _topup_topup_component__WEBPACK_IMPORTED_MODULE_19__["TopupComponent"],
        _locations_locations_component__WEBPACK_IMPORTED_MODULE_20__["LocationsComponent"],
        _awards_awards_component__WEBPACK_IMPORTED_MODULE_21__["AwardsComponent"],
        _media_media_component__WEBPACK_IMPORTED_MODULE_22__["MediaComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_23__["ContactComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _apps_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppsRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _apps_component__WEBPACK_IMPORTED_MODULE_6__["AppsComponent"],
                    _blog_blog_component__WEBPACK_IMPORTED_MODULE_7__["BlogComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                    _blog_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_9__["BlogDetailComponent"],
                    _about_About_Components_relay_on_relay_on_component__WEBPACK_IMPORTED_MODULE_11__["RelayOnComponent"],
                    _about_About_Components_top_content_top_content_component__WEBPACK_IMPORTED_MODULE_12__["TopContentComponent"],
                    _layout_full_full_component__WEBPACK_IMPORTED_MODULE_13__["FullComponent"],
                    _shared_banner_banner_component__WEBPACK_IMPORTED_MODULE_14__["BannerComponent"],
                    // BannerContentComponent,
                    _shared_banner_navigation_banner_navigation_component__WEBPACK_IMPORTED_MODULE_15__["BannerNavigationComponent"],
                    _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                    _services_services_component__WEBPACK_IMPORTED_MODULE_18__["ServicesComponent"],
                    _topup_topup_component__WEBPACK_IMPORTED_MODULE_19__["TopupComponent"],
                    _locations_locations_component__WEBPACK_IMPORTED_MODULE_20__["LocationsComponent"],
                    _awards_awards_component__WEBPACK_IMPORTED_MODULE_21__["AwardsComponent"],
                    _media_media_component__WEBPACK_IMPORTED_MODULE_22__["MediaComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_23__["ContactComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _apps_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppsRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ],
                providers: [_blog_blog_service_service__WEBPACK_IMPORTED_MODULE_10__["ServiceblogService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "IqaK":
/*!*******************************************************!*\
  !*** ./src/app/apps/locations/locations.component.ts ***!
  \*******************************************************/
/*! exports provided: LocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsComponent", function() { return LocationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LocationsComponent {
    constructor() { }
    ngOnInit() {
    }
}
LocationsComponent.ɵfac = function LocationsComponent_Factory(t) { return new (t || LocationsComponent)(); };
LocationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocationsComponent, selectors: [["app-locations"]], decls: 9, vars: 0, consts: [[1, "banner-innerpage"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-6", "no-trans", "align-self-center", "text-center"], [1, "title", 2, "color", "black", "margin-top", "-70px"]], template: function LocationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "LOCATION PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-locations',
                templateUrl: './locations.component.html',
                styleUrls: ['./locations.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LMkm":
/*!*************************************************!*\
  !*** ./src/app/apps/awards/awards.component.ts ***!
  \*************************************************/
/*! exports provided: AwardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardsComponent", function() { return AwardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AwardsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AwardsComponent.ɵfac = function AwardsComponent_Factory(t) { return new (t || AwardsComponent)(); };
AwardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AwardsComponent, selectors: [["app-awards"]], decls: 9, vars: 0, consts: [[1, "banner-innerpage"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-6", "no-trans", "align-self-center", "text-center"], [1, "title", 2, "color", "black", "margin-top", "-70px"]], template: function AwardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "AWARDS PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhd2FyZHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AwardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-awards',
                templateUrl: './awards.component.html',
                styleUrls: ['./awards.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LsfF":
/*!********************************************************!*\
  !*** ./src/app/apps/shared/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 14, vars: 0, consts: [[1, "footer4", "b-t", "spacer", 2, "background", "#e5e4e4"], [1, "container", "text-center"], [1, "round-social", "light"], ["href", "https://www.facebook.com/deboo.hygiene/", "target", "_new", 1, "link"], [1, "fa", "fa-facebook"], ["href", "https://twitter.com/deboohygiene", "target", "_new", 1, "link"], [1, "fa", "fa-twitter"], ["href", "https://www.instagram.com/deboohygiene/", "target", "_new", 1, "link"], [1, "fa", "fa-instagram"], [1, "copyright"], ["href", ""]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " All Rights Reserved by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Deboo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MHc4":
/*!***************************************************!*\
  !*** ./src/app/apps/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 19, vars: 0, consts: [[1, "banner-innerpage"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-6", "no-trans", "align-self-center", "text-center"], [1, "contact"], [2, "text-align", "center", "background", "#5aabf1", "padding", "5px", "margin-bottom", "20px", "border-radius", "10px 10px 0 0"], [1, "phone"], ["href", "tel:+91 91759 95477", 2, "color", "black"], [2, "color", "#188ef4", "float", "left", "margin-left", "10px"], [2, "float", "left"], [1, "mail"], ["href", "mailTo:deboohygiene@gmail.com", 2, "color", "black"], [2, "color", "#188ef4"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mobile No. : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u00A0+91 91759 95477");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "deboohygiene@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".contact[_ngcontent-%COMP%]{\r\n    width: 310px;\r\n    height: 160px;\r\n    border: 1px solid black;\r\n    margin-left: 300px;\r\n    background-color:#e5e4e4;\r\n    color: black !important;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n@media screen  and (max-device-width:480px) and (orientation: portrait) {\r\n    .contact[_ngcontent-%COMP%]{\r\n        width: 310px;\r\n        height: 160px;\r\n        border: 1px solid black;\r\n        margin-left: 40px !important;\r\n        font-weight: bold;\r\n        border-radius: 10px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n@media screen  and (max-device-width:768px) and (orientation: portrait) {\r\n    .contact[_ngcontent-%COMP%]{\r\n        width: 310px;\r\n        height: 160px;\r\n        border: 1px solid black;\r\n       margin-left: 25px;\r\n       font-weight: bold;\r\n       border-radius: 10px;\r\n       cursor: pointer;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsNEJBQTRCO1FBQzVCLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsZUFBZTtJQUNuQjtBQUNKOztBQUNBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLHVCQUF1QjtPQUN4QixpQkFBaUI7T0FDakIsaUJBQWlCO09BQ2pCLG1CQUFtQjtPQUNuQixlQUFlO0lBQ2xCO0FBQ0oiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3R7XHJcbiAgICB3aWR0aDogMzEwcHg7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlNWU0ZTQ7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoOjQ4MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgLmNvbnRhY3R7XHJcbiAgICAgICAgd2lkdGg6IDMxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuICBhbmQgKG1heC1kZXZpY2Utd2lkdGg6NzY4cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAuY29udGFjdHtcclxuICAgICAgICB3aWR0aDogMzEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QaM/":
/*!******************************************************************************!*\
  !*** ./src/app/apps/shared/banner-navigation/banner-navigation.component.ts ***!
  \******************************************************************************/
/*! exports provided: BannerNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerNavigationComponent", function() { return BannerNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a0) { return { "show": a0 }; };
const _c1 = function () { return [""]; };
const _c2 = function () { return ["active"]; };
class BannerNavigationComponent {
    constructor() {
        this.logoutStatus = true;
        this.isShown = true;
        this.collaps = true;
    }
    doStuffOnClick() {
        this.isShown = !this.isShown;
        if (this.isShown) {
            this.collaps = false;
        }
    }
    ngOnInit() {
    }
}
BannerNavigationComponent.ɵfac = function BannerNavigationComponent_Factory(t) { return new (t || BannerNavigationComponent)(); };
BannerNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerNavigationComponent, selectors: [["app-banner-navigation"]], decls: 33, vars: 21, consts: [[1, "navbar", "navbar-expand-lg", "navbar-fixed-top", "navbar", "card-bordered", "sticky-top"], ["type", "button", "data-toggle", "collapse", "data-target", "#h6-info", "aria-controls", "navbarSupportedContent", "aria-expanded", "!isShown", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "ti-menu"], ["id", "h6-info", 1, "collapse", "navbar-collapse", "hover-dropdown", "font-14", "ml-auto", 3, "ngClass"], ["navhide", ""], [1, "navbar-nav", "ml-auto"], [1, "nav-item", 3, "routerLinkActive"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/about", 1, "nav-link"], ["routerLink", "/services", 1, "nav-link"], ["routerLink", "/topup", 1, "nav-link"], ["routerLink", "/locations", 1, "nav-link"], ["routerLink", "/blog", 1, "nav-link"], ["routerLink", "/awards", 1, "nav-link"], ["routerLink", "/media", 1, "nav-link"], ["routerLink", "/contact", 1, "nav-link"]], template: function BannerNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerNavigationComponent_Template_button_click_1_listener() { return ctx.doStuffOnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Top Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Locations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Awards ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Media ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, !ctx.isShown));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c2));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".active[_ngcontent-%COMP%] {\r\n    color: yellow;\r\n  }\r\n  .nav-link[_ngcontent-%COMP%] {\r\n    color: #188ef4;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGNBQWM7QUFDbEIiLCJmaWxlIjoiYmFubmVyLW5hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xyXG4gICAgY29sb3I6IHllbGxvdztcclxuICB9XHJcbiAgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAjMTg4ZWY0O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerNavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner-navigation',
                templateUrl: './banner-navigation.component.html',
                styleUrls: ['./banner-navigation.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RvGm":
/*!****************************************************************************!*\
  !*** ./src/app/apps/about/About-Components/relay-on/relay-on.component.ts ***!
  \****************************************************************************/
/*! exports provided: RelayOnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelayOnComponent", function() { return RelayOnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RelayOnComponent {
    // relayOn = [
    //   {
    //     icon: 'sl-icon-target text-info-gradiant',
    //     field: 'Retargeting Market',
    //     fieldText: 'You can relay on our amazing features list and also our customer services will be great experience.'
    //   },
    //   {
    //     icon: 'sl-icon-mouse text-info-gradiant',
    //     field: 'Fruitful Results',
    //     fieldText: 'You can relay on our amazing features list and also our customer services will be great experience.'
    //   },
    //   {
    //     icon: 'sl-icon-earphones-alt text-info-gradiant',
    //     field: 'Instant Solutions',
    //     fieldText: 'You can relay on our amazing features list and also our customer services will be great experience.'
    //   }
    // ];
    constructor() { }
    ngOnInit() {
    }
}
RelayOnComponent.ɵfac = function RelayOnComponent_Factory(t) { return new (t || RelayOnComponent)(); };
RelayOnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RelayOnComponent, selectors: [["app-relay-on"]], decls: 0, vars: 0, template: function RelayOnComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWxheS1vbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelayOnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-relay-on',
                templateUrl: './relay-on.component.html',
                styleUrls: ['./relay-on.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XkWI":
/*!********************************************************!*\
  !*** ./src/app/apps/shared/banner/banner.component.ts ***!
  \********************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _banner_navigation_banner_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../banner-navigation/banner-navigation.component */ "QaM/");





class BannerComponent {
    constructor() {
        this.isShown = true;
    }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 11, vars: 0, consts: [["id", "top", 1, "topbar"], [1, "header6"], [1, "container", "po-relative"], [1, "navbar", "navbar-expand-lg", "h6-nav-bar", "navbar-fixed-top", "sticky-top"], ["routerLink", "", 1, "navbar-brand"], ["src", "assets/images/logos/ic_launcher.png", "width", "60", "height", "60", "alt", "wrapkit", 1, ""], ["id", "slogun"], [1, "ml-auto"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Intelligent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Hygiene");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-banner-navigation", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _banner_navigation_banner_navigation_component__WEBPACK_IMPORTED_MODULE_3__["BannerNavigationComponent"]], styles: [".banner-innerpage[_ngcontent-%COMP%] {\r\n    padding: 311px 0 100px;\r\n    background-size: cover;\r\n    background-position: center center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsa0NBQWtDO0FBQ3RDIiwiZmlsZSI6ImJhbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5iYW5uZXItaW5uZXJwYWdlIHtcclxuICAgIHBhZGRpbmc6IDMxMXB4IDAgMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "aWwC":
/*!*********************************************!*\
  !*** ./src/app/apps/apps-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AppsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsRoutingModule", function() { return AppsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog/blog.component */ "e6Sk");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "2iH7");
/* harmony import */ var _blog_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog/blog-detail/blog-detail.component */ "+YCP");
/* harmony import */ var _layout_full_full_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/full/full.component */ "7+Td");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "uDbF");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/services.component */ "+Pld");
/* harmony import */ var _awards_awards_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./awards/awards.component */ "LMkm");
/* harmony import */ var _topup_topup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./topup/topup.component */ "nlZ4");
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./media/media.component */ "b6kG");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "MHc4");
/* harmony import */ var _locations_locations_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./locations/locations.component */ "IqaK");















const routes = [
    {
        path: '',
        component: _layout_full_full_component__WEBPACK_IMPORTED_MODULE_5__["FullComponent"],
        children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
            { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"] },
            { path: 'blogDetail/:id', component: _blog_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_4__["BlogDetailComponent"] },
            { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
            { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"] },
            { path: 'awards', component: _awards_awards_component__WEBPACK_IMPORTED_MODULE_8__["AwardsComponent"] },
            { path: 'topup', component: _topup_topup_component__WEBPACK_IMPORTED_MODULE_9__["TopupComponent"] },
            { path: 'media', component: _media_media_component__WEBPACK_IMPORTED_MODULE_10__["MediaComponent"] },
            { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"] },
            { path: 'locations', component: _locations_locations_component__WEBPACK_IMPORTED_MODULE_12__["LocationsComponent"] },
        ]
    }
];
class AppsRoutingModule {
}
AppsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppsRoutingModule });
AppsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppsRoutingModule_Factory(t) { return new (t || AppsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "b6kG":
/*!***********************************************!*\
  !*** ./src/app/apps/media/media.component.ts ***!
  \***********************************************/
/*! exports provided: MediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaComponent", function() { return MediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MediaComponent {
    constructor() { }
    ngOnInit() {
    }
}
MediaComponent.ɵfac = function MediaComponent_Factory(t) { return new (t || MediaComponent)(); };
MediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MediaComponent, selectors: [["app-media"]], decls: 9, vars: 0, consts: [[1, "banner-innerpage"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-6", "no-trans", "align-self-center", "text-center"], [1, "title", 2, "color", "black", "margin-top", "-70px"]], template: function MediaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MEDIA PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWRpYS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-media',
                templateUrl: './media.component.html',
                styleUrls: ['./media.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "e6Sk":
/*!*********************************************!*\
  !*** ./src/app/apps/blog/blog.component.ts ***!
  \*********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _blog_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog-service.service */ "jYeG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class BlogComponent {
    constructor(service, router, http) {
        this.service = service;
        this.router = router;
        this.http = http;
        this.blogsDetail = [];
        this.service.showEdit = false;
    }
    ngOnInit() {
        if (this.service.Blogs.length === 0)
            this.service.getBlog().subscribe((d) => (this.service.Blogs = d));
    }
    loginClick() {
        this.router.navigate(['/login']);
    }
    newPost() {
        this.router.navigate(['/post']);
    }
    viewDetail(id) {
        this.service.detailId = id;
        if (this.service.loginStatusService)
            this.service.showEdit = true;
        this.router.navigate(['/blogDetail', id]);
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceblogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 9, vars: 0, consts: [[1, "banner-innerpage"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-6", "no-trans", "align-self-center", "text-center"], [1, "title", 2, "color", "black"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Blog PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.css'],
            }]
    }], function () { return [{ type: _blog_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceblogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "jYeG":
/*!***************************************************!*\
  !*** ./src/app/apps/blog/blog-service.service.ts ***!
  \***************************************************/
/*! exports provided: ServiceblogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceblogService", function() { return ServiceblogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _blog_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-data */ "Hhwx");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ServiceblogService {
    constructor(http) {
        this.http = http;
        this.Blogs = [];
        this.loginStatusService = false;
        this.detailId = -1;
        this.showEdit = false;
    }
    getBlog() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_blog_data__WEBPACK_IMPORTED_MODULE_2__["blogs"]);
    }
    addPost(bl) {
        this.Blogs.splice(0, 0, bl);
    }
    deletePost(id) {
        this.Blogs = this.Blogs.filter(b => b.id !== id);
    }
}
ServiceblogService.ɵfac = function ServiceblogService_Factory(t) { return new (t || ServiceblogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ServiceblogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServiceblogService, factory: ServiceblogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceblogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "jfhW":
/*!**********************************************************************************!*\
  !*** ./src/app/apps/about/About-Components/top-content/top-content.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TopContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopContentComponent", function() { return TopContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TopContentComponent {
    constructor() {
        this.imagePath = '../assets/images/innerpage/Butterfly 2.jpg';
    }
    ngOnInit() {
    }
}
TopContentComponent.ɵfac = function TopContentComponent_Factory(t) { return new (t || TopContentComponent)(); };
TopContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopContentComponent, selectors: [["app-top-content"]], decls: 208, vars: 0, consts: [[1, "row", "wrap-feature-22"], ["data-aos", "", "data-aos-duration", "1200", 1, "col-lg-6"], [1, "homeimg"], ["src", "assets/images/innerpage/Clean Toilet Seat.png", "width", "437", "height", "303", "alt", "wrapkit", 1, "rounded", "img-responsive"], [1, "col-lg-6", "no-trans"], [1, "text-box"], [1, "text-info", "font-medium"], [1, "font-light"], [1, "text-info"], [1, "textLeft"], [1, "line"], [1, "col-lg-6"], [1, "textbox1"], [1, "col-lg-6", "no-trans", "text-center"], [1, "homeimg1"], ["src", "assets/images/innerpage/Woman_Freedome.jpeg", "width", "437", "height", "303", "alt", "wrapkit", 1, "rounded", "img-responsive"], ["src", "assets/images/innerpage/Self_Cleaning.jpeg", "width", "437", "height", "303", "alt", "wrapkit", 1, "rounded", "img-responsive"], [1, "inner"], ["src", "assets/images/innerpage/intelligent.jpeg", "width", "437", "height", "303", "alt", "wrapkit", 1, "rounded", "img-responsive", 2, "border", "1px solid rgb(224, 221, 221)"], ["src", "assets/images/innerpage/Touchless.jpeg", "width", "437", "height", "303", "alt", "wrapkit", 1, "rounded", "img-responsive"], ["src", "assets/images/innerpage/App 1.jpg", "width", "437", "height", "303", "alt", "wrapkit", 1, "rounded", "img-responsive"], ["src", "assets/images/innerpage/Environment.jpeg", "width", "437", "height", "303", "alt", "wrapkit", 1, "rounded", "img-responsive"], [1, "text-title"], ["src", "assets/images/innerpage/lady.png", "width", "437", "height", "303", "alt", "wrapkit", 1, "rounded", "img-responsive", 2, "border", "1px solid rgb(224, 221, 221)"], ["src", "assets/images/innerpage/Menstruation1.jpeg", "width", "437", "height", "303", "alt", "wrapkit", 1, "rounded", "img-responsive"], ["src", "assets/images/innerpage/baby_diaper.jpeg", "width", "437", "height", "303", "alt", "wrapkit", 1, "rounded", "img-responsive"], ["src", "assets/images/innerpage/wheelchairacess.png", "width", "437", "height", "303", "alt", "wrapkit", 1, "rounded", "img-responsive"], ["src", "assets/images/innerpage/Make in India.jpg", "width", "437", "height", "303", "alt", "wrapkit", 1, "rounded", "img-responsive"], [1, "row", "wrap-feature-22", 2, "margin-bottom", "-160px"], ["src", "assets/images/innerpage/Swachh Bharat.jpg", "width", "437", "height", "303", "alt", "wrapkit", 1, "rounded", "img-responsive"], [1, "col-lg-6", "no-trans", "lstDiv"]], template: function TopContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Cleanliness Guaranteed, Every Time! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " deboo\u2122 offers intelligent public toilets that guarantee a clean and sanitised facility for every user every time they wish to use it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Protecting People, Enhancing Lives ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " At deboo\u2122 we believe that clean and safe public toilets are not a luxury but an essential part of the community. With the fusion of innovation and ergonomic design, deboo\u2122 aims to revolutionise the perception of public toilets. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Self Cleaning Toilet Seat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " deboo\u2122 assures safe and hygienic sanitation using smart technology. A deboo\u2122 toilet seat is cleaned and sanitised after every use so that every user gets a freshly cleaned seat surface. We have considered minute details to offer the best hygiene and user experience. (Patent Pending) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Intelligent Toilet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Powered by the Internet of Things (IoT), each deboo\u2122 is equipped with a plethora of sensors and activators to reduce reliance on humans to maintain the cleanliness of the facility. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Touchless ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " To minimise the spread of infections a deboo\u2122 facility is equipped with touchless sanitiser dispensers, soap dispensers, taps, flushes, bins, switches and door locking and unlocking systems. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Contactless ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " deboo\u2122 offers cashless payment for entry to the facility and vending of sanitary pads. deboo\u2122 app is available to download from Play Store and App store ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Link for app stores. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Environmentally Friendly ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Our auto-flushing toilets optimise the usage of water by identifying whether solids or liquids are to be flushed. The use of electricity for lighting, ventilation and running of the facility is optimised based on presence of a user. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Attended Toilet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Each facility is served by round the clock deboo\u2122 Hostesses to assure safety and cleanliness. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " Be Clean, Feel Fresh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Change the pads in privacy, safety and hygiene of deboo\u2122. Automatic sanitary pad vending machine is located inside the deboo\u2122 stall. Make a payment for vending the pad digitally using the deboo\u2122 app. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " Baby Diaper Change ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Change your little ones in safety and hygiene of a diaper changing station provided inside a deboo\u2122 stall. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " Wheel chair Access ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " deboo\u2122 facility features raised toilet bowl, grab rail, space to the side and front of the bowl to make it easier for our wheel chair using patrons. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " Made In India ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " deboo\u2122 has been conceptualised, designed & built in India. We have aimed to offer elegant design, smart performance and a premium product so that our patrons can experience luxury and comfort along side hygiene. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " Swachh Bharat Abhiyan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " deboo\u2122 is proud to contribute to India\u2019s sanitation infrastructure and support the Clean India Mission. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "br");
    } }, styles: [".homeimg[_ngcontent-%COMP%]{\r\n    max-width:75%;\r\n    margin-left:100px;\r\n    \r\n}\r\n@media screen  and (max-device-width:768px) and (orientation: portrait) {\r\n    .homeimg[_ngcontent-%COMP%]{\r\n        max-width:100%;\r\n        text-align: center;\r\n        position:relative;\r\n        margin-left:0px;\r\n    }\r\n}\r\n@media screen  and (max-device-width: 480px) and (orientation: portrait) {\r\n        .homeimg[_ngcontent-%COMP%]{\r\n            max-width:100%;\r\n            text-align: center;\r\n            position:relative;\r\n            margin-left:0px;\r\n            border-radius: 10px !important;\r\n        }\r\n}\r\n.text-box[_ngcontent-%COMP%]{\r\n    margin-right:100px;\r\n}\r\n.text-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        margin-top: 0;\r\n        margin-bottom: 1rem;\r\n        font-size:16px;\r\n        color: #515050;\r\n        font-weight: bold;\r\n}\r\n@media screen  and (max-device-width:768px) and (orientation: portrait) {\r\n    .text-box[_ngcontent-%COMP%]{\r\n        text-align: center; \r\n        margin-right:0px;\r\n        margin-left: 0px;\r\n        margin-top: 20px;;\r\n    }\r\n}\r\n@media screen  and (max-device-width: 480px) and (orientation: portrait) {\r\n    .text-box[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n        margin-left:0px;\r\n    }\r\n}\r\n.textbox1[_ngcontent-%COMP%]{\r\n    margin-left:100px;\r\n    margin-top:0px;\r\n    margin-bottom: 1rem;\r\n    font-size:16px;\r\n    color: #353434;\r\n    font-weight: bold;\r\n}\r\n@media screen  and (max-device-width:768px) and (orientation: portrait) {\r\n    .textbox1[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n        margin-top: 0;\r\n        margin-bottom: 1rem;\r\n        font-size: 16px;\r\n        margin-left:0px; \r\n    }\r\n}\r\n@media screen  and (max-device-width: 480px) and (orientation: portrait) {\r\n    .textbox1[_ngcontent-%COMP%]{\r\n      \r\n        margin-top: 0;\r\n        margin-bottom: 1rem;\r\n        font-size:16px;\r\n        \r\n        text-align: center;\r\n        margin-left: 10px;\r\n    }\r\n    .textLeft[_ngcontent-%COMP%]{\r\n        text-align: left;\r\n    }\r\n    .lstDiv[_ngcontent-%COMP%]{\r\n        margin-bottom: 50px;\r\n    }\r\n}\r\n.homeimg1[_ngcontent-%COMP%]{\r\n     \r\n        margin-right: 138px;\r\n       max-width: 100%; \r\n       margin-right:100px;\r\n       \r\n    \r\n}\r\n@media screen  and (max-device-width:768px) and (orientation: portrait) {\r\n    .homeimg1[_ngcontent-%COMP%]{\r\n       max-width: 100%; \r\n       \r\n       margin-right: 0px !important;\r\n}\r\n}\r\n@media screen  and (max-device-width: 480px) and (orientation: portrait) {\r\n    .homeimg1[_ngcontent-%COMP%]{\r\n       max-width: 100%; \r\n       \r\n       margin-right: 0px !important;\r\n}\r\n}\r\n.font-light[_ngcontent-%COMP%]{\r\n      font-weight: normal;\r\n      \r\n      font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\n.rounded[_ngcontent-%COMP%] {\r\n    border-radius: 1.25rem!important;\r\n}\r\n.line[_ngcontent-%COMP%]{\r\n    background: #fa8525;\r\n    margin-top: 50px;\r\n    display: none;\r\n}\r\n@media screen  and (max-device-width:768px) and (orientation: portrait) {\r\n    .line[_ngcontent-%COMP%]{\r\n        background: #fa8525;\r\n        margin-top: 50px;\r\n        display:grid;\r\n    }\r\n}\r\n@media screen  and (max-device-width:480px) and (orientation: portrait) {\r\n    .line[_ngcontent-%COMP%]{\r\n        background: #fa8525;\r\n        margin-top: 50px;\r\n        display: grid;\r\n    }\r\n}\r\n.text-title[_ngcontent-%COMP%]{\r\n   color: #007FFF;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCOztvREFFZ0Q7QUFDcEQ7QUFDQTtJQUNJO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjtBQUNKO0FBQ0E7UUFDUTtZQUNJLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZiw4QkFBOEI7UUFDbEM7QUFDUjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7UUFDUSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxjQUFjO1FBQ2QsaUJBQWlCO0FBQ3pCO0FBQ0E7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25CO0FBQ0o7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixlQUFlO0lBQ25CO0FBQ0o7QUFDQTtJQUNJOztRQUVJLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKO0FBR0E7O1FBRVEsbUJBQW1CO09BQ3BCLGVBQWU7T0FDZixrQkFBa0I7T0FDbEI7OzJEQUVvRDs7QUFFM0Q7QUFFQTtJQUNJO09BQ0csZUFBZTtPQUNmLHlCQUF5QjtPQUN6Qiw0QkFBNEI7QUFDbkM7QUFDQTtBQUNBO0lBQ0k7T0FDRyxlQUFlO09BQ2Ysa0NBQWtDO09BQ2xDLDRCQUE0QjtBQUNuQztBQUNBO0FBRUE7TUFDTSxtQkFBbUI7TUFDbkIsdUNBQXVDO01BQ3ZDLHFDQUFxQztBQUMzQztBQUNBOzs7Ozs7Ozs7Ozs7R0FZRztBQUNIO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFDQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixZQUFZO0lBQ2hCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixhQUFhO0lBQ2pCO0FBQ0o7QUFDQTtHQUNHLGNBQWM7QUFDakIiLCJmaWxlIjoidG9wLWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21laW1ne1xyXG4gICAgbWF4LXdpZHRoOjc1JTtcclxuICAgIG1hcmdpbi1sZWZ0OjEwMHB4O1xyXG4gICAgLyogYm94LXNoYWRvdzogNHB4IDRweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbi13ZWJraXQtYm94LXNoYWRvdzogNHB4IDRweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbi1tb3otYm94LXNoYWRvdzogNHB4IDRweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7ICovXHJcbn1cclxuQG1lZGlhIHNjcmVlbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoOjc2OHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgLmhvbWVpbWd7XHJcbiAgICAgICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuICBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgIC5ob21laW1ne1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG59XHJcbi50ZXh0LWJveHtcclxuICAgIG1hcmdpbi1yaWdodDoxMDBweDtcclxufVxyXG4udGV4dC1ib3ggcHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgY29sb3I6ICM1MTUwNTA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoOjc2OHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgLnRleHQtYm94e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAudGV4dC1ib3h7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnRleHRib3gxe1xyXG4gICAgbWFyZ2luLWxlZnQ6MTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICAgIGNvbG9yOiAjMzUzNDM0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoOjc2OHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgLnRleHRib3gxe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBweDsgXHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgIC50ZXh0Ym94MXtcclxuICAgICAgXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgIC8qIG1hcmdpbi1yaWdodDogMTAxcHg7ICovXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnRleHRMZWZ0e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAubHN0RGl2e1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uaG9tZWltZzF7XHJcbiAgICAgXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMzhweDtcclxuICAgICAgIG1heC13aWR0aDogMTAwJTsgXHJcbiAgICAgICBtYXJnaW4tcmlnaHQ6MTAwcHg7XHJcbiAgICAgICAvKiBib3gtc2hhZG93OiA0cHggNHB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogNHB4IDRweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAtbW96LWJveC1zaGFkb3c6IDRweCA0cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpOyAqL1xyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gIGFuZCAobWF4LWRldmljZS13aWR0aDo3NjhweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgIC5ob21laW1nMXtcclxuICAgICAgIG1heC13aWR0aDogMTAwJTsgXHJcbiAgICAgICAvKiBwYWRkaW5nLWxlZnQ6IDEzNXB4OyAqL1xyXG4gICAgICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAuaG9tZWltZzF7XHJcbiAgICAgICBtYXgtd2lkdGg6IDEwMCU7IFxyXG4gICAgICAgLyogcGFkZGluZy1sZWZ0OjYzcHggIWltcG9ydGFudDsgKi9cclxuICAgICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxufVxyXG5cclxuLmZvbnQtbGlnaHR7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIC8qIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWYgKi9cclxuICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi8qIC5pbm5lcntcclxuICAgYmFja2dyb3VuZDogcmdiKDIyOSwgMjI5LCAyNTApO1xyXG4gICBwYWRkaW5nOjFyZW07XHJcbiAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgd2lkdGg6MTAwJTtcclxuICAgY2xpcC1wYXRoOiBjaXJjbGUoMTAlIGF0IDkwJSAyMCUpO1xyXG4gICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggLjVzIGVhc2UtaW4tb3V0O1xyXG4gICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmlubmVyOmhvdmVye1xyXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoNzUlKTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMDIsIDIwMiwgMjI4KTtcclxufSAqL1xyXG4ucm91bmRlZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjI1cmVtIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpbmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmE4NTI1O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoOjc2OHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgLmxpbmV7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhODUyNTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuICBhbmQgKG1heC1kZXZpY2Utd2lkdGg6NDgwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAubGluZXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmE4NTI1O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgIH1cclxufVxyXG4udGV4dC10aXRsZXtcclxuICAgY29sb3I6ICMwMDdGRkY7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-content',
                templateUrl: './top-content.component.html',
                styleUrls: ['./top-content.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nlZ4":
/*!***********************************************!*\
  !*** ./src/app/apps/topup/topup.component.ts ***!
  \***********************************************/
/*! exports provided: TopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopupComponent", function() { return TopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TopupComponent {
    constructor() { }
    ngOnInit() {
    }
}
TopupComponent.ɵfac = function TopupComponent_Factory(t) { return new (t || TopupComponent)(); };
TopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopupComponent, selectors: [["app-topup"]], decls: 9, vars: 0, consts: [[1, "banner-innerpage"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-6", "no-trans", "align-self-center", "text-center"], [1, "title", 2, "color", "black", "margin-top", "-70px"]], template: function TopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "TOP UP PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3B1cC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-topup',
                templateUrl: './topup.component.html',
                styleUrls: ['./topup.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "uDbF":
/*!*********************************************!*\
  !*** ./src/app/apps/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _about_About_Components_top_content_top_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../about/About-Components/top-content/top-content.component */ "jfhW");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 21, vars: 0, consts: [[1, "banner-innerpage", 2, "background-image", "url(assets/images/landingpage/Top_Banner.jpeg)", "padding-top", "412px"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-6", "no-trans"], [1, "title", "titleDeboo", 2, "text-transform", "unset!important", "color", "#007FFF !important"], [2, "margin-left", "65px", "color", "black", "font-weight", "700", "font-size", "18px"], [1, "playstore", 2, "margin-left", "65px"], ["href", "", 2, "margin-left", "1px"], ["src", "assets/images/innerpage/app.jpg", "alt", "playstore", "width", "129", "height", "37", 2, "border-radius", "5px"], ["href", ""], ["src", "assets/images/innerpage/googleplay.png", "alt", "playstore", "width", "130", "height", "40"], [1, "playstore", 2, "margin-left", "65px", "margin-top", "5px"], [1, "btn", "btn-secondary", "btn2"], [1, "spacer", "feature22"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "deboo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Clean Toilet Guaranteed, Everytime!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "book deboo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-top-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_about_About_Components_top_content_top_content_component__WEBPACK_IMPORTED_MODULE_1__["TopContentComponent"]], styles: [".banner-innerpage[_ngcontent-%COMP%]{\r\n    opacity: 0.9;\r\n}\r\n.btn2[_ngcontent-%COMP%]{\r\n    color:#007FFF !important;\r\n    font-weight:700 !important;\r\n    font-size: 18x !important;\r\n    border:2px solid #007FFF !important;\r\n    width: 274px !important;\r\n      height: 36px !important;\r\n      padding-top: 4px !important;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 365px) {\r\n    .btn2[_ngcontent-%COMP%]{\r\n        color: #007FFF !important;\r\n    font-weight: 700 !important;\r\n    font-size: 14px !important;\r\n    border: 2px solid #007FFF !important;\r\n    width: 130px !important;\r\n    height: 36px !important;\r\n    padding-top: 6px !important;\r\n    padding-right: 3px !important;\r\n    padding-left: 3px !important;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQyx1QkFBdUI7TUFDckIsdUJBQXVCO01BQ3ZCLDJCQUEyQjtBQUNqQztBQUNBOztHQUVHO0FBQ0g7Ozs7Ozs7OztHQVNHO0FBQ0g7SUFDSTtRQUNJLHlCQUF5QjtJQUM3QiwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCO0VBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lci1pbm5lcnBhZ2V7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuLmJ0bjJ7XHJcbiAgICBjb2xvcjojMDA3RkZGICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDo3MDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTh4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICMwMDdGRkYgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyNzRweCAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDM2cHggIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy10b3A6IDRweCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIC50aXRsZURlYm9ve1xyXG4gICAgZm9udC1zaXplOiA0NTtcclxufSAqL1xyXG4vKiBAbWVkaWEgc2NyZWVuICBhbmQgKG1heC1kZXZpY2Utd2lkdGg6MzIxcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAuYnRuMntcclxuICAgICAgICBjb2xvcjojMDA3RkZGICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOjJweCBzb2xpZCAjMDA3RkZGICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IDM2cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2NXB4KSB7XHJcbiAgICAuYnRuMntcclxuICAgICAgICBjb2xvcjogIzAwN0ZGRiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA3RkZGICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTMwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzZweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDZweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=apps-apps-module.js.map