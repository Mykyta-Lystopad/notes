// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"components/models.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.frameWorks = frameWorks;
exports.componentsOfLang = componentsOfLang;
exports.mainLanguagesBtn = void 0;
var buttonsArray = ['Html', 'CSS', 'JavaScript', 'Python', 'PHP', 'Java', 'Webpack'];
var mainLanguagesBtn = mainLanguages().map(function (lang) {
  return lang.name;
});
exports.mainLanguagesBtn = mainLanguagesBtn;

function mainLanguages() {
  return buttonsArray.map(function (lang) {
    return Object.create({}, {
      name: {
        value: lang,
        enumerable: true
      }
    });
  });
}

function frameWorks(selector) {
  return mainLanguages().map(function (lang) {
    if (lang.name === selector) {
      switch (lang.name) {
        case 'Html':
          lang.frameWorks = {
            value: ['Back'],
            enumerable: true
          };
          return lang;

        case 'CSS':
          lang.frameWorks = {
            value: ['Back'],
            enumerable: true
          };
          return lang;

        case 'JavaScript':
          lang.frameWorks = {
            value: ['PureJS', 'React', 'Angular', 'Vue', 'Ember', 'Node', 'Back'],
            enumerable: true
          };
          return lang;

        case 'Python':
          lang.frameWorks = {
            value: ['Back'],
            enumerable: true
          };
          return lang;

        case 'PHP':
          lang.frameWorks = {
            value: ['PurePHP', 'Laravel', 'Back'],
            enumerable: true
          };
          return lang;

        case 'Java':
          lang.frameWorks = {
            value: ['Back'],
            enumerable: true
          };
          return lang;

        case 'Webpack':
          lang.frameWorks = {
            value: ['Back'],
            enumerable: true
          };
          return lang;

        default:
          alert("Нет таких значений");
      }
    }
  }).filter(function (frame) {
    return frame !== undefined;
  })[0];
}

function componentsOfLang(frameWork, part) {
  var obj = frameWorks(frameWork);
  var partsOfFrame = frameWorks(frameWork).frameWorks.value.map(function (frame) {
    if (frame === part) {
      switch (frame) {
        case 'PureJS':
          obj.parts = {
            value: ['Типы данных', 'Операторы', 'Циклы', 'Функции', 'Массивы', 'Объекты', 'Классы', 'Back'],
            enumerable: true
          }; // console.log(obj)

          return obj;

        case 'React':
          obj.parts = {
            value: ['Компоненты', 'Директивы', 'Back'],
            enumerable: true
          }; // console.log(obj)

          return obj;

        case 'Angular':
          obj.parts = {
            value: ['Компоненты', 'Директивы', 'Пайпы', 'Сервисы', 'Формы, валидация', 'Роутинг', 'Back'],
            enumerable: true
          }; // console.log(obj)

          return obj;

        case 'Vue':
          obj.parts = {
            value: ['Back'],
            enumerable: true
          };
          return obj;

        case 'Ember':
          obj.parts = {
            value: ['Back'],
            enumerable: true
          };
          return obj;

        case 'Node':
          obj.parts = {
            value: ['Back'],
            enumerable: true
          };
          return obj;

        case 'PurePHP':
          obj.parts = {
            value: ['Типы данных', 'Операторы', 'Циклы', 'Функции', 'Массивы', 'Объекты', 'Классы', 'Back'],
            enumerable: true
          };
          return obj;

        case 'Laravel':
          obj.parts = {
            value: ['Back'],
            enumerable: true
          };
          return obj;

        case 'Java':
          obj.parts = {
            value: ['Back'],
            enumerable: true
          };
          return obj;

        default:
          alert("Нет таких значений");
      }
    }
  }).filter(function (frame) {
    return frame !== undefined;
  })[0]; // console.log(partsOfFrame.parts.value)

  return partsOfFrame.parts.value;
}
},{}],"components/langs/javascript/pureJSTemplates/components/dataTypes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataTypes = dataTypes;

var _mainTemp = require("../../../../mainTemp");

var _models = require("../../../../models");

var _array = require("./array");

var _javascript = require("../../javascript");

var _classes = require("./classes");

var appTemp = document.querySelector('#app');

function dataTypes() {
  var data = "<div class=\"content\">\n                <div class=\"row\">\n                    <div class=\"col-sm\">\n                        <a href=\"https://learn.javascript.ru/types\" target=\"_blank\">\n                            <h3 class=\"title\">\u0422\u0438\u043F\u044B \u0434\u0430\u043D\u043D\u044B\u0445</h3>\n                        </a>\n                    \n                        <h5>\u0427\u0438\u0441\u043B\u043E (number)</h5>\n                        <p>const num = 42 // integer</p>\n                        <p>Number.MAX_SAFE_INTEGER = 9007199254740991 // \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E integer</p>\n                        <p>Number.MIN_SAFE_INTEGER = -9007199254740991 // \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E integer</p>\n                        <p>const float = 42.42 // float</p>\n                        <p>const pow = 10e3 //  \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0442\u0440\u0435\u0445 \u043D\u0443\u043B\u0435\u0439 (10000) </p>\n                        <p>const number = 10**3 // \u0412\u043E\u0437\u0432\u0438\u0434\u0435\u043D\u0438\u0435 \u0432 \u0441\u0442\u0435\u043F\u0435\u043D\u044C (1000)</p>\n                    </div>\n                    <div class=\"col-sm\">\n                        <h5>\u041C\u0435\u0442\u043E\u0434\u044B \u0447\u0438\u0441\u0435\u043B</h5>\n                        <p><strong>typeof</strong> 50 // number ( \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u043C \u0442\u0438\u043F \u0434\u0430\u043D\u043D\u044B\u0445 )</p>\n                        <p><strong>Math.pow(10, 3)</strong> // \u0412\u043E\u0437\u0432\u0438\u0434\u0435\u043D\u0438\u0435 \u0432 \u0441\u0442\u0435\u043F\u0435\u043D\u044C (1000)</p>\n                        <p><strong>Math.sqrt(144)</strong> // \u043A\u043E\u0440\u0435\u043D\u044C \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0439 \u0438\u0437 144 ( 12 ) </p>\n                        <p><strong>Math.abs(-42)</strong> // \u0438\u0437\u0432\u043B\u0435\u043A\u0430\u0435\u043C \u043C\u043E\u0434\u0443\u043B\u044C ( 42 ) </p>\n                        <p><strong>Math.max(24, 12, 5, 44, 17)</strong> // \u0432\u0435\u0440\u043D\u0435\u0442 \u043C\u0430\u043A\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 ( 44 ) </p>\n                        <p><strong>Math.min(24, 12, 5, 44, 17)</strong> // \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 ( 5 ) </p>\n                        <p><strong>Math.floor(4.9)</strong> // 4 </p>\n                        <p><strong>Math.ceil(4.1)</strong> // 5 </p>\n                        <p><strong>Math.round(4.1)</strong> // \u043F\u0440\u043E\u0441\u0442\u043E\u0435 \u043E\u043A\u0440\u0443\u0433\u043B\u0435\u043D\u0438\u0435 4 </p>\n                        <p>Math.trunc(4.7)</strong> // \u0432\u0435\u0440\u043D\u0435\u0442 \u0446\u0435\u043B\u0443\u044E \u0447\u0430\u0441\u0442\u044C 4 </p>\n                        <p><strong>function getRandom(min, max)</strong>{</p>\n                        <p>return <strong>+(Math.random()</strong> * (max - min) + min)<strong>.toFixed(2)</strong></p>\n                        <p>}</p>\n                        <p>console.log(<strong>typeof</strong> getRandom(5, 7));</p>\n                    </div>\n                    <div class=\"col-sm\">\n                    <p><strong>isNaN(9 / undefined)</strong> // true</p>\n                        <p>'42' + 42 // 4242</p>\n                        <p><strong>+</strong>'42' + 42 // 84</p>\n                        <p><strong>parseInt('42')</strong> + 42) // 84</p>\n                        <p><strong>parseFloat('42.42')</strong> + 42) // 84.42</p>\n                        <p>(0.4 + 0.2).toFixed(1)</strong> // \u043E\u0431\u0440\u0435\u0437\u0430\u0435\u043C 0.6000000000000001 \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C \u0441\u0442\u0440\u043E\u043A\u0443 (0.6) </p>\n                        <p><strong>BigInt(98878)</strong> // 98878n</p>\n                        <p>parseInt(98878n) // 98878</p>\n                        <p><strong>Math.E</strong> // 2.718281828459045</p>\n                        <p><strong>Math.PI</strong> // 3.141592653589793</p>\n                    </div>\n                </div>\n            </div>";
  appTemp.insertAdjacentHTML('beforeend', data);
  var compBtn = document.querySelectorAll('.btn');
  compBtn.forEach(function (comp) {
    comp.addEventListener('click', function () {
      console.log(comp);
      var arr = [{
        name: 'Типы данных',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          dataTypes();
        }

      }, {
        name: 'Операторы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          (0, _classes.classes)();
        }

      }, {
        name: 'Циклы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          (0, _array.array)();
        }

      }, {
        name: 'Функции',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          (0, _classes.classes)();
        }

      }, {
        name: 'Массивы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          (0, _array.array)();
        }

      }, {
        name: 'Обьекты',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          (0, _array.array)();
        }

      }, {
        name: 'Классы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          (0, _classes.classes)();
        }

      }, {
        name: 'Back',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.frameWorks)('JavaScript').frameWorks.value);
          (0, _javascript.javaScript)();
        }

      }];
      arr.forEach(function (item) {
        return item.name === comp.innerHTML ? (appTemp.innerHTML = '', item.value) : false;
      });
    });
  });
}
},{"../../../../mainTemp":"components/mainTemp.js","../../../../models":"components/models.js","./array":"components/langs/javascript/pureJSTemplates/components/array.js","../../javascript":"components/langs/javascript/javascript.js","./classes":"components/langs/javascript/pureJSTemplates/components/classes.js"}],"components/langs/javascript/pureJSTemplates/components/classes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classes = classes;

