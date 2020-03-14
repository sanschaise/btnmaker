webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/yesbutton.js":
/*!*********************************!*\
  !*** ./components/yesbutton.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/psanches/web/btnmaker/components/yesbutton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // import Sketch from "../components/sketch";



function YesButton(props) {
  var _jsx;

  console.log(react_device_detect__WEBPACK_IMPORTED_MODULE_4__["isMobile"] ? 600 : 300); // alert(isMobile);

  var w = 100 * props.sizeMultiplier;
  var h = w / 2.5;
  var b = props.strokeWeight;
  var s = props.shadow ? 8 : 0;
  var topColor = "rgba(".concat(props.topColor.r, ", ").concat(props.topColor.g, ", ").concat(props.topColor.b, ", ").concat(props.topColor.a, ")");
  var shadowColor = "rgba(".concat(props.topColor.r, ", ").concat(props.topColor.g, ", ").concat(props.topColor.b, ", ").concat(props.topColor.a / 2, ")");
  shadowColor = "rgba(0,0,0,0.2)";
  console.log(w);
  var click = {
    up: {
      x: -s * 1.5,
      y: -s * 1.5,
      boxShadow: "".concat(s * 1.5, "px ").concat(s * 1.5, "px 0 ").concat(shadowColor)
    },
    "static": {
      x: -s,
      y: -s,
      boxShadow: "".concat(s, "px ").concat(s, "px 0 ").concat(shadowColor)
    },
    down: {
      x: 0,
      y: 0,
      boxShadow: "0px 0px 0 ".concat(shadowColor)
    }
  };
  var btnStyle = {
    width: "".concat(w, "px"),
    height: "".concat(h, "px"),
    // transform: 'scale(0.5)',
    // transformOrigin: 'left',
    textAlign: 'center',
    // owmargin: '10px',
    position: 'absolute',
    zIndex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: "".concat(h / 8, "px"),
    // boxShadow: `5px 5px ${shadowColor} `,
    border: "".concat(b, "px solid rgba(").concat(props.borderColor.r, ", ").concat(props.borderColor.g, ", ").concat(props.borderColor.b, ", ").concat(props.borderColor.a, ")") // borderStyle: 'dashed',
    // background: `${topColor}`,
    // backgroundImage: `linear-gradient(rgba(${props.topColor.color.r}, ${props.topColor.color.g}, ${props.topColor.color.b}, ${props.topColor.color.a}), rgba(${props.bottomColor.color.r}, ${props.bottomColor.color.g}, ${props.bottomColor.color.b}, ${props.bottomColor.color.a})`,

  };
  var textStyle = {
    fontSize: "".concat(h / 2.5, "pt"),
    fontFamily: "'".concat(props.font, "'"),
    // paintOrder: 'stroke fill',
    position: 'relative',
    top: '-5.5%',
    right: '-2%',
    color: "rgba(".concat(props.color.r, ", ").concat(props.color.g, ", ").concat(props.color.b, ", ").concat(props.color.a, ")"),
    WebkitTextStrokeWidth: "".concat(b, "px"),
    WebkitTextStrokeColor: "rgba(".concat(props.textOutlineColor.r, ", ").concat(props.textOutlineColor.g, ", ").concat(props.textOutlineColor.b, ", ").concat(props.textOutlineColor.a, ")")
  };
  var gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto auto auto auto auto auto',
    position: 'absolute',
    width: "".concat(w + b * 2, "px"),
    height: "".concat(h + b * 2, "px"),
    zIndex: '0'
  };
  var gridBlock = {
    // outline: ' 0.5px solid rgba(240,240,240,1)',
    borderTop: "".concat(b, "px solid rgba(0,0,0,0.2)"),
    borderRight: "".concat(b, "px solid rgba(0,0,0,0.2)") // background: 'white',

  };
  var gridBlockLeft = {
    // outline: ' 0.5px solid rgba(240,240,240,1)',
    borderTop: "".concat(b, "px solid rgba(0,0,0,0.2)"),
    borderLeft: "".concat(b, "px solid rgba(0,0,0,0.2)"),
    borderRight: "".concat(b, "px solid rgba(0,0,0,0.2)"),
    marginLeft: '-1px' // background: 'white',

  };
  var gridBlockBottom = {
    // outline: ' 0.5px solid rgba(240,240,240,1)',
    borderTop: "".concat(b, "px solid rgba(0,0,0,0.2)"),
    borderRight: "".concat(b, "px solid rgba(0,0,0,0.2)"),
    borderBottom: "".concat(b, "px solid rgba(0,0,0,0.2)"),
    marginBottom: '-1px' // background: 'white',

  };
  var gridCircle = {
    border: "".concat(b, "px dashed rgba(50,50,50,1)"),
    borderRadius: "".concat(h / 8, "px")
  };
  var containerStyle = {
    width: "".concat(w, "px"),
    height: "".concat(h, "px"),
    position: 'relative',
    borderRadius: "".concat(h / 8, "px"),
    cursor: 'pointer',
    x: -s,
    y: -s,
    boxShadow: "".concat(s, "px ").concat(s, "px 0 ").concat(shadowColor),
    userSelect: 'none',
    margin: "".concat(s * 3, "px"),
    border: "".concat(b, "px solid rgba(0,0,0,0)") // width: '100%',
    // height: '100%',

  };
  var supStyle = {// color: 'black',
  };
  var captureStyle = {// width: `${w * 2}px`,
    // height: `${h * 2}px`,
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  };
  var controls = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])();
  controls.start({
    x: [0, -s * 1.5, -s],
    y: [0, -s * 1.5, -s],
    boxShadow: ["0px 0px 0 ".concat(shadowColor), "".concat(s * 1.5, "px ").concat(s * 1.5, "px 0 ").concat(shadowColor), "".concat(s, "px ").concat(s, "px 0 ").concat(shadowColor)],
    transition: {
      duration: 1,
      times: [0, 0.25, 0.5]
    }
  });
  return __jsx("div", {
    id: "yes-button",
    style: captureStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, (_jsx = {
    id: "yes-button",
    style: containerStyle,
    variants: click,
    initial: "static" // animate={props.clicked ? { ck: [null, "up", "down", "static"] } : { ck: [null, "up", "down", "static"] }}
    ,
    animate: props.clicked ? controls : controls
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "animate", controls), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "whileHover", "up"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "whileTap", "down"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 149
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx), __jsx("div", {
    style: gridStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, __jsx("div", {
    style: gridCircle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), __jsx("div", {
    style: gridBlockLeft,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }), __jsx("div", {
    style: gridCircle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }), __jsx("div", {
    style: gridBlockBottom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }), __jsx("div", {
    style: gridBlockBottom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }), __jsx("div", {
    style: gridCircle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }), __jsx("div", {
    style: gridBlockLeft,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }), __jsx("div", {
    style: gridBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }), __jsx("div", {
    style: gridCircle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    style: btnStyle,
    animate: {
      background: "".concat(topColor)
    },
    transition: {
      duration: 0.7
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx("span", {
    style: textStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, "yes", __jsx("span", {
    style: supStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, "\xAE")))));
}

/* harmony default export */ __webpack_exports__["default"] = (YesButton);

/***/ })

})
//# sourceMappingURL=index.js.cc7888015f765be7eb0d.hot-update.js.map