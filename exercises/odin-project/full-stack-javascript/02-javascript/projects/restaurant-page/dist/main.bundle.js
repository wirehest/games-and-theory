"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/rewards-background.jpg */ "./src/assets/images/rewards-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.bunny.net/css?family=abril-fatface:400|arizonia:400|asap:600);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  /*border: 1px solid red;*/
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --color-window: #e0e1dd;
  --color-brand: #ff7d00;
  --color-brand-darker: #de6d00ff;
  --color-brand-lighter: #ffe1c4ff;
  --color-accent: #808080ff;
  --breakpoint: 350px;
}

/* common */
body {
  display: grid;
  font-family: 'Asap', sans-serif;
  font-size: 22px;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
}

header {
  align-items: center;
  border-bottom: 1px solid var(--color-accent);
  box-shadow: 0 0 8px #000;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--breakpoint), 1fr));
  max-width: 1600px;
  width: 100vw;
}

.header-left,
.header-middle,
.header-right {
  display: flex;
  gap: 20px;
  padding: 10px 30px;
}

.header-middle {
  color: var(--color-brand);
  font-family: 'Abril Fatface', display;
  font-size: 2.2rem;
  font-variant-caps: small-caps;
  justify-content: center;
  -webkit-text-stroke: 1px var(--color-brand-darker);
  paint-order: stroke fill;
}

.header-right {
  justify-content: end;
}

footer {
  align-items: center;
  display: flex;
  font-size: 0.8rem;
  justify-content: center;
  height: 40px;
  text-align: center;
}

/* content div */
#content {
  background: var(--color-window);
  display: flex;
  justify-content: center;
  max-width: 1600px;
  opacity: 0.95;
  overflow: scroll;
}

/* main page */
.home-container {
  display: grid;
  gap: 4vw;
  grid-template-columns: repeat(auto-fit, minmax(var(--breakpoint), 1fr));
  justify-items: center;
  height: 100%;
  padding: 4vw;
}

.home-container section {
  align-self: end;
  background: #ffffffcc;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 380px;
  padding: 2.5vmax;
  width: min(570px, 100%);
}

.home-container > section > h1 {
  font-size: 2.5rem;
  line-height: 2.4rem;
  width: min(450px, 100%);
}

.home-container > section > p {
  font-size: 1.3rem;
  font-weight: 600;
  flex: 1;
  line-height: 1.25rem;
  width: min(480px, 100%);
}

.special {
  align-items: center;
  background: #00b4d8;
  border-radius: 50%;
  color: #fff;
  display: flex;
  flex-flow: column;
  font-weight: 900;
  height: 250px;
  justify-content: center;
  justify-self: flex-end;
  line-height: 5rem;
  margin-right: 10%;
  outline: 10px solid #00667bff;
  transform: rotate(15deg);
  width: 250px;
}

.special > p {
  font-size: 1.8rem;
  line-height: 2rem;
}
.special-price {
  display: flex;
  font-size: 4.5rem;
  height: 6rem;
  letter-spacing: -0.2rem;
}

.special-price-sym {
  font-size: 3rem;
}

.special-price-dollars {
  align-self: flex-end;
  font-size: 9.5rem;
}

.special-price-cents {
  align-self: center;
  font-size: 4rem;
}

.content-buttons {
  display: flex;
  flex-flow: row wrap;
  gap: 2vw;
}

/* menu page */
.menu-container {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fit, var(--breakpoint));
  grid-auto-rows: 265px;
  height: fit-content;
  width: max(var(--breakpoint), 75%);
  justify-content: center;
  padding: 4vw 0;
}

.menu-item {
  align-items: flex-end;
  background: #fff;
  border-radius: 20px;
  display: flex;
  font-weight: 900;
  justify-content: center;
  padding: 20px;
  width: 100%;
}

.menu-image {
  height: auto;
  width: var(--breakpoint);
}

/* catering & locations pages */
.catering-container,
.locations-container {
  align-items: center;
  background: var(--color-brand);
  color: #fff;
  display: flex;
  flex-flow: column nowrap;
  height: fit-content;
  min-height: 100%;
  padding-bottom: 4vw;
  text-align: center;
  width: max(var(--breakpoint), 75%);
}

:is(.catering-container, .locations-container) > img {
  border-bottom: 1px solid var(--color-brand-darker);
  margin-bottom: 15px;
  min-height: 60vh;
  object-fit: cover;
  width: 100%;
}

:is(.catering-container, .locations-container) > :is(h1, h2) {
  padding: 0 4vw;
}

:is(.catering-container, .locations-container) > p {
  max-width: 50rem;
  margin-bottom: 20px;
  padding: 0 20px;
}

.locations-container > address {
  color: var(--color-brand-lighter);
  text-align: left;
}

/* rewards page */
.rewards-container {
  color: white;
  display: flex;
  flex-flow: row nowrap;
  width: 100vw;
}

.rewards-container > section {
  align-items: flex-start;
  background: var(--color-brand);
  color: #fff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 0 20px;
  width: 35%;
}

.rewards-hero {
  background: content-box center/cover
    url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  flex: 1;
  min-height: 500px;
  width: 65%;
}

.rewards-container h1 {
  font-size: 3rem;
  margin-top: 2rem;
}

.rewards-container h2 {
  font-size: 2rem;
  position: relative;
}

.rewards-leeroys {
  font-family: 'Abril Fatface', display;
  font-size: 3rem;
  font-variant-caps: small-caps;
  position: relative;
  left: 4.5rem;
  top: 3.9rem;
}

.rewards-name {
  font-family: 'Arizonia', handwriting;
  font-size: 6rem;
}

/* signin page */
.signin-container {
  background: #fff;
  border-radius: 20px;
  color: var(--color-accent);
  display: flex;
  flex-flow: column nowrap;
  font-size: 1rem;
  gap: 20px;
  height: fit-content;
  justify-content: center;
  margin: 4vw;
  max-width: 500px;
  padding: 50px 4vw 70px;
  width: 100%;
}

.signin-container > form {
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
}

.signin-container :is(label, input, span) {
  display: block;
}

.signin-container h1 {
  color: var(--color-brand);
  font-size: 1.3rem;
}

.signin-container input {
  border-radius: 4px;
  padding: 5px 5px 5px 10px;
  width: 100%;
}

.remember-checkbox {
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
}

#remember {
  width: fit-content;
}

.new-account {
  display: flex;
  flex-flow: row nowrap;
  gap: 0.3rem;
}

.new-account-link:hover {
  text-decoration: underline;
}

/* buttons */
button {
  background: none;
  border: 0;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  outline: none;
  text-decoration: none;
}

nav > button:hover {
  text-decoration: underline;
}

button.cater-order {
  background: #fff;
  border: 2px solid #fff;
  border-radius: 100vmax;
  color: var(--color-brand);
  font-size: 1.7rem;
  margin-top: 20px;
  padding: 10px 40px;
}

button.rewards-order {
  background: #fff;
  border: 2px solid #fff;
  border-radius: 100vmax;
  color: var(--color-brand);
  font-size: 1.5rem;
  margin: 40px;
  padding: 10px 25px;
}

button.order-content {
  align-items: center;
  background: var(--color-brand);
  border: 2px solid #fff;
  border-radius: 100vmax;
  color: #fff;
  flex: 1 0 auto;
  font-size: 1.1rem;
  padding: 5px 20px;
}

.icon {
  content: '';
  display: inline-block;
  /*filter: invert(100%) sepia(4%) saturate(7485%) hue-rotate(309deg)*/
  /*  brightness(108%) contrast(109%);*/
  height: 35px;
  margin-right: 10px;
  width: 35px;
}

button.signin-top {
  font-size: 1rem;
  border: 2px solid var(--color-brand);
  border-radius: 20px;
  color: var(--color-brand);
  padding: 8px 40px;
}

button.order-content:hover {
  background: var(--color-brand-darker);
}

button.signin-top:hover,
button.cater-order:hover,
button.rewards-order:hover {
  background: var(--color-brand-lighter);
}

button.signin-top:active {
  outline: 3px solid var(--color-accent);
}

button.order-content:active,
button.cater-order:active,
button.rewards-order:active {
  outline: 4px solid var(--color-accent);
}

.signin-container button {
  background: var(--color-accent);
  border-radius: 6px;
  color: #fff;
  padding: 4px 15px;
  width: min-content;
}

.signin-container button:hover {
  background: var(--color-brand-darker);
}

