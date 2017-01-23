webpackJsonp([0,4],{

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent.prototype.ngAfterViewInit = function () {
        // let WebAdmin_VARS = {
        //   BODY: $("body"),
        //   WRAPPER: $('#wrapper'),
        //   LEFT_ITEMS: $('.left ul')
        // };
        // ! function (e: any) {
        //   let i = function () {
        //     this.$body = WebAdmin_VARS.BODY,
        //       this.$openLeftBtn = e('.open-left'), this.$menuItem = e('#sidebar-menu a'),
        //       this.$subDropItem = e('.subdrop'), this.$leftMenuToggle = e('.open-left'),
        //       this.$firstMenuChild = e('#sidebar-menu ul li.has_sub a.active');
        //   };
        //   i.prototype.menuItemClick = function (i) {
        //     WebAdmin_VARS.WRAPPER.hasClass('enlarged') || (e(this).parent().hasClass('has_sub') && i.preventDefault(),
        //       e(this).hasClass('subdrop') ? e(this).hasClass('subdrop') && (e(this).removeClass('subdrop'),
        //         e(this).next('ul').slideUp(350), e('.pull-right i', e(this).parent()).removeClass('mdi-minus').addClass('mdi-plus')) : (e('ul', e(this).parents('ul:first')).slideUp(350),
        //           e('a', e(this).parents('ul:first')).removeClass('subdrop'), e('#sidebar-menu .pull-right i').removeClass('mdi-minus').addClass('mdi-plus'), e(this).next('ul').slideDown(350),
        //           e(this).addClass('subdrop'), e('.pull-right i', e(this).parents('.has_sub:last')).removeClass('mdi-plus').addClass('mdi-minus'), e('.pull-right i', e(this).siblings('ul')).removeClass('mdi-minus').addClass('mdi-plus')));
        //   }, i.prototype.init = function () {
        //     let i = this;
        //     i.$leftMenuToggle.on('click', function (e) {
        //       e.stopPropagation(), i.openLeftBar();
        //     }), i.$menuItem.on('click', i.menuItemClick), i.$firstMenuChild.parents('li:last').children('a:first').addClass('active').trigger('click'), i.$menuItem.each(function () {
        //       this.href == window.location.href && (e(this).addClass('active'), e(this).parent().addClass('active'), e(this).parent().parent().prev().addClass('active'), e(this).parent().parent().prev().trigger('click'));
        //     });
        //   }, e.Sidemenu = new i, e.Sidemenu.Constructor = i;
        // } (window['jQuery']);
    };
    LayoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(796),
            styles: [__webpack_require__(765)]
        }), 
        __metadata('design:paramtypes', [])
    ], LayoutComponent);
    return LayoutComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/layout.component.js.map

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookCopyListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookCopyListComponent = (function () {
    function BookCopyListComponent() {
    }
    BookCopyListComponent.prototype.ngOnInit = function () {
    };
    BookCopyListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-copy-list',
            template: __webpack_require__(797),
            styles: [__webpack_require__(766)]
        }), 
        __metadata('design:paramtypes', [])
    ], BookCopyListComponent);
    return BookCopyListComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/book-copy-list.component.js.map

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookCopyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookCopyComponent = (function () {
    function BookCopyComponent() {
        this.src = 'http://media.wiley.com/spa_assets/R16B092P2/site/wiley2/cvo/images/placeholders/placeholder_300.gif';
        this.nav = 'SUMMARY';
    }
    BookCopyComponent.prototype.ngOnInit = function () {
    };
    BookCopyComponent.prototype.changeNav = function (navType) {
        this.nav = navType;
    };
    BookCopyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-copy',
            template: __webpack_require__(799),
            styles: [__webpack_require__(768)]
        }), 
        __metadata('design:paramtypes', [])
    ], BookCopyComponent);
    return BookCopyComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/book-copy.component.js.map

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookCreateComponent = (function () {
    function BookCreateComponent() {
        this.src = 'http://media.wiley.com/spa_assets/R16B092P2/site/wiley2/cvo/images/placeholders/placeholder_300.gif';
    }
    BookCreateComponent.prototype.selected = function (imageResult) {
        this.src = imageResult.dataURL;
    };
    BookCreateComponent.prototype.ngOnInit = function () {
    };
    BookCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-create',
            template: __webpack_require__(800),
            styles: [__webpack_require__(769)]
        }), 
        __metadata('design:paramtypes', [])
    ], BookCreateComponent);
    return BookCreateComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/book-create.component.js.map

/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookListComponent = (function () {
    function BookListComponent() {
    }
    BookListComponent.prototype.ngOnInit = function () {
    };
    BookListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-list',
            template: __webpack_require__(802),
            styles: [__webpack_require__(771)]
        }), 
        __metadata('design:paramtypes', [])
    ], BookListComponent);
    return BookListComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/book-list.component.js.map

/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookViewComponent = (function () {
    function BookViewComponent() {
        this.src = 'http://media.wiley.com/spa_assets/R16B092P2/site/wiley2/cvo/images/placeholders/placeholder_300.gif';
        this.nav = 'SUMMARY';
    }
    BookViewComponent.prototype.selected = function (imageResult) {
        this.src = imageResult.dataURL;
    };
    BookViewComponent.prototype.ngOnInit = function () {
    };
    BookViewComponent.prototype.changeNav = function (navType) {
        this.nav = navType;
    };
    BookViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-view',
            template: __webpack_require__(805),
            styles: [__webpack_require__(774)]
        }), 
        __metadata('design:paramtypes', [])
    ], BookViewComponent);
    return BookViewComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/book-view.component.js.map

/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CounterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CounterComponent = (function () {
    function CounterComponent() {
    }
    CounterComponent.prototype.ngOnInit = function () {
    };
    CounterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-counter',
            template: __webpack_require__(806),
            styles: [__webpack_require__(775)]
        }), 
        __metadata('design:paramtypes', [])
    ], CounterComponent);
    return CounterComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/counter.component.js.map

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return InventoryCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InventoryCreateComponent = (function () {
    function InventoryCreateComponent() {
        this.src = 'http://cicchettiseattle.com/wp-content/themes/feather13/img/placeholder.png';
    }
    InventoryCreateComponent.prototype.selected = function (imageResult) {
        this.src = imageResult.dataURL;
    };
    InventoryCreateComponent.prototype.ngOnInit = function () {
    };
    InventoryCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inventory-create',
            template: __webpack_require__(807),
            styles: [__webpack_require__(776)]
        }), 
        __metadata('design:paramtypes', [])
    ], InventoryCreateComponent);
    return InventoryCreateComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/inventory-create.component.js.map

/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return InventoryHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InventoryHistoryComponent = (function () {
    function InventoryHistoryComponent() {
        this.nav = 'SUMMARY';
        this.src = 'http://combonetwork.com/img/empty_profile.png';
    }
    InventoryHistoryComponent.prototype.selected = function (imageResult) {
        this.src = imageResult.dataURL;
    };
    InventoryHistoryComponent.prototype.ngOnInit = function () {
    };
    InventoryHistoryComponent.prototype.changeNav = function (navType) {
        this.nav = navType;
    };
    InventoryHistoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inventory-history',
            template: __webpack_require__(808),
            styles: [__webpack_require__(777)]
        }), 
        __metadata('design:paramtypes', [])
    ], InventoryHistoryComponent);
    return InventoryHistoryComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/inventory-history.component.js.map

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return InventoryListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InventoryListComponent = (function () {
    function InventoryListComponent() {
    }
    InventoryListComponent.prototype.ngOnInit = function () {
    };
    InventoryListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inventory-list',
            template: __webpack_require__(809),
            styles: [__webpack_require__(778)]
        }), 
        __metadata('design:paramtypes', [])
    ], InventoryListComponent);
    return InventoryListComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/inventory-list.component.js.map

/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MemberCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberCreateComponent = (function () {
    function MemberCreateComponent() {
        this.src = 'http://combonetwork.com/img/empty_profile.png';
    }
    MemberCreateComponent.prototype.selected = function (imageResult) {
        this.src = imageResult.dataURL;
    };
    MemberCreateComponent.prototype.ngOnInit = function () {
    };
    MemberCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-create',
            template: __webpack_require__(810),
            styles: [__webpack_require__(779)]
        }), 
        __metadata('design:paramtypes', [])
    ], MemberCreateComponent);
    return MemberCreateComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/member-create.component.js.map

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MemberListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberListComponent = (function () {
    function MemberListComponent() {
    }
    MemberListComponent.prototype.ngOnInit = function () {
    };
    MemberListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-list',
            template: __webpack_require__(812),
            styles: [__webpack_require__(781)]
        }), 
        __metadata('design:paramtypes', [])
    ], MemberListComponent);
    return MemberListComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/member-list.component.js.map

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MemberViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberViewComponent = (function () {
    function MemberViewComponent() {
        this.nav = 'SUMMARY';
        this.src = 'http://combonetwork.com/img/empty_profile.png';
    }
    MemberViewComponent.prototype.selected = function (imageResult) {
        this.src = imageResult.dataURL;
    };
    MemberViewComponent.prototype.ngOnInit = function () {
    };
    MemberViewComponent.prototype.changeNav = function (navType) {
        this.nav = navType;
    };
    MemberViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-view',
            template: __webpack_require__(816),
            styles: [__webpack_require__(785)]
        }), 
        __metadata('design:paramtypes', [])
    ], MemberViewComponent);
    return MemberViewComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/member-view.component.js.map

/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PaymentCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentCreateComponent = (function () {
    function PaymentCreateComponent() {
    }
    PaymentCreateComponent.prototype.ngOnInit = function () {
    };
    PaymentCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-payment-create',
            template: __webpack_require__(817),
            styles: [__webpack_require__(786)]
        }), 
        __metadata('design:paramtypes', [])
    ], PaymentCreateComponent);
    return PaymentCreateComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/payment-create.component.js.map

