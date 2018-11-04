(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/main/main-pages.module": [
		"./src/app/pages/main/main-pages.module.ts",
		"pages-main-main-pages-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/@core/error/error.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/@core/error/error.interceptor.ts ***!
  \**************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _service_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authentication/authentication.service */ "./src/app/@core/service/authentication/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../../../../node_modules/@angular/common/http/src/interceptor.d.ts"/>




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_service_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/@core/error/error.module.ts":
/*!*********************************************!*\
  !*** ./src/app/@core/error/error.module.ts ***!
  \*********************************************/
/*! exports provided: ErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _errors_components_errors_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors-components/errors.component */ "./src/app/@core/error/errors-components/errors.component.ts");
/* harmony import */ var _pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/auth/auth.module */ "./src/app/pages/auth/auth.module.ts");
/* harmony import */ var _mat_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mat.module */ "./src/app/mat.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ErrorModule = /** @class */ (function () {
    function ErrorModule() {
    }
    ErrorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _errors_components_errors_component__WEBPACK_IMPORTED_MODULE_1__["ErrorsComponent"]
            ],
            imports: [
                _pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_2__["AuthModule"],
                _mat_module__WEBPACK_IMPORTED_MODULE_3__["MatModule"]
            ],
            exports: [
                _errors_components_errors_component__WEBPACK_IMPORTED_MODULE_1__["ErrorsComponent"]
            ],
            providers: []
        })
    ], ErrorModule);
    return ErrorModule;
}());



/***/ }),

/***/ "./src/app/@core/error/errors-components/errors.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/@core/error/errors-components/errors.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-auth-page-template>\r\n  <h2 class=\"title\">404 Page Not Found</h2>\r\n  <small class=\"sub-title\">The page you were looking for doesn't exist</small>\r\n  <button mat-stroked-button (click)=\"goToHome()\">Take me home</button>\r\n</app-auth-page-template>\r\n"

/***/ }),

/***/ "./src/app/@core/error/errors-components/errors.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/@core/error/errors-components/errors.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  flex: 1; }\n\n.site {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/@core/error/errors-components/errors.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@core/error/errors-components/errors.component.ts ***!
  \*******************************************************************/
/*! exports provided: ErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsComponent", function() { return ErrorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorsComponent = /** @class */ (function () {
    function ErrorsComponent(router) {
        this.router = router;
    }
    ErrorsComponent.prototype.ngOnInit = function () {
    };
    ErrorsComponent.prototype.goToHome = function () {
        this.router.navigate(['/']);
    };
    ErrorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-errors',
            template: __webpack_require__(/*! ./errors.component.html */ "./src/app/@core/error/errors-components/errors.component.html"),
            styles: [__webpack_require__(/*! ./errors.component.scss */ "./src/app/@core/error/errors-components/errors.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ErrorsComponent);
    return ErrorsComponent;
}());



/***/ }),

/***/ "./src/app/@core/model/user.model.ts":
/*!*******************************************!*\
  !*** ./src/app/@core/model/user.model.ts ***!
  \*******************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/@core/service/authentication/authentication.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/@core/service/authentication/authentication.service.ts ***!
  \************************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/user.service */ "./src/app/@core/service/user/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(_router, _http, _cookieService, _userService, _toastr) {
        this._router = _router;
        this._http = _http;
        this._cookieService = _cookieService;
        this._userService = _userService;
        this._toastr = _toastr;
    }
    AuthenticationService_1 = AuthenticationService;
    AuthenticationService.prototype.obtainAccessToken = function (loginData) {
        var _this = this;
        var params = new URLSearchParams();
        params.append('username', loginData.username);
        params.append('password', loginData.password);
        params.append('grant_type', 'password');
        params.append('client_id', 'patrykzdral');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Authorization': 'Basic ' + btoa('patrykzdral:verysecretpassword')
        });
        console.log(headers);
        return this._http.post('/musicalworld/rest/oauth/token', params.toString(), {
            headers: headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (data) {
            console.log(data);
            _this.saveToken(data, loginData.username);
            _this._toastr.success('Login successful');
        }, function (err) { return _this._toastr.error(err); });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        this._cookieService.delete('access_token');
        this._cookieService.delete('access_token_expire_date');
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.saveToken = function (token, login) {
        var expireDate = new Date().getTime() + (1000 * token.expires_in);
        this._cookieService.set('access_token', token.access_token, expireDate);
        this._cookieService.set('access_token_expire_date', expireDate.toString());
        this.saveUserInLocalStorage(login);
        this._router.navigate(['/']);
    };
    AuthenticationService.prototype.saveUserInLocalStorage = function (username) {
        var _this = this;
        this._userService.getByUsername(username).toPromise().then(function (res) {
            if (res != null) {
                console.log(res);
                console.log(JSON.stringify(res));
                localStorage.setItem('currentUser', JSON.stringify(res));
            }
            else {
                _this._router.navigate(['/auth/login']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    AuthenticationService.prototype.checkCredentials = function () {
        if (!this._cookieService.check('access_token') || !this._cookieService.check('access_token_expire_date')) {
            console.log("COOKIE ERROR");
            this._router.navigate(['/auth/login']);
        }
        else {
            if (AuthenticationService_1.isExpired(this._cookieService.get('access_token_expire_date'))) {
                this._cookieService.delete('access_token');
                this._cookieService.delete('access_token_expire_date');
                localStorage.removeItem('current_user');
                this._router.navigate(['/auth/login']);
            }
        }
    };
    AuthenticationService.isExpired = function (token) {
        var date = Number(token);
        return new Date().valueOf() > date;
    };
    AuthenticationService.prototype.ngOnDestroy = function () {
    };
    AuthenticationService = AuthenticationService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], AuthenticationService);
    return AuthenticationService;
    var AuthenticationService_1;
}());



/***/ }),

/***/ "./src/app/@core/service/http/auth-http.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/@core/service/http/auth-http.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHttpService", function() { return AuthHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthHttpService = /** @class */ (function (_super) {
    __extends(AuthHttpService, _super);
    function AuthHttpService(handler, cookieService) {
        var _this = _super.call(this, handler) || this;
        _this.cookieService = cookieService;
        return _this;
    }
    AuthHttpService.prototype.createAuthorizationHeader = function () {
        var token = this.cookieService.get('access_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': 'bearer ' + token });
        console.log(headers.get('Authorization'));
        return headers;
    };
    AuthHttpService.prototype.findOne = function (url, id) {
        var headers = this.createAuthorizationHeader();
        return _super.prototype.get.call(this, url + '/' + id, {
            headers: headers
        });
    };
    AuthHttpService.prototype.delete = function (url, id) {
        var headers = this.createAuthorizationHeader();
        return _super.prototype.delete.call(this, url + '/' + id, {
            headers: headers
        });
    };
    AuthHttpService.prototype.findAll = function (url) {
        var headers = this.createAuthorizationHeader();
        return _super.prototype.get.call(this, url, {
            headers: headers
        });
    };
    AuthHttpService.prototype.save = function (url, object) {
        var headers = this.createAuthorizationHeader();
        return _super.prototype.post.call(this, url, object, {
            headers: headers
        });
    };
    AuthHttpService.prototype.findAllWithParams = function (url, params) {
        var headers = this.createAuthorizationHeader();
        console.log(headers);
        return _super.prototype.get.call(this, url, {
            params: params,
            headers: headers
        });
    };
    AuthHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHandler"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], AuthHttpService);
    return AuthHttpService;
}(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));



/***/ }),

/***/ "./src/app/@core/service/navigation/nav.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/@core/service/navigation/nav.service.ts ***!
  \*********************************************************/
/*! exports provided: NavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavService", function() { return NavService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavService = /** @class */ (function () {
    function NavService() {
    }
    NavService.prototype.closeNav = function () {
        this.appDrawer.toggle();
    };
    NavService.prototype.openNav = function () {
        this.appDrawer.toggle();
    };
    NavService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NavService);
    return NavService;
}());



/***/ }),

