/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Josefin.ttf */ \"./src/Josefin.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./dancing.ttf */ \"./src/dancing.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/img/back.jpg */ \"./src/img/back.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: josefin;\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n@font-face {\n    font-family: dancing;\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n@keyframes appear {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\nh1, h2, h3, p {\n    margin: 0;\n    padding: 0;\n}\n\n/*index.js*/\nbody,\nhtml,\n#content {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n}\n\n.back {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n    background-size: 100%;\n    height: 100%;\n    filter: blur(15px);\n    -webkit-filter: blur(15px);\n    animation: backgrAppear 2s;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: 10rem auto 3rem;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 5;\n}\n\n.heading {\n    grid-row: 1 / 2;\n    color: white;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 2px solid rgb(227, 180, 93);\n    gap: .5rem;\n    animation: appear 3s;\n    /*background-color: rgb(242, 182, 77);\n    /*opacity: 0.5;*/\n}\n\n.footer {\n    grid-row: 3 / 4;\n    background-color: rgb(0, 0, 0, 0.6);\n    font-size: 1.5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    animation: appear 3s;\n}\n\n.disabled {\n    display: none;\n}\n\n.on {\n    display:block;\n}\n\n.section,\n.active {\n    flex: 0 0 auto;\n    font-size: 1.3rem;\n    font-weight: 600;    \n    text-transform: uppercase;\n    padding: 1.2rem;\n    transition: transform 0.7s, border-bottom 0.3s;\n}\n\n.active {\n    border-bottom: 2px solid rgb(227, 180, 93);\n}\n\n.section:hover {\n    transform: translateY(-.3rem);\n    border-bottom: 2px solid rgb(227, 180, 93);\n}\n\n.mainContent {\n    grid-row: 2 / 3;\n    /*overflow-y: auto;*/\n}\n\n/*.backgr {\n    background-color: black;\n    grid-row: 2 / 3;\n    position: absolute;\n    animation: backgrTransition 0.9s;\n}*/\n\n\n/*home.js*/\n/*.homeMainContent {\n    /*grid-row: 2 / 3;\n    color: white;\n    font-size: 5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-radius: 15px;\n    animation: appear 2s ease-in-out;\n}*/\n\n.restName {\n    flex: 0;\n    margin-bottom: 2.4rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n}\n\n.companyName {\n    font-family: josefin;\n    text-transform: uppercase;\n    font-weight: 700;\n    font-size: 4rem;\n    color: white;\n}\n\n.subname {\n    font-family: dancing;\n    font-size: 3rem;\n    margin-bottom: -15px;\n    color:rgb(227, 180, 93);\n    letter-spacing: .2rem;\n}\n\n.menuBtn {\n    flex-basis: auto;\n    padding: 0.7rem;\n    font-size: 1.5rem;\n    background-color: rgb(227, 180, 93);\n    color: black;\n    margin-top: 2.7rem;\n    border-radius: 10px;\n    box-shadow: 2px black;\n    transition: all 1s;\n}\n\n.menuBtn:hover {\n    background-color: black;\n    color: white;\n}\n\n.info {\n    font-size: 1.5rem;\n    color: white;\n    font-style: italic;\n    margin-top: 1.8rem;\n}\n\n.emptyDiv {\n    width: 15rem;\n    border: 2px solid rgb(227, 180, 93);\n}\n\n/*Menu and about page*/\n.menuMainContent,\n.aboutMainContent {\n    height: 100%;\n    background-color: white;\n    /*grid-row: 2 / 3;*/\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 1.5rem;\n    overflow-y: scroll;\n    animation: appear 2s ease-in-out;\n}\n\n.menuMainContent::-webkit-scrollbar {\n    width: 3px;\n}\n\n.menuDiv,\n.aboutDiv {\n    padding-top: 2rem;\n    flex: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n}\n\n.menuHeading,\n.aboutHeading {\n    font-size: 3.5rem;\n    color: black;\n    text-transform: uppercase;\n    font-weight: 700;\n    margin-top:-.6rem;\n}\n\n.menuList {\n    flex: 0;\n    display: grid;\n    grid-template-rows: repeat(4, min-content);\n    grid-template-columns: 550px 550px;\n    gap: 3rem;\n}\n\n.lot {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr 3fr;\n    column-gap: 1rem;\n    row-gap: .7rem;\n    align-items: center;\n    background-color: rgb(250, 250, 250);\n    padding: 1.5rem;\n    border-radius: 10px;\n}\n\n.lotTitle {\n    grid-area: 1 / 2 / 2 / 3;\n    font-size: 1.5rem;\n    color: rgb(227, 180, 93);\n    font-style: italic;\n    font-weight: bold;\n}\n\n.lotPic {\n    grid-area: 1 / 1 / 3 / 2;\n    width: 100%;\n    border-radius: 20px;\n}\n\n.lotInfo {\n    grid-area: 2 / 2 / -1 / -1;\n    font-size: 1.3rem;\n    align-self: start;\n}\n\n.emptyDivMenu {\n    width: 45%;\n    border: 2px solid rgb(227, 180, 93);\n}\n\n.manifesto {\n    width: 50%;\n    font-size: 2rem;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    margin-top: 2rem;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n\n.menuMainContent,\n.aboutMainContent, \n.homeMainContent {\n    width: 100%;\n    height: 100%;\n}\n\n.icon {\n    flex: 0;\n    background-size:contain;\n    filter: invert(100%);\n}\n\n.brand {\n    display: flex;\n    justify-self: start;\n}\n\na {\n    /*background-color: lightgray;*/\n    color: black;\n    text-decoration: none;\n    font-weight: 900;\n}\n\na:visited {\n    color: black;\n    text-decoration: none;\n}\n\na:hover {\n    background-color: rgb(116, 116, 255);\n}\n\n.contactDiv {\n    width: 500px;\n    display: flex;\n    gap: 20px;\n    align-items: center;\n}\n\n.contactLogo {\n   width: 80px;\n   height: 80px;\n}\n\n.contLnk {\n    border-radius: 15px;\n    padding: 5px;\n    transition: all 1s;\n}\n\n.contLnk:hover {\n    background-color: black;\n    color: white;\n    transform: translateY(-3px);\n}\n\n/*sketch*/\n/*body {\n    background-color: gray;\n}*/\n\n.h1Sketch {\n    font-size: 36px;\n    font-weight: bold;\n    text-align: center;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#gridContainer {\n    background-color: white;\n    box-sizing: content-box;\n    width: 608px;\n    height: 608px;\n    border: 3px solid black;\n    margin: 10px auto;\n    display: flex;\n    flex-flow: row wrap;\n}\n\n#gridContainer div {\n    border: 1px gray solid;\n    box-sizing: border-box;\n    flex: 1 38px;\n}\n\n.sketchBtn {\n    height: 50px;\n    width: 100px;\n    border-radius: 10px;\n    background-color: lightblue;\n    border: 2px black solid;\n    color: rgb(81, 81, 81);\n    font-weight: 500;\n}\n\n.btnsSketch {\n    display: flex;\n    gap: 20px;\n}\n\n\n/*tic-tac-toe*/\n/*html,\nbody {\n    height: 100%;\n    width: 100%;\n    padding: 0 0 60px 0;\n    margin: 0;\n    background-color: azure;\n}*/\n\n.ticTacToe.on {\n    /*width: 100%;\n    height: 100%;*/\n    display: grid;\n    grid-template-columns: 3fr 6fr 3fr;\n    grid-template-rows: 2fr 10fr 2fr 2fr;\n    background-color: lightgray;\n}\n\n.ticTacToe .field {\n    grid-area: 2 / 1 / 3 / -1;\n    align-self: center;\n    justify-self: center;\n\n    display: grid;\n    grid-template-columns: repeat(3, 200px);\n    grid-template-rows: repeat(3, 200px);\n\n    border: 2px solid black;\n    background-color: white;\n    font-size: 100px;\n\n    transition: transform 0.9s, background-color 2s;\n}\n\n.ticTacToe .gameName {\n    grid-area: 1 / 2 / 2 / 3;\n\n    justify-content: flex-start;\n}\n\n\n.ticTacToe form {\n    grid-area: 3 / 1 / 4 / 4;\n}\n\n.ticTacToe .btns {\n    grid-area: 4 / 1 / 5 / 4;\n}\n\n.ticTacToe form {\n    display: flex;\n    gap: 40px;\n    justify-content: center;\n    align-items: center;\n}\n\n.ticTacToe .btns {\n    display: flex;\n    gap: 100px;\n    justify-content: center;\n    align-items: center;\n}\n\n.ticTacToe .gameName,\n.ticTacToe .player{\n    font-size: 50px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.ticTacToe .gameName > *,\n.ticTacToe .player {\n    padding: 2rem;\n    margin: 0;\n}\n\n.ticTacToe .player {\n    margin-top: 3rem;\n}\n\n.ticTacToe .gameName .winHead {\n    height: 30%;\n}\n\n.ticTacToe form input {\n    height: 1.5rem;\n    width: 100%;\n    border-radius: 15px;\n    padding-left: 12px;\n    font-size: 1.2rem;\n}\n\n.ticTacToe form .inpt {\n    width: 13%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 20px;\n    gap: 4px;\n    font-size: 1.3rem;\n}\n\n.field > * {\n    display: flex;\n    border: 2px solid black;\n    justify-content: center;\n    align-items: center;\n}\n\n.ticTacToe h2 {\n    font: inherit;\n}\n.ticTacToe .field div:hover {\n    border: 3px rgb(106, 255, 106) solid;\n    background-color: rgb(207, 207, 207);\n    color: rgb(114, 114, 114);\n}\n\n.ticTacToe .field div {\n    transition: background-color 0.7s;\n}\n\n.ticTacToe .field:hover {\n    transform: translateY(-2%);\n    border: 3px black solid;\n}\n\n\n.ticTacToe .btns {\n    margin-top: 30px;\n}\n.ticTacToe .btns button,\n.dialog button {\n    width: 7rem;\n    height: 3rem;\n    border-radius: 20px;\n    background-color: rgb(100, 173, 255);\n    color: white;\n    font-size: 1.2rem;\n    font-weight: 900;\n\n    transition: background-color 0.7s;\n}\n\n.ticTacToe .btns button:hover,\n.dialog button:hover {\n    background-color: rgb(99, 99, 255);\n}\n\n.ticTacToe .player .green {\n    color: rgb(40, 174, 40);\n    text-shadow: black 2px 2px;\n    font-weight: bold;\n    font-size: 60px;\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\n}\n\n.dialog {\n    position: absolute;\n    width: 60%;\n    height: 20%;\n    text-align: center;\n    border-radius: 15px;\n    background-color: azure;\n}\n\n.dialog .congrats {\n    font-size: 3rem;\n    font-style: italic;\n    font-weight: bold;\n    text-align: center;\n    padding: 30px;\n}\n\ndialog::backdrop {\n    backdrop-filter: blur(6px);\n}\n\n\n\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://au-project2/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://au-project2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://au-project2/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://au-project2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://au-project2/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://au-project2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://au-project2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://au-project2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://au-project2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://au-project2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://au-project2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homeMainContent: () => (/* binding */ homeMainContent),\n/* harmony export */   renderHome: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\n\n\nconst homeMainContent = document.createElement('div');\n\nfunction render () {\n}\n\n\n\n\n//# sourceURL=webpack://au-project2/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mainContent: () => (/* binding */ mainContent)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _sketch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sketch */ \"./src/sketch.js\");\n/* harmony import */ var _ticTacToe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ticTacToe */ \"./src/ticTacToe.js\");\n/* harmony import */ var _img_meteor_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/meteor.svg */ \"./src/img/meteor.svg\");\n\n\n\n\n\n\n\n\nconst homeSection = document.querySelector('#home');\nconst menuSection = document.querySelector('#menu');\nconst aboutSection = document.querySelector('#about');\nconst mainContent = document.querySelector('.mainContent');\nconst sketch = document.querySelector('.sketch');\nconst homePage = document.querySelector('.homePage');\nconst ticTacToe = document.querySelector('.ticTacToe');\ndocument.querySelector('.icon').src = _img_meteor_svg__WEBPACK_IMPORTED_MODULE_4__;\n\n\nfunction checkReset () {\n    if (homeSection.getAttribute('class') == 'active') {\n        homeSection.classList.remove('active');\n        homeSection.classList.add('section');\n    }\n    else if (menuSection.getAttribute('class') == 'active') {\n        menuSection.classList.remove('active');\n        menuSection.classList.add('section');\n    }\n    else if (aboutSection.getAttribute('class') == 'active') {\n        aboutSection.classList.remove('active');\n        aboutSection.classList.add('section');\n    }\n    else {return;}\n} \n\nfunction home () {\n    checkReset();\n    homeSection.classList.remove('section');\n    homeSection.classList.add('active');\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__.renderHome)();\n\n    const ons = document.querySelectorAll('.on');\n    ons.forEach(on => {\n        on.classList.remove('on');\n        on.classList.add('disabled');\n    })\n    homePage.classList.add('on');\n\n}\n\nfunction menu () {\n    checkReset();\n    menuSection.classList.remove('section');\n    menuSection.classList.add('active');\n    (0,_sketch__WEBPACK_IMPORTED_MODULE_2__.renderMenu)();\n\n    const ons = document.querySelectorAll('.on');\n    ons.forEach(on => {\n        on.classList.remove('on');\n        on.classList.add('disabled');\n    })\n    sketch.classList.add('on');\n\n}\n\nfunction about () {\n    checkReset();\n    aboutSection.classList.remove('section');\n    aboutSection.classList.add('active');\n    (0,_ticTacToe__WEBPACK_IMPORTED_MODULE_3__.renderAbout)();\n\n    const ons = document.querySelectorAll('.on');\n    ons.forEach(on => {\n        on.classList.remove('on');\n        on.classList.add('disabled');\n    })\n    ticTacToe.classList.add('on');\n}\n\nhome();\n\ndocument.addEventListener('click', (e) => {\n    let target = e.target.getAttribute('id');\n    switch (target) {\n        case \"menu\": \n            menu();\n            break;\n        case \"menuBtn\":\n            menu();\n            break; \n        case \"home\":\n            home();\n            break;\n        case \"about\": \n            about();\n            break;\n    }\n})\n\n\n\n//# sourceURL=webpack://au-project2/./src/index.js?");