/***/ },

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PaymentListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentListComponent = (function () {
    function PaymentListComponent() {
    }
    PaymentListComponent.prototype.ngOnInit = function () {
    };
    PaymentListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-payment-list',
            template: __webpack_require__(818),
            styles: [__webpack_require__(787)]
        }), 
        __metadata('design:paramtypes', [])
    ], PaymentListComponent);
    return PaymentListComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/payment-list.component.js.map

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PendingReturnsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PendingReturnsComponent = (function () {
    function PendingReturnsComponent() {
    }
    PendingReturnsComponent.prototype.ngOnInit = function () {
    };
    PendingReturnsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pending-returns',
            template: __webpack_require__(819),
            styles: [__webpack_require__(788)]
        }), 
        __metadata('design:paramtypes', [])
    ], PendingReturnsComponent);
    return PendingReturnsComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/pending-returns.component.js.map

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReturnViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReturnViewComponent = (function () {
    function ReturnViewComponent() {
    }
    ReturnViewComponent.prototype.ngOnInit = function () {
    };
    ReturnViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-return-view',
            template: __webpack_require__(820),
            styles: [__webpack_require__(789)]
        }), 
        __metadata('design:paramtypes', [])
    ], ReturnViewComponent);
    return ReturnViewComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/return-view.component.js.map

/***/ },

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserCreateComponent = (function () {
    function UserCreateComponent() {
    }
    UserCreateComponent.prototype.ngOnInit = function () {
    };
    UserCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-create',
            template: __webpack_require__(821),
            styles: [__webpack_require__(790)]
        }), 
        __metadata('design:paramtypes', [])
    ], UserCreateComponent);
    return UserCreateComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/user-create.component.js.map

/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserListComponent = (function () {
    function UserListComponent() {
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(823),
            styles: [__webpack_require__(792)]
        }), 
        __metadata('design:paramtypes', [])
    ], UserListComponent);
    return UserListComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/user-list.component.js.map

/***/ },

/***/ 433:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 433;


/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(567);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/main.js.map

/***/ },

/***/ 566:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(795),
            styles: [__webpack_require__(793)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/app.component.js.map

/***/ },

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_imageupload__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_imageupload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_imageupload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_modal__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bs3_modal_ng2_bs3_modal__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bs3_modal_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_bs3_modal_ng2_bs3_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layout_layout_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_books_book_create_book_create_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_books_book_list_book_list_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_books_book_view_book_view_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_books_book_view_book_view_summary_book_view_summary_component__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_books_book_view_book_view_copies_book_view_copies_component__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_books_book_form_book_form_component__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_books_book_copy_book_copy_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_books_book_copy_book_copy_history_book_copy_history_component__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_books_book_copy_list_book_copy_list_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_members_member_list_member_list_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_members_member_create_member_create_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_members_member_form_member_form_component__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_members_member_view_member_view_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_members_member_view_member_view_summary_member_view_summary_component__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_members_member_view_member_view_payments_member_view_payments_component__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_members_member_view_member_view_activity_member_view_activity_component__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_counter_counter_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_returns_pending_returns_pending_returns_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_returns_return_view_return_view_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_payments_payment_list_payment_list_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_payments_payment_create_payment_create_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_inventory_inventory_create_inventory_create_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_inventory_inventory_list_inventory_list_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_inventory_inventory_history_inventory_history_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_users_user_create_user_create_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_users_user_form_user_form_component__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_users_user_list_user_list_component__ = __webpack_require__(362);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__layout_layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_books_book_create_book_create_component__["a" /* BookCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_books_book_list_book_list_component__["a" /* BookListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_books_book_view_book_view_component__["a" /* BookViewComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_books_book_view_book_view_summary_book_view_summary_component__["a" /* BookViewSummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_books_book_view_book_view_copies_book_view_copies_component__["a" /* BookViewCopiesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_books_book_form_book_form_component__["a" /* BookFormComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_books_book_copy_book_copy_component__["a" /* BookCopyComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_books_book_copy_book_copy_history_book_copy_history_component__["a" /* BookCopyHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_books_book_copy_list_book_copy_list_component__["a" /* BookCopyListComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_members_member_list_member_list_component__["a" /* MemberListComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_members_member_create_member_create_component__["a" /* MemberCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_members_member_form_member_form_component__["a" /* MemberFormComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_members_member_view_member_view_component__["a" /* MemberViewComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_members_member_view_member_view_summary_member_view_summary_component__["a" /* MemberViewSummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pages_members_member_view_member_view_payments_member_view_payments_component__["a" /* MemberViewPaymentsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pages_members_member_view_member_view_activity_member_view_activity_component__["a" /* MemberViewActivityComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_counter_counter_component__["a" /* CounterComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_returns_pending_returns_pending_returns_component__["a" /* PendingReturnsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pages_returns_return_view_return_view_component__["a" /* ReturnViewComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pages_payments_payment_list_payment_list_component__["a" /* PaymentListComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pages_payments_payment_create_payment_create_component__["a" /* PaymentCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_32__pages_inventory_inventory_create_inventory_create_component__["a" /* InventoryCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_33__pages_inventory_inventory_list_inventory_list_component__["a" /* InventoryListComponent */],
                __WEBPACK_IMPORTED_MODULE_34__pages_inventory_inventory_history_inventory_history_component__["a" /* InventoryHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_35__pages_users_user_create_user_create_component__["a" /* UserCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_36__pages_users_user_form_user_form_component__["a" /* UserFormComponent */],
                __WEBPACK_IMPORTED_MODULE_37__pages_users_user_list_user_list_component__["a" /* UserListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* Routing */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_imageupload__["ImageUploadModule"],
                __WEBPACK_IMPORTED_MODULE_5_angular2_modal__["m" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__["b" /* BootstrapModalModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_bs3_modal_ng2_bs3_modal__["Ng2Bs3ModalModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/app.module.js.map

/***/ },

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_layout_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pages_routing__ = __webpack_require__(580);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Routing; });



var APP_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__layout_layout_component__["a" /* LayoutComponent */],
        children: __WEBPACK_IMPORTED_MODULE_2__pages_pages_routing__["a" /* PAGE_ROUTES */]
    },
    {
        path: '',
        redirectTo: '/books/create',
        pathMatch: 'full'
    }
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/app.routing.js.map

/***/ },

/***/ 569:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookCopyHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookCopyHistoryComponent = (function () {
    function BookCopyHistoryComponent() {
    }
    BookCopyHistoryComponent.prototype.ngOnInit = function () {
    };
    BookCopyHistoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-copy-history',
            template: __webpack_require__(798),
            styles: [__webpack_require__(767)]
        }), 
        __metadata('design:paramtypes', [])
    ], BookCopyHistoryComponent);
    return BookCopyHistoryComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/book-copy-history.component.js.map

/***/ },

/***/ 570:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookFormComponent = (function () {
    function BookFormComponent() {
    }
    BookFormComponent.prototype.ngOnInit = function () {
    };
    BookFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-form',
            template: __webpack_require__(801),
            styles: [__webpack_require__(770)]
        }), 
        __metadata('design:paramtypes', [])
    ], BookFormComponent);
    return BookFormComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/book-form.component.js.map

/***/ },

/***/ 571:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(369);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookViewCopiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookViewCopiesComponent = (function () {
    function BookViewCopiesComponent(overlay, vcRef, modal) {
        this.modal = modal;
        overlay.defaultViewContainer = vcRef;
    }
    BookViewCopiesComponent.prototype.ngOnInit = function () {
    };
    BookViewCopiesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-view-copies',
            template: __webpack_require__(803),
            styles: [__webpack_require__(772)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["k" /* Overlay */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["k" /* Overlay */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */]) === 'function' && _c) || Object])
    ], BookViewCopiesComponent);
    return BookViewCopiesComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/book-view-copies.component.js.map

/***/ },

/***/ 572:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookViewSummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookViewSummaryComponent = (function () {
    function BookViewSummaryComponent() {
    }
    BookViewSummaryComponent.prototype.ngOnInit = function () {
    };
    BookViewSummaryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-view-summary',
            template: __webpack_require__(804),
            styles: [__webpack_require__(773)]
        }), 
        __metadata('design:paramtypes', [])
    ], BookViewSummaryComponent);
    return BookViewSummaryComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/book-view-summary.component.js.map

/***/ },

/***/ 573:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_list_book_list_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_create_book_create_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_view_book_view_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_copy_book_copy_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_copy_list_book_copy_list_component__ = __webpack_require__(345);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BOOK_ROUTES; });





var BOOK_ROUTES = [
    {
        path: 'list',
        component: __WEBPACK_IMPORTED_MODULE_0__book_list_book_list_component__["a" /* BookListComponent */]
    },
    {
        path: 'create',
        component: __WEBPACK_IMPORTED_MODULE_1__book_create_book_create_component__["a" /* BookCreateComponent */]
    },
    {
        path: 'view/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__book_view_book_view_component__["a" /* BookViewComponent */]
    },
    {
        path: 'copy-list',
        component: __WEBPACK_IMPORTED_MODULE_4__book_copy_list_book_copy_list_component__["a" /* BookCopyListComponent */]
    },
    {
        path: 'copy/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__book_copy_book_copy_component__["a" /* BookCopyComponent */]
    }
];
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/books.routing.js.map

/***/ },

/***/ 574:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inventory_history_inventory_history_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inventory_create_inventory_create_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inventory_list_inventory_list_component__ = __webpack_require__(353);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return INVENTORY_ROUTES; });