/***/ "./src/app/@core/service/user/user.service.ts":
/*!****************************************************!*\
  !*** ./src/app/@core/service/user/user.service.ts ***!
  \****************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_auth_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/auth-http.service */ "./src/app/@core/service/http/auth-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get('/api/users');
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('/api/users/' + id);
    };
    UserService.prototype.getByUsername = function (username) {
        return this.http.findAllWithParams('/musicalworld/rest/api/users/', { username: username });
    };
    UserService.prototype.register = function (user) {
        return this.http.post('/musicalworld/rest/register', user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/api/users/' + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('/api/users/', id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_http_auth_http_service__WEBPACK_IMPORTED_MODULE_1__["AuthHttpService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, ModuleRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleRouting", function() { return ModuleRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/auth/login/login.component */ "./src/app/pages/auth/login/login.component.ts");
/* harmony import */ var _pages_auth_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/auth/register/register.component */ "./src/app/pages/auth/register/register.component.ts");
/* harmony import */ var _pages_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/auth/logout/logout.component */ "./src/app/pages/auth/logout/logout.component.ts");
/* harmony import */ var _pages_auth_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/auth/request-password/request-password.component */ "./src/app/pages/auth/request-password/request-password.component.ts");
/* harmony import */ var _pages_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/auth/reset-password/reset-password.component */ "./src/app/pages/auth/reset-password/reset-password.component.ts");
/* harmony import */ var _pages_auth_account_activated_account_activated_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/auth/account-activated/account-activated.component */ "./src/app/pages/auth/account-activated/account-activated.component.ts");
/* harmony import */ var _core_error_errors_components_errors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./@core/error/errors-components/errors.component */ "./src/app/@core/error/errors-components/errors.component.ts");








var routes = [
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: 'pages', loadChildren: './pages/main/main-pages.module#MainPagesModule' },
    {
        path: 'auth',
        children: [
            {
                path: '',
                component: _pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
            },
            {
                path: 'login',
                component: _pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
            },
            {
                path: 'register',
                component: _pages_auth_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"],
            },
            {
                path: 'logout',
                component: _pages_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"],
            },
            {
                path: 'request-password',
                component: _pages_auth_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_4__["RequestPasswordComponent"],
            },
            {
                path: 'reset-password',
                component: _pages_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"],
            },
            {
                path: 'account-activated',
                component: _pages_auth_account_activated_account_activated_component__WEBPACK_IMPORTED_MODULE_6__["AccountActivatedComponent"],
            }
        ],
    },
    {
        path: 'bad-path', component: _core_error_errors_components_errors_component__WEBPACK_IMPORTED_MODULE_7__["ErrorsComponent"],
    },
    {
        path: '**', redirectTo: '/bad-path'
    },
];
var config = {
    useHash: true,
};
var ModuleRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, config);


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_service_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./@core/service/authentication/authentication.service */ "./src/app/@core/service/authentication/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_authenticationService, translate) {
        this._authenticationService = _authenticationService;
        this.translate = translate;
        this.title = 'musical-world-ui';
        translate.setDefaultLang('en');
        translate.use('en');
        //  console.log(this.translate.get('Title'));
    }
    AppComponent.prototype.ngOnInit = function () {
        var warningTranslation = this.translate.instant('Toastr.warnings');
        console.log("TEST " + warningTranslation);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_service_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_components_main_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-components/main-components.module */ "./src/app/main-components/main-components.module.ts");
/* harmony import */ var _mat_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mat.module */ "./src/app/mat.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/auth/auth.module */ "./src/app/pages/auth/auth.module.ts");
/* harmony import */ var _core_error_error_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./@core/error/error.module */ "./src/app/@core/error/error.module.ts");
/* harmony import */ var _core_error_error_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./@core/error/error.interceptor */ "./src/app/@core/error/error.interceptor.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var mat_progress_buttons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! mat-progress-buttons */ "./node_modules/mat-progress-buttons/esm5/mat-progress-buttons.es5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_20__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// import {CookieService} from 'ngx-cookie-service';








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_2__["AngularFontAwesomeModule"],
                _main_components_main_components_module__WEBPACK_IMPORTED_MODULE_4__["MainComponentsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _mat_module__WEBPACK_IMPORTED_MODULE_5__["MatModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["ModuleRouting"],
                _pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__["AuthModule"],
                _core_error_error_module__WEBPACK_IMPORTED_MODULE_11__["ErrorModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_20__["AgGridModule"].withComponents([]),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(),
                mat_progress_buttons__WEBPACK_IMPORTED_MODULE_17__["MatProgressButtonsModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_18__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBEmx5P3vl4ox4OU6nPgwTbU9k-_0Zm6Lo',
                    libraries: ["places"]
                }),
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_19__["Ng4LoadingSpinnerModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    }
                })
            ],
            providers: [
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_16__["CookieService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _core_error_error_interceptor__WEBPACK_IMPORTED_MODULE_12__["ErrorInterceptor"], multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "./src/app/main-components/footer/footer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/main-components/footer/footer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"footer-row\">-->\r\n<!--<footer class=\"footer application-main-color-shadow text-color\">-->\r\n<!--{{ 'Footer.footer-text' | translate }}-->\r\n<!--</footer>-->\r\n<!--</div>-->\r\n\r\n<div class=\"footer-row footer application-main-color-shadow text-color\">\r\n    <div class=\"text\">\r\n      <span class=\"created-by\">Created with ♥ by <b><a href=\"https://github.com/patrykzdral\" target=\"_blank\">Patryk Zdral</a></b> 2019</span>\r\n    </div>\r\n    <div class=\"social-div\">\r\n      <fa class=\"socials\" name=\"linkedin\"></fa>\r\n      <fa class=\"socials\" name=\"facebook\"></fa>\r\n      <fa class=\"socials\" name=\"github\"></fa>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main-components/footer/footer.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/main-components/footer/footer.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".application-main-color-shadow {\n  background-color: #016464;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }\n\n.application-auth-color-shadow {\n  background-color: #525255;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }\n\n.component-scroll-bar {\n  /* Track */\n  /* Handle */\n  /* Handle on hover */ }\n\n.component-scroll-bar ::-webkit-scrollbar {\n    width: 15px; }\n\n.component-scroll-bar ::-webkit-scrollbar-track {\n    background: #f1f1f1;\n    border-radius: 15px; }\n\n.component-scroll-bar ::-webkit-scrollbar-thumb {\n    border-radius: 15px;\n    background: #888; }\n\n.component-scroll-bar ::-webkit-scrollbar-thumb:hover {\n    background: #555; }\n\nmat-card {\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);\n  overflow: auto;\n  margin: 1px;\n  border-radius: 15px; }\n\n.text-color {\n  color: #ffffff; }\n\n/* app drawer breakpoint */\n\n.footer-row {\n  display: flex;\n  height: 5vh;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 0; }\n\n.footer-row .text {\n    margin-left: 10px; }\n\n.footer-row .socials {\n    margin-left: 10px;\n    margin-right: 10px;\n    cursor: pointer; }\n\n@media (max-width: 480px) {\n  .footer-row {\n    justify-content: center; }\n    .footer-row .social-div {\n      display: none; } }\n\na {\n  color: #b5d4d6;\n  text-decoration: none;\n  cursor: pointer; }\n\na:hover {\n  text-decoration: underline; }\n"

/***/ }),

/***/ "./src/app/main-components/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main-components/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/main-components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/main-components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/main-components/header/login-header/login-header.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/main-components/header/login-header/login-header.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"application-auth-color-shadow\">\r\n  <h1 class=\"app-name\">Musical World</h1>\r\n  <span class=\"example-spacer\"></span>\r\n  <button class=\"icon-margin\" mat-icon-button matTooltip=\"{{'Header.language' | translate}}\" (click)=select.open()>\r\n    <mat-icon>language</mat-icon>\r\n    <mat-select class=\"langSelect\" #select [(ngModel)]=\"setLang\">\r\n      <!--<mat-option (click)=\"changeLang()\" value=\"en\">{{'Header.english-language' | translate}}</mat-option>-->\r\n      <!--<mat-option (click)=\"changeLang()\" value=\"de\">{{'Header.german-language' | translate}}</mat-option>-->\r\n\r\n      <mat-option (click)=\"changeLang()\" value=\"en\">english</mat-option>\r\n      <mat-option (click)=\"changeLang()\" value=\"de\">german</mat-option>\r\n    </mat-select>\r\n  </button>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/main-components/header/login-header/login-header.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/main-components/header/login-header/login-header.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\n  flex: 1 1 auto; }\n\n.app-name {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: white; }\n\n/* 2. Then use it like this in you component scss */\n\nmat-icon {\n  margin-top: 10px;\n  margin-bottom: 15px;\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n  line-height: 40px; }\n\nmat-icon {\n  color: white; }\n\n.icon-margin {\n  margin-right: 10px; }\n\n@media (max-width: 376px) {\n  .icon-margin {\n    margin-right: 10px; } }\n\n.application-main-color-shadow {\n  background-color: #016464;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }\n\n.application-auth-color-shadow {\n  background-color: #525255;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }\n\n.component-scroll-bar {\n  /* Track */\n  /* Handle */\n  /* Handle on hover */ }\n\n.component-scroll-bar ::-webkit-scrollbar {\n    width: 15px; }\n\n.component-scroll-bar ::-webkit-scrollbar-track {\n    background: #f1f1f1;\n    border-radius: 15px; }\n\n.component-scroll-bar ::-webkit-scrollbar-thumb {\n    border-radius: 15px;\n    background: #888; }\n\n.component-scroll-bar ::-webkit-scrollbar-thumb:hover {\n    background: #555; }\n\nmat-card {\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);\n  overflow: auto;\n  margin: 1px;\n  border-radius: 15px; }\n\n::ng-deep .langSelect div.mat-select-arrow-wrapper {\n  display: none; }\n\n::ng-deep .langSelect.mat-select {\n  display: inline; }\n\n.app-name {\n  font-size: 24px; }\n"

/***/ }),

