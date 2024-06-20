/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*Start CSS Reset Code
/* Box sizing rules */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
figure,
blockquote,
dl,
dd {
    margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
    list-style: none;
}

/* Set core root defaults */
html:focus-within {
    scroll-behavior: smooth;
}

/* Set core body defaults */
body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
}

html, body {
    width: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
    text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
    max-width: 100%;
    display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
    font: inherit;
}

/*End Reset Code*/


:root {
    --black: #070600;
    --white: #f7f7ff;
    --grey: #dadada;
    --pink: #ea526f;
    --cyan: #23b5d3;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  body {
    background-color: var(--white);
  }

  #taskForm {
    position: absolute;
    top:0;
    right:30%;
    border: 3px solid var(--grey);
    background-color: var(--white)

  }

  .hidden {
    display: none;
  }

  #sidebar {
    background-color: var(--grey);
  }

  #wrapper {
    display: grid;
    grid-template-columns: 20% 80%;
    height:100vh;
  }

  #taskAreaHeader {
    background-color: var(--cyan);
    text-align: center;
    color: var(--black);
    height: 50px;
    display: grid;
    grid-template-columns: 60% 40%;
    align-items: center;
  } 

  #taskList {
    background-color: var(--pink);
  }

  #taskExpand {
    background-color: var(--cyan); 
  }

  .projectContainer {
    margin: 10px;
  }

  .taskContainer {
    border-bottom: 1px solid grey;
    padding: 5px;
  }

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;qBACqB;AACrB;;;IAGI,sBAAsB;AAC1B;;AAEA,0BAA0B;AAC1B;;;;;;;;;;;;IAYI,SAAS;AACb;;AAEA,2GAA2G;AAC3G;;IAEI,gBAAgB;AACpB;;AAEA,2BAA2B;AAC3B;IACI,uBAAuB;AAC3B;;AAEA,2BAA2B;AAC3B;IACI,iBAAiB;IACjB,6BAA6B;IAC7B,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA,0DAA0D;AAC1D;IACI,8BAA8B;AAClC;;AAEA,oCAAoC;AACpC;;IAEI,eAAe;IACf,cAAc;AAClB;;AAEA,yCAAyC;AACzC;;;;IAII,aAAa;AACjB;;AAEA,iBAAiB;;;AAGjB;IACI,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,eAAe;IACf,eAAe;IACf,6EAA6E;EAC/E;;EAEA;IACE,8BAA8B;EAChC;;EAEA;IACE,kBAAkB;IAClB,KAAK;IACL,SAAS;IACT,6BAA6B;IAC7B;;EAEF;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,6BAA6B;EAC/B;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,YAAY;EACd;;EAEA;IACE,6BAA6B;IAC7B,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;EACrB;;EAEA;IACE,6BAA6B;EAC/B;;EAEA;IACE,6BAA6B;EAC/B;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,6BAA6B;IAC7B,YAAY;EACd","sourcesContent":["/*Start CSS Reset Code\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nfigure,\nblockquote,\ndl,\ndd {\n    margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n    list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n    scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n    min-height: 100vh;\n    text-rendering: optimizeSpeed;\n    line-height: 1.5;\n}\n\nhtml, body {\n    width: 100%;\n    margin: 0px;\n    padding: 0px;\n    overflow-x: hidden;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n    text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n    max-width: 100%;\n    display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\n/*End Reset Code*/\n\n\n:root {\n    --black: #070600;\n    --white: #f7f7ff;\n    --grey: #dadada;\n    --pink: #ea526f;\n    --cyan: #23b5d3;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  }\n\n  body {\n    background-color: var(--white);\n  }\n\n  #taskForm {\n    position: absolute;\n    top:0;\n    right:30%;\n    border: 3px solid var(--grey);\n    background-color: var(--white)\n\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  #sidebar {\n    background-color: var(--grey);\n  }\n\n  #wrapper {\n    display: grid;\n    grid-template-columns: 20% 80%;\n    height:100vh;\n  }\n\n  #taskAreaHeader {\n    background-color: var(--cyan);\n    text-align: center;\n    color: var(--black);\n    height: 50px;\n    display: grid;\n    grid-template-columns: 60% 40%;\n    align-items: center;\n  } \n\n  #taskList {\n    background-color: var(--pink);\n  }\n\n  #taskExpand {\n    background-color: var(--cyan); \n  }\n\n  .projectContainer {\n    margin: 10px;\n  }\n\n  .taskContainer {\n    border-bottom: 1px solid grey;\n    padding: 5px;\n  }\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gui.js":
/*!********************!*\
  !*** ./src/gui.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectLink: () => (/* binding */ addProjectLink),