var INVENTORY_ROUTES = [
    {
        path: 'list',
        component: __WEBPACK_IMPORTED_MODULE_2__inventory_list_inventory_list_component__["a" /* InventoryListComponent */]
    },
    {
        path: 'create',
        component: __WEBPACK_IMPORTED_MODULE_1__inventory_create_inventory_create_component__["a" /* InventoryCreateComponent */]
    },
    {
        path: 'view/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__inventory_history_inventory_history_component__["a" /* InventoryHistoryComponent */]
    },
];
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/inventory.routing.js.map

/***/ },

/***/ 575:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MemberFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberFormComponent = (function () {
    function MemberFormComponent() {
    }
    MemberFormComponent.prototype.ngOnInit = function () {
    };
    MemberFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-form',
            template: __webpack_require__(811),
            styles: [__webpack_require__(780)]
        }), 
        __metadata('design:paramtypes', [])
    ], MemberFormComponent);
    return MemberFormComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/member-form.component.js.map

/***/ },

/***/ 576:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MemberViewActivityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberViewActivityComponent = (function () {
    function MemberViewActivityComponent() {
    }
    MemberViewActivityComponent.prototype.ngOnInit = function () {
    };
    MemberViewActivityComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-view-activity',
            template: __webpack_require__(813),
            styles: [__webpack_require__(782)]
        }), 
        __metadata('design:paramtypes', [])
    ], MemberViewActivityComponent);
    return MemberViewActivityComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/member-view-activity.component.js.map

/***/ },

/***/ 577:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MemberViewPaymentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberViewPaymentsComponent = (function () {
    function MemberViewPaymentsComponent() {
    }
    MemberViewPaymentsComponent.prototype.ngOnInit = function () {
    };
    MemberViewPaymentsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-view-payments',
            template: __webpack_require__(814),
            styles: [__webpack_require__(783)]
        }), 
        __metadata('design:paramtypes', [])
    ], MemberViewPaymentsComponent);
    return MemberViewPaymentsComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/member-view-payments.component.js.map

/***/ },

/***/ 578:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MemberViewSummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberViewSummaryComponent = (function () {
    function MemberViewSummaryComponent() {
    }
    MemberViewSummaryComponent.prototype.ngOnInit = function () {
    };
    MemberViewSummaryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-view-summary',
            template: __webpack_require__(815),
            styles: [__webpack_require__(784)]
        }), 
        __metadata('design:paramtypes', [])
    ], MemberViewSummaryComponent);
    return MemberViewSummaryComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/member-view-summary.component.js.map

/***/ },

/***/ 579:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__member_list_member_list_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__member_create_member_create_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__member_view_member_view_component__ = __webpack_require__(356);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MEMBER_ROUTES; });



var MEMBER_ROUTES = [
    {
        path: 'list',
        component: __WEBPACK_IMPORTED_MODULE_0__member_list_member_list_component__["a" /* MemberListComponent */]
    },
    {
        path: 'create',
        component: __WEBPACK_IMPORTED_MODULE_1__member_create_member_create_component__["a" /* MemberCreateComponent */]
    },
    {
        path: 'view/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__member_view_member_view_component__["a" /* MemberViewComponent */]
    }
];
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/members.routing.js.map

/***/ },

/***/ 580:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_users_routing__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inventory_inventory_routing__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payments_payments_routing__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__returns_returns_routing__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__books_books_routing__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__members_members_routing__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__counter_counter_component__ = __webpack_require__(350);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PAGE_ROUTES; });







var PAGE_ROUTES = [
    {
        path: 'books',
        children: __WEBPACK_IMPORTED_MODULE_4__books_books_routing__["a" /* BOOK_ROUTES */]
    },
    {
        path: 'members',
        children: __WEBPACK_IMPORTED_MODULE_5__members_members_routing__["a" /* MEMBER_ROUTES */]
    },
    {
        path: 'counter',
        component: __WEBPACK_IMPORTED_MODULE_6__counter_counter_component__["a" /* CounterComponent */]
    },
    {
        path: 'returns',
        children: __WEBPACK_IMPORTED_MODULE_3__returns_returns_routing__["a" /* RETURN_ROUTES */]
    },
    {
        path: 'payments',
        children: __WEBPACK_IMPORTED_MODULE_2__payments_payments_routing__["a" /* PAYMENT_ROUTES */]
    },
    {
        path: 'inventory',
        children: __WEBPACK_IMPORTED_MODULE_1__inventory_inventory_routing__["a" /* INVENTORY_ROUTES */]
    },
    {
        path: 'users',
        children: __WEBPACK_IMPORTED_MODULE_0__users_users_routing__["a" /* USER_ROUTES */]
    },
];
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/pages.routing.js.map

/***/ },

/***/ 581:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__payment_list_payment_list_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__payment_create_payment_create_component__ = __webpack_require__(357);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PAYMENT_ROUTES; });


var PAYMENT_ROUTES = [
    {
        path: 'list',
        component: __WEBPACK_IMPORTED_MODULE_0__payment_list_payment_list_component__["a" /* PaymentListComponent */]
    },
    {
        path: 'create',
        component: __WEBPACK_IMPORTED_MODULE_1__payment_create_payment_create_component__["a" /* PaymentCreateComponent */]
    },
];
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/payments.routing.js.map

/***/ },

/***/ 582:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__return_view_return_view_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pending_returns_pending_returns_component__ = __webpack_require__(359);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RETURN_ROUTES; });


var RETURN_ROUTES = [
    {
        path: 'pending',
        component: __WEBPACK_IMPORTED_MODULE_1__pending_returns_pending_returns_component__["a" /* PendingReturnsComponent */]
    },
    {
        path: 'view/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__return_view_return_view_component__["a" /* ReturnViewComponent */]
    },
];
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/returns.routing.js.map

/***/ },

/***/ 583:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserFormComponent = (function () {
    function UserFormComponent() {
    }
    UserFormComponent.prototype.ngOnInit = function () {
    };
    UserFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-form',
            template: __webpack_require__(822),
            styles: [__webpack_require__(791)]
        }), 
        __metadata('design:paramtypes', [])
    ], UserFormComponent);
    return UserFormComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/user-form.component.js.map

/***/ },

/***/ 584:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_list_user_list_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_create_user_create_component__ = __webpack_require__(361);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return USER_ROUTES; });


var USER_ROUTES = [
    {
        path: 'create',
        component: __WEBPACK_IMPORTED_MODULE_1__user_create_user_create_component__["a" /* UserCreateComponent */]
    },
    {
        path: 'list',
        component: __WEBPACK_IMPORTED_MODULE_0__user_list_user_list_component__["a" /* UserListComponent */]
    },
];
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/users.routing.js.map

/***/ },

/***/ 585:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/environment.js.map

/***/ },

/***/ 586:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/polyfills.js.map

/***/ },

/***/ 765:
/***/ function(module, exports) {

module.exports = ".slimScrollDiv {\n  height: 100% !important; }\n\n.slimscrollleft {\n  height: 100% !important; }\n\n.custom-active {\n  background-color: #EEEEEE !important; }\n  .custom-active:hover {\n    background-color: #E0E0E0 !important; }\n"

/***/ },

/***/ 766:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 767:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 768:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 769:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 770:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 771:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 772:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 773:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 774:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 775:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 776:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 777:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 778:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 779:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 780:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 781:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 782:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 783:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 784:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 785:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 786:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 787:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 788:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 789:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 790:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 791:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 792:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 793:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 795:
/***/ function(module, exports) {

module.exports = " \n\n    <router-outlet></router-outlet>\n "

/***/ },

