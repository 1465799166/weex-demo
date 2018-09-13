// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(11);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(15)
)

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(14)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\weex-demo\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1a4d8e3c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
  name: 'App',
  data: function data() {
    return {};
  },

  methods: {
    onlongpress: function onlongpress(event) {
      console.log('onlongpress:', event);
      // modal.toast({
      //   message: 'toast',
      //   duration: 0.8
      // })

      // modal.alert({
      //   message: 'alert',
      //   duration: 0.8,
      //   okTitle: 'okkkk'
      // }, function () {
      //   console.log('close alert')
      // })

      // modal.confirm({
      //   message: 'confirm',
      //   duration: 0.8,
      //   okTitle: 'okkkk',
      //   cancleTitle: 'cancleee'
      // }, function () {
      //   console.log('close confirm')
      // })

      modal.prompt({
        message: 'prompt',
        duration: 0.3,
        okTitle: 'okkk',
        cancleTitle: 'cancleee'
      }, function (str) {
        // str为一个对象，有两个属性：result: okTitle || cancleTitle data: 输入的内容
        console.log(str);
      });
    },
    save: function save() {
      // 移动端有效
      this.$refs['img'].save(function (result) {
        modal.toast({ message: 'Img save' + result.success + ',' + result.errorDesc });
      });
    }
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["hello-word"]
  }, [_c('text', {
    on: {
      "longpress": _vm.onlongpress
    }
  }, [_vm._v("hello-word")]), _c('a', {
    attrs: {
      "href": "./components/slider.vue"
    }
  }), _c('slider', {
    staticClass: ["slider"],
    attrs: {
      "autoPlay": "",
      "interval": 1000,
      "infinite": "",
      "showIndicators": "",
      "scrollable": ""
    }
  }, [_vm._l((4), function(item, index) {
    return _c('image', {
      key: index,
      ref: "img",
      refInFor: true,
      staticClass: ["image"],
      attrs: {
        "resize": "stretch",
        "src": "https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg"
      }
    })
  }), _c('indicator', {
    staticClass: ["indicator"]
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {
  "slider": {
    "width": "400",
    "height": "200"
  },
  "image": {
    "borderWidth": "6",
    "borderStyle": "solid",
    "borderColor": "#00b4ff",
    "backgroundColor": "#BBBBBB",
    "width": "400",
    "height": "200"
  }
}

/***/ })
/******/ ]);