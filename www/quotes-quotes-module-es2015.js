(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quotes-quotes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes/quotes.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes/quotes.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar color=\"success\">\n    <!--\n        the color I use is success in order to give a Style also I am using the scss page to add style\n        to the headears, paragraphs \n    -->\n\t\t<ion-title>\n\t\t\t<h1> Quotes </h1>\n\t\t</ion-title>\n\t</ion-toolbar>\n\t<ion-toolbar color=\"success\">\n    <!--\n        In quotes we are creating the seach bar with ion-seachbar int there \n        I specified the method I am going to use in my quote.page.ts with my variable event\n    -->\n\t\t<ion-searchbar placeholder=\"Search Quotes\" animated (ionChange)=\"searchQuote( $event )\">\n\t\t</ion-searchbar>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-list>\n    <!--\n        the ngFor is a interaction  with the array and creating elements with the same type (information taking from mikhail-cct-github-io/mobdev/w4)\n        async is using because our varible quotes is observable so this is telling to observe the varible\n        filter is a pipe (a module),  I created to run the method that check the input from my user (saving in my varible searText) comparing with my arrary of quotes\n        in other words this pipe run the filter of the words storage in serachText and match with the info in an array of quotes, returning the match. \n    -->\n\t\t<ion-item button detail lines=\"inset\" *ngFor=\"let quote of quotes | async | filter : searchText\"\n\t\t\t(click)=\"openDetails(quote)\">\n\t\t\t<label> <p>\t{{ quote.quote }} </p> </label>\n\t\t\t<p> --- By --- {{ quote.author}} </p>\n\t\t</ion-item>\n\t</ion-list>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/quotes/quotes-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/quotes/quotes-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: QuotesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesPageRoutingModule", function() { return QuotesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _quotes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quotes.page */ "./src/app/pages/quotes/quotes.page.ts");




const routes = [
    {
        path: '',
        component: _quotes_page__WEBPACK_IMPORTED_MODULE_3__["QuotesPage"]
    }
];
let QuotesPageRoutingModule = class QuotesPageRoutingModule {
};
QuotesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QuotesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/quotes/quotes.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/quotes/quotes.module.ts ***!
  \***********************************************/
/*! exports provided: QuotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesPageModule", function() { return QuotesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _quotes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quotes-routing.module */ "./src/app/pages/quotes/quotes-routing.module.ts");
/* harmony import */ var _quotes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quotes.page */ "./src/app/pages/quotes/quotes.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








let QuotesPageModule = class QuotesPageModule {
};
QuotesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _quotes_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuotesPageRoutingModule"]
        ],
        declarations: [_quotes_page__WEBPACK_IMPORTED_MODULE_6__["QuotesPage"]]
    })
], QuotesPageModule);



/***/ }),

/***/ "./src/app/pages/quotes/quotes.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/quotes/quotes.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  color: #ffffff;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  font-size: 30px;\n  font-weight: 200;\n  line-height: 50px;\n  margin: 20 0 20px;\n  text-align: center;\n  text-transform: uppercase;\n}\n\np {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\ndiv {\n  padding-right: 10px;\n  padding-left: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9iZGV2LWNhLTIwMTkyMDgvc3JjL2FwcC9wYWdlcy9xdW90ZXMvcXVvdGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcXVvdGVzL3F1b3Rlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQWdCLHdFQUFBO0VBQ2hCLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDRUo7O0FEQUE7RUFDSSx3RUFBQTtBQ0dKOztBRERBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcXVvdGVzL3F1b3Rlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgY29sb3I6ICNmZmZmZmY7IGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjsgXG4gICAgZm9udC1zaXplOiAzMHB4OyBcbiAgICBmb250LXdlaWdodDogMjAwOyBcbiAgICBsaW5lLWhlaWdodDogNTBweDsgXG4gICAgbWFyZ2luOiAyMCAwIDIwcHg7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbnAge1xuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbmRpdiB7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgXG59IiwiaDEge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAyMCAwIDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbmRpdiB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/quotes/quotes.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/quotes/quotes.page.ts ***!
  \*********************************************/
/*! exports provided: QuotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesPage", function() { return QuotesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let QuotesPage = class QuotesPage {
    constructor(router, api) {
        this.router = router;
        this.api = api;
        // Ad array to storage all my varibles quotes 
        this.items = [];
        // variable to storage the text writing in the searchbar from my html 
        this.searchText = '';
    }
    ngOnInit() {
        // this is to call and get the htttp
        this.initializeItems();
    }
    // Open the details page from the quotes 
    openDetails(quotes) {
        let quotesId = quotes.quote_id;
        this.router.navigateByUrl(`/tabs/quotes/${quotesId}`);
    }
    //this method get the storage the inforamtion inside of quotes variable using the api service
    // Subscribe is a method that comes from rxjs library 
    // Subscribe call the observable and this.items = [], take the staff inside of the observable an put inside of the array
    initializeItems() {
        this.quotes = this.api.getQuotes();
        this.quotes.subscribe(item => {
            this.items = [item];
            // console it is only to check the info in console 
            //console.log( data); 
        });
    }
    // for this method // it is necessary to import the pipe module in module.ts
    //event is the name of the property that i have for this method 
    searchQuote(event) {
        //value is the variable  of the input from the user in the browser
        //event target value returns the element from the input
        const text = event.target.value;
        this.searchText = text;
        // I am taking "text" constant and storage in searchtext in order to use it in the search filter in the html. 
        console.log(text);
    }
};
QuotesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
QuotesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quotes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quotes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes/quotes.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quotes.page.scss */ "./src/app/pages/quotes/quotes.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
], QuotesPage);



/***/ })

}]);
//# sourceMappingURL=quotes-quotes-module-es2015.js.map