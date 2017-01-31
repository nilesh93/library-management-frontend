webpackJsonp([0,4],{

/***/ 1165:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(492);


/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_book_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_common_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bs3_modal_ng2_bs3_modal__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bs3_modal_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_bs3_modal_ng2_bs3_modal__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CopyFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CopyFormComponent = (function () {
    function CopyFormComponent(commonService, bookService) {
        this.commonService = commonService;
        this.bookService = bookService;
        this.editFlag = false;
        this.updateEmitter = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        this.isSubmitted = false;
        this.nonEditable = ['archived', 'archived_date', 'book_detail', 'id', 'return_date', 'taken'];
        this.copyForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormGroup */]({
            'ref_id': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required),
            'remarks': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]()
        });
    }
    CopyFormComponent.prototype.ngOnInit = function () {
    };
    CopyFormComponent.prototype.openModal = function () {
        this.modal.open();
    };
    CopyFormComponent.prototype.updateModal = function (copy) {
        this.copy = copy;
        if (this.editFlag) {
            console.log(this.copy);
            this.modal.open();
            this.updateForm();
        }
    };
    CopyFormComponent.prototype.updateForm = function () {
        for (var property in this.copy) {
            if (this.copy.hasOwnProperty(property)) {
                if ((this.nonEditable.indexOf(property) === -1) && (this.copy[property] !== 'N/A')) {
                    this.copyForm.controls[property].setValue(this.copy[property]);
                }
            }
        }
    };
    CopyFormComponent.prototype.submitForm = function () {
        this.isSubmitted = true;
        if (this.copyForm.valid) {
            var obj = this.copyForm.value;
            obj['book_detail'] = this.id;
            obj = this.commonService.removeEmpty(obj, ['', ' ', null]);
            if (this.editFlag) {
                this.updateCopy(obj);
            }
            else {
                this.saveCopy(obj);
            }
        }
    };
    CopyFormComponent.prototype.updateCopy = function (obj) {
        var _this = this;
        this.bookService.updateCopy(this.copy['id'], obj).subscribe(function (data) {
            _this.updateEmitter.emit({ updated: true });
            _this.modal.dismiss();
            _this.commonService.newNotification('success', 'Success!', 'Copy ' + obj.ref_id + ' updated succesfully!');
        });
    };
    CopyFormComponent.prototype.saveCopy = function (obj) {
        var _this = this;
        this.bookService.saveCopy(obj).subscribe(function (data) {
            _this.updateEmitter.emit({ updated: true });
            _this.modal.dismiss();
            _this.commonService.newNotification('success', 'Success!', 'Copy added succesfully!');
        });
    };
    CopyFormComponent.prototype.validationRule = function (name) {
        return (!this.copyForm.controls[name].valid && (this.copyForm.controls[name].touched || this.isSubmitted));
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CopyFormComponent.prototype, "editFlag", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CopyFormComponent.prototype, "copy", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], CopyFormComponent.prototype, "id", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('copyModal'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_bs3_modal_ng2_bs3_modal__["ModalComponent"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_ng2_bs3_modal_ng2_bs3_modal__["ModalComponent"]) === 'function' && _a) || Object)
    ], CopyFormComponent.prototype, "modal", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], CopyFormComponent.prototype, "updateEmitter", void 0);
    CopyFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-copy-form',
            template: __webpack_require__(868),
            styles: [__webpack_require__(835)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_common_service__["a" /* CommonService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_book_service__["a" /* BookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__shared_services_book_service__["a" /* BookService */]) === 'function' && _c) || Object])
    ], CopyFormComponent);
    return CopyFormComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/copy-form.component.js.map

/***/ },

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_bs3_modal_ng2_bs3_modal__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_bs3_modal_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_bs3_modal_ng2_bs3_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DeleteModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeleteModalComponent = (function () {
    function DeleteModalComponent() {
        this.deleteEmitter = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    }
    DeleteModalComponent.prototype.ngOnInit = function () {
    };
    DeleteModalComponent.prototype.openModal = function () {
        this.modal.open();
    };
    // delete(status): Promise<boolean> {
    //   return new Promise<boolean>((resolve, reject) => {
    //     resolve(status);
    //     this.modal.dismiss();
    //   });
    // }
    DeleteModalComponent.prototype.delete = function () {
        this.deleteEmitter.emit({ delete: true });
        this.modal.dismiss();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('deleteModal'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ng2_bs3_modal_ng2_bs3_modal__["ModalComponent"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0_ng2_bs3_modal_ng2_bs3_modal__["ModalComponent"]) === 'function' && _a) || Object)
    ], DeleteModalComponent.prototype, "modal", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], DeleteModalComponent.prototype, "deleteEmitter", void 0);
    DeleteModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-delete-modal',
            template: __webpack_require__(887),
            styles: [__webpack_require__(854)]
        }), 
        __metadata('design:paramtypes', [])
    ], DeleteModalComponent);
    return DeleteModalComponent;
    var _a;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/delete-modal.component.js.map

/***/ },

/***/ 383:
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
            template: __webpack_require__(858),
            styles: [__webpack_require__(825)]
        }), 
        __metadata('design:paramtypes', [])
    ], LayoutComponent);
    return LayoutComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/layout.component.js.map

/***/ },

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_book_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
    function BookCopyListComponent(bookService) {
        this.bookService = bookService;
        this.copies = {};
        this.copySearch({}, false);
    }
    BookCopyListComponent.prototype.ngOnInit = function () {
    };
    BookCopyListComponent.prototype.copySearch = function (values, loadMore) {
        var _this = this;
        this.bookService.getCopies(values, loadMore).subscribe(function (data) {
            _this.copies = data;
            console.log(data);
        });
    };
    BookCopyListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-book-copy-list',
            template: __webpack_require__(859),
            styles: [__webpack_require__(826)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_book_service__["a" /* BookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__shared_services_book_service__["a" /* BookService */]) === 'function' && _a) || Object])
    ], BookCopyListComponent);
    return BookCopyListComponent;
    var _a;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/book-copy-list.component.js.map

/***/ },

/***/ 385:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_common_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__copy_form_copy_form_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_components_delete_modal_delete_modal_component__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_book_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
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
    function BookCopyComponent(bookService, router, activatedRoute, commonService) {
        this.bookService = bookService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.commonService = commonService;
        this.nav = 'SUMMARY';
        this.id = 0;
        this.copy = {
            book_detail: {}
        };
        this.category = {};
        this.isloading = true;
        this.id = activatedRoute.snapshot.params['id'];
        this.getCopyDetails();
    }
    BookCopyComponent.prototype.ngOnInit = function () {
    };
    BookCopyComponent.prototype.getCopyDetails = function () {
        var _this = this;
        this.bookService.viewCopy(this.id)
            .subscribe(function (data) {
            _this.copy = data;
            _this.category = data.book_detail.category;
            _this.isloading = false;
        });
    };
    BookCopyComponent.prototype.changeNav = function (navType) {
        this.nav = navType;
    };
    BookCopyComponent.prototype.editCopy = function () {
        this.copyFormComponent.updateModal(this.copy);
    };
    BookCopyComponent.prototype.reloadData = function (obj) {
        this.getCopyDetails();
    };
    BookCopyComponent.prototype.deleteCopy = function (id) {
        this.deleteModalComponent.openModal();
    };
    BookCopyComponent.prototype.delete = function () {
        var _this = this;
        this.bookService.deleteCopy(this.copy['id']).subscribe(function (data) {
            _this.commonService.newNotification('success', 'Success!', 'Copy deleted succesfully!');
            _this.router.navigate(['/', 'books', 'copy-list']);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__copy_form_copy_form_component__["a" /* CopyFormComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__copy_form_copy_form_component__["a" /* CopyFormComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__copy_form_copy_form_component__["a" /* CopyFormComponent */]) === 'function' && _a) || Object)
    ], BookCopyComponent.prototype, "copyFormComponent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__shared_components_delete_modal_delete_modal_component__["a" /* DeleteModalComponent */]), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_components_delete_modal_delete_modal_component__["a" /* DeleteModalComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_components_delete_modal_delete_modal_component__["a" /* DeleteModalComponent */]) === 'function' && _b) || Object)
    ], BookCopyComponent.prototype, "deleteModalComponent", void 0);
    BookCopyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'app-book-copy',
            template: __webpack_require__(861),
            styles: [__webpack_require__(828)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_book_service__["a" /* BookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_book_service__["a" /* BookService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__shared_services_common_service__["a" /* CommonService */]) === 'function' && _f) || Object])
    ], BookCopyComponent);
    return BookCopyComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/book-copy.component.js.map

/***/ },

/***/ 386:
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
            template: __webpack_require__(862),
            styles: [__webpack_require__(829)]
        }), 
        __metadata('design:paramtypes', [])
    ], BookCreateComponent);
    return BookCreateComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/book-create.component.js.map

/***/ },

/***/ 387:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_book_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
    function BookListComponent(bookService) {
        this.bookService = bookService;
        this.books = {};
        this.bookSearch({}, false);
    }
    BookListComponent.prototype.ngOnInit = function () {
    };
    BookListComponent.prototype.bookSearch = function (values, loadMore) {
        var _this = this;
        this.bookService.getBooks(values, loadMore).subscribe(function (data) {
            _this.books = data;
        });
    };
    BookListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-book-list',
            template: __webpack_require__(864),
            styles: [__webpack_require__(831)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_book_service__["a" /* BookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__shared_services_book_service__["a" /* BookService */]) === 'function' && _a) || Object])
    ], BookListComponent);
    return BookListComponent;
    var _a;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/book-list.component.js.map

/***/ },

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__copy_form_copy_form_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_book_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(125);
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
    function BookViewComponent(bookService, activatedRoute) {
        this.bookService = bookService;
        this.activatedRoute = activatedRoute;
        this.nav = 'SUMMARY';
        this.bookDetails = {};
        this.category = {};
        this.copies = [];
        this.id = activatedRoute.snapshot.params['id'];
        this.getBookDetails();
    }
    BookViewComponent.prototype.selected = function (imageResult) {
        this.bookDetails['image'] = imageResult.dataURL;
    };
    BookViewComponent.prototype.ngOnInit = function () {
    };
    BookViewComponent.prototype.changeNav = function (navType) {
        this.nav = navType;
    };
    BookViewComponent.prototype.getBookDetails = function () {
        var _this = this;
        this.bookService.viewBook(this.id).subscribe(function (data) {
            console.log(data);
            _this.bookDetails = data;
            _this.category = _this.bookDetails['category'];
            _this.copies = _this.bookDetails['copies'];
        });
    };
    BookViewComponent.prototype.reloadData = function (obj) {
        if (obj.updated) {
            this.getBookDetails();
            if (this.nav === 'EDIT') {
                this.nav = 'SUMMARY';
            }
            ;
        }
    };
    BookViewComponent.prototype.addNewCopy = function () {
        this.copyFormComponent.openModal();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0__copy_form_copy_form_component__["a" /* CopyFormComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__copy_form_copy_form_component__["a" /* CopyFormComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__copy_form_copy_form_component__["a" /* CopyFormComponent */]) === 'function' && _a) || Object)
    ], BookViewComponent.prototype, "copyFormComponent", void 0);
    BookViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-book-view',
            template: __webpack_require__(867),
            styles: [__webpack_require__(834)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_book_service__["a" /* BookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_book_service__["a" /* BookService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], BookViewComponent);
    return BookViewComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/book-view.component.js.map

/***/ },

/***/ 389:
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
            template: __webpack_require__(869),
            styles: [__webpack_require__(836)]
        }), 
        __metadata('design:paramtypes', [])
    ], CounterComponent);
    return CounterComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/counter.component.js.map

/***/ },

/***/ 390:
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
            template: __webpack_require__(870),
            styles: [__webpack_require__(837)]
        }), 
        __metadata('design:paramtypes', [])
    ], InventoryCreateComponent);
    return InventoryCreateComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/inventory-create.component.js.map

/***/ },

/***/ 391:
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
            template: __webpack_require__(871),
            styles: [__webpack_require__(838)]
        }), 
        __metadata('design:paramtypes', [])
    ], InventoryHistoryComponent);
    return InventoryHistoryComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/inventory-history.component.js.map

/***/ },

/***/ 392:
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
            template: __webpack_require__(872),
            styles: [__webpack_require__(839)]
        }), 
        __metadata('design:paramtypes', [])
    ], InventoryListComponent);
    return InventoryListComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/inventory-list.component.js.map