/* mobile styling */
@media (max-width: 768px) {
  .header-left,
  .header-right {
    justify-content: center;
  }

  .header-middle {
    order: -1;
  }

  .special {
    margin-right: 0%;
    justify-self: center;
    transform: rotate(0deg);
  }

  .rewards-container > section {
    width: 100%;
  }

  button.rewards-order {
    align-self: center;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(https://fonts.bunny.net/css?family=abril-fatface:400|arizonia:400|asap:600);\n\n* {\n  /*border: 1px solid red;*/\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --color-window: #e0e1dd;\n  --color-brand: #ff7d00;\n  --color-brand-darker: #de6d00ff;\n  --color-brand-lighter: #ffe1c4ff;\n  --color-accent: #808080ff;\n  --breakpoint: 350px;\n}\n\n/* common */\nbody {\n  display: grid;\n  font-family: 'Asap', sans-serif;\n  font-size: 22px;\n  grid-template-rows: auto 1fr auto;\n  height: 100vh;\n}\n\nheader {\n  align-items: center;\n  border-bottom: 1px solid var(--color-accent);\n  box-shadow: 0 0 8px #000;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(var(--breakpoint), 1fr));\n  max-width: 1600px;\n  width: 100vw;\n}\n\n.header-left,\n.header-middle,\n.header-right {\n  display: flex;\n  gap: 20px;\n  padding: 10px 30px;\n}\n\n.header-middle {\n  color: var(--color-brand);\n  font-family: 'Abril Fatface', display;\n  font-size: 2.2rem;\n  font-variant-caps: small-caps;\n  justify-content: center;\n  -webkit-text-stroke: 1px var(--color-brand-darker);\n  paint-order: stroke fill;\n}\n\n.header-right {\n  justify-content: end;\n}\n\nfooter {\n  align-items: center;\n  display: flex;\n  font-size: 0.8rem;\n  justify-content: center;\n  height: 40px;\n  text-align: center;\n}\n\n/* content div */\n#content {\n  background: var(--color-window);\n  display: flex;\n  justify-content: center;\n  max-width: 1600px;\n  opacity: 0.95;\n  overflow: scroll;\n}\n\n/* main page */\n.home-container {\n  display: grid;\n  gap: 4vw;\n  grid-template-columns: repeat(auto-fit, minmax(var(--breakpoint), 1fr));\n  justify-items: center;\n  height: 100%;\n  padding: 4vw;\n}\n\n.home-container section {\n  align-self: end;\n  background: #ffffffcc;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  min-height: 380px;\n  padding: 2.5vmax;\n  width: min(570px, 100%);\n}\n\n.home-container > section > h1 {\n  font-size: 2.5rem;\n  line-height: 2.4rem;\n  width: min(450px, 100%);\n}\n\n.home-container > section > p {\n  font-size: 1.3rem;\n  font-weight: 600;\n  flex: 1;\n  line-height: 1.25rem;\n  width: min(480px, 100%);\n}\n\n.special {\n  align-items: center;\n  background: #00b4d8;\n  border-radius: 50%;\n  color: #fff;\n  display: flex;\n  flex-flow: column;\n  font-weight: 900;\n  height: 250px;\n  justify-content: center;\n  justify-self: flex-end;\n  line-height: 5rem;\n  margin-right: 10%;\n  outline: 10px solid #00667bff;\n  transform: rotate(15deg);\n  width: 250px;\n}\n\n.special > p {\n  font-size: 1.8rem;\n  line-height: 2rem;\n}\n.special-price {\n  display: flex;\n  font-size: 4.5rem;\n  height: 6rem;\n  letter-spacing: -0.2rem;\n}\n\n.special-price-sym {\n  font-size: 3rem;\n}\n\n.special-price-dollars {\n  align-self: flex-end;\n  font-size: 9.5rem;\n}\n\n.special-price-cents {\n  align-self: center;\n  font-size: 4rem;\n}\n\n.content-buttons {\n  display: flex;\n  flex-flow: row wrap;\n  gap: 2vw;\n}\n\n/* menu page */\n.menu-container {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, var(--breakpoint));\n  grid-auto-rows: 265px;\n  height: fit-content;\n  width: max(var(--breakpoint), 75%);\n  justify-content: center;\n  padding: 4vw 0;\n}\n\n.menu-item {\n  align-items: flex-end;\n  background: #fff;\n  border-radius: 20px;\n  display: flex;\n  font-weight: 900;\n  justify-content: center;\n  padding: 20px;\n  width: 100%;\n}\n\n.menu-image {\n  height: auto;\n  width: var(--breakpoint);\n}\n\n/* catering & locations pages */\n.catering-container,\n.locations-container {\n  align-items: center;\n  background: var(--color-brand);\n  color: #fff;\n  display: flex;\n  flex-flow: column nowrap;\n  height: fit-content;\n  min-height: 100%;\n  padding-bottom: 4vw;\n  text-align: center;\n  width: max(var(--breakpoint), 75%);\n}\n\n:is(.catering-container, .locations-container) > img {\n  border-bottom: 1px solid var(--color-brand-darker);\n  margin-bottom: 15px;\n  min-height: 60vh;\n  object-fit: cover;\n  width: 100%;\n}\n\n:is(.catering-container, .locations-container) > :is(h1, h2) {\n  padding: 0 4vw;\n}\n\n:is(.catering-container, .locations-container) > p {\n  max-width: 50rem;\n  margin-bottom: 20px;\n  padding: 0 20px;\n}\n\n.locations-container > address {\n  color: var(--color-brand-lighter);\n  text-align: left;\n}\n\n/* rewards page */\n.rewards-container {\n  color: white;\n  display: flex;\n  flex-flow: row nowrap;\n  width: 100vw;\n}\n\n.rewards-container > section {\n  align-items: flex-start;\n  background: var(--color-brand);\n  color: #fff;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  padding: 0 20px;\n  width: 35%;\n}\n\n.rewards-hero {\n  background: content-box center/cover\n    url('./assets/images/rewards-background.jpg');\n  flex: 1;\n  min-height: 500px;\n  width: 65%;\n}\n\n.rewards-container h1 {\n  font-size: 3rem;\n  margin-top: 2rem;\n}\n\n.rewards-container h2 {\n  font-size: 2rem;\n  position: relative;\n}\n\n.rewards-leeroys {\n  font-family: 'Abril Fatface', display;\n  font-size: 3rem;\n  font-variant-caps: small-caps;\n  position: relative;\n  left: 4.5rem;\n  top: 3.9rem;\n}\n\n.rewards-name {\n  font-family: 'Arizonia', handwriting;\n  font-size: 6rem;\n}\n\n/* signin page */\n.signin-container {\n  background: #fff;\n  border-radius: 20px;\n  color: var(--color-accent);\n  display: flex;\n  flex-flow: column nowrap;\n  font-size: 1rem;\n  gap: 20px;\n  height: fit-content;\n  justify-content: center;\n  margin: 4vw;\n  max-width: 500px;\n  padding: 50px 4vw 70px;\n  width: 100%;\n}\n\n.signin-container > form {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 20px;\n}\n\n.signin-container :is(label, input, span) {\n  display: block;\n}\n\n.signin-container h1 {\n  color: var(--color-brand);\n  font-size: 1.3rem;\n}\n\n.signin-container input {\n  border-radius: 4px;\n  padding: 5px 5px 5px 10px;\n  width: 100%;\n}\n\n.remember-checkbox {\n  display: flex;\n  flex-flow: row nowrap;\n  gap: 10px;\n}\n\n#remember {\n  width: fit-content;\n}\n\n.new-account {\n  display: flex;\n  flex-flow: row nowrap;\n  gap: 0.3rem;\n}\n\n.new-account-link:hover {\n  text-decoration: underline;\n}\n\n/* buttons */\nbutton {\n  background: none;\n  border: 0;\n  display: flex;\n  font-size: 1rem;\n  font-weight: 700;\n  outline: none;\n  text-decoration: none;\n}\n\nnav > button:hover {\n  text-decoration: underline;\n}\n\nbutton.cater-order {\n  background: #fff;\n  border: 2px solid #fff;\n  border-radius: 100vmax;\n  color: var(--color-brand);\n  font-size: 1.7rem;\n  margin-top: 20px;\n  padding: 10px 40px;\n}\n\nbutton.rewards-order {\n  background: #fff;\n  border: 2px solid #fff;\n  border-radius: 100vmax;\n  color: var(--color-brand);\n  font-size: 1.5rem;\n  margin: 40px;\n  padding: 10px 25px;\n}\n\nbutton.order-content {\n  align-items: center;\n  background: var(--color-brand);\n  border: 2px solid #fff;\n  border-radius: 100vmax;\n  color: #fff;\n  flex: 1 0 auto;\n  font-size: 1.1rem;\n  padding: 5px 20px;\n}\n\n.icon {\n  content: '';\n  display: inline-block;\n  /*filter: invert(100%) sepia(4%) saturate(7485%) hue-rotate(309deg)*/\n  /*  brightness(108%) contrast(109%);*/\n  height: 35px;\n  margin-right: 10px;\n  width: 35px;\n}\n\nbutton.signin-top {\n  font-size: 1rem;\n  border: 2px solid var(--color-brand);\n  border-radius: 20px;\n  color: var(--color-brand);\n  padding: 8px 40px;\n}\n\nbutton.order-content:hover {\n  background: var(--color-brand-darker);\n}\n\nbutton.signin-top:hover,\nbutton.cater-order:hover,\nbutton.rewards-order:hover {\n  background: var(--color-brand-lighter);\n}\n\nbutton.signin-top:active {\n  outline: 3px solid var(--color-accent);\n}\n\nbutton.order-content:active,\nbutton.cater-order:active,\nbutton.rewards-order:active {\n  outline: 4px solid var(--color-accent);\n}\n\n.signin-container button {\n  background: var(--color-accent);\n  border-radius: 6px;\n  color: #fff;\n  padding: 4px 15px;\n  width: min-content;\n}\n\n.signin-container button:hover {\n  background: var(--color-brand-darker);\n}\n\n/* mobile styling */\n@media (max-width: 768px) {\n  .header-left,\n  .header-right {\n    justify-content: center;\n  }\n\n  .header-middle {\n    order: -1;\n  }\n\n  .special {\n    margin-right: 0%;\n    justify-self: center;\n    transform: rotate(0deg);\n  }\n\n  .rewards-container > section {\n    width: 100%;\n  }\n\n  button.rewards-order {\n    align-self: center;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/catering.js":
/*!*************************!*\
  !*** ./src/catering.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawCatering)
/* harmony export */ });
/* harmony import */ var _assets_images_catering_background_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/catering-background.jpg */ "./src/assets/images/catering-background.jpg");


function drawCatering() {
  content.style.background = 'var(--color-window)';
  let fragment = new DocumentFragment();

  let caterContainer = document.createElement('div');
  caterContainer.classList.add('catering-container');

  let caterHero = new Image();
  caterHero.src = _assets_images_catering_background_jpg__WEBPACK_IMPORTED_MODULE_0__;

  let caterHeading = document.createElement('h1');
  caterHeading.textContent = "Let Leeroy's Cater Your Next Event!";

  let caterDescription1 = document.createElement('p');
  caterDescription1.textContent =
    'Ever raid-wiped because hungry party members AFKed—maybe to fix up some chicken—while you laid out meticulous attack plans?';
  let caterDescription2 = document.createElement('p');
  caterDescription2.textContent =
    "Well never again! Birthdays, raids, funerals—Leeroy's caters every event!";

  let caterTag1 = document.createElement('h2');
  let caterTag2 = document.createElement('h2');
  caterTag1.textContent = 'Stick to the plan, chums!';
  caterTag2.textContent = "Leeroy's has the food covered.";

  let orderNow = document.createElement('button');
  orderNow.textContent = 'Order Now';
  orderNow.classList.add('cater-order');

  caterContainer.appendChild(caterHero);
  caterContainer.appendChild(caterHeading);
  caterContainer.appendChild(caterDescription1);
  caterContainer.appendChild(caterDescription2);
  caterContainer.appendChild(caterTag1);
  caterContainer.appendChild(caterTag2);
  caterContainer.appendChild(orderNow);
  fragment.appendChild(caterContainer);

  content.appendChild(fragment);
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ "./src/main.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _rewards_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rewards.js */ "./src/rewards.js");
/* harmony import */ var _locations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locations.js */ "./src/locations.js");
/* harmony import */ var _catering_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catering.js */ "./src/catering.js");
/* harmony import */ var _signin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin.js */ "./src/signin.js");








