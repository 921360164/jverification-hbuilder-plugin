(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!******************************************************************************************************************************!*\
  !*** /Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/main.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 9));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIsd0U7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*********************************************************************************************************************************!*\
  !*** /Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages.json ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!********************************************************************************************************************************************************!*\
  !*** /Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?mpType=page ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_6bee4b60_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6bee4b60&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_6bee4b60_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_6bee4b60_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_6bee4b60_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3NOO0FBQ3ROLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiZWU0YjYwJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiVXNlcnMvcWlud2VubGFuL0RvY3VtZW50cy9wbHVnaW5Db2RlL2hidWlsZGVyUGx1Z2luL2p2ZXJpZmljYXRpb24taGJ1aWxkZXItcGx1Z2luL0pWZXJpZmljYXRpb25fSGJ1aWxkZXJfRGVtby9wYWdlcy9pbmRleC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**************************************************************************************************************************************************************************************!*\
  !*** /Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=template&id=6bee4b60&mpType=page ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6bee4b60_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6bee4b60&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6bee4b60_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6bee4b60_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6bee4b60_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6bee4b60_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=template&id=6bee4b60&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c("button", {
        attrs: { _i: 1 },
        on: {
          click: function($event) {
            return _vm.debug()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 2 },
        on: {
          click: function($event) {
            return _vm.init()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 3 },
        on: {
          click: function($event) {
            return _vm.isInitSuccess()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 4 },
        on: {
          click: function($event) {
            return _vm.checkVerifyEnable()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 5 },
        on: {
          click: function($event) {
            return _vm.getToken()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 6 },
        on: {
          click: function($event) {
            return _vm.preLogin()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 7 },
        on: {
          click: function($event) {
            return _vm.clearPreLoginCache()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 8 },
        on: {
          click: function($event) {
            return _vm.loginAuth()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 9 },
        on: {
          click: function($event) {
            return _vm.setCustomUIWithConfig()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 10 },
        on: {
          click: function($event) {
            return _vm.setCustomDialog()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 11 },
        on: {
          click: function($event) {
            return _vm.getCode()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 12 },
        on: {
          click: function($event) {
            return _vm.setTimeWithConfig()
          }
        }
      }),
      _c(
        "view",
        { staticClass: _vm._$s(13, "sc", "msg-box"), attrs: { _i: 13 } },
        [
          _c(
            "text",
            { staticClass: _vm._$s(14, "sc", "msg"), attrs: { _i: 14 } },
            [_vm._v(_vm._$s(14, "t0-0", _vm._s(_vm.msg)))]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!********************************************************************************************************************************************************************************!*\
  !*** /Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXd2QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar jv = uni.requireNativePlugin('JG-JVerification');var _default =\n{\n  data: function data() {\n    return {\n      title: 'Hello',\n      msg: \"\",\n      jv: jv };\n\n  },\n  onLoad: function onLoad() {\n  },\n  methods: {\n    // 设置 debug 模式\n    debug: function debug() {\n      this.jv.setDebugMode(true);\n    },\n    // 初始化\n    init: function init() {\n      var self = this;\n      self.jv.init({\n        timeout: 7000,\n        isProduction: false },\n      function (result) {\n        self.showModal('init', JSON.stringify(result));\n      });\n    },\n    // 是否初始化成功\n    isInitSuccess: function isInitSuccess() {\n      var self = this;\n      self.jv.isInitSuccess(function (result) {\n        self.showModal('isInitSuccess', JSON.stringify(result));\n      });\n    },\n    // 当前网络是否支持认证\n    checkVerifyEnable: function checkVerifyEnable() {\n      var self = this;\n      self.jv.checkVerifyEnable(function (result) {\n        self.showModal('checkVerifyEnable', JSON.stringify(result));\n      });\n    },\n    // 获取认证 token\n    getToken: function getToken() {\n      var self = this;\n      self.jv.getToken(5000, function (result) {\n        self.showModal('getToken', JSON.stringify(result));\n      });\n    },\n    // 一键登录预取号\n    preLogin: function preLogin() {\n      var self = this;\n      self.jv.preLogin(5000, function (result) {\n        self.showModal('preLogin', JSON.stringify(result));\n      });\n    },\n    // 清除预取号缓存\n    clearPreLoginCache: function clearPreLoginCache() {\n      this.jv.clearPreLoginCache();\n    },\n    // 一键登录\n    loginAuth: function loginAuth() {\n      var self = this;\n      self.jv.loginAuth({\n        autoFinish: true,\n        timeout: 5000 },\n      function (result) {\n        self.showModal('loginAuth', JSON.stringify(result));\n      }, function (event) {\n        __f__(\"log\", \"loginAuthevent:\" + JSON.stringify(event), \" at pages/index/index.vue:89\");\n      });\n    },\n    // 自定义授权页面 UI 样式\n    setCustomUIWithConfig: function setCustomUIWithConfig() {\n      var self = this;\n      this.jv.addCustomViewsClickCallback(function (id) {\n        self.showModal('customViewclick', \"id:\" + id);\n      });\n\n      if (uni.getSystemInfoSync().platform == \"ios\") {\n        this.jv.setCustomUIWithConfigiOS({\n          navColor: 0xff000000,\n          logBtnText: \"极光认证测试\",\n          privacyState: true,\n          appPrivacyColor: [0xff000200, 0xff000000],\n          addCustomViews: [{\n            type: \"label\",\n            width: 120,\n            height: 20,\n            top: 320,\n            left: 100,\n            backgroundColor: 0xff7b68ee,\n            text: \"自定义label\",\n            textFont: 20,\n            textAlignment: 15,\n            numberOfLines: 2,\n            cornerRadius: 10,\n            textColor: 0xff000000 },\n\n          {\n            type: \"button\",\n            id: \"buttonTest\",\n            width: 80,\n            height: 44,\n            textColor: 0xFFC0CB,\n            cornerRadius: 22,\n            left: 50,\n            bottom: -100,\n            title: \"点击测试\" },\n\n          {\n            type: \"imageView\",\n            width: 50,\n            height: 50,\n            cornerRadius: 25,\n            right: -100,\n            bottom: -100,\n            imagePath: \"static/qq.png\" }] });\n\n\n      } else {\n        this.jv.addCustomViewsClickCallback(function (id) {\n          self.showModal('customViewclick', \"id:\" + id);\n        });\n        this.jv.setCustomUIWithConfigAndroid({\n          setNavColor: 0xff000000,\n          setLogBtnText: \" 极光认证测试 \",\n          setPrivacyState: false,\n          setAppPrivacyColor: [0xff00f000, 0xff000000],\n          setLogoImgPath: \"static/weixin.png\",\n          addCustomViews: [{\n            type: \"text\",\n            finishFlag: false,\n            id: \"id1\",\n            width: 100,\n            height: 50,\n            text: \"自定义tv\",\n            textSize: 20,\n            align: 15,\n            margins: [0, 100, 0, 0],\n            bgColor: 0xff7b68ee },\n\n          {\n            type: \"image\",\n            finishFlag: true,\n            id: \"id2\",\n            width: 50,\n            height: 50,\n            align: 13,\n            margins: [0, 0, 0, 0],\n            bgImgPath: \"static/qq.png\" }] });\n\n\n      }\n    },\n    setCustomDialog: function setCustomDialog() {\n      if (uni.getSystemInfoSync().platform == \"ios\") {\n        this.jv.setCustomUIWithConfigiOS({\n          navCustom: true,\n          autoLayout: true,\n          showWindow: true,\n          windowConstraints: [0, 0, 300, 300],\n          windowBackgroundAlpha: 0.3,\n          //logo\n          logoImg: \"static/logo.png\",\n          logoConstraints: [0, -100, 60, 60],\n          //number\n          numberConstraints: [0, -42, 200, 14],\n          //slogn\n          sloganConstraints: [0, -20, 200, 14],\n          //登录按钮\n          logBtnConstraints: [0, 20, 220, 40],\n          logBtnText: \"一键登录\",\n          logBtnTextColor: 0x0000FF,\n          windowCornerRadius: 10,\n          privacyConstraints: [0, 100, 200, 40],\n          checkViewConstraints: [-108, 100, 10, 10],\n          windowCloseBtnConstraints: [-135, -135, 20, 20],\n          loadingConstraints: [0, 0, 20, 20],\n          windowCloseBtnImgs: [\"static/windowClose\", \"static/windowClose\"],\n          windowBackgroundImage: \"static/bg.jpeg\" });\n\n      } else {\n        this.jv.setCustomUIWithConfigAndroid({\n          setNavColor: 0xff000000,\n          setLogBtnText: \" 极光认证测试弹窗 \",\n          setPrivacyState: false,\n          setAppPrivacyColor: [0xff00f000, 0xff000000],\n          setDialogTheme: [300, 400, 0, 0, false],\n          setLogoImgPath: \"static/big.jpg\",\n          setAuthBGImgPath: \"static/bg.jpeg\",\n          privacyNeedClose: true, //弹窗是否需要关闭按钮 \n          privacyCloseTheme: [10, 60, 0, 0] //弹窗关闭按钮偏移量 privacyNeedClose为true时，必须设置它的偏移量\n        });\n      }\n\n    },\n    showModal: function showModal(title, content) {\n      uni.showModal({\n        title: title,\n        content: content });\n\n      this.msg = \"\".concat(title, \" :\").concat(content);\n    },\n    // 获取验证码\n    getCode: function getCode() {\n      var self = this;\n      self.jv.getCode({\n        phoneNumber: \"18925241111\", //在此替换你的phoneNumber\n        signID: \"1\", //在此替换你的signID\n        templateID: \"1\" //在此替换你的templateID\n      }, function (result) {\n        self.showModal('getCode', JSON.stringify(result));\n      }, function (event) {\n        __f__(\"log\", \"getCodeEvent:\" + JSON.stringify(event), \" at pages/index/index.vue:234\");\n      });\n    },\n    // 设置前后两次获取验证码的时间间隔\n    setTimeWithConfig: function setTimeWithConfig() {\n      this.jv.setTimeWithConfig(1000);\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImp2IiwidW5pIiwicmVxdWlyZU5hdGl2ZVBsdWdpbiIsImRhdGEiLCJ0aXRsZSIsIm1zZyIsIm9uTG9hZCIsIm1ldGhvZHMiLCJkZWJ1ZyIsInNldERlYnVnTW9kZSIsImluaXQiLCJzZWxmIiwidGltZW91dCIsImlzUHJvZHVjdGlvbiIsInJlc3VsdCIsInNob3dNb2RhbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpc0luaXRTdWNjZXNzIiwiY2hlY2tWZXJpZnlFbmFibGUiLCJnZXRUb2tlbiIsInByZUxvZ2luIiwiY2xlYXJQcmVMb2dpbkNhY2hlIiwibG9naW5BdXRoIiwiYXV0b0ZpbmlzaCIsImV2ZW50Iiwic2V0Q3VzdG9tVUlXaXRoQ29uZmlnIiwiYWRkQ3VzdG9tVmlld3NDbGlja0NhbGxiYWNrIiwiaWQiLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBsYXRmb3JtIiwic2V0Q3VzdG9tVUlXaXRoQ29uZmlnaU9TIiwibmF2Q29sb3IiLCJsb2dCdG5UZXh0IiwicHJpdmFjeVN0YXRlIiwiYXBwUHJpdmFjeUNvbG9yIiwiYWRkQ3VzdG9tVmlld3MiLCJ0eXBlIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dCIsInRleHRGb250IiwidGV4dEFsaWdubWVudCIsIm51bWJlck9mTGluZXMiLCJjb3JuZXJSYWRpdXMiLCJ0ZXh0Q29sb3IiLCJib3R0b20iLCJyaWdodCIsImltYWdlUGF0aCIsInNldEN1c3RvbVVJV2l0aENvbmZpZ0FuZHJvaWQiLCJzZXROYXZDb2xvciIsInNldExvZ0J0blRleHQiLCJzZXRQcml2YWN5U3RhdGUiLCJzZXRBcHBQcml2YWN5Q29sb3IiLCJzZXRMb2dvSW1nUGF0aCIsImZpbmlzaEZsYWciLCJ0ZXh0U2l6ZSIsImFsaWduIiwibWFyZ2lucyIsImJnQ29sb3IiLCJiZ0ltZ1BhdGgiLCJzZXRDdXN0b21EaWFsb2ciLCJuYXZDdXN0b20iLCJhdXRvTGF5b3V0Iiwic2hvd1dpbmRvdyIsIndpbmRvd0NvbnN0cmFpbnRzIiwid2luZG93QmFja2dyb3VuZEFscGhhIiwibG9nb0ltZyIsImxvZ29Db25zdHJhaW50cyIsIm51bWJlckNvbnN0cmFpbnRzIiwic2xvZ2FuQ29uc3RyYWludHMiLCJsb2dCdG5Db25zdHJhaW50cyIsImxvZ0J0blRleHRDb2xvciIsIndpbmRvd0Nvcm5lclJhZGl1cyIsInByaXZhY3lDb25zdHJhaW50cyIsImNoZWNrVmlld0NvbnN0cmFpbnRzIiwid2luZG93Q2xvc2VCdG5Db25zdHJhaW50cyIsImxvYWRpbmdDb25zdHJhaW50cyIsIndpbmRvd0Nsb3NlQnRuSW1ncyIsIndpbmRvd0JhY2tncm91bmRJbWFnZSIsInNldERpYWxvZ1RoZW1lIiwic2V0QXV0aEJHSW1nUGF0aCIsInByaXZhY3lOZWVkQ2xvc2UiLCJwcml2YWN5Q2xvc2VUaGVtZSIsImNvbnRlbnQiLCJnZXRDb2RlIiwicGhvbmVOdW1iZXIiLCJzaWduSUQiLCJ0ZW1wbGF0ZUlEIiwic2V0VGltZVdpdGhDb25maWciXSwibWFwcGluZ3MiOiJxSUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEVBQUUsR0FBR0MsR0FBRyxDQUFDQyxtQkFBSixDQUF3QixrQkFBeEIsQ0FBWCxDO0FBQ2U7QUFDZEMsTUFEYyxrQkFDUDtBQUNOLFdBQU87QUFDTkMsV0FBSyxFQUFFLE9BREQ7QUFFTkMsU0FBRyxFQUFFLEVBRkM7QUFHTkwsUUFBRSxFQUFGQSxFQUhNLEVBQVA7O0FBS0EsR0FQYTtBQVFkTSxRQVJjLG9CQVFMO0FBQ1IsR0FUYTtBQVVkQyxTQUFPLEVBQUU7QUFDUjtBQUNBQyxTQUFLLEVBQUMsaUJBQVU7QUFDZixXQUFLUixFQUFMLENBQVFTLFlBQVIsQ0FBcUIsSUFBckI7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LENBQXpCO0FBQ0EsT0FORCxFQU1FLFVBQUFXLEtBQUssRUFBRTtBQUNSLHFCQUFZLGtCQUFnQlQsSUFBSSxDQUFDQyxTQUFMLENBQWVRLEtBQWYsQ0FBNUI7QUFDQSxPQVJEO0FBU0EsS0EzTU87QUE0TVI7QUFDQW1FLHFCQUFpQixFQUFDLDZCQUFVO0FBQzNCLFdBQUs1RixFQUFMLENBQVE0RixpQkFBUixDQUEwQixJQUExQjtBQUNBLEtBL01PLEVBVkssRSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmNvbnN0IGp2ID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ0pHLUpWZXJpZmljYXRpb24nKVxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0aXRsZTogJ0hlbGxvJyxcblx0XHRcdG1zZzogXCJcIixcblx0XHRcdGp2XG5cdFx0fVxuXHR9LFxuXHRvbkxvYWQoKSB7XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHQvLyDorr7nva4gZGVidWcg5qih5byPXG5cdFx0ZGVidWc6ZnVuY3Rpb24oKXtcblx0XHRcdHRoaXMuanYuc2V0RGVidWdNb2RlKHRydWUpO1xuXHRcdH0sXG5cdFx0Ly8g5Yid5aeL5YyWXG5cdFx0aW5pdDpmdW5jdGlvbigpe1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi5qdi5pbml0KHtcblx0XHRcdFx0dGltZW91dDo3MDAwLFxuXHRcdFx0XHRpc1Byb2R1Y3Rpb246ZmFsc2UsXG5cdFx0XHR9LHJlc3VsdD0+e1xuXHRcdFx0XHRzZWxmLnNob3dNb2RhbCgnaW5pdCcsSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8vIOaYr+WQpuWIneWni+WMluaIkOWKn1xuXHRcdGlzSW5pdFN1Y2Nlc3M6ZnVuY3Rpb24oKXtcblx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdHNlbGYuanYuaXNJbml0U3VjY2VzcyhyZXN1bHQ9Pntcblx0XHRcdFx0c2VsZi5zaG93TW9kYWwoJ2lzSW5pdFN1Y2Nlc3MnLEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vIOW9k+WJjee9kee7nOaYr+WQpuaUr+aMgeiupOivgVxuXHRcdGNoZWNrVmVyaWZ5RW5hYmxlOmZ1bmN0aW9uKCl7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRzZWxmLmp2LmNoZWNrVmVyaWZ5RW5hYmxlKHJlc3VsdD0+e1xuXHRcdFx0XHRzZWxmLnNob3dNb2RhbCgnY2hlY2tWZXJpZnlFbmFibGUnLEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vIOiOt+WPluiupOivgSB0b2tlblxuXHRcdGdldFRva2VuOmZ1bmN0aW9uKCl7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRzZWxmLmp2LmdldFRva2VuKDUwMDAscmVzdWx0PT57XG5cdFx0XHRcdHNlbGYuc2hvd01vZGFsKCdnZXRUb2tlbicsSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0Ly8g5LiA6ZSu55m75b2V6aKE5Y+W5Y+3XG5cdFx0cHJlTG9naW46ZnVuY3Rpb24oKXtcblx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdHNlbGYuanYucHJlTG9naW4oNTAwMCxyZXN1bHQ9Pntcblx0XHRcdFx0c2VsZi5zaG93TW9kYWwoJ3ByZUxvZ2luJyxKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvLyDmuIXpmaTpooTlj5blj7fnvJPlrZhcblx0XHRjbGVhclByZUxvZ2luQ2FjaGU6ZnVuY3Rpb24oKXtcblx0XHRcdHRoaXMuanYuY2xlYXJQcmVMb2dpbkNhY2hlKCk7XG5cdFx0fSxcblx0XHQvLyDkuIDplK7nmbvlvZVcblx0XHRsb2dpbkF1dGg6ZnVuY3Rpb24oKXtcblx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdHNlbGYuanYubG9naW5BdXRoKHtcblx0XHRcdFx0YXV0b0ZpbmlzaDp0cnVlLFxuXHRcdFx0XHR0aW1lb3V0OjUwMDBcblx0XHRcdH0scmVzdWx0PT57XG5cdFx0XHRcdHNlbGYuc2hvd01vZGFsKCdsb2dpbkF1dGgnLEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXHRcdFx0fSxldmVudD0+e1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcImxvZ2luQXV0aGV2ZW50OlwiK0pTT04uc3RyaW5naWZ5KGV2ZW50KSk7XG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0Ly8g6Ieq5a6a5LmJ5o6I5p2D6aG16Z2iIFVJIOagt+W8j1xuXHRcdHNldEN1c3RvbVVJV2l0aENvbmZpZzpmdW5jdGlvbigpe1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0dGhpcy5qdi5hZGRDdXN0b21WaWV3c0NsaWNrQ2FsbGJhY2soaWQ9Pntcblx0XHRcdFx0c2VsZi5zaG93TW9kYWwoJ2N1c3RvbVZpZXdjbGljaycsXCJpZDpcIitpZCk7XG5cdFx0XHR9KTtcblx0XHRcdFxuXHRcdFx0aWYodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gXCJpb3NcIil7XG5cdFx0XHRcdHRoaXMuanYuc2V0Q3VzdG9tVUlXaXRoQ29uZmlnaU9TKHtcblx0XHRcdFx0XHRuYXZDb2xvcjoweGZmMDAwMDAwLFxuXHRcdFx0XHRcdGxvZ0J0blRleHQ6XCLmnoHlhYnorqTor4HmtYvor5VcIixcblx0XHRcdFx0XHRwcml2YWN5U3RhdGU6dHJ1ZSxcblx0XHRcdFx0XHRhcHBQcml2YWN5Q29sb3I6WzB4ZmYwMDAyMDAsMHhmZjAwMDAwMF0sXG5cdFx0XHRcdFx0YWRkQ3VzdG9tVmlld3M6W3tcblx0XHRcdFx0XHRcdFx0dHlwZTpcImxhYmVsXCIsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOjEyMCxcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OjIwLFxuXHRcdFx0XHRcdFx0XHR0b3A6MzIwLFxuXHRcdFx0XHRcdFx0XHRsZWZ0OjEwMCxcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOjB4ZmY3YjY4ZWUsXG5cdFx0XHRcdFx0XHRcdHRleHQ6XCLoh6rlrprkuYlsYWJlbFwiLFxuXHRcdFx0XHRcdFx0XHR0ZXh0Rm9udDoyMCxcblx0XHRcdFx0XHRcdFx0dGV4dEFsaWdubWVudDoxNSxcblx0XHRcdFx0XHRcdFx0bnVtYmVyT2ZMaW5lczoyLFxuXHRcdFx0XHRcdFx0XHRjb3JuZXJSYWRpdXM6MTAsXG5cdFx0XHRcdFx0XHRcdHRleHRDb2xvcjoweGZmMDAwMDAwXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0eXBlOlwiYnV0dG9uXCIsXG5cdFx0XHRcdFx0XHRcdGlkOiBcImJ1dHRvblRlc3RcIixcblx0XHRcdFx0XHRcdFx0d2lkdGg6ODAsXG5cdFx0XHRcdFx0XHRcdGhlaWdodDo0NCxcblx0XHRcdFx0XHRcdFx0dGV4dENvbG9yOjB4RkZDMENCLFxuXHRcdFx0XHRcdFx0XHRjb3JuZXJSYWRpdXM6MjIsXG5cdFx0XHRcdFx0XHRcdGxlZnQ6NTAsXG5cdFx0XHRcdFx0XHRcdGJvdHRvbTogLTEwMCxcblx0XHRcdFx0XHRcdFx0dGl0bGU6XCLngrnlh7vmtYvor5VcIixcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHR5cGU6XCJpbWFnZVZpZXdcIixcblx0XHRcdFx0XHRcdFx0d2lkdGg6NTAsXG5cdFx0XHRcdFx0XHRcdGhlaWdodDo1MCxcblx0XHRcdFx0XHRcdFx0Y29ybmVyUmFkaXVzOjI1LFxuXHRcdFx0XHRcdFx0XHRyaWdodDotMTAwLFxuXHRcdFx0XHRcdFx0XHRib3R0b206IC0xMDAsXG5cdFx0XHRcdFx0XHRcdGltYWdlUGF0aDpcInN0YXRpYy9xcS5wbmdcIlxuXHRcdFx0XHRcdFx0fV1cblx0XHRcdFx0fSlcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLmp2LmFkZEN1c3RvbVZpZXdzQ2xpY2tDYWxsYmFjayhpZD0+e1xuXHRcdFx0XHRcdHNlbGYuc2hvd01vZGFsKCdjdXN0b21WaWV3Y2xpY2snLFwiaWQ6XCIraWQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5qdi5zZXRDdXN0b21VSVdpdGhDb25maWdBbmRyb2lkKHtcblx0XHRcdFx0XHRzZXROYXZDb2xvcjoweGZmMDAwMDAwLFxuXHRcdFx0XHRcdHNldExvZ0J0blRleHQ6XCIg5p6B5YWJ6K6k6K+B5rWL6K+VIFwiLFxuXHRcdFx0XHRcdHNldFByaXZhY3lTdGF0ZTpmYWxzZSxcblx0XHRcdFx0XHRzZXRBcHBQcml2YWN5Q29sb3I6WzB4ZmYwMGYwMDAsMHhmZjAwMDAwMF0sXG5cdFx0XHRcdFx0c2V0TG9nb0ltZ1BhdGg6XCJzdGF0aWMvd2VpeGluLnBuZ1wiLFxuXHRcdFx0XHRcdGFkZEN1c3RvbVZpZXdzOlt7XG5cdFx0XHRcdFx0XHR0eXBlOlwidGV4dFwiLFxuXHRcdFx0XHRcdFx0ZmluaXNoRmxhZzpmYWxzZSxcblx0XHRcdFx0XHRcdGlkOlwiaWQxXCIsXG5cdFx0XHRcdFx0XHR3aWR0aDoxMDAsXG5cdFx0XHRcdFx0XHRoZWlnaHQ6NTAsXG5cdFx0XHRcdFx0XHR0ZXh0Olwi6Ieq5a6a5LmJdHZcIixcblx0XHRcdFx0XHRcdHRleHRTaXplOjIwLFxuXHRcdFx0XHRcdFx0YWxpZ246MTUsXG5cdFx0XHRcdFx0XHRtYXJnaW5zOlswLDEwMCwwLDBdLFxuXHRcdFx0XHRcdFx0YmdDb2xvcjoweGZmN2I2OGVlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOlwiaW1hZ2VcIixcblx0XHRcdFx0XHRcdGZpbmlzaEZsYWc6dHJ1ZSxcblx0XHRcdFx0XHRcdGlkOlwiaWQyXCIsXG5cdFx0XHRcdFx0XHR3aWR0aDo1MCxcblx0XHRcdFx0XHRcdGhlaWdodDo1MCxcblx0XHRcdFx0XHRcdGFsaWduOjEzLFxuXHRcdFx0XHRcdFx0bWFyZ2luczpbMCwwLDAsMF0sXG5cdFx0XHRcdFx0XHRiZ0ltZ1BhdGg6XCJzdGF0aWMvcXEucG5nXCJcblx0XHRcdFx0XHR9XSxcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9LFxuXHRcdHNldEN1c3RvbURpYWxvZzpmdW5jdGlvbigpe1xuXHRcdFx0aWYodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gXCJpb3NcIil7XG5cdFx0XHRcdHRoaXMuanYuc2V0Q3VzdG9tVUlXaXRoQ29uZmlnaU9TKHtcblx0XHRcdFx0XHRuYXZDdXN0b206dHJ1ZSxcblx0XHRcdFx0XHRhdXRvTGF5b3V0OnRydWUsXG5cdFx0XHRcdFx0c2hvd1dpbmRvdzp0cnVlLFxuXHRcdFx0XHRcdHdpbmRvd0NvbnN0cmFpbnRzOlswLDAsMzAwLDMwMF0sXG5cdFx0XHRcdFx0d2luZG93QmFja2dyb3VuZEFscGhhOiAwLjMsXG5cdFx0XHRcdFx0Ly9sb2dvXG5cdFx0XHRcdFx0bG9nb0ltZzpcInN0YXRpYy9sb2dvLnBuZ1wiLFxuXHRcdFx0XHRcdGxvZ29Db25zdHJhaW50czpbMCwtMTAwLDYwLDYwXSxcblx0XHRcdFx0XHQvL251bWJlclxuXHRcdFx0XHRcdG51bWJlckNvbnN0cmFpbnRzOlswLC00MiwyMDAsMTRdLFxuXHRcdFx0XHRcdC8vc2xvZ25cblx0XHRcdFx0XHRzbG9nYW5Db25zdHJhaW50czpbMCwtMjAsMjAwLDE0XSxcblx0XHRcdFx0XHQvL+eZu+W9leaMiemSrlxuXHRcdFx0XHRcdGxvZ0J0bkNvbnN0cmFpbnRzOlswLDIwLDIyMCw0MF0sXG5cdFx0XHRcdFx0bG9nQnRuVGV4dDpcIuS4gOmUrueZu+W9lVwiLFxuXHRcdFx0XHRcdGxvZ0J0blRleHRDb2xvcjoweDAwMDBGRixcblx0XHRcdFx0XHR3aW5kb3dDb3JuZXJSYWRpdXM6MTAsXG5cdFx0XHRcdFx0cHJpdmFjeUNvbnN0cmFpbnRzOlswLDEwMCwyMDAsNDBdLFxuXHRcdFx0XHRcdGNoZWNrVmlld0NvbnN0cmFpbnRzOlstMTA4LDEwMCwxMCwxMF0sXG5cdFx0XHRcdFx0d2luZG93Q2xvc2VCdG5Db25zdHJhaW50czpbLTEzNSwtMTM1LDIwLDIwXSxcblx0XHRcdFx0XHRsb2FkaW5nQ29uc3RyYWludHM6WzAsMCwyMCwyMF0sXG5cdFx0XHRcdFx0d2luZG93Q2xvc2VCdG5JbWdzOltcInN0YXRpYy93aW5kb3dDbG9zZVwiLFwic3RhdGljL3dpbmRvd0Nsb3NlXCJdLFxuXHRcdFx0XHRcdHdpbmRvd0JhY2tncm91bmRJbWFnZTpcInN0YXRpYy9iZy5qcGVnXCJcblx0XHRcdFx0fSlcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLmp2LnNldEN1c3RvbVVJV2l0aENvbmZpZ0FuZHJvaWQoe1xuXHRcdFx0XHRcdHNldE5hdkNvbG9yOjB4ZmYwMDAwMDAsXG5cdFx0XHRcdFx0c2V0TG9nQnRuVGV4dDpcIiDmnoHlhYnorqTor4HmtYvor5XlvLnnqpcgXCIsXG5cdFx0XHRcdFx0c2V0UHJpdmFjeVN0YXRlOmZhbHNlLFxuXHRcdFx0XHRcdHNldEFwcFByaXZhY3lDb2xvcjpbMHhmZjAwZjAwMCwweGZmMDAwMDAwXSxcblx0XHRcdFx0XHRzZXREaWFsb2dUaGVtZTpbMzAwLCA0MDAsIDAsIDAsIGZhbHNlXSxcblx0XHRcdFx0XHRzZXRMb2dvSW1nUGF0aDpcInN0YXRpYy9iaWcuanBnXCIsXG5cdFx0XHRcdFx0c2V0QXV0aEJHSW1nUGF0aDpcInN0YXRpYy9iZy5qcGVnXCIsXG5cdFx0XHRcdFx0cHJpdmFjeU5lZWRDbG9zZTp0cnVlLCAgICAgICAgICAgICAgICAgICAgICAgLy/lvLnnqpfmmK/lkKbpnIDopoHlhbPpl63mjInpkq4gXG5cdFx0XHRcdFx0cHJpdmFjeUNsb3NlVGhlbWU6WzEwLCA2MCwgMCwgMF0sICAgICAgICAgICAgLy/lvLnnqpflhbPpl63mjInpkq7lgY/np7vph48gcHJpdmFjeU5lZWRDbG9zZeS4unRydWXml7bvvIzlv4Xpobvorr7nva7lroPnmoTlgY/np7vph49cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHRcdFxuXHRcdH0sXG5cdFx0c2hvd01vZGFsOmZ1bmN0aW9uKHRpdGxlLGNvbnRlbnQpe1xuXHRcdFx0dW5pLnNob3dNb2RhbCh7XG5cdFx0XHQgICAgdGl0bGUsXG5cdFx0XHQgICAgY29udGVudCxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5tc2cgPSBgJHt0aXRsZX0gOiR7Y29udGVudH1gO1xuXHRcdH0sXG5cdFx0Ly8g6I635Y+W6aqM6K+B56CBXG5cdFx0Z2V0Q29kZTpmdW5jdGlvbigpe1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi5qdi5nZXRDb2RlKHtcblx0XHRcdFx0cGhvbmVOdW1iZXIgOiAgXCIxODkyNTI0MTExMVwiLCAvL+WcqOatpOabv+aNouS9oOeahHBob25lTnVtYmVyXG5cdFx0XHRcdHNpZ25JRCA6IFwiMVwiLCAgICAgICAgICAgICAvL+WcqOatpOabv+aNouS9oOeahHNpZ25JRFxuXHRcdFx0XHR0ZW1wbGF0ZUlEIDogXCIxXCIgICAgICAgICAvL+WcqOatpOabv+aNouS9oOeahHRlbXBsYXRlSURcblx0XHRcdH0scmVzdWx0PT57XG5cdFx0XHRcdHNlbGYuc2hvd01vZGFsKCdnZXRDb2RlJyxKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcblx0XHRcdH0sZXZlbnQ9Pntcblx0XHRcdFx0Y29uc29sZS5sb2coXCJnZXRDb2RlRXZlbnQ6XCIrSlNPTi5zdHJpbmdpZnkoZXZlbnQpKTtcblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvLyDorr7nva7liY3lkI7kuKTmrKHojrflj5bpqozor4HnoIHnmoTml7bpl7Tpl7TpmpRcblx0XHRzZXRUaW1lV2l0aENvbmZpZzpmdW5jdGlvbigpe1xuXHRcdFx0dGhpcy5qdi5zZXRUaW1lV2l0aENvbmZpZygxMDAwKVxuXHRcdH1cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---'
      } catch (e) {
        v = '[object object]'
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 8 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 10 */
/*!******************************************************************************************************************************!*\
  !*** /Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/App.vue ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 11);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDZ047QUFDaE4sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJVc2Vycy9xaW53ZW5sYW4vRG9jdW1lbnRzL3BsdWdpbkNvZGUvaGJ1aWxkZXJQbHVnaW4vanZlcmlmaWNhdGlvbi1oYnVpbGRlci1wbHVnaW4vSlZlcmlmaWNhdGlvbl9IYnVpbGRlcl9EZW1vL0FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 12);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW10QixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ })
],[[0,"app-config"]]]);