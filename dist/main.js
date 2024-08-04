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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./sunset_background.jpg */ "./src/sunset_background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
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

/*Global and Shared Styles*/
:root {
  --color1: #ca5c54;
  --color2: #154c79;
  font-family: "Sen", sans-serif;
}

html {
  min-height: 100%;
  position: relative;
}

body {
  background-color: var(--white);
  height: 100%;

}

.hidden {
  display: none;
}

/*Forms*/
#taskFormContainer, #editTaskFormContainer {
  background-color: rgba(0, 0, 0, 0.178);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

#taskForm, #editTaskForm {
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, 0);
  border: 2px solid grey;
  z-index: 10;
  padding: 15px;
  width: 350px;
  background-color: white;
}

form h3 {
  margin-top: 25px;
}

.closeBtn {
  position: absolute;
  right: 5px;
  top: 3px;
  color: var(--color1)
}

input, select, textarea {
  width: 100%;
  clear: both;
  border: 1px grey solid;
  padding: 5px;
}

textarea {
  resize: vertical;
}

select {
  background-color: white;
}

.formFields label {
  margin-top: 10px;
  display: inline-block;
}


/*Main Page Layout*/

#sidebar {
  border-right: 2px solid grey;
}

#container {
  padding: 50px;
  background-color: #070600;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  height: 100vh;
}

#wrapper {
  background-color: rgba(255, 255, 255, 0.95);
  border: 2px solid grey;
  max-height: 90vh;
  overflow: clip;
}

#sidebar, #taskArea {
  padding: 30px;
  overflow: auto;
  height: calc(90vh - 35px);
}

#mainContent {
  display: grid;
  grid-template-columns: 20% 80%;
  height: 100vh;
  opacity: 95%;
}

#taskAreaHeader {
  text-align: center;
  height: 70px;
  display: grid;
  border-bottom: 2px solid grey;
  grid-template-columns: 100%;
  align-items: center;
}

.projectContainer p {
  margin-bottom: 20px;
}

.taskContainer {
  border-bottom: 1px solid grey;
  padding: 5px;
}


/*Buttons and Links*/

button {
  background-color: rgba(255, 255, 255, 0);
  border: none;
  font-weight: bold;
  margin: 5px 0;
}

li.projectLink, button {
  color: var(--color1);
}

li.projectLink:hover, button:hover {
  color: var(--color2)
}

#newTaskButton, button[type="submit"] {
  background-color: var(--color1);
  color: white;
  padding: 5px 8px;
  z-index: 5;
}

#newTaskButton {
  position: absolute;
  right: 80px;
}

#newTaskButton:hover, button[type="submit"]:hover {
  background-color: var(--color2);
  color: white;
}