/***/ },

/***/ 393:
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
            template: __webpack_require__(873),
            styles: [__webpack_require__(840)]
        }), 
        __metadata('design:paramtypes', [])
    ], MemberCreateComponent);
    return MemberCreateComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/member-create.component.js.map

/***/ },

/***/ 394:
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
            template: __webpack_require__(875),
            styles: [__webpack_require__(842)]
        }), 
        __metadata('design:paramtypes', [])
    ], MemberListComponent);
    return MemberListComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/member-list.component.js.map

/***/ },

/***/ 395:
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
            template: __webpack_require__(879),
            styles: [__webpack_require__(846)]
        }), 
        __metadata('design:paramtypes', [])
    ], MemberViewComponent);
    return MemberViewComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/member-view.component.js.map

/***/ },

/***/ 396:
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
            template: __webpack_require__(880),
            styles: [__webpack_require__(847)]
        }), 
        __metadata('design:paramtypes', [])
    ], PaymentCreateComponent);
    return PaymentCreateComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/payment-create.component.js.map

/***/ },

/***/ 397:
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
            template: __webpack_require__(881),
            styles: [__webpack_require__(848)]
        }), 
        __metadata('design:paramtypes', [])
    ], PaymentListComponent);
    return PaymentListComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/payment-list.component.js.map

/***/ },

/***/ 398:
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
            template: __webpack_require__(882),
            styles: [__webpack_require__(849)]
        }), 
        __metadata('design:paramtypes', [])
    ], PendingReturnsComponent);
    return PendingReturnsComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/pending-returns.component.js.map

/***/ },

/***/ 399:
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
            template: __webpack_require__(883),
            styles: [__webpack_require__(850)]
        }), 
        __metadata('design:paramtypes', [])
    ], ReturnViewComponent);
    return ReturnViewComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/return-view.component.js.map

/***/ },

/***/ 400:
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
            template: __webpack_require__(884),
            styles: [__webpack_require__(851)]
        }), 
        __metadata('design:paramtypes', [])
    ], UserCreateComponent);
    return UserCreateComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/user-create.component.js.map

/***/ },

/***/ 401:
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
            template: __webpack_require__(886),
            styles: [__webpack_require__(853)]
        }), 
        __metadata('design:paramtypes', [])
    ], UserListComponent);
    return UserListComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/user-list.component.js.map

/***/ },

/***/ 491:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 491;


/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(627);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/main.js.map

/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_config__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookService = (function () {
    // options: RequestOptions;
    function BookService(http, commonService) {
        this.http = http;
        this.commonService = commonService;
        // this.options = this.userService.options;
    }
    BookService.prototype.getBooks = function (params, url) {
        if (!url) {
            params = this.commonService.addQueryParams(params, ['', ' ']);
            return this.http.get(__WEBPACK_IMPORTED_MODULE_3__constants_config__["a" /* URL_CONST */].PROD_PREFIX + 'book/?' + params)
                .map(function (response) { return response.json(); });
        }
        else {
            return this.http.get(url)
                .map(function (response) { return response.json(); });
        }
    };
    BookService.prototype.viewBook = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__constants_config__["a" /* URL_CONST */].PROD_PREFIX + 'book/' + id)
            .map(function (response) { return response.json(); });
    };
    BookService.prototype.getCategories = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__constants_config__["a" /* URL_CONST */].PROD_PREFIX + 'book/categories')
            .map(function (response) { return response.json(); });
    };
    BookService.prototype.saveBook = function (obj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__constants_config__["a" /* URL_CONST */].PROD_PREFIX + 'book/create/', obj)
            .map(function (response) { return response.json(); });
    };
    BookService.prototype.updateBook = function (id, obj) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__constants_config__["a" /* URL_CONST */].PROD_PREFIX + 'book/' + id + '/edit/', obj)
            .map(function (response) { return response.json(); });
    };
    BookService.prototype.saveCopy = function (obj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__constants_config__["a" /* URL_CONST */].PROD_PREFIX + 'book/copy/create/', obj)
            .map(function (response) { return response.json(); });
    };
    BookService.prototype.updateCopy = function (id, obj) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__constants_config__["a" /* URL_CONST */].PROD_PREFIX + 'book/copy/' + id + '/edit/', obj)
            .map(function (response) { return response.json(); });
    };
    BookService.prototype.deleteCopy = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__constants_config__["a" /* URL_CONST */].PROD_PREFIX + 'book/copy/' + id + '/delete/')
            .map(function (response) { return response.json(); });
    };
    BookService.prototype.getCopies = function (params, url) {
        if (!url) {
            params = this.commonService.addQueryParams(params, ['', ' ']);
            return this.http.get(__WEBPACK_IMPORTED_MODULE_3__constants_config__["a" /* URL_CONST */].PROD_PREFIX + 'book/copy/?' + params)
                .map(function (response) { return response.json(); });
        }
        else {
            return this.http.get(url)
                .map(function (response) { return response.json(); });
        }
    };
    BookService.prototype.viewCopy = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__constants_config__["a" /* URL_CONST */].PROD_PREFIX + 'book/copy/' + id)
            .map(function (response) { return response.json(); });
    };
    BookService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__common_service__["a" /* CommonService */]) === 'function' && _b) || Object])
    ], BookService);
    return BookService;
    var _a, _b;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/book.service.js.map

/***/ },

/***/ 626:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_common_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
    // subscription: Subscription;
    function AppComponent(commonService) {
        this.commonService = commonService;
        this.options = {
            icons: { success: '', error: '' }
        };
        // this.subscription = this.commonService.toastAnnounce$.subscribe(
        //   (options) => {
        //     console.log("options", options);
        //   });
    }
    AppComponent.prototype.ngOnDestroy = function () {
        // this.subscription.unsubscribe();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(857),
            styles: [__webpack_require__(855)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__shared_services_common_service__["a" /* CommonService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/app.component.js.map

/***/ },

/***/ 627:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_imageupload__ = __webpack_require__(819);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_imageupload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_imageupload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_modal__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bs3_modal_ng2_bs3_modal__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bs3_modal_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_bs3_modal_ng2_bs3_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_notifications__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_book_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_common_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layout_layout_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_books_book_create_book_create_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_books_book_list_book_list_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_books_book_view_book_view_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_books_book_view_book_view_summary_book_view_summary_component__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_books_book_view_book_view_copies_book_view_copies_component__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_books_book_form_book_form_component__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_books_book_copy_book_copy_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_books_book_copy_book_copy_history_book_copy_history_component__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_books_book_copy_list_book_copy_list_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_members_member_list_member_list_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_members_member_create_member_create_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_members_member_form_member_form_component__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_members_member_view_member_view_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_members_member_view_member_view_summary_member_view_summary_component__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_members_member_view_member_view_payments_member_view_payments_component__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_members_member_view_member_view_activity_member_view_activity_component__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_counter_counter_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_returns_pending_returns_pending_returns_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_returns_return_view_return_view_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_payments_payment_list_payment_list_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_payments_payment_create_payment_create_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_inventory_inventory_create_inventory_create_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_inventory_inventory_list_inventory_list_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_inventory_inventory_history_inventory_history_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_users_user_create_user_create_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_users_user_form_user_form_component__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_users_user_list_user_list_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_books_copy_form_copy_form_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__shared_components_delete_modal_delete_modal_component__ = __webpack_require__(252);
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
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__layout_layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_books_book_create_book_create_component__["a" /* BookCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_books_book_list_book_list_component__["a" /* BookListComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_books_book_view_book_view_component__["a" /* BookViewComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_books_book_view_book_view_summary_book_view_summary_component__["a" /* BookViewSummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_books_book_view_book_view_copies_book_view_copies_component__["a" /* BookViewCopiesComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_books_book_form_book_form_component__["a" /* BookFormComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_books_book_copy_book_copy_component__["a" /* BookCopyComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_books_book_copy_book_copy_history_book_copy_history_component__["a" /* BookCopyHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_books_book_copy_list_book_copy_list_component__["a" /* BookCopyListComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_members_member_list_member_list_component__["a" /* MemberListComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_members_member_create_member_create_component__["a" /* MemberCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pages_members_member_form_member_form_component__["a" /* MemberFormComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pages_members_member_view_member_view_component__["a" /* MemberViewComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_members_member_view_member_view_summary_member_view_summary_component__["a" /* MemberViewSummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_members_member_view_member_view_payments_member_view_payments_component__["a" /* MemberViewPaymentsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pages_members_member_view_member_view_activity_member_view_activity_component__["a" /* MemberViewActivityComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pages_counter_counter_component__["a" /* CounterComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pages_returns_pending_returns_pending_returns_component__["a" /* PendingReturnsComponent */],
                __WEBPACK_IMPORTED_MODULE_32__pages_returns_return_view_return_view_component__["a" /* ReturnViewComponent */],
                __WEBPACK_IMPORTED_MODULE_33__pages_payments_payment_list_payment_list_component__["a" /* PaymentListComponent */],
                __WEBPACK_IMPORTED_MODULE_34__pages_payments_payment_create_payment_create_component__["a" /* PaymentCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_35__pages_inventory_inventory_create_inventory_create_component__["a" /* InventoryCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_36__pages_inventory_inventory_list_inventory_list_component__["a" /* InventoryListComponent */],
                __WEBPACK_IMPORTED_MODULE_37__pages_inventory_inventory_history_inventory_history_component__["a" /* InventoryHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_38__pages_users_user_create_user_create_component__["a" /* UserCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_39__pages_users_user_form_user_form_component__["a" /* UserFormComponent */],
                __WEBPACK_IMPORTED_MODULE_40__pages_users_user_list_user_list_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_41__pages_books_copy_form_copy_form_component__["a" /* CopyFormComponent */],
                __WEBPACK_IMPORTED_MODULE_42__shared_components_delete_modal_delete_modal_component__["a" /* DeleteModalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* Routing */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_imageupload__["ImageUploadModule"],
                __WEBPACK_IMPORTED_MODULE_5_angular2_modal__["m" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__["b" /* BootstrapModalModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_bs3_modal_ng2_bs3_modal__["Ng2Bs3ModalModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular2_notifications__["SimpleNotificationsModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__shared_services_book_service__["a" /* BookService */],
                __WEBPACK_IMPORTED_MODULE_10__shared_services_common_service__["a" /* CommonService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/app.module.js.map

/***/ },

/***/ 628:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_layout_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pages_routing__ = __webpack_require__(640);
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
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/app.routing.js.map

/***/ },

/***/ 629:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_book_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
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
    function BookCopyHistoryComponent(bookService, activatedRoute) {
        this.bookService = bookService;
        this.activatedRoute = activatedRoute;
    }
    BookCopyHistoryComponent.prototype.ngOnInit = function () {
    };
    BookCopyHistoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-book-copy-history',
            template: __webpack_require__(860),
            styles: [__webpack_require__(827)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_book_service__["a" /* BookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__shared_services_book_service__["a" /* BookService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], BookCopyHistoryComponent);
    return BookCopyHistoryComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/book-copy-history.component.js.map

/***/ },

/***/ 630:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_common_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_book_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(125);
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
    function BookFormComponent(bookService, commonService, router) {
        this.bookService = bookService;
        this.commonService = commonService;
        this.router = router;
        this.editFlag = false;
        this.updateEmitter = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        this.nonEditable = ['available_copies', 'image', 'category', 'copies', 'created_at', 'id',
            'taken_copies', 'total_copies', 'updated_at'];
        this.isSubmitted = false;
        this.bookForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormGroup */]({
            'title': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required),
            'author': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required),
            'editor': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            'publisher': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            'published_year': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            'category': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            'cl_num': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required),
            'isbn': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            'series': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            'series_num': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            'pages': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            'height': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            'remarks': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            'summary': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]()
        });
        this.getCategories();
    }
    BookFormComponent.prototype.ngOnInit = function () {
        if (this.editFlag) {
            this.updateForm();
        }
    };
    BookFormComponent.prototype.getCategories = function () {
        var _this = this;
        this.bookService.getCategories().subscribe(function (data) {
            _this.categories = data.results;
            if (_this.categories[0] && !_this.editFlag) {
                _this.bookForm.controls['category'].setValue(_this.categories[0].id);
            }
        });
    };
    BookFormComponent.prototype.updateForm = function () {
        for (var property in this.bookDetails) {
            if (this.bookDetails.hasOwnProperty(property)) {
                if ((this.nonEditable.indexOf(property) === -1) && (this.bookDetails[property] !== 'N/A')) {
                    this.bookForm.controls[property].setValue(this.bookDetails[property]);
                }
            }
        }
        if (this.bookDetails['category']) {
            this.bookForm.controls['category'].setValue(this.bookDetails['category'].id);
        }
    };
    BookFormComponent.prototype.submitForm = function () {
        this.isSubmitted = true;
        if (this.bookForm.valid) {
            var obj = this.bookForm.value;
            obj['image'] = this.src;
            obj = this.commonService.removeEmpty(obj, ['', ' ', null]);
            if (this.editFlag) {
                this.updateBook(obj);
            }
            else {
                this.saveBook(obj);
            }
        }
    };
    BookFormComponent.prototype.saveBook = function (obj) {
        var _this = this;
        this.bookService.saveBook(obj).subscribe(function (data) {
            _this.commonService.newNotification('success', 'Success!', 'Book saved succesfully!');
            _this.router.navigate(['/', 'books', 'view', data.id]);
        });
    };
    BookFormComponent.prototype.updateBook = function (obj) {
        var _this = this;
        this.bookService.updateBook(this.bookDetails['id'], obj).subscribe(function (data) {
            _this.updateEmitter.emit({ updated: true });
            _this.commonService.newNotification('success', 'Success!', _this.bookDetails['title'] + ' updated Successfully!');
        });
    };
    BookFormComponent.prototype.validationRule = function (name) {
        return (!this.bookForm.controls[name].valid && (this.bookForm.controls[name].touched || this.isSubmitted));
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], BookFormComponent.prototype, "src", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], BookFormComponent.prototype, "editFlag", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], BookFormComponent.prototype, "bookDetails", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], BookFormComponent.prototype, "updateEmitter", void 0);
    BookFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-book-form',
            template: __webpack_require__(863),
            styles: [__webpack_require__(830)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_book_service__["a" /* BookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_book_service__["a" /* BookService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__shared_services_common_service__["a" /* CommonService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], BookFormComponent);
    return BookFormComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/book-form.component.js.map

/***/ },

/***/ 631:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_components_delete_modal_delete_modal_component__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_common_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_book_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__copy_form_copy_form_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_modal__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__ = __webpack_require__(408);
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
    function BookViewCopiesComponent(overlay, vcRef, modal, bookService, commonService) {
        this.modal = modal;
        this.bookService = bookService;
        this.commonService = commonService;
        this.updateEmitter = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"]();
        overlay.defaultViewContainer = vcRef;
    }
    BookViewCopiesComponent.prototype.ngOnInit = function () {
    };
    BookViewCopiesComponent.prototype.editCopy = function (copy) {
        this.copyFormComponent.updateModal(copy);
    };
    BookViewCopiesComponent.prototype.reloadData = function (obj) {
        this.updateEmitter.emit({ updated: true });
    };
    BookViewCopiesComponent.prototype.deleteCopy = function (id) {
        this.copyId = id;
        this.deleteModalComponent.openModal();
    };
    BookViewCopiesComponent.prototype.delete = function () {
        var _this = this;
        this.bookService.deleteCopy(this.copyId).subscribe(function (data) {
            _this.commonService.newNotification('success', 'Success!', 'Copy deleted succesfully!');
            _this.updateEmitter.emit({ updated: true });
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], BookViewCopiesComponent.prototype, "id", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], BookViewCopiesComponent.prototype, "copies", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], BookViewCopiesComponent.prototype, "updateEmitter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__copy_form_copy_form_component__["a" /* CopyFormComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__copy_form_copy_form_component__["a" /* CopyFormComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__copy_form_copy_form_component__["a" /* CopyFormComponent */]) === 'function' && _a) || Object)
    ], BookViewCopiesComponent.prototype, "copyFormComponent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0__shared_components_delete_modal_delete_modal_component__["a" /* DeleteModalComponent */]), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shared_components_delete_modal_delete_modal_component__["a" /* DeleteModalComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__shared_components_delete_modal_delete_modal_component__["a" /* DeleteModalComponent */]) === 'function' && _b) || Object)
    ], BookViewCopiesComponent.prototype, "deleteModalComponent", void 0);
    BookViewCopiesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'app-book-view-copies',
            template: __webpack_require__(865),
            styles: [__webpack_require__(832)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_modal__["k" /* Overlay */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_modal__["k" /* Overlay */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewContainerRef"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__["a" /* Modal */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__["a" /* Modal */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_book_service__["a" /* BookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_book_service__["a" /* BookService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_common_service__["a" /* CommonService */]) === 'function' && _g) || Object])
    ], BookViewCopiesComponent);
    return BookViewCopiesComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/book-view-copies.component.js.map

/***/ },

