webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/cycleStates.js":
/*!***********************************!*\
  !*** ./components/cycleStates.js ***!
  \***********************************/
/*! exports provided: cycleStates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cycleStates", function() { return cycleStates; });
var cycleStates = [{
  color: {
    r: 255,
    g: 255,
    b: 255,
    a: 0.3
  }
}, {
  color: {
    r: 234,
    g: 51,
    b: 35,
    a: 1
  }
}, {
  color: {
    r: 254,
    g: 103,
    b: 0,
    a: 1
  }
}];

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_yesbutton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/yesbutton.js */ "./components/yesbutton.js");
/* harmony import */ var _components_colorpicker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/colorpicker.js */ "./components/colorpicker.js");
/* harmony import */ var _components_fontPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/fontPicker */ "./components/fontPicker.js");
/* harmony import */ var _components_cycleStates_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cycleStates.js */ "./components/cycleStates.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-to-image */ "./node_modules/html-to-image/lib/index.js");
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html_to_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! downloadjs */ "./node_modules/downloadjs/download.js");
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(downloadjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var ios_inner_height__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ios-inner-height */ "./node_modules/ios-inner-height/dist/ios-inner-height.js");
/* harmony import */ var ios_inner_height__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ios_inner_height__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
var _jsxFileName = "/Users/psanches/web/btnmaker/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;







 // import domtoimage from 'dom-to-image';




var i = 1;