/* harmony export */   initDynamicContent: () => (/* binding */ initDynamicContent)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



async function initDynamicContent() {
  await _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects;
  await _tasks__WEBPACK_IMPORTED_MODULE_0__.allTasks;
  await _tasks__WEBPACK_IMPORTED_MODULE_0__.createTask;
  await _tasks__WEBPACK_IMPORTED_MODULE_0__.fullDeleteTask;


  //Handle generating tasks and projects

  const taskArea = document.getElementById("taskAreaContent");

  //*Put this out in DOMUTILS*/

  const createDeleteBtn = () => {
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");
    return deleteBtn;
  };

  const createEditBtn = () => {
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    return editBtn;
  };

  const displayProject = (project) => {
    let projectContainer = document.createElement("div");
    projectContainer.classList.add("projectContainer");
    taskArea.appendChild(projectContainer);

    let projectName = document.createElement("h2");
    projectName.textContent = project.name;
    projectContainer.appendChild(projectName);

    let projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;
    projectContainer.appendChild(projectDescription);
  };

  const displayTask = (task) => {
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");
    taskArea.appendChild(taskContainer);

    let taskName = document.createElement("h3");
    taskName.textContent = task.name;
    taskContainer.appendChild(taskName);

    let taskDescription = document.createElement("p");
    taskDescription.textContent = task.description;
    taskContainer.appendChild(taskDescription);

    taskContainer.setAttribute("id", task.id);

    taskContainer.appendChild(createDeleteBtn());
    taskContainer.appendChild(createEditBtn());
  };

  const displayTasks = (project) => {
    for (var i = 0; i < project.tasks.length; i++) {
      displayTask(project.tasks[i]);
    }
  };

  const clearProjectsTasks = () => {
    taskArea.textContent = "";
  };

  const deleteNode = (id) => {
    let element = document.getElementById(id);
    element.remove();
  }


  //END DOMUtils
  const displayProjectwithTasks = (project) => {
    clearProjectsTasks();
    displayProject(project);
    displayTasks(project);
  };

  //Default content on website

  displayProjectwithTasks(_projects__WEBPACK_IMPORTED_MODULE_1__.allProjects[0]);

  // Populate form fields
  let select = document.getElementById("selectProject");

  const clearProjectOptions = () => {
    select.textContent = "";
  };

  const displayProjectOptions = () => {
//Skip All Projects at Index 0
    for (let i = 1; i < _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects.length; i++) {
      let project = _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects[i];
      let projectOption = document.createElement("option");
      projectOption.textContent = project.name;
      projectOption.value = i;
      select.appendChild(projectOption);
    }
  };

  //Hadle event listeners

  const newTaskButton = document.getElementById("newTaskButton");
  const taskFormCloseButton = document.getElementById("taskFormClose");
  const taskFormContainer = document.getElementById("taskFormContainer");
  const projectList = document.getElementById("projectList");
  const taskForm = document.getElementById("taskForm");

  //Task Form

  newTaskButton.addEventListener("click", () => {
    taskFormContainer.classList.remove("hidden");
    clearProjectOptions();
    displayProjectOptions();
  });

  taskFormCloseButton.addEventListener("click", () => {
    taskFormContainer.classList.add("hidden");
  });

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains('deleteBtn')) {
        (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.fullDeleteTask)(event.target.parentNode.id);
        deleteNode(event.target.parentNode.id);
    }
  });

  projectList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      let projectName = event.target.innerText;
      let projectIndex = _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects.findIndex(
        (project) => project.name == projectName
      );
      displayProjectwithTasks(_projects__WEBPACK_IMPORTED_MODULE_1__.allProjects[projectIndex]);
    }
  });

  //Put in non-GUI section?
  //Why does it get added to all projects twice?
  const addTasktoProject = (task) => {
    let selectProject = document.getElementById("selectProject").value;
    _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects[selectProject].tasks.push(task);
  };

  //Combine this with project listener?
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let taskName = document.getElementById("taskName").value;
    let taskDescription = document.getElementById("taskDescription").value;
    (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.createTask)(taskName, taskDescription);
    addTasktoProject(_tasks__WEBPACK_IMPORTED_MODULE_0__.allTasks[_tasks__WEBPACK_IMPORTED_MODULE_0__.allTasks.length - 1]);
  });
}

