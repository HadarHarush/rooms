(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/WUq":
/*!***********************************************!*\
  !*** ./src/app/cmps/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _min_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../min/loading/loading.component */ "gcNp");












function LoginComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "loading");
} }
class LoginComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.onChangeAuthType = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.username = '';
        this.password = '';
        this.isLoading = false;
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            try {
                yield this.userService.login(this.username, this.password);
                this.router.navigateByUrl('/');
            }
            catch (err) {
                //
            }
            finally {
                this.isLoading = false;
            }
        });
    }
    changeAuthType() {
        this.onChangeAuthType.emit('signup');
    }
    onGuest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.username = 'guest';
            this.password = 'guest';
            this.onSubmit();
        });
    }
    ngOnInit() { }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["login"]], outputs: { onChangeAuthType: "onChangeAuthType" }, decls: 24, vars: 4, consts: [[1, "login"], [1, "flex", "column", 3, "submit"], [1, "img-container", "center-childs"], ["src", "../../../assets/img/logo-small.jpg", "alt", ""], [1, "example-full-width"], ["matInput", "", "name", "username", "placeholder", "hadar", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "name", "password", "placeholder", "hadar1", 3, "ngModel", "ngModelChange"], [1, "buttons-bar", "flex"], ["mat-raised-button", "", "color", "primary", 1, "fg-1", "center-childs"], [4, "ngIf", "ngIfElse"], ["loading", ""], ["mat-raised-button", "", "color", "accent", "type", "button", 1, "fg-1", 3, "click"], [1, "change-auth-type"], [3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, LoginComponent_p_14_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LoginComponent_ng_template_15_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() { return ctx.onGuest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Guest ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Not have An account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_22_listener() { return ctx.changeAuthType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r1);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _min_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"]], styles: [".login[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.login[_ngcontent-%COMP%]   .buttons-bar[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-inline-end: 1rem;\n}\n.login[_ngcontent-%COMP%]   .change-auth-type[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.login[_ngcontent-%COMP%]   .change-auth-type[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.login[_ngcontent-%COMP%]   .change-auth-type[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #3498db;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXHNldHVwXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtBQURGO0FBRUU7RUFDRSx1QkFBQTtBQUFKO0FBRUU7RUFDRSxnQkFBQTtBQUFKO0FBQ0k7RUFDRSxpQkFBQTtBQUNOO0FBQU07RUFDRSxjQ1RFO0FEV1YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3Mvc2V0dXAvdmFyaWFibGVzXCI7XHJcblxyXG4ubG9naW4ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgLmJ1dHRvbnMtYmFyID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxcmVtO1xyXG4gIH1cclxuICAuY2hhbmdlLWF1dGgtdHlwZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgPiBwIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgID4gYSB7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIENPTE9SIFBBTEVUVEVcclxuJGRhcms6ICMzNDQ5NWU7XHJcbiRzdHJvbmctZGFyazogIzJjM2U1MDtcclxuJHByaW1hcnk6ICMzNDk4ZGI7XHJcbiRkYXJrLXByaW1hcnk6ICMyOTgwYjk7XHJcbiRzdWNjZXNzOiAjMmVjYzcxO1xyXG4kc2VsZjogIzI1ZDM2NjtcclxuJGRhcmstc3VjY2VzczogIzI3YWU2MDtcclxuJHByb2NjZXNzOiAjZjFjNDBmO1xyXG4kZGFyay1wcm9jY2VzczogI2YzOWMxMjtcclxuJGRhbmdlcjogI2U3NGMzYztcclxuJGRhcmstZGFuZ2VyOiAjYzAzOTJiO1xyXG4kZ3JleTogI2VjZjBmMTtcclxuJG1lZGl1bS1ncmV5OiAjZWZlZmVmO1xyXG4kZGFyay1ncmV5OiAjYmRjM2M3O1xyXG4kc3Ryb25nLWRhcmstZ3JleTogIzcwNzQ3NztcclxuLy8gVFlQT0dSQVBIWTpcclxuJHJlZy10ZXh0OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgXCJSb2JvdG9cIiwgXCJPeHlnZW5cIixcclxuICBcIlVidW50dVwiLCBcIkNhbnRhcmVsbFwiLCBcIkZpcmEgU2Fuc1wiLCBcIkRyb2lkIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gTEFZT1VUIEJSRUFLUE9JTlRTXHJcbiRicmVhay1uYXJyb3c6IDQ2MHB4O1xyXG4kYnJlYWstbm9ybWFsOiA3NDBweDtcclxuJGJyZWFrLXdpZGU6IDEwNjBweDtcclxuIl19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\הדר\Desktop\dev\angular\whatsapp\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2Rin":
/*!******************************************!*\
  !*** ./src/app/services/util.service.ts ***!
  \******************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UtilService {
    constructor() { }
    makeId(length = 5) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
}
UtilService.ɵfac = function UtilService_Factory(t) { return new (t || UtilService)(); };
UtilService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilService, factory: UtilService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "4wH/":
/*!*************************************************!*\
  !*** ./src/app/cmps/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _min_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../min/loading/loading.component */ "gcNp");












function SignupComponent_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "loading");
} }
class SignupComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.onChangeAuthType = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.username = '';
        this.password = '';
        this.fullname = 'Mach-Patcha';
        this.mail = 'MachPatcha@gmail.com';
        this.isLoading = false;
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            const { username, password, fullname, mail } = this;
            try {
                yield this.userService.signup({ username, password, fullname, mail });
                this.router.navigateByUrl('/');
            }
            catch (err) {
                //
            }
            finally {
                this.isLoading = false;
            }
        });
    }
    changeAuthType() {
        this.onChangeAuthType.emit('login');
    }
    ngOnInit() {
        console.log('creating signup cmp...');
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["signup"]], outputs: { onChangeAuthType: "onChangeAuthType" }, decls: 30, vars: 6, consts: [[1, "signup"], [1, "flex", "column", 3, "submit"], [1, "img-container", "center-childs"], ["src", "../../../assets/img/logo-small.jpg", "alt", ""], [1, "example-full-width"], ["matInput", "", "name", "username", "placeholder", "hadar", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "name", "password", "placeholder", "hadar1", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "name", "fullname", "placeholder", "Mach-Patcha", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "email", "name", "mail", "placeholder", "MachPatcha@gmail.com", 3, "ngModel", "ngModelChange"], [1, "buttons-bar", "flex"], ["mat-raised-button", "", "color", "primary", 1, "center-childs"], [4, "ngIf", "ngIfElse"], ["loading", ""], [1, "change-auth-type"], [3, "click"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function SignupComponent_Template_form_submit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_7_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_11_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_15_listener($event) { return ctx.fullname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_19_listener($event) { return ctx.mail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, SignupComponent_p_22_Template, 2, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, SignupComponent_ng_template_23_Template, 1, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupComponent_Template_a_click_28_listener() { return ctx.changeAuthType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.fullname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.mail);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r1);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _min_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"]], styles: [".signup[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.signup[_ngcontent-%COMP%]   .buttons-bar[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-inline-end: 1rem;\n}\n.signup[_ngcontent-%COMP%]   .change-auth-type[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.signup[_ngcontent-%COMP%]   .change-auth-type[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.signup[_ngcontent-%COMP%]   .change-auth-type[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #3498db;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWdudXAuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxzZXR1cFxcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7QUFERjtBQUVFO0VBQ0UsdUJBQUE7QUFBSjtBQUVFO0VBQ0UsZ0JBQUE7QUFBSjtBQUNJO0VBQ0UsaUJBQUE7QUFDTjtBQUFNO0VBQ0UsY0NURTtBRFdWIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9zZXR1cC92YXJpYWJsZXNcIjtcclxuXHJcbi5zaWdudXAge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgLmJ1dHRvbnMtYmFyID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxcmVtO1xyXG4gIH1cclxuICAuY2hhbmdlLWF1dGgtdHlwZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgPiBwIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgID4gYSB7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIENPTE9SIFBBTEVUVEVcclxuJGRhcms6ICMzNDQ5NWU7XHJcbiRzdHJvbmctZGFyazogIzJjM2U1MDtcclxuJHByaW1hcnk6ICMzNDk4ZGI7XHJcbiRkYXJrLXByaW1hcnk6ICMyOTgwYjk7XHJcbiRzdWNjZXNzOiAjMmVjYzcxO1xyXG4kc2VsZjogIzI1ZDM2NjtcclxuJGRhcmstc3VjY2VzczogIzI3YWU2MDtcclxuJHByb2NjZXNzOiAjZjFjNDBmO1xyXG4kZGFyay1wcm9jY2VzczogI2YzOWMxMjtcclxuJGRhbmdlcjogI2U3NGMzYztcclxuJGRhcmstZGFuZ2VyOiAjYzAzOTJiO1xyXG4kZ3JleTogI2VjZjBmMTtcclxuJG1lZGl1bS1ncmV5OiAjZWZlZmVmO1xyXG4kZGFyay1ncmV5OiAjYmRjM2M3O1xyXG4kc3Ryb25nLWRhcmstZ3JleTogIzcwNzQ3NztcclxuLy8gVFlQT0dSQVBIWTpcclxuJHJlZy10ZXh0OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgXCJSb2JvdG9cIiwgXCJPeHlnZW5cIixcclxuICBcIlVidW50dVwiLCBcIkNhbnRhcmVsbFwiLCBcIkZpcmEgU2Fuc1wiLCBcIkRyb2lkIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gTEFZT1VUIEJSRUFLUE9JTlRTXHJcbiRicmVhay1uYXJyb3c6IDQ2MHB4O1xyXG4kYnJlYWstbm9ybWFsOiA3NDBweDtcclxuJGJyZWFrLXdpZGU6IDEwNjBweDtcclxuIl19 */"] });


/***/ }),

/***/ "50mv":
/*!***************************************************************!*\
  !*** ./src/app/cmps/min/profile-img/profile-img.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfileImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileImgComponent", function() { return ProfileImgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProfileImgComponent {
    constructor() { }
    ngOnInit() { }
}
ProfileImgComponent.ɵfac = function ProfileImgComponent_Factory(t) { return new (t || ProfileImgComponent)(); };
ProfileImgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileImgComponent, selectors: [["profile-img"]], inputs: { imgUrl: "imgUrl", imgName: "imgName" }, decls: 2, vars: 1, consts: [[1, "profile-img", "center-childs"], [3, "src"]], template: function ProfileImgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgName ? "../../../../assets/img/" + ctx.imgName : ctx.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".profile-img[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  overflow-y: hidden;\n}\n.profile-img[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZmlsZS1pbWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBQ0UsZUFBQTtBQUVKIiwiZmlsZSI6InByb2ZpbGUtaW1nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaW1nIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICA+IGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "5U9e":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "gFX4");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SocketService {
    constructor() {
        //dev:
        // baseUrl = '//localhost:3030';
        //prod:
        this.baseUrl = '';
        console.log('socket service created!');
    }
    setup() {
        console.log('setupping');
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0__(this.baseUrl);
        return this.socket;
    }
    on(eventName, cb) {
        this.socket.off(eventName, cb).on(eventName, cb);
    }
    off(eventName, cb) {
        this.socket.off(eventName, cb);
    }
    emit(eventName, data) {
        this.socket.emit(eventName, data);
    }
    join(channel) {
        console.log('joining room...', channel);
        this.emit('join', channel);
    }
    terminate() {
        var _a;
        console.log('disconnecting');
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.socket = null;
    }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(); };
SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "81c6":
/*!*******************************************************!*\
  !*** ./src/app/cmps/chat-list/chat-list.component.ts ***!
  \*******************************************************/
/*! exports provided: ChatListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListComponent", function() { return ChatListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _chat_preview_chat_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat-preview/chat-preview.component */ "Es6o");



function ChatListComponent_chat_preview_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "chat-preview", 2);
} if (rf & 2) {
    const chat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chat", chat_r1);
} }
class ChatListComponent {
    constructor() { }
    ngOnInit() { }
}
ChatListComponent.ɵfac = function ChatListComponent_Factory(t) { return new (t || ChatListComponent)(); };
ChatListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatListComponent, selectors: [["chat-list"]], inputs: { chats: "chats" }, decls: 2, vars: 1, consts: [[1, "chat-list", "flex", "column"], ["trackBy", "trackByFn", 3, "chat", 4, "ngFor", "ngForOf"], ["trackBy", "trackByFn", 3, "chat"]], template: function ChatListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatListComponent_chat_preview_1_Template, 1, 1, "chat-preview", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chats);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _chat_preview_chat_preview_component__WEBPACK_IMPORTED_MODULE_2__["ChatPreviewComponent"]], styles: [".chat-list[_ngcontent-%COMP%] {\n  padding-right: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGF0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGIiwiZmlsZSI6ImNoYXQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0LWxpc3Qge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B9fE":
/*!*************************************************************!*\
  !*** ./src/app/cmps/user-preview/user-preview.component.ts ***!
  \*************************************************************/
/*! exports provided: UserPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPreviewComponent", function() { return UserPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _min_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../min/profile-img/profile-img.component */ "50mv");
/* harmony import */ var _min_circle_button_circle_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../min/circle-button/circle-button.component */ "LOzy");