let styles = getComputedStyle(document.documentElement);
let breakpoint = styles.getPropertyValue('--breakpoint');
let content = document.querySelector('#content');

(function addNavListeners() {
  let header = document.querySelector('header');
  let validButtons = ['menu', 'rewards', 'locations', 'catering', 'sign-in'];
  header.addEventListener('click', (event) => {
    let target = event.target;

    if (target.className.includes('header-middle')) {
      clearPage();
      (0,_main_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }

    if (validButtons.includes(target.name)) {
      clearPage();
      switch (target.name) {
        case 'menu':
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
          break;
        case 'rewards':
          (0,_rewards_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
          break;
        case 'locations':
          (0,_locations_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
          break;
        case 'catering':
          (0,_catering_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
          break;
        case 'sign-in':
          (0,_signin_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
          break;
      }
    }
  });
})();

function clearPage() {
  console.log(content.childNodes);
  content.style.background = '';
  for (let child of content.childNodes) {
    content.removeChild(child);
  }
}

(0,_main_js__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/locations.js":
/*!**************************!*\
  !*** ./src/locations.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawLocations)
/* harmony export */ });
/* harmony import */ var _assets_images_jaime_jasso_stormwind_01s_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/jaime-jasso-stormwind-01s.jpg */ "./src/assets/images/jaime-jasso-stormwind-01s.jpg");


function drawLocations() {
  content.style.background = 'var(--color-window)';
  let fragment = new DocumentFragment();

  let locationsContainer = document.createElement('div');
  locationsContainer.classList.add('locations-container');

  let stormwindImage = new Image();
  stormwindImage.src = _assets_images_jaime_jasso_stormwind_01s_jpg__WEBPACK_IMPORTED_MODULE_0__;
  stormwindImage.setAttribute(
    'title',
    'Stormwind rendering by Jaime Jasso on Artstation.',
  );

  let stormwindHeading = document.createElement('h1');
  stormwindHeading.textContent = 'Stormwind, Eastern Kingdoms';

  let stormwindDesc1 = document.createElement('p');
  stormwindDesc1.textContent =
    "Our flagship restaurant, located in Stormwind's historic Trade District.";

  let stormwindAddress = document.createElement('address');
  stormwindAddress.innerHTML =
    "Leeroy's Chicken,<br>12 Market Street<br>Trade District<br>Stormwind City<br> Kingdom of Stormwind<br> Eastern Kingdoms";

  locationsContainer.appendChild(stormwindImage);
  locationsContainer.appendChild(stormwindHeading);
  locationsContainer.appendChild(stormwindDesc1);
  locationsContainer.appendChild(stormwindAddress);
  fragment.appendChild(locationsContainer);

  content.appendChild(fragment);
}


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawMain)
/* harmony export */ });
/* harmony import */ var _assets_images_icon_cart_arrow_down_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/icon-cart-arrow-down.svg */ "./src/assets/images/icon-cart-arrow-down.svg");
/* harmony import */ var _assets_images_icon_truck_delivery_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/icon-truck-delivery.svg */ "./src/assets/images/icon-truck-delivery.svg");
/* harmony import */ var _assets_images_chicken_background_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/chicken-background.jpg */ "./src/assets/images/chicken-background.jpg");




function drawMain() {
  content.style.background = `fixed center/cover url(${_assets_images_chicken_background_jpg__WEBPACK_IMPORTED_MODULE_2__})`;
  let fragment = new DocumentFragment();

  let homeContainer = document.createElement('div');
  let descSection = document.createElement('section');
  let descHeading = document.createElement('h1');
  let descParagraph = document.createElement('p');
  let buttonContainer = document.createElement('div');
  let buttonTypes = {
    'Order Pickup': _assets_images_icon_cart_arrow_down_svg__WEBPACK_IMPORTED_MODULE_0__,
    'Order Delivery': _assets_images_icon_truck_delivery_svg__WEBPACK_IMPORTED_MODULE_1__,
  };
  let specialSticker = document.createElement('div');
  let specialParagraph = document.createElement('p');
  let specialPrice = document.createElement('div');
  let priceSpans = { sym: '$', dollars: '5', cents: '.99' };

  homeContainer.classList.add('home-container');
  descHeading.textContent = "At Least You'll Have Chicken!";
  descParagraph.textContent = 'Unleash the flavors of Upper Blackrock Spire ';
  descParagraph.textContent += "with Leeroy's Legendary Chicken - just $5.99";
  descParagraph.textContent += ' for a basket or $10 for a box, for a limited';
  descParagraph.textContent += ' time only!';
  buttonContainer.classList.add('content-buttons');
  specialSticker.classList.add('special');
  specialPrice.classList.add('special-price');
  specialParagraph.textContent = 'Starting at';

  // create 'special' sticker
  for (let [partOfPrice, partValue] of Object.entries(priceSpans)) {
    let priceSpan = document.createElement('span');
    priceSpan.classList.add(`special-price-${partOfPrice}`);
    priceSpan.textContent = partValue;

    specialPrice.appendChild(priceSpan);
  }

  for (let element of [specialParagraph, specialPrice]) {
    specialSticker.appendChild(element);
  }

  // create description order buttons
  for (let [buttonText, buttonIcon] of Object.entries(buttonTypes)) {
    let button = document.createElement('button');
    let text = document.createTextNode(buttonText);
    let icon = new Image();

    button.setAttribute('type', 'button');
    button.classList.add('order-content');
    icon.classList.add('icon');
    icon.src = buttonIcon;
    icon.setAttribute('width', '35px');
    icon.setAttribute('height', '35px');
    button.appendChild(icon);
    button.appendChild(text);

    buttonContainer.appendChild(button);
  }

  // assemble description
  for (let element of [descHeading, descParagraph, buttonContainer]) {
    descSection.appendChild(element);
  }

  // add description and special to homeContainer
  for (let element of [descSection, specialSticker]) {
    homeContainer.appendChild(element);
  }

  fragment.appendChild(homeContainer);
  content.appendChild(fragment);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawMenu)
/* harmony export */ });
/* harmony import */ var _assets_images_menu_chicken_wings_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/menu-chicken-wings.jpg */ "./src/assets/images/menu-chicken-wings.jpg");
/* harmony import */ var _assets_images_menu_crispy_chix_sandwich_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/menu-crispy-chix-sandwich.jpg */ "./src/assets/images/menu-crispy-chix-sandwich.jpg");
/* harmony import */ var _assets_images_menu_pulled_sandwich_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/menu-pulled-sandwich.jpg */ "./src/assets/images/menu-pulled-sandwich.jpg");
/* harmony import */ var _assets_images_menu_popcorn_chicken_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/menu-popcorn-chicken.jpg */ "./src/assets/images/menu-popcorn-chicken.jpg");
/* harmony import */ var _assets_images_menu_chicken_tenders_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/menu-chicken-tenders.jpg */ "./src/assets/images/menu-chicken-tenders.jpg");
/* harmony import */ var _assets_images_menu_drumstick_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/menu-drumstick.jpg */ "./src/assets/images/menu-drumstick.jpg");
/* harmony import */ var _assets_images_menu_sides_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/menu-sides.jpg */ "./src/assets/images/menu-sides.jpg");
/* harmony import */ var _assets_images_menu_beverages_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/menu-beverages.jpg */ "./src/assets/images/menu-beverages.jpg");
/* harmony import */ var _assets_images_menu_dessert_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/menu-dessert.jpg */ "./src/assets/images/menu-dessert.jpg");










function drawMenu() {
  content.style.background = 'var(--color-window)';
  let fragment = new DocumentFragment();
  let menuItems = {
    "Leeroy's Legendary Chicken": _assets_images_menu_chicken_wings_jpg__WEBPACK_IMPORTED_MODULE_0__,
    'Buffalo Whelp Wings': _assets_images_menu_drumstick_jpg__WEBPACK_IMPORTED_MODULE_5__,
    "Majordomo's Chicken Sandwich": _assets_images_menu_crispy_chix_sandwich_jpg__WEBPACK_IMPORTED_MODULE_1__,
    'Pulled Pterrodax Sandwich': _assets_images_menu_pulled_sandwich_jpg__WEBPACK_IMPORTED_MODULE_2__,
    'Tinker Town Tenders': _assets_images_menu_chicken_tenders_jpg__WEBPACK_IMPORTED_MODULE_4__,
    'Fel-Fried Popcorn Chicken': _assets_images_menu_popcorn_chicken_jpg__WEBPACK_IMPORTED_MODULE_3__,
    Sides: _assets_images_menu_sides_jpg__WEBPACK_IMPORTED_MODULE_6__,
    Beverages: _assets_images_menu_beverages_jpg__WEBPACK_IMPORTED_MODULE_7__,
    Desserts: _assets_images_menu_dessert_jpg__WEBPACK_IMPORTED_MODULE_8__,
  };
  let menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  for (let [name, image] of Object.entries(menuItems)) {
    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.style.background = `top/contain no-repeat url(${image}) #fff`;
    menuItem.textContent = name;
    menuContainer.appendChild(menuItem);
    fragment.appendChild(menuContainer);
  }
  content.appendChild(fragment);
}


/***/ }),

/***/ "./src/rewards.js":
/*!************************!*\
  !*** ./src/rewards.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawRewards)
/* harmony export */ });
/* harmony import */ var _assets_images_rewards_background_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/rewards-background.jpg */ "./src/assets/images/rewards-background.jpg");


function drawRewards() {
  content.style.background = 'var(--color-window)';
  let fragment = new DocumentFragment();

  let rewardsContainer = document.createElement('div');
  let section = document.createElement('section');
  let spanLeeroys = document.createElement('span');
  let spanRewards = document.createElement('span');
  let firstHeading = document.createElement('h1');
  let secondHeading = document.createElement('h2');
  let button = document.createElement('button');
  let rewardsHero = document.createElement('div');

  rewardsContainer.classList.add('rewards-container');
  spanLeeroys.classList.add('rewards-leeroys');
  spanLeeroys.textContent = "Leeroy's";
  spanRewards.classList.add('rewards-name');
  spanRewards.textContent = 'Rewards';
  firstHeading.textContent = 'From us to you.';
  secondHeading.textContent = 'Earn points with every purchase.';
  rewardsHero.classList.add('rewards-hero');

  button.classList.add('rewards-order');
  button.setAttribute('type', 'button');
  button.setAttribute('name', 'rewards-order');
  button.textContent = 'Order & Earn';

  [spanLeeroys, spanRewards, firstHeading, secondHeading, button].forEach(
    (element) => {
      section.appendChild(element);
    },
  );

  [section, rewardsHero].forEach((element) => {
    rewardsContainer.appendChild(element);
  });

  fragment.appendChild(rewardsContainer);

  content.appendChild(fragment);
}