button[type="submit"] {
  margin-top: 20px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;qBACqB;AACrB;;;EAGE,sBAAsB;AACxB;;AAEA,0BAA0B;AAC1B;;;;;;;;;;;;EAYE,SAAS;AACX;;AAEA,2GAA2G;AAC3G;;EAEE,gBAAgB;AAClB;;AAEA,2BAA2B;AAC3B;EACE,uBAAuB;AACzB;;AAEA,2BAA2B;AAC3B;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA,0DAA0D;AAC1D;EACE,8BAA8B;AAChC;;AAEA,oCAAoC;AACpC;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA,yCAAyC;AACzC;;;;EAIE,aAAa;AACf;;AAEA,iBAAiB;;AAEjB,2BAA2B;AAC3B;EACE,iBAAiB;EACjB,iBAAiB;EACjB,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,YAAY;;AAEd;;AAEA;EACE,aAAa;AACf;;AAEA,QAAQ;AACR;EACE,sCAAsC;EACtC,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,6BAA6B;EAC7B,sBAAsB;EACtB,WAAW;EACX,aAAa;EACb,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR;AACF;;AAEA;EACE,WAAW;EACX,WAAW;EACX,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;AACvB;;;AAGA,mBAAmB;;AAEnB;EACE,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,mDAA0C;EAC1C,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,2CAA2C;EAC3C,sBAAsB;EACtB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;AACd;;;AAGA,oBAAoB;;AAEpB;EACE,wCAAwC;EACxC,YAAY;EACZ,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE;AACF;;AAEA;EACE,+BAA+B;EAC/B,YAAY;EACZ,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,+BAA+B;EAC/B,YAAY;AACd;;;AAGA;EACE,gBAAgB;AAClB","sourcesContent":["/*Start CSS Reset Code\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\nhtml, body {\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  overflow-x: hidden;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/*End Reset Code*/\n\n/*Global and Shared Styles*/\n:root {\n  --color1: #ca5c54;\n  --color2: #154c79;\n  font-family: \"Sen\", sans-serif;\n}\n\nhtml {\n  min-height: 100%;\n  position: relative;\n}\n\nbody {\n  background-color: var(--white);\n  height: 100%;\n\n}\n\n.hidden {\n  display: none;\n}\n\n/*Forms*/\n#taskFormContainer, #editTaskFormContainer {\n  background-color: rgba(0, 0, 0, 0.178);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n#taskForm, #editTaskForm {\n  position: absolute;\n  left: 50%;\n  top: 30%;\n  transform: translate(-50%, 0);\n  border: 2px solid grey;\n  z-index: 10;\n  padding: 15px;\n  width: 350px;\n  background-color: white;\n}\n\nform h3 {\n  margin-top: 25px;\n}\n\n.closeBtn {\n  position: absolute;\n  right: 5px;\n  top: 3px;\n  color: var(--color1)\n}\n\ninput, select, textarea {\n  width: 100%;\n  clear: both;\n  border: 1px grey solid;\n  padding: 5px;\n}\n\ntextarea {\n  resize: vertical;\n}\n\nselect {\n  background-color: white;\n}\n\n.formFields label {\n  margin-top: 10px;\n  display: inline-block;\n}\n\n\n/*Main Page Layout*/\n\n#sidebar {\n  border-right: 2px solid grey;\n}\n\n#container {\n  padding: 50px;\n  background-color: #070600;\n  background: url('./sunset_background.jpg');\n  background-size: cover;\n  height: 100vh;\n}\n\n#wrapper {\n  background-color: rgba(255, 255, 255, 0.95);\n  border: 2px solid grey;\n  max-height: 90vh;\n  overflow: clip;\n}\n\n#sidebar, #taskArea {\n  padding: 30px;\n  overflow: auto;\n  height: calc(90vh - 35px);\n}\n\n#mainContent {\n  display: grid;\n  grid-template-columns: 20% 80%;\n  height: 100vh;\n  opacity: 95%;\n}\n\n#taskAreaHeader {\n  text-align: center;\n  height: 70px;\n  display: grid;\n  border-bottom: 2px solid grey;\n  grid-template-columns: 100%;\n  align-items: center;\n}\n\n.projectContainer p {\n  margin-bottom: 20px;\n}\n\n.taskContainer {\n  border-bottom: 1px solid grey;\n  padding: 5px;\n}\n\n\n/*Buttons and Links*/\n\nbutton {\n  background-color: rgba(255, 255, 255, 0);\n  border: none;\n  font-weight: bold;\n  margin: 5px 0;\n}\n\nli.projectLink, button {\n  color: var(--color1);\n}\n\nli.projectLink:hover, button:hover {\n  color: var(--color2)\n}\n\n#newTaskButton, button[type=\"submit\"] {\n  background-color: var(--color1);\n  color: white;\n  padding: 5px 8px;\n  z-index: 5;\n}\n\n#newTaskButton {\n  position: absolute;\n  right: 80px;\n}\n\n#newTaskButton:hover, button[type=\"submit\"]:hover {\n  background-color: var(--color2);\n  color: white;\n}\n\n\nbutton[type=\"submit\"] {\n  margin-top: 20px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initForms: () => (/* binding */ initForms)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _gui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gui */ "./src/gui.js");






function initForms() {
    let isFormShown = false;

    //New Task Form Elements
    const newTaskFormContainer = document.getElementById("taskFormContainer");
    const newTaskForm = document.getElementById("taskForm");
    const newTaskButton = document.getElementById("newTaskButton");
    const select = document.getElementById("selectProject");
    let newTaskName = document.getElementById("taskName");
    let newTaskDescription = document.getElementById("taskDescription");
  
    //Edit Task Form Elements
    const editTaskFormContainer = document.getElementById("editTaskFormContainer");
    const editTaskForm = document.getElementById("editTaskForm");
    let editTaskId = document.getElementById("editTaskId");
    let editTaskName = document.getElementById("editTaskName");
    let editTaskDescription = document.getElementById("editTaskDescription");

  
  //Generate Dynmaic Form Content
    const formRefreshProjectOptions = () => {
       //clear project options 
       select.textContent = "";
       //Write new project options
       //Skips All Projects at Index 0
       for (let i = 1; i < _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; i++) {
         let projectOption = document.createElement("option");
         projectOption.textContent = _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].name;
         projectOption.value = i;
         select.appendChild(projectOption);
       }
    }
  
  const autofillEditForm = (taskId) => {
     let origTask = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findById)(_tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks, taskId);
     editTaskId.value = _tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks[origTask].id;
     editTaskName.value = _tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks[origTask].name;
     editTaskDescription.value = _tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks[origTask].description
  }

  //Form Helper Functions
   const hideForm = (form) => {
    form.classList.add("hidden");
      isFormShown = false
   }
  
   const showForm = (form) => {
    form.classList.remove("hidden");
    isFormShown = true;
   }

  //Handle Forms
    newTaskButton.addEventListener("click", () => {
      if (!isFormShown){
      formRefreshProjectOptions();
      showForm(newTaskFormContainer);
    }
    })
  
    document.addEventListener("click", function (event) {
      if (event.target.classList.contains("editBtn")) {
        if (!isFormShown){
          autofillEditForm(event.srcElement.parentNode.id);
           showForm(editTaskFormContainer);
        }
      }
    })
  
    document.addEventListener("click", function (event) {
      if (event.target.classList.contains("closeBtn")) {
        hideForm(event.target.parentNode.parentNode);
      }
    })

    
    const formHandleSelectedProject = (task) => {
      let selectProject = document.getElementById("selectProject").value;
      (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.addTaskToArray)(_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[selectProject].tasks, task);
      (0,_gui__WEBPACK_IMPORTED_MODULE_3__.displayProjectWithTasks)(_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[selectProject]);
    }
  
    
    newTaskForm.addEventListener("submit", (event) => {
      event.preventDefault();
      (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.createTask)(newTaskName.value, newTaskDescription.value);
      formHandleSelectedProject(_tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks[_tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks.length - 1]);
    })
  
    editTaskForm.addEventListener("submit", (event) => {
      event.preventDefault();
      (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.editTask)(editTaskId.value, editTaskName.value, editTaskDescription.value);
      location.reload();
    })
  
  }
  