class UserPreviewComponent {
    constructor() {
        this.addParticipation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onAddParticipation() {
        this.addParticipation.emit(this.user._id);
    }
}
UserPreviewComponent.ɵfac = function UserPreviewComponent_Factory(t) { return new (t || UserPreviewComponent)(); };
UserPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserPreviewComponent, selectors: [["user-preview"]], inputs: { user: "user" }, outputs: { addParticipation: "addParticipation" }, decls: 7, vars: 2, consts: [[1, "user-preview", "flex", "space-between", "align-center", "main-box"], [1, "group", "flex", "align-center"], [3, "imgUrl"], [3, "click"], ["src", "../../../assets/img/plus.svg", "alt", "Add"]], template: function UserPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "profile-img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "circle-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPreviewComponent_Template_circle_button_click_5_listener() { return ctx.onAddParticipation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgUrl", ctx.user.profileImgUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.username);
    } }, directives: [_min_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_1__["ProfileImgComponent"], _min_circle_button_circle_button_component__WEBPACK_IMPORTED_MODULE_2__["CircleButtonComponent"]], styles: ["[_nghost-%COMP%]:not(:last-child)    > *[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #bdc3c7;\n}\n\n.user-preview[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: white;\n}\n\n.user-preview[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-inline-end: 1rem;\n}\n\n.user-preview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: unset;\n  text-align: start;\n}\n\n.user-preview[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-inline-end: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQ0FBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBRUU7RUFDRSx1QkFBQTtBQUFKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUU7RUFDRSx1QkFBQTtBQUFKIiwiZmlsZSI6InVzZXItcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9zZXR1cC92YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0Om5vdCg6bGFzdC1jaGlsZCkgPiAqIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGRhcmstZ3JleTtcclxufVxyXG5cclxuLnVzZXItcHJldmlldyB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDFyZW07XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiB1bnNldDtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIH1cclxuICAuZ3JvdXAgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDFyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "BE/z":
/*!*************************************************!*\
  !*** ./src/app/cmps/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _min_circle_button_circle_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../min/circle-button/circle-button.component */ "LOzy");
/* harmony import */ var _min_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../min/profile-img/profile-img.component */ "50mv");






class HeaderComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loggedInUser = null;
    }
    ngOnInit() {
        this.userService.loggedInUser$.subscribe((currUser) => {
            this.loggedInUser = currUser;
        });
    }
    onLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.userService.logout();
                this.router.navigateByUrl('/auth');
            }
            catch (err) {
                console.log('error while trying log out from user service: ', err);
                throw err;
            }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 11, vars: 3, consts: [[1, "main-header"], [1, "main-container", "flex", "space-between", "align-center"], [1, "logo", 3, "routerLink"], ["src", "../../../assets/img/logo-small.jpg", "alt", "Logo"], [1, "buttons-box", "flex", "align-center"], ["routerLinkActive", "active", 3, "routerLink"], ["src", "../../../assets/img/plus.svg", "alt", ""], [1, "user-bar", "flex", "space-between", "align-center"], [3, "imgUrl"], ["src", "../../../assets/img/logout.svg", "alt", "exit", "height", "24", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "circle-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "profile-img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "circle-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_10_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/chat/add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imgUrl", ctx.loggedInUser.profileImgUrl);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _min_circle_button_circle_button_component__WEBPACK_IMPORTED_MODULE_4__["CircleButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _min_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_5__["ProfileImgComponent"]], styles: [".main-header[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: white;\n}\n.main-header[_ngcontent-%COMP%]   .user-bar[_ngcontent-%COMP%] {\n  margin-inline-start: 1.5rem;\n  background-color: #bdc3c7;\n  border-radius: 100px;\n  padding: 0.3rem;\n}\n.main-header[_ngcontent-%COMP%]   .user-bar[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-inline-end: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxzZXR1cFxcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FBREY7QUFHRTtFQUNFLDJCQUFBO0VBQ0EseUJDS1E7RURKUixvQkFBQTtFQUNBLGVBQUE7QUFESjtBQUVJO0VBQ0UsdUJBQUE7QUFBTiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3Mvc2V0dXAvdmFyaWFibGVzXCI7XHJcblxyXG4ubWFpbi1oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgLnVzZXItYmFyIHtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDEuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIHBhZGRpbmc6IDAuM3JlbTtcclxuICAgID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIENPTE9SIFBBTEVUVEVcclxuJGRhcms6ICMzNDQ5NWU7XHJcbiRzdHJvbmctZGFyazogIzJjM2U1MDtcclxuJHByaW1hcnk6ICMzNDk4ZGI7XHJcbiRkYXJrLXByaW1hcnk6ICMyOTgwYjk7XHJcbiRzdWNjZXNzOiAjMmVjYzcxO1xyXG4kc2VsZjogIzI1ZDM2NjtcclxuJGRhcmstc3VjY2VzczogIzI3YWU2MDtcclxuJHByb2NjZXNzOiAjZjFjNDBmO1xyXG4kZGFyay1wcm9jY2VzczogI2YzOWMxMjtcclxuJGRhbmdlcjogI2U3NGMzYztcclxuJGRhcmstZGFuZ2VyOiAjYzAzOTJiO1xyXG4kZ3JleTogI2VjZjBmMTtcclxuJG1lZGl1bS1ncmV5OiAjZWZlZmVmO1xyXG4kZGFyay1ncmV5OiAjYmRjM2M3O1xyXG4kc3Ryb25nLWRhcmstZ3JleTogIzcwNzQ3NztcclxuLy8gVFlQT0dSQVBIWTpcclxuJHJlZy10ZXh0OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgXCJSb2JvdG9cIiwgXCJPeHlnZW5cIixcclxuICBcIlVidW50dVwiLCBcIkNhbnRhcmVsbFwiLCBcIkZpcmEgU2Fuc1wiLCBcIkRyb2lkIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gTEFZT1VUIEJSRUFLUE9JTlRTXHJcbiRicmVhay1uYXJyb3c6IDQ2MHB4O1xyXG4kYnJlYWstbm9ybWFsOiA3NDBweDtcclxuJGJyZWFrLXdpZGU6IDEwNjBweDtcclxuIl19 */"] });


/***/ }),

/***/ "EHaA":
/*!*************************************************************!*\
  !*** ./src/app/cmps/notification/notification.component.ts ***!
  \*************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-event-bus */ "q5jK");


class NotificationComponent {
    constructor(eventBus) {
        this.eventBus = eventBus;
    }
    ngOnInit() {
        this.eventBus.on('notif').subscribe((metaData) => {
            console.log('*notif*, metaData:', metaData);
        });
        this.eventBus.on('chat-update').subscribe((metaData) => {
            console.log('*chat-update*, metaData:', metaData);
        });
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_event_bus__WEBPACK_IMPORTED_MODULE_1__["NgEventBus"])); };
NotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["notification"]], decls: 1, vars: 0, consts: [[1, "notification"]], template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Es6o":
/*!*************************************************************!*\
  !*** ./src/app/cmps/chat-preview/chat-preview.component.ts ***!
  \*************************************************************/
/*! exports provided: ChatPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPreviewComponent", function() { return ChatPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _min_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../min/profile-img/profile-img.component */ "50mv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a1) { return ["/chat", a1]; };
class ChatPreviewComponent {
    constructor() { }
    get lastMsg() {
        if (!this.chat)
            return null;
        return this.chat.msgs[this.chat.msgs.length - 1];
    }
    ngOnInit() { }
}
ChatPreviewComponent.ɵfac = function ChatPreviewComponent_Factory(t) { return new (t || ChatPreviewComponent)(); };
ChatPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatPreviewComponent, selectors: [["chat-preview"]], inputs: { chat: "chat" }, decls: 10, vars: 10, consts: [["matRipple", "", 1, "chat-preview", "flex", "no-default-styles", "main-box", 3, "routerLink"], [3, "imgUrl"], [1, "last-msg-container", "flex", "column", "fg-1"]], template: function ChatPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "profile-img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.chat._id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgUrl", ctx.chat.imgUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.chat.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lastMsg ? ctx.lastMsg.from.username + ": " + ctx.lastMsg.txt : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 5, ctx.chat.createdAt, "short"));
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _min_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_3__["ProfileImgComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["[_nghost-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #bdc3c7;\n}\n\n.chat-preview[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: white;\n}\n\n.chat-preview[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-inline-end: 1rem;\n}\n\n.chat-preview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: unset;\n  text-align: start;\n}\n\n.chat-preview[_ngcontent-%COMP%]   .last-msg-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  max-width: 16ch;\n  text-overflow: ellipsis;\n  overflow-x: hidden;\n  max-height: 3.2em;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGF0LXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxnQ0FBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUNFO0VBQ0UsdUJBQUE7QUFDSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVJO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQU4iLCJmaWxlIjoiY2hhdC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL3NldHVwL3ZhcmlhYmxlc1wiO1xyXG46aG9zdDpub3QoOmxhc3QtY2hpbGQpIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGRhcmstZ3JleTtcclxufVxyXG5cclxuLmNoYXQtcHJldmlldyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDFyZW07XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiB1bnNldDtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIH1cclxuICAubGFzdC1tc2ctY29udGFpbmVyIHtcclxuICAgID4gKiB7XHJcbiAgICAgIG1heC13aWR0aDogMTZjaDtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgbWF4LWhlaWdodDogMy4yZW07XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "LOzy":
/*!*******************************************************************!*\
  !*** ./src/app/cmps/min/circle-button/circle-button.component.ts ***!
  \*******************************************************************/
/*! exports provided: CircleButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleButtonComponent", function() { return CircleButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = ["*"];
class CircleButtonComponent {
    constructor() { }
    ngOnInit() { }
}
CircleButtonComponent.ɵfac = function CircleButtonComponent_Factory(t) { return new (t || CircleButtonComponent)(); };
CircleButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CircleButtonComponent, selectors: [["circle-button"]], inputs: { navLink: "navLink" }, ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "circle-button", "center-childs", "no-default-styles"]], template: function CircleButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".circle-button[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  transition: background-color 0.2s;\n}\n.circle-button.active[_ngcontent-%COMP%] {\n  background-color: #ecf0f1;\n}\n.circle-button[_ngcontent-%COMP%]:hover {\n  background-color: #ecf0f1;\n  transition: background-color 0.2s;\n}\ncircle-button[_ngcontent-%COMP%] {\n  background-color: red !important;\n}\ncircle-button.active[_ngcontent-%COMP%]    > .circle-button[_ngcontent-%COMP%] {\n  background-color: #ecf0f1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2lyY2xlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcc2V0dXBcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBREY7QUFFRTtFQUNFLHlCQ0NHO0FERFA7QUFFRTtFQUNFLHlCQ0ZHO0VER0gsaUNBQUE7QUFBSjtBQUlBO0VBQ0UsZ0NBQUE7QUFERjtBQUtFO0VBQ0UseUJDYkc7QURXUCIsImZpbGUiOiJjaXJjbGUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3NldHVwL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmNpcmNsZS1idXR0b24ge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcclxuICAmLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcclxuICB9XHJcbn1cclxuXHJcbmNpcmNsZS1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5jaXJjbGUtYnV0dG9uLmFjdGl2ZSB7XHJcbiAgPiAuY2lyY2xlLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcclxuICB9XHJcbn1cclxuIiwiLy8gQ09MT1IgUEFMRVRURVxyXG4kZGFyazogIzM0NDk1ZTtcclxuJHN0cm9uZy1kYXJrOiAjMmMzZTUwO1xyXG4kcHJpbWFyeTogIzM0OThkYjtcclxuJGRhcmstcHJpbWFyeTogIzI5ODBiOTtcclxuJHN1Y2Nlc3M6ICMyZWNjNzE7XHJcbiRzZWxmOiAjMjVkMzY2O1xyXG4kZGFyay1zdWNjZXNzOiAjMjdhZTYwO1xyXG4kcHJvY2Nlc3M6ICNmMWM0MGY7XHJcbiRkYXJrLXByb2NjZXNzOiAjZjM5YzEyO1xyXG4kZGFuZ2VyOiAjZTc0YzNjO1xyXG4kZGFyay1kYW5nZXI6ICNjMDM5MmI7XHJcbiRncmV5OiAjZWNmMGYxO1xyXG4kbWVkaXVtLWdyZXk6ICNlZmVmZWY7XHJcbiRkYXJrLWdyZXk6ICNiZGMzYzc7XHJcbiRzdHJvbmctZGFyay1ncmV5OiAjNzA3NDc3O1xyXG4vLyBUWVBPR1JBUEhZOlxyXG4kcmVnLXRleHQ6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBcIlJvYm90b1wiLCBcIk94eWdlblwiLFxyXG4gIFwiVWJ1bnR1XCIsIFwiQ2FudGFyZWxsXCIsIFwiRmlyYSBTYW5zXCIsIFwiRHJvaWQgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBMQVlPVVQgQlJFQUtQT0lOVFNcclxuJGJyZWFrLW5hcnJvdzogNDYwcHg7XHJcbiRicmVhay1ub3JtYWw6IDc0MHB4O1xyXG4kYnJlYWstd2lkZTogMTA2MHB4O1xyXG4iXX0= */"] });


/***/ }),