/***/ 796:
/***/ function(module, exports) {

module.exports = "<div class=\"app\" id=\"app\">\n\n  <!-- ############ LAYOUT START-->\n\n  <!-- aside -->\n  <div id=\"aside\" class=\"app-aside fade nav-dropdown black\">\n    <!-- fluid app aside -->\n    <div class=\"navside dk\" data-layout=\"column\">\n      <div class=\"navbar no-radius\">\n        <!-- brand -->\n        <a href=\"index.html\" class=\"navbar-brand\">\n          <div data-ui-include=\"'images/logo.svg'\"></div>\n          <img src=\"images/logo.png\" alt=\".\" class=\"hide\">\n          <span class=\"hidden-folded inline\">Library Admin</span>\n        </a>\n        <!-- / brand -->\n      </div>\n      <div data-flex class=\"hide-scroll\">\n        <nav class=\"scroll nav-stacked nav-stacked-rounded nav-color\">\n\n          <ul class=\"nav\" data-ui-nav>\n            <li class=\"nav-header hidden-folded\">\n              <span class=\"text-xs\">Quick Links</span>\n            </li>\n            <!--<li>\n              <a class=\"b-default\">\n                <span class=\"nav-icon text-white no-fade\">\n                    <i class=\"ion-filing\"></i>\n                  </span>\n                <span class=\"nav-text\">Dashboard</span>\n              </a>\n            </li>-->\n\n            <li>\n              <a class=\"b-default\" [routerLink]=\"['/','counter']\">\n                <span class=\"nav-icon\">\n                    <i class=\"ion-person\"></i>\n                  </span>\n                <span class=\"nav-text\">Counter</span>\n              </a>\n            </li>\n            <li>\n              <a class=\"b-default\" [routerLink]=\"['/','returns','pending']\">\n                <span class=\"nav-icon\">\n                    <i class=\"ion-clock\"></i>\n                  </span>\n                <span class=\"nav-text\">  Returns / Checkouts </span>\n              </a>\n            </li>\n\n            <li class=\"nav-header hidden-folded m-t\">\n              <span class=\"text-xs\">Management</span>\n            </li>\n            <li [routerLinkActive]=\"['/','books']\">\n              <a>\n                <span class=\"nav-caret\">\n                    <i class=\"fa fa-caret-down\"></i>\n                  </span>\n                <span class=\"nav-icon\">\n                    <i class=\"fa fa-book\"></i>\n                  </span>\n                <span class=\"nav-text\">Books</span>\n              </a>\n              <ul class=\"nav-sub nav-mega nav-mega-3\">\n                <li [routerLinkActive]=\"['/','books','create']\">\n                  <a [routerLink]=\"['/','books','create']\">\n                    <span class=\"nav-text\">Create New</span>\n                  </a>\n                </li>\n                <li>\n                  <a [routerLink]=\"['/','books','list']\">\n                    <span class=\"nav-text\">Search Books</span>\n                  </a>\n                </li>\n                <li>\n                  <a [routerLink]=\"['/','books','copy-list']\">\n                    <span class=\"nav-text\">Search Copies</span>\n                  </a>\n                </li>\n\n\n              </ul>\n            </li>\n\n            <li [routerLinkActive]=\"['/','members']\">\n              <a>\n                <span class=\"nav-caret\">\n                    <i class=\"fa fa-caret-down\"></i>\n                  </span>\n                <span class=\"nav-icon\">\n                    <i class=\"fa fa-user\"></i>\n                  </span>\n                <span class=\"nav-text\">Members</span>\n              </a>\n              <ul class=\"nav-sub nav-mega nav-mega-3\">\n                <li>\n                  <a [routerLink]=\"['/','members','create']\">\n                    <span class=\"nav-text\">Create New</span>\n                  </a>\n                </li>\n                <li>\n                  <a [routerLink]=\"['/','members','list']\">\n                    <span class=\"nav-text\">Search Member</span>\n                  </a>\n                </li>\n\n              </ul>\n            </li>\n            <li [routerLinkActive]=\"['/','payments']\">\n              <a>\n                <span class=\"nav-caret\">\n                    <i class=\"fa fa-caret-down\"></i>\n                  </span>\n                <span class=\"nav-icon\">\n                    <i class=\"fa fa-credit-card\"></i>\n                  </span>\n                <span class=\"nav-text\">Payments</span>\n              </a>\n              <ul class=\"nav-sub nav-mega nav-mega-3\">\n                <li>\n                  <a [routerLink]=\"['/','payments','create']\">\n                    <span class=\"nav-text\">New Payment</span>\n                  </a>\n                </li>\n                <li>\n                  <a [routerLink]=\"['/','payments','list']\">\n                    <span class=\"nav-text\">Search Payment</span>\n                  </a>\n                </li>\n\n              </ul>\n            </li>\n\n            <li [routerLinkActive]=\"['/','payments']\">\n              <a>\n                <span class=\"nav-caret\">\n                    <i class=\"fa fa-caret-down\"></i>\n                  </span>\n                <span class=\"nav-icon\">\n                    <i class=\"fa fa-list\"></i>\n                  </span>\n                <span class=\"nav-text\">Inventory</span>\n              </a>\n              <ul class=\"nav-sub nav-mega nav-mega-3\">\n                <li>\n                  <a [routerLink]=\"['/','inventory','create']\">\n                    <span class=\"nav-text\">Add Inventory</span>\n                  </a>\n                </li>\n                <li>\n                  <a [routerLink]=\"['/','inventory','list']\">\n                    <span class=\"nav-text\">Search Inventory</span>\n                  </a>\n                </li>\n\n              </ul>\n            </li>\n            <li [routerLinkActive]=\"['/','payments']\">\n              <a>\n                <span class=\"nav-caret\">\n                    <i class=\"fa fa-caret-down\"></i>\n                  </span>\n                <span class=\"nav-icon\">\n                    <i class=\"fa fa-lock\"></i>\n                  </span>\n                <span class=\"nav-text\">Users</span>\n              </a>\n              <ul class=\"nav-sub nav-mega nav-mega-3\">\n                <li>\n                  <a [routerLink]=\"['/','users','create']\">\n                    <span class=\"nav-text\">New User</span>\n                  </a>\n                </li>\n                <li>\n                  <a [routerLink]=\"['/','users','list']\">\n                    <span class=\"nav-text\">Search User</span>\n                  </a>\n                </li>\n\n              </ul>\n            </li>\n\n\n          </ul>\n        </nav>\n      </div>\n      <div data-flex-no-shrink>\n        <div class=\"nav-fold dropup\">\n          <a data-toggle=\"dropdown\">\n            <div class=\"pull-left\">\n              <div class=\"inline\"><span class=\"avatar w-40 grey\">JR</span></div>\n              <img src=\"images/a0.jpg\" alt=\"...\" class=\"w-40 img-circle hide\">\n            </div>\n            <div class=\"clear hidden-folded p-x\">\n              <span class=\"block _500 text-muted\">Jean Reyes</span>\n              <div class=\"progress-xxs m-y-sm lt progress\">\n                <div class=\"progress-bar info\" style=\"width: 15%;\">\n</div>\n</div>\n</div>\n</a>\n<div class=\"dropdown-menu w dropdown-menu-scale \">\n  <a class=\"dropdown-item\" href=\"profile.html\">\n    <span>Profile</span>\n  </a>\n  <a class=\"dropdown-item\" href=\"setting.html\">\n    <span>Settings</span>\n  </a>\n  <a class=\"dropdown-item\" href=\"app.inbox.html\">\n    <span>Inbox</span>\n  </a>\n  <a class=\"dropdown-item\" href=\"app.message.html\">\n    <span>Message</span>\n  </a>\n  <div class=\"dropdown-divider\"></div>\n  <a class=\"dropdown-item\" href=\"docs.html\">\n              Need help?\n            </a>\n  <a class=\"dropdown-item\" href=\"signin.html\">Sign out</a>\n</div>\n</div>\n</div>\n</div>\n</div>\n<!-- / -->\n\n<!-- content -->\n<div id=\"content\" class=\"app-content box-shadow-z2 bg pjax-container\" role=\"main\">\n  <div class=\"app-header white bg b-b\">\n    <div class=\"navbar\" data-pjax>\n      <a data-toggle=\"modal\" data-target=\"#aside\" class=\"navbar-item pull-left hidden-lg-up p-r m-a-0\">\n        <i class=\"ion-navicon\"></i>\n      </a>\n      <div class=\"navbar-item pull-left h5\" id=\"pageTitle\">Blank</div>\n      <!-- nabar right -->\n      <ul class=\"nav navbar-nav pull-right\">\n\n\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link clear\" data-toggle=\"dropdown\">\n            <span class=\"avatar w-32\">\n                        <img src=\"https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png\" class=\"w-full rounded\" alt=\"...\">\n                      </span> Nilesh Jayanandana\n          </a>\n          <div class=\"dropdown-menu w dropdown-menu-scale pull-right\">\n            <a class=\"dropdown-item\" href=\"profile.html\">\n              <span>Profile</span>\n            </a>\n            <a class=\"dropdown-item\" href=\"setting.html\">\n              <span>Settings</span>\n            </a>\n            <a class=\"dropdown-item\" href=\"app.inbox.html\">\n              <span>Inbox</span>\n            </a>\n            <a class=\"dropdown-item\" href=\"app.message.html\">\n              <span>Message</span>\n            </a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"docs.html\">\n                        Need help?\n                      </a>\n            <a class=\"dropdown-item\" href=\"signin.html\">Sign out</a>\n          </div>\n        </li>\n      </ul>\n      <!-- / navbar right -->\n    </div>\n  </div>\n  <!--<div class=\"app-footer white bg p-a b-t\">\n    <div class=\"pull-right text-sm text-muted\">Version 1.0.1</div>\n    <span class=\"text-sm text-muted\">&copy; Copyright.</span>\n  </div>-->\n  <div class=\"app-body\">\n\n    <div class=\"padding\">\n      <router-outlet></router-outlet>\n\n    </div>\n\n  </div>\n</div>\n<!-- / -->\n\n\n\n\n<!-- ############ LAYOUT END-->\n</div>"

/***/ },

/***/ 797:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Copies</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n\n        <form role=\"form\">\n          <div class=\"row\">\n\n              <div class=\"col-md-4\">\n    \n            </div>\n\n        \n            <div class=\"col-md-2\">\n             \n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Copy ID</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Book Title</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n          \n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>&nbsp;</label>\n                <button class=\"btn primary btn-block\"  > <i class=\"fa fa-search\" style=\"padding: 0cm\"></i> </button>\n              </div>\n            </div>\n          </div>\n        </form>\n\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Results</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n        <table class=\"table-hover\">\n          \n        </table>\n\n      </div>\n    </div>"

/***/ },

/***/ 798:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search History</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n\n        <form role=\"form\">\n          <div class=\"row\">\n\n            <div class=\"col-md-1\">\n\n            </div>\n            <div class=\"col-md-2\">\n\n            </div>\n            <div class=\"col-md-2\">\n\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Start Date</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>End Date</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>&nbsp;</label>\n                <button class=\"btn primary btn-block\"> <i class=\"fa fa-search\" style=\"padding: 0cm\"></i>\n</button>\n</div>\n</div>\n</div>\n</form>\n\n</div>\n</div>\n\n</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Results</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n        <table class=\"table-hover\">\n\n        </table>\n\n      </div>\n    </div>"

/***/ },