var _mainTemp = require("../../../../mainTemp");

var _models = require("../../../../models");

var _array = require("./array");

var _javascript = require("../../javascript");

var _dataTypes = require("./dataTypes");

var appTemp = document.querySelector('#app');

function classes() {
  var classesJs = "<div class=\"content\">\n                <div class=\"row\">\n                    <div class=\"col-sm\">\n                        <a href=\"https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array\" target=\"_blank\">\n                            <h3 class=\"title\">\u041A\u043B\u0430\u0441\u0441\u044B</h3>\n                        </a>\n                    </div>\n                </div>\n            </div>";
  appTemp.insertAdjacentHTML('beforeend', classesJs);
  var compBtn = document.querySelectorAll('.btn');
  compBtn.forEach(function (comp) {
    comp.addEventListener('click', function () {
      console.log(comp);
      var arr = [{
        name: 'Типы данных',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          (0, _dataTypes.dataTypes)();
        }

      }, {
        name: 'Операторы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          classes();
        }

      }, {
        name: 'Циклы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          (0, _array.array)();
        }

      }, {
        name: 'Функции',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          classes();
        }

      }, {
        name: 'Массивы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          (0, _array.array)();
        }

      }, {
        name: 'Обьекты',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          (0, _array.array)();
        }

      }, {
        name: 'Классы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          classes();
        }

      }, {
        name: 'Back',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.frameWorks)('JavaScript').frameWorks.value);
          (0, _javascript.javaScript)();
        }

      }];
      arr.forEach(function (item) {
        return item.name === comp.innerHTML ? (appTemp.innerHTML = '', item.value) : false;
      });
    });
  });
}
},{"../../../../mainTemp":"components/mainTemp.js","../../../../models":"components/models.js","./array":"components/langs/javascript/pureJSTemplates/components/array.js","../../javascript":"components/langs/javascript/javascript.js","./dataTypes":"components/langs/javascript/pureJSTemplates/components/dataTypes.js"}],"components/langs/javascript/pureJSTemplates/components/array.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.array = array;

var _mainTemp = require("../../../../mainTemp");

var _models = require("../../../../models");

var _classes = require("./classes");

var _javascript = require("../../javascript");

var _dataTypes = require("./dataTypes");