/***/ }),

/***/ "./src/sketch.js":
/*!***********************!*\
  !*** ./src/sketch.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMenu: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\n\n\nfunction render () {\n    let gridContainer = document.querySelector('#gridContainer');\n    let btnResize = document.querySelector('.resize');\n    let btnChangeColor = document.querySelector('.changeColor');\n    let btnToBlack = document.querySelector('.blackColor');\n    let gridSquare; \n    let allGridSquares;\n    let number = 16*16;\n    let userNumber;\n    let size;\n    \n    function generateGrid () {\n        for (let i =1; i<=number; i++){\n            gridSquare = document.createElement('div');\n            gridSquare.classList.add('cell');\n            gridContainer.appendChild(gridSquare);\n        }\n    }\n    \n    function setBlackColor () {\n        this.style.backgroundColor = 'black';\n    }\n    \n    function setColorTo () {\n        this.style.backgroundColor = getRandomColor();\n    }\n    \n    function mouseOverEvent () {\n        allGridSquares = document.querySelectorAll('.cell');\n        for (let i = 0; i<allGridSquares.length; i++) {\n            allGridSquares[i].addEventListener('mouseover', setBlackColor);\n        }\n    }\n    \n    function clearGrid () {\n        while (gridContainer.hasChildNodes()){\n            gridContainer.removeChild(gridContainer.firstChild);\n        }\n    }\n    \n    function setFlexBasis () {\n        size = 608/userNumber + 'px';\n        for (let i = 0; i<allGridSquares.length; i++) {\n            allGridSquares[i].style.flexBasis = size;\n        }\n    }\n    \n    function resizeGrid () {\n        for (let i = 0; i < allGridSquares.length; i++) {\n            allGridSquares[i].style.backgroundColor = \"white\";\n        }\n        \n        userNumber = +prompt(\"What size do you want to apply?\", '16');\n    \n        if (userNumber==0) {\n            userNumber = 8;\n        } else if (userNumber>100) {\n            userNumber= 100;\n        } else if (userNumber<8){\n            userNumber = 8;\n        }\n        number = userNumber*userNumber;\n    \n        clearGrid();\n        generateGrid();\n        mouseOverEvent();\n        setFlexBasis();\n    }\n    \n    function getRandomColor () {\n        let r = Math.floor(Math.random()*255);\n        let g = Math.floor(Math.random()*255);\n        let b = Math.floor(Math.random()*255);\n        let clr = `rgb(${r}, ${g}, ${b})`;\n    \n        return clr;\n    }\n    \n    function setColor () {\n        allGridSquares=document.querySelectorAll('.cell');\n    \n        for (let i = 0; i<allGridSquares.length; i++){\n            allGridSquares[i].removeEventListener('mouseover', setBlackColor);\n            allGridSquares[i].addEventListener('mouseover', setColorTo);\n        }\n    }\n    \n    function backToBlack () {\n        allGridSquares=document.querySelectorAll('.cell');\n    \n        for (let i = 0; i<allGridSquares.length; i++){\n            allGridSquares[i].removeEventListener('mouseover', setColorTo);\n            allGridSquares[i].addEventListener('mouseover', setBlackColor);\n        }\n    \n    }\n    \n    generateGrid();\n    mouseOverEvent();\n    \n    btnResize.addEventListener('click', resizeGrid);\n    btnChangeColor.addEventListener('click', setColor);\n    btnToBlack.addEventListener('click', backToBlack);    \n}\n\n\n\n//# sourceURL=webpack://au-project2/./src/sketch.js?");

/***/ }),

