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
  let addTasktoProjectFormHeader = document.getElementById("addTasktoProjectHeader");
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

   for (let i =1; i < _tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks.length; i++) {
    //If a task can NOT be found in array of current project, then include it in the list of options
    if (((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findIndexById)(currentProject.tasks, _tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks[i].id)) === -1){
      availableTasks.push(_tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks[i]);
    }
   }

    for (let i = 1; i < availableTasks.length; i++) {
      let taskOption = document.createElement("option");
      taskOption.textContent = availableTasks[i].name;
      taskOption.value = availableTasks[i].value;
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

  const addHeaderToTaskAddForm = (project) => {
    let currentProject = _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findIndexById)(_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects, project)];
    addTasktoProjectFormHeader.textContent = "Add Task For " + currentProject.name;
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
        addHeaderToTaskAddForm(event.srcElement.dataset.project);
        formRefreshTaskOptions(event.srcElement.dataset.project);
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
    let selectProject = document.getElementById("selectProject").value;
    if (selectProject !== "no project") {
      (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.addTaskToArray)(_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[selectProject].tasks, task);
      (0,_gui__WEBPACK_IMPORTED_MODULE_3__.displayProjectWithTasks)(_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[selectProject]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJIQUEwQztBQUN0Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsT0FBTyxRQUFRLFlBQVksT0FBTyxZQUFZLGlCQUFpQixVQUFVLE1BQU0sWUFBWSxPQUFPLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxPQUFPLFVBQVUsVUFBVSxPQUFPLFlBQVksU0FBUyxVQUFVLE1BQU0sYUFBYSxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUs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L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL3NyYy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL3NyYy9ndWkuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3N1bnNldF9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLypTdGFydCBDU1MgUmVzZXQgQ29kZVxuLyogQm94IHNpemluZyBydWxlcyAqL1xuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXG5ib2R5LFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmZpZ3VyZSxcbmJsb2NrcXVvdGUsXG5kbCxcbmRkIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cbnVsW3JvbGU9J2xpc3QnXSxcbm9sW3JvbGU9J2xpc3QnXSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cbmh0bWw6Zm9jdXMtd2l0aGluIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbmh0bWwsIGJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xuYTpub3QoW2NsYXNzXSkge1xuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG59XG5cbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cbmltZyxcbnBpY3R1cmUge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cbmlucHV0LFxuYnV0dG9uLFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICBmb250OiBpbmhlcml0O1xufVxuXG4vKkVuZCBSZXNldCBDb2RlKi9cblxuLypHbG9iYWwgYW5kIFNoYXJlZCBTdHlsZXMqL1xuOnJvb3Qge1xuICAtLWNvbG9yMTogI2NhNWM1NDtcbiAgLS1jb2xvcjI6ICMxNTRjNzk7XG4gIGZvbnQtZmFtaWx5OiBcIlNlblwiLCBzYW5zLXNlcmlmO1xufVxuXG5odG1sIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi8qRm9ybXMqL1xuLmZvcm1XcmFwcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNzgpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmZvcm1zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMzAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmZvcm0gaDMge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uY2xvc2VCdG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogM3B4O1xuICBjb2xvcjogdmFyKC0tY29sb3IxKVxufVxuXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBjbGVhcjogYm90aDtcbiAgYm9yZGVyOiAxcHggZ3JleSBzb2xpZDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbnNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uZm9ybUZpZWxkcyBsYWJlbCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuI25vUHJvamVjdE5vdGUge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiBncmV5O1xufVxuXG5cbi8qTWFpbiBQYWdlIExheW91dCovXG5cbiNzaWRlYmFyIHtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgZ3JleTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzA2MDA7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuI3dyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICBtYXgtaGVpZ2h0OiA5MHZoO1xuICBvdmVyZmxvdzogY2xpcDtcbn1cblxuI3NpZGViYXIsICN0YXNrQXJlYSB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IGNhbGMoOTB2aCAtIDM1cHgpO1xufVxuXG4jbWFpbkNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG9wYWNpdHk6IDk1JTtcbn1cblxuI3Rhc2tBcmVhSGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDcwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0Q29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnRhc2tDb250YWluZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5cbi8qQnV0dG9ucyBhbmQgTGlua3MqL1xuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDVweCAwO1xufVxuXG5saS5wcm9qZWN0TGluaywgYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yMSk7XG59XG5cbmxpLnByb2plY3RMaW5rOmhvdmVyLCBidXR0b246aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3IyKVxufVxuXG4jbmV3VGFza0J0biwgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl17XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgei1pbmRleDogNTtcbn1cblxuI25ld1Rhc2tCdG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4MHB4O1xufVxuXG4jbmV3VGFza0J0bjpob3ZlciwgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl06aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5idXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7cUJBQ3FCO0FBQ3JCOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUEsMEJBQTBCO0FBQzFCOzs7Ozs7Ozs7Ozs7RUFZRSxTQUFTO0FBQ1g7O0FBRUEsMkdBQTJHO0FBQzNHOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUEsMERBQTBEO0FBQzFEO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBLG9DQUFvQztBQUNwQzs7RUFFRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQSx5Q0FBeUM7QUFDekM7Ozs7RUFJRSxhQUFhO0FBQ2Y7O0FBRUEsaUJBQWlCOztBQUVqQiwyQkFBMkI7QUFDM0I7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZOztBQUVkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOzs7QUFHQSxRQUFRO0FBQ1I7RUFDRSxzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1I7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOzs7QUFHQSxtQkFBbUI7O0FBRW5CO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtREFBMEM7RUFDMUMsc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7O0FBR0Esb0JBQW9COztBQUVwQjtFQUNFLHdDQUF3QztFQUN4QyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDs7O0FBR0E7RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypTdGFydCBDU1MgUmVzZXQgQ29kZVxcbi8qIEJveCBzaXppbmcgcnVsZXMgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuZmlndXJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cXG51bFtyb2xlPSdsaXN0J10sXFxub2xbcm9sZT0nbGlzdCddIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cXG5hOm5vdChbY2xhc3NdKSB7XFxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcsXFxucGljdHVyZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKkVuZCBSZXNldCBDb2RlKi9cXG5cXG4vKkdsb2JhbCBhbmQgU2hhcmVkIFN0eWxlcyovXFxuOnJvb3Qge1xcbiAgLS1jb2xvcjE6ICNjYTVjNTQ7XFxuICAtLWNvbG9yMjogIzE1NGM3OTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2VuXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG4vKkZvcm1zKi9cXG4uZm9ybVdyYXBzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNzgpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4uZm9ybXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiAzMCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICB6LWluZGV4OiAxMDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICB3aWR0aDogMzUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuZm9ybSBoMyB7XFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbn1cXG5cXG4uY2xvc2VCdG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDVweDtcXG4gIHRvcDogM3B4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMSlcXG59XFxuXFxuaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjbGVhcjogYm90aDtcXG4gIGJvcmRlcjogMXB4IGdyZXkgc29saWQ7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbnNlbGVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvcm1GaWVsZHMgbGFiZWwge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuI25vUHJvamVjdE5vdGUge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcblxcbi8qTWFpbiBQYWdlIExheW91dCovXFxuXFxuI3NpZGViYXIge1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgZ3JleTtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3MDYwMDtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi9zdW5zZXRfYmFja2dyb3VuZC5qcGcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jd3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIG1heC1oZWlnaHQ6IDkwdmg7XFxuICBvdmVyZmxvdzogY2xpcDtcXG59XFxuXFxuI3NpZGViYXIsICN0YXNrQXJlYSB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBoZWlnaHQ6IGNhbGMoOTB2aCAtIDM1cHgpO1xcbn1cXG5cXG4jbWFpbkNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvcGFjaXR5OiA5NSU7XFxufVxcblxcbiN0YXNrQXJlYUhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuXFxuLypCdXR0b25zIGFuZCBMaW5rcyovXFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogNXB4IDA7XFxufVxcblxcbmxpLnByb2plY3RMaW5rLCBidXR0b24ge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMSk7XFxufVxcblxcbmxpLnByb2plY3RMaW5rOmhvdmVyLCBidXR0b246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMilcXG59XFxuXFxuI25ld1Rhc2tCdG4sIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgei1pbmRleDogNTtcXG59XFxuXFxuI25ld1Rhc2tCdG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDgwcHg7XFxufVxcblxcbiNuZXdUYXNrQnRuOmhvdmVyLCBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG5idXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBhbGxQcm9qZWN0cywgY3JlYXRlUHJvamVjdCwgZWRpdFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgZmluZEluZGV4QnlJZCB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCB7IGFsbFRhc2tzLCBjcmVhdGVUYXNrLCBhZGRUYXNrVG9BcnJheSwgZWRpdFRhc2sgfSBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RXaXRoVGFza3MgfSBmcm9tIFwiLi9ndWlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRGb3JtcygpIHtcbiAgbGV0IGlzRm9ybVNob3duID0gZmFsc2U7XG5cbiAgLy9OZXcgVGFzayBGb3JtIEVsZW1lbnRzXG4gIGNvbnN0IG5ld1Rhc2tGb3JtV3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza0Zvcm1XcmFwXCIpO1xuICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza0Zvcm1cIik7XG4gIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tCdG5cIik7XG4gIGNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdFByb2plY3RcIik7XG4gIGNvbnN0IG5vUHJvamVjdE5vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vUHJvamVjdE5vdGVcIik7XG4gIGxldCBuZXdUYXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza05hbWVcIik7XG4gIGxldCBuZXdUYXNrRGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza0Rlc2NcIik7XG5cbiAgLy9FZGl0IFRhc2sgRm9ybSBFbGVtZW50c1xuICBjb25zdCBlZGl0VGFza0Zvcm1XcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0VGFza0Zvcm1XcmFwXCIpO1xuICBjb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRUYXNrRm9ybVwiKTtcbiAgbGV0IGVkaXRUYXNrSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRUYXNrSWRcIik7XG4gIGxldCBlZGl0VGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRUYXNrTmFtZVwiKTtcbiAgbGV0IGVkaXRUYXNrRGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFRhc2tEZXNjXCIpO1xuXG4gIC8vTmV3IFByb2plY3QgRm9ybSBGaWVsZHNcbiAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEJ0blwiKTtcbiAgY29uc3QgbmV3UHJvamVjdEZvcm1XcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0Rm9ybVdyYXBcIik7XG4gIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0Rm9ybVwiKTtcbiAgbGV0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0TmFtZVwiKTtcbiAgbGV0IG5ld1Byb2plY3REZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0RGVzY1wiKTtcblxuICAvL0VkaXQgUHJvamVjdCBGb3JtIEZpZWxkc1xuICBsZXQgZWRpdFByb2plY3RJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFByb2plY3RJZFwiKTtcbiAgbGV0IGVkaXRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFByb2plY3ROYW1lXCIpO1xuICBsZXQgZWRpdFByb2plY3REZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0UHJvamVjdERlc2NcIik7XG5cbiAgLy9BZGQgVGFzayB0byBQcm9qZWN0IEZvcm0gRmllbGRzXG4gIGxldCBhZGRUYXNrdG9Qcm9qZWN0Rm9ybVdyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2t0b1Byb2plY3RGb3JtV3JhcFwiKTtcbiAgbGV0IGFkZFRhc2t0b1Byb2plY3RGb3JtSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrdG9Qcm9qZWN0SGVhZGVyXCIpO1xuICBsZXQgc2VsZWN0VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0VGFza1wiKTtcblxuICAvL0dlbmVyYXRlIER5bm1haWMgRm9ybSBDb250ZW50XG4gIGNvbnN0IGZvcm1SZWZyZXNoUHJvamVjdE9wdGlvbnMgPSAoKSA9PiB7XG4gICAgLy9MaXN0IGFsbCBwcm9qZWN0IG9wdGlvbnMsIG9ubHkgaWYgcHJvamVjdHMgb3RoZXIgdGhhbiBkZWZhdWx0IHByb2plY3QgZXhpc3RcbiAgICBpZiAoYWxsUHJvamVjdHMubGVuZ3RoID4gMSkge1xuICAgICAgbm9Qcm9qZWN0Tm90ZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgc2VsZWN0UHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgc2VsZWN0UHJvamVjdC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAvL1NraXBzIGRlZmF1bHQgJ0FsbCBQcm9qZWN0cycgYXQgSW5kZXggMFxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHByb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBhbGxQcm9qZWN0c1tpXS5uYW1lO1xuICAgICAgICBwcm9qZWN0T3B0aW9uLnZhbHVlID0gaTtcbiAgICAgICAgc2VsZWN0UHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKTtcbiAgICAgIH1cbiAgICAgIGxldCBub1Byb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgbm9Qcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gXCJEb24ndCBhZGQgdG8gcHJvamVjdFwiO1xuICAgICAgbm9Qcm9qZWN0T3B0aW9uLnZhbHVlID0gXCJubyBwcm9qZWN0XCI7XG4gICAgICBzZWxlY3RQcm9qZWN0LmFwcGVuZENoaWxkKG5vUHJvamVjdE9wdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdFByb2plY3QuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZm9ybVJlZnJlc2hUYXNrT3B0aW9ucyA9IChwcm9qZWN0SWQpID0+IHtcbiAgIHNlbGVjdFRhc2sudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gYWxsUHJvamVjdHNbZmluZEluZGV4QnlJZChhbGxQcm9qZWN0cywgcHJvamVjdElkKV07XG4gICBsZXQgYXZhaWxhYmxlVGFza3MgPSBbXTtcblxuICAgZm9yIChsZXQgaSA9MTsgaSA8IGFsbFRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy9JZiBhIHRhc2sgY2FuIE5PVCBiZSBmb3VuZCBpbiBhcnJheSBvZiBjdXJyZW50IHByb2plY3QsIHRoZW4gaW5jbHVkZSBpdCBpbiB0aGUgbGlzdCBvZiBvcHRpb25zXG4gICAgaWYgKChmaW5kSW5kZXhCeUlkKGN1cnJlbnRQcm9qZWN0LnRhc2tzLCBhbGxUYXNrc1tpXS5pZCkpID09PSAtMSl7XG4gICAgICBhdmFpbGFibGVUYXNrcy5wdXNoKGFsbFRhc2tzW2ldKTtcbiAgICB9XG4gICB9XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGF2YWlsYWJsZVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGFza09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICB0YXNrT3B0aW9uLnRleHRDb250ZW50ID0gYXZhaWxhYmxlVGFza3NbaV0ubmFtZTtcbiAgICAgIHRhc2tPcHRpb24udmFsdWUgPSBhdmFpbGFibGVUYXNrc1tpXS52YWx1ZTtcbiAgICAgIHNlbGVjdFRhc2suYXBwZW5kQ2hpbGQodGFza09wdGlvbik7XG4gICAgfVxufTtcblxuICBjb25zdCBhdXRvZmlsbFRhc2tFZGl0Rm9ybSA9ICh0YXNrSWQpID0+IHtcbiAgICBsZXQgb3JpZ1Rhc2sgPSBmaW5kSW5kZXhCeUlkKGFsbFRhc2tzLCB0YXNrSWQpO1xuICAgIGVkaXRUYXNrSWQudmFsdWUgPSBhbGxUYXNrc1tvcmlnVGFza10uaWQ7XG4gICAgZWRpdFRhc2tOYW1lLnZhbHVlID0gYWxsVGFza3Nbb3JpZ1Rhc2tdLm5hbWU7XG4gICAgZWRpdFRhc2tEZXNjLnZhbHVlID0gYWxsVGFza3Nbb3JpZ1Rhc2tdLmRlc2M7XG4gIH07XG5cbiAgY29uc3QgYXV0b2ZpbGxQcm9qZWN0RWRpdEZvcm0gPSAocHJvamVjdElkKSA9PiB7XG4gICAgbGV0IG9yaWdQcm9qZWN0ID0gZmluZEluZGV4QnlJZChhbGxQcm9qZWN0cywgcHJvamVjdElkKTtcbiAgICBlZGl0UHJvamVjdElkLnZhbHVlID0gYWxsUHJvamVjdHNbb3JpZ1Byb2plY3RdLmlkO1xuICAgIGVkaXRQcm9qZWN0TmFtZS52YWx1ZSA9IGFsbFByb2plY3RzW29yaWdQcm9qZWN0XS5uYW1lO1xuICAgIGVkaXRQcm9qZWN0RGVzYy52YWx1ZSA9IGFsbFByb2plY3RzW29yaWdQcm9qZWN0XS5kZXNjO1xuICB9O1xuXG4gIGNvbnN0IGFkZEhlYWRlclRvVGFza0FkZEZvcm0gPSAocHJvamVjdCkgPT4ge1xuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGFsbFByb2plY3RzW2ZpbmRJbmRleEJ5SWQoYWxsUHJvamVjdHMsIHByb2plY3QpXTtcbiAgICBhZGRUYXNrdG9Qcm9qZWN0Rm9ybUhlYWRlci50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2sgRm9yIFwiICsgY3VycmVudFByb2plY3QubmFtZTtcbiAgfVxuXG4gIC8vRm9ybSBIZWxwZXIgRnVuY3Rpb25zXG4gIGNvbnN0IGhpZGVGb3JtID0gKGZvcm0pID0+IHtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgaXNGb3JtU2hvd24gPSBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBzaG93Rm9ybSA9IChmb3JtKSA9PiB7XG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIGlzRm9ybVNob3duID0gdHJ1ZTtcbiAgfTtcblxuICAvL09wZW4gRm9ybXNcbiAgbmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICghaXNGb3JtU2hvd24pIHtcbiAgICAgIGZvcm1SZWZyZXNoUHJvamVjdE9wdGlvbnMoKTtcbiAgICAgIHNob3dGb3JtKG5ld1Rhc2tGb3JtV3JhcCk7XG4gICAgfVxuICB9KTtcblxuICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKCFpc0Zvcm1TaG93bikge1xuICAgICAgc2hvd0Zvcm0obmV3UHJvamVjdEZvcm1XcmFwKTtcbiAgICB9XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRhc2tFZGl0QnRuXCIpKSB7XG4gICAgICBpZiAoIWlzRm9ybVNob3duKSB7XG4gICAgICAgIGF1dG9maWxsVGFza0VkaXRGb3JtKGV2ZW50LnNyY0VsZW1lbnQucGFyZW50Tm9kZS5pZCk7XG4gICAgICAgIHNob3dGb3JtKGVkaXRUYXNrRm9ybVdyYXApO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdEVkaXRCdG5cIikpIHtcbiAgICAgIGlmICghaXNGb3JtU2hvd24pIHtcbiAgICAgICAgYXV0b2ZpbGxQcm9qZWN0RWRpdEZvcm0oZXZlbnQuc3JjRWxlbWVudC5kYXRhc2V0LnByb2plY3QpO1xuICAgICAgICBzaG93Rm9ybShlZGl0UHJvamVjdEZvcm1XcmFwKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFkZFRhc2tCdG5cIikpIHtcbiAgICAgIGlmICghaXNGb3JtU2hvd24pIHtcbiAgICAgICAgYWRkSGVhZGVyVG9UYXNrQWRkRm9ybShldmVudC5zcmNFbGVtZW50LmRhdGFzZXQucHJvamVjdCk7XG4gICAgICAgIGZvcm1SZWZyZXNoVGFza09wdGlvbnMoZXZlbnQuc3JjRWxlbWVudC5kYXRhc2V0LnByb2plY3QpO1xuICAgICAgICBzaG93Rm9ybShhZGRUYXNrdG9Qcm9qZWN0Rm9ybVdyYXApO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cblxuICAvL0Nsb3NlIEZvcm1zXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNsb3NlQnRuXCIpKSB7XG4gICAgICBoaWRlRm9ybShldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vSGFuZGxlIEZvcm0gU3VibWl0c1xuICBjb25zdCBmb3JtSGFuZGxlU2VsZWN0ZWRQcm9qZWN0ID0gKHRhc2spID0+IHtcbiAgICBsZXQgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0UHJvamVjdFwiKS52YWx1ZTtcbiAgICBpZiAoc2VsZWN0UHJvamVjdCAhPT0gXCJubyBwcm9qZWN0XCIpIHtcbiAgICAgIGFkZFRhc2tUb0FycmF5KGFsbFByb2plY3RzW3NlbGVjdFByb2plY3RdLnRhc2tzLCB0YXNrKTtcbiAgICAgIGRpc3BsYXlQcm9qZWN0V2l0aFRhc2tzKGFsbFByb2plY3RzW3NlbGVjdFByb2plY3RdKTtcbiAgICB9XG4gIH07XG5cbiAgbmV3VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNyZWF0ZVRhc2sobmV3VGFza05hbWUudmFsdWUsIG5ld1Rhc2tEZXNjLnZhbHVlKTtcbiAgICBpZiAoYWxsUHJvamVjdHMubGVuZ3RoID4gMSkge1xuICAgICAgZm9ybUhhbmRsZVNlbGVjdGVkUHJvamVjdChhbGxUYXNrc1thbGxUYXNrcy5sZW5ndGggLSAxXSk7XG4gICAgfVxuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9KTtcblxuICBlZGl0VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGVkaXRUYXNrKGVkaXRUYXNrSWQudmFsdWUsIGVkaXRUYXNrTmFtZS52YWx1ZSwgZWRpdFRhc2tEZXNjLnZhbHVlKTtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG59XG5cbm5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNyZWF0ZVByb2plY3QobmV3UHJvamVjdE5hbWUudmFsdWUsIG5ld1Byb2plY3REZXNjLnZhbHVlLCBbXSk7XG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG5cbmVkaXRQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBlZGl0UHJvamVjdChlZGl0UHJvamVjdElkLnZhbHVlLCBlZGl0UHJvamVjdE5hbWUudmFsdWUsIGVkaXRQcm9qZWN0RGVzYy52YWx1ZSk7XG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG4iLCJpbXBvcnQgeyBmdWxsRGVsZXRlVGFzaywgZGVsZXRlVGFza0Zyb21BcnJheSB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgeyBhbGxQcm9qZWN0cywgZGVsZXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBmaW5kSW5kZXhCeUlkIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuXG5jb25zdCB0YXNrQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0FyZWFDb250ZW50XCIpO1xuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RMaXN0XCIpO1xuXG4vL0RPTSBVdGlsc1xuY29uc3QgY3JlYXRlRGVsZXRlQnRuID0gKGVsZW1lbnQpID0+IHtcbiAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKGVsZW1lbnQgKyBcIkRlbGV0ZUJ0blwiKTtcbiAgcmV0dXJuIGRlbGV0ZUJ0bjtcbn07XG5cbmNvbnN0IGNyZWF0ZUVkaXRCdG4gPSAoZWxlbWVudCkgPT4ge1xuICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKGVsZW1lbnQgKyBcIkVkaXRCdG5cIik7XG4gIC8vYWRkIHByb2plY3QgSUQgaGVyZVxuICByZXR1cm4gZWRpdEJ0bjtcbn07XG5cbmNvbnN0IGNyZWF0ZVJlbW92ZUJ0biA9IChwcm9qZWN0KSA9PiB7XG4gIGxldCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICByZW1vdmVCdG4udGV4dENvbnRlbnQgPSBcIlJlbW92ZSBGcm9tIFByb2plY3RcIjtcbiAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVCdG5cIik7XG4gIC8vUHJvamVjdCBJRCB3aWxsIGJlIHVzZWQgdG8gaWRlbnRpZnkgd2hpY2ggcHJvamVjdCB0YXNrIHNob3VsZCBiZSByZW1vdmVkIGZyb21cbiAgcmVtb3ZlQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLCBwcm9qZWN0LmlkKVxuICByZXR1cm4gcmVtb3ZlQnRuO1xufTtcblxuY29uc3QgY3JlYXRlQWRkVGFza0J0biA9IChwcm9qZWN0KSA9PiB7XG4gIGxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkVGFza0J0blwiKTtcbiAgLy9Qcm9qZWN0IElEIHdpbGwgYmUgdXNlZCB0byBpZGVudGlmeSB3aGljaCBwcm9qZWN0IHRhc2sgc2hvdWxkIGJlIGFkZGVkIHRvXG4gIGFkZFRhc2tCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIsIHByb2plY3QuaWQpXG4gIHJldHVybiBhZGRUYXNrQnRuO1xufTtcblxuXG5jb25zdCBjcmVhdGVQcm9qZWN0QnRucyA9IChwcm9qZWN0KSA9PiB7XG4gIGxldCBwcm9qZWN0QnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdEJ0bkRpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEJ0bkRpdlwiKTtcbiAgbGV0IHByb2plY3REZWxldGVCdG4gPSBjcmVhdGVEZWxldGVCdG4oXCJwcm9qZWN0XCIpO1xuICBwcm9qZWN0QnRuRGl2LmFwcGVuZENoaWxkKHByb2plY3REZWxldGVCdG4pO1xuICBcbiAgbGV0IHByb2plY3RFZGl0QnRuID0gY3JlYXRlRWRpdEJ0bihcInByb2plY3RcIik7XG4gIHByb2plY3RCdG5EaXYuYXBwZW5kQ2hpbGQocHJvamVjdEVkaXRCdG4pO1xuXG4gIGxldCBhZGRUYXNrQnRuID0gY3JlYXRlQWRkVGFza0J0bihwcm9qZWN0KTtcbiAgcHJvamVjdEJ0bkRpdi5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcblxuICByZXR1cm4gcHJvamVjdEJ0bkRpdjtcbn1cblxuXG5jb25zdCBkaXNwbGF5UHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdENvbnRhaW5lclwiKTtcbiAgdGFza0FyZWEuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG5cbiAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgbGV0IHByb2plY3REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2plY3REZXNjLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjO1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REZXNjKTtcblxuICBwcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3QuaWQpO1xuXG4gIGlmKHByb2plY3QuaWQgIT09IFwiZGVmYXVsdFwiKXtcbiAgbGV0IHByb2plY3RCdG5zID0gY3JlYXRlUHJvamVjdEJ0bnMocHJvamVjdCk7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bnMpO1xuICB9XG59O1xuXG5jb25zdCBkaXNwbGF5VGFzayA9ICh0YXNrLCBwcm9qZWN0KSA9PiB7XG4gIGxldCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza0NvbnRhaW5lclwiKTtcbiAgdGFza0FyZWEuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG5cbiAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG5cbiAgbGV0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tEZXNjLnRleHRDb250ZW50ID0gdGFzay5kZXNjO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZXNjKTtcblxuICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIHRhc2suaWQpO1xuXG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRGVsZXRlQnRuKFwidGFza1wiKSk7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWRpdEJ0bihcInRhc2tcIikpO1xuXG4gIGlmKHByb2plY3QgIT09IGFsbFByb2plY3RzWzBdKSB7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVSZW1vdmVCdG4ocHJvamVjdCkpO1xuICB9XG59O1xuXG5jb25zdCBkaXNwbGF5VGFza3MgPSAocHJvamVjdCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QudGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBkaXNwbGF5VGFzayhwcm9qZWN0LnRhc2tzW2ldLCBwcm9qZWN0KTtcbiAgfVxufTtcblxuY29uc3QgY2xlYXJQcm9qZWN0VGFza3MgPSAoKSA9PiB7XG4gIHRhc2tBcmVhLnRleHRDb250ZW50ID0gXCJcIjtcbn07XG5cbmNvbnN0IGRlbGV0ZU5vZGUgPSAoaWQpID0+IHtcbiAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gIGVsZW1lbnQucmVtb3ZlKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZGlzcGxheVByb2plY3RXaXRoVGFza3MgPSAocHJvamVjdCkgPT4ge1xuICBjbGVhclByb2plY3RUYXNrcygpO1xuICBkaXNwbGF5UHJvamVjdChwcm9qZWN0KTtcbiAgZGlzcGxheVRhc2tzKHByb2plY3QpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RMaW5rID0gKHByb2plY3QpID0+IHtcbiAgbGV0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBwcm9qZWN0TGluay5jbGFzc0xpc3QuYWRkKFwicHJvamVjdExpbmtcIik7XG4gIHByb2plY3RMaW5rLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJidXR0b25cIik7XG4gIHByb2plY3RMaW5rLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TGluayk7XG59O1xuLy9FTkQgRE9NVXRpbHNcblxuXG4vL0luaXQgRHluYW1pYyBDb250ZW50IG9uIE5ldyBQYWdlIExvYWQgXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RHluYW1pY0NvbnRlbnQoKSB7XG4gIC8vT24gbmV3IGxvYWQsIGF1dG8gZGlzcGxheSBhbGwgdGFza3NcbiAgZGlzcGxheVByb2plY3RXaXRoVGFza3MoYWxsUHJvamVjdHNbMF0pO1xuXG4gIC8vT24gbmV3IGxvYWQsIGF1dG8gZGlzcGxheSBsaW5rcyB0byBhbGwgcHJvamVjdHMgXG4gICgoKSA9PiB7XG4gICAgZm9yKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RzKXtcbiAgICAgIGFkZFByb2plY3RMaW5rKHByb2plY3QpO1xuICAgIH1cbiAgfSkoKTtcblxuICAvL0Rpc3BsYXkgcHJvamVjdCBpbmZvIGFmdGVyIGNsaWNraW5nIG9uIGVhY2ggcGFnZVxuICBwcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSBcIkxJXCIpIHtcbiAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGV2ZW50LnRhcmdldC5pbm5lclRleHQ7XG4gICAgICBsZXQgcHJvamVjdEluZGV4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KFxuICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09IHByb2plY3ROYW1lXG4gICAgICApO1xuICAgICAgZGlzcGxheVByb2plY3RXaXRoVGFza3MoYWxsUHJvamVjdHNbcHJvamVjdEluZGV4XSk7XG4gICAgfVxuICB9KTtcblxuICAvL01haW4gQ29udGVudCBMaXN0ZW5lcnNcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YXNrRGVsZXRlQnRuXCIpKSB7XG4gICAgICBmdWxsRGVsZXRlVGFzayhldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZCk7XG4gICAgICBkZWxldGVOb2RlKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbiAgICB9XG4gIH0pO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdERlbGV0ZUJ0blwiKSkge1xuICAgIGRlbGV0ZVByb2plY3QoZXZlbnQudGFyZ2V0LmlkKTtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJyZW1vdmVCdG5cIikpIHtcbiAgICAvL3Rha2VzIHBhcmFtZXRlcnMgZm9yIHByb2plY3QgaWQsIHRhc2sgaWRcbiAgICBsZXQgZXZlbnRQcm9qZWN0SWQgPSBmaW5kSW5kZXhCeUlkKGFsbFByb2plY3RzLCBldmVudC50YXJnZXQuZGF0YXNldC5wcm9qZWN0KTtcbiAgICBkZWxldGVUYXNrRnJvbUFycmF5KGFsbFByb2plY3RzW2V2ZW50UHJvamVjdElkXS50YXNrcywgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQpXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cbn0pO1xuXG4vL2VuZCBpbml0RHluYW1pY0NvbnRlbnRcblxuXG5cbiIsImltcG9ydCB7IGFsbFRhc2tzIH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuZXhwb3J0IGNvbnN0IHVJZCA9ICgpID0+IHtcbiAgcmV0dXJuIERhdGUubm93KCkudG9TdHJpbmcoMzYpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRJbmRleEJ5SWQgPSAoYXJyYXksIGlkTnVtKSA9PiB7XG4gIHJldHVybiBhcnJheS5maW5kSW5kZXgoKHgpID0+IHguaWQgPT09IGlkTnVtKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTdG9yYWdlID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGFsbFRhc2tzKSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWxsUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdG9yZWRUYXNrcyA9ICgpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmFsbFRhc2tzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdG9yZWRQcm9qZWN0cyA9ICgpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmFsbFByb2plY3RzKTtcbn07XG4iLCIvL1BST0pFQ1RTXG5pbXBvcnQgeyBhZGRQcm9qZWN0TGluayB9IGZyb20gXCIuL2d1aVwiO1xuaW1wb3J0IHsgZ2V0U3RvcmVkUHJvamVjdHMsIHVwZGF0ZVN0b3JhZ2UsIHVJZCwgZmluZEluZGV4QnlJZCB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCB7IGFsbFRhc2tzIH0gZnJvbSBcIi4vdGFza3NcIjtcblxuZXhwb3J0IGxldCBhbGxQcm9qZWN0cyA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJvamVjdHMoKSB7XG4gIGlmIChnZXRTdG9yZWRQcm9qZWN0cyl7XG4gIGFsbFByb2plY3RzID0gZ2V0U3RvcmVkUHJvamVjdHMoKTtcbn1cbn1cblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2MsIHRhc2tzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgICB0aGlzLmlkID0gdUlkKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSwgZGVzYywgdGFza3MpID0+IHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHRhc2tzKSkge1xuICAgIHRhc2tzID0gW3Rhc2tzXTtcbiAgfVxuICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIGRlc2MsIHRhc2tzKTtcbiAgYWxsUHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgYWRkUHJvamVjdExpbmsocHJvamVjdCk7XG4gIHVwZGF0ZVN0b3JhZ2UoKTtcbn07XG5cbi8vQ3JlYXRlcyBkZWZhdWx0IHByb2plY3QgdG8gdXNlIG9uIGZpcnN0IHBhZ2UgbG9hZC4gXG4vL1NraXBzIHN0ZXAgdG8gY3JlYXRlIHByb2plY3QgbGluayBzaW5jZSB0aGlzIGlzIGRvbmUgb24gcGFnZSBpbml0LiBcbmV4cG9ydCBjb25zdCBjcmVhdGVEZWZhdWx0UHJvamVjdCA9ICgpID0+IHtcbiAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChcIkFsbCBUYXNrc1wiLCBcIkFuIHVuZmlsdGVyZWQgdmlldyBvZiBhbGwgdGFza3NcIiwgYWxsVGFza3MpO1xuICBwcm9qZWN0LmlkID0gXCJkZWZhdWx0XCI7XG4gIGFsbFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIHVwZGF0ZVN0b3JhZ2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdElkKSA9PiB7XG4gIGxldCBpbmRleCA9IGZpbmRJbmRleEJ5SWQoYWxsUHJvamVjdHMsIHByb2plY3RJZCk7XG4gIGFsbFByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gIHVwZGF0ZVN0b3JhZ2UoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBlZGl0UHJvamVjdCA9IChpZCwgbmFtZSwgZGVzYykgPT4ge1xuICBsZXQgaW5kZXggPSBmaW5kSW5kZXhCeUlkKGFsbFByb2plY3RzLCBpZCk7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIGFsbFByb2plY3RzW2luZGV4XS5uYW1lID0gbmFtZTtcbiAgICB9XG4gICAgaWYgKGRlc2MpIHtcbiAgICAgIGFsbFByb2plY3RzW2luZGV4XS5kZXNjID0gZGVzYztcbiAgICB9XG4gICAgdXBkYXRlU3RvcmFnZSgpO1xuXG59XG4iLCJpbXBvcnQgeyB1SWQsIGZpbmRJbmRleEJ5SWQsIHVwZGF0ZVN0b3JhZ2UsIGdldFN0b3JlZFRhc2tzIH0gZnJvbSBcIi4vaGVscGVycy5qc1wiO1xuaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuXG5leHBvcnQgbGV0IGFsbFRhc2tzID0gW107XG5pZiAobG9jYWxTdG9yYWdlLmFsbFRhc2tzKSB7XG4gIGFsbFRhc2tzID0gZ2V0U3RvcmVkVGFza3MoKTtcbn1cblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2MpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgdGhpcy5pZCA9IHVJZCgpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrID0gKG5hbWUsIGRlc2MpID0+IHtcbiAgbGV0IHRhc2sgPSBuZXcgVGFzayhuYW1lLCBkZXNjKTtcbiAgYWxsVGFza3MucHVzaCh0YXNrKTtcbiAgdXBkYXRlU3RvcmFnZSgpO1xufTtcblxuaWYgKCFsb2NhbFN0b3JhZ2UuYWxsVGFza3MpIHtcbiAgY3JlYXRlVGFzayhcIlNhbXBsZSBUYXNrXCIsIFwiSGVyZSdzIGFuIGV4YW1wbGUgb2Ygd2hhdCBhIHRhc2sgbG9va3MgbGlrZSFcIik7XG59XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrVG9BcnJheSA9IChhcnJheSwgdGFzaykgPT4ge1xuICBhcnJheS5wdXNoKHRhc2spO1xuICB1cGRhdGVTdG9yYWdlKCk7XG59XG5cbiBleHBvcnQgY29uc3QgZGVsZXRlVGFza0Zyb21BcnJheSA9IChhcnJheSwgdGFza0lkKSA9PiB7XG4gIGxldCBpbmRleCA9IGZpbmRJbmRleEJ5SWQoYXJyYXksIHRhc2tJZCk7XG4gIGlmIChpbmRleCA+IC0xKSB7XG4gICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICB1cGRhdGVTdG9yYWdlKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZnVsbERlbGV0ZVRhc2sgPSAoaWQpID0+IHtcbiAgZGVsZXRlVGFza0Zyb21BcnJheShhbGxUYXNrcywgaWQpO1xuICBmb3IgKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RzKSB7XG4gICAgZGVsZXRlVGFza0Zyb21BcnJheShwcm9qZWN0LnRhc2tzLCBpZCk7XG4gIH1cbn07XG5cbmNvbnN0IGVkaXRUYXNrSW5Qcm9qZWN0ID0gKGlkLCBuYW1lLCBkZXNjLCBwcm9qZWN0VGFza3MpID0+IHtcbiAgbGV0IHRhc2sgPSBwcm9qZWN0VGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT09IGlkKTtcbiAgLy8gSWYgdGhlIHRhc2sgaXMgZm91bmQsIHVwZGF0ZSBpdHMgcHJvcGVydGllc1xuICBpZiAodGFzaykge1xuICAgIGlmIChuYW1lKSB7XG4gICAgICB0YXNrLm5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICBpZiAoZGVzYykge1xuICAgICAgdGFzay5kZXNjID0gZGVzYztcbiAgICB9XG4gIH1cblxufVxuIFxuZXhwb3J0IGNvbnN0IGVkaXRUYXNrID0gKGlkLCBuYW1lLCBkZXNjKSA9PiB7XG4gIGZvciAobGV0IHByb2plY3Qgb2YgYWxsUHJvamVjdHMpe1xuICAgIGVkaXRUYXNrSW5Qcm9qZWN0KGlkLCBuYW1lLCBkZXNjLCBwcm9qZWN0LnRhc2tzKTtcbiAgfVxuICB1cGRhdGVTdG9yYWdlKCk7XG59XG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGFsbFRhc2tzIH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7IHVwZGF0ZVByb2plY3RzLCBjcmVhdGVQcm9qZWN0LCBhbGxQcm9qZWN0cywgY3JlYXRlRGVmYXVsdFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgaW5pdER5bmFtaWNDb250ZW50IH0gZnJvbSBcIi4vZ3VpLmpzXCI7XG5pbXBvcnQgeyBpbml0Rm9ybXMgfSBmcm9tIFwiLi9mb3Jtc1wiO1xuXG4vL0xvYWQgZnJvbSBzdG9yYWdlXG51cGRhdGVQcm9qZWN0cygpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBjaGVja0FsbFRhc2tzID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIC8vV2FpdCBmb3IgIHN0b3JhZ2UgdG8gcG9wdWxhdGVcbiAgICBpZiAoXG4gICAgICBsb2NhbFN0b3JhZ2UuYWxsVGFza3MgPT09IEpTT04uc3RyaW5naWZ5KGFsbFRhc2tzKSAmJlxuICAgICAgbG9jYWxTdG9yYWdlLmFsbFByb2plY3RzID09PSBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cylcbiAgICApIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoY2hlY2tBbGxUYXNrcyk7XG4gICAgICAvL0lmIG5vIHByb2plY3RzIGV4aXN0IHlldCwgY3JlYXRlIGRlZmF1bHQgQWxsIFRhc2tzIHByb2plY3RcbiAgICAgIGlmIChhbGxQcm9qZWN0c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNyZWF0ZURlZmF1bHRQcm9qZWN0KCk7XG4gICAgICB9XG4gICAgICAvL0FkZCBhbGwgc3RvcmVkIHRhc2tzIHRvIEFsbCBUYXNrc1xuICAgICAgYWxsUHJvamVjdHNbMF0udGFza3MgPSBhbGxUYXNrcztcbiAgICAgIC8vSW5pdCBwYWdlXG4gICAgICBpbml0RHluYW1pY0NvbnRlbnQoKTtcbiAgICAgIGluaXRGb3JtcygpO1xuICAgIH1cbiAgfSwgMTAwKTsgLy8gQ2hlY2sgZXZlcnkgMTAwIG1pbGxpc2Vjb25kc1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=