function array() {
  var arr = "<div class=\"content\">\n                <div class=\"row\">\n                    <div class=\"col-sm\">\n                        <a href=\"https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array\" target=\"_blank\">\n                            <h3 class=\"title\">\u041C\u0435\u0442\u043E\u0434\u044B \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432</h3>\n                        </a>\n                        <p>let arr = [1, 2, 3, 4, 5];</p>\n                        <br>\n                        <p>arr.<strong>pop()</strong>------- \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 (5)</p>\n                        <p>arr.<strong>shift()</strong>------ \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0435\u0440\u0432\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 (1)</p>\n                        <p>arr.<strong>push(7)</strong>-----\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432 \u043A\u043E\u043D\u0435\u0446 (7)</p>\n                        <p>arr.<strong>unshift(9)</strong>-- \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0435\u0440\u0432\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 (9)</p>\n                        <p>arr.<strong>shift(n)</strong>---- \u0443\u0434\u0430\u043B\u0438\u0442\u044C n \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0441\u0447\u0438\u0442\u0430\u044F \u0441\u043F\u0435\u0440\u0435\u0434\u0438</p>\n                        <br>\n                        <p><strong>arr[arr.length -1]</strong> - \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442</p>\n                        <br>\n                        <p>let a = [ 'a', 'b' ]</p>\n                        <p>let b = a ---- \u043C\u0430\u0441\u0441\u0438\u0432 b \u0435\u0441\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u043E\u0439 \u043D\u0430 \u043C\u0430\u0441\u0441\u0438\u0432 \u0430</p>\n                        <p>let b = a.<strong>concat</strong>()  - \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043A\u043E\u043F\u0438\u044E \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0430</p>\n                        <p>b.push('c')</p>\n                        <p>a = [ 'a', 'b' ]</p>\n                        <p>b = [ 'a', 'b', 'c' ]</p>\n                        \n                    </div>\n                    <div class=\"col-sm\">\n                        <h4>\u041F\u0435\u0440\u0435\u0431\u043E\u0440 \u043C\u0430\u0441\u0441\u0438\u0432\u0430</h4>\n                        <p>let arr = [1, 2, 3, 4, 5];</p>\n                        <h5>--- for</h5>\n                        <p><strong>for</strong> (let i = 1; i < arr.length+1; i++) {</p>\n                        <p>console.log(i) // 1 2 3 4 5</p>\n                        <p>}</p>\n                        <h5>--- forEach</h5>\n                        <p>arr.<strong>forEach</strong>(function(item, i, mass) {</p>\n                        <p>item-\u044D\u043B\u0435\u043C\u0435\u043D\u0442, i-\u043D\u043E\u043C\u0435\u0440 \u044D\u043B\u0435\u043C, mass-\u0441\u0430\u043C \u043C\u0430\u0441\u0441\u0438\u0432</p>\n                        <p>}</p>\n                        <h5>--- for (ES6+)</h5>\n                        <p><strong>for</strong> (let key of arr) {</p>\n                        <p>console.log(key) // \u0432\u044B\u0434\u0430\u0441\u0442 \u0432\u0441\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435 (items)</p>\n                        <p>}</p>\n                        <p></p>\n                    </div>\n                     <div class=\"col-sm\">\n                        <br>\n                        <p>let arr = ['Car', 'moto', 'bicycle', 'bus', 'airplane']</p>\n                        <p>arr.<strong>reverse()</strong> // [ 'airplane', 'bus', 'bicycle', 'moto', 'Car' ]</p>\n                        <p>arr.<strong>includes</strong>('bus') // true</p>\n                        <p>let index = arr.<strong>indexOf</strong>('bus'); // 3</p>\n                        <p>arr[index] // bus</p>\n                        <p>let machine = arr.<strong>findIndex</strong>(item=>{</p>\n                        <p>return item.horses === 500 // 3</p>\n                        <p>})</p>\n                        <p>let machine = arr.<strong>find</strong>(item=>{</p>\n                        <p>return item.horses === 500 // { name: 'Car', horses: 500 }</p>\n                        <p>})</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm\">\n                        <br>\n                        <p><strong>let arr</strong> = [ </p>\n                        <p>{name: 'Car', horses: 500},</p>\n                        <p>{name: 'moto', horses: 100},</p>\n                        <p>{name: 'bicycle', horses: 0.2,},</p>\n                        <p>{name: 'bus', horses: 600},</p>\n                        <p>{name: 'airplane', horses: 1500}</p>\n                        <p>]</p>\n                        <p><strong>let newArr</strong> = []</p>\n                        <p><strong>let mapping</strong> = arr.<strong>map</strong>(item=>{</p>\n                        <p> return item.horses // [ 500, 100, 0.2, 600, 1500 ]</p>\n                        <p> return item.horses > 500?<strong>newArr.push</strong>(item.horses):false // [ false, false, false, 1, 2 ]</p>\n                        <p>})</p>\n                        <p>console.log(<strong>newArr</strong>); // [ 600, 1500 ]</p>\n                        <br>\n                        <p><strong>let mapping</strong> = arr.<strong>filter</strong>(item=>{</p>\n                        <p> return item.horses > 500</p>\n                        <p>})</p>\n                        <p>console.log(<strong>mapping</strong>); // [ { name: 'bus', horses: 600 }, { name: 'airplane', horses: 1500 } ]</p>\n                        <br>\n                        <p>let allHorses = arr</p>\n                        <p>.<strong>filter</strong>(item=>item.horses>500) // [{ name: 'bus', horses: 600 }, { name: 'airplane', horses: 1500 }]</p>\n                        <p>.<strong>reduce((sum, item)</strong>=>{ </p>\n                        <p>return sum+=item.horses  // 2100</p>\n                        <p>}, 0) // \u0441 \u043D\u0443\u043B\u044F \u0441\u0447\u0438\u0442\u0430\u0442\u044C</p>\n                        <p></p>\n                        <p></p>\n                        <p></p>\n                    </div>\n                </div>\n            </div>";
  var appTemp = document.querySelector('#app');
  appTemp.insertAdjacentHTML('beforeend', arr);
  var compBtn = document.querySelectorAll('.btn');
  compBtn.forEach(function (comp) {
    comp.addEventListener('click', function () {
      console.log(comp);
      var arr = [{
        name: 'Типы данных',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          (0, _dataTypes.dataTypes)();
        }

      }, {
        name: 'Операторы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          (0, _classes.classes)();
        }

      }, {
        name: 'Циклы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          array();
        }

      }, {
        name: 'Функции',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          (0, _classes.classes)();
        }

      }, {
        name: 'Массивы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          array();
        }

      }, {
        name: 'Обьекты',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          array();
        }

      }, {
        name: 'Классы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          (0, _classes.classes)();
        }

      }, {
        name: 'Back',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.frameWorks)('JavaScript').frameWorks.value);
          (0, _javascript.javaScript)();
        }

      }];
      arr.forEach(function (item) {
        return item.name === comp.innerHTML ? (appTemp.innerHTML = '', item.value) : false;
      });
    });
  });
}
},{"../../../../mainTemp":"components/mainTemp.js","../../../../models":"components/models.js","./classes":"components/langs/javascript/pureJSTemplates/components/classes.js","../../javascript":"components/langs/javascript/javascript.js","./dataTypes":"components/langs/javascript/pureJSTemplates/components/dataTypes.js"}],"components/langs/javascript/pureJSTemplates/pureJS.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pureJS = pureJS;

var _array = require("./components/array");

var _mainTemp = require("../../../mainTemp");

var _models = require("../../../models");

var _classes = require("./components/classes");

var _javascript = require("../javascript");

var _dataTypes = require("./components/dataTypes");

var appTemp = document.querySelector('#app');

function pureJS() {
  var pureJS = "<div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-sm\">\n                                <h3>PureJS</h3>\n                                <p>\u041F\u0438\u0448\u0438 \u0447\u0442\u043E \u0445\u043E\u0447\u0435\u0448\u044C)</p>\n                            </div>\n                        </div>\n                    </div>";
  appTemp.insertAdjacentHTML('beforeend', pureJS);
  var compBtn = document.querySelectorAll('.btn');
  compBtn.forEach(function (comp) {
    comp.addEventListener('click', function () {
      console.log(comp);
      var arr = [{
        name: 'Типы данных',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          (0, _dataTypes.dataTypes)();
        }

      }, {
        name: 'Операторы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          (0, _classes.classes)();
        }

      }, {
        name: 'Циклы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          (0, _array.array)();
        }

      }, {
        name: 'Функции',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          (0, _classes.classes)();
        }

      }, {
        name: 'Массивы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          (0, _array.array)();
        }

      }, {
        name: 'Обьекты',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          (0, _array.array)();
        }

      }, {
        name: 'Классы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', 'PureJS'));
          (0, _classes.classes)();
        }

      }, {
        name: 'Back',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.frameWorks)('JavaScript').frameWorks.value);
          (0, _javascript.javaScript)();
        }

      }];
      arr.forEach(function (item) {
        return item.name === comp.innerHTML ? (appTemp.innerHTML = '', item.value) : false;
      });
    });
  });
}
},{"./components/array":"components/langs/javascript/pureJSTemplates/components/array.js","../../../mainTemp":"components/mainTemp.js","../../../models":"components/models.js","./components/classes":"components/langs/javascript/pureJSTemplates/components/classes.js","../javascript":"components/langs/javascript/javascript.js","./components/dataTypes":"components/langs/javascript/pureJSTemplates/components/dataTypes.js"}],"components/langs/javascript/react.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.react = react;

var _array = require("./pureJSTemplates/components/array");

var _mainTemp = require("../../mainTemp");

var _models = require("../../models");

var _classes = require("./pureJSTemplates/components/classes");

var _javascript = require("./javascript");

var appTemp = document.querySelector('#app');

function react() {
  var react = "<div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-sm\">\n                                <h3>React</h3>\n                                <p>\u041F\u0438\u0448\u0438 \u0447\u0442\u043E \u0445\u043E\u0447\u0435\u0448\u044C)</p>\n                            </div>\n                        </div>\n                    </div>";
  appTemp.insertAdjacentHTML('beforeend', react);
  var compBtn = document.querySelectorAll('.btn');
  compBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (btn.innerHTML === 'Типы данных') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Операторы') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Циклы') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Функции') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Массивы') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Обьекты') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Классы') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _classes.classes)();
      } else if (btn.innerHTML === 'Back') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)((0, _models.frameWorks)('JavaScript').frameWorks.value);
        (0, _javascript.javaScript)(appTemp);
      }
    });
  });
}
},{"./pureJSTemplates/components/array":"components/langs/javascript/pureJSTemplates/components/array.js","../../mainTemp":"components/mainTemp.js","../../models":"components/models.js","./pureJSTemplates/components/classes":"components/langs/javascript/pureJSTemplates/components/classes.js","./javascript":"components/langs/javascript/javascript.js"}],"components/langs/javascript/angular.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.angular = angular;

