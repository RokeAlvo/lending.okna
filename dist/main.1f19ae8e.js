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
})({"../../../.nvm/versions/node/v12.11.1/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
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
},{}],"../../../.nvm/versions/node/v12.11.1/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
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
},{"./bundle-url":"../../../.nvm/versions/node/v12.11.1/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"fonts/Gilroy/stylesheet.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./Gilroy-ExtraBold.eot":[["Gilroy-ExtraBold.9ee45c33.eot","fonts/Gilroy/Gilroy-ExtraBold.eot"],"fonts/Gilroy/Gilroy-ExtraBold.eot"],"./Gilroy-ExtraBold.woff":[["Gilroy-ExtraBold.71d6996c.woff","fonts/Gilroy/Gilroy-ExtraBold.woff"],"fonts/Gilroy/Gilroy-ExtraBold.woff"],"./Gilroy-ExtraBold.ttf":[["Gilroy-ExtraBold.79b7c02c.ttf","fonts/Gilroy/Gilroy-ExtraBold.ttf"],"fonts/Gilroy/Gilroy-ExtraBold.ttf"],"./Gilroy-Heavy.eot":[["Gilroy-Heavy.34a6d2d7.eot","fonts/Gilroy/Gilroy-Heavy.eot"],"fonts/Gilroy/Gilroy-Heavy.eot"],"./Gilroy-Heavy.woff":[["Gilroy-Heavy.0281355d.woff","fonts/Gilroy/Gilroy-Heavy.woff"],"fonts/Gilroy/Gilroy-Heavy.woff"],"./Gilroy-Heavy.ttf":[["Gilroy-Heavy.907fcdfa.ttf","fonts/Gilroy/Gilroy-Heavy.ttf"],"fonts/Gilroy/Gilroy-Heavy.ttf"],"./Gilroy-LightItalic.eot":[["Gilroy-LightItalic.ccfa50cf.eot","fonts/Gilroy/Gilroy-LightItalic.eot"],"fonts/Gilroy/Gilroy-LightItalic.eot"],"./Gilroy-LightItalic.woff":[["Gilroy-LightItalic.516cb08c.woff","fonts/Gilroy/Gilroy-LightItalic.woff"],"fonts/Gilroy/Gilroy-LightItalic.woff"],"./Gilroy-LightItalic.ttf":[["Gilroy-LightItalic.28195d02.ttf","fonts/Gilroy/Gilroy-LightItalic.ttf"],"fonts/Gilroy/Gilroy-LightItalic.ttf"],"./Gilroy-ThinItalic.eot":[["Gilroy-ThinItalic.2cc989b8.eot","fonts/Gilroy/Gilroy-ThinItalic.eot"],"fonts/Gilroy/Gilroy-ThinItalic.eot"],"./Gilroy-ThinItalic.woff":[["Gilroy-ThinItalic.4feef925.woff","fonts/Gilroy/Gilroy-ThinItalic.woff"],"fonts/Gilroy/Gilroy-ThinItalic.woff"],"./Gilroy-ThinItalic.ttf":[["Gilroy-ThinItalic.d5067406.ttf","fonts/Gilroy/Gilroy-ThinItalic.ttf"],"fonts/Gilroy/Gilroy-ThinItalic.ttf"],"./Gilroy-BlackItalic.eot":[["Gilroy-BlackItalic.e8636f73.eot","fonts/Gilroy/Gilroy-BlackItalic.eot"],"fonts/Gilroy/Gilroy-BlackItalic.eot"],"./Gilroy-BlackItalic.woff":[["Gilroy-BlackItalic.fcad3ea0.woff","fonts/Gilroy/Gilroy-BlackItalic.woff"],"fonts/Gilroy/Gilroy-BlackItalic.woff"],"./Gilroy-BlackItalic.ttf":[["Gilroy-BlackItalic.5a27c726.ttf","fonts/Gilroy/Gilroy-BlackItalic.ttf"],"fonts/Gilroy/Gilroy-BlackItalic.ttf"],"./Gilroy-BoldItalic.eot":[["Gilroy-BoldItalic.910f2b04.eot","fonts/Gilroy/Gilroy-BoldItalic.eot"],"fonts/Gilroy/Gilroy-BoldItalic.eot"],"./Gilroy-BoldItalic.woff":[["Gilroy-BoldItalic.bad7e0f1.woff","fonts/Gilroy/Gilroy-BoldItalic.woff"],"fonts/Gilroy/Gilroy-BoldItalic.woff"],"./Gilroy-BoldItalic.ttf":[["Gilroy-BoldItalic.5bfffa77.ttf","fonts/Gilroy/Gilroy-BoldItalic.ttf"],"fonts/Gilroy/Gilroy-BoldItalic.ttf"],"./Gilroy-SemiBold.eot":[["Gilroy-SemiBold.b0151e4f.eot","fonts/Gilroy/Gilroy-SemiBold.eot"],"fonts/Gilroy/Gilroy-SemiBold.eot"],"./Gilroy-SemiBold.woff":[["Gilroy-SemiBold.968a5360.woff","fonts/Gilroy/Gilroy-SemiBold.woff"],"fonts/Gilroy/Gilroy-SemiBold.woff"],"./Gilroy-SemiBold.ttf":[["Gilroy-SemiBold.1f0a8e4d.ttf","fonts/Gilroy/Gilroy-SemiBold.ttf"],"fonts/Gilroy/Gilroy-SemiBold.ttf"],"./Gilroy-UltraLightItalic.eot":[["Gilroy-UltraLightItalic.0a0b9640.eot","fonts/Gilroy/Gilroy-UltraLightItalic.eot"],"fonts/Gilroy/Gilroy-UltraLightItalic.eot"],"./Gilroy-UltraLightItalic.woff":[["Gilroy-UltraLightItalic.ebf36714.woff","fonts/Gilroy/Gilroy-UltraLightItalic.woff"],"fonts/Gilroy/Gilroy-UltraLightItalic.woff"],"./Gilroy-UltraLightItalic.ttf":[["Gilroy-UltraLightItalic.a2a78da2.ttf","fonts/Gilroy/Gilroy-UltraLightItalic.ttf"],"fonts/Gilroy/Gilroy-UltraLightItalic.ttf"],"./Gilroy-SemiBoldItalic.eot":[["Gilroy-SemiBoldItalic.9b6c2fcd.eot","fonts/Gilroy/Gilroy-SemiBoldItalic.eot"],"fonts/Gilroy/Gilroy-SemiBoldItalic.eot"],"./Gilroy-SemiBoldItalic.woff":[["Gilroy-SemiBoldItalic.e43639e0.woff","fonts/Gilroy/Gilroy-SemiBoldItalic.woff"],"fonts/Gilroy/Gilroy-SemiBoldItalic.woff"],"./Gilroy-SemiBoldItalic.ttf":[["Gilroy-SemiBoldItalic.e449f20c.ttf","fonts/Gilroy/Gilroy-SemiBoldItalic.ttf"],"fonts/Gilroy/Gilroy-SemiBoldItalic.ttf"],"./Gilroy-Light.eot":[["Gilroy-Light.32f9761d.eot","fonts/Gilroy/Gilroy-Light.eot"],"fonts/Gilroy/Gilroy-Light.eot"],"./Gilroy-Light.woff":[["Gilroy-Light.7048c954.woff","fonts/Gilroy/Gilroy-Light.woff"],"fonts/Gilroy/Gilroy-Light.woff"],"./Gilroy-Light.ttf":[["Gilroy-Light.e055a608.ttf","fonts/Gilroy/Gilroy-Light.ttf"],"fonts/Gilroy/Gilroy-Light.ttf"],"./Gilroy-MediumItalic.eot":[["Gilroy-MediumItalic.9803b0ac.eot","fonts/Gilroy/Gilroy-MediumItalic.eot"],"fonts/Gilroy/Gilroy-MediumItalic.eot"],"./Gilroy-MediumItalic.woff":[["Gilroy-MediumItalic.5b7b6cd2.woff","fonts/Gilroy/Gilroy-MediumItalic.woff"],"fonts/Gilroy/Gilroy-MediumItalic.woff"],"./Gilroy-MediumItalic.ttf":[["Gilroy-MediumItalic.44efd43d.ttf","fonts/Gilroy/Gilroy-MediumItalic.ttf"],"fonts/Gilroy/Gilroy-MediumItalic.ttf"],"./Gilroy-ExtraBoldItalic.eot":[["Gilroy-ExtraBoldItalic.54151821.eot","fonts/Gilroy/Gilroy-ExtraBoldItalic.eot"],"fonts/Gilroy/Gilroy-ExtraBoldItalic.eot"],"./Gilroy-ExtraBoldItalic.woff":[["Gilroy-ExtraBoldItalic.79f13e38.woff","fonts/Gilroy/Gilroy-ExtraBoldItalic.woff"],"fonts/Gilroy/Gilroy-ExtraBoldItalic.woff"],"./Gilroy-ExtraBoldItalic.ttf":[["Gilroy-ExtraBoldItalic.4a70ce5e.ttf","fonts/Gilroy/Gilroy-ExtraBoldItalic.ttf"],"fonts/Gilroy/Gilroy-ExtraBoldItalic.ttf"],"./Gilroy-Regular.eot":[["Gilroy-Regular.ef42166e.eot","fonts/Gilroy/Gilroy-Regular.eot"],"fonts/Gilroy/Gilroy-Regular.eot"],"./Gilroy-Regular.woff":[["Gilroy-Regular.8953c1d8.woff","fonts/Gilroy/Gilroy-Regular.woff"],"fonts/Gilroy/Gilroy-Regular.woff"],"./Gilroy-Regular.ttf":[["Gilroy-Regular.28a49bc3.ttf","fonts/Gilroy/Gilroy-Regular.ttf"],"fonts/Gilroy/Gilroy-Regular.ttf"],"./Gilroy-HeavyItalic.eot":[["Gilroy-HeavyItalic.c65a38e3.eot","fonts/Gilroy/Gilroy-HeavyItalic.eot"],"fonts/Gilroy/Gilroy-HeavyItalic.eot"],"./Gilroy-HeavyItalic.woff":[["Gilroy-HeavyItalic.46d67938.woff","fonts/Gilroy/Gilroy-HeavyItalic.woff"],"fonts/Gilroy/Gilroy-HeavyItalic.woff"],"./Gilroy-HeavyItalic.ttf":[["Gilroy-HeavyItalic.acc3d791.ttf","fonts/Gilroy/Gilroy-HeavyItalic.ttf"],"fonts/Gilroy/Gilroy-HeavyItalic.ttf"],"./Gilroy-Medium.eot":[["Gilroy-Medium.320c651f.eot","fonts/Gilroy/Gilroy-Medium.eot"],"fonts/Gilroy/Gilroy-Medium.eot"],"./Gilroy-Medium.woff":[["Gilroy-Medium.05946324.woff","fonts/Gilroy/Gilroy-Medium.woff"],"fonts/Gilroy/Gilroy-Medium.woff"],"./Gilroy-Medium.ttf":[["Gilroy-Medium.0d6f7f27.ttf","fonts/Gilroy/Gilroy-Medium.ttf"],"fonts/Gilroy/Gilroy-Medium.ttf"],"./Gilroy-RegularItalic.eot":[["Gilroy-RegularItalic.a3851c40.eot","fonts/Gilroy/Gilroy-RegularItalic.eot"],"fonts/Gilroy/Gilroy-RegularItalic.eot"],"./Gilroy-RegularItalic.woff":[["Gilroy-RegularItalic.0a9021fa.woff","fonts/Gilroy/Gilroy-RegularItalic.woff"],"fonts/Gilroy/Gilroy-RegularItalic.woff"],"./Gilroy-RegularItalic.ttf":[["Gilroy-RegularItalic.2fc94822.ttf","fonts/Gilroy/Gilroy-RegularItalic.ttf"],"fonts/Gilroy/Gilroy-RegularItalic.ttf"],"./Gilroy-UltraLight.eot":[["Gilroy-UltraLight.1c002462.eot","fonts/Gilroy/Gilroy-UltraLight.eot"],"fonts/Gilroy/Gilroy-UltraLight.eot"],"./Gilroy-UltraLight.woff":[["Gilroy-UltraLight.9cd557b5.woff","fonts/Gilroy/Gilroy-UltraLight.woff"],"fonts/Gilroy/Gilroy-UltraLight.woff"],"./Gilroy-UltraLight.ttf":[["Gilroy-UltraLight.c14812d8.ttf","fonts/Gilroy/Gilroy-UltraLight.ttf"],"fonts/Gilroy/Gilroy-UltraLight.ttf"],"./Gilroy-Bold.eot":[["Gilroy-Bold.f136ea68.eot","fonts/Gilroy/Gilroy-Bold.eot"],"fonts/Gilroy/Gilroy-Bold.eot"],"./Gilroy-Bold.woff":[["Gilroy-Bold.97914305.woff","fonts/Gilroy/Gilroy-Bold.woff"],"fonts/Gilroy/Gilroy-Bold.woff"],"./Gilroy-Bold.ttf":[["Gilroy-Bold.38fe43cb.ttf","fonts/Gilroy/Gilroy-Bold.ttf"],"fonts/Gilroy/Gilroy-Bold.ttf"],"./Gilroy-Thin.eot":[["Gilroy-Thin.edf6a7b3.eot","fonts/Gilroy/Gilroy-Thin.eot"],"fonts/Gilroy/Gilroy-Thin.eot"],"./Gilroy-Thin.woff":[["Gilroy-Thin.acfc00bf.woff","fonts/Gilroy/Gilroy-Thin.woff"],"fonts/Gilroy/Gilroy-Thin.woff"],"./Gilroy-Thin.ttf":[["Gilroy-Thin.4f17bbab.ttf","fonts/Gilroy/Gilroy-Thin.ttf"],"fonts/Gilroy/Gilroy-Thin.ttf"],"./Gilroy-Black.eot":[["Gilroy-Black.91249c0b.eot","fonts/Gilroy/Gilroy-Black.eot"],"fonts/Gilroy/Gilroy-Black.eot"],"./Gilroy-Black.woff":[["Gilroy-Black.6e8c0761.woff","fonts/Gilroy/Gilroy-Black.woff"],"fonts/Gilroy/Gilroy-Black.woff"],"./Gilroy-Black.ttf":[["Gilroy-Black.764d51d6.ttf","fonts/Gilroy/Gilroy-Black.ttf"],"fonts/Gilroy/Gilroy-Black.ttf"],"_css_loader":"../../../.nvm/versions/node/v12.11.1/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./fonts/Gilroy/stylesheet.css":"fonts/Gilroy/stylesheet.css","./images/loon-image-original.jpg":[["loon-image-original.543cd45b.jpg","images/loon-image-original.jpg"],"images/loon-image-original.jpg"],"./images/main-img-tablet.jpg":[["main-img-tablet.403998de.jpg","images/main-img-tablet.jpg"],"images/main-img-tablet.jpg"],"./images/loon-image-original-min.jpg":[["loon-image-original-min.870a6f9a.jpg","images/loon-image-original-min.jpg"],"images/loon-image-original-min.jpg"],"_css_loader":"../../../.nvm/versions/node/v12.11.1/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/feedback-form/feedback-form.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../.nvm/versions/node/v12.11.1/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/input-text/input-text.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../.nvm/versions/node/v12.11.1/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/input-text/input-text.js":[function(require,module,exports) {
"use strict";

require("./input-text.scss");
},{"./input-text.scss":"blocks/input-text/input-text.scss"}],"blocks/button/button.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../.nvm/versions/node/v12.11.1/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/button/button.js":[function(require,module,exports) {
"use strict";

require("./button.scss");
},{"./button.scss":"blocks/button/button.scss"}],"blocks/feedback-form/feedback-form.js":[function(require,module,exports) {
"use strict";

require("./feedback-form.scss");

require("./../input-text/input-text");

require("./../button/button");
},{"./feedback-form.scss":"blocks/feedback-form/feedback-form.scss","./../input-text/input-text":"blocks/input-text/input-text.js","./../button/button":"blocks/button/button.js"}],"main.js":[function(require,module,exports) {
"use strict";

require("./main.scss");

require("./blocks/feedback-form/feedback-form");

(function main() {
  var burger = document.querySelector('.header__burger');
  var nav = document.querySelector('.header__nav');

  if (screen.width <= 1200) {
    nav.classList.toggle('hidden');
  }

  burger.addEventListener('click', function (e) {
    nav.classList.toggle('hidden');
  });
})();
},{"./main.scss":"main.scss","./blocks/feedback-form/feedback-form":"blocks/feedback-form/feedback-form.js"}],"../../../.nvm/versions/node/v12.11.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "41631" + '/');

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
},{}]},{},["../../../.nvm/versions/node/v12.11.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map