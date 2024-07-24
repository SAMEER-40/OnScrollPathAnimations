// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5tsPC":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "f8440543a5248542";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"30wP2":[function(require,module,exports) {
// Importing utility function for preloading images
var _utils3Js = require("./utils3.js");
// Importing StackMotionEffect classes from different effect files with renamed imports to avoid name conflicts
var _stackMotionEffect = require("./effect-1/stackMotionEffect");
var _stackMotionEffect1 = require("./effect-2/stackMotionEffect");
var _stackMotionEffect2 = require("./effect-3/stackMotionEffect");
// Registers ScrollTrigger plugin with GSAP for scroll-based animations.
gsap.registerPlugin(ScrollTrigger);
// Initialize function to set up motion effects and animations
const init = ()=>{
    // Apply the first stack motion effect to all elements with a specific data attribute
    document.querySelectorAll("[data-stack-1]").forEach((stackEl)=>{
        new (0, _stackMotionEffect.StackMotionEffect)(stackEl);
    });
    // Apply the second stack motion effect to all elements with a different specific data attribute
    document.querySelectorAll("[data-stack-2]").forEach((stackEl)=>{
        new (0, _stackMotionEffect1.StackMotionEffect)(stackEl);
    });
    // Apply the third stack motion effect to all elements with yet another specific data attribute
    document.querySelectorAll("[data-stack-3]").forEach((stackEl)=>{
        new (0, _stackMotionEffect2.StackMotionEffect)(stackEl);
    });
    // Select all grid intro card elements and apply animations on scroll
    const introCards = document.querySelectorAll(".intro44 .card4");
    introCards.forEach((introCard)=>{
        gsap.to(introCard, {
            ease: "power1.in",
            startAt: {
                transformOrigin: "100% 50%",
                filter: "brightness(70%)"
            },
            rotationX: ()=>-60,
            yPercent: ()=>gsap.utils.random(-100, 0),
            z: ()=>gsap.utils.random(-100, 0),
            filter: "brightness(0%)",
            scrollTrigger: {
                trigger: introCard,
                start: "clamp(top bottom)",
                end: "clamp(bottom top)",
                scrub: true
            }
        });
    });
};
// Preloading images and initializing setup when complete
(0, _utils3Js.preloadImages)(".card4__img").then(()=>{
    document.body.classList.remove("loading");
    init();
});

},{"./utils3.js":"jemy2","./effect-1/stackMotionEffect":"8uE8k","./effect-2/stackMotionEffect":"cZnxF","./effect-3/stackMotionEffect":"ksi6U"}],"jemy2":[function(require,module,exports) {
/**
 * Preloads images specified by the CSS selector.
 * @function
 * @param {string} [selector='img'] - CSS selector for target images.
 * @returns {Promise} - Resolves when all specified images are loaded.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "preloadImages", ()=>preloadImages);
parcelHelpers.export(exports, "throttle", ()=>throttle);
const preloadImages = (selector = "img")=>{
    return new Promise((resolve)=>{
        // The imagesLoaded library is used to ensure all images (including backgrounds) are fully loaded.
        imagesLoaded(document.querySelectorAll(selector), {
            background: true
        }, resolve);
    });
};
const throttle = (func, limit)=>{
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(()=>inThrottle = false, limit);
        }
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8uE8k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StackMotionEffect", ()=>StackMotionEffect);
var _utils3 = require("../utils3");
// Keeps track of the window's size for responsive adjustments.
let winsize = {
    width: window.innerWidth,
    height: window.innerHeight
};
class StackMotionEffect {
    constructor(stackEl){
        // Validates the input element to ensure it's an HTML element.
        if (!stackEl || !(stackEl instanceof HTMLElement)) throw new Error("Invalid element provided.");
        this.wrapElement = stackEl;
        this.contentElement = this.wrapElement.querySelector(".content44");
        this.imageElements = [
            this.contentElement.querySelectorAll(".card4")
        ];
        this.imagesTotal = this.imageElements.length;
        // Calls the method to set up the initial effect.
        this.initializeEffect(stackEl);
    }
    // Sets up the initial effect on the provided element.
    initializeEffect(element) {
        // Scroll effect.
        this.scroll();
        // Throttles resize event to optimize performance and re-calculate sizes and effect on resize.
        const throttledResize = (0, _utils3.throttle)(()=>{
            winsize = {
                width: window.innerWidth,
                height: window.innerHeight
            };
            this.scroll();
        }, 100);
        window.addEventListener("resize", throttledResize);
    }
    // Defines the scroll effect logic for the stack.
    scroll() {
        // Initially hides the content element and prepares it for the animation by setting its transform property. 
        // This sets the initial 3D rotation of the stack and its cards, defining their starting visual appearance.
        this.contentElement.style.transform = "rotate3d(1, 0, 0, -25deg) rotate3d(0, 1, 0, 50deg) rotate3d(0, 0, 1, 25deg)";
        this.contentElement.style.opacity = 0;
        // Clears previous timeline if exists to prevent conflicts.
        if (this.tl) this.tl.kill();
        // Creates a new timeline for the scroll-triggered animation.
        this.tl = gsap.timeline({
            defaults: {
                ease: "power1"
            },
            scrollTrigger: {
                trigger: this.wrapElement,
                start: "top center",
                end: "+=150%",
                scrub: true,
                // Sets opacity to 1 when the element comes into view.
                onEnter: ()=>gsap.set(this.contentElement, {
                        opacity: 1
                    }),
                onEnterBack: ()=>gsap.set(this.contentElement, {
                        opacity: 1
                    }),
                // Hides the element when it leaves the view.
                onLeave: ()=>gsap.set(this.contentElement, {
                        opacity: 0
                    }),
                onLeaveBack: ()=>gsap.set(this.contentElement, {
                        opacity: 0
                    })
            }
        }).fromTo(this.imageElements, {
            // Animates from a starting z position based on the window size.
            z: (pos)=>-2.65 * winsize.width - pos * 0.03 * winsize.width
        }, {
            // Animates to an ending z position, creating a 3D effect as elements scroll.
            z: (pos)=>1.4 * winsize.width + (this.imagesTotal - pos - 1) * 0.03 * winsize.width
        }, 0).fromTo(this.imageElements, {
            rotationZ: -220
        }, {
            rotationY: -30,
            rotationZ: 120,
            // Stagger effect for individual elements to animate sequentially.
            stagger: 0.005
        }, 0);
    /*.fromTo(this.imageElements, {
      filter: 'brightness(20%)',
    }, {
      filter: 'brightness(150%)',
      stagger: 0.005,
    }, 0);*/ }
}

},{"../utils3":"jemy2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cZnxF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StackMotionEffect", ()=>StackMotionEffect);
var _utils3 = require("../utils3");
let winsize = {
    width: window.innerWidth,
    height: window.innerHeight
};
class StackMotionEffect {
    constructor(stackEl){
        // Check if the provided element is valid.
        if (!stackEl || !(stackEl instanceof HTMLElement)) throw new Error("Invalid element provided.");
        this.wrapElement = stackEl;
        this.contentElement = this.wrapElement.querySelector(".content44");
        this.imageElements = [
            this.contentElement.querySelectorAll(".card4")
        ];
        this.imagesTotal = this.imageElements.length;
        // Set up the effect for the provided element.
        this.initializeEffect(stackEl);
    }
    // Sets up the initial effect on the provided element.
    initializeEffect(element) {
        // Scroll effect.
        this.scroll();
        const throttledResize = (0, _utils3.throttle)(()=>{
            winsize = {
                width: window.innerWidth,
                height: window.innerHeight
            };
            this.scroll();
        }, 100);
        window.addEventListener("resize", throttledResize);
    }
    scroll() {
        // Let's set the initial rotation for the content element
        this.contentElement.style.transform = "rotate3d(1, 0, 0, 55deg) rotate3d(0, 1, 0, 30deg)";
        this.contentElement.style.opacity = 0;
        if (this.tl) this.tl.kill();
        this.tl = gsap.timeline({
            defaults: {
                ease: "sine.inOut"
            },
            scrollTrigger: {
                trigger: this.wrapElement,
                start: "top center",
                end: "+=150%",
                scrub: true,
                onEnter: ()=>gsap.set(this.contentElement, {
                        opacity: 1
                    }),
                onEnterBack: ()=>gsap.set(this.contentElement, {
                        opacity: 1
                    }),
                onLeave: ()=>gsap.set(this.contentElement, {
                        opacity: 0
                    }),
                onLeaveBack: ()=>gsap.set(this.contentElement, {
                        opacity: 0
                    })
            }
        }).fromTo(this.imageElements, {
            z: (pos)=>-1.2 * winsize.height - pos * 0.08 * winsize.height
        }, {
            z: (pos)=>3 * winsize.height + (this.imagesTotal - pos - 1) * 0.08 * winsize.height
        }, 0).fromTo(this.imageElements, {
            rotationZ: -130
        }, {
            rotationZ: 360,
            stagger: 0.006
        }, 0);
    /*.fromTo(this.imageElements, {
      filter: 'brightness(10%)',
    }, {
      filter: 'brightness(400%)',
      stagger: 0.005,
    }, 0);*/ }
}

},{"../utils3":"jemy2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ksi6U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StackMotionEffect", ()=>StackMotionEffect);
var _utils3 = require("../utils3");
let winsize = {
    width: window.innerWidth,
    height: window.innerHeight
};
class StackMotionEffect {
    constructor(stackEl){
        // Check if the provided element is valid.
        if (!stackEl || !(stackEl instanceof HTMLElement)) throw new Error("Invalid element provided.");
        this.wrapElement = stackEl;
        this.contentElement = this.wrapElement.querySelector(".content44");
        this.imageElements = [
            this.contentElement.querySelectorAll(".card4")
        ];
        this.imagesTotal = this.imageElements.length;
        // Set up the effect for the provided element.
        this.initializeEffect(stackEl);
    }
    // Sets up the initial effect on the provided element.
    initializeEffect(element) {
        // Scroll effect.
        this.scroll();
        const throttledResize = (0, _utils3.throttle)(()=>{
            winsize = {
                width: window.innerWidth,
                height: window.innerHeight
            };
            this.scroll();
        }, 100);
        window.addEventListener("resize", throttledResize);
    }
    scroll() {
        // Let's set the initial rotation for the content element
        this.contentElement.style.transform = "rotate3d(1, 0, 0, 25deg) rotate3d(0, 1, 0, -50deg) rotate3d(0, 0, 1, 25deg)";
        this.contentElement.style.opacity = 0;
        if (this.tl) this.tl.kill();
        this.tl = gsap.timeline({
            defaults: {
                ease: "power1"
            },
            scrollTrigger: {
                trigger: this.wrapElement,
                start: "top center",
                end: "+=150%",
                scrub: true,
                onEnter: ()=>gsap.set(this.contentElement, {
                        opacity: 1
                    }),
                onEnterBack: ()=>gsap.set(this.contentElement, {
                        opacity: 1
                    }),
                onLeave: ()=>gsap.set(this.contentElement, {
                        opacity: 0
                    }),
                onLeaveBack: ()=>gsap.set(this.contentElement, {
                        opacity: 0
                    })
            }
        }).fromTo(this.imageElements, {
            z: (pos)=>-2.5 * winsize.width / 2 - pos * 0.07 * winsize.width
        }, {
            z: (pos)=>2.5 * winsize.width + (this.imagesTotal - pos - 1) * 0.07 * winsize.width
        }, 0).fromTo(this.imageElements, {
            rotationZ: 10
        }, {
            rotationX: 20,
            rotationZ: 280,
            yPercent: -100,
            stagger: 0.005
        }, 0);
    /*.fromTo(this.imageElements, {
      filter: 'brightness(20%)',
    }, {
      filter: 'brightness(350%)',
      stagger: 0.005,
    }, 0);*/ }
}

},{"../utils3":"jemy2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["5tsPC","30wP2"], "30wP2", "parcelRequire50c9")

//# sourceMappingURL=index.a5248542.js.map