var _array = require("./pureJSTemplates/components/array");

var _mainTemp = require("../../mainTemp");

var _models = require("../../models");

var _classes = require("./pureJSTemplates/components/classes");

var _javascript = require("./javascript");

var appTemp = document.querySelector('#app');

function angular() {
  var angular = "<div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-sm\">\n                                <h3>Angular</h3>\n                                <p>\u041F\u0438\u0448\u0438 \u0447\u0442\u043E \u0445\u043E\u0447\u0435\u0448\u044C)</p>\n                            </div>\n                        </div>\n                    </div>";
  appTemp.insertAdjacentHTML('beforeend', angular);
  var compBtn = document.querySelectorAll('.btn');
  compBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (btn.innerHTML === 'Типы данных') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Операторы') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Циклы') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Функции') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Массивы') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Обьекты') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Классы') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _classes.classes)();
      } else if (btn.innerHTML === 'Back') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)((0, _models.frameWorks)('JavaScript').frameWorks.value);
        (0, _javascript.javaScript)(appTemp);
      }
    });
  });
}
},{"./pureJSTemplates/components/array":"components/langs/javascript/pureJSTemplates/components/array.js","../../mainTemp":"components/mainTemp.js","../../models":"components/models.js","./pureJSTemplates/components/classes":"components/langs/javascript/pureJSTemplates/components/classes.js","./javascript":"components/langs/javascript/javascript.js"}],"components/langs/javascript/vue.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vue = vue;

var _array = require("./pureJSTemplates/components/array");

var _mainTemp = require("../../mainTemp");

var _models = require("../../models");

var _classes = require("./pureJSTemplates/components/classes");

var _javascript = require("./javascript");

var appTemp = document.querySelector('#app');

function vue() {
  var vue = "<div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-sm\">\n                                <h3>Vue</h3>\n                                <p>\u041F\u0438\u0448\u0438 \u0447\u0442\u043E \u0445\u043E\u0447\u0435\u0448\u044C)</p>\n                            </div>\n                        </div>\n                    </div>";
  appTemp.insertAdjacentHTML('beforeend', vue);
  var compBtn = document.querySelectorAll('.btn');
  compBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (btn.innerHTML === 'Типы данных') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Операторы') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Циклы') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Функции') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Массивы') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Обьекты') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Классы') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _classes.classes)();
      } else if (btn.innerHTML === 'Back') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)((0, _models.frameWorks)('JavaScript').frameWorks.value);
        (0, _javascript.javaScript)(appTemp);
      }
    });
  });
}
},{"./pureJSTemplates/components/array":"components/langs/javascript/pureJSTemplates/components/array.js","../../mainTemp":"components/mainTemp.js","../../models":"components/models.js","./pureJSTemplates/components/classes":"components/langs/javascript/pureJSTemplates/components/classes.js","./javascript":"components/langs/javascript/javascript.js"}],"components/langs/javascript/ember.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ember = ember;

var _array = require("./pureJSTemplates/components/array");

var _mainTemp = require("../../mainTemp");

var _models = require("../../models");

var _classes = require("./pureJSTemplates/components/classes");

var _javascript = require("./javascript");

var appTemp = document.querySelector('#app');

function ember() {
  var ember = "<div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-sm\">\n                                <h3>Ember</h3>\n                                <p>\u041F\u0438\u0448\u0438 \u0447\u0442\u043E \u0445\u043E\u0447\u0435\u0448\u044C)</p>\n                            </div>\n                        </div>\n                    </div>";
  appTemp.insertAdjacentHTML('beforeend', ember);
  var compBtn = document.querySelectorAll('.btn');
  compBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (btn.innerHTML === 'Типы данных') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Операторы') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Циклы') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Функции') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Массивы') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Обьекты') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Классы') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _classes.classes)();
      } else if (btn.innerHTML === 'Back') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)((0, _models.frameWorks)('JavaScript').frameWorks.value);
        (0, _javascript.javaScript)(appTemp);
      }
    });
  });
}
},{"./pureJSTemplates/components/array":"components/langs/javascript/pureJSTemplates/components/array.js","../../mainTemp":"components/mainTemp.js","../../models":"components/models.js","./pureJSTemplates/components/classes":"components/langs/javascript/pureJSTemplates/components/classes.js","./javascript":"components/langs/javascript/javascript.js"}],"components/langs/javascript/node.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.node = node;

var _array = require("./pureJSTemplates/components/array");

var _mainTemp = require("../../mainTemp");

var _models = require("../../models");

var _classes = require("./pureJSTemplates/components/classes");

var _javascript = require("./javascript");

var appTemp = document.querySelector('#app');

function node() {
  var node = "<div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-sm\">\n                                <h3>Node</h3>\n                                <p>\u041F\u0438\u0448\u0438 \u0447\u0442\u043E \u0445\u043E\u0447\u0435\u0448\u044C)</p>\n                            </div>\n                        </div>\n                    </div>";
  appTemp.insertAdjacentHTML('beforeend', node);
  var compBtn = document.querySelectorAll('.btn');
  compBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (btn.innerHTML === 'Типы данных') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Операторы') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Циклы') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Функции') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Массивы') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Обьекты') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _array.array)();
      } else if (btn.innerHTML === 'Классы') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)(_models.componentsOfLang);
        (0, _classes.classes)();
      } else if (btn.innerHTML === 'Back') {
        appTemp.innerHTML = '';
        (0, _mainTemp.mainBtn)((0, _models.frameWorks)('JavaScript').frameWorks.value);
        (0, _javascript.javaScript)(appTemp);
      }
    });
  });
}
},{"./pureJSTemplates/components/array":"components/langs/javascript/pureJSTemplates/components/array.js","../../mainTemp":"components/mainTemp.js","../../models":"components/models.js","./pureJSTemplates/components/classes":"components/langs/javascript/pureJSTemplates/components/classes.js","./javascript":"components/langs/javascript/javascript.js"}],"components/langs/javascript/javascript.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.javaScript = javaScript;

var _mainTemp = require("../../mainTemp");

var _models = require("../../models");

var _pureJS = require("./pureJSTemplates/pureJS");

var _react = require("./react");

var _angular = require("./angular");

var _vue = require("./vue");

var _ember = require("./ember");

var _node = require("./node");

var appTemp = document.querySelector('#app');

function javaScript() {
  console.log('hi from javaScript');
  var javaScript = "<div class=\"content\">\n                            <div class=\"row\">\n                                <div class=\"col-sm\">\n                                    <a href=\"https://learn.javascript.ru/\" target=\"_blank\">\n                                        <h3 class=\"title\">Learn JavaScript</h3>\n                                    </a>\n                                    <a href=\"https://developer.mozilla.org/ru/\" target=\"_blank\">\n                                        <h3 class=\"title\">MDN Web Docs - Mozilla</h3>\n                                    </a>\n                               \n                                </div>\n                            </div>\n                        </div>";
  appTemp.insertAdjacentHTML('beforeend', javaScript);
  var langsComponentBtn = document.querySelectorAll('.btn');
  langsComponentBtn.forEach(function (comp) {
    console.log(comp.innerHTML);
    comp.addEventListener('click', function () {
      console.log(comp);
      var arr = [{
        name: 'PureJS',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', comp.innerHTML));
          (0, _pureJS.pureJS)();
        }

      }, {
        name: 'React',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', comp.innerHTML));
          (0, _react.react)();
        }

      }, {
        name: 'Angular',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', comp.innerHTML));
          (0, _angular.angular)();
        }

      }, {
        name: 'Vue',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', comp.innerHTML));
          (0, _vue.vue)();
        }

      }, {
        name: 'Ember',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', comp.innerHTML));
          (0, _ember.ember)();
        }

      }, {
        name: 'Node',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('JavaScript', comp.innerHTML));
          (0, _node.node)();
        }

      }, {
        name: 'Back',

        get value() {
          (0, _mainTemp.mainBtn)(_models.mainLanguagesBtn);
          (0, _mainTemp.firstPageTemplate)();
        }

      }];
      arr.forEach(function (item) {
        return item.name === comp.innerHTML ? (appTemp.innerHTML = '', item.value) : false;
      });
    });
  });
}
},{"../../mainTemp":"components/mainTemp.js","../../models":"components/models.js","./pureJSTemplates/pureJS":"components/langs/javascript/pureJSTemplates/pureJS.js","./react":"components/langs/javascript/react.js","./angular":"components/langs/javascript/angular.js","./vue":"components/langs/javascript/vue.js","./ember":"components/langs/javascript/ember.js","./node":"components/langs/javascript/node.js"}],"components/langs/php/purePHP/components/classesPhp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classesPhp = classesPhp;