/***/ "LRgY":
/*!*******************************************************************************!*\
  !*** ./src/app/cmps/participation-preview/participation-preview.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ParticipationPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipationPreviewComponent", function() { return ParticipationPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _min_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../min/profile-img/profile-img.component */ "50mv");
/* harmony import */ var _min_circle_button_circle_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../min/circle-button/circle-button.component */ "LOzy");




class ParticipationPreviewComponent {
    constructor() {
        this.removeParticipation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onRemoveParticipation() {
        this.removeParticipation.emit(this.user._id);
    }
    ngOnInit() { }
}
ParticipationPreviewComponent.ɵfac = function ParticipationPreviewComponent_Factory(t) { return new (t || ParticipationPreviewComponent)(); };
ParticipationPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParticipationPreviewComponent, selectors: [["participation-preview"]], inputs: { user: "user" }, outputs: { removeParticipation: "removeParticipation" }, decls: 7, vars: 2, consts: [[1, "participation-preview", "flex", "space-between", "align-center", "main-box"], [1, "group", "flex", "align-center"], [3, "imgUrl"], [3, "click"], ["src", "../../../assets/img/minus.png", "alt", "Minus"]], template: function ParticipationPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "profile-img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "circle-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParticipationPreviewComponent_Template_circle_button_click_5_listener() { return ctx.onRemoveParticipation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgUrl", ctx.user.profileImgUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.username);
    } }, directives: [_min_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_1__["ProfileImgComponent"], _min_circle_button_circle_button_component__WEBPACK_IMPORTED_MODULE_2__["CircleButtonComponent"]], styles: ["[_nghost-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #bdc3c7;\n}\n\n.participation-preview[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: white;\n}\n\n.participation-preview[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-inline-end: 1rem;\n}\n\n.participation-preview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: unset;\n  text-align: start;\n}\n\n.participation-preview[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-inline-end: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwYXJ0aWNpcGF0aW9uLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQ0FBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBRUU7RUFDRSx1QkFBQTtBQUFKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUU7RUFDRSx1QkFBQTtBQUFKIiwiZmlsZSI6InBhcnRpY2lwYXRpb24tcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9zZXR1cC92YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0Om5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZGFyay1ncmV5O1xyXG59XHJcblxyXG4ucGFydGljaXBhdGlvbi1wcmV2aWV3IHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMXJlbTtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IHVuc2V0O1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgfVxyXG4gIC5ncm91cCA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "OZx3":
/*!*******************************************************!*\
  !*** ./src/app/cmps/user-list/user-list.component.ts ***!
  \*******************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_preview_user_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-preview/user-preview.component */ "B9fE");




function UserListComponent_user_preview_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "user-preview", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addParticipation", function UserListComponent_user_preview_1_Template_user_preview_addParticipation_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const user_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onAddParticipation(user_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", user_r1);
} }
class UserListComponent {
    constructor() {
        this.addParticipation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    trackByFn(idx, user) {
        return user._id;
    }
    onAddParticipation(id) {
        this.addParticipation.emit(id);
    }
}
UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(); };
UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["user-list"]], inputs: { users: "users" }, outputs: { addParticipation: "addParticipation" }, decls: 2, vars: 1, consts: [[1, "user-list"], ["trackBy", "trackByFn", 3, "user", "addParticipation", 4, "ngFor", "ngForOf"], ["trackBy", "trackByFn", 3, "user", "addParticipation"]], template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserListComponent_user_preview_1_Template, 1, 1, "user-preview", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _user_preview_user_preview_component__WEBPACK_IMPORTED_MODULE_2__["UserPreviewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Sf8K":
/*!**************************************!*\
  !*** ./src/app/gurads/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loggedInUser = null;
        this.userService.loggedInUser$.subscribe((currUser) => (this.loggedInUser = currUser));
    }
    canActivate(route, state) {
        if (state.url === '/auth') {
            //want to go to auth scanerio...
            if (this.loggedInUser)
                this.router.navigateByUrl('/');
        }
        else {
            //want to go to app scanerio...
            if (!this.loggedInUser)
                this.router.navigateByUrl('/auth');
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var angular_notifier_styles_core_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-notifier/styles/core.scss */ "QIFT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/chat.service */ "sjK5");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/socket.service */ "5U9e");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-event-bus */ "q5jK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-notifier */ "VO+5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cmps_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cmps/header/header.component */ "BE/z");










function AppComponent_app_header_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
} }
class AppComponent {
    constructor(userService, chatService, socketService, eventBus) {
        this.userService = userService;
        this.chatService = chatService;
        this.socketService = socketService;
        this.eventBus = eventBus;
        this.loggedInUser = null;
    }
    ngOnInit() {
        this.userService.loggedInUser$.subscribe((currUser) => {
            if (currUser) {
                this.chatService.loadChats();
            }
            if (currUser !== this.loggedInUser) {
                if (currUser) {
                    //loggedOut => loggedIn scanerio:
                    this.socketService.terminate();
                    console.log('sending setup order...');
                    this.socketService.setup();
                    this.socketService.join(currUser._id);
                    this.socketService.on('notif', (data) => {
                        this.eventBus.cast('notif', data);
                    });
                    this.socketService.on('chat-update', (ev) => {
                        this.chatService.handleExternalUpdate(ev);
                    });
                    this.chatService.loadChats();
                }
                else if (!currUser) {
                    console.log('sending eliminate order...');
                    //loggedIn => loggedOut scanerio:
                    this.socketService.terminate();
                }
            }
            this.loggedInUser = currUser;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_event_bus__WEBPACK_IMPORTED_MODULE_5__["NgEventBus"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[1, "app", "flex", "column"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_app_header_1_Template, 1, 0, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "notifier-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loggedInUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], angular_notifier__WEBPACK_IMPORTED_MODULE_7__["NotifierContainerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _cmps_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"]], styles: [".app[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n}\n.app[_ngcontent-%COMP%]   .exp-height[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  background-color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUVKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLmV4cC1oZWlnaHQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Tzr/":
/*!**********************************************!*\
  !*** ./src/app/pages/auth/auth.component.ts ***!
  \**********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cmps_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cmps/login/login.component */ "/WUq");
/* harmony import */ var _cmps_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../cmps/signup/signup.component */ "4wH/");




function AuthComponent_login_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "login", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChangeAuthType", function AuthComponent_login_1_Template_login_onChangeAuthType_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.changeAuthType($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthComponent_signup_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "signup", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChangeAuthType", function AuthComponent_signup_2_Template_signup_onChangeAuthType_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.changeAuthType($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AuthComponent {
    constructor() {
        this.authType = 'login';
    }
    changeAuthType(newType) {
        console.log('changing auth type: ', newType);
        this.authType = newType;
    }
    ngOnInit() { }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 3, vars: 2, consts: [[1, "auth", "center-childs", "page"], [3, "onChangeAuthType", 4, "ngIf"], [3, "onChangeAuthType"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthComponent_login_1_Template, 1, 0, "login", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthComponent_signup_2_Template, 1, 0, "signup", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authType === "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authType === "signup");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _cmps_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _cmps_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]], styles: [".auth[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.auth[_ngcontent-%COMP%]   .buttons-bar[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-inline-end: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjtBQUFFO0VBQ0UsdUJBQUE7QUFFSiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgLmJ1dHRvbnMtYmFyID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxcmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "WSoB":
/*!**********************************************!*\
  !*** ./src/app/pages/chat/chat.component.ts ***!
  \**********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chat.service */ "sjK5");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _cmps_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cmps/chat-list/chat-list.component */ "81c6");






class ChatComponent {
    constructor(chatService) {
        this.chatService = chatService;
    }
    ngOnInit() {
        //load the the chats...
        this.chatService.loadChats();
        //subscribe to get updates...
        this.chatService.chats$.subscribe((currChats) => {
            this.chats = currChats;
        });
    }
    // async onLoadChat(chatId: string) {
    //   try {
    //     await this.chatService.loadChat(chatId);
    //   } catch (err) {
    //     console.log('error while trying fetch chat: ', err);
    //     throw err;
    //   }
    // }
    trackByFn(idx, chat) {
        return chat._id;
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 5, vars: 1, consts: [[1, "menu", "card", "flex", "column"], [1, "menu", "flex", "column"], [1, "example-full-width", "main-box"], ["matInput", "", "type", "search", "name", "username", "placeholder", "Search"], [3, "chats"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "chat-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chats", ctx.chats);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _cmps_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_5__["ChatListComponent"]], styles: ["[_nghost-%COMP%] {\n  overflow-y: hidden;\n  padding-top: 30px;\n  flex-grow: 1;\n}\n[_nghost-%COMP%]    > .card[_ngcontent-%COMP%] {\n  height: 90%;\n  margin: auto;\n}\n[_nghost-%COMP%]    > .card[_ngcontent-%COMP%]    > .menu[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]    > .card[_ngcontent-%COMP%]    > .menu[_ngcontent-%COMP%]   chat-list[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFFSjtBQURJO0VBQ0UsWUFBQTtBQUdOO0FBRk07RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFJUiIsImZpbGUiOiJjaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgPiAuY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgID4gLm1lbnUge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGNoYXQtbGlzdCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/chat/chat.component */ "WSoB");
/* harmony import */ var _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/auth/auth.component */ "Tzr/");
/* harmony import */ var _pages_chat_details_chat_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/chat-details/chat-details.component */ "aq/M");
/* harmony import */ var _cmps_chat_preview_chat_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cmps/chat-preview/chat-preview.component */ "Es6o");
/* harmony import */ var _cmps_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cmps/chat-list/chat-list.component */ "81c6");
/* harmony import */ var _cmps_msg_msg_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cmps/msg/msg.component */ "ySuk");
/* harmony import */ var _cmps_send_msg_bar_send_msg_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cmps/send-msg-bar/send-msg-bar.component */ "bqGQ");
/* harmony import */ var _cmps_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cmps/header/header.component */ "BE/z");
/* harmony import */ var _pages_chat_add_chat_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/chat-add/chat-add.component */ "fFco");
/* harmony import */ var _cmps_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cmps/user-list/user-list.component */ "OZx3");
/* harmony import */ var _cmps_user_preview_user_preview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cmps/user-preview/user-preview.component */ "B9fE");
/* harmony import */ var _cmps_participation_preview_participation_preview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cmps/participation-preview/participation-preview.component */ "LRgY");
/* harmony import */ var _cmps_min_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cmps/min/profile-img/profile-img.component */ "50mv");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-notifier */ "VO+5");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-event-bus */ "q5jK");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/socket.service */ "5U9e");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _cmps_min_circle_button_circle_button_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./cmps/min/circle-button/circle-button.component */ "LOzy");
/* harmony import */ var _cmps_notification_notification_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./cmps/notification/notification.component */ "EHaA");
/* harmony import */ var _cmps_min_loading_loading_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./cmps/min/loading/loading.component */ "gcNp");
/* harmony import */ var _cmps_login_login_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./cmps/login/login.component */ "/WUq");
/* harmony import */ var _cmps_signup_signup_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./cmps/signup/signup.component */ "4wH/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/core */ "fXoL");




