const addProjectLink = (project) => {
  let projectLink = document.createElement("li");
  projectLink.classList.add("projectLink");
  projectLink.setAttribute("role", "button");
  projectLink.textContent = project.name;
  projectList.appendChild(projectLink);
};

//Add function to ask all projects to task create/edit form as a checkbox

//On submit of any form (new task, new project, edited task, edited project): show that it's saved for a few seconds, then close original form
//On clicking delete button:show message that it's deleted for a few seconds, ,then hide form

//Display all projects in sidebar from array````````
//Display array of all tasks on right content area
//Display project: Name, description, display array of tasks

//Close form modals when button is presed

//June 19
//Fix modal to add all to new project, plus new project
//Start solving refresh / saving: Save all information locally, then auto-refresh page on form submit

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findById: () => (/* binding */ findById),
/* harmony export */   uId: () => (/* binding */ uId)
/* harmony export */ });
const uId= () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

const findById  = (array, idNum) => {
    return array.findIndex(x => x.id === idNum);
    
  }

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allProjects: () => (/* binding */ allProjects),
/* harmony export */   createProject: () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gui */ "./src/gui.js");
//PROJECTS
let allProjects = [];


class Project {
  constructor(name, description, tasks) {
    this.name = name;
    this.description = description;
    this.tasks = tasks;
  }
}

//Revisit to remove export
const createProject = (name, description, tasks) => {
  if (!Array.isArray(tasks)) {
    tasks = [tasks];
  }
  let project = new Project(name, description, tasks);
  allProjects.push(project);
  (0,_gui__WEBPACK_IMPORTED_MODULE_0__.addProjectLink)(project);
};

//Function to create project class
//Name, description, tas
//Create first class "All"

//Listen for form to submit new project
//Listen for form to edit project
//Listent for button to delete project


/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allTasks: () => (/* binding */ allTasks),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   fullDeleteTask: () => (/* binding */ fullDeleteTask)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/helpers.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
let allTasks = [];




class Task {
  constructor(name, description) { 
    this.name = name;
    this.description = description;
    this.id = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.uId)();
  }
}

const createTask = (name, description) => {
  let task = new Task(name, description);
  allTasks.push(task);
};

createTask(
  "Sample Task",
  "Here's an example of what a sother ample task looks like!"
);
createTask(
  "Sample Task2",
  "Here's another example of what a sample task looks like!"
);


const deleteTask  = (array, taskId) => {
  let index = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.findById)(array, taskId);
  array.splice(index,1);
}

const fullDeleteTask = (id) => {
  deleteTask(allTasks, id);
  for (const project of _projects_js__WEBPACK_IMPORTED_MODULE_1__.allProjects) {
    let index = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.findById)(project.tasks, id);
    project.tasks.splice(index,1);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _gui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gui.js */ "./src/gui.js");