/***/ }),

/***/ "./src/gui.js":
/*!********************!*\
  !*** ./src/gui.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectLink: () => (/* binding */ addProjectLink),
/* harmony export */   displayProjectWithTasks: () => (/* binding */ displayProjectWithTasks),
/* harmony export */   initDynamicContent: () => (/* binding */ initDynamicContent)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



const taskArea = document.getElementById("taskAreaContent");


//DOM Utils
const createDeleteBtn = () => {
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("deleteBtn");
  return deleteBtn;
};

const createEditBtn = () => {
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("editBtn");
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
  for (let i = 0; i < project.tasks.length; i++) {
    displayTask(project.tasks[i]);
  }
};

const clearProjectTasks = () => {
  taskArea.textContent = "";
};

const deleteNode = (id) => {
  let element = document.getElementById(id);
  element.remove();
};

const displayProjectWithTasks = (project) => {
  clearProjectTasks();
  displayProject(project);
  displayTasks(project);
};

//END DOMUtils

function initDynamicContent() {
  const projectList = document.getElementById("projectList");

  //On new load, auto display new tasks
  displayProjectWithTasks(_projects__WEBPACK_IMPORTED_MODULE_1__.allProjects[0]);

  //Display project info after clicking on each page
  projectList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      let projectName = event.target.innerText;
      let projectIndex = _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects.findIndex(
        (project) => project.name == projectName
      );
      displayProjectWithTasks(_projects__WEBPACK_IMPORTED_MODULE_1__.allProjects[projectIndex]);
    }
  });

  //Main Content Listeners
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteBtn")) {
      (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.fullDeleteTask)(event.target.parentNode.id);
      deleteNode(event.target.parentNode.id);
    }
  });


}
//end initDynamicContent


const addProjectLink = (project) => {
  let projectLink = document.createElement("li");
  projectLink.classList.add("projectLink");
  projectLink.setAttribute("role", "button");
  projectLink.textContent = project.name;
  projectList.appendChild(projectLink);
};


/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findById: () => (/* binding */ findById),
/* harmony export */   getStoredProjects: () => (/* binding */ getStoredProjects),
/* harmony export */   getStoredTasks: () => (/* binding */ getStoredTasks),
/* harmony export */   uId: () => (/* binding */ uId),
/* harmony export */   updateStorage: () => (/* binding */ updateStorage)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



const uId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const findById = (array, idNum) => {
  return array.findIndex((x) => x.id === idNum);
};

const updateStorage = () => {
  localStorage.setItem("allTasks", JSON.stringify(_tasks__WEBPACK_IMPORTED_MODULE_0__.allTasks));
  localStorage.setItem("allProjects", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_1__.allProjects));
};

const getStoredTasks = () => {
  return JSON.parse(localStorage.allTasks);
};

const getStoredProjects = () => {
  return JSON.parse(localStorage.allProjects);
};


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allProjects: () => (/* binding */ allProjects),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   updateProjects: () => (/* binding */ updateProjects)
/* harmony export */ });
/* harmony import */ var _gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gui */ "./src/gui.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
//PROJECTS



let allProjects = [];
async function updateProjects() {
  await _helpers__WEBPACK_IMPORTED_MODULE_1__.getStoredProjects;
  allProjects = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getStoredProjects)();
}

class Project {
  constructor(name, description, tasks) {
    this.name = name;
    this.description = description;
    this.tasks = tasks;
  }
}

const createProject = (name, description, tasks) => {
  if (!Array.isArray(tasks)) {
    tasks = [tasks];
  }
  let project = new Project(name, description, tasks);
  allProjects.push(project);
  (0,_gui__WEBPACK_IMPORTED_MODULE_0__.addProjectLink)(project);
}



/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTaskToArray: () => (/* binding */ addTaskToArray),
/* harmony export */   allTasks: () => (/* binding */ allTasks),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   fullDeleteTask: () => (/* binding */ fullDeleteTask)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/helpers.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");



let allTasks = [];
if (localStorage.allTasks) {
  allTasks = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.getStoredTasks)();
}

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
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)();
};

if (!localStorage.allTasks) {
  createTask("Sample Task", "Here's an example of what a task looks like!");
}

const addTaskToArray = (array, task) => {
  array.push(task);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)();
}

const deleteTaskFromArray = (array, taskId) => {
  let index = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.findById)(array, taskId);
  if (index > -1) {
    array.splice(index, 1);
  }
};

const fullDeleteTask = (id) => {
  deleteTaskFromArray(allTasks, id);
  for (let project of _projects_js__WEBPACK_IMPORTED_MODULE_1__.allProjects) {
    deleteTaskFromArray(project.tasks, id);
  }
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)();
};



const editTaskInProject = (id, name, description, projectTasks) => {
  let task = projectTasks.find(task => task.id === id);
  // If the task is found, update its properties
  if (task) {
    if (name) {
      task.name = name;
    }
    if (description) {
      task.description = description;
    }
  }

}
 
const editTask = (id, name, description) => {
  for (let project of _projects_js__WEBPACK_IMPORTED_MODULE_1__.allProjects){
    editTaskInProject(id, name, description, project.tasks);
  }
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)();
}





/***/ }),

/***/ "./src/sunset_background.jpg":
/*!***********************************!*\
  !*** ./src/sunset_background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4be890ad3af91567014c.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms */ "./src/forms.js");






