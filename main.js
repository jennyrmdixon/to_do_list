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

.taskWrapper {
  display: grid;
  grid-template-columns: 98% 2%;
  border-bottom: 1px solid grey;
  padding: 5px;
}

.taskNameWrapper {
  display: flex;
  flex-direction: row;
}

.taskNameWrapper span {
  font-size: 25px;
  padding-right: 6px;
}

span[data-color="none"], span[data-color="undefined"]{
  color:rgba(255, 255, 255, 0);
}

span[data-color="yellow"]{
  color:#EEA663;
}

span[data-color="orange"] {
  color: #EB8153;
}

span[data-color="blue"] {
  color: #3A6F97;
}

span[data-color="purple"] {
  color: #643D4D;
}


.taskNameWrapper h3 {
  align-self: center;
}

.taskContainer p {
  margin-left: 22px
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

/*For alignment*/
.taskDeleteBtn {
  margin-left: 17px;
}

button[type="submit"] {
  margin-top: 20px;
}

.taskArrow {
  font-size: 18px;
  padding: 5px;
}

.taskArrow:hover {
  color: var(--color1);
}

.taskArrow:nth-child(1){
  margin-top: 7px;
}

.taskArrow:nth-child(2){
  margin-top: -15px;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/*Start CSS Reset Code\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\nhtml, body {\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  overflow-x: hidden;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/*End Reset Code*/\n\n/*Global and Shared Styles*/\n:root {\n  --color1: #ca5c54;\n  --color2: #154c79;\n  font-family: \"Sen\", sans-serif;\n}\n\nhtml {\n  min-height: 100%;\n  position: relative;\n}\n\nbody {\n  height: 100%;\n\n}\n\n.hidden {\n  display: none;\n}\n\n\n/*Forms*/\n.formWraps {\n  background-color: rgba(0, 0, 0, 0.178);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.forms {\n  position: absolute;\n  left: 50%;\n  top: 30%;\n  transform: translate(-50%, 0);\n  border: 2px solid grey;\n  z-index: 10;\n  padding: 15px;\n  width: 350px;\n  background-color: white;\n}\n\nform h3 {\n  margin-top: 25px;\n}\n\n.closeBtn {\n  position: absolute;\n  right: 5px;\n  top: 3px;\n  color: var(--color1)\n}\n\ninput, select, textarea {\n  width: 100%;\n  clear: both;\n  border: 1px grey solid;\n  padding: 5px;\n}\n\ntextarea {\n  resize: vertical;\n}\n\nselect {\n  background-color: white;\n}\n\n.formFields label {\n  margin-top: 10px;\n  display: inline-block;\n}\n\n#noProjectNote {\n  font-style: italic;\n  color: grey;\n}\n\n\n/*Main Page Layout*/\n\n#sidebar {\n  border-right: 2px solid grey;\n}\n\n#container {\n  padding: 50px;\n  background-color: #070600;\n  background: url('./sunset_background.jpg');\n  background-size: cover;\n  height: 100vh;\n}\n\n#wrapper {\n  background-color: rgba(255, 255, 255, 0.95);\n  border: 2px solid grey;\n  max-height: 90vh;\n  overflow: clip;\n}\n\n#sidebar, #taskArea {\n  padding: 30px;\n  overflow: auto;\n  height: calc(90vh - 35px);\n}\n\n#mainContent {\n  display: grid;\n  grid-template-columns: 20% 80%;\n  height: 100vh;\n  opacity: 95%;\n}\n\n#taskAreaHeader {\n  text-align: center;\n  height: 70px;\n  display: grid;\n  border-bottom: 2px solid grey;\n  grid-template-columns: 100%;\n  align-items: center;\n}\n\n.projectContainer {\n  margin-bottom: 30px;\n}\n\n.taskWrapper {\n  display: grid;\n  grid-template-columns: 98% 2%;\n  border-bottom: 1px solid grey;\n  padding: 5px;\n}\n\n.taskNameWrapper {\n  display: flex;\n  flex-direction: row;\n}\n\n.taskNameWrapper span {\n  font-size: 25px;\n  padding-right: 6px;\n}\n\nspan[data-color=\"none\"], span[data-color=\"undefined\"]{\n  color:rgba(255, 255, 255, 0);\n}\n\nspan[data-color=\"yellow\"]{\n  color:#EEA663;\n}\n\nspan[data-color=\"orange\"] {\n  color: #EB8153;\n}\n\nspan[data-color=\"blue\"] {\n  color: #3A6F97;\n}\n\nspan[data-color=\"purple\"] {\n  color: #643D4D;\n}\n\n\n.taskNameWrapper h3 {\n  align-self: center;\n}\n\n.taskContainer p {\n  margin-left: 22px\n}\n\n/*Buttons and Links*/\n\nbutton {\n  background-color: rgba(255, 255, 255, 0);\n  border: none;\n  font-weight: bold;\n  margin: 5px 0;\n}\n\nli.projectLink, button {\n  color: var(--color1);\n}\n\nli.projectLink:hover, button:hover {\n  color: var(--color2)\n}\n\n#newTaskBtn, button[type=\"submit\"]{\n  background-color: var(--color1);\n  color: white;\n  padding: 5px 8px;\n  z-index: 5;\n}\n\n#newTaskBtn {\n  position: absolute;\n  right: 80px;\n}\n\n#newTaskBtn:hover, button[type=\"submit\"]:hover{\n  background-color: var(--color2);\n  color: white;\n}\n\n/*For alignment*/\n.taskDeleteBtn {\n  margin-left: 17px;\n}\n\nbutton[type=\"submit\"] {\n  margin-top: 20px;\n}\n\n.taskArrow {\n  font-size: 18px;\n  padding: 5px;\n}\n\n.taskArrow:hover {\n  color: var(--color1);\n}\n\n.taskArrow:nth-child(1){\n  margin-top: 7px;\n}\n\n.taskArrow:nth-child(2){\n  margin-top: -15px;\n}\n\n"],"sourceRoot":""}]);
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
  let newTaskColor = document.getElementById("newTaskColor");


  //Edit Task Form Elements
  const editTaskFormWrap = document.getElementById("editTaskFormWrap");
  const editTaskForm = document.getElementById("editTaskForm");
  let editTaskId = document.getElementById("editTaskId");
  let editTaskName = document.getElementById("editTaskName");
  let editTaskDesc = document.getElementById("editTaskDesc");
  let editTaskColor = document.getElementById("editTaskColor");


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
    editTaskColor.value = _tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks[origTask].color;
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
    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.createTask)(newTaskName.value, newTaskDesc.value, newTaskColor.value);
    if (_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects.length > 1) {
      formHandleSelectedProject(_tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks[_tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks.length - 1]);
    }
    location.reload();
  });

  editTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.editTask)(editTaskId.value, editTaskName.value, editTaskDesc.value, editTaskColor.value);
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

const createEditBtn = (element, project) => {
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add(element + "EditBtn");
  if (project){
  editBtn.setAttribute("data-project", project.id);
}
  return editBtn;
};

const createRemoveBtn = (project) => {
  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove From Project";
  removeBtn.classList.add("removeBtn");
  //Project ID will be used to identify which project task should be removed from
  removeBtn.setAttribute("data-project", project.id);
  return removeBtn;
};

const createAddTaskBtn = (project) => {
  let addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "Add Task";
  addTaskBtn.classList.add("addTaskBtn");
  //Project ID will be used to identify which project task should be added to
  addTaskBtn.setAttribute("data-project", project.id);
  return addTaskBtn;
};

const createProjectBtns = (project) => {
  let projectBtnDiv = document.createElement("div");
  projectBtnDiv.classList.add("projectBtnDiv");

  let projectDeleteBtn = createDeleteBtn("project");
  projectBtnDiv.appendChild(projectDeleteBtn);

  let projectEditBtn = createEditBtn("project", project);
  projectBtnDiv.appendChild(projectEditBtn);

  let addTaskBtn = createAddTaskBtn(project);
  projectBtnDiv.appendChild(addTaskBtn);

  return projectBtnDiv;
};

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

  if (project.id !== "default") {
    let projectBtns = createProjectBtns(project);
    projectContainer.appendChild(projectBtns);
  }
};