//services:


//meterial:













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineInjector"]({ providers: [ng_event_bus__WEBPACK_IMPORTED_MODULE_20__["NgEventBus"], _services_socket_service__WEBPACK_IMPORTED_MODULE_21__["SocketService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_19__["NotifierModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"],
        _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"],
        _pages_chat_details_chat_details_component__WEBPACK_IMPORTED_MODULE_7__["ChatDetailsComponent"],
        _cmps_chat_preview_chat_preview_component__WEBPACK_IMPORTED_MODULE_8__["ChatPreviewComponent"],
        _cmps_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_9__["ChatListComponent"],
        _cmps_msg_msg_component__WEBPACK_IMPORTED_MODULE_10__["MsgComponent"],
        _cmps_send_msg_bar_send_msg_bar_component__WEBPACK_IMPORTED_MODULE_11__["SendMsgBarComponent"],
        _cmps_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
        _pages_chat_add_chat_add_component__WEBPACK_IMPORTED_MODULE_13__["ChatAddComponent"],
        _cmps_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_14__["UserListComponent"],
        _cmps_user_preview_user_preview_component__WEBPACK_IMPORTED_MODULE_15__["UserPreviewComponent"],
        _cmps_participation_preview_participation_preview_component__WEBPACK_IMPORTED_MODULE_16__["ParticipationPreviewComponent"],
        _cmps_min_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_17__["ProfileImgComponent"],
        _cmps_min_circle_button_circle_button_component__WEBPACK_IMPORTED_MODULE_29__["CircleButtonComponent"],
        _cmps_notification_notification_component__WEBPACK_IMPORTED_MODULE_30__["NotificationComponent"],
        _cmps_min_loading_loading_component__WEBPACK_IMPORTED_MODULE_31__["LoadingComponent"],
        _cmps_login_login_component__WEBPACK_IMPORTED_MODULE_32__["LoginComponent"],
        _cmps_signup_signup_component__WEBPACK_IMPORTED_MODULE_33__["SignupComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
        angular_notifier__WEBPACK_IMPORTED_MODULE_19__["NotifierModule"]] }); })();


/***/ }),

/***/ "aq/M":
/*!**************************************************************!*\
  !*** ./src/app/pages/chat-details/chat-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ChatDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailsComponent", function() { return ChatDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chat.service */ "sjK5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-event-bus */ "q5jK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cmps_min_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cmps/min/profile-img/profile-img.component */ "50mv");
/* harmony import */ var _cmps_send_msg_bar_send_msg_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cmps/send-msg-bar/send-msg-bar.component */ "bqGQ");
/* harmony import */ var _cmps_msg_msg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../cmps/msg/msg.component */ "ySuk");








