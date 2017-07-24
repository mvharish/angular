webpackJsonp([1,5],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsDemo; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChartsDemo = (function () {
    function ChartsDemo() {
    }
    ChartsDemo.prototype.ngOnInit = function () {
        this.lineData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#3984b8'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#3eb839'
                }
            ]
        };
        this.barData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#59c429',
                    borderColor: '#3984b8',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#6ec5ff',
                    borderColor: '#f6ac2b',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        this.pieData = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#3eb839",
                        "#f6ac2b",
                        "#3984b8"
                    ]
                }
            ]
        };
        this.polarData = {
            datasets: [{
                    data: [
                        11,
                        16,
                        7,
                        3,
                        14
                    ],
                    backgroundColor: [
                        "#3984b8",
                        "#f6ac2b",
                        "#7e8dcd",
                        "#e175a0",
                        "#3eb839"
                    ],
                    label: 'My dataset'
                }],
            labels: [
                "Red",
                "Green",
                "Yellow",
                "Grey",
                "Blue"
            ]
        };
        this.radarData = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
    };
    return ChartsDemo;
}());
ChartsDemo = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(436)
    })
], ChartsDemo);

//# sourceMappingURL=chartsdemo.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_carservice__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_eventservice__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardDemo; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardDemo = (function () {
    function DashboardDemo(carService, eventService) {
        this.carService = carService;
        this.eventService = eventService;
    }
    DashboardDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.eventService.getEvents().then(function (events) { _this.events = events; });
        this.cities = [];
        this.cities.push({ label: 'Select City', value: null });
        this.cities.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.cities.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
        this.cities.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.cities.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });
        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#FFC107'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#03A9F4'
                }
            ]
        };
        this.items = [
            { label: 'Save', icon: 'fa fa-check' },
            { label: 'Update', icon: 'fa fa-refresh' },
            { label: 'Delete', icon: 'fa fa-trash' }
        ];
    };
    return DashboardDemo;
}());
DashboardDemo = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(437)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_eventservice__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_eventservice__["a" /* EventService */]) === "function" && _b || Object])
], DashboardDemo);

var _a, _b;
//# sourceMappingURL=dashboarddemo.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_carservice__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_nodeservice__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_eventservice__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataDemo; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataDemo = (function () {
    function DataDemo(carService, eventService, nodeService) {
        this.carService = carService;
        this.eventService = eventService;
        this.nodeService = nodeService;
    }
    DataDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars1 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.cars2 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.cars3 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.sourceCars = cars; });
        this.targetCars = [];
        this.carService.getCarsSmall().then(function (cars) { return _this.orderListCars = cars; });
        this.nodeService.getFiles().then(function (files) { return _this.files1 = files; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files2 = files; });
        this.eventService.getEvents().then(function (events) { _this.events = events; });
        this.carouselCars = [
            { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black' },
            { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White' },
            { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue' },
            { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White' },
            { vin: 'gf45wg5', year: 2011, brand: 'Volkswagen', color: 'Red' },
            { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue' },
            { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow' },
            { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown' },
            { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black' }
        ];
        this.scheduleHeader = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
        this.data = [{
                label: 'F.C Barcelona',
                expanded: true,
                children: [
                    {
                        label: 'F.C Barcelona',
                        expanded: true,
                        children: [
                            {
                                label: 'Chelsea FC'
                            },
                            {
                                label: 'F.C. Barcelona'
                            }
                        ]
                    },
                    {
                        label: 'Real Madrid',
                        expanded: true,
                        children: [
                            {
                                label: 'Bayern Munich'
                            },
                            {
                                label: 'Real Madrid'
                            }
                        ]
                    }
                ]
            }];
    };
    return DataDemo;
}());
DataDemo = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(438),
        styles: ["                \n        .cars-datalist ul {\n            margin: 0;\n            padding: 0;\n        }\n    \n        @media (max-width:640px) {\n            .cars-datalist .text-column {\n                text-align: center;\n            }\n        }\n    "],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_eventservice__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_eventservice__["a" /* EventService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_nodeservice__["a" /* NodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_nodeservice__["a" /* NodeService */]) === "function" && _c || Object])
], DataDemo);

var _a, _b, _c;
//# sourceMappingURL=datademo.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Documentation; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Documentation = (function () {
    function Documentation() {
    }
    return Documentation;
}());
Documentation = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(439),
        styles: ["\n        .docs pre {\n            font-family: monospace;\n            background-color: #dee4e9;\n            color: ##757575;\n            padding: 1em;\n            font-size: 14px;\n            border-radius: 3px;\n            overflow: auto;\n        }"
        ]
    })
], Documentation);

//# sourceMappingURL=documentation.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyDemo; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EmptyDemo = (function () {
    function EmptyDemo() {
    }
    return EmptyDemo;
}());
EmptyDemo = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(440)
    })
], EmptyDemo);

//# sourceMappingURL=emptydemo.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileDemo; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FileDemo = (function () {
    function FileDemo() {
        this.uploadedFiles = [];
    }
    FileDemo.prototype.onUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Upload Completed' });
    };
    return FileDemo;
}());
FileDemo = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(441)
    })
], FileDemo);

//# sourceMappingURL=filedemo.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_countryservice__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsDemo; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormsDemo = (function () {
    function FormsDemo(countryService) {
        this.countryService = countryService;
        this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'Volkswagen'];
        this.selectedMultiSelectCars = [];
        this.checkboxValues = [];
        this.rangeValues = [20, 80];
    }
    FormsDemo.prototype.ngOnInit = function () {
        this.carOptions = [];
        this.carOptions.push({ label: 'Audi', value: 'Audi' });
        this.carOptions.push({ label: 'BMW', value: 'BMW' });
        this.carOptions.push({ label: 'Fiat', value: 'Fiat' });
        this.carOptions.push({ label: 'Ford', value: 'Ford' });
        this.carOptions.push({ label: 'Honda', value: 'Honda' });
        this.carOptions.push({ label: 'Jaguar', value: 'Jaguar' });
        this.carOptions.push({ label: 'Mercedes', value: 'Mercedes' });
        this.carOptions.push({ label: 'Renault', value: 'Renault' });
        this.carOptions.push({ label: 'VW', value: 'VW' });
        this.carOptions.push({ label: 'Volvo', value: 'Volvo' });
        this.cities = [];
        this.cities.push({ label: 'Select City', value: 0 });
        this.cities.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.cities.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
        this.cities.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.cities.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });
        this.citiesListbox = this.cities.slice(1);
        this.types = [];
        this.types.push({ label: 'Apartment', value: 'Apartment' });
        this.types.push({ label: 'House', value: 'House' });
        this.types.push({ label: 'Studio', value: 'Studio' });
        this.splitButtonItems = [
            { label: 'Update', icon: 'fa-refresh' },
            { label: 'Delete', icon: 'fa-close' },
            { label: 'Home', icon: 'fa-home', url: 'http://www.primefaces.org/primeng' }
        ];
    };
    FormsDemo.prototype.filterCountry = function (event) {
        var _this = this;
        var query = event.query;
        this.countryService.getCountries().then(function (countries) {
            _this.filteredCountries = _this.searchCountry(query, countries);
        });
    };
    FormsDemo.prototype.searchCountry = function (query, countries) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < countries.length; i++) {
            var country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        return filtered;
    };
    FormsDemo.prototype.filterBrands = function (event) {
        this.filteredBrands = [];
        for (var i = 0; i < this.brands.length; i++) {
            var brand = this.brands[i];
            if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredBrands.push(brand);
            }
        }
    };
    FormsDemo.prototype.handleACDropdownClick = function () {
        var _this = this;
        this.filteredBrands = [];
        //mimic remote call
        setTimeout(function () {
            _this.filteredBrands = _this.brands;
        }, 100);
    };
    return FormsDemo;
}());
FormsDemo = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(442)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_countryservice__["a" /* CountryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_countryservice__["a" /* CountryService */]) === "function" && _a || Object])
], FormsDemo);

var _a;
//# sourceMappingURL=formsdemo.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusDemo; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenusDemo = (function () {
    function MenusDemo() {
    }
    MenusDemo.prototype.ngOnInit = function () {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({ label: 'Categories' });
        this.breadcrumbItems.push({ label: 'Sports' });
        this.breadcrumbItems.push({ label: 'Football' });
        this.breadcrumbItems.push({ label: 'Countries' });
        this.breadcrumbItems.push({ label: 'Spain' });
        this.breadcrumbItems.push({ label: 'F.C. Barcelona' });
        this.breadcrumbItems.push({ label: 'Squad' });
        this.breadcrumbItems.push({ label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' });
        this.tabMenuItems = [
            { label: 'Stats', icon: 'fa-bar-chart' },
            { label: 'Calendar', icon: 'fa-calendar' },
            { label: 'Documentation', icon: 'fa-book' },
            { label: 'Support', icon: 'fa-support' },
            { label: 'Social', icon: 'fa-twitter' }
        ];
        this.tieredItems = [
            {
                label: 'File',
                icon: 'fa-file-o',
                items: [{
                        label: 'New',
                        icon: 'fa-plus',
                        items: [
                            { label: 'Project' },
                            { label: 'Other' },
                        ]
                    },
                    { label: 'Open' },
                    { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    { label: 'Undo', icon: 'fa-mail-forward' },
                    { label: 'Redo', icon: 'fa-mail-reply' }
                ]
            },
            {
                label: 'Help',
                icon: 'fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'fa-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            { label: 'Save', icon: 'fa-save' },
                            { label: 'Update', icon: 'fa-save' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            { label: 'Delete', icon: 'fa-minus' }
                        ]
                    }
                ]
            },
            {
                label: 'Quit', icon: 'fa-minus'
            }
        ];
        this.items = [{
                label: 'File',
                items: [
                    { label: 'New', icon: 'fa-plus' },
                    { label: 'Open', icon: 'fa-download' }
                ]
            },
            {
                label: 'Edit',
                items: [
                    { label: 'Undo', icon: 'fa-refresh' },
                    { label: 'Redo', icon: 'fa-repeat' }
                ]
            }];
        this.megaMenuItems = [
            {
                label: 'TV', icon: 'fa-check',
                items: [
                    [
                        {
                            label: 'TV 1',
                            items: [{ label: 'TV 1.1' }, { label: 'TV 1.2' }]
                        },
                        {
                            label: 'TV 2',
                            items: [{ label: 'TV 2.1' }, { label: 'TV 2.2' }]
                        }
                    ],
                    [
                        {
                            label: 'TV 3',
                            items: [{ label: 'TV 3.1' }, { label: 'TV 3.2' }]
                        },
                        {
                            label: 'TV 4',
                            items: [{ label: 'TV 4.1' }, { label: 'TV 4.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Sports', icon: 'fa-soccer-ball-o',
                items: [
                    [
                        {
                            label: 'Sports 1',
                            items: [{ label: 'Sports 1.1' }, { label: 'Sports 1.2' }]
                        },
                        {
                            label: 'Sports 2',
                            items: [{ label: 'Sports 2.1' }, { label: 'Sports 2.2' }]
                        },
                    ],
                    [
                        {
                            label: 'Sports 3',
                            items: [{ label: 'Sports 3.1' }, { label: 'Sports 3.2' }]
                        },
                        {
                            label: 'Sports 4',
                            items: [{ label: 'Sports 4.1' }, { label: 'Sports 4.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Sports 5',
                            items: [{ label: 'Sports 5.1' }, { label: 'Sports 5.2' }]
                        },
                        {
                            label: 'Sports 6',
                            items: [{ label: 'Sports 6.1' }, { label: 'Sports 6.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Entertainment', icon: 'fa-child',
                items: [
                    [
                        {
                            label: 'Entertainment 1',
                            items: [{ label: 'Entertainment 1.1' }, { label: 'Entertainment 1.2' }]
                        },
                        {
                            label: 'Entertainment 2',
                            items: [{ label: 'Entertainment 2.1' }, { label: 'Entertainment 2.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Entertainment 3',
                            items: [{ label: 'Entertainment 3.1' }, { label: 'Entertainment 3.2' }]
                        },
                        {
                            label: 'Entertainment 4',
                            items: [{ label: 'Entertainment 4.1' }, { label: 'Entertainment 4.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Technology', icon: 'fa-gears',
                items: [
                    [
                        {
                            label: 'Technology 1',
                            items: [{ label: 'Technology 1.1' }, { label: 'Technology 1.2' }]
                        },
                        {
                            label: 'Technology 2',
                            items: [{ label: 'Technology 2.1' }, { label: 'Technology 2.2' }]
                        },
                        {
                            label: 'Technology 3',
                            items: [{ label: 'Technology 3.1' }, { label: 'Technology 3.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Technology 4',
                            items: [{ label: 'Technology 4.1' }, { label: 'Technology 4.2' }]
                        }
                    ]
                ]
            }
        ];
        this.panelMenuItems = [
            {
                label: 'File',
                icon: 'fa-file-o',
                items: [{
                        label: 'New',
                        icon: 'fa-plus',
                        items: [
                            { label: 'Project' },
                            { label: 'Other' },
                        ]
                    },
                    { label: 'Open' },
                    { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    { label: 'Undo', icon: 'fa-mail-forward' },
                    { label: 'Redo', icon: 'fa-mail-reply' }
                ]
            },
            {
                label: 'Help',
                icon: 'fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'fa-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            { label: 'Save', icon: 'fa-save' },
                            { label: 'Update', icon: 'fa-save' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            { label: 'Delete', icon: 'fa-minus' }
                        ]
                    }
                ]
            }
        ];
        this.stepsItems = [
            {
                label: 'Personal'
            },
            {
                label: 'Seat'
            },
            {
                label: 'Payment'
            },
            {
                label: 'Confirmation'
            }
        ];
    };
    return MenusDemo;
}());
MenusDemo = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(443),
        styles: ["\n        .ui-steps-item {\n            width: 25%\n        }\n    "],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], MenusDemo);

//# sourceMappingURL=menusdemo.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesDemo; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessagesDemo = (function () {
    function MessagesDemo() {
        this.msgs = [];
    }
    MessagesDemo.prototype.showInfo = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    };
    MessagesDemo.prototype.showWarn = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    };
    MessagesDemo.prototype.showError = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    };
    MessagesDemo.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Message sent' });
    };
    MessagesDemo.prototype.showMultiple = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' });
    };
    return MessagesDemo;
}());
MessagesDemo = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(444)
    })
], MessagesDemo);

//# sourceMappingURL=messagesdemo.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiscDemo; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MiscDemo = (function () {
    function MiscDemo() {
        this.value = 0;
    }
    MiscDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.value = _this.value + Math.floor(Math.random() * 10) + 1;
            if (_this.value >= 100) {
                _this.value = 100;
                clearInterval(_this.interval);
                _this.interval = null;
            }
        }, 2000);
        this.images = [];
        this.images.push({ source: 'assets/demo/images/nature/nature1.jpg', alt: 'Description for Image 1', title: 'Title 1' });
        this.images.push({ source: 'assets/demo/images/nature/nature2.jpg', alt: 'Description for Image 2', title: 'Title 2' });
        this.images.push({ source: 'assets/demo/images/nature/nature3.jpg', alt: 'Description for Image 3', title: 'Title 3' });
        this.images.push({ source: 'assets/demo/images/nature/nature4.jpg', alt: 'Description for Image 4', title: 'Title 4' });
        this.images.push({ source: 'assets/demo/images/nature/nature5.jpg', alt: 'Description for Image 5', title: 'Title 5' });
        this.images.push({ source: 'assets/demo/images/nature/nature6.jpg', alt: 'Description for Image 6', title: 'Title 6' });
        this.images.push({ source: 'assets/demo/images/nature/nature7.jpg', alt: 'Description for Image 7', title: 'Title 7' });
        this.images.push({ source: 'assets/demo/images/nature/nature8.jpg', alt: 'Description for Image 8', title: 'Title 8' });
        this.images.push({ source: 'assets/demo/images/nature/nature9.jpg', alt: 'Description for Image 9', title: 'Title 9' });
        this.images.push({ source: 'assets/demo/images/nature/nature10.jpg', alt: 'Description for Image 10', title: 'Title 10' });
        this.images.push({ source: 'assets/demo/images/nature/nature11.jpg', alt: 'Description for Image 11', title: 'Title 11' });
        this.images.push({ source: 'assets/demo/images/nature/nature12.jpg', alt: 'Description for Image 12', title: 'Title 12' });
    };
    MiscDemo.prototype.onCommand = function (event) {
        if (event.command === 'date')
            this.response = new Date().toDateString();
        else
            this.response = 'Unknown command: ' + event.command;
    };
    MiscDemo.prototype.ngOnDestroy = function () {
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    return MiscDemo;
}());
MiscDemo = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(445)
    })
], MiscDemo);

