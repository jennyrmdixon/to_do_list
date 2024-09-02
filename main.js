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
  height: 100%;

}

.hidden {
  display: none;
}

/*Forms*/
.formWraps {
  background-color: rgba(0, 0, 0, 0.178);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.forms {
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

.projectContainer {
  margin-bottom: 30px;
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

#newTaskBtn, button[type="submit"]{
  background-color: var(--color1);
  color: white;
  padding: 5px 8px;
  z-index: 5;
}

#newTaskBtn {
  position: absolute;
  right: 80px;
}

#newTaskBtn:hover, button[type="submit"]:hover{
  background-color: var(--color2);
  color: white;
}


button[type="submit"] {
  margin-top: 20px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;qBACqB;AACrB;;;EAGE,sBAAsB;AACxB;;AAEA,0BAA0B;AAC1B;;;;;;;;;;;;EAYE,SAAS;AACX;;AAEA,2GAA2G;AAC3G;;EAEE,gBAAgB;AAClB;;AAEA,2BAA2B;AAC3B;EACE,uBAAuB;AACzB;;AAEA,2BAA2B;AAC3B;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA,0DAA0D;AAC1D;EACE,8BAA8B;AAChC;;AAEA,oCAAoC;AACpC;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA,yCAAyC;AACzC;;;;EAIE,aAAa;AACf;;AAEA,iBAAiB;;AAEjB,2BAA2B;AAC3B;EACE,iBAAiB;EACjB,iBAAiB;EACjB,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,YAAY;;AAEd;;AAEA;EACE,aAAa;AACf;;AAEA,QAAQ;AACR;EACE,sCAAsC;EACtC,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,6BAA6B;EAC7B,sBAAsB;EACtB,WAAW;EACX,aAAa;EACb,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR;AACF;;AAEA;EACE,WAAW;EACX,WAAW;EACX,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;AACvB;;;AAGA,mBAAmB;;AAEnB;EACE,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,mDAA0C;EAC1C,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,2CAA2C;EAC3C,sBAAsB;EACtB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;AACd;;;AAGA,oBAAoB;;AAEpB;EACE,wCAAwC;EACxC,YAAY;EACZ,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE;AACF;;AAEA;EACE,+BAA+B;EAC/B,YAAY;EACZ,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,+BAA+B;EAC/B,YAAY;AACd;;;AAGA;EACE,gBAAgB;AAClB","sourcesContent":["/*Start CSS Reset Code\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\nhtml, body {\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  overflow-x: hidden;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/*End Reset Code*/\n\n/*Global and Shared Styles*/\n:root {\n  --color1: #ca5c54;\n  --color2: #154c79;\n  font-family: \"Sen\", sans-serif;\n}\n\nhtml {\n  min-height: 100%;\n  position: relative;\n}\n\nbody {\n  height: 100%;\n\n}\n\n.hidden {\n  display: none;\n}\n\n/*Forms*/\n.formWraps {\n  background-color: rgba(0, 0, 0, 0.178);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.forms {\n  position: absolute;\n  left: 50%;\n  top: 30%;\n  transform: translate(-50%, 0);\n  border: 2px solid grey;\n  z-index: 10;\n  padding: 15px;\n  width: 350px;\n  background-color: white;\n}\n\nform h3 {\n  margin-top: 25px;\n}\n\n.closeBtn {\n  position: absolute;\n  right: 5px;\n  top: 3px;\n  color: var(--color1)\n}\n\ninput, select, textarea {\n  width: 100%;\n  clear: both;\n  border: 1px grey solid;\n  padding: 5px;\n}\n\ntextarea {\n  resize: vertical;\n}\n\nselect {\n  background-color: white;\n}\n\n.formFields label {\n  margin-top: 10px;\n  display: inline-block;\n}\n\n\n/*Main Page Layout*/\n\n#sidebar {\n  border-right: 2px solid grey;\n}\n\n#container {\n  padding: 50px;\n  background-color: #070600;\n  background: url('./sunset_background.jpg');\n  background-size: cover;\n  height: 100vh;\n}\n\n#wrapper {\n  background-color: rgba(255, 255, 255, 0.95);\n  border: 2px solid grey;\n  max-height: 90vh;\n  overflow: clip;\n}\n\n#sidebar, #taskArea {\n  padding: 30px;\n  overflow: auto;\n  height: calc(90vh - 35px);\n}\n\n#mainContent {\n  display: grid;\n  grid-template-columns: 20% 80%;\n  height: 100vh;\n  opacity: 95%;\n}\n\n#taskAreaHeader {\n  text-align: center;\n  height: 70px;\n  display: grid;\n  border-bottom: 2px solid grey;\n  grid-template-columns: 100%;\n  align-items: center;\n}\n\n.projectContainer {\n  margin-bottom: 30px;\n}\n\n.taskContainer {\n  border-bottom: 1px solid grey;\n  padding: 5px;\n}\n\n\n/*Buttons and Links*/\n\nbutton {\n  background-color: rgba(255, 255, 255, 0);\n  border: none;\n  font-weight: bold;\n  margin: 5px 0;\n}\n\nli.projectLink, button {\n  color: var(--color1);\n}\n\nli.projectLink:hover, button:hover {\n  color: var(--color2)\n}\n\n#newTaskBtn, button[type=\"submit\"]{\n  background-color: var(--color1);\n  color: white;\n  padding: 5px 8px;\n  z-index: 5;\n}\n\n#newTaskBtn {\n  position: absolute;\n  right: 80px;\n}\n\n#newTaskBtn:hover, button[type=\"submit\"]:hover{\n  background-color: var(--color2);\n  color: white;\n}\n\n\nbutton[type=\"submit\"] {\n  margin-top: 20px;\n}\n"],"sourceRoot":""}]);
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
  const newTaskFormWrap = document.getElementById("newTaskFormWrap");
  const newTaskForm = document.getElementById("newTaskForm");
  const newTaskBtn = document.getElementById("newTaskBtn");
  const select = document.getElementById("selectProject");
  let newTaskName = document.getElementById("newTaskName");
  let newTaskDesc = document.getElementById("newTaskDesc");

  //Edit Task Form Elements
  const editTaskFormWrap = document.getElementById("editTaskFormWrap");
  const editTaskForm = document.getElementById("editTaskForm");
  let editTaskId = document.getElementById("editTaskId");
  let editTaskName = document.getElementById("editTaskName");
  let editTaskDesc = document.getElementById("editTaskDesc");

  //New Project Form Fields
  const newProjectBtn = document.getElementById("newProjectBtn");
  const newProjectFormWrap = document.getElementById("newProjectFormWrap");
  const newProjectForm = document.getElementById("newProjectForm");
  let newProjectName = document.getElementById("newProjectName");
  let newProjectDesc = document.getElementById("newProjectDesc");

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
  };

  const autofillEditForm = (taskId) => {
    let origTask = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findById)(_tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks, taskId);
    editTaskId.value = _tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks[origTask].id;
    editTaskName.value = _tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks[origTask].name;
    editTaskDesc.value = _tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks[origTask].desc;
  };

  //Form Helper Functions
  const hideForm = (form) => {
    form.classList.add("hidden");
    isFormShown = false;
  };

  const showForm = (form) => {
    form.classList.remove("hidden");
    isFormShown = true;
  };

  //Open Forms
  newTaskBtn.addEventListener("click", () => {
    if (!isFormShown) {
      formRefreshProjectOptions();
      showForm(newTaskFormWrap);
    }
  });

  newProjectBtn.addEventListener("click", () => {
    if (!isFormShown) {
      showForm(newProjectFormWrap);
    }
  });

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("taskEditBtn")) {
      if (!isFormShown) {
        autofillEditForm(event.srcElement.parentNode.id);
        showForm(editTaskFormWrap);
      }
    }
  });

  //Close Forms
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("closeBtn")) {
      hideForm(event.target.parentNode.parentNode);
    }
  });

  //Handle Form Submits
  const formHandleSelectedProject = (task) => {
    let selectProject = document.getElementById("selectProject").value;
    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.addTaskToArray)(_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[selectProject].tasks, task);
    (0,_gui__WEBPACK_IMPORTED_MODULE_3__.displayProjectWithTasks)(_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[selectProject]);
  };

  newTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.createTask)(newTaskName.value, newTaskDesc.value);
    formHandleSelectedProject(_tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks[_tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks.length - 1]);
  });

  editTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.editTask)(editTaskId.value, editTaskName.value, editTaskDesc.value);
    location.reload();
  });
}

newProjectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.createProject)(newProjectName.value, newProjectDesc.value, []);
});


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
const projectList = document.getElementById("projectList");

//DOM Utils
const createDeleteBtn = (element) => {
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add(element + "DeleteBtn");
  return deleteBtn;
};

const createEditBtn = (element) => {
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add(element + "EditBtn");
  return editBtn;
};

const createProjectBtns = (project) => {


  let projectBtnDiv = document.createElement("div");
  projectBtnDiv.classList.add("projectBtnDiv");
  
  let projectDeleteBtn = createDeleteBtn("project");
  projectDeleteBtn.setAttribute("id", project.id);
  projectBtnDiv.appendChild(projectDeleteBtn);
  let projectEditBtn = createEditBtn("project");
  projectEditBtn.setAttribute("id", project.id);
  projectBtnDiv.appendChild(projectEditBtn);

  return projectBtnDiv;
}


const displayProject = (project) => {
  let projectContainer = document.createElement("div");
  projectContainer.classList.add("projectContainer");
  taskArea.appendChild(projectContainer);

  let projectName = document.createElement("h2");
  projectName.textContent = project.name;
  projectContainer.appendChild(projectName);

  let projectDesc = document.createElement("p");
  projectDesc.textContent = project.desc;
  projectContainer.appendChild(projectDesc);

  projectContainer.setAttribute("id", project.id);

  if(project.id !== "default"){
  let projectBtns = createProjectBtns(project);
  projectContainer.appendChild(projectBtns);
  }
};

const displayTask = (task) => {
  let taskContainer = document.createElement("div");
  taskContainer.classList.add("taskContainer");
  taskArea.appendChild(taskContainer);

  let taskName = document.createElement("h3");
  taskName.textContent = task.name;
  taskContainer.appendChild(taskName);

  let taskDesc = document.createElement("p");
  taskDesc.textContent = task.desc;
  taskContainer.appendChild(taskDesc);

  taskContainer.setAttribute("id", task.id);

  taskContainer.appendChild(createDeleteBtn("task"));
  taskContainer.appendChild(createEditBtn("task"));
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

const addProjectLink = (project) => {
  let projectLink = document.createElement("li");
  projectLink.classList.add("projectLink");
  projectLink.setAttribute("role", "button");
  projectLink.textContent = project.name;
  projectList.appendChild(projectLink);
};
//END DOMUtils


//Init Dynamic Content on New Page Load 

function initDynamicContent() {
  //On new load, auto display all tasks
  displayProjectWithTasks(_projects__WEBPACK_IMPORTED_MODULE_1__.allProjects[0]);

  //On new load, auto display links to all projects 
  (() => {
    for(let project of _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects){
      addProjectLink(project);
    }
  })();

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
    if (event.target.classList.contains("taskDeleteBtn")) {
      (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.fullDeleteTask)(event.target.parentNode.id);
      deleteNode(event.target.parentNode.id);
    }
  });
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("projectDeleteBtn")) {
    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(event.target.id);
    location.reload();
  }
});
//end initDynamicContent





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
  console.log(JSON.parse(localStorage.allProjects));
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
/* harmony export */   createDefaultProject: () => (/* binding */ createDefaultProject),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   updateProjects: () => (/* binding */ updateProjects)
/* harmony export */ });
/* harmony import */ var _gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gui */ "./src/gui.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
//PROJECTS