/***/ "./src/app/main-components/header/login-header/login-header.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main-components/header/login-header/login-header.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LoginHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginHeaderComponent", function() { return LoginHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginHeaderComponent = /** @class */ (function () {
    function LoginHeaderComponent(translate) {
        this.translate = translate;
    }
    LoginHeaderComponent.prototype.ngOnInit = function () {
    };
    LoginHeaderComponent.prototype.changeLang = function () {
        this.translate.use(this.setLang);
    };
    LoginHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-header',
            template: __webpack_require__(/*! ./login-header.component.html */ "./src/app/main-components/header/login-header/login-header.component.html"),
            styles: [__webpack_require__(/*! ./login-header.component.scss */ "./src/app/main-components/header/login-header/login-header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], LoginHeaderComponent);
    return LoginHeaderComponent;
}());



/***/ }),

/***/ "./src/app/main-components/header/main-header/header.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/main-components/header/main-header/header.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"application-main-color-shadow\">\r\n  <button mat-icon-button (click)=\"navService.openNav()\">\r\n    <mat-icon>menu</mat-icon>\r\n  </button>\r\n  <img src=\"../../../../assets/logo/navbarlogo.png\" id=\"logo\" (click)=\"navigateToMainPage()\">\r\n  <span class=\"example-spacer\"></span>\r\n  <button class=\"icon-margin\" mat-icon-button matTooltip=\"{{'Header.language' | translate}}\" (click)=langselect.open()>\r\n    <mat-icon>language</mat-icon>\r\n    <mat-select class=\"langSelect\" #langselect [(ngModel)]=\"setLang\">\r\n      <!--<mat-option (click)=\"changeLang()\" value=\"en\">{{'Header.english-language' | translate}}</mat-option>-->\r\n      <!--<mat-option (click)=\"changeLang()\" value=\"de\">{{'Header.german-language' | translate}}</mat-option>-->\r\n      <mat-option (click)=\"changeLang()\" value=\"en\">english</mat-option>\r\n      <mat-option (click)=\"changeLang()\" value=\"de\">german</mat-option>\r\n    </mat-select>\r\n  </button>\r\n  <button mat-icon-button matTooltip=\"{{'Header.profile' | translate}}\" (click)=\"profileselect.open()\">\r\n    <mat-icon >account_box</mat-icon>\r\n    <mat-select class=\"langSelect\" #profileselect>\r\n\r\n      <mat-option  (click)=\"logOut()\" value=\"en\">log out</mat-option>\r\n      <mat-option (click)=\"showProfile()\" value=\"de\">my profile</mat-option>\r\n    </mat-select>\r\n  </button>\r\n  <h1 class=\"app-name\">{{username}}</h1>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/main-components/header/main-header/header.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/main-components/header/main-header/header.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\n  flex: 1 1 auto; }\n\n.app-name {\n  margin-bottom: 10px;\n  color: white; }\n\n/* 2. Then use it like this in you component scss */\n\nmat-icon {\n  font-size: 32px;\n  height: 32px;\n  width: 32px;\n  line-height: 32px; }\n\nmat-icon {\n  color: white; }\n\n.icon-margin {\n  margin-right: 50px; }\n\n@media (max-width: 376px) {\n  .icon-margin {\n    margin-right: 10px; } }\n\n.application-main-color-shadow {\n  background-color: #016464;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }\n\n.application-auth-color-shadow {\n  background-color: #525255;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }\n\n.component-scroll-bar {\n  /* Track */\n  /* Handle */\n  /* Handle on hover */ }\n\n.component-scroll-bar ::-webkit-scrollbar {\n    width: 15px; }\n\n.component-scroll-bar ::-webkit-scrollbar-track {\n    background: #f1f1f1;\n    border-radius: 15px; }\n\n.component-scroll-bar ::-webkit-scrollbar-thumb {\n    border-radius: 15px;\n    background: #888; }\n\n.component-scroll-bar ::-webkit-scrollbar-thumb:hover {\n    background: #555; }\n\nmat-card {\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);\n  overflow: auto;\n  margin: 1px;\n  border-radius: 15px; }\n\n/* app drawer breakpoint */\n\n::ng-deep .langSelect div.mat-select-arrow-wrapper {\n  display: none; }\n\n::ng-deep .langSelect.mat-select {\n  display: inline; }\n\n@media (max-width: 480px) {\n  .app-name {\n    display: none; } }\n\n#logo {\n  height: 50px;\n  width: 100px;\n  margin-right: 10px;\n  margin-top: -5px;\n  display: inline-block;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/main-components/header/main-header/header.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main-components/header/main-header/header.component.ts ***!
  \************************************************************************/
/*! exports provided: MainHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function() { return MainHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_service_navigation_nav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/service/navigation/nav.service */ "./src/app/@core/service/navigation/nav.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainHeaderComponent = /** @class */ (function () {
    function MainHeaderComponent(_translate, _router, navService) {
        this._translate = _translate;
        this._router = _router;
        this.navService = navService;
        this.toggleSideNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MainHeaderComponent.prototype.navToggle = function () {
        this.toggleSideNav.emit(true);
    };
    MainHeaderComponent.prototype.ngOnInit = function () {
        this.username = JSON.parse(localStorage.getItem('currentUser')).username;
    };
    MainHeaderComponent.prototype.showProfile = function () {
        this._router.navigate(['/pages/profile']);
    };
    MainHeaderComponent.prototype.logOut = function () {
        this._router.navigate(['/auth/logout']);
    };
    MainHeaderComponent.prototype.changeLang = function () {
        this._translate.use(this.setLang);
    };
    MainHeaderComponent.prototype.navigateToMainPage = function () {
        this._router.navigate(['/']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MainHeaderComponent.prototype, "toggleSideNav", void 0);
    MainHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/main-components/header/main-header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/main-components/header/main-header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_service_navigation_nav_service__WEBPACK_IMPORTED_MODULE_3__["NavService"]])
    ], MainHeaderComponent);
    return MainHeaderComponent;
}());



/***/ }),

/***/ "./src/app/main-components/login-footer/login-footer.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/main-components/login-footer/login-footer.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"footer-row\">-->\r\n<!--<footer class=\"footer application-main-color-shadow text-color\">-->\r\n<!--{{ 'Footer.footer-text' | translate }}-->\r\n<!--</footer>-->\r\n<!--</div>-->\r\n\r\n<div class=\"footer-row footer application-auth-color-shadow text-color\">\r\n    <div class=\"text\">\r\n      <span class=\"created-by\">Created with ♥ by <b><a href=\"https://github.com/patrykzdral\" target=\"_blank\">Patryk Zdral</a></b> 2019</span>\r\n    </div>\r\n    <div class=\"social-div\">\r\n      <fa class=\"socials\" name=\"linkedin\"></fa>\r\n      <fa class=\"socials\" name=\"facebook\"></fa>\r\n      <fa class=\"socials\" name=\"github\"></fa>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main-components/login-footer/login-footer.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/main-components/login-footer/login-footer.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".application-main-color-shadow {\n  background-color: #016464;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }\n\n.application-auth-color-shadow {\n  background-color: #525255;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }\n\n.component-scroll-bar {\n  /* Track */\n  /* Handle */\n  /* Handle on hover */ }\n\n.component-scroll-bar ::-webkit-scrollbar {\n    width: 15px; }\n\n.component-scroll-bar ::-webkit-scrollbar-track {\n    background: #f1f1f1;\n    border-radius: 15px; }\n\n.component-scroll-bar ::-webkit-scrollbar-thumb {\n    border-radius: 15px;\n    background: #888; }\n\n.component-scroll-bar ::-webkit-scrollbar-thumb:hover {\n    background: #555; }\n\nmat-card {\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);\n  overflow: auto;\n  margin: 1px;\n  border-radius: 15px; }\n\n.text-color {\n  color: #ffffff; }\n\n/* app drawer breakpoint */\n\n.footer-row {\n  display: flex;\n  height: 5vh;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 0; }\n\n.footer-row .text {\n    margin-left: 10px; }\n\n.footer-row .socials {\n    margin-left: 10px;\n    margin-right: 10px;\n    cursor: pointer; }\n\n@media (max-width: 480px) {\n  .footer-row {\n    justify-content: center; }\n    .footer-row .social-div {\n      display: none; } }\n\na {\n  color: #b5d4d6;\n  text-decoration: none;\n  cursor: pointer; }\n\na:hover {\n  text-decoration: underline; }\n"

/***/ }),