/***/ 632:
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
        this.bookDetails = {};
        this.category = {};
        this.showStats = true;
        this.copyDetails = {};
    }
    BookViewSummaryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], BookViewSummaryComponent.prototype, "bookDetails", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], BookViewSummaryComponent.prototype, "category", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], BookViewSummaryComponent.prototype, "showStats", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], BookViewSummaryComponent.prototype, "copyDetails", void 0);
    BookViewSummaryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-view-summary',
            template: __webpack_require__(866),
            styles: [__webpack_require__(833)]
        }), 
        __metadata('design:paramtypes', [])
    ], BookViewSummaryComponent);
    return BookViewSummaryComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/book-view-summary.component.js.map

/***/ },

/***/ 633:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_list_book_list_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_create_book_create_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_view_book_view_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_copy_book_copy_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_copy_list_book_copy_list_component__ = __webpack_require__(384);
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

/***/ 634:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inventory_history_inventory_history_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inventory_create_inventory_create_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inventory_list_inventory_list_component__ = __webpack_require__(392);
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

/***/ 635:
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
            template: __webpack_require__(874),
            styles: [__webpack_require__(841)]
        }), 
        __metadata('design:paramtypes', [])
    ], MemberFormComponent);
    return MemberFormComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/member-form.component.js.map

/***/ },

/***/ 636:
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
            template: __webpack_require__(876),
            styles: [__webpack_require__(843)]
        }), 
        __metadata('design:paramtypes', [])
    ], MemberViewActivityComponent);
    return MemberViewActivityComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/member-view-activity.component.js.map

/***/ },

/***/ 637:
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
            template: __webpack_require__(877),
            styles: [__webpack_require__(844)]
        }), 
        __metadata('design:paramtypes', [])
    ], MemberViewPaymentsComponent);
    return MemberViewPaymentsComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/member-view-payments.component.js.map

/***/ },

/***/ 638:
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
            template: __webpack_require__(878),
            styles: [__webpack_require__(845)]
        }), 
        __metadata('design:paramtypes', [])
    ], MemberViewSummaryComponent);
    return MemberViewSummaryComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/member-view-summary.component.js.map

/***/ },

/***/ 639:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__member_list_member_list_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__member_create_member_create_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__member_view_member_view_component__ = __webpack_require__(395);
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

/***/ 640:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_users_routing__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inventory_inventory_routing__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payments_payments_routing__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__returns_returns_routing__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__books_books_routing__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__members_members_routing__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__counter_counter_component__ = __webpack_require__(389);
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

/***/ 641:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__payment_list_payment_list_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__payment_create_payment_create_component__ = __webpack_require__(396);
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

/***/ 642:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__return_view_return_view_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pending_returns_pending_returns_component__ = __webpack_require__(398);
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

/***/ 643:
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
            template: __webpack_require__(885),
            styles: [__webpack_require__(852)]
        }), 
        __metadata('design:paramtypes', [])
    ], UserFormComponent);
    return UserFormComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/user-form.component.js.map

/***/ },

/***/ 644:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_list_user_list_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_create_user_create_component__ = __webpack_require__(400);
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

/***/ 645:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return URL_CONST; });
var URL_CONST = {
    PROD_PREFIX: 'http://library-api.apps.reactive-solutions.xyz/',
    LOCAL_PREFIX: 'http://localhost:8000/'
};
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/config.js.map

/***/ },

/***/ 646:
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

/***/ 647:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/polyfills.js.map

/***/ },

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_notifications__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CommonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommonService = (function () {
    // private toastAnnounce = new Subject<Object>();
    // toastAnnounce$ = this.toastAnnounce.asObservable();
    function CommonService(http, _notificationsService) {
        this.http = http;
        this._notificationsService = _notificationsService;
    }
    CommonService.prototype.newNotification = function (type, title, content) {
        // this.toastAnnounce.next(options);
        this._notificationsService[type](title, content, {
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: false,
            maxLength: 100
        });
    };
    CommonService.prototype.addQueryParams = function (obj, rules) {
        var params = '';
        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                if (obj[property] === undefined || rules.indexOf(obj[property]) !== -1) {
                    delete obj[property];
                }
                else {
                    params += property.toString().trim() + '=' + obj[property].toString().trim() + '&';
                }
            }
        }
        return params;
    };
    CommonService.prototype.removeEmpty = function (obj, rules) {
        var params = '';
        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                if (obj[property] === undefined || rules.indexOf(obj[property]) !== -1) {
                    delete obj[property];
                }
            }
        }
        return obj;
    };
    CommonService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0_angular2_notifications__["NotificationsService"]) === 'function' && _b) || Object])
    ], CommonService);
    return CommonService;
    var _a, _b;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/library-new/frontend-admin/src/common.service.js.map

/***/ },

/***/ 825:
/***/ function(module, exports) {

module.exports = ".slimScrollDiv {\n  height: 100% !important; }\n\n.slimscrollleft {\n  height: 100% !important; }\n\n.custom-active {\n  background-color: #EEEEEE !important; }\n  .custom-active:hover {\n    background-color: #E0E0E0 !important; }\n"

/***/ },

/***/ 826:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 827:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 828:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 829:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 830:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 831:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 832:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 833:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 834:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 835:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 836:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 837:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 838:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 839:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 840:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 841:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 842:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 843:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 844:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 845:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 846:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 847:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 848:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 849:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 850:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 851:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 852:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 853:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 854:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 855:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 857:
/***/ function(module, exports) {

module.exports = "<simple-notifications [options]=\"options\">\n</simple-notifications>\n<router-outlet></router-outlet>"

/***/ },