function ChatDetailsComponent_section_0_div_9_msg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "msg", 13);
} if (rf & 2) {
    const msg_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("msg", msg_r7);
} }
function ChatDetailsComponent_section_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatDetailsComponent_section_0_div_9_msg_1_Template, 1, 1, "msg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.chat.msgs);
} }
function ChatDetailsComponent_section_0_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No msgs in this chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatDetailsComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "profile-img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatDetailsComponent_section_0_div_9_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ChatDetailsComponent_section_0_ng_template_10_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "send-msg-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgUrl", ctx_r0.chat.imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx_r0.chat.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.usersList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.chat.msgs == null ? null : ctx_r0.chat.msgs.length)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chat", ctx_r0.chat);
} }
function ChatDetailsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChatDetailsComponent {
    constructor(chatService, route, eventBus) {
        this.chatService = chatService;
        this.route = route;
        this.eventBus = eventBus;
    }
    ngOnInit() {
        // load the relevant chat...
        this.subscription = this.route.params.subscribe(({ chatId }) => {
            console.log('chatId:', chatId);
            this.chatId = chatId;
        });
        //subscribe to get updates...
        this.chatService.chats$.subscribe((currChats) => {
            this.chat = currChats.find((currChat) => currChat._id === this.chatId);
        });
        this.eventBus.cast('notif', 'hello from chat details!!!');
    }
    get usersList() {
        if (!this.chat)
            return [];
        const res = this.chat.participations.map((currPrt) => {
            return `@${currPrt.username}`;
        });
        return res.join(', ');
    }
    trackByFn(idx, chat) {
        return chat._id;
    }
}
ChatDetailsComponent.ɵfac = function ChatDetailsComponent_Factory(t) { return new (t || ChatDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_event_bus__WEBPACK_IMPORTED_MODULE_3__["NgEventBus"])); };
ChatDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatDetailsComponent, selectors: [["chat-details"]], decls: 3, vars: 2, consts: [["class", "chat-details flex column", 4, "ngIf", "ngIfElse"], ["chatPlaceholder", ""], [1, "chat-details", "flex", "column"], [1, "chat-header"], [1, "main-container", "flex", "align-center"], [3, "imgUrl"], [1, "group"], [1, "chat-name"], ["class", "msg-list fg-1 main-container flex column", 4, "ngIf", "ngIfElse"], ["msgsPlaceholder", ""], [3, "chat"], [1, "msg-list", "fg-1", "main-container", "flex", "column"], ["trackBy", "trackByFn", 3, "msg", 4, "ngFor", "ngForOf"], ["trackBy", "trackByFn", 3, "msg"], [1, "msgs-placeholder", "main-container"], [1, "chat-placeholder", "main-container"]], template: function ChatDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatDetailsComponent_section_0_Template, 13, 6, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatDetailsComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chat)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _cmps_min_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_5__["ProfileImgComponent"], _cmps_send_msg_bar_send_msg_bar_component__WEBPACK_IMPORTED_MODULE_6__["SendMsgBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _cmps_msg_msg_component__WEBPACK_IMPORTED_MODULE_7__["MsgComponent"]], styles: ["[_nghost-%COMP%] {\n  flex-grow: 1;\n  overflow-y: hidden;\n}\n\n.chat-details[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.chat-details[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: white;\n}\n\n.chat-details[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-inline-end: 1rem;\n}\n\n.chat-details[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: unset;\n  text-align: start;\n}\n\n.chat-details[_ngcontent-%COMP%]   .msg-list[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\n.chat-details[_ngcontent-%COMP%]   .msg-list[_ngcontent-%COMP%]   msg[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGF0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFDRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUNNO0VBQ0UsdUJBQUE7QUFDUjs7QUFFSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQUFOOztBQUdFO0VBQ0UsZ0JBQUE7QUFESjs7QUFFSTtFQUNFLG1CQUFBO0FBQU4iLCJmaWxlIjoiY2hhdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jaGF0LWRldGFpbHMge1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLmNoYXQtaGVhZGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICAgID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogdW5zZXQ7XHJcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgfVxyXG4gIH1cclxuICAubXNnLWxpc3Qge1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG1zZzpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "bqGQ":
/*!*************************************************************!*\
  !*** ./src/app/cmps/send-msg-bar/send-msg-bar.component.ts ***!
  \*************************************************************/
/*! exports provided: SendMsgBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMsgBarComponent", function() { return SendMsgBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/chat.service */ "sjK5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _min_circle_button_circle_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../min/circle-button/circle-button.component */ "LOzy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _min_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../min/loading/loading.component */ "gcNp");








function SendMsgBarComponent__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SendMsgBarComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "loading");
} }
class SendMsgBarComponent {
    constructor(userService, chatService) {
        this.userService = userService;
        this.chatService = chatService;
        this.loggedInUser = null;
        this.isLoading = false;
    }
    ngOnInit() {
        this.userService.loggedInUser$.subscribe((currUser) => (this.loggedInUser = currUser));
    }
    onSendMsg() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            const { _id, username, profileImgUrl } = this.loggedInUser;
            const msg = {
                from: { _id, username, profileImgUrl },
                txt: this.txt,
                createdAt: Date.now(),
            };
            try {
                yield this.chatService.addMsg(this.chat._id, msg);
            }
            catch (err) {
                //
            }
            finally {
                this.isLoading = false;
            }
        });
    }
}
SendMsgBarComponent.ɵfac = function SendMsgBarComponent_Factory(t) { return new (t || SendMsgBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"])); };
SendMsgBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SendMsgBarComponent, selectors: [["send-msg-bar"]], inputs: { chat: "chat" }, decls: 8, vars: 3, consts: [[1, "send-msg-bar"], [1, "main-container", "flex", "align-center"], ["hidden", "", "id", "msgForm", 3, "submit"], ["type", "text", "name", "txt", "placeholder", "Type here...", "form", "msgForm", 1, "fg-1", 3, "ngModel", "ngModelChange"], [1, "send-button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24", 4, "ngIf", "ngIfElse"], ["loading", ""], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24"], ["fill", "red", "d", "M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"]], template: function SendMsgBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function SendMsgBarComponent_Template_form_submit_2_listener() { return ctx.onSendMsg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SendMsgBarComponent_Template_input_ngModelChange_3_listener($event) { return ctx.txt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "circle-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SendMsgBarComponent_Template_circle_button_click_4_listener() { return ctx.onSendMsg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SendMsgBarComponent__svg_svg_5_Template, 2, 0, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SendMsgBarComponent_ng_template_6_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.txt);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _min_circle_button_circle_button_component__WEBPACK_IMPORTED_MODULE_5__["CircleButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _min_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.send-msg-bar[_ngcontent-%COMP%] {\n  background-color: white;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.send-msg-bar[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-inline-end: 1rem;\n}\n\n.send-msg-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: #ecf0f1;\n  padding: 1rem 1rem;\n  border-radius: 100px;\n  outline: unset;\n  border: unset;\n  font-size: 16px;\n}\n\n.send-msg-bar[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #707477;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZW5kLW1zZy1iYXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxzZXR1cFxcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtBQURGOztBQUlBO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBREY7O0FBRUU7RUFDRSx1QkFBQTtBQUFKOztBQUVFO0VBQ0UseUJDRkc7RURHSCxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUU7RUFDRSxhQ1BlO0FET25CIiwiZmlsZSI6InNlbmQtbXNnLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9zZXR1cC92YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNlbmQtbXNnLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDFyZW07XHJcbiAgfVxyXG4gIGlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xyXG4gICAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBvdXRsaW5lOiB1bnNldDtcclxuICAgIGJvcmRlcjogdW5zZXQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIC5zZW5kLWJ1dHRvbiBwYXRoIHtcclxuICAgIGZpbGw6ICRzdHJvbmctZGFyay1ncmV5O1xyXG4gIH1cclxufVxyXG4iLCIvLyBDT0xPUiBQQUxFVFRFXHJcbiRkYXJrOiAjMzQ0OTVlO1xyXG4kc3Ryb25nLWRhcms6ICMyYzNlNTA7XHJcbiRwcmltYXJ5OiAjMzQ5OGRiO1xyXG4kZGFyay1wcmltYXJ5OiAjMjk4MGI5O1xyXG4kc3VjY2VzczogIzJlY2M3MTtcclxuJHNlbGY6ICMyNWQzNjY7XHJcbiRkYXJrLXN1Y2Nlc3M6ICMyN2FlNjA7XHJcbiRwcm9jY2VzczogI2YxYzQwZjtcclxuJGRhcmstcHJvY2Nlc3M6ICNmMzljMTI7XHJcbiRkYW5nZXI6ICNlNzRjM2M7XHJcbiRkYXJrLWRhbmdlcjogI2MwMzkyYjtcclxuJGdyZXk6ICNlY2YwZjE7XHJcbiRtZWRpdW0tZ3JleTogI2VmZWZlZjtcclxuJGRhcmstZ3JleTogI2JkYzNjNztcclxuJHN0cm9uZy1kYXJrLWdyZXk6ICM3MDc0Nzc7XHJcbi8vIFRZUE9HUkFQSFk6XHJcbiRyZWctdGV4dDogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFwiUm9ib3RvXCIsIFwiT3h5Z2VuXCIsXHJcbiAgXCJVYnVudHVcIiwgXCJDYW50YXJlbGxcIiwgXCJGaXJhIFNhbnNcIiwgXCJEcm9pZCBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuXHJcbi8vIExBWU9VVCBCUkVBS1BPSU5UU1xyXG4kYnJlYWstbmFycm93OiA0NjBweDtcclxuJGJyZWFrLW5vcm1hbDogNzQwcHg7XHJcbiRicmVhay13aWRlOiAxMDYwcHg7XHJcbiJdfQ== */"] });


/***/ }),

/***/ "fFco":
/*!******************************************************!*\
  !*** ./src/app/pages/chat-add/chat-add.component.ts ***!
  \******************************************************/
/*! exports provided: ChatAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatAddComponent", function() { return ChatAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/chat.service */ "sjK5");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "VO+5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _cmps_min_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../cmps/min/profile-img/profile-img.component */ "50mv");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cmps_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../cmps/user-list/user-list.component */ "OZx3");
/* harmony import */ var _cmps_participation_preview_participation_preview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../cmps/participation-preview/participation-preview.component */ "LRgY");