/***/ "./src/app/main-components/login-footer/login-footer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main-components/login-footer/login-footer.component.ts ***!
  \************************************************************************/
/*! exports provided: LoginFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFooterComponent", function() { return LoginFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginFooterComponent = /** @class */ (function () {
    function LoginFooterComponent() {
    }
    LoginFooterComponent.prototype.ngOnInit = function () {
    };
    LoginFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-footer',
            template: __webpack_require__(/*! ./login-footer.component.html */ "./src/app/main-components/login-footer/login-footer.component.html"),
            styles: [__webpack_require__(/*! ./login-footer.component.scss */ "./src/app/main-components/login-footer/login-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginFooterComponent);
    return LoginFooterComponent;
}());



/***/ }),

/***/ "./src/app/main-components/main-components.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/main-components/main-components.module.ts ***!
  \***********************************************************/
/*! exports provided: MainComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponentsModule", function() { return MainComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/main-components/sidenav/sidenav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/main-components/footer/footer.component.ts");
/* harmony import */ var _mat_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mat.module */ "./src/app/mat.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _header_main_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/main-header/header.component */ "./src/app/main-components/header/main-header/header.component.ts");
/* harmony import */ var _header_login_header_login_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/login-header/login-header.component */ "./src/app/main-components/header/login-header/login-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sidenav_menu_list_item_menu_list_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidenav/menu-list-item/menu-list-item.component */ "./src/app/main-components/sidenav/menu-list-item/menu-list-item.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _login_footer_login_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login-footer/login-footer.component */ "./src/app/main-components/login-footer/login-footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var MainComponentsModule = /** @class */ (function () {
    function MainComponentsModule() {
    }
    MainComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__["SidenavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
                _header_login_header_login_header_component__WEBPACK_IMPORTED_MODULE_9__["LoginHeaderComponent"],
                _header_main_header_header_component__WEBPACK_IMPORTED_MODULE_8__["MainHeaderComponent"],
                _login_footer_login_footer_component__WEBPACK_IMPORTED_MODULE_13__["LoginFooterComponent"],
                _sidenav_menu_list_item_menu_list_item_component__WEBPACK_IMPORTED_MODULE_11__["MenuListItemComponent"]
            ],
            imports: [
                //BrowserModule,
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_12__["AngularFontAwesomeModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _mat_module__WEBPACK_IMPORTED_MODULE_3__["MatModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
            ],
            exports: [
                _header_login_header_login_header_component__WEBPACK_IMPORTED_MODULE_9__["LoginHeaderComponent"],
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__["SidenavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
                _header_main_header_header_component__WEBPACK_IMPORTED_MODULE_8__["MainHeaderComponent"],
                _login_footer_login_footer_component__WEBPACK_IMPORTED_MODULE_13__["LoginFooterComponent"]
            ],
            providers: []
        })
    ], MainComponentsModule);
    return MainComponentsModule;
}());



/***/ }),

/***/ "./src/app/main-components/sidenav/menu-list-item/menu-list-item.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/main-components/sidenav/menu-list-item/menu-list-item.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a mat-list-item [ngStyle]=\"{'padding-left': (depth * 12) + 'px'}\" (click)=\"onItemSelected(item)\"\r\n   [ngClass]=\"{'active': item.route ? router.isActive(item.route, true): false, 'expanded': expanded}\">\r\n  <mat-divider></mat-divider>\r\n\r\n  <mat-icon class=\"routeIcon\">{{item.iconName}}</mat-icon>\r\n  {{item.displayName}}\r\n  <span *ngIf=\"item.children && item.children.length\">\r\n    <mat-icon class=\"ex-icon\" [@indicatorRotate]=\"expanded ? 'expanded': 'collapsed'\">\r\n      expand_more\r\n    </mat-icon>\r\n  </span>\r\n</a>\r\n<div *ngIf=\"expanded\">\r\n  <app-menu-list-item *ngFor=\"let child of item.children\" [item]=\"child\" [depth]=\"depth+1\">\r\n  </app-menu-list-item>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main-components/sidenav/menu-list-item/menu-list-item.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/main-components/sidenav/menu-list-item/menu-list-item.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  display: block;\n  outline: none; }\n:host .mat-list-item.active {\n    background-color: #d1c4e9; }\n:host:hover > .mat-list-item:not(.expanded), :host:focus > .mat-list-item:not(.expanded) {\n    background-color: #c5cae9 !important; }\n.mat-list-item .routeIcon {\n  margin-right: 15px; }\n.mat-list-item .ex-icon {\n  margin-left: 50px; }\n"

/***/ }),

/***/ "./src/app/main-components/sidenav/menu-list-item/menu-list-item.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main-components/sidenav/menu-list-item/menu-list-item.component.ts ***!
  \************************************************************************************/
/*! exports provided: MenuListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListItemComponent", function() { return MenuListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _core_service_navigation_nav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/service/navigation/nav.service */ "./src/app/@core/service/navigation/nav.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuListItemComponent = /** @class */ (function () {
    function MenuListItemComponent(navService, router) {
        this.navService = navService;
        this.router = router;
        this.ariaExpanded = this.expanded;
        if (this.depth === undefined) {
            this.depth = 0;
        }
    }
    MenuListItemComponent.prototype.onItemSelected = function (item) {
        if (!item.children || !item.children.length) {
            this.router.navigate([item.route]);
            this.navService.closeNav();
        }
        if (item.children && item.children.length) {
            this.expanded = !this.expanded;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.aria-expanded'),
        __metadata("design:type", Object)
    ], MenuListItemComponent.prototype, "ariaExpanded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MenuListItemComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MenuListItemComponent.prototype, "depth", void 0);
    MenuListItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-list-item',
            template: __webpack_require__(/*! ./menu-list-item.component.html */ "./src/app/main-components/sidenav/menu-list-item/menu-list-item.component.html"),
            styles: [__webpack_require__(/*! ./menu-list-item.component.scss */ "./src/app/main-components/sidenav/menu-list-item/menu-list-item.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('indicatorRotate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(0deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(180deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('225ms cubic-bezier(0.4,0.0,0.2,1)')),
                ])
            ]
        }),
        __metadata("design:paramtypes", [_core_service_navigation_nav_service__WEBPACK_IMPORTED_MODULE_3__["NavService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuListItemComponent);
    return MenuListItemComponent;
}());



/***/ }),

/***/ "./src/app/main-components/sidenav/sidenav.component.html":
/*!****************************************************************!*\
  !*** ./src/app/main-components/sidenav/sidenav.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-scroll-bar\">\r\n  <app-main-header></app-main-header>\r\n  <mat-sidenav-container>\r\n    <mat-sidenav #appDrawer [mode]=\"navbarMode()\" class=\"sidenav border\" [opened]=\"screenResize()\">\r\n      <mat-nav-list>\r\n        <mat-list-item routerLink=\"/pages/maps\" routerLinkActive=\"active\">\r\n          <mat-icon mat-list-icon>dashboard</mat-icon>\r\n          <div fxFlex=\"5\"></div>\r\n          <div class=\"sidenav-item\">\r\n            <h5>Main</h5>\r\n          </div>\r\n          <mat-divider></mat-divider>\r\n        </mat-list-item>\r\n        <h3 mat-subheader class=\"padding-subheader\">bookmarks</h3>\r\n\r\n        <app-menu-list-item *ngFor=\"let item of navItems\" [item]=\"item\"></app-menu-list-item>\r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n      <div class=\"router-container\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n      <app-footer class=\"footer-container\"></app-footer>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/main-components/sidenav/sidenav.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/main-components/sidenav/sidenav.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".application-main-color-shadow {\n  background-color: #016464;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }\n\n.application-auth-color-shadow {\n  background-color: #525255;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }\n\n.component-scroll-bar {\n  /* Track */\n  /* Handle */\n  /* Handle on hover */ }\n\n.component-scroll-bar ::-webkit-scrollbar {\n    width: 15px; }\n\n.component-scroll-bar ::-webkit-scrollbar-track {\n    background: #f1f1f1;\n    border-radius: 15px; }\n\n.component-scroll-bar ::-webkit-scrollbar-thumb {\n    border-radius: 15px;\n    background: #888; }\n\n.component-scroll-bar ::-webkit-scrollbar-thumb:hover {\n    background: #555; }\n\nmat-card {\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);\n  overflow: auto;\n  margin: 1px;\n  border-radius: 15px; }\n\n#container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\nh1.app-name {\n  margin-left: 8px; }\n\n.active {\n  background-color: rgba(9, 30, 66, 0.25); }\n\n.sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1; }\n\n.router-container {\n  overflow-x: hidden;\n  min-height: 85vh; }\n\n.sidenav-content {\n  margin-top: 15px; }\n\n.sidenav {\n  overflow-x: hidden;\n  width: 200px;\n  background-color: #ffffff; }\n\n.sidenav-item {\n  padding-top: 5px; }\n\n.border {\n  border-style: groove; }\n\n.padding-subheader {\n  padding-bottom: 0; }\n\n.mat-nav-list {\n  padding-top: 0; }\n"

/***/ }),