/***/ }),

/***/ "./src/signin.js":
/*!***********************!*\
  !*** ./src/signin.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawSignin)
/* harmony export */ });
function drawSignin() {
  content.style.background = 'var(--color-window)';
  let fragment = new DocumentFragment();

  let signinContainer = document.createElement('div');
  signinContainer.classList.add('signin-container');

  let signinHeader = document.createElement('h1');
  signinHeader.textContent = 'Sign-in to your account';

  let formElements = document.createElement('form');
  let formDiv1 = document.createElement('div');
  let formDiv2 = document.createElement('div');
  let formDiv3 = document.createElement('div');
  formDiv3.classList.add('remember-checkbox');

  let newAccountDiv = document.createElement('div');
  newAccountDiv.classList.add('new-account');
  newAccountDiv.textContent = 'Or, ';

  let newAccountSpan = document.createElement('span');
  newAccountSpan.classList.add('new-account-link');
  newAccountSpan.textContent = 'create a new account.';

  let usernameLabel = document.createElement('label');
  let usernameInput = document.createElement('input');
  usernameLabel.setAttribute('for', 'username');
  usernameInput.setAttribute('type', 'text');
  usernameInput.setAttribute('id', 'username');
  usernameInput.setAttribute('name', 'username');
  usernameLabel.textContent = 'Username';

  let passwordLabel = document.createElement('label');
  let passwordInput = document.createElement('input');
  passwordLabel.setAttribute('for', 'password');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('id', 'password');
  passwordInput.setAttribute('name', 'password');
  passwordLabel.textContent = 'Password';

  let rememberLabel = document.createElement('label');
  let rememberInput = document.createElement('input');
  rememberLabel.setAttribute('for', 'remember');
  rememberInput.setAttribute('type', 'checkbox');
  rememberInput.setAttribute('id', 'remember');
  rememberInput.setAttribute('name', 'remember');
  rememberInput.setAttribute('value', 'remember');
  rememberLabel.textContent = 'Remember me';

  let submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'button');
  submitButton.textContent = 'Submit';

  [usernameLabel, usernameInput].forEach((element) => {
    formDiv1.appendChild(element);
  });

  [passwordLabel, passwordInput].forEach((element) => {
    formDiv2.appendChild(element);
  });

  [rememberLabel, rememberInput].forEach((element) => {
    formDiv3.appendChild(element);
  });

  [formDiv1, formDiv2, formDiv3, submitButton].forEach((element) => {
    formElements.appendChild(element);
  });

  newAccountDiv.appendChild(newAccountSpan);

  signinContainer.appendChild(signinHeader);
  signinContainer.appendChild(formElements);
  signinContainer.appendChild(newAccountDiv);
  fragment.appendChild(signinContainer);

  content.appendChild(fragment);
}


/***/ }),

/***/ "./src/assets/images/catering-background.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/catering-background.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ba0eafe6579ffc18c49.jpg";

/***/ }),

/***/ "./src/assets/images/chicken-background.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/chicken-background.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3887f1061fe056c0d610.jpg";

/***/ }),

/***/ "./src/assets/images/icon-cart-arrow-down.svg":
/*!****************************************************!*\
  !*** ./src/assets/images/icon-cart-arrow-down.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ff515ec46197f8eef04.svg";

/***/ }),

/***/ "./src/assets/images/icon-truck-delivery.svg":
/*!***************************************************!*\
  !*** ./src/assets/images/icon-truck-delivery.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1af49e16f0c0c7b0a2e2.svg";

/***/ }),

/***/ "./src/assets/images/jaime-jasso-stormwind-01s.jpg":
/*!*********************************************************!*\
  !*** ./src/assets/images/jaime-jasso-stormwind-01s.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "49c1f3252d7e854d07ab.jpg";

/***/ }),

/***/ "./src/assets/images/menu-beverages.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/menu-beverages.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0551d602565400f1127e.jpg";

/***/ }),

/***/ "./src/assets/images/menu-chicken-tenders.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/menu-chicken-tenders.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de9a9881d6fde01d8791.jpg";

/***/ }),

/***/ "./src/assets/images/menu-chicken-wings.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/menu-chicken-wings.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "517a7dc90efc3ab9e2cc.jpg";

/***/ }),

/***/ "./src/assets/images/menu-crispy-chix-sandwich.jpg":
/*!*********************************************************!*\
  !*** ./src/assets/images/menu-crispy-chix-sandwich.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "158dc36d31cb3877626f.jpg";

/***/ }),

/***/ "./src/assets/images/menu-dessert.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/menu-dessert.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "78d4429acf7b390de6f5.jpg";

/***/ }),

/***/ "./src/assets/images/menu-drumstick.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/menu-drumstick.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31fb0cf4dfcbae74ff00.jpg";

/***/ }),

/***/ "./src/assets/images/menu-popcorn-chicken.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/menu-popcorn-chicken.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca154bcdba5931fbad71.jpg";

/***/ }),

/***/ "./src/assets/images/menu-pulled-sandwich.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/menu-pulled-sandwich.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de0b2eb21b9de27e5198.jpg";

/***/ }),

/***/ "./src/assets/images/menu-sides.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/menu-sides.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6725c5318b77484f64e5.jpg";

/***/ }),