/***/ 858:
/***/ function(module, exports) {

module.exports = "<div class=\"app\" id=\"app\">\n\n    <!-- ############ LAYOUT START-->\n\n    <!-- aside -->\n    <div id=\"aside\" class=\"app-aside fade nav-dropdown black\">\n        <!-- fluid app aside -->\n        <div class=\"navside dk\" data-layout=\"column\">\n            <div class=\"navbar no-radius\">\n                <!-- brand -->\n                <a href=\"\" class=\"navbar-brand\">\n                    <!--<div data-ui-include=\"'images/logo.svg'\"></div>\n          <img src=\"images/logo.png\" alt=\".\" class=\"hide\">-->\n                    <span class=\"hidden-folded inline\">Library Admin</span>\n                </a>\n                <!-- / brand -->\n            </div>\n            <div data-flex class=\"hide-scroll\">\n                <nav class=\"scroll nav-stacked nav-stacked-rounded nav-color\">\n\n                    <ul class=\"nav\" data-ui-nav>\n                        <li class=\"nav-header hidden-folded\">\n                            <span class=\"text-xs\">Quick Links</span>\n                        </li>\n                        <!--<li>\n              <a class=\"b-default\">\n                <span class=\"nav-icon text-white no-fade\">\n                    <i class=\"ion-filing\"></i>\n                  </span>\n                <span class=\"nav-text\">Dashboard</span>\n              </a>\n            </li>-->\n\n                        <li>\n                            <a class=\"b-default\" [routerLink]=\"['/','counter']\">\n                                <span class=\"nav-icon\">\n                    <i class=\"ion-person\"></i>\n                  </span>\n                                <span class=\"nav-text\">Counter</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"b-default\" [routerLink]=\"['/','returns','pending']\">\n                                <span class=\"nav-icon\">\n                    <i class=\"ion-clock\"></i>\n                  </span>\n                                <span class=\"nav-text\">  Returns / Checkouts </span>\n                            </a>\n                        </li>\n\n                        <li class=\"nav-header hidden-folded m-t\">\n                            <span class=\"text-xs\">Management</span>\n                        </li>\n                        <li [routerLinkActive]=\"['/','books']\">\n                            <a>\n                                <span class=\"nav-caret\">\n                    <i class=\"fa fa-caret-down\"></i>\n                  </span>\n                                <span class=\"nav-icon\">\n                    <i class=\"fa fa-book\"></i>\n                  </span>\n                                <span class=\"nav-text\">Books</span>\n                            </a>\n                            <ul class=\"nav-sub nav-mega nav-mega-3\">\n                                <li [routerLinkActive]=\"['/','books','create']\">\n                                    <a [routerLink]=\"['/','books','create']\">\n                                        <span class=\"nav-text\">Create New</span>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a [routerLink]=\"['/','books','list']\">\n                                        <span class=\"nav-text\">Search Books</span>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a [routerLink]=\"['/','books','copy-list']\">\n                                        <span class=\"nav-text\">Search Copies</span>\n                                    </a>\n                                </li>\n\n\n                            </ul>\n                        </li>\n\n                        <li [routerLinkActive]=\"['/','members']\">\n                            <a>\n                                <span class=\"nav-caret\">\n                    <i class=\"fa fa-caret-down\"></i>\n                  </span>\n                                <span class=\"nav-icon\">\n                    <i class=\"fa fa-user\"></i>\n                  </span>\n                                <span class=\"nav-text\">Members</span>\n                            </a>\n                            <ul class=\"nav-sub nav-mega nav-mega-3\">\n                                <li>\n                                    <a [routerLink]=\"['/','members','create']\">\n                                        <span class=\"nav-text\">Create New</span>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a [routerLink]=\"['/','members','list']\">\n                                        <span class=\"nav-text\">Search Member</span>\n                                    </a>\n                                </li>\n\n                            </ul>\n                        </li>\n                        <li [routerLinkActive]=\"['/','payments']\">\n                            <a>\n                                <span class=\"nav-caret\">\n                    <i class=\"fa fa-caret-down\"></i>\n                  </span>\n                                <span class=\"nav-icon\">\n                    <i class=\"fa fa-credit-card\"></i>\n                  </span>\n                                <span class=\"nav-text\">Payments</span>\n                            </a>\n                            <ul class=\"nav-sub nav-mega nav-mega-3\">\n                                <li>\n                                    <a [routerLink]=\"['/','payments','create']\">\n                                        <span class=\"nav-text\">New Payment</span>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a [routerLink]=\"['/','payments','list']\">\n                                        <span class=\"nav-text\">Search Payment</span>\n                                    </a>\n                                </li>\n\n                            </ul>\n                        </li>\n\n                        <li [routerLinkActive]=\"['/','payments']\">\n                            <a>\n                                <span class=\"nav-caret\">\n                    <i class=\"fa fa-caret-down\"></i>\n                  </span>\n                                <span class=\"nav-icon\">\n                    <i class=\"fa fa-list\"></i>\n                  </span>\n                                <span class=\"nav-text\">Inventory</span>\n                            </a>\n                            <ul class=\"nav-sub nav-mega nav-mega-3\">\n                                <li>\n                                    <a [routerLink]=\"['/','inventory','create']\">\n                                        <span class=\"nav-text\">Add Inventory</span>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a [routerLink]=\"['/','inventory','list']\">\n                                        <span class=\"nav-text\">Search Inventory</span>\n                                    </a>\n                                </li>\n\n                            </ul>\n                        </li>\n                        <li [routerLinkActive]=\"['/','payments']\">\n                            <a>\n                                <span class=\"nav-caret\">\n                    <i class=\"fa fa-caret-down\"></i>\n                  </span>\n                                <span class=\"nav-icon\">\n                    <i class=\"fa fa-lock\"></i>\n                  </span>\n                                <span class=\"nav-text\">Users</span>\n                            </a>\n                            <ul class=\"nav-sub nav-mega nav-mega-3\">\n                                <li>\n                                    <a [routerLink]=\"['/','users','create']\">\n                                        <span class=\"nav-text\">New User</span>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a [routerLink]=\"['/','users','list']\">\n                                        <span class=\"nav-text\">Search User</span>\n                                    </a>\n                                </li>\n\n                            </ul>\n                        </li>\n\n\n                    </ul>\n                </nav>\n            </div>\n            <div data-flex-no-shrink>\n                <div class=\"nav-fold dropup\">\n                    <a data-toggle=\"dropdown\">\n                        <div class=\"pull-left\">\n                            <div class=\"inline\"><span class=\"avatar w-40 grey\">JR</span></div>\n                            <!--<img src=\"images/a0.jpg\" alt=\"...\" class=\"w-40 img-circle hide\">-->\n                        </div>\n                        <div class=\"clear hidden-folded p-x\">\n                            <span class=\"block _500 text-muted\">Jean Reyes</span>\n                            <div class=\"progress-xxs m-y-sm lt progress\">\n                                <div class=\"progress-bar info\" style=\"width: 15%;\">\n                                </div>\n                            </div>\n                        </div>\n                    </a>\n                    <div class=\"dropdown-menu w dropdown-menu-scale \">\n                        <a class=\"dropdown-item\" href=\"profile.html\">\n                            <span>Profile</span>\n                        </a>\n                        <a class=\"dropdown-item\" href=\"setting.html\">\n                            <span>Settings</span>\n                        </a>\n                        <a class=\"dropdown-item\" href=\"app.inbox.html\">\n                            <span>Inbox</span>\n                        </a>\n                        <a class=\"dropdown-item\" href=\"app.message.html\">\n                            <span>Message</span>\n                        </a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a class=\"dropdown-item\" href=\"docs.html\">\n              Need help?\n            </a>\n                        <a class=\"dropdown-item\" href=\"signin.html\">Sign out</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- / -->\n\n    <!-- content -->\n    <div id=\"content\" class=\"app-content box-shadow-z2 bg pjax-container\" role=\"main\">\n        <div class=\"app-header white bg b-b\">\n            <div class=\"navbar\" data-pjax>\n                <a data-toggle=\"modal\" data-target=\"#aside\" class=\"navbar-item pull-left hidden-lg-up p-r m-a-0\">\n                    <i class=\"ion-navicon\"></i>\n                </a>\n                <div class=\"navbar-item pull-left h5\" id=\"pageTitle\">Blank</div>\n                <!-- nabar right -->\n                <ul class=\"nav navbar-nav pull-right\">\n\n\n                    <li class=\"nav-item dropdown\">\n                        <a class=\"nav-link clear\" data-toggle=\"dropdown\">\n                            <span class=\"avatar w-32\">\n                        <img src=\"https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png\" class=\"w-full rounded\" alt=\"...\">\n                      </span> Nilesh Jayanandana\n                        </a>\n                        <div class=\"dropdown-menu w dropdown-menu-scale pull-right\">\n                            <a class=\"dropdown-item\" href=\"profile.html\">\n                                <span>Profile</span>\n                            </a>\n                            <a class=\"dropdown-item\" href=\"setting.html\">\n                                <span>Settings</span>\n                            </a>\n                            <a class=\"dropdown-item\" href=\"app.inbox.html\">\n                                <span>Inbox</span>\n                            </a>\n                            <a class=\"dropdown-item\" href=\"app.message.html\">\n                                <span>Message</span>\n                            </a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a class=\"dropdown-item\" href=\"docs.html\">\n                        Need help?\n                      </a>\n                            <a class=\"dropdown-item\" href=\"signin.html\">Sign out</a>\n                        </div>\n                    </li>\n                </ul>\n                <!-- / navbar right -->\n            </div>\n        </div>\n        <!--<div class=\"app-footer white bg p-a b-t\">\n    <div class=\"pull-right text-sm text-muted\">Version 1.0.1</div>\n    <span class=\"text-sm text-muted\">&copy; Copyright.</span>\n  </div>-->\n        <div class=\"app-body\">\n\n            <div class=\"padding\">\n                <router-outlet></router-outlet>\n\n            </div>\n\n        </div>\n    </div>\n    <!-- / -->\n\n\n\n\n    <!-- ############ LAYOUT END-->\n</div>"

/***/ },

/***/ 859:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n\n        <div class=\"box\">\n            <div class=\"box-header\">\n                <h2>Search Copies</h2>\n            </div>\n            <div class=\"box-divider m-a-0\"></div>\n            <div class=\"box-body\">\n\n\n                <form role=\"form\" (ngSubmit)=\"copySearch(searchForm.value,false)\" #searchForm=\"ngForm\">\n                    <div class=\"row\">\n\n                        <div class=\"col-md-4\">\n\n                        </div>\n\n\n                        <div class=\"col-md-2\">\n\n                        </div>\n\n                        <div class=\"col-md-2\">\n                            <div class=\"form-group\">\n                                <label>Copy ID</label>\n                                <input ngModel type=\"text\" name=\"ref_id__istartswith\" class=\"form-control\">\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                            <div class=\"form-group\">\n                                <label>Book Title</label>\n                                <input ngModel type=\"text\" name=\"title\" class=\"form-control\">\n                            </div>\n                        </div>\n\n\n                        <div class=\"col-md-1\">\n                            <div class=\"form-group\">\n                                <label>&nbsp;</label>\n                                <button type=\"submit\" class=\"btn primary btn-block\"> <i class=\"fa fa-search\" style=\"padding: 0cm\"></i> </button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n\n        <div class=\"box\">\n            <div class=\"box-header\">\n                <h2>Search Results</h2>\n            </div>\n            <div class=\"box-divider m-a-0\"></div>\n            <div class=\"box-body\">\n\n                <table class=\"table table-striped table-condensed table-hover\">\n                    <thead>\n                        <th style=\"width:5rem\">Ref ID</th>\n                        <th>Title</th>\n                        <th>Author</th>\n                        <th>remarks</th>\n                        <th>Status</th>\n                        <th>Return Date</th>\n\n                        <th style=\"width:5rem\">Actions</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let copy of copies.results\">\n                            <td>{{copy.ref_id}}</td>\n                            <td>{{copy.book_detail.title}}</td>\n                            <td>{{copy.book_detail.author}}</td>\n\n                            <td>{{copy.remarks}}</td>\n                            <td style=\"text-align: center\">\n                                <h6>\n                                    <span class=\"label rounded \" [ngClass]=\"{'primary': !copy.taken , 'danger': copy.taken}\">\n                                      {{(copy.taken)?'Taken':'Available'}}\n                                  </span>\n                                </h6>\n                            </td>\n                            <td style=\"text-align: center\">\n                                {{(copy.taken)?copy.return_date:'N/A'}}\n\n                            </td>\n                            <td><button [routerLink]=\"['/','books','copy',copy.id]\" class=\"btn btn-xs primary btn-block\">View</button></td>\n                        </tr>\n                    </tbody>\n                </table>\n\n                <div class=\"row\">\n                    <div class=\"col-md-1\">\n                        <button class=\"btn rounded white\" (click)=\"bookSearch({},copies.previous)\" [disabled]=\"copies.previous===null\">Previous</button>\n                    </div>\n                    <div class=\"col-md-5\"></div>\n                    <div class=\"col-md-5\"></div>\n                    <div class=\"col-md-1\">\n                        <button class=\"btn rounded white\" (click)=\"bookSearch({},copies.next)\" [disabled]=\"copies.next===null\">Next</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ },

/***/ 860:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search History</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n\n        <form role=\"form\">\n          <div class=\"row\">\n\n            <div class=\"col-md-1\">\n\n            </div>\n            <div class=\"col-md-2\">\n\n            </div>\n            <div class=\"col-md-2\">\n\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Start Date</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>End Date</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>&nbsp;</label>\n                <button class=\"btn primary btn-block\"> <i class=\"fa fa-search\" style=\"padding: 0cm\"></i>\n</button>\n</div>\n</div>\n</div>\n</form>\n\n</div>\n</div>\n\n</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Results</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n        <table class=\"table-hover\">\n\n        </table>\n\n      </div>\n    </div>"

/***/ },