/***/ "./src/app/main-components/sidenav/sidenav.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/main-components/sidenav/sidenav.component.ts ***!
  \**************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_service_navigation_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@core/service/navigation/nav.service */ "./src/app/@core/service/navigation/nav.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(navService) {
        this.navService = navService;
        this.navItems = [
            {
                displayName: 'concerts',
                iconName: 'event',
                children: [
                    {
                        displayName: 'create new',
                        iconName: 'create_new_folder',
                        route: '/pages/concerts/create-new'
                    },
                    {
                        displayName: 'show all',
                        iconName: 'folder',
                        route: '/pages/concerts/show-all'
                    },
                    {
                        displayName: 'my concerts',
                        iconName: 'star_half',
                        route: '/pages/concerts/admin-concerts'
                    }
                ]
            },
            {
                displayName: 'friends',
                iconName: 'person_pin',
                route: '/pages/friends'
            },
            {
                displayName: 'profile',
                iconName: 'assignment_ind',
                children: [
                    {
                        displayName: 'edit',
                        iconName: 'border_color',
                        route: '/pages/profile/edit'
                    },
                    {
                        displayName: 'show',
                        iconName: 'more',
                        route: '/pages/profile/show'
                    },
                    {
                        displayName: 'log out',
                        iconName: 'exit_to_app',
                        route: '/auth/logout'
                    }
                ]
            },
            {
                displayName: 'orchestras',
                iconName: 'music_note',
                route: '/pages/orchestra'
            }
        ];
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent.prototype.screenResize = function () {
        var mq = window.matchMedia('(min-width: 767px)');
        return mq.matches;
    };
    SidenavComponent.prototype.navbarMode = function () {
        var mq = window.matchMedia('(min-width: 767px)');
        if (mq.matches) {
            return 'side';
        }
        else
            return 'over';
    };
    SidenavComponent.prototype.ngAfterViewInit = function () {
        this.navService.appDrawer = this.appDrawer;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SidenavComponent.prototype, "depth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('appDrawer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SidenavComponent.prototype, "appDrawer", void 0);
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/main-components/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/main-components/sidenav/sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_service_navigation_nav_service__WEBPACK_IMPORTED_MODULE_1__["NavService"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/mat.module.ts":
/*!*******************************!*\
  !*** ./src/app/mat.module.ts ***!
  \*******************************/
/*! exports provided: MatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatModule", function() { return MatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MatModule = /** @class */ (function () {
    function MatModule() {
    }
    MatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]
            ]
        })
    ], MatModule);
    return MatModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/account-activated/account-activated.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/auth/account-activated/account-activated.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-auth-page-template>\r\n  <h2 class=\"title\">Account has been activated. Now you can login to your account</h2>\r\n  <button mat-stroked-button (click)=\"goToHome()\" >Take me to the login page</button>\r\n</app-auth-page-template>\r\n"

/***/ }),