/***/ 799:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-3\">\n\n    <div class=\"box\">\n\n\n\n      <div class=\"box-divider m-a-0\"> </div>\n      <div class=\"box-body\">\n        <div>\n          <img [src]=\"src\" align=\"center\" style=\" height: auto;\" class=\"img-responsive center-block\" [hidden]=\"src === ''\">\n</div>\n \n\n</div>\n</div>\n</div>\n\n<div class=\"col-md-9\">\n\n  <div class=\"nav-active-border b-primary bottom box\">\n    <div class=\"nav nav-md\">\n      <a class=\"nav-link\" (click)=\"changeNav('SUMMARY')\" [ngClass]=\"{active: nav==='SUMMARY'}\">\n            Copy Information\n          </a>\n      <a class=\"nav-link \" (click)=\"changeNav('HISTORY')\" [ngClass]=\"{active: nav==='HISTORY'}\">\n            Copy History\n          </a>\n\n\n    </div>\n  </div>\n\n\n\n\n  <div class=\"row\">\n   \n    <div class=\"col-md-6 pull-right\">\n      <div class=\"dropdown inline\">\n        <button class=\"btn primary    dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"> Checkout </button>\n        <div class=\"dropdown-menu pull-right\">\n          <a class=\"dropdown-item\">Read Now</a>\n          <a class=\"dropdown-item\">Borrow</a>\n          <a class=\"dropdown-item\">Reserve</a>\n\n        </div>\n      </div>\n\n      <div class=\"dropdown inline\">\n        <button class=\"btn info    dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">Print Code </button>\n        <div class=\"dropdown-menu pull-right\">\n\n          <a class=\"dropdown-item\">Print Barcode</a>\n          <a class=\"dropdown-item\">Print QR Code</a>\n        </div>\n      </div>\n\n      <button class=\"btn  grey \">Edit</button>\n      <button class=\"btn  btn-danger \">Archive</button>\n    </div>\n  </div>\n  <br>\n  <div class=\"box-divider m-a-0\"></div>\n  <br>\n\n\n  <app-book-view-summary *ngIf=\"nav==='SUMMARY'\"></app-book-view-summary>\n  <app-book-copy-history  *ngIf=\"nav==='HISTORY'\"></app-book-copy-history>\n\n</div>"

/***/ },

/***/ 800:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-3\">\n\n      <div class=\"box\">\n\n       \n          <div class=\"box-body\">\n            <div>\n              <img [src]=\"src\" align=\"center\" style=\" height: auto;\" class=\"img-responsive center-block\" [hidden]=\"src === ''\">\n          </div>\n          <br> <br>\n          <input type=\"file\" image-upload (imageSelected)=\"selected($event)\">\n\n        </div>\n      </div>\n  </div>\n\n<div class=\"col-md-9\">\n <app-book-form></app-book-form>\n</div>"

/***/ },

/***/ 801:
/***/ function(module, exports) {

module.exports = "  <div class=\"box\">\n    <div class=\"box-header\">\n      <h2>Main Information</h2>\n    </div>\n    <div class=\"box-divider m-a-0\"></div>\n    <div class=\"box-body\">\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Book Title</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Author</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Editor</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n      </div>\n\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Publisher</label>\n        <div class=\"col-sm-7\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n        <label class=\"col-sm-1 form-control-label\"> Year</label>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n          <label class=\"col-sm-2 form-control-label\">Category</label>\n        <div class=\"col-sm-4\">\n          <select   class=\"form-control\" placeholder=\"\"> \n            <option value=\"\">N/A</option>\n          </select>\n        </div>\n        <label class=\"col-sm-1 form-control-label\">ISBN</label>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n        <label class=\"col-sm-1 form-control-label\">CL Num</label>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n      </div>\n\n\n\n\n\n\n\n    </div>\n  </div>\n\n  <div class=\"box\">\n    <div class=\"box-header\">\n      <h2>Additional Information</h2>\n    </div>\n    <div class=\"box-divider m-a-0\"></div>\n    <div class=\"box-body\">\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Series</label>\n        <div class=\"col-sm-6\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n        <label class=\"col-sm-2 form-control-label\">Series No.</label>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n      </div>\n\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Pages</label>\n        <div class=\"col-sm-4\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n        <label class=\"col-sm-2 form-control-label\">Height</label>\n        <div class=\"col-sm-4\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Remarks</label>\n        <div class=\"col-sm-10\">\n          <textarea type=\"text\" class=\"form-control\" placeholder=\"\"></textarea>\n        </div>\n      </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    </div>\n  </div>\n\n  <div class=\"box\">\n    <div class=\"box-header\">\n      <h2>Book Summary</h2>\n    </div>\n    <div class=\"box-divider m-a-0\"></div>\n    <div class=\"box-body\">\n\n\n      <div class=\"form-group row\">\n\n        <div class=\"col-sm-12\">\n          <textarea type=\"text\" class=\"form-control\" rows=\"7\" placeholder=\"Enter Book Summary\"></textarea>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"col-md-7\"></div>\n     <div class=\"col-md-2\">\n      <button class=\"btn  btn-block btn-fw white\">Reset</button>\n    </div>\n    <div class=\"col-md-3\">\n      <a  [routerLink]=\"['/','books','view','1']\" class=\"btn btn-block btn-fw primary\">Save</a>\n    </div>\n\n\n  </div>\n"

/***/ },

/***/ 802:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Books</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n\n        <form role=\"form\">\n          <div class=\"row\">\n\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>CL Number</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Book Title</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Author</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Editor/ Translator</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Publisher</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>&nbsp;</label>\n                <button class=\"btn primary btn-block\"  > <i class=\"fa fa-search\" style=\"padding: 0cm\"></i> </button>\n              </div>\n            </div>\n          </div>\n        </form>\n\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Results</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n        <table class=\"table-hover\">\n          \n        </table>\n\n      </div>\n    </div>"

/***/ },

/***/ 803:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-12\">\n\n\n\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Copies</h2>\n\n        <!--<div class=\"box-tool\">\n          <ul class=\"nav\">\n            <li class=\"nav-item inline\">\n              <button (click)=\"copyForm.open()\" class=\"btn   info btn-sm rounded\">\n                <i class=\"fa fa-fw fa-plus\"></i> Add New Copy\n              </button>\n            </li>\n\n          </ul>\n        </div>-->\n\n      </div>\n\n      <div class=\"box-divider m-a-0\"> </div>\n      <table class=\"table table-hover b-t\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Remarks</th>\n            <th>Status</th>\n            <th>Reserved</th>\n            <th style=\"width:15rem\"></th>\n</tr>\n</thead>\n<tbody>\n  <tr>\n    <td>1</td>\n    <td>hello world</td>\n    <td>\n      <h6><span class=\"label rounded primary\">Available</span> </h6>\n    </td>\n    <td>\n      <h6><span class=\"label rounded primary\">No</span></h6>\n    </td>\n    <td>\n\n\n      <div class=\"dropdown inline\">\n        <button class=\"btn   rounded btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">More Actions </button>\n        <div class=\"dropdown-menu pull-right\">\n          <a class=\"dropdown-item\">Edit</a>\n          <a class=\"dropdown-item\">Archive</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\">Reserve</a>\n          <a class=\"dropdown-item\">Borrow</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\">Print Barcode</a>\n          <a class=\"dropdown-item\">Print QR Code</a>\n        </div>\n      </div>\n\n      <button class=\" btn primary rounded btn-sm\" [routerLink]=\"['/','books','copy','1']\"> View</button>\n\n    </td>\n  </tr>\n\n\n</tbody>\n</table>\n</div>\n\n</div>\n</div>\n\n"

/***/ },

/***/ 804:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-7\">\n    <div class=\"box\">\n      <div class=\"box-header \">\n        <h2>Famous Five <small> By Enid Blyton</small></h2>\n\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body  \">\n        <p>\n          No Summary Available\n        </p>\n\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body  \">\n        <p>\n          No Remarks Available\n        </p>\n\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"row row-col no-gutter  \">\n        <div class=\"col-xs-3 b-r\">\n          <a class=\"p-y block text-center\">\n            <strong class=\"block\">796</strong>\n            <span class=\"block\">Copies</span>\n          </a>\n        </div>\n        <div class=\"col-xs-3 b-r\">\n          <a class=\"p-y block text-center\">\n            <strong class=\"block\">342</strong>\n            <span class=\"block\">Available</span>\n          </a>\n        </div>\n        <div class=\"col-xs-3  b-r\">\n          <a class=\"p-y block text-center\">\n            <strong class=\"block\">20</strong>\n            <span class=\"block\">Reserved</span>\n          </a>\n        </div>\n        <div class=\"col-xs-3\">\n          <a class=\"p-y block text-center\">\n            <strong class=\"block\">2</strong>\n            <span class=\"block\">Taken</span>\n          </a>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"col-md-5\">\n    <div class=\"box\">\n      <div class=\"box-header \">\n        <h2>Information</h2>\n\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"list group\">\n\n\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle primary avatar\">\n                <span>E</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Edited By </a></div>\n            <small class=\"text-muted text-ellipsis\">Enid Blyton</small>\n\n          </div>\n        </li>\n\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle indigo avatar\">\n                <span>P</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Published By </a></div>\n            <small class=\"text-muted text-ellipsis\">Enid Blyton On 2008</small>\n          </div>\n        </li>\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle pink avatar\">\n                <span>C</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Category </a></div>\n            <small class=\"text-muted text-ellipsis\">N/A</small>\n          </div>\n        </li>\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle purple avatar\">\n                <span>I</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">ISBN </a></div>\n            <small class=\"text-muted text-ellipsis\">N/A</small>\n          </div>\n        </li>\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle blue avatar\">\n                <span>C</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">CL Number </a></div>\n            <small class=\"text-muted text-ellipsis\">N/A</small>\n          </div>\n        </li>\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle dark avatar\">\n                <span>S</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Series </a></div>\n            <small class=\"text-muted text-ellipsis\">0001 - Famous FIve</small>\n          </div>\n        </li>\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle dark green\">\n                <span>P</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Pysical Information </a></div>\n            <small class=\"text-muted text-ellipsis\">85 pages & 20.5cm Height</small>\n          </div>\n        </li>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ },

/***/ 805:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-3\">\n\n      <div class=\"box\">\n\n       \n\n        <div class=\"box-divider m-a-0\"> </div>\n          <div class=\"box-body\">\n            <div>\n              <img [src]=\"src\" align=\"center\" style=\" height: auto;\" class=\"img-responsive center-block\" [hidden]=\"src === ''\">\n          </div>\n          <br> <br>\n          <input type=\"file\" image-upload (imageSelected)=\"selected($event)\">\n\n        </div>\n      </div>\n  </div>\n\n<div class=\"col-md-9\">\n\n  <div class=\"nav-active-border b-primary bottom box\">\n        <div class=\"nav nav-md\">\n            <a class=\"nav-link\" (click)=\"changeNav('SUMMARY')\" [ngClass]=\"{active: nav==='SUMMARY'}\" >\n            Summary\n          </a>\n          <a class=\"nav-link \" (click)=\"changeNav('COPIES')\" [ngClass]=\"{active: nav==='COPIES'}\" >\n            Copies\n          </a>\n          <a class=\"nav-link\" (click)=\"changeNav('EDIT')\" [ngClass]=\"{active: nav==='EDIT'}\"  >\n          Edit\n          </a>\n         \n        </div>\n      </div>\n  <div class=\"row\">\n\n    <div class=\"col-md-4 pull-right\">\n\n\n\n      <button class=\"btn  info \" (click)=\"copyForm.open()\">Add Copy</button>\n      <button class=\"btn  btn-danger \">Archive Book</button>\n    </div>\n  </div>\n  <br>\n  <div class=\"box-divider m-a-0\"></div>\n  <br>\n\n<app-book-form *ngIf=\"nav==='EDIT'\"></app-book-form>\n<app-book-view-copies *ngIf=\"nav==='COPIES'\"></app-book-view-copies>\n<app-book-view-summary *ngIf=\"nav==='SUMMARY'\"></app-book-view-summary>\n\n</div>\n\n<modal #copyForm>\n  <modal-header>\n    <h4 class=\"modal-title\">Copy Management</h4>\n  </modal-header>\n  <modal-body>\n\n    <div class=\"row\">\n\n      <div class=\"col-md-12\">\n        <div class=\"form-group row\">\n          <label class=\"control-label col-md-2\">Copy ID</label>\n\n          <div class=\"col-md-6\">\n            <input type=\"text\" class=\"form-control\" />\n          </div>\n\n        </div>\n\n\n\n        <div class=\"form-group row\">\n          <label class=\"control-label col-md-2\">Remarks</label>\n          <div class=\"col-md-10\">\n            <textarea type=\"text\" class=\"form-control\"></textarea>\n          </div>\n\n        </div>\n\n      </div>\n\n\n    </div>\n  </modal-body>\n  <modal-footer>\n    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"copyForm.dismiss()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"copyForm.close()\">Save</button>\n  </modal-footer>\n</modal>"

/***/ },

/***/ 806:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\">\n\n       <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Checkout Details</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n \n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 form-control-label\">Member ID</label>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n        </div>\n \n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 form-control-label\">Remarks</label>\n          <div class=\"col-sm-9\">\n            <textarea type=\"text\" class=\"form-control\" placeholder=\"\"></textarea>\n          </div>\n        </div>\n\n        \n\n      </div>\n    </div>\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Add Items</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 form-control-label\">Copy ID</label>\n          <div class=\"col-sm-4\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n        </div>\n\n       \n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 form-control-label\">Checkout Date</label>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 form-control-label\">Return Date</label>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n        </div>\n\n     \n\n        <div class=\"form-group row\">\n          <div class=\"col-md-6\"></div>\n          <div class=\"col-sm-6\">\n            <button class=\"btn info\">Add To Checkout</button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"col-md-8\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Checkout List</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n        <div class=\"row\">\n          <div class=\"col-md-10\"></div> \n          <div class=\"col-md-2   \">\n            <button class=\"btn primary btn-block\">Save</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ },

/***/ 807:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-5\">\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Inventory Information</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 form-control-label\">Inventory Type</label>\n          <div class=\"col-sm-8\">\n            <select class=\"form-control\">\n              <option value=\"\">Furniture</option>             \n            </select>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 form-control-label\">Inventory Name</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n        </div>\n\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 form-control-label\">Remarks</label>\n          <div class=\"col-sm-8\">\n            <textarea type=\"text\" rows=\"6\" class=\"form-control\" placeholder=\"\"></textarea>\n          </div>\n\n\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n\n  <div class=\"col-md-7\">\n    <div class=\"row\">\n\n      <div class=\"col-md-12\">\n        <div class=\"box\">\n          <div class=\"box-header\">\n            <h2>Item Information</h2>\n          </div>\n          <div class=\"box-divider m-a-0\"></div>\n          <div class=\"box-body\">\n            <div class=\"row\">\n\n              <div class=\"col-md-4\">\n                <div>\n                  <img [src]=\"src\" align=\"center\" style=\" height: auto;\" class=\"img-responsive center-block\" [hidden]=\"src === ''\">\n</div>\n<br> <br>\n<input type=\"file\" image-upload (imageSelected)=\"selected($event)\">\n\n</div>\n\n<div class=\"col-md-8\">\n\n  <div class=\"form-group row\">\n    <label class=\"col-sm-4 form-control-label\">REF ID</label>\n    <div class=\"col-sm-8\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-sm-4 form-control-label\">Date Added</label>\n    <div class=\"col-sm-8\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"\">\n    </div>\n  </div>\n\n\n\n  <div class=\"form-group row\">\n    <label class=\"col-sm-4 form-control-label\">Remarks</label>\n    <div class=\"col-sm-8\">\n      <textarea type=\"text\" class=\"form-control\" placeholder=\"\"></textarea>\n    </div>\n\n\n  </div>\n\n  <div class=\"form-group row\">\n\n\n    <div class=\" col-md-4\"></div>\n    <div class=\"col-md-4\">\n      <button class=\"btn  btn-block btn-fw white\">Reset</button>\n    </div>\n    <div class=\"col-md-4\">\n      <button class=\"btn btn-block btn-fw primary\">Add To List</button>\n    </div>\n\n\n  </div>\n\n\n\n\n\n</div>\n\n</div>\n\n\n\n\n\n\n\n\n\n</div>\n</div>\n\n</div>\n</div>\n\n\n\n</div>\n</div>\n\n<div class=\"row\">\n \n  <div class=\"col-md-12\">\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Inventory Item List</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n<div class=\"row\">\n  <div class=\"col-md-8\"></div>\n  <div class=\"col-md-2\">\n    <button class=\"btn  btn-block btn-fw white\">Clear List</button>\n  </div>\n  <div class=\"col-md-2\">\n    <a [routerLink]=\"['/','inventory','view','1']\" class=\"btn btn-block btn-fw primary\">Save</a>\n  </div>\n\n\n</div>"

/***/ },

/***/ 808:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-4\">\n\n    <div class=\"box\">\n      <div class=\"box-header \">\n        <h2>Rolling Chair <small> 24 Items available</small></h2>\n\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body  \">\n        <p>\n          No Remark Available\n        </p>\n\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n\n      <div class=\"list group\">\n\n\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle primary avatar\">\n                <span>T</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Type </a></div>\n            <small class=\"text-muted text-ellipsis\">Furniture</small>\n\n          </div>\n        </li>\n\n\n\n      </div>\n\n\n    </div>\n\n\n  </div>\n\n\n  <div class=\"col-md-8\">\n\n    <div class=\"nav-active-border b-primary bottom box\">\n      <div class=\"nav nav-md\">\n        <a class=\"nav-link\" (click)=\"changeNav('ACTIVE')\" [ngClass]=\"{active: nav==='ACTIVE'}\">\n            Active Items\n          </a>\n        <a class=\"nav-link \" (click)=\"changeNav('HISTORY')\" [ngClass]=\"{active: nav==='HISTORY'}\">\n              History\n          </a>\n        <a class=\"nav-link \" (click)=\"changeNav('ADD')\" [ngClass]=\"{active: nav==='ADD'}\">\n            Add Item\n          </a>\n        <a class=\"nav-link\" (click)=\"changeNav('EDIT')\" [ngClass]=\"{active: nav==='EDIT'}\">\n          Edit Main Information\n          </a>\n\n      </div>\n    </div>\n\n\n\n\n\n\n    <div class=\"row\" *ngIf=\"nav==='ACTIVE'\">\n\n      <div class=\"col-md-12\">\n\n        <div class=\"box\">\n          <div class=\"box-header\">\n            <h2>Active Items</h2>\n          </div>\n          <div class=\"box-divider m-a-0\"></div>\n          <div class=\"box-body\">\n\n            <table class=\"table-hover\">\n\n            </table>\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <div *ngIf=\"nav==='HISTORY'\">\n\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n\n          <div class=\"box\">\n            <div class=\"box-header\">\n              <h2>Search History</h2>\n            </div>\n            <div class=\"box-divider m-a-0\"></div>\n            <div class=\"box-body\">\n\n\n              <form role=\"form\">\n                <div class=\"row\">\n\n                  <div class=\"col-md-1\">\n\n                  </div>\n                  <div class=\"col-md-2\">\n\n                  </div>\n                  <div class=\"col-md-2\">\n\n                  </div>\n                  <div class=\"col-md-3\">\n                     \n                  </div>\n\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Select Year</label>\n                      <input type=\"text\" class=\"form-control\">\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-1\">\n                    <div class=\"form-group\">\n                      <label>&nbsp;</label>\n                      <button class=\"btn primary btn-block\"> <i class=\"fa fa-search\" style=\"padding: 0cm\"></i></button>\n</div>\n</div>\n</div>\n</form>\n\n</div>\n</div>\n\n</div>\n\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Results</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n        <table class=\"table-hover\">\n\n        </table>\n\n      </div>\n    </div>\n  </div>\n\n\n\n</div>\n\n\n\n</div>\n\n\n\n\n\n<div *ngIf=\"nav==='ADD'\">\n\n  <div class=\"col-md-12\">\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Item Information</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n        <div class=\"row\">\n\n          <div class=\"col-md-4\">\n            <div>\n              <img [src]=\"src\" align=\"center\" style=\" height: auto;\" class=\"img-responsive center-block\" [hidden]=\"src === ''\">\n</div>\n<br> <br>\n<input type=\"file\" image-upload (imageSelected)=\"selected($event)\">\n\n</div>\n\n<div class=\"col-md-8\">\n\n  <div class=\"form-group row\">\n    <label class=\"col-sm-4 form-control-label\">REF ID</label>\n    <div class=\"col-sm-8\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-sm-4 form-control-label\">Date Added</label>\n    <div class=\"col-sm-8\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"\">\n    </div>\n  </div>\n\n\n\n  <div class=\"form-group row\">\n    <label class=\"col-sm-4 form-control-label\">Remarks</label>\n    <div class=\"col-sm-8\">\n      <textarea type=\"text\" class=\"form-control\" placeholder=\"\"></textarea>\n    </div>\n\n\n  </div>\n\n  <div class=\"form-group row\">\n\n\n    <div class=\" col-md-4\"></div>\n    <div class=\"col-md-4\">\n      <button class=\"btn  btn-block btn-fw white\">Reset</button>\n    </div>\n    <div class=\"col-md-4\">\n      <button class=\"btn btn-block btn-fw primary\">Save</button>\n    </div>\n\n\n  </div>\n\n\n\n\n\n</div>\n\n</div>\n\n\n\n\n\n\n\n\n\n</div>\n</div>\n\n</div>\n</div>\n<div *ngIf=\"nav==='EDIT'\">\n\n\n  <div class=\"box\">\n    <div class=\"box-header\">\n      <h2>Inventory Information</h2>\n    </div>\n    <div class=\"box-divider m-a-0\"></div>\n    <div class=\"box-body\">\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-4 form-control-label\">Inventory Type</label>\n        <div class=\"col-sm-8\">\n          <select class=\"form-control\">\n              <option value=\"\">Furniture</option>             \n            </select>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-4 form-control-label\">Inventory Name</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n      </div>\n\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-4 form-control-label\">Remarks</label>\n        <div class=\"col-sm-8\">\n          <textarea type=\"text\" rows=\"6\" class=\"form-control\" placeholder=\"\"></textarea>\n        </div>\n\n\n      </div>\n\n      <div class=\"form-group row\">\n\n\n        <div class=\" col-md-4\"></div>\n        <div class=\"col-md-4\">\n          <button class=\"btn  btn-block btn-fw white\">Reset</button>\n        </div>\n        <div class=\"col-md-4\">\n          <button class=\"btn btn-block btn-fw primary\">Update</button>\n        </div>\n\n\n      </div>\n\n    </div>\n  </div>\n</div>\n\n</div>"

