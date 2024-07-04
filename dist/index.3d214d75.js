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
})({"km5uZ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
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

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _editorjs = require("@editorjs/editorjs");
var _editorjsDefault = parcelHelpers.interopDefault(_editorjs);
var _header = require("@editorjs/header");
var _headerDefault = parcelHelpers.interopDefault(_header);
var _list = require("@editorjs/list");
var _listDefault = parcelHelpers.interopDefault(_list);
var _embed = require("@editorjs/embed");
var _embedDefault = parcelHelpers.interopDefault(_embed);
var _code = require("@editorjs/code");
var _codeDefault = parcelHelpers.interopDefault(_code);
var _delimiter = require("@editorjs/delimiter");
var _delimiterDefault = parcelHelpers.interopDefault(_delimiter);
var _imageTool = require("./ImageTool");
var _imageToolDefault = parcelHelpers.interopDefault(_imageTool);
var _codeTool = require("./CodeTool");
var _codeToolDefault = parcelHelpers.interopDefault(_codeTool);
const editor = new (0, _editorjsDefault.default)({
    holderId: "editorjs",
    tools: {
        header: {
            class: (0, _headerDefault.default),
            inlineToolbar: [
                "link"
            ]
        },
        list: {
            class: (0, _listDefault.default),
            inlineToolbar: [
                "link",
                "bold"
            ]
        },
        embed: {
            class: (0, _embedDefault.default),
            inlineToolbar: false,
            config: {
                youtube: true
            }
        },
        code: (0, _codeToolDefault.default),
        delimiter: (0, _delimiterDefault.default),
        ImageToolool: (0, _imageToolDefault.default)
    },
    autofocus: true,
    placeholder: "Let`s write an awesome blog!",
    data: {}
});
let saveBtn = document.querySelector("button");
saveBtn.addEventListener("click", ()=>{
    editor.save().then((outputData)=>{
        console.log("Article data", outputData);
    }).catch((error)=>{
        console.log("Saving failed:", error);
    });
});

},{"@editorjs/editorjs":"3TToX","@editorjs/header":"41vG9","@editorjs/embed":"lhDVD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@editorjs/code":"7jryp","@editorjs/delimiter":"yf7K2","./ImageTool":"MjOOO","@editorjs/list":"iR9Po","./CodeTool":"7PB4b"}],"3TToX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Bi);
var global = arguments[3];
var Rt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pe(s1) {
    return s1 && s1.__esModule && Object.prototype.hasOwnProperty.call(s1, "default") ? s1.default : s1;
}
function Te() {}
Object.assign(Te, {
    default: Te,
    register: Te,
    revert: function() {},
    __esModule: !0
});
Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(s1) {
    const e = (this.document || this.ownerDocument).querySelectorAll(s1);
    let t1 = e.length;
    for(; --t1 >= 0 && e.item(t1) !== this;);
    return t1 > -1;
});
Element.prototype.closest || (Element.prototype.closest = function(s1) {
    let e = this;
    if (!document.documentElement.contains(e)) return null;
    do {
        if (e.matches(s1)) return e;
        e = e.parentElement || e.parentNode;
    }while (e !== null);
    return null;
});
Element.prototype.prepend || (Element.prototype.prepend = function(e) {
    const t1 = document.createDocumentFragment();
    Array.isArray(e) || (e = [
        e
    ]), e.forEach((o)=>{
        const i = o instanceof Node;
        t1.appendChild(i ? o : document.createTextNode(o));
    }), this.insertBefore(t1, this.firstChild);
});
Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(s1) {
    s1 = arguments.length === 0 ? !0 : !!s1;
    const e = this.parentNode, t1 = window.getComputedStyle(e, null), o = parseInt(t1.getPropertyValue("border-top-width")), i = parseInt(t1.getPropertyValue("border-left-width")), n = this.offsetTop - e.offsetTop < e.scrollTop, r = this.offsetTop - e.offsetTop + this.clientHeight - o > e.scrollTop + e.clientHeight, a = this.offsetLeft - e.offsetLeft < e.scrollLeft, l = this.offsetLeft - e.offsetLeft + this.clientWidth - i > e.scrollLeft + e.clientWidth, d = n && !r;
    (n || r) && s1 && (e.scrollTop = this.offsetTop - e.offsetTop - e.clientHeight / 2 - o + this.clientHeight / 2), (a || l) && s1 && (e.scrollLeft = this.offsetLeft - e.offsetLeft - e.clientWidth / 2 - i + this.clientWidth / 2), (n || r || a || l) && !s1 && this.scrollIntoView(d);
});
window.requestIdleCallback = window.requestIdleCallback || function(s1) {
    const e = Date.now();
    return setTimeout(function() {
        s1({
            didTimeout: !1,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - e));
            }
        });
    }, 1);
};
window.cancelIdleCallback = window.cancelIdleCallback || function(s1) {
    clearTimeout(s1);
};
let Dt = (s1 = 21)=>crypto.getRandomValues(new Uint8Array(s1)).reduce((e, t1)=>(t1 &= 63, t1 < 36 ? e += t1.toString(36) : t1 < 62 ? e += (t1 - 26).toString(36).toUpperCase() : t1 > 62 ? e += "-" : e += "_", e), "");
var at = /* @__PURE__ */ ((s1)=>(s1.VERBOSE = "VERBOSE", s1.INFO = "INFO", s1.WARN = "WARN", s1.ERROR = "ERROR", s1))(at || {});
const v = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    DELETE: 46,
    META: 91,
    SLASH: 191
}, Pt = {
    LEFT: 0,
    WHEEL: 1,
    RIGHT: 2,
    BACKWARD: 3,
    FORWARD: 4
};
function me(s1, e, t1 = "log", o, i = "color: inherit") {
    if (!("console" in window) || !window.console[t1]) return;
    const n = [
        "info",
        "log",
        "warn",
        "error"
    ].includes(t1), r = [];
    switch(me.logLevel){
        case "ERROR":
            if (t1 !== "error") return;
            break;
        case "WARN":
            if (![
                "error",
                "warn"
            ].includes(t1)) return;
            break;
        case "INFO":
            if (!n || s1) return;
            break;
    }
    o && r.push(o);
    const a = "Editor.js 2.29.1", l = `line-height: 1em;
            color: #006FEA;
            display: inline-block;
            font-size: 11px;
            line-height: 1em;
            background-color: #fff;
            padding: 4px 9px;
            border-radius: 30px;
            border: 1px solid rgba(56, 138, 229, 0.16);
            margin: 4px 5px 4px 0;`;
    s1 && (n ? (r.unshift(l, i), e = `%c${a}%c ${e}`) : e = `( ${a} )${e}`);
    try {
        n ? o ? console[t1](`${e} %o`, ...r) : console[t1](e, ...r) : console[t1](e);
    } catch  {}
}
me.logLevel = "VERBOSE";
function Ft(s1) {
    me.logLevel = s1;
}
const T = me.bind(window, !1), Y = me.bind(window, !0);
function oe(s1) {
    return Object.prototype.toString.call(s1).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function M(s1) {
    return oe(s1) === "function" || oe(s1) === "asyncfunction";
}
function D(s1) {
    return oe(s1) === "object";
}
function G(s1) {
    return oe(s1) === "string";
}
function Ht(s1) {
    return oe(s1) === "boolean";
}
function Je(s1) {
    return oe(s1) === "number";
}
function Qe(s1) {
    return oe(s1) === "undefined";
}
function W(s1) {
    return s1 ? Object.keys(s1).length === 0 && s1.constructor === Object : !0;
}
function lt(s1) {
    return s1 > 47 && s1 < 58 || // number keys
    s1 === 32 || s1 === 13 || // Space bar & return key(s)
    s1 === 229 || // processing key input for certain languages — Chinese, Japanese, etc.
    s1 > 64 && s1 < 91 || // letter keys
    s1 > 95 && s1 < 112 || // Numpad keys
    s1 > 185 && s1 < 193 || // ;=,-./` (in order)
    s1 > 218 && s1 < 223;
}
async function zt(s1, e = ()=>{}, t1 = ()=>{}) {
    async function o(i, n, r) {
        try {
            await i.function(i.data), await n(Qe(i.data) ? {} : i.data);
        } catch  {
            r(Qe(i.data) ? {} : i.data);
        }
    }
    return s1.reduce(async (i, n)=>(await i, o(n, e, t1)), Promise.resolve());
}
function ct(s1) {
    return Array.prototype.slice.call(s1);
}
function xe(s1, e) {
    return function() {
        const t1 = this, o = arguments;
        window.setTimeout(()=>s1.apply(t1, o), e);
    };
}
function Ut(s1) {
    return s1.name.split(".").pop();
}
function jt(s1) {
    return /^[-\w]+\/([-+\w]+|\*)$/.test(s1);
}
function et(s1, e, t1) {
    let o;
    return (...i)=>{
        const n = this, r = ()=>{
            o = null, t1 || s1.apply(n, i);
        }, a = t1 && !o;
        window.clearTimeout(o), o = window.setTimeout(r, e), a && s1.apply(n, i);
    };
}
function Ie(s1, e, t1) {
    let o, i, n, r = null, a = 0;
    t1 || (t1 = {});
    const l = function() {
        a = t1.leading === !1 ? 0 : Date.now(), r = null, n = s1.apply(o, i), r || (o = i = null);
    };
    return function() {
        const d = Date.now();
        !a && t1.leading === !1 && (a = d);
        const u = e - (d - a);
        return o = this, i = arguments, u <= 0 || u > e ? (r && (clearTimeout(r), r = null), a = d, n = s1.apply(o, i), r || (o = i = null)) : !r && t1.trailing !== !1 && (r = setTimeout(l, u)), n;
    };
}
function $t() {
    const s1 = {
        win: !1,
        mac: !1,
        x11: !1,
        linux: !1
    }, e = Object.keys(s1).find((t1)=>window.navigator.appVersion.toLowerCase().indexOf(t1) !== -1);
    return e && (s1[e] = !0), s1;
}
function re(s1) {
    return s1[0].toUpperCase() + s1.slice(1);
}
function Me(s1, ...e) {
    if (!e.length) return s1;
    const t1 = e.shift();
    if (D(s1) && D(t1)) for(const o in t1)D(t1[o]) ? (s1[o] || Object.assign(s1, {
        [o]: {}
    }), Me(s1[o], t1[o])) : Object.assign(s1, {
        [o]: t1[o]
    });
    return Me(s1, ...e);
}
function ye(s1) {
    const e = $t();
    return s1 = s1.replace(/shift/gi, "\u21E7").replace(/backspace/gi, "\u232B").replace(/enter/gi, "\u23CE").replace(/up/gi, "\u2191").replace(/left/gi, "\u2192").replace(/down/gi, "\u2193").replace(/right/gi, "\u2190").replace(/escape/gi, "\u238B").replace(/insert/gi, "Ins").replace(/delete/gi, "\u2421").replace(/\+/gi, " + "), e.mac ? s1 = s1.replace(/ctrl|cmd/gi, "\u2318").replace(/alt/gi, "\u2325") : s1 = s1.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), s1;
}
function Wt(s1) {
    try {
        return new URL(s1).href;
    } catch  {}
    return s1.substring(0, 2) === "//" ? window.location.protocol + s1 : window.location.origin + s1;
}
function Yt() {
    return Dt(10);
}
function Kt(s1) {
    window.open(s1, "_blank");
}
function Xt(s1 = "") {
    return `${s1}${Math.floor(Math.random() * 1e8).toString(16)}`;
}
function Le(s1, e, t1) {
    const o = `\xab${e}\xbb is deprecated and will be removed in the next major release. Please use the \xab${t1}\xbb instead.`;
    s1 && Y(o, "warn");
}
function le(s1, e, t1) {
    const o = t1.value ? "value" : "get", i = t1[o], n = `#${e}Cache`;
    if (t1[o] = function(...r) {
        return this[n] === void 0 && (this[n] = i.apply(this, ...r)), this[n];
    }, o === "get" && t1.set) {
        const r = t1.set;
        t1.set = function(a) {
            delete s1[n], r.apply(this, a);
        };
    }
    return t1;
}
const dt = 650;
function te() {
    return window.matchMedia(`(max-width: ${dt}px)`).matches;
}
const tt = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function Vt(s1, e) {
    const t1 = Array.isArray(s1) || D(s1), o = Array.isArray(e) || D(e);
    return t1 || o ? JSON.stringify(s1) === JSON.stringify(e) : s1 === e;
}
class c {
    /**
   * Check if passed tag has no closed tag
   *
   * @param {HTMLElement} tag - element to check
   * @returns {boolean}
   */ static isSingleTag(e) {
        return e.tagName && [
            "AREA",
            "BASE",
            "BR",
            "COL",
            "COMMAND",
            "EMBED",
            "HR",
            "IMG",
            "INPUT",
            "KEYGEN",
            "LINK",
            "META",
            "PARAM",
            "SOURCE",
            "TRACK",
            "WBR"
        ].includes(e.tagName);
    }
    /**
   * Check if element is BR or WBR
   *
   * @param {HTMLElement} element - element to check
   * @returns {boolean}
   */ static isLineBreakTag(e) {
        return e && e.tagName && [
            "BR",
            "WBR"
        ].includes(e.tagName);
    }
    /**
   * Helper for making Elements with class name and attributes
   *
   * @param  {string} tagName - new Element tag name
   * @param  {string[]|string} [classNames] - list or name of CSS class name(s)
   * @param  {object} [attributes] - any attributes
   * @returns {HTMLElement}
   */ static make(e, t1 = null, o = {}) {
        const i = document.createElement(e);
        Array.isArray(t1) ? i.classList.add(...t1) : t1 && i.classList.add(t1);
        for(const n in o)Object.prototype.hasOwnProperty.call(o, n) && (i[n] = o[n]);
        return i;
    }
    /**
   * Creates Text Node with the passed content
   *
   * @param {string} content - text content
   * @returns {Text}
   */ static text(e) {
        return document.createTextNode(e);
    }
    /**
   * Append one or several elements to the parent
   *
   * @param  {Element|DocumentFragment} parent - where to append
   * @param  {Element|Element[]|DocumentFragment|Text|Text[]} elements - element or elements list
   */ static append(e, t1) {
        Array.isArray(t1) ? t1.forEach((o)=>e.appendChild(o)) : e.appendChild(t1);
    }
    /**
   * Append element or a couple to the beginning of the parent elements
   *
   * @param {Element} parent - where to append
   * @param {Element|Element[]} elements - element or elements list
   */ static prepend(e, t1) {
        Array.isArray(t1) ? (t1 = t1.reverse(), t1.forEach((o)=>e.prepend(o))) : e.prepend(t1);
    }
    /**
   * Swap two elements in parent
   *
   * @param {HTMLElement} el1 - from
   * @param {HTMLElement} el2 - to
   * @deprecated
   */ static swap(e, t1) {
        const o = document.createElement("div"), i = e.parentNode;
        i.insertBefore(o, e), i.insertBefore(e, t1), i.insertBefore(t1, o), i.removeChild(o);
    }
    /**
   * Selector Decorator
   *
   * Returns first match
   *
   * @param {Element} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {Element}
   */ static find(e = document, t1) {
        return e.querySelector(t1);
    }
    /**
   * Get Element by Id
   *
   * @param {string} id - id to find
   * @returns {HTMLElement | null}
   */ static get(e) {
        return document.getElementById(e);
    }
    /**
   * Selector Decorator.
   *
   * Returns all matches
   *
   * @param {Element|Document} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {NodeList}
   */ static findAll(e = document, t1) {
        return e.querySelectorAll(t1);
    }
    /**
   * Returns CSS selector for all text inputs
   */ static get allInputsSelector() {
        return "[contenteditable=true], textarea, input:not([type]), " + [
            "text",
            "password",
            "email",
            "number",
            "search",
            "tel",
            "url"
        ].map((t1)=>`input[type="${t1}"]`).join(", ");
    }
    /**
   * Find all contenteditable, textarea and editable input elements passed holder contains
   *
   * @param holder - element where to find inputs
   */ static findAllInputs(e) {
        return ct(e.querySelectorAll(c.allInputsSelector)).reduce((t1, o)=>c.isNativeInput(o) || c.containsOnlyInlineElements(o) ? [
                ...t1,
                o
            ] : [
                ...t1,
                ...c.getDeepestBlockElements(o)
            ], []);
    }
    /**
   * Search for deepest node which is Leaf.
   * Leaf is the vertex that doesn't have any child nodes
   *
   * @description Method recursively goes throw the all Node until it finds the Leaf
   * @param {Node} node - root Node. From this vertex we start Deep-first search
   *                      {@link https://en.wikipedia.org/wiki/Depth-first_search}
   * @param {boolean} [atLast] - find last text node
   * @returns {Node} - it can be text Node or Element Node, so that caret will able to work with it
   */ static getDeepestNode(e, t1 = !1) {
        const o = t1 ? "lastChild" : "firstChild", i = t1 ? "previousSibling" : "nextSibling";
        if (e && e.nodeType === Node.ELEMENT_NODE && e[o]) {
            let n = e[o];
            if (c.isSingleTag(n) && !c.isNativeInput(n) && !c.isLineBreakTag(n)) {
                if (n[i]) n = n[i];
                else if (n.parentNode[i]) n = n.parentNode[i];
                else return n.parentNode;
            }
            return this.getDeepestNode(n, t1);
        }
        return e;
    }
    /**
   * Check if object is DOM node
   *
   * @param {*} node - object to check
   * @returns {boolean}
   */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static isElement(e) {
        return Je(e) ? !1 : e && e.nodeType && e.nodeType === Node.ELEMENT_NODE;
    }
    /**
   * Check if object is DocumentFragment node
   *
   * @param {object} node - object to check
   * @returns {boolean}
   */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static isFragment(e) {
        return Je(e) ? !1 : e && e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
    }
    /**
   * Check if passed element is contenteditable
   *
   * @param {HTMLElement} element - html element to check
   * @returns {boolean}
   */ static isContentEditable(e) {
        return e.contentEditable === "true";
    }
    /**
   * Checks target if it is native input
   *
   * @param {*} target - HTML element or string
   * @returns {boolean}
   */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static isNativeInput(e) {
        const t1 = [
            "INPUT",
            "TEXTAREA"
        ];
        return e && e.tagName ? t1.includes(e.tagName) : !1;
    }
    /**
   * Checks if we can set caret
   *
   * @param {HTMLElement} target - target to check
   * @returns {boolean}
   */ static canSetCaret(e) {
        let t1 = !0;
        if (c.isNativeInput(e)) switch(e.type){
            case "file":
            case "checkbox":
            case "radio":
            case "hidden":
            case "submit":
            case "button":
            case "image":
            case "reset":
                t1 = !1;
                break;
        }
        else t1 = c.isContentEditable(e);
        return t1;
    }
    /**
   * Checks node if it is empty
   *
   * @description Method checks simple Node without any childs for emptiness
   * If you have Node with 2 or more children id depth, you better use {@link Dom#isEmpty} method
   * @param {Node} node - node to check
   * @param {string} [ignoreChars] - char or substring to treat as empty
   * @returns {boolean} true if it is empty
   */ static isNodeEmpty(e, t1) {
        let o;
        return this.isSingleTag(e) && !this.isLineBreakTag(e) ? !1 : (this.isElement(e) && this.isNativeInput(e) ? o = e.value : o = e.textContent.replace("\u200B", ""), t1 && (o = o.replace(new RegExp(t1, "g"), "")), o.trim().length === 0);
    }
    /**
   * checks node if it is doesn't have any child nodes
   *
   * @param {Node} node - node to check
   * @returns {boolean}
   */ static isLeaf(e) {
        return e ? e.childNodes.length === 0 : !1;
    }
    /**
   * breadth-first search (BFS)
   * {@link https://en.wikipedia.org/wiki/Breadth-first_search}
   *
   * @description Pushes to stack all DOM leafs and checks for emptiness
   * @param {Node} node - node to check
   * @param {string} [ignoreChars] - char or substring to treat as empty
   * @returns {boolean}
   */ static isEmpty(e, t1) {
        e.normalize();
        const o = [
            e
        ];
        for(; o.length > 0;)if (e = o.shift(), !!e) {
            if (this.isLeaf(e) && !this.isNodeEmpty(e, t1)) return !1;
            e.childNodes && o.push(...Array.from(e.childNodes));
        }
        return !0;
    }
    /**
   * Check if string contains html elements
   *
   * @param {string} str - string to check
   * @returns {boolean}
   */ static isHTMLString(e) {
        const t1 = c.make("div");
        return t1.innerHTML = e, t1.childElementCount > 0;
    }
    /**
   * Return length of node`s text content
   *
   * @param {Node} node - node with content
   * @returns {number}
   */ static getContentLength(e) {
        return c.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
    }
    /**
   * Return array of names of block html elements
   *
   * @returns {string[]}
   */ static get blockElements() {
        return [
            "address",
            "article",
            "aside",
            "blockquote",
            "canvas",
            "div",
            "dl",
            "dt",
            "fieldset",
            "figcaption",
            "figure",
            "footer",
            "form",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "header",
            "hgroup",
            "hr",
            "li",
            "main",
            "nav",
            "noscript",
            "ol",
            "output",
            "p",
            "pre",
            "ruby",
            "section",
            "table",
            "tbody",
            "thead",
            "tr",
            "tfoot",
            "ul",
            "video"
        ];
    }
    /**
   * Check if passed content includes only inline elements
   *
   * @param {string|HTMLElement} data - element or html string
   * @returns {boolean}
   */ static containsOnlyInlineElements(e) {
        let t1;
        G(e) ? (t1 = document.createElement("div"), t1.innerHTML = e) : t1 = e;
        const o = (i)=>!c.blockElements.includes(i.tagName.toLowerCase()) && Array.from(i.children).every(o);
        return Array.from(t1.children).every(o);
    }
    /**
   * Find and return all block elements in the passed parent (including subtree)
   *
   * @param {HTMLElement} parent - root element
   * @returns {HTMLElement[]}
   */ static getDeepestBlockElements(e) {
        return c.containsOnlyInlineElements(e) ? [
            e
        ] : Array.from(e.children).reduce((t1, o)=>[
                ...t1,
                ...c.getDeepestBlockElements(o)
            ], []);
    }
    /**
   * Helper for get holder from {string} or return HTMLElement
   *
   * @param {string | HTMLElement} element - holder's id or holder's HTML Element
   * @returns {HTMLElement}
   */ static getHolder(e) {
        return G(e) ? document.getElementById(e) : e;
    }
    /**
   * Returns true if element is anchor (is A tag)
   *
   * @param {Element} element - element to check
   * @returns {boolean}
   */ static isAnchor(e) {
        return e.tagName.toLowerCase() === "a";
    }
    /**
   * Return element's offset related to the document
   *
   * @todo handle case when editor initialized in scrollable popup
   * @param el - element to compute offset
   */ static offset(e) {
        const t1 = e.getBoundingClientRect(), o = window.pageXOffset || document.documentElement.scrollLeft, i = window.pageYOffset || document.documentElement.scrollTop, n = t1.top + i, r = t1.left + o;
        return {
            top: n,
            left: r,
            bottom: n + t1.height,
            right: r + t1.width
        };
    }
}
const qt = {
    blockTunes: {
        toggler: {
            "Click to tune": "",
            "or drag to move": ""
        }
    },
    inlineToolbar: {
        converter: {
            "Convert to": ""
        }
    },
    toolbar: {
        toolbox: {
            Add: ""
        }
    },
    popover: {
        Filter: "",
        "Nothing found": ""
    }
}, Zt = {
    Text: "",
    Link: "",
    Bold: "",
    Italic: ""
}, Gt = {
    link: {
        "Add a link": ""
    },
    stub: {
        "The block can not be displayed correctly.": ""
    }
}, Jt = {
    delete: {
        Delete: "",
        "Click to delete": ""
    },
    moveUp: {
        "Move up": ""
    },
    moveDown: {
        "Move down": ""
    }
}, ht = {
    ui: qt,
    toolNames: Zt,
    tools: Gt,
    blockTunes: Jt
}, ie = class {
    /**
   * Type-safe translation for internal UI texts:
   * Perform translation of the string by namespace and a key
   *
   * @example I18n.ui(I18nInternalNS.ui.blockTunes.toggler, 'Click to tune')
   * @param internalNamespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */ static ui(s1, e) {
        return ie._t(s1, e);
    }
    /**
   * Translate for external strings that is not presented in default dictionary.
   * For example, for user-specified tool names
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */ static t(s1, e) {
        return ie._t(s1, e);
    }
    /**
   * Adjust module for using external dictionary
   *
   * @param dictionary - new messages list to override default
   */ static setDictionary(s1) {
        ie.currentDictionary = s1;
    }
    /**
   * Perform translation both for internal and external namespaces
   * If there is no translation found, returns passed key as a translated message
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */ static _t(s1, e) {
        const t1 = ie.getNamespace(s1);
        return !t1 || !t1[e] ? e : t1[e];
    }
    /**
   * Find messages section by namespace path
   *
   * @param namespace - path to section
   */ static getNamespace(s1) {
        return s1.split(".").reduce((t1, o)=>!t1 || !Object.keys(t1).length ? {} : t1[o], ie.currentDictionary);
    }
};
let z = ie;
z.currentDictionary = ht;
class ut extends Error {
}
class Ee {
    constructor(){
        this.subscribers = {};
    }
    /**
   * Subscribe any event on callback
   *
   * @param eventName - event name
   * @param callback - subscriber
   */ on(e, t1) {
        e in this.subscribers || (this.subscribers[e] = []), this.subscribers[e].push(t1);
    }
    /**
   * Subscribe any event on callback. Callback will be called once and be removed from subscribers array after call.
   *
   * @param eventName - event name
   * @param callback - subscriber
   */ once(e, t1) {
        e in this.subscribers || (this.subscribers[e] = []);
        const o = (i)=>{
            const n = t1(i), r = this.subscribers[e].indexOf(o);
            return r !== -1 && this.subscribers[e].splice(r, 1), n;
        };
        this.subscribers[e].push(o);
    }
    /**
   * Emit callbacks with passed data
   *
   * @param eventName - event name
   * @param data - subscribers get this data when they were fired
   */ emit(e, t1) {
        W(this.subscribers) || !this.subscribers[e] || this.subscribers[e].reduce((o, i)=>{
            const n = i(o);
            return n !== void 0 ? n : o;
        }, t1);
    }
    /**
   * Unsubscribe callback from event
   *
   * @param eventName - event name
   * @param callback - event handler
   */ off(e, t1) {
        if (this.subscribers[e] === void 0) {
            console.warn(`EventDispatcher .off(): there is no subscribers for event "${e.toString()}". Probably, .off() called before .on()`);
            return;
        }
        for(let o = 0; o < this.subscribers[e].length; o++)if (this.subscribers[e][o] === t1) {
            delete this.subscribers[e][o];
            break;
        }
    }
    /**
   * Destroyer
   * clears subscribers list
   */ destroy() {
        this.subscribers = {};
    }
}
function ee(s1) {
    Object.setPrototypeOf(this, {
        /**
     * Block id
     *
     * @returns {string}
     */ get id () {
            return s1.id;
        },
        /**
     * Tool name
     *
     * @returns {string}
     */ get name () {
            return s1.name;
        },
        /**
     * Tool config passed on Editor's initialization
     *
     * @returns {ToolConfig}
     */ get config () {
            return s1.config;
        },
        /**
     * .ce-block element, that wraps plugin contents
     *
     * @returns {HTMLElement}
     */ get holder () {
            return s1.holder;
        },
        /**
     * True if Block content is empty
     *
     * @returns {boolean}
     */ get isEmpty () {
            return s1.isEmpty;
        },
        /**
     * True if Block is selected with Cross-Block selection
     *
     * @returns {boolean}
     */ get selected () {
            return s1.selected;
        },
        /**
     * Set Block's stretch state
     *
     * @param {boolean} state — state to set
     */ set stretched (t){
            s1.stretched = t;
        },
        /**
     * True if Block is stretched
     *
     * @returns {boolean}
     */ get stretched () {
            return s1.stretched;
        },
        /**
     * True if Block has inputs to be focused
     */ get focusable () {
            return s1.focusable;
        },
        /**
     * Call Tool method with errors handler under-the-hood
     *
     * @param {string} methodName - method to call
     * @param {object} param - object with parameters
     * @returns {unknown}
     */ call (t1, o) {
            return s1.call(t1, o);
        },
        /**
     * Save Block content
     *
     * @returns {Promise<void|SavedData>}
     */ save () {
            return s1.save();
        },
        /**
     * Validate Block data
     *
     * @param {BlockToolData} data - data to validate
     * @returns {Promise<boolean>}
     */ validate (t1) {
            return s1.validate(t1);
        },
        /**
     * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
     * Can be useful for block changes invisible for editor core.
     */ dispatchChange () {
            s1.dispatchChange();
        }
    });
}
class Fe {
    constructor(){
        this.allListeners = [];
    }
    /**
   * Assigns event listener on element and returns unique identifier
   *
   * @param {EventTarget} element - DOM element that needs to be listened
   * @param {string} eventType - event type
   * @param {Function} handler - method that will be fired on event
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */ on(e, t1, o, i = !1) {
        const n = Xt("l"), r = {
            id: n,
            element: e,
            eventType: t1,
            handler: o,
            options: i
        };
        if (!this.findOne(e, t1, o)) return this.allListeners.push(r), e.addEventListener(t1, o, i), n;
    }
    /**
   * Removes event listener from element
   *
   * @param {EventTarget} element - DOM element that we removing listener
   * @param {string} eventType - event type
   * @param {Function} handler - remove handler, if element listens several handlers on the same event type
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */ off(e, t1, o, i) {
        const n = this.findAll(e, t1, o);
        n.forEach((r, a)=>{
            const l = this.allListeners.indexOf(n[a]);
            l > -1 && (this.allListeners.splice(l, 1), r.element.removeEventListener(r.eventType, r.handler, r.options));
        });
    }
    /**
   * Removes listener by id
   *
   * @param {string} id - listener identifier
   */ offById(e) {
        const t1 = this.findById(e);
        t1 && t1.element.removeEventListener(t1.eventType, t1.handler, t1.options);
    }
    /**
   * Finds and returns first listener by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} [eventType] - event type
   * @param {Function} [handler] - event handler
   * @returns {ListenerData|null}
   */ findOne(e, t1, o) {
        const i = this.findAll(e, t1, o);
        return i.length > 0 ? i[0] : null;
    }
    /**
   * Return all stored listeners by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} eventType - event type
   * @param {Function} handler - event handler
   * @returns {ListenerData[]}
   */ findAll(e, t1, o) {
        let i;
        const n = e ? this.findByEventTarget(e) : [];
        return e && t1 && o ? i = n.filter((r)=>r.eventType === t1 && r.handler === o) : e && t1 ? i = n.filter((r)=>r.eventType === t1) : i = n, i;
    }
    /**
   * Removes all listeners
   */ removeAll() {
        this.allListeners.map((e)=>{
            e.element.removeEventListener(e.eventType, e.handler, e.options);
        }), this.allListeners = [];
    }
    /**
   * Module cleanup on destruction
   */ destroy() {
        this.removeAll();
    }
    /**
   * Search method: looks for listener by passed element
   *
   * @param {EventTarget} element - searching element
   * @returns {Array} listeners that found on element
   */ findByEventTarget(e) {
        return this.allListeners.filter((t1)=>{
            if (t1.element === e) return t1;
        });
    }
    /**
   * Search method: looks for listener by passed event type
   *
   * @param {string} eventType - event type
   * @returns {ListenerData[]} listeners that found on element
   */ findByType(e) {
        return this.allListeners.filter((t1)=>{
            if (t1.eventType === e) return t1;
        });
    }
    /**
   * Search method: looks for listener by passed handler
   *
   * @param {Function} handler - event handler
   * @returns {ListenerData[]} listeners that found on element
   */ findByHandler(e) {
        return this.allListeners.filter((t1)=>{
            if (t1.handler === e) return t1;
        });
    }
    /**
   * Returns listener data found by id
   *
   * @param {string} id - listener identifier
   * @returns {ListenerData}
   */ findById(e) {
        return this.allListeners.find((t1)=>t1.id === e);
    }
}
class y {
    /**
   * @class
   * @param options - Module options
   * @param options.config - Module config
   * @param options.eventsDispatcher - Common event bus
   */ constructor({ config: e, eventsDispatcher: t1 }){
        if (this.nodes = {}, this.listeners = new Fe(), this.readOnlyMutableListeners = {
            /**
       * Assigns event listener on DOM element and pushes into special array that might be removed
       *
       * @param {EventTarget} element - DOM Element
       * @param {string} eventType - Event name
       * @param {Function} handler - Event handler
       * @param {boolean|AddEventListenerOptions} options - Listening options
       */ on: (o, i, n, r = !1)=>{
                this.mutableListenerIds.push(this.listeners.on(o, i, n, r));
            },
            /**
       * Clears all mutable listeners
       */ clearAll: ()=>{
                for (const o of this.mutableListenerIds)this.listeners.offById(o);
                this.mutableListenerIds = [];
            }
        }, this.mutableListenerIds = [], new.target === y) throw new TypeError("Constructors for abstract class Module are not allowed.");
        this.config = e, this.eventsDispatcher = t1;
    }
    /**
   * Editor modules setter
   *
   * @param {EditorModules} Editor - Editor's Modules
   */ set state(e) {
        this.Editor = e;
    }
    /**
   * Remove memorized nodes
   */ removeAllNodes() {
        for(const e in this.nodes){
            const t1 = this.nodes[e];
            t1 instanceof HTMLElement && t1.remove();
        }
    }
    /**
   * Returns true if current direction is RTL (Right-To-Left)
   */ get isRtl() {
        return this.config.i18n.direction === "rtl";
    }
}
class b {
    constructor(){
        this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = !1, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
    }
    /**
   * Editor styles
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */ static get CSS() {
        return {
            editorWrapper: "codex-editor",
            editorZone: "codex-editor__redactor"
        };
    }
    /**
   * Returns selected anchor
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorNode}
   *
   * @returns {Node|null}
   */ static get anchorNode() {
        const e = window.getSelection();
        return e ? e.anchorNode : null;
    }
    /**
   * Returns selected anchor element
   *
   * @returns {Element|null}
   */ static get anchorElement() {
        const e = window.getSelection();
        if (!e) return null;
        const t1 = e.anchorNode;
        return t1 ? c.isElement(t1) ? t1 : t1.parentElement : null;
    }
    /**
   * Returns selection offset according to the anchor node
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorOffset}
   *
   * @returns {number|null}
   */ static get anchorOffset() {
        const e = window.getSelection();
        return e ? e.anchorOffset : null;
    }
    /**
   * Is current selection range collapsed
   *
   * @returns {boolean|null}
   */ static get isCollapsed() {
        const e = window.getSelection();
        return e ? e.isCollapsed : null;
    }
    /**
   * Check current selection if it is at Editor's zone
   *
   * @returns {boolean}
   */ static get isAtEditor() {
        return this.isSelectionAtEditor(b.get());
    }
    /**
   * Check if passed selection is at Editor's zone
   *
   * @param selection - Selection object to check
   */ static isSelectionAtEditor(e) {
        if (!e) return !1;
        let t1 = e.anchorNode || e.focusNode;
        t1 && t1.nodeType === Node.TEXT_NODE && (t1 = t1.parentNode);
        let o = null;
        return t1 && t1 instanceof Element && (o = t1.closest(`.${b.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
    }
    /**
   * Check if passed range at Editor zone
   *
   * @param range - range to check
   */ static isRangeAtEditor(e) {
        if (!e) return;
        let t1 = e.startContainer;
        t1 && t1.nodeType === Node.TEXT_NODE && (t1 = t1.parentNode);
        let o = null;
        return t1 && t1 instanceof Element && (o = t1.closest(`.${b.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
    }
    /**
   * Methods return boolean that true if selection exists on the page
   */ static get isSelectionExists() {
        return !!b.get().anchorNode;
    }
    /**
   * Return first range
   *
   * @returns {Range|null}
   */ static get range() {
        return this.getRangeFromSelection(this.get());
    }
    /**
   * Returns range from passed Selection object
   *
   * @param selection - Selection object to get Range from
   */ static getRangeFromSelection(e) {
        return e && e.rangeCount ? e.getRangeAt(0) : null;
    }
    /**
   * Calculates position and size of selected text
   *
   * @returns {DOMRect | ClientRect}
   */ static get rect() {
        let e = document.selection, t1, o = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        if (e && e.type !== "Control") return e, t1 = e.createRange(), o.x = t1.boundingLeft, o.y = t1.boundingTop, o.width = t1.boundingWidth, o.height = t1.boundingHeight, o;
        if (!window.getSelection) return T("Method window.getSelection is not supported", "warn"), o;
        if (e = window.getSelection(), e.rangeCount === null || isNaN(e.rangeCount)) return T("Method SelectionUtils.rangeCount is not supported", "warn"), o;
        if (e.rangeCount === 0) return o;
        if (t1 = e.getRangeAt(0).cloneRange(), t1.getBoundingClientRect && (o = t1.getBoundingClientRect()), o.x === 0 && o.y === 0) {
            const i = document.createElement("span");
            if (i.getBoundingClientRect) {
                i.appendChild(document.createTextNode("\u200B")), t1.insertNode(i), o = i.getBoundingClientRect();
                const n = i.parentNode;
                n.removeChild(i), n.normalize();
            }
        }
        return o;
    }
    /**
   * Returns selected text as String
   *
   * @returns {string}
   */ static get text() {
        return window.getSelection ? window.getSelection().toString() : "";
    }
    /**
   * Returns window SelectionUtils
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Window/getSelection}
   *
   * @returns {Selection}
   */ static get() {
        return window.getSelection();
    }
    /**
   * Set focus to contenteditable or native input element
   *
   * @param element - element where to set focus
   * @param offset - offset of cursor
   */ static setCursor(e, t1 = 0) {
        const o = document.createRange(), i = window.getSelection();
        return c.isNativeInput(e) ? c.canSetCaret(e) ? (e.focus(), e.selectionStart = e.selectionEnd = t1, e.getBoundingClientRect()) : void 0 : (o.setStart(e, t1), o.setEnd(e, t1), i.removeAllRanges(), i.addRange(o), o.getBoundingClientRect());
    }
    /**
   * Check if current range exists and belongs to container
   *
   * @param container - where range should be
   */ static isRangeInsideContainer(e) {
        const t1 = b.range;
        return t1 === null ? !1 : e.contains(t1.startContainer);
    }
    /**
   * Adds fake cursor to the current range
   */ static addFakeCursor() {
        const e = b.range;
        if (e === null) return;
        const t1 = c.make("span", "codex-editor__fake-cursor");
        t1.dataset.mutationFree = "true", e.collapse(), e.insertNode(t1);
    }
    /**
   * Check if passed element contains a fake cursor
   *
   * @param el - where to check
   */ static isFakeCursorInsideContainer(e) {
        return c.find(e, ".codex-editor__fake-cursor") !== null;
    }
    /**
   * Removes fake cursor from a container
   *
   * @param container - container to look for
   */ static removeFakeCursor(e = document.body) {
        const t1 = c.find(e, ".codex-editor__fake-cursor");
        t1 && t1.remove();
    }
    /**
   * Removes fake background
   */ removeFakeBackground() {
        this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = !1, document.execCommand(this.commandRemoveFormat));
    }
    /**
   * Sets fake background
   */ setFakeBackground() {
        document.execCommand(this.commandBackground, !1, "#a8d6ff"), this.isFakeBackgroundEnabled = !0;
    }
    /**
   * Save SelectionUtils's range
   */ save() {
        this.savedSelectionRange = b.range;
    }
    /**
   * Restore saved SelectionUtils's range
   */ restore() {
        if (!this.savedSelectionRange) return;
        const e = window.getSelection();
        e.removeAllRanges(), e.addRange(this.savedSelectionRange);
    }
    /**
   * Clears saved selection
   */ clearSaved() {
        this.savedSelectionRange = null;
    }
    /**
   * Collapse current selection
   */ collapseToEnd() {
        const e = window.getSelection(), t1 = document.createRange();
        t1.selectNodeContents(e.focusNode), t1.collapse(!1), e.removeAllRanges(), e.addRange(t1);
    }
    /**
   * Looks ahead to find passed tag from current selection
   *
   * @param  {string} tagName       - tag to found
   * @param  {string} [className]   - tag's class name
   * @param  {number} [searchDepth] - count of tags that can be included. For better performance.
   * @returns {HTMLElement|null}
   */ findParentTag(e, t1, o = 10) {
        const i = window.getSelection();
        let n = null;
        return !i || !i.anchorNode || !i.focusNode ? null : ([
            /** the Node in which the selection begins */ i.anchorNode,
            /** the Node in which the selection ends */ i.focusNode
        ].forEach((a)=>{
            let l = o;
            for(; l > 0 && a.parentNode && !(a.tagName === e && (n = a, t1 && a.classList && !a.classList.contains(t1) && (n = null), n));)a = a.parentNode, l--;
        }), n);
    }
    /**
   * Expands selection range to the passed parent node
   *
   * @param {HTMLElement} element - element which contents should be selected
   */ expandToTag(e) {
        const t1 = window.getSelection();
        t1.removeAllRanges();
        const o = document.createRange();
        o.selectNodeContents(e), t1.addRange(o);
    }
}
function Qt(s1, e) {
    const { type: t1, target: o, addedNodes: i, removedNodes: n } = s1;
    if (o === e) return !0;
    if ([
        "characterData",
        "attributes"
    ].includes(t1)) {
        const l = o.nodeType === Node.TEXT_NODE ? o.parentNode : o;
        return e.contains(l);
    }
    const r = Array.from(i).some((l)=>e.contains(l)), a = Array.from(n).some((l)=>e.contains(l));
    return r || a;
}
const Ae = "redactor dom changed", pt = "block changed", ft = "fake cursor is about to be toggled", gt = "fake cursor have been set";
function ot(s1, e) {
    return s1.mergeable && s1.name === e.name;
}
function eo(s1, e) {
    const t1 = e == null ? void 0 : e.export;
    return M(t1) ? t1(s1) : G(t1) ? s1[t1] : (t1 !== void 0 && T("Conversion \xabexport\xbb property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), "");
}
function to(s1, e) {
    const t1 = e == null ? void 0 : e.import;
    return M(t1) ? t1(s1) : G(t1) ? {
        [t1]: s1
    } : (t1 !== void 0 && T("Conversion \xabimport\xbb property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), {});
}
var X = /* @__PURE__ */ ((s1)=>(s1.APPEND_CALLBACK = "appendCallback", s1.RENDERED = "rendered", s1.MOVED = "moved", s1.UPDATED = "updated", s1.REMOVED = "removed", s1.ON_PASTE = "onPaste", s1))(X || {});
class R extends Ee {
    /**
   * @param options - block constructor options
   * @param [options.id] - block's id. Will be generated if omitted.
   * @param options.data - Tool's initial data
   * @param options.tool — block's tool
   * @param options.api - Editor API module for pass it to the Block Tunes
   * @param options.readOnly - Read-Only flag
   * @param [eventBus] - Editor common event bus. Allows to subscribe on some Editor events. Could be omitted when "virtual" Block is created. See BlocksAPI@composeBlockData.
   */ constructor({ id: e = Yt(), data: t1, tool: o, api: i, readOnly: n, tunesData: r }, a){
        super(), this.cachedInputs = [], this.toolRenderedElement = null, this.tunesInstances = /* @__PURE__ */ new Map(), this.defaultTunesInstances = /* @__PURE__ */ new Map(), this.unavailableTunesData = {}, this.inputIndex = 0, this.editorEventBus = null, this.handleFocus = ()=>{
            this.dropInputsCache(), this.updateCurrentInput();
        }, this.didMutated = (l)=>{
            const d = l === void 0, u = l instanceof InputEvent;
            !d && !u && this.detectToolRootChange(l);
            let h;
            d || u ? h = !0 : h = !(l.length > 0 && l.every((x)=>{
                const { addedNodes: p, removedNodes: m, target: L } = x;
                return [
                    ...Array.from(p),
                    ...Array.from(m),
                    L
                ].some((S)=>(c.isElement(S) || (S = S.parentElement), S && S.closest('[data-mutation-free="true"]') !== null));
            })), h && (this.dropInputsCache(), this.updateCurrentInput(), this.call("updated"), this.emit("didMutated", this));
        }, this.name = o.name, this.id = e, this.settings = o.settings, this.config = o.settings.config || {}, this.api = i, this.editorEventBus = a || null, this.blockAPI = new ee(this), this.tool = o, this.toolInstance = o.create(t1, this.blockAPI, n), this.tunes = o.tunes, this.composeTunes(r), this.holder = this.compose(), window.requestIdleCallback(()=>{
            this.watchBlockMutations(), this.addInputEvents();
        });
    }
    /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */ static get CSS() {
        return {
            wrapper: "ce-block",
            wrapperStretched: "ce-block--stretched",
            content: "ce-block__content",
            selected: "ce-block--selected",
            dropTarget: "ce-block--drop-target"
        };
    }
    /**
   * Find and return all editable elements (contenteditable and native inputs) in the Tool HTML
   *
   * @returns {HTMLElement[]}
   */ get inputs() {
        if (this.cachedInputs.length !== 0) return this.cachedInputs;
        const e = c.findAllInputs(this.holder);
        return this.inputIndex > e.length - 1 && (this.inputIndex = e.length - 1), this.cachedInputs = e, e;
    }
    /**
   * Return current Tool`s input
   *
   * @returns {HTMLElement}
   */ get currentInput() {
        return this.inputs[this.inputIndex];
    }
    /**
   * Set input index to the passed element
   *
   * @param {HTMLElement | Node} element - HTML Element to set as current input
   */ set currentInput(e) {
        const t1 = this.inputs.findIndex((o)=>o === e || o.contains(e));
        t1 !== -1 && (this.inputIndex = t1);
    }
    /**
   * Return first Tool`s input
   *
   * @returns {HTMLElement}
   */ get firstInput() {
        return this.inputs[0];
    }
    /**
   * Return first Tool`s input
   *
   * @returns {HTMLElement}
   */ get lastInput() {
        const e = this.inputs;
        return e[e.length - 1];
    }
    /**
   * Return next Tool`s input or undefined if it doesn't exist
   *
   * @returns {HTMLElement}
   */ get nextInput() {
        return this.inputs[this.inputIndex + 1];
    }
    /**
   * Return previous Tool`s input or undefined if it doesn't exist
   *
   * @returns {HTMLElement}
   */ get previousInput() {
        return this.inputs[this.inputIndex - 1];
    }
    /**
   * Get Block's JSON data
   *
   * @returns {object}
   */ get data() {
        return this.save().then((e)=>e && !W(e.data) ? e.data : {});
    }
    /**
   * Returns tool's sanitizer config
   *
   * @returns {object}
   */ get sanitize() {
        return this.tool.sanitizeConfig;
    }
    /**
   * is block mergeable
   * We plugin have merge function then we call it mergeable
   *
   * @returns {boolean}
   */ get mergeable() {
        return M(this.toolInstance.merge);
    }
    /**
   * If Block contains inputs, it is focusable
   */ get focusable() {
        return this.inputs.length !== 0;
    }
    /**
   * Check block for emptiness
   *
   * @returns {boolean}
   */ get isEmpty() {
        const e = c.isEmpty(this.pluginsContent, "/"), t1 = !this.hasMedia;
        return e && t1;
    }
    /**
   * Check if block has a media content such as images, iframe and other
   *
   * @returns {boolean}
   */ get hasMedia() {
        const e = [
            "img",
            "iframe",
            "video",
            "audio",
            "source",
            "input",
            "textarea",
            "twitterwidget"
        ];
        return !!this.holder.querySelector(e.join(","));
    }
    /**
   * Set selected state
   * We don't need to mark Block as Selected when it is empty
   *
   * @param {boolean} state - 'true' to select, 'false' to remove selection
   */ set selected(e) {
        var i, n;
        this.holder.classList.toggle(R.CSS.selected, e);
        const t1 = e === !0 && b.isRangeInsideContainer(this.holder), o = e === !1 && b.isFakeCursorInsideContainer(this.holder);
        (t1 || o) && ((i = this.editorEventBus) == null || i.emit(ft, {
            state: e
        }), t1 ? b.addFakeCursor() : b.removeFakeCursor(this.holder), (n = this.editorEventBus) == null || n.emit(gt, {
            state: e
        }));
    }
    /**
   * Returns True if it is Selected
   *
   * @returns {boolean}
   */ get selected() {
        return this.holder.classList.contains(R.CSS.selected);
    }
    /**
   * Set stretched state
   *
   * @param {boolean} state - 'true' to enable, 'false' to disable stretched state
   */ set stretched(e) {
        this.holder.classList.toggle(R.CSS.wrapperStretched, e);
    }
    /**
   * Return Block's stretched state
   *
   * @returns {boolean}
   */ get stretched() {
        return this.holder.classList.contains(R.CSS.wrapperStretched);
    }
    /**
   * Toggle drop target state
   *
   * @param {boolean} state - 'true' if block is drop target, false otherwise
   */ set dropTarget(e) {
        this.holder.classList.toggle(R.CSS.dropTarget, e);
    }
    /**
   * Returns Plugins content
   *
   * @returns {HTMLElement}
   */ get pluginsContent() {
        return this.toolRenderedElement;
    }
    /**
   * Calls Tool's method
   *
   * Method checks tool property {MethodName}. Fires method with passes params If it is instance of Function
   *
   * @param {string} methodName - method to call
   * @param {object} params - method argument
   */ call(e, t1) {
        if (M(this.toolInstance[e])) {
            e === "appendCallback" && T("`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead", "warn");
            try {
                this.toolInstance[e].call(this.toolInstance, t1);
            } catch (o) {
                T(`Error during '${e}' call: ${o.message}`, "error");
            }
        }
    }
    /**
   * Call plugins merge method
   *
   * @param {BlockToolData} data - data to merge
   */ async mergeWith(e) {
        await this.toolInstance.merge(e);
    }
    /**
   * Extracts data from Block
   * Groups Tool's save processing time
   *
   * @returns {object}
   */ async save() {
        const e = await this.toolInstance.save(this.pluginsContent), t1 = this.unavailableTunesData;
        [
            ...this.tunesInstances.entries(),
            ...this.defaultTunesInstances.entries()
        ].forEach(([n, r])=>{
            if (M(r.save)) try {
                t1[n] = r.save();
            } catch (a) {
                T(`Tune ${r.constructor.name} save method throws an Error %o`, "warn", a);
            }
        });
        const o = window.performance.now();
        let i;
        return Promise.resolve(e).then((n)=>(i = window.performance.now(), {
                id: this.id,
                tool: this.name,
                data: n,
                tunes: t1,
                time: i - o
            })).catch((n)=>{
            T(`Saving process for ${this.name} tool failed due to the ${n}`, "log", "red");
        });
    }
    /**
   * Uses Tool's validation method to check the correctness of output data
   * Tool's validation method is optional
   *
   * @description Method returns true|false whether data passed the validation or not
   * @param {BlockToolData} data - data to validate
   * @returns {Promise<boolean>} valid
   */ async validate(e) {
        let t1 = !0;
        return this.toolInstance.validate instanceof Function && (t1 = await this.toolInstance.validate(e)), t1;
    }
    /**
   * Returns data to render in tunes menu.
   * Splits block tunes settings into 2 groups: popover items and custom html.
   */ getTunes() {
        const e = document.createElement("div"), t1 = [], o = typeof this.toolInstance.renderSettings == "function" ? this.toolInstance.renderSettings() : [], i = [
            ...this.tunesInstances.values(),
            ...this.defaultTunesInstances.values()
        ].map((n)=>n.render());
        return [
            o,
            i
        ].flat().forEach((n)=>{
            c.isElement(n) ? e.appendChild(n) : Array.isArray(n) ? t1.push(...n) : t1.push(n);
        }), [
            t1,
            e
        ];
    }
    /**
   * Update current input index with selection anchor node
   */ updateCurrentInput() {
        this.currentInput = c.isNativeInput(document.activeElement) || !b.anchorNode ? document.activeElement : b.anchorNode;
    }
    /**
   * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
   * Can be useful for block changes invisible for editor core.
   */ dispatchChange() {
        this.didMutated();
    }
    /**
   * Call Tool instance destroy method
   */ destroy() {
        this.unwatchBlockMutations(), this.removeInputEvents(), super.destroy(), M(this.toolInstance.destroy) && this.toolInstance.destroy();
    }
    /**
   * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
   * This method returns the entry that is related to the Block (depended on the Block data)
   */ async getActiveToolboxEntry() {
        const e = this.tool.toolbox;
        if (e.length === 1) return Promise.resolve(this.tool.toolbox[0]);
        const t1 = await this.data;
        return e.find((i)=>Object.entries(i.data).some(([n, r])=>t1[n] && Vt(t1[n], r)));
    }
    /**
   * Exports Block data as string using conversion config
   */ async exportDataAsString() {
        const e = await this.data;
        return eo(e, this.tool.conversionConfig);
    }
    /**
   * Make default Block wrappers and put Tool`s content there
   *
   * @returns {HTMLDivElement}
   */ compose() {
        const e = c.make("div", R.CSS.wrapper), t1 = c.make("div", R.CSS.content), o = this.toolInstance.render();
        e.dataset.id = this.id, this.toolRenderedElement = o, t1.appendChild(this.toolRenderedElement);
        let i = t1;
        return [
            ...this.tunesInstances.values(),
            ...this.defaultTunesInstances.values()
        ].forEach((n)=>{
            if (M(n.wrap)) try {
                i = n.wrap(i);
            } catch (r) {
                T(`Tune ${n.constructor.name} wrap method throws an Error %o`, "warn", r);
            }
        }), e.appendChild(i), e;
    }
    /**
   * Instantiate Block Tunes
   *
   * @param tunesData - current Block tunes data
   * @private
   */ composeTunes(e) {
        Array.from(this.tunes.values()).forEach((t1)=>{
            (t1.isInternal ? this.defaultTunesInstances : this.tunesInstances).set(t1.name, t1.create(e[t1.name], this.blockAPI));
        }), Object.entries(e).forEach(([t1, o])=>{
            this.tunesInstances.has(t1) || (this.unavailableTunesData[t1] = o);
        });
    }
    /**
   * Adds focus event listeners to all inputs and contenteditable
   */ addInputEvents() {
        this.inputs.forEach((e)=>{
            e.addEventListener("focus", this.handleFocus), c.isNativeInput(e) && e.addEventListener("input", this.didMutated);
        });
    }
    /**
   * removes focus event listeners from all inputs and contenteditable
   */ removeInputEvents() {
        this.inputs.forEach((e)=>{
            e.removeEventListener("focus", this.handleFocus), c.isNativeInput(e) && e.removeEventListener("input", this.didMutated);
        });
    }
    /**
   * Listen common editor Dom Changed event and detect mutations related to the  Block
   */ watchBlockMutations() {
        var e;
        this.redactorDomChangedCallback = (t1)=>{
            const { mutations: o } = t1;
            o.some((n)=>Qt(n, this.toolRenderedElement)) && this.didMutated(o);
        }, (e = this.editorEventBus) == null || e.on(Ae, this.redactorDomChangedCallback);
    }
    /**
   * Remove redactor dom change event listener
   */ unwatchBlockMutations() {
        var e;
        (e = this.editorEventBus) == null || e.off(Ae, this.redactorDomChangedCallback);
    }
    /**
   * Sometimes Tool can replace own main element, for example H2 -> H4 or UL -> OL
   * We need to detect such changes and update a link to tools main element with the new one
   *
   * @param mutations - records of block content mutations
   */ detectToolRootChange(e) {
        e.forEach((t1)=>{
            if (Array.from(t1.removedNodes).includes(this.toolRenderedElement)) {
                const i = t1.addedNodes[t1.addedNodes.length - 1];
                this.toolRenderedElement = i;
            }
        });
    }
    /**
   * Clears inputs cached value
   */ dropInputsCache() {
        this.cachedInputs = [];
    }
}
class oo extends y {
    constructor(){
        super(...arguments), this.insert = (e = this.config.defaultBlock, t1 = {}, o = {}, i, n, r, a)=>{
            const l = this.Editor.BlockManager.insert({
                id: a,
                tool: e,
                data: t1,
                index: i,
                needToFocus: n,
                replace: r
            });
            return new ee(l);
        }, this.composeBlockData = async (e)=>{
            const t1 = this.Editor.Tools.blockTools.get(e);
            return new R({
                tool: t1,
                api: this.Editor.API,
                readOnly: !0,
                data: {},
                tunesData: {}
            }).data;
        }, this.update = async (e, t1)=>{
            const { BlockManager: o } = this.Editor, i = o.getBlockById(e);
            if (i === void 0) throw new Error(`Block with id "${e}" not found`);
            const n = await o.update(i, t1);
            return new ee(n);
        }, this.convert = (e, t1, o)=>{
            var h, f;
            const { BlockManager: i, Tools: n } = this.Editor, r = i.getBlockById(e);
            if (!r) throw new Error(`Block with id "${e}" not found`);
            const a = n.blockTools.get(r.name), l = n.blockTools.get(t1);
            if (!l) throw new Error(`Block Tool with type "${t1}" not found`);
            const d = ((h = a == null ? void 0 : a.conversionConfig) == null ? void 0 : h.export) !== void 0, u = ((f = l.conversionConfig) == null ? void 0 : f.import) !== void 0;
            if (d && u) i.convert(r, t1, o);
            else {
                const x = [
                    d ? !1 : re(r.name),
                    u ? !1 : re(t1)
                ].filter(Boolean).join(" and ");
                throw new Error(`Conversion from "${r.name}" to "${t1}" is not possible. ${x} tool(s) should provide a "conversionConfig"`);
            }
        }, this.insertMany = (e, t1 = this.Editor.BlockManager.blocks.length - 1)=>{
            this.validateIndex(t1);
            const o = e.map(({ id: i, type: n, data: r })=>this.Editor.BlockManager.composeBlock({
                    id: i,
                    tool: n || this.config.defaultBlock,
                    data: r
                }));
            return this.Editor.BlockManager.insertMany(o, t1), o.map((i)=>new ee(i));
        };
    }
    /**
   * Available methods
   *
   * @returns {Blocks}
   */ get methods() {
        return {
            clear: ()=>this.clear(),
            render: (e)=>this.render(e),
            renderFromHTML: (e)=>this.renderFromHTML(e),
            delete: (e)=>this.delete(e),
            swap: (e, t1)=>this.swap(e, t1),
            move: (e, t1)=>this.move(e, t1),
            getBlockByIndex: (e)=>this.getBlockByIndex(e),
            getById: (e)=>this.getById(e),
            getCurrentBlockIndex: ()=>this.getCurrentBlockIndex(),
            getBlockIndex: (e)=>this.getBlockIndex(e),
            getBlocksCount: ()=>this.getBlocksCount(),
            stretchBlock: (e, t1 = !0)=>this.stretchBlock(e, t1),
            insertNewBlock: ()=>this.insertNewBlock(),
            insert: this.insert,
            insertMany: this.insertMany,
            update: this.update,
            composeBlockData: this.composeBlockData,
            convert: this.convert
        };
    }
    /**
   * Returns Blocks count
   *
   * @returns {number}
   */ getBlocksCount() {
        return this.Editor.BlockManager.blocks.length;
    }
    /**
   * Returns current block index
   *
   * @returns {number}
   */ getCurrentBlockIndex() {
        return this.Editor.BlockManager.currentBlockIndex;
    }
    /**
   * Returns the index of Block by id;
   *
   * @param id - block id
   */ getBlockIndex(e) {
        const t1 = this.Editor.BlockManager.getBlockById(e);
        if (!t1) {
            Y("There is no block with id `" + e + "`", "warn");
            return;
        }
        return this.Editor.BlockManager.getBlockIndex(t1);
    }
    /**
   * Returns BlockAPI object by Block index
   *
   * @param {number} index - index to get
   */ getBlockByIndex(e) {
        const t1 = this.Editor.BlockManager.getBlockByIndex(e);
        if (t1 === void 0) {
            Y("There is no block at index `" + e + "`", "warn");
            return;
        }
        return new ee(t1);
    }
    /**
   * Returns BlockAPI object by Block id
   *
   * @param id - id of block to get
   */ getById(e) {
        const t1 = this.Editor.BlockManager.getBlockById(e);
        return t1 === void 0 ? (Y("There is no block with id `" + e + "`", "warn"), null) : new ee(t1);
    }
    /**
   * Call Block Manager method that swap Blocks
   *
   * @param {number} fromIndex - position of first Block
   * @param {number} toIndex - position of second Block
   * @deprecated — use 'move' instead
   */ swap(e, t1) {
        T("`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead", "info"), this.Editor.BlockManager.swap(e, t1);
    }
    /**
   * Move block from one index to another
   *
   * @param {number} toIndex - index to move to
   * @param {number} fromIndex - index to move from
   */ move(e, t1) {
        this.Editor.BlockManager.move(e, t1);
    }
    /**
   * Deletes Block
   *
   * @param {number} blockIndex - index of Block to delete
   */ delete(e = this.Editor.BlockManager.currentBlockIndex) {
        try {
            const t1 = this.Editor.BlockManager.getBlockByIndex(e);
            this.Editor.BlockManager.removeBlock(t1);
        } catch (t1) {
            Y(t1, "warn");
            return;
        }
        this.Editor.BlockManager.blocks.length === 0 && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
    }
    /**
   * Clear Editor's area
   */ async clear() {
        await this.Editor.BlockManager.clear(!0), this.Editor.InlineToolbar.close();
    }
    /**
   * Fills Editor with Blocks data
   *
   * @param {OutputData} data — Saved Editor data
   */ async render(e) {
        if (e === void 0 || e.blocks === void 0) throw new Error("Incorrect data passed to the render() method");
        this.Editor.ModificationsObserver.disable(), await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(e.blocks), this.Editor.ModificationsObserver.enable();
    }
    /**
   * Render passed HTML string
   *
   * @param {string} data - HTML string to render
   * @returns {Promise<void>}
   */ renderFromHTML(e) {
        return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(e, !0);
    }
    /**
   * Stretch Block's content
   *
   * @param {number} index - index of Block to stretch
   * @param {boolean} status - true to enable, false to disable
   * @deprecated Use BlockAPI interface to stretch Blocks
   */ stretchBlock(e, t1 = !0) {
        Le(!0, "blocks.stretchBlock()", "BlockAPI");
        const o = this.Editor.BlockManager.getBlockByIndex(e);
        o && (o.stretched = t1);
    }
    /**
   * Insert new Block
   * After set caret to this Block
   *
   * @todo remove in 3.0.0
   * @deprecated with insert() method
   */ insertNewBlock() {
        T("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
    }
    /**
   * Validated block index and throws an error if it's invalid
   *
   * @param index - index to validate
   */ validateIndex(e) {
        if (typeof e != "number") throw new Error("Index should be a number");
        if (e < 0) throw new Error("Index should be greater than or equal to 0");
        if (e === null) throw new Error("Index should be greater than or equal to 0");
    }
}
class io extends y {
    constructor(){
        super(...arguments), this.setToFirstBlock = (e = this.Editor.Caret.positions.DEFAULT, t1 = 0)=>this.Editor.BlockManager.firstBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.firstBlock, e, t1), !0) : !1, this.setToLastBlock = (e = this.Editor.Caret.positions.DEFAULT, t1 = 0)=>this.Editor.BlockManager.lastBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.lastBlock, e, t1), !0) : !1, this.setToPreviousBlock = (e = this.Editor.Caret.positions.DEFAULT, t1 = 0)=>this.Editor.BlockManager.previousBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.previousBlock, e, t1), !0) : !1, this.setToNextBlock = (e = this.Editor.Caret.positions.DEFAULT, t1 = 0)=>this.Editor.BlockManager.nextBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.nextBlock, e, t1), !0) : !1, this.setToBlock = (e, t1 = this.Editor.Caret.positions.DEFAULT, o = 0)=>this.Editor.BlockManager.blocks[e] ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.blocks[e], t1, o), !0) : !1, this.focus = (e = !1)=>e ? this.setToLastBlock(this.Editor.Caret.positions.END) : this.setToFirstBlock(this.Editor.Caret.positions.START);
    }
    /**
   * Available methods
   *
   * @returns {Caret}
   */ get methods() {
        return {
            setToFirstBlock: this.setToFirstBlock,
            setToLastBlock: this.setToLastBlock,
            setToPreviousBlock: this.setToPreviousBlock,
            setToNextBlock: this.setToNextBlock,
            setToBlock: this.setToBlock,
            focus: this.focus
        };
    }
}
class no extends y {
    /**
   * Available methods
   *
   * @returns {Events}
   */ get methods() {
        return {
            emit: (e, t1)=>this.emit(e, t1),
            off: (e, t1)=>this.off(e, t1),
            on: (e, t1)=>this.on(e, t1)
        };
    }
    /**
   * Subscribe on Events
   *
   * @param {string} eventName - event name to subscribe
   * @param {Function} callback - event handler
   */ on(e, t1) {
        this.eventsDispatcher.on(e, t1);
    }
    /**
   * Emit event with data
   *
   * @param {string} eventName - event to emit
   * @param {object} data - event's data
   */ emit(e, t1) {
        this.eventsDispatcher.emit(e, t1);
    }
    /**
   * Unsubscribe from Event
   *
   * @param {string} eventName - event to unsubscribe
   * @param {Function} callback - event handler
   */ off(e, t1) {
        this.eventsDispatcher.off(e, t1);
    }
}
class He extends y {
    /**
   * Return namespace section for tool or block tune
   *
   * @param tool - tool object
   */ static getNamespace(e) {
        return e.isTune() ? `blockTunes.${e.name}` : `tools.${e.name}`;
    }
    /**
   * Return I18n API methods with global dictionary access
   */ get methods() {
        return {
            t: ()=>{
                Y("I18n.t() method can be accessed only from Tools", "warn");
            }
        };
    }
    /**
   * Return I18n API methods with tool namespaced dictionary
   *
   * @param tool - Tool object
   */ getMethodsForTool(e) {
        return Object.assign(this.methods, {
            t: (t1)=>z.t(He.getNamespace(e), t1)
        });
    }
}
class so extends y {
    /**
   * Editor.js Core API modules
   */ get methods() {
        return {
            blocks: this.Editor.BlocksAPI.methods,
            caret: this.Editor.CaretAPI.methods,
            events: this.Editor.EventsAPI.methods,
            listeners: this.Editor.ListenersAPI.methods,
            notifier: this.Editor.NotifierAPI.methods,
            sanitizer: this.Editor.SanitizerAPI.methods,
            saver: this.Editor.SaverAPI.methods,
            selection: this.Editor.SelectionAPI.methods,
            styles: this.Editor.StylesAPI.classes,
            toolbar: this.Editor.ToolbarAPI.methods,
            inlineToolbar: this.Editor.InlineToolbarAPI.methods,
            tooltip: this.Editor.TooltipAPI.methods,
            i18n: this.Editor.I18nAPI.methods,
            readOnly: this.Editor.ReadOnlyAPI.methods,
            ui: this.Editor.UiAPI.methods
        };
    }
    /**
   * Returns Editor.js Core API methods for passed tool
   *
   * @param tool - tool object
   */ getMethodsForTool(e) {
        return Object.assign(this.methods, {
            i18n: this.Editor.I18nAPI.getMethodsForTool(e)
        });
    }
}
class ro extends y {
    /**
   * Available methods
   *
   * @returns {InlineToolbar}
   */ get methods() {
        return {
            close: ()=>this.close(),
            open: ()=>this.open()
        };
    }
    /**
   * Open Inline Toolbar
   */ open() {
        this.Editor.InlineToolbar.tryToShow();
    }
    /**
   * Close Inline Toolbar
   */ close() {
        this.Editor.InlineToolbar.close();
    }
}
class ao extends y {
    /**
   * Available methods
   *
   * @returns {Listeners}
   */ get methods() {
        return {
            on: (e, t1, o, i)=>this.on(e, t1, o, i),
            off: (e, t1, o, i)=>this.off(e, t1, o, i),
            offById: (e)=>this.offById(e)
        };
    }
    /**
   * Ads a DOM event listener. Return it's id.
   *
   * @param {HTMLElement} element - Element to set handler to
   * @param {string} eventType - event type
   * @param {() => void} handler - event handler
   * @param {boolean} useCapture - capture event or not
   */ on(e, t1, o, i) {
        return this.listeners.on(e, t1, o, i);
    }
    /**
   * Removes DOM listener from element
   *
   * @param {Element} element - Element to remove handler from
   * @param eventType - event type
   * @param handler - event handler
   * @param {boolean} useCapture - capture event or not
   */ off(e, t1, o, i) {
        this.listeners.off(e, t1, o, i);
    }
    /**
   * Removes DOM listener by the listener id
   *
   * @param id - id of the listener to remove
   */ offById(e) {
        this.listeners.offById(e);
    }
}
var _e = {}, lo = {
    get exports () {
        return _e;
    },
    set exports (s){
        _e = s;
    }
};
(function(s1, e) {
    (function(t1, o) {
        s1.exports = o();
    })(window, function() {
        return function(t1) {
            var o = {};
            function i(n) {
                if (o[n]) return o[n].exports;
                var r = o[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return t1[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
            }
            return i.m = t1, i.c = o, i.d = function(n, r, a) {
                i.o(n, r) || Object.defineProperty(n, r, {
                    enumerable: !0,
                    get: a
                });
            }, i.r = function(n) {
                typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(n, "__esModule", {
                    value: !0
                });
            }, i.t = function(n, r) {
                if (1 & r && (n = i(n)), 8 & r || 4 & r && typeof n == "object" && n && n.__esModule) return n;
                var a = /* @__PURE__ */ Object.create(null);
                if (i.r(a), Object.defineProperty(a, "default", {
                    enumerable: !0,
                    value: n
                }), 2 & r && typeof n != "string") for(var l in n)i.d(a, l, (function(d) {
                    return n[d];
                }).bind(null, l));
                return a;
            }, i.n = function(n) {
                var r = n && n.__esModule ? function() {
                    return n.default;
                } : function() {
                    return n;
                };
                return i.d(r, "a", r), r;
            }, i.o = function(n, r) {
                return Object.prototype.hasOwnProperty.call(n, r);
            }, i.p = "/", i(i.s = 0);
        }([
            function(t1, o, i) {
                i(1), /*!
       * Codex JavaScript Notification module
       * https://github.com/codex-team/js-notifier
       */ t1.exports = function() {
                    var n = i(6), r = "cdx-notify--bounce-in", a = null;
                    return {
                        show: function(l) {
                            if (l.message) {
                                (function() {
                                    if (a) return !0;
                                    a = n.getWrapper(), document.body.appendChild(a);
                                })();
                                var d = null, u = l.time || 8e3;
                                switch(l.type){
                                    case "confirm":
                                        d = n.confirm(l);
                                        break;
                                    case "prompt":
                                        d = n.prompt(l);
                                        break;
                                    default:
                                        d = n.alert(l), window.setTimeout(function() {
                                            d.remove();
                                        }, u);
                                }
                                a.appendChild(d), d.classList.add(r);
                            }
                        }
                    };
                }();
            },
            function(t1, o, i) {
                var n = i(2);
                typeof n == "string" && (n = [
                    [
                        t1.i,
                        n,
                        ""
                    ]
                ]);
                var r = {
                    hmr: !0,
                    transform: void 0,
                    insertInto: void 0
                };
                i(4)(n, r), n.locals && (t1.exports = n.locals);
            },
            function(t1, o, i) {
                (t1.exports = i(3)(!1)).push([
                    t1.i,
                    `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`,
                    ""
                ]);
            },
            function(t1, o) {
                t1.exports = function(i) {
                    var n = [];
                    return n.toString = function() {
                        return this.map(function(r) {
                            var a = function(l, d) {
                                var u = l[1] || "", h = l[3];
                                if (!h) return u;
                                if (d && typeof btoa == "function") {
                                    var f = (p = h, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(p)))) + " */"), x = h.sources.map(function(m) {
                                        return "/*# sourceURL=" + h.sourceRoot + m + " */";
                                    });
                                    return [
                                        u
                                    ].concat(x).concat([
                                        f
                                    ]).join(`
`);
                                }
                                var p;
                                return [
                                    u
                                ].join(`
`);
                            }(r, i);
                            return r[2] ? "@media " + r[2] + "{" + a + "}" : a;
                        }).join("");
                    }, n.i = function(r, a) {
                        typeof r == "string" && (r = [
                            [
                                null,
                                r,
                                ""
                            ]
                        ]);
                        for(var l = {}, d = 0; d < this.length; d++){
                            var u = this[d][0];
                            typeof u == "number" && (l[u] = !0);
                        }
                        for(d = 0; d < r.length; d++){
                            var h = r[d];
                            typeof h[0] == "number" && l[h[0]] || (a && !h[2] ? h[2] = a : a && (h[2] = "(" + h[2] + ") and (" + a + ")"), n.push(h));
                        }
                    }, n;
                };
            },
            function(t1, o, i) {
                var n, r, a = {}, l = (n = function() {
                    return window && document && document.all && !window.atob;
                }, function() {
                    return r === void 0 && (r = n.apply(this, arguments)), r;
                }), d = function(k) {
                    var g = {};
                    return function(w) {
                        if (typeof w == "function") return w();
                        if (g[w] === void 0) {
                            var E = (function(I) {
                                return document.querySelector(I);
                            }).call(this, w);
                            if (window.HTMLIFrameElement && E instanceof window.HTMLIFrameElement) try {
                                E = E.contentDocument.head;
                            } catch  {
                                E = null;
                            }
                            g[w] = E;
                        }
                        return g[w];
                    };
                }(), u = null, h = 0, f = [], x = i(5);
                function p(k, g) {
                    for(var w = 0; w < k.length; w++){
                        var E = k[w], I = a[E.id];
                        if (I) {
                            I.refs++;
                            for(var C = 0; C < I.parts.length; C++)I.parts[C](E.parts[C]);
                            for(; C < E.parts.length; C++)I.parts.push(H(E.parts[C], g));
                        } else {
                            var O = [];
                            for(C = 0; C < E.parts.length; C++)O.push(H(E.parts[C], g));
                            a[E.id] = {
                                id: E.id,
                                refs: 1,
                                parts: O
                            };
                        }
                    }
                }
                function m(k, g) {
                    for(var w = [], E = {}, I = 0; I < k.length; I++){
                        var C = k[I], O = g.base ? C[0] + g.base : C[0], B = {
                            css: C[1],
                            media: C[2],
                            sourceMap: C[3]
                        };
                        E[O] ? E[O].parts.push(B) : w.push(E[O] = {
                            id: O,
                            parts: [
                                B
                            ]
                        });
                    }
                    return w;
                }
                function L(k, g) {
                    var w = d(k.insertInto);
                    if (!w) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                    var E = f[f.length - 1];
                    if (k.insertAt === "top") E ? E.nextSibling ? w.insertBefore(g, E.nextSibling) : w.appendChild(g) : w.insertBefore(g, w.firstChild), f.push(g);
                    else if (k.insertAt === "bottom") w.appendChild(g);
                    else {
                        if (typeof k.insertAt != "object" || !k.insertAt.before) throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
                        var I = d(k.insertInto + " " + k.insertAt.before);
                        w.insertBefore(g, I);
                    }
                }
                function A(k) {
                    if (k.parentNode === null) return !1;
                    k.parentNode.removeChild(k);
                    var g = f.indexOf(k);
                    g >= 0 && f.splice(g, 1);
                }
                function S(k) {
                    var g = document.createElement("style");
                    return k.attrs.type === void 0 && (k.attrs.type = "text/css"), Z(g, k.attrs), L(k, g), g;
                }
                function Z(k, g) {
                    Object.keys(g).forEach(function(w) {
                        k.setAttribute(w, g[w]);
                    });
                }
                function H(k, g) {
                    var w, E, I, C;
                    if (g.transform && k.css) {
                        if (!(C = g.transform(k.css))) return function() {};
                        k.css = C;
                    }
                    if (g.singleton) {
                        var O = h++;
                        w = u || (u = S(g)), E = ce.bind(null, w, O, !1), I = ce.bind(null, w, O, !0);
                    } else k.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (w = function(B) {
                        var j = document.createElement("link");
                        return B.attrs.type === void 0 && (B.attrs.type = "text/css"), B.attrs.rel = "stylesheet", Z(j, B.attrs), L(B, j), j;
                    }(g), E = (function(B, j, de) {
                        var Q = de.css, Ce = de.sourceMap, Ot = j.convertToAbsoluteUrls === void 0 && Ce;
                        (j.convertToAbsoluteUrls || Ot) && (Q = x(Q)), Ce && (Q += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(Ce)))) + " */");
                        var Nt = new Blob([
                            Q
                        ], {
                            type: "text/css"
                        }), Ge = B.href;
                        B.href = URL.createObjectURL(Nt), Ge && URL.revokeObjectURL(Ge);
                    }).bind(null, w, g), I = function() {
                        A(w), w.href && URL.revokeObjectURL(w.href);
                    }) : (w = S(g), E = (function(B, j) {
                        var de = j.css, Q = j.media;
                        if (Q && B.setAttribute("media", Q), B.styleSheet) B.styleSheet.cssText = de;
                        else {
                            for(; B.firstChild;)B.removeChild(B.firstChild);
                            B.appendChild(document.createTextNode(de));
                        }
                    }).bind(null, w), I = function() {
                        A(w);
                    });
                    return E(k), function(B) {
                        if (B) {
                            if (B.css === k.css && B.media === k.media && B.sourceMap === k.sourceMap) return;
                            E(k = B);
                        } else I();
                    };
                }
                t1.exports = function(k, g) {
                    if (typeof DEBUG < "u" && DEBUG && typeof document != "object") throw new Error("The style-loader cannot be used in a non-browser environment");
                    (g = g || {}).attrs = typeof g.attrs == "object" ? g.attrs : {}, g.singleton || typeof g.singleton == "boolean" || (g.singleton = l()), g.insertInto || (g.insertInto = "head"), g.insertAt || (g.insertAt = "bottom");
                    var w = m(k, g);
                    return p(w, g), function(E) {
                        for(var I = [], C = 0; C < w.length; C++){
                            var O = w[C];
                            (B = a[O.id]).refs--, I.push(B);
                        }
                        for(E && p(m(E, g), g), C = 0; C < I.length; C++){
                            var B;
                            if ((B = I[C]).refs === 0) {
                                for(var j = 0; j < B.parts.length; j++)B.parts[j]();
                                delete a[B.id];
                            }
                        }
                    };
                };
                var U, J = (U = [], function(k, g) {
                    return U[k] = g, U.filter(Boolean).join(`
`);
                });
                function ce(k, g, w, E) {
                    var I = w ? "" : E.css;
                    if (k.styleSheet) k.styleSheet.cssText = J(g, I);
                    else {
                        var C = document.createTextNode(I), O = k.childNodes;
                        O[g] && k.removeChild(O[g]), O.length ? k.insertBefore(C, O[g]) : k.appendChild(C);
                    }
                }
            },
            function(t1, o) {
                t1.exports = function(i) {
                    var n = typeof window < "u" && window.location;
                    if (!n) throw new Error("fixUrls requires window.location");
                    if (!i || typeof i != "string") return i;
                    var r = n.protocol + "//" + n.host, a = r + n.pathname.replace(/\/[^\/]*$/, "/");
                    return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(l, d) {
                        var u, h = d.trim().replace(/^"(.*)"$/, function(f, x) {
                            return x;
                        }).replace(/^'(.*)'$/, function(f, x) {
                            return x;
                        });
                        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(h) ? l : (u = h.indexOf("//") === 0 ? h : h.indexOf("/") === 0 ? r + h : a + h.replace(/^\.\//, ""), "url(" + JSON.stringify(u) + ")");
                    });
                };
            },
            function(t1, o, i) {
                var n, r, a, l, d, u, h, f, x;
                t1.exports = (n = "cdx-notifies", r = "cdx-notify", a = "cdx-notify__cross", l = "cdx-notify__button--confirm", d = "cdx-notify__button--cancel", u = "cdx-notify__input", h = "cdx-notify__button", f = "cdx-notify__btns-wrapper", {
                    alert: x = function(p) {
                        var m = document.createElement("DIV"), L = document.createElement("DIV"), A = p.message, S = p.style;
                        return m.classList.add(r), S && m.classList.add(r + "--" + S), m.innerHTML = A, L.classList.add(a), L.addEventListener("click", m.remove.bind(m)), m.appendChild(L), m;
                    },
                    confirm: function(p) {
                        var m = x(p), L = document.createElement("div"), A = document.createElement("button"), S = document.createElement("button"), Z = m.querySelector("." + a), H = p.cancelHandler, U = p.okHandler;
                        return L.classList.add(f), A.innerHTML = p.okText || "Confirm", S.innerHTML = p.cancelText || "Cancel", A.classList.add(h), S.classList.add(h), A.classList.add(l), S.classList.add(d), H && typeof H == "function" && (S.addEventListener("click", H), Z.addEventListener("click", H)), U && typeof U == "function" && A.addEventListener("click", U), A.addEventListener("click", m.remove.bind(m)), S.addEventListener("click", m.remove.bind(m)), L.appendChild(A), L.appendChild(S), m.appendChild(L), m;
                    },
                    prompt: function(p) {
                        var m = x(p), L = document.createElement("div"), A = document.createElement("button"), S = document.createElement("input"), Z = m.querySelector("." + a), H = p.cancelHandler, U = p.okHandler;
                        return L.classList.add(f), A.innerHTML = p.okText || "Ok", A.classList.add(h), A.classList.add(l), S.classList.add(u), p.placeholder && S.setAttribute("placeholder", p.placeholder), p.default && (S.value = p.default), p.inputType && (S.type = p.inputType), H && typeof H == "function" && Z.addEventListener("click", H), U && typeof U == "function" && A.addEventListener("click", function() {
                            U(S.value);
                        }), A.addEventListener("click", m.remove.bind(m)), L.appendChild(S), L.appendChild(A), m.appendChild(L), m;
                    },
                    getWrapper: function() {
                        var p = document.createElement("DIV");
                        return p.classList.add(n), p;
                    }
                });
            }
        ]);
    });
})(lo);
const co = /* @__PURE__ */ Pe(_e);
class ho {
    /**
   * Show web notification
   *
   * @param {NotifierOptions | ConfirmNotifierOptions | PromptNotifierOptions} options - notification options
   */ show(e) {
        co.show(e);
    }
}
class uo extends y {
    /**
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */ constructor({ config: e, eventsDispatcher: t1 }){
        super({
            config: e,
            eventsDispatcher: t1
        }), this.notifier = new ho();
    }
    /**
   * Available methods
   */ get methods() {
        return {
            show: (e)=>this.show(e)
        };
    }
    /**
   * Show notification
   *
   * @param {NotifierOptions} options - message option
   */ show(e) {
        return this.notifier.show(e);
    }
}
class po extends y {
    /**
   * Available methods
   */ get methods() {
        const e = ()=>this.isEnabled;
        return {
            toggle: (t1)=>this.toggle(t1),
            get isEnabled () {
                return e();
            }
        };
    }
    /**
   * Set or toggle read-only state
   *
   * @param {boolean|undefined} state - set or toggle state
   * @returns {boolean} current value
   */ toggle(e) {
        return this.Editor.ReadOnly.toggle(e);
    }
    /**
   * Returns current read-only state
   */ get isEnabled() {
        return this.Editor.ReadOnly.isEnabled;
    }
}
var Oe = {}, fo = {
    get exports () {
        return Oe;
    },
    set exports (s){
        Oe = s;
    }
};
(function(s1, e) {
    (function(t1, o) {
        s1.exports = o();
    })(Rt, function() {
        function t1(h) {
            var f = h.tags, x = Object.keys(f), p = x.map(function(m) {
                return typeof f[m];
            }).every(function(m) {
                return m === "object" || m === "boolean" || m === "function";
            });
            if (!p) throw new Error("The configuration was invalid");
            this.config = h;
        }
        var o = [
            "P",
            "LI",
            "TD",
            "TH",
            "DIV",
            "H1",
            "H2",
            "H3",
            "H4",
            "H5",
            "H6",
            "PRE"
        ];
        function i(h) {
            return o.indexOf(h.nodeName) !== -1;
        }
        var n = [
            "A",
            "B",
            "STRONG",
            "I",
            "EM",
            "SUB",
            "SUP",
            "U",
            "STRIKE"
        ];
        function r(h) {
            return n.indexOf(h.nodeName) !== -1;
        }
        t1.prototype.clean = function(h) {
            const f = document.implementation.createHTMLDocument(), x = f.createElement("div");
            return x.innerHTML = h, this._sanitize(f, x), x.innerHTML;
        }, t1.prototype._sanitize = function(h, f) {
            var x = a(h, f), p = x.firstChild();
            if (p) do {
                if (p.nodeType === Node.TEXT_NODE) {
                    if (p.data.trim() === "" && (p.previousElementSibling && i(p.previousElementSibling) || p.nextElementSibling && i(p.nextElementSibling))) {
                        f.removeChild(p), this._sanitize(h, f);
                        break;
                    } else continue;
                }
                if (p.nodeType === Node.COMMENT_NODE) {
                    f.removeChild(p), this._sanitize(h, f);
                    break;
                }
                var m = r(p), L;
                m && (L = Array.prototype.some.call(p.childNodes, i));
                var A = !!f.parentNode, S = i(f) && i(p) && A, Z = p.nodeName.toLowerCase(), H = l(this.config, Z, p), U = m && L;
                if (U || d(p, H) || !this.config.keepNestedBlockElements && S) {
                    if (!(p.nodeName === "SCRIPT" || p.nodeName === "STYLE")) for(; p.childNodes.length > 0;)f.insertBefore(p.childNodes[0], p);
                    f.removeChild(p), this._sanitize(h, f);
                    break;
                }
                for(var J = 0; J < p.attributes.length; J += 1){
                    var ce = p.attributes[J];
                    u(ce, H, p) && (p.removeAttribute(ce.name), J = J - 1);
                }
                this._sanitize(h, p);
            }while (p = x.nextSibling());
        };
        function a(h, f) {
            return h.createTreeWalker(f, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT, null, !1);
        }
        function l(h, f, x) {
            return typeof h.tags[f] == "function" ? h.tags[f](x) : h.tags[f];
        }
        function d(h, f) {
            return typeof f > "u" ? !0 : typeof f == "boolean" ? !f : !1;
        }
        function u(h, f, x) {
            var p = h.name.toLowerCase();
            return f === !0 ? !1 : typeof f[p] == "function" ? !f[p](h.value, x) : typeof f[p] > "u" || f[p] === !1 ? !0 : typeof f[p] == "string" ? f[p] !== h.value : !1;
        }
        return t1;
    });
})(fo);
const go = Oe;
function bt(s1, e) {
    return s1.map((t1)=>{
        const o = M(e) ? e(t1.tool) : e;
        return W(o) || (t1.data = ze(t1.data, o)), t1;
    });
}
function V(s1, e = {}) {
    const t1 = {
        tags: e
    };
    return new go(t1).clean(s1);
}
function ze(s1, e) {
    return Array.isArray(s1) ? bo(s1, e) : D(s1) ? mo(s1, e) : G(s1) ? ko(s1, e) : s1;
}
function bo(s1, e) {
    return s1.map((t1)=>ze(t1, e));
}
function mo(s1, e) {
    const t1 = {};
    for(const o in s1){
        if (!Object.prototype.hasOwnProperty.call(s1, o)) continue;
        const i = s1[o], n = vo(e[o]) ? e[o] : e;
        t1[o] = ze(i, n);
    }
    return t1;
}
function ko(s1, e) {
    return D(e) ? V(s1, e) : e === !1 ? V(s1, {}) : s1;
}
function vo(s1) {
    return D(s1) || Ht(s1) || M(s1);
}
class xo extends y {
    /**
   * Available methods
   *
   * @returns {SanitizerConfig}
   */ get methods() {
        return {
            clean: (e, t1)=>this.clean(e, t1)
        };
    }
    /**
   * Perform sanitizing of a string
   *
   * @param {string} taintString - what to sanitize
   * @param {SanitizerConfig} config - sanitizer config
   * @returns {string}
   */ clean(e, t1) {
        return V(e, t1);
    }
}
class wo extends y {
    /**
   * Available methods
   *
   * @returns {Saver}
   */ get methods() {
        return {
            save: ()=>this.save()
        };
    }
    /**
   * Return Editor's data
   *
   * @returns {OutputData}
   */ save() {
        const e = "Editor's content can not be saved in read-only mode";
        return this.Editor.ReadOnly.isEnabled ? (Y(e, "warn"), Promise.reject(new Error(e))) : this.Editor.Saver.save();
    }
}
class yo extends y {
    /**
   * Available methods
   *
   * @returns {SelectionAPIInterface}
   */ get methods() {
        return {
            findParentTag: (e, t1)=>this.findParentTag(e, t1),
            expandToTag: (e)=>this.expandToTag(e)
        };
    }
    /**
   * Looks ahead from selection and find passed tag with class name
   *
   * @param {string} tagName - tag to find
   * @param {string} className - tag's class name
   * @returns {HTMLElement|null}
   */ findParentTag(e, t1) {
        return new b().findParentTag(e, t1);
    }
    /**
   * Expand selection to passed tag
   *
   * @param {HTMLElement} node - tag that should contain selection
   */ expandToTag(e) {
        new b().expandToTag(e);
    }
}
class Eo extends y {
    /**
   * Exported classes
   */ get classes() {
        return {
            /**
       * Base Block styles
       */ block: "cdx-block",
            /**
       * Inline Tools styles
       */ inlineToolButton: "ce-inline-tool",
            inlineToolButtonActive: "ce-inline-tool--active",
            /**
       * UI elements
       */ input: "cdx-input",
            loader: "cdx-loader",
            button: "cdx-button",
            /**
       * Settings styles
       */ settingsButton: "cdx-settings-button",
            settingsButtonActive: "cdx-settings-button--active"
        };
    }
}
class Bo extends y {
    /**
   * Available methods
   *
   * @returns {Toolbar}
   */ get methods() {
        return {
            close: ()=>this.close(),
            open: ()=>this.open(),
            toggleBlockSettings: (e)=>this.toggleBlockSettings(e),
            toggleToolbox: (e)=>this.toggleToolbox(e)
        };
    }
    /**
   * Open toolbar
   */ open() {
        this.Editor.Toolbar.moveAndOpen();
    }
    /**
   * Close toolbar and all included elements
   */ close() {
        this.Editor.Toolbar.close();
    }
    /**
   * Toggles Block Setting of the current block
   *
   * @param {boolean} openingState —  opening state of Block Setting
   */ toggleBlockSettings(e) {
        if (this.Editor.BlockManager.currentBlockIndex === -1) {
            Y("Could't toggle the Toolbar because there is no block selected ", "warn");
            return;
        }
        e ?? !this.Editor.BlockSettings.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close();
    }
    /**
   * Open toolbox
   *
   * @param {boolean} openingState - Opening state of toolbox
   */ toggleToolbox(e) {
        if (this.Editor.BlockManager.currentBlockIndex === -1) {
            Y("Could't toggle the Toolbox because there is no block selected ", "warn");
            return;
        }
        e ?? !this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open()) : this.Editor.Toolbar.toolbox.close();
    }
}
var Ne = {}, Co = {
    get exports () {
        return Ne;
    },
    set exports (s){
        Ne = s;
    }
};
/*!
 * CodeX.Tooltips
 * 
 * @version 1.0.5
 * 
 * @licence MIT
 * @author CodeX <https://codex.so>
 * 
 * 
 */ (function(s1, e) {
    (function(t1, o) {
        s1.exports = o();
    })(window, function() {
        return function(t1) {
            var o = {};
            function i(n) {
                if (o[n]) return o[n].exports;
                var r = o[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return t1[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
            }
            return i.m = t1, i.c = o, i.d = function(n, r, a) {
                i.o(n, r) || Object.defineProperty(n, r, {
                    enumerable: !0,
                    get: a
                });
            }, i.r = function(n) {
                typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(n, "__esModule", {
                    value: !0
                });
            }, i.t = function(n, r) {
                if (1 & r && (n = i(n)), 8 & r || 4 & r && typeof n == "object" && n && n.__esModule) return n;
                var a = /* @__PURE__ */ Object.create(null);
                if (i.r(a), Object.defineProperty(a, "default", {
                    enumerable: !0,
                    value: n
                }), 2 & r && typeof n != "string") for(var l in n)i.d(a, l, (function(d) {
                    return n[d];
                }).bind(null, l));
                return a;
            }, i.n = function(n) {
                var r = n && n.__esModule ? function() {
                    return n.default;
                } : function() {
                    return n;
                };
                return i.d(r, "a", r), r;
            }, i.o = function(n, r) {
                return Object.prototype.hasOwnProperty.call(n, r);
            }, i.p = "", i(i.s = 0);
        }([
            function(t1, o, i) {
                t1.exports = i(1);
            },
            function(t1, o, i) {
                i.r(o), i.d(o, "default", function() {
                    return n;
                });
                class n {
                    constructor(){
                        this.nodes = {
                            wrapper: null,
                            content: null
                        }, this.showed = !1, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = ()=>{
                            this.showed && this.hide(!0);
                        }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, {
                            passive: !0
                        });
                    }
                    get CSS() {
                        return {
                            tooltip: "ct",
                            tooltipContent: "ct__content",
                            tooltipShown: "ct--shown",
                            placement: {
                                left: "ct--left",
                                bottom: "ct--bottom",
                                right: "ct--right",
                                top: "ct--top"
                            }
                        };
                    }
                    show(a, l, d) {
                        this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
                        const u = Object.assign({
                            placement: "bottom",
                            marginTop: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            delay: 70,
                            hidingDelay: 0
                        }, d);
                        if (u.hidingDelay && (this.hidingDelay = u.hidingDelay), this.nodes.content.innerHTML = "", typeof l == "string") this.nodes.content.appendChild(document.createTextNode(l));
                        else {
                            if (!(l instanceof Node)) throw Error("[CodeX Tooltip] Wrong type of \xabcontent\xbb passed. It should be an instance of Node or String. But " + typeof l + " given.");
                            this.nodes.content.appendChild(l);
                        }
                        switch(this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), u.placement){
                            case "top":
                                this.placeTop(a, u);
                                break;
                            case "left":
                                this.placeLeft(a, u);
                                break;
                            case "right":
                                this.placeRight(a, u);
                                break;
                            case "bottom":
                            default:
                                this.placeBottom(a, u);
                        }
                        u && u.delay ? this.showingTimeout = setTimeout(()=>{
                            this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0;
                        }, u.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0);
                    }
                    hide(a = !1) {
                        if (this.hidingDelay && !a) return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(()=>{
                            this.hide(!0);
                        }, this.hidingDelay));
                        this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = !1, this.showingTimeout && clearTimeout(this.showingTimeout);
                    }
                    onHover(a, l, d) {
                        a.addEventListener("mouseenter", ()=>{
                            this.show(a, l, d);
                        }), a.addEventListener("mouseleave", ()=>{
                            this.hide();
                        });
                    }
                    destroy() {
                        this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
                    }
                    prepare() {
                        this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
                    }
                    loadStyles() {
                        const a = "codex-tooltips-style";
                        if (document.getElementById(a)) return;
                        const l = i(2), d = this.make("style", null, {
                            textContent: l.toString(),
                            id: a
                        });
                        this.prepend(document.head, d);
                    }
                    placeBottom(a, l) {
                        const d = a.getBoundingClientRect(), u = d.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h = d.bottom + window.pageYOffset + this.offsetTop + l.marginTop;
                        this.applyPlacement("bottom", u, h);
                    }
                    placeTop(a, l) {
                        const d = a.getBoundingClientRect(), u = d.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h = d.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
                        this.applyPlacement("top", u, h);
                    }
                    placeLeft(a, l) {
                        const d = a.getBoundingClientRect(), u = d.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - l.marginLeft, h = d.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
                        this.applyPlacement("left", u, h);
                    }
                    placeRight(a, l) {
                        const d = a.getBoundingClientRect(), u = d.right + this.offsetRight + l.marginRight, h = d.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
                        this.applyPlacement("right", u, h);
                    }
                    applyPlacement(a, l, d) {
                        this.nodes.wrapper.classList.add(this.CSS.placement[a]), this.nodes.wrapper.style.left = l + "px", this.nodes.wrapper.style.top = d + "px";
                    }
                    make(a, l = null, d = {}) {
                        const u = document.createElement(a);
                        Array.isArray(l) ? u.classList.add(...l) : l && u.classList.add(l);
                        for(const h in d)d.hasOwnProperty(h) && (u[h] = d[h]);
                        return u;
                    }
                    append(a, l) {
                        Array.isArray(l) ? l.forEach((d)=>a.appendChild(d)) : a.appendChild(l);
                    }
                    prepend(a, l) {
                        Array.isArray(l) ? (l = l.reverse()).forEach((d)=>a.prepend(d)) : a.prepend(l);
                    }
                }
            },
            function(t1, o) {
                t1.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
            }
        ]).default;
    });
})(Co);
const To = /* @__PURE__ */ Pe(Ne);
let F = null;
function Ue() {
    F || (F = new To());
}
function So(s1, e, t1) {
    Ue(), F == null || F.show(s1, e, t1);
}
function Re(s1 = !1) {
    Ue(), F == null || F.hide(s1);
}
function ge(s1, e, t1) {
    Ue(), F == null || F.onHover(s1, e, t1);
}
function Io() {
    F == null || F.destroy(), F = null;
}
class Mo extends y {
    /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */ constructor({ config: e, eventsDispatcher: t1 }){
        super({
            config: e,
            eventsDispatcher: t1
        });
    }
    /**
   * Available methods
   */ get methods() {
        return {
            show: (e, t1, o)=>this.show(e, t1, o),
            hide: ()=>this.hide(),
            onHover: (e, t1, o)=>this.onHover(e, t1, o)
        };
    }
    /**
   * Method show tooltip on element with passed HTML content
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */ show(e, t1, o) {
        So(e, t1, o);
    }
    /**
   * Method hides tooltip on HTML page
   */ hide() {
        Re();
    }
    /**
   * Decorator for showing Tooltip by mouseenter/mouseleave
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */ onHover(e, t1, o) {
        ge(e, t1, o);
    }
}
class Lo extends y {
    /**
   * Available methods / getters
   */ get methods() {
        return {
            nodes: this.editorNodes
        };
    }
    /**
   * Exported classes
   */ get editorNodes() {
        return {
            /**
       * Top-level editor instance wrapper
       */ wrapper: this.Editor.UI.nodes.wrapper,
            /**
       * Element that holds all the Blocks
       */ redactor: this.Editor.UI.nodes.redactor
        };
    }
}
function mt(s1, e) {
    const t1 = {};
    return Object.entries(s1).forEach(([o, i])=>{
        if (D(i)) {
            const n = e ? `${e}.${o}` : o;
            Object.values(i).every((a)=>G(a)) ? t1[o] = n : t1[o] = mt(i, n);
            return;
        }
        t1[o] = i;
    }), t1;
}
const K = mt(ht);
function Ao(s1, e) {
    const t1 = {};
    return Object.keys(s1).forEach((o)=>{
        const i = e[o];
        i !== void 0 ? t1[i] = s1[o] : t1[o] = s1[o];
    }), t1;
}
const _o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>', kt = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>', Oo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>', No = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>', Ro = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>', Do = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>', it = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>', Po = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"/></svg>', Fo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>', Ho = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', zo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', Uo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>';
class _ {
    /**
   * Constructs popover item instance
   *
   * @param params - popover item construction params
   */ constructor(e){
        this.nodes = {
            root: null,
            icon: null
        }, this.confirmationState = null, this.removeSpecialFocusBehavior = ()=>{
            this.nodes.root.classList.remove(_.CSS.noFocus);
        }, this.removeSpecialHoverBehavior = ()=>{
            this.nodes.root.classList.remove(_.CSS.noHover);
        }, this.onErrorAnimationEnd = ()=>{
            this.nodes.icon.classList.remove(_.CSS.wobbleAnimation), this.nodes.icon.removeEventListener("animationend", this.onErrorAnimationEnd);
        }, this.params = e, this.nodes.root = this.make(e);
    }
    /**
   * True if item is disabled and hence not clickable
   */ get isDisabled() {
        return this.params.isDisabled;
    }
    /**
   * Exposes popover item toggle parameter
   */ get toggle() {
        return this.params.toggle;
    }
    /**
   * Item title
   */ get title() {
        return this.params.title;
    }
    /**
   * True if popover should close once item is activated
   */ get closeOnActivate() {
        return this.params.closeOnActivate;
    }
    /**
   * True if confirmation state is enabled for popover item
   */ get isConfirmationStateEnabled() {
        return this.confirmationState !== null;
    }
    /**
   * True if item is focused in keyboard navigation process
   */ get isFocused() {
        return this.nodes.root.classList.contains(_.CSS.focused);
    }
    /**
   * Popover item CSS classes
   */ static get CSS() {
        return {
            container: "ce-popover-item",
            title: "ce-popover-item__title",
            secondaryTitle: "ce-popover-item__secondary-title",
            icon: "ce-popover-item__icon",
            active: "ce-popover-item--active",
            disabled: "ce-popover-item--disabled",
            focused: "ce-popover-item--focused",
            hidden: "ce-popover-item--hidden",
            confirmationState: "ce-popover-item--confirmation",
            noHover: "ce-popover-item--no-hover",
            noFocus: "ce-popover-item--no-focus",
            wobbleAnimation: "wobble"
        };
    }
    /**
   * Returns popover item root element
   */ getElement() {
        return this.nodes.root;
    }
    /**
   * Called on popover item click
   */ handleClick() {
        if (this.isConfirmationStateEnabled) {
            this.activateOrEnableConfirmationMode(this.confirmationState);
            return;
        }
        this.activateOrEnableConfirmationMode(this.params);
    }
    /**
   * Toggles item active state
   *
   * @param isActive - true if item should strictly should become active
   */ toggleActive(e) {
        this.nodes.root.classList.toggle(_.CSS.active, e);
    }
    /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */ toggleHidden(e) {
        this.nodes.root.classList.toggle(_.CSS.hidden, e);
    }
    /**
   * Resets popover item to its original state
   */ reset() {
        this.isConfirmationStateEnabled && this.disableConfirmationMode();
    }
    /**
   * Method called once item becomes focused during keyboard navigation
   */ onFocus() {
        this.disableSpecialHoverAndFocusBehavior();
    }
    /**
   * Constructs HTML element corresponding to popover item params
   *
   * @param params - item construction params
   */ make(e) {
        const t1 = c.make("div", _.CSS.container);
        return e.name && (t1.dataset.itemName = e.name), this.nodes.icon = c.make("div", _.CSS.icon, {
            innerHTML: e.icon || Ro
        }), t1.appendChild(this.nodes.icon), t1.appendChild(c.make("div", _.CSS.title, {
            innerHTML: e.title || ""
        })), e.secondaryLabel && t1.appendChild(c.make("div", _.CSS.secondaryTitle, {
            textContent: e.secondaryLabel
        })), e.isActive && t1.classList.add(_.CSS.active), e.isDisabled && t1.classList.add(_.CSS.disabled), t1;
    }
    /**
   * Activates confirmation mode for the item.
   *
   * @param newState - new popover item params that should be applied
   */ enableConfirmationMode(e) {
        const t1 = {
            ...this.params,
            ...e,
            confirmation: e.confirmation
        }, o = this.make(t1);
        this.nodes.root.innerHTML = o.innerHTML, this.nodes.root.classList.add(_.CSS.confirmationState), this.confirmationState = e, this.enableSpecialHoverAndFocusBehavior();
    }
    /**
   * Returns item to its original state
   */ disableConfirmationMode() {
        const e = this.make(this.params);
        this.nodes.root.innerHTML = e.innerHTML, this.nodes.root.classList.remove(_.CSS.confirmationState), this.confirmationState = null, this.disableSpecialHoverAndFocusBehavior();
    }
    /**
   * Enables special focus and hover behavior for item in confirmation state.
   * This is needed to prevent item from being highlighted as hovered/focused just after click.
   */ enableSpecialHoverAndFocusBehavior() {
        this.nodes.root.classList.add(_.CSS.noHover), this.nodes.root.classList.add(_.CSS.noFocus), this.nodes.root.addEventListener("mouseleave", this.removeSpecialHoverBehavior, {
            once: !0
        });
    }
    /**
   * Disables special focus and hover behavior
   */ disableSpecialHoverAndFocusBehavior() {
        this.removeSpecialFocusBehavior(), this.removeSpecialHoverBehavior(), this.nodes.root.removeEventListener("mouseleave", this.removeSpecialHoverBehavior);
    }
    /**
   * Executes item's onActivate callback if the item has no confirmation configured
   *
   * @param item - item to activate or bring to confirmation mode
   */ activateOrEnableConfirmationMode(e) {
        if (e.confirmation === void 0) try {
            e.onActivate(e), this.disableConfirmationMode();
        } catch  {
            this.animateError();
        }
        else this.enableConfirmationMode(e.confirmation);
    }
    /**
   * Animates item which symbolizes that error occured while executing 'onActivate()' callback
   */ animateError() {
        this.nodes.icon.classList.contains(_.CSS.wobbleAnimation) || (this.nodes.icon.classList.add(_.CSS.wobbleAnimation), this.nodes.icon.addEventListener("animationend", this.onErrorAnimationEnd));
    }
}
const he = class {
    /**
   * @param {HTMLElement[]} nodeList — the list of iterable HTML-items
   * @param {string} focusedCssClass - user-provided CSS-class that will be set in flipping process
   */ constructor(s1, e){
        this.cursor = -1, this.items = [], this.items = s1 || [], this.focusedCssClass = e;
    }
    /**
   * Returns Focused button Node
   *
   * @returns {HTMLElement}
   */ get currentItem() {
        return this.cursor === -1 ? null : this.items[this.cursor];
    }
    /**
   * Sets cursor to specified position
   *
   * @param cursorPosition - new cursor position
   */ setCursor(s1) {
        s1 < this.items.length && s1 >= -1 && (this.dropCursor(), this.cursor = s1, this.items[this.cursor].classList.add(this.focusedCssClass));
    }
    /**
   * Sets items. Can be used when iterable items changed dynamically
   *
   * @param {HTMLElement[]} nodeList - nodes to iterate
   */ setItems(s1) {
        this.items = s1;
    }
    /**
   * Sets cursor next to the current
   */ next() {
        this.cursor = this.leafNodesAndReturnIndex(he.directions.RIGHT);
    }
    /**
   * Sets cursor before current
   */ previous() {
        this.cursor = this.leafNodesAndReturnIndex(he.directions.LEFT);
    }
    /**
   * Sets cursor to the default position and removes CSS-class from previously focused item
   */ dropCursor() {
        this.cursor !== -1 && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
    }
    /**
   * Leafs nodes inside the target list from active element
   *
   * @param {string} direction - leaf direction. Can be 'left' or 'right'
   * @returns {number} index of focused node
   */ leafNodesAndReturnIndex(s1) {
        if (this.items.length === 0) return this.cursor;
        let e = this.cursor;
        return e === -1 ? e = s1 === he.directions.RIGHT ? -1 : 0 : this.items[e].classList.remove(this.focusedCssClass), s1 === he.directions.RIGHT ? e = (e + 1) % this.items.length : e = (this.items.length + e - 1) % this.items.length, c.canSetCaret(this.items[e]) && xe(()=>b.setCursor(this.items[e]), 50)(), this.items[e].classList.add(this.focusedCssClass), e;
    }
};
let ne = he;
ne.directions = {
    RIGHT: "right",
    LEFT: "left"
};
class q {
    /**
   * @param {FlipperOptions} options - different constructing settings
   */ constructor(e){
        this.iterator = null, this.activated = !1, this.flipCallbacks = [], this.onKeyDown = (t1)=>{
            if (this.isEventReadyForHandling(t1)) switch(q.usedKeys.includes(t1.keyCode) && t1.preventDefault(), t1.keyCode){
                case v.TAB:
                    this.handleTabPress(t1);
                    break;
                case v.LEFT:
                case v.UP:
                    this.flipLeft();
                    break;
                case v.RIGHT:
                case v.DOWN:
                    this.flipRight();
                    break;
                case v.ENTER:
                    this.handleEnterPress(t1);
                    break;
            }
        }, this.iterator = new ne(e.items, e.focusedItemClass), this.activateCallback = e.activateCallback, this.allowedKeys = e.allowedKeys || q.usedKeys;
    }
    /**
   * True if flipper is currently activated
   */ get isActivated() {
        return this.activated;
    }
    /**
   * Array of keys (codes) that is handled by Flipper
   * Used to:
   *  - preventDefault only for this keys, not all keydowns (@see constructor)
   *  - to skip external behaviours only for these keys, when filler is activated (@see BlockEvents@arrowRightAndDown)
   */ static get usedKeys() {
        return [
            v.TAB,
            v.LEFT,
            v.RIGHT,
            v.ENTER,
            v.UP,
            v.DOWN
        ];
    }
    /**
   * Active tab/arrows handling by flipper
   *
   * @param items - Some modules (like, InlineToolbar, BlockSettings) might refresh buttons dynamically
   * @param cursorPosition - index of the item that should be focused once flipper is activated
   */ activate(e, t1) {
        this.activated = !0, e && this.iterator.setItems(e), t1 !== void 0 && this.iterator.setCursor(t1), document.addEventListener("keydown", this.onKeyDown, !0);
    }
    /**
   * Disable tab/arrows handling by flipper
   */ deactivate() {
        this.activated = !1, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
    }
    /**
   * Focus first item
   */ focusFirst() {
        this.dropCursor(), this.flipRight();
    }
    /**
   * Focuses previous flipper iterator item
   */ flipLeft() {
        this.iterator.previous(), this.flipCallback();
    }
    /**
   * Focuses next flipper iterator item
   */ flipRight() {
        this.iterator.next(), this.flipCallback();
    }
    /**
   * Return true if some button is focused
   */ hasFocus() {
        return !!this.iterator.currentItem;
    }
    /**
   * Registeres function that should be executed on each navigation action
   *
   * @param cb - function to execute
   */ onFlip(e) {
        this.flipCallbacks.push(e);
    }
    /**
   * Unregisteres function that is executed on each navigation action
   *
   * @param cb - function to stop executing
   */ removeOnFlip(e) {
        this.flipCallbacks = this.flipCallbacks.filter((t1)=>t1 !== e);
    }
    /**
   * Drops flipper's iterator cursor
   *
   * @see DomIterator#dropCursor
   */ dropCursor() {
        this.iterator.dropCursor();
    }
    /**
   * This function is fired before handling flipper keycodes
   * The result of this function defines if it is need to be handled or not
   *
   * @param {KeyboardEvent} event - keydown keyboard event
   * @returns {boolean}
   */ isEventReadyForHandling(e) {
        return this.activated && this.allowedKeys.includes(e.keyCode);
    }
    /**
   * When flipper is activated tab press will leaf the items
   *
   * @param {KeyboardEvent} event - tab keydown event
   */ handleTabPress(e) {
        switch(e.shiftKey ? ne.directions.LEFT : ne.directions.RIGHT){
            case ne.directions.RIGHT:
                this.flipRight();
                break;
            case ne.directions.LEFT:
                this.flipLeft();
                break;
        }
    }
    /**
   * Enter press will click current item if flipper is activated
   *
   * @param {KeyboardEvent} event - enter keydown event
   */ handleEnterPress(e) {
        this.activated && (this.iterator.currentItem && (e.stopPropagation(), e.preventDefault(), this.iterator.currentItem.click()), M(this.activateCallback) && this.activateCallback(this.iterator.currentItem));
    }
    /**
   * Fired after flipping in any direction
   */ flipCallback() {
        this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded(), this.flipCallbacks.forEach((e)=>e());
    }
}
class pe {
    /**
   * Styles
   */ static get CSS() {
        return {
            wrapper: "cdx-search-field",
            icon: "cdx-search-field__icon",
            input: "cdx-search-field__input"
        };
    }
    /**
   * @param options - available config
   * @param options.items - searchable items list
   * @param options.onSearch - search callback
   * @param options.placeholder - input placeholder
   */ constructor({ items: e, onSearch: t1, placeholder: o }){
        this.listeners = new Fe(), this.items = e, this.onSearch = t1, this.render(o);
    }
    /**
   * Returns search field element
   */ getElement() {
        return this.wrapper;
    }
    /**
   * Sets focus to the input
   */ focus() {
        this.input.focus();
    }
    /**
   * Clears search query and results
   */ clear() {
        this.input.value = "", this.searchQuery = "", this.onSearch("", this.foundItems);
    }
    /**
   * Clears memory
   */ destroy() {
        this.listeners.removeAll();
    }
    /**
   * Creates the search field
   *
   * @param placeholder - input placeholder
   */ render(e) {
        this.wrapper = c.make("div", pe.CSS.wrapper);
        const t1 = c.make("div", pe.CSS.icon, {
            innerHTML: Ho
        });
        this.input = c.make("input", pe.CSS.input, {
            placeholder: e,
            /**
       * Used to prevent focusing on the input by Tab key
       * (Popover in the Toolbar lays below the blocks,
       * so Tab in the last block will focus this hidden input if this property is not set)
       */ tabIndex: -1
        }), this.wrapper.appendChild(t1), this.wrapper.appendChild(this.input), this.listeners.on(this.input, "input", ()=>{
            this.searchQuery = this.input.value, this.onSearch(this.searchQuery, this.foundItems);
        });
    }
    /**
   * Returns list of found items for the current search query
   */ get foundItems() {
        return this.items.filter((e)=>this.checkItem(e));
    }
    /**
   * Contains logic for checking whether passed item conforms the search query
   *
   * @param item - item to be checked
   */ checkItem(e) {
        var i;
        const t1 = ((i = e.title) == null ? void 0 : i.toLowerCase()) || "", o = this.searchQuery.toLowerCase();
        return t1.includes(o);
    }
}
const ue = class {
    /**
   * Locks body element scroll
   */ lock() {
        tt ? this.lockHard() : document.body.classList.add(ue.CSS.scrollLocked);
    }
    /**
   * Unlocks body element scroll
   */ unlock() {
        tt ? this.unlockHard() : document.body.classList.remove(ue.CSS.scrollLocked);
    }
    /**
   * Locks scroll in a hard way (via setting fixed position to body element)
   */ lockHard() {
        this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty("--window-scroll-offset", `${this.scrollPosition}px`), document.body.classList.add(ue.CSS.scrollLockedHard);
    }
    /**
   * Unlocks hard scroll lock
   */ unlockHard() {
        document.body.classList.remove(ue.CSS.scrollLockedHard), this.scrollPosition !== null && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null;
    }
};
let vt = ue;
vt.CSS = {
    scrollLocked: "ce-scroll-locked",
    scrollLockedHard: "ce-scroll-locked--hard"
};
var jo = Object.defineProperty, $o = Object.getOwnPropertyDescriptor, Wo = (s1, e, t1, o)=>{
    for(var i = o > 1 ? void 0 : o ? $o(e, t1) : e, n = s1.length - 1, r; n >= 0; n--)(r = s1[n]) && (i = (o ? r(e, t1, i) : r(i)) || i);
    return o && i && jo(e, t1, i), i;
}, be = /* @__PURE__ */ ((s1)=>(s1.Close = "close", s1))(be || {});
const N = class extends Ee {
    /**
   * Constructs the instance
   *
   * @param params - popover construction params
   */ constructor(s1){
        super(), this.scopeElement = document.body, this.listeners = new Fe(), this.scrollLocker = new vt(), this.nodes = {
            wrapper: null,
            popover: null,
            nothingFoundMessage: null,
            customContent: null,
            items: null,
            overlay: null
        }, this.messages = {
            nothingFound: "Nothing found",
            search: "Search"
        }, this.onFlip = ()=>{
            this.items.find((t1)=>t1.isFocused).onFocus();
        }, this.items = s1.items.map((e)=>new _(e)), s1.scopeElement !== void 0 && (this.scopeElement = s1.scopeElement), s1.messages && (this.messages = {
            ...this.messages,
            ...s1.messages
        }), s1.customContentFlippableItems && (this.customContentFlippableItems = s1.customContentFlippableItems), this.make(), s1.customContent && this.addCustomContent(s1.customContent), s1.searchable && this.addSearch(), this.initializeFlipper();
    }
    /**
   * Popover CSS classes
   */ static get CSS() {
        return {
            popover: "ce-popover",
            popoverOpenTop: "ce-popover--open-top",
            popoverOpened: "ce-popover--opened",
            search: "ce-popover__search",
            nothingFoundMessage: "ce-popover__nothing-found-message",
            nothingFoundMessageDisplayed: "ce-popover__nothing-found-message--displayed",
            customContent: "ce-popover__custom-content",
            customContentHidden: "ce-popover__custom-content--hidden",
            items: "ce-popover__items",
            overlay: "ce-popover__overlay",
            overlayHidden: "ce-popover__overlay--hidden"
        };
    }
    /**
   * Returns HTML element corresponding to the popover
   */ getElement() {
        return this.nodes.wrapper;
    }
    /**
   * Returns true if some item inside popover is focused
   */ hasFocus() {
        return this.flipper.hasFocus();
    }
    /**
   * Open popover
   */ show() {
        this.shouldOpenBottom || (this.nodes.popover.style.setProperty("--popover-height", this.height + "px"), this.nodes.popover.classList.add(N.CSS.popoverOpenTop)), this.nodes.overlay.classList.remove(N.CSS.overlayHidden), this.nodes.popover.classList.add(N.CSS.popoverOpened), this.flipper.activate(this.flippableElements), this.search !== void 0 && requestAnimationFrame(()=>{
            var s1;
            (s1 = this.search) == null || s1.focus();
        }), te() && this.scrollLocker.lock();
    }
    /**
   * Closes popover
   */ hide() {
        this.nodes.popover.classList.remove(N.CSS.popoverOpened), this.nodes.popover.classList.remove(N.CSS.popoverOpenTop), this.nodes.overlay.classList.add(N.CSS.overlayHidden), this.flipper.deactivate(), this.items.forEach((s1)=>s1.reset()), this.search !== void 0 && this.search.clear(), te() && this.scrollLocker.unlock(), this.emit("close");
    }
    /**
   * Clears memory
   */ destroy() {
        this.flipper.deactivate(), this.listeners.removeAll(), te() && this.scrollLocker.unlock();
    }
    /**
   * Constructs HTML element corresponding to popover
   */ make() {
        this.nodes.popover = c.make("div", [
            N.CSS.popover
        ]), this.nodes.nothingFoundMessage = c.make("div", [
            N.CSS.nothingFoundMessage
        ], {
            textContent: this.messages.nothingFound
        }), this.nodes.popover.appendChild(this.nodes.nothingFoundMessage), this.nodes.items = c.make("div", [
            N.CSS.items
        ]), this.items.forEach((s1)=>{
            this.nodes.items.appendChild(s1.getElement());
        }), this.nodes.popover.appendChild(this.nodes.items), this.listeners.on(this.nodes.popover, "click", (s1)=>{
            const e = this.getTargetItem(s1);
            e !== void 0 && this.handleItemClick(e);
        }), this.nodes.wrapper = c.make("div"), this.nodes.overlay = c.make("div", [
            N.CSS.overlay,
            N.CSS.overlayHidden
        ]), this.listeners.on(this.nodes.overlay, "click", ()=>{
            this.hide();
        }), this.nodes.wrapper.appendChild(this.nodes.overlay), this.nodes.wrapper.appendChild(this.nodes.popover);
    }
    /**
   * Adds search to the popover
   */ addSearch() {
        this.search = new pe({
            items: this.items,
            placeholder: this.messages.search,
            onSearch: (e, t1)=>{
                this.items.forEach((i)=>{
                    const n = !t1.includes(i);
                    i.toggleHidden(n);
                }), this.toggleNothingFoundMessage(t1.length === 0), this.toggleCustomContent(e !== "");
                const o = e === "" ? this.flippableElements : t1.map((i)=>i.getElement());
                this.flipper.isActivated && (this.flipper.deactivate(), this.flipper.activate(o));
            }
        });
        const s1 = this.search.getElement();
        s1.classList.add(N.CSS.search), this.nodes.popover.insertBefore(s1, this.nodes.popover.firstChild);
    }
    /**
   * Adds custom html content to the popover
   *
   * @param content - html content to append
   */ addCustomContent(s1) {
        this.nodes.customContent = s1, this.nodes.customContent.classList.add(N.CSS.customContent), this.nodes.popover.insertBefore(s1, this.nodes.popover.firstChild);
    }
    /**
   * Retrieves popover item that is the target of the specified event
   *
   * @param event - event to retrieve popover item from
   */ getTargetItem(s1) {
        return this.items.find((e)=>s1.composedPath().includes(e.getElement()));
    }
    /**
   * Handles item clicks
   *
   * @param item - item to handle click of
   */ handleItemClick(s1) {
        s1.isDisabled || (this.items.filter((e)=>e !== s1).forEach((e)=>e.reset()), s1.handleClick(), this.toggleItemActivenessIfNeeded(s1), s1.closeOnActivate && this.hide());
    }
    /**
   * Creates Flipper instance which allows to navigate between popover items via keyboard
   */ initializeFlipper() {
        this.flipper = new q({
            items: this.flippableElements,
            focusedItemClass: _.CSS.focused,
            allowedKeys: [
                v.TAB,
                v.UP,
                v.DOWN,
                v.ENTER
            ]
        }), this.flipper.onFlip(this.onFlip);
    }
    /**
   * Returns list of elements available for keyboard navigation.
   * Contains both usual popover items elements and custom html content.
   */ get flippableElements() {
        const s1 = this.items.map((t1)=>t1.getElement());
        return (this.customContentFlippableItems || []).concat(s1);
    }
    get height() {
        let s1 = 0;
        if (this.nodes.popover === null) return s1;
        const e = this.nodes.popover.cloneNode(!0);
        return e.style.visibility = "hidden", e.style.position = "absolute", e.style.top = "-1000px", e.classList.add(N.CSS.popoverOpened), document.body.appendChild(e), s1 = e.offsetHeight, e.remove(), s1;
    }
    /**
   * Checks if popover should be opened bottom.
   * It should happen when there is enough space below or not enough space above
   */ get shouldOpenBottom() {
        const s1 = this.nodes.popover.getBoundingClientRect(), e = this.scopeElement.getBoundingClientRect(), t1 = this.height, o = s1.top + t1, i = s1.top - t1, n = Math.min(window.innerHeight, e.bottom);
        return i < e.top || o <= n;
    }
    /**
   * Toggles nothing found message visibility
   *
   * @param isDisplayed - true if the message should be displayed
   */ toggleNothingFoundMessage(s1) {
        this.nodes.nothingFoundMessage.classList.toggle(N.CSS.nothingFoundMessageDisplayed, s1);
    }
    /**
   * Toggles custom content visibility
   *
   * @param isDisplayed - true if custom content should be displayed
   */ toggleCustomContent(s1) {
        var e;
        (e = this.nodes.customContent) == null || e.classList.toggle(N.CSS.customContentHidden, s1);
    }
    /**
   * - Toggles item active state, if clicked popover item has property 'toggle' set to true.
   *
   * - Performs radiobutton-like behavior if the item has property 'toggle' set to string key.
   * (All the other items with the same key get inactive, and the item gets active)
   *
   * @param clickedItem - popover item that was clicked
   */ toggleItemActivenessIfNeeded(s1) {
        if (s1.toggle === !0 && s1.toggleActive(), typeof s1.toggle == "string") {
            const e = this.items.filter((t1)=>t1.toggle === s1.toggle);
            if (e.length === 1) {
                s1.toggleActive();
                return;
            }
            e.forEach((t1)=>{
                t1.toggleActive(t1 === s1);
            });
        }
    }
};
let je = N;
Wo([
    le
], je.prototype, "height", 1);
class Yo extends y {
    constructor(){
        super(...arguments), this.opened = !1, this.selection = new b(), this.onPopoverClose = ()=>{
            this.close();
        };
    }
    /**
   * Module Events
   *
   * @returns {{opened: string, closed: string}}
   */ get events() {
        return {
            opened: "block-settings-opened",
            closed: "block-settings-closed"
        };
    }
    /**
   * Block Settings CSS
   */ get CSS() {
        return {
            settings: "ce-settings"
        };
    }
    /**
   * Getter for inner popover's flipper instance
   *
   * @todo remove once BlockSettings becomes standalone non-module class
   */ get flipper() {
        var e;
        return (e = this.popover) == null ? void 0 : e.flipper;
    }
    /**
   * Panel with block settings with 2 sections:
   *  - Tool's Settings
   *  - Default Settings [Move, Remove, etc]
   */ make() {
        this.nodes.wrapper = c.make("div", [
            this.CSS.settings
        ]);
    }
    /**
   * Destroys module
   */ destroy() {
        this.removeAllNodes();
    }
    /**
   * Open Block Settings pane
   *
   * @param targetBlock - near which Block we should open BlockSettings
   */ open(e = this.Editor.BlockManager.currentBlock) {
        this.opened = !0, this.selection.save(), this.Editor.BlockSelection.selectBlock(e), this.Editor.BlockSelection.clearCache();
        const [t1, o] = e.getTunes();
        this.eventsDispatcher.emit(this.events.opened), this.popover = new je({
            searchable: !0,
            items: t1.map((i)=>this.resolveTuneAliases(i)),
            customContent: o,
            customContentFlippableItems: this.getControls(o),
            scopeElement: this.Editor.API.methods.ui.nodes.redactor,
            messages: {
                nothingFound: z.ui(K.ui.popover, "Nothing found"),
                search: z.ui(K.ui.popover, "Filter")
            }
        }), this.popover.on(be.Close, this.onPopoverClose), this.nodes.wrapper.append(this.popover.getElement()), this.popover.show();
    }
    /**
   * Returns root block settings element
   */ getElement() {
        return this.nodes.wrapper;
    }
    /**
   * Close Block Settings pane
   */ close() {
        this.opened && (this.opened = !1, b.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && this.Editor.BlockSelection.unselectBlock(this.Editor.BlockManager.currentBlock), this.eventsDispatcher.emit(this.events.closed), this.popover && (this.popover.off(be.Close, this.onPopoverClose), this.popover.destroy(), this.popover.getElement().remove(), this.popover = null));
    }
    /**
   * Returns list of buttons and inputs inside specified container
   *
   * @param container - container to query controls inside of
   */ getControls(e) {
        const { StylesAPI: t1 } = this.Editor, o = e.querySelectorAll(`.${t1.classes.settingsButton}, ${c.allInputsSelector}`);
        return Array.from(o);
    }
    /**
   * Resolves aliases in tunes menu items
   *
   * @param item - item with resolved aliases
   */ resolveTuneAliases(e) {
        const t1 = Ao(e, {
            label: "title"
        });
        return e.confirmation && (t1.confirmation = this.resolveTuneAliases(e.confirmation)), t1;
    }
}
class $ extends y {
    constructor(){
        super(...arguments), this.opened = !1, this.tools = [], this.flipper = null, this.togglingCallback = null;
    }
    /**
   * CSS getter
   */ static get CSS() {
        return {
            conversionToolbarWrapper: "ce-conversion-toolbar",
            conversionToolbarShowed: "ce-conversion-toolbar--showed",
            conversionToolbarTools: "ce-conversion-toolbar__tools",
            conversionToolbarLabel: "ce-conversion-toolbar__label",
            conversionTool: "ce-conversion-tool",
            conversionToolHidden: "ce-conversion-tool--hidden",
            conversionToolIcon: "ce-conversion-tool__icon",
            conversionToolSecondaryLabel: "ce-conversion-tool__secondary-label",
            conversionToolFocused: "ce-conversion-tool--focused",
            conversionToolActive: "ce-conversion-tool--active"
        };
    }
    /**
   * Create UI of Conversion Toolbar
   */ make() {
        this.nodes.wrapper = c.make("div", [
            $.CSS.conversionToolbarWrapper,
            ...this.isRtl ? [
                this.Editor.UI.CSS.editorRtlFix
            ] : []
        ]), this.nodes.tools = c.make("div", $.CSS.conversionToolbarTools);
        const e = c.make("div", $.CSS.conversionToolbarLabel, {
            textContent: z.ui(K.ui.inlineToolbar.converter, "Convert to")
        });
        return this.addTools(), this.enableFlipper(), c.append(this.nodes.wrapper, e), c.append(this.nodes.wrapper, this.nodes.tools), this.nodes.wrapper;
    }
    /**
   * Deactivates flipper and removes all nodes
   */ destroy() {
        this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
    }
    /**
   * Toggle conversion dropdown visibility
   *
   * @param {Function} [togglingCallback] — callback that will accept opening state
   */ toggle(e) {
        this.opened ? this.close() : this.open(), M(e) && (this.togglingCallback = e);
    }
    /**
   * Shows Conversion Toolbar
   */ open() {
        this.filterTools(), this.opened = !0, this.nodes.wrapper.classList.add($.CSS.conversionToolbarShowed), window.requestAnimationFrame(()=>{
            this.flipper.activate(this.tools.map((e)=>e.button).filter((e)=>!e.classList.contains($.CSS.conversionToolHidden))), this.flipper.focusFirst(), M(this.togglingCallback) && this.togglingCallback(!0);
        });
    }
    /**
   * Closes Conversion Toolbar
   */ close() {
        this.opened = !1, this.flipper.deactivate(), this.nodes.wrapper.classList.remove($.CSS.conversionToolbarShowed), M(this.togglingCallback) && this.togglingCallback(!1);
    }
    /**
   * Returns true if it has more than one tool available for convert in
   */ hasTools() {
        return this.tools.length === 1 ? this.tools[0].name !== this.config.defaultBlock : !0;
    }
    /**
   * Replaces one Block with another
   * For that Tools must provide import/export methods
   *
   * @param {string} replacingToolName - name of Tool which replaces current
   * @param blockDataOverrides - If this conversion fired by the one of multiple Toolbox items, extend converted data with this item's "data" overrides
   */ async replaceWithBlock(e, t1) {
        const { BlockManager: o, BlockSelection: i, InlineToolbar: n, Caret: r } = this.Editor;
        o.convert(this.Editor.BlockManager.currentBlock, e, t1), i.clearSelection(), this.close(), n.close(), window.requestAnimationFrame(()=>{
            r.setToBlock(this.Editor.BlockManager.currentBlock, r.positions.END);
        });
    }
    /**
   * Iterates existing Tools and inserts to the ConversionToolbar
   * if tools have ability to import
   */ addTools() {
        const e = this.Editor.Tools.blockTools;
        Array.from(e.entries()).forEach(([t1, o])=>{
            var n;
            const i = o.conversionConfig;
            !i || !i.import || (n = o.toolbox) == null || n.forEach((r)=>this.addToolIfValid(t1, r));
        });
    }
    /**
   * Inserts a tool to the ConversionToolbar if the tool's toolbox config is valid
   *
   * @param name - tool's name
   * @param toolboxSettings - tool's single toolbox setting
   */ addToolIfValid(e, t1) {
        W(t1) || !t1.icon || this.addTool(e, t1);
    }
    /**
   * Add tool to the Conversion Toolbar
   *
   * @param toolName - name of Tool to add
   * @param toolboxItem - tool's toolbox item data
   */ addTool(e, t1) {
        var r;
        const o = c.make("div", [
            $.CSS.conversionTool
        ]), i = c.make("div", [
            $.CSS.conversionToolIcon
        ]);
        o.dataset.tool = e, i.innerHTML = t1.icon, c.append(o, i), c.append(o, c.text(z.t(K.toolNames, t1.title || re(e))));
        const n = (r = this.Editor.Tools.blockTools.get(e)) == null ? void 0 : r.shortcut;
        if (n) {
            const a = c.make("span", $.CSS.conversionToolSecondaryLabel, {
                innerText: ye(n)
            });
            c.append(o, a);
        }
        c.append(this.nodes.tools, o), this.tools.push({
            name: e,
            button: o,
            toolboxItem: t1
        }), this.listeners.on(o, "click", async ()=>{
            await this.replaceWithBlock(e, t1.data);
        });
    }
    /**
   * Hide current Tool and show others
   */ async filterTools() {
        const { currentBlock: e } = this.Editor.BlockManager, t1 = await e.getActiveToolboxEntry();
        function o(i, n) {
            return i.icon === n.icon && i.title === n.title;
        }
        this.tools.forEach((i)=>{
            let n = !1;
            if (t1) {
                const r = o(t1, i.toolboxItem);
                n = i.button.dataset.tool === e.name && r;
            }
            i.button.hidden = n, i.button.classList.toggle($.CSS.conversionToolHidden, n);
        });
    }
    /**
   * Prepare Flipper to be able to leaf tools by arrows/tab
   */ enableFlipper() {
        this.flipper = new q({
            focusedItemClass: $.CSS.conversionToolFocused
        });
    }
}
var De = {}, Ko = {
    get exports () {
        return De;
    },
    set exports (s){
        De = s;
    }
};
/*!
 * Library for handling keyboard shortcuts
 * @copyright CodeX (https://codex.so)
 * @license MIT
 * @author CodeX (https://codex.so)
 * @version 1.2.0
 */ (function(s1, e) {
    (function(t1, o) {
        s1.exports = o();
    })(window, function() {
        return function(t1) {
            var o = {};
            function i(n) {
                if (o[n]) return o[n].exports;
                var r = o[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return t1[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
            }
            return i.m = t1, i.c = o, i.d = function(n, r, a) {
                i.o(n, r) || Object.defineProperty(n, r, {
                    enumerable: !0,
                    get: a
                });
            }, i.r = function(n) {
                typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(n, "__esModule", {
                    value: !0
                });
            }, i.t = function(n, r) {
                if (1 & r && (n = i(n)), 8 & r || 4 & r && typeof n == "object" && n && n.__esModule) return n;
                var a = /* @__PURE__ */ Object.create(null);
                if (i.r(a), Object.defineProperty(a, "default", {
                    enumerable: !0,
                    value: n
                }), 2 & r && typeof n != "string") for(var l in n)i.d(a, l, (function(d) {
                    return n[d];
                }).bind(null, l));
                return a;
            }, i.n = function(n) {
                var r = n && n.__esModule ? function() {
                    return n.default;
                } : function() {
                    return n;
                };
                return i.d(r, "a", r), r;
            }, i.o = function(n, r) {
                return Object.prototype.hasOwnProperty.call(n, r);
            }, i.p = "", i(i.s = 0);
        }([
            function(t1, o, i) {
                function n(l, d) {
                    for(var u = 0; u < d.length; u++){
                        var h = d[u];
                        h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(l, h.key, h);
                    }
                }
                function r(l, d, u) {
                    return d && n(l.prototype, d), u && n(l, u), l;
                }
                i.r(o);
                var a = function() {
                    function l(d) {
                        var u = this;
                        (function(h, f) {
                            if (!(h instanceof f)) throw new TypeError("Cannot call a class as a function");
                        })(this, l), this.commands = {}, this.keys = {}, this.name = d.name, this.parseShortcutName(d.name), this.element = d.on, this.callback = d.callback, this.executeShortcut = function(h) {
                            u.execute(h);
                        }, this.element.addEventListener("keydown", this.executeShortcut, !1);
                    }
                    return r(l, null, [
                        {
                            key: "supportedCommands",
                            get: function() {
                                return {
                                    SHIFT: [
                                        "SHIFT"
                                    ],
                                    CMD: [
                                        "CMD",
                                        "CONTROL",
                                        "COMMAND",
                                        "WINDOWS",
                                        "CTRL"
                                    ],
                                    ALT: [
                                        "ALT",
                                        "OPTION"
                                    ]
                                };
                            }
                        },
                        {
                            key: "keyCodes",
                            get: function() {
                                return {
                                    0: 48,
                                    1: 49,
                                    2: 50,
                                    3: 51,
                                    4: 52,
                                    5: 53,
                                    6: 54,
                                    7: 55,
                                    8: 56,
                                    9: 57,
                                    A: 65,
                                    B: 66,
                                    C: 67,
                                    D: 68,
                                    E: 69,
                                    F: 70,
                                    G: 71,
                                    H: 72,
                                    I: 73,
                                    J: 74,
                                    K: 75,
                                    L: 76,
                                    M: 77,
                                    N: 78,
                                    O: 79,
                                    P: 80,
                                    Q: 81,
                                    R: 82,
                                    S: 83,
                                    T: 84,
                                    U: 85,
                                    V: 86,
                                    W: 87,
                                    X: 88,
                                    Y: 89,
                                    Z: 90,
                                    BACKSPACE: 8,
                                    ENTER: 13,
                                    ESCAPE: 27,
                                    LEFT: 37,
                                    UP: 38,
                                    RIGHT: 39,
                                    DOWN: 40,
                                    INSERT: 45,
                                    DELETE: 46,
                                    ".": 190
                                };
                            }
                        }
                    ]), r(l, [
                        {
                            key: "parseShortcutName",
                            value: function(d) {
                                d = d.split("+");
                                for(var u = 0; u < d.length; u++){
                                    d[u] = d[u].toUpperCase();
                                    var h = !1;
                                    for(var f in l.supportedCommands)if (l.supportedCommands[f].includes(d[u])) {
                                        h = this.commands[f] = !0;
                                        break;
                                    }
                                    h || (this.keys[d[u]] = !0);
                                }
                                for(var x in l.supportedCommands)this.commands[x] || (this.commands[x] = !1);
                            }
                        },
                        {
                            key: "execute",
                            value: function(d) {
                                var u, h = {
                                    CMD: d.ctrlKey || d.metaKey,
                                    SHIFT: d.shiftKey,
                                    ALT: d.altKey
                                }, f = !0;
                                for(u in this.commands)this.commands[u] !== h[u] && (f = !1);
                                var x, p = !0;
                                for(x in this.keys)p = p && d.keyCode === l.keyCodes[x];
                                f && p && this.callback(d);
                            }
                        },
                        {
                            key: "remove",
                            value: function() {
                                this.element.removeEventListener("keydown", this.executeShortcut);
                            }
                        }
                    ]), l;
                }();
                o.default = a;
            }
        ]).default;
    });
})(Ko);
const Xo = /* @__PURE__ */ Pe(De);
class Vo {
    constructor(){
        this.registeredShortcuts = /* @__PURE__ */ new Map();
    }
    /**
   * Register shortcut
   *
   * @param shortcut - shortcut options
   */ add(e) {
        if (this.findShortcut(e.on, e.name)) throw Error(`Shortcut ${e.name} is already registered for ${e.on}. Please remove it before add a new handler.`);
        const o = new Xo({
            name: e.name,
            on: e.on,
            callback: e.handler
        }), i = this.registeredShortcuts.get(e.on) || [];
        this.registeredShortcuts.set(e.on, [
            ...i,
            o
        ]);
    }
    /**
   * Remove shortcut
   *
   * @param element - Element shortcut is set for
   * @param name - shortcut name
   */ remove(e, t1) {
        const o = this.findShortcut(e, t1);
        if (!o) return;
        o.remove();
        const i = this.registeredShortcuts.get(e);
        this.registeredShortcuts.set(e, i.filter((n)=>n !== o));
    }
    /**
   * Get Shortcut instance if exist
   *
   * @param element - Element shorcut is set for
   * @param shortcut - shortcut name
   * @returns {number} index - shortcut index if exist
   */ findShortcut(e, t1) {
        return (this.registeredShortcuts.get(e) || []).find(({ name: i })=>i === t1);
    }
}
const ae = new Vo();
var qo = Object.defineProperty, Zo = Object.getOwnPropertyDescriptor, xt = (s1, e, t1, o)=>{
    for(var i = o > 1 ? void 0 : o ? Zo(e, t1) : e, n = s1.length - 1, r; n >= 0; n--)(r = s1[n]) && (i = (o ? r(e, t1, i) : r(i)) || i);
    return o && i && qo(e, t1, i), i;
}, ke = /* @__PURE__ */ ((s1)=>(s1.Opened = "toolbox-opened", s1.Closed = "toolbox-closed", s1.BlockAdded = "toolbox-block-added", s1))(ke || {});
const wt = class extends Ee {
    /**
   * Toolbox constructor
   *
   * @param options - available parameters
   * @param options.api - Editor API methods
   * @param options.tools - Tools available to check whether some of them should be displayed at the Toolbox or not
   */ constructor({ api: s1, tools: e, i18nLabels: t1 }){
        super(), this.opened = !1, this.nodes = {
            toolbox: null
        }, this.onPopoverClose = ()=>{
            this.opened = !1, this.emit("toolbox-closed");
        }, this.api = s1, this.tools = e, this.i18nLabels = t1;
    }
    /**
   * Returns True if Toolbox is Empty and nothing to show
   *
   * @returns {boolean}
   */ get isEmpty() {
        return this.toolsToBeDisplayed.length === 0;
    }
    /**
   * CSS styles
   *
   * @returns {Object<string, string>}
   */ static get CSS() {
        return {
            toolbox: "ce-toolbox"
        };
    }
    /**
   * Makes the Toolbox
   */ make() {
        return this.popover = new je({
            scopeElement: this.api.ui.nodes.redactor,
            searchable: !0,
            messages: {
                nothingFound: this.i18nLabels.nothingFound,
                search: this.i18nLabels.filter
            },
            items: this.toolboxItemsToBeDisplayed
        }), this.popover.on(be.Close, this.onPopoverClose), this.enableShortcuts(), this.nodes.toolbox = this.popover.getElement(), this.nodes.toolbox.classList.add(wt.CSS.toolbox), this.nodes.toolbox;
    }
    /**
   * Returns true if the Toolbox has the Flipper activated and the Flipper has selected button
   */ hasFocus() {
        var s1;
        return (s1 = this.popover) == null ? void 0 : s1.hasFocus();
    }
    /**
   * Destroy Module
   */ destroy() {
        var s1;
        super.destroy(), this.nodes && this.nodes.toolbox && (this.nodes.toolbox.remove(), this.nodes.toolbox = null), this.removeAllShortcuts(), (s1 = this.popover) == null || s1.off(be.Close, this.onPopoverClose);
    }
    /**
   * Toolbox Tool's button click handler
   *
   * @param toolName - tool type to be activated
   * @param blockDataOverrides - Block data predefined by the activated Toolbox item
   */ toolButtonActivated(s1, e) {
        this.insertNewBlock(s1, e);
    }
    /**
   * Open Toolbox with Tools
   */ open() {
        var s1;
        this.isEmpty || ((s1 = this.popover) == null || s1.show(), this.opened = !0, this.emit("toolbox-opened"));
    }
    /**
   * Close Toolbox
   */ close() {
        var s1;
        (s1 = this.popover) == null || s1.hide(), this.opened = !1, this.emit("toolbox-closed");
    }
    /**
   * Close Toolbox
   */ toggle() {
        this.opened ? this.close() : this.open();
    }
    get toolsToBeDisplayed() {
        const s1 = [];
        return this.tools.forEach((e)=>{
            e.toolbox && s1.push(e);
        }), s1;
    }
    get toolboxItemsToBeDisplayed() {
        const s1 = (e, t1)=>({
                icon: e.icon,
                title: z.t(K.toolNames, e.title || re(t1.name)),
                name: t1.name,
                onActivate: ()=>{
                    this.toolButtonActivated(t1.name, e.data);
                },
                secondaryLabel: t1.shortcut ? ye(t1.shortcut) : ""
            });
        return this.toolsToBeDisplayed.reduce((e, t1)=>(Array.isArray(t1.toolbox) ? t1.toolbox.forEach((o)=>{
                e.push(s1(o, t1));
            }) : t1.toolbox !== void 0 && e.push(s1(t1.toolbox, t1)), e), []);
    }
    /**
   * Iterate all tools and enable theirs shortcuts if specified
   */ enableShortcuts() {
        this.toolsToBeDisplayed.forEach((s1)=>{
            const e = s1.shortcut;
            e && this.enableShortcutForTool(s1.name, e);
        });
    }
    /**
   * Enable shortcut Block Tool implemented shortcut
   *
   * @param {string} toolName - Tool name
   * @param {string} shortcut - shortcut according to the ShortcutData Module format
   */ enableShortcutForTool(s1, e) {
        ae.add({
            name: e,
            on: this.api.ui.nodes.redactor,
            handler: (t1)=>{
                t1.preventDefault();
                const o = this.api.blocks.getCurrentBlockIndex(), i = this.api.blocks.getBlockByIndex(o);
                if (i) try {
                    this.api.blocks.convert(i.id, s1), window.requestAnimationFrame(()=>{
                        this.api.caret.setToBlock(o, "end");
                    });
                    return;
                } catch  {}
                this.insertNewBlock(s1);
            }
        });
    }
    /**
   * Removes all added shortcuts
   * Fired when the Read-Only mode is activated
   */ removeAllShortcuts() {
        this.toolsToBeDisplayed.forEach((s1)=>{
            const e = s1.shortcut;
            e && ae.remove(this.api.ui.nodes.redactor, e);
        });
    }
    /**
   * Inserts new block
   * Can be called when button clicked on Toolbox or by ShortcutData
   *
   * @param {string} toolName - Tool name
   * @param blockDataOverrides - predefined Block data
   */ async insertNewBlock(s1, e) {
        const t1 = this.api.blocks.getCurrentBlockIndex(), o = this.api.blocks.getBlockByIndex(t1);
        if (!o) return;
        const i = o.isEmpty ? t1 : t1 + 1;
        let n;
        if (e) {
            const a = await this.api.blocks.composeBlockData(s1);
            n = Object.assign(a, e);
        }
        const r = this.api.blocks.insert(s1, n, void 0, i, void 0, o.isEmpty);
        r.call(X.APPEND_CALLBACK), this.api.caret.setToBlock(i), this.emit("toolbox-block-added", {
            block: r
        }), this.api.toolbar.close();
    }
};
let $e = wt;
xt([
    le
], $e.prototype, "toolsToBeDisplayed", 1);
xt([
    le
], $e.prototype, "toolboxItemsToBeDisplayed", 1);
const yt = "block hovered";
async function Go(s1, e) {
    const t1 = navigator.keyboard;
    return t1 && (await t1.getLayoutMap()).get(s1) || e;
}
class Jo extends y {
    /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */ constructor({ config: e, eventsDispatcher: t1 }){
        super({
            config: e,
            eventsDispatcher: t1
        }), this.toolboxInstance = null;
    }
    /**
   * CSS styles
   *
   * @returns {object}
   */ get CSS() {
        return {
            toolbar: "ce-toolbar",
            content: "ce-toolbar__content",
            actions: "ce-toolbar__actions",
            actionsOpened: "ce-toolbar__actions--opened",
            toolbarOpened: "ce-toolbar--opened",
            openedToolboxHolderModifier: "codex-editor--toolbox-opened",
            plusButton: "ce-toolbar__plus",
            plusButtonShortcut: "ce-toolbar__plus-shortcut",
            settingsToggler: "ce-toolbar__settings-btn",
            settingsTogglerHidden: "ce-toolbar__settings-btn--hidden"
        };
    }
    /**
   * Returns the Toolbar opening state
   *
   * @returns {boolean}
   */ get opened() {
        return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
    }
    /**
   * Public interface for accessing the Toolbox
   */ get toolbox() {
        var e;
        return {
            opened: (e = this.toolboxInstance) == null ? void 0 : e.opened,
            close: ()=>{
                var t1;
                (t1 = this.toolboxInstance) == null || t1.close();
            },
            open: ()=>{
                if (this.toolboxInstance === null) {
                    T("toolbox.open() called before initialization is finished", "warn");
                    return;
                }
                this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.open();
            },
            toggle: ()=>{
                if (this.toolboxInstance === null) {
                    T("toolbox.toggle() called before initialization is finished", "warn");
                    return;
                }
                this.toolboxInstance.toggle();
            },
            hasFocus: ()=>{
                var t1;
                return (t1 = this.toolboxInstance) == null ? void 0 : t1.hasFocus();
            }
        };
    }
    /**
   * Block actions appearance manipulations
   */ get blockActions() {
        return {
            hide: ()=>{
                this.nodes.actions.classList.remove(this.CSS.actionsOpened);
            },
            show: ()=>{
                this.nodes.actions.classList.add(this.CSS.actionsOpened);
            }
        };
    }
    /**
   * Methods for working with Block Tunes toggler
   */ get blockTunesToggler() {
        return {
            hide: ()=>this.nodes.settingsToggler.classList.add(this.CSS.settingsTogglerHidden),
            show: ()=>this.nodes.settingsToggler.classList.remove(this.CSS.settingsTogglerHidden)
        };
    }
    /**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */ toggleReadOnly(e) {
        e ? (this.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : window.requestIdleCallback(()=>{
            this.drawUI(), this.enableModuleBindings();
        }, {
            timeout: 2e3
        });
    }
    /**
   * Move Toolbar to the passed (or current) Block
   *
   * @param block - block to move Toolbar near it
   */ moveAndOpen(e = this.Editor.BlockManager.currentBlock) {
        if (this.toolboxInstance === null) {
            T("Can't open Toolbar since Editor initialization is not finished yet", "warn");
            return;
        }
        if (this.toolboxInstance.opened && this.toolboxInstance.close(), this.Editor.BlockSettings.opened && this.Editor.BlockSettings.close(), !e) return;
        this.hoveredBlock = e;
        const t1 = e.holder, { isMobile: o } = this.Editor.UI, i = e.pluginsContent, n = window.getComputedStyle(i), r = parseInt(n.paddingTop, 10), a = t1.offsetHeight;
        let l;
        o ? l = t1.offsetTop + a : l = t1.offsetTop + r, this.nodes.wrapper.style.top = `${Math.floor(l)}px`, this.Editor.BlockManager.blocks.length === 1 && e.isEmpty ? this.blockTunesToggler.hide() : this.blockTunesToggler.show(), this.open();
    }
    /**
   * Close the Toolbar
   */ close() {
        var e, t1;
        this.Editor.ReadOnly.isEnabled || ((e = this.nodes.wrapper) == null || e.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), (t1 = this.toolboxInstance) == null || t1.close(), this.Editor.BlockSettings.close(), this.reset());
    }
    /**
   * Reset the Toolbar position to prevent DOM height growth, for example after blocks deletion
   */ reset() {
        this.nodes.wrapper.style.top = "unset";
    }
    /**
   * Open Toolbar with Plus Button and Actions
   *
   * @param {boolean} withBlockActions - by default, Toolbar opens with Block Actions.
   *                                     This flag allows to open Toolbar without Actions.
   */ open(e = !0) {
        this.nodes.wrapper.classList.add(this.CSS.toolbarOpened), e ? this.blockActions.show() : this.blockActions.hide();
    }
    /**
   * Draws Toolbar elements
   */ async make() {
        this.nodes.wrapper = c.make("div", this.CSS.toolbar), [
            "content",
            "actions"
        ].forEach((n)=>{
            this.nodes[n] = c.make("div", this.CSS[n]);
        }), c.append(this.nodes.wrapper, this.nodes.content), c.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = c.make("div", this.CSS.plusButton, {
            innerHTML: Fo
        }), c.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", ()=>{
            Re(!0), this.plusButtonClicked();
        }, !1);
        const e = c.make("div");
        e.appendChild(document.createTextNode(z.ui(K.ui.toolbar.toolbox, "Add"))), e.appendChild(c.make("div", this.CSS.plusButtonShortcut, {
            textContent: "/"
        })), ge(this.nodes.plusButton, e, {
            hidingDelay: 400
        }), this.nodes.settingsToggler = c.make("span", this.CSS.settingsToggler, {
            innerHTML: Po
        }), c.append(this.nodes.actions, this.nodes.settingsToggler);
        const t1 = c.make("div"), o = c.text(z.ui(K.ui.blockTunes.toggler, "Click to tune")), i = await Go("Slash", "/");
        t1.appendChild(o), t1.appendChild(c.make("div", this.CSS.plusButtonShortcut, {
            textContent: ye(`CMD + ${i}`)
        })), ge(this.nodes.settingsToggler, t1, {
            hidingDelay: 400
        }), c.append(this.nodes.actions, this.makeToolbox()), c.append(this.nodes.actions, this.Editor.BlockSettings.getElement()), c.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
    }
    /**
   * Creates the Toolbox instance and return it's rendered element
   */ makeToolbox() {
        return this.toolboxInstance = new $e({
            api: this.Editor.API.methods,
            tools: this.Editor.Tools.blockTools,
            i18nLabels: {
                filter: z.ui(K.ui.popover, "Filter"),
                nothingFound: z.ui(K.ui.popover, "Nothing found")
            }
        }), this.toolboxInstance.on(ke.Opened, ()=>{
            this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolboxHolderModifier);
        }), this.toolboxInstance.on(ke.Closed, ()=>{
            this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolboxHolderModifier);
        }), this.toolboxInstance.on(ke.BlockAdded, ({ block: e })=>{
            const { BlockManager: t1, Caret: o } = this.Editor, i = t1.getBlockById(e.id);
            i.inputs.length === 0 && (i === t1.lastBlock ? (t1.insertAtEnd(), o.setToBlock(t1.lastBlock)) : o.setToBlock(t1.nextBlock));
        }), this.toolboxInstance.make();
    }
    /**
   * Handler for Plus Button
   */ plusButtonClicked() {
        var e;
        this.Editor.BlockManager.currentBlock = this.hoveredBlock, (e = this.toolboxInstance) == null || e.toggle();
    }
    /**
   * Enable bindings
   */ enableModuleBindings() {
        this.readOnlyMutableListeners.on(this.nodes.settingsToggler, "mousedown", (e)=>{
            var t1;
            e.stopPropagation(), this.settingsTogglerClicked(), (t1 = this.toolboxInstance) != null && t1.opened && this.toolboxInstance.close(), Re(!0);
        }, !0), te() || this.eventsDispatcher.on(yt, (e)=>{
            var t1;
            this.Editor.BlockSettings.opened || (t1 = this.toolboxInstance) != null && t1.opened || this.moveAndOpen(e.block);
        });
    }
    /**
   * Disable bindings
   */ disableModuleBindings() {
        this.readOnlyMutableListeners.clearAll();
    }
    /**
   * Clicks on the Block Settings toggler
   */ settingsTogglerClicked() {
        this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open(this.hoveredBlock);
    }
    /**
   * Draws Toolbar UI
   *
   * Toolbar contains BlockSettings and Toolbox.
   * That's why at first we draw its components and then Toolbar itself
   *
   * Steps:
   *  - Make Toolbar dependent components like BlockSettings, Toolbox and so on
   *  - Make itself and append dependent nodes to itself
   *
   */ drawUI() {
        this.Editor.BlockSettings.make(), this.make();
    }
    /**
   * Removes all created and saved HTMLElements
   * It is used in Read-Only mode
   */ destroy() {
        this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy();
    }
}
var Be = /* @__PURE__ */ ((s1)=>(s1[s1.Block = 0] = "Block", s1[s1.Inline = 1] = "Inline", s1[s1.Tune = 2] = "Tune", s1))(Be || {}), ve = /* @__PURE__ */ ((s1)=>(s1.Shortcut = "shortcut", s1.Toolbox = "toolbox", s1.EnabledInlineTools = "inlineToolbar", s1.EnabledBlockTunes = "tunes", s1.Config = "config", s1))(ve || {}), Et = /* @__PURE__ */ ((s1)=>(s1.Shortcut = "shortcut", s1.SanitizeConfig = "sanitize", s1))(Et || {}), se = /* @__PURE__ */ ((s1)=>(s1.IsEnabledLineBreaks = "enableLineBreaks", s1.Toolbox = "toolbox", s1.ConversionConfig = "conversionConfig", s1.IsReadOnlySupported = "isReadOnlySupported", s1.PasteConfig = "pasteConfig", s1))(se || {}), We = /* @__PURE__ */ ((s1)=>(s1.IsInline = "isInline", s1.Title = "title", s1))(We || {}), Bt = /* @__PURE__ */ ((s1)=>(s1.IsTune = "isTune", s1))(Bt || {});
class Ye {
    /**
   * @class
   * @param {ConstructorOptions} options - Constructor options
   */ constructor({ name: e, constructable: t1, config: o, api: i, isDefault: n, isInternal: r = !1, defaultPlaceholder: a }){
        this.api = i, this.name = e, this.constructable = t1, this.config = o, this.isDefault = n, this.isInternal = r, this.defaultPlaceholder = a;
    }
    /**
   * Returns Tool user configuration
   */ get settings() {
        const e = this.config.config || {};
        return this.isDefault && !("placeholder" in e) && this.defaultPlaceholder && (e.placeholder = this.defaultPlaceholder), e;
    }
    /**
   * Calls Tool's reset method
   */ reset() {
        if (M(this.constructable.reset)) return this.constructable.reset();
    }
    /**
   * Calls Tool's prepare method
   */ prepare() {
        if (M(this.constructable.prepare)) return this.constructable.prepare({
            toolName: this.name,
            config: this.settings
        });
    }
    /**
   * Returns shortcut for Tool (internal or specified by user)
   */ get shortcut() {
        const e = this.constructable.shortcut;
        return this.config.shortcut || e;
    }
    /**
   * Returns Tool's sanitizer configuration
   */ get sanitizeConfig() {
        return this.constructable.sanitize || {};
    }
    /**
   * Returns true if Tools is inline
   */ isInline() {
        return this.type === 1;
    }
    /**
   * Returns true if Tools is block
   */ isBlock() {
        return this.type === 0;
    }
    /**
   * Returns true if Tools is tune
   */ isTune() {
        return this.type === 2;
    }
}
class Qo extends y {
    /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */ constructor({ config: e, eventsDispatcher: t1 }){
        super({
            config: e,
            eventsDispatcher: t1
        }), this.CSS = {
            inlineToolbar: "ce-inline-toolbar",
            inlineToolbarShowed: "ce-inline-toolbar--showed",
            inlineToolbarLeftOriented: "ce-inline-toolbar--left-oriented",
            inlineToolbarRightOriented: "ce-inline-toolbar--right-oriented",
            inlineToolbarShortcut: "ce-inline-toolbar__shortcut",
            buttonsWrapper: "ce-inline-toolbar__buttons",
            actionsWrapper: "ce-inline-toolbar__actions",
            inlineToolButton: "ce-inline-tool",
            inputField: "cdx-input",
            focusedButton: "ce-inline-tool--focused",
            conversionToggler: "ce-inline-toolbar__dropdown",
            conversionTogglerArrow: "ce-inline-toolbar__dropdown-arrow",
            conversionTogglerHidden: "ce-inline-toolbar__dropdown--hidden",
            conversionTogglerContent: "ce-inline-toolbar__dropdown-content",
            togglerAndButtonsWrapper: "ce-inline-toolbar__toggler-and-button-wrapper"
        }, this.opened = !1, this.toolbarVerticalMargin = te() ? 20 : 6, this.buttonsList = null, this.width = 0, this.flipper = null;
    }
    /**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */ toggleReadOnly(e) {
        e ? (this.destroy(), this.Editor.ConversionToolbar.destroy()) : window.requestIdleCallback(()=>{
            this.make();
        }, {
            timeout: 2e3
        });
    }
    /**
   *  Moving / appearance
   *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */ /**
   * Shows Inline Toolbar if something is selected
   *
   * @param [needToClose] - pass true to close toolbar if it is not allowed.
   *                                  Avoid to use it just for closing IT, better call .close() clearly.
   * @param [needToShowConversionToolbar] - pass false to not to show Conversion Toolbar
   */ async tryToShow(e = !1, t1 = !0) {
        e && this.close(), this.allowedToShow() && (await this.addToolsFiltered(t1), this.move(), this.open(t1), this.Editor.Toolbar.close());
    }
    /**
   * Hides Inline Toolbar
   */ close() {
        this.opened && (this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed), Array.from(this.toolsInstances.entries()).forEach(([e, t1])=>{
            const o = this.getToolShortcut(e);
            o && ae.remove(this.Editor.UI.nodes.redactor, o), M(t1.clear) && t1.clear();
        }), this.reset(), this.opened = !1, this.flipper.deactivate(), this.Editor.ConversionToolbar.close()));
    }
    /**
   * Check if node is contained by Inline Toolbar
   *
   * @param {Node} node — node to check
   */ containsNode(e) {
        return this.nodes.wrapper === void 0 ? !1 : this.nodes.wrapper.contains(e);
    }
    /**
   * Removes UI and its components
   */ destroy() {
        this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
    }
    /**
   * Making DOM
   */ make() {
        this.nodes.wrapper = c.make("div", [
            this.CSS.inlineToolbar,
            ...this.isRtl ? [
                this.Editor.UI.CSS.editorRtlFix
            ] : []
        ]), this.nodes.togglerAndButtonsWrapper = c.make("div", this.CSS.togglerAndButtonsWrapper), this.nodes.buttons = c.make("div", this.CSS.buttonsWrapper), this.nodes.actions = c.make("div", this.CSS.actionsWrapper), this.listeners.on(this.nodes.wrapper, "mousedown", (e)=>{
            e.target.closest(`.${this.CSS.actionsWrapper}`) || e.preventDefault();
        }), c.append(this.nodes.wrapper, [
            this.nodes.togglerAndButtonsWrapper,
            this.nodes.actions
        ]), c.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.addConversionToggler(), c.append(this.nodes.togglerAndButtonsWrapper, this.nodes.buttons), this.prepareConversionToolbar(), window.requestAnimationFrame(()=>{
            this.recalculateWidth();
        }), this.enableFlipper();
    }
    /**
   * Shows Inline Toolbar
   */ open() {
        if (this.opened) return;
        this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed), this.buttonsList = this.nodes.buttons.querySelectorAll(`.${this.CSS.inlineToolButton}`), this.opened = !0;
        let e = Array.from(this.buttonsList);
        e.unshift(this.nodes.conversionToggler), e = e.filter((t1)=>!t1.hidden), this.flipper.activate(e);
    }
    /**
   * Move Toolbar to the selected text
   */ move() {
        const e = b.rect, t1 = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), o = {
            x: e.x - t1.x,
            y: e.y + e.height - // + window.scrollY
            t1.top + this.toolbarVerticalMargin
        };
        o.x + this.width + t1.x > this.Editor.UI.contentRect.right && (o.x = this.Editor.UI.contentRect.right - this.width - t1.x), this.nodes.wrapper.style.left = Math.floor(o.x) + "px", this.nodes.wrapper.style.top = Math.floor(o.y) + "px";
    }
    /**
   * Clear orientation classes and reset position
   */ reset() {
        this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarLeftOriented, this.CSS.inlineToolbarRightOriented), this.nodes.wrapper.style.left = "0", this.nodes.wrapper.style.top = "0";
    }
    /**
   * Need to show Inline Toolbar or not
   */ allowedToShow() {
        const e = [
            "IMG",
            "INPUT"
        ], t1 = b.get(), o = b.text;
        if (!t1 || !t1.anchorNode || t1.isCollapsed || o.length < 1) return !1;
        const i = c.isElement(t1.anchorNode) ? t1.anchorNode : t1.anchorNode.parentElement;
        if (t1 && e.includes(i.tagName) || i.closest('[contenteditable="true"]') === null) return !1;
        const r = this.Editor.BlockManager.getBlock(t1.anchorNode);
        return r ? r.tool.inlineTools.size !== 0 : !1;
    }
    /**
   * Recalculate inline toolbar width
   */ recalculateWidth() {
        this.width = this.nodes.wrapper.offsetWidth;
    }
    /**
   * Create a toggler for Conversion Dropdown
   * and prepend it to the buttons list
   */ addConversionToggler() {
        this.nodes.conversionToggler = c.make("div", this.CSS.conversionToggler), this.nodes.conversionTogglerContent = c.make("div", this.CSS.conversionTogglerContent);
        const e = c.make("div", this.CSS.conversionTogglerArrow, {
            innerHTML: kt
        });
        this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent), this.nodes.conversionToggler.appendChild(e), this.nodes.togglerAndButtonsWrapper.appendChild(this.nodes.conversionToggler), this.listeners.on(this.nodes.conversionToggler, "click", ()=>{
            this.Editor.ConversionToolbar.toggle((t1)=>{
                !t1 && this.opened ? this.flipper.activate() : this.opened && this.flipper.deactivate();
            });
        }), te() === !1 && ge(this.nodes.conversionToggler, z.ui(K.ui.inlineToolbar.converter, "Convert to"), {
            placement: "top",
            hidingDelay: 100
        });
    }
    /**
   * Changes Conversion Dropdown content for current block's Tool
   */ async setConversionTogglerContent() {
        const { BlockManager: e } = this.Editor, { currentBlock: t1 } = e, o = t1.name, i = t1.tool.conversionConfig, n = i && i.export;
        this.nodes.conversionToggler.hidden = !n, this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden, !n);
        const r = await t1.getActiveToolboxEntry() || {};
        this.nodes.conversionTogglerContent.innerHTML = r.icon || r.title || re(o);
    }
    /**
   * Makes the Conversion Dropdown
   */ prepareConversionToolbar() {
        const e = this.Editor.ConversionToolbar.make();
        c.append(this.nodes.wrapper, e);
    }
    /**
   *  Working with Tools
   *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */ /**
   * Append only allowed Tools
   *
   * @param {boolean} needToShowConversionToolbar - pass false to not to show Conversion Toolbar (e.g. for Footnotes-like tools)
   */ async addToolsFiltered(e = !0) {
        const t1 = b.get(), o = this.Editor.BlockManager.getBlock(t1.anchorNode);
        this.nodes.buttons.innerHTML = "", this.nodes.actions.innerHTML = "", this.toolsInstances = /* @__PURE__ */ new Map(), Array.from(o.tool.inlineTools.values()).forEach((i)=>{
            this.addTool(i);
        }), e && this.Editor.ConversionToolbar.hasTools() ? await this.setConversionTogglerContent() : this.nodes.conversionToggler.hidden = !0, this.recalculateWidth();
    }
    /**
   * Add tool button and activate clicks
   *
   * @param {InlineTool} tool - InlineTool object
   */ addTool(e) {
        const t1 = e.create(), o = t1.render();
        if (!o) {
            T("Render method must return an instance of Node", "warn", e.name);
            return;
        }
        if (o.dataset.tool = e.name, this.nodes.buttons.appendChild(o), this.toolsInstances.set(e.name, t1), M(t1.renderActions)) {
            const a = t1.renderActions();
            this.nodes.actions.appendChild(a);
        }
        this.listeners.on(o, "click", (a)=>{
            this.toolClicked(t1), a.preventDefault();
        });
        const i = this.getToolShortcut(e.name);
        if (i) try {
            this.enableShortcuts(t1, i);
        } catch  {}
        const n = c.make("div"), r = z.t(K.toolNames, e.title || re(e.name));
        n.appendChild(c.text(r)), i && n.appendChild(c.make("div", this.CSS.inlineToolbarShortcut, {
            textContent: ye(i)
        })), te() === !1 && ge(o, n, {
            placement: "top",
            hidingDelay: 100
        }), t1.checkState(b.get());
    }
    /**
   * Get shortcut name for tool
   *
   * @param toolName — Tool name
   */ getToolShortcut(e) {
        const { Tools: t1 } = this.Editor, o = t1.inlineTools.get(e), i = t1.internal.inlineTools;
        return Array.from(i.keys()).includes(e) ? this.inlineTools[e][Et.Shortcut] : o.shortcut;
    }
    /**
   * Enable Tool shortcut with Editor Shortcuts Module
   *
   * @param {InlineTool} tool - Tool instance
   * @param {string} shortcut - shortcut according to the ShortcutData Module format
   */ enableShortcuts(e, t1) {
        ae.add({
            name: t1,
            handler: (o)=>{
                const { currentBlock: i } = this.Editor.BlockManager;
                i && i.tool.enabledInlineTools && (o.preventDefault(), this.toolClicked(e));
            },
            on: this.Editor.UI.nodes.redactor
        });
    }
    /**
   * Inline Tool button clicks
   *
   * @param {InlineTool} tool - Tool's instance
   */ toolClicked(e) {
        const t1 = b.range;
        e.surround(t1), this.checkToolsState(), e.renderActions !== void 0 && this.flipper.deactivate();
    }
    /**
   * Check Tools` state by selection
   */ checkToolsState() {
        this.toolsInstances.forEach((e)=>{
            e.checkState(b.get());
        });
    }
    /**
   * Get inline tools tools
   * Tools that has isInline is true
   */ get inlineTools() {
        const e = {};
        return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(([t1, o])=>{
            e[t1] = o.create();
        }), e;
    }
    /**
   * Allow to leaf buttons by arrows / tab
   * Buttons will be filled on opening
   */ enableFlipper() {
        this.flipper = new q({
            focusedItemClass: this.CSS.focusedButton,
            allowedKeys: [
                v.ENTER,
                v.TAB
            ]
        });
    }
}
class ei extends y {
    /**
   * All keydowns on Block
   *
   * @param {KeyboardEvent} event - keydown
   */ keydown(e) {
        switch(this.beforeKeydownProcessing(e), e.keyCode){
            case v.BACKSPACE:
                this.backspace(e);
                break;
            case v.DELETE:
                this.delete(e);
                break;
            case v.ENTER:
                this.enter(e);
                break;
            case v.DOWN:
            case v.RIGHT:
                this.arrowRightAndDown(e);
                break;
            case v.UP:
            case v.LEFT:
                this.arrowLeftAndUp(e);
                break;
            case v.TAB:
                this.tabPressed(e);
                break;
        }
        e.key === "/" && !e.ctrlKey && !e.metaKey && this.slashPressed(), e.code === "Slash" && (e.ctrlKey || e.metaKey) && (e.preventDefault(), this.commandSlashPressed());
    }
    /**
   * Fires on keydown before event processing
   *
   * @param {KeyboardEvent} event - keydown
   */ beforeKeydownProcessing(e) {
        this.needToolbarClosing(e) && lt(e.keyCode) && (this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close(), e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || this.Editor.BlockSelection.clearSelection(e));
    }
    /**
   * Key up on Block:
   * - shows Inline Toolbar if something selected
   * - shows conversion toolbar with 85% of block selection
   *
   * @param {KeyboardEvent} event - keyup event
   */ keyup(e) {
        e.shiftKey || this.Editor.UI.checkEmptiness();
    }
    /**
   * Add drop target styles
   *
   * @param {DragEvent} event - drag over event
   */ dragOver(e) {
        const t1 = this.Editor.BlockManager.getBlockByChildNode(e.target);
        t1.dropTarget = !0;
    }
    /**
   * Remove drop target style
   *
   * @param {DragEvent} event - drag leave event
   */ dragLeave(e) {
        const t1 = this.Editor.BlockManager.getBlockByChildNode(e.target);
        t1.dropTarget = !1;
    }
    /**
   * Copying selected blocks
   * Before putting to the clipboard we sanitize all blocks and then copy to the clipboard
   *
   * @param {ClipboardEvent} event - clipboard event
   */ handleCommandC(e) {
        const { BlockSelection: t1 } = this.Editor;
        t1.anyBlockSelected && t1.copySelectedBlocks(e);
    }
    /**
   * Copy and Delete selected Blocks
   *
   * @param {ClipboardEvent} event - clipboard event
   */ handleCommandX(e) {
        const { BlockSelection: t1, BlockManager: o, Caret: i } = this.Editor;
        t1.anyBlockSelected && t1.copySelectedBlocks(e).then(()=>{
            const n = o.removeSelectedBlocks(), r = o.insertDefaultBlockAtIndex(n, !0);
            i.setToBlock(r, i.positions.START), t1.clearSelection(e);
        });
    }
    /**
   * Tab pressed inside a Block.
   *
   * @param {KeyboardEvent} event - keydown
   */ tabPressed(e) {
        const { InlineToolbar: t1, ConversionToolbar: o, Caret: i } = this.Editor;
        if (o.opened || t1.opened) return;
        (e.shiftKey ? i.navigatePrevious(!0) : i.navigateNext(!0)) && e.preventDefault();
    }
    /**
   * '/' + 'command' keydown inside a Block
   */ commandSlashPressed() {
        this.Editor.BlockSelection.selectedBlocks.length > 1 || this.activateBlockSettings();
    }
    /**
   * '/' keydown inside a Block
   */ slashPressed() {
        this.Editor.BlockManager.currentBlock.isEmpty && this.activateToolbox();
    }
    /**
   * ENTER pressed on block
   *
   * @param {KeyboardEvent} event - keydown
   */ enter(e) {
        const { BlockManager: t1, UI: o } = this.Editor;
        if (t1.currentBlock.tool.isLineBreaksEnabled || o.someToolbarOpened && o.someFlipperButtonFocused || e.shiftKey) return;
        let n = this.Editor.BlockManager.currentBlock;
        this.Editor.Caret.isAtStart && !this.Editor.BlockManager.currentBlock.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : this.Editor.Caret.isAtEnd ? n = this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex + 1) : n = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(n), this.Editor.Toolbar.moveAndOpen(n), e.preventDefault();
    }
    /**
   * Handle backspace keydown on Block
   *
   * @param {KeyboardEvent} event - keydown
   */ backspace(e) {
        const { BlockManager: t1, Caret: o } = this.Editor, { currentBlock: i, previousBlock: n } = t1;
        if (!b.isCollapsed || !o.isAtStart) return;
        if (e.preventDefault(), this.Editor.Toolbar.close(), !(i.currentInput === i.firstInput)) {
            o.navigatePrevious();
            return;
        }
        if (n === null) return;
        if (n.isEmpty) {
            t1.removeBlock(n);
            return;
        }
        if (i.isEmpty) {
            t1.removeBlock(i);
            const l = t1.currentBlock;
            o.setToBlock(l, o.positions.END);
            return;
        }
        ot(i, n) ? this.mergeBlocks(n, i) : o.setToBlock(n, o.positions.END);
    }
    /**
   * Handles delete keydown on Block
   * Removes char after the caret.
   * If caret is at the end of the block, merge next block with current
   *
   * @param {KeyboardEvent} event - keydown
   */ delete(e) {
        const { BlockManager: t1, Caret: o } = this.Editor, { currentBlock: i, nextBlock: n } = t1;
        if (!b.isCollapsed || !o.isAtEnd) return;
        if (e.preventDefault(), this.Editor.Toolbar.close(), !(i.currentInput === i.lastInput)) {
            o.navigateNext();
            return;
        }
        if (n === null) return;
        if (n.isEmpty) {
            t1.removeBlock(n);
            return;
        }
        if (i.isEmpty) {
            t1.removeBlock(i), o.setToBlock(n, o.positions.START);
            return;
        }
        ot(i, n) ? this.mergeBlocks(i, n) : o.setToBlock(n, o.positions.START);
    }
    /**
   * Merge passed Blocks
   *
   * @param targetBlock - to which Block we want to merge
   * @param blockToMerge - what Block we want to merge
   */ mergeBlocks(e, t1) {
        const { BlockManager: o, Caret: i, Toolbar: n } = this.Editor;
        i.createShadow(e.pluginsContent), o.mergeBlocks(e, t1).then(()=>{
            window.requestAnimationFrame(()=>{
                i.restoreCaret(e.pluginsContent), e.pluginsContent.normalize(), n.close();
            });
        });
    }
    /**
   * Handle right and down keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */ arrowRightAndDown(e) {
        const t1 = q.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === v.TAB);
        if (this.Editor.UI.someToolbarOpened && t1) return;
        this.Editor.Toolbar.close();
        const o = this.Editor.Caret.isAtEnd || this.Editor.BlockSelection.anyBlockSelected;
        if (e.shiftKey && e.keyCode === v.DOWN && o) {
            this.Editor.CrossBlockSelection.toggleBlockSelectedState();
            return;
        }
        if (e.keyCode === v.DOWN || e.keyCode === v.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) {
            e.preventDefault();
            return;
        }
        xe(()=>{
            this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
        }, 20)(), this.Editor.BlockSelection.clearSelection(e);
    }
    /**
   * Handle left and up keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */ arrowLeftAndUp(e) {
        if (this.Editor.UI.someToolbarOpened) {
            if (q.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === v.TAB)) return;
            this.Editor.UI.closeAllToolbars();
        }
        this.Editor.Toolbar.close();
        const t1 = this.Editor.Caret.isAtStart || this.Editor.BlockSelection.anyBlockSelected;
        if (e.shiftKey && e.keyCode === v.UP && t1) {
            this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1);
            return;
        }
        if (e.keyCode === v.UP || e.keyCode === v.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) {
            e.preventDefault();
            return;
        }
        xe(()=>{
            this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
        }, 20)(), this.Editor.BlockSelection.clearSelection(e);
    }
    /**
   * Cases when we need to close Toolbar
   *
   * @param {KeyboardEvent} event - keyboard event
   */ needToolbarClosing(e) {
        const t1 = e.keyCode === v.ENTER && this.Editor.Toolbar.toolbox.opened, o = e.keyCode === v.ENTER && this.Editor.BlockSettings.opened, i = e.keyCode === v.ENTER && this.Editor.InlineToolbar.opened, n = e.keyCode === v.ENTER && this.Editor.ConversionToolbar.opened, r = e.keyCode === v.TAB;
        return !(e.shiftKey || r || t1 || o || i || n);
    }
    /**
   * If Toolbox is not open, then just open it and show plus button
   */ activateToolbox() {
        this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open();
    }
    /**
   * Open Toolbar and show BlockSettings before flipping Tools
   */ activateBlockSettings() {
        this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
    }
}
class Se {
    /**
   * @class
   * @param {HTMLElement} workingArea — editor`s working node
   */ constructor(e){
        this.blocks = [], this.workingArea = e;
    }
    /**
   * Get length of Block instances array
   *
   * @returns {number}
   */ get length() {
        return this.blocks.length;
    }
    /**
   * Get Block instances array
   *
   * @returns {Block[]}
   */ get array() {
        return this.blocks;
    }
    /**
   * Get blocks html elements array
   *
   * @returns {HTMLElement[]}
   */ get nodes() {
        return ct(this.workingArea.children);
    }
    /**
   * Proxy trap to implement array-like setter
   *
   * @example
   * blocks[0] = new Block(...)
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — block index or any Blocks class property key to set
   * @param {Block} value — value to set
   * @returns {boolean}
   */ static set(e, t1, o) {
        return isNaN(Number(t1)) ? (Reflect.set(e, t1, o), !0) : (e.insert(+t1, o), !0);
    }
    /**
   * Proxy trap to implement array-like getter
   *
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — Blocks class property key
   * @returns {Block|*}
   */ static get(e, t1) {
        return isNaN(Number(t1)) ? Reflect.get(e, t1) : e.get(+t1);
    }
    /**
   * Push new Block to the blocks array and append it to working area
   *
   * @param {Block} block - Block to add
   */ push(e) {
        this.blocks.push(e), this.insertToDOM(e);
    }
    /**
   * Swaps blocks with indexes first and second
   *
   * @param {number} first - first block index
   * @param {number} second - second block index
   * @deprecated — use 'move' instead
   */ swap(e, t1) {
        const o = this.blocks[t1];
        c.swap(this.blocks[e].holder, o.holder), this.blocks[t1] = this.blocks[e], this.blocks[e] = o;
    }
    /**
   * Move a block from one to another index
   *
   * @param {number} toIndex - new index of the block
   * @param {number} fromIndex - block to move
   */ move(e, t1) {
        const o = this.blocks.splice(t1, 1)[0], i = e - 1, n = Math.max(0, i), r = this.blocks[n];
        e > 0 ? this.insertToDOM(o, "afterend", r) : this.insertToDOM(o, "beforebegin", r), this.blocks.splice(e, 0, o);
        const a = this.composeBlockEvent("move", {
            fromIndex: t1,
            toIndex: e
        });
        o.call(X.MOVED, a);
    }
    /**
   * Insert new Block at passed index
   *
   * @param {number} index — index to insert Block
   * @param {Block} block — Block to insert
   * @param {boolean} replace — it true, replace block on given index
   */ insert(e, t1, o = !1) {
        if (!this.length) {
            this.push(t1);
            return;
        }
        e > this.length && (e = this.length), o && (this.blocks[e].holder.remove(), this.blocks[e].call(X.REMOVED));
        const i = o ? 1 : 0;
        if (this.blocks.splice(e, i, t1), e > 0) {
            const n = this.blocks[e - 1];
            this.insertToDOM(t1, "afterend", n);
        } else {
            const n = this.blocks[e + 1];
            n ? this.insertToDOM(t1, "beforebegin", n) : this.insertToDOM(t1);
        }
    }
    /**
   * Replaces block under passed index with passed block
   *
   * @param index - index of existed block
   * @param block - new block
   */ replace(e, t1) {
        if (this.blocks[e] === void 0) throw Error("Incorrect index");
        this.blocks[e].holder.replaceWith(t1.holder), this.blocks[e] = t1;
    }
    /**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index to insert blocks at
   */ insertMany(e, t1) {
        const o = new DocumentFragment();
        for (const i of e)o.appendChild(i.holder);
        if (this.length > 0) {
            if (t1 > 0) {
                const i = Math.min(t1 - 1, this.length - 1);
                this.blocks[i].holder.after(o);
            } else t1 === 0 && this.workingArea.prepend(o);
            this.blocks.splice(t1, 0, ...e);
        } else this.blocks.push(...e), this.workingArea.appendChild(o);
        e.forEach((i)=>i.call(X.RENDERED));
    }
    /**
   * Remove block
   *
   * @param {number} index - index of Block to remove
   */ remove(e) {
        isNaN(e) && (e = this.length - 1), this.blocks[e].holder.remove(), this.blocks[e].call(X.REMOVED), this.blocks.splice(e, 1);
    }
    /**
   * Remove all blocks
   */ removeAll() {
        this.workingArea.innerHTML = "", this.blocks.forEach((e)=>e.call(X.REMOVED)), this.blocks.length = 0;
    }
    /**
   * Insert Block after passed target
   *
   * @todo decide if this method is necessary
   * @param {Block} targetBlock — target after which Block should be inserted
   * @param {Block} newBlock — Block to insert
   */ insertAfter(e, t1) {
        const o = this.blocks.indexOf(e);
        this.insert(o + 1, t1);
    }
    /**
   * Get Block by index
   *
   * @param {number} index — Block index
   * @returns {Block}
   */ get(e) {
        return this.blocks[e];
    }
    /**
   * Return index of passed Block
   *
   * @param {Block} block - Block to find
   * @returns {number}
   */ indexOf(e) {
        return this.blocks.indexOf(e);
    }
    /**
   * Insert new Block into DOM
   *
   * @param {Block} block - Block to insert
   * @param {InsertPosition} position — insert position (if set, will use insertAdjacentElement)
   * @param {Block} target — Block related to position
   */ insertToDOM(e, t1, o) {
        t1 ? o.holder.insertAdjacentElement(t1, e.holder) : this.workingArea.appendChild(e.holder), e.call(X.RENDERED);
    }
    /**
   * Composes Block event with passed type and details
   *
   * @param {string} type - event type
   * @param {object} detail - event detail
   */ composeBlockEvent(e, t1) {
        return new CustomEvent(e, {
            detail: t1
        });
    }
}
const nt = "block-removed", st = "block-added", ti = "block-moved", rt = "block-changed";
class oi {
    constructor(){
        this.completed = Promise.resolve();
    }
    /**
   * Add new promise to queue
   *
   * @param operation - promise should be added to queue
   */ add(e) {
        return new Promise((t1, o)=>{
            this.completed = this.completed.then(e).then(t1).catch(o);
        });
    }
}
class ii extends y {
    constructor(){
        super(...arguments), this._currentBlockIndex = -1, this._blocks = null;
    }
    /**
   * Returns current Block index
   *
   * @returns {number}
   */ get currentBlockIndex() {
        return this._currentBlockIndex;
    }
    /**
   * Set current Block index and fire Block lifecycle callbacks
   *
   * @param {number} newIndex - index of Block to set as current
   */ set currentBlockIndex(e) {
        this._currentBlockIndex = e;
    }
    /**
   * returns first Block
   *
   * @returns {Block}
   */ get firstBlock() {
        return this._blocks[0];
    }
    /**
   * returns last Block
   *
   * @returns {Block}
   */ get lastBlock() {
        return this._blocks[this._blocks.length - 1];
    }
    /**
   * Get current Block instance
   *
   * @returns {Block}
   */ get currentBlock() {
        return this._blocks[this.currentBlockIndex];
    }
    /**
   * Set passed Block as a current
   *
   * @param block - block to set as a current
   */ set currentBlock(e) {
        this.currentBlockIndex = this.getBlockIndex(e);
    }
    /**
   * Returns next Block instance
   *
   * @returns {Block|null}
   */ get nextBlock() {
        return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
    }
    /**
   * Return first Block with inputs after current Block
   *
   * @returns {Block | undefined}
   */ get nextContentfulBlock() {
        return this.blocks.slice(this.currentBlockIndex + 1).find((t1)=>!!t1.inputs.length);
    }
    /**
   * Return first Block with inputs before current Block
   *
   * @returns {Block | undefined}
   */ get previousContentfulBlock() {
        return this.blocks.slice(0, this.currentBlockIndex).reverse().find((t1)=>!!t1.inputs.length);
    }
    /**
   * Returns previous Block instance
   *
   * @returns {Block|null}
   */ get previousBlock() {
        return this.currentBlockIndex === 0 ? null : this._blocks[this.currentBlockIndex - 1];
    }
    /**
   * Get array of Block instances
   *
   * @returns {Block[]} {@link Blocks#array}
   */ get blocks() {
        return this._blocks.array;
    }
    /**
   * Check if each Block is empty
   *
   * @returns {boolean}
   */ get isEditorEmpty() {
        return this.blocks.every((e)=>e.isEmpty);
    }
    /**
   * Should be called after Editor.UI preparation
   * Define this._blocks property
   */ prepare() {
        const e = new Se(this.Editor.UI.nodes.redactor);
        this._blocks = new Proxy(e, {
            set: Se.set,
            get: Se.get
        }), this.listeners.on(document, "copy", (t1)=>this.Editor.BlockEvents.handleCommandC(t1));
    }
    /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - Unbind event handlers from created Blocks
   *
   * if readOnly is false:
   *  - Bind event handlers to all existing Blocks
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */ toggleReadOnly(e) {
        e ? this.disableModuleBindings() : this.enableModuleBindings();
    }
    /**
   * Creates Block instance by tool name
   *
   * @param {object} options - block creation options
   * @param {string} options.tool - tools passed in editor config {@link EditorConfig#tools}
   * @param {string} [options.id] - unique id for this block
   * @param {BlockToolData} [options.data] - constructor params
   * @returns {Block}
   */ composeBlock({ tool: e, data: t1 = {}, id: o, tunes: i = {} }) {
        const n = this.Editor.ReadOnly.isEnabled, r = this.Editor.Tools.blockTools.get(e), a = new R({
            id: o,
            data: t1,
            tool: r,
            api: this.Editor.API,
            readOnly: n,
            tunesData: i
        }, this.eventsDispatcher);
        return n || window.requestIdleCallback(()=>{
            this.bindBlockEvents(a);
        }, {
            timeout: 2e3
        }), a;
    }
    /**
   * Insert new block into _blocks
   *
   * @param {object} options - insert options
   * @param {string} [options.id] - block's unique id
   * @param {string} [options.tool] - plugin name, by default method inserts the default block type
   * @param {object} [options.data] - plugin data
   * @param {number} [options.index] - index where to insert new Block
   * @param {boolean} [options.needToFocus] - flag shows if needed to update current Block index
   * @param {boolean} [options.replace] - flag shows if block by passed index should be replaced with inserted one
   * @returns {Block}
   */ insert({ id: e, tool: t1 = this.config.defaultBlock, data: o = {}, index: i, needToFocus: n = !0, replace: r = !1, tunes: a = {} } = {}) {
        let l = i;
        l === void 0 && (l = this.currentBlockIndex + (r ? 0 : 1));
        const d = this.composeBlock({
            id: e,
            tool: t1,
            data: o,
            tunes: a
        });
        return r && this.blockDidMutated(nt, this.getBlockByIndex(l), {
            index: l
        }), this._blocks.insert(l, d, r), this.blockDidMutated(st, d, {
            index: l
        }), n ? this.currentBlockIndex = l : l <= this.currentBlockIndex && this.currentBlockIndex++, d;
    }
    /**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index where to insert
   */ insertMany(e, t1 = 0) {
        this._blocks.insertMany(e, t1);
    }
    /**
   * Update Block data.
   *
   * Currently we don't have an 'update' method in the Tools API, so we just create a new block with the same id and type
   * Should not trigger 'block-removed' or 'block-added' events
   *
   * @param block - block to update
   * @param data - new data
   */ async update(e, t1) {
        const o = await e.data, i = this.composeBlock({
            id: e.id,
            tool: e.name,
            data: Object.assign({}, o, t1),
            tunes: e.tunes
        }), n = this.getBlockIndex(e);
        return this._blocks.replace(n, i), this.blockDidMutated(rt, i, {
            index: n
        }), i;
    }
    /**
   * Replace passed Block with the new one with specified Tool and data
   *
   * @param block - block to replace
   * @param newTool - new Tool name
   * @param data - new Tool data
   */ replace(e, t1, o) {
        const i = this.getBlockIndex(e);
        this.insert({
            tool: t1,
            data: o,
            index: i,
            replace: !0
        });
    }
    /**
   * Insert pasted content. Call onPaste callback after insert.
   *
   * @param {string} toolName - name of Tool to insert
   * @param {PasteEvent} pasteEvent - pasted data
   * @param {boolean} replace - should replace current block
   */ paste(e, t1, o = !1) {
        const i = this.insert({
            tool: e,
            replace: o
        });
        try {
            window.requestIdleCallback(()=>{
                i.call(X.ON_PASTE, t1);
            });
        } catch (n) {
            T(`${e}: onPaste callback call is failed`, "error", n);
        }
        return i;
    }
    /**
   * Insert new default block at passed index
   *
   * @param {number} index - index where Block should be inserted
   * @param {boolean} needToFocus - if true, updates current Block index
   *
   * TODO: Remove method and use insert() with index instead (?)
   * @returns {Block} inserted Block
   */ insertDefaultBlockAtIndex(e, t1 = !1) {
        const o = this.composeBlock({
            tool: this.config.defaultBlock
        });
        return this._blocks[e] = o, this.blockDidMutated(st, o, {
            index: e
        }), t1 ? this.currentBlockIndex = e : e <= this.currentBlockIndex && this.currentBlockIndex++, o;
    }
    /**
   * Always inserts at the end
   *
   * @returns {Block}
   */ insertAtEnd() {
        return this.currentBlockIndex = this.blocks.length - 1, this.insert();
    }
    /**
   * Merge two blocks
   *
   * @param {Block} targetBlock - previous block will be append to this block
   * @param {Block} blockToMerge - block that will be merged with target block
   * @returns {Promise} - the sequence that can be continued
   */ async mergeBlocks(e, t1) {
        const o = await t1.data;
        W(o) || await e.mergeWith(o), this.removeBlock(t1), this.currentBlockIndex = this._blocks.indexOf(e);
    }
    /**
   * Remove passed Block
   *
   * @param block - Block to remove
   * @param addLastBlock - if true, adds new default block at the end. @todo remove this logic and use event-bus instead
   */ removeBlock(e, t1 = !0) {
        return new Promise((o)=>{
            const i = this._blocks.indexOf(e);
            if (!this.validateIndex(i)) throw new Error("Can't find a Block to remove");
            e.destroy(), this._blocks.remove(i), this.blockDidMutated(nt, e, {
                index: i
            }), this.currentBlockIndex >= i && this.currentBlockIndex--, this.blocks.length ? i === 0 && (this.currentBlockIndex = 0) : (this.currentBlockIndex = -1, t1 && this.insert()), o();
        });
    }
    /**
   * Remove only selected Blocks
   * and returns first Block index where started removing...
   *
   * @returns {number|undefined}
   */ removeSelectedBlocks() {
        let e;
        for(let t1 = this.blocks.length - 1; t1 >= 0; t1--)this.blocks[t1].selected && (this.removeBlock(this.blocks[t1]), e = t1);
        return e;
    }
    /**
   * Attention!
   * After removing insert the new default typed Block and focus on it
   * Removes all blocks
   */ removeAllBlocks() {
        for(let e = this.blocks.length - 1; e >= 0; e--)this._blocks.remove(e);
        this.currentBlockIndex = -1, this.insert(), this.currentBlock.firstInput.focus();
    }
    /**
   * Split current Block
   * 1. Extract content from Caret position to the Block`s end
   * 2. Insert a new Block below current one with extracted content
   *
   * @returns {Block}
   */ split() {
        const e = this.Editor.Caret.extractFragmentFromCaretPosition(), t1 = c.make("div");
        t1.appendChild(e);
        const o = {
            text: c.isEmpty(t1) ? "" : t1.innerHTML
        };
        return this.insert({
            data: o
        });
    }
    /**
   * Returns Block by passed index
   *
   * @param {number} index - index to get. -1 to get last
   * @returns {Block}
   */ getBlockByIndex(e) {
        return e === -1 && (e = this._blocks.length - 1), this._blocks[e];
    }
    /**
   * Returns an index for passed Block
   *
   * @param block - block to find index
   */ getBlockIndex(e) {
        return this._blocks.indexOf(e);
    }
    /**
   * Returns the Block by passed id
   *
   * @param id - id of block to get
   * @returns {Block}
   */ getBlockById(e) {
        return this._blocks.array.find((t1)=>t1.id === e);
    }
    /**
   * Get Block instance by html element
   *
   * @param {Node} element - html element to get Block by
   */ getBlock(e) {
        c.isElement(e) || (e = e.parentNode);
        const t1 = this._blocks.nodes, o = e.closest(`.${R.CSS.wrapper}`), i = t1.indexOf(o);
        if (i >= 0) return this._blocks[i];
    }
    /**
   * 1) Find first-level Block from passed child Node
   * 2) Mark it as current
   *
   * @param {Node} childNode - look ahead from this node.
   * @returns {Block | undefined} can return undefined in case when the passed child note is not a part of the current editor instance
   */ setCurrentBlockByChildNode(e) {
        c.isElement(e) || (e = e.parentNode);
        const t1 = e.closest(`.${R.CSS.wrapper}`);
        if (!t1) return;
        const o = t1.closest(`.${this.Editor.UI.CSS.editorWrapper}`);
        if (o != null && o.isEqualNode(this.Editor.UI.nodes.wrapper)) return this.currentBlockIndex = this._blocks.nodes.indexOf(t1), this.currentBlock.updateCurrentInput(), this.currentBlock;
    }
    /**
   * Return block which contents passed node
   *
   * @param {Node} childNode - node to get Block by
   * @returns {Block}
   */ getBlockByChildNode(e) {
        if (!e || !(e instanceof Node)) return;
        c.isElement(e) || (e = e.parentNode);
        const t1 = e.closest(`.${R.CSS.wrapper}`);
        return this.blocks.find((o)=>o.holder === t1);
    }
    /**
   * Swap Blocks Position
   *
   * @param {number} fromIndex - index of first block
   * @param {number} toIndex - index of second block
   * @deprecated — use 'move' instead
   */ swap(e, t1) {
        this._blocks.swap(e, t1), this.currentBlockIndex = t1;
    }
    /**
   * Move a block to a new index
   *
   * @param {number} toIndex - index where to move Block
   * @param {number} fromIndex - index of Block to move
   */ move(e, t1 = this.currentBlockIndex) {
        if (isNaN(e) || isNaN(t1)) {
            T("Warning during 'move' call: incorrect indices provided.", "warn");
            return;
        }
        if (!this.validateIndex(e) || !this.validateIndex(t1)) {
            T("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
            return;
        }
        this._blocks.move(e, t1), this.currentBlockIndex = e, this.blockDidMutated(ti, this.currentBlock, {
            fromIndex: t1,
            toIndex: e
        });
    }
    /**
   * Converts passed Block to the new Tool
   * Uses Conversion Config
   *
   * @param blockToConvert - Block that should be converted
   * @param targetToolName - name of the Tool to convert to
   * @param blockDataOverrides - optional new Block data overrides
   */ async convert(e, t1, o) {
        if (!await e.save()) throw new Error("Could not convert Block. Failed to extract original Block data.");
        const n = this.Editor.Tools.blockTools.get(t1);
        if (!n) throw new Error(`Could not convert Block. Tool \xab${t1}\xbb not found.`);
        const r = await e.exportDataAsString(), a = V(r, n.sanitizeConfig);
        let l = to(a, n.conversionConfig);
        o && (l = Object.assign(l, o)), this.replace(e, n.name, l);
    }
    /**
   * Sets current Block Index -1 which means unknown
   * and clear highlights
   */ dropPointer() {
        this.currentBlockIndex = -1;
    }
    /**
   * Clears Editor
   *
   * @param {boolean} needToAddDefaultBlock - 1) in internal calls (for example, in api.blocks.render)
   *                                             we don't need to add an empty default block
   *                                        2) in api.blocks.clear we should add empty block
   */ async clear(e = !1) {
        const t1 = new oi();
        this.blocks.forEach((o)=>{
            t1.add(async ()=>{
                await this.removeBlock(o, !1);
            });
        }), await t1.completed, this.dropPointer(), e && this.insert(), this.Editor.UI.checkEmptiness();
    }
    /**
   * Cleans up all the block tools' resources
   * This is called when editor is destroyed
   */ async destroy() {
        await Promise.all(this.blocks.map((e)=>e.destroy()));
    }
    /**
   * Bind Block events
   *
   * @param {Block} block - Block to which event should be bound
   */ bindBlockEvents(e) {
        const { BlockEvents: t1 } = this.Editor;
        this.readOnlyMutableListeners.on(e.holder, "keydown", (o)=>{
            t1.keydown(o);
        }), this.readOnlyMutableListeners.on(e.holder, "keyup", (o)=>{
            t1.keyup(o);
        }), this.readOnlyMutableListeners.on(e.holder, "dragover", (o)=>{
            t1.dragOver(o);
        }), this.readOnlyMutableListeners.on(e.holder, "dragleave", (o)=>{
            t1.dragLeave(o);
        }), e.on("didMutated", (o)=>this.blockDidMutated(rt, o, {
                index: this.getBlockIndex(o)
            }));
    }
    /**
   * Disable mutable handlers and bindings
   */ disableModuleBindings() {
        this.readOnlyMutableListeners.clearAll();
    }
    /**
   * Enables all module handlers and bindings for all Blocks
   */ enableModuleBindings() {
        this.readOnlyMutableListeners.on(document, "cut", (e)=>this.Editor.BlockEvents.handleCommandX(e)), this.blocks.forEach((e)=>{
            this.bindBlockEvents(e);
        });
    }
    /**
   * Validates that the given index is not lower than 0 or higher than the amount of blocks
   *
   * @param {number} index - index of blocks array to validate
   * @returns {boolean}
   */ validateIndex(e) {
        return !(e < 0 || e >= this._blocks.length);
    }
    /**
   * Block mutation callback
   *
   * @param mutationType - what happened with block
   * @param block - mutated block
   * @param detailData - additional data to pass with change event
   */ blockDidMutated(e, t1, o) {
        const i = new CustomEvent(e, {
            detail: {
                target: new ee(t1),
                ...o
            }
        });
        return this.eventsDispatcher.emit(pt, {
            event: i
        }), t1;
    }
}
class ni extends y {
    constructor(){
        super(...arguments), this.anyBlockSelectedCache = null, this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
    }
    /**
   * Sanitizer Config
   *
   * @returns {SanitizerConfig}
   */ get sanitizerConfig() {
        return {
            p: {},
            h1: {},
            h2: {},
            h3: {},
            h4: {},
            h5: {},
            h6: {},
            ol: {},
            ul: {},
            li: {},
            br: !0,
            img: {
                src: !0,
                width: !0,
                height: !0
            },
            a: {
                href: !0
            },
            b: {},
            i: {},
            u: {}
        };
    }
    /**
   * Flag that identifies all Blocks selection
   *
   * @returns {boolean}
   */ get allBlocksSelected() {
        const { BlockManager: e } = this.Editor;
        return e.blocks.every((t1)=>t1.selected === !0);
    }
    /**
   * Set selected all blocks
   *
   * @param {boolean} state - state to set
   */ set allBlocksSelected(e) {
        const { BlockManager: t1 } = this.Editor;
        t1.blocks.forEach((o)=>{
            o.selected = e;
        }), this.clearCache();
    }
    /**
   * Flag that identifies any Block selection
   *
   * @returns {boolean}
   */ get anyBlockSelected() {
        const { BlockManager: e } = this.Editor;
        return this.anyBlockSelectedCache === null && (this.anyBlockSelectedCache = e.blocks.some((t1)=>t1.selected === !0)), this.anyBlockSelectedCache;
    }
    /**
   * Return selected Blocks array
   *
   * @returns {Block[]}
   */ get selectedBlocks() {
        return this.Editor.BlockManager.blocks.filter((e)=>e.selected);
    }
    /**
   * Module Preparation
   * Registers Shortcuts CMD+A and CMD+C
   * to select all and copy them
   */ prepare() {
        this.selection = new b(), ae.add({
            name: "CMD+A",
            handler: (e)=>{
                const { BlockManager: t1, ReadOnly: o } = this.Editor;
                if (o.isEnabled) {
                    e.preventDefault(), this.selectAllBlocks();
                    return;
                }
                t1.currentBlock && this.handleCommandA(e);
            },
            on: this.Editor.UI.nodes.redactor
        });
    }
    /**
   * Toggle read-only state
   *
   *  - Remove all ranges
   *  - Unselect all Blocks
   */ toggleReadOnly() {
        b.get().removeAllRanges(), this.allBlocksSelected = !1;
    }
    /**
   * Remove selection of Block
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */ unSelectBlockByIndex(e) {
        const { BlockManager: t1 } = this.Editor;
        let o;
        isNaN(e) ? o = t1.currentBlock : o = t1.getBlockByIndex(e), o.selected = !1, this.clearCache();
    }
    /**
   * Clear selection from Blocks
   *
   * @param {Event} reason - event caused clear of selection
   * @param {boolean} restoreSelection - if true, restore saved selection
   */ clearSelection(e, t1 = !1) {
        const { BlockManager: o, Caret: i, RectangleSelection: n } = this.Editor;
        this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
        const r = e && e instanceof KeyboardEvent, a = r && lt(e.keyCode);
        if (this.anyBlockSelected && r && a && !b.isSelectionExists) {
            const l = o.removeSelectedBlocks();
            o.insertDefaultBlockAtIndex(l, !0), i.setToBlock(o.currentBlock), xe(()=>{
                const d = e.key;
                i.insertContentAtCaretPosition(d.length > 1 ? "" : d);
            }, 20)();
        }
        if (this.Editor.CrossBlockSelection.clear(e), !this.anyBlockSelected || n.isRectActivated()) {
            this.Editor.RectangleSelection.clearSelection();
            return;
        }
        t1 && this.selection.restore(), this.allBlocksSelected = !1;
    }
    /**
   * Reduce each Block and copy its content
   *
   * @param {ClipboardEvent} e - copy/cut event
   * @returns {Promise<void>}
   */ copySelectedBlocks(e) {
        e.preventDefault();
        const t1 = c.make("div");
        this.selectedBlocks.forEach((n)=>{
            const r = V(n.holder.innerHTML, this.sanitizerConfig), a = c.make("p");
            a.innerHTML = r, t1.appendChild(a);
        });
        const o = Array.from(t1.childNodes).map((n)=>n.textContent).join(`

`), i = t1.innerHTML;
        return e.clipboardData.setData("text/plain", o), e.clipboardData.setData("text/html", i), Promise.all(this.selectedBlocks.map((n)=>n.save())).then((n)=>{
            try {
                e.clipboardData.setData(this.Editor.Paste.MIME_TYPE, JSON.stringify(n));
            } catch  {}
        });
    }
    /**
   * Select Block by its index
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */ selectBlockByIndex(e) {
        const { BlockManager: t1 } = this.Editor, o = t1.getBlockByIndex(e);
        o !== void 0 && this.selectBlock(o);
    }
    /**
   * Select passed Block
   *
   * @param {Block} block - Block to select
   */ selectBlock(e) {
        this.selection.save(), b.get().removeAllRanges(), e.selected = !0, this.clearCache(), this.Editor.InlineToolbar.close();
    }
    /**
   * Remove selection from passed Block
   *
   * @param {Block} block - Block to unselect
   */ unselectBlock(e) {
        e.selected = !1, this.clearCache();
    }
    /**
   * Clear anyBlockSelected cache
   */ clearCache() {
        this.anyBlockSelectedCache = null;
    }
    /**
   * Module destruction
   * De-registers Shortcut CMD+A
   */ destroy() {
        ae.remove(this.Editor.UI.nodes.redactor, "CMD+A");
    }
    /**
   * First CMD+A selects all input content by native behaviour,
   * next CMD+A keypress selects all blocks
   *
   * @param {KeyboardEvent} event - keyboard event
   */ handleCommandA(e) {
        if (this.Editor.RectangleSelection.clearSelection(), c.isNativeInput(e.target) && !this.readyToBlockSelection) {
            this.readyToBlockSelection = !0;
            return;
        }
        const t1 = this.Editor.BlockManager.getBlock(e.target), o = t1.inputs;
        if (o.length > 1 && !this.readyToBlockSelection) {
            this.readyToBlockSelection = !0;
            return;
        }
        if (o.length === 1 && !this.needToSelectAll) {
            this.needToSelectAll = !0;
            return;
        }
        this.needToSelectAll ? (e.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = !1, this.readyToBlockSelection = !1, this.Editor.ConversionToolbar.close()) : this.readyToBlockSelection && (e.preventDefault(), this.selectBlock(t1), this.needToSelectAll = !0);
    }
    /**
   * Select All Blocks
   * Each Block has selected setter that makes Block copyable
   */ selectAllBlocks() {
        this.selection.save(), b.get().removeAllRanges(), this.allBlocksSelected = !0, this.Editor.InlineToolbar.close();
    }
}
class we extends y {
    /**
   * Allowed caret positions in input
   *
   * @static
   * @returns {{START: string, END: string, DEFAULT: string}}
   */ get positions() {
        return {
            START: "start",
            END: "end",
            DEFAULT: "default"
        };
    }
    /**
   * Elements styles that can be useful for Caret Module
   */ static get CSS() {
        return {
            shadowCaret: "cdx-shadow-caret"
        };
    }
    /**
   * Get's deepest first node and checks if offset is zero
   *
   * @returns {boolean}
   */ get isAtStart() {
        const { currentBlock: e } = this.Editor.BlockManager;
        if (!e.focusable) return !0;
        const t1 = b.get(), o = c.getDeepestNode(e.currentInput);
        let i = t1.focusNode;
        if (c.isNativeInput(o)) return o.selectionEnd === 0;
        if (!t1.anchorNode) return !1;
        let n = i.textContent.search(/\S/);
        n === -1 && (n = 0);
        let r = t1.focusOffset;
        return i.nodeType !== Node.TEXT_NODE && i.childNodes.length && (i.childNodes[r] ? (i = i.childNodes[r], r = 0) : (i = i.childNodes[r - 1], r = i.textContent.length)), (c.isLineBreakTag(o) || c.isEmpty(o)) && this.getHigherLevelSiblings(i, "left").every((d)=>{
            const u = c.isLineBreakTag(d), h = d.children.length === 1 && c.isLineBreakTag(d.children[0]), f = u || h;
            return c.isEmpty(d) && !f;
        }) && r === n ? !0 : o === null || i === o && r <= n;
    }
    /**
   * Get's deepest last node and checks if offset is last node text length
   *
   * @returns {boolean}
   */ get isAtEnd() {
        const { currentBlock: e } = this.Editor.BlockManager;
        if (!e.focusable) return !0;
        const t1 = b.get();
        let o = t1.focusNode;
        const i = c.getDeepestNode(e.currentInput, !0);
        if (c.isNativeInput(i)) return i.selectionEnd === i.value.length;
        if (!t1.focusNode) return !1;
        let n = t1.focusOffset;
        if (o.nodeType !== Node.TEXT_NODE && o.childNodes.length && (o.childNodes[n - 1] ? (o = o.childNodes[n - 1], n = o.textContent.length) : (o = o.childNodes[0], n = 0)), c.isLineBreakTag(i) || c.isEmpty(i)) {
            const a = this.getHigherLevelSiblings(o, "right");
            if (a.every((d, u)=>u === a.length - 1 && c.isLineBreakTag(d) || c.isEmpty(d) && !c.isLineBreakTag(d)) && n === o.textContent.length) return !0;
        }
        const r = i.textContent.replace(/\s+$/, "");
        return o === i && n >= r.length;
    }
    /**
   * Method gets Block instance and puts caret to the text node with offset
   * There two ways that method applies caret position:
   *   - first found text node: sets at the beginning, but you can pass an offset
   *   - last found text node: sets at the end of the node. Also, you can customize the behaviour
   *
   * @param {Block} block - Block class
   * @param {string} position - position where to set caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */ setToBlock(e, t1 = this.positions.DEFAULT, o = 0) {
        var d;
        const { BlockManager: i, BlockSelection: n } = this.Editor;
        if (n.clearSelection(), !e.focusable) {
            (d = window.getSelection()) == null || d.removeAllRanges(), n.selectBlock(e), i.currentBlock = e;
            return;
        }
        let r;
        switch(t1){
            case this.positions.START:
                r = e.firstInput;
                break;
            case this.positions.END:
                r = e.lastInput;
                break;
            default:
                r = e.currentInput;
        }
        if (!r) return;
        const a = c.getDeepestNode(r, t1 === this.positions.END), l = c.getContentLength(a);
        switch(!0){
            case t1 === this.positions.START:
                o = 0;
                break;
            case t1 === this.positions.END:
            case o > l:
                o = l;
                break;
        }
        this.set(a, o), i.setCurrentBlockByChildNode(e.holder), i.currentBlock.currentInput = r;
    }
    /**
   * Set caret to the current input of current Block.
   *
   * @param {HTMLElement} input - input where caret should be set
   * @param {string} position - position of the caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */ setToInput(e, t1 = this.positions.DEFAULT, o = 0) {
        const { currentBlock: i } = this.Editor.BlockManager, n = c.getDeepestNode(e);
        switch(t1){
            case this.positions.START:
                this.set(n, 0);
                break;
            case this.positions.END:
                this.set(n, c.getContentLength(n));
                break;
            default:
                o && this.set(n, o);
        }
        i.currentInput = e;
    }
    /**
   * Creates Document Range and sets caret to the element with offset
   *
   * @param {HTMLElement} element - target node.
   * @param {number} offset - offset
   */ set(e, t1 = 0) {
        const { top: i, bottom: n } = b.setCursor(e, t1), { innerHeight: r } = window;
        i < 0 ? window.scrollBy(0, i - 30) : n > r && window.scrollBy(0, n - r + 30);
    }
    /**
   * Set Caret to the last Block
   * If last block is not empty, append another empty block
   */ setToTheLastBlock() {
        const e = this.Editor.BlockManager.lastBlock;
        if (e) {
            if (e.tool.isDefault && e.isEmpty) this.setToBlock(e);
            else {
                const t1 = this.Editor.BlockManager.insertAtEnd();
                this.setToBlock(t1);
            }
        }
    }
    /**
   * Extract content fragment of current Block from Caret position to the end of the Block
   */ extractFragmentFromCaretPosition() {
        const e = b.get();
        if (e.rangeCount) {
            const t1 = e.getRangeAt(0), o = this.Editor.BlockManager.currentBlock.currentInput;
            if (t1.deleteContents(), o) {
                if (c.isNativeInput(o)) {
                    const i = o, n = document.createDocumentFragment(), r = i.value.substring(0, i.selectionStart), a = i.value.substring(i.selectionStart);
                    return n.textContent = a, i.value = r, n;
                } else {
                    const i = t1.cloneRange();
                    return i.selectNodeContents(o), i.setStart(t1.endContainer, t1.endOffset), i.extractContents();
                }
            }
        }
    }
    /**
   * Set's caret to the next Block or Tool`s input
   * Before moving caret, we should check if caret position is at the end of Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @param {boolean} force - pass true to skip check for caret position
   */ navigateNext(e = !1) {
        const { BlockManager: t1 } = this.Editor, { currentBlock: o, nextBlock: i } = t1, { nextInput: n } = o, r = this.isAtEnd;
        let a = i;
        const l = e || r;
        if (n && l) return this.setToInput(n, this.positions.START), !0;
        if (a === null) {
            if (o.tool.isDefault || !l) return !1;
            a = t1.insertAtEnd();
        }
        return l ? (this.setToBlock(a, this.positions.START), !0) : !1;
    }
    /**
   * Set's caret to the previous Tool`s input or Block
   * Before moving caret, we should check if caret position is start of the Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @param {boolean} force - pass true to skip check for caret position
   */ navigatePrevious(e = !1) {
        const { currentBlock: t1, previousBlock: o } = this.Editor.BlockManager;
        if (!t1) return !1;
        const { previousInput: i } = t1, n = e || this.isAtStart;
        return i && n ? (this.setToInput(i, this.positions.END), !0) : o !== null && n ? (this.setToBlock(o, this.positions.END), !0) : !1;
    }
    /**
   * Inserts shadow element after passed element where caret can be placed
   *
   * @param {Element} element - element after which shadow caret should be inserted
   */ createShadow(e) {
        const t1 = document.createElement("span");
        t1.classList.add(we.CSS.shadowCaret), e.insertAdjacentElement("beforeend", t1);
    }
    /**
   * Restores caret position
   *
   * @param {HTMLElement} element - element where caret should be restored
   */ restoreCaret(e) {
        const t1 = e.querySelector(`.${we.CSS.shadowCaret}`);
        if (!t1) return;
        new b().expandToTag(t1);
        const i = document.createRange();
        i.selectNode(t1), i.extractContents();
    }
    /**
   * Inserts passed content at caret position
   *
   * @param {string} content - content to insert
   */ insertContentAtCaretPosition(e) {
        const t1 = document.createDocumentFragment(), o = document.createElement("div"), i = b.get(), n = b.range;
        o.innerHTML = e, Array.from(o.childNodes).forEach((d)=>t1.appendChild(d)), t1.childNodes.length === 0 && t1.appendChild(new Text());
        const r = t1.lastChild;
        n.deleteContents(), n.insertNode(t1);
        const a = document.createRange(), l = r.nodeType === Node.TEXT_NODE ? r : r.firstChild;
        l !== null && l.textContent !== null && a.setStart(l, l.textContent.length), i.removeAllRanges(), i.addRange(a);
    }
    /**
   * Get all first-level (first child of [contenteditable]) siblings from passed node
   * Then you can check it for emptiness
   *
   * @example
   * <div contenteditable>
   * <p></p>                            |
   * <p></p>                            | left first-level siblings
   * <p></p>                            |
   * <blockquote><a><b>adaddad</b><a><blockquote>       <-- passed node for example <b>
   * <p></p>                            |
   * <p></p>                            | right first-level siblings
   * <p></p>                            |
   * </div>
   * @param {HTMLElement} from - element from which siblings should be searched
   * @param {'left' | 'right'} direction - direction of search
   * @returns {HTMLElement[]}
   */ getHigherLevelSiblings(e, t1) {
        let o = e;
        const i = [];
        for(; o.parentNode && o.parentNode.contentEditable !== "true";)o = o.parentNode;
        const n = t1 === "left" ? "previousSibling" : "nextSibling";
        for(; o[n];)o = o[n], i.push(o);
        return i;
    }
}
class si extends y {
    constructor(){
        super(...arguments), this.onMouseUp = ()=>{
            this.listeners.off(document, "mouseover", this.onMouseOver), this.listeners.off(document, "mouseup", this.onMouseUp);
        }, this.onMouseOver = (e)=>{
            const { BlockManager: t1, BlockSelection: o } = this.Editor;
            if (e.relatedTarget === null && e.target === null) return;
            const i = t1.getBlockByChildNode(e.relatedTarget) || this.lastSelectedBlock, n = t1.getBlockByChildNode(e.target);
            if (!(!i || !n) && n !== i) {
                if (i === this.firstSelectedBlock) {
                    b.get().removeAllRanges(), i.selected = !0, n.selected = !0, o.clearCache();
                    return;
                }
                if (n === this.firstSelectedBlock) {
                    i.selected = !1, n.selected = !1, o.clearCache();
                    return;
                }
                this.Editor.InlineToolbar.close(), this.toggleBlocksSelectedState(i, n), this.lastSelectedBlock = n;
            }
        };
    }
    /**
   * Module preparation
   *
   * @returns {Promise}
   */ async prepare() {
        this.listeners.on(document, "mousedown", (e)=>{
            this.enableCrossBlockSelection(e);
        });
    }
    /**
   * Sets up listeners
   *
   * @param {MouseEvent} event - mouse down event
   */ watchSelection(e) {
        if (e.button !== Pt.LEFT) return;
        const { BlockManager: t1 } = this.Editor;
        this.firstSelectedBlock = t1.getBlock(e.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
    }
    /**
   * return boolean is cross block selection started
   */ get isCrossBlockSelectionStarted() {
        return !!this.firstSelectedBlock && !!this.lastSelectedBlock;
    }
    /**
   * Change selection state of the next Block
   * Used for CBS via Shift + arrow keys
   *
   * @param {boolean} next - if true, toggle next block. Previous otherwise
   */ toggleBlockSelectedState(e = !0) {
        const { BlockManager: t1, BlockSelection: o } = this.Editor;
        this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = t1.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = !0, o.clearCache(), b.get().removeAllRanges());
        const i = t1.blocks.indexOf(this.lastSelectedBlock) + (e ? 1 : -1), n = t1.blocks[i];
        n && (this.lastSelectedBlock.selected !== n.selected ? (n.selected = !0, o.clearCache()) : (this.lastSelectedBlock.selected = !1, o.clearCache()), this.lastSelectedBlock = n, this.Editor.InlineToolbar.close(), n.holder.scrollIntoView({
            block: "nearest"
        }));
    }
    /**
   * Clear saved state
   *
   * @param {Event} reason - event caused clear of selection
   */ clear(e) {
        const { BlockManager: t1, BlockSelection: o, Caret: i } = this.Editor, n = t1.blocks.indexOf(this.firstSelectedBlock), r = t1.blocks.indexOf(this.lastSelectedBlock);
        if (o.anyBlockSelected && n > -1 && r > -1 && e && e instanceof KeyboardEvent) switch(e.keyCode){
            case v.DOWN:
            case v.RIGHT:
                i.setToBlock(t1.blocks[Math.max(n, r)], i.positions.END);
                break;
            case v.UP:
            case v.LEFT:
                i.setToBlock(t1.blocks[Math.min(n, r)], i.positions.START);
                break;
            default:
                i.setToBlock(t1.blocks[Math.max(n, r)], i.positions.END);
        }
        this.firstSelectedBlock = this.lastSelectedBlock = null;
    }
    /**
   * Enables Cross Block Selection
   *
   * @param {MouseEvent} event - mouse down event
   */ enableCrossBlockSelection(e) {
        const { UI: t1 } = this.Editor;
        b.isCollapsed || this.Editor.BlockSelection.clearSelection(e), t1.nodes.redactor.contains(e.target) ? this.watchSelection(e) : this.Editor.BlockSelection.clearSelection(e);
    }
    /**
   * Change blocks selection state between passed two blocks.
   *
   * @param {Block} firstBlock - first block in range
   * @param {Block} lastBlock - last block in range
   */ toggleBlocksSelectedState(e, t1) {
        const { BlockManager: o, BlockSelection: i } = this.Editor, n = o.blocks.indexOf(e), r = o.blocks.indexOf(t1), a = e.selected !== t1.selected;
        for(let l = Math.min(n, r); l <= Math.max(n, r); l++){
            const d = o.blocks[l];
            d !== this.firstSelectedBlock && d !== (a ? e : t1) && (o.blocks[l].selected = !o.blocks[l].selected, i.clearCache());
        }
    }
}
class ri extends y {
    constructor(){
        super(...arguments), this.isStartedAtEditor = !1;
    }
    /**
   * Toggle read-only state
   *
   * if state is true:
   *  - disable all drag-n-drop event handlers
   *
   * if state is false:
   *  - restore drag-n-drop event handlers
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */ toggleReadOnly(e) {
        e ? this.disableModuleBindings() : this.enableModuleBindings();
    }
    /**
   * Add drag events listeners to editor zone
   */ enableModuleBindings() {
        const { UI: e } = this.Editor;
        this.readOnlyMutableListeners.on(e.nodes.holder, "drop", async (t1)=>{
            await this.processDrop(t1);
        }, !0), this.readOnlyMutableListeners.on(e.nodes.holder, "dragstart", ()=>{
            this.processDragStart();
        }), this.readOnlyMutableListeners.on(e.nodes.holder, "dragover", (t1)=>{
            this.processDragOver(t1);
        }, !0);
    }
    /**
   * Unbind drag-n-drop event handlers
   */ disableModuleBindings() {
        this.readOnlyMutableListeners.clearAll();
    }
    /**
   * Handle drop event
   *
   * @param {DragEvent} dropEvent - drop event
   */ async processDrop(e) {
        const { BlockManager: t1, Caret: o, Paste: i } = this.Editor;
        e.preventDefault(), t1.blocks.forEach((r)=>{
            r.dropTarget = !1;
        }), b.isAtEditor && !b.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = !1;
        const n = t1.setCurrentBlockByChildNode(e.target);
        if (n) this.Editor.Caret.setToBlock(n, o.positions.END);
        else {
            const r = t1.setCurrentBlockByChildNode(t1.lastBlock.holder);
            this.Editor.Caret.setToBlock(r, o.positions.END);
        }
        await i.processDataTransfer(e.dataTransfer, !0);
    }
    /**
   * Handle drag start event
   */ processDragStart() {
        b.isAtEditor && !b.isCollapsed && (this.isStartedAtEditor = !0), this.Editor.InlineToolbar.close();
    }
    /**
   * @param {DragEvent} dragEvent - drag event
   */ processDragOver(e) {
        e.preventDefault();
    }
}
class ai extends y {
    /**
   * Prepare the module
   *
   * @param options - options used by the modification observer module
   * @param options.config - Editor configuration object
   * @param options.eventsDispatcher - common Editor event bus
   */ constructor({ config: e, eventsDispatcher: t1 }){
        super({
            config: e,
            eventsDispatcher: t1
        }), this.disabled = !1, this.batchingTimeout = null, this.batchingOnChangeQueue = /* @__PURE__ */ new Map(), this.batchTime = 400, this.mutationObserver = new MutationObserver((o)=>{
            this.redactorChanged(o);
        }), this.eventsDispatcher.on(pt, (o)=>{
            this.particularBlockChanged(o.event);
        }), this.eventsDispatcher.on(ft, ()=>{
            this.disable();
        }), this.eventsDispatcher.on(gt, ()=>{
            this.enable();
        });
    }
    /**
   * Enables onChange event
   */ enable() {
        this.mutationObserver.observe(this.Editor.UI.nodes.redactor, {
            childList: !0,
            subtree: !0,
            characterData: !0,
            attributes: !0
        }), this.disabled = !1;
    }
    /**
   * Disables onChange event
   */ disable() {
        this.mutationObserver.disconnect(), this.disabled = !0;
    }
    /**
   * Call onChange event passed to Editor.js configuration
   *
   * @param event - some of our custom change events
   */ particularBlockChanged(e) {
        this.disabled || !M(this.config.onChange) || (this.batchingOnChangeQueue.set(`block:${e.detail.target.id}:event:${e.type}`, e), this.batchingTimeout && clearTimeout(this.batchingTimeout), this.batchingTimeout = setTimeout(()=>{
            let t1;
            this.batchingOnChangeQueue.size === 1 ? t1 = this.batchingOnChangeQueue.values().next().value : t1 = Array.from(this.batchingOnChangeQueue.values()), this.config.onChange && this.config.onChange(this.Editor.API.methods, t1), this.batchingOnChangeQueue.clear();
        }, this.batchTime));
    }
    /**
   * Fired on every blocks wrapper dom change
   *
   * @param mutations - mutations happened
   */ redactorChanged(e) {
        this.eventsDispatcher.emit(Ae, {
            mutations: e
        });
    }
}
const Ct = class extends y {
    constructor(){
        super(...arguments), this.MIME_TYPE = "application/x-editor-js", this.toolsTags = {}, this.tagsByTool = {}, this.toolsPatterns = [], this.toolsFiles = {}, this.exceptionList = [], this.processTool = (s1)=>{
            try {
                const e = s1.create({}, {}, !1);
                if (s1.pasteConfig === !1) {
                    this.exceptionList.push(s1.name);
                    return;
                }
                if (!M(e.onPaste)) return;
                this.getTagsConfig(s1), this.getFilesConfig(s1), this.getPatternsConfig(s1);
            } catch (e) {
                T(`Paste handling for \xab${s1.name}\xbb Tool hasn't been set up because of the error`, "warn", e);
            }
        }, this.handlePasteEvent = async (s1)=>{
            const { BlockManager: e, Toolbar: t1 } = this.Editor, o = e.setCurrentBlockByChildNode(s1.target);
            !o || this.isNativeBehaviour(s1.target) && !s1.clipboardData.types.includes("Files") || o && this.exceptionList.includes(o.name) || (s1.preventDefault(), this.processDataTransfer(s1.clipboardData), t1.close());
        };
    }
    /**
   * Set onPaste callback and collect tools` paste configurations
   */ async prepare() {
        this.processTools();
    }
    /**
   * Set read-only state
   *
   * @param {boolean} readOnlyEnabled - read only flag value
   */ toggleReadOnly(s1) {
        s1 ? this.unsetCallback() : this.setCallback();
    }
    /**
   * Handle pasted or dropped data transfer object
   *
   * @param {DataTransfer} dataTransfer - pasted or dropped data transfer object
   * @param {boolean} isDragNDrop - true if data transfer comes from drag'n'drop events
   */ async processDataTransfer(s1, e = !1) {
        const { Tools: t1 } = this.Editor, o = s1.types;
        if ((o.includes ? o.includes("Files") : o.contains("Files")) && !W(this.toolsFiles)) {
            await this.processFiles(s1.files);
            return;
        }
        const n = s1.getData(this.MIME_TYPE), r = s1.getData("text/plain");
        let a = s1.getData("text/html");
        if (n) try {
            this.insertEditorJSData(JSON.parse(n));
            return;
        } catch  {}
        e && r.trim() && a.trim() && (a = "<p>" + (a.trim() ? a : r) + "</p>");
        const l = Object.keys(this.toolsTags).reduce((h, f)=>(h[f.toLowerCase()] = this.toolsTags[f].sanitizationConfig ?? {}, h), {}), d = Object.assign({}, l, t1.getAllInlineToolsSanitizeConfig(), {
            br: {}
        }), u = V(a, d);
        !u.trim() || u.trim() === r || !c.isHTMLString(u) ? await this.processText(r) : await this.processText(u, !0);
    }
    /**
   * Process pasted text and divide them into Blocks
   *
   * @param {string} data - text to process. Can be HTML or plain.
   * @param {boolean} isHTML - if passed string is HTML, this parameter should be true
   */ async processText(s1, e = !1) {
        const { Caret: t1, BlockManager: o } = this.Editor, i = e ? this.processHTML(s1) : this.processPlain(s1);
        if (!i.length) return;
        if (i.length === 1) {
            i[0].isBlock ? this.processSingleBlock(i.pop()) : this.processInlinePaste(i.pop());
            return;
        }
        const r = o.currentBlock && o.currentBlock.tool.isDefault && o.currentBlock.isEmpty;
        i.map(async (a, l)=>this.insertBlock(a, l === 0 && r)), o.currentBlock && t1.setToBlock(o.currentBlock, t1.positions.END);
    }
    /**
   * Set onPaste callback handler
   */ setCallback() {
        this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
    }
    /**
   * Unset onPaste callback handler
   */ unsetCallback() {
        this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
    }
    /**
   * Get and process tool`s paste configs
   */ processTools() {
        const s1 = this.Editor.Tools.blockTools;
        Array.from(s1.values()).forEach(this.processTool);
    }
    /**
   * Get tags name list from either tag name or sanitization config.
   *
   * @param {string | object} tagOrSanitizeConfig - tag name or sanitize config object.
   * @returns {string[]} array of tags.
   */ collectTagNames(s1) {
        return G(s1) ? [
            s1
        ] : D(s1) ? Object.keys(s1) : [];
    }
    /**
   * Get tags to substitute by Tool
   *
   * @param tool - BlockTool object
   */ getTagsConfig(s1) {
        if (s1.pasteConfig === !1) return;
        const e = s1.pasteConfig.tags || [], t1 = [];
        e.forEach((o)=>{
            const i = this.collectTagNames(o);
            t1.push(...i), i.forEach((n)=>{
                if (Object.prototype.hasOwnProperty.call(this.toolsTags, n)) {
                    T(`Paste handler for \xab${s1.name}\xbb Tool on \xab${n}\xbb tag is skipped because it is already used by \xab${this.toolsTags[n].tool.name}\xbb Tool.`, "warn");
                    return;
                }
                const r = D(o) ? o[n] : null;
                this.toolsTags[n.toUpperCase()] = {
                    tool: s1,
                    sanitizationConfig: r
                };
            });
        }), this.tagsByTool[s1.name] = t1.map((o)=>o.toUpperCase());
    }
    /**
   * Get files` types and extensions to substitute by Tool
   *
   * @param tool - BlockTool object
   */ getFilesConfig(s1) {
        if (s1.pasteConfig === !1) return;
        const { files: e = {} } = s1.pasteConfig;
        let { extensions: t1, mimeTypes: o } = e;
        !t1 && !o || (t1 && !Array.isArray(t1) && (T(`\xabextensions\xbb property of the onDrop config for \xab${s1.name}\xbb Tool should be an array`), t1 = []), o && !Array.isArray(o) && (T(`\xabmimeTypes\xbb property of the onDrop config for \xab${s1.name}\xbb Tool should be an array`), o = []), o && (o = o.filter((i)=>jt(i) ? !0 : (T(`MIME type value \xab${i}\xbb for the \xab${s1.name}\xbb Tool is not a valid MIME type`, "warn"), !1))), this.toolsFiles[s1.name] = {
            extensions: t1 || [],
            mimeTypes: o || []
        });
    }
    /**
   * Get RegExp patterns to substitute by Tool
   *
   * @param tool - BlockTool object
   */ getPatternsConfig(s1) {
        s1.pasteConfig === !1 || !s1.pasteConfig.patterns || W(s1.pasteConfig.patterns) || Object.entries(s1.pasteConfig.patterns).forEach(([e, t1])=>{
            t1 instanceof RegExp || T(`Pattern ${t1} for \xab${s1.name}\xbb Tool is skipped because it should be a Regexp instance.`, "warn"), this.toolsPatterns.push({
                key: e,
                pattern: t1,
                tool: s1
            });
        });
    }
    /**
   * Check if browser behavior suits better
   *
   * @param {EventTarget} element - element where content has been pasted
   * @returns {boolean}
   */ isNativeBehaviour(s1) {
        return c.isNativeInput(s1);
    }
    /**
   * Get files from data transfer object and insert related Tools
   *
   * @param {FileList} items - pasted or dropped items
   */ async processFiles(s1) {
        const { BlockManager: e } = this.Editor;
        let t1;
        t1 = await Promise.all(Array.from(s1).map((n)=>this.processFile(n))), t1 = t1.filter((n)=>!!n);
        const i = e.currentBlock.tool.isDefault && e.currentBlock.isEmpty;
        t1.forEach((n, r)=>{
            e.paste(n.type, n.event, r === 0 && i);
        });
    }
    /**
   * Get information about file and find Tool to handle it
   *
   * @param {File} file - file to process
   */ async processFile(s1) {
        const e = Ut(s1), t1 = Object.entries(this.toolsFiles).find(([n, { mimeTypes: r, extensions: a }])=>{
            const [l, d] = s1.type.split("/"), u = a.find((f)=>f.toLowerCase() === e.toLowerCase()), h = r.find((f)=>{
                const [x, p] = f.split("/");
                return x === l && (p === d || p === "*");
            });
            return !!u || !!h;
        });
        if (!t1) return;
        const [o] = t1;
        return {
            event: this.composePasteEvent("file", {
                file: s1
            }),
            type: o
        };
    }
    /**
   * Split HTML string to blocks and return it as array of Block data
   *
   * @param {string} innerHTML - html string to process
   * @returns {PasteData[]}
   */ processHTML(s1) {
        const { Tools: e } = this.Editor, t1 = c.make("DIV");
        return t1.innerHTML = s1, this.getNodes(t1).map((i)=>{
            let n, r = e.defaultTool, a = !1;
            switch(i.nodeType){
                case Node.DOCUMENT_FRAGMENT_NODE:
                    n = c.make("div"), n.appendChild(i);
                    break;
                case Node.ELEMENT_NODE:
                    n = i, a = !0, this.toolsTags[n.tagName] && (r = this.toolsTags[n.tagName].tool);
                    break;
            }
            const { tags: l } = r.pasteConfig || {
                tags: []
            }, d = l.reduce((f, x)=>(this.collectTagNames(x).forEach((m)=>{
                    const L = D(x) ? x[m] : null;
                    f[m.toLowerCase()] = L || {};
                }), f), {}), u = Object.assign({}, d, r.baseSanitizeConfig);
            if (n.tagName.toLowerCase() === "table") {
                const f = V(n.outerHTML, u);
                n = c.make("div", void 0, {
                    innerHTML: f
                }).firstChild;
            } else n.innerHTML = V(n.innerHTML, u);
            const h = this.composePasteEvent("tag", {
                data: n
            });
            return {
                content: n,
                isBlock: a,
                tool: r.name,
                event: h
            };
        }).filter((i)=>{
            const n = c.isEmpty(i.content), r = c.isSingleTag(i.content);
            return !n || r;
        });
    }
    /**
   * Split plain text by new line symbols and return it as array of Block data
   *
   * @param {string} plain - string to process
   * @returns {PasteData[]}
   */ processPlain(s1) {
        const { defaultBlock: e } = this.config;
        if (!s1) return [];
        const t1 = e;
        return s1.split(/\r?\n/).filter((o)=>o.trim()).map((o)=>{
            const i = c.make("div");
            i.textContent = o;
            const n = this.composePasteEvent("tag", {
                data: i
            });
            return {
                content: i,
                tool: t1,
                isBlock: !1,
                event: n
            };
        });
    }
    /**
   * Process paste of single Block tool content
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */ async processSingleBlock(s1) {
        const { Caret: e, BlockManager: t1 } = this.Editor, { currentBlock: o } = t1;
        if (!o || s1.tool !== o.name || !c.containsOnlyInlineElements(s1.content.innerHTML)) {
            this.insertBlock(s1, (o == null ? void 0 : o.tool.isDefault) && o.isEmpty);
            return;
        }
        e.insertContentAtCaretPosition(s1.content.innerHTML);
    }
    /**
   * Process paste to single Block:
   * 1. Find patterns` matches
   * 2. Insert new block if it is not the same type as current one
   * 3. Just insert text if there is no substitutions
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */ async processInlinePaste(s1) {
        const { BlockManager: e, Caret: t1 } = this.Editor, { content: o } = s1;
        if (e.currentBlock && e.currentBlock.tool.isDefault && o.textContent.length < Ct.PATTERN_PROCESSING_MAX_LENGTH) {
            const n = await this.processPattern(o.textContent);
            if (n) {
                const r = e.currentBlock && e.currentBlock.tool.isDefault && e.currentBlock.isEmpty, a = e.paste(n.tool, n.event, r);
                t1.setToBlock(a, t1.positions.END);
                return;
            }
        }
        if (e.currentBlock && e.currentBlock.currentInput) {
            const n = e.currentBlock.tool.baseSanitizeConfig;
            document.execCommand("insertHTML", !1, V(o.innerHTML, n));
        } else this.insertBlock(s1);
    }
    /**
   * Get patterns` matches
   *
   * @param {string} text - text to process
   * @returns {Promise<{event: PasteEvent, tool: string}>}
   */ async processPattern(s1) {
        const e = this.toolsPatterns.find((o)=>{
            const i = o.pattern.exec(s1);
            return i ? s1 === i.shift() : !1;
        });
        return e ? {
            event: this.composePasteEvent("pattern", {
                key: e.key,
                data: s1
            }),
            tool: e.tool.name
        } : void 0;
    }
    /**
   * Insert pasted Block content to Editor
   *
   * @param {PasteData} data - data to insert
   * @param {boolean} canReplaceCurrentBlock - if true and is current Block is empty, will replace current Block
   * @returns {void}
   */ insertBlock(s1, e = !1) {
        const { BlockManager: t1, Caret: o } = this.Editor, { currentBlock: i } = t1;
        let n;
        if (e && i && i.isEmpty) {
            n = t1.paste(s1.tool, s1.event, !0), o.setToBlock(n, o.positions.END);
            return;
        }
        n = t1.paste(s1.tool, s1.event), o.setToBlock(n, o.positions.END);
    }
    /**
   * Insert data passed as application/x-editor-js JSON
   *
   * @param {Array} blocks — Blocks' data to insert
   * @returns {void}
   */ insertEditorJSData(s1) {
        const { BlockManager: e, Caret: t1, Tools: o } = this.Editor;
        bt(s1, (n)=>o.blockTools.get(n).sanitizeConfig).forEach(({ tool: n, data: r }, a)=>{
            let l = !1;
            a === 0 && (l = e.currentBlock && e.currentBlock.tool.isDefault && e.currentBlock.isEmpty);
            const d = e.insert({
                tool: n,
                data: r,
                replace: l
            });
            t1.setToBlock(d, t1.positions.END);
        });
    }
    /**
   * Fetch nodes from Element node
   *
   * @param {Node} node - current node
   * @param {Node[]} nodes - processed nodes
   * @param {Node} destNode - destination node
   */ processElementNode(s1, e, t1) {
        const o = Object.keys(this.toolsTags), i = s1, { tool: n } = this.toolsTags[i.tagName] || {}, r = this.tagsByTool[n == null ? void 0 : n.name] || [], a = o.includes(i.tagName), l = c.blockElements.includes(i.tagName.toLowerCase()), d = Array.from(i.children).some(({ tagName: h })=>o.includes(h) && !r.includes(h)), u = Array.from(i.children).some(({ tagName: h })=>c.blockElements.includes(h.toLowerCase()));
        if (!l && !a && !d) return t1.appendChild(i), [
            ...e,
            t1
        ];
        if (a && !d || l && !u && !d) return [
            ...e,
            t1,
            i
        ];
    }
    /**
   * Recursively divide HTML string to two types of nodes:
   * 1. Block element
   * 2. Document Fragments contained text and markup tags like a, b, i etc.
   *
   * @param {Node} wrapper - wrapper of paster HTML content
   * @returns {Node[]}
   */ getNodes(s1) {
        const e = Array.from(s1.childNodes);
        let t1;
        const o = (i, n)=>{
            if (c.isEmpty(n) && !c.isSingleTag(n)) return i;
            const r = i[i.length - 1];
            let a = new DocumentFragment();
            switch(r && c.isFragment(r) && (a = i.pop()), n.nodeType){
                case Node.ELEMENT_NODE:
                    if (t1 = this.processElementNode(n, i, a), t1) return t1;
                    break;
                case Node.TEXT_NODE:
                    return a.appendChild(n), [
                        ...i,
                        a
                    ];
                default:
                    return [
                        ...i,
                        a
                    ];
            }
            return [
                ...i,
                ...Array.from(n.childNodes).reduce(o, [])
            ];
        };
        return e.reduce(o, []);
    }
    /**
   * Compose paste event with passed type and detail
   *
   * @param {string} type - event type
   * @param {PasteEventDetail} detail - event detail
   */ composePasteEvent(s1, e) {
        return new CustomEvent(s1, {
            detail: e
        });
    }
};
let Tt = Ct;
Tt.PATTERN_PROCESSING_MAX_LENGTH = 450;
class li extends y {
    constructor(){
        super(...arguments), this.toolsDontSupportReadOnly = [], this.readOnlyEnabled = !1;
    }
    /**
   * Returns state of read only mode
   */ get isEnabled() {
        return this.readOnlyEnabled;
    }
    /**
   * Set initial state
   */ async prepare() {
        const { Tools: e } = this.Editor, { blockTools: t1 } = e, o = [];
        Array.from(t1.entries()).forEach(([i, n])=>{
            n.isReadOnlySupported || o.push(i);
        }), this.toolsDontSupportReadOnly = o, this.config.readOnly && o.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly);
    }
    /**
   * Set read-only mode or toggle current state
   * Call all Modules `toggleReadOnly` method and re-render Editor
   *
   * @param {boolean} state - (optional) read-only state or toggle
   */ async toggle(e = !this.readOnlyEnabled) {
        e && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError();
        const t1 = this.readOnlyEnabled;
        this.readOnlyEnabled = e;
        for(const i in this.Editor)this.Editor[i].toggleReadOnly && this.Editor[i].toggleReadOnly(e);
        if (t1 === e) return this.readOnlyEnabled;
        const o = await this.Editor.Saver.save();
        return await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(o.blocks), this.readOnlyEnabled;
    }
    /**
   * Throws an error about tools which don't support read-only mode
   */ throwCriticalError() {
        throw new ut(`To enable read-only mode all connected tools should support it. Tools ${this.toolsDontSupportReadOnly.join(", ")} don't support read-only mode.`);
    }
}
class fe extends y {
    constructor(){
        super(...arguments), this.isRectSelectionActivated = !1, this.SCROLL_SPEED = 3, this.HEIGHT_OF_SCROLL_ZONE = 40, this.BOTTOM_SCROLL_ZONE = 1, this.TOP_SCROLL_ZONE = 2, this.MAIN_MOUSE_BUTTON = 0, this.mousedown = !1, this.isScrolling = !1, this.inScrollZone = null, this.startX = 0, this.startY = 0, this.mouseX = 0, this.mouseY = 0, this.stackOfSelected = [], this.listenerIds = [];
    }
    /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */ static get CSS() {
        return {
            overlay: "codex-editor-overlay",
            overlayContainer: "codex-editor-overlay__container",
            rect: "codex-editor-overlay__rectangle",
            topScrollZone: "codex-editor-overlay__scroll-zone--top",
            bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
        };
    }
    /**
   * Module Preparation
   * Creating rect and hang handlers
   */ prepare() {
        this.enableModuleBindings();
    }
    /**
   * Init rect params
   *
   * @param {number} pageX - X coord of mouse
   * @param {number} pageY - Y coord of mouse
   */ startSelection(e, t1) {
        const o = document.elementFromPoint(e - window.pageXOffset, t1 - window.pageYOffset);
        o.closest(`.${this.Editor.Toolbar.CSS.toolbar}`) || (this.Editor.BlockSelection.allBlocksSelected = !1, this.clearSelection(), this.stackOfSelected = []);
        const n = [
            `.${R.CSS.content}`,
            `.${this.Editor.Toolbar.CSS.toolbar}`,
            `.${this.Editor.InlineToolbar.CSS.inlineToolbar}`
        ], r = o.closest("." + this.Editor.UI.CSS.editorWrapper), a = n.some((l)=>!!o.closest(l));
        !r || a || (this.mousedown = !0, this.startX = e, this.startY = t1);
    }
    /**
   * Clear all params to end selection
   */ endSelection() {
        this.mousedown = !1, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
    }
    /**
   * is RectSelection Activated
   */ isRectActivated() {
        return this.isRectSelectionActivated;
    }
    /**
   * Mark that selection is end
   */ clearSelection() {
        this.isRectSelectionActivated = !1;
    }
    /**
   * Sets Module necessary event handlers
   */ enableModuleBindings() {
        const { container: e } = this.genHTML();
        this.listeners.on(e, "mousedown", (t1)=>{
            this.processMouseDown(t1);
        }, !1), this.listeners.on(document.body, "mousemove", Ie((t1)=>{
            this.processMouseMove(t1);
        }, 10), {
            passive: !0
        }), this.listeners.on(document.body, "mouseleave", ()=>{
            this.processMouseLeave();
        }), this.listeners.on(window, "scroll", Ie((t1)=>{
            this.processScroll(t1);
        }, 10), {
            passive: !0
        }), this.listeners.on(document.body, "mouseup", ()=>{
            this.processMouseUp();
        }, !1);
    }
    /**
   * Handle mouse down events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */ processMouseDown(e) {
        if (e.button !== this.MAIN_MOUSE_BUTTON) return;
        e.target.closest(c.allInputsSelector) !== null || this.startSelection(e.pageX, e.pageY);
    }
    /**
   * Handle mouse move events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */ processMouseMove(e) {
        this.changingRectangle(e), this.scrollByZones(e.clientY);
    }
    /**
   * Handle mouse leave
   */ processMouseLeave() {
        this.clearSelection(), this.endSelection();
    }
    /**
   * @param {MouseEvent} mouseEvent - mouse event payload
   */ processScroll(e) {
        this.changingRectangle(e);
    }
    /**
   * Handle mouse up
   */ processMouseUp() {
        this.clearSelection(), this.endSelection();
    }
    /**
   * Scroll If mouse in scroll zone
   *
   * @param {number} clientY - Y coord of mouse
   */ scrollByZones(e) {
        if (this.inScrollZone = null, e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), !this.inScrollZone) {
            this.isScrolling = !1;
            return;
        }
        this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = !0);
    }
    /**
   * Generates required HTML elements
   *
   * @returns {Object<string, Element>}
   */ genHTML() {
        const { UI: e } = this.Editor, t1 = e.nodes.holder.querySelector("." + e.CSS.editorWrapper), o = c.make("div", fe.CSS.overlay, {}), i = c.make("div", fe.CSS.overlayContainer, {}), n = c.make("div", fe.CSS.rect, {});
        return i.appendChild(n), o.appendChild(i), t1.appendChild(o), this.overlayRectangle = n, {
            container: t1,
            overlay: o
        };
    }
    /**
   * Activates scrolling if blockSelection is active and mouse is in scroll zone
   *
   * @param {number} speed - speed of scrolling
   */ scrollVertical(e) {
        if (!(this.inScrollZone && this.mousedown)) return;
        const t1 = window.pageYOffset;
        window.scrollBy(0, e), this.mouseY += window.pageYOffset - t1, setTimeout(()=>{
            this.scrollVertical(e);
        }, 0);
    }
    /**
   * Handles the change in the rectangle and its effect
   *
   * @param {MouseEvent} event - mouse event
   */ changingRectangle(e) {
        if (!this.mousedown) return;
        e.pageY !== void 0 && (this.mouseX = e.pageX, this.mouseY = e.pageY);
        const { rightPos: t1, leftPos: o, index: i } = this.genInfoForMouseSelection(), n = this.startX > t1 && this.mouseX > t1, r = this.startX < o && this.mouseX < o;
        this.rectCrossesBlocks = !(n || r), this.isRectSelectionActivated || (this.rectCrossesBlocks = !1, this.isRectSelectionActivated = !0, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), this.Editor.Toolbar.close(), i !== void 0 && (this.trySelectNextBlock(i), this.inverseSelection(), b.get().removeAllRanges());
    }
    /**
   * Shrink rect to singular point
   */ shrinkRectangleToPoint() {
        this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`;
    }
    /**
   * Select or unselect all of blocks in array if rect is out or in selectable area
   */ inverseSelection() {
        const t1 = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
        if (this.rectCrossesBlocks && !t1) for (const o of this.stackOfSelected)this.Editor.BlockSelection.selectBlockByIndex(o);
        if (!this.rectCrossesBlocks && t1) for (const o of this.stackOfSelected)this.Editor.BlockSelection.unSelectBlockByIndex(o);
    }
    /**
   * Updates size of rectangle
   */ updateRectangleSize() {
        this.mouseY >= this.startY ? (this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.mouseY - window.pageYOffset}px`) : (this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.top = `${this.mouseY - window.pageYOffset}px`), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.mouseX - window.pageXOffset}px`) : (this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.left = `${this.mouseX - window.pageXOffset}px`);
    }
    /**
   * Collects information needed to determine the behavior of the rectangle
   *
   * @returns {object} index - index next Block, leftPos - start of left border of Block, rightPos - right border
   */ genInfoForMouseSelection() {
        const t1 = document.body.offsetWidth / 2, o = this.mouseY - window.pageYOffset, i = document.elementFromPoint(t1, o), n = this.Editor.BlockManager.getBlockByChildNode(i);
        let r;
        n !== void 0 && (r = this.Editor.BlockManager.blocks.findIndex((h)=>h.holder === n.holder));
        const a = this.Editor.BlockManager.lastBlock.holder.querySelector("." + R.CSS.content), l = Number.parseInt(window.getComputedStyle(a).width, 10) / 2, d = t1 - l, u = t1 + l;
        return {
            index: r,
            leftPos: d,
            rightPos: u
        };
    }
    /**
   * Select block with index index
   *
   * @param index - index of block in redactor
   */ addBlockInSelection(e) {
        this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(e), this.stackOfSelected.push(e);
    }
    /**
   * Adds a block to the selection and determines which blocks should be selected
   *
   * @param {object} index - index of new block in the reactor
   */ trySelectNextBlock(e) {
        const t1 = this.stackOfSelected[this.stackOfSelected.length - 1] === e, o = this.stackOfSelected.length, i = 1, n = -1, r = 0;
        if (t1) return;
        const a = this.stackOfSelected[o - 1] - this.stackOfSelected[o - 2] > 0;
        let l = r;
        o > 1 && (l = a ? i : n);
        const d = e > this.stackOfSelected[o - 1] && l === i, u = e < this.stackOfSelected[o - 1] && l === n, f = !(d || u || l === r);
        if (!f && (e > this.stackOfSelected[o - 1] || this.stackOfSelected[o - 1] === void 0)) {
            let m = this.stackOfSelected[o - 1] + 1 || e;
            for(m; m <= e; m++)this.addBlockInSelection(m);
            return;
        }
        if (!f && e < this.stackOfSelected[o - 1]) {
            for(let m = this.stackOfSelected[o - 1] - 1; m >= e; m--)this.addBlockInSelection(m);
            return;
        }
        if (!f) return;
        let x = o - 1, p;
        for(e > this.stackOfSelected[o - 1] ? p = ()=>e > this.stackOfSelected[x] : p = ()=>e < this.stackOfSelected[x]; p();)this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[x]), this.stackOfSelected.pop(), x--;
    }
}
class ci extends y {
    /**
   * Renders passed blocks as one batch
   *
   * @param blocksData - blocks to render
   */ async render(e) {
        return new Promise((t1)=>{
            const { Tools: o, BlockManager: i } = this.Editor;
            if (e.length === 0) i.insert();
            else {
                const n = e.map(({ type: r, data: a, tunes: l, id: d })=>{
                    o.available.has(r) === !1 && (Y(`Tool \xab${r}\xbb is not found. Check 'tools' property at the Editor.js config.`, "warn"), a = this.composeStubDataForTool(r, a, d), r = o.stubTool);
                    let u;
                    try {
                        u = i.composeBlock({
                            id: d,
                            tool: r,
                            data: a,
                            tunes: l
                        });
                    } catch (h) {
                        T(`Block \xab${r}\xbb skipped because of plugins error`, "error", {
                            data: a,
                            error: h
                        }), a = this.composeStubDataForTool(r, a, d), r = o.stubTool, u = i.composeBlock({
                            id: d,
                            tool: r,
                            data: a,
                            tunes: l
                        });
                    }
                    return u;
                });
                i.insertMany(n);
            }
            window.requestIdleCallback(()=>{
                t1();
            }, {
                timeout: 2e3
            });
        });
    }
    /**
   * Create data for the Stub Tool that will be used instead of unavailable tool
   *
   * @param tool - unavailable tool name to stub
   * @param data - data of unavailable block
   * @param [id] - id of unavailable block
   */ composeStubDataForTool(e, t1, o) {
        const { Tools: i } = this.Editor;
        let n = e;
        if (i.unavailable.has(e)) {
            const r = i.unavailable.get(e).toolbox;
            r !== void 0 && r[0].title !== void 0 && (n = r[0].title);
        }
        return {
            savedData: {
                id: o,
                type: e,
                data: t1
            },
            title: n
        };
    }
}
class di extends y {
    /**
   * Composes new chain of Promises to fire them alternatelly
   *
   * @returns {OutputData}
   */ async save() {
        const { BlockManager: e, Tools: t1 } = this.Editor, o = e.blocks, i = [];
        try {
            o.forEach((a)=>{
                i.push(this.getSavedData(a));
            });
            const n = await Promise.all(i), r = await bt(n, (a)=>t1.blockTools.get(a).sanitizeConfig);
            return this.makeOutput(r);
        } catch (n) {
            Y("Saving failed due to the Error %o", "error", n);
        }
    }
    /**
   * Saves and validates
   *
   * @param {Block} block - Editor's Tool
   * @returns {ValidatedData} - Tool's validated data
   */ async getSavedData(e) {
        const t1 = await e.save(), o = t1 && await e.validate(t1.data);
        return {
            ...t1,
            isValid: o
        };
    }
    /**
   * Creates output object with saved data, time and version of editor
   *
   * @param {ValidatedData} allExtractedData - data extracted from Blocks
   * @returns {OutputData}
   */ makeOutput(e) {
        const t1 = [];
        return e.forEach(({ id: o, tool: i, data: n, tunes: r, isValid: a })=>{
            if (!a) {
                T(`Block \xab${i}\xbb skipped because saved data is invalid`);
                return;
            }
            if (i === this.Editor.Tools.stubTool) {
                t1.push(n);
                return;
            }
            const l = {
                id: o,
                type: i,
                data: n,
                ...!W(r) && {
                    tunes: r
                }
            };
            t1.push(l);
        }), {
            time: +/* @__PURE__ */ new Date(),
            blocks: t1,
            version: "2.29.1"
        };
    }
}
(function() {
    try {
        if (typeof document < "u") {
            var s1 = document.createElement("style");
            s1.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-paragraph[data-placeholder]:empty:before{content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:before{opacity:1}.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty:before,.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus:before{opacity:0}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")), document.head.appendChild(s1);
        }
    } catch (e) {
        console.error("vite-plugin-css-injected-by-js", e);
    }
})();
const hi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
/**
 * Base Paragraph Block for the Editor.js.
 * Represents a regular text block
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */ class Ke {
    /**
   * Default placeholder for Paragraph Tool
   *
   * @returns {string}
   * @class
   */ static get DEFAULT_PLACEHOLDER() {
        return "";
    }
    /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - constructor params
   * @param {ParagraphData} params.data - previously saved data
   * @param {ParagraphConfig} params.config - user config for Tool
   * @param {object} params.api - editor.js api
   * @param {boolean} readOnly - read only mode flag
   */ constructor({ data: e, config: t1, api: o, readOnly: i }){
        this.api = o, this.readOnly = i, this._CSS = {
            block: this.api.styles.block,
            wrapper: "ce-paragraph"
        }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = t1.placeholder ? t1.placeholder : Ke.DEFAULT_PLACEHOLDER, this._data = {}, this._element = null, this._preserveBlank = t1.preserveBlank !== void 0 ? t1.preserveBlank : !1, this.data = e;
    }
    /**
   * Check if text content is empty and set empty string to inner html.
   * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
   *
   * @param {KeyboardEvent} e - key up event
   */ onKeyUp(e) {
        if (e.code !== "Backspace" && e.code !== "Delete") return;
        const { textContent: t1 } = this._element;
        t1 === "" && (this._element.innerHTML = "");
    }
    /**
   * Create Tool's view
   *
   * @returns {HTMLElement}
   * @private
   */ drawView() {
        const e = document.createElement("DIV");
        return e.classList.add(this._CSS.wrapper, this._CSS.block), e.contentEditable = !1, e.dataset.placeholder = this.api.i18n.t(this._placeholder), this._data.text && (e.innerHTML = this._data.text), this.readOnly || (e.contentEditable = !0, e.addEventListener("keyup", this.onKeyUp)), e;
    }
    /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement}
   */ render() {
        return this._element = this.drawView(), this._element;
    }
    /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {ParagraphData} data
   * @public
   */ merge(e) {
        const t1 = {
            text: this.data.text + e.text
        };
        this.data = t1;
    }
    /**
   * Validate Paragraph block data:
   * - check for emptiness
   *
   * @param {ParagraphData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */ validate(e) {
        return !(e.text.trim() === "" && !this._preserveBlank);
    }
    /**
   * Extract Tool's data from the view
   *
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {ParagraphData} - saved data
   * @public
   */ save(e) {
        return {
            text: e.innerHTML
        };
    }
    /**
   * On paste callback fired from Editor.
   *
   * @param {PasteEvent} event - event with pasted data
   */ onPaste(e) {
        const t1 = {
            text: e.detail.data.innerHTML
        };
        this.data = t1;
    }
    /**
   * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
   */ static get conversionConfig() {
        return {
            export: "text",
            // to convert Paragraph to other block, use 'text' property of saved data
            import: "text"
        };
    }
    /**
   * Sanitizer rules
   */ static get sanitize() {
        return {
            text: {
                br: !0
            }
        };
    }
    /**
   * Returns true to notify the core that read-only mode is supported
   *
   * @returns {boolean}
   */ static get isReadOnlySupported() {
        return !0;
    }
    /**
   * Get current Tools`s data
   *
   * @returns {ParagraphData} Current data
   * @private
   */ get data() {
        if (this._element !== null) {
            const e = this._element.innerHTML;
            this._data.text = e;
        }
        return this._data;
    }
    /**
   * Store data in plugin:
   * - at the this._data property
   * - at the HTML
   *
   * @param {ParagraphData} data — data to set
   * @private
   */ set data(e) {
        this._data = e || {}, this._element !== null && this.hydrate();
    }
    /**
   * Fill tool's view with data
   */ hydrate() {
        window.requestAnimationFrame(()=>{
            this._element.innerHTML = this._data.text || "";
        });
    }
    /**
   * Used by Editor paste handling API.
   * Provides configuration to handle P tags.
   *
   * @returns {{tags: string[]}}
   */ static get pasteConfig() {
        return {
            tags: [
                "P"
            ]
        };
    }
    /**
   * Icon and title for displaying at the Toolbox
   *
   * @returns {{icon: string, title: string}}
   */ static get toolbox() {
        return {
            icon: hi,
            title: "Text"
        };
    }
}
class Xe {
    constructor(){
        this.commandName = "bold", this.CSS = {
            button: "ce-inline-tool",
            buttonActive: "ce-inline-tool--active",
            buttonModifier: "ce-inline-tool--bold"
        }, this.nodes = {
            button: void 0
        };
    }
    /**
   * Sanitizer Rule
   * Leave <b> tags
   *
   * @returns {object}
   */ static get sanitize() {
        return {
            b: {}
        };
    }
    /**
   * Create button for Inline Toolbar
   */ render() {
        return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = _o, this.nodes.button;
    }
    /**
   * Wrap range with <b> tag
   */ surround() {
        document.execCommand(this.commandName);
    }
    /**
   * Check selection and set activated state to button if there are <b> tag
   *
   * @returns {boolean}
   */ checkState() {
        const e = document.queryCommandState(this.commandName);
        return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
    }
    /**
   * Set a shortcut
   *
   * @returns {boolean}
   */ get shortcut() {
        return "CMD+B";
    }
}
Xe.isInline = !0;
Xe.title = "Bold";
class Ve {
    constructor(){
        this.commandName = "italic", this.CSS = {
            button: "ce-inline-tool",
            buttonActive: "ce-inline-tool--active",
            buttonModifier: "ce-inline-tool--italic"
        }, this.nodes = {
            button: null
        };
    }
    /**
   * Sanitizer Rule
   * Leave <i> tags
   *
   * @returns {object}
   */ static get sanitize() {
        return {
            i: {}
        };
    }
    /**
   * Create button for Inline Toolbar
   */ render() {
        return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Do, this.nodes.button;
    }
    /**
   * Wrap range with <i> tag
   */ surround() {
        document.execCommand(this.commandName);
    }
    /**
   * Check selection and set activated state to button if there are <i> tag
   */ checkState() {
        const e = document.queryCommandState(this.commandName);
        return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
    }
    /**
   * Set a shortcut
   */ get shortcut() {
        return "CMD+I";
    }
}
Ve.isInline = !0;
Ve.title = "Italic";
class qe {
    /**
   * @param api - Editor.js API
   */ constructor({ api: e }){
        this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
            button: "ce-inline-tool",
            buttonActive: "ce-inline-tool--active",
            buttonModifier: "ce-inline-tool--link",
            buttonUnlink: "ce-inline-tool--unlink",
            input: "ce-inline-tool-input",
            inputShowed: "ce-inline-tool-input--showed"
        }, this.nodes = {
            button: null,
            input: null
        }, this.inputOpened = !1, this.toolbar = e.toolbar, this.inlineToolbar = e.inlineToolbar, this.notifier = e.notifier, this.i18n = e.i18n, this.selection = new b();
    }
    /**
   * Sanitizer Rule
   * Leave <a> tags
   *
   * @returns {object}
   */ static get sanitize() {
        return {
            a: {
                href: !0,
                target: "_blank",
                rel: "nofollow"
            }
        };
    }
    /**
   * Create button for Inline Toolbar
   */ render() {
        return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = it, this.nodes.button;
    }
    /**
   * Input for the link
   */ renderActions() {
        return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", (e)=>{
            e.keyCode === this.ENTER_KEY && this.enterPressed(e);
        }), this.nodes.input;
    }
    /**
   * Handle clicks on the Inline Toolbar icon
   *
   * @param {Range} range - range to wrap with link
   */ surround(e) {
        if (e) {
            this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
            const t1 = this.selection.findParentTag("A");
            if (t1) {
                this.selection.expandToTag(t1), this.unlink(), this.closeActions(), this.checkState(), this.toolbar.close();
                return;
            }
        }
        this.toggleActions();
    }
    /**
   * Check selection and set activated state to button if there are <a> tag
   */ checkState() {
        const e = this.selection.findParentTag("A");
        if (e) {
            this.nodes.button.innerHTML = zo, this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
            const t1 = e.getAttribute("href");
            this.nodes.input.value = t1 !== "null" ? t1 : "", this.selection.save();
        } else this.nodes.button.innerHTML = it, this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
        return !!e;
    }
    /**
   * Function called with Inline Toolbar closing
   */ clear() {
        this.closeActions();
    }
    /**
   * Set a shortcut
   */ get shortcut() {
        return "CMD+K";
    }
    /**
   * Show/close link input
   */ toggleActions() {
        this.inputOpened ? this.closeActions(!1) : this.openActions(!0);
    }
    /**
   * @param {boolean} needFocus - on link creation we need to focus input. On editing - nope.
   */ openActions(e = !1) {
        this.nodes.input.classList.add(this.CSS.inputShowed), e && this.nodes.input.focus(), this.inputOpened = !0;
    }
    /**
   * Close input
   *
   * @param {boolean} clearSavedSelection — we don't need to clear saved selection
   *                                        on toggle-clicks on the icon of opened Toolbar
   */ closeActions(e = !0) {
        if (this.selection.isFakeBackgroundEnabled) {
            const t1 = new b();
            t1.save(), this.selection.restore(), this.selection.removeFakeBackground(), t1.restore();
        }
        this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", e && this.selection.clearSaved(), this.inputOpened = !1;
    }
    /**
   * Enter pressed on input
   *
   * @param {KeyboardEvent} event - enter keydown event
   */ enterPressed(e) {
        let t1 = this.nodes.input.value || "";
        if (!t1.trim()) {
            this.selection.restore(), this.unlink(), e.preventDefault(), this.closeActions();
            return;
        }
        if (!this.validateURL(t1)) {
            this.notifier.show({
                message: "Pasted link is not valid.",
                style: "error"
            }), T("Incorrect Link pasted", "warn", t1);
            return;
        }
        t1 = this.prepareLink(t1), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(t1), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), this.selection.collapseToEnd(), this.inlineToolbar.close();
    }
    /**
   * Detects if passed string is URL
   *
   * @param {string} str - string to validate
   * @returns {boolean}
   */ validateURL(e) {
        return !/\s/.test(e);
    }
    /**
   * Process link before injection
   * - sanitize
   * - add protocol for links like 'google.com'
   *
   * @param {string} link - raw user input
   */ prepareLink(e) {
        return e = e.trim(), e = this.addProtocol(e), e;
    }
    /**
   * Add 'http' protocol to the links like 'vc.ru', 'google.com'
   *
   * @param {string} link - string to process
   */ addProtocol(e) {
        if (/^(\w+):(\/\/)?/.test(e)) return e;
        const t1 = /^\/[^/\s]/.test(e), o = e.substring(0, 1) === "#", i = /^\/\/[^/\s]/.test(e);
        return !t1 && !o && !i && (e = "http://" + e), e;
    }
    /**
   * Inserts <a> tag with "href"
   *
   * @param {string} link - "href" value
   */ insertLink(e) {
        const t1 = this.selection.findParentTag("A");
        t1 && this.selection.expandToTag(t1), document.execCommand(this.commandLink, !1, e);
    }
    /**
   * Removes <a> tag
   */ unlink() {
        document.execCommand(this.commandUnlink);
    }
}
qe.isInline = !0;
qe.title = "Link";
class St {
    /**
   * @param options - constructor options
   * @param options.data - stub tool data
   * @param options.api - Editor.js API
   */ constructor({ data: e, api: t1 }){
        this.CSS = {
            wrapper: "ce-stub",
            info: "ce-stub__info",
            title: "ce-stub__title",
            subtitle: "ce-stub__subtitle"
        }, this.api = t1, this.title = e.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = e.savedData, this.wrapper = this.make();
    }
    /**
   * Returns stub holder
   *
   * @returns {HTMLElement}
   */ render() {
        return this.wrapper;
    }
    /**
   * Return original Tool data
   *
   * @returns {BlockToolData}
   */ save() {
        return this.savedData;
    }
    /**
   * Create Tool html markup
   *
   * @returns {HTMLElement}
   */ make() {
        const e = c.make("div", this.CSS.wrapper), t1 = Uo, o = c.make("div", this.CSS.info), i = c.make("div", this.CSS.title, {
            textContent: this.title
        }), n = c.make("div", this.CSS.subtitle, {
            textContent: this.subtitle
        });
        return e.innerHTML = t1, o.appendChild(i), o.appendChild(n), e.appendChild(o), e;
    }
}
St.isReadOnlySupported = !0;
class ui extends Ye {
    constructor(){
        super(...arguments), this.type = Be.Inline;
    }
    /**
   * Returns title for Inline Tool if specified by user
   */ get title() {
        return this.constructable[We.Title];
    }
    /**
   * Constructs new InlineTool instance from constructable
   */ create() {
        return new this.constructable({
            api: this.api.getMethodsForTool(this),
            config: this.settings
        });
    }
}
class pi extends Ye {
    constructor(){
        super(...arguments), this.type = Be.Tune;
    }
    /**
   * Constructs new BlockTune instance from constructable
   *
   * @param data - Tune data
   * @param block - Block API object
   */ create(e, t1) {
        return new this.constructable({
            api: this.api.getMethodsForTool(this),
            config: this.settings,
            block: t1,
            data: e
        });
    }
}
class P extends Map {
    /**
   * Returns Block Tools collection
   */ get blockTools() {
        const e = Array.from(this.entries()).filter(([, t1])=>t1.isBlock());
        return new P(e);
    }
    /**
   * Returns Inline Tools collection
   */ get inlineTools() {
        const e = Array.from(this.entries()).filter(([, t1])=>t1.isInline());
        return new P(e);
    }
    /**
   * Returns Block Tunes collection
   */ get blockTunes() {
        const e = Array.from(this.entries()).filter(([, t1])=>t1.isTune());
        return new P(e);
    }
    /**
   * Returns internal Tools collection
   */ get internalTools() {
        const e = Array.from(this.entries()).filter(([, t1])=>t1.isInternal);
        return new P(e);
    }
    /**
   * Returns Tools collection provided by user
   */ get externalTools() {
        const e = Array.from(this.entries()).filter(([, t1])=>!t1.isInternal);
        return new P(e);
    }
}
var fi = Object.defineProperty, gi = Object.getOwnPropertyDescriptor, It = (s1, e, t1, o)=>{
    for(var i = o > 1 ? void 0 : o ? gi(e, t1) : e, n = s1.length - 1, r; n >= 0; n--)(r = s1[n]) && (i = (o ? r(e, t1, i) : r(i)) || i);
    return o && i && fi(e, t1, i), i;
};
class Ze extends Ye {
    constructor(){
        super(...arguments), this.type = Be.Block, this.inlineTools = new P(), this.tunes = new P();
    }
    /**
   * Creates new Tool instance
   *
   * @param data - Tool data
   * @param block - BlockAPI for current Block
   * @param readOnly - True if Editor is in read-only mode
   */ create(e, t1, o) {
        return new this.constructable({
            data: e,
            block: t1,
            readOnly: o,
            api: this.api.getMethodsForTool(this),
            config: this.settings
        });
    }
    /**
   * Returns true if read-only mode is supported by Tool
   */ get isReadOnlySupported() {
        return this.constructable[se.IsReadOnlySupported] === !0;
    }
    /**
   * Returns true if Tool supports linebreaks
   */ get isLineBreaksEnabled() {
        return this.constructable[se.IsEnabledLineBreaks];
    }
    /**
   * Returns Tool toolbox configuration (internal or user-specified).
   *
   * Merges internal and user-defined toolbox configs based on the following rules:
   *
   * - If both internal and user-defined toolbox configs are arrays their items are merged.
   * Length of the second one is kept.
   *
   * - If both are objects their properties are merged.
   *
   * - If one is an object and another is an array than internal config is replaced with user-defined
   * config. This is made to allow user to override default tool's toolbox representation (single/multiple entries)
   */ get toolbox() {
        const e = this.constructable[se.Toolbox], t1 = this.config[ve.Toolbox];
        if (!W(e) && t1 !== !1) return t1 ? Array.isArray(e) ? Array.isArray(t1) ? t1.map((o, i)=>{
            const n = e[i];
            return n ? {
                ...n,
                ...o
            } : o;
        }) : [
            t1
        ] : Array.isArray(t1) ? t1 : [
            {
                ...e,
                ...t1
            }
        ] : Array.isArray(e) ? e : [
            e
        ];
    }
    /**
   * Returns Tool conversion configuration
   */ get conversionConfig() {
        return this.constructable[se.ConversionConfig];
    }
    /**
   * Returns enabled inline tools for Tool
   */ get enabledInlineTools() {
        return this.config[ve.EnabledInlineTools] || !1;
    }
    /**
   * Returns enabled tunes for Tool
   */ get enabledBlockTunes() {
        return this.config[ve.EnabledBlockTunes];
    }
    /**
   * Returns Tool paste configuration
   */ get pasteConfig() {
        return this.constructable[se.PasteConfig] ?? {};
    }
    get sanitizeConfig() {
        const e = super.sanitizeConfig, t1 = this.baseSanitizeConfig;
        if (W(e)) return t1;
        const o = {};
        for(const i in e)if (Object.prototype.hasOwnProperty.call(e, i)) {
            const n = e[i];
            D(n) ? o[i] = Object.assign({}, t1, n) : o[i] = n;
        }
        return o;
    }
    get baseSanitizeConfig() {
        const e = {};
        return Array.from(this.inlineTools.values()).forEach((t1)=>Object.assign(e, t1.sanitizeConfig)), Array.from(this.tunes.values()).forEach((t1)=>Object.assign(e, t1.sanitizeConfig)), e;
    }
}
It([
    le
], Ze.prototype, "sanitizeConfig", 1);
It([
    le
], Ze.prototype, "baseSanitizeConfig", 1);
class bi {
    /**
   * @class
   * @param config - tools config
   * @param editorConfig - EditorJS config
   * @param api - EditorJS API module
   */ constructor(e, t1, o){
        this.api = o, this.config = e, this.editorConfig = t1;
    }
    /**
   * Returns Tool object based on it's type
   *
   * @param name - tool name
   */ get(e) {
        const { class: t1, isInternal: o = !1, ...i } = this.config[e], n = this.getConstructor(t1);
        return new n({
            name: e,
            constructable: t1,
            config: i,
            api: this.api,
            isDefault: e === this.editorConfig.defaultBlock,
            defaultPlaceholder: this.editorConfig.placeholder,
            isInternal: o
        });
    }
    /**
   * Find appropriate Tool object constructor for Tool constructable
   *
   * @param constructable - Tools constructable
   */ getConstructor(e) {
        switch(!0){
            case e[We.IsInline]:
                return ui;
            case e[Bt.IsTune]:
                return pi;
            default:
                return Ze;
        }
    }
}
class Mt {
    /**
   * MoveDownTune constructor
   *
   * @param {API} api — Editor's API
   */ constructor({ api: e }){
        this.CSS = {
            animation: "wobble"
        }, this.api = e;
    }
    /**
   * Tune's appearance in block settings menu
   */ render() {
        return {
            icon: kt,
            title: this.api.i18n.t("Move down"),
            onActivate: ()=>this.handleClick(),
            name: "move-down"
        };
    }
    /**
   * Handle clicks on 'move down' button
   */ handleClick() {
        const e = this.api.blocks.getCurrentBlockIndex(), t1 = this.api.blocks.getBlockByIndex(e + 1);
        if (!t1) throw new Error("Unable to move Block down since it is already the last");
        const o = t1.holder, i = o.getBoundingClientRect();
        let n = Math.abs(window.innerHeight - o.offsetHeight);
        i.top < window.innerHeight && (n = window.scrollY + o.offsetHeight), window.scrollTo(0, n), this.api.blocks.move(e + 1), this.api.toolbar.toggleBlockSettings(!0);
    }
}
Mt.isTune = !0;
class Lt {
    /**
   * DeleteTune constructor
   *
   * @param {API} api - Editor's API
   */ constructor({ api: e }){
        this.api = e;
    }
    /**
   * Tune's appearance in block settings menu
   */ render() {
        return {
            icon: No,
            title: this.api.i18n.t("Delete"),
            name: "delete",
            confirmation: {
                title: this.api.i18n.t("Click to delete"),
                onActivate: ()=>this.handleClick()
            }
        };
    }
    /**
   * Delete block conditions passed
   */ handleClick() {
        this.api.blocks.delete();
    }
}
Lt.isTune = !0;
class At {
    /**
   * MoveUpTune constructor
   *
   * @param {API} api - Editor's API
   */ constructor({ api: e }){
        this.CSS = {
            animation: "wobble"
        }, this.api = e;
    }
    /**
   * Tune's appearance in block settings menu
   */ render() {
        return {
            icon: Oo,
            title: this.api.i18n.t("Move up"),
            onActivate: ()=>this.handleClick(),
            name: "move-up"
        };
    }
    /**
   * Move current block up
   */ handleClick() {
        const e = this.api.blocks.getCurrentBlockIndex(), t1 = this.api.blocks.getBlockByIndex(e), o = this.api.blocks.getBlockByIndex(e - 1);
        if (e === 0 || !t1 || !o) throw new Error("Unable to move Block up since it is already the first");
        const i = t1.holder, n = o.holder, r = i.getBoundingClientRect(), a = n.getBoundingClientRect();
        let l;
        a.top > 0 ? l = Math.abs(r.top) - Math.abs(a.top) : l = Math.abs(r.top) + a.height, window.scrollBy(0, -1 * l), this.api.blocks.move(e - 1), this.api.toolbar.toggleBlockSettings(!0);
    }
}
At.isTune = !0;
var mi = Object.defineProperty, ki = Object.getOwnPropertyDescriptor, vi = (s1, e, t1, o)=>{
    for(var i = o > 1 ? void 0 : o ? ki(e, t1) : e, n = s1.length - 1, r; n >= 0; n--)(r = s1[n]) && (i = (o ? r(e, t1, i) : r(i)) || i);
    return o && i && mi(e, t1, i), i;
};
class _t extends y {
    constructor(){
        super(...arguments), this.stubTool = "stub", this.toolsAvailable = new P(), this.toolsUnavailable = new P();
    }
    /**
   * Returns available Tools
   */ get available() {
        return this.toolsAvailable;
    }
    /**
   * Returns unavailable Tools
   */ get unavailable() {
        return this.toolsUnavailable;
    }
    /**
   * Return Tools for the Inline Toolbar
   */ get inlineTools() {
        return this.available.inlineTools;
    }
    /**
   * Return editor block tools
   */ get blockTools() {
        return this.available.blockTools;
    }
    /**
   * Return available Block Tunes
   *
   * @returns {object} - object of Inline Tool's classes
   */ get blockTunes() {
        return this.available.blockTunes;
    }
    /**
   * Returns default Tool object
   */ get defaultTool() {
        return this.blockTools.get(this.config.defaultBlock);
    }
    /**
   * Returns internal tools
   */ get internal() {
        return this.available.internalTools;
    }
    /**
   * Creates instances via passed or default configuration
   *
   * @returns {Promise<void>}
   */ async prepare() {
        if (this.validateTools(), this.config.tools = Me({}, this.internalTools, this.config.tools), !Object.prototype.hasOwnProperty.call(this.config, "tools") || Object.keys(this.config.tools).length === 0) throw Error("Can't start without tools");
        const e = this.prepareConfig();
        this.factory = new bi(e, this.config, this.Editor.API);
        const t1 = this.getListOfPrepareFunctions(e);
        if (t1.length === 0) return Promise.resolve();
        await zt(t1, (o)=>{
            this.toolPrepareMethodSuccess(o);
        }, (o)=>{
            this.toolPrepareMethodFallback(o);
        }), this.prepareBlockTools();
    }
    getAllInlineToolsSanitizeConfig() {
        const e = {};
        return Array.from(this.inlineTools.values()).forEach((t1)=>{
            Object.assign(e, t1.sanitizeConfig);
        }), e;
    }
    /**
   * Calls each Tool reset method to clean up anything set by Tool
   */ destroy() {
        Object.values(this.available).forEach(async (e)=>{
            M(e.reset) && await e.reset();
        });
    }
    /**
   * Returns internal tools
   * Includes Bold, Italic, Link and Paragraph
   */ get internalTools() {
        return {
            bold: {
                class: Xe,
                isInternal: !0
            },
            italic: {
                class: Ve,
                isInternal: !0
            },
            link: {
                class: qe,
                isInternal: !0
            },
            paragraph: {
                class: Ke,
                inlineToolbar: !0,
                isInternal: !0
            },
            stub: {
                class: St,
                isInternal: !0
            },
            moveUp: {
                class: At,
                isInternal: !0
            },
            delete: {
                class: Lt,
                isInternal: !0
            },
            moveDown: {
                class: Mt,
                isInternal: !0
            }
        };
    }
    /**
   * Tool prepare method success callback
   *
   * @param {object} data - append tool to available list
   */ toolPrepareMethodSuccess(e) {
        const t1 = this.factory.get(e.toolName);
        if (t1.isInline()) {
            const i = [
                "render",
                "surround",
                "checkState"
            ].filter((n)=>!t1.create()[n]);
            if (i.length) {
                T(`Incorrect Inline Tool: ${t1.name}. Some of required methods is not implemented %o`, "warn", i), this.toolsUnavailable.set(t1.name, t1);
                return;
            }
        }
        this.toolsAvailable.set(t1.name, t1);
    }
    /**
   * Tool prepare method fail callback
   *
   * @param {object} data - append tool to unavailable list
   */ toolPrepareMethodFallback(e) {
        this.toolsUnavailable.set(e.toolName, this.factory.get(e.toolName));
    }
    /**
   * Binds prepare function of plugins with user or default config
   *
   * @returns {Array} list of functions that needs to be fired sequentially
   * @param config - tools config
   */ getListOfPrepareFunctions(e) {
        const t1 = [];
        return Object.entries(e).forEach(([o, i])=>{
            t1.push({
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                function: M(i.class.prepare) ? i.class.prepare : ()=>{},
                data: {
                    toolName: o,
                    config: i.config
                }
            });
        }), t1;
    }
    /**
   * Assign enabled Inline Tools and Block Tunes for Block Tool
   */ prepareBlockTools() {
        Array.from(this.blockTools.values()).forEach((e)=>{
            this.assignInlineToolsToBlockTool(e), this.assignBlockTunesToBlockTool(e);
        });
    }
    /**
   * Assign enabled Inline Tools for Block Tool
   *
   * @param tool - Block Tool
   */ assignInlineToolsToBlockTool(e) {
        if (this.config.inlineToolbar !== !1) {
            if (e.enabledInlineTools === !0) {
                e.inlineTools = new P(Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map((t1)=>[
                        t1,
                        this.inlineTools.get(t1)
                    ]) : Array.from(this.inlineTools.entries()));
                return;
            }
            Array.isArray(e.enabledInlineTools) && (e.inlineTools = new P(e.enabledInlineTools.map((t1)=>[
                    t1,
                    this.inlineTools.get(t1)
                ])));
        }
    }
    /**
   * Assign enabled Block Tunes for Block Tool
   *
   * @param tool — Block Tool
   */ assignBlockTunesToBlockTool(e) {
        if (e.enabledBlockTunes !== !1) {
            if (Array.isArray(e.enabledBlockTunes)) {
                const t1 = new P(e.enabledBlockTunes.map((o)=>[
                        o,
                        this.blockTunes.get(o)
                    ]));
                e.tunes = new P([
                    ...t1,
                    ...this.blockTunes.internalTools
                ]);
                return;
            }
            if (Array.isArray(this.config.tunes)) {
                const t1 = new P(this.config.tunes.map((o)=>[
                        o,
                        this.blockTunes.get(o)
                    ]));
                e.tunes = new P([
                    ...t1,
                    ...this.blockTunes.internalTools
                ]);
                return;
            }
            e.tunes = this.blockTunes.internalTools;
        }
    }
    /**
   * Validate Tools configuration objects and throw Error for user if it is invalid
   */ validateTools() {
        for(const e in this.config.tools)if (Object.prototype.hasOwnProperty.call(this.config.tools, e)) {
            if (e in this.internalTools) return;
            const t1 = this.config.tools[e];
            if (!M(t1) && !M(t1.class)) throw Error(`Tool \xab${e}\xbb must be a constructor function or an object with function in the \xabclass\xbb property`);
        }
    }
    /**
   * Unify tools config
   */ prepareConfig() {
        const e = {};
        for(const t1 in this.config.tools)D(this.config.tools[t1]) ? e[t1] = this.config.tools[t1] : e[t1] = {
            class: this.config.tools[t1]
        };
        return e;
    }
}
vi([
    le
], _t.prototype, "getAllInlineToolsSanitizeConfig", 1);
const xi = `:root{--selectionColor: #e1f2ff;--inlineSelectionColor: #d4ecff;--bg-light: #eff2f5;--grayText: #707684;--color-dark: #1D202B;--color-active-icon: #388AE5;--color-gray-border: rgba(201, 201, 204, .48);--content-width: 650px;--narrow-mode-right-padding: 50px;--toolbox-buttons-size: 26px;--toolbox-buttons-size--mobile: 36px;--icon-size: 20px;--icon-size--mobile: 28px;--block-padding-vertical: .4em;--color-line-gray: #EFF0F1 }.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff"}@media (min-width: 651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0px;left:0px;right:0px;bottom:0px;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:#2eaadc33;border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor path{stroke:currentColor}.codex-editor ::-moz-selection{background-color:#d4ecff}.codex-editor ::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1 * var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0}@media (max-width: 650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width: 650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width: 650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;margin-left:3px;cursor:pointer;user-select:none}@media (max-width: 650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width: 651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width: 650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbox .ce-popover{right:0;left:auto;left:initial}}.ce-inline-toolbar{--y-offset: 8px;position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease;transition:opacity .25s ease;will-change:opacity,left,top;top:0;left:0;z-index:3}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding:0 6px}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48);-webkit-box-sizing:border-box;box-sizing:border-box}@media (hover: hover){.ce-inline-toolbar__dropdown:hover{background:#eff2f5}}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content,.ce-inline-toolbar__dropdown-arrow{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown-content svg,.ce-inline-toolbar__dropdown-arrow svg{width:20px;height:20px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;border-radius:0;line-height:normal}.ce-inline-tool svg{width:20px;height:20px}@media (max-width: 650px){.ce-inline-tool svg{width:28px;height:28px}}@media (hover: hover){.ce-inline-tool:hover{background-color:#eff2f5}}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48);-webkit-appearance:none;font-family:inherit}@media (max-width: 650px){.ce-inline-tool-input{font-size:15px;font-weight:500}}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:190px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:26px;height:26px;-webkit-box-shadow:0 0 0 1px rgba(201,201,204,.48);box-shadow:0 0 0 1px #c9c9cc7a;border-radius:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#fff;-webkit-box-sizing:content-box;box-sizing:content-box;-ms-flex-negative:0;flex-shrink:0;margin-right:10px}.ce-conversion-tool__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-conversion-tool__icon{width:36px;height:36px;border-radius:8px}.ce-conversion-tool__icon svg{width:28px;height:28px}}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important}.ce-conversion-tool--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-conversion-tool__secondary-label{color:#707684;font-size:12px;margin-left:auto;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;margin-bottom:-2px;opacity:.6}@media (max-width: 650px){.ce-conversion-tool__secondary-label{display:none}}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;line-height:32px}.ce-settings__button svg{width:20px;height:20px}@media (max-width: 650px){.ce-settings__button svg{width:28px;height:28px}}@media (hover: hover){.ce-settings__button:hover{background-color:#eff2f5}}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{background:rgba(34,186,255,.08)!important}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button--disabled{cursor:not-allowed!important}.ce-settings__button--disabled{opacity:.3}.ce-settings__button--selected{color:#388ae5}@media (min-width: 651px){.codex-editor--narrow .ce-settings .ce-popover{right:0;left:auto;left:initial}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content img,.ce-block--selected .ce-block__content .ce-stub{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388AE5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388AE5,#388AE5 1px,#fff 1px,#fff 6px)}.ce-block a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important}.cdx-input[data-placeholder]:before{display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;min-width:26px;min-height:26px}.cdx-settings-button svg{width:20px;height:20px}@media (max-width: 650px){.cdx-settings-button svg{width:28px;height:28px}}@media (hover: hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-settings-button--focused{background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button--active{color:#388ae5}.cdx-settings-button svg{width:auto;height:auto}@media (max-width: 650px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s infinite linear}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px #121e390a;color:#707684;text-align:center;cursor:pointer}@media (hover: hover){.cdx-button:hover{background:#FBFCFE;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px #121e3914}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 18px;margin:10px 0;border-radius:10px;background:#eff2f5;border:1px solid #EFF0F1;color:#707684;font-size:14px}.ce-stub svg{width:20px;height:20px}.ce-stub__info{margin-left:14px}.ce-stub__title{font-weight:500;text-transform:capitalize}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width: 650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0px solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0px;right:5px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.cdx-search-field{--icon-margin-right: 10px;background:rgba(232,232,235,.49);border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;height:20px;color:#707684}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}.ce-popover{--border-radius: 6px;--width: 200px;--max-height: 270px;--padding: 6px;--offset-from-target: 8px;--color-border: #e8e8eb;--color-shadow: rgba(13,20,33,.13);--color-background: white;--color-text-primary: black;--color-text-secondary: #707684;--color-border-icon: rgba(201, 201, 204, .48);--color-border-icon-disabled: #EFF0F1;--color-text-icon-active: #388AE5;--color-background-icon-active: rgba(56, 138, 229, .1);--color-background-item-focus: rgba(34, 186, 255, .08);--color-shadow-item-focus: rgba(7, 161, 227, .08);--color-background-item-hover: #eff2f5;--color-background-item-confirm: #E24A4A;--color-background-item-confirm-hover: #CE4343;min-width:var(--width);width:var(--width);max-height:var(--max-height);border-radius:var(--border-radius);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 3px 15px -3px var(--color-shadow);box-shadow:0 3px 15px -3px var(--color-shadow);position:absolute;left:0;top:calc(100% + var(--offset-from-target));background:var(--color-background);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:4;opacity:0;max-height:0;pointer-events:none;padding:0;border:none}.ce-popover--opened{opacity:1;padding:var(--padding);max-height:var(--max-height);pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease;border:1px solid var(--color-border)}@media (max-width: 650px){.ce-popover--opened{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (max-width: 650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1D202B;z-index:3;opacity:.5;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}}.ce-popover__overlay--hidden{display:none}.ce-popover--open-top{top:calc(-1 * (var(--offset-from-target) + var(--popover-height)))}@media (max-width: 650px){.ce-popover{--offset: 5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset) * 2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}.ce-popover .ce-popover__search{display:none}}.ce-popover__search,.ce-popover__custom-content:not(:empty){margin-bottom:5px}.ce-popover__nothing-found-message{color:#707684;display:none;cursor:default;padding:3px;font-size:14px;line-height:20px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ce-popover__nothing-found-message--displayed{display:block}.ce-popover__custom-content:not(:empty){padding:4px}@media (min-width: 651px){.ce-popover__custom-content:not(:empty){padding:0}}.ce-popover__custom-content--hidden{display:none}.ce-popover-item{--border-radius: 6px;--icon-size: 20px;--icon-size-mobile: 28px;border-radius:var(--border-radius);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:3px;color:var(--color-text-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width: 650px){.ce-popover-item{padding:4px}}.ce-popover-item:not(:last-of-type){margin-bottom:1px}.ce-popover-item__icon{border-radius:5px;width:26px;height:26px;-webkit-box-shadow:0 0 0 1px var(--color-border-icon);box-shadow:0 0 0 1px var(--color-border-icon);background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:10px}.ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover-item__icon{width:36px;height:36px;border-radius:8px}.ce-popover-item__icon svg{width:var(--icon-size-mobile);height:var(--icon-size-mobile)}}.ce-popover-item__title{font-size:14px;line-height:20px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media (max-width: 650px){.ce-popover-item__title{font-size:16px}}.ce-popover-item__secondary-title{color:var(--color-text-secondary);font-size:12px;margin-left:auto;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;margin-bottom:-2px;opacity:.6}@media (max-width: 650px){.ce-popover-item__secondary-title{display:none}}.ce-popover-item--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}.ce-popover-item--active .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}.ce-popover-item--disabled{color:var(--color-text-secondary);cursor:default;pointer-events:none}.ce-popover-item--disabled .ce-popover-item__icon{-webkit-box-shadow:0 0 0 1px var(--color-border-icon-disabled);box-shadow:0 0 0 1px var(--color-border-icon-disabled)}.ce-popover-item--focused:not(.ce-popover-item--no-focus){background:var(--color-background-item-focus)!important}.ce-popover-item--focused:not(.ce-popover-item--no-focus){-webkit-box-shadow:inset 0 0 0px 1px var(--color-shadow-item-focus);box-shadow:inset 0 0 0 1px var(--color-shadow-item-focus)}.ce-popover-item--hidden{display:none}@media (hover: hover){.ce-popover-item:hover{cursor:pointer}.ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:var(--color-background-item-hover)}.ce-popover-item:hover .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}}.ce-popover-item--confirmation{background:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__icon{color:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__title{color:#fff}@media (hover: hover){.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover{background:var(--color-background-item-confirm-hover)}}.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused{background:var(--color-background-item-confirm-hover)!important}.ce-popover-item--confirmation .ce-popover-item__icon,.ce-popover-item--active .ce-popover-item__icon,.ce-popover-item--focused .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}
`;
class wi extends y {
    constructor(){
        super(...arguments), this.isMobile = !1, this.contentRectCache = void 0, this.resizeDebouncer = et(()=>{
            this.windowResize();
        }, 200);
    }
    /**
   * Editor.js UI CSS class names
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */ get CSS() {
        return {
            editorWrapper: "codex-editor",
            editorWrapperNarrow: "codex-editor--narrow",
            editorZone: "codex-editor__redactor",
            editorZoneHidden: "codex-editor__redactor--hidden",
            editorEmpty: "codex-editor--empty",
            editorRtlFix: "codex-editor--rtl"
        };
    }
    /**
   * Return Width of center column of Editor
   *
   * @returns {DOMRect}
   */ get contentRect() {
        if (this.contentRectCache) return this.contentRectCache;
        const e = this.nodes.wrapper.querySelector(`.${R.CSS.content}`);
        return e ? (this.contentRectCache = e.getBoundingClientRect(), this.contentRectCache) : {
            width: 650,
            left: 0,
            right: 0
        };
    }
    /**
   * Making main interface
   */ async prepare() {
        this.checkIsMobile(), this.make(), this.loadStyles();
    }
    /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - removes all listeners from main UI module elements
   *
   * if readOnly is false:
   *  - enables all listeners to UI module elements
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */ toggleReadOnly(e) {
        e ? this.disableModuleBindings() : window.requestIdleCallback(()=>{
            this.enableModuleBindings();
        }, {
            timeout: 2e3
        });
    }
    /**
   * Check if Editor is empty and set CSS class to wrapper
   */ checkEmptiness() {
        const { BlockManager: e } = this.Editor;
        this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, e.isEditorEmpty);
    }
    /**
   * Check if one of Toolbar is opened
   * Used to prevent global keydowns (for example, Enter) conflicts with Enter-on-toolbar
   *
   * @returns {boolean}
   */ get someToolbarOpened() {
        const { Toolbar: e, BlockSettings: t1, InlineToolbar: o, ConversionToolbar: i } = this.Editor;
        return t1.opened || o.opened || i.opened || e.toolbox.opened;
    }
    /**
   * Check for some Flipper-buttons is under focus
   */ get someFlipperButtonFocused() {
        return this.Editor.Toolbar.toolbox.hasFocus() ? !0 : Object.entries(this.Editor).filter(([e, t1])=>t1.flipper instanceof q).some(([e, t1])=>t1.flipper.hasFocus());
    }
    /**
   * Clean editor`s UI
   */ destroy() {
        this.nodes.holder.innerHTML = "";
    }
    /**
   * Close all Editor's toolbars
   */ closeAllToolbars() {
        const { Toolbar: e, BlockSettings: t1, InlineToolbar: o, ConversionToolbar: i } = this.Editor;
        t1.close(), o.close(), i.close(), e.toolbox.close();
    }
    /**
   * Check for mobile mode and cache a result
   */ checkIsMobile() {
        this.isMobile = window.innerWidth < dt;
    }
    /**
   * Makes Editor.js interface
   */ make() {
        this.nodes.holder = c.getHolder(this.config.holder), this.nodes.wrapper = c.make("div", [
            this.CSS.editorWrapper,
            ...this.isRtl ? [
                this.CSS.editorRtlFix
            ] : []
        ]), this.nodes.redactor = c.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper);
    }
    /**
   * Appends CSS
   */ loadStyles() {
        const e = "editor-js-styles";
        if (c.get(e)) return;
        const t1 = c.make("style", null, {
            id: e,
            textContent: xi.toString()
        });
        this.config.style && !W(this.config.style) && this.config.style.nonce && t1.setAttribute("nonce", this.config.style.nonce), c.prepend(document.head, t1);
    }
    /**
   * Bind events on the Editor.js interface
   */ enableModuleBindings() {
        this.readOnlyMutableListeners.on(this.nodes.redactor, "click", (o)=>{
            this.redactorClicked(o);
        }, !1), this.readOnlyMutableListeners.on(this.nodes.redactor, "mousedown", (o)=>{
            this.documentTouched(o);
        }, {
            capture: !0,
            passive: !0
        }), this.readOnlyMutableListeners.on(this.nodes.redactor, "touchstart", (o)=>{
            this.documentTouched(o);
        }, {
            capture: !0,
            passive: !0
        }), this.readOnlyMutableListeners.on(document, "keydown", (o)=>{
            this.documentKeydown(o);
        }, !0), this.readOnlyMutableListeners.on(document, "mousedown", (o)=>{
            this.documentClicked(o);
        }, !0);
        const t1 = et(()=>{
            this.selectionChanged();
        }, 180);
        this.readOnlyMutableListeners.on(document, "selectionchange", t1, !0), this.readOnlyMutableListeners.on(window, "resize", ()=>{
            this.resizeDebouncer();
        }, {
            passive: !0
        }), this.watchBlockHoveredEvents();
    }
    /**
   * Listen redactor mousemove to emit 'block-hovered' event
   */ watchBlockHoveredEvents() {
        let e;
        this.readOnlyMutableListeners.on(this.nodes.redactor, "mousemove", Ie((t1)=>{
            const o = t1.target.closest(".ce-block");
            this.Editor.BlockSelection.anyBlockSelected || o && e !== o && (e = o, this.eventsDispatcher.emit(yt, {
                block: this.Editor.BlockManager.getBlockByChildNode(o)
            }));
        }, 20), {
            passive: !0
        });
    }
    /**
   * Unbind events on the Editor.js interface
   */ disableModuleBindings() {
        this.readOnlyMutableListeners.clearAll();
    }
    /**
   * Resize window handler
   */ windowResize() {
        this.contentRectCache = null, this.checkIsMobile();
    }
    /**
   * All keydowns on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */ documentKeydown(e) {
        switch(e.keyCode){
            case v.ENTER:
                this.enterPressed(e);
                break;
            case v.BACKSPACE:
            case v.DELETE:
                this.backspacePressed(e);
                break;
            case v.ESC:
                this.escapePressed(e);
                break;
            default:
                this.defaultBehaviour(e);
                break;
        }
    }
    /**
   * Ignore all other document's keydown events
   *
   * @param {KeyboardEvent} event - keyboard event
   */ defaultBehaviour(e) {
        const { currentBlock: t1 } = this.Editor.BlockManager, o = e.target.closest(`.${this.CSS.editorWrapper}`), i = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
        if (t1 !== void 0 && o === null) {
            this.Editor.BlockEvents.keydown(e);
            return;
        }
        o || t1 && i || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
    }
    /**
   * @param {KeyboardEvent} event - keyboard event
   */ backspacePressed(e) {
        const { BlockManager: t1, BlockSelection: o, Caret: i } = this.Editor;
        if (o.anyBlockSelected && !b.isSelectionExists) {
            const n = t1.removeSelectedBlocks(), r = t1.insertDefaultBlockAtIndex(n, !0);
            i.setToBlock(r, i.positions.START), o.clearSelection(e), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
        }
    }
    /**
   * Escape pressed
   * If some of Toolbar components are opened, then close it otherwise close Toolbar
   *
   * @param {Event} event - escape keydown event
   */ escapePressed(e) {
        this.Editor.BlockSelection.clearSelection(e), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.ConversionToolbar.opened ? this.Editor.ConversionToolbar.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
    }
    /**
   * Enter pressed on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */ enterPressed(e) {
        const { BlockManager: t1, BlockSelection: o } = this.Editor, i = t1.currentBlockIndex >= 0;
        if (o.anyBlockSelected && !b.isSelectionExists) {
            o.clearSelection(e), e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
            return;
        }
        if (!this.someToolbarOpened && i && e.target.tagName === "BODY") {
            const n = this.Editor.BlockManager.insert();
            this.Editor.Caret.setToBlock(n), this.Editor.Toolbar.moveAndOpen(n);
        }
        this.Editor.BlockSelection.clearSelection(e);
    }
    /**
   * All clicks on document
   *
   * @param {MouseEvent} event - Click event
   */ documentClicked(e) {
        var a, l;
        if (!e.isTrusted) return;
        const t1 = e.target;
        this.nodes.holder.contains(t1) || b.isAtEditor || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
        const i = (a = this.Editor.BlockSettings.nodes.wrapper) == null ? void 0 : a.contains(t1), n = (l = this.Editor.Toolbar.nodes.settingsToggler) == null ? void 0 : l.contains(t1), r = i || n;
        if (this.Editor.BlockSettings.opened && !r) {
            this.Editor.BlockSettings.close();
            const d = this.Editor.BlockManager.getBlockByChildNode(t1);
            this.Editor.Toolbar.moveAndOpen(d);
        }
        this.Editor.BlockSelection.clearSelection(e);
    }
    /**
   * First touch on editor
   * Fired before click
   *
   * Used to change current block — we need to do it before 'selectionChange' event.
   * Also:
   * - Move and show the Toolbar
   * - Set a Caret
   *
   * @param {MouseEvent | TouchEvent} event - touch or mouse event
   */ documentTouched(e) {
        let t1 = e.target;
        if (t1 === this.nodes.redactor) {
            const o = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX, i = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
            t1 = document.elementFromPoint(o, i);
        }
        try {
            this.Editor.BlockManager.setCurrentBlockByChildNode(t1);
        } catch  {
            this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
        }
        this.Editor.Toolbar.moveAndOpen();
    }
    /**
   * All clicks on the redactor zone
   *
   * @param {MouseEvent} event - click event
   * @description
   * - By clicks on the Editor's bottom zone:
   *      - if last Block is empty, set a Caret to this
   *      - otherwise, add a new empty Block and set a Caret to that
   */ redactorClicked(e) {
        if (!b.isCollapsed) return;
        const t1 = e.target, o = e.metaKey || e.ctrlKey;
        if (c.isAnchor(t1) && o) {
            e.stopImmediatePropagation(), e.stopPropagation();
            const i = t1.getAttribute("href"), n = Wt(i);
            Kt(n);
            return;
        }
        this.processBottomZoneClick(e);
    }
    /**
   * Check if user clicks on the Editor's bottom zone:
   *  - set caret to the last block
   *  - or add new empty block
   *
   * @param event - click event
   */ processBottomZoneClick(e) {
        const t1 = this.Editor.BlockManager.getBlockByIndex(-1), o = c.offset(t1.holder).bottom, i = e.pageY, { BlockSelection: n } = this.Editor;
        if (e.target instanceof Element && e.target.isEqualNode(this.nodes.redactor) && /**
    * If there is cross block selection started, target will be equal to redactor so we need additional check
    */ !n.anyBlockSelected && /**
    * Prevent caret jumping (to last block) when clicking between blocks
    */ o < i) {
            e.stopImmediatePropagation(), e.stopPropagation();
            const { BlockManager: a, Caret: l, Toolbar: d } = this.Editor;
            (!a.lastBlock.tool.isDefault || !a.lastBlock.isEmpty) && a.insertAtEnd(), l.setToTheLastBlock(), d.moveAndOpen(a.lastBlock);
        }
    }
    /**
   * Handle selection changes on mobile devices
   * Uses for showing the Inline Toolbar
   */ selectionChanged() {
        const { CrossBlockSelection: e, BlockSelection: t1 } = this.Editor, o = b.anchorElement;
        if (e.isCrossBlockSelectionStarted && t1.anyBlockSelected && b.get().removeAllRanges(), !o) {
            b.range || this.Editor.InlineToolbar.close();
            return;
        }
        const i = o.closest(`.${R.CSS.content}`) === null;
        if (i && (this.Editor.InlineToolbar.containsNode(o) || this.Editor.InlineToolbar.close(), !(o.dataset.inlineToolbar === "true"))) return;
        this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(o);
        const n = i !== !0;
        this.Editor.InlineToolbar.tryToShow(!0, n);
    }
}
const yi = {
    // API Modules
    BlocksAPI: oo,
    CaretAPI: io,
    EventsAPI: no,
    I18nAPI: He,
    API: so,
    InlineToolbarAPI: ro,
    ListenersAPI: ao,
    NotifierAPI: uo,
    ReadOnlyAPI: po,
    SanitizerAPI: xo,
    SaverAPI: wo,
    SelectionAPI: yo,
    StylesAPI: Eo,
    ToolbarAPI: Bo,
    TooltipAPI: Mo,
    UiAPI: Lo,
    // Toolbar Modules
    BlockSettings: Yo,
    ConversionToolbar: $,
    Toolbar: Jo,
    InlineToolbar: Qo,
    // Modules
    BlockEvents: ei,
    BlockManager: ii,
    BlockSelection: ni,
    Caret: we,
    CrossBlockSelection: si,
    DragNDrop: ri,
    ModificationsObserver: ai,
    Paste: Tt,
    ReadOnly: li,
    RectangleSelection: fe,
    Renderer: ci,
    Saver: di,
    Tools: _t,
    UI: wi
};
class Ei {
    /**
   * @param {EditorConfig} config - user configuration
   */ constructor(e){
        this.moduleInstances = {}, this.eventsDispatcher = new Ee();
        let t1, o;
        this.isReady = new Promise((i, n)=>{
            t1 = i, o = n;
        }), Promise.resolve().then(async ()=>{
            this.configuration = e, this.validate(), this.init(), await this.start(), await this.render();
            const { BlockManager: i, Caret: n, UI: r, ModificationsObserver: a } = this.moduleInstances;
            r.checkEmptiness(), a.enable(), this.configuration.autofocus && n.setToBlock(i.blocks[0], n.positions.START), t1();
        }).catch((i)=>{
            T(`Editor.js is not ready because of ${i}`, "error"), o(i);
        });
    }
    /**
   * Setting for configuration
   *
   * @param {EditorConfig|string} config - Editor's config to set
   */ set configuration(e) {
        var o, i;
        D(e) ? this.config = {
            ...e
        } : this.config = {
            holder: e
        }, Le(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), this.config.holder == null && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = at.VERBOSE), Ft(this.config.logLevel), Le(!!this.config.initialBlock, "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = this.config.minHeight !== void 0 ? this.config.minHeight : 300;
        const t1 = {
            type: this.config.defaultBlock,
            data: {}
        };
        this.config.placeholder = this.config.placeholder || !1, this.config.sanitizer = this.config.sanitizer || {
            p: !0,
            b: !0,
            a: !0
        }, this.config.hideToolbar = this.config.hideToolbar ? this.config.hideToolbar : !1, this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, this.config.data = this.config.data || {
            blocks: []
        }, this.config.onReady = this.config.onReady || (()=>{}), this.config.onChange = this.config.onChange || (()=>{}), this.config.inlineToolbar = this.config.inlineToolbar !== void 0 ? this.config.inlineToolbar : !0, (W(this.config.data) || !this.config.data.blocks || this.config.data.blocks.length === 0) && (this.config.data = {
            blocks: [
                t1
            ]
        }), this.config.readOnly = this.config.readOnly || !1, (o = this.config.i18n) != null && o.messages && z.setDictionary(this.config.i18n.messages), this.config.i18n.direction = ((i = this.config.i18n) == null ? void 0 : i.direction) || "ltr";
    }
    /**
   * Returns private property
   *
   * @returns {EditorConfig}
   */ get configuration() {
        return this.config;
    }
    /**
   * Checks for required fields in Editor's config
   */ validate() {
        const { holderId: e, holder: t1 } = this.config;
        if (e && t1) throw Error("\xabholderId\xbb and \xabholder\xbb param can't assign at the same time.");
        if (G(t1) && !c.get(t1)) throw Error(`element with ID \xab${t1}\xbb is missing. Pass correct holder's ID.`);
        if (t1 && D(t1) && !c.isElement(t1)) throw Error("\xabholder\xbb value must be an Element node");
    }
    /**
   * Initializes modules:
   *  - make and save instances
   *  - configure
   */ init() {
        this.constructModules(), this.configureModules();
    }
    /**
   * Start Editor!
   *
   * Get list of modules that needs to be prepared and return a sequence (Promise)
   *
   * @returns {Promise<void>}
   */ async start() {
        await [
            "Tools",
            "UI",
            "BlockManager",
            "Paste",
            "BlockSelection",
            "RectangleSelection",
            "CrossBlockSelection",
            "ReadOnly"
        ].reduce((t1, o)=>t1.then(async ()=>{
                try {
                    await this.moduleInstances[o].prepare();
                } catch (i) {
                    if (i instanceof ut) throw new Error(i.message);
                    T(`Module ${o} was skipped because of %o`, "warn", i);
                }
            }), Promise.resolve());
    }
    /**
   * Render initial data
   */ render() {
        return this.moduleInstances.Renderer.render(this.config.data.blocks);
    }
    /**
   * Make modules instances and save it to the @property this.moduleInstances
   */ constructModules() {
        Object.entries(yi).forEach(([e, t1])=>{
            try {
                this.moduleInstances[e] = new t1({
                    config: this.configuration,
                    eventsDispatcher: this.eventsDispatcher
                });
            } catch (o) {
                T("[constructModules]", `Module ${e} skipped because`, "error", o);
            }
        });
    }
    /**
   * Modules instances configuration:
   *  - pass other modules to the 'state' property
   *  - ...
   */ configureModules() {
        for(const e in this.moduleInstances)Object.prototype.hasOwnProperty.call(this.moduleInstances, e) && (this.moduleInstances[e].state = this.getModulesDiff(e));
    }
    /**
   * Return modules without passed name
   *
   * @param {string} name - module for witch modules difference should be calculated
   */ getModulesDiff(e) {
        const t1 = {};
        for(const o in this.moduleInstances)o !== e && (t1[o] = this.moduleInstances[o]);
        return t1;
    }
}
/**
 * Editor.js
 *
 * @license Apache-2.0
 * @see Editor.js <https://editorjs.io>
 * @author CodeX Team <https://codex.so>
 */ class Bi {
    /** Editor version */ static get version() {
        return "2.29.1";
    }
    /**
   * @param {EditorConfig|string|undefined} [configuration] - user configuration
   */ constructor(e){
        let t1 = ()=>{};
        D(e) && M(e.onReady) && (t1 = e.onReady);
        const o = new Ei(e);
        this.isReady = o.isReady.then(()=>{
            this.exportAPI(o), t1();
        });
    }
    /**
   * Export external API methods
   *
   * @param {Core} editor — Editor's instance
   */ exportAPI(e) {
        const t1 = [
            "configuration"
        ], o = ()=>{
            Object.values(e.moduleInstances).forEach((n)=>{
                M(n.destroy) && n.destroy(), n.listeners.removeAll();
            }), Io(), e = null;
            for(const n in this)Object.prototype.hasOwnProperty.call(this, n) && delete this[n];
            Object.setPrototypeOf(this, null);
        };
        t1.forEach((n)=>{
            this[n] = e[n];
        }), this.destroy = o, Object.setPrototypeOf(this, e.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
            blocks: {
                clear: "clear",
                render: "render"
            },
            caret: {
                focus: "focus"
            },
            events: {
                on: "on",
                off: "off",
                emit: "emit"
            },
            saver: {
                save: "save"
            }
        }).forEach(([n, r])=>{
            Object.entries(r).forEach(([a, l])=>{
                this[l] = e.moduleInstances.API.methods[n][a];
            });
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"41vG9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>c);
(function() {
    "use strict";
    try {
        if (typeof document < "u") {
            var e = document.createElement("style");
            e.appendChild(document.createTextNode(".ce-header{padding:.6em 0 3px;margin:0;line-height:1.25em;outline:none}.ce-header p,.ce-header div{padding:0!important;margin:0!important}.ce-header[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;display:none;cursor:text}.ce-header[contentEditable=true][data-placeholder]:empty:before{display:block}.ce-header[contentEditable=true][data-placeholder]:empty:focus:before{display:none}")), document.head.appendChild(e);
        }
    } catch (t) {
        console.error("vite-plugin-css-injected-by-js", t);
    }
})();
const i = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>', a = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>', l = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>', o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>', h = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>', d = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>', u = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"/></svg>';
/**
 * Header block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */ class c {
    /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: HeaderData, config: HeaderConfig, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   *   readOnly - read only mode flag
   */ constructor({ data: e, config: t, api: s, readOnly: r }){
        this.api = s, this.readOnly = r, this._CSS = {
            block: this.api.styles.block,
            wrapper: "ce-header"
        }, this._settings = t, this._data = this.normalizeData(e), this._element = this.getTag();
    }
    /**
   * Normalize input data
   *
   * @param {HeaderData} data - saved data to process
   *
   * @returns {HeaderData}
   * @private
   */ normalizeData(e) {
        const t = {};
        return typeof e != "object" && (e = {}), t.text = e.text || "", t.level = parseInt(e.level) || this.defaultLevel.number, t;
    }
    /**
   * Return Tool's view
   *
   * @returns {HTMLHeadingElement}
   * @public
   */ render() {
        return this._element;
    }
    /**
   * Returns header block tunes config
   *
   * @returns {Array}
   */ renderSettings() {
        return this.levels.map((e)=>({
                icon: e.svg,
                label: this.api.i18n.t(`Heading ${e.number}`),
                onActivate: ()=>this.setLevel(e.number),
                closeOnActivate: !0,
                isActive: this.currentLevel.number === e.number
            }));
    }
    /**
   * Callback for Block's settings buttons
   *
   * @param {number} level - level to set
   */ setLevel(e) {
        this.data = {
            level: e,
            text: this.data.text
        };
    }
    /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {HeaderData} data - saved data to merger with current block
   * @public
   */ merge(e) {
        const t = {
            text: this.data.text + e.text,
            level: this.data.level
        };
        this.data = t;
    }
    /**
   * Validate Text block data:
   * - check for emptiness
   *
   * @param {HeaderData} blockData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */ validate(e) {
        return e.text.trim() !== "";
    }
    /**
   * Extract Tool's data from the view
   *
   * @param {HTMLHeadingElement} toolsContent - Text tools rendered view
   * @returns {HeaderData} - saved data
   * @public
   */ save(e) {
        return {
            text: e.innerHTML,
            level: this.currentLevel.number
        };
    }
    /**
   * Allow Header to be converted to/from other blocks
   */ static get conversionConfig() {
        return {
            export: "text",
            // use 'text' property for other blocks
            import: "text"
        };
    }
    /**
   * Sanitizer Rules
   */ static get sanitize() {
        return {
            level: !1,
            text: {}
        };
    }
    /**
   * Returns true to notify core that read-only is supported
   *
   * @returns {boolean}
   */ static get isReadOnlySupported() {
        return !0;
    }
    /**
   * Get current Tools`s data
   *
   * @returns {HeaderData} Current data
   * @private
   */ get data() {
        return this._data.text = this._element.innerHTML, this._data.level = this.currentLevel.number, this._data;
    }
    /**
   * Store data in plugin:
   * - at the this._data property
   * - at the HTML
   *
   * @param {HeaderData} data — data to set
   * @private
   */ set data(e) {
        if (this._data = this.normalizeData(e), e.level !== void 0 && this._element.parentNode) {
            const t = this.getTag();
            t.innerHTML = this._element.innerHTML, this._element.parentNode.replaceChild(t, this._element), this._element = t;
        }
        e.text !== void 0 && (this._element.innerHTML = this._data.text || "");
    }
    /**
   * Get tag for target level
   * By default returns second-leveled header
   *
   * @returns {HTMLElement}
   */ getTag() {
        const e = document.createElement(this.currentLevel.tag);
        return e.innerHTML = this._data.text || "", e.classList.add(this._CSS.wrapper), e.contentEditable = this.readOnly ? "false" : "true", e.dataset.placeholder = this.api.i18n.t(this._settings.placeholder || ""), e;
    }
    /**
   * Get current level
   *
   * @returns {level}
   */ get currentLevel() {
        let e = this.levels.find((t)=>t.number === this._data.level);
        return e || (e = this.defaultLevel), e;
    }
    /**
   * Return default level
   *
   * @returns {level}
   */ get defaultLevel() {
        if (this._settings.defaultLevel) {
            const e = this.levels.find((t)=>t.number === this._settings.defaultLevel);
            if (e) return e;
            console.warn("(\u0E07'\u0300-'\u0301)\u0E07 Heading Tool: the default level specified was not found in available levels");
        }
        return this.levels[1];
    }
    /**
   * @typedef {object} level
   * @property {number} number - level number
   * @property {string} tag - tag corresponds with level number
   * @property {string} svg - icon
   */ /**
   * Available header levels
   *
   * @returns {level[]}
   */ get levels() {
        const e = [
            {
                number: 1,
                tag: "H1",
                svg: i
            },
            {
                number: 2,
                tag: "H2",
                svg: a
            },
            {
                number: 3,
                tag: "H3",
                svg: l
            },
            {
                number: 4,
                tag: "H4",
                svg: o
            },
            {
                number: 5,
                tag: "H5",
                svg: h
            },
            {
                number: 6,
                tag: "H6",
                svg: d
            }
        ];
        return this._settings.levels ? e.filter((t)=>this._settings.levels.includes(t.number)) : e;
    }
    /**
   * Handle H1-H6 tags on paste to substitute it with header Tool
   *
   * @param {PasteEvent} event - event with pasted content
   */ onPaste(e) {
        const t = e.detail.data;
        let s = this.defaultLevel.number;
        switch(t.tagName){
            case "H1":
                s = 1;
                break;
            case "H2":
                s = 2;
                break;
            case "H3":
                s = 3;
                break;
            case "H4":
                s = 4;
                break;
            case "H5":
                s = 5;
                break;
            case "H6":
                s = 6;
                break;
        }
        this._settings.levels && (s = this._settings.levels.reduce((r, n)=>Math.abs(n - s) < Math.abs(r - s) ? n : r)), this.data = {
            level: s,
            text: t.innerHTML
        };
    }
    /**
   * Used by Editor.js paste handling API.
   * Provides configuration to handle H1-H6 tags.
   *
   * @returns {{handler: (function(HTMLElement): {text: string}), tags: string[]}}
   */ static get pasteConfig() {
        return {
            tags: [
                "H1",
                "H2",
                "H3",
                "H4",
                "H5",
                "H6"
            ]
        };
    }
    /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */ static get toolbox() {
        return {
            icon: u,
            title: "Heading"
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lhDVD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>m);
(function() {
    "use strict";
    try {
        if (typeof document < "u") {
            var e = document.createElement("style");
            e.appendChild(document.createTextNode('.embed-tool--loading .embed-tool__caption{display:none}.embed-tool--loading .embed-tool__preloader{display:block}.embed-tool--loading .embed-tool__content{display:none}.embed-tool__preloader{display:none;position:relative;height:200px;box-sizing:border-box;border-radius:5px;border:1px solid #e6e9eb}.embed-tool__preloader:before{content:"";position:absolute;z-index:3;left:50%;top:50%;width:30px;height:30px;margin-top:-25px;margin-left:-15px;border-radius:50%;border:2px solid #cdd1e0;border-top-color:#388ae5;box-sizing:border-box;animation:embed-preloader-spin 2s infinite linear}.embed-tool__url{position:absolute;bottom:20px;left:50%;transform:translate(-50%);max-width:250px;color:#7b7e89;font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.embed-tool__content{width:100%}.embed-tool__caption{margin-top:7px}.embed-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.embed-tool__caption[contentEditable=true][data-placeholder]:empty:before{opacity:1}.embed-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}@keyframes embed-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')), document.head.appendChild(e);
        }
    } catch (o) {
        console.error("vite-plugin-css-injected-by-js", o);
    }
})();
const g = {
    vimeo: {
        regex: /(?:http[s]?:\/\/)?(?:www.)?(?:player.)?vimeo\.co(?:.+\/([^\/]\d+)(?:#t=[\d]+)?s?$)/,
        embedUrl: "https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0",
        html: '<iframe style="width:100%;" height="320" frameborder="0"></iframe>',
        height: 320,
        width: 580
    },
    youtube: {
        regex: /(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/,
        embedUrl: "https://www.youtube.com/embed/<%= remote_id %>",
        html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
        height: 320,
        width: 580,
        id: ([n, r])=>{
            if (!r && n) return n;
            const i = {
                start: "start",
                end: "end",
                t: "start",
                // eslint-disable-next-line camelcase
                time_continue: "start",
                list: "list"
            };
            let e = r.slice(1).split("&").map((o)=>{
                const [l, t] = o.split("=");
                return !n && l === "v" ? (n = t, null) : !i[l] || t === "LL" || t.startsWith("RDMM") || t.startsWith("FL") ? null : `${i[l]}=${t}`;
            }).filter((o)=>!!o);
            return n + "?" + e.join("&");
        }
    },
    coub: {
        regex: /https?:\/\/coub\.com\/view\/([^\/\?\&]+)/,
        embedUrl: "https://coub.com/embed/<%= remote_id %>",
        html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
        height: 320,
        width: 580
    },
    vine: {
        regex: /https?:\/\/vine\.co\/v\/([^\/\?\&]+)/,
        embedUrl: "https://vine.co/v/<%= remote_id %>/embed/simple/",
        html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
        height: 320,
        width: 580
    },
    imgur: {
        regex: /https?:\/\/(?:i\.)?imgur\.com.*\/([a-zA-Z0-9]+)(?:\.gifv)?/,
        embedUrl: "http://imgur.com/<%= remote_id %>/embed",
        html: '<iframe allowfullscreen="true" scrolling="no" id="imgur-embed-iframe-pub-<%= remote_id %>" class="imgur-embed-iframe-pub" style="height: 500px; width: 100%; border: 1px solid #000"></iframe>',
        height: 500,
        width: 540
    },
    gfycat: {
        regex: /https?:\/\/gfycat\.com(?:\/detail)?\/([a-zA-Z]+)/,
        embedUrl: "https://gfycat.com/ifr/<%= remote_id %>",
        html: `<iframe frameborder='0' scrolling='no' style="width:100%;" height='436' allowfullscreen ></iframe>`,
        height: 436,
        width: 580
    },
    "twitch-channel": {
        regex: /https?:\/\/www\.twitch\.tv\/([^\/\?\&]*)\/?$/,
        embedUrl: "https://player.twitch.tv/?channel=<%= remote_id %>",
        html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
        height: 366,
        width: 600
    },
    "twitch-video": {
        regex: /https?:\/\/www\.twitch\.tv\/(?:[^\/\?\&]*\/v|videos)\/([0-9]*)/,
        embedUrl: "https://player.twitch.tv/?video=v<%= remote_id %>",
        html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
        height: 366,
        width: 600
    },
    "yandex-music-album": {
        regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/?$/,
        embedUrl: "https://music.yandex.ru/iframe/#album/<%= remote_id %>/",
        html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" style="width:100%;" height="400"></iframe>',
        height: 400,
        width: 540
    },
    "yandex-music-track": {
        regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/track\/([0-9]*)/,
        embedUrl: "https://music.yandex.ru/iframe/#track/<%= remote_id %>/",
        html: '<iframe frameborder="0" style="border:none;width:540px;height:100px;" style="width:100%;" height="100"></iframe>',
        height: 100,
        width: 540,
        id: (n)=>n.join("/")
    },
    "yandex-music-playlist": {
        regex: /https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,
        embedUrl: "https://music.yandex.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/",
        html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',
        height: 400,
        width: 540,
        id: (n)=>n.join("/")
    },
    codepen: {
        regex: /https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
        embedUrl: "https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",
        html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
        height: 300,
        width: 600,
        id: (n)=>n.join("/embed/")
    },
    instagram: {
        regex: /https?:\/\/www\.instagram\.com\/p\/([^\/\?\&]+)\/?.*/,
        embedUrl: "https://www.instagram.com/p/<%= remote_id %>/embed",
        html: '<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        height: 505,
        width: 400
    },
    twitter: {
        regex: /^https?:\/\/(www\.)?(?:twitter\.com|x\.com)\/.+\/status\/(\d+)/,
        embedUrl: "https://platform.twitter.com/embed/Tweet.html?id=<%= remote_id %>",
        html: '<iframe width="600" height="600" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        height: 300,
        width: 600,
        id: (n)=>n[1]
    },
    pinterest: {
        regex: /https?:\/\/([^\/\?\&]*).pinterest.com\/pin\/([^\/\?\&]*)\/?$/,
        embedUrl: "https://assets.pinterest.com/ext/embed.html?id=<%= remote_id %>",
        html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 400px; max-height: 1000px;'></iframe>",
        id: (n)=>n[1]
    },
    facebook: {
        regex: /https?:\/\/www.facebook.com\/([^\/\?\&]*)\/(.*)/,
        embedUrl: "https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/<%= remote_id %>&width=500",
        html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 500px; max-height: 1000px;'></iframe>",
        id: (n)=>n.join("/")
    },
    aparat: {
        regex: /(?:http[s]?:\/\/)?(?:www.)?aparat\.com\/v\/([^\/\?\&]+)\/?/,
        embedUrl: "https://www.aparat.com/video/video/embed/videohash/<%= remote_id %>/vt/frame",
        html: '<iframe width="600" height="300" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        height: 300,
        width: 600
    },
    miro: {
        regex: /https:\/\/miro.com\/\S+(\S{12})\/(\S+)?/,
        embedUrl: "https://miro.com/app/live-embed/<%= remote_id %>",
        html: '<iframe width="700" height="500" style="margin: 0 auto;" allowFullScreen frameBorder="0" scrolling="no"></iframe>'
    },
    github: {
        regex: /https?:\/\/gist.github.com\/([^\/\?\&]*)\/([^\/\?\&]*)/,
        embedUrl: 'data:text/html;charset=utf-8,<head><base target="_blank" /></head><body><script src="https://gist.github.com/<%= remote_id %>" ></script></body>',
        html: '<iframe width="100%" height="350" frameborder="0" style="margin: 0 auto;"></iframe>',
        height: 300,
        width: 600,
        id: (n)=>`${n.join("/")}.js`
    }
};
function p(n, r, i) {
    var e, o, l, t, a;
    r == null && (r = 100);
    function s() {
        var d = Date.now() - t;
        d < r && d >= 0 ? e = setTimeout(s, r - d) : (e = null, i || (a = n.apply(l, o), l = o = null));
    }
    var h = function() {
        l = this, o = arguments, t = Date.now();
        var d = i && !e;
        return e || (e = setTimeout(s, r)), d && (a = n.apply(l, o), l = o = null), a;
    };
    return h.clear = function() {
        e && (clearTimeout(e), e = null);
    }, h.flush = function() {
        e && (a = n.apply(l, o), l = o = null, clearTimeout(e), e = null);
    }, h;
}
p.debounce = p;
var w = p;
class m {
    /**
   * @param {{data: EmbedData, config: EmbedConfig, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   *   readOnly - read-only mode flag
   */ constructor({ data: r, api: i, readOnly: e }){
        this.api = i, this._data = {}, this.element = null, this.readOnly = e, this.data = r;
    }
    /**
   * @param {EmbedData} data - embed data
   * @param {RegExp} [data.regex] - pattern of source URLs
   * @param {string} [data.embedUrl] - URL scheme to embedded page. Use '<%= remote_id %>' to define a place to insert resource id
   * @param {string} [data.html] - iframe which contains embedded content
   * @param {number} [data.height] - iframe height
   * @param {number} [data.width] - iframe width
   * @param {string} [data.caption] - caption
   */ set data(r) {
        var h;
        if (!(r instanceof Object)) throw Error("Embed Tool data should be object");
        const { service: i, source: e, embed: o, width: l, height: t, caption: a = "" } = r;
        this._data = {
            service: i || this.data.service,
            source: e || this.data.source,
            embed: o || this.data.embed,
            width: l || this.data.width,
            height: t || this.data.height,
            caption: a || this.data.caption || ""
        };
        const s = this.element;
        s && ((h = s.parentNode) == null || h.replaceChild(this.render(), s));
    }
    /**
   * @returns {EmbedData}
   */ get data() {
        if (this.element) {
            const r = this.element.querySelector(`.${this.api.styles.input}`);
            this._data.caption = r ? r.innerHTML : "";
        }
        return this._data;
    }
    /**
   * Get plugin styles
   *
   * @returns {object}
   */ get CSS() {
        return {
            baseClass: this.api.styles.block,
            input: this.api.styles.input,
            container: "embed-tool",
            containerLoading: "embed-tool--loading",
            preloader: "embed-tool__preloader",
            caption: "embed-tool__caption",
            url: "embed-tool__url",
            content: "embed-tool__content"
        };
    }
    /**
   * Render Embed tool content
   *
   * @returns {HTMLElement}
   */ render() {
        if (!this.data.service) {
            const a = document.createElement("div");
            return this.element = a, a;
        }
        const { html: r } = m.services[this.data.service], i = document.createElement("div"), e = document.createElement("div"), o = document.createElement("template"), l = this.createPreloader();
        i.classList.add(this.CSS.baseClass, this.CSS.container, this.CSS.containerLoading), e.classList.add(this.CSS.input, this.CSS.caption), i.appendChild(l), e.contentEditable = (!this.readOnly).toString(), e.dataset.placeholder = this.api.i18n.t("Enter a caption"), e.innerHTML = this.data.caption || "", o.innerHTML = r, o.content.firstChild.setAttribute("src", this.data.embed), o.content.firstChild.classList.add(this.CSS.content);
        const t = this.embedIsReady(i);
        return o.content.firstChild && i.appendChild(o.content.firstChild), i.appendChild(e), t.then(()=>{
            i.classList.remove(this.CSS.containerLoading);
        }), this.element = i, i;
    }
    /**
   * Creates preloader to append to container while data is loading
   *
   * @returns {HTMLElement}
   */ createPreloader() {
        const r = document.createElement("preloader"), i = document.createElement("div");
        return i.textContent = this.data.source, r.classList.add(this.CSS.preloader), i.classList.add(this.CSS.url), r.appendChild(i), r;
    }
    /**
   * Save current content and return EmbedData object
   *
   * @returns {EmbedData}
   */ save() {
        return this.data;
    }
    /**
   * Handle pasted url and return Service object
   *
   * @param {PasteEvent} event - event with pasted data
   */ onPaste(r) {
        var c;
        const { key: i, data: e } = r.detail, { regex: o, embedUrl: l, width: t, height: a, id: s = (u)=>u.shift() || "" } = m.services[i], h = (c = o.exec(e)) == null ? void 0 : c.slice(1), d = h ? l.replace(/<%= remote_id %>/g, s(h)) : "";
        this.data = {
            service: i,
            source: e,
            embed: d,
            width: t,
            height: a
        };
    }
    /**
   * Analyze provided config and make object with services to use
   *
   * @param {EmbedConfig} config - configuration of embed block element
   */ static prepare({ config: r = {} }) {
        const { services: i = {} } = r;
        let e = Object.entries(g);
        const o = Object.entries(i).filter(([t, a])=>typeof a == "boolean" && a === !0).map(([t])=>t), l = Object.entries(i).filter(([t, a])=>typeof a == "object").filter(([t, a])=>m.checkServiceConfig(a)).map(([t, a])=>{
            const { regex: s, embedUrl: h, html: d, height: c, width: u, id: f } = a;
            return [
                t,
                {
                    regex: s,
                    embedUrl: h,
                    html: d,
                    height: c,
                    width: u,
                    id: f
                }
            ];
        });
        o.length && (e = e.filter(([t])=>o.includes(t))), e = e.concat(l), m.services = e.reduce((t, [a, s])=>a in t ? (t[a] = Object.assign({}, t[a], s), t) : (t[a] = s, t), {}), m.patterns = e.reduce((t, [a, s])=>(s && typeof s != "boolean" && (t[a] = s.regex), t), {});
    }
    /**
   * Check if Service config is valid
   *
   * @param {Service} config - configuration of embed block element
   * @returns {boolean}
   */ static checkServiceConfig(r) {
        const { regex: i, embedUrl: e, html: o, height: l, width: t, id: a } = r;
        let s = !!(i && i instanceof RegExp) && !!(e && typeof e == "string") && !!(o && typeof o == "string");
        return s = s && (a !== void 0 ? a instanceof Function : !0), s = s && (l !== void 0 ? Number.isFinite(l) : !0), s = s && (t !== void 0 ? Number.isFinite(t) : !0), s;
    }
    /**
   * Paste configuration to enable pasted URLs processing by Editor
   *
   * @returns {object} - object of patterns which contain regx for pasteConfig
   */ static get pasteConfig() {
        return {
            patterns: m.patterns
        };
    }
    /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */ static get isReadOnlySupported() {
        return !0;
    }
    /**
   * Checks that mutations in DOM have finished after appending iframe content
   *
   * @param {HTMLElement} targetNode - HTML-element mutations of which to listen
   * @returns {Promise<any>} - result that all mutations have finished
   */ embedIsReady(r) {
        let e;
        return new Promise((o, l)=>{
            e = new MutationObserver(w.debounce(o, 450)), e.observe(r, {
                childList: !0,
                subtree: !0
            });
        }).then(()=>{
            e.disconnect();
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jryp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>d);
(function() {
    "use strict";
    try {
        if (typeof document < "u") {
            var e = document.createElement("style");
            e.appendChild(document.createTextNode(".ce-code__textarea{min-height:200px;font-family:Menlo,Monaco,Consolas,Courier New,monospace;color:#41314e;line-height:1.6em;font-size:12px;background:#f8f7fa;border:1px solid #f1f1f4;box-shadow:none;white-space:pre;word-wrap:normal;overflow-x:auto;resize:vertical}")), document.head.appendChild(e);
        }
    } catch (o) {
        console.error("vite-plugin-css-injected-by-js", o);
    }
})();
function l(c, t) {
    let r = "";
    for(; r !== `
` && t > 0;)t = t - 1, r = c.substr(t, 1);
    return r === `
` && (t += 1), t;
}
const h = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>';
/**
 * CodeTool for Editor.js
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */ class d {
    /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */ static get isReadOnlySupported() {
        return !0;
    }
    /**
   * Allow to press Enter inside the CodeTool textarea
   *
   * @returns {boolean}
   * @public
   */ static get enableLineBreaks() {
        return !0;
    }
    /**
   * @typedef {object} CodeData — plugin saved data
   * @property {string} code - previously saved plugin code
   */ /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} options - tool constricting options
   * @param {CodeData} options.data — previously saved plugin code
   * @param {object} options.config - user config for Tool
   * @param {object} options.api - Editor.js API
   * @param {boolean} options.readOnly - read only mode flag
   */ constructor({ data: t, config: e, api: r, readOnly: a }){
        this.api = r, this.readOnly = a, this.placeholder = this.api.i18n.t(e.placeholder || d.DEFAULT_PLACEHOLDER), this.CSS = {
            baseClass: this.api.styles.block,
            input: this.api.styles.input,
            wrapper: "ce-code",
            textarea: "ce-code__textarea"
        }, this.nodes = {
            holder: null,
            textarea: null
        }, this.data = {
            code: t.code || ""
        }, this.nodes.holder = this.drawView();
    }
    /**
   * Create Tool's view
   *
   * @returns {HTMLElement}
   * @private
   */ drawView() {
        const t = document.createElement("div"), e = document.createElement("textarea");
        return t.classList.add(this.CSS.baseClass, this.CSS.wrapper), e.classList.add(this.CSS.textarea, this.CSS.input), e.textContent = this.data.code, e.placeholder = this.placeholder, this.readOnly && (e.disabled = !0), t.appendChild(e), e.addEventListener("keydown", (r)=>{
            switch(r.code){
                case "Tab":
                    this.tabHandler(r);
                    break;
            }
        }), this.nodes.textarea = e, t;
    }
    /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement} this.nodes.holder - Code's wrapper
   * @public
   */ render() {
        return this.nodes.holder;
    }
    /**
   * Extract Tool's data from the view
   *
   * @param {HTMLDivElement} codeWrapper - CodeTool's wrapper, containing textarea with code
   * @returns {CodeData} - saved plugin code
   * @public
   */ save(t) {
        return {
            code: t.querySelector("textarea").value
        };
    }
    /**
   * onPaste callback fired from Editor`s core
   *
   * @param {PasteEvent} event - event with pasted content
   */ onPaste(t) {
        const e = t.detail.data;
        this.data = {
            code: e.textContent
        };
    }
    /**
   * Returns Tool`s data from private property
   *
   * @returns {CodeData}
   */ get data() {
        return this._data;
    }
    /**
   * Set Tool`s data to private property and update view
   *
   * @param {CodeData} data - saved tool data
   */ set data(t) {
        this._data = t, this.nodes.textarea && (this.nodes.textarea.textContent = t.code);
    }
    /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */ static get toolbox() {
        return {
            icon: h,
            title: "Code"
        };
    }
    /**
   * Default placeholder for CodeTool's textarea
   *
   * @public
   * @returns {string}
   */ static get DEFAULT_PLACEHOLDER() {
        return "Enter a code";
    }
    /**
   *  Used by Editor.js paste handling API.
   *  Provides configuration to handle CODE tag.
   *
   * @static
   * @returns {{tags: string[]}}
   */ static get pasteConfig() {
        return {
            tags: [
                "pre"
            ]
        };
    }
    /**
   * Automatic sanitize config
   *
   * @returns {{code: boolean}}
   */ static get sanitize() {
        return {
            code: !0
        };
    }
    /**
   * Handles Tab key pressing (adds/removes indentations)
   *
   * @private
   * @param {KeyboardEvent} event - keydown
   * @returns {void}
   */ tabHandler(t) {
        t.stopPropagation(), t.preventDefault();
        const e = t.target, r = t.shiftKey, a = e.selectionStart, s = e.value, n = "  ";
        let i;
        if (!r) i = a + n.length, e.value = s.substring(0, a) + n + s.substring(a);
        else {
            const o = l(s, a);
            if (s.substr(o, n.length) !== n) return;
            e.value = s.substring(0, o) + s.substring(o + n.length), i = a - n.length;
        }
        e.setSelectionRange(i, i);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"yf7K2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>o);
(function() {
    "use strict";
    try {
        if (typeof document < "u") {
            var e = document.createElement("style");
            e.appendChild(document.createTextNode('.ce-delimiter{line-height:1.6em;width:100%;text-align:center}.ce-delimiter:before{display:inline-block;content:"***";font-size:30px;line-height:65px;height:30px;letter-spacing:.2em}')), document.head.appendChild(e);
        }
    } catch (t) {
        console.error("vite-plugin-css-injected-by-js", t);
    }
})();
const r = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="6" x2="10" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="14" x2="18" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
/**
 * Delimiter Block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */ class o {
    /**
   * Notify core that read-only mode is supported
   * @return {boolean}
   */ static get isReadOnlySupported() {
        return !0;
    }
    /**
   * Allow Tool to have no content
   * @return {boolean}
   */ static get contentless() {
        return !0;
    }
    /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: DelimiterData, config: object, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   */ constructor({ data: t, config: s, api: e }){
        this.api = e, this._CSS = {
            block: this.api.styles.block,
            wrapper: "ce-delimiter"
        }, this._data = {}, this._element = this.drawView(), this.data = t;
    }
    /**
   * Create Tool's view
   * @return {HTMLElement}
   * @private
   */ drawView() {
        let t = document.createElement("DIV");
        return t.classList.add(this._CSS.wrapper, this._CSS.block), t;
    }
    /**
   * Return Tool's view
   * @returns {HTMLDivElement}
   * @public
   */ render() {
        return this._element;
    }
    /**
   * Extract Tool's data from the view
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {DelimiterData} - saved data
   * @public
   */ save(t) {
        return {};
    }
    /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @return {{icon: string, title: string}}
   */ static get toolbox() {
        return {
            icon: r,
            title: "Delimiter"
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"MjOOO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class ImageTool {
    constructor({ data, api, config }){
        this.api = api;
        this.config = config;
        this.data = data || {};
        this.wrapper = null;
        this.triggerFileInput();
    }
    static get toolbox() {
        return {
            title: "Image",
            icon: '<svg width="18" height="18" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-11-1H5l3.5-4.5 2.5 3.01L17.5 9l3.5 5h-11zm-1-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>'
        };
    }
    render() {
        this.wrapper = document.createElement("div");
        if (this.data.url) {
            const img = document.createElement("img");
            img.src = this.data.url;
            this.wrapper.appendChild(img);
        }
        return this.wrapper;
    }
    triggerFileInput() {
        this.input = document.createElement("input");
        this.input.type = "file";
        this.input.accept = "image/*";
        this.input.style.display = "none";
        this.input.addEventListener("change", (event)=>this.uploadImage(event));
        document.body.appendChild(this.input);
        this.input.click(); // Trigger the file input
    }
    uploadImage(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e)=>{
                this.data.url = e.target.result;
                this.updateView();
            };
            reader.readAsDataURL(file);
        }
    }
    updateView() {
        this.wrapper.innerHTML = ""; // Clear the wrapper
        const img = document.createElement("img");
        img.src = this.data.url;
        this.wrapper.appendChild(img);
    }
    save(blockContent) {
        return {
            url: this.data.url
        };
    }
    validate(savedData) {
        return !!savedData.url;
    }
    static get pasteConfig() {
        return {
            tags: [
                "img"
            ]
        };
    }
    static get sanitize() {
        return {
            url: {}
        };
    }
}
exports.default = ImageTool;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iR9Po":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>d);
(function() {
    "use strict";
    try {
        if (typeof document < "u") {
            var e = document.createElement("style");
            e.appendChild(document.createTextNode(".cdx-list{margin:0;padding-left:40px;outline:none}.cdx-list__item{padding:5.5px 0 5.5px 3px;line-height:1.6em}.cdx-list--unordered{list-style:disc}.cdx-list--ordered{list-style:decimal}.cdx-list-settings{display:flex}.cdx-list-settings .cdx-settings-button{width:50%}")), document.head.appendChild(e);
        }
    } catch (t) {
        console.error("vite-plugin-css-injected-by-js", t);
    }
})();
const a = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>', o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>';
class d {
    /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */ static get isReadOnlySupported() {
        return !0;
    }
    /**
   * Allow to use native Enter behaviour
   *
   * @returns {boolean}
   * @public
   */ static get enableLineBreaks() {
        return !0;
    }
    /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */ static get toolbox() {
        return {
            icon: a,
            title: "List"
        };
    }
    /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - tool constructor options
   * @param {ListData} params.data - previously saved data
   * @param {object} params.config - user config for Tool
   * @param {object} params.api - Editor.js API
   * @param {boolean} params.readOnly - read-only mode flag
   */ constructor({ data: e, config: t, api: r, readOnly: s }){
        this._elements = {
            wrapper: null
        }, this.api = r, this.readOnly = s, this.settings = [
            {
                name: "unordered",
                label: this.api.i18n.t("Unordered"),
                icon: a,
                default: t.defaultStyle === "unordered" || !1
            },
            {
                name: "ordered",
                label: this.api.i18n.t("Ordered"),
                icon: o,
                default: t.defaultStyle === "ordered" || !0
            }
        ], this._data = {
            style: this.settings.find((i)=>i.default === !0).name,
            items: []
        }, this.data = e;
    }
    /**
   * Returns list tag with items
   *
   * @returns {Element}
   * @public
   */ render() {
        return this._elements.wrapper = this.makeMainTag(this._data.style), this._data.items.length ? this._data.items.forEach((e)=>{
            this._elements.wrapper.appendChild(this._make("li", this.CSS.item, {
                innerHTML: e
            }));
        }) : this._elements.wrapper.appendChild(this._make("li", this.CSS.item)), this.readOnly || this._elements.wrapper.addEventListener("keydown", (e)=>{
            const [t, r] = [
                13,
                8
            ];
            switch(e.keyCode){
                case t:
                    this.getOutofList(e);
                    break;
                case r:
                    this.backspace(e);
                    break;
            }
        }, !1), this._elements.wrapper;
    }
    /**
   * @returns {ListData}
   * @public
   */ save() {
        return this.data;
    }
    /**
   * Allow List Tool to be converted to/from other block
   *
   * @returns {{export: Function, import: Function}}
   */ static get conversionConfig() {
        return {
            /**
       * To create exported string from list, concatenate items by dot-symbol.
       *
       * @param {ListData} data - list data to create a string from thats
       * @returns {string}
       */ export: (e)=>e.items.join(". "),
            /**
       * To create a list from other block's string, just put it at the first item
       *
       * @param {string} string - string to create list tool data from that
       * @returns {ListData}
       */ import: (e)=>({
                    items: [
                        e
                    ],
                    style: "unordered"
                })
        };
    }
    /**
   * Sanitizer rules
   *
   * @returns {object}
   */ static get sanitize() {
        return {
            style: {},
            items: {
                br: !0
            }
        };
    }
    /**
   * Settings
   *
   * @public
   * @returns {Array}
   */ renderSettings() {
        return this.settings.map((e)=>({
                ...e,
                isActive: this._data.style === e.name,
                closeOnActivate: !0,
                onActivate: ()=>this.toggleTune(e.name)
            }));
    }
    /**
   * On paste callback that is fired from Editor
   *
   * @param {PasteEvent} event - event with pasted data
   */ onPaste(e) {
        const t = e.detail.data;
        this.data = this.pasteHandler(t);
    }
    /**
   * List Tool on paste configuration
   *
   * @public
   */ static get pasteConfig() {
        return {
            tags: [
                "OL",
                "UL",
                "LI"
            ]
        };
    }
    /**
   * Creates main <ul> or <ol> tag depended on style
   *
   * @param {string} style - 'ordered' or 'unordered'
   * @returns {HTMLOListElement|HTMLUListElement}
   */ makeMainTag(e) {
        const t = e === "ordered" ? this.CSS.wrapperOrdered : this.CSS.wrapperUnordered, r = e === "ordered" ? "ol" : "ul";
        return this._make(r, [
            this.CSS.baseBlock,
            this.CSS.wrapper,
            t
        ], {
            contentEditable: !this.readOnly
        });
    }
    /**
   * Toggles List style
   *
   * @param {string} style - 'ordered'|'unordered'
   */ toggleTune(e) {
        const t = this.makeMainTag(e);
        for(; this._elements.wrapper.hasChildNodes();)t.appendChild(this._elements.wrapper.firstChild);
        this._elements.wrapper.replaceWith(t), this._elements.wrapper = t, this._data.style = e;
    }
    /**
   * Styles
   *
   * @private
   */ get CSS() {
        return {
            baseBlock: this.api.styles.block,
            wrapper: "cdx-list",
            wrapperOrdered: "cdx-list--ordered",
            wrapperUnordered: "cdx-list--unordered",
            item: "cdx-list__item"
        };
    }
    /**
   * List data setter
   *
   * @param {ListData} listData
   */ set data(e) {
        e || (e = {}), this._data.style = e.style || this.settings.find((r)=>r.default === !0).name, this._data.items = e.items || [];
        const t = this._elements.wrapper;
        t && t.parentNode.replaceChild(this.render(), t);
    }
    /**
   * Return List data
   *
   * @returns {ListData}
   */ get data() {
        this._data.items = [];
        const e = this._elements.wrapper.querySelectorAll(`.${this.CSS.item}`);
        for(let t = 0; t < e.length; t++)e[t].innerHTML.replace("<br>", " ").trim() && this._data.items.push(e[t].innerHTML);
        return this._data;
    }
    /**
   * Helper for making Elements with attributes
   *
   * @param  {string} tagName           - new Element tag name
   * @param  {Array|string} classNames  - list or name of CSS classname(s)
   * @param  {object} attributes        - any attributes
   * @returns {Element}
   */ _make(e, t = null, r = {}) {
        const s = document.createElement(e);
        Array.isArray(t) ? s.classList.add(...t) : t && s.classList.add(t);
        for(const i in r)s[i] = r[i];
        return s;
    }
    /**
   * Returns current List item by the caret position
   *
   * @returns {Element}
   */ get currentItem() {
        let e = window.getSelection().anchorNode;
        return e.nodeType !== Node.ELEMENT_NODE && (e = e.parentNode), e.closest(`.${this.CSS.item}`);
    }
    /**
   * Get out from List Tool
   * by Enter on the empty last item
   *
   * @param {KeyboardEvent} event
   */ getOutofList(e) {
        const t = this._elements.wrapper.querySelectorAll("." + this.CSS.item);
        if (t.length < 2) return;
        const r = t[t.length - 1], s = this.currentItem;
        s === r && !r.textContent.trim().length && (s.parentElement.removeChild(s), this.api.blocks.insert(), this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex()), e.preventDefault(), e.stopPropagation());
    }
    /**
   * Handle backspace
   *
   * @param {KeyboardEvent} event
   */ backspace(e) {
        const t = this._elements.wrapper.querySelectorAll("." + this.CSS.item), r = t[0];
        r && t.length < 2 && !r.innerHTML.replace("<br>", " ").trim() && e.preventDefault();
    }
    /**
   * Select LI content by CMD+A
   *
   * @param {KeyboardEvent} event
   */ selectItem(e) {
        e.preventDefault();
        const t = window.getSelection(), r = t.anchorNode.parentNode, s = r.closest("." + this.CSS.item), i = new Range();
        i.selectNodeContents(s), t.removeAllRanges(), t.addRange(i);
    }
    /**
   * Handle UL, OL and LI tags paste and returns List data
   *
   * @param {HTMLUListElement|HTMLOListElement|HTMLLIElement} element
   * @returns {ListData}
   */ pasteHandler(e) {
        const { tagName: t } = e;
        let r;
        switch(t){
            case "OL":
                r = "ordered";
                break;
            case "UL":
            case "LI":
                r = "unordered";
        }
        const s = {
            style: r,
            items: []
        };
        if (t === "LI") s.items = [
            e.innerHTML
        ];
        else {
            const i = Array.from(e.querySelectorAll("LI"));
            s.items = i.map((n)=>n.innerHTML).filter((n)=>!!n.trim());
        }
        return s;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7PB4b":[function(require,module,exports) {
/* 

import { Tool } from "@editorjs/editorjs";

export default class CodeTool {
  static get isReadOnlySupported() {
    return true;
  }

  constructor({ data, config, api }) {
    this.data = data;
    this.api = api;
    this.config = config || {};
    this.placeholder = this.config.placeholder || "Enter your code here";
    this.languages = [
      { value: "javascript", label: "JavaScript" },
      { value: "cpp", label: "C++" },
      { value: "java", label: "Java" },
    ];

    this.codeArea = null;
    this.languageDropdown = null;
    this.wrapper = null;
  }

  render() {
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("ce-code-tool");

    this.languageDropdown = document.createElement("select");
    this.languageDropdown.classList.add("ce-code-tool__dropdown");
    this.languages.forEach((lang) => {
      const option = document.createElement("option");
      option.value = lang.value;
      option.textContent = lang.label;
      this.languageDropdown.appendChild(option);
    });

    this.codeArea = document.createElement("textarea");
    this.codeArea.classList.add("ce-code-tool__textarea");
    this.codeArea.placeholder = this.placeholder;
    this.codeArea.value = this.data.code || "";

    this.wrapper.appendChild(this.languageDropdown);
    this.wrapper.appendChild(this.codeArea);

    // Hide dropdown on block switch
    this.api.listeners.on(this.wrapper, "block:switch", () => {
      this.languageDropdown.style.display = "none";
    });

    // Show dropdown on block focus
    this.api.listeners.on(this.wrapper, "block:focus", () => {
      this.languageDropdown.style.display = "block";
    });

    // Prevent Enter key from creating new blocks and allow newline
    this.codeArea.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault(); // Prevent creating a new block

        const { selectionStart, selectionEnd } = this.codeArea;
        const value = this.codeArea.value;
        this.codeArea.value = `${value.substring(
          0,
          selectionStart
        )}\n${value.substring(selectionEnd)}`;
        this.codeArea.selectionStart = this.codeArea.selectionEnd =
          selectionStart + 1; // Move cursor
      }

      // Delete block on empty Backspace
      if (event.key === "Backspace" && this.codeArea.value.trim() === "") {
        this.api.blocks.delete();
      }

      // Prevent moving to next block with Down Arrow key
      if (event.key === "ArrowDown") {
        event.stopPropagation();
        event.preventDefault();
        this.api.caret.setToNextBlock();
      }
    });

    return this.wrapper;
  }

  save() {
    return {
      code: this.codeArea.value,
      language: this.languageDropdown.value,
    };
  }

  static get toolbox() {
    return {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1L1 5v14l11 4 11-4V5L12 1zm0 2.937l8.987 3.218L12 10.844 3.013 7.156 12 4.937zM3.56 8.437L12 11.75l8.44-3.313L12 5.125 3.56 8.437zm0 4.563L12 16.25l8.44-3.312L12 8.875 3.56 13z"/></svg>`,
      title: "Code Tool",
    };
  }
}
 */ // CodeTool.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _editorjs = require("@editorjs/editorjs");
class CodeTool {
    static get isReadOnlySupported() {
        return true;
    }
    constructor({ data, config, api }){
        this.data = data;
        this.api = api;
        this.config = config || {};
        this.placeholder = this.config.placeholder || "Enter your code here";
        this.languages = [
            {
                value: "javascript",
                label: "JavaScript"
            },
            {
                value: "cpp",
                label: "C++"
            },
            {
                value: "java",
                label: "Java"
            }
        ];
        this.codeArea = null;
        this.languageDropdown = null;
        this.wrapper = null;
    }
    render() {
        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("ce-code-tool");
        this.languageDropdown = document.createElement("select");
        this.languageDropdown.classList.add("ce-code-tool__dropdown");
        this.languages.forEach((lang)=>{
            const option = document.createElement("option");
            option.value = lang.value;
            option.textContent = lang.label;
            this.languageDropdown.appendChild(option);
        });
        this.codeArea = document.createElement("textarea");
        this.codeArea.classList.add("ce-code-tool__textarea");
        this.codeArea.placeholder = this.placeholder;
        this.codeArea.value = this.data.code || "";
        this.wrapper.appendChild(this.languageDropdown);
        this.wrapper.appendChild(this.codeArea);
        // Hide dropdown on block switch
        this.api.listeners.on(this.wrapper, "block:switch", ()=>{
            this.languageDropdown.style.display = "none";
        });
        // Show dropdown on block focus
        this.api.listeners.on(this.wrapper, "block:focus", ()=>{
            this.languageDropdown.style.display = "block";
        });
        // Prevent Enter key from creating new blocks and allow newline
        this.codeArea.addEventListener("keydown", (event)=>{
            if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault(); // Prevent creating a new block
                event.stopPropagation();
                const { selectionStart, selectionEnd } = this.codeArea;
                const value = this.codeArea.value;
                this.codeArea.value = `${value.substring(0, selectionStart)}\n${value.substring(selectionEnd)}`;
                this.codeArea.selectionStart = this.codeArea.selectionEnd = selectionStart + 1; // Move cursor
            }
            // Delete block on empty Backspace
            if (event.key === "Backspace" && this.codeArea.value.trim() === "") {
                event.preventDefault(); // Prevent browser back navigation
                this.api.blocks.delete();
            }
        // Prevent moving to next block with Down Arrow key
        });
        return this.wrapper;
    }
    save() {
        return {
            code: this.codeArea.value,
            language: this.languageDropdown.value
        };
    }
    static get toolbox() {
        return {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1L1 5v14l11 4 11-4V5L12 1zm0 2.937l8.987 3.218L12 10.844 3.013 7.156 12 4.937zM3.56 8.437L12 11.75l8.44-3.313L12 5.125 3.56 8.437zm0 4.563L12 16.25l8.44-3.312L12 8.875 3.56 13z"/></svg>`,
            title: "Code Tool"
        };
    }
}
exports.default = CodeTool;

},{"@editorjs/editorjs":"3TToX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["km5uZ","bB7Pu"], "bB7Pu", "parcelRequire94c2")

//# sourceMappingURL=index.3d214d75.js.map