/***/ "./src/ticTacToe.js":
/*!**************************!*\
  !*** ./src/ticTacToe.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAbout: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\n\nfunction render () {\n    function Player (playerName, marker) {\n        return {playerName, marker}\n    }\n    \n    const game = (() => {\n        const clickToStart = document.createElement('div');\n        const container = document.querySelector('.ticTacToe');\n        const playerOneName = document.querySelector('.playerOneName');\n        const playerTwoName = document.querySelector('.playerTwoName');\n        const inputNameOne = document.querySelector('#nameOne');\n        const inputNameTwo = document.querySelector('#nameTwo');\n        const dialog = document.querySelector('.dialog');\n        const congratsOnWin = document.querySelector('.congrats');\n        const dialogCloseBtn = document.querySelector('.close')\n            .addEventListener('click', () => {\n                dialog.close();\n            })\n    \n        clickToStart.textContent = \"CLICK THE START BUTTON TO START THE GAME\";\n        clickToStart.setAttribute('style', 'font-size: 30px; color:black; position: absolute; top:45%; left: 35%; right: 35%; text-align:center;');\n        container.appendChild(clickToStart);\n    \n        let playerOne;\n        let playerTwo;\n        let currentPlayer;\n        let freeCells;\n        let winnerClaimed;\n    \n        function start () {\n            playerOne = Player (inputNameOne.value || 'Player One', 'X');\n            playerTwo = Player (inputNameTwo.value || 'Player Two', 'O');\n    \n            playerOneName.textContent = playerOne.playerName;\n            playerTwoName.textContent = playerTwo.playerName;\n            playerOneName.classList.add('green');\n    \n            inputNameOne.value = '';\n            inputNameTwo.value = '';\n    \n            currentPlayer = playerOne;\n            freeCells = 9;\n            winnerClaimed = false;\n    \n            if (container.contains(clickToStart)){\n                container.removeChild(container.lastChild);\n            }\n    \n            gameBoard.render();\n        }\n    \n        function restart() {\n            for (let i = 0; i < gameBoard.board.length; i++) {\n                gameBoard.board[i] = '';\n            }\n    \n            while(gameBoard.gameField.hasChildNodes()){\n                gameBoard.gameField.removeChild(gameBoard.gameField.lastChild);\n            }    \n    \n            playerOneName.classList.remove('green');\n            playerTwoName.classList.remove('green');\n            start();\n        }\n    \n        const winnigPattern = [\n            [0, 1, 2],\n            [3, 4, 5],\n            [6, 7, 8],\n            [0, 3, 6],\n            [1, 4, 7],\n            [2, 5, 8],\n            [2, 4, 6],\n            [0, 4, 8],\n        ];\n    \n        function checkWinner () {\n            winnigPattern.forEach(pattern => {\n                if (gameBoard.board[pattern[0]] === '' ||\n                    gameBoard.board[pattern[1]]  === '' ||\n                    gameBoard.board[pattern[2]]  === '' ) { \n                        return;\n                    }\n    \n                if (gameBoard.board[pattern[0]]  === currentPlayer.marker &&\n                    gameBoard.board[pattern[1]] === currentPlayer.marker &&\n                    gameBoard.board[pattern[2]]  === currentPlayer.marker) {\n                        winnerClaimed = true;\n                        markWinLine(pattern);\n                        congratsOnWin.textContent = `${currentPlayer.playerName} is the winner!`;\n                        setTimeout(() => {dialog.showModal()}, 1000);\n                    }\n            })\n        }\n    \n        function markWinLine (pattern) {\n            let ind;\n            let cells = document.querySelectorAll('.cell');\n            for (let i = 0; i < pattern.length; i++) {\n                cells.forEach(elem => {\n                    ind = elem.getAttribute('data-ind');\n                    if (ind == pattern[i]) {\n                        elem.style.background = '#90EE90';\n                    }\n                })\n            }\n        }\n    \n        function switchPlayer () {\n            if (currentPlayer == playerOne) {\n                playerOneName.classList.remove('green');\n                playerTwoName.classList.add('green');\n            } else if (currentPlayer == playerTwo) {\n                playerTwoName.classList.remove('green');\n                playerOneName.classList.add('green');\n            }\n            currentPlayer === playerOne ? currentPlayer = playerTwo : currentPlayer = playerOne;\n        }\n    \n        function claimTie () {\n            winnerClaimed = true;\n            congratsOnWin.textContent = `It's a tie`;\n            setTimeout(() => {dialog.showModal()}, 1000);\n        }\n    \n        function handleCLick(event) {\n            let ind = event.target.getAttribute('data-ind');\n    \n            event.target.textContent = currentPlayer.marker;\n            gameBoard.board[ind] = currentPlayer.marker;\n            freeCells--;\n    \n            event.target.removeEventListener('click', handleCLick);\n            checkWinner();\n    \n            if (winnerClaimed){\n                currentPlayer.marker = '';\n            }\n    \n            if (!winnerClaimed) {\n                if (freeCells > 0){\n                    switchPlayer();\n                }\n                else if (freeCells == 0){\n                    claimTie();\n                }    \n            }\n        }\n    \n        return {\n            checkWinner,\n            switchPlayer,\n            claimTie,\n            start,\n            currentPlayer,\n            freeCells,\n            winnerClaimed,\n            handleCLick,\n            restart,\n        }\n    })();\n    \n    const gameBoard = (() => {\n        const gameField = document.querySelector('.field');\n        let board = [];\n        for (let i = 0; i < 9; i++){\n            board.push('');\n        }\n    \n        function render() {\n        \n            board.forEach((cell, index) => {\n                cell = document.createElement('div');\n                cell.classList.add('cell');\n                cell.setAttribute('data-ind', index);\n                gameField.appendChild(cell);\n            })\n    \n            const cells = document.querySelectorAll('.cell');\n        \n            cells.forEach(cell => {\n                cell.addEventListener('click', game.handleCLick);\n            })\n        }\n    \n        return {\n            board,\n            render,\n            gameField,\n        };\n    })();\n    \n    const btnStart = document.querySelector('.start');\n    btnStart.addEventListener('click', handleStart);\n    function handleStart (e) {\n        game.start();\n        e.target.removeEventListener('click', handleStart);\n    }\n    \n    const btnRestart = document.querySelector('.restart')\n        .addEventListener('click', () => {\n            game.restart();\n    })    \n}\n\n\n//# sourceURL=webpack://au-project2/./src/ticTacToe.js?");

/***/ }),

/***/ "./src/Josefin.ttf":
/*!*************************!*\
  !*** ./src/Josefin.ttf ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"Josefin.ttf\";\n\n//# sourceURL=webpack://au-project2/./src/Josefin.ttf?");

/***/ }),

/***/ "./src/dancing.ttf":
/*!*************************!*\
  !*** ./src/dancing.ttf ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dancing.ttf\";\n\n//# sourceURL=webpack://au-project2/./src/dancing.ttf?");

/***/ }),

/***/ "./src/img/back.jpg":
/*!**************************!*\
  !*** ./src/img/back.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"back.jpg\";\n\n//# sourceURL=webpack://au-project2/./src/img/back.jpg?");

/***/ }),

/***/ "./src/img/meteor.svg":
/*!****************************!*\
  !*** ./src/img/meteor.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"meteor.svg\";\n\n//# sourceURL=webpack://au-project2/./src/img/meteor.svg?");

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
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
/******/ 			"filename": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;