/***/ },

/***/ 809:
/***/ function(module, exports) {

module.exports = "<p>\n  inventory-list works!\n</p>\n"

/***/ },

/***/ 810:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-3\">\n\n    <div class=\"box\">\n\n\n      <div class=\"box-body\">\n        <div>\n          <img [src]=\"src\" align=\"center\" style=\" height: auto;\" class=\"img-responsive center-block\" [hidden]=\"src === ''\">\n</div>\n<br> <br>\n<input type=\"file\" image-upload (imageSelected)=\"selected($event)\">\n\n</div>\n</div>\n\n\n</div>\n\n\n<div class=\"col-md-8\">\n\n<app-member-form></app-member-form>\n\n</div>"

/***/ },

/***/ 811:
/***/ function(module, exports) {

module.exports = "  <div class=\"box\">\n    <div class=\"box-header\">\n      <h2>Main Information</h2>\n    </div>\n    <div class=\"box-divider m-a-0\"></div>\n    <div class=\"box-body\">\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Member Type</label>\n        <div class=\"col-sm-4\">\n          <select class=\"form-control\">\n              <option value=\"\">Library</option>\n              <option value=\"\">Individual Member</option>\n                    <option value=\"\">Individual Member</option>\n                          <option value=\"\">Committee</option>\n            </select>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Title</label>\n        <div class=\"col-sm-2\">\n          <select class=\"form-control\">\n              <option value=\"MR\">MR</option>\n            </select>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">NIC</label>\n        <div class=\"col-sm-4\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">REF ID</label>\n        <div class=\"col-sm-4\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n      </div>\n\n\n\n\n\n\n\n\n\n\n\n\n    </div>\n  </div>\n\n  <div class=\"box\">\n    <div class=\"box-header\">\n      <h2>Contact Information</h2>\n    </div>\n    <div class=\"box-divider m-a-0\"></div>\n    <div class=\"box-body\">\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Mobile</label>\n        <div class=\"col-sm-4\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n        <label class=\"col-sm-2 form-control-label\"> Home</label>\n        <div class=\"col-sm-4\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Email</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Address</label>\n        <div class=\"col-sm-10\">\n          <textarea type=\"text\" class=\"form-control\" placeholder=\"\"></textarea>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Town</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n  <div class=\"row\">\n    <div class=\"col-md-8\"></div>\n    <div class=\"col-md-2\">\n      <button class=\"btn  btn-block btn-fw white\">Reset</button>\n    </div>\n    <div class=\"col-md-2\">\n      <a [routerLink]=\"['/','members','view','1']\" class=\"btn btn-block btn-fw primary\">Save</a>\n    </div>\n\n\n  </div>"

/***/ },

/***/ 812:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Members</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n\n        <form role=\"form\">\n          <div class=\"row\">\n\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>ID</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Name</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>NIC</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Phone</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n          \n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>&nbsp;</label>\n                <button class=\"btn primary btn-block\"  > <i class=\"fa fa-search\" style=\"padding: 0cm\"></i> </button>\n              </div>\n            </div>\n          </div>\n        </form>\n\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Results</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n        <table class=\"table-hover\">\n          \n        </table>\n\n      </div>\n    </div>"

/***/ },

/***/ 813:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search History</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n\n        <form role=\"form\">\n          <div class=\"row\">\n\n            <div class=\"col-md-1\">\n\n            </div>\n            <div class=\"col-md-2\">\n\n            </div>\n            <div class=\"col-md-2\">\n\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Start Date</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>End Date</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>&nbsp;</label>\n                <button class=\"btn primary btn-block\"> <i class=\"fa fa-search\" style=\"padding: 0cm\"></i>\n</button>\n</div>\n</div>\n</div>\n</form>\n\n</div>\n</div>\n\n</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Results</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n        <table class=\"table-hover\">\n\n        </table>\n\n      </div>\n    </div>"

/***/ },

/***/ 814:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Payments</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n\n        <form role=\"form\">\n          <div class=\"row\">\n\n            <div class=\"col-md-1\">\n\n            </div>\n            <div class=\"col-md-2\">\n\n            </div>\n            <div class=\"col-md-2\">\n\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Start Date</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>End Date</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>&nbsp;</label>\n                <button class=\"btn primary btn-block\"> <i class=\"fa fa-search\" style=\"padding: 0cm\"></i>\n</button>\n</div>\n</div>\n</div>\n</form>\n\n</div>\n</div>\n\n</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Results</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n        <table class=\"table-hover\">\n\n        </table>\n\n      </div>\n    </div>"

/***/ },

/***/ 815:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <div class=\"box\">\n      <div class=\"box-header \">\n        <h2>Nilesh Jayanandana <small> 00001234</small></h2>\n\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body  \">\n        <p>\n          No Address Available\n        </p>\n\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n\n      <div class=\"list group\">\n\n\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle primary avatar\">\n                <span>N</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">NIC </a></div>\n            <small class=\"text-muted text-ellipsis\">930980501V</small>\n\n          </div>\n        </li>\n\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle indigo avatar\">\n                <span>M</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Mobile </a></div>\n            <small class=\"text-muted text-ellipsis\">0715910955</small>\n          </div>\n        </li>\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle pink avatar\">\n                <span>C</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Home </a></div>\n            <small class=\"text-muted text-ellipsis\">N/A</small>\n          </div>\n        </li>\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle purple avatar\">\n                <span>E</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Email </a></div>\n            <small class=\"text-muted text-ellipsis\">N/A</small>\n          </div>\n        </li>\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle blue avatar\">\n                <span>T</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Town </a></div>\n            <small class=\"text-muted text-ellipsis\">N/A</small>\n          </div>\n        </li>\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle dark avatar\">\n                <span>D</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Date Registered </a></div>\n            <small class=\"text-muted text-ellipsis\">10/10/2017</small>\n          </div>\n        </li>\n\n\n      </div>\n\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"box\">\n      <div class=\"box-header \">\n        <h2>Recent Activity</h2>\n\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"streamline\">\n        <div class=\"sl-item\">\n          <div class=\"sl-content\">\n            <div class=\"sl-date text-muted\">2 minutes ago</div>\n            <p>Check your Internet connection</p>\n          </div>\n        </div>\n        <div class=\"sl-item\">\n          <div class=\"sl-content\">\n            <div class=\"sl-date text-muted\">9:30</div>\n            <p>Meeting with tech leader</p>\n          </div>\n        </div>\n        <div class=\"sl-item b-success\">\n          <div class=\"sl-content\">\n            <div class=\"sl-date text-muted\">8:30</div>\n            <p>Call to customer <a href=\"#\" class=\"text-info\">Jacob</a> and discuss the detail.</p>\n          </div>\n        </div>\n        <div class=\"sl-item\">\n          <div class=\"sl-content\">\n            <div class=\"sl-date text-muted\">Wed, 25 Mar</div>\n            <p>Finished task <a href=\"#\" class=\"text-info\">Testing</a>.</p>\n          </div>\n        </div>\n        <div class=\"sl-item\">\n          <div class=\"sl-content\">\n            <div class=\"sl-date text-muted\">Thu, 10 Mar</div>\n            <p>Trip to the moon</p>\n          </div>\n        </div>\n        <div class=\"sl-item b-info\">\n          <div class=\"sl-content\">\n            <div class=\"sl-date text-muted\">Sat, 5 Mar</div>\n            <p>Prepare for presentation</p>\n          </div>\n        </div>\n        <div class=\"sl-item\">\n          <div class=\"sl-content\">\n            <div class=\"sl-date text-muted\">Sun, 11 Feb</div>\n            <p><a href=\"#\" class=\"text-info\">Jessi</a> assign you a task <a href=\"#\" class=\"text-info\">Mockup Design</a>.</p>\n          </div>\n        </div>\n        <div class=\"sl-item\">\n          <div class=\"sl-content\">\n            <div class=\"sl-date text-muted\">Thu, 17 Jan</div>\n            <p>Follow up to close deal</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ },

/***/ 816:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-3\">\n\n    <div class=\"box\">\n\n\n      <div class=\"box-body\">\n        <div>\n          <img [src]=\"src\" align=\"center\" style=\" height: auto;\" class=\"img-responsive center-block\" [hidden]=\"src === ''\">\n</div>\n<br> <br>\n<input type=\"file\" image-upload (imageSelected)=\"selected($event)\">\n\n</div>\n</div>\n\n\n</div>\n\n\n<div class=\"col-md-9\">\n\n  <div class=\"nav-active-border b-primary bottom box\">\n    <div class=\"nav nav-md\">\n      <a class=\"nav-link\" (click)=\"changeNav('SUMMARY')\" [ngClass]=\"{active: nav==='SUMMARY'}\">\n            Summary\n          </a>\n      <a class=\"nav-link \" (click)=\"changeNav('PAYMENTS')\" [ngClass]=\"{active: nav==='PAYMENTS'}\">\n            Payments\n          </a>\n      <a class=\"nav-link \" (click)=\"changeNav('ACTIVITY')\" [ngClass]=\"{active: nav==='ACTIVITY'}\">\n            History\n          </a>\n      <a class=\"nav-link\" (click)=\"changeNav('EDIT')\" [ngClass]=\"{active: nav==='EDIT'}\">\n          Edit\n          </a>\n\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n\n    <div class=\"col-md-6 pull-right\">\n\n\n\n      <button class=\"btn  primary \">Add Payment</button>\n      <button class=\"btn  grey \">Ban Member</button>\n      <button class=\"btn  btn-danger \">Disable Member</button>\n    </div>\n  </div>\n  <br>\n  <div class=\"box-divider m-a-0\"></div>\n  <br>\n\n\n  <app-member-view-activity *ngIf=\"nav==='ACTIVITY'\"></app-member-view-activity>\n  <app-member-view-summary *ngIf=\"nav==='SUMMARY'\"></app-member-view-summary>\n  <app-member-view-payments *ngIf=\"nav==='PAYMENTS'\"></app-member-view-payments>\n  <app-member-form *ngIf=\"nav==='EDIT'\"></app-member-form>\n\n</div>"

/***/ },

/***/ 817:
/***/ function(module, exports) {

module.exports = "<div class=\"box\">\n  <div class=\"box-header\">\n    <h2>Payment Information</h2>\n  </div>\n  <div class=\"box-divider m-a-0\"></div>\n  <div class=\"box-body\">\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 form-control-label\">Payment Type</label>\n      <div class=\"col-sm-4\">\n        <select class=\"form-control\">\n              <option value=\"\">Fine</option>\n              <option value=\"\">Registration</option>\n                    <option value=\"\">Other</option>\n                         \n            </select>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 form-control-label\">Memeber REF</label>\n      <div class=\"col-sm-2\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 form-control-label\">Amount</label>\n      <div class=\"col-sm-4\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 form-control-label\">Payment Date</label>\n      <div class=\"col-sm-4\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"\">\n      </div>\n    </div>\n\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 form-control-label\">Remarks</label>\n      <div class=\"col-sm-4\">\n        <textarea type=\"text\" class=\"form-control\" placeholder=\"\"></textarea>\n      </div>\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n\n  </div>\n</div>\n\n\n\n\n\n\n<div class=\"row\">\n  <div class=\"col-md-8\"></div>\n  <div class=\"col-md-2\">\n    <button class=\"btn  btn-block btn-fw white\">Reset</button>\n  </div>\n  <div class=\"col-md-2\">\n    <a [routerLink]=\"['/','members','view','1']\" class=\"btn btn-block btn-fw primary\">Save</a>\n  </div>\n\n\n</div>"

/***/ },

/***/ 818:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Payments</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n\n        <form role=\"form\">\n          <div class=\"row\">\n\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Payment Type</label>\n                <select name=\"\" id=\"\" class=\"form-control\">\n                  <option value=\"\">Registration</option>\n                  <option value=\"\">Fine</option>\n                   <option value=\"\">Other</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Payment ID</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Member ID</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Start Date</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>End Date</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>&nbsp;</label>\n                <button class=\"btn primary btn-block\"> <i class=\"fa fa-search\" style=\"padding: 0cm\"></i>\n</button>\n</div>\n</div>\n</div>\n</form>\n\n</div>\n</div>\n\n</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Results</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n\n\n      <table class=\"table table-condensed table-striped table-hover\">\n        <thead>\n          <th>Checkout ID</th>\n          <th>Actions</th>\n        </thead>\n\n\n      </table>\n\n\n    </div>"

/***/ },

/***/ 819:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Checkouts</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n\n        <form role=\"form\">\n          <div class=\"row\">\n\n            \n               <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Checkout Type</label>\n                <select name=\"\" id=\"\" class=\"form-control\">\n                  <option value=\"\">Pending</option>\n                  <option value=\"\">Completed</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Checkout Number</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Member ID</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Start Date</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>End Date</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>&nbsp;</label>\n                <button class=\"btn primary btn-block\"> <i class=\"fa fa-search\" style=\"padding: 0cm\"></i>\n</button>\n</div>\n</div>\n</div>\n</form>\n\n</div>\n</div>\n\n</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Results</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n\n\n      <table class=\"table table-condensed table-striped table-hover\">\n        <thead>\n          <th>Checkout ID</th>\n          <th>Actions</th>\n        </thead>\n        <tbody>\n          <tr>\n            <td>0001</td>\n            <td> \n              <button [routerLink]=\"['/','returns','view','1']\" class=\"btn primary btn-sm\">View</button>\n            </td>\n          </tr>\n        </tbody>\n\n      </table>\n\n\n    </div>"

/***/ },

/***/ 820:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4\">\n    <div class=\"box\">\n\n      <div class=\"box-divider m-a-0\"></div>\n\n      <div class=\"box-divider m-a-0\"></div>\n\n      <div class=\"list group\">\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle pink avatar\">\n                <span>C</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Checkout ID </a></div>\n            <small class=\"text-muted text-ellipsis\">N/A</small>\n          </div>\n        </li>\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle purple avatar\">\n                <span>M</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Member ID</a></div>\n            <small class=\"text-muted text-ellipsis\">N/A</small>\n          </div>\n        </li>\n\n\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle dark avatar\">\n                <span>N</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Name </a></div>\n            <small class=\"text-muted text-ellipsis\">Nilesh Jayanandan</small>\n          </div>\n        </li>\n\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle primary avatar\">\n                <span>D</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Date Taken </a></div>\n            <small class=\"text-muted text-ellipsis\">2010/10/10</small>\n\n          </div>\n        </li>\n\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle indigo avatar\">\n                <span>R</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Return Date </a></div>\n            <small class=\"text-muted text-ellipsis\">2010/10/10</small>\n          </div>\n        </li>\n\n\n\n\n\n      </div>\n\n    </div>\n  </div>\n  <div class=\"col-md-8\">\n    <div class=\"box\">\n      <div class=\"box-header \">\n        <h2>List of Returns</h2>\n\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n      <table class=\"table table-condensed table-striped table-hover\">\n        <thead>\n          <th style=\"width: 5rem\">Copy ID</th>\n          <th>Status</th>\n          <th>Remarks</th>\n        </thead>\n        <tbody>\n          <tr>\n            <td class=\"center-block\">0001</td>\n            <td>\n              <select name=\"\" class=\"form-control \" id=\"\">\n                <option value=\"\">Good</option>\n                   <option value=\"\">Damaged</option>\n                     <option value=\"\">Lost</option>\n              </select>\n            </td>\n            <td>\n              <input type=\"text\" class=\"form-control\">\n            </td>\n          </tr>\n          <tr>\n            <td class=\"center-block\">0002</td>\n            <td>\n              <select name=\"\" class=\"form-control \" id=\"\">\n                <option value=\"\">Good</option>\n                   <option value=\"\">Damaged</option>\n                    <option value=\"\">Lost</option>\n              </select>\n            </td>\n            <td>\n              <input type=\"text\" class=\"form-control\">\n            </td>\n          </tr>\n        </tbody>\n\n      </table>\n\n      <div class=\"row\">\n        <div class=\"col-md-8\"></div>\n          <div class=\"col-md-2\">\n\n          <button class=\"btn danger btn-block\">Add Fine</button>\n        </div>\n        <div class=\"col-md-2\">\n\n          <button class=\"btn primary btn-block\">Save</button>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ },

/***/ 821:
/***/ function(module, exports) {

module.exports = "<p>\n  user-create works!\n</p>\n"

/***/ },

/***/ 822:
/***/ function(module, exports) {

module.exports = "<p>\n  user-form works!\n</p>\n"

/***/ },

/***/ 823:
/***/ function(module, exports) {

module.exports = "<p>\n  user-list works!\n</p>\n"

/***/ },

/***/ 861:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(434);


/***/ }

},[861]);
//# sourceMappingURL=main.bundle.map