/***/ "./src/app/pages/auth/account-activated/account-activated.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/auth/account-activated/account-activated.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".application-main-color-shadow {\n  background-color: #016464;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }\n\n.application-auth-color-shadow {\n  background-color: #525255;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }\n\n.component-scroll-bar {\n  /* Track */\n  /* Handle */\n  /* Handle on hover */ }\n\n.component-scroll-bar ::-webkit-scrollbar {\n    width: 15px; }\n\n.component-scroll-bar ::-webkit-scrollbar-track {\n    background: #f1f1f1;\n    border-radius: 15px; }\n\n.component-scroll-bar ::-webkit-scrollbar-thumb {\n    border-radius: 15px;\n    background: #888; }\n\n.component-scroll-bar ::-webkit-scrollbar-thumb:hover {\n    background: #555; }\n\nmat-card {\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);\n  overflow: auto;\n  margin: 1px;\n  border-radius: 15px; }\n\n.header {\n  min-height: 10vh; }\n\n.title {\n  margin-bottom: 30px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/pages/auth/account-activated/account-activated.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/auth/account-activated/account-activated.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AccountActivatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountActivatedComponent", function() { return AccountActivatedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountActivatedComponent = /** @class */ (function () {
    function AccountActivatedComponent(_router) {
        this._router = _router;
    }
    AccountActivatedComponent.prototype.ngOnInit = function () {
    };
    AccountActivatedComponent.prototype.goToHome = function () {
        this._router.navigate(['/']);
    };
    AccountActivatedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-activated',
            template: __webpack_require__(/*! ./account-activated.component.html */ "./src/app/pages/auth/account-activated/account-activated.component.html"),
            styles: [__webpack_require__(/*! ./account-activated.component.scss */ "./src/app/pages/auth/account-activated/account-activated.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AccountActivatedComponent);
    return AccountActivatedComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/auth-page-template/auth-page-template.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/auth/auth-page-template/auth-page-template.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site\">\r\n  <div class=\"header\">\r\n    <app-login-header></app-login-header>\r\n  </div>\r\n  <div class=\"content\"><!-- flex container -->\r\n    <ng-content></ng-content>\r\n  </div>\r\n  <div class=\"footer\">\r\n    <app-login-footer></app-login-footer>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/auth/auth-page-template/auth-page-template.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/auth/auth-page-template/auth-page-template.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  flex: 1; }\n\n.site {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/pages/auth/auth-page-template/auth-page-template.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/auth/auth-page-template/auth-page-template.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AuthPageTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageTemplateComponent", function() { return AuthPageTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthPageTemplateComponent = /** @class */ (function () {
    function AuthPageTemplateComponent() {
    }
    AuthPageTemplateComponent.prototype.ngOnInit = function () {
    };
    AuthPageTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-page-template',
            template: __webpack_require__(/*! ./auth-page-template.component.html */ "./src/app/pages/auth/auth-page-template/auth-page-template.component.html"),
            styles: [__webpack_require__(/*! ./auth-page-template.component.scss */ "./src/app/pages/auth/auth-page-template/auth-page-template.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthPageTemplateComponent);
    return AuthPageTemplateComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/auth.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.module.ts ***!
  \*******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/pages/auth/register/register.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/pages/auth/logout/logout.component.ts");
/* harmony import */ var _request_password_request_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request-password/request-password.component */ "./src/app/pages/auth/request-password/request-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/pages/auth/reset-password/reset-password.component.ts");
/* harmony import */ var _mat_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mat.module */ "./src/app/mat.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_components_main_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../main-components/main-components.module */ "./src/app/main-components/main-components.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var mat_progress_buttons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! mat-progress-buttons */ "./node_modules/mat-progress-buttons/esm5/mat-progress-buttons.es5.js");
/* harmony import */ var _account_activated_account_activated_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./account-activated/account-activated.component */ "./src/app/pages/auth/account-activated/account-activated.component.ts");
/* harmony import */ var _auth_page_template_auth_page_template_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth-page-template/auth-page-template.component */ "./src/app/pages/auth/auth-page-template/auth-page-template.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"],
                _request_password_request_password_component__WEBPACK_IMPORTED_MODULE_4__["RequestPasswordComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"],
                _account_activated_account_activated_component__WEBPACK_IMPORTED_MODULE_14__["AccountActivatedComponent"],
                _auth_page_template_auth_page_template_component__WEBPACK_IMPORTED_MODULE_15__["AuthPageTemplateComponent"],
            ],
            imports: [
                _mat_module__WEBPACK_IMPORTED_MODULE_6__["MatModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
                //BrowserModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
                _main_components_main_components_module__WEBPACK_IMPORTED_MODULE_11__["MainComponentsModule"],
                mat_progress_buttons__WEBPACK_IMPORTED_MODULE_13__["MatProgressButtonsModule"]
            ],
            exports: [
                _auth_page_template_auth_page_template_component__WEBPACK_IMPORTED_MODULE_15__["AuthPageTemplateComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"],
                _request_password_request_password_component__WEBPACK_IMPORTED_MODULE_4__["RequestPasswordComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"],
                _account_activated_account_activated_component__WEBPACK_IMPORTED_MODULE_14__["AccountActivatedComponent"]
            ],
            providers: []
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"flex-container\">-->\r\n<!--<div class=\"row\">-->\r\n<!--<h2 class=\"title\">{{'Auth.login.sign_in' | translate}}</h2>-->\r\n\r\n<!--<mat-form-field>-->\r\n<!--<input matInput placeholder=\"Enter you login\" type=\"text\" class=\"example-right-align\">-->\r\n\r\n<!--</mat-form-field>-->\r\n\r\n<!--<mat-form-field>-->\r\n<!--<input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\">-->\r\n<!--<mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>-->\r\n<!--</mat-form-field>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<div class=\"header\">\r\n  <app-login-header></app-login-header>\r\n</div>\r\n<div class=\"Aligner\"><!-- flex container -->\r\n  <div class=\"photo\">\r\n    <img src=\"../../../../assets/logo/main-logo2.png\" class=\"logo\">\r\n\r\n  </div>\r\n  <div class=\"Aligner-item\">\r\n    <mat-card class=\"mat-card\">\r\n\r\n      <div class=\"box\"><!-- flex item -->\r\n        <h2 class=\"sign_in\">{{'Auth.login.sign_in' | translate}}</h2>\r\n      </div>\r\n      <div class=\"box\"><!-- flex item -->\r\n        <h5 class=\"welcome\">{{'Auth.login.welcome' | translate}}</h5>\r\n      </div>\r\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"forms-container\">\r\n          <mat-form-field appearance=\"outline\">\r\n            <input matInput placeholder=\"Enter your username\" formControlName=\"username\" required>\r\n            <mat-error *ngIf=\"username.invalid\">{{getEmailErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field appearance=\"outline\">\r\n            <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\"\r\n                   formControlName=\"password\" required>\r\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n            <mat-error *ngIf=\"password.invalid\">{{getPasswordErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"remember-row\">\r\n          <mat-checkbox class=\"remember-me\">{{'Auth.login.remember' | translate}}</mat-checkbox>\r\n          <div class=\"gap\"></div>\r\n          <a class=\"forgot-password\" routerLink=\"../request-password\">Forgot Password?</a>\r\n        </div>\r\n        <div class=\"sign-button\">\r\n          <button class=\"login-button\" type=\"submit\" [disabled]=\"!loginForm.valid\" mat-stroked-button>Login</button>\r\n          <!--<mat-spinner-button class=\"login-button\" type=\"submit\"  [options]=\"spinnerButtonOptions\">Login</mat-spinner-button>-->\r\n          <div class=\"gap\"></div>\r\n          <button [disabled]=\"loading\" class=\"register-button\" mat-stroked-button [routerLink]=\"['/auth/register']\">Register</button>\r\n        </div>\r\n      </form>\r\n    </mat-card>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"footer\">\r\n  <app-login-footer></app-login-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/auth/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".application-main-color-shadow {\n  background-color: #016464;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }\n\n.application-auth-color-shadow {\n  background-color: #525255;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }\n\n.component-scroll-bar {\n  /* Track */\n  /* Handle */\n  /* Handle on hover */ }\n\n.component-scroll-bar ::-webkit-scrollbar {\n    width: 15px; }\n\n.component-scroll-bar ::-webkit-scrollbar-track {\n    background: #f1f1f1;\n    border-radius: 15px; }\n\n.component-scroll-bar ::-webkit-scrollbar-thumb {\n    border-radius: 15px;\n    background: #888; }\n\n.component-scroll-bar ::-webkit-scrollbar-thumb:hover {\n    background: #555; }\n\nmat-card {\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);\n  overflow: auto;\n  margin: 1px;\n  border-radius: 15px; }\n\n.header {\n  height: 10vh; }\n\n.Aligner {\n  display: flex;\n  flex-direction: row;\n  min-height: 85vh; }\n\n.Aligner .photo {\n    margin-left: 50px;\n    display: flex;\n    flex: 50%;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column; }\n\n.Aligner .photo .logo {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      max-width: 90%; }\n\n.Aligner .Aligner-item {\n    display: flex;\n    flex: 50%;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column; }\n\n.Aligner .Aligner-item .mat-card {\n      width: 90%; }\n\n.Aligner .Aligner-item .mat-card .sign_in {\n        size: 24px;\n        margin-bottom: 40px; }\n\n.Aligner .Aligner-item .mat-card .welcome {\n        color: #807f82;\n        font-size: 12px; }\n\n.Aligner .Aligner-item .mat-card .forms-container {\n        display: flex;\n        flex-direction: column; }\n\n.Aligner .Aligner-item .mat-card .remember-row {\n        display: flex;\n        margin-top: 30px;\n        margin-bottom: 30px; }\n\n.Aligner .Aligner-item .mat-card .remember-row .remember-me {\n          flex: 40%; }\n\n.Aligner .Aligner-item .mat-card .remember-row .gap {\n          flex: 20%; }\n\n.Aligner .Aligner-item .mat-card .remember-row .forgot-password {\n          text-align: right;\n          color: #016464;\n          flex: 40%; }\n\n.Aligner .Aligner-item .mat-card .sign-button {\n        display: flex; }\n\n.Aligner .Aligner-item .mat-card .sign-button .login-button {\n          flex: 48%; }\n\n.Aligner .Aligner-item .mat-card .sign-button .gap {\n          flex: 4%; }\n\n.Aligner .Aligner-item .mat-card .sign-button .register-button {\n          flex: 48%; }\n\n.box {\n  text-align: center;\n  /* will center text in <p>, which is not a flex item */ }\n\n@media (max-width: 800px) {\n  .Aligner .photo {\n    display: none; }\n  .Aligner .Aligner-item {\n    min-width: 100%; }\n    .Aligner .Aligner-item .sign-button {\n      display: flex; }\n      .Aligner .Aligner-item .sign-button .login-button {\n        flex: 50%; }\n      .Aligner .Aligner-item .sign-button .register-button {\n        flex: 50%; } }\n"

/***/ }),

/***/ "./src/app/pages/auth/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_service_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/service/authentication/authentication.service */ "./src/app/@core/service/authentication/authentication.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, _authenticationService, translate, _router) {
        this.route = route;
        this._authenticationService = _authenticationService;
        this.translate = translate;
        this._router = _router;
        //Validators.email
        this.loading = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
        this.hide = true;
        this.spinnerButtonOptions = {
            active: false,
            text: 'Spinner Button',
            spinnerSize: 100,
            raised: true,
            stroked: false,
            buttonColor: 'primary',
            spinnerColor: 'accent',
            fullWidth: false,
            disabled: false,
            mode: 'indeterminate'
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.loginForm = new FormGroup({
        //   email : new FormControl('', [Validators.required, Validators.email]),
        //   password : new FormControl('', [Validators.required]),
        // });
    };
    Object.defineProperty(LoginComponent.prototype, "username", {
        get: function () { return this.loginForm.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () { return this.loginForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function () {
        // this._authenticationService.obtainAccessToken(this.loginData);
    };
    LoginComponent.prototype.getEmailErrorMessage = function () {
        return this.loginForm.get('username').hasError('required') ? 'You must enter an username' : '';
        // this.loginForm.get('username').hasError('email') ? 'Not a valid email' :
        //   '';
    };
    LoginComponent.prototype.getPasswordErrorMessage = function () {
        return this.loginForm.get('password').hasError('required') ? 'You must enter a password' : '';
    };
    LoginComponent.prototype.onSubmit = function () {
        this.spinnerButtonOptions.active = true;
        console.log(this.loginForm.value); // {first: 'Nancy', last: 'Drew'}
        this._authenticationService.obtainAccessToken(this.loginForm.value);
        this.spinnerButtonOptions.active = false;
        // this.spinnerButtonOptions.active = true;
        // setTimeout(() => {
        //   this.spinnerButtonOptions.active = false;
        // }, 3500)
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _core_service_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/logout/logout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/auth/logout/logout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-auth-page-template>\r\n  <h2 class=\"title\">You have been logged out</h2>\r\n  <button mat-stroked-button (click)=\"goToHome()\" >Take me to the login page</button>\r\n</app-auth-page-template>\r\n"

/***/ }),

/***/ "./src/app/pages/auth/logout/logout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/auth/logout/logout.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/auth/logout/logout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/logout/logout.component.ts ***!
  \*******************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_service_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/service/authentication/authentication.service */ "./src/app/@core/service/authentication/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(_router, _authenticationService) {
        this._router = _router;
        this._authenticationService = _authenticationService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this._authenticationService.logout();
    };
    LogoutComponent.prototype.goToHome = function () {
        this._router.navigate(['/']);
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/pages/auth/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.scss */ "./src/app/pages/auth/logout/logout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _core_service_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/register/errorStateMatcher.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/register/errorStateMatcher.ts ***!
  \**********************************************************/
/*! exports provided: OwnErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnErrorStateMatcher", function() { return OwnErrorStateMatcher; });
var OwnErrorStateMatcher = /** @class */ (function () {
    function OwnErrorStateMatcher() {
    }
    OwnErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var invalidCtrl = (control && control.invalid && control.parent.dirty);
        var invalidParent = (control && control.parent && control.parent.invalid && control.parent.dirty);
        return (invalidCtrl || invalidParent);
    };
    return OwnErrorStateMatcher;
}());



/***/ }),

/***/ "./src/app/pages/auth/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"header\">-->\r\n<!--<app-login-header></app-login-header>-->\r\n<!--</div>-->\r\n<!--<div class=\"Aligner\">&lt;!&ndash; flex container &ndash;&gt;-->\r\n\r\n<!--<div class=\"Aligner-item\">-->\r\n<!--<mat-card>-->\r\n\r\n<!--<div class=\"box\">&lt;!&ndash; flex item &ndash;&gt;-->\r\n<!--<h2 class=\"sign_in\">Sign up</h2>-->\r\n<!--</div>-->\r\n<!--<form [formGroup]=\"registrationFormGroup\" (ngSubmit)=\"onSubmit()\">-->\r\n<!--<div class=\"forms-container\">-->\r\n<!--<mat-form-field appearance=\"outline\">-->\r\n<!--<input matInput placeholder=\"Enter your username\" formControlName=\"username\" required>-->\r\n<!--<mat-error *ngIf=\"username.invalid\">{{getUsernameMessage()}}</mat-error>-->\r\n<!--</mat-form-field>-->\r\n<!--<mat-form-field appearance=\"outline\">-->\r\n<!--<input matInput placeholder=\"Enter your email\" formControlName=\"email\" required>-->\r\n<!--<mat-error *ngIf=\"email.invalid\">{{getEmailErrorMessage()}}</mat-error>-->\r\n<!--</mat-form-field>-->\r\n<!--<div class=\"password-forms\" [formGroup]=\"passwordFormGroup\">-->\r\n<!--<mat-form-field appearance=\"outline\">-->\r\n<!--<input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\" required>-->\r\n<!--<mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>-->\r\n<!--<mat-error *ngIf=\"passwordFormGroup.controls.password.errors?.required && passwordFormGroup.controls.password.touched\">{{getPasswordErrorMessage()}}</mat-error>-->\r\n<!--</mat-form-field>-->\r\n\r\n<!--<mat-form-field appearance=\"outline\">-->\r\n<!--<input matInput placeholder=\"Repeat your password\" [type]=\"'password'\" formControlName=\"repeatPassword\" [errorStateMatcher]=\"matcher\" required>-->\r\n<!--<mat-error *ngIf=\"passwordFormGroup.controls.repeatPassword.errors?.required && passwordFormGroup.controls.repeatPassword.touched\">{{getPasswordRepeatErrorMessage()}}</mat-error>-->\r\n<!--&lt;!&ndash;<mat-error *ngIf=\"passwordFormGroup.errors?.doesMatchPassword\">{{getPasswordNotEqualsMessage()}}</mat-error>&ndash;&gt;-->\r\n<!--<mat-error *ngIf=\"passwordFormGroup.hasError('notSame')\">Passwords do not match</mat-error>-->\r\n<!--</mat-form-field>-->\r\n<!--</div>-->\r\n<!--<button class=\"register-button button-style\" type=\"submit\" [disabled]=\"!registrationFormGroup.valid\" mat-stroked-button>-->\r\n<!--Register-->\r\n<!--</button>-->\r\n<!--</div>-->\r\n\r\n<!--</form>-->\r\n<!--</mat-card>-->\r\n\r\n<!--</div>-->\r\n<!--</div>-->\r\n\r\n\r\n<div class=\"header\">\r\n  <app-login-header></app-login-header>\r\n</div>\r\n<div class=\"Aligner\"><!-- flex container -->\r\n  <div class=\"Aligner-item\">\r\n    <mat-card>\r\n      <div class=\"box\"><!-- flex item -->\r\n        <h2 class=\"sign_in\">Sign up</h2>\r\n      </div>\r\n      <mat-horizontal-stepper [linear]=\"true\" #stepper>\r\n        <mat-step [stepControl]=\"registrationFormGroup\">\r\n          <ng-template matStepLabel>Fill out essential data</ng-template>\r\n          <form [formGroup]=\"registrationFormGroup\">\r\n            <div class=\"forms-container\">\r\n              <mat-form-field appearance=\"outline\">\r\n                <input matInput placeholder=\"Enter your username*\" formControlName=\"username\" required>\r\n                <mat-error *ngIf=\"username.invalid\">{{getUsernameMessage()}}</mat-error>\r\n              </mat-form-field>\r\n              <mat-form-field appearance=\"outline\">\r\n                <input matInput placeholder=\"Enter your email*\" formControlName=\"email\" required>\r\n                <mat-error *ngIf=\"email.invalid\">{{getEmailErrorMessage()}}</mat-error>\r\n              </mat-form-field>\r\n              <div class=\"password-forms\" [formGroup]=\"passwordFormGroup\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <input matInput placeholder=\"Enter your password*\" [type]=\"hide ? 'password' : 'text'\"\r\n                         formControlName=\"password\" required>\r\n                  <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                  <mat-error\r\n                    *ngIf=\"passwordFormGroup.controls.password.errors?.required && passwordFormGroup.controls.password.touched\">\r\n                    {{getPasswordErrorMessage()}}\r\n                  </mat-error>\r\n                  <mat-error\r\n                    *ngIf=\"passwordFormGroup.controls.password.errors?.pattern && passwordFormGroup.controls.password.touched\">\r\n                    {{getPatternPasswordErrorMessage()}}\r\n                  </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field appearance=\"outline\">\r\n                  <input matInput placeholder=\"Repeat your password\" [type]=\"'password'\"\r\n                         formControlName=\"repeatPassword\" [errorStateMatcher]=\"matcher\" required>\r\n                  <mat-error\r\n                    *ngIf=\"passwordFormGroup.controls.repeatPassword.errors?.required && passwordFormGroup.controls.repeatPassword.touched\">\r\n                    {{getPasswordRepeatErrorMessage()}}\r\n                  </mat-error>\r\n                  <!--<mat-error *ngIf=\"passwordFormGroup.errors?.doesMatchPassword\">{{getPasswordNotEqualsMessage()}}</mat-error>-->\r\n                  <mat-error *ngIf=\"passwordFormGroup.hasError('notSame')\">Passwords do not match</mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </form>\r\n        </mat-step>\r\n        <mat-step>\r\n\r\n          <ng-template matStepLabel>Fill out additional data</ng-template>\r\n          <div class=\"additional-forms-container\" [formGroup]=\"additionalFieldsFormGroup\">\r\n\r\n            <mat-form-field appearance=\"outline\">\r\n              <input matInput placeholder=\"Enter your first name\" formControlName=\"firstName\">\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\">\r\n              <input matInput placeholder=\"Enter your last name\" formControlName=\"lastName\">\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\">\r\n              <input type=\"number\" matInput placeholder=\"Enter your phone number\" formControlName=\"phoneNumber\">\r\n              <mat-icon matSuffix>phone</mat-icon>\r\n            </mat-form-field>\r\n            <div class=\"parent\">\r\n              <button class=\"middle-buttons\" mat-stroked-button matStepperPrevious>Back</button>\r\n              <div class=\"spacer\"></div>\r\n              <button class=\"middle-buttons\" mat-stroked-button matStepperNext>Next</button>\r\n            </div>\r\n          </div>\r\n        </mat-step>\r\n        <mat-step>\r\n          <ng-template matStepLabel>Done</ng-template>\r\n          <div class=\"done-section\">\r\n\r\n            <div class=\"register-row\">\r\n            <button class=\"register-button button-style\" (click)=\"onSubmit()\"\r\n                    [disabled]=\"!registrationFormGroup.valid\"\r\n                    mat-stroked-button>\r\n              Register\r\n            </button>\r\n          </div>\r\n            <div class=\"reset-row\">\r\n              <button class=\"middle-buttons\" mat-stroked-button matStepperPrevious>Back</button>\r\n              <div class=\"spacer\"></div>\r\n              <button class=\"middle-buttons\" mat-stroked-button (click)=\"stepper.reset()\">Reset</button>\r\n            </div>\r\n\r\n          </div>\r\n        </mat-step>\r\n      </mat-horizontal-stepper>\r\n    </mat-card>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/auth/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".application-main-color-shadow {\n  background-color: #016464;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }\n\n.application-auth-color-shadow {\n  background-color: #525255;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }\n\n.component-scroll-bar {\n  /* Track */\n  /* Handle */\n  /* Handle on hover */ }\n\n.component-scroll-bar ::-webkit-scrollbar {\n    width: 15px; }\n\n.component-scroll-bar ::-webkit-scrollbar-track {\n    background: #f1f1f1;\n    border-radius: 15px; }\n\n.component-scroll-bar ::-webkit-scrollbar-thumb {\n    border-radius: 15px;\n    background: #888; }\n\n.component-scroll-bar ::-webkit-scrollbar-thumb:hover {\n    background: #555; }\n\nmat-card {\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);\n  overflow: auto;\n  margin: 1px;\n  border-radius: 15px; }\n\n.application-main-color-shadow {\n  background-color: #016464;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }\n\n.application-auth-color-shadow {\n  background-color: #525255;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }\n\n.component-scroll-bar {\n  /* Track */\n  /* Handle */\n  /* Handle on hover */ }\n\n.component-scroll-bar ::-webkit-scrollbar {\n    width: 15px; }\n\n.component-scroll-bar ::-webkit-scrollbar-track {\n    background: #f1f1f1;\n    border-radius: 15px; }\n\n.component-scroll-bar ::-webkit-scrollbar-thumb {\n    border-radius: 15px;\n    background: #888; }\n\n.component-scroll-bar ::-webkit-scrollbar-thumb:hover {\n    background: #555; }\n\nmat-card {\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);\n  overflow: auto;\n  margin: 1px;\n  border-radius: 15px; }\n\n.button-style {\n  border-radius: 100px 100px 100px 100px;\n  background-color: #016464;\n  color: white; }\n\n.header {\n  min-height: 10vh; }\n\n.Aligner {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  min-height: 90vh; }\n\n.Aligner .Aligner-item .forms-container {\n    display: flex;\n    flex-direction: column; }\n\n.Aligner .Aligner-item .forms-container .password-forms {\n      display: flex;\n      flex-direction: column; }\n\n.Aligner .Aligner-item .additional-forms-container {\n    display: flex;\n    flex-direction: column; }\n\n.Aligner .Aligner-item .done-section {\n    display: flex;\n    flex-direction: column; }\n\n.Aligner .Aligner-item .done-section .register-row {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: center;\n      padding: 10px 30px;\n      margin: 30px 0 30px 0; }\n\n.Aligner .Aligner-item .done-section .register-row .register-button {\n        flex: 100%;\n        /* fg: 0, fs: 0, fb: 100% */ }\n\n.Aligner .Aligner-item .done-section .reset-row {\n      display: flex;\n      flex-direction: row;\n      padding: 10px 30px; }\n\n.Aligner-item {\n  max-width: 70%;\n  min-width: 60%; }\n\n.box {\n  text-align: center;\n  /* will center text in <p>, which is not a flex item */ }\n\n.parent {\n  display: flex;\n  flex-direction: row; }\n\n.spacer {\n  flex-grow: 1; }\n\n.middle-buttons {\n  flex: 25%; }\n\n@media (max-width: 800px) {\n  .Aligner .Aligner-item {\n    max-width: 90%;\n    min-width: 90%; } }\n"

/***/ }),

/***/ "./src/app/pages/auth/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/auth/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _errorStateMatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorStateMatcher */ "./src/app/pages/auth/register/errorStateMatcher.ts");
/* harmony import */ var _core_service_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/service/user/user.service */ "./src/app/@core/service/user/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_model_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@core/model/user.model */ "./src/app/@core/model/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, userService, toastrService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.toastrService = toastrService;
        this.router = router;
        this.loading = false;
        this.hide = true;
        this.matcher = new _errorStateMatcher__WEBPACK_IMPORTED_MODULE_2__["OwnErrorStateMatcher"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.passwordFormGroup = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]],
            repeatPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, {
            validator: this.checkPasswords
        });
        this.additionalFieldsFormGroup = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.registrationFormGroup = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            passwordFormGroup: this.passwordFormGroup,
            additionalFields: this.additionalFieldsFormGroup
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "username", {
        get: function () {
            return this.registrationFormGroup.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () {
            return this.registrationFormGroup.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () {
            return this.passwordFormGroup.get('password');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.login = function () {
        // this._authenticationService.obtainAccessToken(this.loginData);
    };
    RegisterComponent.prototype.getUsernameMessage = function () {
        return this.username.hasError('required') ? 'You must enter username' :
            this.username.hasError('minlength') ? 'Username must be longer than 6 cases' : '';
    };
    RegisterComponent.prototype.getEmailErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter an email' :
            this.email.hasError('email') ? 'Not a valid email' : '';
    };
    RegisterComponent.prototype.getPasswordErrorMessage = function () {
        return 'You must enter password';
        //return this.password.hasError('required') ? 'You must enter a password':'';
    };
    RegisterComponent.prototype.getPasswordRepeatErrorMessage = function () {
        return 'You must repeat password';
    };
    RegisterComponent.prototype.getPasswordNotEqualsMessage = function () {
        return 'Password don\'t match';
    };
    RegisterComponent.prototype.getPatternPasswordErrorMessage = function () {
        return 'Password must has at least 6 cases, 1 Uppercase, 1 digit character and 1 special character';
    };
    RegisterComponent.prototype.checkPasswords = function (group) {
        var pass = group.controls.password.value;
        var confirmPass = group.controls.repeatPassword.value;
        return pass === confirmPass ? null : { notSame: true };
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new _core_model_user_model__WEBPACK_IMPORTED_MODULE_7__["User"]();
        //const resource = JSON.parse(this.registrationFormGroup.value);
        // user.username=
        console.log(this.passwordFormGroup);
        user.username = this.registrationFormGroup.controls['username'].value;
        user.email = this.registrationFormGroup.controls['email'].value;
        user.password = this.passwordFormGroup.controls['password'].value;
        user.matchingPassword = this.passwordFormGroup.controls['repeatPassword'].value;
        user.firstName = this.additionalFieldsFormGroup.controls['firstName'].value;
        user.lastName = this.additionalFieldsFormGroup.controls['lastName'].value;
        user.phoneNumber = this.additionalFieldsFormGroup.controls['phoneNumber'].value;
        console.log(user);
        this.userService.register(user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            //this.loading=true;
            _this.toastrService.success('Registration successful', 'Verification mail has been sent');
            _this.router.navigate(['/auth/login']);
        }, function (error) {
            _this.toastrService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/pages/auth/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _core_service_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/request-password/request-password.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/auth/request-password/request-password.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-auth-page-template>\r\n\r\n</app-auth-page-template>\r\n"

/***/ }),

/***/ "./src/app/pages/auth/request-password/request-password.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/auth/request-password/request-password.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/auth/request-password/request-password.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/auth/request-password/request-password.component.ts ***!
  \***************************************************************************/
/*! exports provided: RequestPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPasswordComponent", function() { return RequestPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RequestPasswordComponent = /** @class */ (function () {
    function RequestPasswordComponent() {
    }
    RequestPasswordComponent.prototype.ngOnInit = function () {
    };
    RequestPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-password',
            template: __webpack_require__(/*! ./request-password.component.html */ "./src/app/pages/auth/request-password/request-password.component.html"),
            styles: [__webpack_require__(/*! ./request-password.component.scss */ "./src/app/pages/auth/request-password/request-password.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RequestPasswordComponent);
    return RequestPasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/reset-password/reset-password.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/auth/reset-password/reset-password.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-auth-page-template>\r\n\r\n</app-auth-page-template>\r\n"

/***/ }),

/***/ "./src/app/pages/auth/reset-password/reset-password.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/auth/reset-password/reset-password.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/auth/reset-password/reset-password.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/auth/reset-password/reset-password.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent() {
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/pages/auth/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/pages/auth/reset-password/reset-password.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\patrykzdral\WebstormProjects\musical-world-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map