//# sourceMappingURL=miscdemo.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_carservice__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlaysDemo; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OverlaysDemo = (function () {
    function OverlaysDemo(carService, confirmationService) {
        this.carService = carService;
        this.confirmationService = confirmationService;
    }
    OverlaysDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars.splice(0, 5); });
        this.images = [];
        this.images.push({ source: 'assets/demo/images/sopranos/sopranos1.jpg', thumbnail: 'assets/demo/images/sopranos/sopranos1_small.jpg', title: 'Nature 1' });
        this.images.push({ source: 'assets/demo/images/sopranos/sopranos2.jpg', thumbnail: 'assets/demo/images/sopranos/sopranos2_small.jpg', title: 'Nature 2' });
        this.images.push({ source: 'assets/demo/images/sopranos/sopranos3.jpg', thumbnail: 'assets/demo/images/sopranos/sopranos3_small.jpg', title: 'Nature 3' });
        this.images.push({ source: 'assets/demo/images/sopranos/sopranos4.jpg', thumbnail: 'assets/demo/images/sopranos/sopranos4_small.jpg', title: 'Nature 4' });
    };
    OverlaysDemo.prototype.confirm = function () {
        this.confirmationService.confirm({
            message: 'Are you sure to perform this action?'
        });
    };
    return OverlaysDemo;
}());
OverlaysDemo = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(446),
        providers: [__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"]) === "function" && _b || Object])
], OverlaysDemo);

var _a, _b;
//# sourceMappingURL=overlaysdemo.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelsDemo; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PanelsDemo = (function () {
    function PanelsDemo() {
    }
    PanelsDemo.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'fa-book', routerLink: ['/theming'] }
        ];
    };
    return PanelsDemo;
}());
PanelsDemo = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(447)
    })
], PanelsDemo);

//# sourceMappingURL=panelsdemo.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_carservice__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_countryservice__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_nodeservice__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleDemo; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SampleDemo = (function () {
    function SampleDemo(carService, countryService, nodeService) {
        this.carService = carService;
        this.countryService = countryService;
        this.nodeService = nodeService;
        this.checkboxValues = [];
        this.selectedMultiSelectCars = [];
    }
    SampleDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.carService.getCarsLarge().then(function (cars) { return _this.carsLarge = cars; });
        this.nodeService.getFiles().then(function (files) { return _this.filesTree = files; });
        this.carService.getCarsSmall().then(function (cars) { return _this.sourceCars = cars; });
        this.targetCars = [];
        this.carService.getCarsSmall().then(function (cars) { return _this.orderListCars = cars; });
        this.cities1 = [];
        this.cities1.push({ label: 'Select City', value: null });
        this.cities1.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities1.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.cities1.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
        this.cities1.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.cities1.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });
        this.cities2 = this.cities1.slice(1, 6);
        this.splitButtonItems = [
            { label: 'Update', icon: 'fa-refresh' },
            { label: 'Delete', icon: 'fa-close' },
            { label: 'Home', icon: 'fa-home', url: 'http://www.primefaces.org/primeng' }
        ];
        this.carOptions = [];
        this.carOptions.push({ label: 'Audi', value: 'Audi' });
        this.carOptions.push({ label: 'BMW', value: 'BMW' });
        this.carOptions.push({ label: 'Fiat', value: 'Fiat' });
        this.carOptions.push({ label: 'Ford', value: 'Ford' });
        this.carOptions.push({ label: 'Honda', value: 'Honda' });
        this.carOptions.push({ label: 'Jaguar', value: 'Jaguar' });
        this.carOptions.push({ label: 'Mercedes', value: 'Mercedes' });
        this.carOptions.push({ label: 'Renault', value: 'Renault' });
        this.carOptions.push({ label: 'Volkswagen', value: 'Volkswagen' });
        this.carOptions.push({ label: 'Volvo', value: 'Volvo' });
        this.types = [];
        this.types.push({ label: 'Apartment', value: 'Apartment' });
        this.types.push({ label: 'House', value: 'House' });
        this.types.push({ label: 'Studio', value: 'Studio' });
        this.menuItems = [{
                label: 'File',
                items: [
                    { label: 'New', icon: 'fa-plus' },
                    { label: 'Open', icon: 'fa-download' }
                ]
            },
            {
                label: 'Edit',
                items: [
                    { label: 'Undo', icon: 'fa-refresh' },
                    { label: 'Redo', icon: 'fa-repeat' }
                ]
            }];
        this.panelMenuItems = [
            {
                label: 'File',
                icon: 'fa-file-o',
                items: [{
                        label: 'New',
                        icon: 'fa-plus',
                        items: [
                            { label: 'Project' },
                            { label: 'Other' },
                        ]
                    },
                    { label: 'Open' },
                    { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    { label: 'Undo', icon: 'fa-mail-forward' },
                    { label: 'Redo', icon: 'fa-mail-reply' }
                ]
            },
            {
                label: 'Help',
                icon: 'fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'fa-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            { label: 'Save', icon: 'fa-save' },
                            { label: 'Update', icon: 'fa-save' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            { label: 'Delete', icon: 'fa-minus' }
                        ]
                    }
                ]
            }
        ];
        this.carouselCars = [
            { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black' },
            { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White' },
            { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue' },
            { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White' },
            { vin: 'gf45wg5', year: 2011, brand: 'Volkswagen', color: 'Red' },
            { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue' },
            { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow' },
            { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown' },
            { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black' }
        ];
    };
    SampleDemo.prototype.filterCountry = function (event) {
        var _this = this;
        var query = event.query;
        this.countryService.getCountries().then(function (countries) {
            _this.filteredCountries = _this.searchCountry(query, countries);
        });
    };
    SampleDemo.prototype.searchCountry = function (query, countries) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < countries.length; i++) {
            var country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        return filtered;
    };
    return SampleDemo;
}());
SampleDemo = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(448)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_countryservice__["a" /* CountryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_countryservice__["a" /* CountryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_nodeservice__["a" /* NodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_nodeservice__["a" /* NodeService */]) === "function" && _c || Object])
], SampleDemo);

var _a, _b, _c;
//# sourceMappingURL=sampledemo.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsDemo; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UtilsDemo = (function () {
    function UtilsDemo() {
    }
    return UtilsDemo;
}());
UtilsDemo = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(449),
        styles: ["                \n        .icon-grid div.ui-g-12 {\n            color: #545b61;\n            text-align: center;\n            padding: 16px;\n            font-size: 12px;\n        }\n        \n        .icon-grid i {\n            display: block;\n            margin: 0 auto;\n            font-size: 24px;\n        }\n        \n        pre {\n            font-family: monospace;\n            background-color: #dee4e9;\n            color: ##757575;\n            padding: 1em;\n            font-size: 14px;\n            border-radius: 3px;\n            overflow: auto;\n        }\n        \n        .shadow-box {\n            background-color: #607D8B;\n            width: 100px;\n            height: 100px;\n        }\n    "],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], UtilsDemo);

//# sourceMappingURL=utilsdemo.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 174;


/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(198);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFooter; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppFooter = (function () {
    function AppFooter() {
    }
    return AppFooter;
}());
AppFooter = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: ""
    })
], AppFooter);

//# sourceMappingURL=app.footer.component.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppSubMenu; });
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






var AppMenuComponent = (function () {
    function AppMenuComponent(app) {
        this.app = app;
    }
    AppMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model = [
            { label: 'Dashboard', icon: 'fa fa-fw fa-home', routerLink: ['/'] },
            {
                label: 'Menu Modes', icon: 'fa fa-fw fa-bars',
                items: [
                    { label: 'Static Menu', icon: 'fa fa-fw fa-bars', command: function () { return _this.app.changeToStaticMenu(); } },
                    { label: 'Overlay Menu', icon: 'fa fa-fw fa-bars', command: function () { return _this.app.changeToOverlayMenu(); } },
                    { label: 'Slim Menu', icon: 'fa fa-fw fa-bars', command: function () { return _this.app.changeToSlimMenu(); } },
                    { label: 'Light Menu', icon: 'fa fa-sun-o fa-fw', command: function () { return _this.app.darkMenu = false; } },
                    { label: 'Dark Menu', icon: 'fa fa-moon-o fa-fw', command: function () { return _this.app.darkMenu = true; } }
                ]
            },
            {
                label: 'Layout Colors', icon: 'fa fa-fw fa-magic',
                items: [
                    {
                        label: 'Flat',
                        icon: 'fa fa-fw fa-circle',
                        items: [
                            { label: 'Default', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeLayout('default'); } },
                            { label: 'Blue', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeLayout('blue'); } },
                            { label: 'Green', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeLayout('green'); } },
                            { label: 'Turquoise', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeLayout('turquoise'); } },
                            { label: 'Purple', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeLayout('purple'); } },
                            { label: 'Orange', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeLayout('orange'); } },
                            { label: 'Deep Purple', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeLayout('deeppurple'); } },
                            { label: 'Lime', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeLayout('lime'); } },
                        ]
                    },
                    {
                        label: 'Special',
                        icon: 'fa fa-fw fa-fire',
                        items: [
                            { label: 'Horizon', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeLayout('horizon'); } },
                            { label: 'Bliss', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeLayout('bliss'); } },
                            { label: 'Crimson', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeLayout('crimson'); } },
                            { label: 'Disco', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeLayout('disco'); } },
                            { label: 'Sunset', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeLayout('sunset'); } },
                            { label: 'Deep Sea', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeLayout('deepsea'); } },
                            { label: 'Opa', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeLayout('opa'); } },
                            { label: 'Cheer', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeLayout('cheer'); } },
                            { label: 'Smoke', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeLayout('smoke'); } },
                        ]
                    }
                ]
            },
            {
                label: 'Themes', icon: 'fa fa-fw fa-paint-brush', badge: '8',
                items: [
                    { label: 'Blue', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeTheme('blue'); } },
                    { label: 'Green', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeTheme('green'); } },
                    { label: 'Turquoise', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeTheme('turquoise'); } },
                    { label: 'Purple', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeTheme('purple'); } },
                    { label: 'Orange', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeTheme('orange'); } },
                    { label: 'Deep Purple', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeTheme('deeppurple'); } },
                    { label: 'Lime', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeTheme('lime'); } },
                    { label: 'Light Blue', icon: 'fa fa-fw fa-paint-brush', command: function (event) { _this.changeTheme('lightblue'); } },
                ]
            },
            {
                label: 'Components', icon: 'fa fa-fw fa-sitemap', badge: '2', badgeStyleClass: 'orange-badge',
                items: [
                    { label: 'Sample Page', icon: 'fa fa-fw fa-columns', routerLink: ['/sample'] },
                    { label: 'Forms', icon: 'fa fa-fw fa-code', routerLink: ['/forms'] },
                    { label: 'Data', icon: 'fa fa-fw fa-table', routerLink: ['/data'] },
                    { label: 'Panels', icon: 'fa fa-fw fa-list-alt', routerLink: ['/panels'] },
                    { label: 'Overlays', icon: 'fa fa-fw fa-square', routerLink: ['/overlays'] },
                    { label: 'Menus', icon: 'fa fa-fw fa-minus-square-o', routerLink: ['/menus'] },
                    { label: 'Messages', icon: 'fa fa-fw fa-circle-o-notch', routerLink: ['/messages'] },
                    { label: 'Charts', icon: 'fa fa-fw fa-area-chart', routerLink: ['/charts'] },
                    { label: 'File', icon: 'fa fa-fw fa-arrow-circle-o-up', routerLink: ['/file'] },
                    { label: 'Misc', icon: 'fa fa-fw fa-user-secret', routerLink: ['/misc'] }
                ]
            },
            { label: 'Landing Page', icon: 'fa fa-fw fa-certificate', url: 'assets/pages/landing.html', target: '_blank' },
            {
                label: 'Template Pages', icon: 'fa fa-fw fa-life-saver',
                items: [
                    { label: 'Empty Page', icon: 'fa fa-fw fa-square-o', routerLink: ['/empty'] },
                    { label: 'Login Page', icon: 'fa fa-fw fa-sign-in', url: 'assets/pages/login.html', target: '_blank' },
                    { label: 'Error Page', icon: 'fa fa-fw fa-exclamation-circle', url: 'assets/pages/error.html', target: '_blank' },
                    { label: '404 Page', icon: 'fa fa-fw fa-times', url: 'assets/pages/404.html', target: '_blank' },
                    { label: 'Access Denied Page', icon: 'fa fa-fw fa-exclamation-triangle', url: 'assets/pages/access.html', target: '_blank' }
                ]
            },
            {
                label: 'Menu Hierarchy', icon: 'fa fa-fw fa-gg',
                items: [
                    {
                        label: 'Submenu 1', icon: 'fa fa-fw fa-sign-in',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'fa fa-fw fa-sign-in' },
                                    { label: 'Submenu 1.1.2', icon: 'fa fa-fw fa-sign-in' },
                                    { label: 'Submenu 1.1.3', icon: 'fa fa-fw fa-sign-in' },
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    { label: 'Submenu 1.2.1', icon: 'fa fa-fw fa-sign-in' },
                                    { label: 'Submenu 1.2.2', icon: 'fa fa-fw fa-sign-in' }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'fa fa-fw fa-sign-in',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'fa fa-fw fa-sign-in' },
                                    { label: 'Submenu 2.1.2', icon: 'fa fa-fw fa-sign-in' },
                                    { label: 'Submenu 2.1.3', icon: 'fa fa-fw fa-sign-in' },
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    { label: 'Submenu 2.2.1', icon: 'fa fa-fw fa-sign-in' },
                                    { label: 'Submenu 2.2.2', icon: 'fa fa-fw fa-sign-in' }
                                ]
                            },
                        ]
                    }
                ]
            },
            { label: 'Utils', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils'] },
            { label: 'Documentation', icon: 'fa fa-fw fa-book', routerLink: ['/documentation'] }
        ];
    };
    AppMenuComponent.prototype.changeTheme = function (theme) {
        var themeLink = document.getElementById('theme-css');
        themeLink.href = 'assets/theme/theme-' + theme + '.css';
    };
    AppMenuComponent.prototype.changeLayout = function (layout) {
        this.app.layout = layout;
        var layoutLink = document.getElementById('layout-css');
        layoutLink.href = 'assets/layout/css/layout-' + layout + '.css';
    };
    return AppMenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], AppMenuComponent.prototype, "reset", void 0);
AppMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(434)
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]; }))),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]) === "function" && _a || Object])
], AppMenuComponent);