/***/ 861:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n\n    <div class=\"col-md-3\">\n\n        <div class=\"box\">\n\n\n\n            <div class=\"box-divider m-a-0\"> </div>\n            <div class=\"box-body\">\n                <div>\n                    <img [src]=\"copy.book_detail.image\" *ngIf=\"copy.book_detail.image\" align=\"center\" style=\" height: auto;\" class=\"img-responsive center-block\">\n                </div>\n\n\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-9 \">\n\n        <div class=\"nav-active-border b-primary bottom box \">\n            <div class=\"nav nav-md \">\n                <a class=\"nav-link \" (click)=\"changeNav( 'SUMMARY') \" [ngClass]=\"{active: nav==='SUMMARY' } \">\n            Copy Information\n          </a>\n                <a class=\"nav-link \" (click)=\"changeNav( 'HISTORY') \" [ngClass]=\"{active: nav==='HISTORY' } \">\n            Copy History\n          </a>\n\n\n            </div>\n        </div>\n\n\n\n\n        <div class=\"row \">\n            <div class=\"col-md-7   \"></div>\n            <div class=\"col-md-5   \">\n                <div class=\"row\">\n                    <div class=\"col-md-4\" style=\"padding-right: 0cm\">\n\n                        <div class=\"dropdown inline\">\n                            <button class=\"btn grey  btn-block  rounded btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">Print Code </button>\n                            <div class=\"dropdown-menu pull-right\">\n                                <a class=\"dropdown-item\">Print Barcode</a>\n                                <a class=\"dropdown-item\">Print QR Code</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <button class=\"btn   btn-block  info rounded btn-sm \" (click)=\"editCopy()\"> <span class=\"fa fa-pencil\"></span>  &nbsp; Edit</button>\n                    </div>\n                    <div class=\"col-md-4\" style=\"padding-left:0cm\">\n                        <button class=\"btn btn-block btn-danger rounded btn-sm \" (click)=\"deleteCopy()\"><span class=\"fa fa-trash\"></span>  &nbsp; Delete</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <br>\n        <div class=\"box-divider m-a-0 \"></div>\n        <br>\n\n\n        <app-book-view-summary [copyDetails]=\"copy\" [bookDetails]=\"copy.book_detail \" [showStats]=\"false \" [category]=\"category \" *ngIf=\"nav==='SUMMARY' && !isloading \"></app-book-view-summary>\n        <app-book-copy-history *ngIf=\"nav==='HISTORY' \"></app-book-copy-history>\n\n    </div>\n</div>\n\n\n<app-copy-form [id]=\"copy.book_detail.id \" [editFlag]=\"true \" (updateEmitter)=\"reloadData($event) \"></app-copy-form>\n<app-delete-modal (deleteEmitter)=\"delete($event) \"></app-delete-modal>"

/***/ },

/***/ 862:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n\n    <div class=\"col-md-3\">\n\n        <div class=\"box\">\n\n\n            <div class=\"box-body\">\n                <div>\n                    <img [src]=\"src\" align=\"center\" style=\" height: auto;\" class=\"img-responsive center-block\" [hidden]=\"src === ''\">\n                </div>\n                <br> <br>\n                <input type=\"file\" image-upload (imageSelected)=\"selected($event)\">\n\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-9\">\n        <app-book-form [src]=\"src\"></app-book-form>\n    </div>"

/***/ },

/***/ 863:
/***/ function(module, exports) {

module.exports = "<form [formGroup]=\"bookForm\" (ngSubmit)=\"submitForm()\">\n    <div class=\"box\">\n        <div class=\"box-header\">\n            <h2>Main Information</h2>\n        </div>\n        <div class=\"box-divider m-a-0\"></div>\n        <div class=\"box-body\">\n\n            <div class=\"form-group  row\" [ngClass]=\"{'has-danger': validationRule('title')}\">\n                <label class=\"col-sm-2 form-control-label\">Book Title</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"title\">\n                    <div class=\"form-control-feedback\" *ngIf=\"validationRule('title')\">\n                        Book Title is required.\n                    </div>\n\n                </div>\n            </div>\n\n            <div class=\"form-group row\" [ngClass]=\"{'has-danger': validationRule('title')}\">\n                <label class=\"col-sm-2 form-control-label\">Author</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"author\">\n                    <div class=\"form-control-feedback\" *ngIf=\"validationRule('title')\">\n                        Author is required.\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"form-group row\">\n                <label class=\"col-sm-2 form-control-label\">Editor</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"editor\">\n                </div>\n            </div>\n\n\n            <div class=\"form-group row\">\n                <label class=\"col-sm-2 form-control-label\">Publisher</label>\n                <div class=\"col-sm-7\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"publisher\">\n                </div>\n                <label class=\"col-sm-1 form-control-label\"> Year</label>\n                <div class=\"col-sm-2\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"published_year\">\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n\n                <label class=\"col-sm-2 form-control-label\">Category</label>\n\n                <div class=\"col-sm-4\">\n                    <select class=\"form-control\" placeholder=\"\" formControlName=\"category\"> \n\n                  <option *ngFor=\"let cat of categories\" [value]=\"cat.id\">\n                     {{cat.cat_name}}\n                  </option>\n                </select>\n                </div>\n\n                <label class=\"col-sm-1 form-control-label\">ISBN</label>\n                <div class=\"col-sm-2\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"isbn\">\n                </div>\n                <label class=\"col-sm-1 form-control-label\" [ngClass]=\"{'has-danger': validationRule('cl_num')}\">CL Num</label>\n                <div class=\"col-sm-2 \" [ngClass]=\"{'has-danger': validationRule('cl_num')}\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"cl_num\">\n                    <div class=\"form-control-feedback\" *ngIf=\"validationRule('cl_num')\">\n                        This is required.\n                    </div>\n                </div>\n            </div>\n\n\n\n\n\n\n\n        </div>\n    </div>\n\n    <div class=\"box\">\n        <div class=\"box-header\">\n            <h2>Additional Information</h2>\n        </div>\n        <div class=\"box-divider m-a-0\"></div>\n        <div class=\"box-body\">\n\n            <div class=\"form-group row\">\n                <label class=\"col-sm-2 form-control-label\">Series</label>\n                <div class=\"col-sm-6\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"series\">\n                </div>\n                <label class=\"col-sm-2 form-control-label\">Series No.</label>\n                <div class=\"col-sm-2\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"series_num\">\n                </div>\n            </div>\n\n\n            <div class=\"form-group row\">\n                <label class=\"col-sm-2 form-control-label\">Pages</label>\n                <div class=\"col-sm-4\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"pages\">\n                </div>\n                <label class=\"col-sm-2 form-control-label\">Height</label>\n                <div class=\"col-sm-4\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"height\">\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n                <label class=\"col-sm-2 form-control-label\">Remarks</label>\n                <div class=\"col-sm-10\">\n                    <textarea type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"remarks\"></textarea>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"box\">\n        <div class=\"box-header\">\n            <h2>Book Summary</h2>\n        </div>\n        <div class=\"box-divider m-a-0\"></div>\n        <div class=\"box-body\">\n\n\n            <div class=\"form-group row\">\n\n                <div class=\"col-sm-12\">\n                    <textarea type=\"text\" class=\"form-control\" rows=\"7\" placeholder=\"Enter Book Summary\" formControlName=\"summary\"></textarea>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-7\"></div>\n        <div class=\"col-md-2\">\n            <button class=\"btn  btn-block btn-fw white\">Reset</button>\n        </div>\n        <div class=\"col-md-3\">\n            <button type=\"submit\" class=\"btn btn-block btn-fw primary\">Save</button>\n            <!--[disabled]=\"!bookForm.valid\"-->\n        </div>\n\n\n    </div>\n</form>"

/***/ },

/***/ 864:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n\n        <div class=\"box\">\n            <div class=\"box-header\">\n                <h2>Search Books</h2>\n            </div>\n            <div class=\"box-divider m-a-0\"></div>\n            <div class=\"box-body\">\n\n\n                <form role=\"form\" (ngSubmit)=\"bookSearch(searchForm.value,false)\" #searchForm=\"ngForm\">\n                    <div class=\"row\">\n\n                        <div class=\"col-md-1\">\n                            <div class=\"form-group\">\n                                <label>CL Number</label>\n                                <input ngModel type=\"text\" name=\"cl_number__istartswith\" class=\"form-control\">\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                            <div class=\"form-group\">\n                                <label>Book Title</label>\n                                <input ngModel type=\"text\" name=\"title__istartswith\" class=\"form-control\">\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                            <div class=\"form-group\">\n                                <label>Author</label>\n                                <input ngModel type=\"text\" name=\"author__istartswith\" class=\"form-control\">\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-2\">\n                            <div class=\"form-group\">\n                                <label>Editor/ Translator</label>\n                                <input ngModel type=\"text\" name=\"editor__istartswith\" class=\"form-control\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-2\">\n                            <div class=\"form-group\">\n                                <label>Publisher</label>\n                                <input ngModel type=\"text\" name=\"publisher__istartswith\" class=\"form-control\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-1\">\n                            <div class=\"form-group\">\n                                <label>&nbsp;</label>\n                                <button type=\"submit\" class=\"btn primary btn-block\"> <i class=\"fa fa-search\" style=\"padding: 0cm\"></i>\n</button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n\n        <div class=\"box\">\n            <div class=\"box-header\">\n                <h2>Search Results</h2>\n            </div>\n            <div class=\"box-divider m-a-0\"></div>\n            <div class=\"box-body\">\n\n                <table class=\"table table-striped table-condensed table-hover\">\n                    <thead>\n                        <th style=\"width:5rem\">CL No</th>\n                        <th>Title</th>\n                        <th>Author</th>\n                        <th>Editor</th>\n                        <th>Publisher</th>\n                        <th style=\"width:5rem\">Copies</th>\n                        <th style=\"width:5rem\">Available</th>\n                        <th style=\"width:5rem\">Actions</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let book of books.results\">\n                            <td>{{book.cl_num}}</td>\n                            <td>{{book.title}}</td>\n                            <td>{{book.author}}</td>\n                            <td>{{book.editor}}</td>\n                            <td>{{book.publisher}}</td>\n                            <td style=\"text-align: center\">{{book.total_copies}}</td>\n                            <td style=\"text-align: center\">{{book.available_copies}}</td>\n                            <td><button [routerLink]=\"['/','books','view',book.id]\" class=\"btn btn-xs primary btn-block\">View</button></td>\n                        </tr>\n                    </tbody>\n                </table>\n\n                <div class=\"row\">\n                    <div class=\"col-md-1\">\n                        <button class=\"btn rounded white\" (click)=\"bookSearch({},books.previous)\" [disabled]=\"books.previous===null\">Previous</button>\n                    </div>\n                    <div class=\"col-md-5\"></div>\n                    <div class=\"col-md-5\"></div>\n                    <div class=\"col-md-1\">\n                        <button class=\"btn rounded white\" (click)=\"bookSearch({},books.next)\" [disabled]=\"books.next===null\">Next</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ },

/***/ 865:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n\n    <div class=\"col-md-12\">\n\n\n\n\n        <div class=\"box\">\n            <div class=\"box-header\">\n                <h2>Copies</h2>\n\n                <!--<div class=\"box-tool\">\n          <ul class=\"nav\">\n            <li class=\"nav-item inline\">\n              <button (click)=\"copyForm.open()\" class=\"btn   info btn-sm rounded\">\n                <i class=\"fa fa-fw fa-plus\"></i> Add New Copy\n              </button>\n            </li>\n\n          </ul>\n        </div>-->\n\n            </div>\n\n            <div class=\"box-divider m-a-0\"> </div>\n            <div class=\"box-body\">\n                <table class=\"table table-condensed table-hover b-t\">\n                    <thead>\n                        <tr>\n                            <th>ID</th>\n                            <th>Remarks</th>\n                            <th>Status</th>\n\n                            <th style=\"width:15rem\">Actions</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let copy of copies\">\n                            <td>{{copy.ref_id}}</td>\n                            <td>{{copy.remarks}}</td>\n                            <td>\n                                <h6><span class=\"label rounded \" [ngClass]=\"{'primary': !copy.taken , 'danger': copy.taken}\">{{(copy.taken)?'Taken':'Available'}}</span> </h6>\n                            </td>\n\n                            <td>\n\n\n                                <div class=\"dropdown inline\">\n                                    <button class=\"btn   rounded btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">More Actions </button>\n                                    <div class=\"dropdown-menu pull-right\">\n                                        <a class=\"dropdown-item\" (click)=\"editCopy(copy)\">Edit</a>\n                                        <a class=\"dropdown-item\" (click)=\"deleteCopy(copy.id)\">Archive</a>\n                                        <div class=\"dropdown-divider\"></div>\n                                        <a class=\"dropdown-item\">Print Barcode</a>\n                                        <a class=\"dropdown-item\">Print QR Code</a>\n                                    </div>\n                                </div>\n\n                                <button class=\" btn primary rounded btn-sm\" [routerLink]=\"['/','books','copy',copy.id]\"> View</button>\n\n                            </td>\n                        </tr>\n\n\n                    </tbody>\n                </table>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<app-copy-form [id]=\"id\" [editFlag]=\"true\" (updateEmitter)=\"reloadData($event)\"></app-copy-form>\n<app-delete-modal (deleteEmitter)=\"delete($event)\"></app-delete-modal>"