var _mainTemp = require("../../../../mainTemp");

var _models = require("../../../../models");

var _php = require("../../php");

var _arrayPhp = require("./arrayPhp");

var appTemp = document.querySelector('#app');

function classesPhp() {
  var classes = "<div class=\"content\">\n                <div class=\"row\">\n                    <div class=\"col-sm\">\n                        <a href=\"https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array\" target=\"_blank\">\n                            <h3 class=\"title\">\u041A\u043B\u0430\u0441\u0441\u044B</h3>\n                        </a>\n                    </div>\n                </div>\n            </div>";
  appTemp.insertAdjacentHTML('beforeend', classes);
  var compBtn = document.querySelectorAll('.btn');
  compBtn.forEach(function (comp) {
    comp.addEventListener('click', function () {
      console.log(comp);
      var arr = [{
        name: 'Типы данных',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('PHP', 'PurePHP'));
          (0, _arrayPhp.arrayPhp)();
        }

      }, {
        name: 'Операторы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('PHP', 'PurePHP'));
          classesPhp();
        }

      }, {
        name: 'Циклы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('PHP', 'PurePHP'));
          (0, _arrayPhp.arrayPhp)();
        }

      }, {
        name: 'Функции',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('PHP', 'PurePHP'));
          classesPhp();
        }

      }, {
        name: 'Массивы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('PHP', 'PurePHP'));
          (0, _arrayPhp.arrayPhp)();
        }

      }, {
        name: 'Обьекты',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('PHP', 'PurePHP'));
          classesPhp();
        }

      }, {
        name: 'Классы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('PHP', 'PurePHP'));
          (0, _arrayPhp.arrayPhp)();
        }

      }, {
        name: 'Back',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.frameWorks)('PHP').frameWorks.value);
          (0, _php.php)();
        }

      }];
      arr.forEach(function (item) {
        if (item.name === comp.innerHTML) {
          appTemp.innerHTML = '';
          item.value;
        }
      });
    });
  });
}
},{"../../../../mainTemp":"components/mainTemp.js","../../../../models":"components/models.js","../../php":"components/langs/php/php.js","./arrayPhp":"components/langs/php/purePHP/components/arrayPhp.js"}],"components/langs/php/purePHP/components/arrayPhp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayPhp = arrayPhp;

var _mainTemp = require("../../../../mainTemp");

var _models = require("../../../../models");

var _php = require("../../php");

var _classesPhp = require("./classesPhp");

var appTemp = document.querySelector('#app');

function arrayPhp() {
  var array = "<div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-sm\">\n                                <a href=\"https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array\" target=\"_blank\">\n                                    <h3 class=\"title\">\u041A\u043B\u0430\u0441\u0441\u044B</h3>\n                                </a>\n                            </div>\n                        </div>\n                    </div>";
  appTemp.insertAdjacentHTML('beforeend', array);
  var compBtn = document.querySelectorAll('.btn');
  compBtn.forEach(function (comp) {
    comp.addEventListener('click', function () {
      console.log(comp);
      var arr = [{
        name: 'Типы данных',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('PHP', 'PurePHP'));
          arrayPhp();
        }

      }, {
        name: 'Операторы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('PHP', 'PurePHP'));
          (0, _classesPhp.classesPhp)();
        }

      }, {
        name: 'Циклы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('PHP', 'PurePHP'));
          arrayPhp();
        }

      }, {
        name: 'Функции',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('PHP', 'PurePHP'));
          (0, _classesPhp.classesPhp)();
        }

      }, {
        name: 'Массивы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('PHP', 'PurePHP'));
          arrayPhp();
        }

      }, {
        name: 'Обьекты',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('PHP', 'PurePHP'));
          (0, _classesPhp.classesPhp)();
        }

      }, {
        name: 'Классы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('PHP', 'PurePHP'));
          arrayPhp();
        }

      }, {
        name: 'Back',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.frameWorks)('PHP').frameWorks.value);
          (0, _php.php)();
        }

      }];
      arr.forEach(function (item) {
        if (item.name === comp.innerHTML) {
          appTemp.innerHTML = '';
          item.value;
        }
      });
    });
  });
}
},{"../../../../mainTemp":"components/mainTemp.js","../../../../models":"components/models.js","../../php":"components/langs/php/php.js","./classesPhp":"components/langs/php/purePHP/components/classesPhp.js"}],"components/langs/php/purePHP/purePHP.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.purePhp = purePhp;

var _mainTemp = require("../../../mainTemp");

var _models = require("../../../models");

var _php = require("../php");

var _arrayPhp = require("./components/arrayPhp");

var _classesPhp = require("./components/classesPhp");

var appTemp = document.querySelector('#app');

function purePhp() {
  var purePhp = "<div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-sm\">\n                                <h3>Pure Php</h3>\n                                <p>\u041F\u0438\u0448\u0438 \u0447\u0442\u043E \u0445\u043E\u0447\u0435\u0448\u044C)</p>\n                            </div>\n                        </div>\n                    </div>";
  appTemp.insertAdjacentHTML('beforeend', purePhp);
  var compBtn = document.querySelectorAll('.btn');
  compBtn.forEach(function (comp) {
    comp.addEventListener('click', function () {
      console.log(comp);
      var arr = [{
        name: 'Типы данных',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('PHP', 'PurePHP'));
          (0, _arrayPhp.arrayPhp)();
        }

      }, {
        name: 'Операторы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('PHP', 'PurePHP'));
          (0, _classesPhp.classesPhp)();
        }

      }, {
        name: 'Циклы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('PHP', 'PurePHP'));
          (0, _arrayPhp.arrayPhp)();
        }

      }, {
        name: 'Функции',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('PHP', 'PurePHP'));
          (0, _classesPhp.classesPhp)();
        }

      }, {
        name: 'Массивы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('PHP', 'PurePHP'));
          (0, _arrayPhp.arrayPhp)();
        }

      }, {
        name: 'Обьекты',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('PHP', 'PurePHP'));
          (0, _classesPhp.classesPhp)();
        }

      }, {
        name: 'Классы',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('PHP', 'PurePHP'));
          (0, _arrayPhp.arrayPhp)();
        }

      }, {
        name: 'Back',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.frameWorks)('PHP').frameWorks.value);
          (0, _php.php)();
        }

      }];
      arr.forEach(function (item) {
        return item.name === comp.innerHTML ? (appTemp.innerHTML = '', item.value) : false;
      });
    });
  });
}
},{"../../../mainTemp":"components/mainTemp.js","../../../models":"components/models.js","../php":"components/langs/php/php.js","./components/arrayPhp":"components/langs/php/purePHP/components/arrayPhp.js","./components/classesPhp":"components/langs/php/purePHP/components/classesPhp.js"}],"components/langs/php/php.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.php = php;