function HomePage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("NowTextBold"),
      font = _useState[0],
      setFont = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    color: {
      r: '255',
      g: '255',
      b: '255',
      a: '0.3'
    }
  }),
      topColor = _useState2[0],
      setTopColor = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    color: {
      r: '255',
      g: '255',
      b: '255',
      a: '0.3'
    }
  }),
      bottomColor = _useState3[0],
      setBottomColor = _useState3[1];

  function setBothColors(json) {
    setTopColor(json);
    setBottomColor(json);
  }

  var colorSequence = [{
    color: {
      r: 255,
      g: 255,
      b: 255,
      a: 0.3
    }
  }, {
    color: {
      r: 234,
      g: 51,
      b: 35,
      a: 1
    }
  }, {
    color: {
      r: 254,
      g: 103,
      b: 0,
      a: 1
    }
  }];

  function playSequence() {
    if (i < 3) {
      setBothColors(colorSequence[i]);
      setClicked(!clicked);
      console.log(colorSequence[i]);
    } else {
      setRandomColor();
    }

    i = i + 1;

    if (i > 10) {
      i = 0;
    }
  }

  function resetColor() {
    setBothColors({
      color: {
        r: 255,
        g: 255,
        b: 255,
        a: 0.3
      }
    });
    setColor({
      color: {
        r: 255,
        g: 255,
        b: 255,
        a: 1
      }
    });
  }

  function setRandomColor() {
    setBothColors({
      color: {
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255),
        a: '1'
      }
    });
    setClicked(!clicked);
  }

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    color: {
      r: '255',
      g: '255',
      b: '255',
      a: '1'
    }
  }),
      color = _useState4[0],
      setColor = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    color: {
      r: '0',
      g: '0',
      b: '0',
      a: '1'
    }
  }),
      textOutlineColor = _useState5[0],
      setTextOutlineColor = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    color: {
      r: '0',
      g: '0',
      b: '0',
      a: '1'
    }
  }),
      borderColor = _useState6[0],
      setBorderColor = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      strokeWeight = _useState7[0],
      setStrokeWeight = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(3),
      sizeMultiplier = _useState8[0],
      setSizeMultiplier = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      shadow = _useState9[0],
      setShadow = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      clicked = _useState10[0],
      setClicked = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isLockup = _useState11[0],
      setLockup = _useState11[1];

  function useSave() {
    html_to_image__WEBPACK_IMPORTED_MODULE_5___default.a.toBlob(document.getElementById('stamp'), {}).then(function (blob) {
      downloadjs__WEBPACK_IMPORTED_MODULE_6___default()(blob, 'yes®.png');
    }); // domtoimage.toBlob(document.getElementById('stamp'))
    //     .then(function (blob) {
    //         window.saveAs(blob, 'yes®.png');
    //     });
    // htmlToImage.toCanvas(document.getElementById('stamp'))
    //     .then(function (canvas) {
    //         document.body.appendChild(canvas);
    //     });
  }

  var variants = {
    hover: {
      scale: 1.05
    },
    tap: {
      scale: 0.95
    }
  };
  console.log(ios_inner_height__WEBPACK_IMPORTED_MODULE_9___default.a);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx("div", {
    style: {
      height: "".concat(ios_inner_height__WEBPACK_IMPORTED_MODULE_9___default.a, "px")
    },
    className: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx("div", {
    className: "canvas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, isLockup ? __jsx("div", {
    id: "stamp",
    className: "stampLockup",
    style: {
      borderWidth: "".concat(strokeWeight, "px"),
      width: "".concat(100 * sizeMultiplier + 35, "px"),
      borderRadius: "".concat((100 * sizeMultiplier + 35) / 2.5 / 8, "px"),
      fontSize: "".concat(sizeMultiplier * 5, "pt"),
      padding: "20px 12px 0px 10px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx("div", {
    className: "stamp-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "The Open Banking Ecosystem"), __jsx(_components_yesbutton_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
    shadow: shadow,
    sizeMultiplier: sizeMultiplier,
    strokeWeight: strokeWeight,
    clicked: clicked,
    font: font,
    topColor: topColor,
    textOutlineColor: textOutlineColor,
    bottomColor: bottomColor,
    color: color,
    borderColor: borderColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  })) : __jsx("div", {
    id: "stamp",
    className: "stampButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx(_components_yesbutton_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
    shadow: shadow,
    sizeMultiplier: sizeMultiplier,
    strokeWeight: strokeWeight,
    clicked: clicked,
    font: font,
    topColor: topColor,
    textOutlineColor: textOutlineColor,
    bottomColor: bottomColor,
    color: color,
    borderColor: borderColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
    className: "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
    className: "controlStrip",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, __jsx(_components_colorpicker_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "colorPicker",
    color: topColor,
    setColor: setBothColors,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }), "Background"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
    className: "controlStrip",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, __jsx(_components_colorpicker_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "colorPicker",
    color: color,
    setColor: setColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }), "Typography"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
    variants: variants,
    whileHover: "hover",
    whileTap: "tap",
    className: "controlStrip",
    onClick: function onClick() {
      return playSequence();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
    type: "forward",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }), " Cycle"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
    variants: variants,
    whileHover: "hover",
    whileTap: "tap",
    className: "controlStrip",
    onClick: function onClick() {
      return resetColor();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
    type: "rollback",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }), " Reset"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
    variants: variants,
    whileHover: "hover",
    whileTap: "tap",
    className: "controlStrip",
    onClick: function onClick() {
      return setStrokeWeight((strokeWeight + 1) % 3 + 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
    type: "edit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }), " Stroke Weight"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
    variants: variants,
    whileHover: "hover",
    whileTap: "tap",
    className: "controlStrip",
    onClick: function onClick() {
      return setSizeMultiplier((sizeMultiplier + 1) % 10 + 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
    type: "fullscreen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }), " Size"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
    variants: variants,
    whileHover: "hover",
    whileTap: "tap",
    className: "controlStrip",
    onClick: function onClick() {
      return setShadow(!shadow);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
    type: "border-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }), " Shadow"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
    variants: variants,
    whileHover: "hover",
    whileTap: "tap",
    className: "controlStrip",
    onClick: function onClick() {
      return setLockup(!isLockup);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
    type: "border-outer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }), " Lockup"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
    variants: variants,
    whileHover: "hover",
    whileTap: "tap",
    className: "controlStrip",
    onClick: function onClick() {
      return useSave();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
    type: "download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }), " Download PNG"))));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.c7d739a366623a5ff14c.hot-update.js.map