let allProjects = [];

function updateProjects() {
  if (_helpers__WEBPACK_IMPORTED_MODULE_1__.getStoredProjects){
  allProjects = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getStoredProjects)();
}
}

class Project {
  constructor(name, desc, tasks) {
    this.name = name;
    this.desc = desc;
    this.tasks = tasks;
    this.id = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.uId)();
  }
}

const createProject = (name, desc, tasks) => {
  if (!Array.isArray(tasks)) {
    tasks = [tasks];
  }
  let project = new Project(name, desc, tasks);
  allProjects.push(project);
  (0,_gui__WEBPACK_IMPORTED_MODULE_0__.addProjectLink)(project);
  (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.updateStorage)();
};

//Creates default project to use on first page load. Skips step to create project link since this is done on page init. 
const createDefaultProject = () => {
  let project = new Project("All Tasks", "An unfiltered view of all tasks", _tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks);
  project.id = "default";
  allProjects.push(project);
  (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.updateStorage)();
}

const deleteProject = (projectId) => {
  let index = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findById)(allProjects, projectId);
  allProjects.splice(index, 1);
  (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.updateStorage)();
};



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
  constructor(name, desc) {
    this.name = name;
    this.desc = desc;
    this.id = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.uId)();
  }
}

const createTask = (name, desc) => {
  let task = new Task(name, desc);
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



const editTaskInProject = (id, name, desc, projectTasks) => {
  let task = projectTasks.find(task => task.id === id);
  // If the task is found, update its properties
  if (task) {
    if (name) {
      task.name = name;
    }
    if (desc) {
      task.desc = desc;
    }
  }

}
 
const editTask = (id, name, desc) => {
  for (let project of _projects_js__WEBPACK_IMPORTED_MODULE_1__.allProjects){
    editTaskInProject(id, name, desc, project.tasks);
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






//Load from storage
(0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.updateProjects)();

document.addEventListener("DOMContentLoaded", function () {
  let checkAllTasks = setInterval(function () {
    //Wait for  storage to populate
    if (
      localStorage.allTasks === JSON.stringify(_tasks__WEBPACK_IMPORTED_MODULE_1__.allTasks) &&
      localStorage.allProjects === JSON.stringify(_projects_js__WEBPACK_IMPORTED_MODULE_2__.allProjects)
    ) {
      clearInterval(checkAllTasks);
      //If no projects exist yet, create default All Tasks project
      if (_projects_js__WEBPACK_IMPORTED_MODULE_2__.allProjects[0] === undefined) {
        (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.createDefaultProject)();
      }
      //Add all stored tasks to All Tasks
      _projects_js__WEBPACK_IMPORTED_MODULE_2__.allProjects[0].tasks = _tasks__WEBPACK_IMPORTED_MODULE_1__.allTasks;
      //Init page
      (0,_gui_js__WEBPACK_IMPORTED_MODULE_3__.initDynamicContent)();
      (0,_forms__WEBPACK_IMPORTED_MODULE_4__.initForms)();
    }
  }, 100); // Check every 100 milliseconds
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYztBQUM4RDtBQUNuRDtBQUNWOztBQUVwQztBQUNBLDREQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDRDQUFRO0FBQ3ZELGtEQUFrRCxxREFBVztBQUM3RDtBQUNBO0FBQ0E7QUFDQSxVQUFVLHFEQUFXO0FBQ3JCLFFBQVEsa0VBQW9CO0FBQzVCO0FBQ0E7QUFDQSxNQUFNLHFEQUFXLFlBQVksNENBQVE7QUFDckM7QUFDQSxNQUFNLDJEQUFrQjtBQUN4QixNQUFNLGlEQUFTO0FBQ2Y7QUFDQSxHQUFHLFFBQVE7QUFDWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vc3JjL2Zvcm1zLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vc3JjL2d1aS5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1RvIERvIExpc3QgQXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vc3Vuc2V0X2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKlN0YXJ0IENTUyBSZXNldCBDb2RlXG4vKiBCb3ggc2l6aW5nIHJ1bGVzICovXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cbmJvZHksXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuZmlndXJlLFxuYmxvY2txdW90ZSxcbmRsLFxuZGQge1xuICBtYXJnaW46IDA7XG59XG5cbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xudWxbcm9sZT0nbGlzdCddLFxub2xbcm9sZT0nbGlzdCddIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xuaHRtbDpmb2N1cy13aXRoaW4ge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuaHRtbCwgYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXG5hOm5vdChbY2xhc3NdKSB7XG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcbn1cblxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xuaW1nLFxucGljdHVyZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbi8qRW5kIFJlc2V0IENvZGUqL1xuXG4vKkdsb2JhbCBhbmQgU2hhcmVkIFN0eWxlcyovXG46cm9vdCB7XG4gIC0tY29sb3IxOiAjY2E1YzU0O1xuICAtLWNvbG9yMjogIzE1NGM3OTtcbiAgZm9udC1mYW1pbHk6IFwiU2VuXCIsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG5cbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qRm9ybXMqL1xuLmZvcm1XcmFwcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNzgpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmZvcm1zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMzAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmZvcm0gaDMge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uY2xvc2VCdG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogM3B4O1xuICBjb2xvcjogdmFyKC0tY29sb3IxKVxufVxuXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBjbGVhcjogYm90aDtcbiAgYm9yZGVyOiAxcHggZ3JleSBzb2xpZDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbnNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uZm9ybUZpZWxkcyBsYWJlbCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuXG4vKk1haW4gUGFnZSBMYXlvdXQqL1xuXG4jc2lkZWJhciB7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGdyZXk7XG59XG5cbiNjb250YWluZXIge1xuICBwYWRkaW5nOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwNjAwO1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbiN3cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgbWF4LWhlaWdodDogOTB2aDtcbiAgb3ZlcmZsb3c6IGNsaXA7XG59XG5cbiNzaWRlYmFyLCAjdGFza0FyZWEge1xuICBwYWRkaW5nOiAzMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiBjYWxjKDkwdmggLSAzNXB4KTtcbn1cblxuI21haW5Db250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvcGFjaXR5OiA5NSU7XG59XG5cbiN0YXNrQXJlYUhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA3MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvamVjdENvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi50YXNrQ29udGFpbmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuXG4vKkJ1dHRvbnMgYW5kIExpbmtzKi9cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiA1cHggMDtcbn1cblxubGkucHJvamVjdExpbmssIGJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xufVxuXG5saS5wcm9qZWN0TGluazpob3ZlciwgYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yMilcbn1cblxuI25ld1Rhc2tCdG4sIGJ1dHRvblt0eXBlPVwic3VibWl0XCJde1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjEpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIHotaW5kZXg6IDU7XG59XG5cbiNuZXdUYXNrQnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogODBweDtcbn1cblxuI25ld1Rhc2tCdG46aG92ZXIsIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjIpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cblxuYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO3FCQUNxQjtBQUNyQjs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBLDBCQUEwQjtBQUMxQjs7Ozs7Ozs7Ozs7O0VBWUUsU0FBUztBQUNYOztBQUVBLDJHQUEyRztBQUMzRzs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBLDBEQUEwRDtBQUMxRDtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQSxvQ0FBb0M7QUFDcEM7O0VBRUUsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUEseUNBQXlDO0FBQ3pDOzs7O0VBSUUsYUFBYTtBQUNmOztBQUVBLGlCQUFpQjs7QUFFakIsMkJBQTJCO0FBQzNCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxRQUFRO0FBQ1I7RUFDRSxzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1I7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7OztBQUdBLG1CQUFtQjs7QUFFbkI7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1EQUEwQztFQUMxQyxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOzs7QUFHQSxvQkFBb0I7O0FBRXBCO0VBQ0Usd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtBQUNkOzs7QUFHQTtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlN0YXJ0IENTUyBSZXNldCBDb2RlXFxuLyogQm94IHNpemluZyBydWxlcyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5maWd1cmUsXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcbnVsW3JvbGU9J2xpc3QnXSxcXG5vbFtyb2xlPSdsaXN0J10ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xcbmh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcbmE6bm90KFtjbGFzc10pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qRW5kIFJlc2V0IENvZGUqL1xcblxcbi8qR2xvYmFsIGFuZCBTaGFyZWQgU3R5bGVzKi9cXG46cm9vdCB7XFxuICAtLWNvbG9yMTogI2NhNWM1NDtcXG4gIC0tY29sb3IyOiAjMTU0Yzc5O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZW5cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qRm9ybXMqL1xcbi5mb3JtV3JhcHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE3OCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5mb3JtcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDMwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5mb3JtIGgzIHtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbi5jbG9zZUJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXB4O1xcbiAgdG9wOiAzcHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3IxKVxcbn1cXG5cXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNsZWFyOiBib3RoO1xcbiAgYm9yZGVyOiAxcHggZ3JleSBzb2xpZDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZm9ybUZpZWxkcyBsYWJlbCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG5cXG4vKk1haW4gUGFnZSBMYXlvdXQqL1xcblxcbiNzaWRlYmFyIHtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGdyZXk7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgcGFkZGluZzogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzA2MDA7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vc3Vuc2V0X2JhY2tncm91bmQuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI3dyYXBwZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICBtYXgtaGVpZ2h0OiA5MHZoO1xcbiAgb3ZlcmZsb3c6IGNsaXA7XFxufVxcblxcbiNzaWRlYmFyLCAjdGFza0FyZWEge1xcbiAgcGFkZGluZzogMzBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiBjYWxjKDkwdmggLSAzNXB4KTtcXG59XFxuXFxuI21haW5Db250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3BhY2l0eTogOTUlO1xcbn1cXG5cXG4jdGFza0FyZWFIZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLnRhc2tDb250YWluZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcblxcbi8qQnV0dG9ucyBhbmQgTGlua3MqL1xcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IDVweCAwO1xcbn1cXG5cXG5saS5wcm9qZWN0TGluaywgYnV0dG9uIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbn1cXG5cXG5saS5wcm9qZWN0TGluazpob3ZlciwgYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjIpXFxufVxcblxcbiNuZXdUYXNrQnRuLCBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl17XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogNXB4IDhweDtcXG4gIHotaW5kZXg6IDU7XFxufVxcblxcbiNuZXdUYXNrQnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA4MHB4O1xcbn1cXG5cXG4jbmV3VGFza0J0bjpob3ZlciwgYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYWxsUHJvamVjdHMsIGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgZmluZEJ5SWQgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5pbXBvcnQgeyBhbGxUYXNrcywgY3JlYXRlVGFzaywgYWRkVGFza1RvQXJyYXksIGVkaXRUYXNrIH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0V2l0aFRhc2tzIH0gZnJvbSBcIi4vZ3VpXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0Rm9ybXMoKSB7XG4gIGxldCBpc0Zvcm1TaG93biA9IGZhbHNlO1xuXG4gIC8vTmV3IFRhc2sgRm9ybSBFbGVtZW50c1xuICBjb25zdCBuZXdUYXNrRm9ybVdyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tGb3JtV3JhcFwiKTtcbiAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tGb3JtXCIpO1xuICBjb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUYXNrQnRuXCIpO1xuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdFByb2plY3RcIik7XG4gIGxldCBuZXdUYXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza05hbWVcIik7XG4gIGxldCBuZXdUYXNrRGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza0Rlc2NcIik7XG5cbiAgLy9FZGl0IFRhc2sgRm9ybSBFbGVtZW50c1xuICBjb25zdCBlZGl0VGFza0Zvcm1XcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0VGFza0Zvcm1XcmFwXCIpO1xuICBjb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRUYXNrRm9ybVwiKTtcbiAgbGV0IGVkaXRUYXNrSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRUYXNrSWRcIik7XG4gIGxldCBlZGl0VGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRUYXNrTmFtZVwiKTtcbiAgbGV0IGVkaXRUYXNrRGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFRhc2tEZXNjXCIpO1xuXG4gIC8vTmV3IFByb2plY3QgRm9ybSBGaWVsZHNcbiAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEJ0blwiKTtcbiAgY29uc3QgbmV3UHJvamVjdEZvcm1XcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0Rm9ybVdyYXBcIik7XG4gIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0Rm9ybVwiKTtcbiAgbGV0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0TmFtZVwiKTtcbiAgbGV0IG5ld1Byb2plY3REZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0RGVzY1wiKTtcblxuICAvL0dlbmVyYXRlIER5bm1haWMgRm9ybSBDb250ZW50XG4gIGNvbnN0IGZvcm1SZWZyZXNoUHJvamVjdE9wdGlvbnMgPSAoKSA9PiB7XG4gICAgLy9jbGVhciBwcm9qZWN0IG9wdGlvbnNcbiAgICBzZWxlY3QudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIC8vV3JpdGUgbmV3IHByb2plY3Qgb3B0aW9uc1xuICAgIC8vU2tpcHMgQWxsIFByb2plY3RzIGF0IEluZGV4IDBcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFsbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gYWxsUHJvamVjdHNbaV0ubmFtZTtcbiAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBpO1xuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhdXRvZmlsbEVkaXRGb3JtID0gKHRhc2tJZCkgPT4ge1xuICAgIGxldCBvcmlnVGFzayA9IGZpbmRCeUlkKGFsbFRhc2tzLCB0YXNrSWQpO1xuICAgIGVkaXRUYXNrSWQudmFsdWUgPSBhbGxUYXNrc1tvcmlnVGFza10uaWQ7XG4gICAgZWRpdFRhc2tOYW1lLnZhbHVlID0gYWxsVGFza3Nbb3JpZ1Rhc2tdLm5hbWU7XG4gICAgZWRpdFRhc2tEZXNjLnZhbHVlID0gYWxsVGFza3Nbb3JpZ1Rhc2tdLmRlc2M7XG4gIH07XG5cbiAgLy9Gb3JtIEhlbHBlciBGdW5jdGlvbnNcbiAgY29uc3QgaGlkZUZvcm0gPSAoZm9ybSkgPT4ge1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBpc0Zvcm1TaG93biA9IGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHNob3dGb3JtID0gKGZvcm0pID0+IHtcbiAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgaXNGb3JtU2hvd24gPSB0cnVlO1xuICB9O1xuXG4gIC8vT3BlbiBGb3Jtc1xuICBuZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKCFpc0Zvcm1TaG93bikge1xuICAgICAgZm9ybVJlZnJlc2hQcm9qZWN0T3B0aW9ucygpO1xuICAgICAgc2hvd0Zvcm0obmV3VGFza0Zvcm1XcmFwKTtcbiAgICB9XG4gIH0pO1xuXG4gIG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoIWlzRm9ybVNob3duKSB7XG4gICAgICBzaG93Rm9ybShuZXdQcm9qZWN0Rm9ybVdyYXApO1xuICAgIH1cbiAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFza0VkaXRCdG5cIikpIHtcbiAgICAgIGlmICghaXNGb3JtU2hvd24pIHtcbiAgICAgICAgYXV0b2ZpbGxFZGl0Rm9ybShldmVudC5zcmNFbGVtZW50LnBhcmVudE5vZGUuaWQpO1xuICAgICAgICBzaG93Rm9ybShlZGl0VGFza0Zvcm1XcmFwKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vQ2xvc2UgRm9ybXNcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2VCdG5cIikpIHtcbiAgICAgIGhpZGVGb3JtKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy9IYW5kbGUgRm9ybSBTdWJtaXRzXG4gIGNvbnN0IGZvcm1IYW5kbGVTZWxlY3RlZFByb2plY3QgPSAodGFzaykgPT4ge1xuICAgIGxldCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RQcm9qZWN0XCIpLnZhbHVlO1xuICAgIGFkZFRhc2tUb0FycmF5KGFsbFByb2plY3RzW3NlbGVjdFByb2plY3RdLnRhc2tzLCB0YXNrKTtcbiAgICBkaXNwbGF5UHJvamVjdFdpdGhUYXNrcyhhbGxQcm9qZWN0c1tzZWxlY3RQcm9qZWN0XSk7XG4gIH07XG5cbiAgbmV3VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNyZWF0ZVRhc2sobmV3VGFza05hbWUudmFsdWUsIG5ld1Rhc2tEZXNjLnZhbHVlKTtcbiAgICBmb3JtSGFuZGxlU2VsZWN0ZWRQcm9qZWN0KGFsbFRhc2tzW2FsbFRhc2tzLmxlbmd0aCAtIDFdKTtcbiAgfSk7XG5cbiAgZWRpdFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBlZGl0VGFzayhlZGl0VGFza0lkLnZhbHVlLCBlZGl0VGFza05hbWUudmFsdWUsIGVkaXRUYXNrRGVzYy52YWx1ZSk7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xufVxuXG5uZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjcmVhdGVQcm9qZWN0KG5ld1Byb2plY3ROYW1lLnZhbHVlLCBuZXdQcm9qZWN0RGVzYy52YWx1ZSwgW10pO1xufSk7XG4iLCJpbXBvcnQgeyBmdWxsRGVsZXRlVGFzayB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgeyBhbGxQcm9qZWN0cywgZGVsZXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmNvbnN0IHRhc2tBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrQXJlYUNvbnRlbnRcIik7XG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdExpc3RcIik7XG5cbi8vRE9NIFV0aWxzXG5jb25zdCBjcmVhdGVEZWxldGVCdG4gPSAoZWxlbWVudCkgPT4ge1xuICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoZWxlbWVudCArIFwiRGVsZXRlQnRuXCIpO1xuICByZXR1cm4gZGVsZXRlQnRuO1xufTtcblxuY29uc3QgY3JlYXRlRWRpdEJ0biA9IChlbGVtZW50KSA9PiB7XG4gIGxldCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoZWxlbWVudCArIFwiRWRpdEJ0blwiKTtcbiAgcmV0dXJuIGVkaXRCdG47XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0QnRucyA9IChwcm9qZWN0KSA9PiB7XG5cblxuICBsZXQgcHJvamVjdEJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RCdG5EaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RCdG5EaXZcIik7XG4gIFxuICBsZXQgcHJvamVjdERlbGV0ZUJ0biA9IGNyZWF0ZURlbGV0ZUJ0bihcInByb2plY3RcIik7XG4gIHByb2plY3REZWxldGVCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvamVjdC5pZCk7XG4gIHByb2plY3RCdG5EaXYuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ0bik7XG4gIGxldCBwcm9qZWN0RWRpdEJ0biA9IGNyZWF0ZUVkaXRCdG4oXCJwcm9qZWN0XCIpO1xuICBwcm9qZWN0RWRpdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0LmlkKTtcbiAgcHJvamVjdEJ0bkRpdi5hcHBlbmRDaGlsZChwcm9qZWN0RWRpdEJ0bik7XG5cbiAgcmV0dXJuIHByb2plY3RCdG5EaXY7XG59XG5cblxuY29uc3QgZGlzcGxheVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RDb250YWluZXJcIik7XG4gIHRhc2tBcmVhLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuXG4gIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gIGxldCBwcm9qZWN0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcm9qZWN0RGVzYy50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzYztcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGVzYyk7XG5cbiAgcHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0LmlkKTtcblxuICBpZihwcm9qZWN0LmlkICE9PSBcImRlZmF1bHRcIil7XG4gIGxldCBwcm9qZWN0QnRucyA9IGNyZWF0ZVByb2plY3RCdG5zKHByb2plY3QpO1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RCdG5zKTtcbiAgfVxufTtcblxuY29uc3QgZGlzcGxheVRhc2sgPSAodGFzaykgPT4ge1xuICBsZXQgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tDb250YWluZXJcIik7XG4gIHRhc2tBcmVhLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuXG4gIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuXG4gIGxldCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzYztcbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzYyk7XG5cbiAgdGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0YXNrLmlkKTtcblxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZURlbGV0ZUJ0bihcInRhc2tcIikpO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVkaXRCdG4oXCJ0YXNrXCIpKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlUYXNrcyA9IChwcm9qZWN0KSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50YXNrcy5sZW5ndGg7IGkrKykge1xuICAgIGRpc3BsYXlUYXNrKHByb2plY3QudGFza3NbaV0pO1xuICB9XG59O1xuXG5jb25zdCBjbGVhclByb2plY3RUYXNrcyA9ICgpID0+IHtcbiAgdGFza0FyZWEudGV4dENvbnRlbnQgPSBcIlwiO1xufTtcblxuY29uc3QgZGVsZXRlTm9kZSA9IChpZCkgPT4ge1xuICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgZWxlbWVudC5yZW1vdmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5UHJvamVjdFdpdGhUYXNrcyA9IChwcm9qZWN0KSA9PiB7XG4gIGNsZWFyUHJvamVjdFRhc2tzKCk7XG4gIGRpc3BsYXlQcm9qZWN0KHByb2plY3QpO1xuICBkaXNwbGF5VGFza3MocHJvamVjdCk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdExpbmsgPSAocHJvamVjdCkgPT4ge1xuICBsZXQgcHJvamVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHByb2plY3RMaW5rLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TGlua1wiKTtcbiAgcHJvamVjdExpbmsuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImJ1dHRvblwiKTtcbiAgcHJvamVjdExpbmsudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RMaW5rKTtcbn07XG4vL0VORCBET01VdGlsc1xuXG5cbi8vSW5pdCBEeW5hbWljIENvbnRlbnQgb24gTmV3IFBhZ2UgTG9hZCBcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXREeW5hbWljQ29udGVudCgpIHtcbiAgLy9PbiBuZXcgbG9hZCwgYXV0byBkaXNwbGF5IGFsbCB0YXNrc1xuICBkaXNwbGF5UHJvamVjdFdpdGhUYXNrcyhhbGxQcm9qZWN0c1swXSk7XG5cbiAgLy9PbiBuZXcgbG9hZCwgYXV0byBkaXNwbGF5IGxpbmtzIHRvIGFsbCBwcm9qZWN0cyBcbiAgKCgpID0+IHtcbiAgICBmb3IobGV0IHByb2plY3Qgb2YgYWxsUHJvamVjdHMpe1xuICAgICAgYWRkUHJvamVjdExpbmsocHJvamVjdCk7XG4gICAgfVxuICB9KSgpO1xuXG4gIC8vRGlzcGxheSBwcm9qZWN0IGluZm8gYWZ0ZXIgY2xpY2tpbmcgb24gZWFjaCBwYWdlXG4gIHByb2plY3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09IFwiTElcIikge1xuICAgICAgbGV0IHByb2plY3ROYW1lID0gZXZlbnQudGFyZ2V0LmlubmVyVGV4dDtcbiAgICAgIGxldCBwcm9qZWN0SW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT0gcHJvamVjdE5hbWVcbiAgICAgICk7XG4gICAgICBkaXNwbGF5UHJvamVjdFdpdGhUYXNrcyhhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vTWFpbiBDb250ZW50IExpc3RlbmVyc1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRhc2tEZWxldGVCdG5cIikpIHtcbiAgICAgIGZ1bGxEZWxldGVUYXNrKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbiAgICAgIGRlbGV0ZU5vZGUoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0RGVsZXRlQnRuXCIpKSB7XG4gICAgZGVsZXRlUHJvamVjdChldmVudC50YXJnZXQuaWQpO1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG59KTtcbi8vZW5kIGluaXREeW5hbWljQ29udGVudFxuXG5cblxuIiwiaW1wb3J0IHsgYWxsVGFza3MgfSBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG5leHBvcnQgY29uc3QgdUlkID0gKCkgPT4ge1xuICByZXR1cm4gRGF0ZS5ub3coKS50b1N0cmluZygzNikgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMik7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZEJ5SWQgPSAoYXJyYXksIGlkTnVtKSA9PiB7XG4gIHJldHVybiBhcnJheS5maW5kSW5kZXgoKHgpID0+IHguaWQgPT09IGlkTnVtKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTdG9yYWdlID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGFsbFRhc2tzKSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWxsUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdG9yZWRUYXNrcyA9ICgpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmFsbFRhc2tzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdG9yZWRQcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuYWxsUHJvamVjdHMpKTtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmFsbFByb2plY3RzKTtcbn07XG4iLCIvL1BST0pFQ1RTXG5pbXBvcnQgeyBhZGRQcm9qZWN0TGluayB9IGZyb20gXCIuL2d1aVwiO1xuaW1wb3J0IHsgZ2V0U3RvcmVkUHJvamVjdHMsIHVwZGF0ZVN0b3JhZ2UsIHVJZCwgZmluZEJ5SWQgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5pbXBvcnQgeyBhbGxUYXNrcyB9IGZyb20gXCIuL3Rhc2tzXCI7XG5cbmV4cG9ydCBsZXQgYWxsUHJvamVjdHMgPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzKCkge1xuICBpZiAoZ2V0U3RvcmVkUHJvamVjdHMpe1xuICBhbGxQcm9qZWN0cyA9IGdldFN0b3JlZFByb2plY3RzKCk7XG59XG59XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjLCB0YXNrcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gICAgdGhpcy5pZCA9IHVJZCgpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUsIGRlc2MsIHRhc2tzKSA9PiB7XG4gIGlmICghQXJyYXkuaXNBcnJheSh0YXNrcykpIHtcbiAgICB0YXNrcyA9IFt0YXNrc107XG4gIH1cbiAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBkZXNjLCB0YXNrcyk7XG4gIGFsbFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIGFkZFByb2plY3RMaW5rKHByb2plY3QpO1xuICB1cGRhdGVTdG9yYWdlKCk7XG59O1xuXG4vL0NyZWF0ZXMgZGVmYXVsdCBwcm9qZWN0IHRvIHVzZSBvbiBmaXJzdCBwYWdlIGxvYWQuIFNraXBzIHN0ZXAgdG8gY3JlYXRlIHByb2plY3QgbGluayBzaW5jZSB0aGlzIGlzIGRvbmUgb24gcGFnZSBpbml0LiBcbmV4cG9ydCBjb25zdCBjcmVhdGVEZWZhdWx0UHJvamVjdCA9ICgpID0+IHtcbiAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChcIkFsbCBUYXNrc1wiLCBcIkFuIHVuZmlsdGVyZWQgdmlldyBvZiBhbGwgdGFza3NcIiwgYWxsVGFza3MpO1xuICBwcm9qZWN0LmlkID0gXCJkZWZhdWx0XCI7XG4gIGFsbFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIHVwZGF0ZVN0b3JhZ2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdElkKSA9PiB7XG4gIGxldCBpbmRleCA9IGZpbmRCeUlkKGFsbFByb2plY3RzLCBwcm9qZWN0SWQpO1xuICBhbGxQcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICB1cGRhdGVTdG9yYWdlKCk7XG59O1xuXG4iLCJpbXBvcnQgeyB1SWQsIGZpbmRCeUlkLCB1cGRhdGVTdG9yYWdlLCBnZXRTdG9yZWRUYXNrcyB9IGZyb20gXCIuL2hlbHBlcnMuanNcIjtcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcblxuZXhwb3J0IGxldCBhbGxUYXNrcyA9IFtdO1xuaWYgKGxvY2FsU3RvcmFnZS5hbGxUYXNrcykge1xuICBhbGxUYXNrcyA9IGdldFN0b3JlZFRhc2tzKCk7XG59XG5cbmNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgIHRoaXMuaWQgPSB1SWQoKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlVGFzayA9IChuYW1lLCBkZXNjKSA9PiB7XG4gIGxldCB0YXNrID0gbmV3IFRhc2sobmFtZSwgZGVzYyk7XG4gIGFsbFRhc2tzLnB1c2godGFzayk7XG4gIHVwZGF0ZVN0b3JhZ2UoKTtcbn07XG5cbmlmICghbG9jYWxTdG9yYWdlLmFsbFRhc2tzKSB7XG4gIGNyZWF0ZVRhc2soXCJTYW1wbGUgVGFza1wiLCBcIkhlcmUncyBhbiBleGFtcGxlIG9mIHdoYXQgYSB0YXNrIGxvb2tzIGxpa2UhXCIpO1xufVxuXG5leHBvcnQgY29uc3QgYWRkVGFza1RvQXJyYXkgPSAoYXJyYXksIHRhc2spID0+IHtcbiAgYXJyYXkucHVzaCh0YXNrKTtcbiAgdXBkYXRlU3RvcmFnZSgpO1xufVxuXG5jb25zdCBkZWxldGVUYXNrRnJvbUFycmF5ID0gKGFycmF5LCB0YXNrSWQpID0+IHtcbiAgbGV0IGluZGV4ID0gZmluZEJ5SWQoYXJyYXksIHRhc2tJZCk7XG4gIGlmIChpbmRleCA+IC0xKSB7XG4gICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGZ1bGxEZWxldGVUYXNrID0gKGlkKSA9PiB7XG4gIGRlbGV0ZVRhc2tGcm9tQXJyYXkoYWxsVGFza3MsIGlkKTtcbiAgZm9yIChsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0cykge1xuICAgIGRlbGV0ZVRhc2tGcm9tQXJyYXkocHJvamVjdC50YXNrcywgaWQpO1xuICB9XG4gIHVwZGF0ZVN0b3JhZ2UoKTtcbn07XG5cblxuXG5jb25zdCBlZGl0VGFza0luUHJvamVjdCA9IChpZCwgbmFtZSwgZGVzYywgcHJvamVjdFRhc2tzKSA9PiB7XG4gIGxldCB0YXNrID0gcHJvamVjdFRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSBpZCk7XG4gIC8vIElmIHRoZSB0YXNrIGlzIGZvdW5kLCB1cGRhdGUgaXRzIHByb3BlcnRpZXNcbiAgaWYgKHRhc2spIHtcbiAgICBpZiAobmFtZSkge1xuICAgICAgdGFzay5uYW1lID0gbmFtZTtcbiAgICB9XG4gICAgaWYgKGRlc2MpIHtcbiAgICAgIHRhc2suZGVzYyA9IGRlc2M7XG4gICAgfVxuICB9XG5cbn1cbiBcbmV4cG9ydCBjb25zdCBlZGl0VGFzayA9IChpZCwgbmFtZSwgZGVzYykgPT4ge1xuICBmb3IgKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RzKXtcbiAgICBlZGl0VGFza0luUHJvamVjdChpZCwgbmFtZSwgZGVzYywgcHJvamVjdC50YXNrcyk7XG4gIH1cbiAgdXBkYXRlU3RvcmFnZSgpO1xufVxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBhbGxUYXNrcyB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgeyB1cGRhdGVQcm9qZWN0cywgY3JlYXRlUHJvamVjdCwgYWxsUHJvamVjdHMsIGNyZWF0ZURlZmF1bHRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcbmltcG9ydCB7IGluaXREeW5hbWljQ29udGVudCB9IGZyb20gXCIuL2d1aS5qc1wiO1xuaW1wb3J0IHsgaW5pdEZvcm1zIH0gZnJvbSBcIi4vZm9ybXNcIjtcblxuLy9Mb2FkIGZyb20gc3RvcmFnZVxudXBkYXRlUHJvamVjdHMoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBsZXQgY2hlY2tBbGxUYXNrcyA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAvL1dhaXQgZm9yICBzdG9yYWdlIHRvIHBvcHVsYXRlXG4gICAgaWYgKFxuICAgICAgbG9jYWxTdG9yYWdlLmFsbFRhc2tzID09PSBKU09OLnN0cmluZ2lmeShhbGxUYXNrcykgJiZcbiAgICAgIGxvY2FsU3RvcmFnZS5hbGxQcm9qZWN0cyA9PT0gSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpXG4gICAgKSB7XG4gICAgICBjbGVhckludGVydmFsKGNoZWNrQWxsVGFza3MpO1xuICAgICAgLy9JZiBubyBwcm9qZWN0cyBleGlzdCB5ZXQsIGNyZWF0ZSBkZWZhdWx0IEFsbCBUYXNrcyBwcm9qZWN0XG4gICAgICBpZiAoYWxsUHJvamVjdHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjcmVhdGVEZWZhdWx0UHJvamVjdCgpO1xuICAgICAgfVxuICAgICAgLy9BZGQgYWxsIHN0b3JlZCB0YXNrcyB0byBBbGwgVGFza3NcbiAgICAgIGFsbFByb2plY3RzWzBdLnRhc2tzID0gYWxsVGFza3M7XG4gICAgICAvL0luaXQgcGFnZVxuICAgICAgaW5pdER5bmFtaWNDb250ZW50KCk7XG4gICAgICBpbml0Rm9ybXMoKTtcbiAgICB9XG4gIH0sIDEwMCk7IC8vIENoZWNrIGV2ZXJ5IDEwMCBtaWxsaXNlY29uZHNcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9