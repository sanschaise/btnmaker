module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/colorpicker.js":
/*!***********************************!*\
  !*** ./components/colorpicker.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactcss */ "reactcss");
/* harmony import */ var reactcss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactcss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-color */ "react-color");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/Users/psanches/web/btnmaker/components/colorpicker.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class ColorPicker extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", () => {
      this.setState({
        displayColorPicker: !this.state.displayColorPicker
      });
    });

    _defineProperty(this, "handleClose", () => {
      this.setState({
        displayColorPicker: false
      });
    });

    _defineProperty(this, "handleChange", color => {
      // console.log(...color.rgb);
      this.setState({
        color: color.rgb
      });
      this.props.setColor(_objectSpread({}, color.rgb));
    });

    console.log(props.color);
    this.state = {
      displayColorPicker: false,
      color: {
        r: props.color.r,
        g: props.color.g,
        b: props.color.b,
        a: props.color.a
      }
    };
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


  componentDidMount() {
    console.log(this.state);
  }

  render() {
    const styles = reactcss__WEBPACK_IMPORTED_MODULE_1___default()({
      'default': {
        color: {
          width: '16px',
          height: '16px',
          borderRadius: '100vw',
          boxShadow: `2.5px 2.5px rgba(0,0,0,0.25)`,
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`
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
        lineNumber: 95
      },
      __self: this
    }, __jsx("div", {
      style: styles.swatch,
      onClick: this.handleClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("div", {
      style: styles.color,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    })), this.state.displayColorPicker ? __jsx("div", {
      style: styles.popover,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx("div", {
      style: styles.cover,
      onClick: this.handleClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }), __jsx(react_color__WEBPACK_IMPORTED_MODULE_2__["ChromePicker"], {
      color: this.state.color,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    })) : null);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ColorPicker);

/***/ }),

/***/ "./components/control.js":
/*!*******************************!*\
  !*** ./components/control.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/psanches/web/btnmaker/components/control.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const variants = {
  hover: {
    scale: 1.05
  },
  tap: {
    scale: 0.95
  }
};

function Control(props) {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({
    variants: props.disabled ? null : variants,
    whileHover: "hover",
    whileTap: "tap",
    className: "controlStrip"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: props.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (Control);

/***/ }),

/***/ "./components/cycleStates.js":
/*!***********************************!*\
  !*** ./components/cycleStates.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const cycleStates = [{
  // 1 blueprint
  topColor: {
    r: 255,
    g: 255,
    b: 255,
    a: 0.3
  },
  color: {
    r: 255,
    g: 255,
    b: 255,
    a: 1
  }
}, {
  // 2 sparkasse
  topColor: {
    r: 234,
    g: 51,
    b: 35,
    a: 1
  },
  color: {
    r: 255,
    g: 255,
    b: 255,
    a: 1
  }
}, {
  // 3 volksbank
  topColor: {
    r: 254,
    g: 103,
    b: 0,
    a: 1
  },
  color: {
    r: 255,
    g: 255,
    b: 255,
    a: 1
  }
}, {
  // 4 swisscom
  topColor: {
    r: 61,
    g: 127,
    b: 220,
    a: 1
  },
  color: {
    r: 255,
    g: 255,
    b: 255,
    a: 1
  }
}, {
  // 6 cool green
  topColor: {
    r: 50,
    g: 255,
    b: 150,
    a: 1
  },
  color: {
    r: 80,
    g: 80,
    b: 80,
    a: 1
  }
}, {
  //5 namirial
  topColor: {
    r: 85,
    g: 85,
    b: 85,
    a: 1
  },
  color: {
    r: 255,
    g: 255,
    b: 255,
    a: 1
  }
}, {
  // 7 snapchat 254 250 84
  topColor: {
    r: 254,
    g: 250,
    b: 84,
    a: 1
  },
  color: {
    r: 80,
    g: 80,
    b: 80,
    a: 1
  }
}, {
  // 8 smartsteur 237 112 46
  topColor: {
    r: 237,
    g: 112,
    b: 46,
    a: 1
  },
  color: {
    r: 255,
    g: 255,
    b: 255,
    a: 1
  }
}, {
  // 9 infocert 49 114 159
  topColor: {
    r: 49,
    g: 114,
    b: 159,
    a: 1
  },
  color: {
    r: 255,
    g: 255,
    b: 255,
    a: 1
  }
}, {
  // 10 smartsteur 237 112 46
  topColor: {
    r: 237,
    g: 112,
    b: 46,
    a: 1
  },
  color: {
    r: 255,
    g: 255,
    b: 255,
    a: 1
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (cycleStates);

/***/ }),

/***/ "./components/fontPicker.js":
/*!**********************************!*\
  !*** ./components/fontPicker.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/psanches/web/btnmaker/components/fontPicker.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function fontPicker(props) {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const handleSubmit = evt => {
    evt.preventDefault();
    props.setFont(name); // alert(`Submitting Name ${name}`)
  };

  return __jsx("div", {
    className: "fontPicker",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Font Name", __jsx("input", {
    type: "text",
    value: name,
    onChange: e => setName(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), __jsx("input", {
    type: "submit",
    value: "Submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (fontPicker);

/***/ }),

/***/ "./components/yesbutton.js":
/*!*********************************!*\
  !*** ./components/yesbutton.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/psanches/web/btnmaker/components/yesbutton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import Sketch from "../components/sketch";



function YesButton(props) {
  console.log(react_device_detect__WEBPACK_IMPORTED_MODULE_3__["isMobile"] ? 600 : 300); // alert(isMobile);

  const w = 100 * props.sizeMultiplier;
  const h = w / 2.5;
  const b = props.strokeWeight;
  const s = props.shadow ? 8 : 0;
  const topColor = `rgba(${props.topColor.r}, ${props.topColor.g}, ${props.topColor.b}, ${props.topColor.a})`;
  var shadowColor = `rgba(${props.topColor.r}, ${props.topColor.g}, ${props.topColor.b}, ${props.topColor.a / 2})`;
  shadowColor = `rgba(0,0,0,0.2)`;
  console.log(w);
  const click = {
    up: {
      x: -s * 1.5,
      y: -s * 1.5,
      boxShadow: `${s * 1.5}px ${s * 1.5}px 0 ${shadowColor}`
    },
    static: {
      x: -s,
      y: -s,
      boxShadow: `${s}px ${s}px 0 ${shadowColor}`
    },
    down: {
      x: 0,
      y: 0,
      boxShadow: `0px 0px 0 ${shadowColor}`
    }
  };
  const btnStyle = {
    width: `${w}px`,
    height: `${h}px`,
    // transform: 'scale(0.5)',
    // transformOrigin: 'left',
    textAlign: 'center',
    // owmargin: '10px',
    position: 'absolute',
    zIndex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: `${h / 8}px`,
    // boxShadow: `5px 5px ${shadowColor} `,
    border: `${b}px solid rgba(${props.borderColor.r}, ${props.borderColor.g}, ${props.borderColor.b}, ${props.borderColor.a})` // borderStyle: 'dashed',
    // background: `${topColor}`,
    // backgroundImage: `linear-gradient(rgba(${props.topColor.color.r}, ${props.topColor.color.g}, ${props.topColor.color.b}, ${props.topColor.color.a}), rgba(${props.bottomColor.color.r}, ${props.bottomColor.color.g}, ${props.bottomColor.color.b}, ${props.bottomColor.color.a})`,

  };
  const textStyle = {
    fontSize: `${h / 2.5}pt`,
    fontFamily: `'${props.font}'`,
    // paintOrder: 'stroke fill',
    position: 'relative',
    top: '-5.5%',
    right: '-2%',
    color: `rgba(${props.color.r}, ${props.color.g}, ${props.color.b}, ${props.color.a})`,
    WebkitTextStrokeWidth: `${b}px`,
    WebkitTextStrokeColor: `rgba(${props.textOutlineColor.r}, ${props.textOutlineColor.g}, ${props.textOutlineColor.b}, ${props.textOutlineColor.a})`
  };
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto auto auto auto auto auto',
    position: 'absolute',
    width: `${w + b * 2}px`,
    height: `${h + b * 2}px`,
    zIndex: '0'
  };
  const gridBlock = {
    // outline: ' 0.5px solid rgba(240,240,240,1)',
    borderTop: `${b}px solid rgba(0,0,0,0.2)`,
    borderRight: `${b}px solid rgba(0,0,0,0.2)` // background: 'white',

  };
  const gridBlockLeft = {
    // outline: ' 0.5px solid rgba(240,240,240,1)',
    borderTop: `${b}px solid rgba(0,0,0,0.2)`,
    borderLeft: `${b}px solid rgba(0,0,0,0.2)`,
    borderRight: `${b}px solid rgba(0,0,0,0.2)`,
    marginLeft: '-1px' // background: 'white',

  };
  const gridBlockBottom = {
    // outline: ' 0.5px solid rgba(240,240,240,1)',
    borderTop: `${b}px solid rgba(0,0,0,0.2)`,
    borderRight: `${b}px solid rgba(0,0,0,0.2)`,
    borderBottom: `${b}px solid rgba(0,0,0,0.2)`,
    marginBottom: '-1px' // background: 'white',

  };
  const gridCircle = {
    border: `${b}px dashed rgba(50,50,50,1)`,
    borderRadius: `${h / 8}px`
  };
  const containerStyle = {
    width: `${w}px`,
    height: `${h}px`,
    position: 'relative',
    borderRadius: `${h / 8}px`,
    cursor: 'pointer',
    x: -s,
    y: -s,
    boxShadow: `${s}px ${s}px 0 ${shadowColor}`,
    userSelect: 'none',
    margin: `${s * 3}px`,
    border: `${b}px solid rgba(0,0,0,0)` // width: '100%',
    // height: '100%',

  };
  const supStyle = {// color: 'black',
  };
  const captureStyle = {// width: `${w * 2}px`,
    // height: `${h * 2}px`,
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  };
  const controls = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])();
  controls.start({
    x: [0, -s * 1.5, -s],
    y: [0, -s * 1.5, -s],
    boxShadow: [`0px 0px 0 ${shadowColor}`, `${s * 1.5}px ${s * 1.5}px 0 ${shadowColor}`, `${s}px ${s}px 0 ${shadowColor}`],
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
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    id: "yes-button",
    style: containerStyle,
    variants: click,
    initial: "static" // animate={props.clicked ? { ck: [null, "up", "down", "static"] } : { ck: [null, "up", "down", "static"] }}
    ,
    animate: props.clicked ? controls : controls,
    animate: controls,
    whileHover: "up",
    whileTap: "down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("div", {
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
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    style: btnStyle,
    animate: {
      background: `${topColor}`
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
/* harmony import */ var _components_control_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/control.js */ "./components/control.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! html-to-image */ "html-to-image");
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(html_to_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! downloadjs */ "downloadjs");
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(downloadjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! file-saver */ "file-saver");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ios_inner_height__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ios-inner-height */ "ios-inner-height");
/* harmony import */ var ios_inner_height__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ios_inner_height__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/Users/psanches/web/btnmaker/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;








 // import domtoimage from 'dom-to-image';




var i = 1;

function HomePage() {
  //states
  const {
    0: font,
    1: setFont
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("NowTextBold");
  const {
    0: strokeWeight,
    1: setStrokeWeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(1);
  const {
    0: sizeMultiplier,
    1: setSizeMultiplier
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(3);
  const {
    0: shadow,
    1: setShadow
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true);
  const {
    0: clicked,
    1: setClicked
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const {
    0: isLockup,
    1: setLockup
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const {
    0: topColor,
    1: setTopColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    r: '255',
    g: '255',
    b: '255',
    a: '0.3'
  });
  const {
    0: bottomColor,
    1: setBottomColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    r: '255',
    g: '255',
    b: '255',
    a: '0.3'
  });
  const {
    0: color,
    1: setColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    r: '255',
    g: '255',
    b: '255',
    a: '1'
  });
  const {
    0: textOutlineColor,
    1: setTextOutlineColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    r: '0',
    g: '0',
    b: '0',
    a: '1'
  });
  const {
    0: borderColor,
    1: setBorderColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    r: '0',
    g: '0',
    b: '0',
    a: '1'
  });

  function setBothColors(json) {
    setTopColor(json);
    setBottomColor(json);
  }

  function playSequence() {
    if (i < _components_cycleStates_js__WEBPACK_IMPORTED_MODULE_3__["default"].length) {
      setTopColor(_components_cycleStates_js__WEBPACK_IMPORTED_MODULE_3__["default"][i].topColor);
      setBottomColor(_components_cycleStates_js__WEBPACK_IMPORTED_MODULE_3__["default"][i].bottomColor);
      setColor(_components_cycleStates_js__WEBPACK_IMPORTED_MODULE_3__["default"][i].color);
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
      r: 255,
      g: 255,
      b: 255,
      a: 0.3
    });
    setColor({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    });
  }

  function setRandomColor() {
    setBothColors({
      r: Math.floor(Math.random() * 255),
      g: Math.floor(Math.random() * 255),
      b: Math.floor(Math.random() * 255),
      a: '1'
    });
  }

  function useSave() {
    html_to_image__WEBPACK_IMPORTED_MODULE_6___default.a.toBlob(document.getElementById('stamp'), {}).then(function (blob) {
      downloadjs__WEBPACK_IMPORTED_MODULE_7___default()(blob, 'yes®.png');
    });
  }

  const variants = {
    hover: {
      scale: 1.05
    },
    tap: {
      scale: 0.95
    }
  };
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("div", {
    style: {
      height: `${ios_inner_height__WEBPACK_IMPORTED_MODULE_10___default.a}px`
    },
    className: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("div", {
    className: "canvas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, isLockup ? __jsx("div", {
    id: "stamp",
    className: "stampLockup",
    style: {
      borderWidth: `${strokeWeight}px`,
      width: `${100 * sizeMultiplier + 35}px`,
      borderRadius: `${(100 * sizeMultiplier + 35) / 2.5 / 8}px`,
      fontSize: `${sizeMultiplier * 5}pt`,
      padding: `20px 12px 0px 10px`
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    className: "stamp-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
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
      lineNumber: 111
    },
    __self: this
  })) : __jsx("div", {
    id: "stamp",
    className: "stampButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
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
      lineNumber: 115
    },
    __self: this
  }))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
    className: "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(_components_control_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx(_components_colorpicker_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "colorPicker",
    color: topColor,
    setColor: setBothColors,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), "Background"), __jsx(_components_control_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(_components_colorpicker_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "colorPicker",
    color: color,
    setColor: setColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), "Typography"), __jsx(_components_control_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: () => playSequence(),
    icon: "forward",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Cycle"), __jsx(_components_control_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: () => resetColor(),
    icon: "rollback",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Reset"), __jsx(_components_control_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: () => setStrokeWeight((strokeWeight + 1) % 3 + 1),
    icon: "edit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "Stroke Weight"), __jsx(_components_control_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: () => setSizeMultiplier((sizeMultiplier + 1) % 10 + 1),
    icon: "fullscreen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Size"), __jsx(_components_control_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: () => setShadow(!shadow),
    icon: "border-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Shadow"), __jsx(_components_control_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: () => setLockup(!isLockup),
    icon: "border-outer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Lockup"), __jsx(_components_control_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: () => useSave(),
    icon: "download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Download PNG"))));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/psanches/web/btnmaker/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "downloadjs":
/*!*****************************!*\
  !*** external "downloadjs" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("downloadjs");

/***/ }),

/***/ "file-saver":
/*!*****************************!*\
  !*** external "file-saver" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("file-saver");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "html-to-image":
/*!********************************!*\
  !*** external "html-to-image" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-to-image");

/***/ }),

/***/ "ios-inner-height":
/*!***********************************!*\
  !*** external "ios-inner-height" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ios-inner-height");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-color":
/*!******************************!*\
  !*** external "react-color" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-color");

/***/ }),

/***/ "react-device-detect":
/*!**************************************!*\
  !*** external "react-device-detect" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ }),

/***/ "reactcss":
/*!***************************!*\
  !*** external "reactcss" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactcss");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map