var _mainTemp = require("../../mainTemp");

var _models = require("../../models");

var _purePHP = require("./purePHP/purePHP");

var appTemp = document.querySelector('#app');

function php() {
  var pureJs = "<div class=\"content\">\n                            <div class=\"row\">\n                                <div class=\"col-sm\">\n                                    <h1>PHP</h1>\n                                </div>\n                            </div>\n                    </div>";
  appTemp.insertAdjacentHTML('beforeend', pureJs);
  var compBtn = document.querySelectorAll('.btn');
  compBtn.forEach(function (comp) {
    comp.addEventListener('click', function () {
      console.log(comp);
      var arr = [{
        name: 'PurePHP',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('PHP', comp.innerHTML));
          (0, _purePHP.purePhp)();
        }

      }, {
        name: 'Laravel',

        get value() {
          (0, _mainTemp.mainBtn)((0, _models.componentsOfLang)('PHP', comp.innerHTML));
          (0, _purePHP.purePhp)();
        }

      }, {
        name: 'Back',

        get value() {
          (0, _mainTemp.mainBtn)(_models.mainLanguagesBtn);
          (0, _mainTemp.firstPageTemplate)();
        }

      }];
      arr.forEach(function (item) {
        return item.name === comp.innerHTML ? (appTemp.innerHTML = '', item.value) : false;
      });
    });
  });
}
},{"../../mainTemp":"components/mainTemp.js","../../models":"components/models.js","./purePHP/purePHP":"components/langs/php/purePHP/purePHP.js"}],"components/langs/html/html.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.html = html;
var appTemp = document.querySelector('#app');

function html() {
  var html = "<div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-sm\">\n                                <h3>HTML</h3>\n                                <p>\u041F\u0438\u0448\u0438 \u0447\u0442\u043E \u0445\u043E\u0447\u0435\u0448\u044C)</p>\n                            </div>\n                        </div>\n                    </div>";
  appTemp.insertAdjacentHTML('beforeend', html);
}
},{}],"components/langs/css/css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.css = css;
var appTemp = document.querySelector('#app');

function css() {
  var css = "<div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-sm\">\n                                <h3>CSS</h3>\n                                <p>\u041F\u0438\u0448\u0438 \u0447\u0442\u043E \u0445\u043E\u0447\u0435\u0448\u044C)</p>\n                            </div>\n                        </div>\n                    </div>";
  appTemp.insertAdjacentHTML('beforeend', css);
}
},{}],"components/langs/python/phyton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.python = python;
var appTemp = document.querySelector('#app');

function python() {
  var python = "<div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-sm\">\n                                <h3>Python</h3>\n                                <p>\u041F\u0438\u0448\u0438 \u0447\u0442\u043E \u0445\u043E\u0447\u0435\u0448\u044C)</p>\n                            </div>\n                        </div>\n                    </div>";
  appTemp.insertAdjacentHTML('beforeend', python);
}
},{}],"components/langs/java/java.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.java = java;
var appTemp = document.querySelector('#app');

function java() {
  var java = "<div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-sm\">\n                                <h3>Java</h3>\n                                <p>\u041F\u0438\u0448\u0438 \u0447\u0442\u043E \u0445\u043E\u0447\u0435\u0448\u044C)</p>\n                            </div>\n                        </div>\n                    </div>";
  appTemp.insertAdjacentHTML('beforeend', java);
}
},{}],"components/langs/webpack/webpack.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.webpack = webpack;

var _mainTemp = require("../../mainTemp");

var _models = require("../../models");

var appTemp = document.querySelector('#app');

function webpack() {
  var webpackTemp = "<div class=\"content\">\n                            <div class=\"row\">\n                                <div class=\"col-sm\">\n                                    <a href=\"https://webpack.js.org/guides/getting-started/\" target=\"_blank\">\n                                        <h3 class=\"title\">Webpack</h3>\n                                    </a>\n                                    <p><strong>webpack</strong> // \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0441\u0431\u043E\u0440\u043A\u0443</p>\n                                    <p><strong>npm run start</strong> // \u0437\u0430\u043F\u0443\u0441\u043A \u0441\u0431\u043E\u0440\u043A\u0438</p>\n                                    <p><strong>npm run build</strong> // \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442 \u043D\u0430 \u0432\u044B\u0433\u0440\u0443\u0437\u043A\u0430 (\u0414\u0435\u043F\u043B\u043E\u0439 (deploy))</p>\n                                     <p>In <strong>package.json:</strong></p>\n                                    <p>\"scripts\": { </p>\n                                    <p>\"test\": \"echo \\\"Error: no test specified\\\" && exit 1\",</p>\n                                    <p>\"start\": \"cross-env NODE_ENV=development webpack serve --open\",</p>\n                                    <p>\"build\": \"cross-env NODE_ENV=production webpack --mode production\"</p>\n                                    <p>},</p>\n                                    <p><strong>\"browserslist\": \"> 0.25%, not dead\"</strong> // \u0432\u044B\u043D\u043E\u0441\u0438\u043C \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E \u0434\u043B\u044F babel</p>\n                                    <p>\u0420\u0435\u0436\u0438\u043C\u044B \u0441\u0431\u043E\u0440\u043A\u0438</p>\n                                    <p><strong>npm i -D cross-env</strong></p>\n                                    <p></p>\n                                    \n                                    <p></p>\n                                </div>\n                                \n                                <div class=\"col-sm\">\n                                    <div class=\"img\">\n                                        <img src=\"./images/webpack/img_1.png\" alt=\"isProd-json\">\n                                    </div>\n                                </div>    \n                                <div class=\"col-sm\">    \n                                    <div class=\"img\">\n                                        <img src=\"./images/webpack/img_2.png\" alt=\"isProd-json\">\n                                    </div>\n                                    \n                                </div>\n                                \n                            </div>\n                    </div>";
  appTemp.insertAdjacentHTML('beforeend', webpackTemp);
  var compBtn = document.querySelectorAll('.btn');
  compBtn.forEach(function (comp) {
    comp.addEventListener('click', function () {
      console.log(comp);
      var arr = [{
        name: 'Back',

        get value() {
          (0, _mainTemp.mainBtn)(_models.mainLanguagesBtn);
          (0, _mainTemp.firstPageTemplate)();
        }

      }];
      arr.forEach(function (item) {
        return item.name === comp.innerHTML ? (appTemp.innerHTML = '', item.value) : false;
      });
    });
  });
}
},{"../../mainTemp":"components/mainTemp.js","../../models":"components/models.js"}],"components/mainTemp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mainBtn = mainBtn;
exports.firstPageTemplate = firstPageTemplate;

var _models = require("./models");

var _javascript = require("./langs/javascript/javascript");

var _php = require("./langs/php/php");

var _html = require("./langs/html/html");

var _css = require("./langs/css/css");

var _phyton = require("./langs/python/phyton");

var _java = require("./langs/java/java");

var _webpack = require("./langs/webpack/webpack");

var appTemp = document.querySelector('#app');