var AppSubMenu = (function () {
    function AppSubMenu(app, router, location) {
        this.app = app;
        this.router = router;
        this.location = location;
    }
    AppSubMenu.prototype.itemClick = function (event, item, index) {
        //avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return true;
        }
        //activate current item and deactivate active sibling if any
        if (item.routerLink || item.items) {
            this.activeIndex = (this.activeIndex === index) ? null : index;
        }
        //execute command
        if (item.command) {
            item.command({ originalEvent: event, item: item });
        }
        //prevent hash change
        if (item.items || (!item.url && !item.routerLink)) {
            event.preventDefault();
        }
        //hide menu
        if (!item.items) {
            if (this.app.overlayMenu || this.app.isMobile()) {
                this.app.overlayMenuActive = false;
                this.app.mobileMenuActive = false;
            }
            if (!this.root && this.app.slimMenu) {
                this.app.resetSlim = true;
            }
        }
    };
    AppSubMenu.prototype.isActive = function (index) {
        return this.activeIndex === index;
    };
    AppSubMenu.prototype.unsubscribe = function (item) {
        if (item.eventEmitter) {
            item.eventEmitter.unsubscribe();
        }
        if (item.items) {
            for (var _i = 0, _a = item.items; _i < _a.length; _i++) {
                var childItem = _a[_i];
                this.unsubscribe(childItem);
            }
        }
    };
    Object.defineProperty(AppSubMenu.prototype, "reset", {
        get: function () {
            return this._reset;
        },
        set: function (val) {
            this._reset = val;
            if (this._reset && this.app.slimMenu) {
                this.activeIndex = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    return AppSubMenu;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["MenuItem"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["MenuItem"]) === "function" && _b || Object)
], AppSubMenu.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], AppSubMenu.prototype, "root", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], AppSubMenu.prototype, "visible", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], AppSubMenu.prototype, "reset", null);
AppSubMenu = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '[app-submenu]',
        template: "\n        <ng-template ngFor let-child let-i=\"index\" [ngForOf]=\"(root ? item : item.items)\">\n            <li [ngClass]=\"{'active-menuitem': isActive(i)}\" [class]=\"child.badgeStyleClass\">\n                <a [href]=\"child.url||'#'\" (click)=\"itemClick($event,child,i)\" *ngIf=\"!child.routerLink\" [attr.tabindex]=\"!visible ? '-1' : null\" [attr.target]=\"child.target\"\n                    (mouseenter)=\"hover=true\" (mouseleave)=\"hover=false\">\n                    <i [ngClass]=\"child.icon\"></i>\n                    <span>{{child.label}}</span>\n                    <span class=\"menuitem-badge\" *ngIf=\"child.badge\">{{child.badge}}</span>\n                    <i class=\"fa fa-fw fa-angle-down\" *ngIf=\"child.items\"></i>\n                </a>\n\n                <a (click)=\"itemClick($event,child,i)\" *ngIf=\"child.routerLink\"\n                    [routerLink]=\"child.routerLink\" routerLinkActive=\"active-menuitem-routerlink\" [routerLinkActiveOptions]=\"{exact: true}\" [attr.tabindex]=\"!visible ? '-1' : null\" [attr.target]=\"child.target\"\n                    (mouseenter)=\"hover=true\" (mouseleave)=\"hover=false\">\n                    <i [ngClass]=\"child.icon\"></i>\n                    <span>{{child.label}}</span>\n                    <span class=\"menuitem-badge\" *ngIf=\"child.badge\">{{child.badge}}</span>\n                    <i class=\"fa fa-fw fa-angle-down\" *ngIf=\"child.items\"></i>\n                </a>\n                <div class=\"layout-menu-tooltip\">\n                    <div class=\"layout-menu-tooltip-arrow\"></div>\n                    <div class=\"layout-menu-tooltip-text\">{{child.label}}</div>\n                </div>\n                <ul app-submenu [item]=\"child\" *ngIf=\"child.items\" [visible]=\"isActive(i)\" [reset]=\"reset\"\n                    [@children]=\"app.slimMenu&&root ? isActive(i) ? 'visible' : 'hidden' : isActive(i) ? 'visibleAnimated' : 'hiddenAnimated'\"></ul>\n            </li>\n        </ng-template>\n    ",
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('children', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('hiddenAnimated', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                    height: '0px'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('visibleAnimated', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                    height: '*'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                    height: '*'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('hidden', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                    height: '0px'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('visibleAnimated => hiddenAnimated', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('hiddenAnimated => visibleAnimated', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
            ])
        ]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]; }))),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _e || Object])
], AppSubMenu);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.menu.component.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_menu_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_topbar_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_footer_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__demo_view_dashboarddemo__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__demo_view_sampledemo__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__demo_view_formsdemo__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__demo_view_datademo__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__demo_view_panelsdemo__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__demo_view_overlaysdemo__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__demo_view_menusdemo__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__demo_view_messagesdemo__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__demo_view_miscdemo__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__demo_view_emptydemo__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__demo_view_chartsdemo__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__demo_view_filedemo__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__demo_view_utilsdemo__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__demo_view_documentation__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__demo_service_carservice__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__demo_service_countryservice__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__demo_service_eventservice__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__demo_service_nodeservice__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































































































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* AppRoutes */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["AccordionModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["AutoCompleteModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["BreadcrumbModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["CalendarModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["CarouselModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ColorPickerModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["CheckboxModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ChipsModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["CodeHighlighterModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ContextMenuModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DataGridModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DataListModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DataScrollerModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DragDropModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DropdownModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["EditorModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["FieldsetModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["GalleriaModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["GMapModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["GrowlModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["InputMaskModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["InputSwitchModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["InputTextareaModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["LightboxModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ListboxModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["MegaMenuModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["MenuModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["MenubarModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["MessagesModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["MultiSelectModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["OrderListModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["OrganizationChartModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["OverlayPanelModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["PaginatorModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["PanelModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["PanelMenuModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["PasswordModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["PickListModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ProgressBarModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["RadioButtonModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["RatingModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ScheduleModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["SelectButtonModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["SlideMenuModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["SliderModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["SpinnerModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["SplitButtonModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["StepsModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["TabMenuModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["TerminalModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["TieredMenuModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ToggleButtonModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ToolbarModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["TooltipModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["TreeModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["TreeTableModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__app_menu_component__["a" /* AppMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_10__app_menu_component__["b" /* AppSubMenu */],
            __WEBPACK_IMPORTED_MODULE_11__app_topbar_component__["a" /* AppTopBar */],
            __WEBPACK_IMPORTED_MODULE_12__app_footer_component__["a" /* AppFooter */],
            __WEBPACK_IMPORTED_MODULE_13__demo_view_dashboarddemo__["a" /* DashboardDemo */],
            __WEBPACK_IMPORTED_MODULE_14__demo_view_sampledemo__["a" /* SampleDemo */],
            __WEBPACK_IMPORTED_MODULE_15__demo_view_formsdemo__["a" /* FormsDemo */],
            __WEBPACK_IMPORTED_MODULE_16__demo_view_datademo__["a" /* DataDemo */],
            __WEBPACK_IMPORTED_MODULE_17__demo_view_panelsdemo__["a" /* PanelsDemo */],
            __WEBPACK_IMPORTED_MODULE_18__demo_view_overlaysdemo__["a" /* OverlaysDemo */],
            __WEBPACK_IMPORTED_MODULE_19__demo_view_menusdemo__["a" /* MenusDemo */],
            __WEBPACK_IMPORTED_MODULE_20__demo_view_messagesdemo__["a" /* MessagesDemo */],
            __WEBPACK_IMPORTED_MODULE_20__demo_view_messagesdemo__["a" /* MessagesDemo */],
            __WEBPACK_IMPORTED_MODULE_21__demo_view_miscdemo__["a" /* MiscDemo */],
            __WEBPACK_IMPORTED_MODULE_23__demo_view_chartsdemo__["a" /* ChartsDemo */],
            __WEBPACK_IMPORTED_MODULE_22__demo_view_emptydemo__["a" /* EmptyDemo */],
            __WEBPACK_IMPORTED_MODULE_24__demo_view_filedemo__["a" /* FileDemo */],
            __WEBPACK_IMPORTED_MODULE_25__demo_view_utilsdemo__["a" /* UtilsDemo */],
            __WEBPACK_IMPORTED_MODULE_26__demo_view_documentation__["a" /* Documentation */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["HashLocationStrategy"] },
            __WEBPACK_IMPORTED_MODULE_27__demo_service_carservice__["a" /* CarService */], __WEBPACK_IMPORTED_MODULE_28__demo_service_countryservice__["a" /* CountryService */], __WEBPACK_IMPORTED_MODULE_29__demo_service_eventservice__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_30__demo_service_nodeservice__["a" /* NodeService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_view_dashboarddemo__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_view_sampledemo__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_view_formsdemo__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demo_view_datademo__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__demo_view_panelsdemo__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demo_view_overlaysdemo__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__demo_view_menusdemo__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__demo_view_messagesdemo__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__demo_view_miscdemo__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__demo_view_emptydemo__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__demo_view_chartsdemo__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__demo_view_filedemo__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__demo_view_utilsdemo__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__demo_view_documentation__ = __webpack_require__(107);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__demo_view_dashboarddemo__["a" /* DashboardDemo */] },
    { path: 'sample', component: __WEBPACK_IMPORTED_MODULE_2__demo_view_sampledemo__["a" /* SampleDemo */] },
    { path: 'forms', component: __WEBPACK_IMPORTED_MODULE_3__demo_view_formsdemo__["a" /* FormsDemo */] },
    { path: 'data', component: __WEBPACK_IMPORTED_MODULE_4__demo_view_datademo__["a" /* DataDemo */] },
    { path: 'panels', component: __WEBPACK_IMPORTED_MODULE_5__demo_view_panelsdemo__["a" /* PanelsDemo */] },
    { path: 'overlays', component: __WEBPACK_IMPORTED_MODULE_6__demo_view_overlaysdemo__["a" /* OverlaysDemo */] },
    { path: 'menus', component: __WEBPACK_IMPORTED_MODULE_7__demo_view_menusdemo__["a" /* MenusDemo */] },
    { path: 'messages', component: __WEBPACK_IMPORTED_MODULE_8__demo_view_messagesdemo__["a" /* MessagesDemo */] },
    { path: 'misc', component: __WEBPACK_IMPORTED_MODULE_9__demo_view_miscdemo__["a" /* MiscDemo */] },
    { path: 'empty', component: __WEBPACK_IMPORTED_MODULE_10__demo_view_emptydemo__["a" /* EmptyDemo */] },
    { path: 'charts', component: __WEBPACK_IMPORTED_MODULE_11__demo_view_chartsdemo__["a" /* ChartsDemo */] },
    { path: 'file', component: __WEBPACK_IMPORTED_MODULE_12__demo_view_filedemo__["a" /* FileDemo */] },
    { path: 'utils', component: __WEBPACK_IMPORTED_MODULE_13__demo_view_utilsdemo__["a" /* UtilsDemo */] },
    { path: 'documentation', component: __WEBPACK_IMPORTED_MODULE_14__demo_view_documentation__["a" /* Documentation */] }
];
var AppRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppTopBar; });
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


var AppTopBar = (function () {
    function AppTopBar(app) {
        this.app = app;
    }
    return AppTopBar;
}());
AppTopBar = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-topbar',
        template: __webpack_require__(435)
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]; }))),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object])
], AppTopBar);

var _a;
//# sourceMappingURL=app.topbar.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 433:
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-wrapper\" \n    [ngClass]=\"{'layout-menu-slim': slimMenu, \n                'layout-menu-overlay': overlayMenu, \n                'layout-menu-static': staticMenu,\n                'layout-menu-static-inactive': staticMenuInactive,\n                'layout-menu-overlay-active': overlayMenuActive,\n                'layout-menu-active': mobileMenuActive}\">\n    \n    <app-topbar></app-topbar>\n\n    <div class=\"layout-main\">\n        <app-menu [reset]=\"resetSlim\"></app-menu>\n        \n        <div class=\"layout-content\">\n            <router-outlet></router-outlet>\n        </div>\n        \n        <app-footer></app-footer>\n    </div>     \n    \n    <div class=\"layout-mask\" *ngIf=\"mobileMenuActive\"></div>   \n</div>"

/***/ }),

/***/ 434:
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-menu-wrapper\" [class.layout-menu-dark]=\"app.darkMenu\" (click)=app.onMenuClick($event)>\n    <div class=\"nano\">\n        <div class=\"nano-content sidebar-scroll-content\">\n            <div class=\"layout-menu-container\">\n                <div class=\"mobile-search\">\n                    <i class=\"fa fa-fw fa-search topbar-search-icon\"></i>\n                    <input type=\"text\" class=\"topbar-search\" placeholder=\"Type your search here\"/>\n                </div>\n                <ul app-submenu [item]=\"model\" root=\"true\" class=\"layout-menu\" visible=\"true\" [reset]=\"reset\"></ul>\n            </div>\n        </div>\n    </div>\n</div>\n                    \n                "

/***/ }),

/***/ 435:
/***/ (function(module, exports) {

module.exports = "<div class=\"topbar\">\n    <a routerLink=\"/\" class=\"topbar-logo\">\n        <img [attr.src]=\"app.layout === 'default' ? 'assets/layout/images/logo-black.png' : 'assets/layout/images/logo-white.png'\" style=\"border: 0 none\">\n    </a>\n    \n    <a href=\"#\" id=\"menu-button\" (click)=\"app.onMenuButtonClick($event)\">\n        <i class=\"fa fa-bars\"></i>\n    </a>\n    \n    <a href=\"#\" id=\"user-display\" (click)=\"app.onTopbarMenuButtonClick($event)\">\n        <span class=\"username\">Emma Davis</span>\n        <img src=\"assets/layout/images/avatar.png\" style=\"border: 0px;\">\n        <i class=\"fa fa-angle-down\"></i>\n    </a>\n    \n    <label for=\"topbar-search\">\n        <i class=\"fa fa-search topbar-search-icon\"></i>\n    </label>\n    <input type=\"text\" class=\"topbar-search\" placeholder=\"Type your search here\" id=\"topbar-search\" />\n\n    <ul id=\"topbar-menu\" class=\"fadeInDown\" [ngClass]=\"{'topbar-menu-visible': app.topbarMenuActive}\" (click)=\"app.onTopbarMenuClick($event)\">\n        <li #profile [ngClass]=\"{'menuitem-active':app.activeTopbarItem === profile}\" (click)=\"app.onTopbarItemClick($event, profile)\">\n            <a href=\"#\">\n                <i class=\"topbar-icon fa fa-fw fa-user\"></i>\n                <span class=\"topbar-item-name\">Profile</span>\n            </a>\n            <ul>\n                <li role=\"menuitem\">\n                    <a href=\"#\">\n                        <i class=\"fa fa-fw fa-user\"></i>\n                        <span>Profile</span>\n                    </a>\n                </li>\n                <li role=\"menuitem\">\n                    <a href=\"#\">\n                        <i class=\"fa fa-fw fa-user-secret\"></i>\n                        <span>Privacy</span>\n                    </a>\n                </li>\n                <li role=\"menuitem\">\n                    <a href=\"#\">\n                        <i class=\"fa fa-fw fa-cog\"></i>\n                        <span>Settings</span>\n                    </a>\n                </li>\n                <li role=\"menuitem\">\n                    <a href=\"#\">\n                        <i class=\"fa fa-fw fa-sign-out\"></i>\n                        <span>Logout</span>\n                    </a>\n                </li>\n            </ul>\n        </li>\n        <li #settings [ngClass]=\"{'menuitem-active':app.activeTopbarItem === settings}\" (click)=\"app.onTopbarItemClick($event, settings)\">\n            <a href=\"#\">\n                <i class=\"topbar-icon fa fa-fw fa-cog\"></i>\n                <span class=\"topbar-item-name\">Settings</span>\n            </a>\n            <ul>\n                <li role=\"menuitem\">\n                    <a href=\"#\">\n                        <i class=\"fa fa-fw fa-paint-brush\"></i>\n                        <span>Change Theme</span>\n                        <span class=\"topbar-badge\">1</span>\n                    </a>\n                </li>\n                <li role=\"menuitem\">\n                    <a href=\"#\">\n                        <i class=\"fa fa-fw fa-star-o\"></i>\n                        <span>Favorites</span>\n                    </a>\n                </li>\n                <li role=\"menuitem\">\n                    <a href=\"#\">\n                        <i class=\"fa fa-fw fa-lock\"></i>\n                        <span>Lock Screen</span>\n                        <span class=\"topbar-badge\">3</span>\n                    </a>\n                </li>\n                <li role=\"menuitem\">\n                    <a href=\"#\">\n                        <i class=\"fa fa-fw fa-picture-o\"></i>\n                        <span>Wallpaper</span>\n                    </a>\n                </li>\n            </ul>\n        </li>\n        <li #messages [ngClass]=\"{'menuitem-active':app.activeTopbarItem === messages}\" (click)=\"app.onTopbarItemClick($event, messages)\">\n            <a href=\"#\">\n                <i class=\"topbar-icon material-icons animated swing fa fa-fw fa-envelope-o\"></i>\n                <span class=\"topbar-item-name\">Messages</span>\n                <span class=\"topbar-badge animated rubberBand\">4</span>\n            </a>\n            <ul>\n                <li role=\"menuitem\">\n                    <a href=\"#\" class=\"topbar-message\">\n                        <img src=\"assets/layout/images/avatar1.png\" width=\"35\">\n                        <span>Give me a call</span>\n                    </a>\n                </li>\n                <li role=\"menuitem\">\n                    <a href=\"#\" class=\"topbar-message\">\n                        <img src=\"assets/layout/images/avatar2.png\" width=\"35\">\n                        <span>Reports attached</span>\n                    </a>\n                </li>\n                <li role=\"menuitem\">\n                    <a href=\"#\" class=\"topbar-message\">\n                        <img src=\"assets/layout/images/avatar3.png\" width=\"35\">\n                        <span>About your invoice</span>\n                    </a>\n                </li>\n                <li role=\"menuitem\">\n                    <a href=\"#\" class=\"topbar-message\">\n                        <img src=\"assets/layout/images/avatar2.png\" width=\"35\">\n                        <span>Meeting today</span>\n                    </a>\n                </li>\n                <li role=\"menuitem\">\n                    <a href=\"#\" class=\"topbar-message\">\n                        <img src=\"assets/layout/images/avatar4.png\" width=\"35\">\n                        <span>Out of office</span>\n                    </a>\n                </li>\n            </ul>\n        </li>\n        <li #notifications [ngClass]=\"{'menuitem-active':app.activeTopbarItem === notifications}\" (click)=\"app.onTopbarItemClick($event, notifications)\">\n            <a href=\"#\">\n                <i class=\"topbar-icon fa fa-fw fa-bell-o\"></i>\n                <span class=\"topbar-item-name\">Notifications</span>\n                <span class=\"topbar-badge animated rubberBand\">2</span>\n            </a>\n            <ul>\n                <li role=\"menuitem\">\n                    <a href=\"#\">\n                        <i class=\"fa fa-fw fa-tasks\"></i>\n                        <span>Pending tasks</span>\n                    </a>\n                </li>\n                <li role=\"menuitem\">\n                    <a href=\"#\">\n                        <i class=\"fa fa-fw fa-calendar-check-o\"></i>\n                        <span>Meeting today</span>\n                    </a>\n                </li>\n                <li role=\"menuitem\">\n                    <a href=\"#\">\n                        <i class=\"fa fa-fw fa-download\"></i>\n                        <span>Download</span>\n                    </a>\n                </li>\n                <li role=\"menuitem\">\n                    <a href=\"#\">\n                        <i class=\"fa fa-fw fa-plane\"></i>\n                        <span>Book flight</span>\n                    </a>\n                </li>\n            </ul>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ 436:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-12 ui-lg-6\">\n        <div class=\"card\">\n            <h1 class=\"centerText\">Linear Chart</h1>\n            <p-chart type=\"line\" [data]=\"lineData\"></p-chart>\n        </div>\n        \n        <div class=\"card\">\n            <h1 class=\"centerText\">Pie Chart</h1>\n            <p-chart type=\"pie\" [data]=\"pieData\"></p-chart>\n        </div>\n        \n        <div class=\"card\">\n            <h1 class=\"centerText\">Polar Area Chart</h1>\n            <p-chart type=\"polarArea\" [data]=\"polarData\"></p-chart>\n        </div>\n    </div>\n    <div class=\"ui-g-12 ui-lg-6\">\n        <div class=\"card\">\n            <h1 class=\"centerText\">Bar Chart</h1>\n            <p-chart type=\"bar\" [data]=\"barData\"></p-chart>\n        </div>\n        \n        <div class=\"card\">\n            <h1 class=\"centerText\">Doughnut Chart</h1>\n            <p-chart type=\"doughnut\" [data]=\"pieData\"></p-chart>\n        </div>\n        \n        <div class=\"card\">\n            <h1 class=\"centerText\">Radar Chart</h1>\n            <p-chart type=\"radar\" [data]=\"radarData\"></p-chart>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 437:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g dashboard\">\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n        <div class=\"ui-g card overview-box overview-box-1 no-gutter\">\n            <div class=\"overview-box-title\">Unread Messages</div>\n            <div class=\"overview-box-details\">\n                <i class=\"fa fa-inbox overview-box-details-icon\"></i>\n                <span class=\"overview-box-details-count\">150</span>\n            </div>\n            <div class=\"overview-box-stats\" style=\"color:#3fb839\">+%50</div>\n        </div>\n    </div>\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n        <div class=\"ui-g card overview-box overview-box-2 no-gutter\">\n            <div class=\"overview-box-title\">Check-Ins</div>\n            <div class=\"overview-box-details\">\n                <i class=\"fa fa-map-pin overview-box-details-icon\"></i>\n                <span class=\"overview-box-details-count\">532</span>\n            </div>\n            <div class=\"overview-box-stats\" style=\"color:#3fb839\">+%75</div>\n        </div>\n    </div>\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n        <div class=\"ui-g card overview-box overview-box-3 no-gutter\">\n            <div class=\"overview-box-title\">Files Synced</div>\n            <div class=\"overview-box-details\">\n                <i class=\"fa fa-folder overview-box-details-icon\"></i>\n                <span class=\"overview-box-details-count\">25</span>\n            </div>\n            <div class=\"overview-box-stats\" style=\"color:#3fb839\">+%50</div>\n        </div>\n    </div>\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n        <div class=\"ui-g card overview-box overview-box-4 no-gutter\">\n            <div class=\"overview-box-title\">User Online</div>\n            <div class=\"overview-box-details\">\n                <i class=\"fa fa-user overview-box-details-icon\"></i>\n                <span class=\"overview-box-details-count\">156</span>\n            </div>\n            <div class=\"overview-box-stats\" style=\"color:#e17576\">-%15</div>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12 ui-lg-6 global-sales\">\n        <p-panel header=\"GLOBAL SALES\">\n            <div class=\"globe\">\n                <img src=\"assets/layout/images/dashboard/globe.png\" width=\"45\">\n            </div>\n            \n            <span class=\"sale-interval\">20 March - 27 March</span>\n            <button pButton type=\"button\" label=\"Refresh\" icon=\"fa fa-refresh\" class=\"raised-btn\"></button>\n            \n            <table>\n                <tbody>\n                    <tr>\n                        <td><img src=\"assets/layout/images/dashboard/flag-brazil.png\" width=\"45\"></td>\n                        <td>BRAZIL</td>\n                        <td>4234</td>\n                        <td>35%</td>\n                        <td><i class=\"fa fa-arrow-up\"></i></td>\n                    </tr>\n                    <tr>\n                        <td><img src=\"assets/layout/images/dashboard/flag-china.png\" width=\"45\"></td>\n                        <td>CHINA</td>\n                        <td>3214</td>\n                        <td>25%</td>\n                        <td><i class=\"fa fa-arrow-up\"></i></td>\n                    </tr>\n                    <tr>\n                        <td><img src=\"assets/layout/images/dashboard/flag-belgium.png\" width=\"45\"></td>\n                        <td>BELGIUM</td>\n                        <td>2842</td>\n                        <td>28%</td>\n                        <td><i class=\"fa fa-arrow-down\"></i></td>\n                    </tr>\n                    <tr>\n                        <td><img src=\"assets/layout/images/dashboard/flag-france.png\" width=\"45\"></td>\n                        <td>FRANCE</td>\n                        <td>1942</td>\n                        <td>15%</td>\n                        <td><i class=\"fa fa-arrow-up\"></i></td>\n                    </tr>\n                </tbody>\n            </table>\n        </p-panel>\n    </div>\n    \n    <div class=\"ui-g-12 ui-lg-6 stats\">\n        <p-panel header=\"STATISTICS\">\n            <div class=\"ui-g\">\n                <div class=\"ui-g-12 ui-lg-6 knob-container\">\n                    <div class=\"knob\">75</div>\n                </div>\n                <div class=\"ui-g-12 ui-lg-6\">\n                    <ul>\n                        <li>\n                            <span class=\"statsbar-text\">IDLE</span>\n                            <div class=\"statsbar\">\n                                <div class=\"statsbar-value\" style=\"width: 25%\"></div>\n                            </div>\n                        </li>\n                        <li>\n                            <span class=\"statsbar-text\">READING</span>\n                            <div class=\"statsbar\">\n                                <div class=\"statsbar-value\" style=\"width: 35%\"></div>\n                            </div>\n                        </li>\n                        <li>\n                            <span class=\"statsbar-text\">RESPONDING</span>\n                            <div class=\"statsbar\">\n                                <div class=\"statsbar-value\" style=\"width: 50%\"></div>\n                            </div>\n                        </li>\n                        <li>\n                            <span class=\"statsbar-text\">WAITING</span>\n                            <div class=\"statsbar\">\n                                <div class=\"statsbar-value\" style=\"width: 72%\"></div>\n                            </div>\n                        </li>\n                        <li>\n                            <span class=\"statsbar-text\">COMPLETED</span>\n                            <div class=\"statsbar\">\n                                <div class=\"statsbar-value\" style=\"width: 15%\"></div>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </p-panel>\n    </div>\n    \n    <div class=\"ui-g-12 ui-md-6 ui-lg-4 task-list\">\n        <p-panel header=\"TASKS\" [style]=\"{'min-height':'360px'}\">\n            <ul>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">Sales Reports</span>\n                    <i class=\"fa fa-briefcase\"></i>\n                </li>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">Pay Invoices</span>\n                    <i class=\"fa fa-credit-card\"></i>\n                </li>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">Dinner with Tony</span>\n                    <i class=\"fa fa-cutlery\"></i>\n                </li>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">Client Meeting</span>\n                    <i class=\"fa fa-user\"></i>\n                </li>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">New Theme</span>\n                    <i class=\"fa fa-paint-brush\"></i>\n                </li>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">Flight Ticket</span>\n                    <i class=\"fa fa-fighter-jet\"></i>\n                </li>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">Generate Charts</span>\n                    <i class=\"fa fa-area-chart\"></i>\n                </li>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">Call Client</span>\n                    <i class=\"fa fa-phone\"></i>\n                </li>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">Share location</span>\n                    <i class=\"fa fa-map-marker\"></i>\n                </li>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">Create Feed</span>\n                    <i class=\"fa fa-rss\"></i>\n                </li>\n            </ul>\n        </p-panel>\n    </div>\n    <div class=\"ui-g-12 ui-md-6 ui-lg-4 ui-fluid contact-form\">\n        <p-panel header=\"CONTACT US\" [style]=\"{'min-height':'360px'}\">\n            <div class=\"ui-g\">\n                <div class=\"ui-g-12\">\n                    <p-dropdown [options]=\"cities\" [autoWidth]=\"false\" [(ngModel)]=\"selectedCity\"></p-dropdown>\n                </div>\n                <div class=\"ui-g-12\">\n                    <input type=\"text\" pInputText placeholder=\"Name\" >\n                </div>\n                <div class=\"ui-g-12\">\n                    <input type=\"text\" pInputText placeholder=\"Age\" >\n                </div>\n                <div class=\"ui-g-12\">\n                    <input type=\"text\" pInputText placeholder=\"Email\">\n                </div>\n                <div class=\"ui-g-12\">\n                    <input type=\"text\" pInputText placeholder=\"Location\">\n                </div>\n                <div class=\"ui-g-12\">\n                    <textarea type=\"text\" pInputTextarea placeholder=\"Message\"></textarea>\n                </div>\n                <div class=\"ui-g-12\">\n                    <button type=\"button\" label=\"Send\" icon=\"fa-send\" pButton></button>\n                </div>\n            </div>\n        </p-panel>\n    </div>\n    <div class=\"ui-g-12 ui-lg-4 contacts\">\n        <p-panel header=\"CONTACTS\" [style]=\"{'min-height':'360px'}\">\n            <ul>\n                <li class=\"clearfix\">\n                    <img src=\"assets/layout/images/avatar.png\" width=\"45\">\n                    <div class=\"contact-info\">\n                        <span class=\"name\">Samantha Owens (me)</span>\n                        <span class=\"location\">jane@pf-paradise.com</span>\n                    </div>\n                    <div class=\"contact-actions\">\n                        <span class=\"connection-status online\">online</span>\n                        <i class=\"fa fa-paper-plane-o\"></i>\n                        <i class=\"fa fa-phone\"></i>\n                    </div>\n                </li>\n                <li class=\"clearfix\">\n                    <img src=\"assets/layout/images/avatar1.png\" width=\"45\">\n                    <div class=\"contact-info\">\n                        <span class=\"name\">Joshua Williams</span>\n                        <span class=\"location\">joshua@pf-paradise.com</span>\n                    </div>\n                    <div class=\"contact-actions\">\n                        <span class=\"connection-status online\">online</span>\n                        <i class=\"fa fa-paper-plane-o\"></i>\n                        <i class=\"fa fa-phone\"></i>\n                    </div>\n                </li>\n                <li class=\"clearfix\">\n                    <img src=\"assets/layout/images/avatar2.png\" width=\"45\">\n                    <div class=\"contact-info\">\n                        <span class=\"name\">Emily Clark</span>\n                        <span class=\"location\">emily@pf-paradise.com</span>\n                    </div>\n                    <div class=\"contact-actions\">\n                        <span class=\"connection-status offline\">offline</span>\n                        <i class=\"fa fa-paper-plane-o\"></i>\n                        <i class=\"fa fa-phone\"></i>\n                    </div>\n                </li>\n                <li class=\"clearfix\">\n                    <img src=\"assets/layout/images/avatar3.png\" width=\"45\">\n                    <div class=\"contact-info\">\n                        <span class=\"name\">Tim Johnson</span>\n                        <span class=\"location\">tim@pf-paradise.com</span>\n                    </div>                                \n                    <div class=\"contact-actions\">\n                        <span class=\"connection-status online\">online</span>\n                        <i class=\"fa fa-paper-plane-o\"></i>\n                        <i class=\"fa fa-phone\"></i>\n                    </div>\n                </li>\n                <li class=\"clearfix\">\n                    <img src=\"assets/layout/images/avatar4.png\" width=\"45\">\n                    <div class=\"contact-info\">\n                        <span class=\"name\">David Stark</span>\n                        <span class=\"location\">kelly@pf-paradise.com</span>\n                    </div>\n                    <div class=\"contact-actions\">\n                        <span class=\"connection-status offline\">offline</span>\n                        <i class=\"fa fa-paper-plane-o\"></i>\n                        <i class=\"fa fa-phone\"></i>\n                    </div>\n                </li>\n            </ul>\n        </p-panel>\n    </div>\n    \n    <div class=\"ui-g-12 ui-lg-8 chat\">\n        <p-panel header=\"CHAT\">\n            <ul>\n                <li class=\"clearfix message-from\">\n                    <img src=\"assets/layout/images/avatar2.png\">\n                    <span>Retro occupy organic, stumptown shabby chic pour-over roof party DIY normcore.</span>\n                </li>\n                <li class=\"clearfix message-own\">\n                    <img src=\"assets/layout/images/avatar.png\">\n                    <span>Actually artisan organic occupy, Wes Anderson ugh whatever pour-over gastropub selvage.</span>\n                </li>\n                <li class=\"clearfix message-from\">\n                    <img src=\"assets/layout/images/avatar2.png\">\n                    <span>Chillwave craft beer tote bag stumptown quinoa hashtag.</span>\n                </li>\n                <li class=\"clearfix message-own\">\n                    <img src=\"assets/layout/images/avatar.png\">\n                    <span>Dreamcatcher locavore iPhone chillwave, occupy trust fund slow-carb distillery art party narwhal.</span>\n                </li>\n                <li class=\"clearfix message-own\">\n                    <span>Sed ut perspiciatis unde omnis iste natus.</span>\n                </li>\n                <li class=\"clearfix message-from\">\n                    <img src=\"assets/layout/images/avatar2.png\">\n                    <span>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.</span>\n                </li>\n                <li class=\"clearfix message-own\">\n                    <img src=\"assets/layout/images/avatar.png\">\n                    <span>At vero eos et accusamus.</span>\n                </li>\n            </ul>\n            <div class=\"new-message\">\n                <div class=\"message-attachment\">\n                    <i class=\"fa fa-paperclip\"></i>\n                </div>\n                <div class=\"message-input\">\n                    <input type=\"text\" placeholder=\"Write a message\" class=\"ui-inputtext\" />\n                </div>\n            </div>\n        </p-panel>\n    </div>\n    <div class=\"ui-g-12 ui-lg-4\">\n        <div class=\"user-card\">\n            <div class=\"user-card-header\">\n                <img src=\"assets/layout/images/dashboard/user-card-header.png\">\n            </div>\n            <div class=\"user-card-content\">\n                <img src=\"assets/layout/images/avatar.png\">\n                <button pButton type=\"button\" icon=\"fa-refresh\" class=\"secondary\" (click)=\"menu.toggle($event)\"></button>                \n                <p-menu #menu popup=\"popup\" [model]=\"items\"></p-menu>\n                \n                <div class=\"user-card-name\">\n                    <span>Emma Davis</span>\n                </div>\n                \n                <div class=\"user-detail\">\n                   <ul>\n                     <li class=\"clearfix\">\n                         <i class=\"fa fa-tasks fa-fw\"></i>\n                         <span class=\"project-title\">Tasks</span>\n                         <span class=\"project-detail\">3 open</span>\n                         <div class=\"project-progressbar\">\n                             <div class=\"project-progressbar-value\" style=\"width: 50%\"></div>\n                         </div>\n                     </li>\n                     <li class=\"clearfix\">\n                         <i class=\"fa fa-usd fa-fw\"></i>\n                         <span class=\"project-title\">Revenue</span>\n                         <span class=\"project-detail\">+20%</span>\n                         <div class=\"project-progressbar\">\n                             <div class=\"project-progressbar-value\" style=\"width: 20%\"></div>\n                         </div>\n                     </li>\n                     <li class=\"clearfix\">\n                         <i class=\"fa fa-credit-card fa-fw\"></i>\n                         <span class=\"project-title\">Payments</span>\n                         <span class=\"project-detail\">24 new</span>\n                         <div class=\"project-progressbar\">\n                             <div class=\"project-progressbar-value\" style=\"width: 65%\"></div>\n                         </div>                                 \n                     </li>\n                     <li class=\"clearfix\">\n                         <i class=\"fa fa-users fa-fw\"></i>\n                         <span class=\"project-title\">Clients</span>\n                         <span class=\"project-detail\">+80%</span>   \n                         <div class=\"project-progressbar\">\n                             <div class=\"project-progressbar-value\" style=\"width: 80%\"></div>\n                         </div>                              \n                     </li>\n                   </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12 ui-lg-8\">\n        <div class=\"card\">\n            <p-dataTable [value]=\"cars\" [style]=\"{'margin-bottom':'20px'}\" selectionMode=\"single\">\n                <p-header>Recent Sales</p-header>\n                <p-column field=\"vin\" header=\"Vin\" sortable=\"true\"></p-column>\n                <p-column field=\"year\" header=\"Year\" sortable=\"true\"></p-column>\n                <p-column field=\"brand\" header=\"Brand\" sortable=\"true\"></p-column>\n                <p-column field=\"color\" header=\"Color\" sortable=\"true\"></p-column>\n            </p-dataTable>\n            \n            <p-panel header=\"Sales Graph\">\n                <div style=\"overflow:auto\">\n                    <p-chart type=\"line\" [data]=\"chartData\" responsive=\"true\"></p-chart>\n                </div>\n            </p-panel>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12 ui-lg-4\">\n        <div class=\"card timeline ui-fluid\">\n            <div class=\"ui-g\">\n                <div class=\"ui-g-3\">\n                    <span class=\"event-time\">just now</span>\n                    <i class=\"fa fa-map-signs\" style=\"color:#3984b8\"></i>\n                </div>\n                <div class=\"ui-g-9\">\n                    <span class=\"event-owner\" style=\"color:#3984b8\">Katherine May</span>\n                    <span class=\"event-text\">Lorem ipsun dolor amet</span>\n                    <div class=\"event-content\">\n                        <img src=\"assets/layout/images/dashboard/bridge.png\" width=\"100\"/>\n                    </div>\n                </div>\n                \n                <div class=\"ui-g-3\">\n                    <span class=\"event-time\">12h ago</span>\n                    <i class=\"fa fa-star\" style=\"color:#f6ac2b\"></i>\n                </div>\n                <div class=\"ui-g-9\">\n                    <span class=\"event-owner\" style=\"color:#f6ac2b\">Brandon Santos</span>\n                    <span class=\"event-text\">Ab nobis, magnam sunt eum. Laudantium, repudiandae, similique!.</span>\n                </div>\n                \n                <div class=\"ui-g-3\">\n                    <span class=\"event-time\">15h ago</span>\n                    <i class=\"fa fa-comment\" style=\"color:#7e8dcd\"></i>\n                </div>\n                <div class=\"ui-g-9\">\n                    <span class=\"event-owner\" style=\"color:#7e8dcd\">Stephan Ward</span>\n                    <span class=\"event-text\">Omnis veniam quibusdam ratione est repellat qui nam quisquam ab mollitia dolores ullam voluptates, similique, dignissimos.</span>\n                </div>\n                \n                <div class=\"ui-g-3\">\n                    <span class=\"event-time\">2d ago</span>\n                    <i class=\"fa fa-map\" style=\"color:#e175a0\"></i>\n                </div>\n                <div class=\"ui-g-9\">\n                    <span class=\"event-owner\" style=\"color:#e175a0\">Jason Smith</span>\n                    <span class=\"event-text\">Laudantium, repudiandae, similique!</span>\n                    <div class=\"event-content\">\n                        <img src=\"assets/layout/images/dashboard/map.png\" />\n                    </div>\n                </div>\n                \n                <div class=\"ui-g-3\">\n                    <span class=\"event-time\">1w ago</span>\n                    <i class=\"fa fa-heart\" style=\"color:#39b8b6\"></i>\n                </div>\n                <div class=\"ui-g-9\">\n                    <span class=\"event-owner\">Kevin Cox</span>\n                    <span class=\"event-text\">Quibusdam ratione est repellat qui nam quisquam veniam quibusdam ratione.</span>\n                </div>\n                \n                <div class=\"ui-g-3\">\n                    <span class=\"event-time\">2w ago</span>\n                    <i class=\"fa fa-history\" style=\"color:#3eb839\"></i>\n                </div>\n                <div class=\"ui-g-9\">\n                    <span class=\"event-owner\" style=\"color:#3eb839\">Walter White</span>\n                    <span class=\"event-text\">I am the one who knocks!</span>\n                </div>\n                \n                <div class=\"ui-g-12\">\n                    <button type=\"button\" pButton label=\"Refresh\" icon=\"ui-icon-refresh\" class=\"rounded-btn raised-btn\"></button>\n                </div>\n            </div>\n        </div>\n    </div>\n                \n    <div class=\"ui-g-12\">\n        <p-panel header=\"CALENDAR\"  [style]=\"{'height':'100%'}\">\n            <p-schedule [events]=\"events\" defaultDate=\"2016-01-12\"></p-schedule>\n        </p-panel>\n    </div>\n    \n</div>"

/***/ }),

/***/ 438:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>DataTable</h1>\n            <p-dataTable [value]=\"cars1\" selectionMode=\"single\" [(selection)]=\"selectedCar\" \n                [paginator]=\"true\" [rows]=\"10\" [responsive]=\"true\">\n                <p-header>List of Cars</p-header>\n                <p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"></p-column>\n                <p-column field=\"year\" header=\"Year\" [sortable]=\"true\"></p-column>\n                <p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"></p-column>\n                <p-column field=\"color\" header=\"Color\" [sortable]=\"true\"></p-column>\n            </p-dataTable>\n        </div>\n    </div>\n    <div class=\"ui-g-12\">\n        <!-- Left Side -->\n        <div class=\"card card-w-title\">\n            <h1>DataGrid</h1>\n            <p-dataGrid [value]=\"cars2\" [paginator]=\"true\" [rows]=\"9\">\n                <p-header>\n                    Grid of Cars\n                </p-header>\n                <ng-template let-car pTemplate=\"item\">\n                    <div style=\"padding:3px\" class=\"ui-g-12 ui-md-4\">\n                        <p-panel [header]=\"car.vin\" [style]=\"{'text-align':'center'}\">\n                            <img src=\"assets/demo/images/car/{{car.brand}}.gif\">\n                            <div class=\"car-detail\">{{car.year}} - {{car.color}}</div>\n                        </p-panel>\n                    </div>\n                </ng-template>\n            </p-dataGrid>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12 ui-md-8\">\n        <div class=\"card card-w-title\">\n            <h1>PickList</h1>\n            <p-pickList [source]=\"sourceCars\" [target]=\"targetCars\" sourceHeader=\"Available\" targetHeader=\"Selected\" [responsive]=\"true\"\n                [sourceStyle]=\"{'height':'250px'}\" [targetStyle]=\"{'height':'250px'}\">\n                <ng-template let-car pTemplate=\"item\">\n                    <div class=\"ui-helper-clearfix\">\n                        <img src=\"assets/demo/images/car/{{car.brand}}.gif\" style=\"display:inline-block;margin:2px 0 2px 2px\"/>\n                        <div style=\"font-size:16px;float:right;margin:15px 5px 0 0\">{{car.brand}}</div>\n                    </div>\n                </ng-template>\n            </p-pickList>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12 ui-md-4\">\n        <div class=\"card card-w-title\">\n            <h1>OrderList</h1>\n            <p-orderList [value]=\"orderListCars\" [listStyle]=\"{'height':'250px'}\" [responsive]=\"true\" header=\"OrderList\">\n                <ng-template let-car pTemplate=\"item\">\n                    <div class=\"ui-helper-clearfix\">\n                        <img src=\"assets/demo/images/car/{{car.brand}}.gif\" style=\"display:inline-block;margin:2px 0 2px 2px\" />\n                        <div style=\"font-size:16px;float:right;margin:15px 5px 0 0\">{{car.brand}}</div>\n                    </div>\n                </ng-template>\n            </p-orderList>\n        </div>\n    </div>\n                                \n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>DataList - Paginator</h1>\n            <p-dataList [value]=\"cars3\" [paginator]=\"true\" [rows]=\"5\" styleClass=\"cars-datalist\">\n                <p-header>\n                    List of Cars\n                </p-header>\n                <ng-template let-car pTemplate=\"item\">\n                    <div style=\"border-bottom: 1px solid #eaeaea\" class=\"clearfix car-item\">\n                        <img src=\"assets/demo/images/car/{{car.brand}}.gif\" width=\"48\" style=\"display:inline-block;margin:24px;vertical-align:middle\"/>\n                        <div class=\"car-details\" style=\"display:inline-block;vertical-align:middle\">\n                            <p>{{car.brand}}</p>\n                            <p style=\"color:#757575\">{{car.year}} - {{car.color}}</p>\n                        </div>\n                        <button type=\"button\" pButton icon=\"fa-search\" style=\"margin:24px 24px 0 0;float:right\"></button>\n                    </div>\n                </ng-template>\n            </p-dataList>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\" style=\"overflow:auto\">\n            <h1>Organization Chart</h1>\n            <p-organizationChart [value]=\"data\" selectionMode=\"single\" [(selection)]=\"selectedNode\"></p-organizationChart>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Tree</h1>\n            <p-tree [value]=\"files1\" selectionMode=\"single\" [(selection)]=\"selectedNode1\"></p-tree>\n        </div>\n    </div>\n            \n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>TreeTable</h1>\n            <p-treeTable [value]=\"files2\" selectionMode=\"single\" [(selection)]=\"selectedNode2\">\n                <p-header>Basic</p-header>\n                <p-column field=\"name\" header=\"Name\"></p-column>\n                <p-column field=\"size\" header=\"Size\"></p-column>\n                <p-column field=\"type\" header=\"Type\"></p-column>\n            </p-treeTable>\n        </div>\n    </div>\n            \n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Carousel</h1>\n            <p-carousel headerText=\"Cars\" [value]=\"carouselCars\">\n                <ng-template let-car pTemplate=\"item\">\n                    <div class=\"ui-g\" style=\"text-align:center\">\n                        <div class=\"ui-g-12\" style=\"text-align:Center\">\n                            <img src=\"assets/demo/images/car/{{car.brand}}.gif\" />\n                        </div>\n                        <div class=\"ui-g-6\">Vin: </div>\n                        <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.vin}}</div>\n                        \n                        <div class=\"ui-g-6\">Year: </div>\n                        <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.year}}</div>\n                        \n                        <div class=\"ui-g-6\">Brand: </div>\n                        <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.brand}}</div>\n                        \n                        <div class=\"ui-g-6\">Color: </div>\n                        <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.color}}</div>\n                    </div>\n                </ng-template>\n            </p-carousel>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Schedule</h1>\n            <p-schedule [events]=\"events\" defaultDate=\"2016-01-12\" [header]=\"scheduleHeader\"></p-schedule>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <div class=\"card docs\"> \n            \n            <h1>Getting Started</h1>\n            <p>Paradise is a true native application template for Angular and is distributed as a CLI project. If you don't have CLI installed already run the following commands to set it up. In case\n            you have an application that do not use CLI, skip the <a href=\"#noncli\">Integration with an Existing Non CLI Application</a> part.</p>\n<pre>\nnpm install -g @angular-cli\n</pre>\n\n            <p>Once CLI is ready in your system, extract the contents of the Paradise zip file distribution, cd to the directory, \n            install the libraries from npm and then execute \"ng serve\" to run the application in your local environment at http://localhost:4200/.</p>\n<pre>\ncd Paradise\nnpm install\nng serve\n</pre>\n\n            <p>That's it, you may now start with the development of your application.</p>\n\n            <h1>Important CLI Commands</h1>\n            <p>Following commands are derived from CLI.</p>\n<pre>\nRun 'ng serve' for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.\n\nRun 'ng generate component component-name' to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.\n\nRun 'ng build' to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.\n\nRun 'ng test' to execute the unit tests via [Karma](https://karma-runner.github.io).\n\nRun 'ng e2e' to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).\n\nRun 'ng help' for more options.\n</pre>            \n                                    \n            <h1>Structure</h1>\n            <p>Paradise consists of 3 main parts; the application layout, layout resources and theme resources for PrimeNG components. <i>app.component.html</i> inside app folder is the html template for the base layout, \n                required resources for the layout are placed inside the <i>src/assets/layout</i> folder and similarly theme resources are inside <i>src/assets/theme</i> folder. \n            </p>\n\n            <h1>Template</h1>\n            <p>Main layout is the html view of the app.component.ts, it is divided into a couple of sections such as topbar, sidebar and footer. Here is the code for\n                the main template. The component class app.component.ts implements the logic such as opening menus and layout modes.\n            </p>\n<pre>\n&lt;div class=\"layout-wrapper\" \n    [ngClass]=\"&#123;'layout-menu-slim': slimMenu, \n                'layout-menu-overlay': overlayMenu, \n                'layout-menu-static': staticMenu,\n                'layout-menu-static-inactive': staticMenuInactive,\n                'layout-menu-overlay-active': overlayMenuActive,\n                'layout-menu-active': mobileMenuActive&#125;\"&gt;\n    \n    &lt;app-topbar&gt;&lt;/app-topbar&gt;\n\n    &lt;div class=\"layout-main\"&gt;\n        &lt;app-menu [reset]=\"resetSlim\"&gt;&lt;/app-menu&gt;\n        \n        &lt;div class=\"layout-content\"&gt;\n            &lt;router-outlet&gt;&lt;/router-outlet&gt;\n        &lt;/div&gt;\n        \n        &lt;app-footer&gt;&lt;/app-footer&gt;\n    &lt;/div&gt;     \n    \n    &lt;div class=\"layout-mask\" *ngIf=\"mobileMenuActive\"&gt;&lt;/div&gt;   \n&lt;/div&gt;\n</pre>\n\n            <h1>Menu</h1>\n            <p>Menu is a separate component defined in app.menu.component.ts file based on PrimeNG MenuModel API. In order to define the menuitems, \n            navigate to app.menu.component.ts and define your own model. Here is the menu component from the sample application. The helper\n            app-submenu component is also available in the same file.</p>\n<pre>\nimport &#123;Component,Input,OnInit,OnDestroy,EventEmitter,ViewChild,Inject,forwardRef&#125; from '@angular/core';\nimport &#123;trigger,state,style,transition,animate&#125; from '@angular/animations';\nimport &#123;Location&#125; from '@angular/common';\nimport &#123;Router&#125; from '@angular/router';\nimport &#123;MenuItem&#125; from 'primeng/primeng';\nimport &#123;AppComponent&#125; from './app.component';\n\n@Component(&#123;\n    selector: 'app-menu',\n    templateUrl: './app.menu.component.html'\n&#125;)\nexport class AppMenuComponent implements OnInit &#123;\n\n    @Input() reset: boolean;\n\n    model: any[];\n\n    constructor(@Inject(forwardRef(() => AppComponent)) public app:AppComponent) &#123;&#125;\n    \n    ngOnInit() &#123;\n        this.model = [\n            &#123;label: 'Dashboard', icon: 'fa fa-fw fa-home', routerLink: ['/']&#125;,\n            &#123;\n                label: 'Menu Modes', icon: 'fa fa-fw fa-bars',\n                items: [\n                    &#123;label: 'Static Menu', icon: 'fa fa-fw fa-bars',  command: () => this.app.changeToStaticMenu()&#125;,\n                    &#123;label: 'Overlay Menu', icon: 'fa fa-fw fa-bars',  command: () => this.app.changeToOverlayMenu()&#125;,\n                    &#123;label: 'Slim Menu', icon: 'fa fa-fw fa-bars',  command: () => this.app.changeToSlimMenu()&#125;,\n                    &#123;label: 'Light Menu', icon: 'fa fa-sun-o fa-fw',  command: () => this.app.darkMenu = false&#125;,\n                    &#123;label: 'Dark Menu', icon: 'fa fa-moon-o fa-fw',  command: () => this.app.darkMenu = true&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Layout Colors', icon: 'fa fa-fw fa-magic',\n                items: [\n                    &#123;\n                        label: 'Flat', \n                        icon: 'fa fa-fw fa-circle',\n                        items: [\n                            &#123;label: 'Default', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeLayout('default')&#125;&#125;,\n                            &#123;label: 'Blue', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeLayout('blue')&#125;&#125;,\n                            &#123;label: 'Green', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeLayout('green')&#125;&#125;,\n                            &#123;label: 'Turquoise', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeLayout('turquoise')&#125;&#125;,\n                            &#123;label: 'Purple', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeLayout('purple')&#125;&#125;,\n                            &#123;label: 'Orange', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeLayout('orange')&#125;&#125;,\n                            &#123;label: 'Deep Purple', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeLayout('deeppurple')&#125;&#125;,\n                            &#123;label: 'Lime', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeLayout('lime')&#125;&#125;,\n                        ]\n                    &#125;,\n                    &#123;\n                        label: 'Special', \n                        icon: 'fa fa-fw fa-fire',\n                        items: [\n                            &#123;label: 'Horizon', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeLayout('horizon')&#125;&#125;,\n                            &#123;label: 'Bliss', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeLayout('bliss')&#125;&#125;,\n                            &#123;label: 'Crimson', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeLayout('crimson')&#125;&#125;,\n                            &#123;label: 'Disco', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeLayout('disco')&#125;&#125;,\n                            &#123;label: 'Sunset', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeLayout('sunset')&#125;&#125;,\n                            &#123;label: 'Deep Sea', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeLayout('deepsea')&#125;&#125;,\n                            &#123;label: 'Opa', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeLayout('opa')&#125;&#125;,\n                            &#123;label: 'Cheer', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeLayout('cheer')&#125;&#125;,\n                            &#123;label: 'Smoke', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeLayout('smoke')&#125;&#125;,\n                        ]\n                    &#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Themes', icon: 'fa fa-fw fa-paint-brush',\n                items: [\n                    &#123;label: 'Blue', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeTheme('blue')&#125;&#125;,\n                    &#123;label: 'Green', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeTheme('green')&#125;&#125;,\n                    &#123;label: 'Turquoise', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeTheme('turquoise')&#125;&#125;,\n                    &#123;label: 'Purple', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeTheme('purple')&#125;&#125;,\n                    &#123;label: 'Orange', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeTheme('orange')&#125;&#125;,\n                    &#123;label: 'Deep Purple', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeTheme('deeppurple')&#125;&#125;,\n                    &#123;label: 'Lime', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeTheme('lime')&#125;&#125;,\n                    &#123;label: 'Light Blue', icon: 'fa fa-fw fa-paint-brush', command: (event) => &#123;this.changeTheme('lightblue')&#125;&#125;,\n                ]\n            &#125;,\n            &#123;\n                label: 'Components', icon: 'fa fa-fw fa-sitemap',\n                items: [\n                    &#123;label: 'Sample Page', icon: 'fa fa-fw fa-columns', routerLink: ['/sample']&#125;,\n                    &#123;label: 'Forms', icon: 'fa fa-fw fa-code', routerLink: ['/forms']&#125;,\n                    &#123;label: 'Data', icon: 'fa fa-fw fa-table', routerLink: ['/data']&#125;,\n                    &#123;label: 'Panels', icon: 'fa fa-fw fa-list-alt', routerLink: ['/panels']&#125;,\n                    &#123;label: 'Overlays', icon: 'fa fa-fw fa-square', routerLink: ['/overlays']&#125;,\n                    &#123;label: 'Menus', icon: 'fa fa-fw fa-minus-square-o', routerLink: ['/menus']&#125;,\n                    &#123;label: 'Messages', icon: 'fa fa-fw fa-circle-o-notch', routerLink: ['/messages']&#125;,\n                    &#123;label: 'Charts', icon: 'fa fa-fw fa-area-chart', routerLink: ['/charts']&#125;,\n                    &#123;label: 'File', icon: 'fa fa-fw fa-arrow-circle-o-up', routerLink: ['/file']&#125;,\n                    &#123;label: 'Misc', icon: 'fa fa-fw fa-user-secret', routerLink: ['/misc']&#125;\n                ]\n            &#125;,\n            &#123;label: 'Landing Page', icon: 'fa fa-fw fa-certificate', url: 'assets/pages/landing.html', target: '_blank'&#125;,\n            &#123;\n                label: 'Template Pages', icon: 'fa fa-fw fa-life-saver',\n                items: [\n                    &#123;label: 'Empty Page', icon: 'fa fa-fw fa-square-o', routerLink: ['/empty']&#125;,\n                    &#123;label: 'Login Page', icon: 'fa fa-fw fa-sign-in', url: 'assets/pages/login.html', target: '_blank'&#125;,\n                    &#123;label: 'Error Page', icon: 'fa fa-fw fa-exclamation-circle', url: 'assets/pages/error.html', target: '_blank'&#125;,\n                    &#123;label: '404 Page', icon: 'fa fa-fw fa-times', url: 'assets/pages/404.html', target: '_blank'&#125;,\n                    &#123;label: 'Access Denied Page', icon: 'fa fa-fw fa-exclamation-triangle', url: 'assets/pages/access.html', target: '_blank'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Menu Hierarchy', icon: 'fa fa-fw fa-gg',\n                items: [\n                    &#123;\n                        label: 'Submenu 1', icon: 'fa fa-fw fa-sign-in',\n                        items: [\n                            &#123;\n                                label: 'Submenu 1.1', icon: 'fa fa-fw fa-sign-in',\n                                items: [\n                                    &#123;label: 'Submenu 1.1.1', icon: 'fa fa-fw fa-sign-in'&#125;,\n                                    &#123;label: 'Submenu 1.1.2', icon: 'fa fa-fw fa-sign-in'&#125;,\n                                    &#123;label: 'Submenu 1.1.3', icon: 'fa fa-fw fa-sign-in'&#125;,\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'Submenu 1.2', icon: 'fa fa-fw fa-sign-in',\n                                items: [\n                                    &#123;label: 'Submenu 1.2.1', icon: 'fa fa-fw fa-sign-in'&#125;,\n                                    &#123;label: 'Submenu 1.2.2', icon: 'fa fa-fw fa-sign-in'&#125;\n                                ]\n                            &#125;,\n                        ]\n                    &#125;,\n                    &#123;\n                        label: 'Submenu 2', icon: 'fa fa-fw fa-sign-in',\n                        items: [\n                            &#123;\n                                label: 'Submenu 2.1', icon: 'fa fa-fw fa-sign-in',\n                                items: [\n                                    &#123;label: 'Submenu 2.1.1', icon: 'fa fa-fw fa-sign-in'&#125;,\n                                    &#123;label: 'Submenu 2.1.2', icon: 'fa fa-fw fa-sign-in'&#125;,\n                                    &#123;label: 'Submenu 2.1.3', icon: 'fa fa-fw fa-sign-in'&#125;,\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'Submenu 2.2', icon: 'fa fa-fw fa-sign-in',\n                                items: [\n                                    &#123;label: 'Submenu 2.2.1', icon: 'fa fa-fw fa-sign-in'&#125;,\n                                    &#123;label: 'Submenu 2.2.2', icon: 'fa fa-fw fa-sign-in'&#125;\n                                ]\n                            &#125;,\n                        ]\n                    &#125;\n                ]\n            &#125;,\n            &#123;label: 'Utils', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']&#125;,\n            &#123;label: 'Documentation', icon: 'fa fa-fw fa-book', routerLink: ['/documentation']&#125;\n        ];\n    &#125;\n&#125;\n</pre>\n            \n            <h1>Integration with an Existing CLI Project</h1>\n            <p>To setup Paradise in an existing project, copy the <i>src/assets</i> folder to your projects folder with the same name \n                and replace the contents of app.component.ts, app.component.html with their counterparts in Paradise under <i>src/app</i> folder.</p>\n            \n            <p>Dependencies of Paradise are listed below and needs to be added to package.json</p>\n<pre>\n\"primeng\": \"^4.0.0\",             //required: PrimeNG components\n\"jquery\": \"^3.1.1\",              //optional: schedule and nanoscroller\n\"chart.js\": \"^2.4.0\",            //optional: chart \n\"fullcalendar\": \"^3.1.0\",        //optional: schedule\n\"moment\": \"^2.17.1\",             //optional: chart and schedule\n\"quill\": \"^1.1.8\",               //optional: editor\n\"nanoscroller\": \"0.8.7\",         //optional: nanoscroller\n</pre>\n                        \n            <p>Add PrimeNG CSS at styles section in angular-cli.json and optional dependencies.</p>\n\n<pre>\n\"styles\": [\n    \"../node_modules/font-awesome/css/font-awesome.min.css\",    //required: Icons\n    \"../node_modules/primeng/resources/primeng.min.css\",        //required: PrimeNG components\n    \"../node_modules/fullcalendar/dist/fullcalendar.min.css\",   //optional: schedule\n    \"../node_modules/quill/dist/quill.snow.css\",                //optional: editor\n    \"../node_modules/nanoscroller/bin/css/nanoscroller.css\",    //optional: nanoscroller\n    \"styles.scss\"                                               //your styles and overrides\n],\n</pre>\n\n            <p>Add the following scripts to your angular-cli.json depending on the optional dependencies.</p>\n<pre>\n\"scripts\": [\n    \"../node_modules/jquery/dist/jquery.js\",                                //optional: schedule and nanoscroller\n    \"../node_modules/nanoscroller/bin/javascripts/jquery.nanoscroller.js\",  //optional: nanoscroller\n    \"../node_modules/moment/moment.js\",                                     //optional: schedule and charts\n    \"../node_modules/chart.js/dist/Chart.js\",                               //optional: charts\n    \"../node_modules/fullcalendar/dist/fullcalendar.js\",                    //optional: schedule\n    \"../node_modules/quill/dist/quill.js\"                                   //optional: editor\n],\n</pre>\n\n            <p>Last part is adding theme and layout css files, in the CLI app they are defined using link tags in index.html so the demo can switch them on\n            the fly by changing the path however if this is not a requirement, you may also add them to the styles configuration so they go inside the bundle.</p>\n\n            <h1 id=\"noncli\">Integration with an Existing Non-CLI Project</h1>\n            <p>For an existing project that do not use CLI, setup steps are more or less similar. Start with installing the dependencies listed above in package.json</p>\n            <p>Copy the <i>src/assets</i> folder to your application and include the resources listed above with a module bundler like webpack or using link-script tags.</p>\n            <p>Finally copy the contents of app.component.html to your application's main component template such as <i>app/application.html</i> along\n            with the sub components which are app.menu.component.ts, app.topbar.component.ts and app.footer.component.ts.</p>\n                                    \n            <h1>Theme</h1>    \n            <p>Paradise provides 8 PrimeNG themes out of the box, setup of a theme simple including the css of theme to your page that are located inside resources/theme folder.</p>\n            \n            <ul>\n                <li>theme-blue</li>\n                <li>theme-deeppurple</li>\n                <li>theme-green</li>\n                <li>theme-lightblue</li>\n                <li>theme-lime</li>\n                <li>theme-orange</li>\n                <li>theme-purple</li>\n                <li>theme-turquoise</li>\n            </ul>\n            \n            <p>A custom theme can be developed by the following steps.</p>\n            <ul>\n                <li>Choose a custom theme name such as theme-myown.</li>\n                <li>Create a file named theme-myown.scss under <i>assets/theme folder</i>.</li>\n                <li>Define the variables listed below and import the <i>/sass/theme/_theme.scss</i> file.</li>\n                <li>Build the scss to generate css</li>\n                <li>Include the generated theme.css to your page.</li>\n            </ul>\n            \n            <p>Here are the variables required to create a theme, you may need to change the last line according to the \n                relative path of the sass folder in your application.</p>\n                \n<pre>\n$primaryColor:#63aee2;\n$primaryTextColor:#ffffff;\n\n@import '../sass/theme/_theme';\n</pre> \n                \n            <p> An example sass command to compile the css would be;</p>\n                \n<pre>\nsass src/assets/theme-myown/theme.scss src/assets/theme-myown/theme.css\n</pre> \n\n            <p>Watch mode is handy to avoid compiling everytime when a change is made, instead use the following command\n            so that sass generates the file whenever you make a customization. This builds all css files whenever a change is made to any scss file.</p>\n<pre>\nsass -w resources/ --sourcemap=none\n</pre>\n\n            <p>Same can also be applied to layout itself;</p>\n            <ul>\n                <li>Choose a layout name such as layout-myown.</li>\n                <li>Create an empty file named layout-myown.scss inside <i>assets/layout/css</i> folder.</li>\n                <li>Define the variables listed below and import the <i>/sass/layout/_layout.scss</i> file.</li>\n                <li>Build the scss to generate css</li>\n                <li>Serve the css by importing it using a link tag or a bundler.</li>\n            </ul>\n            \n            <p>Here are the variables required to create a layout, you may need to change the last line according to the \n                relative path of the sass folder in your application.</p>\n            \n<pre>\n$topbarLeftBgColor:#3984b8;\n$topbarRightBgColor:#3984b8;\n$topbarLeftTextColor:#ffffff;\n$topbarRightTextColor:#ffffff;\n$topbarBorderBottomColor:#3984b8;\n$primaryColor:#3984b8;\n$primaryTextColor:#ffffff;\n$accentColor:#36ae2c;\n$darkMenuBgColor:#393b3e;\n$darkMenuTextColor:#f6f8f9;\n$bodyBgColor:#F2F8FA;\n\n@import '../../sass/layout/_layout';\n</pre> \n            \n            <p>For both cases, several .scss files such as _layout.scss, _theme.scss or _variables.scss has to be present relative to your scss files, these are available inside the resources/sass folder in the distribution.</p>\n            <p>In case you'd like to customize the structure not just the colors, the _variables.scss files are where the structural variables (e.g. font size, paddings) for the layout are defined.</p>\n<pre>\n/*  Common  */\n$fontFamily:\"Roboto\",\"Helvetica Neue\",sans-serif;\n$fontSize:13px;\n$textColor:#757575;\n$textSecondaryColor:lighten($textColor,25%);\n$borderRadius:2px;\n$dividerColor:#dee4e9;\n$transitionDuration:.3s;\n\n$black:#000000;\n$blue:#3984b8;\n$orange:#f6ac2b;\n$purple:#7e8dcd;\n$pink:#e175a0;\n$turquoise:#39b8b6;\n$green:#3eb839;\n$red:#e17576;\n</pre> \n\n<pre>\n/* PrimeNG Components Theme */\n@import '../_variables';\n\n/* Icons */\n$iconFontSize:13px;\n$iconWidth:16px;\n\n/* Validatioj */\n$inputInvalidBorderColor:#e17576;\n$inputInvalidBgColor:#ffffff;\n\n/* Headers */\n$headerPadding:.5em 1em;\n$headerBgColor:#ffffff;\n$headerTextColor:#757575;\n$headerHoverBgColor:#dee4e9;\n$headerHoverTextColor:#757575;\n$headerBorderColor:#c7cdd1;\n$headerIconColor:#757575;\n$headerIconHoverColor:$primaryColor;\n\n/* Contents */\n$contentPadding:.5em 1em;\n$contentBorderColor:#c7cdd1;\n$contentBgColor:#ffffff;\n\n/* Forms */\n$inputBgColor:#ffffff;\n$inputPadding:.385em;\n$inputBorderColor:#bdc3c9;\n$inputHoverBorderColor:#979ca0;\n$inputBtnBgColor:#ffffff;\n$inputBtnBgHoverColor:#ffffff;\n$inputBtnBgActiveColor:#ffffff;\n\n/* Buttons */\n$buttonTextColor:#ffffff;\n$toggleButtonBgColor:#c6cbcf;\n\n/* List Items */\n$listItemPadding:.5em 1em;\n$listItemBgColor:#ffffff;\n$listItemHoverBgColor:#dee4e9;\n$listItemHoverTextColor:#757575;\n\n/* Messages */\n$infoMessageBgColor:#a8c9e0;\n$infoMessageTextColor:#393b3e;\n$warnMessageBgColor:#f8eab9;\n$warnMessageTextColor:#393b3e;\n$errorMessageBgColor:#fac7c8;\n$errorMessageTextColor:#393b3e;\n$fatalMessageBgColor:#bdc3c9;\n$fatalMessageTextColor:#393b3e;\n$successMessageBgColor:#64c660;\n$successMessageTextColor:#ffffff;\n\n/* Overlays */\n$overlayBorder: 0 none;\n$tooltipBgColor: #393b3e;\n$tooltipTextColor: #ffffff;\n\n/* Data */\n$paginatorBgColor:#ffffff;\n$paginatorHoverBgColor:#dee4e9;\n$datatableOddRowBgColor:#ffffff;\n$datatableEvenRowBgColor:#f6f8f9;\n$datatableHoverBgColor:#dee4e9;\n</pre>        \n            \n            <h1>Menu Item Badges</h1>\n            <p>Badges are numerical indicators of how many items are associated with a link.\n               The badge property is value of the badge and badgeStyleClass is style class of the badge.</p>\n<pre>\nlabel: 'Components', icon: 'list', badge: '2', badgeStyleClass: 'orange-badge'\n</pre>  \n            <p>Paradise layout has 4 different badge style.There is a default badge which uses the accent color of paradise layout. And there is 3 other badge class for menu items.</p>\n            <ul>\n                <li>orange-badge</li>\n                <li>purple-badge</li>\n                <li>blue-badge</li>\n            </ul>\n                                    \n            <h1>Menu Modes</h1>\n            <p>Menu has 3 modes; static, overlay and slim. Layout container element in application.html is used to define which mode to use by adding specific classes. List\n            below indicates the style classes for each mode.</p>\n            <ul>\n                <li>Static: \"layout-wrapper layout-menu-static\"</li>\n                <li>Overlay: \"layout-wrapper layout-menu-overlay\"</li>\n                <li>Slim: \"layout-wrapper layout-menu-slim\"</li>\n            </ul>      \n\n            <p>It is also possible to leave the choice to the user by keeping the preference at a component and using an expression to bind it so that user can switch between modes. Sample\n            application has an example implementation of such use case. Refer to app.component.ts for an example.</p>          \n                            \n            <h1>Grid CSS</h1>\n            <p>Paradise uses PrimeNG Grid CSS (ui-g-*) throughout the samples, we strongly suggest using Grid CSS as your layout framework as it is well tested and supported by PrimeNG. Grid CSS is\n            available inside primeng.css.</p> \n            \n            <h1>Migration Guide</h1>\n            <p>For seamless updates and easier maintenance, we suggest keeping your CSS customizations in a separate sass file so that your changes\n            are not overriden with an update.</p>\n\n            <p>1.0.1 to 1.1.0</p>\n            <ul>\n                <li>Update layout css files.</li>\n                <li>Update theme css files.</li>\n                <li>Update AppSubmenu component in app.menu.component.ts.</li>\n            </ul>\n            \n            <p>1.0.0 to 1.0.1</p>\n            <ul>\n                <li>Includes version updates to PrimeNG 4, no change required.</li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 440:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <div class=\"card\">\n            <h1>Empty Page</h1>\n            <p>Use this page to start from scratch and place your custom content.</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"ui-g\">\n        <div class=\"ui-g-12\">\n            <div class=\"card\">\n                <h1>Upload</h1>\n                <p-growl [value]=\"msgs\"></p-growl>\n                    \n                <p-fileUpload name=\"demo[]\" url=\"./upload.php\" (onUpload)=\"onUpload($event)\" \n                        multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"1000000\"> \n                    <ng-template pTemplate=\"content\">\n                        <ul *ngIf=\"uploadedFiles.length\">\n                            <li *ngFor=\"let file of uploadedFiles\">{{file.name}} - {{file.size}} bytes</li>\n                        </ul>\n                    </ng-template>    \n                </p-fileUpload>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 442:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-12 ui-lg-6\">\n        <!-- Left Side -->\n        <div class=\"card card-w-title\">\n            <h1>InputText</h1>\n            <div class=\"ui-g form-group\">\n                <div class=\"ui-g-12 ui-md-4\">\n                    <input type=\"text\" pInputText placeholder=\"Name\">\n                </div>\n                <div class=\"ui-g-12 ui-md-4\">\n                    <input type=\"text\" pInputText placeholder=\"Email\">\n                </div>\n                <div class=\"ui-g-12 ui-md-4\">\n                    <input type=\"text\" pInputText placeholder=\"Phone\">\n                </div>\n                <div class=\"ui-g-12 ui-md-4\">\n                    <input type=\"text\" pInputText placeholder=\"Disabled\" disabled=\"disabled\">\n                </div>\n                <div class=\"ui-g-12 ui-md-4\">\n                    <input type=\"text\" pInputText class=\"ng-dirty ng-invalid\" placeholder=\"Invalid\">\n                </div>\n                <div class=\"ui-g-12 ui-md-4\">\n                    <input type=\"text\" pInputText>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>TextArea</h1>\n            <textarea [rows]=\"3\" [cols]=\"30\" pInputTextarea placeholder=\"Your Message\" autoResize=\"autoResize\"></textarea>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>AutoComplete</h1>            \n            <div class=\"ui-g form-group\">\n                <div class=\"ui-g-12\">\n                    <label for=\"acSimple\">Simple</label>\n                </div>\n                <div class=\"ui-g-12\" style=\"margin-bottom:10px\">\n                    <p-autoComplete id=\"acSimple\" [(ngModel)]=\"country\" [suggestions]=\"filteredCountries\" (completeMethod)=\"filterCountry($event)\" field=\"name\" [size]=\"30\"\n                        placeholder=\"Countries\" [minLength]=\"1\"></p-autoComplete>\n                </div>\n                \n                <div class=\"ui-g-12\">\n                    <label for=\"acAdvanced\">Advanced</label>\n                </div>\n                <div class=\"ui-g-12\">\n                    <p-autoComplete id=\"acAdvanced\" [(ngModel)]=\"selectedBrands\" [suggestions]=\"filteredBrands\" (completeMethod)=\"filterBrands($event)\" [size]=\"30\"\n                        [minLength]=\"1\" placeholder=\"Hint: type 'v' or 'f'\" [dropdown]=\"true\" (onDropdownClick)=\"handleACDropdownClick()\" multiple=\"true\">\n                        <ng-template let-brand pTemplate=\"item\">\n                            <div class=\"ui-helper-clearfix\">\n                                <img src=\"assets/demo/images/car/{{brand}}.gif\" style=\"width:32px;display:inline-block;margin:5px 0 2px 5px\"/>\n                                <div style=\"font-size:18px;float:right;margin:10px 10px 0 0\">{{brand}}</div>\n                            </div>\n                        </ng-template>\n                    </p-autoComplete>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>MultiSelect</h1>\n            <p-multiSelect [options]=\"carOptions\" [(ngModel)]=\"selectedMultiSelectCars\"></p-multiSelect>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>Calendar</h1>\n            <p-calendar [inline]=\"true\"></p-calendar> \n            \n            <div class=\"ui-g form-group\" style=\"margin-top:20px\">\n                <div class=\"ui-g-12\">\n                    <p-calendar id=\"popup\" placeholder=\"Popup\"></p-calendar>\n                </div>\n                <div class=\"ui-g-12\">\n                    <p-calendar id=\"datetime\" dateFormat=\"mm/dd/yy\" showTime=\"true\" placeholder=\"DateTime\"></p-calendar>\n                </div>\n                <div class=\"ui-g-12\">\n                    <p-calendar id=\"time\" showTime=\"true\" [timeOnly]=\"true\" placeholder=\"Time\"></p-calendar>\n                </div>\n                <div class=\"ui-g-12\">\n                    <p-calendar id=\"showIcon\" [showIcon]=\"true\" placeholder=\"Button\"></p-calendar>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>Chips</h1>\n            <p-chips></p-chips>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12 ui-lg-6\">\n        <!-- Right Side -->\n        <div class=\"card card-w-title\">\n            <h1>Checkboxes</h1>\n            <div class=\"ui-g\">\n                <div class=\"ui-g-12 ui-md-4\"><p-checkbox name=\"cg\" value=\"Ultima\" label=\"Ultima\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\n                <div class=\"ui-g-12 ui-md-4\"><p-checkbox name=\"cg\" value=\"Icarus\" label=\"Icarus\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\n                <div class=\"ui-g-12 ui-md-4\"><p-checkbox name=\"cg\" value=\"Omega\" label=\"Omega\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\n            </div>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>RadioButtons</h1>\n            <div class=\"ui-g\">\n                <div class=\"ui-g-12 ui-md-4\"><p-radioButton name=\"rg\" value=\"Ultima\" label=\"Ultima\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\n                <div class=\"ui-g-12 ui-md-4\"><p-radioButton name=\"rg\" value=\"Icarus\" label=\"Icarus\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\n                <div class=\"ui-g-12 ui-md-4\"><p-radioButton name=\"rg\" value=\"Omega\" label=\"Omega\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\n            </div>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>InputSwitch</h1>\n            <p-inputSwitch [(ngModel)]=\"switchChecked\"></p-inputSwitch>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>Dropdown</h1>\n            <p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedCity1\" [autoWidth]=\"false\"></p-dropdown>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>Password</h1>\n            <input pPassword type=\"password\"/>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>Spinner</h1>\n            <p-spinner></p-spinner>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>Slider</h1>\n            <p-slider [(ngModel)]=\"rangeValues\" [range]=\"true\"></p-slider>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>Listbox</h1>\n            <p-listbox [options]=\"citiesListbox\" [(ngModel)]=\"selectedCity2\" checkbox=\"checkbox\" filter=\"filter\" multiple=\"multiple\"></p-listbox>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>Rating</h1>\n            <p-rating [(ngModel)]=\"ratingValue\"></p-rating>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>ColorPicker</h1>\n            <p-colorPicker [(ngModel)]=\"color\" inline=\"true\"></p-colorPicker>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Editor</h1>\n            <p-editor [style]=\"{'height':'320px'}\"></p-editor>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12 ui-g-nopad\">\n        <div class=\"ui-g-12 ui-lg-6\" style=\"padding-top:0\">\n            <div class=\"card card-w-title\">\n                <h1>Buttons</h1>\n                \n                <div class=\"ui-g\">\n                    <div class=\"ui-g-12\">ToggleButton</div>\n                    <div class=\"ui-g-12\">\n                        <p-toggleButton [(ngModel)]=\"toggleButtonChecked\"></p-toggleButton>\n                    </div>\n                    \n                    <div class=\"ui-g-12\">SelectButton</div>\n                    <div class=\"ui-g-12\">\n                        <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\"></p-selectButton>\n                    </div>\n                    \n                    <div class=\"ui-g-12\">Button</div>\n                    <div class=\"ui-g-12\">\n                        <button type=\"button\" label=\"Bookmark\" icon=\"fa-star\" pButton></button>\n                    </div>\n                    \n                    <div class=\"ui-g-12\">Left Icon</div>\n                    <div class=\"ui-g-12\">\n                        <button type=\"button\" label=\"Clear\" pButton icon=\"fa-check\"></button>\n                    </div>\n                    \n                    <div class=\"ui-g-12\">Right Icon</div>\n                    <div class=\"ui-g-12\">\n                        <button type=\"button\" label=\"Clear\" pButton icon=\"fa-close\" iconPos=\"right\"></button>\n                    </div>\n                    \n                    <div class=\"ui-g-12\">Icon Only</div>\n                    <div class=\"ui-g-12\">\n                        <button type=\"button\" icon=\"fa-plus\" pButton></button>\n                    </div>\n                    \n                    <div class=\"ui-g-12\">Link</div>\n                    <div class=\"ui-g-12\"><a href=\"http://www.primefaces.org\" target=\"_blank\">Homepage</a></div>\n                    \n                    <div class=\"ui-g-12\">SplitButton</div>\n                    <div class=\"ui-g-12\">\n                        <p-splitButton label=\"Save\" icon=\"fa-edit\" [model]=\"splitButtonItems\"></p-splitButton>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"ui-g-12 ui-lg-6\" style=\"padding-top:0\">\n            <div class=\"card card-w-title\">\n                <h1>Colored Buttons</h1>\n                <p>Raised and Flat buttons with various color alternatives.</p>\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-12 ui-md-6\" style=\"text-align:center\">\n                        <button pButton type=\"button\" label=\"Primary Button\" style=\"margin-bottom:10px\"></button>\n                                                \n                        <button pButton type=\"button\" label=\"Inline Button\" style=\"margin-bottom:10px;width:auto\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Blue Button\" style=\"margin-bottom:10px\" class=\"blue-btn\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Purple Button\" style=\"margin-bottom:10px\" class=\"purple-btn\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Orange Button\" style=\"margin-bottom:10px\" class=\"orange-btn\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Pink Button\" style=\"margin-bottom:10px\" class=\"pink-btn\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Green Button\" style=\"margin-bottom:10px\" class=\"green-btn\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Red Button\" style=\"margin-bottom:10px\" class=\"red-btn\"></button>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-6\" style=\"text-align:center\">                                \n                        <button pButton type=\"button\" label=\"Primary Button\" style=\"margin-bottom:10px\" class=\"raised-btn\"></button>\n                                                \n                        <button pButton type=\"button\" label=\"Inline Button\" style=\"margin-bottom:10px;width:auto\" class=\"raised-btn\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Blue Button\" style=\"margin-bottom:10px\" class=\"blue-btn raised-btn\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Purple Button\" style=\"margin-bottom:10px\" class=\"purple-btn raised-btn\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Orange Button\" style=\"margin-bottom:10px\" class=\"orange-btn raised-btn\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Pink Button\" style=\"margin-bottom:10px\" class=\"pink-btn raised-btn\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Green Button\" style=\"margin-bottom:10px\" class=\"green-btn raised-btn\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Red Button\" style=\"margin-bottom:10px\" class=\"red-btn raised-btn\"></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 443:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Breadcrumb</h1>\n            <p-breadcrumb [model]=\"breadcrumbItems\"></p-breadcrumb>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>Steps</h1>\n            <p-steps [model]=\"stepsItems\"></p-steps>\n        </div>\n                \n        <div class=\"card card-w-title\">\n            <h1>MenuBar</h1>\n            <p-menubar [model]=\"tieredItems\"></p-menubar>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12 ui-lg-6\">\n        <!-- Left Colum -->\n        <div class=\"card card-w-title\">\n            <h1>Plain Menu</h1>\n            <p-menu #menu [model]=\"items\"></p-menu>\n            \n            <p-menu #menu popup=\"popup\" [model]=\"items\" [style]=\"{'width':'250px'}\"></p-menu>\n            <button type=\"button\" pButton icon=\"fa-link\" label=\"Show\" (click)=\"menu.toggle($event)\" style=\"margin-top:20px;width:auto\"></button>\n        </div>\n                \n        <div class=\"card card-w-title\">\n            <h1>TieredMenu</h1>\n            <p-tieredMenu [model]=\"tieredItems\" [style]=\"{'width':'250px','margin-bottom':'20px'}\"></p-tieredMenu>\n        </div>\n    </div>\n    <div class=\"ui-g-12 ui-lg-6\">\n        <!-- Right Colum -->\n        <div class=\"card card-w-title\">\n            <h1 style=\"margin-top:40px\">ContextMenu</h1>\n            Right click!\n            \n            <p-contextMenu [global]=\"true\" [model]=\"tieredItems\" [style]=\"{'width':'12.5em'}\"></p-contextMenu>\n        </div>\n        \n        <div class=\"card\">\n            <h1>SlideMenu</h1>\n            <p-slideMenu [model]=\"items\" [style]=\"{'width':'260px'}\" [menuWidth]=\"260\"></p-slideMenu>\n        </div>\n        \n        <div class=\"card\">\n            <h1>PanelMenu</h1>\n            <p-panelMenu [model]=\"panelMenuItems\"></p-panelMenu>\n        </div>\n    </div>\n        \n    <div class=\"ui-g-12 ui-g-6\">\n        <div class=\"card\">\n            <h1>MegaMenu - Horizontal</h1>\n            <p-megaMenu [model]=\"megaMenuItems\"></p-megaMenu>\n            \n            <h1>MegaMenu - Vertical</h1>\n            <p-megaMenu [model]=\"megaMenuItems\" orientation=\"vertical\" [style]=\"{'width':'200px'}\"></p-megaMenu>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12 ui-g-6\">\n        <div class=\"card\">\n            <h1>TabMenu</h1>\n            <p-tabMenu [model]=\"tabMenuItems\"></p-tabMenu>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 444:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <div class=\"card\">\n            <h1>Messages and Growl</h1>\n            <p-messages [value]=\"msgs\"></p-messages>\n            <p-growl [value]=\"msgs\" sticky=\"sticky\"></p-growl>\n            \n            <button type=\"button\" pButton (click)=\"showInfo()\" label=\"Info\" style=\"width:100px\" class=\"blue-btn\"></button>\n            <button type=\"button\" pButton (click)=\"showSuccess()\" label=\"Success\" style=\"width:100px\" class=\"green-btn\"></button>\n            <button type=\"button\" pButton (click)=\"showWarn()\" label=\"Warn\" class=\"orange-btn\" style=\"width:100px\"></button>\n            <button type=\"button\" pButton (click)=\"showError()\" label=\"Error\" class=\"pink-btn\" style=\"width:100px\"></button>\n            <button type=\"button\" pButton (click)=\"showMultiple()\" label=\"Multiple\" class=\"purple-btn\" style=\"width:100px\"></button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 445:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12 ui-lg-6\">\n        <div class=\"card\">\n            <h1>ProgressBar</h1>\n            <p-progressBar [value]=\"value\" [showValue]=\"false\"></p-progressBar>\n        </div>\n        <div class=\"card\">\n            <h1>Terminal</h1>\n            <p-terminal (handler)=\"onCommand($event)\" [response]=\"response\" welcomeMessage=\"Welcome to Ultima\" prompt=\"primeng $\"></p-terminal>\n        </div>\n    </div>\n    <div class=\"ui-g-12 ui-lg-6\">\n        <div class=\"card\">\n            <h1>Galleria</h1>\n            <p-galleria [images]=\"images\" panelWidth=\"500\" panelHeight=\"313\"></p-galleria>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 446:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-12 ui-lg-6\">\n        <!-- Left Side -->\n        <div class=\"card\">\n            <h1>Overlay Panel</h1>\n            <div class=\"ui-g\">\n                <div class=\"ui-g-6\">\n                    <button type=\"button\" pButton label=\"Image\" (click)=\"op1.toggle($event)\"></button>\n                    <p-overlayPanel #op1>\n                        <img src=\"assets/demo/images/nature/nature1.jpg\" alt=\"Nature 1\" />\n                    </p-overlayPanel>\n                </div>\n                <div class=\"ui-g-6\">\n                    <button type=\"button\" pButton label=\"DataTable\" (click)=\"op2.toggle($event)\"></button>\n                    <p-overlayPanel #op2 [showCloseIcon]=\"true\" [dismissable]=\"false\">\n                        <p-dataTable [value]=\"cars\" [style]=\"{'width':'500px'}\">\n                            <p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"></p-column>\n                            <p-column field=\"year\" header=\"Year\" [sortable]=\"true\"></p-column>\n                            <p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"></p-column>\n                            <p-column field=\"color\" header=\"Color\" [sortable]=\"true\"></p-column>\n                        </p-dataTable>\n                    </p-overlayPanel>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"card\">\n            <h1>Dialog</h1>\n            <p-dialog header=\"Godfather I\" [(visible)]=\"display\" modal=\"modal\" showEffect=\"fade\" width=\"400\">\n                <div>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \n                   His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \n                   Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \n                   kind and benevolent to those who give respect,\n                   but given to ruthless violence whenever anything stands against the good of the family.</div>\n                <p-footer>\n                    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                        <button type=\"button\" pButton icon=\"fa-close\" (click)=\"display=false\" label=\"No\"></button>\n                        <button type=\"button\" pButton icon=\"fa-check\" (click)=\"display=false\" label=\"Yes\"></button>\n                    </div>\n                </p-footer>\n            </p-dialog>\n\n            <button type=\"text\" (click)=\"display=true\" pButton icon=\"fa-external-link-square\" label=\"Show\"></button>\n        </div>\n        \n        <div class=\"card\">\n            <h1>Confirm Dialog</h1>\n            <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-info\" width=\"425\"></p-confirmDialog>\n\n            <button type=\"text\" (click)=\"confirm()\" pButton icon=\"fa-check\" label=\"Confirm\"></button>\n        </div>\n        \n        <div class=\"card\">\n            <h1>Tooltip</h1>\n            <input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\" tooltipEvent=\"focus\">\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12 ui-lg-6\">\n        <!-- Right Side -->\n        <div class=\"card\">\n            <h1>LightBox</h1>\n            <p-lightbox [images]=\"images\"></p-lightbox>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 447:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>AccordionPanel</h1>\n            <p-accordion>\n                <p-accordionTab header=\"Godfather I\" [selected]=\"true\">\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n                </p-accordionTab>\n                <p-accordionTab header=\"Godfather II\">\n                    Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\n                </p-accordionTab>\n                <p-accordionTab header=\"Godfather III\">\n                    After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\n                </p-accordionTab>\n            </p-accordion>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Panel</h1>\n            <p-panel header=\"Godfather I\" [toggleable]=\"true\">\n                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \n                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \n                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \n                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n            </p-panel>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>TabView</h1>\n            <p-tabView>\n                <p-tabPanel header=\"Godfather I\" leftIcon=\"fa-check\">\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n                </p-tabPanel>\n                <p-tabPanel header=\"Godfather II\" leftIcon=\"fa-user-o\">\n                    Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\n                </p-tabPanel>\n                <p-tabPanel header=\"Godfather III\" leftIcon=\"fa-phone\">\n                    After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\n                </p-tabPanel>\n            </p-tabView>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Fieldset</h1>\n            <p-fieldset legend=\"Toggleable\" toggleable=\"true\">\n                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \n                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \n                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \n                kind and benevolent to those who give respect, \n                but given to ruthless violence whenever anything stands against the good of the family.\n            </p-fieldset>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Toolbar</h1>\n            <p-toolbar>\n                <div class=\"ui-toolbar-group-left\">\n                    <button pButton type=\"button\" label=\"New\" icon=\"fa-plus\"></button>\n                    <button pButton type=\"button\" label=\"Update\" icon=\"fa-refresh\"></button>\n                        \n                    <i class=\"fa fa-bars\"></i>\n                    \n                    <button pButton type=\"button\" icon=\"fa-check\"></button>\n                    <button pButton type=\"button\" icon=\"fa-trash\"></button>\n                    <button pButton type=\"button\" icon=\"fa-print\"></button>\n                </div>\n                \n                <div class=\"ui-toolbar-group-right\">\n                    <p-splitButton label=\"Save\" icon=\"fa-check\" [model]=\"items\"></p-splitButton>\n                </div>\n           </p-toolbar>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 448:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-fluid\">\n    <div class=\"ui-g\">\n        <div class=\"ui-g-12\">\n            <div class=\"card card-w-title\">\n                <h1>Form Elements</h1>\n                <div class=\"ui-g form-group\">\n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"input\">Input</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <input id=\"input\" type=\"text\" pInputText/>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"textarea\">Textarea</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <textarea [rows]=\"3\" [cols]=\"30\" pInputTextarea autoResize=\"autoResize\"></textarea>\n                    </div>\n                    \n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"calendar\">Calendar</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-calendar id=\"calendar\"></p-calendar>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"autocomplete\">AutoComplete</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-autoComplete [(ngModel)]=\"country\" [suggestions]=\"filteredCountries\" (completeMethod)=\"filterCountry($event)\" field=\"name\"\n                            placeholder=\"Countries\" [minLength]=\"1\"></p-autoComplete>\n                    </div>\n                    \n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"dropdown\">Dropdown</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-dropdown id=\"dropdown\" [options]=\"cities1\" [(ngModel)]=\"selectedCity1\" [autoWidth]=\"false\"></p-dropdown>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"password\">Password</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <input id=\"password\" pPassword type=\"password\"/>\n                    </div>\n                    \n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"mask\">Mask</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-inputMask mask=\"99/99/9999\" slotChar=\"dd/mm/yyyy\" placeholder=\"Date\"></p-inputMask>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"spinner\">Spinner</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-spinner></p-spinner>\n                    </div>\n                    \n                    <div class=\"ui-g-12 ui-md-2\">\n                        Checkbox\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <div class=\"ui-g\">\n                            <div class=\"ui-g-12\"><p-checkbox name=\"cg\" value=\"Ultima\" label=\"Ultima\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\n                            <div class=\"ui-g-12\"><p-checkbox name=\"cg\" value=\"Icarus\" label=\"Icarus\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\n                            <div class=\"ui-g-12\"><p-checkbox name=\"cg\" value=\"Omega\" label=\"Omega\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\n                        </div>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        RadioButton\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <div class=\"ui-g\">\n                            <div class=\"ui-g-12\"><p-radioButton name=\"rg\" value=\"Ultima\" label=\"Ultima\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\n                            <div class=\"ui-g-12\"><p-radioButton name=\"rg\" value=\"Icarus\" label=\"Icarus\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\n                            <div class=\"ui-g-12\"><p-radioButton name=\"rg\" value=\"Omega\" label=\"Omega\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\n                        </div>\n                    </div>\n                    \n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"slider\">Slider</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-slider></p-slider>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        Button\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <button pButton type=\"button\" label=\"Edit\" icon=\"fa-edit\"></button>\n                    </div>\n                    \n                    <div class=\"ui-g-12 ui-md-2\">\n                        SplitButton\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-splitButton label=\"Save\" icon=\"fa-save\" [model]=\"splitButtonItems\"></p-splitButton>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"multiselect\">MultiSelect</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-multiSelect id=\"multiselect\" [options]=\"carOptions\" [(ngModel)]=\"selectedMultiSelectCars\"></p-multiSelect>\n                    </div>\n                    \n                    <div class=\"ui-g-12 ui-md-2\">\n                        ToggleButton\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-toggleButton [(ngModel)]=\"toggleButtonChecked\"></p-toggleButton>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        SelectButton\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\"></p-selectButton>\n                    </div>\n                    \n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"listbox\">Listbox</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-listbox [options]=\"cities2\" [(ngModel)]=\"selectedCity2\"></p-listbox>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        Dialog\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <button type=\"button\" label=\"Login\" icon=\"fa-external-link\" (click)=\"dialogVisible=true\" pButton></button>\n                    </div>\n                </div>\n\n                <p-dialog header=\"Login\" [resizable]=\"false\" responsive=\"true\" [(visible)]=\"dialogVisible\">\n                    <div class=\"ui-g form-group\" style=\"margin-bottom: 16px;\">\n                        <div class=\"ui-g-12\">\n                            <input type=\"text\" pInputText placeholder=\"Name\">\n                        </div>\n                        <div class=\"ui-g-12\">\n                            <input type=\"password\" pInputText placeholder=\"Password\">\n                        </div>\n                    </div>\n                    \n                    <p-footer>\n                        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                            <button type=\"button\" label=\"Login\" icon=\"fa-user\" (click)=\"dialogVisible=false\" pButton></button>\n                        </div>\n                    </p-footer>\n                </p-dialog>\n            </div>\n            \n            <div class=\"card card-w-title\">\n                <h1>DataTable</h1>\n                <p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar3\">\n                    <p-header>DataTable</p-header>\n                    <p-column field=\"vin\" header=\"Vin\" sortable=\"true\"></p-column>\n                    <p-column field=\"year\" header=\"Year\" sortable=\"true\"></p-column>\n                    <p-column field=\"brand\" header=\"Brand\" sortable=\"true\"></p-column>\n                    <p-column field=\"color\" header=\"Color\" sortable=\"true\"></p-column>\n                </p-dataTable>\n            </div>\n        </div>\n        \n        <div class=\"ui-g-12 ui-lg-6\">\n            <!-- Left Side -->\n            <div class=\"card card-w-title\">\n                <h1>DataGrid</h1>\n                <p-dataGrid [value]=\"carsLarge\" [paginator]=\"true\" [rows]=\"20\">\n                    <p-header>\n                        List of Cars\n                    </p-header>\n                    <ng-template let-car pTemplate=\"item\">\n                        <div style=\"padding:3px\" class=\"ui-g-12 ui-md-3\">\n                            <p-panel [header]=\"car.vin\" [style]=\"{'text-align':'center'}\">\n                                <img src=\"assets/demo/images/car/{{car.brand}}.gif\">\n                                <div class=\"car-detail\">{{car.year}} - {{car.color}}</div>\n                            </p-panel>\n                        </div>\n                    </ng-template>\n                </p-dataGrid>\n            </div>\n            \n            <div class=\"card card-w-title\">\n                <h1>Tree</h1>\n                <p-tree [value]=\"filesTree\"></p-tree>\n            </div>\n            \n            <div class=\"card card-w-title\">\n                <h1>Menu</h1>\n                <p-menu [model]=\"menuItems\"></p-menu>\n            </div>\n            \n            <div class=\"card card-w-title\">\n                <h1>PanelMenu</h1>\n                <p-panelMenu [model]=\"panelMenuItems\"></p-panelMenu>\n            </div>\n            \n            <div class=\"card card-w-title\">\n                <h1>Heading 1</h1>\n                \n                <h2>Heading 2</h2>\n                \n                <h3>Heading 3</h3>\n                \n                <h4>Heading 4</h4>\n            </div>\n        </div>\n        <div class=\"ui-g-12 ui-lg-6\">\n            <!-- Right Side -->\n            <div class=\"card card-w-title\">\n                <h1>PickList</h1>\n                <p-pickList [source]=\"sourceCars\" [target]=\"targetCars\" sourceHeader=\"Available\" targetHeader=\"Selected\" [responsive]=\"true\">\n                    <ng-template let-car pTemplate=\"item\">\n                        <span>{{car.brand}}</span>\n                    </ng-template>\n                </p-pickList>\n            </div>\n            \n            <div class=\"card card-w-title\">\n                <h1>OrderList</h1>\n                <p-orderList [value]=\"orderListCars\" [listStyle]=\"{'height':'250px'}\" [responsive]=\"true\" header=\"OrderList\">\n                    <ng-template let-car pTemplate=\"item\">\n                        <div class=\"ui-helper-clearfix\">\n                            <img src=\"assets/demo/images/car/{{car.brand}}.gif\" style=\"display:inline-block;margin:2px 0 2px 2px\" />\n                            <div style=\"font-size:14px;float:right;margin:15px 5px 0 0\">{{car.brand}} - {{car.year}} - {{car.color}}</div>\n                        </div>\n                    </ng-template>\n                </p-orderList>\n            </div>\n            \n            <div class=\"card card-w-title\">\n                <h1>Accordion Panel</h1>\n                <p-accordion>\n                    <p-accordionTab header=\"Godfather I\" [selected]=\"true\">\n                        The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n                    </p-accordionTab>\n                    <p-accordionTab header=\"Godfather II\">\n                        Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\n                    </p-accordionTab>\n                    <p-accordionTab header=\"Godfather III\">\n                        After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\n                    </p-accordionTab>\n                </p-accordion>\n            </div>\n            \n            <div class=\"card card-w-title\">\n                <h1>Panel</h1>\n                <p-panel header=\"Godfather I\" [toggleable]=\"true\">\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \n                    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \n                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \n                    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n                </p-panel>\n            </div>\n            \n            <div class=\"card card-w-title\">\n                <h1>ProgressBar - Static Display</h1>\n                <p-progressBar [value]=\"50\"></p-progressBar>\n            </div>\n        </div>\n        \n        <div class=\"ui-g-12\">\n            <div class=\"card card-w-title\">\n                <h1>Carousel</h1>\n                <p-carousel headerText=\"Cars\" [value]=\"carouselCars\">\n                    <ng-template let-car pTemplate=\"item\">\n                        <div class=\"ui-g\" style=\"text-align:center\">\n                            <div class=\"ui-g-12\" style=\"text-align:Center\">\n                                <img src=\"assets/demo/images/car/{{car.brand}}.gif\" />\n                            </div>\n                            <div class=\"ui-g-6\">Vin: </div>\n                            <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.vin}}</div>\n                            \n                            <div class=\"ui-g-6\">Year: </div>\n                            <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.year}}</div>\n                            \n                            <div class=\"ui-g-6\">Brand: </div>\n                            <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.brand}}</div>\n                            \n                            <div class=\"ui-g-6\">Color: </div>\n                            <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.color}}</div>\n                        </div>\n                    </ng-template>\n                </p-carousel>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 449:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <div class=\"card\">\n            <h1>Card</h1>\n            <p>Card is a section to group content and layout provides a built-in css for it. Apply .card style class to your container to use it. If the\n            card has a title defined with h1 tag, add card-w-title to adjust paddings.</p>\n<pre>\n&lt;div class=\"card\"&gt;\n    Content here\n&lt;/div&gt;\n\n&lt;div class=\"card card-w-title\"&gt;\n    &lt;h1&gt;Card with Title&lt;h1&gt;\n    Content here\n&lt;/div&gt;\n</pre>  \n                        \n            <h1>Shadows</h1>\n            <p>5 levels of shadows are provided varying from ui-shadow-1 to ui-shadow-5 to define the level of depth.</p>\n            \n            <div class=\"ui-g\">\n                <div class=\"ui-g-12 ui-md-2\">\n                    <div class=\"shadow-box\"></div>\n                </div>\n                <div class=\"ui-g-12 ui-md-2\">\n                    <div class=\"shadow-box ui-shadow-1\"></div>\n                </div>\n                <div class=\"ui-g-12 ui-md-2\">\n                    <div class=\"shadow-box ui-shadow-2\"></div>\n                </div>\n                <div class=\"ui-g-12 ui-md-2\">\n                    <div class=\"shadow-box ui-shadow-3\"></div>\n                </div>\n                <div class=\"ui-g-12 ui-md-2\">\n                    <div class=\"shadow-box ui-shadow-4\"></div>\n                </div>\n                <div class=\"ui-g-12 ui-md-2\">\n                    <div class=\"shadow-box ui-shadow-5\"></div>\n                </div>\n            </div>\n<pre>\n&lt;div class=\"ui-g\"&gt;\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\n        &lt;div class=\"shadow-box\"&gt;&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\n        &lt;div class=\"shadow-box ui-shadow-1\"&gt;&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\n        &lt;div class=\"shadow-box ui-shadow-2\"&gt;&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\n        &lt;div class=\"shadow-box ui-shadow-3\"&gt;&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\n        &lt;div class=\"shadow-box ui-shadow-4\"&gt;&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\n        &lt;div class=\"shadow-box ui-shadow-5\"&gt;&lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</pre>  \n            \n            \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(175);


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarService = (function () {
    function CarService(http) {
        this.http = http;
    }
    CarService.prototype.getCarsSmall = function () {
        return this.http.get('assets/demo/data/cars-small.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    CarService.prototype.getCarsMedium = function () {
        return this.http.get('assets/demo/data/cars-medium.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    CarService.prototype.getCarsLarge = function () {
        return this.http.get('assets/demo/data/cars-large.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    return CarService;
}());
CarService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CarService);

var _a;
//# sourceMappingURL=carservice.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuMode;
(function (MenuMode) {
    MenuMode[MenuMode["STATIC"] = 0] = "STATIC";
    MenuMode[MenuMode["OVERLAY"] = 1] = "OVERLAY";
    MenuMode[MenuMode["SLIM"] = 2] = "SLIM";
})(MenuMode || (MenuMode = {}));
;
var AppComponent = (function () {
    function AppComponent(renderer) {
        this.renderer = renderer;
        this.menu = MenuMode.STATIC;
        this.layout = 'default';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.documentClickListener = this.renderer.listenGlobal('body', 'click', function (event) {
            if (!_this.menuClick && !_this.menuButtonClick) {
                _this.mobileMenuActive = false;
                _this.overlayMenuActive = false;
                _this.resetSlim = true;
            }
            if (!_this.topbarMenuClick && !_this.topbarMenuButtonClick) {
                _this.topbarMenuActive = false;
            }
            _this.menuClick = false;
            _this.menuButtonClick = false;
            _this.topbarMenuClick = false;
            _this.topbarMenuButtonClick = false;
        });
    };
    AppComponent.prototype.onMenuButtonClick = function (event) {
        this.menuButtonClick = true;
        if (this.isMobile()) {
            this.mobileMenuActive = !this.mobileMenuActive;
        }
        else {
            if (this.staticMenu)
                this.staticMenuInactive = !this.staticMenuInactive;
            else if (this.overlayMenu)
                this.overlayMenuActive = !this.overlayMenuActive;
        }
        event.preventDefault();
    };
    AppComponent.prototype.onTopbarMenuButtonClick = function (event) {
        this.topbarMenuButtonClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;
        event.preventDefault();
    };
    AppComponent.prototype.onTopbarItemClick = function (event, item) {
        if (this.activeTopbarItem === item)
            this.activeTopbarItem = null;
        else
            this.activeTopbarItem = item;
        event.preventDefault();
    };
    AppComponent.prototype.onTopbarMenuClick = function (event) {
        this.topbarMenuClick = true;
    };
    AppComponent.prototype.onMenuClick = function (event) {
        this.menuClick = true;
        this.resetSlim = false;
    };
    Object.defineProperty(AppComponent.prototype, "slimMenu", {
        get: function () {
            return this.menu === MenuMode.SLIM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "overlayMenu", {
        get: function () {
            return this.menu === MenuMode.OVERLAY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "staticMenu", {
        get: function () {
            return this.menu === MenuMode.STATIC;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.changeToSlimMenu = function () {
        this.menu = MenuMode.SLIM;
    };
    AppComponent.prototype.changeToOverlayMenu = function () {
        this.menu = MenuMode.OVERLAY;
    };
    AppComponent.prototype.changeToStaticMenu = function () {
        this.menu = MenuMode.STATIC;
    };
    AppComponent.prototype.isMobile = function () {
        return window.innerWidth < 640;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(433),
        styles: [__webpack_require__(355)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountryService = (function () {
    function CountryService(http) {
        this.http = http;
    }
    CountryService.prototype.getCountries = function () {
        return this.http.get('assets/demo/data/countries.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    return CountryService;
}());
CountryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CountryService);

var _a;
//# sourceMappingURL=countryservice.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventService = (function () {
    function EventService(http) {
        this.http = http;
    }
    EventService.prototype.getEvents = function () {
        return this.http.get('assets/demo/data/scheduleevents.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    return EventService;
}());
EventService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], EventService);

var _a;
//# sourceMappingURL=eventservice.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NodeService = (function () {
    function NodeService(http) {
        this.http = http;
    }
    NodeService.prototype.getFiles = function () {
        return this.http.get('assets/demo/data/files.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    NodeService.prototype.getFilesystem = function () {
        return this.http.get('assets/demo/data/filesystem.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    return NodeService;
}());
NodeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NodeService);

var _a;
//# sourceMappingURL=nodeservice.js.map

/***/ })

},[490]);
//# sourceMappingURL=main.bundle.js.map