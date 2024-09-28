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

#noProjectNote {
  font-style: italic;
  color: grey;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;qBACqB;AACrB;;;EAGE,sBAAsB;AACxB;;AAEA,0BAA0B;AAC1B;;;;;;;;;;;;EAYE,SAAS;AACX;;AAEA,2GAA2G;AAC3G;;EAEE,gBAAgB;AAClB;;AAEA,2BAA2B;AAC3B;EACE,uBAAuB;AACzB;;AAEA,2BAA2B;AAC3B;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA,0DAA0D;AAC1D;EACE,8BAA8B;AAChC;;AAEA,oCAAoC;AACpC;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA,yCAAyC;AACzC;;;;EAIE,aAAa;AACf;;AAEA,iBAAiB;;AAEjB,2BAA2B;AAC3B;EACE,iBAAiB;EACjB,iBAAiB;EACjB,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,YAAY;;AAEd;;AAEA;EACE,aAAa;AACf;;;AAGA,QAAQ;AACR;EACE,sCAAsC;EACtC,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,6BAA6B;EAC7B,sBAAsB;EACtB,WAAW;EACX,aAAa;EACb,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR;AACF;;AAEA;EACE,WAAW;EACX,WAAW;EACX,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;;AAGA,mBAAmB;;AAEnB;EACE,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,mDAA0C;EAC1C,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,2CAA2C;EAC3C,sBAAsB;EACtB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;AACd;;;AAGA,oBAAoB;;AAEpB;EACE,wCAAwC;EACxC,YAAY;EACZ,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE;AACF;;AAEA;EACE,+BAA+B;EAC/B,YAAY;EACZ,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,+BAA+B;EAC/B,YAAY;AACd;;;AAGA;EACE,gBAAgB;AAClB","sourcesContent":["/*Start CSS Reset Code\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\nhtml, body {\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  overflow-x: hidden;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/*End Reset Code*/\n\n/*Global and Shared Styles*/\n:root {\n  --color1: #ca5c54;\n  --color2: #154c79;\n  font-family: \"Sen\", sans-serif;\n}\n\nhtml {\n  min-height: 100%;\n  position: relative;\n}\n\nbody {\n  height: 100%;\n\n}\n\n.hidden {\n  display: none;\n}\n\n\n/*Forms*/\n.formWraps {\n  background-color: rgba(0, 0, 0, 0.178);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.forms {\n  position: absolute;\n  left: 50%;\n  top: 30%;\n  transform: translate(-50%, 0);\n  border: 2px solid grey;\n  z-index: 10;\n  padding: 15px;\n  width: 350px;\n  background-color: white;\n}\n\nform h3 {\n  margin-top: 25px;\n}\n\n.closeBtn {\n  position: absolute;\n  right: 5px;\n  top: 3px;\n  color: var(--color1)\n}\n\ninput, select, textarea {\n  width: 100%;\n  clear: both;\n  border: 1px grey solid;\n  padding: 5px;\n}\n\ntextarea {\n  resize: vertical;\n}\n\nselect {\n  background-color: white;\n}\n\n.formFields label {\n  margin-top: 10px;\n  display: inline-block;\n}\n\n#noProjectNote {\n  font-style: italic;\n  color: grey;\n}\n\n\n/*Main Page Layout*/\n\n#sidebar {\n  border-right: 2px solid grey;\n}\n\n#container {\n  padding: 50px;\n  background-color: #070600;\n  background: url('./sunset_background.jpg');\n  background-size: cover;\n  height: 100vh;\n}\n\n#wrapper {\n  background-color: rgba(255, 255, 255, 0.95);\n  border: 2px solid grey;\n  max-height: 90vh;\n  overflow: clip;\n}\n\n#sidebar, #taskArea {\n  padding: 30px;\n  overflow: auto;\n  height: calc(90vh - 35px);\n}\n\n#mainContent {\n  display: grid;\n  grid-template-columns: 20% 80%;\n  height: 100vh;\n  opacity: 95%;\n}\n\n#taskAreaHeader {\n  text-align: center;\n  height: 70px;\n  display: grid;\n  border-bottom: 2px solid grey;\n  grid-template-columns: 100%;\n  align-items: center;\n}\n\n.projectContainer {\n  margin-bottom: 30px;\n}\n\n.taskContainer {\n  border-bottom: 1px solid grey;\n  padding: 5px;\n}\n\n\n/*Buttons and Links*/\n\nbutton {\n  background-color: rgba(255, 255, 255, 0);\n  border: none;\n  font-weight: bold;\n  margin: 5px 0;\n}\n\nli.projectLink, button {\n  color: var(--color1);\n}\n\nli.projectLink:hover, button:hover {\n  color: var(--color2)\n}\n\n#newTaskBtn, button[type=\"submit\"]{\n  background-color: var(--color1);\n  color: white;\n  padding: 5px 8px;\n  z-index: 5;\n}\n\n#newTaskBtn {\n  position: absolute;\n  right: 80px;\n}\n\n#newTaskBtn:hover, button[type=\"submit\"]:hover{\n  background-color: var(--color2);\n  color: white;\n}\n\n\nbutton[type=\"submit\"] {\n  margin-top: 20px;\n}\n"],"sourceRoot":""}]);
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
  const selectProject = document.getElementById("selectProject");
  const noProjectNote = document.getElementById("noProjectNote");
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

  //Edit Project Form Fields
  let editProjectId = document.getElementById("editProjectId");
  let editProjectName = document.getElementById("editProjectName");
  let editProjectDesc = document.getElementById("editProjectDesc");

  //Add Task to Project Form Fields
  let addTasktoProjectFormWrap = document.getElementById("addTasktoProjectFormWrap");
  let addTasktoProjectForm = document.getElementById("addTasktoProjectForm");
  let addTasktoProjectFormHeader = document.getElementById("addTasktoProjectHeader");
  let addTasktoProjectFormId = document.getElementById("addTasktoProjectFormId");
  let selectTask = document.getElementById("selectTask");

  //Generate Dynmaic Form Content
  const formRefreshProjectOptions = () => {
    //List all project options, only if projects other than default project exist
    if (_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects.length > 1) {
      noProjectNote.classList.add("hidden");
      selectProject.classList.remove("hidden");
      selectProject.textContent = "";
      //Skips default 'All Projects' at Index 0
      for (let i = 1; i < _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; i++) {
        let projectOption = document.createElement("option");
        projectOption.textContent = _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].name;
        projectOption.value = i;
        selectProject.appendChild(projectOption);
      }
      let noProjectOption = document.createElement("option");
      noProjectOption.textContent = "Don't add to project";
      noProjectOption.value = "no project";
      selectProject.appendChild(noProjectOption);
    } else {
      selectProject.classList.add("hidden");
    }
  };

  const formRefreshTaskOptions = (projectId) => {
   selectTask.textContent = "";
   let currentProject = _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findIndexById)(_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects, projectId)];
   let availableTasks = [];
   for (let i = 0; i < _tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks.length; i++) {
    //If a task can NOT be found in the array of tasks for current project, then include it in the list of options
    if (((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findIndexById)(currentProject.tasks, _tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks[i].id)) === -1){
      availableTasks.push(_tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks[i]);
    }
   }
    for (let i = 0; i < availableTasks.length; i++) {
      let taskOption = document.createElement("option");
      taskOption.textContent = availableTasks[i].name;
      //Form intended to utilize index of selected task in All Tasks array
      taskOption.value = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findIndexById)(_tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks, availableTasks[i].id);
      selectTask.appendChild(taskOption);
    }
};

  const autofillTaskEditForm = (taskId) => {
    let origTask = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findIndexById)(_tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks, taskId);
    editTaskId.value = _tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks[origTask].id;
    editTaskName.value = _tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks[origTask].name;
    editTaskDesc.value = _tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks[origTask].desc;
  };

  const autofillProjectEditForm = (projectId) => {
    let origProject = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findIndexById)(_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects, projectId);
    editProjectId.value = _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[origProject].id;
    editProjectName.value = _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[origProject].name;
    editProjectDesc.value = _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[origProject].desc;
  };

  const autofillAddTaskToProjectForm = (projectId) => {
    //Add header
    let currentProject = _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findIndexById)(_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects, projectId)];
    addTasktoProjectFormHeader.textContent = "Add Task For " + currentProject.name;
    //Add hidden id
    addTasktoProjectFormId.value = projectId;
    formRefreshTaskOptions(projectId);
  }

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
        autofillTaskEditForm(event.srcElement.parentNode.id);
        showForm(editTaskFormWrap);
      }
    }
  });

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("projectEditBtn")) {
      if (!isFormShown) {
        autofillProjectEditForm(event.srcElement.dataset.project);
        showForm(editProjectFormWrap);
      }
    }
  });

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("addTaskBtn")) {
      if (!isFormShown) {
        autofillAddTaskToProjectForm(event.srcElement.dataset.project);
        showForm(addTasktoProjectFormWrap);
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
    let selectedProject = document.getElementById("selectProject").value;
    if (selectedProject !== "no project") {
      (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.addTaskToArray)(_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[selectedProject].tasks, task);
      (0,_gui__WEBPACK_IMPORTED_MODULE_3__.displayProjectWithTasks)(_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[selectedProject]);
    }
  };

  newTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.createTask)(newTaskName.value, newTaskDesc.value);
    if (_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects.length > 1) {
      formHandleSelectedProject(_tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks[_tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks.length - 1]);
    }
    location.reload();
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
  location.reload();
});

editProjectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.editProject)(editProjectId.value, editProjectName.value, editProjectDesc.value);
  location.reload();
});


addTasktoProjectForm.addEventListener("submit", (event) => {
  let selectedProjectId = addTasktoProjectFormId.value;
  let selectedTaskIndex = selectTask.value;
  event.preventDefault();
  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.addTasktoProject)(selectedProjectId, selectedTaskIndex);
  location.reload();
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
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");




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
  //add project ID here
  return editBtn;
};

const createRemoveBtn = (project) => {
  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove From Project";
  removeBtn.classList.add("removeBtn");
  //Project ID will be used to identify which project task should be removed from
  removeBtn.setAttribute("data-project", project.id)
  return removeBtn;
};

const createAddTaskBtn = (project) => {
  let addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "Add Task";
  addTaskBtn.classList.add("addTaskBtn");
  //Project ID will be used to identify which project task should be added to
  addTaskBtn.setAttribute("data-project", project.id)
  return addTaskBtn;
};


const createProjectBtns = (project) => {
  let projectBtnDiv = document.createElement("div");
  projectBtnDiv.classList.add("projectBtnDiv");
  let projectDeleteBtn = createDeleteBtn("project");
  projectBtnDiv.appendChild(projectDeleteBtn);
  
  let projectEditBtn = createEditBtn("project");
  projectBtnDiv.appendChild(projectEditBtn);

  let addTaskBtn = createAddTaskBtn(project);
  projectBtnDiv.appendChild(addTaskBtn);

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

const displayTask = (task, project) => {
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

  if(project !== _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects[0]) {
    taskContainer.appendChild(createRemoveBtn(project));
  }
};

const displayTasks = (project) => {
  for (let i = 0; i < project.tasks.length; i++) {
    displayTask(project.tasks[i], project);
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

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("removeBtn")) {
    //takes parameters for project id, task id
    let eventProjectId = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.findIndexById)(_projects__WEBPACK_IMPORTED_MODULE_1__.allProjects, event.target.dataset.project);
    (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.deleteTaskFromArray)(_projects__WEBPACK_IMPORTED_MODULE_1__.allProjects[eventProjectId].tasks, event.target.parentNode.id)
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
/* harmony export */   findIndexById: () => (/* binding */ findIndexById),
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

const findIndexById = (array, idNum) => {
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
/* harmony export */   addTasktoProject: () => (/* binding */ addTasktoProject),
/* harmony export */   allProjects: () => (/* binding */ allProjects),
/* harmony export */   createDefaultProject: () => (/* binding */ createDefaultProject),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   editProject: () => (/* binding */ editProject),
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

//Creates default project to use on first page load. 
//Skips step to create project link since this is done on page init. 
const createDefaultProject = () => {
  let project = new Project("All Tasks", "An unfiltered view of all tasks", _tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks);
  project.id = "default";
  allProjects.push(project);
  (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.updateStorage)();
}

const deleteProject = (projectId) => {
  let index = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findIndexById)(allProjects, projectId);
  allProjects.splice(index, 1);
  (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.updateStorage)();
};

const editProject = (id, name, desc) => {
  let index = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findIndexById)(allProjects, id);
    if (name) {
      allProjects[index].name = name;
    }
    if (desc) {
      allProjects[index].desc = desc;
    }
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.updateStorage)();

}

const addTasktoProject = (projectId, taskIndex) => {
  let selectedProject = allProjects[(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findIndexById)(allProjects, projectId)];
  (selectedProject.tasks).push(_tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks[taskIndex]);
  (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.updateStorage)();
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
/* harmony export */   deleteTaskFromArray: () => (/* binding */ deleteTaskFromArray),
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
  let index = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.findIndexById)(array, taskId);
  if (index > -1) {
    array.splice(index, 1);
  }
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)();
};