/***/ },

/***/ 866:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-7\">\n        <div class=\"box\">\n            <div class=\"box-header \">\n                <h2>{{bookDetails.title}} <small> By {{bookDetails.author}}</small></h2>\n\n            </div>\n            <div class=\"box-divider m-a-0\"></div>\n            <div class=\"box-body  \">\n                <p>\n                    {{bookDetails.summary}}\n                </p>\n\n            </div>\n            <div class=\"box-divider m-a-0\"></div>\n            <div class=\"box-body  \">\n                <p>\n                    {{bookDetails.remarks}}\n                </p>\n\n            </div>\n            <div class=\"box-divider m-a-0\"></div>\n            <div class=\"row row-col no-gutter  \" *ngIf=\"showStats\">\n                <div class=\"col-xs-4 b-r\">\n                    <a class=\"p-y block text-center\">\n                        <strong class=\"block\">{{bookDetails.total_copies}}</strong>\n                        <span class=\"block\">Copies</span>\n                    </a>\n                </div>\n                <div class=\"col-xs-4 b-r\">\n                    <a class=\"p-y block text-center\">\n                        <strong class=\"block\">{{bookDetails.available_copies}}</strong>\n                        <span class=\"block\">Available</span>\n                    </a>\n                </div>\n\n                <div class=\"col-xs-4\">\n                    <a class=\"p-y block text-center\">\n                        <strong class=\"block\">{{bookDetails.taken_copies}}</strong>\n                        <span class=\"block\">Taken</span>\n                    </a>\n                </div>\n            </div>\n\n        </div>\n\n\n        <div class=\"box\" *ngIf=\"!showStats\">\n            <div class=\"box-header \">\n                <h2>Copy Information </h2>\n\n            </div>\n            <div class=\"box-divider m-a-0\"></div>\n            <div class=\"box-body  \">\n                <p>\n                    {{copyDetails.remarks}}\n                </p>\n\n            </div>\n            <div class=\"box-divider m-a-0\"></div>\n            <div class=\"list group\">\n\n\n                <li class=\"list-item\">\n                    <a class=\"list-left\">\n                        <span class=\"w-40 circle dark avatar\">\n                <span>R</span>\n\n                        </span>\n                    </a>\n                    <div class=\"list-body\">\n                        <div><a>REF ID </a></div>\n                        <small class=\"text-muted text-ellipsis\">{{copyDetails.ref_id}}</small>\n\n                    </div>\n                </li>\n                <li class=\"list-item \">\n                    <a class=\"list-left\">\n                        <span class=\"w-40 circle  avatar\" [ngClass]=\"{'red': copyDetails.taken, 'green':!copyDetails.taken}\">\n                <span>{{(copyDetails.taken)?'T':'A'}}</span>\n\n                        </span>\n                    </a>\n                    <div class=\"list-body\">\n                        <div><a>Status  </a></div>\n                        <small class=\"text-muted text-ellipsis\">{{(copyDetails.taken)?'Taken':'Available'}} </small>\n                    </div>\n                </li>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"col-md-5\">\n        <div class=\"box\">\n            <div class=\"box-header \">\n                <h2>Book Information</h2>\n\n            </div>\n            <div class=\"box-divider m-a-0\"></div>\n            <div class=\"list group\">\n\n\n                <li class=\"list-item\">\n                    <a class=\"list-left\">\n                        <span class=\"w-40 circle primary avatar\">\n                <span>E</span>\n\n                        </span>\n                    </a>\n                    <div class=\"list-body\">\n                        <div><a>Edited By </a></div>\n                        <small class=\"text-muted text-ellipsis\">{{bookDetails.editor}}</small>\n\n                    </div>\n                </li>\n\n                <li class=\"list-item\">\n                    <a class=\"list-left\">\n                        <span class=\"w-40 circle indigo avatar\">\n                <span>P</span>\n\n                        </span>\n                    </a>\n                    <div class=\"list-body\">\n                        <div><a>Published By </a></div>\n                        <small class=\"text-muted text-ellipsis\">{{bookDetails.publisher}} On {{bookDetails.published_year}} </small>\n                    </div>\n                </li>\n                <li class=\"list-item\">\n                    <a class=\"list-left\">\n                        <span class=\"w-40 circle pink avatar\">\n                <span>C</span>\n\n                        </span>\n                    </a>\n                    <div class=\"list-body\">\n                        <div><a>Category </a></div>\n                        <small class=\"text-muted text-ellipsis\">{{category.cat_name}}</small>\n                    </div>\n                </li>\n                <li class=\"list-item\">\n                    <a class=\"list-left\">\n                        <span class=\"w-40 circle purple avatar\">\n                <span>I</span>\n\n                        </span>\n                    </a>\n                    <div class=\"list-body\">\n                        <div><a>ISBN </a></div>\n                        <small class=\"text-muted text-ellipsis\">{{bookDetails.isbn}}</small>\n                    </div>\n                </li>\n                <li class=\"list-item\">\n                    <a class=\"list-left\">\n                        <span class=\"w-40 circle blue avatar\">\n                <span>C</span>\n\n                        </span>\n                    </a>\n                    <div class=\"list-body\">\n                        <div><a>CL Number </a></div>\n                        <small class=\"text-muted text-ellipsis\">{{bookDetails.cl_number}}</small>\n                    </div>\n                </li>\n                <li class=\"list-item\">\n                    <a class=\"list-left\">\n                        <span class=\"w-40 circle dark avatar\">\n                <span>S</span>\n\n                        </span>\n                    </a>\n                    <div class=\"list-body\">\n                        <div><a>Series </a></div>\n                        <small class=\"text-muted text-ellipsis\">{{bookDetails.series_num}} - {{bookDetails.series}}</small>\n                    </div>\n                </li>\n                <li class=\"list-item\">\n                    <a class=\"list-left\">\n                        <span class=\"w-40 circle dark green\">\n                <span>P</span>\n\n                        </span>\n                    </a>\n                    <div class=\"list-body\">\n                        <div><a>Pysical Information </a></div>\n                        <small class=\"text-muted text-ellipsis\">{{bookDetails.pages}} pages & {{bookDetails.height}} Height</small>\n                    </div>\n                </li>\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ },

/***/ 867:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n\n    <div class=\"col-md-3\">\n\n        <div class=\"box\">\n\n\n\n            <div class=\"box-divider m-a-0\"> </div>\n            <div class=\"box-body\">\n                <div>\n                    <img [src]=\"bookDetails.image\" align=\"center\" style=\" height: auto;\" class=\"img-responsive center-block\" *ngIf=\"bookDetails.image\">\n                </div>\n                <br> <br>\n                <input type=\"file\" image-upload (imageSelected)=\"selected($event)\">\n\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-9\">\n\n        <div class=\"nav-active-border b-primary bottom box\">\n            <div class=\"nav nav-md\">\n                <a class=\"nav-link\" (click)=\"changeNav('SUMMARY')\" [ngClass]=\"{active: nav==='SUMMARY'}\">\n            Summary\n          </a>\n                <a class=\"nav-link \" (click)=\"changeNav('COPIES')\" [ngClass]=\"{active: nav==='COPIES'}\">\n            Copies\n          </a>\n                <a class=\"nav-link\" (click)=\"changeNav('EDIT')\" [ngClass]=\"{active: nav==='EDIT'}\">\n          Edit\n          </a>\n\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-10\"></div>\n            <div class=\"col-md-2\">\n\n\n\n                <button class=\"btn  pull-right btn-sm rounded info \" (click)=\"addNewCopy()\"> <span class=\"fa fa-plus\"></span> &nbsp; Add Copy</button>\n                <!--<button class=\"btn  btn-danger \">Archive Book</button>-->\n            </div>\n        </div>\n        <br>\n        <div class=\"box-divider m-a-0\"></div>\n        <br>\n\n        <app-book-form [src]=\"bookDetails.image\" (updateEmitter)=\"reloadData($event)\" [bookDetails]=\"bookDetails\" [editFlag]=\"true\" *ngIf=\"nav==='EDIT'\"></app-book-form>\n        <app-book-view-copies (updateEmitter)=\"reloadData($event)\" [id]=\"bookDetails.id\" [copies]=\"copies\" [hidden]=\"nav!=='COPIES'\"></app-book-view-copies>\n        <app-book-view-summary [bookDetails]=\"bookDetails\" [category]=\"category\" [hidden]=\"nav!=='SUMMARY'\"></app-book-view-summary>\n\n    </div>\n\n\n    <app-copy-form [id]=\"bookDetails.id\" (updateEmitter)=\"reloadData($event)\"></app-copy-form>"

/***/ },

/***/ 868:
/***/ function(module, exports) {

module.exports = "<modal #copyModal>\n    <form [formGroup]=\"copyForm\" (ngSubmit)=\"submitForm()\">\n        <modal-header>\n            <h4 class=\"modal-title\">Copy Management</h4>\n        </modal-header>\n        <modal-body>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-12\">\n                    <div class=\"form-group row\" [ngClass]=\"{'has-danger': validationRule('ref_id')}\">\n                        <label class=\"form-control-label col-md-2\">REF ID</label>\n                        <div class=\"col-md-6\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"ref_id\" />\n                            <div class=\"form-control-feedback\" *ngIf=\"validationRule('ref_id')\">\n                                REF ID is required.\n                            </div>\n                        </div>\n                    </div>\n\n\n\n                    <div class=\"form-group row\">\n                        <label class=\"form-control-label col-md-2\">Remarks</label>\n                        <div class=\"col-md-10\">\n                            <textarea type=\"text\" formControlName=\"remarks\" class=\"form-control\"></textarea>\n                        </div>\n\n                    </div>\n\n                </div>\n\n\n            </div>\n        </modal-body>\n        <modal-footer>\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"copyModal.dismiss()\">Cancel</button>\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n        </modal-footer>\n    </form>\n</modal>"

/***/ },

/***/ 869:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\">\n\n       <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Checkout Details</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n \n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 form-control-label\">Member ID</label>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n        </div>\n \n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 form-control-label\">Remarks</label>\n          <div class=\"col-sm-9\">\n            <textarea type=\"text\" class=\"form-control\" placeholder=\"\"></textarea>\n          </div>\n        </div>\n\n        \n\n      </div>\n    </div>\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Add Items</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 form-control-label\">Copy ID</label>\n          <div class=\"col-sm-4\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n        </div>\n\n       \n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 form-control-label\">Checkout Date</label>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 form-control-label\">Return Date</label>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n        </div>\n\n     \n\n        <div class=\"form-group row\">\n          <div class=\"col-md-6\"></div>\n          <div class=\"col-sm-6\">\n            <button class=\"btn info\">Add To Checkout</button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"col-md-8\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Checkout List</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n        <div class=\"row\">\n          <div class=\"col-md-10\"></div> \n          <div class=\"col-md-2   \">\n            <button class=\"btn primary btn-block\">Save</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ },

/***/ 870:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-5\">\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Inventory Information</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 form-control-label\">Inventory Type</label>\n          <div class=\"col-sm-8\">\n            <select class=\"form-control\">\n              <option value=\"\">Furniture</option>             \n            </select>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 form-control-label\">Inventory Name</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n          </div>\n        </div>\n\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 form-control-label\">Remarks</label>\n          <div class=\"col-sm-8\">\n            <textarea type=\"text\" rows=\"6\" class=\"form-control\" placeholder=\"\"></textarea>\n          </div>\n\n\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n\n  <div class=\"col-md-7\">\n    <div class=\"row\">\n\n      <div class=\"col-md-12\">\n        <div class=\"box\">\n          <div class=\"box-header\">\n            <h2>Item Information</h2>\n          </div>\n          <div class=\"box-divider m-a-0\"></div>\n          <div class=\"box-body\">\n            <div class=\"row\">\n\n              <div class=\"col-md-4\">\n                <div>\n                  <img [src]=\"src\" align=\"center\" style=\" height: auto;\" class=\"img-responsive center-block\" [hidden]=\"src === ''\">\n</div>\n<br> <br>\n<input type=\"file\" image-upload (imageSelected)=\"selected($event)\">\n\n</div>\n\n<div class=\"col-md-8\">\n\n  <div class=\"form-group row\">\n    <label class=\"col-sm-4 form-control-label\">REF ID</label>\n    <div class=\"col-sm-8\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-sm-4 form-control-label\">Date Added</label>\n    <div class=\"col-sm-8\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"\">\n    </div>\n  </div>\n\n\n\n  <div class=\"form-group row\">\n    <label class=\"col-sm-4 form-control-label\">Remarks</label>\n    <div class=\"col-sm-8\">\n      <textarea type=\"text\" class=\"form-control\" placeholder=\"\"></textarea>\n    </div>\n\n\n  </div>\n\n  <div class=\"form-group row\">\n\n\n    <div class=\" col-md-4\"></div>\n    <div class=\"col-md-4\">\n      <button class=\"btn  btn-block btn-fw white\">Reset</button>\n    </div>\n    <div class=\"col-md-4\">\n      <button class=\"btn btn-block btn-fw primary\">Add To List</button>\n    </div>\n\n\n  </div>\n\n\n\n\n\n</div>\n\n</div>\n\n\n\n\n\n\n\n\n\n</div>\n</div>\n\n</div>\n</div>\n\n\n\n</div>\n</div>\n\n<div class=\"row\">\n \n  <div class=\"col-md-12\">\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Inventory Item List</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n<div class=\"row\">\n  <div class=\"col-md-8\"></div>\n  <div class=\"col-md-2\">\n    <button class=\"btn  btn-block btn-fw white\">Clear List</button>\n  </div>\n  <div class=\"col-md-2\">\n    <a [routerLink]=\"['/','inventory','view','1']\" class=\"btn btn-block btn-fw primary\">Save</a>\n  </div>\n\n\n</div>"