(0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.createProject)("All Tasks", "An unfiltered view of all tasks", _tasks__WEBPACK_IMPORTED_MODULE_1__.allTasks);
(0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.createProject)("Test Project", "An unfiltered view of all tasks", []);
(0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.createProject)("Test Project 2", "An unfiltered view of all tasks", []);
(0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.updateProjects)();

document.addEventListener("DOMContentLoaded", function () {
  let checkAllTasks = setInterval(function () {
    if (localStorage.allTasks === JSON.stringify(_tasks__WEBPACK_IMPORTED_MODULE_1__.allTasks)) {
      _projects_js__WEBPACK_IMPORTED_MODULE_2__.allProjects[0].tasks = _tasks__WEBPACK_IMPORTED_MODULE_1__.allTasks;
      clearInterval(checkAllTasks);
      (0,_gui_js__WEBPACK_IMPORTED_MODULE_3__.initDynamicContent)();
      (0,_forms__WEBPACK_IMPORTED_MODULE_4__.initForms)();
    }
  }, 100); // Check every 100 milliseconds
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJIQUEwQztBQUN0Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLE9BQU8sUUFBUSxZQUFZLE9BQU8sWUFBWSxpQkFBaUIsVUFBVSxNQUFNLFlBQVksT0FBTyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksT0FBTyxVQUFVLFVBQVUsT0FBTyxZQUFZLFNBQVMsVUFBVSxNQUFNLGFBQWEsYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlB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QTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYztBQUN3QztBQUM3QjtBQUNWOztBQUVwQywyREFBYSxpREFBaUQsNENBQVE7QUFDdEUsMkRBQWE7QUFDYiwyREFBYTtBQUNiLDREQUFjOztBQUVkO0FBQ0E7QUFDQSxpREFBaUQsNENBQVE7QUFDekQsTUFBTSxxREFBVyxZQUFZLDRDQUFRO0FBQ3JDO0FBQ0EsTUFBTSwyREFBa0I7QUFDeEIsTUFBTSxpREFBUztBQUNmO0FBQ0EsR0FBRyxRQUFRO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL3NyYy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL3NyYy9ndWkuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3N1bnNldF9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLypTdGFydCBDU1MgUmVzZXQgQ29kZVxuLyogQm94IHNpemluZyBydWxlcyAqL1xuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXG5ib2R5LFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmZpZ3VyZSxcbmJsb2NrcXVvdGUsXG5kbCxcbmRkIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cbnVsW3JvbGU9J2xpc3QnXSxcbm9sW3JvbGU9J2xpc3QnXSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cbmh0bWw6Zm9jdXMtd2l0aGluIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbmh0bWwsIGJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xuYTpub3QoW2NsYXNzXSkge1xuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG59XG5cbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cbmltZyxcbnBpY3R1cmUge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cbmlucHV0LFxuYnV0dG9uLFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICBmb250OiBpbmhlcml0O1xufVxuXG4vKkVuZCBSZXNldCBDb2RlKi9cblxuLypHbG9iYWwgYW5kIFNoYXJlZCBTdHlsZXMqL1xuOnJvb3Qge1xuICAtLWNvbG9yMTogI2NhNWM1NDtcbiAgLS1jb2xvcjI6ICMxNTRjNzk7XG4gIGZvbnQtZmFtaWx5OiBcIlNlblwiLCBzYW5zLXNlcmlmO1xufVxuXG5odG1sIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBoZWlnaHQ6IDEwMCU7XG5cbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qRm9ybXMqL1xuI3Rhc2tGb3JtQ29udGFpbmVyLCAjZWRpdFRhc2tGb3JtQ29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE3OCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4jdGFza0Zvcm0sICNlZGl0VGFza0Zvcm0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAzMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICB6LWluZGV4OiAxMDtcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDM1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuZm9ybSBoMyB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5jbG9zZUJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiAzcHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpXG59XG5cbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNsZWFyOiBib3RoO1xuICBib3JkZXI6IDFweCBncmV5IHNvbGlkO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5mb3JtRmllbGRzIGxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5cbi8qTWFpbiBQYWdlIExheW91dCovXG5cbiNzaWRlYmFyIHtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgZ3JleTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzA2MDA7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuI3dyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICBtYXgtaGVpZ2h0OiA5MHZoO1xuICBvdmVyZmxvdzogY2xpcDtcbn1cblxuI3NpZGViYXIsICN0YXNrQXJlYSB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IGNhbGMoOTB2aCAtIDM1cHgpO1xufVxuXG4jbWFpbkNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG9wYWNpdHk6IDk1JTtcbn1cblxuI3Rhc2tBcmVhSGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDcwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0Q29udGFpbmVyIHAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGFza0NvbnRhaW5lciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cblxuLypCdXR0b25zIGFuZCBMaW5rcyovXG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbmxpLnByb2plY3RMaW5rLCBidXR0b24ge1xuICBjb2xvcjogdmFyKC0tY29sb3IxKTtcbn1cblxubGkucHJvamVjdExpbms6aG92ZXIsIGJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvcjIpXG59XG5cbiNuZXdUYXNrQnV0dG9uLCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgei1pbmRleDogNTtcbn1cblxuI25ld1Rhc2tCdXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4MHB4O1xufVxuXG4jbmV3VGFza0J1dHRvbjpob3ZlciwgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjIpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cblxuYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO3FCQUNxQjtBQUNyQjs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBLDBCQUEwQjtBQUMxQjs7Ozs7Ozs7Ozs7O0VBWUUsU0FBUztBQUNYOztBQUVBLDJHQUEyRztBQUMzRzs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBLDBEQUEwRDtBQUMxRDtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQSxvQ0FBb0M7QUFDcEM7O0VBRUUsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUEseUNBQXlDO0FBQ3pDOzs7O0VBSUUsYUFBYTtBQUNmOztBQUVBLGlCQUFpQjs7QUFFakIsMkJBQTJCO0FBQzNCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsUUFBUTtBQUNSO0VBQ0Usc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOzs7QUFHQSxtQkFBbUI7O0FBRW5CO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtREFBMEM7RUFDMUMsc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7O0FBR0Esb0JBQW9COztBQUVwQjtFQUNFLHdDQUF3QztFQUN4QyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDs7O0FBR0E7RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypTdGFydCBDU1MgUmVzZXQgQ29kZVxcbi8qIEJveCBzaXppbmcgcnVsZXMgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuZmlndXJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cXG51bFtyb2xlPSdsaXN0J10sXFxub2xbcm9sZT0nbGlzdCddIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cXG5hOm5vdChbY2xhc3NdKSB7XFxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcsXFxucGljdHVyZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKkVuZCBSZXNldCBDb2RlKi9cXG5cXG4vKkdsb2JhbCBhbmQgU2hhcmVkIFN0eWxlcyovXFxuOnJvb3Qge1xcbiAgLS1jb2xvcjE6ICNjYTVjNTQ7XFxuICAtLWNvbG9yMjogIzE1NGM3OTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2VuXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKkZvcm1zKi9cXG4jdGFza0Zvcm1Db250YWluZXIsICNlZGl0VGFza0Zvcm1Db250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE3OCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbiN0YXNrRm9ybSwgI2VkaXRUYXNrRm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDMwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5mb3JtIGgzIHtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbi5jbG9zZUJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXB4O1xcbiAgdG9wOiAzcHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3IxKVxcbn1cXG5cXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNsZWFyOiBib3RoO1xcbiAgYm9yZGVyOiAxcHggZ3JleSBzb2xpZDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZm9ybUZpZWxkcyBsYWJlbCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG5cXG4vKk1haW4gUGFnZSBMYXlvdXQqL1xcblxcbiNzaWRlYmFyIHtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGdyZXk7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgcGFkZGluZzogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzA2MDA7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vc3Vuc2V0X2JhY2tncm91bmQuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI3dyYXBwZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICBtYXgtaGVpZ2h0OiA5MHZoO1xcbiAgb3ZlcmZsb3c6IGNsaXA7XFxufVxcblxcbiNzaWRlYmFyLCAjdGFza0FyZWEge1xcbiAgcGFkZGluZzogMzBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiBjYWxjKDkwdmggLSAzNXB4KTtcXG59XFxuXFxuI21haW5Db250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3BhY2l0eTogOTUlO1xcbn1cXG5cXG4jdGFza0FyZWFIZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXIgcCB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuXFxuLypCdXR0b25zIGFuZCBMaW5rcyovXFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogNXB4IDA7XFxufVxcblxcbmxpLnByb2plY3RMaW5rLCBidXR0b24ge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMSk7XFxufVxcblxcbmxpLnByb2plY3RMaW5rOmhvdmVyLCBidXR0b246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMilcXG59XFxuXFxuI25ld1Rhc2tCdXR0b24sIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogNXB4IDhweDtcXG4gIHotaW5kZXg6IDU7XFxufVxcblxcbiNuZXdUYXNrQnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA4MHB4O1xcbn1cXG5cXG4jbmV3VGFza0J1dHRvbjpob3ZlciwgYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcbmJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgZmluZEJ5SWQgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5pbXBvcnQgeyBhbGxUYXNrcywgY3JlYXRlVGFzaywgYWRkVGFza1RvQXJyYXksIGVkaXRUYXNrIH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0V2l0aFRhc2tzIH0gZnJvbSBcIi4vZ3VpXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0Rm9ybXMoKSB7XG4gICAgbGV0IGlzRm9ybVNob3duID0gZmFsc2U7XG5cbiAgICAvL05ldyBUYXNrIEZvcm0gRWxlbWVudHNcbiAgICBjb25zdCBuZXdUYXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Zvcm1Db250YWluZXJcIik7XG4gICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tGb3JtXCIpO1xuICAgIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tCdXR0b25cIik7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RQcm9qZWN0XCIpO1xuICAgIGxldCBuZXdUYXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza05hbWVcIik7XG4gICAgbGV0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Rlc2NyaXB0aW9uXCIpO1xuICBcbiAgICAvL0VkaXQgVGFzayBGb3JtIEVsZW1lbnRzXG4gICAgY29uc3QgZWRpdFRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0VGFza0Zvcm1Db250YWluZXJcIik7XG4gICAgY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0VGFza0Zvcm1cIik7XG4gICAgbGV0IGVkaXRUYXNrSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRUYXNrSWRcIik7XG4gICAgbGV0IGVkaXRUYXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFRhc2tOYW1lXCIpO1xuICAgIGxldCBlZGl0VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0VGFza0Rlc2NyaXB0aW9uXCIpO1xuXG4gIFxuICAvL0dlbmVyYXRlIER5bm1haWMgRm9ybSBDb250ZW50XG4gICAgY29uc3QgZm9ybVJlZnJlc2hQcm9qZWN0T3B0aW9ucyA9ICgpID0+IHtcbiAgICAgICAvL2NsZWFyIHByb2plY3Qgb3B0aW9ucyBcbiAgICAgICBzZWxlY3QudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgIC8vV3JpdGUgbmV3IHByb2plY3Qgb3B0aW9uc1xuICAgICAgIC8vU2tpcHMgQWxsIFByb2plY3RzIGF0IEluZGV4IDBcbiAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFsbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gYWxsUHJvamVjdHNbaV0ubmFtZTtcbiAgICAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBpO1xuICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xuICAgICAgIH1cbiAgICB9XG4gIFxuICBjb25zdCBhdXRvZmlsbEVkaXRGb3JtID0gKHRhc2tJZCkgPT4ge1xuICAgICBsZXQgb3JpZ1Rhc2sgPSBmaW5kQnlJZChhbGxUYXNrcywgdGFza0lkKTtcbiAgICAgZWRpdFRhc2tJZC52YWx1ZSA9IGFsbFRhc2tzW29yaWdUYXNrXS5pZDtcbiAgICAgZWRpdFRhc2tOYW1lLnZhbHVlID0gYWxsVGFza3Nbb3JpZ1Rhc2tdLm5hbWU7XG4gICAgIGVkaXRUYXNrRGVzY3JpcHRpb24udmFsdWUgPSBhbGxUYXNrc1tvcmlnVGFza10uZGVzY3JpcHRpb25cbiAgfVxuXG4gIC8vRm9ybSBIZWxwZXIgRnVuY3Rpb25zXG4gICBjb25zdCBoaWRlRm9ybSA9IChmb3JtKSA9PiB7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgaXNGb3JtU2hvd24gPSBmYWxzZVxuICAgfVxuICBcbiAgIGNvbnN0IHNob3dGb3JtID0gKGZvcm0pID0+IHtcbiAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgaXNGb3JtU2hvd24gPSB0cnVlO1xuICAgfVxuXG4gIC8vSGFuZGxlIEZvcm1zXG4gICAgbmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKCFpc0Zvcm1TaG93bil7XG4gICAgICBmb3JtUmVmcmVzaFByb2plY3RPcHRpb25zKCk7XG4gICAgICBzaG93Rm9ybShuZXdUYXNrRm9ybUNvbnRhaW5lcik7XG4gICAgfVxuICAgIH0pXG4gIFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdEJ0blwiKSkge1xuICAgICAgICBpZiAoIWlzRm9ybVNob3duKXtcbiAgICAgICAgICBhdXRvZmlsbEVkaXRGb3JtKGV2ZW50LnNyY0VsZW1lbnQucGFyZW50Tm9kZS5pZCk7XG4gICAgICAgICAgIHNob3dGb3JtKGVkaXRUYXNrRm9ybUNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICBcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNsb3NlQnRuXCIpKSB7XG4gICAgICAgIGhpZGVGb3JtKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBcbiAgICBjb25zdCBmb3JtSGFuZGxlU2VsZWN0ZWRQcm9qZWN0ID0gKHRhc2spID0+IHtcbiAgICAgIGxldCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RQcm9qZWN0XCIpLnZhbHVlO1xuICAgICAgYWRkVGFza1RvQXJyYXkoYWxsUHJvamVjdHNbc2VsZWN0UHJvamVjdF0udGFza3MsIHRhc2spO1xuICAgICAgZGlzcGxheVByb2plY3RXaXRoVGFza3MoYWxsUHJvamVjdHNbc2VsZWN0UHJvamVjdF0pO1xuICAgIH1cbiAgXG4gICAgXG4gICAgbmV3VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjcmVhdGVUYXNrKG5ld1Rhc2tOYW1lLnZhbHVlLCBuZXdUYXNrRGVzY3JpcHRpb24udmFsdWUpO1xuICAgICAgZm9ybUhhbmRsZVNlbGVjdGVkUHJvamVjdChhbGxUYXNrc1thbGxUYXNrcy5sZW5ndGggLSAxXSk7XG4gICAgfSlcbiAgXG4gICAgZWRpdFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZWRpdFRhc2soZWRpdFRhc2tJZC52YWx1ZSwgZWRpdFRhc2tOYW1lLnZhbHVlLCBlZGl0VGFza0Rlc2NyaXB0aW9uLnZhbHVlKTtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pXG4gIFxuICB9XG4gICIsImltcG9ydCB7IGZ1bGxEZWxldGVUYXNrIH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuY29uc3QgdGFza0FyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tBcmVhQ29udGVudFwiKTtcblxuXG4vL0RPTSBVdGlsc1xuY29uc3QgY3JlYXRlRGVsZXRlQnRuID0gKCkgPT4ge1xuICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVCdG5cIik7XG4gIHJldHVybiBkZWxldGVCdG47XG59O1xuXG5jb25zdCBjcmVhdGVFZGl0QnRuID0gKCkgPT4ge1xuICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdEJ0blwiKTtcbiAgcmV0dXJuIGVkaXRCdG47XG59O1xuXG5jb25zdCBkaXNwbGF5UHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdENvbnRhaW5lclwiKTtcbiAgdGFza0FyZWEuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG5cbiAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgbGV0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XG59O1xuXG5jb25zdCBkaXNwbGF5VGFzayA9ICh0YXNrKSA9PiB7XG4gIGxldCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza0NvbnRhaW5lclwiKTtcbiAgdGFza0FyZWEuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG5cbiAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG5cbiAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG5cbiAgdGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0YXNrLmlkKTtcblxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZURlbGV0ZUJ0bigpKTtcbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVFZGl0QnRuKCkpO1xufTtcblxuY29uc3QgZGlzcGxheVRhc2tzID0gKHByb2plY3QpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgZGlzcGxheVRhc2socHJvamVjdC50YXNrc1tpXSk7XG4gIH1cbn07XG5cbmNvbnN0IGNsZWFyUHJvamVjdFRhc2tzID0gKCkgPT4ge1xuICB0YXNrQXJlYS50ZXh0Q29udGVudCA9IFwiXCI7XG59O1xuXG5jb25zdCBkZWxldGVOb2RlID0gKGlkKSA9PiB7XG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBlbGVtZW50LnJlbW92ZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlQcm9qZWN0V2l0aFRhc2tzID0gKHByb2plY3QpID0+IHtcbiAgY2xlYXJQcm9qZWN0VGFza3MoKTtcbiAgZGlzcGxheVByb2plY3QocHJvamVjdCk7XG4gIGRpc3BsYXlUYXNrcyhwcm9qZWN0KTtcbn07XG5cbi8vRU5EIERPTVV0aWxzXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RHluYW1pY0NvbnRlbnQoKSB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TGlzdFwiKTtcblxuICAvL09uIG5ldyBsb2FkLCBhdXRvIGRpc3BsYXkgbmV3IHRhc2tzXG4gIGRpc3BsYXlQcm9qZWN0V2l0aFRhc2tzKGFsbFByb2plY3RzWzBdKTtcblxuICAvL0Rpc3BsYXkgcHJvamVjdCBpbmZvIGFmdGVyIGNsaWNraW5nIG9uIGVhY2ggcGFnZVxuICBwcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSBcIkxJXCIpIHtcbiAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGV2ZW50LnRhcmdldC5pbm5lclRleHQ7XG4gICAgICBsZXQgcHJvamVjdEluZGV4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KFxuICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09IHByb2plY3ROYW1lXG4gICAgICApO1xuICAgICAgZGlzcGxheVByb2plY3RXaXRoVGFza3MoYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XSk7XG4gICAgfVxuICB9KTtcblxuICAvL01haW4gQ29udGVudCBMaXN0ZW5lcnNcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlQnRuXCIpKSB7XG4gICAgICBmdWxsRGVsZXRlVGFzayhldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZCk7XG4gICAgICBkZWxldGVOb2RlKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbiAgICB9XG4gIH0pO1xuXG5cbn1cbi8vZW5kIGluaXREeW5hbWljQ29udGVudFxuXG5cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0TGluayA9IChwcm9qZWN0KSA9PiB7XG4gIGxldCBwcm9qZWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgcHJvamVjdExpbmsuY2xhc3NMaXN0LmFkZChcInByb2plY3RMaW5rXCIpO1xuICBwcm9qZWN0TGluay5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiYnV0dG9uXCIpO1xuICBwcm9qZWN0TGluay50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdExpbmspO1xufTtcbiIsImltcG9ydCB7IGFsbFRhc2tzIH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuZXhwb3J0IGNvbnN0IHVJZCA9ICgpID0+IHtcbiAgcmV0dXJuIERhdGUubm93KCkudG9TdHJpbmcoMzYpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRCeUlkID0gKGFycmF5LCBpZE51bSkgPT4ge1xuICByZXR1cm4gYXJyYXkuZmluZEluZGV4KCh4KSA9PiB4LmlkID09PSBpZE51bSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlU3RvcmFnZSA9ICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGxUYXNrc1wiLCBKU09OLnN0cmluZ2lmeShhbGxUYXNrcykpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RvcmVkVGFza3MgPSAoKSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5hbGxUYXNrcyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RvcmVkUHJvamVjdHMgPSAoKSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5hbGxQcm9qZWN0cyk7XG59O1xuIiwiLy9QUk9KRUNUU1xuaW1wb3J0IHsgYWRkUHJvamVjdExpbmsgfSBmcm9tIFwiLi9ndWlcIjtcbmltcG9ydCB7IGdldFN0b3JlZFByb2plY3RzIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuXG5leHBvcnQgbGV0IGFsbFByb2plY3RzID0gW107XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvamVjdHMoKSB7XG4gIGF3YWl0IGdldFN0b3JlZFByb2plY3RzO1xuICBhbGxQcm9qZWN0cyA9IGdldFN0b3JlZFByb2plY3RzKCk7XG59XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgdGFza3MpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSwgZGVzY3JpcHRpb24sIHRhc2tzKSA9PiB7XG4gIGlmICghQXJyYXkuaXNBcnJheSh0YXNrcykpIHtcbiAgICB0YXNrcyA9IFt0YXNrc107XG4gIH1cbiAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBkZXNjcmlwdGlvbiwgdGFza3MpO1xuICBhbGxQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICBhZGRQcm9qZWN0TGluayhwcm9qZWN0KTtcbn1cblxuIiwiaW1wb3J0IHsgdUlkLCBmaW5kQnlJZCwgdXBkYXRlU3RvcmFnZSwgZ2V0U3RvcmVkVGFza3MgfSBmcm9tIFwiLi9oZWxwZXJzLmpzXCI7XG5pbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5cbmV4cG9ydCBsZXQgYWxsVGFza3MgPSBbXTtcbmlmIChsb2NhbFN0b3JhZ2UuYWxsVGFza3MpIHtcbiAgYWxsVGFza3MgPSBnZXRTdG9yZWRUYXNrcygpO1xufVxuXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmlkID0gdUlkKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRhc2sgPSAobmFtZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgbGV0IHRhc2sgPSBuZXcgVGFzayhuYW1lLCBkZXNjcmlwdGlvbik7XG4gIGFsbFRhc2tzLnB1c2godGFzayk7XG4gIHVwZGF0ZVN0b3JhZ2UoKTtcbn07XG5cbmlmICghbG9jYWxTdG9yYWdlLmFsbFRhc2tzKSB7XG4gIGNyZWF0ZVRhc2soXCJTYW1wbGUgVGFza1wiLCBcIkhlcmUncyBhbiBleGFtcGxlIG9mIHdoYXQgYSB0YXNrIGxvb2tzIGxpa2UhXCIpO1xufVxuXG5leHBvcnQgY29uc3QgYWRkVGFza1RvQXJyYXkgPSAoYXJyYXksIHRhc2spID0+IHtcbiAgYXJyYXkucHVzaCh0YXNrKTtcbiAgdXBkYXRlU3RvcmFnZSgpO1xufVxuXG5jb25zdCBkZWxldGVUYXNrRnJvbUFycmF5ID0gKGFycmF5LCB0YXNrSWQpID0+IHtcbiAgbGV0IGluZGV4ID0gZmluZEJ5SWQoYXJyYXksIHRhc2tJZCk7XG4gIGlmIChpbmRleCA+IC0xKSB7XG4gICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGZ1bGxEZWxldGVUYXNrID0gKGlkKSA9PiB7XG4gIGRlbGV0ZVRhc2tGcm9tQXJyYXkoYWxsVGFza3MsIGlkKTtcbiAgZm9yIChsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0cykge1xuICAgIGRlbGV0ZVRhc2tGcm9tQXJyYXkocHJvamVjdC50YXNrcywgaWQpO1xuICB9XG4gIHVwZGF0ZVN0b3JhZ2UoKTtcbn07XG5cblxuXG5jb25zdCBlZGl0VGFza0luUHJvamVjdCA9IChpZCwgbmFtZSwgZGVzY3JpcHRpb24sIHByb2plY3RUYXNrcykgPT4ge1xuICBsZXQgdGFzayA9IHByb2plY3RUYXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PT0gaWQpO1xuICAvLyBJZiB0aGUgdGFzayBpcyBmb3VuZCwgdXBkYXRlIGl0cyBwcm9wZXJ0aWVzXG4gIGlmICh0YXNrKSB7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHRhc2submFtZSA9IG5hbWU7XG4gICAgfVxuICAgIGlmIChkZXNjcmlwdGlvbikge1xuICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbiAgfVxuXG59XG4gXG5leHBvcnQgY29uc3QgZWRpdFRhc2sgPSAoaWQsIG5hbWUsIGRlc2NyaXB0aW9uKSA9PiB7XG4gIGZvciAobGV0IHByb2plY3Qgb2YgYWxsUHJvamVjdHMpe1xuICAgIGVkaXRUYXNrSW5Qcm9qZWN0KGlkLCBuYW1lLCBkZXNjcmlwdGlvbiwgcHJvamVjdC50YXNrcyk7XG4gIH1cbiAgdXBkYXRlU3RvcmFnZSgpO1xufVxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBhbGxUYXNrcyB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCB1cGRhdGVQcm9qZWN0cywgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgaW5pdER5bmFtaWNDb250ZW50IH0gZnJvbSBcIi4vZ3VpLmpzXCI7XG5pbXBvcnQgeyBpbml0Rm9ybXMgfSBmcm9tIFwiLi9mb3Jtc1wiO1xuXG5jcmVhdGVQcm9qZWN0KFwiQWxsIFRhc2tzXCIsIFwiQW4gdW5maWx0ZXJlZCB2aWV3IG9mIGFsbCB0YXNrc1wiLCBhbGxUYXNrcyk7XG5jcmVhdGVQcm9qZWN0KFwiVGVzdCBQcm9qZWN0XCIsIFwiQW4gdW5maWx0ZXJlZCB2aWV3IG9mIGFsbCB0YXNrc1wiLCBbXSk7XG5jcmVhdGVQcm9qZWN0KFwiVGVzdCBQcm9qZWN0IDJcIiwgXCJBbiB1bmZpbHRlcmVkIHZpZXcgb2YgYWxsIHRhc2tzXCIsIFtdKTtcbnVwZGF0ZVByb2plY3RzKCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgbGV0IGNoZWNrQWxsVGFza3MgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5hbGxUYXNrcyA9PT0gSlNPTi5zdHJpbmdpZnkoYWxsVGFza3MpKSB7XG4gICAgICBhbGxQcm9qZWN0c1swXS50YXNrcyA9IGFsbFRhc2tzO1xuICAgICAgY2xlYXJJbnRlcnZhbChjaGVja0FsbFRhc2tzKTtcbiAgICAgIGluaXREeW5hbWljQ29udGVudCgpO1xuICAgICAgaW5pdEZvcm1zKCk7XG4gICAgfVxuICB9LCAxMDApOyAvLyBDaGVjayBldmVyeSAxMDAgbWlsbGlzZWNvbmRzXG59KVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=