const displayTask = (task, project) => {
  let taskWrapper = document.createElement("div");
  taskWrapper.setAttribute("id", "wrapper" + task.id);
  taskWrapper.classList.add("taskWrapper");
  taskArea.appendChild(taskWrapper);

  let taskContainer = document.createElement("div");
  taskContainer.classList.add("taskContainer");
  taskWrapper.appendChild(taskContainer);

  let taskNameWrapper = document.createElement("div");
  taskNameWrapper.classList.add("taskNameWrapper");
  taskContainer.appendChild(taskNameWrapper);

  let taskColor = document.createElement("span");
  taskColor.textContent = "●";
  taskColor.setAttribute("data-color", task.color);
  taskNameWrapper.appendChild(taskColor);

  let taskName = document.createElement("h3");
  taskName.textContent = task.name;
  taskNameWrapper.appendChild(taskName);

  let taskDesc = document.createElement("p");
  taskDesc.textContent = task.desc;
  taskContainer.appendChild(taskDesc);
  taskContainer.setAttribute("id", task.id);

  //displayTask - Buttons
  taskContainer.appendChild(createDeleteBtn("task"));
  taskContainer.appendChild(createEditBtn("task"));

  if (project !== _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects[0]) {
    taskContainer.appendChild(createRemoveBtn(project));
  }

  //displayTask - Arrows
  let taskSideColumn = document.createElement("div");
  taskSideColumn.setAttribute("data-project", project.id);
  taskWrapper.appendChild(taskSideColumn);

  let taskUpButton = document.createElement("div");
  taskUpButton.textContent = "⌃";
  taskUpButton.classList.add("taskArrow");
  taskUpButton.setAttribute("data-direction", "up");
  taskUpButton.setAttribute("data-task", task.id);
  taskSideColumn.appendChild(taskUpButton);

  let taskDownButton = document.createElement("div");
  taskDownButton.textContent = "⌄";
  taskDownButton.classList.add("taskArrow");
  taskDownButton.setAttribute("data-direction", "down");
  taskDownButton.setAttribute("data-task", task.id);
  taskSideColumn.appendChild(taskDownButton);
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

const refreshPage = (projectId) => {
  displayProjectWithTasks(_projects__WEBPACK_IMPORTED_MODULE_1__.allProjects[(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.findIndexById)(_projects__WEBPACK_IMPORTED_MODULE_1__.allProjects, projectId)]);
};

//END DOMUtils

//Init Dynamic Content on New Page Load

function initDynamicContent() {
  //On new load, auto display all tasks
  displayProjectWithTasks(_projects__WEBPACK_IMPORTED_MODULE_1__.allProjects[0]);

  //On new load, auto display links to all projects
  (() => {
    for (let project of _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects) {
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
      //Delete based on task ID
      (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.fullDeleteTask)(event.target.parentNode.id);
      //Delete container node on GUI associated with that ID
      deleteNode(event.target.parentNode.parentNode.id);
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
    let eventProjectIndex = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.findIndexById)(
      _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects,
      event.target.dataset.project
    );
    (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.deleteTaskFromArray)(
      _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects[eventProjectIndex].tasks,
      event.target.parentNode.id
    );
    refreshPage(event.target.dataset.project);
  }
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("taskArrow")) {
    let direction = event.target.dataset.direction;
    let projectId = event.target.parentNode.dataset.project;
    let taskId = event.target.dataset.task;
    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.moveTask)(taskId, projectId, direction);
    refreshPage(projectId);
  }
}); //end initDynamicContent


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
/* harmony export */   moveTask: () => (/* binding */ moveTask),
/* harmony export */   updateProjects: () => (/* binding */ updateProjects)
/* harmony export */ });
/* harmony import */ var _gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gui */ "./src/gui.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
//PROJECTS




let allProjects = [];

function updateProjects() {
  if (_helpers__WEBPACK_IMPORTED_MODULE_1__.getStoredProjects) {
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
  let project = new Project(
    "All Tasks",
    "An unfiltered view of all tasks",
    _tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks
  );
  project.id = "default";
  allProjects.push(project);
  (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.updateStorage)();
};

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
};

const addTasktoProject = (projectId, taskIndex) => {
  let selectedProject = allProjects[(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findIndexById)(allProjects, projectId)];
  selectedProject.tasks.push(_tasks__WEBPACK_IMPORTED_MODULE_2__.allTasks[taskIndex]);
  (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.updateStorage)();
};

const moveTask = (taskId, projectId, direction) => {
  let newIndex;
  let taskList = allProjects[(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findIndexById)(allProjects, projectId)].tasks;
  let oldIndex = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findIndexById)(taskList, taskId);

    if (direction === "up" && oldIndex > 0) {
      newIndex = oldIndex - 1;
    } else if (direction === "down" && oldIndex < taskList.length) {
      newIndex = oldIndex + 1;
    } else {
      console.log("ERROR");
    }

    taskList.splice(newIndex, 0, taskList.splice(oldIndex, 1)[0]);
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
  constructor(name, desc, color) {
    this.name = name;
    this.desc = desc;
    this.color = color;
    this.id = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.uId)();
  }
}