/***/ },

/***/ 871:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-4\">\n\n    <div class=\"box\">\n      <div class=\"box-header \">\n        <h2>Rolling Chair <small> 24 Items available</small></h2>\n\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body  \">\n        <p>\n          No Remark Available\n        </p>\n\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n\n      <div class=\"list group\">\n\n\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle primary avatar\">\n                <span>T</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Type </a></div>\n            <small class=\"text-muted text-ellipsis\">Furniture</small>\n\n          </div>\n        </li>\n\n\n\n      </div>\n\n\n    </div>\n\n\n  </div>\n\n\n  <div class=\"col-md-8\">\n\n    <div class=\"nav-active-border b-primary bottom box\">\n      <div class=\"nav nav-md\">\n        <a class=\"nav-link\" (click)=\"changeNav('ACTIVE')\" [ngClass]=\"{active: nav==='ACTIVE'}\">\n            Active Items\n          </a>\n        <a class=\"nav-link \" (click)=\"changeNav('HISTORY')\" [ngClass]=\"{active: nav==='HISTORY'}\">\n              History\n          </a>\n        <a class=\"nav-link \" (click)=\"changeNav('ADD')\" [ngClass]=\"{active: nav==='ADD'}\">\n            Add Item\n          </a>\n        <a class=\"nav-link\" (click)=\"changeNav('EDIT')\" [ngClass]=\"{active: nav==='EDIT'}\">\n          Edit Main Information\n          </a>\n\n      </div>\n    </div>\n\n\n\n\n\n\n    <div class=\"row\" *ngIf=\"nav==='ACTIVE'\">\n\n      <div class=\"col-md-12\">\n\n        <div class=\"box\">\n          <div class=\"box-header\">\n            <h2>Active Items</h2>\n          </div>\n          <div class=\"box-divider m-a-0\"></div>\n          <div class=\"box-body\">\n\n            <table class=\"table-hover\">\n\n            </table>\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <div *ngIf=\"nav==='HISTORY'\">\n\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n\n          <div class=\"box\">\n            <div class=\"box-header\">\n              <h2>Search History</h2>\n            </div>\n            <div class=\"box-divider m-a-0\"></div>\n            <div class=\"box-body\">\n\n\n              <form role=\"form\">\n                <div class=\"row\">\n\n                  <div class=\"col-md-1\">\n\n                  </div>\n                  <div class=\"col-md-2\">\n\n                  </div>\n                  <div class=\"col-md-2\">\n\n                  </div>\n                  <div class=\"col-md-3\">\n                     \n                  </div>\n\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Select Year</label>\n                      <input type=\"text\" class=\"form-control\">\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-1\">\n                    <div class=\"form-group\">\n                      <label>&nbsp;</label>\n                      <button class=\"btn primary btn-block\"> <i class=\"fa fa-search\" style=\"padding: 0cm\"></i></button>\n</div>\n</div>\n</div>\n</form>\n\n</div>\n</div>\n\n</div>\n\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Results</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n        <table class=\"table-hover\">\n\n        </table>\n\n      </div>\n    </div>\n  </div>\n\n\n\n</div>\n\n\n\n</div>\n\n\n\n\n\n<div *ngIf=\"nav==='ADD'\">\n\n  <div class=\"col-md-12\">\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Item Information</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n        <div class=\"row\">\n\n          <div class=\"col-md-4\">\n            <div>\n              <img [src]=\"src\" align=\"center\" style=\" height: auto;\" class=\"img-responsive center-block\" [hidden]=\"src === ''\">\n</div>\n<br> <br>\n<input type=\"file\" image-upload (imageSelected)=\"selected($event)\">\n\n</div>\n\n<div class=\"col-md-8\">\n\n  <div class=\"form-group row\">\n    <label class=\"col-sm-4 form-control-label\">REF ID</label>\n    <div class=\"col-sm-8\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-sm-4 form-control-label\">Date Added</label>\n    <div class=\"col-sm-8\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"\">\n    </div>\n  </div>\n\n\n\n  <div class=\"form-group row\">\n    <label class=\"col-sm-4 form-control-label\">Remarks</label>\n    <div class=\"col-sm-8\">\n      <textarea type=\"text\" class=\"form-control\" placeholder=\"\"></textarea>\n    </div>\n\n\n  </div>\n\n  <div class=\"form-group row\">\n\n\n    <div class=\" col-md-4\"></div>\n    <div class=\"col-md-4\">\n      <button class=\"btn  btn-block btn-fw white\">Reset</button>\n    </div>\n    <div class=\"col-md-4\">\n      <button class=\"btn btn-block btn-fw primary\">Save</button>\n    </div>\n\n\n  </div>\n\n\n\n\n\n</div>\n\n</div>\n\n\n\n\n\n\n\n\n\n</div>\n</div>\n\n</div>\n</div>\n<div *ngIf=\"nav==='EDIT'\">\n\n\n  <div class=\"box\">\n    <div class=\"box-header\">\n      <h2>Inventory Information</h2>\n    </div>\n    <div class=\"box-divider m-a-0\"></div>\n    <div class=\"box-body\">\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-4 form-control-label\">Inventory Type</label>\n        <div class=\"col-sm-8\">\n          <select class=\"form-control\">\n              <option value=\"\">Furniture</option>             \n            </select>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-4 form-control-label\">Inventory Name</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n      </div>\n\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-4 form-control-label\">Remarks</label>\n        <div class=\"col-sm-8\">\n          <textarea type=\"text\" rows=\"6\" class=\"form-control\" placeholder=\"\"></textarea>\n        </div>\n\n\n      </div>\n\n      <div class=\"form-group row\">\n\n\n        <div class=\" col-md-4\"></div>\n        <div class=\"col-md-4\">\n          <button class=\"btn  btn-block btn-fw white\">Reset</button>\n        </div>\n        <div class=\"col-md-4\">\n          <button class=\"btn btn-block btn-fw primary\">Update</button>\n        </div>\n\n\n      </div>\n\n    </div>\n  </div>\n</div>\n\n</div>"

/***/ },

/***/ 872:
/***/ function(module, exports) {

module.exports = "<p>\n  inventory-list works!\n</p>\n"

/***/ },

/***/ 873:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-3\">\n\n    <div class=\"box\">\n\n\n      <div class=\"box-body\">\n        <div>\n          <img [src]=\"src\" align=\"center\" style=\" height: auto;\" class=\"img-responsive center-block\" [hidden]=\"src === ''\">\n</div>\n<br> <br>\n<input type=\"file\" image-upload (imageSelected)=\"selected($event)\">\n\n</div>\n</div>\n\n\n</div>\n\n\n<div class=\"col-md-8\">\n\n<app-member-form></app-member-form>\n\n</div>"

/***/ },

/***/ 874:
/***/ function(module, exports) {

module.exports = "  <div class=\"box\">\n    <div class=\"box-header\">\n      <h2>Main Information</h2>\n    </div>\n    <div class=\"box-divider m-a-0\"></div>\n    <div class=\"box-body\">\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Member Type</label>\n        <div class=\"col-sm-4\">\n          <select class=\"form-control\">\n              <option value=\"\">Library</option>\n              <option value=\"\">Individual Member</option>\n                    <option value=\"\">Individual Member</option>\n                          <option value=\"\">Committee</option>\n            </select>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Title</label>\n        <div class=\"col-sm-2\">\n          <select class=\"form-control\">\n              <option value=\"MR\">MR</option>\n            </select>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">NIC</label>\n        <div class=\"col-sm-4\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">REF ID</label>\n        <div class=\"col-sm-4\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n      </div>\n\n\n\n\n\n\n\n\n\n\n\n\n    </div>\n  </div>\n\n  <div class=\"box\">\n    <div class=\"box-header\">\n      <h2>Contact Information</h2>\n    </div>\n    <div class=\"box-divider m-a-0\"></div>\n    <div class=\"box-body\">\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Mobile</label>\n        <div class=\"col-sm-4\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n        <label class=\"col-sm-2 form-control-label\"> Home</label>\n        <div class=\"col-sm-4\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Email</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Address</label>\n        <div class=\"col-sm-10\">\n          <textarea type=\"text\" class=\"form-control\" placeholder=\"\"></textarea>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Town</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n  <div class=\"row\">\n    <div class=\"col-md-8\"></div>\n    <div class=\"col-md-2\">\n      <button class=\"btn  btn-block btn-fw white\">Reset</button>\n    </div>\n    <div class=\"col-md-2\">\n      <a [routerLink]=\"['/','members','view','1']\" class=\"btn btn-block btn-fw primary\">Save</a>\n    </div>\n\n\n  </div>"

/***/ },

/***/ 875:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Members</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n\n        <form role=\"form\">\n          <div class=\"row\">\n\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>ID</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Name</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>NIC</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Phone</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n          \n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>&nbsp;</label>\n                <button class=\"btn primary btn-block\"  > <i class=\"fa fa-search\" style=\"padding: 0cm\"></i> </button>\n              </div>\n            </div>\n          </div>\n        </form>\n\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Results</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n        <table class=\"table-hover\">\n          \n        </table>\n\n      </div>\n    </div>"

/***/ },

/***/ 876:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search History</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n\n        <form role=\"form\">\n          <div class=\"row\">\n\n            <div class=\"col-md-1\">\n\n            </div>\n            <div class=\"col-md-2\">\n\n            </div>\n            <div class=\"col-md-2\">\n\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Start Date</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>End Date</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>&nbsp;</label>\n                <button class=\"btn primary btn-block\"> <i class=\"fa fa-search\" style=\"padding: 0cm\"></i>\n</button>\n</div>\n</div>\n</div>\n</form>\n\n</div>\n</div>\n\n</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Results</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n        <table class=\"table-hover\">\n\n        </table>\n\n      </div>\n    </div>"

/***/ },

/***/ 877:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Payments</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n\n        <form role=\"form\">\n          <div class=\"row\">\n\n            <div class=\"col-md-1\">\n\n            </div>\n            <div class=\"col-md-2\">\n\n            </div>\n            <div class=\"col-md-2\">\n\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Start Date</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>End Date</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>&nbsp;</label>\n                <button class=\"btn primary btn-block\"> <i class=\"fa fa-search\" style=\"padding: 0cm\"></i>\n</button>\n</div>\n</div>\n</div>\n</form>\n\n</div>\n</div>\n\n</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Results</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n        <table class=\"table-hover\">\n\n        </table>\n\n      </div>\n    </div>"

/***/ },

