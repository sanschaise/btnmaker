webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/colorpicker.js":
/*!***********************************!*\
  !*** ./components/colorpicker.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactcss */ "./node_modules/reactcss/lib/index.js");
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(reactcss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-color */ "./node_modules/react-color/lib/index.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_9__);









var _jsxFileName = "/Users/psanches/web/btnmaker/components/colorpicker.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var ColorPicker =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ColorPicker, _React$Component);

  function ColorPicker(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ColorPicker);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ColorPicker).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClick", function () {
      _this.setState({
        displayColorPicker: !_this.state.displayColorPicker
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClose", function () {
      _this.setState({
        displayColorPicker: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (color) {
      _this.setState({
        color: color.rgb
      });

      _this.props.setColor({
        color: color.rgb
      });
    });

    console.log(props.color);
    _this.state = {
      displayColorPicker: false,
      color: {
        r: props.color.r,
        g: props.color.g,
        b: props.color.b,
        a: props.color.a
      }
    };
    return _this;
  } // static getDerivedStateFromProps(props, state) {
  //     return {
  //         color: {
  //             r: props.color.r,
  //             g: props.color.g,
  //             b: props.color.b,
  //             a: props.color.a,
  //         },
  //     };
  // }


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ColorPicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      var styles = reactcss__WEBPACK_IMPORTED_MODULE_8___default()({
        'default': {
          color: {
            width: '16px',
            height: '16px',
            borderRadius: '100vw',
            boxShadow: "2.5px 2.5px rgba(0,0,0,0.25)",
            background: "rgba(".concat(this.state.color.r, ", ").concat(this.state.color.g, ", ").concat(this.state.color.b, ", ").concat(this.state.color.a, ")")
          },
          swatch: {
            padding: '0px',
            background: '#fff',
            borderRadius: '100vw',
            border: 'black 1px solid',
            // boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer'
          },
          popover: {
            position: 'absolute',
            zIndex: '2',
            bottom: '15px',
            left: '15px'
          },
          cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px'
          },
          parent: {
            display: 'inline',
            position: 'relative',
            top: '3px',
            marginRight: '15px'
          }
        }
      });
      return __jsx("div", {
        style: styles.parent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("div", {
        style: styles.swatch,
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx("div", {
        style: styles.color,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      })), this.state.displayColorPicker ? __jsx("div", {
        style: styles.popover,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx("div", {
        style: styles.cover,
        onClick: this.handleClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), __jsx(react_color__WEBPACK_IMPORTED_MODULE_9__["ChromePicker"], {
        color: this.state.color,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      })) : null);
    }
  }]);

  return ColorPicker;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ColorPicker);

/***/ })

})
//# sourceMappingURL=index.js.19de66fb43113598fac6.hot-update.js.map