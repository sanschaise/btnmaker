webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/control.js":
/*!*******************************!*\
  !*** ./components/control.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

var _jsxFileName = "/Users/psanches/web/btnmaker/components/control.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var variants = {
  hover: {
    scale: 1.05
  },
  tap: {
    scale: 0.95
  }
};

function Control(props) {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    variants: disabled ? null : variants,
    whileHover: "hover",
    whileTap: "tap",
    className: "controlStrip"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: props.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (Control);

/***/ })

})
//# sourceMappingURL=index.js.164bcffbbc7742021187.hot-update.js.map