function mainBtn(selector) {
  console.log(selector);
  var machineLangs = selector.map(function (btn) {
    console.log(btn);
    return " <button class=\"btn btn-primary\">".concat(btn, "</button>");
  }).join(' ');
  var buttonTemplate = "<div class=\"row\">\n                                <div class=\"btnBlock\">\n                                    ".concat(machineLangs, "\n                                </div>\n                            </div>");
  appTemp.insertAdjacentHTML('beforeend', buttonTemplate); // инициализация кнопок отрисованных на экран

  var langsBtn = document.querySelectorAll('.btn');
  langsBtn.forEach(function (langBtn) {
    langBtn.addEventListener('click', function () {
      var arr = [{
        name: 'Html',

        get value() {
          mainBtn((0, _models.frameWorks)(langBtn.innerHTML).frameWorks.value);
          (0, _html.html)();
        }

      }, {
        name: 'CSS',

        get value() {
          mainBtn((0, _models.frameWorks)(langBtn.innerHTML).frameWorks.value);
          (0, _css.css)();
        }

      }, {
        name: 'JavaScript',

        get value() {
          mainBtn((0, _models.frameWorks)(langBtn.innerHTML).frameWorks.value);
          (0, _javascript.javaScript)();
        }

      }, {
        name: 'PHP',

        get value() {
          mainBtn((0, _models.frameWorks)(langBtn.innerHTML).frameWorks.value);
          (0, _php.php)();
        }

      }, {
        name: 'Python',

        get value() {
          mainBtn((0, _models.frameWorks)(langBtn.innerHTML).frameWorks.value);
          (0, _phyton.python)();
        }

      }, {
        name: 'Java',

        get value() {
          mainBtn((0, _models.frameWorks)(langBtn.innerHTML).frameWorks.value);
          (0, _java.java)();
        }

      }, {
        name: 'Webpack',

        get value() {
          mainBtn((0, _models.frameWorks)(langBtn.innerHTML).frameWorks.value);
          (0, _webpack.webpack)();
        }

      }, {
        name: 'Back',

        get value() {
          mainBtn(_models.mainLanguagesBtn);
          firstPageTemplate();
        }

      }];
      arr.forEach(function (item) {
        return item.name === langBtn.innerHTML ? (appTemp.innerHTML = '', item.value) : false;
      });
    });
  });
}