function ChatAddComponent_participation_preview_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "participation-preview", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removeParticipation", function ChatAddComponent_participation_preview_11_Template_participation_preview_removeParticipation_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onRemoveParticipation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const participation_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", participation_r1);
} }
class ChatAddComponent {
    constructor(userService, chatService, notifierService, router) {
        this.userService = userService;
        this.chatService = chatService;
        this.notifierService = notifierService;
        this.router = router;
        this.users = [];
        this.name = '';
        this.participationsIds = [];
        this.imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Ic-6gUea7KhPvJHPMP-Z9wFrT7qiVlTmCQ&usqp=CAU';
    }
    get usersToShow() {
        return this.users.filter((currUser) => {
            var _a;
            return (currUser._id !== ((_a = this.loggedInUser) === null || _a === void 0 ? void 0 : _a._id) &&
                !this.participationsIds.includes(currUser._id));
        });
    }
    get participations() {
        return this.participationsIds.map((currId) => {
            const { _id, username, profileImgUrl } = this.users.find((currUser) => currUser._id === currId);
            return {
                _id,
                username,
                profileImgUrl,
            };
        });
    }
    onAddParticipation(newPrtId) {
        this.participationsIds = [...this.participationsIds, newPrtId];
    }
    onRemoveParticipation(PrtId) {
        this.participationsIds = this.participationsIds.filter((currPrt) => currPrt !== PrtId);
    }
    changeName(newVal) {
        this.name = newVal;
    }
    changeImgUrl(newVal) {
        this.imgUrl = newVal;
    }
    onAddChat() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //validation...
            if (!((_a = this.participations) === null || _a === void 0 ? void 0 : _a.length)) {
                this.notifierService.notify('error', 'You need to add at least one member');
                return;
            }
            const newChat = {
                msgs: [],
                name: this.name,
                participations: [
                    {
                        _id: this.loggedInUser._id,
                        username: this.loggedInUser.username,
                        profileImgUrl: this.loggedInUser.profileImgUrl,
                    },
                    ...this.participations,
                ],
                imgUrl: this.imgUrl,
            };
            try {
                const chatId = yield this.chatService.addChat(newChat);
                this.notifierService.notify('success', 'Added chat');
                this.router.navigateByUrl(`/chat/${chatId}`);
            }
            catch (err) {
                this.notifierService.notify('error', 'Error while trying to add chat in server');
            }
        });
    }
    ngOnInit() {
        this.userService.loggedInUser$.subscribe((currUser) => {
            this.loggedInUser = currUser;
        });
        this.userService.users$.subscribe((currUsers) => {
            this.users = currUsers;
        });
    }
}
ChatAddComponent.ɵfac = function ChatAddComponent_Factory(t) { return new (t || ChatAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ChatAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatAddComponent, selectors: [["app-chat-add"]], decls: 15, vars: 4, consts: [[1, "chat-add", "flex", "column"], [3, "submit"], [1, "chat-config", "flex", "align-center", "main-box"], [3, "imgUrl"], [1, "example-full-width", "fg-1"], ["matInput", "", "name", "name", "placeholder", "Room name...", "required", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary"], [1, "participations", "flex", "column"], [1, "main-box"], ["trackBy", "trackByFn", 3, "user", "removeParticipation", 4, "ngFor", "ngForOf"], [3, "users", "addParticipation"], ["trackBy", "trackByFn", 3, "user", "removeParticipation"]], template: function ChatAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function ChatAddComponent_Template_form_submit_1_listener() { return ctx.onAddChat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "profile-img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ChatAddComponent_Template_input_ngModelChange_5_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Start Chat!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Participations:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ChatAddComponent_participation_preview_11_Template, 1, 1, "participation-preview", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Choose:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "user-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("addParticipation", function ChatAddComponent_Template_user_list_addParticipation_14_listener($event) { return ctx.onAddParticipation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imgUrl", ctx.imgUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.participations);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("users", ctx.usersToShow);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _cmps_min_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_7__["ProfileImgComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _cmps_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_12__["UserListComponent"], _cmps_participation_preview_participation_preview_component__WEBPACK_IMPORTED_MODULE_13__["ParticipationPreviewComponent"]], styles: [".chat-add[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > .chat-config[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-inline-end: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGF0LWFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLHVCQUFBO0FBRE4iLCJmaWxlIjoiY2hhdC1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1hZGQge1xyXG4gIGZvcm0gPiAuY2hhdC1jb25maWcge1xyXG4gICAgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBtYXJnaW4taW5saW5lLWVuZDogMXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "gcNp":
/*!*******************************************************!*\
  !*** ./src/app/cmps/min/loading/loading.component.ts ***!
  \*******************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoadingComponent {
    constructor() { }
    ngOnInit() { }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["loading"]], decls: 2, vars: 0, consts: [[1, "loading-container", "center-childs"], ["src", "../../../../assets/img/loading.svg", "alt", "Loading...", 1, "loading"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".loading-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.loading-container[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\n  width: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9hZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7QUFFSiIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmctY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLmxvYWRpbmcge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class UserService {
    constructor(http) {
        this.http = http;
        //dev:
        // baseUrl = '//localhost:3030/api/';
        //prod:
        this.baseUrl = '/api/';
        this.initloggedInUSer = JSON.parse(sessionStorage.getItem('loggedInUser') || 'null');
        this._loggedInUser$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.initloggedInUSer);
        this.loggedInUser$ = this._loggedInUser$.asObservable();
        this._users$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.users$ = this._users$.asObservable();
        this.loadUsers();
    }
    login(username, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const loggedInUser = yield this.http
                    .post(`${this.baseUrl}auth/login`, {
                    username,
                    password,
                }, { withCredentials: true })
                    .toPromise();
                this._loggedInUser$.next(loggedInUser);
                sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
                return loggedInUser;
            }
            catch (err) {
                console.log('error while trying log in...', err);
                throw err;
            }
        });
    }
    signup(details) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const loggedInUser = yield this.http
                    .post(`${this.baseUrl}auth/signup`, details, { withCredentials: true })
                    .toPromise();
                this._loggedInUser$.next(loggedInUser);
                sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
                return loggedInUser;
            }
            catch (err) {
                console.log('error while trying signup...', err);
                throw err;
            }
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.http
                    .post(`${this.baseUrl}auth/logout`, {}, { withCredentials: true })
                    .toPromise();
                this._loggedInUser$.next(null);
                sessionStorage.setItem('loggedInUser', JSON.stringify(''));
                return;
            }
            catch (err) {
                console.log('error while trying log in...', err);
                throw err;
            }
        });
    }
    loadUsers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const users = yield this.http
                    .get(`${this.baseUrl}user`, { withCredentials: true })
                    .toPromise();
                this._users$.next(users);
                return this.users$;
            }
            catch (err) {
                console.log('error while trying fetch users...', err);
                throw err;
            }
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "sjK5":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util.service */ "2Rin");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ "VO+5");






class ChatService {
    constructor(http, utilService, notifierService) {
        this.http = http;
        this.utilService = utilService;
        this.notifierService = notifierService;
        //dev:
        // baseUrl = '//localhost:3030/api/';
        //prod:
        this.baseUrl = '/api/';
        this._chats$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.chats$ = this._chats$.asObservable();
        this.chats$.subscribe((currChats) => (this.chats = currChats));
    }
    addToObservableArray(chat) {
        if (this.chats.find((currChat) => currChat._id === chat._id)) {
            return;
        }
        this._chats$.next([...this.chats, chat]);
    }
    removeFromObservableArray(chatId) {
        const updatedChats = this.chats.filter((currChat) => currChat._id !== chatId);
        this._chats$.next(updatedChats);
    }
    updateInObservableArray(chat) {
        const chatIdx = this.chats.findIndex((currChat) => currChat._id === chat._id);
        if (chatIdx < 0)
            return;
        const updatedChats = JSON.parse(JSON.stringify(this.chats));
        updatedChats.splice(chatIdx, 1, chat);
        this._chats$.next(updatedChats);
    }
    handleExternalUpdate(socketEv) {
        if (socketEv.type === 'chat-add') {
            //chat-add scanerio...
            console.log('handeling chat-add update... ', socketEv);
            this.addToObservableArray(socketEv.chat);
            this.notifierService.notify('success', `You have been added to room #${socketEv.chat.name}`);
        }
        else if (socketEv.type === 'chat-remove') {
            //chat-remove scanerio
            console.log('handeling chat-remove update... ', socketEv);
            this.removeFromObservableArray(socketEv.chatId);
            //notif
        }
        else if (socketEv.type === 'chat-add-msg') {
            //chat-add-msg scanrio
            console.log('handeling chat-add-msg update... ', socketEv);
            this.updateInObservableArray(socketEv.chat);
            const { chat } = socketEv;
            const msg = chat.msgs[chat.msgs.length - 1];
            this.notifierService.notify('success', `#${chat.name} - ${msg.from.username}: ${msg.txt}`);
        }
    }
    loadChats() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const chats = yield this.http
                    .get(`${this.baseUrl}chat`, { withCredentials: true })
                    .toPromise();
                this._chats$.next(chats);
                return this.chats$;
            }
            catch (err) {
                console.log('error while trying fetch chats...', err);
                throw err;
            }
        });
    }
    addChat(newChat) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const updatedChat = yield this.http
                    .post(`${this.baseUrl}chat`, newChat, {
                    withCredentials: true,
                })
                    .toPromise();
                this.addToObservableArray(updatedChat);
                return updatedChat._id;
            }
            catch (err) {
                console.log('error while trying to add chat...', err);
                throw err;
            }
        });
    }
    addMsg(chatId, msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                msg.id = this.utilService.makeId();
                const updatedMsg = yield this.http
                    .post(`${this.baseUrl}chat/${chatId}/msg`, msg, {
                    withCredentials: true,
                })
                    .toPromise();
                // const lastChat = JSON.parse(JSON.stringify(this.chat));
                const lastChat = JSON.parse(JSON.stringify(this.chats.find((currChat) => currChat._id === chatId)));
                lastChat.msgs = [...lastChat.msgs, updatedMsg];
                const lastChats = JSON.parse(JSON.stringify(this.chats));
                const chatIdx = lastChats.findIndex((currChat) => currChat._id === chatId);
                lastChats.splice(chatIdx, 1, lastChat);
                this._chats$.next(lastChats);
                return this.chats$;
            }
            catch (err) {
                console.log('error while trying fetch chat...', err);
                throw err;
            }
        });
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/auth/auth.component */ "Tzr/");
/* harmony import */ var _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/chat/chat.component */ "WSoB");
/* harmony import */ var _pages_chat_add_chat_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/chat-add/chat-add.component */ "fFco");
/* harmony import */ var _gurads_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gurads/auth.guard */ "Sf8K");
/* harmony import */ var _pages_chat_details_chat_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/chat-details/chat-details.component */ "aq/M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: 'auth', component: _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_1__["AuthComponent"], canActivate: [_gurads_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    {
        path: 'chat/add',
        component: _pages_chat_add_chat_add_component__WEBPACK_IMPORTED_MODULE_3__["ChatAddComponent"],
        pathMatch: 'full',
        canActivate: [_gurads_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
    },
    {
        path: 'chat/:chatId',
        component: _pages_chat_details_chat_details_component__WEBPACK_IMPORTED_MODULE_5__["ChatDetailsComponent"],
        pathMatch: 'full',
        canActivate: [_gurads_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
    },
    {
        path: 'chat',
        component: _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"],
        pathMatch: 'full',
        canActivate: [_gurads_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
    },
    { path: '', redirectTo: '/chat', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ySuk":
/*!*******************************************!*\
  !*** ./src/app/cmps/msg/msg.component.ts ***!
  \*******************************************/
/*! exports provided: MsgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgComponent", function() { return MsgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



class MsgComponent {
    constructor(userSerivce) {
        this.userSerivce = userSerivce;
    }
    get selfMsgClass() {
        const isSelf = this.msg.from._id === this.loggedInUser._id;
        return isSelf ? 'self' : '';
    }
    ngOnInit() {
        this.userSerivce.loggedInUser$.subscribe((currUser) => {
            this.loggedInUser = currUser;
        });
    }
}
MsgComponent.ɵfac = function MsgComponent_Factory(t) { return new (t || MsgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
MsgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MsgComponent, selectors: [["msg"]], inputs: { msg: "msg" }, decls: 12, vars: 9, consts: [[1, "msg", "flex", "column"], [1, "msg-header", "flex", "align-center"], [1, "msg-body", "flex", "align-center"], [1, "msg-txt"], [1, "msg-tip"]], template: function MsgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("msg-container ", ctx.selfMsgClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msg.from.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msg.txt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, ctx.msg.createdAt, "short"));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n}\n\n.msg-container[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: white;\n  margin-inline-start: 1rem;\n  display: inline-block;\n  border-radius: 18px;\n  max-width: 45ch;\n}\n\n.msg-container[_ngcontent-%COMP%]   .msg[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n}\n\n.msg-container[_ngcontent-%COMP%]   .msg[_ngcontent-%COMP%]   .msg-body[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-inline-end: 1rem;\n}\n\n.msg-container[_ngcontent-%COMP%]   .msg-tip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transform: translate(-5%, 10%);\n  width: 40px;\n  height: 40px;\n  background-color: white;\n  -webkit-clip-path: polygon(51% 0, 0% 100%, 100% 39%);\n          clip-path: polygon(51% 0, 0% 100%, 100% 39%);\n  z-index: -10;\n}\n\n.msg-container.self[_ngcontent-%COMP%] {\n  background-color: #25d366;\n  margin-left: auto;\n  margin-right: 1rem;\n}\n\n.msg-container.self[_ngcontent-%COMP%]   .msg-tip[_ngcontent-%COMP%] {\n  background-color: #25d366;\n  left: unset;\n  right: 0;\n  transform: translate(5%, 10%);\n  width: 40px;\n  height: 40px;\n  -webkit-clip-path: polygon(0 51%, 100% 100%, 51% 0);\n          clip-path: polygon(0 51%, 100% 100%, 51% 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtc2cuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxzZXR1cFxcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFFRTtFQUNFLG9CQUFBO0FBQUo7O0FBQ0k7RUFDRSx1QkFBQTtBQUNOOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG9EQUFBO1VBQUEsNENBQUE7RUFDQSxZQUFBO0FBQUo7O0FBSUE7RUFDRSx5QkMzQks7RUQ0QkwsaUJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUVFO0VBQ0UseUJDL0JHO0VEZ0NILFdBQUE7RUFDQSxRQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1EQUFBO1VBQUEsMkNBQUE7QUFBSiIsImZpbGUiOiJtc2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3Mvc2V0dXAvdmFyaWFibGVzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm1zZy1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxcmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIG1heC13aWR0aDogNDVjaDtcclxuICAubXNnIHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xyXG4gICAgLm1zZy1ib2R5ID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tc2ctdGlwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNSUsIDEwJSk7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUxJSAwLCAwJSAxMDAlLCAxMDAlIDM5JSk7XHJcbiAgICB6LWluZGV4OiAtMTA7XHJcbiAgfVxyXG59XHJcblxyXG4ubXNnLWNvbnRhaW5lci5zZWxmIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VsZjtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgLm1zZy10aXAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlbGY7XHJcbiAgICBsZWZ0OiB1bnNldDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNSUsIDEwJSk7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDUxJSwgMTAwJSAxMDAlLCA1MSUgMCk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIENPTE9SIFBBTEVUVEVcclxuJGRhcms6ICMzNDQ5NWU7XHJcbiRzdHJvbmctZGFyazogIzJjM2U1MDtcclxuJHByaW1hcnk6ICMzNDk4ZGI7XHJcbiRkYXJrLXByaW1hcnk6ICMyOTgwYjk7XHJcbiRzdWNjZXNzOiAjMmVjYzcxO1xyXG4kc2VsZjogIzI1ZDM2NjtcclxuJGRhcmstc3VjY2VzczogIzI3YWU2MDtcclxuJHByb2NjZXNzOiAjZjFjNDBmO1xyXG4kZGFyay1wcm9jY2VzczogI2YzOWMxMjtcclxuJGRhbmdlcjogI2U3NGMzYztcclxuJGRhcmstZGFuZ2VyOiAjYzAzOTJiO1xyXG4kZ3JleTogI2VjZjBmMTtcclxuJG1lZGl1bS1ncmV5OiAjZWZlZmVmO1xyXG4kZGFyay1ncmV5OiAjYmRjM2M3O1xyXG4kc3Ryb25nLWRhcmstZ3JleTogIzcwNzQ3NztcclxuLy8gVFlQT0dSQVBIWTpcclxuJHJlZy10ZXh0OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgXCJSb2JvdG9cIiwgXCJPeHlnZW5cIixcclxuICBcIlVidW50dVwiLCBcIkNhbnRhcmVsbFwiLCBcIkZpcmEgU2Fuc1wiLCBcIkRyb2lkIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gTEFZT1VUIEJSRUFLUE9JTlRTXHJcbiRicmVhay1uYXJyb3c6IDQ2MHB4O1xyXG4kYnJlYWstbm9ybWFsOiA3NDBweDtcclxuJGJyZWFrLXdpZGU6IDEwNjBweDtcclxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map