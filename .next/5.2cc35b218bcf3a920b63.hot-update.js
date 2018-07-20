webpackHotUpdate(5,{

/***/ "./components/login-form/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_loading__ = __webpack_require__("./node_modules/react-loading/dist/react-loading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_loading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__firebase__ = __webpack_require__("./firebase/index.js");
var _jsxFileName = "/Users/me.mojila/Projects/next-national-chemication-admin/components/login-form/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var LoginForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  function LoginForm() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, LoginForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        uid: '',
        email: '',
        password: '',
        isLoading: false
      }
    }), _temp));
  }

  _createClass(LoginForm, [{
    key: "onSubmit",
    value: function onSubmit(e) {
      var _state = this.state,
          email = _state.email,
          password = _state.password;
      var isEmailValid = email === "admin@national-chemication.firebaseapp.com";
      var isPasswordValid = password === "adminpassword12345";
      this.setState({
        isLoading: true
      });

      if (isEmailValid && isPasswordValid) {
        __WEBPACK_IMPORTED_MODULE_3__firebase__["a" /* auth */].signInWithEmailAndPassword(email, password).then(function (userInfo) {
          return console.log(userInfo);
        }).catch();
      } else {
        alert('Akses Ditolak, Periksa Email dan Password');
      }

      this.setState({
        isLoading: false
      });
      e.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state2 = this.state,
          email = _state2.email,
          password = _state2.password,
          isLoading = _state2.isLoading;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["c" /* Container */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["h" /* Row */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Col */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-2 bg-secondary text-center text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "Login"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["h" /* Row */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* Col */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "p-4 bg-white border font-weight-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["d" /* Form */], {
        onSubmit: this.onSubmit.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* FormGroup */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["g" /* Label */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "E    mail"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["f" /* Input */], {
        type: "email",
        value: email,
        onChange: function onChange(e) {
          return _this2.setState({
            email: e.target.value
          });
        },
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* FormGroup */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["g" /* Label */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Password"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["f" /* Input */], {
        type: "password",
        value: password,
        onChange: function onChange(e) {
          return _this2.setState({
            password: e.target.value
          });
        },
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["a" /* Button */], {
        type: "submit",
        color: "success",
        block: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, isLoading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_loading___default.a, {
        className: "mx-auto",
        type: "spin",
        width: 24,
        height: 24,
        color: "white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), !isLoading && 'Login')))))));
    }
  }]);

  return LoginForm;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (LoginForm);

/***/ }),

/***/ "./firebase/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth; });
/* unused harmony export database */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app__ = __webpack_require__("./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_auth__ = __webpack_require__("./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_database__ = __webpack_require__("./node_modules/firebase/database/dist/index.esm.js");



var config = {
  apiKey: "AIzaSyCg2iMT2SlEY2km2gXuEXJ_q0uExTMTQeo",
  authDomain: "national-chemication.firebaseapp.com",
  databaseURL: "https://national-chemication.firebaseio.com",
  projectId: "national-chemication",
  storageBucket: "national-chemication.appspot.com",
  messagingSenderId: "595587030048"
};
var auth = !__WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a.apps.length ? __WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a.initializeApp(config).auth() : __WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a.app().auth();
var database = !__WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a.apps.length ? __WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a.initializeApp(config).database() : __WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a.app().database();


/***/ })

})
//# sourceMappingURL=5.2cc35b218bcf3a920b63.hot-update.js.map