/***/ 878:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <div class=\"box\">\n      <div class=\"box-header \">\n        <h2>Nilesh Jayanandana <small> 00001234</small></h2>\n\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body  \">\n        <p>\n          No Address Available\n        </p>\n\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n\n      <div class=\"list group\">\n\n\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle primary avatar\">\n                <span>N</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">NIC </a></div>\n            <small class=\"text-muted text-ellipsis\">930980501V</small>\n\n          </div>\n        </li>\n\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle indigo avatar\">\n                <span>M</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Mobile </a></div>\n            <small class=\"text-muted text-ellipsis\">0715910955</small>\n          </div>\n        </li>\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle pink avatar\">\n                <span>C</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Home </a></div>\n            <small class=\"text-muted text-ellipsis\">N/A</small>\n          </div>\n        </li>\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle purple avatar\">\n                <span>E</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Email </a></div>\n            <small class=\"text-muted text-ellipsis\">N/A</small>\n          </div>\n        </li>\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle blue avatar\">\n                <span>T</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Town </a></div>\n            <small class=\"text-muted text-ellipsis\">N/A</small>\n          </div>\n        </li>\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle dark avatar\">\n                <span>D</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Date Registered </a></div>\n            <small class=\"text-muted text-ellipsis\">10/10/2017</small>\n          </div>\n        </li>\n\n\n      </div>\n\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"box\">\n      <div class=\"box-header \">\n        <h2>Recent Activity</h2>\n\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"streamline\">\n        <div class=\"sl-item\">\n          <div class=\"sl-content\">\n            <div class=\"sl-date text-muted\">2 minutes ago</div>\n            <p>Check your Internet connection</p>\n          </div>\n        </div>\n        <div class=\"sl-item\">\n          <div class=\"sl-content\">\n            <div class=\"sl-date text-muted\">9:30</div>\n            <p>Meeting with tech leader</p>\n          </div>\n        </div>\n        <div class=\"sl-item b-success\">\n          <div class=\"sl-content\">\n            <div class=\"sl-date text-muted\">8:30</div>\n            <p>Call to customer <a href=\"#\" class=\"text-info\">Jacob</a> and discuss the detail.</p>\n          </div>\n        </div>\n        <div class=\"sl-item\">\n          <div class=\"sl-content\">\n            <div class=\"sl-date text-muted\">Wed, 25 Mar</div>\n            <p>Finished task <a href=\"#\" class=\"text-info\">Testing</a>.</p>\n          </div>\n        </div>\n        <div class=\"sl-item\">\n          <div class=\"sl-content\">\n            <div class=\"sl-date text-muted\">Thu, 10 Mar</div>\n            <p>Trip to the moon</p>\n          </div>\n        </div>\n        <div class=\"sl-item b-info\">\n          <div class=\"sl-content\">\n            <div class=\"sl-date text-muted\">Sat, 5 Mar</div>\n            <p>Prepare for presentation</p>\n          </div>\n        </div>\n        <div class=\"sl-item\">\n          <div class=\"sl-content\">\n            <div class=\"sl-date text-muted\">Sun, 11 Feb</div>\n            <p><a href=\"#\" class=\"text-info\">Jessi</a> assign you a task <a href=\"#\" class=\"text-info\">Mockup Design</a>.</p>\n          </div>\n        </div>\n        <div class=\"sl-item\">\n          <div class=\"sl-content\">\n            <div class=\"sl-date text-muted\">Thu, 17 Jan</div>\n            <p>Follow up to close deal</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ },

/***/ 879:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-3\">\n\n    <div class=\"box\">\n\n\n      <div class=\"box-body\">\n        <div>\n          <img [src]=\"src\" align=\"center\" style=\" height: auto;\" class=\"img-responsive center-block\" [hidden]=\"src === ''\">\n</div>\n<br> <br>\n<input type=\"file\" image-upload (imageSelected)=\"selected($event)\">\n\n</div>\n</div>\n\n\n</div>\n\n\n<div class=\"col-md-9\">\n\n  <div class=\"nav-active-border b-primary bottom box\">\n    <div class=\"nav nav-md\">\n      <a class=\"nav-link\" (click)=\"changeNav('SUMMARY')\" [ngClass]=\"{active: nav==='SUMMARY'}\">\n            Summary\n          </a>\n      <a class=\"nav-link \" (click)=\"changeNav('PAYMENTS')\" [ngClass]=\"{active: nav==='PAYMENTS'}\">\n            Payments\n          </a>\n      <a class=\"nav-link \" (click)=\"changeNav('ACTIVITY')\" [ngClass]=\"{active: nav==='ACTIVITY'}\">\n            History\n          </a>\n      <a class=\"nav-link\" (click)=\"changeNav('EDIT')\" [ngClass]=\"{active: nav==='EDIT'}\">\n          Edit\n          </a>\n\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n\n    <div class=\"col-md-6 pull-right\">\n\n\n\n      <button class=\"btn  primary \">Add Payment</button>\n      <button class=\"btn  grey \">Ban Member</button>\n      <button class=\"btn  btn-danger \">Disable Member</button>\n    </div>\n  </div>\n  <br>\n  <div class=\"box-divider m-a-0\"></div>\n  <br>\n\n\n  <app-member-view-activity *ngIf=\"nav==='ACTIVITY'\"></app-member-view-activity>\n  <app-member-view-summary *ngIf=\"nav==='SUMMARY'\"></app-member-view-summary>\n  <app-member-view-payments *ngIf=\"nav==='PAYMENTS'\"></app-member-view-payments>\n  <app-member-form *ngIf=\"nav==='EDIT'\"></app-member-form>\n\n</div>"

/***/ },

/***/ 880:
/***/ function(module, exports) {

module.exports = "<div class=\"box\">\n  <div class=\"box-header\">\n    <h2>Payment Information</h2>\n  </div>\n  <div class=\"box-divider m-a-0\"></div>\n  <div class=\"box-body\">\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 form-control-label\">Payment Type</label>\n      <div class=\"col-sm-4\">\n        <select class=\"form-control\">\n              <option value=\"\">Fine</option>\n              <option value=\"\">Registration</option>\n                    <option value=\"\">Other</option>\n                         \n            </select>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 form-control-label\">Memeber REF</label>\n      <div class=\"col-sm-2\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 form-control-label\">Amount</label>\n      <div class=\"col-sm-4\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 form-control-label\">Payment Date</label>\n      <div class=\"col-sm-4\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"\">\n      </div>\n    </div>\n\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 form-control-label\">Remarks</label>\n      <div class=\"col-sm-4\">\n        <textarea type=\"text\" class=\"form-control\" placeholder=\"\"></textarea>\n      </div>\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n\n  </div>\n</div>\n\n\n\n\n\n\n<div class=\"row\">\n  <div class=\"col-md-8\"></div>\n  <div class=\"col-md-2\">\n    <button class=\"btn  btn-block btn-fw white\">Reset</button>\n  </div>\n  <div class=\"col-md-2\">\n    <a [routerLink]=\"['/','members','view','1']\" class=\"btn btn-block btn-fw primary\">Save</a>\n  </div>\n\n\n</div>"

/***/ },

/***/ 881:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Payments</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n\n        <form role=\"form\">\n          <div class=\"row\">\n\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Payment Type</label>\n                <select name=\"\" id=\"\" class=\"form-control\">\n                  <option value=\"\">Registration</option>\n                  <option value=\"\">Fine</option>\n                   <option value=\"\">Other</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Payment ID</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Member ID</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Start Date</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>End Date</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>&nbsp;</label>\n                <button class=\"btn primary btn-block\"> <i class=\"fa fa-search\" style=\"padding: 0cm\"></i>\n</button>\n</div>\n</div>\n</div>\n</form>\n\n</div>\n</div>\n\n</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Results</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n\n\n      <table class=\"table table-condensed table-striped table-hover\">\n        <thead>\n          <th>Checkout ID</th>\n          <th>Actions</th>\n        </thead>\n\n\n      </table>\n\n\n    </div>"

/***/ },

/***/ 882:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Checkouts</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n\n\n        <form role=\"form\">\n          <div class=\"row\">\n\n            \n               <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Checkout Type</label>\n                <select name=\"\" id=\"\" class=\"form-control\">\n                  <option value=\"\">Pending</option>\n                  <option value=\"\">Completed</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Checkout Number</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Member ID</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Start Date</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>End Date</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>&nbsp;</label>\n                <button class=\"btn primary btn-block\"> <i class=\"fa fa-search\" style=\"padding: 0cm\"></i>\n</button>\n</div>\n</div>\n</div>\n</form>\n\n</div>\n</div>\n\n</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h2>Search Results</h2>\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n\n\n      <table class=\"table table-condensed table-striped table-hover\">\n        <thead>\n          <th>Checkout ID</th>\n          <th>Actions</th>\n        </thead>\n        <tbody>\n          <tr>\n            <td>0001</td>\n            <td> \n              <button [routerLink]=\"['/','returns','view','1']\" class=\"btn primary btn-sm\">View</button>\n            </td>\n          </tr>\n        </tbody>\n\n      </table>\n\n\n    </div>"

/***/ },

/***/ 883:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4\">\n    <div class=\"box\">\n\n      <div class=\"box-divider m-a-0\"></div>\n\n      <div class=\"box-divider m-a-0\"></div>\n\n      <div class=\"list group\">\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle pink avatar\">\n                <span>C</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Checkout ID </a></div>\n            <small class=\"text-muted text-ellipsis\">N/A</small>\n          </div>\n        </li>\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle purple avatar\">\n                <span>M</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Member ID</a></div>\n            <small class=\"text-muted text-ellipsis\">N/A</small>\n          </div>\n        </li>\n\n\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle dark avatar\">\n                <span>N</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Name </a></div>\n            <small class=\"text-muted text-ellipsis\">Nilesh Jayanandan</small>\n          </div>\n        </li>\n\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle primary avatar\">\n                <span>D</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Date Taken </a></div>\n            <small class=\"text-muted text-ellipsis\">2010/10/10</small>\n\n          </div>\n        </li>\n\n        <li class=\"list-item\">\n          <a href=\"\" class=\"list-left\">\n            <span class=\"w-40 circle indigo avatar\">\n                <span>R</span>\n\n            </span>\n          </a>\n          <div class=\"list-body\">\n            <div><a href=\"\">Return Date </a></div>\n            <small class=\"text-muted text-ellipsis\">2010/10/10</small>\n          </div>\n        </li>\n\n\n\n\n\n      </div>\n\n    </div>\n  </div>\n  <div class=\"col-md-8\">\n    <div class=\"box\">\n      <div class=\"box-header \">\n        <h2>List of Returns</h2>\n\n      </div>\n      <div class=\"box-divider m-a-0\"></div>\n      <div class=\"box-body\">\n      <table class=\"table table-condensed table-striped table-hover\">\n        <thead>\n          <th style=\"width: 5rem\">Copy ID</th>\n          <th>Status</th>\n          <th>Remarks</th>\n        </thead>\n        <tbody>\n          <tr>\n            <td class=\"center-block\">0001</td>\n            <td>\n              <select name=\"\" class=\"form-control \" id=\"\">\n                <option value=\"\">Good</option>\n                   <option value=\"\">Damaged</option>\n                     <option value=\"\">Lost</option>\n              </select>\n            </td>\n            <td>\n              <input type=\"text\" class=\"form-control\">\n            </td>\n          </tr>\n          <tr>\n            <td class=\"center-block\">0002</td>\n            <td>\n              <select name=\"\" class=\"form-control \" id=\"\">\n                <option value=\"\">Good</option>\n                   <option value=\"\">Damaged</option>\n                    <option value=\"\">Lost</option>\n              </select>\n            </td>\n            <td>\n              <input type=\"text\" class=\"form-control\">\n            </td>\n          </tr>\n        </tbody>\n\n      </table>\n\n      <div class=\"row\">\n        <div class=\"col-md-8\"></div>\n          <div class=\"col-md-2\">\n\n          <button class=\"btn danger btn-block\">Add Fine</button>\n        </div>\n        <div class=\"col-md-2\">\n\n          <button class=\"btn primary btn-block\">Save</button>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ },

/***/ 884:
/***/ function(module, exports) {

module.exports = "<p>\n  user-create works!\n</p>\n"

/***/ },

/***/ 885:
/***/ function(module, exports) {

module.exports = "<p>\n  user-form works!\n</p>\n"

/***/ },

/***/ 886:
/***/ function(module, exports) {

module.exports = "<p>\n  user-list works!\n</p>\n"

/***/ },

/***/ 887:
/***/ function(module, exports) {

module.exports = "<modal #deleteModal>\n\n    <modal-header>\n        <h4 class=\"modal-title\">Are you sure You want to Delete?</h4>\n    </modal-header>\n    <modal-body>\n        <p>This cannot be undone later.</p>\n    </modal-body>\n    <modal-footer>\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"deleteModal.dismiss()\">Cancel</button>\n        <button type=\"button\" (click)=\"delete()\" class=\"btn btn-danger\">Delete</button>\n    </modal-footer>\n\n</modal>"

/***/ }

},[1165]);
//# sourceMappingURL=main.bundle.map