/***/ "./src/assets/images/rewards-background.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/rewards-background.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2a7887ee3541d2f8975.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlKQUF5RDtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGtJQUFrSTtBQUNsSSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsbUNBQW1DO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLE9BQU8sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE9BQU8sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxPQUFPLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFB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QUFFSDs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQ2U7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jYXRlcmluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcmV3YXJkcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2lnbmluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvcmV3YXJkcy1iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuYnVubnkubmV0L2Nzcz9mYW1pbHk9YWJyaWwtZmF0ZmFjZTo0MDB8YXJpem9uaWE6NDAwfGFzYXA6NjAwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIC8qYm9yZGVyOiAxcHggc29saWQgcmVkOyovXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuOnJvb3Qge1xuICAtLWNvbG9yLXdpbmRvdzogI2UwZTFkZDtcbiAgLS1jb2xvci1icmFuZDogI2ZmN2QwMDtcbiAgLS1jb2xvci1icmFuZC1kYXJrZXI6ICNkZTZkMDBmZjtcbiAgLS1jb2xvci1icmFuZC1saWdodGVyOiAjZmZlMWM0ZmY7XG4gIC0tY29sb3ItYWNjZW50OiAjODA4MDgwZmY7XG4gIC0tYnJlYWtwb2ludDogMzUwcHg7XG59XG5cbi8qIGNvbW1vbiAqL1xuYm9keSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGZvbnQtZmFtaWx5OiAnQXNhcCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5oZWFkZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgYm94LXNoYWRvdzogMCAwIDhweCAjMDAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KHZhcigtLWJyZWFrcG9pbnQpLCAxZnIpKTtcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLmhlYWRlci1sZWZ0LFxuLmhlYWRlci1taWRkbGUsXG4uaGVhZGVyLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG59XG5cbi5oZWFkZXItbWlkZGxlIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kKTtcbiAgZm9udC1mYW1pbHk6ICdBYnJpbCBGYXRmYWNlJywgZGlzcGxheTtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIGZvbnQtdmFyaWFudC1jYXBzOiBzbWFsbC1jYXBzO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IHZhcigtLWNvbG9yLWJyYW5kLWRhcmtlcik7XG4gIHBhaW50LW9yZGVyOiBzdHJva2UgZmlsbDtcbn1cblxuLmhlYWRlci1yaWdodCB7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG5mb290ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBjb250ZW50IGRpdiAqL1xuI2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13aW5kb3cpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XG4gIG9wYWNpdHk6IDAuOTU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi8qIG1haW4gcGFnZSAqL1xuLmhvbWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiA0dnc7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgodmFyKC0tYnJlYWtwb2ludCksIDFmcikpO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNHZ3O1xufVxuXG4uaG9tZS1jb250YWluZXIgc2VjdGlvbiB7XG4gIGFsaWduLXNlbGY6IGVuZDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZmNjO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDM4MHB4O1xuICBwYWRkaW5nOiAyLjV2bWF4O1xuICB3aWR0aDogbWluKDU3MHB4LCAxMDAlKTtcbn1cblxuLmhvbWUtY29udGFpbmVyID4gc2VjdGlvbiA+IGgxIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjRyZW07XG4gIHdpZHRoOiBtaW4oNDUwcHgsIDEwMCUpO1xufVxuXG4uaG9tZS1jb250YWluZXIgPiBzZWN0aW9uID4gcCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmbGV4OiAxO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgd2lkdGg6IG1pbig0ODBweCwgMTAwJSk7XG59XG5cbi5zcGVjaWFsIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzAwYjRkODtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGhlaWdodDogMjUwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICBsaW5lLWhlaWdodDogNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIG91dGxpbmU6IDEwcHggc29saWQgIzAwNjY3YmZmO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLnNwZWNpYWwgPiBwIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuLnNwZWNpYWwtcHJpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDQuNXJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMnJlbTtcbn1cblxuLnNwZWNpYWwtcHJpY2Utc3ltIHtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4uc3BlY2lhbC1wcmljZS1kb2xsYXJzIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIGZvbnQtc2l6ZTogOS41cmVtO1xufVxuXG4uc3BlY2lhbC1wcmljZS1jZW50cyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuXG4uY29udGVudC1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgZ2FwOiAydnc7XG59XG5cbi8qIG1lbnUgcGFnZSAqL1xuLm1lbnUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxMnB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgdmFyKC0tYnJlYWtwb2ludCkpO1xuICBncmlkLWF1dG8tcm93czogMjY1cHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBtYXgodmFyKC0tYnJlYWtwb2ludCksIDc1JSk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA0dncgMDtcbn1cblxuLm1lbnUtaXRlbSB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWVudS1pbWFnZSB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IHZhcigtLWJyZWFrcG9pbnQpO1xufVxuXG4vKiBjYXRlcmluZyAmIGxvY2F0aW9ucyBwYWdlcyAqL1xuLmNhdGVyaW5nLWNvbnRhaW5lcixcbi5sb2NhdGlvbnMtY29udGFpbmVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYnJhbmQpO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogNHZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiBtYXgodmFyKC0tYnJlYWtwb2ludCksIDc1JSk7XG59XG5cbjppcyguY2F0ZXJpbmctY29udGFpbmVyLCAubG9jYXRpb25zLWNvbnRhaW5lcikgPiBpbWcge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYnJhbmQtZGFya2VyKTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWluLWhlaWdodDogNjB2aDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46aXMoLmNhdGVyaW5nLWNvbnRhaW5lciwgLmxvY2F0aW9ucy1jb250YWluZXIpID4gOmlzKGgxLCBoMikge1xuICBwYWRkaW5nOiAwIDR2dztcbn1cblxuOmlzKC5jYXRlcmluZy1jb250YWluZXIsIC5sb2NhdGlvbnMtY29udGFpbmVyKSA+IHAge1xuICBtYXgtd2lkdGg6IDUwcmVtO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5sb2NhdGlvbnMtY29udGFpbmVyID4gYWRkcmVzcyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1icmFuZC1saWdodGVyKTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLyogcmV3YXJkcyBwYWdlICovXG4ucmV3YXJkcy1jb250YWluZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG4ucmV3YXJkcy1jb250YWluZXIgPiBzZWN0aW9uIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJyYW5kKTtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgd2lkdGg6IDM1JTtcbn1cblxuLnJld2FyZHMtaGVybyB7XG4gIGJhY2tncm91bmQ6IGNvbnRlbnQtYm94IGNlbnRlci9jb3ZlclxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgZmxleDogMTtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiA2NSU7XG59XG5cbi5yZXdhcmRzLWNvbnRhaW5lciBoMSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnJld2FyZHMtY29udGFpbmVyIGgyIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5yZXdhcmRzLWxlZXJveXMge1xuICBmb250LWZhbWlseTogJ0FicmlsIEZhdGZhY2UnLCBkaXNwbGF5O1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtdmFyaWFudC1jYXBzOiBzbWFsbC1jYXBzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDQuNXJlbTtcbiAgdG9wOiAzLjlyZW07XG59XG5cbi5yZXdhcmRzLW5hbWUge1xuICBmb250LWZhbWlseTogJ0FyaXpvbmlhJywgaGFuZHdyaXRpbmc7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbn1cblxuLyogc2lnbmluIHBhZ2UgKi9cbi5zaWduaW4tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBnYXA6IDIwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDR2dztcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgcGFkZGluZzogNTBweCA0dncgNzBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaWduaW4tY29udGFpbmVyID4gZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uc2lnbmluLWNvbnRhaW5lciA6aXMobGFiZWwsIGlucHV0LCBzcGFuKSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2lnbmluLWNvbnRhaW5lciBoMSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1icmFuZCk7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4uc2lnbmluLWNvbnRhaW5lciBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yZW1lbWJlci1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4jcmVtZW1iZXIge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5uZXctYWNjb3VudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgZ2FwOiAwLjNyZW07XG59XG5cbi5uZXctYWNjb3VudC1saW5rOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi8qIGJ1dHRvbnMgKi9cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbm5hdiA+IGJ1dHRvbjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5idXR0b24uY2F0ZXItb3JkZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMDB2bWF4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItYnJhbmQpO1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMTBweCA0MHB4O1xufVxuXG5idXR0b24ucmV3YXJkcy1vcmRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHZtYXg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1icmFuZCk7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW46IDQwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjVweDtcbn1cblxuYnV0dG9uLm9yZGVyLWNvbnRlbnQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1icmFuZCk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHZtYXg7XG4gIGNvbG9yOiAjZmZmO1xuICBmbGV4OiAxIDAgYXV0bztcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4uaWNvbiB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8qZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoNCUpIHNhdHVyYXRlKDc0ODUlKSBodWUtcm90YXRlKDMwOWRlZykqL1xuICAvKiAgYnJpZ2h0bmVzcygxMDglKSBjb250cmFzdCgxMDklKTsqL1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDM1cHg7XG59XG5cbmJ1dHRvbi5zaWduaW4tdG9wIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1icmFuZCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1icmFuZCk7XG4gIHBhZGRpbmc6IDhweCA0MHB4O1xufVxuXG5idXR0b24ub3JkZXItY29udGVudDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJyYW5kLWRhcmtlcik7XG59XG5cbmJ1dHRvbi5zaWduaW4tdG9wOmhvdmVyLFxuYnV0dG9uLmNhdGVyLW9yZGVyOmhvdmVyLFxuYnV0dG9uLnJld2FyZHMtb3JkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1icmFuZC1saWdodGVyKTtcbn1cblxuYnV0dG9uLnNpZ25pbi10b3A6YWN0aXZlIHtcbiAgb3V0bGluZTogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XG59XG5cbmJ1dHRvbi5vcmRlci1jb250ZW50OmFjdGl2ZSxcbmJ1dHRvbi5jYXRlci1vcmRlcjphY3RpdmUsXG5idXR0b24ucmV3YXJkcy1vcmRlcjphY3RpdmUge1xuICBvdXRsaW5lOiA0cHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcbn1cblxuLnNpZ25pbi1jb250YWluZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNHB4IDE1cHg7XG4gIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuLnNpZ25pbi1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYnJhbmQtZGFya2VyKTtcbn1cblxuLyogbW9iaWxlIHN0eWxpbmcgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGVhZGVyLWxlZnQsXG4gIC5oZWFkZXItcmlnaHQge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmhlYWRlci1taWRkbGUge1xuICAgIG9yZGVyOiAtMTtcbiAgfVxuXG4gIC5zcGVjaWFsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG5cbiAgLnJld2FyZHMtY29udGFpbmVyID4gc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBidXR0b24ucmV3YXJkcy1vcmRlciB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixpQ0FBaUM7RUFDakMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUE0QztFQUM1Qyx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHVFQUF1RTtFQUN2RSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2IsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsa0RBQWtEO0VBQ2xELHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBLGNBQWM7QUFDZDtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsdUVBQXVFO0VBQ3ZFLHFC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O0VBQ2Ysb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBOzs7RUFHRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7OztFQUdFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0U7O0lBRUUsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmJ1bm55Lm5ldC9jc3M/ZmFtaWx5PWFicmlsLWZhdGZhY2U6NDAwfGFyaXpvbmlhOjQwMHxhc2FwOjYwMCk7XFxuXFxuKiB7XFxuICAvKmJvcmRlcjogMXB4IHNvbGlkIHJlZDsqL1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY29sb3Itd2luZG93OiAjZTBlMWRkO1xcbiAgLS1jb2xvci1icmFuZDogI2ZmN2QwMDtcXG4gIC0tY29sb3ItYnJhbmQtZGFya2VyOiAjZGU2ZDAwZmY7XFxuICAtLWNvbG9yLWJyYW5kLWxpZ2h0ZXI6ICNmZmUxYzRmZjtcXG4gIC0tY29sb3ItYWNjZW50OiAjODA4MDgwZmY7XFxuICAtLWJyZWFrcG9pbnQ6IDM1MHB4O1xcbn1cXG5cXG4vKiBjb21tb24gKi9cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBmb250LWZhbWlseTogJ0FzYXAnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcXG4gIGJveC1zaGFkb3c6IDAgMCA4cHggIzAwMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KHZhcigtLWJyZWFrcG9pbnQpLCAxZnIpKTtcXG4gIG1heC13aWR0aDogMTYwMHB4O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uaGVhZGVyLWxlZnQsXFxuLmhlYWRlci1taWRkbGUsXFxuLmhlYWRlci1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMTBweCAzMHB4O1xcbn1cXG5cXG4uaGVhZGVyLW1pZGRsZSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYnJhbmQpO1xcbiAgZm9udC1mYW1pbHk6ICdBYnJpbCBGYXRmYWNlJywgZGlzcGxheTtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgZm9udC12YXJpYW50LWNhcHM6IHNtYWxsLWNhcHM7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCB2YXIoLS1jb2xvci1icmFuZC1kYXJrZXIpO1xcbiAgcGFpbnQtb3JkZXI6IHN0cm9rZSBmaWxsO1xcbn1cXG5cXG4uaGVhZGVyLXJpZ2h0IHtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBjb250ZW50IGRpdiAqL1xcbiNjb250ZW50IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXdpbmRvdyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDE2MDBweDtcXG4gIG9wYWNpdHk6IDAuOTU7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4vKiBtYWluIHBhZ2UgKi9cXG4uaG9tZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogNHZ3O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCh2YXIoLS1icmVha3BvaW50KSwgMWZyKSk7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiA0dnc7XFxufVxcblxcbi5ob21lLWNvbnRhaW5lciBzZWN0aW9uIHtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmZjYztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIG1pbi1oZWlnaHQ6IDM4MHB4O1xcbiAgcGFkZGluZzogMi41dm1heDtcXG4gIHdpZHRoOiBtaW4oNTcwcHgsIDEwMCUpO1xcbn1cXG5cXG4uaG9tZS1jb250YWluZXIgPiBzZWN0aW9uID4gaDEge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBsaW5lLWhlaWdodDogMi40cmVtO1xcbiAgd2lkdGg6IG1pbig0NTBweCwgMTAwJSk7XFxufVxcblxcbi5ob21lLWNvbnRhaW5lciA+IHNlY3Rpb24gPiBwIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZsZXg6IDE7XFxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXG4gIHdpZHRoOiBtaW4oNDgwcHgsIDEwMCUpO1xcbn1cXG5cXG4uc3BlY2lhbCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogIzAwYjRkODtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGhlaWdodDogMjUwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBsaW5lLWhlaWdodDogNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgb3V0bGluZTogMTBweCBzb2xpZCAjMDA2NjdiZmY7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XFxuICB3aWR0aDogMjUwcHg7XFxufVxcblxcbi5zcGVjaWFsID4gcCB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG4uc3BlY2lhbC1wcmljZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiA0LjVyZW07XFxuICBoZWlnaHQ6IDZyZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMnJlbTtcXG59XFxuXFxuLnNwZWNpYWwtcHJpY2Utc3ltIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnNwZWNpYWwtcHJpY2UtZG9sbGFycyB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGZvbnQtc2l6ZTogOS41cmVtO1xcbn1cXG5cXG4uc3BlY2lhbC1wcmljZS1jZW50cyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5jb250ZW50LWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBnYXA6IDJ2dztcXG59XFxuXFxuLyogbWVudSBwYWdlICovXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDEycHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgdmFyKC0tYnJlYWtwb2ludCkpO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDI2NXB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBtYXgodmFyKC0tYnJlYWtwb2ludCksIDc1JSk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDR2dyAwO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1lbnUtaW1hZ2Uge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IHZhcigtLWJyZWFrcG9pbnQpO1xcbn1cXG5cXG4vKiBjYXRlcmluZyAmIGxvY2F0aW9ucyBwYWdlcyAqL1xcbi5jYXRlcmluZy1jb250YWluZXIsXFxuLmxvY2F0aW9ucy1jb250YWluZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJyYW5kKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy1ib3R0b206IDR2dztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiBtYXgodmFyKC0tYnJlYWtwb2ludCksIDc1JSk7XFxufVxcblxcbjppcyguY2F0ZXJpbmctY29udGFpbmVyLCAubG9jYXRpb25zLWNvbnRhaW5lcikgPiBpbWcge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJyYW5kLWRhcmtlcik7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgbWluLWhlaWdodDogNjB2aDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbjppcyguY2F0ZXJpbmctY29udGFpbmVyLCAubG9jYXRpb25zLWNvbnRhaW5lcikgPiA6aXMoaDEsIGgyKSB7XFxuICBwYWRkaW5nOiAwIDR2dztcXG59XFxuXFxuOmlzKC5jYXRlcmluZy1jb250YWluZXIsIC5sb2NhdGlvbnMtY29udGFpbmVyKSA+IHAge1xcbiAgbWF4LXdpZHRoOiA1MHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxufVxcblxcbi5sb2NhdGlvbnMtY29udGFpbmVyID4gYWRkcmVzcyB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYnJhbmQtbGlnaHRlcik7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4vKiByZXdhcmRzIHBhZ2UgKi9cXG4ucmV3YXJkcy1jb250YWluZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLnJld2FyZHMtY29udGFpbmVyID4gc2VjdGlvbiB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJyYW5kKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbiAgd2lkdGg6IDM1JTtcXG59XFxuXFxuLnJld2FyZHMtaGVybyB7XFxuICBiYWNrZ3JvdW5kOiBjb250ZW50LWJveCBjZW50ZXIvY292ZXJcXG4gICAgdXJsKCcuL2Fzc2V0cy9pbWFnZXMvcmV3YXJkcy1iYWNrZ3JvdW5kLmpwZycpO1xcbiAgZmxleDogMTtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDY1JTtcXG59XFxuXFxuLnJld2FyZHMtY29udGFpbmVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi5yZXdhcmRzLWNvbnRhaW5lciBoMiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5yZXdhcmRzLWxlZXJveXMge1xcbiAgZm9udC1mYW1pbHk6ICdBYnJpbCBGYXRmYWNlJywgZGlzcGxheTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtdmFyaWFudC1jYXBzOiBzbWFsbC1jYXBzO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogNC41cmVtO1xcbiAgdG9wOiAzLjlyZW07XFxufVxcblxcbi5yZXdhcmRzLW5hbWUge1xcbiAgZm9udC1mYW1pbHk6ICdBcml6b25pYScsIGhhbmR3cml0aW5nO1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbn1cXG5cXG4vKiBzaWduaW4gcGFnZSAqL1xcbi5zaWduaW4tY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZ2FwOiAyMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiA0dnc7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgcGFkZGluZzogNTBweCA0dncgNzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2lnbmluLWNvbnRhaW5lciA+IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnNpZ25pbi1jb250YWluZXIgOmlzKGxhYmVsLCBpbnB1dCwgc3Bhbikge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zaWduaW4tY29udGFpbmVyIGgxIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1icmFuZCk7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnNpZ25pbi1jb250YWluZXIgaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucmVtZW1iZXItY2hlY2tib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI3JlbWVtYmVyIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLm5ldy1hY2NvdW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLm5ldy1hY2NvdW50LWxpbms6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi8qIGJ1dHRvbnMgKi9cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxubmF2ID4gYnV0dG9uOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5idXR0b24uY2F0ZXItb3JkZXIge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxMDB2bWF4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kKTtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcXG59XFxuXFxuYnV0dG9uLnJld2FyZHMtb3JkZXIge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxMDB2bWF4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luOiA0MHB4O1xcbiAgcGFkZGluZzogMTBweCAyNXB4O1xcbn1cXG5cXG5idXR0b24ub3JkZXItY29udGVudCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYnJhbmQpO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHZtYXg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZsZXg6IDEgMCBhdXRvO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG59XFxuXFxuLmljb24ge1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAvKmZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDQlKSBzYXR1cmF0ZSg3NDg1JSkgaHVlLXJvdGF0ZSgzMDlkZWcpKi9cXG4gIC8qICBicmlnaHRuZXNzKDEwOCUpIGNvbnRyYXN0KDEwOSUpOyovXFxuICBoZWlnaHQ6IDM1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB3aWR0aDogMzVweDtcXG59XFxuXFxuYnV0dG9uLnNpZ25pbi10b3Age1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItYnJhbmQpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1icmFuZCk7XFxuICBwYWRkaW5nOiA4cHggNDBweDtcXG59XFxuXFxuYnV0dG9uLm9yZGVyLWNvbnRlbnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYnJhbmQtZGFya2VyKTtcXG59XFxuXFxuYnV0dG9uLnNpZ25pbi10b3A6aG92ZXIsXFxuYnV0dG9uLmNhdGVyLW9yZGVyOmhvdmVyLFxcbmJ1dHRvbi5yZXdhcmRzLW9yZGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJyYW5kLWxpZ2h0ZXIpO1xcbn1cXG5cXG5idXR0b24uc2lnbmluLXRvcDphY3RpdmUge1xcbiAgb3V0bGluZTogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XFxufVxcblxcbmJ1dHRvbi5vcmRlci1jb250ZW50OmFjdGl2ZSxcXG5idXR0b24uY2F0ZXItb3JkZXI6YWN0aXZlLFxcbmJ1dHRvbi5yZXdhcmRzLW9yZGVyOmFjdGl2ZSB7XFxuICBvdXRsaW5lOiA0cHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcXG59XFxuXFxuLnNpZ25pbi1jb250YWluZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDRweCAxNXB4O1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uc2lnbmluLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYnJhbmQtZGFya2VyKTtcXG59XFxuXFxuLyogbW9iaWxlIHN0eWxpbmcgKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5oZWFkZXItbGVmdCxcXG4gIC5oZWFkZXItcmlnaHQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5oZWFkZXItbWlkZGxlIHtcXG4gICAgb3JkZXI6IC0xO1xcbiAgfVxcblxcbiAgLnNwZWNpYWwge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuXFxuICAucmV3YXJkcy1jb250YWluZXIgPiBzZWN0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICBidXR0b24ucmV3YXJkcy1vcmRlciB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNhdGVyaW5nQmFja2dyb3VuZCBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvY2F0ZXJpbmctYmFja2dyb3VuZC5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmF3Q2F0ZXJpbmcoKSB7XG4gIGNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZCA9ICd2YXIoLS1jb2xvci13aW5kb3cpJztcbiAgbGV0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcblxuICBsZXQgY2F0ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2F0ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2F0ZXJpbmctY29udGFpbmVyJyk7XG5cbiAgbGV0IGNhdGVySGVybyA9IG5ldyBJbWFnZSgpO1xuICBjYXRlckhlcm8uc3JjID0gY2F0ZXJpbmdCYWNrZ3JvdW5kO1xuXG4gIGxldCBjYXRlckhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjYXRlckhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkxldCBMZWVyb3kncyBDYXRlciBZb3VyIE5leHQgRXZlbnQhXCI7XG5cbiAgbGV0IGNhdGVyRGVzY3JpcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjYXRlckRlc2NyaXB0aW9uMS50ZXh0Q29udGVudCA9XG4gICAgJ0V2ZXIgcmFpZC13aXBlZCBiZWNhdXNlIGh1bmdyeSBwYXJ0eSBtZW1iZXJzIEFGS2Vk4oCUbWF5YmUgdG8gZml4IHVwIHNvbWUgY2hpY2tlbuKAlHdoaWxlIHlvdSBsYWlkIG91dCBtZXRpY3Vsb3VzIGF0dGFjayBwbGFucz8nO1xuICBsZXQgY2F0ZXJEZXNjcmlwdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNhdGVyRGVzY3JpcHRpb24yLnRleHRDb250ZW50ID1cbiAgICBcIldlbGwgbmV2ZXIgYWdhaW4hIEJpcnRoZGF5cywgcmFpZHMsIGZ1bmVyYWxz4oCUTGVlcm95J3MgY2F0ZXJzIGV2ZXJ5IGV2ZW50IVwiO1xuXG4gIGxldCBjYXRlclRhZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBsZXQgY2F0ZXJUYWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY2F0ZXJUYWcxLnRleHRDb250ZW50ID0gJ1N0aWNrIHRvIHRoZSBwbGFuLCBjaHVtcyEnO1xuICBjYXRlclRhZzIudGV4dENvbnRlbnQgPSBcIkxlZXJveSdzIGhhcyB0aGUgZm9vZCBjb3ZlcmVkLlwiO1xuXG4gIGxldCBvcmRlck5vdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBvcmRlck5vdy50ZXh0Q29udGVudCA9ICdPcmRlciBOb3cnO1xuICBvcmRlck5vdy5jbGFzc0xpc3QuYWRkKCdjYXRlci1vcmRlcicpO1xuXG4gIGNhdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVySGVybyk7XG4gIGNhdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVySGVhZGluZyk7XG4gIGNhdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVyRGVzY3JpcHRpb24xKTtcbiAgY2F0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZXJEZXNjcmlwdGlvbjIpO1xuICBjYXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlclRhZzEpO1xuICBjYXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlclRhZzIpO1xuICBjYXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChvcmRlck5vdyk7XG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKGNhdGVyQ29udGFpbmVyKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGRyYXdNYWluIGZyb20gJy4vbWFpbi5qcyc7XG5pbXBvcnQgZHJhd01lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBkcmF3UmV3YXJkcyBmcm9tICcuL3Jld2FyZHMuanMnO1xuaW1wb3J0IGRyYXdMb2NhdGlvbnMgZnJvbSAnLi9sb2NhdGlvbnMuanMnO1xuaW1wb3J0IGRyYXdDYXRlcmluZyBmcm9tICcuL2NhdGVyaW5nLmpzJztcbmltcG9ydCBkcmF3U2lnbmluIGZyb20gJy4vc2lnbmluLmpzJztcblxubGV0IHN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcbmxldCBicmVha3BvaW50ID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJy0tYnJlYWtwb2ludCcpO1xubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4oZnVuY3Rpb24gYWRkTmF2TGlzdGVuZXJzKCkge1xuICBsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gIGxldCB2YWxpZEJ1dHRvbnMgPSBbJ21lbnUnLCAncmV3YXJkcycsICdsb2NhdGlvbnMnLCAnY2F0ZXJpbmcnLCAnc2lnbi1pbiddO1xuICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgaWYgKHRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMoJ2hlYWRlci1taWRkbGUnKSkge1xuICAgICAgY2xlYXJQYWdlKCk7XG4gICAgICBkcmF3TWFpbigpO1xuICAgIH1cblxuICAgIGlmICh2YWxpZEJ1dHRvbnMuaW5jbHVkZXModGFyZ2V0Lm5hbWUpKSB7XG4gICAgICBjbGVhclBhZ2UoKTtcbiAgICAgIHN3aXRjaCAodGFyZ2V0Lm5hbWUpIHtcbiAgICAgICAgY2FzZSAnbWVudSc6XG4gICAgICAgICAgZHJhd01lbnUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmV3YXJkcyc6XG4gICAgICAgICAgZHJhd1Jld2FyZHMoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbG9jYXRpb25zJzpcbiAgICAgICAgICBkcmF3TG9jYXRpb25zKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NhdGVyaW5nJzpcbiAgICAgICAgICBkcmF3Q2F0ZXJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2lnbi1pbic6XG4gICAgICAgICAgZHJhd1NpZ25pbigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KSgpO1xuXG5mdW5jdGlvbiBjbGVhclBhZ2UoKSB7XG4gIGNvbnNvbGUubG9nKGNvbnRlbnQuY2hpbGROb2Rlcyk7XG4gIGNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICBmb3IgKGxldCBjaGlsZCBvZiBjb250ZW50LmNoaWxkTm9kZXMpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgfVxufVxuXG5kcmF3TWFpbigpO1xuIiwiaW1wb3J0IHN0b3Jtd2luZCBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvamFpbWUtamFzc28tc3Rvcm13aW5kLTAxcy5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmF3TG9jYXRpb25zKCkge1xuICBjb250ZW50LnN0eWxlLmJhY2tncm91bmQgPSAndmFyKC0tY29sb3Itd2luZG93KSc7XG4gIGxldCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgbGV0IGxvY2F0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsb2NhdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb25zLWNvbnRhaW5lcicpO1xuXG4gIGxldCBzdG9ybXdpbmRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBzdG9ybXdpbmRJbWFnZS5zcmMgPSBzdG9ybXdpbmQ7XG4gIHN0b3Jtd2luZEltYWdlLnNldEF0dHJpYnV0ZShcbiAgICAndGl0bGUnLFxuICAgICdTdG9ybXdpbmQgcmVuZGVyaW5nIGJ5IEphaW1lIEphc3NvIG9uIEFydHN0YXRpb24uJyxcbiAgKTtcblxuICBsZXQgc3Rvcm13aW5kSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHN0b3Jtd2luZEhlYWRpbmcudGV4dENvbnRlbnQgPSAnU3Rvcm13aW5kLCBFYXN0ZXJuIEtpbmdkb21zJztcblxuICBsZXQgc3Rvcm13aW5kRGVzYzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHN0b3Jtd2luZERlc2MxLnRleHRDb250ZW50ID1cbiAgICBcIk91ciBmbGFnc2hpcCByZXN0YXVyYW50LCBsb2NhdGVkIGluIFN0b3Jtd2luZCdzIGhpc3RvcmljIFRyYWRlIERpc3RyaWN0LlwiO1xuXG4gIGxldCBzdG9ybXdpbmRBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYWRkcmVzcycpO1xuICBzdG9ybXdpbmRBZGRyZXNzLmlubmVySFRNTCA9XG4gICAgXCJMZWVyb3kncyBDaGlja2VuLDxicj4xMiBNYXJrZXQgU3RyZWV0PGJyPlRyYWRlIERpc3RyaWN0PGJyPlN0b3Jtd2luZCBDaXR5PGJyPiBLaW5nZG9tIG9mIFN0b3Jtd2luZDxicj4gRWFzdGVybiBLaW5nZG9tc1wiO1xuXG4gIGxvY2F0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdG9ybXdpbmRJbWFnZSk7XG4gIGxvY2F0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdG9ybXdpbmRIZWFkaW5nKTtcbiAgbG9jYXRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0b3Jtd2luZERlc2MxKTtcbiAgbG9jYXRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0b3Jtd2luZEFkZHJlc3MpO1xuICBmcmFnbWVudC5hcHBlbmRDaGlsZChsb2NhdGlvbnNDb250YWluZXIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xufVxuIiwiaW1wb3J0IHBpY2t1cEljb24gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2ljb24tY2FydC1hcnJvdy1kb3duLnN2Zyc7XG5pbXBvcnQgZGVsaXZlckljb24gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2ljb24tdHJ1Y2stZGVsaXZlcnkuc3ZnJztcbmltcG9ydCBtYWluQmFja2dyb3VuZCBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvY2hpY2tlbi1iYWNrZ3JvdW5kLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYXdNYWluKCkge1xuICBjb250ZW50LnN0eWxlLmJhY2tncm91bmQgPSBgZml4ZWQgY2VudGVyL2NvdmVyIHVybCgke21haW5CYWNrZ3JvdW5kfSlgO1xuICBsZXQgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gIGxldCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBkZXNjU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgbGV0IGRlc2NIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgbGV0IGRlc2NQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGxldCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGJ1dHRvblR5cGVzID0ge1xuICAgICdPcmRlciBQaWNrdXAnOiBwaWNrdXBJY29uLFxuICAgICdPcmRlciBEZWxpdmVyeSc6IGRlbGl2ZXJJY29uLFxuICB9O1xuICBsZXQgc3BlY2lhbFN0aWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IHNwZWNpYWxQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGxldCBzcGVjaWFsUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IHByaWNlU3BhbnMgPSB7IHN5bTogJyQnLCBkb2xsYXJzOiAnNScsIGNlbnRzOiAnLjk5JyB9O1xuXG4gIGhvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZS1jb250YWluZXInKTtcbiAgZGVzY0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIkF0IExlYXN0IFlvdSdsbCBIYXZlIENoaWNrZW4hXCI7XG4gIGRlc2NQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnVW5sZWFzaCB0aGUgZmxhdm9ycyBvZiBVcHBlciBCbGFja3JvY2sgU3BpcmUgJztcbiAgZGVzY1BhcmFncmFwaC50ZXh0Q29udGVudCArPSBcIndpdGggTGVlcm95J3MgTGVnZW5kYXJ5IENoaWNrZW4gLSBqdXN0ICQ1Ljk5XCI7XG4gIGRlc2NQYXJhZ3JhcGgudGV4dENvbnRlbnQgKz0gJyBmb3IgYSBiYXNrZXQgb3IgJDEwIGZvciBhIGJveCwgZm9yIGEgbGltaXRlZCc7XG4gIGRlc2NQYXJhZ3JhcGgudGV4dENvbnRlbnQgKz0gJyB0aW1lIG9ubHkhJztcbiAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtYnV0dG9ucycpO1xuICBzcGVjaWFsU3RpY2tlci5jbGFzc0xpc3QuYWRkKCdzcGVjaWFsJyk7XG4gIHNwZWNpYWxQcmljZS5jbGFzc0xpc3QuYWRkKCdzcGVjaWFsLXByaWNlJyk7XG4gIHNwZWNpYWxQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnU3RhcnRpbmcgYXQnO1xuXG4gIC8vIGNyZWF0ZSAnc3BlY2lhbCcgc3RpY2tlclxuICBmb3IgKGxldCBbcGFydE9mUHJpY2UsIHBhcnRWYWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJpY2VTcGFucykpIHtcbiAgICBsZXQgcHJpY2VTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByaWNlU3Bhbi5jbGFzc0xpc3QuYWRkKGBzcGVjaWFsLXByaWNlLSR7cGFydE9mUHJpY2V9YCk7XG4gICAgcHJpY2VTcGFuLnRleHRDb250ZW50ID0gcGFydFZhbHVlO1xuXG4gICAgc3BlY2lhbFByaWNlLmFwcGVuZENoaWxkKHByaWNlU3Bhbik7XG4gIH1cblxuICBmb3IgKGxldCBlbGVtZW50IG9mIFtzcGVjaWFsUGFyYWdyYXBoLCBzcGVjaWFsUHJpY2VdKSB7XG4gICAgc3BlY2lhbFN0aWNrZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH1cblxuICAvLyBjcmVhdGUgZGVzY3JpcHRpb24gb3JkZXIgYnV0dG9uc1xuICBmb3IgKGxldCBbYnV0dG9uVGV4dCwgYnV0dG9uSWNvbl0gb2YgT2JqZWN0LmVudHJpZXMoYnV0dG9uVHlwZXMpKSB7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYnV0dG9uVGV4dCk7XG4gICAgbGV0IGljb24gPSBuZXcgSW1hZ2UoKTtcblxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ29yZGVyLWNvbnRlbnQnKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgICBpY29uLnNyYyA9IGJ1dHRvbkljb247XG4gICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzM1cHgnKTtcbiAgICBpY29uLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzM1cHgnKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIH1cblxuICAvLyBhc3NlbWJsZSBkZXNjcmlwdGlvblxuICBmb3IgKGxldCBlbGVtZW50IG9mIFtkZXNjSGVhZGluZywgZGVzY1BhcmFncmFwaCwgYnV0dG9uQ29udGFpbmVyXSkge1xuICAgIGRlc2NTZWN0aW9uLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9XG5cbiAgLy8gYWRkIGRlc2NyaXB0aW9uIGFuZCBzcGVjaWFsIHRvIGhvbWVDb250YWluZXJcbiAgZm9yIChsZXQgZWxlbWVudCBvZiBbZGVzY1NlY3Rpb24sIHNwZWNpYWxTdGlja2VyXSkge1xuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH1cblxuICBmcmFnbWVudC5hcHBlbmRDaGlsZChob21lQ29udGFpbmVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG59XG4iLCJpbXBvcnQgaW1hZ2VVcmxXaW5ncyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvbWVudS1jaGlja2VuLXdpbmdzLmpwZyc7XG5pbXBvcnQgaW1hZ2VVcmxDaGl4U2FuZHdpY2ggZnJvbSAnLi9hc3NldHMvaW1hZ2VzL21lbnUtY3Jpc3B5LWNoaXgtc2FuZHdpY2guanBnJztcbmltcG9ydCBpbWFnZVVybFB1bGxlZFNhbmR3aWNoIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9tZW51LXB1bGxlZC1zYW5kd2ljaC5qcGcnO1xuaW1wb3J0IGltYWdlVXJsUG9wY29ybiBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvbWVudS1wb3Bjb3JuLWNoaWNrZW4uanBnJztcbmltcG9ydCBpbWFnZVVybFRlbmRlcnMgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL21lbnUtY2hpY2tlbi10ZW5kZXJzLmpwZyc7XG5pbXBvcnQgaW1hZ2VVcmxEcnVtc3RpY2sgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL21lbnUtZHJ1bXN0aWNrLmpwZyc7XG5pbXBvcnQgaW1hZ2VVcmxTaWRlcyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvbWVudS1zaWRlcy5qcGcnO1xuaW1wb3J0IGltYWdlVXJsQmV2ZXJhZ2VzIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9tZW51LWJldmVyYWdlcy5qcGcnO1xuaW1wb3J0IGltYWdlVXJsRGVzc2VydCBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvbWVudS1kZXNzZXJ0LmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYXdNZW51KCkge1xuICBjb250ZW50LnN0eWxlLmJhY2tncm91bmQgPSAndmFyKC0tY29sb3Itd2luZG93KSc7XG4gIGxldCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG4gIGxldCBtZW51SXRlbXMgPSB7XG4gICAgXCJMZWVyb3kncyBMZWdlbmRhcnkgQ2hpY2tlblwiOiBpbWFnZVVybFdpbmdzLFxuICAgICdCdWZmYWxvIFdoZWxwIFdpbmdzJzogaW1hZ2VVcmxEcnVtc3RpY2ssXG4gICAgXCJNYWpvcmRvbW8ncyBDaGlja2VuIFNhbmR3aWNoXCI6IGltYWdlVXJsQ2hpeFNhbmR3aWNoLFxuICAgICdQdWxsZWQgUHRlcnJvZGF4IFNhbmR3aWNoJzogaW1hZ2VVcmxQdWxsZWRTYW5kd2ljaCxcbiAgICAnVGlua2VyIFRvd24gVGVuZGVycyc6IGltYWdlVXJsVGVuZGVycyxcbiAgICAnRmVsLUZyaWVkIFBvcGNvcm4gQ2hpY2tlbic6IGltYWdlVXJsUG9wY29ybixcbiAgICBTaWRlczogaW1hZ2VVcmxTaWRlcyxcbiAgICBCZXZlcmFnZXM6IGltYWdlVXJsQmV2ZXJhZ2VzLFxuICAgIERlc3NlcnRzOiBpbWFnZVVybERlc3NlcnQsXG4gIH07XG4gIGxldCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcblxuICBmb3IgKGxldCBbbmFtZSwgaW1hZ2VdIG9mIE9iamVjdC5lbnRyaWVzKG1lbnVJdGVtcykpIHtcbiAgICBsZXQgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBtZW51SXRlbS5zdHlsZS5iYWNrZ3JvdW5kID0gYHRvcC9jb250YWluIG5vLXJlcGVhdCB1cmwoJHtpbWFnZX0pICNmZmZgO1xuICAgIG1lbnVJdGVtLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbiAgfVxuICBjb250ZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbn1cbiIsImltcG9ydCByZXdhcmRzQmFja2dyb3VuZCBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvcmV3YXJkcy1iYWNrZ3JvdW5kLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYXdSZXdhcmRzKCkge1xuICBjb250ZW50LnN0eWxlLmJhY2tncm91bmQgPSAndmFyKC0tY29sb3Itd2luZG93KSc7XG4gIGxldCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgbGV0IHJld2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGxldCBzcGFuTGVlcm95cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgbGV0IHNwYW5SZXdhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBsZXQgZmlyc3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgbGV0IHNlY29uZEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGxldCByZXdhcmRzSGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHJld2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncmV3YXJkcy1jb250YWluZXInKTtcbiAgc3BhbkxlZXJveXMuY2xhc3NMaXN0LmFkZCgncmV3YXJkcy1sZWVyb3lzJyk7XG4gIHNwYW5MZWVyb3lzLnRleHRDb250ZW50ID0gXCJMZWVyb3knc1wiO1xuICBzcGFuUmV3YXJkcy5jbGFzc0xpc3QuYWRkKCdyZXdhcmRzLW5hbWUnKTtcbiAgc3BhblJld2FyZHMudGV4dENvbnRlbnQgPSAnUmV3YXJkcyc7XG4gIGZpcnN0SGVhZGluZy50ZXh0Q29udGVudCA9ICdGcm9tIHVzIHRvIHlvdS4nO1xuICBzZWNvbmRIZWFkaW5nLnRleHRDb250ZW50ID0gJ0Vhcm4gcG9pbnRzIHdpdGggZXZlcnkgcHVyY2hhc2UuJztcbiAgcmV3YXJkc0hlcm8uY2xhc3NMaXN0LmFkZCgncmV3YXJkcy1oZXJvJyk7XG5cbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Jld2FyZHMtb3JkZXInKTtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnbmFtZScsICdyZXdhcmRzLW9yZGVyJyk7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdPcmRlciAmIEVhcm4nO1xuXG4gIFtzcGFuTGVlcm95cywgc3BhblJld2FyZHMsIGZpcnN0SGVhZGluZywgc2Vjb25kSGVhZGluZywgYnV0dG9uXS5mb3JFYWNoKFxuICAgIChlbGVtZW50KSA9PiB7XG4gICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0sXG4gICk7XG5cbiAgW3NlY3Rpb24sIHJld2FyZHNIZXJvXS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgcmV3YXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfSk7XG5cbiAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQocmV3YXJkc0NvbnRhaW5lcik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmF3U2lnbmluKCkge1xuICBjb250ZW50LnN0eWxlLmJhY2tncm91bmQgPSAndmFyKC0tY29sb3Itd2luZG93KSc7XG4gIGxldCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgbGV0IHNpZ25pbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaWduaW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lnbmluLWNvbnRhaW5lcicpO1xuXG4gIGxldCBzaWduaW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBzaWduaW5IZWFkZXIudGV4dENvbnRlbnQgPSAnU2lnbi1pbiB0byB5b3VyIGFjY291bnQnO1xuXG4gIGxldCBmb3JtRWxlbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGxldCBmb3JtRGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgZm9ybURpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGZvcm1EaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1EaXYzLmNsYXNzTGlzdC5hZGQoJ3JlbWVtYmVyLWNoZWNrYm94Jyk7XG5cbiAgbGV0IG5ld0FjY291bnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmV3QWNjb3VudERpdi5jbGFzc0xpc3QuYWRkKCduZXctYWNjb3VudCcpO1xuICBuZXdBY2NvdW50RGl2LnRleHRDb250ZW50ID0gJ09yLCAnO1xuXG4gIGxldCBuZXdBY2NvdW50U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgbmV3QWNjb3VudFNwYW4uY2xhc3NMaXN0LmFkZCgnbmV3LWFjY291bnQtbGluaycpO1xuICBuZXdBY2NvdW50U3Bhbi50ZXh0Q29udGVudCA9ICdjcmVhdGUgYSBuZXcgYWNjb3VudC4nO1xuXG4gIGxldCB1c2VybmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGV0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB1c2VybmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3VzZXJuYW1lJyk7XG4gIHVzZXJuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdXNlcm5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VzZXJuYW1lJyk7XG4gIHVzZXJuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3VzZXJuYW1lJyk7XG4gIHVzZXJuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnVXNlcm5hbWUnO1xuXG4gIGxldCBwYXNzd29yZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGV0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBwYXNzd29yZExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Bhc3N3b3JkJyk7XG4gIHBhc3N3b3JkSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3Bhc3N3b3JkJyk7XG4gIHBhc3N3b3JkSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwYXNzd29yZCcpO1xuICBwYXNzd29yZElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwYXNzd29yZCcpO1xuICBwYXNzd29yZExhYmVsLnRleHRDb250ZW50ID0gJ1Bhc3N3b3JkJztcblxuICBsZXQgcmVtZW1iZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxldCByZW1lbWJlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcmVtZW1iZXJMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdyZW1lbWJlcicpO1xuICByZW1lbWJlcklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICByZW1lbWJlcklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncmVtZW1iZXInKTtcbiAgcmVtZW1iZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncmVtZW1iZXInKTtcbiAgcmVtZW1iZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3JlbWVtYmVyJyk7XG4gIHJlbWVtYmVyTGFiZWwudGV4dENvbnRlbnQgPSAnUmVtZW1iZXIgbWUnO1xuXG4gIGxldCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG5cbiAgW3VzZXJuYW1lTGFiZWwsIHVzZXJuYW1lSW5wdXRdLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBmb3JtRGl2MS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfSk7XG5cbiAgW3Bhc3N3b3JkTGFiZWwsIHBhc3N3b3JkSW5wdXRdLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBmb3JtRGl2Mi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfSk7XG5cbiAgW3JlbWVtYmVyTGFiZWwsIHJlbWVtYmVySW5wdXRdLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBmb3JtRGl2My5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfSk7XG5cbiAgW2Zvcm1EaXYxLCBmb3JtRGl2MiwgZm9ybURpdjMsIHN1Ym1pdEJ1dHRvbl0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGZvcm1FbGVtZW50cy5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfSk7XG5cbiAgbmV3QWNjb3VudERpdi5hcHBlbmRDaGlsZChuZXdBY2NvdW50U3Bhbik7XG5cbiAgc2lnbmluQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpZ25pbkhlYWRlcik7XG4gIHNpZ25pbkNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtRWxlbWVudHMpO1xuICBzaWduaW5Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3QWNjb3VudERpdik7XG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKHNpZ25pbkNvbnRhaW5lcik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=