(0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.createProject)("All Tasks", "An unfiltered view of all tasks", _tasks__WEBPACK_IMPORTED_MODULE_1__.allTasks);
(0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.createProject)("Test Project", "An unfiltered view of all tasks", _tasks__WEBPACK_IMPORTED_MODULE_1__.allTasks[0]);
(0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.createProject)("Test Project 2", "An unfiltered view of all tasks", _tasks__WEBPACK_IMPORTED_MODULE_1__.allTasks[0]);


document.addEventListener("DOMContentLoaded", function () {
  (0,_gui_js__WEBPACK_IMPORTED_MODULE_3__.initDynamicContent)();
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDUDtBQUNBLHdCQUF3QixxREFBVztBQUNuQyxnQkFBZ0IscURBQVE7QUFDeEI7QUFDQTtBQUNBOzs7Ozs7O1VDdkNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYztBQUNXO0FBQ0E7O0FBRTlDLDJEQUFhLGlEQUFpRCw0Q0FBUTtBQUN0RSwyREFBYSxvREFBb0QsNENBQVE7QUFDekUsMkRBQWEsc0RBQXNELDRDQUFROzs7QUFHM0U7QUFDQSxFQUFFLDJEQUFrQjtBQUNwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9zcmMvZ3VpLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qU3RhcnQgQ1NTIFJlc2V0IENvZGVcbi8qIEJveCBzaXppbmcgcnVsZXMgKi9cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXG5ib2R5LFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmZpZ3VyZSxcbmJsb2NrcXVvdGUsXG5kbCxcbmRkIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xudWxbcm9sZT0nbGlzdCddLFxub2xbcm9sZT0nbGlzdCddIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXG5odG1sOmZvY3VzLXdpdGhpbiB7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cbmJvZHkge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbmh0bWwsIGJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXG5hOm5vdChbY2xhc3NdKSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xufVxuXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXG5pbWcsXG5waWN0dXJlIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gICAgZm9udDogaW5oZXJpdDtcbn1cblxuLypFbmQgUmVzZXQgQ29kZSovXG5cblxuOnJvb3Qge1xuICAgIC0tYmxhY2s6ICMwNzA2MDA7XG4gICAgLS13aGl0ZTogI2Y3ZjdmZjtcbiAgICAtLWdyZXk6ICNkYWRhZGE7XG4gICAgLS1waW5rOiAjZWE1MjZmO1xuICAgIC0tY3lhbjogIzIzYjVkMztcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgfVxuXG4gICN0YXNrRm9ybSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDowO1xuICAgIHJpZ2h0OjMwJTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1ncmV5KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSlcblxuICB9XG5cbiAgLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNzaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcbiAgfVxuXG4gICN3cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcbiAgICBoZWlnaHQ6MTAwdmg7XG4gIH1cblxuICAjdGFza0FyZWFIZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4pO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjAlIDQwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9IFxuXG4gICN0YXNrTGlzdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XG4gIH1cblxuICAjdGFza0V4cGFuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbik7IFxuICB9XG5cbiAgLnByb2plY3RDb250YWluZXIge1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuXG4gIC50YXNrQ29udGFpbmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO3FCQUNxQjtBQUNyQjs7O0lBR0ksc0JBQXNCO0FBQzFCOztBQUVBLDBCQUEwQjtBQUMxQjs7Ozs7Ozs7Ozs7O0lBWUksU0FBUztBQUNiOztBQUVBLDJHQUEyRztBQUMzRzs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUEsMkJBQTJCO0FBQzNCO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBLDJCQUEyQjtBQUMzQjtJQUNJLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBLDBEQUEwRDtBQUMxRDtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQSxvQ0FBb0M7QUFDcEM7O0lBRUksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUEseUNBQXlDO0FBQ3pDOzs7O0lBSUksYUFBYTtBQUNqQjs7QUFFQSxpQkFBaUI7OztBQUdqQjtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBQ2YsNkVBQTZFO0VBQy9FOztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLEtBQUs7SUFDTCxTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCOztFQUVGOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSw2QkFBNkI7SUFDN0IsWUFBWTtFQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qU3RhcnQgQ1NTIFJlc2V0IENvZGVcXG4vKiBCb3ggc2l6aW5nIHJ1bGVzICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuZmlndXJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcbnVsW3JvbGU9J2xpc3QnXSxcXG5vbFtyb2xlPSdsaXN0J10ge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcbmE6bm90KFtjbGFzc10pIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xcbn1cXG5cXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxuaW1nLFxcbnBpY3R1cmUge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gICAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuLypFbmQgUmVzZXQgQ29kZSovXFxuXFxuXFxuOnJvb3Qge1xcbiAgICAtLWJsYWNrOiAjMDcwNjAwO1xcbiAgICAtLXdoaXRlOiAjZjdmN2ZmO1xcbiAgICAtLWdyZXk6ICNkYWRhZGE7XFxuICAgIC0tcGluazogI2VhNTI2ZjtcXG4gICAgLS1jeWFuOiAjMjNiNWQzO1xcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXG4gIH1cXG5cXG4gIGJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICB9XFxuXFxuICAjdGFza0Zvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDowO1xcbiAgICByaWdodDozMCU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWdyZXkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSlcXG5cXG4gIH1cXG5cXG4gIC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgI3NpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIH1cXG5cXG4gICN3cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxuICB9XFxuXFxuICAjdGFza0FyZWFIZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjAlIDQwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH0gXFxuXFxuICAjdGFza0xpc3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIH1cXG5cXG4gICN0YXNrRXhwYW5kIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbik7IFxcbiAgfVxcblxcbiAgLnByb2plY3RDb250YWluZXIge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICB9XFxuXFxuICAudGFza0NvbnRhaW5lciB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFsbFRhc2tzLCBjcmVhdGVUYXNrLCBmdWxsRGVsZXRlVGFzayB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0RHluYW1pY0NvbnRlbnQoKSB7XG4gIGF3YWl0IGFsbFByb2plY3RzO1xuICBhd2FpdCBhbGxUYXNrcztcbiAgYXdhaXQgY3JlYXRlVGFzaztcbiAgYXdhaXQgZnVsbERlbGV0ZVRhc2s7XG5cblxuICAvL0hhbmRsZSBnZW5lcmF0aW5nIHRhc2tzIGFuZCBwcm9qZWN0c1xuXG4gIGNvbnN0IHRhc2tBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrQXJlYUNvbnRlbnRcIik7XG5cbiAgLy8qUHV0IHRoaXMgb3V0IGluIERPTVVUSUxTKi9cblxuICBjb25zdCBjcmVhdGVEZWxldGVCdG4gPSAoKSA9PiB7XG4gICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZUJ0blwiKTtcbiAgICByZXR1cm4gZGVsZXRlQnRuO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUVkaXRCdG4gPSAoKSA9PiB7XG4gICAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICByZXR1cm4gZWRpdEJ0bjtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5UHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RDb250YWluZXJcIik7XG4gICAgdGFza0FyZWEuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG5cbiAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgICBsZXQgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJvamVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVRhc2sgPSAodGFzaykgPT4ge1xuICAgIGxldCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ29udGFpbmVyXCIpO1xuICAgIHRhc2tBcmVhLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuXG4gICAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuXG4gICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuXG4gICAgdGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0YXNrLmlkKTtcblxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRGVsZXRlQnRuKCkpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWRpdEJ0bigpKTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5VGFza3MgPSAocHJvamVjdCkgPT4ge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvamVjdC50YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgZGlzcGxheVRhc2socHJvamVjdC50YXNrc1tpXSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNsZWFyUHJvamVjdHNUYXNrcyA9ICgpID0+IHtcbiAgICB0YXNrQXJlYS50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlTm9kZSA9IChpZCkgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuXG4gIC8vRU5EIERPTVV0aWxzXG4gIGNvbnN0IGRpc3BsYXlQcm9qZWN0d2l0aFRhc2tzID0gKHByb2plY3QpID0+IHtcbiAgICBjbGVhclByb2plY3RzVGFza3MoKTtcbiAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0KTtcbiAgICBkaXNwbGF5VGFza3MocHJvamVjdCk7XG4gIH07XG5cbiAgLy9EZWZhdWx0IGNvbnRlbnQgb24gd2Vic2l0ZVxuXG4gIGRpc3BsYXlQcm9qZWN0d2l0aFRhc2tzKGFsbFByb2plY3RzWzBdKTtcblxuICAvLyBQb3B1bGF0ZSBmb3JtIGZpZWxkc1xuICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RQcm9qZWN0XCIpO1xuXG4gIGNvbnN0IGNsZWFyUHJvamVjdE9wdGlvbnMgPSAoKSA9PiB7XG4gICAgc2VsZWN0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5UHJvamVjdE9wdGlvbnMgPSAoKSA9PiB7XG4vL1NraXAgQWxsIFByb2plY3RzIGF0IEluZGV4IDBcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFsbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcHJvamVjdCA9IGFsbFByb2plY3RzW2ldO1xuICAgICAgbGV0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBpO1xuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xuICAgIH1cbiAgfTtcblxuICAvL0hhZGxlIGV2ZW50IGxpc3RlbmVyc1xuXG4gIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tCdXR0b25cIik7XG4gIGNvbnN0IHRhc2tGb3JtQ2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tGb3JtQ2xvc2VcIik7XG4gIGNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRm9ybUNvbnRhaW5lclwiKTtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RMaXN0XCIpO1xuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Zvcm1cIik7XG5cbiAgLy9UYXNrIEZvcm1cblxuICBuZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBjbGVhclByb2plY3RPcHRpb25zKCk7XG4gICAgZGlzcGxheVByb2plY3RPcHRpb25zKCk7XG4gIH0pO1xuXG4gIHRhc2tGb3JtQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZUJ0bicpKSB7XG4gICAgICAgIGZ1bGxEZWxldGVUYXNrKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbiAgICAgICAgZGVsZXRlTm9kZShldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZCk7XG4gICAgfVxuICB9KTtcblxuICBwcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSBcIkxJXCIpIHtcbiAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGV2ZW50LnRhcmdldC5pbm5lclRleHQ7XG4gICAgICBsZXQgcHJvamVjdEluZGV4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KFxuICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09IHByb2plY3ROYW1lXG4gICAgICApO1xuICAgICAgZGlzcGxheVByb2plY3R3aXRoVGFza3MoYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XSk7XG4gICAgfVxuICB9KTtcblxuICAvL1B1dCBpbiBub24tR1VJIHNlY3Rpb24/XG4gIC8vV2h5IGRvZXMgaXQgZ2V0IGFkZGVkIHRvIGFsbCBwcm9qZWN0cyB0d2ljZT9cbiAgY29uc3QgYWRkVGFza3RvUHJvamVjdCA9ICh0YXNrKSA9PiB7XG4gICAgbGV0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdFByb2plY3RcIikudmFsdWU7XG4gICAgYWxsUHJvamVjdHNbc2VsZWN0UHJvamVjdF0udGFza3MucHVzaCh0YXNrKTtcbiAgfTtcblxuICAvL0NvbWJpbmUgdGhpcyB3aXRoIHByb2plY3QgbGlzdGVuZXI/XG4gIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tOYW1lXCIpLnZhbHVlO1xuICAgIGxldCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBjcmVhdGVUYXNrKHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24pO1xuICAgIGFkZFRhc2t0b1Byb2plY3QoYWxsVGFza3NbYWxsVGFza3MubGVuZ3RoIC0gMV0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RMaW5rID0gKHByb2plY3QpID0+IHtcbiAgbGV0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBwcm9qZWN0TGluay5jbGFzc0xpc3QuYWRkKFwicHJvamVjdExpbmtcIik7XG4gIHByb2plY3RMaW5rLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJidXR0b25cIik7XG4gIHByb2plY3RMaW5rLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TGluayk7XG59O1xuXG4vL0FkZCBmdW5jdGlvbiB0byBhc2sgYWxsIHByb2plY3RzIHRvIHRhc2sgY3JlYXRlL2VkaXQgZm9ybSBhcyBhIGNoZWNrYm94XG5cbi8vT24gc3VibWl0IG9mIGFueSBmb3JtIChuZXcgdGFzaywgbmV3IHByb2plY3QsIGVkaXRlZCB0YXNrLCBlZGl0ZWQgcHJvamVjdCk6IHNob3cgdGhhdCBpdCdzIHNhdmVkIGZvciBhIGZldyBzZWNvbmRzLCB0aGVuIGNsb3NlIG9yaWdpbmFsIGZvcm1cbi8vT24gY2xpY2tpbmcgZGVsZXRlIGJ1dHRvbjpzaG93IG1lc3NhZ2UgdGhhdCBpdCdzIGRlbGV0ZWQgZm9yIGEgZmV3IHNlY29uZHMsICx0aGVuIGhpZGUgZm9ybVxuXG4vL0Rpc3BsYXkgYWxsIHByb2plY3RzIGluIHNpZGViYXIgZnJvbSBhcnJheWBgYGBgYGBgXG4vL0Rpc3BsYXkgYXJyYXkgb2YgYWxsIHRhc2tzIG9uIHJpZ2h0IGNvbnRlbnQgYXJlYVxuLy9EaXNwbGF5IHByb2plY3Q6IE5hbWUsIGRlc2NyaXB0aW9uLCBkaXNwbGF5IGFycmF5IG9mIHRhc2tzXG5cbi8vQ2xvc2UgZm9ybSBtb2RhbHMgd2hlbiBidXR0b24gaXMgcHJlc2VkXG5cbi8vSnVuZSAxOVxuLy9GaXggbW9kYWwgdG8gYWRkIGFsbCB0byBuZXcgcHJvamVjdCwgcGx1cyBuZXcgcHJvamVjdFxuLy9TdGFydCBzb2x2aW5nIHJlZnJlc2ggLyBzYXZpbmc6IFNhdmUgYWxsIGluZm9ybWF0aW9uIGxvY2FsbHksIHRoZW4gYXV0by1yZWZyZXNoIHBhZ2Ugb24gZm9ybSBzdWJtaXQiLCJleHBvcnQgY29uc3QgdUlkPSAoKSA9PiB7XG4gICAgcmV0dXJuIERhdGUubm93KCkudG9TdHJpbmcoMzYpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIpO1xufVxuXG5leHBvcnQgY29uc3QgZmluZEJ5SWQgID0gKGFycmF5LCBpZE51bSkgPT4ge1xuICAgIHJldHVybiBhcnJheS5maW5kSW5kZXgoeCA9PiB4LmlkID09PSBpZE51bSk7XG4gICAgXG4gIH0iLCIvL1BST0pFQ1RTXG5leHBvcnQgbGV0IGFsbFByb2plY3RzID0gW107XG5pbXBvcnQgeyBhZGRQcm9qZWN0TGluayB9IGZyb20gXCIuL2d1aVwiO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIHRhc2tzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICB9XG59XG5cbi8vUmV2aXNpdCB0byByZW1vdmUgZXhwb3J0XG5leHBvcnQgY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lLCBkZXNjcmlwdGlvbiwgdGFza3MpID0+IHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHRhc2tzKSkge1xuICAgIHRhc2tzID0gW3Rhc2tzXTtcbiAgfVxuICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIGRlc2NyaXB0aW9uLCB0YXNrcyk7XG4gIGFsbFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIGFkZFByb2plY3RMaW5rKHByb2plY3QpO1xufTtcblxuLy9GdW5jdGlvbiB0byBjcmVhdGUgcHJvamVjdCBjbGFzc1xuLy9OYW1lLCBkZXNjcmlwdGlvbiwgdGFzXG4vL0NyZWF0ZSBmaXJzdCBjbGFzcyBcIkFsbFwiXG5cbi8vTGlzdGVuIGZvciBmb3JtIHRvIHN1Ym1pdCBuZXcgcHJvamVjdFxuLy9MaXN0ZW4gZm9yIGZvcm0gdG8gZWRpdCBwcm9qZWN0XG4vL0xpc3RlbnQgZm9yIGJ1dHRvbiB0byBkZWxldGUgcHJvamVjdFxuIiwiZXhwb3J0IGxldCBhbGxUYXNrcyA9IFtdO1xuaW1wb3J0IHsgdUlkLCBmaW5kQnlJZCB9IGZyb20gXCIuL2hlbHBlcnMuanNcIjtcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcblxuXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24pIHsgXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5pZCA9IHVJZCgpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrID0gKG5hbWUsIGRlc2NyaXB0aW9uKSA9PiB7XG4gIGxldCB0YXNrID0gbmV3IFRhc2sobmFtZSwgZGVzY3JpcHRpb24pO1xuICBhbGxUYXNrcy5wdXNoKHRhc2spO1xufTtcblxuY3JlYXRlVGFzayhcbiAgXCJTYW1wbGUgVGFza1wiLFxuICBcIkhlcmUncyBhbiBleGFtcGxlIG9mIHdoYXQgYSBzb3RoZXIgYW1wbGUgdGFzayBsb29rcyBsaWtlIVwiXG4pO1xuY3JlYXRlVGFzayhcbiAgXCJTYW1wbGUgVGFzazJcIixcbiAgXCJIZXJlJ3MgYW5vdGhlciBleGFtcGxlIG9mIHdoYXQgYSBzYW1wbGUgdGFzayBsb29rcyBsaWtlIVwiXG4pO1xuXG5cbmNvbnN0IGRlbGV0ZVRhc2sgID0gKGFycmF5LCB0YXNrSWQpID0+IHtcbiAgbGV0IGluZGV4ID0gZmluZEJ5SWQoYXJyYXksIHRhc2tJZCk7XG4gIGFycmF5LnNwbGljZShpbmRleCwxKTtcbn1cblxuZXhwb3J0IGNvbnN0IGZ1bGxEZWxldGVUYXNrID0gKGlkKSA9PiB7XG4gIGRlbGV0ZVRhc2soYWxsVGFza3MsIGlkKTtcbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIGFsbFByb2plY3RzKSB7XG4gICAgbGV0IGluZGV4ID0gZmluZEJ5SWQocHJvamVjdC50YXNrcywgaWQpO1xuICAgIHByb2plY3QudGFza3Muc3BsaWNlKGluZGV4LDEpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgYWxsVGFza3MgfSBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBpbml0RHluYW1pY0NvbnRlbnQgfSBmcm9tIFwiLi9ndWkuanNcIjtcblxuY3JlYXRlUHJvamVjdChcIkFsbCBUYXNrc1wiLCBcIkFuIHVuZmlsdGVyZWQgdmlldyBvZiBhbGwgdGFza3NcIiwgYWxsVGFza3MpO1xuY3JlYXRlUHJvamVjdChcIlRlc3QgUHJvamVjdFwiLCBcIkFuIHVuZmlsdGVyZWQgdmlldyBvZiBhbGwgdGFza3NcIiwgYWxsVGFza3NbMF0pO1xuY3JlYXRlUHJvamVjdChcIlRlc3QgUHJvamVjdCAyXCIsIFwiQW4gdW5maWx0ZXJlZCB2aWV3IG9mIGFsbCB0YXNrc1wiLCBhbGxUYXNrc1swXSk7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBpbml0RHluYW1pY0NvbnRlbnQoKTtcbn0pO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=