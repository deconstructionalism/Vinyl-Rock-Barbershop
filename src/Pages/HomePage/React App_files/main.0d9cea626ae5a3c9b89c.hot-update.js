webpackHotUpdate("main",{

/***/ "./src/Components/App/App.js":
/*!***********************************!*\
  !*** ./src/Components/App/App.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Pages_BarberPage_BarberPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Pages/BarberPage/BarberPage */ "./src/Pages/BarberPage/BarberPage.js");
/* harmony import */ var _BarberProfile_BarberProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BarberProfile/BarberProfile */ "./src/Components/BarberProfile/BarberProfile.js");
/* harmony import */ var _Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/Footer/Footer */ "./src/Components/Footer/Footer.js");
/* harmony import */ var _Pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Pages/HomePage/HomePage */ "./src/Pages/HomePage/HomePage.js");
/* harmony import */ var _Pages_LoginPage_LoginPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Pages/LoginPage/LoginPage */ "./src/Pages/LoginPage/LoginPage.js");
/* harmony import */ var _NavBar_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../NavBar/NavBar */ "./src/Components/NavBar/NavBar.js");
/* harmony import */ var _Pages_ProfilePage_ProfilePage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Pages/ProfilePage/ProfilePage */ "./src/Pages/ProfilePage/ProfilePage.js");
/* harmony import */ var _Pages_RegisterPage_RegisterPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Pages/RegisterPage/RegisterPage */ "./src/Pages/RegisterPage/RegisterPage.js");
/* harmony import */ var _Pages_ServiceMenuPage_ServiceMenuPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Pages/ServiceMenuPage/ServiceMenuPage */ "./src/Pages/ServiceMenuPage/ServiceMenuPage.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./App.css */ "./src/Components/App/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/Users/codygillette/Desktop/Thinkful/vinyl-rock-barbershop/src/Components/App/App.js";












class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    console.error(error);
    return {
      hasError: true
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      className: "Nav-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      role: "main",
      className: "vinyl-main",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, this.state.hasError && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "red",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "There was an error!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/",
      component: _Pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_5__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/Barbers",
      component: _Pages_BarberPage_BarberPage__WEBPACK_IMPORTED_MODULE_2__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/BarbersProfile/:barberid",
      component: _BarberProfile_BarberProfile__WEBPACK_IMPORTED_MODULE_3__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/Login",
      component: _Pages_LoginPage_LoginPage__WEBPACK_IMPORTED_MODULE_6__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/Profile",
      component: _Pages_ProfilePage_ProfilePage__WEBPACK_IMPORTED_MODULE_8__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/Register",
      component: _Pages_RegisterPage_RegisterPage__WEBPACK_IMPORTED_MODULE_9__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/Service",
      component: _Pages_ServiceMenuPage_ServiceMenuPage__WEBPACK_IMPORTED_MODULE_10__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })));
  }

}

/***/ })

})
//# sourceMappingURL=main.0d9cea626ae5a3c9b89c.hot-update.js.map