function firstPageTemplate() {
  var firstPageTemplate = "<div class=\"content\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm\">\n                                            <a href=\"https://parceljs.org/getting_started.html\" target=\"_blank\">\n                                                <h3 class=\"title\">Parcel</h3>\n                                            </a>\n                                            <pre>\n                                                <code>\n                                                    <span>npm init</span>\n                                                    <span> </span>\n                                                    <span><strong>npm install parcel-bundler --save-dev</strong></span>\n                                                    <span> </span>\n                                                    <span>'scripts :{ </span>\n                                                    <span>  \"serve\": \"parcel src/index.html -p 8100 --open\",</span>\n                                                    <span>  \"build\": \"build src/index.html --no-source-map\"</span>\n                                                    <span>},</span>\n                                                </code>\n                                            </pre>\n                                        </div>\n                                    </div> \n                                    <div class=\"row\">\n                                        <div class=\"col-sm\">\n                                            <a href=\"https://webpack.js.org/guides/getting-started/\" target=\"_blank\">\n                                                <h3 class=\"title\">Webpack</h3>\n                                            </a>\n                                             <pre>\n                                                <code>\n                                                    <span>npm init</span>\n                                                    <span> </span>\n                                                    <span><strong>npm install webpack webpack-cli --save-dev</strong></span>\n                                                    <span> </span>\n                                                    <span><strong>npm i -g webpack webpack-cli</strong></span>\n                                                    <span> </span>\n                                                    <span>\u0421\u043E\u0437\u0434\u0430\u0435\u043C \u0432 \u043A\u043E\u0440\u043D\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 <strong>webpack.config.js</strong></span>\n                                                    <span> </span>\n                                                    <span>const <strong>isProd = process.env.NODE_ENV = 'production'</strong></span>\n                                                    <span>const <strong>isDev = !isProd</strong></span>\n                                                    <span> </span>\n                                                    <span>const <strong>filename = (ext) => isDev ? bundle.ext : bundle.[hash].ext</strong></span>\n                                                    <span> </span>\n                                                    <span><strong>module.exports</strong> = { </span>\n                                                    <span>          context: path.resolve(__dirname,'src'),</span>\n                                                    <span>          mode: \"development\",</span>\n                                                    <span>          entry: './index.js',</span>\n                                                    <span>          output: {</span>\n                                                    <span>              filename: filename('js')</span>\n                                                    <span>              path: path.resolve(__dirname,'dist')</span>\n                                                    <span>          },</span>\n                                                    <span><strong><a href=\"https://webpack.js.org/configuration/devtool/\">devtool:</a></strong> isProd ? 'source-map' : false,</span>\n                                                    <span><strong>resolve:</strong> {</span>\n                                                    <span>          extensions: ['.js'],</span>\n                                                    <span>          alias: {</span>\n                                                    <span>              '@': path.resolve(__dirname,'src'),</span>\n                                                    <span>              '@core': path.resolve(__dirname,'src/core'),</span>\n                                                    <span>          }</span>\n                                                    <span>        },</span>\n                                                    <span><strong>plugins:</strong> [</span>\n                                                </code>\n                                             </pre>\n                                                    \n                                        </div>\n                                        <div class=\"col-sm\">\n                                            <div class=\"img\">\n                                                <img src=\"./images/webpack/img.png\" alt=\"isProd-config\">\n                                            </div>\n                                            <div class=\"img\">\n                                                <img src=\"./images/webpack/img_3.png\" alt=\"isProd-config\">\n                                            </div>\n<!--                                        </div>-->\n<!--                                        <div class=\"col-sm\">-->\n                                            <div class=\"img\">\n                                                <img src=\"./images/webpack/img_4.png\" alt=\"isProd-config\">\n                                            </div>\n                                        </div>\n<!--                                        <div class=\"col-sm\">-->\n<!--                                            <div class=\"img\">-->\n<!--                                                <img src=\"./images/webpack/img_4.png\" alt=\"isProd-config\">-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n                                        \n                                    </div>\n                                    <div class='row'>\n                                        <div class=\"col-sm\">\n                                            <a href=\"https://webpack.js.org/plugins/\" target=\"_blank\">\n                                                <h5 class=\"title\">Webpack Plugins</h4>\n                                            </a>\n                                             <a href=\"https://webpack.js.org/plugins/html-webpack-plugin/\" target='_blank'>\n                                                Html-Webpack-plugin\n                                             </a>\n                                             <pre>\n                                                 <code>\n                                                    <span><strong>npm install --save-dev html-webpack-plugin</strong></span>\n                                                    <span> </span>\n                                                    <span>const path = require('path');</span>\n                                                    <span>const HtmlWebpackPlugin = require('html-webpack-plugin');</span>\n                                                    <span> </span>\n                                                    <span>Plugins: [</span>\n                                                    <span>  new HTMLWebpackPlugin({</span>\n                                                    <span>      template: 'index.html',</span>\n                                                    <span>      minify: {</span>\n                                                    <span>          removeComments: isProd, // \u0443\u0434\u0430\u043B\u044F\u0435\u043C \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438</span>\n                                                    <span>          collapseWhitespace: isProd // \u0443\u0434\u0430\u043B\u044F\u0435\u043C \u043F\u0440\u043E\u0431\u0435\u043B\u044B</span>\n                                                    <span>      },</span>\n                                                    <span>   }),</span>\n                                                    <span>]</span>\n                                                 </code>\n                                             </pre>\n                                        </div>\n                                        <div class=\"col-sm\">\n                                            <a href=\"https://webpack.js.org/plugins/copy-webpack-plugin/\" target='_blank'>\n                                                Copy-Webpack-plugin\n                                            </a>\n                                            <pre>\n                                                <code>\n                                                    <span><strong>npm install copy-webpack-plugin --save-dev</strong></span>\n                                                    <span> </span>\n                                                    <span>const CopyPlugin = require(\"copy-webpack-plugin\");</span>\n                                                    <span> </span>\n                                                    <span>plugins: [</span>\n                                                    <span>  new CopyPlugin({</span>\n                                                    <span>      patterns: [{</span>\n                                                    <span>          from: path.resolve(__dirname,'src/favicon.ico'),</span>\n                                                    <span>          to: path.resolve(__dirname,'dist')</span>\n                                                    <span>      }]</span>\n                                                    <span>  })</span>\n                                                    <span>]</span>\n                                                </code>\n                                            </pre>        \n                                        </div>\n                                        <div class=\"col-sm\">\n                                            <a href=\"https://www.npmjs.com/package/clean-webpack-plugin\" target='_blank'>\n                                                Clean-Webpack-plugin\n                                            </a>\n                                            <pre>\n                                                <code>\n                                                    <p><strong>npm install --save-dev clean-webpack-plugin</strong></p>\n                                                    <span> </span>\n                                                    <span>const { CleanWebpackPlugin } = require('clean-webpack-plugin');</span>\n                                                    <span> </span>\n                                                    <span>plugins: [</span>\n                                                    <span>  new CleanWebpackPlugin(),</span>\n                                                    <span>]</span>\n                                                </code>\n                                            </pre>        \n                                        </div>\n                                       \n                                        <div class=\"col-sm\">\n                                             <a href=\"https://webpack.js.org/plugins/mini-css-extract-plugin/\" target='_blank'>\n                                                Mini-Css-Extract-plugin\n                                             </a>\n                                            <pre>\n                                                <code>\n                                                    <span><strong>npm install --save-dev mini-css-extract-plugin</strong></span>\n                                                    <span> </span>\n                                                    <span>const MiniCssExtractPlugin = require('mini-css-extract-plugin');</span>\n                                                    <span> </span>\n                                                    <span>Plugins: [</span>\n                                                    <span>  new MiniCssExtractPlugin( {</span>\n                                                    <span>      filename: filename('css')</span>\n                                                    <span>  }]</span>\n                                                    <span>]</span>\n                                                    <span>module: {</span>\n                                                    <span>  rules: [{</span>\n                                                    <span>      test: /\\.css$/i,</span>\n                                                    <span>      use: [MiniCssExtractPlugin.loader,</span>\n                                                    <span>      'css-loader'],}</span>\n                                                    <span>},],</span>\n                                                </code>\n                                            </pre>\n                                            <span></span>\n                                        </div> \n                                    </div>    \n                                    <div class='row'>\n                                        <div class=\"col-sm\">\n                                            <a href=\"https://webpack.js.org/loaders/\" target=\"_blank\">\n                                                <h5 class=\"title\">Webpack Loaders</h4>\n                                            </a>\n                                            <a href=\"https://webpack.js.org/loaders/sass-loader/\" target='_blank'>\n                                                sass-loader\n                                            </a>\n                                            <pre>\n                                                <code>\n                                                    <span><strong>npm install sass-loader --save-dev</strong></span> \n                                                    <span> </span>\n                                                    <span>module: {</span>\n                                                    <span> rules: [{</span>\n                                                    <span>     test: /\\.s[ac]ss$/i,</span>\n                                                    <span>     use: [</span>\n                                                    <span>  MiniCssExtractPlugin.loader,</span>\n                                                    <span>     'css-loader',</span>\n                                                    <span>     'sass-loader',</span>\n                                                    <span>  ]</span>\n                                                    <span>},],</span>\n                                                    <span>}</span>\n                                                </code> \n                                            </pre>\n                                        </div>\n                                        <div class=\"col-sm\">\n                                            <a href=\"https://webpack.js.org/loaders/css-loader/\" target='_blank'>\n                                                css-loader & node-sass\n                                            </a>\n                                            <pre>\n                                                <code>\n                                                    <span><strong>npm install --save-dev css-loader</strong></span>\n                                                    <span> </span>\n                                                    <span><strong>npm install --save-dev node-sass</strong></span>\n                                                    <span> </span>\n                                                    <span>module: {</span>\n                                                    <span>  rules: [{</span>\n                                                    <span>      test: /\\.css$/i,</span>\n                                                    <span>      use: [</span>\n                                                    <span>          MiniCssExtractPlugin.loader,</span>\n                                                    <span>          'css-loader',</span>\n                                                    <span>      ],</span>\n                                                    <span>  },],</span>\n                                                    <span>},</span>\n                                                </code>\n                                            </pre>    \n                                        </div>   \n                                         <div class=\"col-sm\">\n                                            <a href=\"https://babeljs.io/setup#installation\" target='_blank'>\n                                                babel-loader, @babel/core, @babel/preset-env\n                                            </a>\n                                            <pre>\n                                                <code>\n                                                    <span><strong>npm install --save-dev babel-loader @babel/core</strong></span>\n                                                    <span> </span>\n                                                    <span><strong>npm install @babel/preset-env --save-dev</strong></span>\n                                                    <span> </span>\n                                                    <span>module: {</span>\n                                                    <span>  rules: [{</span>\n                                                    <span>      test: /\\.m?js$/,</span>\n                                                    <span>      exclude: /node_modules/,</span>\n                                                    <span>      use: {</span>\n                                                    <span>          loader: \"babel-loader\",</span>\n                                                    <span>          options: {</span>\n                                                    <span>              presets: ['@babel/preset-env']</span>\n                                                    <span>          }</span>\n                                                    <span>      }</span>\n                                                    <span>  }],</span>\n                                                    <span>}</span>\n                                                </code>\n                                            </pre>        \n                                        </div>\n                                    </div>\n                                    <div class='row'>\n                                        <div class=\"col-sm\">\n                                            <a href=\"https://webpack.js.org/configuration/dev-server/#root\" target=\"_blank\">\n                                                <h5 class=\"title\">DevServer</h4>\n                                            </a>\n                                            <pre>\n                                                <code>\n                                                    <span><strong>npm install webpack-dev-server --save-dev</strong></span> \n                                                    <span> </span>\n                                                    <span>module: {</span>\n                                                    <span> rules: [{</span>\n                                                    <span>     test: /\\.s[ac]ss$/i,</span>\n                                                    <span>     use: [</span>\n                                                    <span>  MiniCssExtractPlugin.loader,</span>\n                                                    <span>     'css-loader',</span>\n                                                    <span>     'sass-loader',</span>\n                                                    <span>  ]</span>\n                                                    <span>},],</span>\n                                                    <span>}</span>\n                                                </code> \n                                            </pre>\n                                        </div>\n                                    </div>\n                                        \n                                     <div class=\"row\">\n                                         <div class=\"col-sm\">\n                                            <a href=\"https://nodejs.org/uk/\" target=\"_blank\">\n                                                <h3 class=\"title\">Node.JS</h3>\n                                            </a>\n                                         </div>\n                                    </div>\n                                </div>";
  appTemp.insertAdjacentHTML('beforeend', firstPageTemplate);
}
},{"./models":"components/models.js","./langs/javascript/javascript":"components/langs/javascript/javascript.js","./langs/php/php":"components/langs/php/php.js","./langs/html/html":"components/langs/html/html.js","./langs/css/css":"components/langs/css/css.js","./langs/python/phyton":"components/langs/python/phyton.js","./langs/java/java":"components/langs/java/java.js","./langs/webpack/webpack":"components/langs/webpack/webpack.js"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/bootstrap.min.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/main.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app.js":[function(require,module,exports) {
"use strict";

var _mainTemp = require("./components/mainTemp");

var _models = require("./components/models");

require("./styles/bootstrap.min.css");

require("./styles/main.css");

console.log('Hi');
(0, _mainTemp.mainBtn)(_models.mainLanguagesBtn);
(0, _mainTemp.firstPageTemplate)();
},{"./components/mainTemp":"components/mainTemp.js","./components/models":"components/models.js","./styles/bootstrap.min.css":"styles/bootstrap.min.css","./styles/main.css":"styles/main.css"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57594" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map