const createTask = (name, desc, color) => {
  let task = new Task(name, desc, color);
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

const editTaskInProject = (id, name, desc, color, projectTasks) => {
  let task = projectTasks.find(task => task.id === id);
  // If the task is found, update its properties
  if (task) {
    if (name) {
      task.name = name;
    }
    if (desc) {
      task.desc = desc;
    }
    if (color) {
      task.color = color;
    }
  }

}
 
const editTask = (id, name, desc, color) => {
  for (let project of _projects_js__WEBPACK_IMPORTED_MODULE_1__.allProjects){
    editTaskInProject(id, name, desc, color, project.tasks);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJIQUEwQztBQUN0Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLGdGQUFnRixPQUFPLFFBQVEsWUFBWSxPQUFPLFlBQVksaUJBQWlCLFVBQVUsTUFBTSxZQUFZLE9BQU8sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE9BQU8sVUFBVSxVQUFVLE9BQU8sWUFBWSxTQUFTLFVBQVUsTUFBTSxhQUFhLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLE1BQU0sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxvR0FBb0csMkJBQTJCLEdBQUcseUdBQXlHLGNBQWMsR0FBRyxxSkFBcUoscUJBQXFCLEdBQUcscURBQXFELDRCQUE0QixHQUFHLHdDQUF3QyxzQkFBc0Isa0NBQWtDLHFCQUFxQixHQUFHLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQix1QkFBdUIsR0FBRyxpRkFBaUYsbUNBQW1DLEdBQUcsMERBQTBELG9CQUFvQixtQkFBbUIsR0FBRyxvRkFBb0Ysa0JBQWtCLEdBQUcsK0RBQStELHNCQUFzQixzQkFBc0IscUNBQXFDLEdBQUcsVUFBVSxxQkFBcUIsdUJBQXVCLEdBQUcsVUFBVSxpQkFBaUIsS0FBSyxhQUFhLGtCQUFrQixHQUFHLDZCQUE2QiwyQ0FBMkMsdUJBQXVCLFdBQVcsY0FBYyxZQUFZLGFBQWEsR0FBRyxZQUFZLHVCQUF1QixjQUFjLGFBQWEsa0NBQWtDLDJCQUEyQixnQkFBZ0Isa0JBQWtCLGlCQUFpQiw0QkFBNEIsR0FBRyxhQUFhLHFCQUFxQixHQUFHLGVBQWUsdUJBQXVCLGVBQWUsYUFBYSwyQkFBMkIsNkJBQTZCLGdCQUFnQixnQkFBZ0IsMkJBQTJCLGlCQUFpQixHQUFHLGNBQWMscUJBQXFCLEdBQUcsWUFBWSw0QkFBNEIsR0FBRyx1QkFBdUIscUJBQXFCLDBCQUEwQixHQUFHLG9CQUFvQix1QkFBdUIsZ0JBQWdCLEdBQUcsd0NBQXdDLGlDQUFpQyxHQUFHLGdCQUFnQixrQkFBa0IsOEJBQThCLCtDQUErQywyQkFBMkIsa0JBQWtCLEdBQUcsY0FBYyxnREFBZ0QsMkJBQTJCLHFCQUFxQixtQkFBbUIsR0FBRyx5QkFBeUIsa0JBQWtCLG1CQUFtQiw4QkFBOEIsR0FBRyxrQkFBa0Isa0JBQWtCLG1DQUFtQyxrQkFBa0IsaUJBQWlCLEdBQUcscUJBQXFCLHVCQUF1QixpQkFBaUIsa0JBQWtCLGtDQUFrQyxnQ0FBZ0Msd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLGtCQUFrQixrQkFBa0Isa0NBQWtDLGtDQUFrQyxpQkFBaUIsR0FBRyxzQkFBc0Isa0JBQWtCLHdCQUF3QixHQUFHLDJCQUEyQixvQkFBb0IsdUJBQXVCLEdBQUcsOERBQThELGlDQUFpQyxHQUFHLGdDQUFnQyxrQkFBa0IsR0FBRyxpQ0FBaUMsbUJBQW1CLEdBQUcsK0JBQStCLG1CQUFtQixHQUFHLGlDQUFpQyxtQkFBbUIsR0FBRywyQkFBMkIsdUJBQXVCLEdBQUcsc0JBQXNCLHdCQUF3QixxQ0FBcUMsNkNBQTZDLGlCQUFpQixzQkFBc0Isa0JBQWtCLEdBQUcsNEJBQTRCLHlCQUF5QixHQUFHLHdDQUF3QywyQkFBMkIseUNBQXlDLG9DQUFvQyxpQkFBaUIscUJBQXFCLGVBQWUsR0FBRyxpQkFBaUIsdUJBQXVCLGdCQUFnQixHQUFHLHFEQUFxRCxvQ0FBb0MsaUJBQWlCLEdBQUcsdUNBQXVDLHNCQUFzQixHQUFHLDZCQUE2QixxQkFBcUIsR0FBRyxnQkFBZ0Isb0JBQW9CLGlCQUFpQixHQUFHLHNCQUFzQix5QkFBeUIsR0FBRyw0QkFBNEIsb0JBQW9CLEdBQUcsNEJBQTRCLHNCQUFzQixHQUFHLHVCQUF1QjtBQUN4K007QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUMzVDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2J1RjtBQUM3QztBQUMrQjtBQUN6Qjs7QUFFekM7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsSUFBSSxrREFBVyxTQUFTO0FBQzlDO0FBQ0Esb0NBQW9DLGtEQUFXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGtEQUFXLENBQUMsdURBQWEsQ0FBQyxrREFBVztBQUM3RDtBQUNBLG1CQUFtQixJQUFJLDRDQUFRLFNBQVM7QUFDeEM7QUFDQSxTQUFTLHVEQUFhLHVCQUF1Qiw0Q0FBUTtBQUNyRCwwQkFBMEIsNENBQVE7QUFDbEM7QUFDQTtBQUNBLG9CQUFvQiwyQkFBMkI7QUFDL0M7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVEQUFhLENBQUMsNENBQVE7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHVEQUFhLENBQUMsNENBQVE7QUFDekMsdUJBQXVCLDRDQUFRO0FBQy9CLHlCQUF5Qiw0Q0FBUTtBQUNqQyx5QkFBeUIsNENBQVE7QUFDakMsMEJBQTBCLDRDQUFRO0FBQ2xDOztBQUVBO0FBQ0Esc0JBQXNCLHVEQUFhLENBQUMsa0RBQVc7QUFDL0MsMEJBQTBCLGtEQUFXO0FBQ3JDLDRCQUE0QixrREFBVztBQUN2Qyw0QkFBNEIsa0RBQVc7QUFDdkM7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixrREFBVyxDQUFDLHVEQUFhLENBQUMsa0RBQVc7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0RBQWMsQ0FBQyxrREFBVztBQUNoQyxNQUFNLDZEQUF1QixDQUFDLGtEQUFXO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksa0RBQVU7QUFDZCxRQUFRLGtEQUFXO0FBQ25CLGdDQUFnQyw0Q0FBUSxDQUFDLDRDQUFRO0FBQ2pEO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJLGdEQUFRO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLEVBQUUsd0RBQWE7QUFDZjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsc0RBQVc7QUFDYjtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyREFBZ0I7QUFDbEI7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pONkQ7QUFDSTtBQUN4Qjs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0Isa0RBQVc7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsMEJBQTBCO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixrREFBVyxDQUFDLHVEQUFhLENBQUMsa0RBQVc7QUFDL0Q7O0FBRUE7O0FBRUE7O0FBRU87QUFDUDtBQUNBLDBCQUEwQixrREFBVzs7QUFFckM7QUFDQTtBQUNBLHdCQUF3QixrREFBVztBQUNuQztBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrREFBVztBQUNwQztBQUNBO0FBQ0EsOEJBQThCLGtEQUFXO0FBQ3pDO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNEQUFjO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx3REFBYTtBQUNqQjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdURBQWE7QUFDekMsTUFBTSxrREFBVztBQUNqQjtBQUNBO0FBQ0EsSUFBSSwyREFBbUI7QUFDdkIsTUFBTSxrREFBVztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVE7QUFDWjtBQUNBO0FBQ0EsQ0FBQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TytCO0FBQ007O0FBRWxDO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUCxrREFBa0QsNENBQVE7QUFDMUQscURBQXFELGtEQUFXO0FBQ2hFOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDdUM7QUFNcEI7QUFDZ0I7O0FBRTVCOztBQUVBO0FBQ1AsTUFBTSx1REFBaUI7QUFDdkIsa0JBQWtCLDJEQUFpQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZDQUFHO0FBQ2pCO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBYztBQUNoQixFQUFFLHVEQUFhO0FBQ2Y7O0FBRUE7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0Q0FBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQWE7QUFDZjs7QUFFTztBQUNQLGNBQWMsdURBQWE7QUFDM0I7QUFDQSxFQUFFLHVEQUFhO0FBQ2Y7O0FBRU87QUFDUCxjQUFjLHVEQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQWE7QUFDZjs7QUFFTztBQUNQLG9DQUFvQyx1REFBYTtBQUNqRCw2QkFBNkIsNENBQVE7QUFDckMsRUFBRSx1REFBYTtBQUNmOztBQUVPO0FBQ1A7QUFDQSw2QkFBNkIsdURBQWE7QUFDMUMsaUJBQWlCLHVEQUFhOztBQUU5QjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHVEQUFhO0FBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZpRjtBQUNyQzs7QUFFckM7QUFDUDtBQUNBLGFBQWEsMkRBQWM7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0RBQUc7QUFDakI7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxFQUFFLDBEQUFhO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxFQUFFLDBEQUFhO0FBQ2Y7O0FBRUEsQ0FBUTtBQUNSLGNBQWMsMERBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsRUFBRSwwREFBYTtBQUNmOztBQUVPO0FBQ1A7QUFDQSxzQkFBc0IscURBQVc7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1Asc0JBQXNCLHFEQUFXO0FBQ2pDO0FBQ0E7QUFDQSxFQUFFLDBEQUFhO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYztBQUM4RDtBQUNuRDtBQUNWOztBQUVwQztBQUNBLDREQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDRDQUFRO0FBQ3ZELGtEQUFrRCxxREFBVztBQUM3RDtBQUNBO0FBQ0E7QUFDQSxVQUFVLHFEQUFXO0FBQ3JCLFFBQVEsa0VBQW9CO0FBQzVCO0FBQ0E7QUFDQSxNQUFNLHFEQUFXLFlBQVksNENBQVE7QUFDckM7QUFDQSxNQUFNLDJEQUFrQjtBQUN4QixNQUFNLGlEQUFTO0FBQ2Y7QUFDQSxHQUFHLFFBQVE7QUFDWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vc3JjL2Zvcm1zLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vc3JjL2d1aS5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwLy4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1RvIERvIExpc3QgQXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1RvIERvIExpc3QgQXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0IEFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdCBBcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vc3Vuc2V0X2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKlN0YXJ0IENTUyBSZXNldCBDb2RlXG4vKiBCb3ggc2l6aW5nIHJ1bGVzICovXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cbmJvZHksXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuZmlndXJlLFxuYmxvY2txdW90ZSxcbmRsLFxuZGQge1xuICBtYXJnaW46IDA7XG59XG5cbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xudWxbcm9sZT0nbGlzdCddLFxub2xbcm9sZT0nbGlzdCddIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xuaHRtbDpmb2N1cy13aXRoaW4ge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuaHRtbCwgYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXG5hOm5vdChbY2xhc3NdKSB7XG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcbn1cblxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xuaW1nLFxucGljdHVyZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbi8qRW5kIFJlc2V0IENvZGUqL1xuXG4vKkdsb2JhbCBhbmQgU2hhcmVkIFN0eWxlcyovXG46cm9vdCB7XG4gIC0tY29sb3IxOiAjY2E1YzU0O1xuICAtLWNvbG9yMjogIzE1NGM3OTtcbiAgZm9udC1mYW1pbHk6IFwiU2VuXCIsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG5cbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuLypGb3JtcyovXG4uZm9ybVdyYXBzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE3OCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uZm9ybXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAzMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICB6LWluZGV4OiAxMDtcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDM1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuZm9ybSBoMyB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5jbG9zZUJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiAzcHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpXG59XG5cbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNsZWFyOiBib3RoO1xuICBib3JkZXI6IDFweCBncmV5IHNvbGlkO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5mb3JtRmllbGRzIGxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jbm9Qcm9qZWN0Tm90ZSB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6IGdyZXk7XG59XG5cblxuLypNYWluIFBhZ2UgTGF5b3V0Ki9cblxuI3NpZGViYXIge1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBncmV5O1xufVxuXG4jY29udGFpbmVyIHtcbiAgcGFkZGluZzogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3MDYwMDtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4jd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG4gIG92ZXJmbG93OiBjbGlwO1xufVxuXG4jc2lkZWJhciwgI3Rhc2tBcmVhIHtcbiAgcGFkZGluZzogMzBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogY2FsYyg5MHZoIC0gMzVweCk7XG59XG5cbiNtYWluQ29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3BhY2l0eTogOTUlO1xufVxuXG4jdGFza0FyZWFIZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNzBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3RDb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udGFza1dyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDk4JSAyJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLnRhc2tOYW1lV3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi50YXNrTmFtZVdyYXBwZXIgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcGFkZGluZy1yaWdodDogNnB4O1xufVxuXG5zcGFuW2RhdGEtY29sb3I9XCJub25lXCJdLCBzcGFuW2RhdGEtY29sb3I9XCJ1bmRlZmluZWRcIl17XG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59XG5cbnNwYW5bZGF0YS1jb2xvcj1cInllbGxvd1wiXXtcbiAgY29sb3I6I0VFQTY2Mztcbn1cblxuc3BhbltkYXRhLWNvbG9yPVwib3JhbmdlXCJdIHtcbiAgY29sb3I6ICNFQjgxNTM7XG59XG5cbnNwYW5bZGF0YS1jb2xvcj1cImJsdWVcIl0ge1xuICBjb2xvcjogIzNBNkY5Nztcbn1cblxuc3BhbltkYXRhLWNvbG9yPVwicHVycGxlXCJdIHtcbiAgY29sb3I6ICM2NDNENEQ7XG59XG5cblxuLnRhc2tOYW1lV3JhcHBlciBoMyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnRhc2tDb250YWluZXIgcCB7XG4gIG1hcmdpbi1sZWZ0OiAyMnB4XG59XG5cbi8qQnV0dG9ucyBhbmQgTGlua3MqL1xuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDVweCAwO1xufVxuXG5saS5wcm9qZWN0TGluaywgYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yMSk7XG59XG5cbmxpLnByb2plY3RMaW5rOmhvdmVyLCBidXR0b246aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3IyKVxufVxuXG4jbmV3VGFza0J0biwgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl17XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgei1pbmRleDogNTtcbn1cblxuI25ld1Rhc2tCdG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4MHB4O1xufVxuXG4jbmV3VGFza0J0bjpob3ZlciwgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl06aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLypGb3IgYWxpZ25tZW50Ki9cbi50YXNrRGVsZXRlQnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDE3cHg7XG59XG5cbmJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnRhc2tBcnJvdyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4udGFza0Fycm93OmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yMSk7XG59XG5cbi50YXNrQXJyb3c6bnRoLWNoaWxkKDEpe1xuICBtYXJnaW4tdG9wOiA3cHg7XG59XG5cbi50YXNrQXJyb3c6bnRoLWNoaWxkKDIpe1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO3FCQUNxQjtBQUNyQjs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBLDBCQUEwQjtBQUMxQjs7Ozs7Ozs7Ozs7O0VBWUUsU0FBUztBQUNYOztBQUVBLDJHQUEyRztBQUMzRzs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBLDBEQUEwRDtBQUMxRDtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQSxvQ0FBb0M7QUFDcEM7O0VBRUUsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUEseUNBQXlDO0FBQ3pDOzs7O0VBSUUsYUFBYTtBQUNmOztBQUVBLGlCQUFpQjs7QUFFakIsMkJBQTJCO0FBQzNCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7O0FBR0EsUUFBUTtBQUNSO0VBQ0Usc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7O0FBR0EsbUJBQW1COztBQUVuQjtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbURBQTBDO0VBQzFDLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0Msc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOzs7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUEsb0JBQW9COztBQUVwQjtFQUNFLHdDQUF3QztFQUN4QyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlN0YXJ0IENTUyBSZXNldCBDb2RlXFxuLyogQm94IHNpemluZyBydWxlcyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5maWd1cmUsXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcbnVsW3JvbGU9J2xpc3QnXSxcXG5vbFtyb2xlPSdsaXN0J10ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xcbmh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcbmE6bm90KFtjbGFzc10pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qRW5kIFJlc2V0IENvZGUqL1xcblxcbi8qR2xvYmFsIGFuZCBTaGFyZWQgU3R5bGVzKi9cXG46cm9vdCB7XFxuICAtLWNvbG9yMTogI2NhNWM1NDtcXG4gIC0tY29sb3IyOiAjMTU0Yzc5O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZW5cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcbi8qRm9ybXMqL1xcbi5mb3JtV3JhcHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE3OCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5mb3JtcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDMwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5mb3JtIGgzIHtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbi5jbG9zZUJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXB4O1xcbiAgdG9wOiAzcHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3IxKVxcbn1cXG5cXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNsZWFyOiBib3RoO1xcbiAgYm9yZGVyOiAxcHggZ3JleSBzb2xpZDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZm9ybUZpZWxkcyBsYWJlbCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4jbm9Qcm9qZWN0Tm90ZSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuXFxuLypNYWluIFBhZ2UgTGF5b3V0Ki9cXG5cXG4jc2lkZWJhciB7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwNjAwO1xcbiAgYmFja2dyb3VuZDogdXJsKCcuL3N1bnNldF9iYWNrZ3JvdW5kLmpwZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiN3cmFwcGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgbWF4LWhlaWdodDogOTB2aDtcXG4gIG92ZXJmbG93OiBjbGlwO1xcbn1cXG5cXG4jc2lkZWJhciwgI3Rhc2tBcmVhIHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGhlaWdodDogY2FsYyg5MHZoIC0gMzVweCk7XFxufVxcblxcbiNtYWluQ29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG9wYWNpdHk6IDk1JTtcXG59XFxuXFxuI3Rhc2tBcmVhSGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogNzBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi50YXNrV3JhcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5OCUgMiU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRhc2tOYW1lV3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnRhc2tOYW1lV3JhcHBlciBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcXG59XFxuXFxuc3BhbltkYXRhLWNvbG9yPVxcXCJub25lXFxcIl0sIHNwYW5bZGF0YS1jb2xvcj1cXFwidW5kZWZpbmVkXFxcIl17XFxuICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbn1cXG5cXG5zcGFuW2RhdGEtY29sb3I9XFxcInllbGxvd1xcXCJde1xcbiAgY29sb3I6I0VFQTY2MztcXG59XFxuXFxuc3BhbltkYXRhLWNvbG9yPVxcXCJvcmFuZ2VcXFwiXSB7XFxuICBjb2xvcjogI0VCODE1MztcXG59XFxuXFxuc3BhbltkYXRhLWNvbG9yPVxcXCJibHVlXFxcIl0ge1xcbiAgY29sb3I6ICMzQTZGOTc7XFxufVxcblxcbnNwYW5bZGF0YS1jb2xvcj1cXFwicHVycGxlXFxcIl0ge1xcbiAgY29sb3I6ICM2NDNENEQ7XFxufVxcblxcblxcbi50YXNrTmFtZVdyYXBwZXIgaDMge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciBwIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMnB4XFxufVxcblxcbi8qQnV0dG9ucyBhbmQgTGlua3MqL1xcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IDVweCAwO1xcbn1cXG5cXG5saS5wcm9qZWN0TGluaywgYnV0dG9uIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbn1cXG5cXG5saS5wcm9qZWN0TGluazpob3ZlciwgYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjIpXFxufVxcblxcbiNuZXdUYXNrQnRuLCBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl17XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogNXB4IDhweDtcXG4gIHotaW5kZXg6IDU7XFxufVxcblxcbiNuZXdUYXNrQnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA4MHB4O1xcbn1cXG5cXG4jbmV3VGFza0J0bjpob3ZlciwgYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLypGb3IgYWxpZ25tZW50Ki9cXG4udGFza0RlbGV0ZUJ0biB7XFxuICBtYXJnaW4tbGVmdDogMTdweDtcXG59XFxuXFxuYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi50YXNrQXJyb3cge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udGFza0Fycm93OmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbn1cXG5cXG4udGFza0Fycm93Om50aC1jaGlsZCgxKXtcXG4gIG1hcmdpbi10b3A6IDdweDtcXG59XFxuXFxuLnRhc2tBcnJvdzpudGgtY2hpbGQoMil7XFxuICBtYXJnaW4tdG9wOiAtMTVweDtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBhbGxQcm9qZWN0cywgY3JlYXRlUHJvamVjdCwgZWRpdFByb2plY3QsIGFkZFRhc2t0b1Byb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgZmluZEluZGV4QnlJZCB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCB7IGFsbFRhc2tzLCBjcmVhdGVUYXNrLCBhZGRUYXNrVG9BcnJheSwgZWRpdFRhc2sgfSBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RXaXRoVGFza3MgfSBmcm9tIFwiLi9ndWlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRGb3JtcygpIHtcbiAgbGV0IGlzRm9ybVNob3duID0gZmFsc2U7XG5cbiAgLy9OZXcgVGFzayBGb3JtIEVsZW1lbnRzXG4gIGNvbnN0IG5ld1Rhc2tGb3JtV3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza0Zvcm1XcmFwXCIpO1xuICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza0Zvcm1cIik7XG4gIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tCdG5cIik7XG4gIGNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdFByb2plY3RcIik7XG4gIGNvbnN0IG5vUHJvamVjdE5vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vUHJvamVjdE5vdGVcIik7XG4gIGxldCBuZXdUYXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza05hbWVcIik7XG4gIGxldCBuZXdUYXNrRGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza0Rlc2NcIik7XG4gIGxldCBuZXdUYXNrQ29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tDb2xvclwiKTtcblxuXG4gIC8vRWRpdCBUYXNrIEZvcm0gRWxlbWVudHNcbiAgY29uc3QgZWRpdFRhc2tGb3JtV3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFRhc2tGb3JtV3JhcFwiKTtcbiAgY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0VGFza0Zvcm1cIik7XG4gIGxldCBlZGl0VGFza0lkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0VGFza0lkXCIpO1xuICBsZXQgZWRpdFRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0VGFza05hbWVcIik7XG4gIGxldCBlZGl0VGFza0Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRUYXNrRGVzY1wiKTtcbiAgbGV0IGVkaXRUYXNrQ29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRUYXNrQ29sb3JcIik7XG5cblxuICAvL05ldyBQcm9qZWN0IEZvcm0gRmllbGRzXG4gIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RCdG5cIik7XG4gIGNvbnN0IG5ld1Byb2plY3RGb3JtV3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEZvcm1XcmFwXCIpO1xuICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEZvcm1cIik7XG4gIGxldCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdE5hbWVcIik7XG4gIGxldCBuZXdQcm9qZWN0RGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdERlc2NcIik7XG5cbiAgLy9FZGl0IFByb2plY3QgRm9ybSBGaWVsZHNcbiAgbGV0IGVkaXRQcm9qZWN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRQcm9qZWN0SWRcIik7XG4gIGxldCBlZGl0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRQcm9qZWN0TmFtZVwiKTtcbiAgbGV0IGVkaXRQcm9qZWN0RGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFByb2plY3REZXNjXCIpO1xuXG4gIC8vQWRkIFRhc2sgdG8gUHJvamVjdCBGb3JtIEZpZWxkc1xuICBsZXQgYWRkVGFza3RvUHJvamVjdEZvcm1XcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrdG9Qcm9qZWN0Rm9ybVdyYXBcIik7XG4gIGxldCBhZGRUYXNrdG9Qcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza3RvUHJvamVjdEZvcm1cIik7XG4gIGxldCBhZGRUYXNrdG9Qcm9qZWN0Rm9ybUhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza3RvUHJvamVjdEhlYWRlclwiKTtcbiAgbGV0IGFkZFRhc2t0b1Byb2plY3RGb3JtSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2t0b1Byb2plY3RGb3JtSWRcIik7XG4gIGxldCBzZWxlY3RUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RUYXNrXCIpO1xuXG4gIC8vR2VuZXJhdGUgRHlubWFpYyBGb3JtIENvbnRlbnRcbiAgY29uc3QgZm9ybVJlZnJlc2hQcm9qZWN0T3B0aW9ucyA9ICgpID0+IHtcbiAgICAvL0xpc3QgYWxsIHByb2plY3Qgb3B0aW9ucywgb25seSBpZiBwcm9qZWN0cyBvdGhlciB0aGFuIGRlZmF1bHQgcHJvamVjdCBleGlzdFxuICAgIGlmIChhbGxQcm9qZWN0cy5sZW5ndGggPiAxKSB7XG4gICAgICBub1Byb2plY3ROb3RlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICBzZWxlY3RQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICBzZWxlY3RQcm9qZWN0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIC8vU2tpcHMgZGVmYXVsdCAnQWxsIFByb2plY3RzJyBhdCBJbmRleCAwXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFsbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IGFsbFByb2plY3RzW2ldLm5hbWU7XG4gICAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBpO1xuICAgICAgICBzZWxlY3RQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xuICAgICAgfVxuICAgICAgbGV0IG5vUHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBub1Byb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBcIkRvbid0IGFkZCB0byBwcm9qZWN0XCI7XG4gICAgICBub1Byb2plY3RPcHRpb24udmFsdWUgPSBcIm5vIHByb2plY3RcIjtcbiAgICAgIHNlbGVjdFByb2plY3QuYXBwZW5kQ2hpbGQobm9Qcm9qZWN0T3B0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmb3JtUmVmcmVzaFRhc2tPcHRpb25zID0gKHByb2plY3RJZCkgPT4ge1xuICAgc2VsZWN0VGFzay50ZXh0Q29udGVudCA9IFwiXCI7XG4gICBsZXQgY3VycmVudFByb2plY3QgPSBhbGxQcm9qZWN0c1tmaW5kSW5kZXhCeUlkKGFsbFByb2plY3RzLCBwcm9qZWN0SWQpXTtcbiAgIGxldCBhdmFpbGFibGVUYXNrcyA9IFtdO1xuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgIC8vSWYgYSB0YXNrIGNhbiBOT1QgYmUgZm91bmQgaW4gdGhlIGFycmF5IG9mIHRhc2tzIGZvciBjdXJyZW50IHByb2plY3QsIHRoZW4gaW5jbHVkZSBpdCBpbiB0aGUgbGlzdCBvZiBvcHRpb25zXG4gICAgaWYgKChmaW5kSW5kZXhCeUlkKGN1cnJlbnRQcm9qZWN0LnRhc2tzLCBhbGxUYXNrc1tpXS5pZCkpID09PSAtMSl7XG4gICAgICBhdmFpbGFibGVUYXNrcy5wdXNoKGFsbFRhc2tzW2ldKTtcbiAgICB9XG4gICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdmFpbGFibGVUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRhc2tPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgdGFza09wdGlvbi50ZXh0Q29udGVudCA9IGF2YWlsYWJsZVRhc2tzW2ldLm5hbWU7XG4gICAgICAvL0Zvcm0gaW50ZW5kZWQgdG8gdXRpbGl6ZSBpbmRleCBvZiBzZWxlY3RlZCB0YXNrIGluIEFsbCBUYXNrcyBhcnJheVxuICAgICAgdGFza09wdGlvbi52YWx1ZSA9IGZpbmRJbmRleEJ5SWQoYWxsVGFza3MsIGF2YWlsYWJsZVRhc2tzW2ldLmlkKTtcbiAgICAgIHNlbGVjdFRhc2suYXBwZW5kQ2hpbGQodGFza09wdGlvbik7XG4gICAgfVxufTtcblxuICBjb25zdCBhdXRvZmlsbFRhc2tFZGl0Rm9ybSA9ICh0YXNrSWQpID0+IHtcbiAgICBsZXQgb3JpZ1Rhc2sgPSBmaW5kSW5kZXhCeUlkKGFsbFRhc2tzLCB0YXNrSWQpO1xuICAgIGVkaXRUYXNrSWQudmFsdWUgPSBhbGxUYXNrc1tvcmlnVGFza10uaWQ7XG4gICAgZWRpdFRhc2tOYW1lLnZhbHVlID0gYWxsVGFza3Nbb3JpZ1Rhc2tdLm5hbWU7XG4gICAgZWRpdFRhc2tEZXNjLnZhbHVlID0gYWxsVGFza3Nbb3JpZ1Rhc2tdLmRlc2M7XG4gICAgZWRpdFRhc2tDb2xvci52YWx1ZSA9IGFsbFRhc2tzW29yaWdUYXNrXS5jb2xvcjtcbiAgfTtcblxuICBjb25zdCBhdXRvZmlsbFByb2plY3RFZGl0Rm9ybSA9IChwcm9qZWN0SWQpID0+IHtcbiAgICBsZXQgb3JpZ1Byb2plY3QgPSBmaW5kSW5kZXhCeUlkKGFsbFByb2plY3RzLCBwcm9qZWN0SWQpO1xuICAgIGVkaXRQcm9qZWN0SWQudmFsdWUgPSBhbGxQcm9qZWN0c1tvcmlnUHJvamVjdF0uaWQ7XG4gICAgZWRpdFByb2plY3ROYW1lLnZhbHVlID0gYWxsUHJvamVjdHNbb3JpZ1Byb2plY3RdLm5hbWU7XG4gICAgZWRpdFByb2plY3REZXNjLnZhbHVlID0gYWxsUHJvamVjdHNbb3JpZ1Byb2plY3RdLmRlc2M7XG4gIH07XG5cbiAgY29uc3QgYXV0b2ZpbGxBZGRUYXNrVG9Qcm9qZWN0Rm9ybSA9IChwcm9qZWN0SWQpID0+IHtcbiAgICAvL0FkZCBoZWFkZXJcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBhbGxQcm9qZWN0c1tmaW5kSW5kZXhCeUlkKGFsbFByb2plY3RzLCBwcm9qZWN0SWQpXTtcbiAgICBhZGRUYXNrdG9Qcm9qZWN0Rm9ybUhlYWRlci50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2sgRm9yIFwiICsgY3VycmVudFByb2plY3QubmFtZTtcbiAgICAvL0FkZCBoaWRkZW4gaWRcbiAgICBhZGRUYXNrdG9Qcm9qZWN0Rm9ybUlkLnZhbHVlID0gcHJvamVjdElkO1xuICAgIGZvcm1SZWZyZXNoVGFza09wdGlvbnMocHJvamVjdElkKTtcbiAgfVxuXG4gIC8vRm9ybSBIZWxwZXIgRnVuY3Rpb25zXG4gIGNvbnN0IGhpZGVGb3JtID0gKGZvcm0pID0+IHtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgaXNGb3JtU2hvd24gPSBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBzaG93Rm9ybSA9IChmb3JtKSA9PiB7XG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIGlzRm9ybVNob3duID0gdHJ1ZTtcbiAgfTtcblxuICAvL09wZW4gRm9ybXNcbiAgbmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICghaXNGb3JtU2hvd24pIHtcbiAgICAgIGZvcm1SZWZyZXNoUHJvamVjdE9wdGlvbnMoKTtcbiAgICAgIHNob3dGb3JtKG5ld1Rhc2tGb3JtV3JhcCk7XG4gICAgfVxuICB9KTtcblxuICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKCFpc0Zvcm1TaG93bikge1xuICAgICAgc2hvd0Zvcm0obmV3UHJvamVjdEZvcm1XcmFwKTtcbiAgICB9XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRhc2tFZGl0QnRuXCIpKSB7XG4gICAgICBpZiAoIWlzRm9ybVNob3duKSB7XG4gICAgICAgIGF1dG9maWxsVGFza0VkaXRGb3JtKGV2ZW50LnNyY0VsZW1lbnQucGFyZW50Tm9kZS5pZCk7XG4gICAgICAgIHNob3dGb3JtKGVkaXRUYXNrRm9ybVdyYXApO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdEVkaXRCdG5cIikpIHtcbiAgICAgIGlmICghaXNGb3JtU2hvd24pIHtcbiAgICAgICAgYXV0b2ZpbGxQcm9qZWN0RWRpdEZvcm0oZXZlbnQuc3JjRWxlbWVudC5kYXRhc2V0LnByb2plY3QpO1xuICAgICAgICBzaG93Rm9ybShlZGl0UHJvamVjdEZvcm1XcmFwKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFkZFRhc2tCdG5cIikpIHtcbiAgICAgIGlmICghaXNGb3JtU2hvd24pIHtcbiAgICAgICAgYXV0b2ZpbGxBZGRUYXNrVG9Qcm9qZWN0Rm9ybShldmVudC5zcmNFbGVtZW50LmRhdGFzZXQucHJvamVjdCk7XG4gICAgICAgIHNob3dGb3JtKGFkZFRhc2t0b1Byb2plY3RGb3JtV3JhcCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuXG4gIC8vQ2xvc2UgRm9ybXNcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2VCdG5cIikpIHtcbiAgICAgIGhpZGVGb3JtKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy9IYW5kbGUgRm9ybSBTdWJtaXRzXG4gIGNvbnN0IGZvcm1IYW5kbGVTZWxlY3RlZFByb2plY3QgPSAodGFzaykgPT4ge1xuICAgIGxldCBzZWxlY3RlZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdFByb2plY3RcIikudmFsdWU7XG4gICAgaWYgKHNlbGVjdGVkUHJvamVjdCAhPT0gXCJubyBwcm9qZWN0XCIpIHtcbiAgICAgIGFkZFRhc2tUb0FycmF5KGFsbFByb2plY3RzW3NlbGVjdGVkUHJvamVjdF0udGFza3MsIHRhc2spO1xuICAgICAgZGlzcGxheVByb2plY3RXaXRoVGFza3MoYWxsUHJvamVjdHNbc2VsZWN0ZWRQcm9qZWN0XSk7XG4gICAgfVxuICB9O1xuXG4gIG5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjcmVhdGVUYXNrKG5ld1Rhc2tOYW1lLnZhbHVlLCBuZXdUYXNrRGVzYy52YWx1ZSwgbmV3VGFza0NvbG9yLnZhbHVlKTtcbiAgICBpZiAoYWxsUHJvamVjdHMubGVuZ3RoID4gMSkge1xuICAgICAgZm9ybUhhbmRsZVNlbGVjdGVkUHJvamVjdChhbGxUYXNrc1thbGxUYXNrcy5sZW5ndGggLSAxXSk7XG4gICAgfVxuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9KTtcblxuICBlZGl0VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGVkaXRUYXNrKGVkaXRUYXNrSWQudmFsdWUsIGVkaXRUYXNrTmFtZS52YWx1ZSwgZWRpdFRhc2tEZXNjLnZhbHVlLCBlZGl0VGFza0NvbG9yLnZhbHVlKTtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG59XG5cbm5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNyZWF0ZVByb2plY3QobmV3UHJvamVjdE5hbWUudmFsdWUsIG5ld1Byb2plY3REZXNjLnZhbHVlLCBbXSk7XG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG5cbmVkaXRQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBlZGl0UHJvamVjdChlZGl0UHJvamVjdElkLnZhbHVlLCBlZGl0UHJvamVjdE5hbWUudmFsdWUsIGVkaXRQcm9qZWN0RGVzYy52YWx1ZSk7XG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG5cblxuYWRkVGFza3RvUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgbGV0IHNlbGVjdGVkUHJvamVjdElkID0gYWRkVGFza3RvUHJvamVjdEZvcm1JZC52YWx1ZTtcbiAgbGV0IHNlbGVjdGVkVGFza0luZGV4ID0gc2VsZWN0VGFzay52YWx1ZTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgYWRkVGFza3RvUHJvamVjdChzZWxlY3RlZFByb2plY3RJZCwgc2VsZWN0ZWRUYXNrSW5kZXgpO1xuICBsb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuIiwiaW1wb3J0IHsgZnVsbERlbGV0ZVRhc2ssIGRlbGV0ZVRhc2tGcm9tQXJyYXkgfSBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IHsgYWxsUHJvamVjdHMsIGRlbGV0ZVByb2plY3QsIG1vdmVUYXNrIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IGZpbmRJbmRleEJ5SWQgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmNvbnN0IHRhc2tBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrQXJlYUNvbnRlbnRcIik7XG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdExpc3RcIik7XG5cbi8vRE9NIFV0aWxzXG5jb25zdCBjcmVhdGVEZWxldGVCdG4gPSAoZWxlbWVudCkgPT4ge1xuICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoZWxlbWVudCArIFwiRGVsZXRlQnRuXCIpO1xuICByZXR1cm4gZGVsZXRlQnRuO1xufTtcblxuY29uc3QgY3JlYXRlRWRpdEJ0biA9IChlbGVtZW50LCBwcm9qZWN0KSA9PiB7XG4gIGxldCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoZWxlbWVudCArIFwiRWRpdEJ0blwiKTtcbiAgaWYgKHByb2plY3Qpe1xuICBlZGl0QnRuLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLCBwcm9qZWN0LmlkKTtcbn1cbiAgcmV0dXJuIGVkaXRCdG47XG59O1xuXG5jb25zdCBjcmVhdGVSZW1vdmVCdG4gPSAocHJvamVjdCkgPT4ge1xuICBsZXQgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmVtb3ZlQnRuLnRleHRDb250ZW50ID0gXCJSZW1vdmUgRnJvbSBQcm9qZWN0XCI7XG4gIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlQnRuXCIpO1xuICAvL1Byb2plY3QgSUQgd2lsbCBiZSB1c2VkIHRvIGlkZW50aWZ5IHdoaWNoIHByb2plY3QgdGFzayBzaG91bGQgYmUgcmVtb3ZlZCBmcm9tXG4gIHJlbW92ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIiwgcHJvamVjdC5pZCk7XG4gIHJldHVybiByZW1vdmVCdG47XG59O1xuXG5jb25zdCBjcmVhdGVBZGRUYXNrQnRuID0gKHByb2plY3QpID0+IHtcbiAgbGV0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGRUYXNrQnRuXCIpO1xuICAvL1Byb2plY3QgSUQgd2lsbCBiZSB1c2VkIHRvIGlkZW50aWZ5IHdoaWNoIHByb2plY3QgdGFzayBzaG91bGQgYmUgYWRkZWQgdG9cbiAgYWRkVGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIiwgcHJvamVjdC5pZCk7XG4gIHJldHVybiBhZGRUYXNrQnRuO1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEJ0bnMgPSAocHJvamVjdCkgPT4ge1xuICBsZXQgcHJvamVjdEJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RCdG5EaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RCdG5EaXZcIik7XG5cbiAgbGV0IHByb2plY3REZWxldGVCdG4gPSBjcmVhdGVEZWxldGVCdG4oXCJwcm9qZWN0XCIpO1xuICBwcm9qZWN0QnRuRGl2LmFwcGVuZENoaWxkKHByb2plY3REZWxldGVCdG4pO1xuXG4gIGxldCBwcm9qZWN0RWRpdEJ0biA9IGNyZWF0ZUVkaXRCdG4oXCJwcm9qZWN0XCIsIHByb2plY3QpO1xuICBwcm9qZWN0QnRuRGl2LmFwcGVuZENoaWxkKHByb2plY3RFZGl0QnRuKTtcblxuICBsZXQgYWRkVGFza0J0biA9IGNyZWF0ZUFkZFRhc2tCdG4ocHJvamVjdCk7XG4gIHByb2plY3RCdG5EaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG5cbiAgcmV0dXJuIHByb2plY3RCdG5EaXY7XG59O1xuXG5jb25zdCBkaXNwbGF5UHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdENvbnRhaW5lclwiKTtcbiAgdGFza0FyZWEuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG5cbiAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgbGV0IHByb2plY3REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2plY3REZXNjLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjO1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REZXNjKTtcblxuICBwcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3QuaWQpO1xuXG4gIGlmIChwcm9qZWN0LmlkICE9PSBcImRlZmF1bHRcIikge1xuICAgIGxldCBwcm9qZWN0QnRucyA9IGNyZWF0ZVByb2plY3RCdG5zKHByb2plY3QpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bnMpO1xuICB9XG59O1xuXG5jb25zdCBkaXNwbGF5VGFzayA9ICh0YXNrLCBwcm9qZWN0KSA9PiB7XG4gIGxldCB0YXNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tXcmFwcGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwid3JhcHBlclwiICsgdGFzay5pZCk7XG4gIHRhc2tXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrV3JhcHBlclwiKTtcbiAgdGFza0FyZWEuYXBwZW5kQ2hpbGQodGFza1dyYXBwZXIpO1xuXG4gIGxldCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza0NvbnRhaW5lclwiKTtcbiAgdGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG5cbiAgbGV0IHRhc2tOYW1lV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tOYW1lV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwidGFza05hbWVXcmFwcGVyXCIpO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tOYW1lV3JhcHBlcik7XG5cbiAgbGV0IHRhc2tDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB0YXNrQ29sb3IudGV4dENvbnRlbnQgPSBcIuKXj1wiO1xuICB0YXNrQ29sb3Iuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2xvclwiLCB0YXNrLmNvbG9yKTtcbiAgdGFza05hbWVXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tDb2xvcik7XG5cbiAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgdGFza05hbWVXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcblxuICBsZXQgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSB0YXNrLmRlc2M7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rlc2MpO1xuICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIHRhc2suaWQpO1xuXG4gIC8vZGlzcGxheVRhc2sgLSBCdXR0b25zXG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRGVsZXRlQnRuKFwidGFza1wiKSk7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWRpdEJ0bihcInRhc2tcIikpO1xuXG4gIGlmIChwcm9qZWN0ICE9PSBhbGxQcm9qZWN0c1swXSkge1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUmVtb3ZlQnRuKHByb2plY3QpKTtcbiAgfVxuXG4gIC8vZGlzcGxheVRhc2sgLSBBcnJvd3NcbiAgbGV0IHRhc2tTaWRlQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza1NpZGVDb2x1bW4uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIsIHByb2plY3QuaWQpO1xuICB0YXNrV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrU2lkZUNvbHVtbik7XG5cbiAgbGV0IHRhc2tVcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tVcEJ1dHRvbi50ZXh0Q29udGVudCA9IFwi4oyDXCI7XG4gIHRhc2tVcEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFza0Fycm93XCIpO1xuICB0YXNrVXBCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1kaXJlY3Rpb25cIiwgXCJ1cFwiKTtcbiAgdGFza1VwQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtdGFza1wiLCB0YXNrLmlkKTtcbiAgdGFza1NpZGVDb2x1bW4uYXBwZW5kQ2hpbGQodGFza1VwQnV0dG9uKTtcblxuICBsZXQgdGFza0Rvd25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrRG93bkJ1dHRvbi50ZXh0Q29udGVudCA9IFwi4oyEXCI7XG4gIHRhc2tEb3duQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQXJyb3dcIik7XG4gIHRhc2tEb3duQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtZGlyZWN0aW9uXCIsIFwiZG93blwiKTtcbiAgdGFza0Rvd25CdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS10YXNrXCIsIHRhc2suaWQpO1xuICB0YXNrU2lkZUNvbHVtbi5hcHBlbmRDaGlsZCh0YXNrRG93bkJ1dHRvbik7XG59O1xuXG5jb25zdCBkaXNwbGF5VGFza3MgPSAocHJvamVjdCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QudGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBkaXNwbGF5VGFzayhwcm9qZWN0LnRhc2tzW2ldLCBwcm9qZWN0KTtcbiAgfVxufTtcblxuY29uc3QgY2xlYXJQcm9qZWN0VGFza3MgPSAoKSA9PiB7XG4gIHRhc2tBcmVhLnRleHRDb250ZW50ID0gXCJcIjtcbn07XG5cbmNvbnN0IGRlbGV0ZU5vZGUgPSAoaWQpID0+IHtcbiAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gIGVsZW1lbnQucmVtb3ZlKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZGlzcGxheVByb2plY3RXaXRoVGFza3MgPSAocHJvamVjdCkgPT4ge1xuICBjbGVhclByb2plY3RUYXNrcygpO1xuICBkaXNwbGF5UHJvamVjdChwcm9qZWN0KTtcbiAgZGlzcGxheVRhc2tzKHByb2plY3QpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RMaW5rID0gKHByb2plY3QpID0+IHtcbiAgbGV0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBwcm9qZWN0TGluay5jbGFzc0xpc3QuYWRkKFwicHJvamVjdExpbmtcIik7XG4gIHByb2plY3RMaW5rLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJidXR0b25cIik7XG4gIHByb2plY3RMaW5rLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TGluayk7XG59O1xuXG5jb25zdCByZWZyZXNoUGFnZSA9IChwcm9qZWN0SWQpID0+IHtcbiAgZGlzcGxheVByb2plY3RXaXRoVGFza3MoYWxsUHJvamVjdHNbZmluZEluZGV4QnlJZChhbGxQcm9qZWN0cywgcHJvamVjdElkKV0pO1xufTtcblxuLy9FTkQgRE9NVXRpbHNcblxuLy9Jbml0IER5bmFtaWMgQ29udGVudCBvbiBOZXcgUGFnZSBMb2FkXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RHluYW1pY0NvbnRlbnQoKSB7XG4gIC8vT24gbmV3IGxvYWQsIGF1dG8gZGlzcGxheSBhbGwgdGFza3NcbiAgZGlzcGxheVByb2plY3RXaXRoVGFza3MoYWxsUHJvamVjdHNbMF0pO1xuXG4gIC8vT24gbmV3IGxvYWQsIGF1dG8gZGlzcGxheSBsaW5rcyB0byBhbGwgcHJvamVjdHNcbiAgKCgpID0+IHtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RzKSB7XG4gICAgICBhZGRQcm9qZWN0TGluayhwcm9qZWN0KTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgLy9EaXNwbGF5IHByb2plY3QgaW5mbyBhZnRlciBjbGlja2luZyBvbiBlYWNoIHBhZ2VcbiAgcHJvamVjdExpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gXCJMSVwiKSB7XG4gICAgICBsZXQgcHJvamVjdE5hbWUgPSBldmVudC50YXJnZXQuaW5uZXJUZXh0O1xuICAgICAgbGV0IHByb2plY3RJbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleChcbiAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PSBwcm9qZWN0TmFtZVxuICAgICAgKTtcbiAgICAgIGRpc3BsYXlQcm9qZWN0V2l0aFRhc2tzKGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgLy9NYWluIENvbnRlbnQgTGlzdGVuZXJzXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFza0RlbGV0ZUJ0blwiKSkge1xuICAgICAgLy9EZWxldGUgYmFzZWQgb24gdGFzayBJRFxuICAgICAgZnVsbERlbGV0ZVRhc2soZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xuICAgICAgLy9EZWxldGUgY29udGFpbmVyIG5vZGUgb24gR1VJIGFzc29jaWF0ZWQgd2l0aCB0aGF0IElEXG4gICAgICBkZWxldGVOb2RlKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0RGVsZXRlQnRuXCIpKSB7XG4gICAgZGVsZXRlUHJvamVjdChldmVudC50YXJnZXQuaWQpO1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInJlbW92ZUJ0blwiKSkge1xuICAgIC8vdGFrZXMgcGFyYW1ldGVycyBmb3IgcHJvamVjdCBpZCwgdGFzayBpZFxuICAgIGxldCBldmVudFByb2plY3RJbmRleCA9IGZpbmRJbmRleEJ5SWQoXG4gICAgICBhbGxQcm9qZWN0cyxcbiAgICAgIGV2ZW50LnRhcmdldC5kYXRhc2V0LnByb2plY3RcbiAgICApO1xuICAgIGRlbGV0ZVRhc2tGcm9tQXJyYXkoXG4gICAgICBhbGxQcm9qZWN0c1tldmVudFByb2plY3RJbmRleF0udGFza3MsXG4gICAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZFxuICAgICk7XG4gICAgcmVmcmVzaFBhZ2UoZXZlbnQudGFyZ2V0LmRhdGFzZXQucHJvamVjdCk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFza0Fycm93XCIpKSB7XG4gICAgbGV0IGRpcmVjdGlvbiA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmRpcmVjdGlvbjtcbiAgICBsZXQgcHJvamVjdElkID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5wcm9qZWN0O1xuICAgIGxldCB0YXNrSWQgPSBldmVudC50YXJnZXQuZGF0YXNldC50YXNrO1xuICAgIG1vdmVUYXNrKHRhc2tJZCwgcHJvamVjdElkLCBkaXJlY3Rpb24pO1xuICAgIHJlZnJlc2hQYWdlKHByb2plY3RJZCk7XG4gIH1cbn0pOyAvL2VuZCBpbml0RHluYW1pY0NvbnRlbnRcbiIsImltcG9ydCB7IGFsbFRhc2tzIH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuZXhwb3J0IGNvbnN0IHVJZCA9ICgpID0+IHtcbiAgcmV0dXJuIERhdGUubm93KCkudG9TdHJpbmcoMzYpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRJbmRleEJ5SWQgPSAoYXJyYXksIGlkTnVtKSA9PiB7XG4gIHJldHVybiBhcnJheS5maW5kSW5kZXgoKHgpID0+IHguaWQgPT09IGlkTnVtKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTdG9yYWdlID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGFsbFRhc2tzKSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWxsUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdG9yZWRUYXNrcyA9ICgpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmFsbFRhc2tzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdG9yZWRQcm9qZWN0cyA9ICgpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmFsbFByb2plY3RzKTtcbn07XG4iLCIvL1BST0pFQ1RTXG5pbXBvcnQgeyBhZGRQcm9qZWN0TGluayB9IGZyb20gXCIuL2d1aVwiO1xuaW1wb3J0IHtcbiAgZ2V0U3RvcmVkUHJvamVjdHMsXG4gIHVwZGF0ZVN0b3JhZ2UsXG4gIHVJZCxcbiAgZmluZEluZGV4QnlJZCxcbn0gZnJvbSBcIi4vaGVscGVyc1wiO1xuaW1wb3J0IHsgYWxsVGFza3MgfSBmcm9tIFwiLi90YXNrc1wiO1xuXG5leHBvcnQgbGV0IGFsbFByb2plY3RzID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0cygpIHtcbiAgaWYgKGdldFN0b3JlZFByb2plY3RzKSB7XG4gICAgYWxsUHJvamVjdHMgPSBnZXRTdG9yZWRQcm9qZWN0cygpO1xuICB9XG59XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjLCB0YXNrcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gICAgdGhpcy5pZCA9IHVJZCgpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUsIGRlc2MsIHRhc2tzKSA9PiB7XG4gIGlmICghQXJyYXkuaXNBcnJheSh0YXNrcykpIHtcbiAgICB0YXNrcyA9IFt0YXNrc107XG4gIH1cbiAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBkZXNjLCB0YXNrcyk7XG4gIGFsbFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIGFkZFByb2plY3RMaW5rKHByb2plY3QpO1xuICB1cGRhdGVTdG9yYWdlKCk7XG59O1xuXG4vL0NyZWF0ZXMgZGVmYXVsdCBwcm9qZWN0IHRvIHVzZSBvbiBmaXJzdCBwYWdlIGxvYWQuXG4vL1NraXBzIHN0ZXAgdG8gY3JlYXRlIHByb2plY3QgbGluayBzaW5jZSB0aGlzIGlzIGRvbmUgb24gcGFnZSBpbml0LlxuZXhwb3J0IGNvbnN0IGNyZWF0ZURlZmF1bHRQcm9qZWN0ID0gKCkgPT4ge1xuICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KFxuICAgIFwiQWxsIFRhc2tzXCIsXG4gICAgXCJBbiB1bmZpbHRlcmVkIHZpZXcgb2YgYWxsIHRhc2tzXCIsXG4gICAgYWxsVGFza3NcbiAgKTtcbiAgcHJvamVjdC5pZCA9IFwiZGVmYXVsdFwiO1xuICBhbGxQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB1cGRhdGVTdG9yYWdlKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0SWQpID0+IHtcbiAgbGV0IGluZGV4ID0gZmluZEluZGV4QnlJZChhbGxQcm9qZWN0cywgcHJvamVjdElkKTtcbiAgYWxsUHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgdXBkYXRlU3RvcmFnZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGVkaXRQcm9qZWN0ID0gKGlkLCBuYW1lLCBkZXNjKSA9PiB7XG4gIGxldCBpbmRleCA9IGZpbmRJbmRleEJ5SWQoYWxsUHJvamVjdHMsIGlkKTtcbiAgaWYgKG5hbWUpIHtcbiAgICBhbGxQcm9qZWN0c1tpbmRleF0ubmFtZSA9IG5hbWU7XG4gIH1cbiAgaWYgKGRlc2MpIHtcbiAgICBhbGxQcm9qZWN0c1tpbmRleF0uZGVzYyA9IGRlc2M7XG4gIH1cbiAgdXBkYXRlU3RvcmFnZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFRhc2t0b1Byb2plY3QgPSAocHJvamVjdElkLCB0YXNrSW5kZXgpID0+IHtcbiAgbGV0IHNlbGVjdGVkUHJvamVjdCA9IGFsbFByb2plY3RzW2ZpbmRJbmRleEJ5SWQoYWxsUHJvamVjdHMsIHByb2plY3RJZCldO1xuICBzZWxlY3RlZFByb2plY3QudGFza3MucHVzaChhbGxUYXNrc1t0YXNrSW5kZXhdKTtcbiAgdXBkYXRlU3RvcmFnZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IG1vdmVUYXNrID0gKHRhc2tJZCwgcHJvamVjdElkLCBkaXJlY3Rpb24pID0+IHtcbiAgbGV0IG5ld0luZGV4O1xuICBsZXQgdGFza0xpc3QgPSBhbGxQcm9qZWN0c1tmaW5kSW5kZXhCeUlkKGFsbFByb2plY3RzLCBwcm9qZWN0SWQpXS50YXNrcztcbiAgbGV0IG9sZEluZGV4ID0gZmluZEluZGV4QnlJZCh0YXNrTGlzdCwgdGFza0lkKTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwidXBcIiAmJiBvbGRJbmRleCA+IDApIHtcbiAgICAgIG5ld0luZGV4ID0gb2xkSW5kZXggLSAxO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImRvd25cIiAmJiBvbGRJbmRleCA8IHRhc2tMaXN0Lmxlbmd0aCkge1xuICAgICAgbmV3SW5kZXggPSBvbGRJbmRleCArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRVJST1JcIik7XG4gICAgfVxuXG4gICAgdGFza0xpc3Quc3BsaWNlKG5ld0luZGV4LCAwLCB0YXNrTGlzdC5zcGxpY2Uob2xkSW5kZXgsIDEpWzBdKTtcbiAgICB1cGRhdGVTdG9yYWdlKCk7XG59O1xuIiwiaW1wb3J0IHsgdUlkLCBmaW5kSW5kZXhCeUlkLCB1cGRhdGVTdG9yYWdlLCBnZXRTdG9yZWRUYXNrcyB9IGZyb20gXCIuL2hlbHBlcnMuanNcIjtcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcblxuZXhwb3J0IGxldCBhbGxUYXNrcyA9IFtdO1xuaWYgKGxvY2FsU3RvcmFnZS5hbGxUYXNrcykge1xuICBhbGxUYXNrcyA9IGdldFN0b3JlZFRhc2tzKCk7XG59XG5cbmNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjLCBjb2xvcikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5pZCA9IHVJZCgpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrID0gKG5hbWUsIGRlc2MsIGNvbG9yKSA9PiB7XG4gIGxldCB0YXNrID0gbmV3IFRhc2sobmFtZSwgZGVzYywgY29sb3IpO1xuICBhbGxUYXNrcy5wdXNoKHRhc2spO1xuICB1cGRhdGVTdG9yYWdlKCk7XG59O1xuXG5pZiAoIWxvY2FsU3RvcmFnZS5hbGxUYXNrcykge1xuICBjcmVhdGVUYXNrKFwiU2FtcGxlIFRhc2tcIiwgXCJIZXJlJ3MgYW4gZXhhbXBsZSBvZiB3aGF0IGEgdGFzayBsb29rcyBsaWtlIVwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IGFkZFRhc2tUb0FycmF5ID0gKGFycmF5LCB0YXNrKSA9PiB7XG4gIGFycmF5LnB1c2godGFzayk7XG4gIHVwZGF0ZVN0b3JhZ2UoKTtcbn1cblxuIGV4cG9ydCBjb25zdCBkZWxldGVUYXNrRnJvbUFycmF5ID0gKGFycmF5LCB0YXNrSWQpID0+IHtcbiAgbGV0IGluZGV4ID0gZmluZEluZGV4QnlJZChhcnJheSwgdGFza0lkKTtcbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIHVwZGF0ZVN0b3JhZ2UoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmdWxsRGVsZXRlVGFzayA9IChpZCkgPT4ge1xuICBkZWxldGVUYXNrRnJvbUFycmF5KGFsbFRhc2tzLCBpZCk7XG4gIGZvciAobGV0IHByb2plY3Qgb2YgYWxsUHJvamVjdHMpIHtcbiAgICBkZWxldGVUYXNrRnJvbUFycmF5KHByb2plY3QudGFza3MsIGlkKTtcbiAgfVxufTtcblxuY29uc3QgZWRpdFRhc2tJblByb2plY3QgPSAoaWQsIG5hbWUsIGRlc2MsIGNvbG9yLCBwcm9qZWN0VGFza3MpID0+IHtcbiAgbGV0IHRhc2sgPSBwcm9qZWN0VGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT09IGlkKTtcbiAgLy8gSWYgdGhlIHRhc2sgaXMgZm91bmQsIHVwZGF0ZSBpdHMgcHJvcGVydGllc1xuICBpZiAodGFzaykge1xuICAgIGlmIChuYW1lKSB7XG4gICAgICB0YXNrLm5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICBpZiAoZGVzYykge1xuICAgICAgdGFzay5kZXNjID0gZGVzYztcbiAgICB9XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICB0YXNrLmNvbG9yID0gY29sb3I7XG4gICAgfVxuICB9XG5cbn1cbiBcbmV4cG9ydCBjb25zdCBlZGl0VGFzayA9IChpZCwgbmFtZSwgZGVzYywgY29sb3IpID0+IHtcbiAgZm9yIChsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0cyl7XG4gICAgZWRpdFRhc2tJblByb2plY3QoaWQsIG5hbWUsIGRlc2MsIGNvbG9yLCBwcm9qZWN0LnRhc2tzKTtcbiAgfVxuICB1cGRhdGVTdG9yYWdlKCk7XG59XG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGFsbFRhc2tzIH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7IHVwZGF0ZVByb2plY3RzLCBjcmVhdGVQcm9qZWN0LCBhbGxQcm9qZWN0cywgY3JlYXRlRGVmYXVsdFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgaW5pdER5bmFtaWNDb250ZW50IH0gZnJvbSBcIi4vZ3VpLmpzXCI7XG5pbXBvcnQgeyBpbml0Rm9ybXMgfSBmcm9tIFwiLi9mb3Jtc1wiO1xuXG4vL0xvYWQgZnJvbSBzdG9yYWdlXG51cGRhdGVQcm9qZWN0cygpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBjaGVja0FsbFRhc2tzID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIC8vV2FpdCBmb3IgIHN0b3JhZ2UgdG8gcG9wdWxhdGVcbiAgICBpZiAoXG4gICAgICBsb2NhbFN0b3JhZ2UuYWxsVGFza3MgPT09IEpTT04uc3RyaW5naWZ5KGFsbFRhc2tzKSAmJlxuICAgICAgbG9jYWxTdG9yYWdlLmFsbFByb2plY3RzID09PSBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cylcbiAgICApIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoY2hlY2tBbGxUYXNrcyk7XG4gICAgICAvL0lmIG5vIHByb2plY3RzIGV4aXN0IHlldCwgY3JlYXRlIGRlZmF1bHQgQWxsIFRhc2tzIHByb2plY3RcbiAgICAgIGlmIChhbGxQcm9qZWN0c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNyZWF0ZURlZmF1bHRQcm9qZWN0KCk7XG4gICAgICB9XG4gICAgICAvL0FkZCBhbGwgc3RvcmVkIHRhc2tzIHRvIEFsbCBUYXNrc1xuICAgICAgYWxsUHJvamVjdHNbMF0udGFza3MgPSBhbGxUYXNrcztcbiAgICAgIC8vSW5pdCBwYWdlXG4gICAgICBpbml0RHluYW1pY0NvbnRlbnQoKTtcbiAgICAgIGluaXRGb3JtcygpO1xuICAgIH1cbiAgfSwgMTAwKTsgLy8gQ2hlY2sgZXZlcnkgMTAwIG1pbGxpc2Vjb25kc1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=