const fullDeleteTask = (id) => {
  deleteTaskFromArray(allTasks, id);
  for (let project of _projects_js__WEBPACK_IMPORTED_MODULE_1__.allProjects) {
    deleteTaskFromArray(project.tasks, id);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJIQUEwQztBQUN0Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsT0FBTyxRQUFRLFlBQVksT0FBTyxZQUFZLGlCQUFpQixVQUFVLE1BQU0sWUFBWSxPQUFPLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxPQUFPLFVBQVUsVUFBVSxPQUFPLFlBQVksU0FBUyxVQUFVLE1BQU0sYUFBYSxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUs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QUFXO0FBQ3JCLFFBQVEsa0VBQW9CO0FBQzVCO0FBQ0E7QUFDQSxNQUFNLHFEQUFXLFlBQVksNENBQVE7QUFDckM7QUFDQSxNQUFNLDJEQUFrQjtBQUN4QixNQUFNLGlEQUFTO0FBQ2Y7QUFDQSxHQUFHLFFBQVE7QUFDWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vc3JjL2Zvcm1zLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vc3JjL2d1aS5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1RvIERvIExpc3QgQXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vc3Vuc2V0X2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKlN0YXJ0IENTUyBSZXNldCBDb2RlXG4vKiBCb3ggc2l6aW5nIHJ1bGVzICovXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cbmJvZHksXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuZmlndXJlLFxuYmxvY2txdW90ZSxcbmRsLFxuZGQge1xuICBtYXJnaW46IDA7XG59XG5cbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xudWxbcm9sZT0nbGlzdCddLFxub2xbcm9sZT0nbGlzdCddIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xuaHRtbDpmb2N1cy13aXRoaW4ge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuaHRtbCwgYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXG5hOm5vdChbY2xhc3NdKSB7XG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcbn1cblxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xuaW1nLFxucGljdHVyZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbi8qRW5kIFJlc2V0IENvZGUqL1xuXG4vKkdsb2JhbCBhbmQgU2hhcmVkIFN0eWxlcyovXG46cm9vdCB7XG4gIC0tY29sb3IxOiAjY2E1YzU0O1xuICAtLWNvbG9yMjogIzE1NGM3OTtcbiAgZm9udC1mYW1pbHk6IFwiU2VuXCIsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG5cbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuLypGb3JtcyovXG4uZm9ybVdyYXBzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE3OCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uZm9ybXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAzMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICB6LWluZGV4OiAxMDtcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDM1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuZm9ybSBoMyB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5jbG9zZUJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiAzcHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpXG59XG5cbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNsZWFyOiBib3RoO1xuICBib3JkZXI6IDFweCBncmV5IHNvbGlkO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5mb3JtRmllbGRzIGxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jbm9Qcm9qZWN0Tm90ZSB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6IGdyZXk7XG59XG5cblxuLypNYWluIFBhZ2UgTGF5b3V0Ki9cblxuI3NpZGViYXIge1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBncmV5O1xufVxuXG4jY29udGFpbmVyIHtcbiAgcGFkZGluZzogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3MDYwMDtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4jd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG4gIG92ZXJmbG93OiBjbGlwO1xufVxuXG4jc2lkZWJhciwgI3Rhc2tBcmVhIHtcbiAgcGFkZGluZzogMzBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogY2FsYyg5MHZoIC0gMzVweCk7XG59XG5cbiNtYWluQ29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3BhY2l0eTogOTUlO1xufVxuXG4jdGFza0FyZWFIZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNzBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3RDb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udGFza0NvbnRhaW5lciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cblxuLypCdXR0b25zIGFuZCBMaW5rcyovXG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbmxpLnByb2plY3RMaW5rLCBidXR0b24ge1xuICBjb2xvcjogdmFyKC0tY29sb3IxKTtcbn1cblxubGkucHJvamVjdExpbms6aG92ZXIsIGJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvcjIpXG59XG5cbiNuZXdUYXNrQnRuLCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXXtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICB6LWluZGV4OiA1O1xufVxuXG4jbmV3VGFza0J0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDgwcHg7XG59XG5cbiNuZXdUYXNrQnRuOmhvdmVyLCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXTpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IyKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5cbmJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtxQkFDcUI7QUFDckI7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQSwwQkFBMEI7QUFDMUI7Ozs7Ozs7Ozs7OztFQVlFLFNBQVM7QUFDWDs7QUFFQSwyR0FBMkc7QUFDM0c7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQSwwREFBMEQ7QUFDMUQ7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUEsb0NBQW9DO0FBQ3BDOztFQUVFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBLHlDQUF5QztBQUN6Qzs7OztFQUlFLGFBQWE7QUFDZjs7QUFFQSxpQkFBaUI7O0FBRWpCLDJCQUEyQjtBQUMzQjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7OztBQUdBLFFBQVE7QUFDUjtFQUNFLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtBQUNWOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7OztBQUdBLG1CQUFtQjs7QUFFbkI7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1EQUEwQztFQUMxQyxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOzs7QUFHQSxvQkFBb0I7O0FBRXBCO0VBQ0Usd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtBQUNkOzs7QUFHQTtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlN0YXJ0IENTUyBSZXNldCBDb2RlXFxuLyogQm94IHNpemluZyBydWxlcyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5maWd1cmUsXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcbnVsW3JvbGU9J2xpc3QnXSxcXG5vbFtyb2xlPSdsaXN0J10ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xcbmh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcbmE6bm90KFtjbGFzc10pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qRW5kIFJlc2V0IENvZGUqL1xcblxcbi8qR2xvYmFsIGFuZCBTaGFyZWQgU3R5bGVzKi9cXG46cm9vdCB7XFxuICAtLWNvbG9yMTogI2NhNWM1NDtcXG4gIC0tY29sb3IyOiAjMTU0Yzc5O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZW5cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcbi8qRm9ybXMqL1xcbi5mb3JtV3JhcHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE3OCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5mb3JtcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDMwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5mb3JtIGgzIHtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbi5jbG9zZUJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXB4O1xcbiAgdG9wOiAzcHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3IxKVxcbn1cXG5cXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNsZWFyOiBib3RoO1xcbiAgYm9yZGVyOiAxcHggZ3JleSBzb2xpZDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZm9ybUZpZWxkcyBsYWJlbCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4jbm9Qcm9qZWN0Tm90ZSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuXFxuLypNYWluIFBhZ2UgTGF5b3V0Ki9cXG5cXG4jc2lkZWJhciB7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwNjAwO1xcbiAgYmFja2dyb3VuZDogdXJsKCcuL3N1bnNldF9iYWNrZ3JvdW5kLmpwZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiN3cmFwcGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgbWF4LWhlaWdodDogOTB2aDtcXG4gIG92ZXJmbG93OiBjbGlwO1xcbn1cXG5cXG4jc2lkZWJhciwgI3Rhc2tBcmVhIHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGhlaWdodDogY2FsYyg5MHZoIC0gMzVweCk7XFxufVxcblxcbiNtYWluQ29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG9wYWNpdHk6IDk1JTtcXG59XFxuXFxuI3Rhc2tBcmVhSGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogNzBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi50YXNrQ29udGFpbmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5cXG4vKkJ1dHRvbnMgYW5kIExpbmtzKi9cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiA1cHggMDtcXG59XFxuXFxubGkucHJvamVjdExpbmssIGJ1dHRvbiB7XFxuICBjb2xvcjogdmFyKC0tY29sb3IxKTtcXG59XFxuXFxubGkucHJvamVjdExpbms6aG92ZXIsIGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3IyKVxcbn1cXG5cXG4jbmV3VGFza0J0biwgYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJde1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDVweCA4cHg7XFxuICB6LWluZGV4OiA1O1xcbn1cXG5cXG4jbmV3VGFza0J0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogODBweDtcXG59XFxuXFxuI25ld1Rhc2tCdG46aG92ZXIsIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcbmJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFsbFByb2plY3RzLCBjcmVhdGVQcm9qZWN0LCBlZGl0UHJvamVjdCwgYWRkVGFza3RvUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBmaW5kSW5kZXhCeUlkIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuaW1wb3J0IHsgYWxsVGFza3MsIGNyZWF0ZVRhc2ssIGFkZFRhc2tUb0FycmF5LCBlZGl0VGFzayB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdFdpdGhUYXNrcyB9IGZyb20gXCIuL2d1aVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEZvcm1zKCkge1xuICBsZXQgaXNGb3JtU2hvd24gPSBmYWxzZTtcblxuICAvL05ldyBUYXNrIEZvcm0gRWxlbWVudHNcbiAgY29uc3QgbmV3VGFza0Zvcm1XcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUYXNrRm9ybVdyYXBcIik7XG4gIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUYXNrRm9ybVwiKTtcbiAgY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza0J0blwiKTtcbiAgY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0UHJvamVjdFwiKTtcbiAgY29uc3Qgbm9Qcm9qZWN0Tm90ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm9Qcm9qZWN0Tm90ZVwiKTtcbiAgbGV0IG5ld1Rhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUYXNrTmFtZVwiKTtcbiAgbGV0IG5ld1Rhc2tEZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUYXNrRGVzY1wiKTtcblxuICAvL0VkaXQgVGFzayBGb3JtIEVsZW1lbnRzXG4gIGNvbnN0IGVkaXRUYXNrRm9ybVdyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRUYXNrRm9ybVdyYXBcIik7XG4gIGNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFRhc2tGb3JtXCIpO1xuICBsZXQgZWRpdFRhc2tJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFRhc2tJZFwiKTtcbiAgbGV0IGVkaXRUYXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFRhc2tOYW1lXCIpO1xuICBsZXQgZWRpdFRhc2tEZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0VGFza0Rlc2NcIik7XG5cbiAgLy9OZXcgUHJvamVjdCBGb3JtIEZpZWxkc1xuICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0QnRuXCIpO1xuICBjb25zdCBuZXdQcm9qZWN0Rm9ybVdyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RGb3JtV3JhcFwiKTtcbiAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RGb3JtXCIpO1xuICBsZXQgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3ROYW1lXCIpO1xuICBsZXQgbmV3UHJvamVjdERlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3REZXNjXCIpO1xuXG4gIC8vRWRpdCBQcm9qZWN0IEZvcm0gRmllbGRzXG4gIGxldCBlZGl0UHJvamVjdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0UHJvamVjdElkXCIpO1xuICBsZXQgZWRpdFByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0UHJvamVjdE5hbWVcIik7XG4gIGxldCBlZGl0UHJvamVjdERlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRQcm9qZWN0RGVzY1wiKTtcblxuICAvL0FkZCBUYXNrIHRvIFByb2plY3QgRm9ybSBGaWVsZHNcbiAgbGV0IGFkZFRhc2t0b1Byb2plY3RGb3JtV3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza3RvUHJvamVjdEZvcm1XcmFwXCIpO1xuICBsZXQgYWRkVGFza3RvUHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2t0b1Byb2plY3RGb3JtXCIpO1xuICBsZXQgYWRkVGFza3RvUHJvamVjdEZvcm1IZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2t0b1Byb2plY3RIZWFkZXJcIik7XG4gIGxldCBhZGRUYXNrdG9Qcm9qZWN0Rm9ybUlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrdG9Qcm9qZWN0Rm9ybUlkXCIpO1xuICBsZXQgc2VsZWN0VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0VGFza1wiKTtcblxuICAvL0dlbmVyYXRlIER5bm1haWMgRm9ybSBDb250ZW50XG4gIGNvbnN0IGZvcm1SZWZyZXNoUHJvamVjdE9wdGlvbnMgPSAoKSA9PiB7XG4gICAgLy9MaXN0IGFsbCBwcm9qZWN0IG9wdGlvbnMsIG9ubHkgaWYgcHJvamVjdHMgb3RoZXIgdGhhbiBkZWZhdWx0IHByb2plY3QgZXhpc3RcbiAgICBpZiAoYWxsUHJvamVjdHMubGVuZ3RoID4gMSkge1xuICAgICAgbm9Qcm9qZWN0Tm90ZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgc2VsZWN0UHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgc2VsZWN0UHJvamVjdC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAvL1NraXBzIGRlZmF1bHQgJ0FsbCBQcm9qZWN0cycgYXQgSW5kZXggMFxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHByb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBhbGxQcm9qZWN0c1tpXS5uYW1lO1xuICAgICAgICBwcm9qZWN0T3B0aW9uLnZhbHVlID0gaTtcbiAgICAgICAgc2VsZWN0UHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKTtcbiAgICAgIH1cbiAgICAgIGxldCBub1Byb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgbm9Qcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gXCJEb24ndCBhZGQgdG8gcHJvamVjdFwiO1xuICAgICAgbm9Qcm9qZWN0T3B0aW9uLnZhbHVlID0gXCJubyBwcm9qZWN0XCI7XG4gICAgICBzZWxlY3RQcm9qZWN0LmFwcGVuZENoaWxkKG5vUHJvamVjdE9wdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdFByb2plY3QuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZm9ybVJlZnJlc2hUYXNrT3B0aW9ucyA9IChwcm9qZWN0SWQpID0+IHtcbiAgIHNlbGVjdFRhc2sudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gYWxsUHJvamVjdHNbZmluZEluZGV4QnlJZChhbGxQcm9qZWN0cywgcHJvamVjdElkKV07XG4gICBsZXQgYXZhaWxhYmxlVGFza3MgPSBbXTtcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAvL0lmIGEgdGFzayBjYW4gTk9UIGJlIGZvdW5kIGluIHRoZSBhcnJheSBvZiB0YXNrcyBmb3IgY3VycmVudCBwcm9qZWN0LCB0aGVuIGluY2x1ZGUgaXQgaW4gdGhlIGxpc3Qgb2Ygb3B0aW9uc1xuICAgIGlmICgoZmluZEluZGV4QnlJZChjdXJyZW50UHJvamVjdC50YXNrcywgYWxsVGFza3NbaV0uaWQpKSA9PT0gLTEpe1xuICAgICAgYXZhaWxhYmxlVGFza3MucHVzaChhbGxUYXNrc1tpXSk7XG4gICAgfVxuICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXZhaWxhYmxlVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0YXNrT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIHRhc2tPcHRpb24udGV4dENvbnRlbnQgPSBhdmFpbGFibGVUYXNrc1tpXS5uYW1lO1xuICAgICAgLy9Gb3JtIGludGVuZGVkIHRvIHV0aWxpemUgaW5kZXggb2Ygc2VsZWN0ZWQgdGFzayBpbiBBbGwgVGFza3MgYXJyYXlcbiAgICAgIHRhc2tPcHRpb24udmFsdWUgPSBmaW5kSW5kZXhCeUlkKGFsbFRhc2tzLCBhdmFpbGFibGVUYXNrc1tpXS5pZCk7XG4gICAgICBzZWxlY3RUYXNrLmFwcGVuZENoaWxkKHRhc2tPcHRpb24pO1xuICAgIH1cbn07XG5cbiAgY29uc3QgYXV0b2ZpbGxUYXNrRWRpdEZvcm0gPSAodGFza0lkKSA9PiB7XG4gICAgbGV0IG9yaWdUYXNrID0gZmluZEluZGV4QnlJZChhbGxUYXNrcywgdGFza0lkKTtcbiAgICBlZGl0VGFza0lkLnZhbHVlID0gYWxsVGFza3Nbb3JpZ1Rhc2tdLmlkO1xuICAgIGVkaXRUYXNrTmFtZS52YWx1ZSA9IGFsbFRhc2tzW29yaWdUYXNrXS5uYW1lO1xuICAgIGVkaXRUYXNrRGVzYy52YWx1ZSA9IGFsbFRhc2tzW29yaWdUYXNrXS5kZXNjO1xuICB9O1xuXG4gIGNvbnN0IGF1dG9maWxsUHJvamVjdEVkaXRGb3JtID0gKHByb2plY3RJZCkgPT4ge1xuICAgIGxldCBvcmlnUHJvamVjdCA9IGZpbmRJbmRleEJ5SWQoYWxsUHJvamVjdHMsIHByb2plY3RJZCk7XG4gICAgZWRpdFByb2plY3RJZC52YWx1ZSA9IGFsbFByb2plY3RzW29yaWdQcm9qZWN0XS5pZDtcbiAgICBlZGl0UHJvamVjdE5hbWUudmFsdWUgPSBhbGxQcm9qZWN0c1tvcmlnUHJvamVjdF0ubmFtZTtcbiAgICBlZGl0UHJvamVjdERlc2MudmFsdWUgPSBhbGxQcm9qZWN0c1tvcmlnUHJvamVjdF0uZGVzYztcbiAgfTtcblxuICBjb25zdCBhdXRvZmlsbEFkZFRhc2tUb1Byb2plY3RGb3JtID0gKHByb2plY3RJZCkgPT4ge1xuICAgIC8vQWRkIGhlYWRlclxuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGFsbFByb2plY3RzW2ZpbmRJbmRleEJ5SWQoYWxsUHJvamVjdHMsIHByb2plY3RJZCldO1xuICAgIGFkZFRhc2t0b1Byb2plY3RGb3JtSGVhZGVyLnRleHRDb250ZW50ID0gXCJBZGQgVGFzayBGb3IgXCIgKyBjdXJyZW50UHJvamVjdC5uYW1lO1xuICAgIC8vQWRkIGhpZGRlbiBpZFxuICAgIGFkZFRhc2t0b1Byb2plY3RGb3JtSWQudmFsdWUgPSBwcm9qZWN0SWQ7XG4gICAgZm9ybVJlZnJlc2hUYXNrT3B0aW9ucyhwcm9qZWN0SWQpO1xuICB9XG5cbiAgLy9Gb3JtIEhlbHBlciBGdW5jdGlvbnNcbiAgY29uc3QgaGlkZUZvcm0gPSAoZm9ybSkgPT4ge1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBpc0Zvcm1TaG93biA9IGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHNob3dGb3JtID0gKGZvcm0pID0+IHtcbiAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgaXNGb3JtU2hvd24gPSB0cnVlO1xuICB9O1xuXG4gIC8vT3BlbiBGb3Jtc1xuICBuZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKCFpc0Zvcm1TaG93bikge1xuICAgICAgZm9ybVJlZnJlc2hQcm9qZWN0T3B0aW9ucygpO1xuICAgICAgc2hvd0Zvcm0obmV3VGFza0Zvcm1XcmFwKTtcbiAgICB9XG4gIH0pO1xuXG4gIG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoIWlzRm9ybVNob3duKSB7XG4gICAgICBzaG93Rm9ybShuZXdQcm9qZWN0Rm9ybVdyYXApO1xuICAgIH1cbiAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFza0VkaXRCdG5cIikpIHtcbiAgICAgIGlmICghaXNGb3JtU2hvd24pIHtcbiAgICAgICAgYXV0b2ZpbGxUYXNrRWRpdEZvcm0oZXZlbnQuc3JjRWxlbWVudC5wYXJlbnROb2RlLmlkKTtcbiAgICAgICAgc2hvd0Zvcm0oZWRpdFRhc2tGb3JtV3JhcCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0RWRpdEJ0blwiKSkge1xuICAgICAgaWYgKCFpc0Zvcm1TaG93bikge1xuICAgICAgICBhdXRvZmlsbFByb2plY3RFZGl0Rm9ybShldmVudC5zcmNFbGVtZW50LmRhdGFzZXQucHJvamVjdCk7XG4gICAgICAgIHNob3dGb3JtKGVkaXRQcm9qZWN0Rm9ybVdyYXApO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkVGFza0J0blwiKSkge1xuICAgICAgaWYgKCFpc0Zvcm1TaG93bikge1xuICAgICAgICBhdXRvZmlsbEFkZFRhc2tUb1Byb2plY3RGb3JtKGV2ZW50LnNyY0VsZW1lbnQuZGF0YXNldC5wcm9qZWN0KTtcbiAgICAgICAgc2hvd0Zvcm0oYWRkVGFza3RvUHJvamVjdEZvcm1XcmFwKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG5cbiAgLy9DbG9zZSBGb3Jtc1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZUJ0blwiKSkge1xuICAgICAgaGlkZUZvcm0oZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG4gICAgfVxuICB9KTtcblxuICAvL0hhbmRsZSBGb3JtIFN1Ym1pdHNcbiAgY29uc3QgZm9ybUhhbmRsZVNlbGVjdGVkUHJvamVjdCA9ICh0YXNrKSA9PiB7XG4gICAgbGV0IHNlbGVjdGVkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0UHJvamVjdFwiKS52YWx1ZTtcbiAgICBpZiAoc2VsZWN0ZWRQcm9qZWN0ICE9PSBcIm5vIHByb2plY3RcIikge1xuICAgICAgYWRkVGFza1RvQXJyYXkoYWxsUHJvamVjdHNbc2VsZWN0ZWRQcm9qZWN0XS50YXNrcywgdGFzayk7XG4gICAgICBkaXNwbGF5UHJvamVjdFdpdGhUYXNrcyhhbGxQcm9qZWN0c1tzZWxlY3RlZFByb2plY3RdKTtcbiAgICB9XG4gIH07XG5cbiAgbmV3VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNyZWF0ZVRhc2sobmV3VGFza05hbWUudmFsdWUsIG5ld1Rhc2tEZXNjLnZhbHVlKTtcbiAgICBpZiAoYWxsUHJvamVjdHMubGVuZ3RoID4gMSkge1xuICAgICAgZm9ybUhhbmRsZVNlbGVjdGVkUHJvamVjdChhbGxUYXNrc1thbGxUYXNrcy5sZW5ndGggLSAxXSk7XG4gICAgfVxuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9KTtcblxuICBlZGl0VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGVkaXRUYXNrKGVkaXRUYXNrSWQudmFsdWUsIGVkaXRUYXNrTmFtZS52YWx1ZSwgZWRpdFRhc2tEZXNjLnZhbHVlKTtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG59XG5cbm5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNyZWF0ZVByb2plY3QobmV3UHJvamVjdE5hbWUudmFsdWUsIG5ld1Byb2plY3REZXNjLnZhbHVlLCBbXSk7XG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG5cbmVkaXRQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBlZGl0UHJvamVjdChlZGl0UHJvamVjdElkLnZhbHVlLCBlZGl0UHJvamVjdE5hbWUudmFsdWUsIGVkaXRQcm9qZWN0RGVzYy52YWx1ZSk7XG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG5cblxuYWRkVGFza3RvUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgbGV0IHNlbGVjdGVkUHJvamVjdElkID0gYWRkVGFza3RvUHJvamVjdEZvcm1JZC52YWx1ZTtcbiAgbGV0IHNlbGVjdGVkVGFza0luZGV4ID0gc2VsZWN0VGFzay52YWx1ZTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgYWRkVGFza3RvUHJvamVjdChzZWxlY3RlZFByb2plY3RJZCwgc2VsZWN0ZWRUYXNrSW5kZXgpO1xuICBsb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuIiwiaW1wb3J0IHsgZnVsbERlbGV0ZVRhc2ssIGRlbGV0ZVRhc2tGcm9tQXJyYXkgfSBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IHsgYWxsUHJvamVjdHMsIGRlbGV0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgZmluZEluZGV4QnlJZCB9IGZyb20gXCIuL2hlbHBlcnNcIjtcblxuY29uc3QgdGFza0FyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tBcmVhQ29udGVudFwiKTtcbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TGlzdFwiKTtcblxuLy9ET00gVXRpbHNcbmNvbnN0IGNyZWF0ZURlbGV0ZUJ0biA9IChlbGVtZW50KSA9PiB7XG4gIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChlbGVtZW50ICsgXCJEZWxldGVCdG5cIik7XG4gIHJldHVybiBkZWxldGVCdG47XG59O1xuXG5jb25zdCBjcmVhdGVFZGl0QnRuID0gKGVsZW1lbnQpID0+IHtcbiAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChlbGVtZW50ICsgXCJFZGl0QnRuXCIpO1xuICAvL2FkZCBwcm9qZWN0IElEIGhlcmVcbiAgcmV0dXJuIGVkaXRCdG47XG59O1xuXG5jb25zdCBjcmVhdGVSZW1vdmVCdG4gPSAocHJvamVjdCkgPT4ge1xuICBsZXQgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmVtb3ZlQnRuLnRleHRDb250ZW50ID0gXCJSZW1vdmUgRnJvbSBQcm9qZWN0XCI7XG4gIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlQnRuXCIpO1xuICAvL1Byb2plY3QgSUQgd2lsbCBiZSB1c2VkIHRvIGlkZW50aWZ5IHdoaWNoIHByb2plY3QgdGFzayBzaG91bGQgYmUgcmVtb3ZlZCBmcm9tXG4gIHJlbW92ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIiwgcHJvamVjdC5pZClcbiAgcmV0dXJuIHJlbW92ZUJ0bjtcbn07XG5cbmNvbnN0IGNyZWF0ZUFkZFRhc2tCdG4gPSAocHJvamVjdCkgPT4ge1xuICBsZXQgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcImFkZFRhc2tCdG5cIik7XG4gIC8vUHJvamVjdCBJRCB3aWxsIGJlIHVzZWQgdG8gaWRlbnRpZnkgd2hpY2ggcHJvamVjdCB0YXNrIHNob3VsZCBiZSBhZGRlZCB0b1xuICBhZGRUYXNrQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLCBwcm9qZWN0LmlkKVxuICByZXR1cm4gYWRkVGFza0J0bjtcbn07XG5cblxuY29uc3QgY3JlYXRlUHJvamVjdEJ0bnMgPSAocHJvamVjdCkgPT4ge1xuICBsZXQgcHJvamVjdEJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RCdG5EaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RCdG5EaXZcIik7XG4gIGxldCBwcm9qZWN0RGVsZXRlQnRuID0gY3JlYXRlRGVsZXRlQnRuKFwicHJvamVjdFwiKTtcbiAgcHJvamVjdEJ0bkRpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlQnRuKTtcbiAgXG4gIGxldCBwcm9qZWN0RWRpdEJ0biA9IGNyZWF0ZUVkaXRCdG4oXCJwcm9qZWN0XCIpO1xuICBwcm9qZWN0QnRuRGl2LmFwcGVuZENoaWxkKHByb2plY3RFZGl0QnRuKTtcblxuICBsZXQgYWRkVGFza0J0biA9IGNyZWF0ZUFkZFRhc2tCdG4ocHJvamVjdCk7XG4gIHByb2plY3RCdG5EaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG5cbiAgcmV0dXJuIHByb2plY3RCdG5EaXY7XG59XG5cblxuY29uc3QgZGlzcGxheVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RDb250YWluZXJcIik7XG4gIHRhc2tBcmVhLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuXG4gIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gIGxldCBwcm9qZWN0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcm9qZWN0RGVzYy50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzYztcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGVzYyk7XG5cbiAgcHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0LmlkKTtcblxuICBpZihwcm9qZWN0LmlkICE9PSBcImRlZmF1bHRcIil7XG4gIGxldCBwcm9qZWN0QnRucyA9IGNyZWF0ZVByb2plY3RCdG5zKHByb2plY3QpO1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RCdG5zKTtcbiAgfVxufTtcblxuY29uc3QgZGlzcGxheVRhc2sgPSAodGFzaywgcHJvamVjdCkgPT4ge1xuICBsZXQgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tDb250YWluZXJcIik7XG4gIHRhc2tBcmVhLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuXG4gIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuXG4gIGxldCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzYztcbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzYyk7XG5cbiAgdGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0YXNrLmlkKTtcblxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZURlbGV0ZUJ0bihcInRhc2tcIikpO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVkaXRCdG4oXCJ0YXNrXCIpKTtcblxuICBpZihwcm9qZWN0ICE9PSBhbGxQcm9qZWN0c1swXSkge1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUmVtb3ZlQnRuKHByb2plY3QpKTtcbiAgfVxufTtcblxuY29uc3QgZGlzcGxheVRhc2tzID0gKHByb2plY3QpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgZGlzcGxheVRhc2socHJvamVjdC50YXNrc1tpXSwgcHJvamVjdCk7XG4gIH1cbn07XG5cbmNvbnN0IGNsZWFyUHJvamVjdFRhc2tzID0gKCkgPT4ge1xuICB0YXNrQXJlYS50ZXh0Q29udGVudCA9IFwiXCI7XG59O1xuXG5jb25zdCBkZWxldGVOb2RlID0gKGlkKSA9PiB7XG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBlbGVtZW50LnJlbW92ZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlQcm9qZWN0V2l0aFRhc2tzID0gKHByb2plY3QpID0+IHtcbiAgY2xlYXJQcm9qZWN0VGFza3MoKTtcbiAgZGlzcGxheVByb2plY3QocHJvamVjdCk7XG4gIGRpc3BsYXlUYXNrcyhwcm9qZWN0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0TGluayA9IChwcm9qZWN0KSA9PiB7XG4gIGxldCBwcm9qZWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgcHJvamVjdExpbmsuY2xhc3NMaXN0LmFkZChcInByb2plY3RMaW5rXCIpO1xuICBwcm9qZWN0TGluay5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiYnV0dG9uXCIpO1xuICBwcm9qZWN0TGluay50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdExpbmspO1xufTtcbi8vRU5EIERPTVV0aWxzXG5cblxuLy9Jbml0IER5bmFtaWMgQ29udGVudCBvbiBOZXcgUGFnZSBMb2FkIFxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdER5bmFtaWNDb250ZW50KCkge1xuICAvL09uIG5ldyBsb2FkLCBhdXRvIGRpc3BsYXkgYWxsIHRhc2tzXG4gIGRpc3BsYXlQcm9qZWN0V2l0aFRhc2tzKGFsbFByb2plY3RzWzBdKTtcblxuICAvL09uIG5ldyBsb2FkLCBhdXRvIGRpc3BsYXkgbGlua3MgdG8gYWxsIHByb2plY3RzIFxuICAoKCkgPT4ge1xuICAgIGZvcihsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0cyl7XG4gICAgICBhZGRQcm9qZWN0TGluayhwcm9qZWN0KTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgLy9EaXNwbGF5IHByb2plY3QgaW5mbyBhZnRlciBjbGlja2luZyBvbiBlYWNoIHBhZ2VcbiAgcHJvamVjdExpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gXCJMSVwiKSB7XG4gICAgICBsZXQgcHJvamVjdE5hbWUgPSBldmVudC50YXJnZXQuaW5uZXJUZXh0O1xuICAgICAgbGV0IHByb2plY3RJbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleChcbiAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PSBwcm9qZWN0TmFtZVxuICAgICAgKTtcbiAgICAgIGRpc3BsYXlQcm9qZWN0V2l0aFRhc2tzKGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgLy9NYWluIENvbnRlbnQgTGlzdGVuZXJzXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFza0RlbGV0ZUJ0blwiKSkge1xuICAgICAgZnVsbERlbGV0ZVRhc2soZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xuICAgICAgZGVsZXRlTm9kZShldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZCk7XG4gICAgfVxuICB9KTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3REZWxldGVCdG5cIikpIHtcbiAgICBkZWxldGVQcm9qZWN0KGV2ZW50LnRhcmdldC5pZCk7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVtb3ZlQnRuXCIpKSB7XG4gICAgLy90YWtlcyBwYXJhbWV0ZXJzIGZvciBwcm9qZWN0IGlkLCB0YXNrIGlkXG4gICAgbGV0IGV2ZW50UHJvamVjdElkID0gZmluZEluZGV4QnlJZChhbGxQcm9qZWN0cywgZXZlbnQudGFyZ2V0LmRhdGFzZXQucHJvamVjdCk7XG4gICAgZGVsZXRlVGFza0Zyb21BcnJheShhbGxQcm9qZWN0c1tldmVudFByb2plY3RJZF0udGFza3MsIGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkKVxuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG59KTtcblxuLy9lbmQgaW5pdER5bmFtaWNDb250ZW50XG5cblxuXG4iLCJpbXBvcnQgeyBhbGxUYXNrcyB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmV4cG9ydCBjb25zdCB1SWQgPSAoKSA9PiB7XG4gIHJldHVybiBEYXRlLm5vdygpLnRvU3RyaW5nKDM2KSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kSW5kZXhCeUlkID0gKGFycmF5LCBpZE51bSkgPT4ge1xuICByZXR1cm4gYXJyYXkuZmluZEluZGV4KCh4KSA9PiB4LmlkID09PSBpZE51bSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlU3RvcmFnZSA9ICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGxUYXNrc1wiLCBKU09OLnN0cmluZ2lmeShhbGxUYXNrcykpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RvcmVkVGFza3MgPSAoKSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5hbGxUYXNrcyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RvcmVkUHJvamVjdHMgPSAoKSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5hbGxQcm9qZWN0cyk7XG59O1xuIiwiLy9QUk9KRUNUU1xuaW1wb3J0IHsgYWRkUHJvamVjdExpbmsgfSBmcm9tIFwiLi9ndWlcIjtcbmltcG9ydCB7IGdldFN0b3JlZFByb2plY3RzLCB1cGRhdGVTdG9yYWdlLCB1SWQsIGZpbmRJbmRleEJ5SWQgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5pbXBvcnQgeyBhbGxUYXNrcyB9IGZyb20gXCIuL3Rhc2tzXCI7XG5cbmV4cG9ydCBsZXQgYWxsUHJvamVjdHMgPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzKCkge1xuICBpZiAoZ2V0U3RvcmVkUHJvamVjdHMpe1xuICBhbGxQcm9qZWN0cyA9IGdldFN0b3JlZFByb2plY3RzKCk7XG59XG59XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjLCB0YXNrcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gICAgdGhpcy5pZCA9IHVJZCgpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUsIGRlc2MsIHRhc2tzKSA9PiB7XG4gIGlmICghQXJyYXkuaXNBcnJheSh0YXNrcykpIHtcbiAgICB0YXNrcyA9IFt0YXNrc107XG4gIH1cbiAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBkZXNjLCB0YXNrcyk7XG4gIGFsbFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIGFkZFByb2plY3RMaW5rKHByb2plY3QpO1xuICB1cGRhdGVTdG9yYWdlKCk7XG59O1xuXG4vL0NyZWF0ZXMgZGVmYXVsdCBwcm9qZWN0IHRvIHVzZSBvbiBmaXJzdCBwYWdlIGxvYWQuIFxuLy9Ta2lwcyBzdGVwIHRvIGNyZWF0ZSBwcm9qZWN0IGxpbmsgc2luY2UgdGhpcyBpcyBkb25lIG9uIHBhZ2UgaW5pdC4gXG5leHBvcnQgY29uc3QgY3JlYXRlRGVmYXVsdFByb2plY3QgPSAoKSA9PiB7XG4gIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QoXCJBbGwgVGFza3NcIiwgXCJBbiB1bmZpbHRlcmVkIHZpZXcgb2YgYWxsIHRhc2tzXCIsIGFsbFRhc2tzKTtcbiAgcHJvamVjdC5pZCA9IFwiZGVmYXVsdFwiO1xuICBhbGxQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB1cGRhdGVTdG9yYWdlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3RJZCkgPT4ge1xuICBsZXQgaW5kZXggPSBmaW5kSW5kZXhCeUlkKGFsbFByb2plY3RzLCBwcm9qZWN0SWQpO1xuICBhbGxQcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICB1cGRhdGVTdG9yYWdlKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZWRpdFByb2plY3QgPSAoaWQsIG5hbWUsIGRlc2MpID0+IHtcbiAgbGV0IGluZGV4ID0gZmluZEluZGV4QnlJZChhbGxQcm9qZWN0cywgaWQpO1xuICAgIGlmIChuYW1lKSB7XG4gICAgICBhbGxQcm9qZWN0c1tpbmRleF0ubmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIGlmIChkZXNjKSB7XG4gICAgICBhbGxQcm9qZWN0c1tpbmRleF0uZGVzYyA9IGRlc2M7XG4gICAgfVxuICAgIHVwZGF0ZVN0b3JhZ2UoKTtcblxufVxuXG5leHBvcnQgY29uc3QgYWRkVGFza3RvUHJvamVjdCA9IChwcm9qZWN0SWQsIHRhc2tJbmRleCkgPT4ge1xuICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gYWxsUHJvamVjdHNbZmluZEluZGV4QnlJZChhbGxQcm9qZWN0cywgcHJvamVjdElkKV07XG4gIChzZWxlY3RlZFByb2plY3QudGFza3MpLnB1c2goYWxsVGFza3NbdGFza0luZGV4XSk7XG4gIHVwZGF0ZVN0b3JhZ2UoKTtcbn0iLCJpbXBvcnQgeyB1SWQsIGZpbmRJbmRleEJ5SWQsIHVwZGF0ZVN0b3JhZ2UsIGdldFN0b3JlZFRhc2tzIH0gZnJvbSBcIi4vaGVscGVycy5qc1wiO1xuaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuXG5leHBvcnQgbGV0IGFsbFRhc2tzID0gW107XG5pZiAobG9jYWxTdG9yYWdlLmFsbFRhc2tzKSB7XG4gIGFsbFRhc2tzID0gZ2V0U3RvcmVkVGFza3MoKTtcbn1cblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2MpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgdGhpcy5pZCA9IHVJZCgpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrID0gKG5hbWUsIGRlc2MpID0+IHtcbiAgbGV0IHRhc2sgPSBuZXcgVGFzayhuYW1lLCBkZXNjKTtcbiAgYWxsVGFza3MucHVzaCh0YXNrKTtcbiAgdXBkYXRlU3RvcmFnZSgpO1xufTtcblxuaWYgKCFsb2NhbFN0b3JhZ2UuYWxsVGFza3MpIHtcbiAgY3JlYXRlVGFzayhcIlNhbXBsZSBUYXNrXCIsIFwiSGVyZSdzIGFuIGV4YW1wbGUgb2Ygd2hhdCBhIHRhc2sgbG9va3MgbGlrZSFcIik7XG59XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrVG9BcnJheSA9IChhcnJheSwgdGFzaykgPT4ge1xuICBhcnJheS5wdXNoKHRhc2spO1xuICB1cGRhdGVTdG9yYWdlKCk7XG59XG5cbiBleHBvcnQgY29uc3QgZGVsZXRlVGFza0Zyb21BcnJheSA9IChhcnJheSwgdGFza0lkKSA9PiB7XG4gIGxldCBpbmRleCA9IGZpbmRJbmRleEJ5SWQoYXJyYXksIHRhc2tJZCk7XG4gIGlmIChpbmRleCA+IC0xKSB7XG4gICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICB1cGRhdGVTdG9yYWdlKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZnVsbERlbGV0ZVRhc2sgPSAoaWQpID0+IHtcbiAgZGVsZXRlVGFza0Zyb21BcnJheShhbGxUYXNrcywgaWQpO1xuICBmb3IgKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RzKSB7XG4gICAgZGVsZXRlVGFza0Zyb21BcnJheShwcm9qZWN0LnRhc2tzLCBpZCk7XG4gIH1cbn07XG5cbmNvbnN0IGVkaXRUYXNrSW5Qcm9qZWN0ID0gKGlkLCBuYW1lLCBkZXNjLCBwcm9qZWN0VGFza3MpID0+IHtcbiAgbGV0IHRhc2sgPSBwcm9qZWN0VGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT09IGlkKTtcbiAgLy8gSWYgdGhlIHRhc2sgaXMgZm91bmQsIHVwZGF0ZSBpdHMgcHJvcGVydGllc1xuICBpZiAodGFzaykge1xuICAgIGlmIChuYW1lKSB7XG4gICAgICB0YXNrLm5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICBpZiAoZGVzYykge1xuICAgICAgdGFzay5kZXNjID0gZGVzYztcbiAgICB9XG4gIH1cblxufVxuIFxuZXhwb3J0IGNvbnN0IGVkaXRUYXNrID0gKGlkLCBuYW1lLCBkZXNjKSA9PiB7XG4gIGZvciAobGV0IHByb2plY3Qgb2YgYWxsUHJvamVjdHMpe1xuICAgIGVkaXRUYXNrSW5Qcm9qZWN0KGlkLCBuYW1lLCBkZXNjLCBwcm9qZWN0LnRhc2tzKTtcbiAgfVxuICB1cGRhdGVTdG9yYWdlKCk7XG59XG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGFsbFRhc2tzIH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7IHVwZGF0ZVByb2plY3RzLCBjcmVhdGVQcm9qZWN0LCBhbGxQcm9qZWN0cywgY3JlYXRlRGVmYXVsdFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgaW5pdER5bmFtaWNDb250ZW50IH0gZnJvbSBcIi4vZ3VpLmpzXCI7XG5pbXBvcnQgeyBpbml0Rm9ybXMgfSBmcm9tIFwiLi9mb3Jtc1wiO1xuXG4vL0xvYWQgZnJvbSBzdG9yYWdlXG51cGRhdGVQcm9qZWN0cygpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBjaGVja0FsbFRhc2tzID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIC8vV2FpdCBmb3IgIHN0b3JhZ2UgdG8gcG9wdWxhdGVcbiAgICBpZiAoXG4gICAgICBsb2NhbFN0b3JhZ2UuYWxsVGFza3MgPT09IEpTT04uc3RyaW5naWZ5KGFsbFRhc2tzKSAmJlxuICAgICAgbG9jYWxTdG9yYWdlLmFsbFByb2plY3RzID09PSBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cylcbiAgICApIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoY2hlY2tBbGxUYXNrcyk7XG4gICAgICAvL0lmIG5vIHByb2plY3RzIGV4aXN0IHlldCwgY3JlYXRlIGRlZmF1bHQgQWxsIFRhc2tzIHByb2plY3RcbiAgICAgIGlmIChhbGxQcm9qZWN0c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNyZWF0ZURlZmF1bHRQcm9qZWN0KCk7XG4gICAgICB9XG4gICAgICAvL0FkZCBhbGwgc3RvcmVkIHRhc2tzIHRvIEFsbCBUYXNrc1xuICAgICAgYWxsUHJvamVjdHNbMF0udGFza3MgPSBhbGxUYXNrcztcbiAgICAgIC8vSW5pdCBwYWdlXG4gICAgICBpbml0RHluYW1pY0NvbnRlbnQoKTtcbiAgICAgIGluaXRGb3JtcygpO1xuICAgIH1cbiAgfSwgMTAwKTsgLy8gQ2hlY2sgZXZlcnkgMTAwIG1pbGxpc2Vjb25kc1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=