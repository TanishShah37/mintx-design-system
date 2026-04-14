'use strict';

var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var React26 = require('react');
var jsxRuntime = require('react/jsx-runtime');
var classVarianceAuthority = require('class-variance-authority');
var LucideIcons = require('lucide-react');
var DialogPrimitive2 = require('@radix-ui/react-dialog');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var PopoverPrimitive = require('@radix-ui/react-popover');
var CheckboxPrimitive = require('@radix-ui/react-checkbox');
var RadioGroupPrimitive = require('@radix-ui/react-radio-group');
var SwitchPrimitive = require('@radix-ui/react-switch');
var SliderPrimitive = require('@radix-ui/react-slider');
var SelectPrimitive = require('@radix-ui/react-select');
var dateFns = require('date-fns');
var AvatarPrimitive = require('@radix-ui/react-avatar');
var TooltipPrimitive = require('@radix-ui/react-tooltip');
var AccordionPrimitive = require('@radix-ui/react-accordion');
var ProgressPrimitive = require('@radix-ui/react-progress');
var ToastPrimitive = require('@radix-ui/react-toast');
var useEmblaCarousel = require('embla-carousel-react');
var framerMotion = require('framer-motion');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React26__namespace = /*#__PURE__*/_interopNamespace(React26);
var LucideIcons__namespace = /*#__PURE__*/_interopNamespace(LucideIcons);
var DialogPrimitive2__namespace = /*#__PURE__*/_interopNamespace(DialogPrimitive2);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(DropdownMenuPrimitive);
var PopoverPrimitive__namespace = /*#__PURE__*/_interopNamespace(PopoverPrimitive);
var CheckboxPrimitive__namespace = /*#__PURE__*/_interopNamespace(CheckboxPrimitive);
var RadioGroupPrimitive__namespace = /*#__PURE__*/_interopNamespace(RadioGroupPrimitive);
var SwitchPrimitive__namespace = /*#__PURE__*/_interopNamespace(SwitchPrimitive);
var SliderPrimitive__namespace = /*#__PURE__*/_interopNamespace(SliderPrimitive);
var SelectPrimitive__namespace = /*#__PURE__*/_interopNamespace(SelectPrimitive);
var AvatarPrimitive__namespace = /*#__PURE__*/_interopNamespace(AvatarPrimitive);
var TooltipPrimitive__namespace = /*#__PURE__*/_interopNamespace(TooltipPrimitive);
var AccordionPrimitive__namespace = /*#__PURE__*/_interopNamespace(AccordionPrimitive);
var ProgressPrimitive__namespace = /*#__PURE__*/_interopNamespace(ProgressPrimitive);
var ToastPrimitive__namespace = /*#__PURE__*/_interopNamespace(ToastPrimitive);
var useEmblaCarousel__default = /*#__PURE__*/_interopDefault(useEmblaCarousel);

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs
var require_interop_require_wildcard = __commonJS({
  "../../node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs"(exports$1) {
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interop_require_wildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) return obj;
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = { __proto__: null };
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
          else newObj[key] = obj[key];
        }
      }
      newObj.default = obj;
      if (cache) cache.set(obj, newObj);
      return newObj;
    }
    exports$1._ = _interop_require_wildcard;
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/querystring.js
var require_querystring = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/querystring.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      assign: function() {
        return assign;
      },
      searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
      },
      urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
      }
    });
    function searchParamsToUrlQuery(searchParams) {
      const query = {};
      for (const [key, value] of searchParams.entries()) {
        const existing = query[key];
        if (typeof existing === "undefined") {
          query[key] = value;
        } else if (Array.isArray(existing)) {
          existing.push(value);
        } else {
          query[key] = [
            existing,
            value
          ];
        }
      }
      return query;
    }
    function stringifyUrlQueryParam(param) {
      if (typeof param === "string") {
        return param;
      }
      if (typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
        return String(param);
      } else {
        return "";
      }
    }
    function urlQueryToSearchParams(query) {
      const searchParams = new URLSearchParams();
      for (const [key, value] of Object.entries(query)) {
        if (Array.isArray(value)) {
          for (const item of value) {
            searchParams.append(key, stringifyUrlQueryParam(item));
          }
        } else {
          searchParams.set(key, stringifyUrlQueryParam(value));
        }
      }
      return searchParams;
    }
    function assign(target) {
      for (var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        searchParamsList[_key - 1] = arguments[_key];
      }
      for (const searchParams of searchParamsList) {
        for (const key of searchParams.keys()) {
          target.delete(key);
        }
        for (const [key, value] of searchParams.entries()) {
          target.append(key, value);
        }
      }
      return target;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/format-url.js
var require_format_url = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/format-url.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      formatUrl: function() {
        return formatUrl;
      },
      formatWithValidation: function() {
        return formatWithValidation;
      },
      urlObjectKeys: function() {
        return urlObjectKeys;
      }
    });
    var _interop_require_wildcard = require_interop_require_wildcard();
    var _querystring = /* @__PURE__ */ _interop_require_wildcard._(require_querystring());
    var slashedProtocols = /https?|ftp|gopher|file/;
    function formatUrl(urlObj) {
      let { auth, hostname } = urlObj;
      let protocol = urlObj.protocol || "";
      let pathname = urlObj.pathname || "";
      let hash = urlObj.hash || "";
      let query = urlObj.query || "";
      let host = false;
      auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ":") + "@" : "";
      if (urlObj.host) {
        host = auth + urlObj.host;
      } else if (hostname) {
        host = auth + (~hostname.indexOf(":") ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
          host += ":" + urlObj.port;
        }
      }
      if (query && typeof query === "object") {
        query = String(_querystring.urlQueryToSearchParams(query));
      }
      let search = urlObj.search || query && "?" + query || "";
      if (protocol && !protocol.endsWith(":")) protocol += ":";
      if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = "//" + (host || "");
        if (pathname && pathname[0] !== "/") pathname = "/" + pathname;
      } else if (!host) {
        host = "";
      }
      if (hash && hash[0] !== "#") hash = "#" + hash;
      if (search && search[0] !== "?") search = "?" + search;
      pathname = pathname.replace(/[?#]/g, encodeURIComponent);
      search = search.replace("#", "%23");
      return "" + protocol + host + pathname + search + hash;
    }
    var urlObjectKeys = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes"
    ];
    function formatWithValidation(url) {
      if (process.env.NODE_ENV === "development") {
        if (url !== null && typeof url === "object") {
          Object.keys(url).forEach((key) => {
            if (!urlObjectKeys.includes(key)) {
              console.warn("Unknown key passed via urlObject into url.format: " + key);
            }
          });
        }
      }
      return formatUrl(url);
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/omit.js
var require_omit = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/omit.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "omit", {
      enumerable: true,
      get: function() {
        return omit;
      }
    });
    function omit(object, keys) {
      const omitted = {};
      Object.keys(object).forEach((key) => {
        if (!keys.includes(key)) {
          omitted[key] = object[key];
        }
      });
      return omitted;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/utils.js
var require_utils = __commonJS({
  "../../node_modules/next/dist/shared/lib/utils.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      DecodeError: function() {
        return DecodeError;
      },
      MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
      },
      MissingStaticPage: function() {
        return MissingStaticPage;
      },
      NormalizeError: function() {
        return NormalizeError;
      },
      PageNotFoundError: function() {
        return PageNotFoundError;
      },
      SP: function() {
        return SP;
      },
      ST: function() {
        return ST;
      },
      WEB_VITALS: function() {
        return WEB_VITALS;
      },
      execOnce: function() {
        return execOnce;
      },
      getDisplayName: function() {
        return getDisplayName;
      },
      getLocationOrigin: function() {
        return getLocationOrigin;
      },
      getURL: function() {
        return getURL;
      },
      isAbsoluteUrl: function() {
        return isAbsoluteUrl;
      },
      isResSent: function() {
        return isResSent;
      },
      loadGetInitialProps: function() {
        return loadGetInitialProps;
      },
      normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
      },
      stringifyError: function() {
        return stringifyError;
      }
    });
    var WEB_VITALS = [
      "CLS",
      "FCP",
      "FID",
      "INP",
      "LCP",
      "TTFB"
    ];
    function execOnce(fn) {
      let used = false;
      let result;
      return function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (!used) {
          used = true;
          result = fn(...args);
        }
        return result;
      };
    }
    var ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
    var isAbsoluteUrl = (url) => ABSOLUTE_URL_REGEX.test(url);
    function getLocationOrigin() {
      const { protocol, hostname, port } = window.location;
      return protocol + "//" + hostname + (port ? ":" + port : "");
    }
    function getURL() {
      const { href } = window.location;
      const origin = getLocationOrigin();
      return href.substring(origin.length);
    }
    function getDisplayName(Component) {
      return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
    }
    function isResSent(res) {
      return res.finished || res.headersSent;
    }
    function normalizeRepeatedSlashes(url) {
      const urlParts = url.split("?");
      const urlNoQuery = urlParts[0];
      return urlNoQuery.replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? "?" + urlParts.slice(1).join("?") : "");
    }
    async function loadGetInitialProps(App, ctx) {
      if (process.env.NODE_ENV !== "production") {
        var _App_prototype;
        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
          const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
          throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
          });
        }
      }
      const res = ctx.res || ctx.ctx && ctx.ctx.res;
      if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
          return {
            pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
          };
        }
        return {};
      }
      const props = await App.getInitialProps(ctx);
      if (res && isResSent(res)) {
        return props;
      }
      if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
          value: "E394",
          enumerable: false,
          configurable: true
        });
      }
      if (process.env.NODE_ENV !== "production") {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
          console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
        }
      }
      return props;
    }
    var SP = typeof performance !== "undefined";
    var ST = SP && [
      "mark",
      "measure",
      "getEntriesByName"
    ].every((method) => typeof performance[method] === "function");
    var DecodeError = class extends Error {
    };
    var NormalizeError = class extends Error {
    };
    var PageNotFoundError = class extends Error {
      constructor(page) {
        super();
        this.code = "ENOENT";
        this.name = "PageNotFoundError";
        this.message = "Cannot find module for page: " + page;
      }
    };
    var MissingStaticPage = class extends Error {
      constructor(page, message) {
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
      }
    };
    var MiddlewareNotFoundError = class extends Error {
      constructor() {
        super();
        this.code = "ENOENT";
        this.message = "Cannot find the middleware module";
      }
    };
    function stringifyError(error) {
      return JSON.stringify({
        message: error.message,
        stack: error.stack
      });
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js
var require_remove_trailing_slash = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "removeTrailingSlash", {
      enumerable: true,
      get: function() {
        return removeTrailingSlash;
      }
    });
    function removeTrailingSlash(route) {
      return route.replace(/\/$/, "") || "/";
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/parse-path.js
var require_parse_path = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/parse-path.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "parsePath", {
      enumerable: true,
      get: function() {
        return parsePath;
      }
    });
    function parsePath(path) {
      const hashIndex = path.indexOf("#");
      const queryIndex = path.indexOf("?");
      const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
      if (hasQuery || hashIndex > -1) {
        return {
          pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
          query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : void 0) : "",
          hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
      }
      return {
        pathname: path,
        query: "",
        hash: ""
      };
    }
  }
});

// ../../node_modules/next/dist/client/normalize-trailing-slash.js
var require_normalize_trailing_slash = __commonJS({
  "../../node_modules/next/dist/client/normalize-trailing-slash.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "normalizePathTrailingSlash", {
      enumerable: true,
      get: function() {
        return normalizePathTrailingSlash;
      }
    });
    var _removetrailingslash = require_remove_trailing_slash();
    var _parsepath = require_parse_path();
    var normalizePathTrailingSlash = (path) => {
      if (!path.startsWith("/") || process.env.__NEXT_MANUAL_TRAILING_SLASH) {
        return path;
      }
      const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
      if (process.env.__NEXT_TRAILING_SLASH) {
        if (/\.[^/]+\/?$/.test(pathname)) {
          return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
        } else if (pathname.endsWith("/")) {
          return "" + pathname + query + hash;
        } else {
          return pathname + "/" + query + hash;
        }
      }
      return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
    };
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js
var require_path_has_prefix = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "pathHasPrefix", {
      enumerable: true,
      get: function() {
        return pathHasPrefix;
      }
    });
    var _parsepath = require_parse_path();
    function pathHasPrefix(path, prefix) {
      if (typeof path !== "string") {
        return false;
      }
      const { pathname } = (0, _parsepath.parsePath)(path);
      return pathname === prefix || pathname.startsWith(prefix + "/");
    }
  }
});

// ../../node_modules/next/dist/client/has-base-path.js
var require_has_base_path = __commonJS({
  "../../node_modules/next/dist/client/has-base-path.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "hasBasePath", {
      enumerable: true,
      get: function() {
        return hasBasePath;
      }
    });
    var _pathhasprefix = require_path_has_prefix();
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function hasBasePath(path) {
      return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/is-local-url.js
var require_is_local_url = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/is-local-url.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "isLocalURL", {
      enumerable: true,
      get: function() {
        return isLocalURL;
      }
    });
    var _utils = require_utils();
    var _hasbasepath = require_has_base_path();
    function isLocalURL(url) {
      if (!(0, _utils.isAbsoluteUrl)(url)) return true;
      try {
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
      } catch (_) {
        return false;
      }
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/sorted-routes.js
var require_sorted_routes = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/sorted-routes.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      getSortedRouteObjects: function() {
        return getSortedRouteObjects;
      },
      getSortedRoutes: function() {
        return getSortedRoutes;
      }
    });
    var UrlNode = class _UrlNode {
      insert(urlPath) {
        this._insert(urlPath.split("/").filter(Boolean), [], false);
      }
      smoosh() {
        return this._smoosh();
      }
      _smoosh(prefix) {
        if (prefix === void 0) prefix = "/";
        const childrenPaths = [
          ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[]"), 1);
        }
        if (this.restSlugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[...]"), 1);
        }
        if (this.optionalRestSlugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[[...]]"), 1);
        }
        const routes = childrenPaths.map((c) => this.children.get(c)._smoosh("" + prefix + c + "/")).reduce((prev, curr) => [
          ...prev,
          ...curr
        ], []);
        if (this.slugName !== null) {
          routes.push(...this.children.get("[]")._smoosh(prefix + "[" + this.slugName + "]/"));
        }
        if (!this.placeholder) {
          const r = prefix === "/" ? "/" : prefix.slice(0, -1);
          if (this.optionalRestSlugName != null) {
            throw Object.defineProperty(new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + r + '" and "' + r + "[[..." + this.optionalRestSlugName + ']]").'), "__NEXT_ERROR_CODE", {
              value: "E458",
              enumerable: false,
              configurable: true
            });
          }
          routes.unshift(r);
        }
        if (this.restSlugName !== null) {
          routes.push(...this.children.get("[...]")._smoosh(prefix + "[..." + this.restSlugName + "]/"));
        }
        if (this.optionalRestSlugName !== null) {
          routes.push(...this.children.get("[[...]]")._smoosh(prefix + "[[..." + this.optionalRestSlugName + "]]/"));
        }
        return routes;
      }
      _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
          this.placeholder = false;
          return;
        }
        if (isCatchAll) {
          throw Object.defineProperty(new Error("Catch-all must be the last part of the URL."), "__NEXT_ERROR_CODE", {
            value: "E392",
            enumerable: false,
            configurable: true
          });
        }
        let nextSegment = urlPaths[0];
        if (nextSegment.startsWith("[") && nextSegment.endsWith("]")) {
          let handleSlug = function(previousSlug, nextSlug) {
            if (previousSlug !== null) {
              if (previousSlug !== nextSlug) {
                throw Object.defineProperty(new Error("You cannot use different slug names for the same dynamic path ('" + previousSlug + "' !== '" + nextSlug + "')."), "__NEXT_ERROR_CODE", {
                  value: "E337",
                  enumerable: false,
                  configurable: true
                });
              }
            }
            slugNames.forEach((slug) => {
              if (slug === nextSlug) {
                throw Object.defineProperty(new Error('You cannot have the same slug name "' + nextSlug + '" repeat within a single dynamic path'), "__NEXT_ERROR_CODE", {
                  value: "E247",
                  enumerable: false,
                  configurable: true
                });
              }
              if (slug.replace(/\W/g, "") === nextSegment.replace(/\W/g, "")) {
                throw Object.defineProperty(new Error('You cannot have the slug names "' + slug + '" and "' + nextSlug + '" differ only by non-word symbols within a single dynamic path'), "__NEXT_ERROR_CODE", {
                  value: "E499",
                  enumerable: false,
                  configurable: true
                });
              }
            });
            slugNames.push(nextSlug);
          };
          let segmentName = nextSegment.slice(1, -1);
          let isOptional = false;
          if (segmentName.startsWith("[") && segmentName.endsWith("]")) {
            segmentName = segmentName.slice(1, -1);
            isOptional = true;
          }
          if (segmentName.startsWith("\u2026")) {
            throw Object.defineProperty(new Error("Detected a three-dot character ('\u2026') at ('" + segmentName + "'). Did you mean ('...')?"), "__NEXT_ERROR_CODE", {
              value: "E147",
              enumerable: false,
              configurable: true
            });
          }
          if (segmentName.startsWith("...")) {
            segmentName = segmentName.substring(3);
            isCatchAll = true;
          }
          if (segmentName.startsWith("[") || segmentName.endsWith("]")) {
            throw Object.defineProperty(new Error("Segment names may not start or end with extra brackets ('" + segmentName + "')."), "__NEXT_ERROR_CODE", {
              value: "E421",
              enumerable: false,
              configurable: true
            });
          }
          if (segmentName.startsWith(".")) {
            throw Object.defineProperty(new Error("Segment names may not start with erroneous periods ('" + segmentName + "')."), "__NEXT_ERROR_CODE", {
              value: "E288",
              enumerable: false,
              configurable: true
            });
          }
          if (isCatchAll) {
            if (isOptional) {
              if (this.restSlugName != null) {
                throw Object.defineProperty(new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + urlPaths[0] + '" ).'), "__NEXT_ERROR_CODE", {
                  value: "E299",
                  enumerable: false,
                  configurable: true
                });
              }
              handleSlug(this.optionalRestSlugName, segmentName);
              this.optionalRestSlugName = segmentName;
              nextSegment = "[[...]]";
            } else {
              if (this.optionalRestSlugName != null) {
                throw Object.defineProperty(new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + urlPaths[0] + '").'), "__NEXT_ERROR_CODE", {
                  value: "E300",
                  enumerable: false,
                  configurable: true
                });
              }
              handleSlug(this.restSlugName, segmentName);
              this.restSlugName = segmentName;
              nextSegment = "[...]";
            }
          } else {
            if (isOptional) {
              throw Object.defineProperty(new Error('Optional route parameters are not yet supported ("' + urlPaths[0] + '").'), "__NEXT_ERROR_CODE", {
                value: "E435",
                enumerable: false,
                configurable: true
              });
            }
            handleSlug(this.slugName, segmentName);
            this.slugName = segmentName;
            nextSegment = "[]";
          }
        }
        if (!this.children.has(nextSegment)) {
          this.children.set(nextSegment, new _UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
      }
      constructor() {
        this.placeholder = true;
        this.children = /* @__PURE__ */ new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
      }
    };
    function getSortedRoutes(normalizedPages) {
      const root = new UrlNode();
      normalizedPages.forEach((pagePath) => root.insert(pagePath));
      return root.smoosh();
    }
    function getSortedRouteObjects(objects, getter) {
      const indexes = {};
      const pathnames = [];
      for (let i = 0; i < objects.length; i++) {
        const pathname = getter(objects[i]);
        indexes[pathname] = i;
        pathnames[i] = pathname;
      }
      const sorted = getSortedRoutes(pathnames);
      return sorted.map((pathname) => objects[indexes[pathname]]);
    }
  }
});

// ../../node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js
var require_ensure_leading_slash = __commonJS({
  "../../node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "ensureLeadingSlash", {
      enumerable: true,
      get: function() {
        return ensureLeadingSlash;
      }
    });
    function ensureLeadingSlash(path) {
      return path.startsWith("/") ? path : "/" + path;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/segment.js
var require_segment = __commonJS({
  "../../node_modules/next/dist/shared/lib/segment.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
      },
      PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
      },
      addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
      },
      isGroupSegment: function() {
        return isGroupSegment;
      },
      isParallelRouteSegment: function() {
        return isParallelRouteSegment;
      }
    });
    function isGroupSegment(segment) {
      return segment[0] === "(" && segment.endsWith(")");
    }
    function isParallelRouteSegment(segment) {
      return segment.startsWith("@") && segment !== "@children";
    }
    function addSearchParamsIfPageSegment(segment, searchParams) {
      const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
      if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== "{}" ? PAGE_SEGMENT_KEY + "?" + stringifiedQuery : PAGE_SEGMENT_KEY;
      }
      return segment;
    }
    var PAGE_SEGMENT_KEY = "__PAGE__";
    var DEFAULT_SEGMENT_KEY = "__DEFAULT__";
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/app-paths.js
var require_app_paths = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/app-paths.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      normalizeAppPath: function() {
        return normalizeAppPath;
      },
      normalizeRscURL: function() {
        return normalizeRscURL;
      }
    });
    var _ensureleadingslash = require_ensure_leading_slash();
    var _segment = require_segment();
    function normalizeAppPath(route) {
      return (0, _ensureleadingslash.ensureLeadingSlash)(route.split("/").reduce((pathname, segment, index, segments) => {
        if (!segment) {
          return pathname;
        }
        if ((0, _segment.isGroupSegment)(segment)) {
          return pathname;
        }
        if (segment[0] === "@") {
          return pathname;
        }
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
          return pathname;
        }
        return pathname + "/" + segment;
      }, ""));
    }
    function normalizeRscURL(url) {
      return url.replace(
        /\.rsc($|\?)/,
        // $1 ensures `?` is preserved
        "$1"
      );
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/interception-routes.js
var require_interception_routes = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/interception-routes.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      INTERCEPTION_ROUTE_MARKERS: function() {
        return INTERCEPTION_ROUTE_MARKERS;
      },
      extractInterceptionRouteInformation: function() {
        return extractInterceptionRouteInformation;
      },
      isInterceptionRouteAppPath: function() {
        return isInterceptionRouteAppPath;
      }
    });
    var _apppaths = require_app_paths();
    var INTERCEPTION_ROUTE_MARKERS = [
      "(..)(..)",
      "(.)",
      "(..)",
      "(...)"
    ];
    function isInterceptionRouteAppPath(path) {
      return path.split("/").find((segment) => INTERCEPTION_ROUTE_MARKERS.find((m) => segment.startsWith(m))) !== void 0;
    }
    function extractInterceptionRouteInformation(path) {
      let interceptingRoute, marker, interceptedRoute;
      for (const segment of path.split("/")) {
        marker = INTERCEPTION_ROUTE_MARKERS.find((m) => segment.startsWith(m));
        if (marker) {
          [interceptingRoute, interceptedRoute] = path.split(marker, 2);
          break;
        }
      }
      if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>"), "__NEXT_ERROR_CODE", {
          value: "E269",
          enumerable: false,
          configurable: true
        });
      }
      interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute);
      switch (marker) {
        case "(.)":
          if (interceptingRoute === "/") {
            interceptedRoute = "/" + interceptedRoute;
          } else {
            interceptedRoute = interceptingRoute + "/" + interceptedRoute;
          }
          break;
        case "(..)":
          if (interceptingRoute === "/") {
            throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Cannot use (..) marker at the root level, use (.) instead."), "__NEXT_ERROR_CODE", {
              value: "E207",
              enumerable: false,
              configurable: true
            });
          }
          interceptedRoute = interceptingRoute.split("/").slice(0, -1).concat(interceptedRoute).join("/");
          break;
        case "(...)":
          interceptedRoute = "/" + interceptedRoute;
          break;
        case "(..)(..)":
          const splitInterceptingRoute = interceptingRoute.split("/");
          if (splitInterceptingRoute.length <= 2) {
            throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Cannot use (..)(..) marker at the root level or one level up."), "__NEXT_ERROR_CODE", {
              value: "E486",
              enumerable: false,
              configurable: true
            });
          }
          interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join("/");
          break;
        default:
          throw Object.defineProperty(new Error("Invariant: unexpected marker"), "__NEXT_ERROR_CODE", {
            value: "E112",
            enumerable: false,
            configurable: true
          });
      }
      return {
        interceptingRoute,
        interceptedRoute
      };
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/is-dynamic.js
var require_is_dynamic = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/is-dynamic.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "isDynamicRoute", {
      enumerable: true,
      get: function() {
        return isDynamicRoute;
      }
    });
    var _interceptionroutes = require_interception_routes();
    var TEST_ROUTE = /\/[^/]*\[[^/]+\][^/]*(?=\/|$)/;
    var TEST_STRICT_ROUTE = /\/\[[^/]+\](?=\/|$)/;
    function isDynamicRoute(route, strict) {
      if (strict === void 0) strict = true;
      if ((0, _interceptionroutes.isInterceptionRouteAppPath)(route)) {
        route = (0, _interceptionroutes.extractInterceptionRouteInformation)(route).interceptedRoute;
      }
      if (strict) {
        return TEST_STRICT_ROUTE.test(route);
      }
      return TEST_ROUTE.test(route);
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/index.js
var require_utils2 = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/index.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      getSortedRouteObjects: function() {
        return _sortedroutes.getSortedRouteObjects;
      },
      getSortedRoutes: function() {
        return _sortedroutes.getSortedRoutes;
      },
      isDynamicRoute: function() {
        return _isdynamic.isDynamicRoute;
      }
    });
    var _sortedroutes = require_sorted_routes();
    var _isdynamic = require_is_dynamic();
  }
});

// ../../node_modules/next/dist/compiled/path-to-regexp/index.js
var require_path_to_regexp = __commonJS({
  "../../node_modules/next/dist/compiled/path-to-regexp/index.js"(exports$1, module) {
    (() => {
      if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
      var e = {};
      (() => {
        var n = e;
        Object.defineProperty(n, "__esModule", { value: true });
        n.pathToRegexp = n.tokensToRegexp = n.regexpToFunction = n.match = n.tokensToFunction = n.compile = n.parse = void 0;
        function lexer(e2) {
          var n2 = [];
          var r = 0;
          while (r < e2.length) {
            var t = e2[r];
            if (t === "*" || t === "+" || t === "?") {
              n2.push({ type: "MODIFIER", index: r, value: e2[r++] });
              continue;
            }
            if (t === "\\") {
              n2.push({ type: "ESCAPED_CHAR", index: r++, value: e2[r++] });
              continue;
            }
            if (t === "{") {
              n2.push({ type: "OPEN", index: r, value: e2[r++] });
              continue;
            }
            if (t === "}") {
              n2.push({ type: "CLOSE", index: r, value: e2[r++] });
              continue;
            }
            if (t === ":") {
              var a = "";
              var i = r + 1;
              while (i < e2.length) {
                var o = e2.charCodeAt(i);
                if (o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 || o === 95) {
                  a += e2[i++];
                  continue;
                }
                break;
              }
              if (!a) throw new TypeError("Missing parameter name at ".concat(r));
              n2.push({ type: "NAME", index: r, value: a });
              r = i;
              continue;
            }
            if (t === "(") {
              var c = 1;
              var f = "";
              var i = r + 1;
              if (e2[i] === "?") {
                throw new TypeError('Pattern cannot start with "?" at '.concat(i));
              }
              while (i < e2.length) {
                if (e2[i] === "\\") {
                  f += e2[i++] + e2[i++];
                  continue;
                }
                if (e2[i] === ")") {
                  c--;
                  if (c === 0) {
                    i++;
                    break;
                  }
                } else if (e2[i] === "(") {
                  c++;
                  if (e2[i + 1] !== "?") {
                    throw new TypeError("Capturing groups are not allowed at ".concat(i));
                  }
                }
                f += e2[i++];
              }
              if (c) throw new TypeError("Unbalanced pattern at ".concat(r));
              if (!f) throw new TypeError("Missing pattern at ".concat(r));
              n2.push({ type: "PATTERN", index: r, value: f });
              r = i;
              continue;
            }
            n2.push({ type: "CHAR", index: r, value: e2[r++] });
          }
          n2.push({ type: "END", index: r, value: "" });
          return n2;
        }
        function parse(e2, n2) {
          if (n2 === void 0) {
            n2 = {};
          }
          var r = lexer(e2);
          var t = n2.prefixes, a = t === void 0 ? "./" : t, i = n2.delimiter, o = i === void 0 ? "/#?" : i;
          var c = [];
          var f = 0;
          var u = 0;
          var p = "";
          var tryConsume = function(e3) {
            if (u < r.length && r[u].type === e3) return r[u++].value;
          };
          var mustConsume = function(e3) {
            var n3 = tryConsume(e3);
            if (n3 !== void 0) return n3;
            var t2 = r[u], a2 = t2.type, i2 = t2.index;
            throw new TypeError("Unexpected ".concat(a2, " at ").concat(i2, ", expected ").concat(e3));
          };
          var consumeText = function() {
            var e3 = "";
            var n3;
            while (n3 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
              e3 += n3;
            }
            return e3;
          };
          var isSafe = function(e3) {
            for (var n3 = 0, r2 = o; n3 < r2.length; n3++) {
              var t2 = r2[n3];
              if (e3.indexOf(t2) > -1) return true;
            }
            return false;
          };
          var safePattern = function(e3) {
            var n3 = c[c.length - 1];
            var r2 = e3 || (n3 && typeof n3 === "string" ? n3 : "");
            if (n3 && !r2) {
              throw new TypeError('Must have text between two parameters, missing text after "'.concat(n3.name, '"'));
            }
            if (!r2 || isSafe(r2)) return "[^".concat(escapeString(o), "]+?");
            return "(?:(?!".concat(escapeString(r2), ")[^").concat(escapeString(o), "])+?");
          };
          while (u < r.length) {
            var v = tryConsume("CHAR");
            var s = tryConsume("NAME");
            var d = tryConsume("PATTERN");
            if (s || d) {
              var g = v || "";
              if (a.indexOf(g) === -1) {
                p += g;
                g = "";
              }
              if (p) {
                c.push(p);
                p = "";
              }
              c.push({ name: s || f++, prefix: g, suffix: "", pattern: d || safePattern(g), modifier: tryConsume("MODIFIER") || "" });
              continue;
            }
            var x = v || tryConsume("ESCAPED_CHAR");
            if (x) {
              p += x;
              continue;
            }
            if (p) {
              c.push(p);
              p = "";
            }
            var h = tryConsume("OPEN");
            if (h) {
              var g = consumeText();
              var l = tryConsume("NAME") || "";
              var m = tryConsume("PATTERN") || "";
              var T = consumeText();
              mustConsume("CLOSE");
              c.push({ name: l || (m ? f++ : ""), pattern: l && !m ? safePattern(g) : m, prefix: g, suffix: T, modifier: tryConsume("MODIFIER") || "" });
              continue;
            }
            mustConsume("END");
          }
          return c;
        }
        n.parse = parse;
        function compile(e2, n2) {
          return tokensToFunction(parse(e2, n2), n2);
        }
        n.compile = compile;
        function tokensToFunction(e2, n2) {
          if (n2 === void 0) {
            n2 = {};
          }
          var r = flags(n2);
          var t = n2.encode, a = t === void 0 ? function(e3) {
            return e3;
          } : t, i = n2.validate, o = i === void 0 ? true : i;
          var c = e2.map((function(e3) {
            if (typeof e3 === "object") {
              return new RegExp("^(?:".concat(e3.pattern, ")$"), r);
            }
          }));
          return function(n3) {
            var r2 = "";
            for (var t2 = 0; t2 < e2.length; t2++) {
              var i2 = e2[t2];
              if (typeof i2 === "string") {
                r2 += i2;
                continue;
              }
              var f = n3 ? n3[i2.name] : void 0;
              var u = i2.modifier === "?" || i2.modifier === "*";
              var p = i2.modifier === "*" || i2.modifier === "+";
              if (Array.isArray(f)) {
                if (!p) {
                  throw new TypeError('Expected "'.concat(i2.name, '" to not repeat, but got an array'));
                }
                if (f.length === 0) {
                  if (u) continue;
                  throw new TypeError('Expected "'.concat(i2.name, '" to not be empty'));
                }
                for (var v = 0; v < f.length; v++) {
                  var s = a(f[v], i2);
                  if (o && !c[t2].test(s)) {
                    throw new TypeError('Expected all "'.concat(i2.name, '" to match "').concat(i2.pattern, '", but got "').concat(s, '"'));
                  }
                  r2 += i2.prefix + s + i2.suffix;
                }
                continue;
              }
              if (typeof f === "string" || typeof f === "number") {
                var s = a(String(f), i2);
                if (o && !c[t2].test(s)) {
                  throw new TypeError('Expected "'.concat(i2.name, '" to match "').concat(i2.pattern, '", but got "').concat(s, '"'));
                }
                r2 += i2.prefix + s + i2.suffix;
                continue;
              }
              if (u) continue;
              var d = p ? "an array" : "a string";
              throw new TypeError('Expected "'.concat(i2.name, '" to be ').concat(d));
            }
            return r2;
          };
        }
        n.tokensToFunction = tokensToFunction;
        function match(e2, n2) {
          var r = [];
          var t = pathToRegexp(e2, r, n2);
          return regexpToFunction(t, r, n2);
        }
        n.match = match;
        function regexpToFunction(e2, n2, r) {
          if (r === void 0) {
            r = {};
          }
          var t = r.decode, a = t === void 0 ? function(e3) {
            return e3;
          } : t;
          return function(r2) {
            var t2 = e2.exec(r2);
            if (!t2) return false;
            var i = t2[0], o = t2.index;
            var c = /* @__PURE__ */ Object.create(null);
            var _loop_1 = function(e3) {
              if (t2[e3] === void 0) return "continue";
              var r3 = n2[e3 - 1];
              if (r3.modifier === "*" || r3.modifier === "+") {
                c[r3.name] = t2[e3].split(r3.prefix + r3.suffix).map((function(e4) {
                  return a(e4, r3);
                }));
              } else {
                c[r3.name] = a(t2[e3], r3);
              }
            };
            for (var f = 1; f < t2.length; f++) {
              _loop_1(f);
            }
            return { path: i, index: o, params: c };
          };
        }
        n.regexpToFunction = regexpToFunction;
        function escapeString(e2) {
          return e2.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
        }
        function flags(e2) {
          return e2 && e2.sensitive ? "" : "i";
        }
        function regexpToRegexp(e2, n2) {
          if (!n2) return e2;
          var r = /\((?:\?<(.*?)>)?(?!\?)/g;
          var t = 0;
          var a = r.exec(e2.source);
          while (a) {
            n2.push({ name: a[1] || t++, prefix: "", suffix: "", modifier: "", pattern: "" });
            a = r.exec(e2.source);
          }
          return e2;
        }
        function arrayToRegexp(e2, n2, r) {
          var t = e2.map((function(e3) {
            return pathToRegexp(e3, n2, r).source;
          }));
          return new RegExp("(?:".concat(t.join("|"), ")"), flags(r));
        }
        function stringToRegexp(e2, n2, r) {
          return tokensToRegexp(parse(e2, r), n2, r);
        }
        function tokensToRegexp(e2, n2, r) {
          if (r === void 0) {
            r = {};
          }
          var t = r.strict, a = t === void 0 ? false : t, i = r.start, o = i === void 0 ? true : i, c = r.end, f = c === void 0 ? true : c, u = r.encode, p = u === void 0 ? function(e3) {
            return e3;
          } : u, v = r.delimiter, s = v === void 0 ? "/#?" : v, d = r.endsWith, g = d === void 0 ? "" : d;
          var x = "[".concat(escapeString(g), "]|$");
          var h = "[".concat(escapeString(s), "]");
          var l = o ? "^" : "";
          for (var m = 0, T = e2; m < T.length; m++) {
            var E = T[m];
            if (typeof E === "string") {
              l += escapeString(p(E));
            } else {
              var w = escapeString(p(E.prefix));
              var y = escapeString(p(E.suffix));
              if (E.pattern) {
                if (n2) n2.push(E);
                if (w || y) {
                  if (E.modifier === "+" || E.modifier === "*") {
                    var R = E.modifier === "*" ? "?" : "";
                    l += "(?:".concat(w, "((?:").concat(E.pattern, ")(?:").concat(y).concat(w, "(?:").concat(E.pattern, "))*)").concat(y, ")").concat(R);
                  } else {
                    l += "(?:".concat(w, "(").concat(E.pattern, ")").concat(y, ")").concat(E.modifier);
                  }
                } else {
                  if (E.modifier === "+" || E.modifier === "*") {
                    throw new TypeError('Can not repeat "'.concat(E.name, '" without a prefix and suffix'));
                  }
                  l += "(".concat(E.pattern, ")").concat(E.modifier);
                }
              } else {
                l += "(?:".concat(w).concat(y, ")").concat(E.modifier);
              }
            }
          }
          if (f) {
            if (!a) l += "".concat(h, "?");
            l += !r.endsWith ? "$" : "(?=".concat(x, ")");
          } else {
            var A = e2[e2.length - 1];
            var _ = typeof A === "string" ? h.indexOf(A[A.length - 1]) > -1 : A === void 0;
            if (!a) {
              l += "(?:".concat(h, "(?=").concat(x, "))?");
            }
            if (!_) {
              l += "(?=".concat(h, "|").concat(x, ")");
            }
          }
          return new RegExp(l, flags(r));
        }
        n.tokensToRegexp = tokensToRegexp;
        function pathToRegexp(e2, n2, r) {
          if (e2 instanceof RegExp) return regexpToRegexp(e2, n2);
          if (Array.isArray(e2)) return arrayToRegexp(e2, n2, r);
          return stringToRegexp(e2, n2, r);
        }
        n.pathToRegexp = pathToRegexp;
      })();
      module.exports = e;
    })();
  }
});

// ../../node_modules/next/dist/lib/route-pattern-normalizer.js
var require_route_pattern_normalizer = __commonJS({
  "../../node_modules/next/dist/lib/route-pattern-normalizer.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      hasAdjacentParameterIssues: function() {
        return hasAdjacentParameterIssues;
      },
      normalizeAdjacentParameters: function() {
        return normalizeAdjacentParameters;
      },
      normalizeTokensForRegexp: function() {
        return normalizeTokensForRegexp;
      },
      stripParameterSeparators: function() {
        return stripParameterSeparators;
      }
    });
    var PARAM_SEPARATOR = "_NEXTSEP_";
    function hasAdjacentParameterIssues(route) {
      if (typeof route !== "string") return false;
      if (/\/\(\.{1,3}\):[^/\s]+/.test(route)) {
        return true;
      }
      if (/:[a-zA-Z_][a-zA-Z0-9_]*:[a-zA-Z_][a-zA-Z0-9_]*/.test(route)) {
        return true;
      }
      return false;
    }
    function normalizeAdjacentParameters(route) {
      let normalized = route;
      normalized = normalized.replace(/(\([^)]*\)):([^/\s]+)/g, `$1${PARAM_SEPARATOR}:$2`);
      normalized = normalized.replace(/:([^:/\s)]+)(?=:)/g, `:$1${PARAM_SEPARATOR}`);
      return normalized;
    }
    function normalizeTokensForRegexp(tokens) {
      return tokens.map((token) => {
        if (typeof token === "object" && token !== null && // Not all token objects have 'modifier' property (e.g., simple text tokens)
        "modifier" in token && // Only repeating modifiers (* or +) cause the validation error
        // Other modifiers like '?' (optional) are fine
        (token.modifier === "*" || token.modifier === "+") && // Token objects can have different shapes depending on route pattern
        "prefix" in token && "suffix" in token && // Both prefix and suffix must be empty strings
        // This is what causes the validation error in path-to-regexp
        token.prefix === "" && token.suffix === "") {
          return {
            ...token,
            prefix: "/"
          };
        }
        return token;
      });
    }
    function stripParameterSeparators(params) {
      const cleaned = {};
      for (const [key, value] of Object.entries(params)) {
        if (typeof value === "string") {
          cleaned[key] = value.replace(new RegExp(`^${PARAM_SEPARATOR}`), "");
        } else if (Array.isArray(value)) {
          cleaned[key] = value.map((item) => typeof item === "string" ? item.replace(new RegExp(`^${PARAM_SEPARATOR}`), "") : item);
        } else {
          cleaned[key] = value;
        }
      }
      return cleaned;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/route-match-utils.js
var require_route_match_utils = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/route-match-utils.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      safeCompile: function() {
        return safeCompile;
      },
      safePathToRegexp: function() {
        return safePathToRegexp;
      },
      safeRegexpToFunction: function() {
        return safeRegexpToFunction;
      },
      safeRouteMatcher: function() {
        return safeRouteMatcher;
      }
    });
    var _pathtoregexp = require_path_to_regexp();
    var _routepatternnormalizer = require_route_pattern_normalizer();
    function safePathToRegexp(route, keys, options) {
      if (typeof route !== "string") {
        return (0, _pathtoregexp.pathToRegexp)(route, keys, options);
      }
      const needsNormalization = (0, _routepatternnormalizer.hasAdjacentParameterIssues)(route);
      const routeToUse = needsNormalization ? (0, _routepatternnormalizer.normalizeAdjacentParameters)(route) : route;
      try {
        return (0, _pathtoregexp.pathToRegexp)(routeToUse, keys, options);
      } catch (error) {
        if (!needsNormalization) {
          try {
            const normalizedRoute = (0, _routepatternnormalizer.normalizeAdjacentParameters)(route);
            return (0, _pathtoregexp.pathToRegexp)(normalizedRoute, keys, options);
          } catch (retryError) {
            throw error;
          }
        }
        throw error;
      }
    }
    function safeCompile(route, options) {
      const needsNormalization = (0, _routepatternnormalizer.hasAdjacentParameterIssues)(route);
      const routeToUse = needsNormalization ? (0, _routepatternnormalizer.normalizeAdjacentParameters)(route) : route;
      try {
        return (0, _pathtoregexp.compile)(routeToUse, options);
      } catch (error) {
        if (!needsNormalization) {
          try {
            const normalizedRoute = (0, _routepatternnormalizer.normalizeAdjacentParameters)(route);
            return (0, _pathtoregexp.compile)(normalizedRoute, options);
          } catch (retryError) {
            throw error;
          }
        }
        throw error;
      }
    }
    function safeRegexpToFunction(regexp, keys) {
      const originalMatcher = (0, _pathtoregexp.regexpToFunction)(regexp, keys || []);
      return (pathname) => {
        const result = originalMatcher(pathname);
        if (!result) return false;
        return {
          ...result,
          params: (0, _routepatternnormalizer.stripParameterSeparators)(result.params)
        };
      };
    }
    function safeRouteMatcher(matcherFn) {
      return (pathname) => {
        const result = matcherFn(pathname);
        if (!result) return false;
        return (0, _routepatternnormalizer.stripParameterSeparators)(result);
      };
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/route-matcher.js
var require_route_matcher = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/route-matcher.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "getRouteMatcher", {
      enumerable: true,
      get: function() {
        return getRouteMatcher;
      }
    });
    var _utils = require_utils();
    var _routematchutils = require_route_match_utils();
    function getRouteMatcher(param) {
      let { re, groups } = param;
      const rawMatcher = (pathname) => {
        const routeMatch = re.exec(pathname);
        if (!routeMatch) return false;
        const decode = (param2) => {
          try {
            return decodeURIComponent(param2);
          } catch (e) {
            throw Object.defineProperty(new _utils.DecodeError("failed to decode param"), "__NEXT_ERROR_CODE", {
              value: "E528",
              enumerable: false,
              configurable: true
            });
          }
        };
        const params = {};
        for (const [key, group] of Object.entries(groups)) {
          const match = routeMatch[group.pos];
          if (match !== void 0) {
            if (group.repeat) {
              params[key] = match.split("/").map((entry) => decode(entry));
            } else {
              params[key] = decode(match);
            }
          }
        }
        return params;
      };
      return (0, _routematchutils.safeRouteMatcher)(rawMatcher);
    }
  }
});

// ../../node_modules/next/dist/lib/constants.js
var require_constants = __commonJS({
  "../../node_modules/next/dist/lib/constants.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      ACTION_SUFFIX: function() {
        return ACTION_SUFFIX;
      },
      APP_DIR_ALIAS: function() {
        return APP_DIR_ALIAS;
      },
      CACHE_ONE_YEAR: function() {
        return CACHE_ONE_YEAR;
      },
      DOT_NEXT_ALIAS: function() {
        return DOT_NEXT_ALIAS;
      },
      ESLINT_DEFAULT_DIRS: function() {
        return ESLINT_DEFAULT_DIRS;
      },
      GSP_NO_RETURNED_VALUE: function() {
        return GSP_NO_RETURNED_VALUE;
      },
      GSSP_COMPONENT_MEMBER_ERROR: function() {
        return GSSP_COMPONENT_MEMBER_ERROR;
      },
      GSSP_NO_RETURNED_VALUE: function() {
        return GSSP_NO_RETURNED_VALUE;
      },
      HTML_CONTENT_TYPE_HEADER: function() {
        return HTML_CONTENT_TYPE_HEADER;
      },
      INFINITE_CACHE: function() {
        return INFINITE_CACHE;
      },
      INSTRUMENTATION_HOOK_FILENAME: function() {
        return INSTRUMENTATION_HOOK_FILENAME;
      },
      JSON_CONTENT_TYPE_HEADER: function() {
        return JSON_CONTENT_TYPE_HEADER;
      },
      MATCHED_PATH_HEADER: function() {
        return MATCHED_PATH_HEADER;
      },
      MIDDLEWARE_FILENAME: function() {
        return MIDDLEWARE_FILENAME;
      },
      MIDDLEWARE_LOCATION_REGEXP: function() {
        return MIDDLEWARE_LOCATION_REGEXP;
      },
      NEXT_BODY_SUFFIX: function() {
        return NEXT_BODY_SUFFIX;
      },
      NEXT_CACHE_IMPLICIT_TAG_ID: function() {
        return NEXT_CACHE_IMPLICIT_TAG_ID;
      },
      NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
        return NEXT_CACHE_REVALIDATED_TAGS_HEADER;
      },
      NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
        return NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER;
      },
      NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_SOFT_TAG_MAX_LENGTH;
      },
      NEXT_CACHE_TAGS_HEADER: function() {
        return NEXT_CACHE_TAGS_HEADER;
      },
      NEXT_CACHE_TAG_MAX_ITEMS: function() {
        return NEXT_CACHE_TAG_MAX_ITEMS;
      },
      NEXT_CACHE_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_TAG_MAX_LENGTH;
      },
      NEXT_DATA_SUFFIX: function() {
        return NEXT_DATA_SUFFIX;
      },
      NEXT_INTERCEPTION_MARKER_PREFIX: function() {
        return NEXT_INTERCEPTION_MARKER_PREFIX;
      },
      NEXT_META_SUFFIX: function() {
        return NEXT_META_SUFFIX;
      },
      NEXT_QUERY_PARAM_PREFIX: function() {
        return NEXT_QUERY_PARAM_PREFIX;
      },
      NEXT_RESUME_HEADER: function() {
        return NEXT_RESUME_HEADER;
      },
      NON_STANDARD_NODE_ENV: function() {
        return NON_STANDARD_NODE_ENV;
      },
      PAGES_DIR_ALIAS: function() {
        return PAGES_DIR_ALIAS;
      },
      PRERENDER_REVALIDATE_HEADER: function() {
        return PRERENDER_REVALIDATE_HEADER;
      },
      PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
        return PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER;
      },
      PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
        return PUBLIC_DIR_MIDDLEWARE_CONFLICT;
      },
      ROOT_DIR_ALIAS: function() {
        return ROOT_DIR_ALIAS;
      },
      RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
        return RSC_ACTION_CLIENT_WRAPPER_ALIAS;
      },
      RSC_ACTION_ENCRYPTION_ALIAS: function() {
        return RSC_ACTION_ENCRYPTION_ALIAS;
      },
      RSC_ACTION_PROXY_ALIAS: function() {
        return RSC_ACTION_PROXY_ALIAS;
      },
      RSC_ACTION_VALIDATE_ALIAS: function() {
        return RSC_ACTION_VALIDATE_ALIAS;
      },
      RSC_CACHE_WRAPPER_ALIAS: function() {
        return RSC_CACHE_WRAPPER_ALIAS;
      },
      RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: function() {
        return RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS;
      },
      RSC_MOD_REF_PROXY_ALIAS: function() {
        return RSC_MOD_REF_PROXY_ALIAS;
      },
      RSC_PREFETCH_SUFFIX: function() {
        return RSC_PREFETCH_SUFFIX;
      },
      RSC_SEGMENTS_DIR_SUFFIX: function() {
        return RSC_SEGMENTS_DIR_SUFFIX;
      },
      RSC_SEGMENT_SUFFIX: function() {
        return RSC_SEGMENT_SUFFIX;
      },
      RSC_SUFFIX: function() {
        return RSC_SUFFIX;
      },
      SERVER_PROPS_EXPORT_ERROR: function() {
        return SERVER_PROPS_EXPORT_ERROR;
      },
      SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
        return SERVER_PROPS_GET_INIT_PROPS_CONFLICT;
      },
      SERVER_PROPS_SSG_CONFLICT: function() {
        return SERVER_PROPS_SSG_CONFLICT;
      },
      SERVER_RUNTIME: function() {
        return SERVER_RUNTIME;
      },
      SSG_FALLBACK_EXPORT_ERROR: function() {
        return SSG_FALLBACK_EXPORT_ERROR;
      },
      SSG_GET_INITIAL_PROPS_CONFLICT: function() {
        return SSG_GET_INITIAL_PROPS_CONFLICT;
      },
      STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
        return STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR;
      },
      TEXT_PLAIN_CONTENT_TYPE_HEADER: function() {
        return TEXT_PLAIN_CONTENT_TYPE_HEADER;
      },
      UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
        return UNSTABLE_REVALIDATE_RENAME_ERROR;
      },
      WEBPACK_LAYERS: function() {
        return WEBPACK_LAYERS;
      },
      WEBPACK_RESOURCE_QUERIES: function() {
        return WEBPACK_RESOURCE_QUERIES;
      }
    });
    var TEXT_PLAIN_CONTENT_TYPE_HEADER = "text/plain";
    var HTML_CONTENT_TYPE_HEADER = "text/html; charset=utf-8";
    var JSON_CONTENT_TYPE_HEADER = "application/json; charset=utf-8";
    var NEXT_QUERY_PARAM_PREFIX = "nxtP";
    var NEXT_INTERCEPTION_MARKER_PREFIX = "nxtI";
    var MATCHED_PATH_HEADER = "x-matched-path";
    var PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
    var PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
    var RSC_PREFETCH_SUFFIX = ".prefetch.rsc";
    var RSC_SEGMENTS_DIR_SUFFIX = ".segments";
    var RSC_SEGMENT_SUFFIX = ".segment.rsc";
    var RSC_SUFFIX = ".rsc";
    var ACTION_SUFFIX = ".action";
    var NEXT_DATA_SUFFIX = ".json";
    var NEXT_META_SUFFIX = ".meta";
    var NEXT_BODY_SUFFIX = ".body";
    var NEXT_CACHE_TAGS_HEADER = "x-next-cache-tags";
    var NEXT_CACHE_REVALIDATED_TAGS_HEADER = "x-next-revalidated-tags";
    var NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = "x-next-revalidate-tag-token";
    var NEXT_RESUME_HEADER = "next-resume";
    var NEXT_CACHE_TAG_MAX_ITEMS = 128;
    var NEXT_CACHE_TAG_MAX_LENGTH = 256;
    var NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
    var NEXT_CACHE_IMPLICIT_TAG_ID = "_N_T_";
    var CACHE_ONE_YEAR = 31536e3;
    var INFINITE_CACHE = 4294967294;
    var MIDDLEWARE_FILENAME = "middleware";
    var MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
    var INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
    var PAGES_DIR_ALIAS = "private-next-pages";
    var DOT_NEXT_ALIAS = "private-dot-next";
    var ROOT_DIR_ALIAS = "private-next-root-dir";
    var APP_DIR_ALIAS = "private-next-app-dir";
    var RSC_MOD_REF_PROXY_ALIAS = "private-next-rsc-mod-ref-proxy";
    var RSC_ACTION_VALIDATE_ALIAS = "private-next-rsc-action-validate";
    var RSC_ACTION_PROXY_ALIAS = "private-next-rsc-server-reference";
    var RSC_CACHE_WRAPPER_ALIAS = "private-next-rsc-cache-wrapper";
    var RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS = "private-next-rsc-track-dynamic-import";
    var RSC_ACTION_ENCRYPTION_ALIAS = "private-next-rsc-action-encryption";
    var RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
    var PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
    var SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
    var SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
    var SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
    var STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
    var SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
    var GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
    var GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
    var UNSTABLE_REVALIDATE_RENAME_ERROR = "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.";
    var GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
    var NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
    var SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
    var ESLINT_DEFAULT_DIRS = [
      "app",
      "pages",
      "components",
      "lib",
      "src"
    ];
    var SERVER_RUNTIME = {
      edge: "edge",
      experimentalEdge: "experimental-edge",
      nodejs: "nodejs"
    };
    var WEBPACK_LAYERS_NAMES = {
      /**
      * The layer for the shared code between the client and server bundles.
      */
      shared: "shared",
      /**
      * The layer for server-only runtime and picking up `react-server` export conditions.
      * Including app router RSC pages and app router custom routes and metadata routes.
      */
      reactServerComponents: "rsc",
      /**
      * Server Side Rendering layer for app (ssr).
      */
      serverSideRendering: "ssr",
      /**
      * The browser client bundle layer for actions.
      */
      actionBrowser: "action-browser",
      /**
      * The Node.js bundle layer for the API routes.
      */
      apiNode: "api-node",
      /**
      * The Edge Lite bundle layer for the API routes.
      */
      apiEdge: "api-edge",
      /**
      * The layer for the middleware code.
      */
      middleware: "middleware",
      /**
      * The layer for the instrumentation hooks.
      */
      instrument: "instrument",
      /**
      * The layer for assets on the edge.
      */
      edgeAsset: "edge-asset",
      /**
      * The browser client bundle layer for App directory.
      */
      appPagesBrowser: "app-pages-browser",
      /**
      * The browser client bundle layer for Pages directory.
      */
      pagesDirBrowser: "pages-dir-browser",
      /**
      * The Edge Lite bundle layer for Pages directory.
      */
      pagesDirEdge: "pages-dir-edge",
      /**
      * The Node.js bundle layer for Pages directory.
      */
      pagesDirNode: "pages-dir-node"
    };
    var WEBPACK_LAYERS = {
      ...WEBPACK_LAYERS_NAMES,
      GROUP: {
        builtinReact: [
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.actionBrowser
        ],
        serverOnly: [
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.actionBrowser,
          WEBPACK_LAYERS_NAMES.instrument,
          WEBPACK_LAYERS_NAMES.middleware
        ],
        neutralTarget: [
          // pages api
          WEBPACK_LAYERS_NAMES.apiNode,
          WEBPACK_LAYERS_NAMES.apiEdge
        ],
        clientOnly: [
          WEBPACK_LAYERS_NAMES.serverSideRendering,
          WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        bundled: [
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.actionBrowser,
          WEBPACK_LAYERS_NAMES.serverSideRendering,
          WEBPACK_LAYERS_NAMES.appPagesBrowser,
          WEBPACK_LAYERS_NAMES.shared,
          WEBPACK_LAYERS_NAMES.instrument,
          WEBPACK_LAYERS_NAMES.middleware
        ],
        appPages: [
          // app router pages and layouts
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.serverSideRendering,
          WEBPACK_LAYERS_NAMES.appPagesBrowser,
          WEBPACK_LAYERS_NAMES.actionBrowser
        ]
      }
    };
    var WEBPACK_RESOURCE_QUERIES = {
      edgeSSREntry: "__next_edge_ssr_entry__",
      metadata: "__next_metadata__",
      metadataRoute: "__next_metadata_route__",
      metadataImageMeta: "__next_metadata_image_meta__"
    };
  }
});

// ../../node_modules/next/dist/shared/lib/escape-regexp.js
var require_escape_regexp = __commonJS({
  "../../node_modules/next/dist/shared/lib/escape-regexp.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "escapeStringRegexp", {
      enumerable: true,
      get: function() {
        return escapeStringRegexp;
      }
    });
    var reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
    var reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
    function escapeStringRegexp(str) {
      if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, "\\$&");
      }
      return str;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/get-dynamic-param.js
var require_get_dynamic_param = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/get-dynamic-param.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      PARAMETER_PATTERN: function() {
        return PARAMETER_PATTERN;
      },
      getDynamicParam: function() {
        return getDynamicParam;
      },
      parseMatchedParameter: function() {
        return parseMatchedParameter;
      },
      parseParameter: function() {
        return parseParameter;
      }
    });
    function getDynamicParam(params, segmentKey, dynamicParamType, pagePath, fallbackRouteParams) {
      let value = params[segmentKey];
      if (fallbackRouteParams && fallbackRouteParams.has(segmentKey)) {
        value = fallbackRouteParams.get(segmentKey);
      } else if (Array.isArray(value)) {
        value = value.map((i) => encodeURIComponent(i));
      } else if (typeof value === "string") {
        value = encodeURIComponent(value);
      }
      if (!value) {
        const isCatchall = dynamicParamType === "c";
        const isOptionalCatchall = dynamicParamType === "oc";
        if (isCatchall || isOptionalCatchall) {
          if (isOptionalCatchall) {
            return {
              param: segmentKey,
              value: null,
              type: dynamicParamType,
              treeSegment: [
                segmentKey,
                "",
                dynamicParamType
              ]
            };
          }
          value = pagePath.split("/").slice(1).flatMap((pathSegment) => {
            const param = parseParameter(pathSegment);
            var _params_param_key;
            return (_params_param_key = params[param.key]) != null ? _params_param_key : param.key;
          });
          return {
            param: segmentKey,
            value,
            type: dynamicParamType,
            // This value always has to be a string.
            treeSegment: [
              segmentKey,
              value.join("/"),
              dynamicParamType
            ]
          };
        }
      }
      return {
        param: segmentKey,
        // The value that is passed to user code.
        value,
        // The value that is rendered in the router tree.
        treeSegment: [
          segmentKey,
          Array.isArray(value) ? value.join("/") : value,
          dynamicParamType
        ],
        type: dynamicParamType
      };
    }
    var PARAMETER_PATTERN = /^([^[]*)\[((?:\[[^\]]*\])|[^\]]+)\](.*)$/;
    function parseParameter(param) {
      const match = param.match(PARAMETER_PATTERN);
      if (!match) {
        return parseMatchedParameter(param);
      }
      return parseMatchedParameter(match[2]);
    }
    function parseMatchedParameter(param) {
      const optional = param.startsWith("[") && param.endsWith("]");
      if (optional) {
        param = param.slice(1, -1);
      }
      const repeat = param.startsWith("...");
      if (repeat) {
        param = param.slice(3);
      }
      return {
        key: param,
        repeat,
        optional
      };
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/route-regex.js
var require_route_regex = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/route-regex.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      getNamedMiddlewareRegex: function() {
        return getNamedMiddlewareRegex;
      },
      getNamedRouteRegex: function() {
        return getNamedRouteRegex;
      },
      getRouteRegex: function() {
        return getRouteRegex;
      }
    });
    var _constants = require_constants();
    var _interceptionroutes = require_interception_routes();
    var _escaperegexp = require_escape_regexp();
    var _removetrailingslash = require_remove_trailing_slash();
    var _getdynamicparam = require_get_dynamic_param();
    function getParametrizedRoute(route, includeSuffix, includePrefix) {
      const groups = {};
      let groupIndex = 1;
      const segments = [];
      for (const segment of (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/")) {
        const markerMatch = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m) => segment.startsWith(m));
        const paramMatches = segment.match(_getdynamicparam.PARAMETER_PATTERN);
        if (markerMatch && paramMatches && paramMatches[2]) {
          const { key, optional, repeat } = (0, _getdynamicparam.parseMatchedParameter)(paramMatches[2]);
          groups[key] = {
            pos: groupIndex++,
            repeat,
            optional
          };
          segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(markerMatch) + "([^/]+?)");
        } else if (paramMatches && paramMatches[2]) {
          const { key, repeat, optional } = (0, _getdynamicparam.parseMatchedParameter)(paramMatches[2]);
          groups[key] = {
            pos: groupIndex++,
            repeat,
            optional
          };
          if (includePrefix && paramMatches[1]) {
            segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(paramMatches[1]));
          }
          let s = repeat ? optional ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
          if (includePrefix && paramMatches[1]) {
            s = s.substring(1);
          }
          segments.push(s);
        } else {
          segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(segment));
        }
        if (includeSuffix && paramMatches && paramMatches[3]) {
          segments.push((0, _escaperegexp.escapeStringRegexp)(paramMatches[3]));
        }
      }
      return {
        parameterizedRoute: segments.join(""),
        groups
      };
    }
    function getRouteRegex(normalizedRoute, param) {
      let { includeSuffix = false, includePrefix = false, excludeOptionalTrailingSlash = false } = param === void 0 ? {} : param;
      const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute, includeSuffix, includePrefix);
      let re = parameterizedRoute;
      if (!excludeOptionalTrailingSlash) {
        re += "(?:/)?";
      }
      return {
        re: new RegExp("^" + re + "$"),
        groups
      };
    }
    function buildGetSafeRouteKey() {
      let i = 0;
      return () => {
        let routeKey = "";
        let j = ++i;
        while (j > 0) {
          routeKey += String.fromCharCode(97 + (j - 1) % 26);
          j = Math.floor((j - 1) / 26);
        }
        return routeKey;
      };
    }
    function getSafeKeyFromSegment(param) {
      let { interceptionMarker, getSafeRouteKey, segment, routeKeys, keyPrefix, backreferenceDuplicateKeys } = param;
      const { key, optional, repeat } = (0, _getdynamicparam.parseMatchedParameter)(segment);
      let cleanedKey = key.replace(/\W/g, "");
      if (keyPrefix) {
        cleanedKey = "" + keyPrefix + cleanedKey;
      }
      let invalidKey = false;
      if (cleanedKey.length === 0 || cleanedKey.length > 30) {
        invalidKey = true;
      }
      if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
        invalidKey = true;
      }
      if (invalidKey) {
        cleanedKey = getSafeRouteKey();
      }
      const duplicateKey = cleanedKey in routeKeys;
      if (keyPrefix) {
        routeKeys[cleanedKey] = "" + keyPrefix + key;
      } else {
        routeKeys[cleanedKey] = key;
      }
      const interceptionPrefix = interceptionMarker ? (0, _escaperegexp.escapeStringRegexp)(interceptionMarker) : "";
      let pattern;
      if (duplicateKey && backreferenceDuplicateKeys) {
        pattern = "\\k<" + cleanedKey + ">";
      } else if (repeat) {
        pattern = "(?<" + cleanedKey + ">.+?)";
      } else {
        pattern = "(?<" + cleanedKey + ">[^/]+?)";
      }
      return optional ? "(?:/" + interceptionPrefix + pattern + ")?" : "/" + interceptionPrefix + pattern;
    }
    function getNamedParametrizedRoute(route, prefixRouteKeys, includeSuffix, includePrefix, backreferenceDuplicateKeys) {
      const getSafeRouteKey = buildGetSafeRouteKey();
      const routeKeys = {};
      const segments = [];
      for (const segment of (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/")) {
        const hasInterceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m) => segment.startsWith(m));
        const paramMatches = segment.match(_getdynamicparam.PARAMETER_PATTERN);
        if (hasInterceptionMarker && paramMatches && paramMatches[2]) {
          segments.push(getSafeKeyFromSegment({
            getSafeRouteKey,
            interceptionMarker: paramMatches[1],
            segment: paramMatches[2],
            routeKeys,
            keyPrefix: prefixRouteKeys ? _constants.NEXT_INTERCEPTION_MARKER_PREFIX : void 0,
            backreferenceDuplicateKeys
          }));
        } else if (paramMatches && paramMatches[2]) {
          if (includePrefix && paramMatches[1]) {
            segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(paramMatches[1]));
          }
          let s = getSafeKeyFromSegment({
            getSafeRouteKey,
            segment: paramMatches[2],
            routeKeys,
            keyPrefix: prefixRouteKeys ? _constants.NEXT_QUERY_PARAM_PREFIX : void 0,
            backreferenceDuplicateKeys
          });
          if (includePrefix && paramMatches[1]) {
            s = s.substring(1);
          }
          segments.push(s);
        } else {
          segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(segment));
        }
        if (includeSuffix && paramMatches && paramMatches[3]) {
          segments.push((0, _escaperegexp.escapeStringRegexp)(paramMatches[3]));
        }
      }
      return {
        namedParameterizedRoute: segments.join(""),
        routeKeys
      };
    }
    function getNamedRouteRegex(normalizedRoute, options) {
      var _options_includeSuffix, _options_includePrefix, _options_backreferenceDuplicateKeys;
      const result = getNamedParametrizedRoute(normalizedRoute, options.prefixRouteKeys, (_options_includeSuffix = options.includeSuffix) != null ? _options_includeSuffix : false, (_options_includePrefix = options.includePrefix) != null ? _options_includePrefix : false, (_options_backreferenceDuplicateKeys = options.backreferenceDuplicateKeys) != null ? _options_backreferenceDuplicateKeys : false);
      let namedRegex = result.namedParameterizedRoute;
      if (!options.excludeOptionalTrailingSlash) {
        namedRegex += "(?:/)?";
      }
      return {
        ...getRouteRegex(normalizedRoute, options),
        namedRegex: "^" + namedRegex + "$",
        routeKeys: result.routeKeys
      };
    }
    function getNamedMiddlewareRegex(normalizedRoute, options) {
      const { parameterizedRoute } = getParametrizedRoute(normalizedRoute, false, false);
      const { catchAll = true } = options;
      if (parameterizedRoute === "/") {
        let catchAllRegex = catchAll ? ".*" : "";
        return {
          namedRegex: "^/" + catchAllRegex + "$"
        };
      }
      const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false, false, false, false);
      let catchAllGroupedRegex = catchAll ? "(?:(/.*)?)" : "";
      return {
        namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
      };
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/interpolate-as.js
var require_interpolate_as = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/interpolate-as.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "interpolateAs", {
      enumerable: true,
      get: function() {
        return interpolateAs;
      }
    });
    var _routematcher = require_route_matcher();
    var _routeregex = require_route_regex();
    function interpolateAs(route, asPathname, query) {
      let interpolatedRoute = "";
      const dynamicRegex = (0, _routeregex.getRouteRegex)(route);
      const dynamicGroups = dynamicRegex.groups;
      const dynamicMatches = (
        // Try to match the dynamic route against the asPath
        (asPathname !== route ? (0, _routematcher.getRouteMatcher)(dynamicRegex)(asPathname) : "") || // Fall back to reading the values from the href
        // TODO: should this take priority; also need to change in the router.
        query
      );
      interpolatedRoute = route;
      const params = Object.keys(dynamicGroups);
      if (!params.every((param) => {
        let value = dynamicMatches[param] || "";
        const { repeat, optional } = dynamicGroups[param];
        let replaced = "[" + (repeat ? "..." : "") + param + "]";
        if (optional) {
          replaced = (!value ? "/" : "") + "[" + replaced + "]";
        }
        if (repeat && !Array.isArray(value)) value = [
          value
        ];
        return (optional || param in dynamicMatches) && // Interpolate group into data URL if present
        (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(
          // these values should be fully encoded instead of just
          // path delimiter escaped since they are being inserted
          // into the URL and we expect URL encoded segments
          // when parsing dynamic route params
          (segment) => encodeURIComponent(segment)
        ).join("/") : encodeURIComponent(value)) || "/");
      })) {
        interpolatedRoute = "";
      }
      return {
        params,
        result: interpolatedRoute
      };
    }
  }
});

// ../../node_modules/next/dist/client/resolve-href.js
var require_resolve_href = __commonJS({
  "../../node_modules/next/dist/client/resolve-href.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "resolveHref", {
      enumerable: true,
      get: function() {
        return resolveHref;
      }
    });
    var _querystring = require_querystring();
    var _formaturl = require_format_url();
    var _omit = require_omit();
    var _utils = require_utils();
    var _normalizetrailingslash = require_normalize_trailing_slash();
    var _islocalurl = require_is_local_url();
    var _utils1 = require_utils2();
    var _interpolateas = require_interpolate_as();
    var _routeregex = require_route_regex();
    var _routematcher = require_route_matcher();
    function resolveHref(router, href, resolveAs) {
      let base;
      let urlAsString = typeof href === "string" ? href : (0, _formaturl.formatWithValidation)(href);
      const urlProtoMatch = urlAsString.match(/^[a-z][a-z0-9+.-]*:\/\//i);
      const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
      const urlParts = urlAsStringNoProto.split("?", 1);
      if ((urlParts[0] || "").match(/(\/\/|\\)/)) {
        console.error("Invalid href '" + urlAsString + "' passed to next/router in page: '" + router.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
        const normalizedUrl = (0, _utils.normalizeRepeatedSlashes)(urlAsStringNoProto);
        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : "") + normalizedUrl;
      }
      if (!(0, _islocalurl.isLocalURL)(urlAsString)) {
        return resolveAs ? [
          urlAsString
        ] : urlAsString;
      }
      try {
        let baseBase = urlAsString.startsWith("#") ? router.asPath : router.pathname;
        if (urlAsString.startsWith("?")) {
          baseBase = router.asPath;
          if ((0, _utils1.isDynamicRoute)(router.pathname)) {
            baseBase = router.pathname;
            const routeRegex = (0, _routeregex.getRouteRegex)(router.pathname);
            const match = (0, _routematcher.getRouteMatcher)(routeRegex)(router.asPath);
            if (!match) {
              baseBase = router.asPath;
            }
          }
        }
        base = new URL(baseBase, "http://n");
      } catch (_) {
        base = new URL("/", "http://n");
      }
      try {
        const finalUrl = new URL(urlAsString, base);
        finalUrl.pathname = (0, _normalizetrailingslash.normalizePathTrailingSlash)(finalUrl.pathname);
        let interpolatedAs = "";
        if ((0, _utils1.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
          const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
          const { result, params } = (0, _interpolateas.interpolateAs)(finalUrl.pathname, finalUrl.pathname, query);
          if (result) {
            interpolatedAs = (0, _formaturl.formatWithValidation)({
              pathname: result,
              hash: finalUrl.hash,
              query: (0, _omit.omit)(query, params)
            });
          }
        }
        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
        return resolveAs ? [
          resolvedHref,
          interpolatedAs || resolvedHref
        ] : resolvedHref;
      } catch (_) {
        return resolveAs ? [
          urlAsString
        ] : urlAsString;
      }
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js
var require_add_path_prefix = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "addPathPrefix", {
      enumerable: true,
      get: function() {
        return addPathPrefix;
      }
    });
    var _parsepath = require_parse_path();
    function addPathPrefix(path, prefix) {
      if (!path.startsWith("/") || !prefix) {
        return path;
      }
      const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
      return "" + prefix + pathname + query + hash;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/add-locale.js
var require_add_locale = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/add-locale.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "addLocale", {
      enumerable: true,
      get: function() {
        return addLocale;
      }
    });
    var _addpathprefix = require_add_path_prefix();
    var _pathhasprefix = require_path_has_prefix();
    function addLocale(path, locale, defaultLocale, ignorePrefix) {
      if (!locale || locale === defaultLocale) return path;
      const lower = path.toLowerCase();
      if (!ignorePrefix) {
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/api")) return path;
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/" + locale.toLowerCase())) return path;
      }
      return (0, _addpathprefix.addPathPrefix)(path, "/" + locale);
    }
  }
});

// ../../node_modules/next/dist/client/add-locale.js
var require_add_locale2 = __commonJS({
  "../../node_modules/next/dist/client/add-locale.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "addLocale", {
      enumerable: true,
      get: function() {
        return addLocale;
      }
    });
    var _normalizetrailingslash = require_normalize_trailing_slash();
    var addLocale = function(path) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      if (process.env.__NEXT_I18N_SUPPORT) {
        return (0, _normalizetrailingslash.normalizePathTrailingSlash)(require_add_locale().addLocale(path, ...args));
      }
      return path;
    };
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/@swc/helpers/cjs/_interop_require_default.cjs
var require_interop_require_default = __commonJS({
  "../../node_modules/@swc/helpers/cjs/_interop_require_default.cjs"(exports$1) {
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports$1._ = _interop_require_default;
  }
});

// ../../node_modules/next/dist/shared/lib/router-context.shared-runtime.js
var require_router_context_shared_runtime = __commonJS({
  "../../node_modules/next/dist/shared/lib/router-context.shared-runtime.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "RouterContext", {
      enumerable: true,
      get: function() {
        return RouterContext;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _react = /* @__PURE__ */ _interop_require_default._(__require("react"));
    var RouterContext = _react.default.createContext(null);
    if (process.env.NODE_ENV !== "production") {
      RouterContext.displayName = "RouterContext";
    }
  }
});

// ../../node_modules/next/dist/client/request-idle-callback.js
var require_request_idle_callback = __commonJS({
  "../../node_modules/next/dist/client/request-idle-callback.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      cancelIdleCallback: function() {
        return cancelIdleCallback;
      },
      requestIdleCallback: function() {
        return requestIdleCallback;
      }
    });
    var requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
      let start = Date.now();
      return self.setTimeout(function() {
        cb({
          didTimeout: false,
          timeRemaining: function() {
            return Math.max(0, 50 - (Date.now() - start));
          }
        });
      }, 1);
    };
    var cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
      return clearTimeout(id);
    };
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/client/use-intersection.js
var require_use_intersection = __commonJS({
  "../../node_modules/next/dist/client/use-intersection.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "useIntersection", {
      enumerable: true,
      get: function() {
        return useIntersection;
      }
    });
    var _react = __require("react");
    var _requestidlecallback = require_request_idle_callback();
    var hasIntersectionObserver = typeof IntersectionObserver === "function";
    var observers = /* @__PURE__ */ new Map();
    var idList = [];
    function createObserver(options) {
      const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
      };
      const existing = idList.find((obj) => obj.root === id.root && obj.margin === id.margin);
      let instance;
      if (existing) {
        instance = observers.get(existing);
        if (instance) {
          return instance;
        }
      }
      const elements = /* @__PURE__ */ new Map();
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const callback = elements.get(entry.target);
          const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
          if (callback && isVisible) {
            callback(isVisible);
          }
        });
      }, options);
      instance = {
        id,
        observer,
        elements
      };
      idList.push(id);
      observers.set(id, instance);
      return instance;
    }
    function observe(element, callback, options) {
      const { id, observer, elements } = createObserver(options);
      elements.set(element, callback);
      observer.observe(element);
      return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        if (elements.size === 0) {
          observer.disconnect();
          observers.delete(id);
          const index = idList.findIndex((obj) => obj.root === id.root && obj.margin === id.margin);
          if (index > -1) {
            idList.splice(index, 1);
          }
        }
      };
    }
    function useIntersection(param) {
      let { rootRef, rootMargin, disabled } = param;
      const isDisabled = disabled || !hasIntersectionObserver;
      const [visible, setVisible] = (0, _react.useState)(false);
      const elementRef = (0, _react.useRef)(null);
      const setElement = (0, _react.useCallback)((element) => {
        elementRef.current = element;
      }, []);
      (0, _react.useEffect)(() => {
        if (hasIntersectionObserver) {
          if (isDisabled || visible) return;
          const element = elementRef.current;
          if (element && element.tagName) {
            const unobserve = observe(element, (isVisible) => isVisible && setVisible(isVisible), {
              root: rootRef == null ? void 0 : rootRef.current,
              rootMargin
            });
            return unobserve;
          }
        } else {
          if (!visible) {
            const idleCallback = (0, _requestidlecallback.requestIdleCallback)(() => setVisible(true));
            return () => (0, _requestidlecallback.cancelIdleCallback)(idleCallback);
          }
        }
      }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
      ]);
      const resetVisible = (0, _react.useCallback)(() => {
        setVisible(false);
      }, []);
      return [
        setElement,
        visible,
        resetVisible
      ];
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js
var require_normalize_locale_path = __commonJS({
  "../../node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "normalizeLocalePath", {
      enumerable: true,
      get: function() {
        return normalizeLocalePath;
      }
    });
    var cache = /* @__PURE__ */ new WeakMap();
    function normalizeLocalePath(pathname, locales) {
      if (!locales) return {
        pathname
      };
      let lowercasedLocales = cache.get(locales);
      if (!lowercasedLocales) {
        lowercasedLocales = locales.map((locale) => locale.toLowerCase());
        cache.set(locales, lowercasedLocales);
      }
      let detectedLocale;
      const segments = pathname.split("/", 2);
      if (!segments[1]) return {
        pathname
      };
      const segment = segments[1].toLowerCase();
      const index = lowercasedLocales.indexOf(segment);
      if (index < 0) return {
        pathname
      };
      detectedLocale = locales[index];
      pathname = pathname.slice(detectedLocale.length + 1) || "/";
      return {
        pathname,
        detectedLocale
      };
    }
  }
});

// ../../node_modules/next/dist/client/normalize-locale-path.js
var require_normalize_locale_path2 = __commonJS({
  "../../node_modules/next/dist/client/normalize-locale-path.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "normalizeLocalePath", {
      enumerable: true,
      get: function() {
        return normalizeLocalePath;
      }
    });
    var normalizeLocalePath = (pathname, locales) => {
      if (process.env.__NEXT_I18N_SUPPORT) {
        return require_normalize_locale_path().normalizeLocalePath(pathname, locales);
      }
      return {
        pathname,
        detectedLocale: void 0
      };
    };
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js
var require_detect_domain_locale = __commonJS({
  "../../node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "detectDomainLocale", {
      enumerable: true,
      get: function() {
        return detectDomainLocale;
      }
    });
    function detectDomainLocale(domainItems, hostname, detectedLocale) {
      if (!domainItems) return;
      if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
      }
      for (const item of domainItems) {
        var _item_domain, _item_locales;
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":", 1)[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale) => locale.toLowerCase() === detectedLocale))) {
          return item;
        }
      }
    }
  }
});

// ../../node_modules/next/dist/client/detect-domain-locale.js
var require_detect_domain_locale2 = __commonJS({
  "../../node_modules/next/dist/client/detect-domain-locale.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "detectDomainLocale", {
      enumerable: true,
      get: function() {
        return detectDomainLocale;
      }
    });
    var detectDomainLocale = function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (process.env.__NEXT_I18N_SUPPORT) {
        return require_detect_domain_locale().detectDomainLocale(...args);
      }
    };
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/client/get-domain-locale.js
var require_get_domain_locale = __commonJS({
  "../../node_modules/next/dist/client/get-domain-locale.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "getDomainLocale", {
      enumerable: true,
      get: function() {
        return getDomainLocale;
      }
    });
    var _normalizetrailingslash = require_normalize_trailing_slash();
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function getDomainLocale(path, locale, locales, domainLocales) {
      if (process.env.__NEXT_I18N_SUPPORT) {
        const normalizeLocalePath = require_normalize_locale_path2().normalizeLocalePath;
        const detectDomainLocale = require_detect_domain_locale2().detectDomainLocale;
        const target = locale || normalizeLocalePath(path, locales).detectedLocale;
        const domain = detectDomainLocale(domainLocales, void 0, target);
        if (domain) {
          const proto = "http" + (domain.http ? "" : "s") + "://";
          const finalLocale = target === domain.defaultLocale ? "" : "/" + target;
          return "" + proto + domain.domain + (0, _normalizetrailingslash.normalizePathTrailingSlash)("" + basePath + finalLocale + path);
        }
        return false;
      } else {
        return false;
      }
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/client/add-base-path.js
var require_add_base_path = __commonJS({
  "../../node_modules/next/dist/client/add-base-path.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "addBasePath", {
      enumerable: true,
      get: function() {
        return addBasePath;
      }
    });
    var _addpathprefix = require_add_path_prefix();
    var _normalizetrailingslash = require_normalize_trailing_slash();
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function addBasePath(path, required) {
      return (0, _normalizetrailingslash.normalizePathTrailingSlash)(process.env.__NEXT_MANUAL_CLIENT_BASE_PATH && !required ? path : (0, _addpathprefix.addPathPrefix)(path, basePath));
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/client/use-merged-ref.js
var require_use_merged_ref = __commonJS({
  "../../node_modules/next/dist/client/use-merged-ref.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "useMergedRef", {
      enumerable: true,
      get: function() {
        return useMergedRef;
      }
    });
    var _react = __require("react");
    function useMergedRef(refA, refB) {
      const cleanupA = (0, _react.useRef)(null);
      const cleanupB = (0, _react.useRef)(null);
      return (0, _react.useCallback)((current) => {
        if (current === null) {
          const cleanupFnA = cleanupA.current;
          if (cleanupFnA) {
            cleanupA.current = null;
            cleanupFnA();
          }
          const cleanupFnB = cleanupB.current;
          if (cleanupFnB) {
            cleanupB.current = null;
            cleanupFnB();
          }
        } else {
          if (refA) {
            cleanupA.current = applyRef(refA, current);
          }
          if (refB) {
            cleanupB.current = applyRef(refB, current);
          }
        }
      }, [
        refA,
        refB
      ]);
    }
    function applyRef(refA, current) {
      if (typeof refA === "function") {
        const cleanup = refA(current);
        if (typeof cleanup === "function") {
          return cleanup;
        } else {
          return () => refA(null);
        }
      } else {
        refA.current = current;
        return () => {
          refA.current = null;
        };
      }
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/utils/error-once.js
var require_error_once = __commonJS({
  "../../node_modules/next/dist/shared/lib/utils/error-once.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "errorOnce", {
      enumerable: true,
      get: function() {
        return errorOnce;
      }
    });
    var errorOnce = (_) => {
    };
    if (process.env.NODE_ENV !== "production") {
      const errors = /* @__PURE__ */ new Set();
      errorOnce = (msg) => {
        if (!errors.has(msg)) {
          console.error(msg);
        }
        errors.add(msg);
      };
    }
  }
});

// ../../node_modules/next/dist/client/link.js
var require_link = __commonJS({
  "../../node_modules/next/dist/client/link.js"(exports$1, module) {
    "use client";
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      default: function() {
        return _default;
      },
      useLinkStatus: function() {
        return useLinkStatus;
      }
    });
    var _interop_require_wildcard = require_interop_require_wildcard();
    var _jsxruntime = __require("react/jsx-runtime");
    var _react = /* @__PURE__ */ _interop_require_wildcard._(__require("react"));
    var _resolvehref = require_resolve_href();
    var _islocalurl = require_is_local_url();
    var _formaturl = require_format_url();
    var _utils = require_utils();
    var _addlocale = require_add_locale2();
    var _routercontextsharedruntime = require_router_context_shared_runtime();
    var _useintersection = require_use_intersection();
    var _getdomainlocale = require_get_domain_locale();
    var _addbasepath = require_add_base_path();
    var _usemergedref = require_use_merged_ref();
    var _erroronce = require_error_once();
    var prefetched = /* @__PURE__ */ new Set();
    function prefetch(router, href, as, options) {
      if (typeof window === "undefined") {
        return;
      }
      if (!(0, _islocalurl.isLocalURL)(href)) {
        return;
      }
      if (!options.bypassPrefetchedCheck) {
        const locale = (
          // Let the link's locale prop override the default router locale.
          typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : void 0
        );
        const prefetchedKey = href + "%" + as + "%" + locale;
        if (prefetched.has(prefetchedKey)) {
          return;
        }
        prefetched.add(prefetchedKey);
      }
      router.prefetch(href, as, options).catch((err) => {
        if (process.env.NODE_ENV !== "production") {
          throw err;
        }
      });
    }
    function isModifiedEvent(event) {
      const eventTarget = event.currentTarget;
      const target = eventTarget.getAttribute("target");
      return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
      event.nativeEvent && event.nativeEvent.which === 2;
    }
    function linkClicked(e, router, href, as, replace, shallow, scroll, locale, onNavigate) {
      const { nodeName } = e.currentTarget;
      const isAnchorNodeName = nodeName.toUpperCase() === "A";
      if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute("download")) {
        return;
      }
      if (!(0, _islocalurl.isLocalURL)(href)) {
        if (replace) {
          e.preventDefault();
          location.replace(href);
        }
        return;
      }
      e.preventDefault();
      const navigate = () => {
        if (onNavigate) {
          let isDefaultPrevented = false;
          onNavigate({
            preventDefault: () => {
              isDefaultPrevented = true;
            }
          });
          if (isDefaultPrevented) {
            return;
          }
        }
        const routerScroll = scroll != null ? scroll : true;
        if ("beforePopState" in router) {
          router[replace ? "replace" : "push"](href, as, {
            shallow,
            locale,
            scroll: routerScroll
          });
        } else {
          router[replace ? "replace" : "push"](as || href, {
            scroll: routerScroll
          });
        }
      };
      navigate();
    }
    function formatStringOrUrl(urlObjOrString) {
      if (typeof urlObjOrString === "string") {
        return urlObjOrString;
      }
      return (0, _formaturl.formatUrl)(urlObjOrString);
    }
    var Link5 = /* @__PURE__ */ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
      let children;
      const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, locale, onClick, onNavigate, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, ...restProps } = props;
      children = childrenProp;
      if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /* @__PURE__ */ (0, _jsxruntime.jsx)("a", {
          children
        });
      }
      const router = _react.default.useContext(_routercontextsharedruntime.RouterContext);
      const prefetchEnabled = prefetchProp !== false;
      if (process.env.NODE_ENV !== "production") {
        let createPropError = function(args) {
          return Object.defineProperty(new Error("Failed prop type: The prop `" + args.key + "` expects a " + args.expected + " in `<Link>`, but got `" + args.actual + "` instead." + (typeof window !== "undefined" ? "\nOpen your browser's console to view the Component stack trace." : "")), "__NEXT_ERROR_CODE", {
            value: "E319",
            enumerable: false,
            configurable: true
          });
        };
        const requiredPropsGuard = {
          href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key) => {
          if (key === "href") {
            if (props[key] == null || typeof props[key] !== "string" && typeof props[key] !== "object") {
              throw createPropError({
                key,
                expected: "`string` or `object`",
                actual: props[key] === null ? "null" : typeof props[key]
              });
            }
          }
        });
        const optionalPropsGuard = {
          as: true,
          replace: true,
          scroll: true,
          shallow: true,
          passHref: true,
          prefetch: true,
          locale: true,
          onClick: true,
          onMouseEnter: true,
          onTouchStart: true,
          legacyBehavior: true,
          onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key) => {
          const valType = typeof props[key];
          if (key === "as") {
            if (props[key] && valType !== "string" && valType !== "object") {
              throw createPropError({
                key,
                expected: "`string` or `object`",
                actual: valType
              });
            }
          } else if (key === "locale") {
            if (props[key] && valType !== "string") {
              throw createPropError({
                key,
                expected: "`string`",
                actual: valType
              });
            }
          } else if (key === "onClick" || key === "onMouseEnter" || key === "onTouchStart" || key === "onNavigate") {
            if (props[key] && valType !== "function") {
              throw createPropError({
                key,
                expected: "`function`",
                actual: valType
              });
            }
          } else if (key === "replace" || key === "scroll" || key === "shallow" || key === "passHref" || key === "legacyBehavior") {
            if (props[key] != null && valType !== "boolean") {
              throw createPropError({
                key,
                expected: "`boolean`",
                actual: valType
              });
            }
          } else if (key === "prefetch") {
            if (props[key] != null && valType !== "boolean" && props[key] !== "auto") {
              throw createPropError({
                key,
                expected: '`boolean | "auto"`',
                actual: valType
              });
            }
          } else ;
        });
      }
      const { href, as } = _react.default.useMemo(() => {
        if (!router) {
          const resolvedHref2 = formatStringOrUrl(hrefProp);
          return {
            href: resolvedHref2,
            as: asProp ? formatStringOrUrl(asProp) : resolvedHref2
          };
        }
        const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(router, hrefProp, true);
        return {
          href: resolvedHref,
          as: asProp ? (0, _resolvehref.resolveHref)(router, asProp) : resolvedAs || resolvedHref
        };
      }, [
        router,
        hrefProp,
        asProp
      ]);
      const previousHref = _react.default.useRef(href);
      const previousAs = _react.default.useRef(as);
      let child;
      if (legacyBehavior) {
        if (process.env.NODE_ENV === "development") {
          if (onClick) {
            console.warn('"onClick" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link');
          }
          if (onMouseEnterProp) {
            console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
          }
          try {
            child = _react.default.Children.only(children);
          } catch (err) {
            if (!children) {
              throw Object.defineProperty(new Error("No children were passed to <Link> with `href` of `" + hrefProp + "` but one child is required https://nextjs.org/docs/messages/link-no-children"), "__NEXT_ERROR_CODE", {
                value: "E320",
                enumerable: false,
                configurable: true
              });
            }
            throw Object.defineProperty(new Error("Multiple children were passed to <Link> with `href` of `" + hrefProp + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window !== "undefined" ? " \nOpen your browser's console to view the Component stack trace." : "")), "__NEXT_ERROR_CODE", {
              value: "E266",
              enumerable: false,
              configurable: true
            });
          }
        } else {
          child = _react.default.Children.only(children);
        }
      } else {
        if (process.env.NODE_ENV === "development") {
          if ((children == null ? void 0 : children.type) === "a") {
            throw Object.defineProperty(new Error("Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor"), "__NEXT_ERROR_CODE", {
              value: "E209",
              enumerable: false,
              configurable: true
            });
          }
        }
      }
      const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
      const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
        rootMargin: "200px"
      });
      const setIntersectionWithResetRef = _react.default.useCallback((el) => {
        if (previousAs.current !== as || previousHref.current !== href) {
          resetVisible();
          previousAs.current = as;
          previousHref.current = href;
        }
        setIntersectionRef(el);
      }, [
        as,
        href,
        resetVisible,
        setIntersectionRef
      ]);
      const setRef = (0, _usemergedref.useMergedRef)(setIntersectionWithResetRef, childRef);
      _react.default.useEffect(() => {
        if (process.env.NODE_ENV !== "production") {
          return;
        }
        if (!router) {
          return;
        }
        if (!isVisible || !prefetchEnabled) {
          return;
        }
        prefetch(router, href, as, {
          locale
        });
      }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        router == null ? void 0 : router.locale,
        router
      ]);
      const childProps = {
        ref: setRef,
        onClick(e) {
          if (process.env.NODE_ENV !== "production") {
            if (!e) {
              throw Object.defineProperty(new Error('Component rendered inside next/link has to pass click event to "onClick" prop.'), "__NEXT_ERROR_CODE", {
                value: "E312",
                enumerable: false,
                configurable: true
              });
            }
          }
          if (!legacyBehavior && typeof onClick === "function") {
            onClick(e);
          }
          if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
            child.props.onClick(e);
          }
          if (!router) {
            return;
          }
          if (e.defaultPrevented) {
            return;
          }
          linkClicked(e, router, href, as, replace, shallow, scroll, locale, onNavigate);
        },
        onMouseEnter(e) {
          if (!legacyBehavior && typeof onMouseEnterProp === "function") {
            onMouseEnterProp(e);
          }
          if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
            child.props.onMouseEnter(e);
          }
          if (!router) {
            return;
          }
          prefetch(router, href, as, {
            locale,
            priority: true,
            // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
            bypassPrefetchedCheck: true
          });
        },
        onTouchStart: process.env.__NEXT_LINK_NO_TOUCH_START ? void 0 : function onTouchStart(e) {
          if (!legacyBehavior && typeof onTouchStartProp === "function") {
            onTouchStartProp(e);
          }
          if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
            child.props.onTouchStart(e);
          }
          if (!router) {
            return;
          }
          prefetch(router, href, as, {
            locale,
            priority: true,
            // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
            bypassPrefetchedCheck: true
          });
        }
      };
      if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
      } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : router == null ? void 0 : router.locale;
        const localeDomain = (router == null ? void 0 : router.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, router == null ? void 0 : router.locales, router == null ? void 0 : router.domainLocales);
        childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, router == null ? void 0 : router.defaultLocale));
      }
      if (legacyBehavior) {
        if (process.env.NODE_ENV === "development") {
          (0, _erroronce.errorOnce)("`legacyBehavior` is deprecated and will be removed in a future release. A codemod is available to upgrade your components:\n\nnpx @next/codemod@latest new-link .\n\nLearn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components");
        }
        return /* @__PURE__ */ _react.default.cloneElement(child, childProps);
      }
      return /* @__PURE__ */ (0, _jsxruntime.jsx)("a", {
        ...restProps,
        ...childProps,
        children
      });
    });
    var LinkStatusContext = /* @__PURE__ */ (0, _react.createContext)({
      // We do not support link status in the Pages Router, so we always return false
      pending: false
    });
    var useLinkStatus = () => {
      return (0, _react.useContext)(LinkStatusContext);
    };
    var _default = Link5;
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/link.js
var require_link2 = __commonJS({
  "../../node_modules/next/link.js"(exports$1, module) {
    module.exports = require_link();
  }
});

// ../../node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js
var require_app_router_context_shared_runtime = __commonJS({
  "../../node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js"(exports$1) {
    "use client";
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      AppRouterContext: function() {
        return AppRouterContext;
      },
      GlobalLayoutRouterContext: function() {
        return GlobalLayoutRouterContext;
      },
      LayoutRouterContext: function() {
        return LayoutRouterContext;
      },
      MissingSlotContext: function() {
        return MissingSlotContext;
      },
      TemplateContext: function() {
        return TemplateContext;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _react = /* @__PURE__ */ _interop_require_default._(__require("react"));
    var AppRouterContext = _react.default.createContext(null);
    var LayoutRouterContext = _react.default.createContext(null);
    var GlobalLayoutRouterContext = _react.default.createContext(null);
    var TemplateContext = _react.default.createContext(null);
    if (process.env.NODE_ENV !== "production") {
      AppRouterContext.displayName = "AppRouterContext";
      LayoutRouterContext.displayName = "LayoutRouterContext";
      GlobalLayoutRouterContext.displayName = "GlobalLayoutRouterContext";
      TemplateContext.displayName = "TemplateContext";
    }
    var MissingSlotContext = _react.default.createContext(/* @__PURE__ */ new Set());
  }
});

// ../../node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js
var require_hooks_client_context_shared_runtime = __commonJS({
  "../../node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js"(exports$1) {
    "use client";
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      PathParamsContext: function() {
        return PathParamsContext;
      },
      PathnameContext: function() {
        return PathnameContext;
      },
      SearchParamsContext: function() {
        return SearchParamsContext;
      }
    });
    var _react = __require("react");
    var SearchParamsContext = (0, _react.createContext)(null);
    var PathnameContext = (0, _react.createContext)(null);
    var PathParamsContext = (0, _react.createContext)(null);
    if (process.env.NODE_ENV !== "production") {
      SearchParamsContext.displayName = "SearchParamsContext";
      PathnameContext.displayName = "PathnameContext";
      PathParamsContext.displayName = "PathParamsContext";
    }
  }
});

// ../../node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js
var require_get_segment_value = __commonJS({
  "../../node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "getSegmentValue", {
      enumerable: true,
      get: function() {
        return getSegmentValue;
      }
    });
    function getSegmentValue(segment) {
      return Array.isArray(segment) ? segment[1] : segment;
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/client/components/redirect-status-code.js
var require_redirect_status_code = __commonJS({
  "../../node_modules/next/dist/client/components/redirect-status-code.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "RedirectStatusCode", {
      enumerable: true,
      get: function() {
        return RedirectStatusCode;
      }
    });
    var RedirectStatusCode = /* @__PURE__ */ (function(RedirectStatusCode2) {
      RedirectStatusCode2[RedirectStatusCode2["SeeOther"] = 303] = "SeeOther";
      RedirectStatusCode2[RedirectStatusCode2["TemporaryRedirect"] = 307] = "TemporaryRedirect";
      RedirectStatusCode2[RedirectStatusCode2["PermanentRedirect"] = 308] = "PermanentRedirect";
      return RedirectStatusCode2;
    })({});
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/client/components/redirect-error.js
var require_redirect_error = __commonJS({
  "../../node_modules/next/dist/client/components/redirect-error.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
      },
      RedirectType: function() {
        return RedirectType;
      },
      isRedirectError: function() {
        return isRedirectError;
      }
    });
    var _redirectstatuscode = require_redirect_status_code();
    var REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
    var RedirectType = /* @__PURE__ */ (function(RedirectType2) {
      RedirectType2["push"] = "push";
      RedirectType2["replace"] = "replace";
      return RedirectType2;
    })({});
    function isRedirectError(error) {
      if (typeof error !== "object" || error === null || !("digest" in error) || typeof error.digest !== "string") {
        return false;
      }
      const digest = error.digest.split(";");
      const [errorCode, type] = digest;
      const destination = digest.slice(2, -2).join(";");
      const status = digest.at(-2);
      const statusCode = Number(status);
      return errorCode === REDIRECT_ERROR_CODE && (type === "replace" || type === "push") && typeof destination === "string" && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/server/app-render/async-local-storage.js
var require_async_local_storage = __commonJS({
  "../../node_modules/next/dist/server/app-render/async-local-storage.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      bindSnapshot: function() {
        return bindSnapshot;
      },
      createAsyncLocalStorage: function() {
        return createAsyncLocalStorage;
      },
      createSnapshot: function() {
        return createSnapshot;
      }
    });
    var sharedAsyncLocalStorageNotAvailableError = Object.defineProperty(new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
      value: "E504",
      enumerable: false,
      configurable: true
    });
    var FakeAsyncLocalStorage = class {
      disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      getStore() {
        return void 0;
      }
      run() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      static bind(fn) {
        return fn;
      }
    };
    var maybeGlobalAsyncLocalStorage = typeof globalThis !== "undefined" && globalThis.AsyncLocalStorage;
    function createAsyncLocalStorage() {
      if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
      }
      return new FakeAsyncLocalStorage();
    }
    function bindSnapshot(fn) {
      if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.bind(fn);
      }
      return FakeAsyncLocalStorage.bind(fn);
    }
    function createSnapshot() {
      if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.snapshot();
      }
      return function(fn, ...args) {
        return fn(...args);
      };
    }
  }
});

// ../../node_modules/next/dist/server/app-render/action-async-storage-instance.js
var require_action_async_storage_instance = __commonJS({
  "../../node_modules/next/dist/server/app-render/action-async-storage-instance.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "actionAsyncStorageInstance", {
      enumerable: true,
      get: function() {
        return actionAsyncStorageInstance;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var actionAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
  }
});

// ../../node_modules/next/dist/server/app-render/action-async-storage.external.js
var require_action_async_storage_external = __commonJS({
  "../../node_modules/next/dist/server/app-render/action-async-storage.external.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "actionAsyncStorage", {
      enumerable: true,
      get: function() {
        return _actionasyncstorageinstance.actionAsyncStorageInstance;
      }
    });
    var _actionasyncstorageinstance = require_action_async_storage_instance();
  }
});

// ../../node_modules/next/dist/client/components/redirect.js
var require_redirect = __commonJS({
  "../../node_modules/next/dist/client/components/redirect.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      getRedirectError: function() {
        return getRedirectError;
      },
      getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
      },
      getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
      },
      getURLFromRedirectError: function() {
        return getURLFromRedirectError;
      },
      permanentRedirect: function() {
        return permanentRedirect;
      },
      redirect: function() {
        return redirect;
      }
    });
    var _redirectstatuscode = require_redirect_status_code();
    var _redirecterror = require_redirect_error();
    var actionAsyncStorage = typeof window === "undefined" ? require_action_async_storage_external().actionAsyncStorage : void 0;
    function getRedirectError(url, type, statusCode) {
      if (statusCode === void 0) statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect;
      const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.digest = _redirecterror.REDIRECT_ERROR_CODE + ";" + type + ";" + url + ";" + statusCode + ";";
      return error;
    }
    function redirect(url, type) {
      var _actionAsyncStorage_getStore;
      type != null ? type : type = (actionAsyncStorage == null ? void 0 : (_actionAsyncStorage_getStore = actionAsyncStorage.getStore()) == null ? void 0 : _actionAsyncStorage_getStore.isAction) ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace;
      throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
    }
    function permanentRedirect(url, type) {
      if (type === void 0) type = _redirecterror.RedirectType.replace;
      throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
    }
    function getURLFromRedirectError(error) {
      if (!(0, _redirecterror.isRedirectError)(error)) return null;
      return error.digest.split(";").slice(2, -2).join(";");
    }
    function getRedirectTypeFromError(error) {
      if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
          value: "E260",
          enumerable: false,
          configurable: true
        });
      }
      return error.digest.split(";", 2)[1];
    }
    function getRedirectStatusCodeFromError(error) {
      if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
          value: "E260",
          enumerable: false,
          configurable: true
        });
      }
      return Number(error.digest.split(";").at(-2));
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js
var require_http_access_fallback = __commonJS({
  "../../node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
      },
      HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
      },
      getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
      },
      getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
      },
      isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
      }
    });
    var HTTPAccessErrorStatus = {
      NOT_FOUND: 404,
      FORBIDDEN: 403,
      UNAUTHORIZED: 401
    };
    var ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
    var HTTP_ERROR_FALLBACK_ERROR_CODE = "NEXT_HTTP_ERROR_FALLBACK";
    function isHTTPAccessFallbackError(error) {
      if (typeof error !== "object" || error === null || !("digest" in error) || typeof error.digest !== "string") {
        return false;
      }
      const [prefix, httpStatus] = error.digest.split(";");
      return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
    }
    function getAccessFallbackHTTPStatus(error) {
      const httpStatus = error.digest.split(";")[1];
      return Number(httpStatus);
    }
    function getAccessFallbackErrorTypeByStatus(status) {
      switch (status) {
        case 401:
          return "unauthorized";
        case 403:
          return "forbidden";
        case 404:
          return "not-found";
        default:
          return;
      }
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/client/components/not-found.js
var require_not_found = __commonJS({
  "../../node_modules/next/dist/client/components/not-found.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "notFound", {
      enumerable: true,
      get: function() {
        return notFound;
      }
    });
    var _httpaccessfallback = require_http_access_fallback();
    var DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";404";
    function notFound() {
      const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.digest = DIGEST;
      throw error;
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/client/components/forbidden.js
var require_forbidden = __commonJS({
  "../../node_modules/next/dist/client/components/forbidden.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "forbidden", {
      enumerable: true,
      get: function() {
        return forbidden;
      }
    });
    var _httpaccessfallback = require_http_access_fallback();
    var DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";403";
    function forbidden() {
      if (!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS) {
        throw Object.defineProperty(new Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
          value: "E488",
          enumerable: false,
          configurable: true
        });
      }
      const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.digest = DIGEST;
      throw error;
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/client/components/unauthorized.js
var require_unauthorized = __commonJS({
  "../../node_modules/next/dist/client/components/unauthorized.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "unauthorized", {
      enumerable: true,
      get: function() {
        return unauthorized;
      }
    });
    var _httpaccessfallback = require_http_access_fallback();
    var DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";401";
    function unauthorized() {
      if (!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS) {
        throw Object.defineProperty(new Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
          value: "E411",
          enumerable: false,
          configurable: true
        });
      }
      const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.digest = DIGEST;
      throw error;
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/server/dynamic-rendering-utils.js
var require_dynamic_rendering_utils = __commonJS({
  "../../node_modules/next/dist/server/dynamic-rendering-utils.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      isHangingPromiseRejectionError: function() {
        return isHangingPromiseRejectionError;
      },
      makeDevtoolsIOAwarePromise: function() {
        return makeDevtoolsIOAwarePromise;
      },
      makeHangingPromise: function() {
        return makeHangingPromise;
      }
    });
    function isHangingPromiseRejectionError(err) {
      if (typeof err !== "object" || err === null || !("digest" in err)) {
        return false;
      }
      return err.digest === HANGING_PROMISE_REJECTION;
    }
    var HANGING_PROMISE_REJECTION = "HANGING_PROMISE_REJECTION";
    var HangingPromiseRejectionError = class extends Error {
      constructor(route, expression) {
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${route}".`), this.route = route, this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
      }
    };
    var abortListenersBySignal = /* @__PURE__ */ new WeakMap();
    function makeHangingPromise(signal, route, expression) {
      if (signal.aborted) {
        return Promise.reject(new HangingPromiseRejectionError(route, expression));
      } else {
        const hangingPromise = new Promise((_, reject) => {
          const boundRejection = reject.bind(null, new HangingPromiseRejectionError(route, expression));
          let currentListeners = abortListenersBySignal.get(signal);
          if (currentListeners) {
            currentListeners.push(boundRejection);
          } else {
            const listeners = [
              boundRejection
            ];
            abortListenersBySignal.set(signal, listeners);
            signal.addEventListener("abort", () => {
              for (let i = 0; i < listeners.length; i++) {
                listeners[i]();
              }
            }, {
              once: true
            });
          }
        });
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
      }
    }
    function ignoreReject() {
    }
    function makeDevtoolsIOAwarePromise(underlying) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(underlying);
        }, 0);
      });
    }
  }
});

// ../../node_modules/next/dist/server/lib/router-utils/is-postpone.js
var require_is_postpone = __commonJS({
  "../../node_modules/next/dist/server/lib/router-utils/is-postpone.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "isPostpone", {
      enumerable: true,
      get: function() {
        return isPostpone;
      }
    });
    var REACT_POSTPONE_TYPE = /* @__PURE__ */ Symbol.for("react.postpone");
    function isPostpone(error) {
      return typeof error === "object" && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js
var require_bailout_to_csr = __commonJS({
  "../../node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      BailoutToCSRError: function() {
        return BailoutToCSRError;
      },
      isBailoutToCSRError: function() {
        return isBailoutToCSRError;
      }
    });
    var BAILOUT_TO_CSR = "BAILOUT_TO_CLIENT_SIDE_RENDERING";
    var BailoutToCSRError = class extends Error {
      constructor(reason) {
        super("Bail out to client-side rendering: " + reason), this.reason = reason, this.digest = BAILOUT_TO_CSR;
      }
    };
    function isBailoutToCSRError(err) {
      if (typeof err !== "object" || err === null || !("digest" in err)) {
        return false;
      }
      return err.digest === BAILOUT_TO_CSR;
    }
  }
});

// ../../node_modules/next/dist/client/components/is-next-router-error.js
var require_is_next_router_error = __commonJS({
  "../../node_modules/next/dist/client/components/is-next-router-error.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "isNextRouterError", {
      enumerable: true,
      get: function() {
        return isNextRouterError;
      }
    });
    var _httpaccessfallback = require_http_access_fallback();
    var _redirecterror = require_redirect_error();
    function isNextRouterError(error) {
      return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/client/components/hooks-server-context.js
var require_hooks_server_context = __commonJS({
  "../../node_modules/next/dist/client/components/hooks-server-context.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      DynamicServerError: function() {
        return DynamicServerError;
      },
      isDynamicServerError: function() {
        return isDynamicServerError;
      }
    });
    var DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
    var DynamicServerError = class extends Error {
      constructor(description) {
        super("Dynamic server usage: " + description), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
      }
    };
    function isDynamicServerError(err) {
      if (typeof err !== "object" || err === null || !("digest" in err) || typeof err.digest !== "string") {
        return false;
      }
      return err.digest === DYNAMIC_ERROR_CODE;
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/client/components/static-generation-bailout.js
var require_static_generation_bailout = __commonJS({
  "../../node_modules/next/dist/client/components/static-generation-bailout.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      StaticGenBailoutError: function() {
        return StaticGenBailoutError;
      },
      isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
      }
    });
    var NEXT_STATIC_GEN_BAILOUT = "NEXT_STATIC_GEN_BAILOUT";
    var StaticGenBailoutError = class extends Error {
      constructor(...args) {
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
      }
    };
    function isStaticGenBailoutError(error) {
      if (typeof error !== "object" || error === null || !("code" in error)) {
        return false;
      }
      return error.code === NEXT_STATIC_GEN_BAILOUT;
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/server/app-render/work-unit-async-storage-instance.js
var require_work_unit_async_storage_instance = __commonJS({
  "../../node_modules/next/dist/server/app-render/work-unit-async-storage-instance.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "workUnitAsyncStorageInstance", {
      enumerable: true,
      get: function() {
        return workUnitAsyncStorageInstance;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var workUnitAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
  }
});

// ../../node_modules/next/dist/client/components/app-router-headers.js
var require_app_router_headers = __commonJS({
  "../../node_modules/next/dist/client/components/app-router-headers.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      ACTION_HEADER: function() {
        return ACTION_HEADER;
      },
      FLIGHT_HEADERS: function() {
        return FLIGHT_HEADERS;
      },
      NEXT_ACTION_NOT_FOUND_HEADER: function() {
        return NEXT_ACTION_NOT_FOUND_HEADER;
      },
      NEXT_DID_POSTPONE_HEADER: function() {
        return NEXT_DID_POSTPONE_HEADER;
      },
      NEXT_HMR_REFRESH_HASH_COOKIE: function() {
        return NEXT_HMR_REFRESH_HASH_COOKIE;
      },
      NEXT_HMR_REFRESH_HEADER: function() {
        return NEXT_HMR_REFRESH_HEADER;
      },
      NEXT_IS_PRERENDER_HEADER: function() {
        return NEXT_IS_PRERENDER_HEADER;
      },
      NEXT_REWRITTEN_PATH_HEADER: function() {
        return NEXT_REWRITTEN_PATH_HEADER;
      },
      NEXT_REWRITTEN_QUERY_HEADER: function() {
        return NEXT_REWRITTEN_QUERY_HEADER;
      },
      NEXT_ROUTER_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_PREFETCH_HEADER;
      },
      NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_SEGMENT_PREFETCH_HEADER;
      },
      NEXT_ROUTER_STALE_TIME_HEADER: function() {
        return NEXT_ROUTER_STALE_TIME_HEADER;
      },
      NEXT_ROUTER_STATE_TREE_HEADER: function() {
        return NEXT_ROUTER_STATE_TREE_HEADER;
      },
      NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
      },
      NEXT_URL: function() {
        return NEXT_URL;
      },
      RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
      },
      RSC_HEADER: function() {
        return RSC_HEADER;
      }
    });
    var RSC_HEADER = "rsc";
    var ACTION_HEADER = "next-action";
    var NEXT_ROUTER_STATE_TREE_HEADER = "next-router-state-tree";
    var NEXT_ROUTER_PREFETCH_HEADER = "next-router-prefetch";
    var NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = "next-router-segment-prefetch";
    var NEXT_HMR_REFRESH_HEADER = "next-hmr-refresh";
    var NEXT_HMR_REFRESH_HASH_COOKIE = "__next_hmr_refresh_hash__";
    var NEXT_URL = "next-url";
    var RSC_CONTENT_TYPE_HEADER = "text/x-component";
    var FLIGHT_HEADERS = [
      RSC_HEADER,
      NEXT_ROUTER_STATE_TREE_HEADER,
      NEXT_ROUTER_PREFETCH_HEADER,
      NEXT_HMR_REFRESH_HEADER,
      NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
    ];
    var NEXT_RSC_UNION_QUERY = "_rsc";
    var NEXT_ROUTER_STALE_TIME_HEADER = "x-nextjs-stale-time";
    var NEXT_DID_POSTPONE_HEADER = "x-nextjs-postponed";
    var NEXT_REWRITTEN_PATH_HEADER = "x-nextjs-rewritten-path";
    var NEXT_REWRITTEN_QUERY_HEADER = "x-nextjs-rewritten-query";
    var NEXT_IS_PRERENDER_HEADER = "x-nextjs-prerender";
    var NEXT_ACTION_NOT_FOUND_HEADER = "x-nextjs-action-not-found";
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/invariant-error.js
var require_invariant_error = __commonJS({
  "../../node_modules/next/dist/shared/lib/invariant-error.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "InvariantError", {
      enumerable: true,
      get: function() {
        return InvariantError;
      }
    });
    var InvariantError = class extends Error {
      constructor(message, options) {
        super("Invariant: " + (message.endsWith(".") ? message : message + ".") + " This is a bug in Next.js.", options);
        this.name = "InvariantError";
      }
    };
  }
});

// ../../node_modules/next/dist/server/app-render/work-unit-async-storage.external.js
var require_work_unit_async_storage_external = __commonJS({
  "../../node_modules/next/dist/server/app-render/work-unit-async-storage.external.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      getCacheSignal: function() {
        return getCacheSignal;
      },
      getDraftModeProviderForCacheScope: function() {
        return getDraftModeProviderForCacheScope;
      },
      getHmrRefreshHash: function() {
        return getHmrRefreshHash;
      },
      getPrerenderResumeDataCache: function() {
        return getPrerenderResumeDataCache;
      },
      getRenderResumeDataCache: function() {
        return getRenderResumeDataCache;
      },
      getRuntimeStagePromise: function() {
        return getRuntimeStagePromise;
      },
      getServerComponentsHmrCache: function() {
        return getServerComponentsHmrCache;
      },
      isHmrRefresh: function() {
        return isHmrRefresh;
      },
      throwForMissingRequestStore: function() {
        return throwForMissingRequestStore;
      },
      throwInvariantForMissingStore: function() {
        return throwInvariantForMissingStore;
      },
      workUnitAsyncStorage: function() {
        return _workunitasyncstorageinstance.workUnitAsyncStorageInstance;
      }
    });
    var _workunitasyncstorageinstance = require_work_unit_async_storage_instance();
    var _approuterheaders = require_app_router_headers();
    var _invarianterror = require_invariant_error();
    function throwForMissingRequestStore(callingExpression) {
      throw Object.defineProperty(new Error(`\`${callingExpression}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
        value: "E251",
        enumerable: false,
        configurable: true
      });
    }
    function throwInvariantForMissingStore() {
      throw Object.defineProperty(new _invarianterror.InvariantError("Expected workUnitAsyncStorage to have a store."), "__NEXT_ERROR_CODE", {
        value: "E696",
        enumerable: false,
        configurable: true
      });
    }
    function getPrerenderResumeDataCache(workUnitStore) {
      switch (workUnitStore.type) {
        case "prerender":
        case "prerender-runtime":
        case "prerender-ppr":
          return workUnitStore.prerenderResumeDataCache;
        case "prerender-client":
          return workUnitStore.prerenderResumeDataCache;
        case "prerender-legacy":
        case "request":
        case "cache":
        case "private-cache":
        case "unstable-cache":
          return null;
        default:
          return workUnitStore;
      }
    }
    function getRenderResumeDataCache(workUnitStore) {
      switch (workUnitStore.type) {
        case "request":
          return workUnitStore.renderResumeDataCache;
        case "prerender":
        case "prerender-runtime":
        case "prerender-client":
          if (workUnitStore.renderResumeDataCache) {
            return workUnitStore.renderResumeDataCache;
          }
        // fallthrough
        case "prerender-ppr":
          return workUnitStore.prerenderResumeDataCache;
        case "cache":
        case "private-cache":
        case "unstable-cache":
        case "prerender-legacy":
          return null;
        default:
          return workUnitStore;
      }
    }
    function getHmrRefreshHash(workStore, workUnitStore) {
      if (workStore.dev) {
        switch (workUnitStore.type) {
          case "cache":
          case "private-cache":
          case "prerender":
          case "prerender-runtime":
            return workUnitStore.hmrRefreshHash;
          case "request":
            var _workUnitStore_cookies_get;
            return (_workUnitStore_cookies_get = workUnitStore.cookies.get(_approuterheaders.NEXT_HMR_REFRESH_HASH_COOKIE)) == null ? void 0 : _workUnitStore_cookies_get.value;
        }
      }
      return void 0;
    }
    function isHmrRefresh(workStore, workUnitStore) {
      if (workStore.dev) {
        switch (workUnitStore.type) {
          case "cache":
          case "private-cache":
          case "request":
            return workUnitStore.isHmrRefresh ?? false;
        }
      }
      return false;
    }
    function getServerComponentsHmrCache(workStore, workUnitStore) {
      if (workStore.dev) {
        switch (workUnitStore.type) {
          case "cache":
          case "private-cache":
          case "request":
            return workUnitStore.serverComponentsHmrCache;
        }
      }
      return void 0;
    }
    function getDraftModeProviderForCacheScope(workStore, workUnitStore) {
      if (workStore.isDraftMode) {
        switch (workUnitStore.type) {
          case "cache":
          case "private-cache":
          case "unstable-cache":
          case "prerender-runtime":
          case "request":
            return workUnitStore.draftMode;
        }
      }
      return void 0;
    }
    function getCacheSignal(workUnitStore) {
      switch (workUnitStore.type) {
        case "prerender":
        case "prerender-client":
        case "prerender-runtime":
          return workUnitStore.cacheSignal;
        case "prerender-ppr":
        case "prerender-legacy":
        case "request":
        case "cache":
        case "private-cache":
        case "unstable-cache":
          return null;
        default:
          return workUnitStore;
      }
    }
    function getRuntimeStagePromise(workUnitStore) {
      switch (workUnitStore.type) {
        case "prerender-runtime":
        case "private-cache":
          return workUnitStore.runtimeStagePromise;
        case "prerender":
        case "prerender-client":
        case "prerender-ppr":
        case "prerender-legacy":
        case "request":
        case "cache":
        case "unstable-cache":
          return null;
        default:
          return workUnitStore;
      }
    }
  }
});

// ../../node_modules/next/dist/server/app-render/work-async-storage-instance.js
var require_work_async_storage_instance = __commonJS({
  "../../node_modules/next/dist/server/app-render/work-async-storage-instance.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "workAsyncStorageInstance", {
      enumerable: true,
      get: function() {
        return workAsyncStorageInstance;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var workAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
  }
});

// ../../node_modules/next/dist/server/app-render/work-async-storage.external.js
var require_work_async_storage_external = __commonJS({
  "../../node_modules/next/dist/server/app-render/work-async-storage.external.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "workAsyncStorage", {
      enumerable: true,
      get: function() {
        return _workasyncstorageinstance.workAsyncStorageInstance;
      }
    });
    var _workasyncstorageinstance = require_work_async_storage_instance();
  }
});

// ../../node_modules/next/dist/lib/framework/boundary-constants.js
var require_boundary_constants = __commonJS({
  "../../node_modules/next/dist/lib/framework/boundary-constants.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      METADATA_BOUNDARY_NAME: function() {
        return METADATA_BOUNDARY_NAME;
      },
      OUTLET_BOUNDARY_NAME: function() {
        return OUTLET_BOUNDARY_NAME;
      },
      ROOT_LAYOUT_BOUNDARY_NAME: function() {
        return ROOT_LAYOUT_BOUNDARY_NAME;
      },
      VIEWPORT_BOUNDARY_NAME: function() {
        return VIEWPORT_BOUNDARY_NAME;
      }
    });
    var METADATA_BOUNDARY_NAME = "__next_metadata_boundary__";
    var VIEWPORT_BOUNDARY_NAME = "__next_viewport_boundary__";
    var OUTLET_BOUNDARY_NAME = "__next_outlet_boundary__";
    var ROOT_LAYOUT_BOUNDARY_NAME = "__next_root_layout_boundary__";
  }
});

// ../../node_modules/next/dist/lib/scheduler.js
var require_scheduler = __commonJS({
  "../../node_modules/next/dist/lib/scheduler.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      atLeastOneTask: function() {
        return atLeastOneTask;
      },
      scheduleImmediate: function() {
        return scheduleImmediate;
      },
      scheduleOnNextTick: function() {
        return scheduleOnNextTick;
      },
      waitAtLeastOneReactRenderTask: function() {
        return waitAtLeastOneReactRenderTask;
      }
    });
    var scheduleOnNextTick = (cb) => {
      Promise.resolve().then(() => {
        if (process.env.NEXT_RUNTIME === "edge") {
          setTimeout(cb, 0);
        } else {
          process.nextTick(cb);
        }
      });
    };
    var scheduleImmediate = (cb) => {
      if (process.env.NEXT_RUNTIME === "edge") {
        setTimeout(cb, 0);
      } else {
        setImmediate(cb);
      }
    };
    function atLeastOneTask() {
      return new Promise((resolve) => scheduleImmediate(resolve));
    }
    function waitAtLeastOneReactRenderTask() {
      if (process.env.NEXT_RUNTIME === "edge") {
        return new Promise((r) => setTimeout(r, 0));
      } else {
        return new Promise((r) => setImmediate(r));
      }
    }
  }
});

// ../../node_modules/next/dist/server/app-render/dynamic-rendering.js
var require_dynamic_rendering = __commonJS({
  "../../node_modules/next/dist/server/app-render/dynamic-rendering.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      Postpone: function() {
        return Postpone;
      },
      PreludeState: function() {
        return PreludeState;
      },
      abortAndThrowOnSynchronousRequestDataAccess: function() {
        return abortAndThrowOnSynchronousRequestDataAccess;
      },
      abortOnSynchronousPlatformIOAccess: function() {
        return abortOnSynchronousPlatformIOAccess;
      },
      accessedDynamicData: function() {
        return accessedDynamicData;
      },
      annotateDynamicAccess: function() {
        return annotateDynamicAccess;
      },
      consumeDynamicAccess: function() {
        return consumeDynamicAccess;
      },
      createDynamicTrackingState: function() {
        return createDynamicTrackingState;
      },
      createDynamicValidationState: function() {
        return createDynamicValidationState;
      },
      createHangingInputAbortSignal: function() {
        return createHangingInputAbortSignal;
      },
      createRenderInBrowserAbortSignal: function() {
        return createRenderInBrowserAbortSignal;
      },
      delayUntilRuntimeStage: function() {
        return delayUntilRuntimeStage;
      },
      formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
      },
      getFirstDynamicReason: function() {
        return getFirstDynamicReason;
      },
      isDynamicPostpone: function() {
        return isDynamicPostpone;
      },
      isPrerenderInterruptedError: function() {
        return isPrerenderInterruptedError;
      },
      logDisallowedDynamicError: function() {
        return logDisallowedDynamicError;
      },
      markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
      },
      postponeWithTracking: function() {
        return postponeWithTracking;
      },
      throwIfDisallowedDynamic: function() {
        return throwIfDisallowedDynamic;
      },
      throwToInterruptStaticGeneration: function() {
        return throwToInterruptStaticGeneration;
      },
      trackAllowedDynamicAccess: function() {
        return trackAllowedDynamicAccess;
      },
      trackDynamicDataInDynamicRender: function() {
        return trackDynamicDataInDynamicRender;
      },
      trackSynchronousPlatformIOAccessInDev: function() {
        return trackSynchronousPlatformIOAccessInDev;
      },
      trackSynchronousRequestDataAccessInDev: function() {
        return trackSynchronousRequestDataAccessInDev;
      },
      useDynamicRouteParams: function() {
        return useDynamicRouteParams;
      },
      warnOnSyncDynamicError: function() {
        return warnOnSyncDynamicError;
      }
    });
    var _react = /* @__PURE__ */ _interop_require_default(__require("react"));
    var _hooksservercontext = require_hooks_server_context();
    var _staticgenerationbailout = require_static_generation_bailout();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _dynamicrenderingutils = require_dynamic_rendering_utils();
    var _boundaryconstants = require_boundary_constants();
    var _scheduler = require_scheduler();
    var _bailouttocsr = require_bailout_to_csr();
    var _invarianterror = require_invariant_error();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var hasPostpone = typeof _react.default.unstable_postpone === "function";
    function createDynamicTrackingState(isDebugDynamicAccesses) {
      return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null
      };
    }
    function createDynamicValidationState() {
      return {
        hasSuspenseAboveBody: false,
        hasDynamicMetadata: false,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: []
      };
    }
    function getFirstDynamicReason(trackingState) {
      var _trackingState_dynamicAccesses_;
      return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
    }
    function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
      if (workUnitStore) {
        switch (workUnitStore.type) {
          case "cache":
          case "unstable-cache":
            return;
          case "private-cache":
            return;
        }
      }
      if (store.forceDynamic || store.forceStatic) return;
      if (store.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
          value: "E553",
          enumerable: false,
          configurable: true
        });
      }
      if (workUnitStore) {
        switch (workUnitStore.type) {
          case "prerender-ppr":
            return postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
          case "prerender-legacy":
            workUnitStore.revalidate = 0;
            const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
              value: "E550",
              enumerable: false,
              configurable: true
            });
            store.dynamicUsageDescription = expression;
            store.dynamicUsageStack = err.stack;
            throw err;
          case "request":
            if (process.env.NODE_ENV !== "production") {
              workUnitStore.usedDynamic = true;
            }
            break;
        }
      }
    }
    function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
      const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
      });
      prerenderStore.revalidate = 0;
      store.dynamicUsageDescription = expression;
      store.dynamicUsageStack = err.stack;
      throw err;
    }
    function trackDynamicDataInDynamicRender(workUnitStore) {
      switch (workUnitStore.type) {
        case "cache":
        case "unstable-cache":
          return;
        case "private-cache":
          return;
        case "prerender":
        case "prerender-runtime":
        case "prerender-legacy":
        case "prerender-ppr":
        case "prerender-client":
          break;
        case "request":
          if (process.env.NODE_ENV !== "production") {
            workUnitStore.usedDynamic = true;
          }
          break;
      }
    }
    function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
      const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
      const error = createPrerenderInterruptedError(reason);
      prerenderStore.controller.abort(error);
      const dynamicTracking = prerenderStore.dynamicTracking;
      if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
          // When we aren't debugging, we don't need to create another error for the
          // stack trace.
          stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : void 0,
          expression
        });
      }
    }
    function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
      const dynamicTracking = prerenderStore.dynamicTracking;
      abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
      if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
          dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
      }
    }
    function trackSynchronousPlatformIOAccessInDev(requestStore) {
      requestStore.prerenderPhase = false;
    }
    function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
      const prerenderSignal = prerenderStore.controller.signal;
      if (prerenderSignal.aborted === false) {
        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
        const dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
          if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
          }
        }
      }
      throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
    }
    function warnOnSyncDynamicError(dynamicTracking) {
      if (dynamicTracking.syncDynamicErrorWithStack) {
        console.error(dynamicTracking.syncDynamicErrorWithStack);
      }
    }
    var trackSynchronousRequestDataAccessInDev = trackSynchronousPlatformIOAccessInDev;
    function Postpone({ reason, route }) {
      const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      const dynamicTracking = prerenderStore && prerenderStore.type === "prerender-ppr" ? prerenderStore.dynamicTracking : null;
      postponeWithTracking(route, reason, dynamicTracking);
    }
    function postponeWithTracking(route, expression, dynamicTracking) {
      assertPostpone();
      if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
          // When we aren't debugging, we don't need to create another error for the
          // stack trace.
          stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : void 0,
          expression
        });
      }
      _react.default.unstable_postpone(createPostponeReason(route, expression));
    }
    function createPostponeReason(route, expression) {
      return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
    }
    function isDynamicPostpone(err) {
      if (typeof err === "object" && err !== null && typeof err.message === "string") {
        return isDynamicPostponeReason(err.message);
      }
      return false;
    }
    function isDynamicPostponeReason(reason) {
      return reason.includes("needs to bail out of prerendering at this point because it used") && reason.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error");
    }
    if (isDynamicPostponeReason(createPostponeReason("%%%", "^^^")) === false) {
      throw Object.defineProperty(new Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
      });
    }
    var NEXT_PRERENDER_INTERRUPTED = "NEXT_PRERENDER_INTERRUPTED";
    function createPrerenderInterruptedError(message) {
      const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.digest = NEXT_PRERENDER_INTERRUPTED;
      return error;
    }
    function isPrerenderInterruptedError(error) {
      return typeof error === "object" && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && "name" in error && "message" in error && error instanceof Error;
    }
    function accessedDynamicData(dynamicAccesses) {
      return dynamicAccesses.length > 0;
    }
    function consumeDynamicAccess(serverDynamic, clientDynamic) {
      serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
      return serverDynamic.dynamicAccesses;
    }
    function formatDynamicAPIAccesses(dynamicAccesses) {
      return dynamicAccesses.filter((access) => typeof access.stack === "string" && access.stack.length > 0).map(({ expression, stack }) => {
        stack = stack.split("\n").slice(4).filter((line) => {
          if (line.includes("node_modules/next/")) {
            return false;
          }
          if (line.includes(" (<anonymous>)")) {
            return false;
          }
          if (line.includes(" (node:")) {
            return false;
          }
          return true;
        }).join("\n");
        return `Dynamic API Usage Debug - ${expression}:
${stack}`;
      });
    }
    function assertPostpone() {
      if (!hasPostpone) {
        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
          value: "E224",
          enumerable: false,
          configurable: true
        });
      }
    }
    function createRenderInBrowserAbortSignal() {
      const controller = new AbortController();
      controller.abort(Object.defineProperty(new _bailouttocsr.BailoutToCSRError("Render in Browser"), "__NEXT_ERROR_CODE", {
        value: "E721",
        enumerable: false,
        configurable: true
      }));
      return controller.signal;
    }
    function createHangingInputAbortSignal(workUnitStore) {
      switch (workUnitStore.type) {
        case "prerender":
        case "prerender-runtime":
          const controller = new AbortController();
          if (workUnitStore.cacheSignal) {
            workUnitStore.cacheSignal.inputReady().then(() => {
              controller.abort();
            });
          } else {
            const runtimeStagePromise = (0, _workunitasyncstorageexternal.getRuntimeStagePromise)(workUnitStore);
            if (runtimeStagePromise) {
              runtimeStagePromise.then(() => (0, _scheduler.scheduleOnNextTick)(() => controller.abort()));
            } else {
              (0, _scheduler.scheduleOnNextTick)(() => controller.abort());
            }
          }
          return controller.signal;
        case "prerender-client":
        case "prerender-ppr":
        case "prerender-legacy":
        case "request":
        case "cache":
        case "private-cache":
        case "unstable-cache":
          return void 0;
      }
    }
    function annotateDynamicAccess(expression, prerenderStore) {
      const dynamicTracking = prerenderStore.dynamicTracking;
      if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
          stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : void 0,
          expression
        });
      }
    }
    function useDynamicRouteParams(expression) {
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workStore && workUnitStore) {
        switch (workUnitStore.type) {
          case "prerender-client":
          case "prerender": {
            const fallbackParams = workUnitStore.fallbackRouteParams;
            if (fallbackParams && fallbackParams.size > 0) {
              _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
            }
            break;
          }
          case "prerender-ppr": {
            const fallbackParams = workUnitStore.fallbackRouteParams;
            if (fallbackParams && fallbackParams.size > 0) {
              return postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
            }
            break;
          }
          case "prerender-runtime":
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called during a runtime prerender. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
              value: "E771",
              enumerable: false,
              configurable: true
            });
          case "cache":
          case "private-cache":
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
              value: "E745",
              enumerable: false,
              configurable: true
            });
        }
      }
    }
    var hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
    var bodyAndImplicitTags = "body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6";
    var hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex = new RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:${bodyAndImplicitTags}) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${_boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`);
    var hasMetadataRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
    var hasViewportRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
    var hasOutletRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
    function trackAllowedDynamicAccess(workStore, componentStack, dynamicValidation, clientDynamic) {
      if (hasOutletRegex.test(componentStack)) {
        return;
      } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
      } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
      } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
      } else if (hasSuspenseRegex.test(componentStack)) {
        dynamicValidation.hasAllowedDynamic = true;
        return;
      } else if (clientDynamic.syncDynamicErrorWithStack) {
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
      } else {
        const message = `Route "${workStore.route}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
      }
    }
    function createErrorWithComponentOrOwnerStack(message, componentStack) {
      const ownerStack = process.env.NODE_ENV !== "production" && _react.default.captureOwnerStack ? _react.default.captureOwnerStack() : null;
      const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.stack = error.name + ": " + message + (ownerStack ?? componentStack);
      return error;
    }
    var PreludeState = /* @__PURE__ */ (function(PreludeState2) {
      PreludeState2[PreludeState2["Full"] = 0] = "Full";
      PreludeState2[PreludeState2["Empty"] = 1] = "Empty";
      PreludeState2[PreludeState2["Errored"] = 2] = "Errored";
      return PreludeState2;
    })({});
    function logDisallowedDynamicError(workStore, error) {
      console.error(error);
      if (!workStore.dev) {
        if (workStore.hasReadableErrorStacks) {
          console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.`);
        } else {
          console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
        }
      }
    }
    function throwIfDisallowedDynamic(workStore, prelude, dynamicValidation, serverDynamic) {
      if (prelude !== 0) {
        if (dynamicValidation.hasSuspenseAboveBody) {
          return;
        }
        if (serverDynamic.syncDynamicErrorWithStack) {
          logDisallowedDynamicError(workStore, serverDynamic.syncDynamicErrorWithStack);
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
          for (let i = 0; i < dynamicErrors.length; i++) {
            logDisallowedDynamicError(workStore, dynamicErrors[i]);
          }
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (dynamicValidation.hasDynamicViewport) {
          console.error(`Route "${workStore.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`);
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (prelude === 1) {
          console.error(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
      } else {
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
          console.error(`Route "${workStore.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`);
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
      }
    }
    function delayUntilRuntimeStage(prerenderStore, result) {
      if (prerenderStore.runtimeStagePromise) {
        return prerenderStore.runtimeStagePromise.then(() => result);
      }
      return result;
    }
  }
});

// ../../node_modules/next/dist/client/components/unstable-rethrow.server.js
var require_unstable_rethrow_server = __commonJS({
  "../../node_modules/next/dist/client/components/unstable-rethrow.server.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "unstable_rethrow", {
      enumerable: true,
      get: function() {
        return unstable_rethrow;
      }
    });
    var _dynamicrenderingutils = require_dynamic_rendering_utils();
    var _ispostpone = require_is_postpone();
    var _bailouttocsr = require_bailout_to_csr();
    var _isnextroutererror = require_is_next_router_error();
    var _dynamicrendering = require_dynamic_rendering();
    var _hooksservercontext = require_hooks_server_context();
    function unstable_rethrow(error) {
      if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error)) {
        throw error;
      }
      if (error instanceof Error && "cause" in error) {
        unstable_rethrow(error.cause);
      }
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/client/components/unstable-rethrow.browser.js
var require_unstable_rethrow_browser = __commonJS({
  "../../node_modules/next/dist/client/components/unstable-rethrow.browser.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "unstable_rethrow", {
      enumerable: true,
      get: function() {
        return unstable_rethrow;
      }
    });
    var _bailouttocsr = require_bailout_to_csr();
    var _isnextroutererror = require_is_next_router_error();
    function unstable_rethrow(error) {
      if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error)) {
        throw error;
      }
      if (error instanceof Error && "cause" in error) {
        unstable_rethrow(error.cause);
      }
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/client/components/unstable-rethrow.js
var require_unstable_rethrow = __commonJS({
  "../../node_modules/next/dist/client/components/unstable-rethrow.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "unstable_rethrow", {
      enumerable: true,
      get: function() {
        return unstable_rethrow;
      }
    });
    var unstable_rethrow = typeof window === "undefined" ? require_unstable_rethrow_server().unstable_rethrow : require_unstable_rethrow_browser().unstable_rethrow;
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/client/components/navigation.react-server.js
var require_navigation_react_server = __commonJS({
  "../../node_modules/next/dist/client/components/navigation.react-server.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
      },
      RedirectType: function() {
        return _redirecterror.RedirectType;
      },
      forbidden: function() {
        return _forbidden.forbidden;
      },
      notFound: function() {
        return _notfound.notFound;
      },
      permanentRedirect: function() {
        return _redirect.permanentRedirect;
      },
      redirect: function() {
        return _redirect.redirect;
      },
      unauthorized: function() {
        return _unauthorized.unauthorized;
      },
      unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
      },
      unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
      }
    });
    var _redirect = require_redirect();
    var _redirecterror = require_redirect_error();
    var _notfound = require_not_found();
    var _forbidden = require_forbidden();
    var _unauthorized = require_unauthorized();
    var _unstablerethrow = require_unstable_rethrow();
    var ReadonlyURLSearchParamsError = class extends Error {
      constructor() {
        super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams");
      }
    };
    var ReadonlyURLSearchParams = class extends URLSearchParams {
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      append() {
        throw new ReadonlyURLSearchParamsError();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      delete() {
        throw new ReadonlyURLSearchParamsError();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      set() {
        throw new ReadonlyURLSearchParamsError();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      sort() {
        throw new ReadonlyURLSearchParamsError();
      }
    };
    function unstable_isUnrecognizedActionError() {
      throw Object.defineProperty(new Error("`unstable_isUnrecognizedActionError` can only be used on the client."), "__NEXT_ERROR_CODE", {
        value: "E776",
        enumerable: false,
        configurable: true
      });
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js
var require_server_inserted_html_shared_runtime = __commonJS({
  "../../node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js"(exports$1) {
    "use client";
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      ServerInsertedHTMLContext: function() {
        return ServerInsertedHTMLContext;
      },
      useServerInsertedHTML: function() {
        return useServerInsertedHTML;
      }
    });
    var _interop_require_wildcard = require_interop_require_wildcard();
    var _react = /* @__PURE__ */ _interop_require_wildcard._(__require("react"));
    var ServerInsertedHTMLContext = /* @__PURE__ */ _react.default.createContext(null);
    function useServerInsertedHTML(callback) {
      const addInsertedServerHTMLCallback = (0, _react.useContext)(ServerInsertedHTMLContext);
      if (addInsertedServerHTMLCallback) {
        addInsertedServerHTMLCallback(callback);
      }
    }
  }
});

// ../../node_modules/next/dist/client/components/unrecognized-action-error.js
var require_unrecognized_action_error = __commonJS({
  "../../node_modules/next/dist/client/components/unrecognized-action-error.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      UnrecognizedActionError: function() {
        return UnrecognizedActionError;
      },
      unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
      }
    });
    var UnrecognizedActionError = class extends Error {
      constructor(...args) {
        super(...args);
        this.name = "UnrecognizedActionError";
      }
    };
    function unstable_isUnrecognizedActionError(error) {
      return !!(error && typeof error === "object" && error instanceof UnrecognizedActionError);
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/client/components/bailout-to-client-rendering.js
var require_bailout_to_client_rendering = __commonJS({
  "../../node_modules/next/dist/client/components/bailout-to-client-rendering.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "bailoutToClientRendering", {
      enumerable: true,
      get: function() {
        return bailoutToClientRendering;
      }
    });
    var _bailouttocsr = require_bailout_to_csr();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    function bailoutToClientRendering(reason) {
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      if (workStore == null ? void 0 : workStore.forceStatic) return;
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workUnitStore) {
        switch (workUnitStore.type) {
          case "prerender":
          case "prerender-runtime":
          case "prerender-client":
          case "prerender-ppr":
          case "prerender-legacy":
            throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
              value: "E394",
              enumerable: false,
              configurable: true
            });
        }
      }
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/dist/client/components/navigation.js
var require_navigation = __commonJS({
  "../../node_modules/next/dist/client/components/navigation.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      ReadonlyURLSearchParams: function() {
        return _navigationreactserver.ReadonlyURLSearchParams;
      },
      RedirectType: function() {
        return _navigationreactserver.RedirectType;
      },
      ServerInsertedHTMLContext: function() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
      },
      forbidden: function() {
        return _navigationreactserver.forbidden;
      },
      notFound: function() {
        return _navigationreactserver.notFound;
      },
      permanentRedirect: function() {
        return _navigationreactserver.permanentRedirect;
      },
      redirect: function() {
        return _navigationreactserver.redirect;
      },
      unauthorized: function() {
        return _navigationreactserver.unauthorized;
      },
      unstable_isUnrecognizedActionError: function() {
        return _unrecognizedactionerror.unstable_isUnrecognizedActionError;
      },
      unstable_rethrow: function() {
        return _navigationreactserver.unstable_rethrow;
      },
      useParams: function() {
        return useParams;
      },
      usePathname: function() {
        return usePathname2;
      },
      useRouter: function() {
        return useRouter;
      },
      useSearchParams: function() {
        return useSearchParams;
      },
      useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
      },
      useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
      },
      useServerInsertedHTML: function() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
      }
    });
    var _react = __require("react");
    var _approutercontextsharedruntime = require_app_router_context_shared_runtime();
    var _hooksclientcontextsharedruntime = require_hooks_client_context_shared_runtime();
    var _getsegmentvalue = require_get_segment_value();
    var _segment = require_segment();
    var _navigationreactserver = require_navigation_react_server();
    var _serverinsertedhtmlsharedruntime = require_server_inserted_html_shared_runtime();
    var _unrecognizedactionerror = require_unrecognized_action_error();
    var useDynamicRouteParams = typeof window === "undefined" ? require_dynamic_rendering().useDynamicRouteParams : void 0;
    function useSearchParams() {
      const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
      const readonlySearchParams = (0, _react.useMemo)(() => {
        if (!searchParams) {
          return null;
        }
        return new _navigationreactserver.ReadonlyURLSearchParams(searchParams);
      }, [
        searchParams
      ]);
      if (typeof window === "undefined") {
        const { bailoutToClientRendering } = require_bailout_to_client_rendering();
        bailoutToClientRendering("useSearchParams()");
      }
      return readonlySearchParams;
    }
    function usePathname2() {
      useDynamicRouteParams == null ? void 0 : useDynamicRouteParams("usePathname()");
      return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
    }
    function useRouter() {
      const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
      if (router === null) {
        throw Object.defineProperty(new Error("invariant expected app router to be mounted"), "__NEXT_ERROR_CODE", {
          value: "E238",
          enumerable: false,
          configurable: true
        });
      }
      return router;
    }
    function useParams() {
      useDynamicRouteParams == null ? void 0 : useDynamicRouteParams("useParams()");
      return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
    }
    function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
      if (first === void 0) first = true;
      if (segmentPath === void 0) segmentPath = [];
      let node;
      if (first) {
        node = tree[1][parallelRouteKey];
      } else {
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
      }
      if (!node) return segmentPath;
      const segment = node[0];
      let segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
      if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) {
        return segmentPath;
      }
      segmentPath.push(segmentValue);
      return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
    }
    function useSelectedLayoutSegments(parallelRouteKey) {
      if (parallelRouteKey === void 0) parallelRouteKey = "children";
      useDynamicRouteParams == null ? void 0 : useDynamicRouteParams("useSelectedLayoutSegments()");
      const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
      if (!context) return null;
      return getSelectedLayoutSegmentPath(context.parentTree, parallelRouteKey);
    }
    function useSelectedLayoutSegment(parallelRouteKey) {
      if (parallelRouteKey === void 0) parallelRouteKey = "children";
      useDynamicRouteParams == null ? void 0 : useDynamicRouteParams("useSelectedLayoutSegment()");
      const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
      if (!selectedLayoutSegments || selectedLayoutSegments.length === 0) {
        return null;
      }
      const selectedLayoutSegment = parallelRouteKey === "children" ? selectedLayoutSegments[0] : selectedLayoutSegments[selectedLayoutSegments.length - 1];
      return selectedLayoutSegment === _segment.DEFAULT_SEGMENT_KEY ? null : selectedLayoutSegment;
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// ../../node_modules/next/navigation.js
var require_navigation2 = __commonJS({
  "../../node_modules/next/navigation.js"(exports$1, module) {
    module.exports = require_navigation();
  }
});
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var ThemeContext = React26.createContext(null);
var STORAGE_KEY = "mintx-theme";
function getInitialTheme() {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
var ThemeProvider = ({
  children,
  defaultTheme
}) => {
  const [theme, setThemeState] = React26.useState(defaultTheme ?? "dark");
  React26.useEffect(() => {
    if (defaultTheme) {
      setThemeState(defaultTheme);
    }
  }, [defaultTheme]);
  React26.useEffect(() => {
    if (!defaultTheme) {
      setThemeState(getInitialTheme());
    }
  }, [defaultTheme]);
  React26.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);
  const setTheme = React26.useCallback((t) => setThemeState(t), []);
  const toggleTheme = React26.useCallback(
    () => setThemeState((prev) => prev === "dark" ? "light" : "dark"),
    []
  );
  return /* @__PURE__ */ jsxRuntime.jsx(ThemeContext.Provider, { value: { theme, toggleTheme, setTheme }, children });
};
function useTheme() {
  const ctx = React26.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
function usePriceDirection(value) {
  return React26.useMemo(() => {
    if (value > 0) return "up";
    if (value < 0) return "down";
    return "flat";
  }, [value]);
}
function useCountUp({
  start = 0,
  end,
  duration = 1200,
  decimals = 0
}) {
  const [value, setValue] = React26.useState(start);
  const rafRef = React26.useRef(0);
  const startTimeRef = React26.useRef(0);
  React26.useEffect(() => {
    const startVal = start;
    const diff = end - startVal;
    const tick = (now) => {
      if (!startTimeRef.current) startTimeRef.current = now;
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = +(startVal + diff * eased).toFixed(decimals);
      setValue(current);
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    startTimeRef.current = 0;
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [start, end, duration, decimals]);
  return value;
}
function useMediaQuery(query) {
  const [matches, setMatches] = React26.useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });
  React26.useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);
  return matches;
}
function useIsMobile() {
  return useMediaQuery("(max-width: 767px)");
}
function useDisclosure(initial = false) {
  const [isOpen, setIsOpen] = React26.useState(initial);
  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((v) => !v)
  };
}
function useLocalStorage(key, defaultValue) {
  const [value, setValueState] = React26.useState(() => {
    if (typeof window === "undefined") return defaultValue;
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch {
      return defaultValue;
    }
  });
  const setValue = (newValue) => {
    setValueState((prev) => {
      const next = typeof newValue === "function" ? newValue(prev) : newValue;
      localStorage.setItem(key, JSON.stringify(next));
      return next;
    });
  };
  return [value, setValue];
}
var buttonVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center gap-sp-2 font-body font-medium tracking-tight cursor-pointer border border-transparent relative overflow-hidden select-none whitespace-nowrap transition-all duration-120 ease-out focus-visible:outline-2 focus-visible:outline-mint-400 focus-visible:outline-offset-2 active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-mint-400 text-[#001A13] border-mint-400 shadow-[0_4px_16px_rgba(0,179,138,0.25)] hover:bg-mint-300 hover:border-mint-300 hover:-translate-y-[1px] hover:shadow-[0_6px_24px_rgba(0,179,138,0.38)]",
        secondary: "bg-surface text-neutral-900 border-neutral-200 shadow-sm hover:border-mint-400 hover:text-mint-600 hover:bg-mint-50",
        ghost: "bg-transparent text-neutral-600 border-transparent hover:bg-neutral-100 hover:text-neutral-900",
        danger: "bg-red-500/10 text-red-600 border-red-500/20 hover:bg-red-600 hover:text-white hover:border-red-600",
        "outline-brand": "bg-transparent text-mint-600 border-mint-400 hover:bg-mint-50",
        dark: "bg-neutral-800 text-mint-300 border-mint-300/20 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:bg-neutral-700 hover:border-mint-400"
      },
      size: {
        xs: "text-xs py-1 px-2.5 rounded-sm",
        sm: "text-sm py-1.5 px-3.5 rounded-md",
        md: "text-base py-[9px] px-5 rounded-md",
        lg: "text-lg py-3 px-[26px] rounded-lg",
        xl: "text-xl py-3.5 px-8 rounded-lg font-semibold"
      },
      fullWidth: {
        true: "w-full"
      },
      loading: {
        true: "cursor-wait"
      },
      iconOnly: {
        true: "p-0 aspect-square"
      }
    },
    compoundVariants: [
      { size: "xs", iconOnly: true, className: "w-7 h-7" },
      { size: "sm", iconOnly: true, className: "w-8 h-8" },
      { size: "md", iconOnly: true, className: "w-[38px] h-[38px]" },
      { size: "lg", iconOnly: true, className: "w-[46px] h-[46px]" },
      { size: "xl", iconOnly: true, className: "w-[52px] h-[52px]" }
    ],
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
var Button = React26.forwardRef(
  ({
    variant,
    size,
    loading = false,
    iconOnly = false,
    leftIcon,
    rightIcon,
    fullWidth,
    disabled,
    className,
    children,
    ...rest
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        ref,
        className: cn(buttonVariants({ variant, size, fullWidth, loading, iconOnly }), className),
        disabled: disabled || loading,
        "aria-busy": loading,
        ...rest,
        children: [
          loading && /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: "absolute w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs("span", { className: cn("flex items-center gap-sp-2", loading && "opacity-0"), children: [
            !loading && leftIcon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "inline-flex items-center shrink-0", children: leftIcon }),
            !iconOnly && /* @__PURE__ */ jsxRuntime.jsx("span", { children }),
            iconOnly && !loading && children,
            !loading && rightIcon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "inline-flex items-center shrink-0", children: rightIcon })
          ] })
        ]
      }
    );
  }
);
Button.displayName = "Button";
var badgeVariants = classVarianceAuthority.cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground border-border",
        success: "border-transparent bg-green-500/10 text-green-500",
        warning: "border-transparent bg-yellow-500/10 text-yellow-500",
        error: "border-transparent bg-red-500/10 text-red-500",
        mint: "border-transparent bg-[#10C9A0]/10 text-[#10C9A0]",
        blue: "border-transparent bg-blue-500/10 text-blue-500",
        purple: "border-transparent bg-purple-500/10 text-purple-500",
        neutral: "border-transparent bg-neutral-500/10 text-neutral-500"
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
function Badge({ className, variant, size, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(badgeVariants({ variant, size }), className), ...props });
}
var cardVariants = classVarianceAuthority.cva(
  "rounded-lg overflow-hidden transition-all duration-200 ease-smooth",
  {
    variants: {
      variant: {
        flat: "bg-surface border border-neutral-100",
        raised: "bg-surface shadow-md",
        glass: "bg-white/40 backdrop-blur-md border border-white/20 shadow-lg",
        outlined: "bg-transparent border border-neutral-200"
      },
      padding: {
        none: "p-0",
        xs: "p-2",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10"
      },
      hover: {
        true: "hover:shadow-lg hover:-translate-y-0.5"
      },
      interactive: {
        true: "cursor-pointer active:scale-[0.98] active:shadow-sm"
      }
    },
    defaultVariants: {
      variant: "flat",
      padding: "md"
    }
  }
);
var Card = ({
  variant = "flat",
  hover = false,
  interactive = false,
  padding = "md",
  onClick,
  className,
  style,
  children
}) => {
  const isClickable = !!onClick || interactive;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn(cardVariants({ variant, padding, hover, interactive: isClickable }), className),
      style,
      onClick,
      role: isClickable ? "button" : void 0,
      tabIndex: isClickable ? 0 : void 0,
      onKeyDown: isClickable ? (e) => {
        if (e.key === "Enter" || e.key === " ") onClick?.();
      } : void 0,
      children
    }
  );
};
Card.displayName = "Card";
var inputVariants = classVarianceAuthority.cva(
  "w-full font-body text-neutral-900 bg-surface border border-neutral-200 rounded-md outline-none transition-all duration-120 placeholder:text-neutral-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-neutral-50 hover:not-disabled:not-error:border-neutral-400 focus:not-error:border-mint-400 focus:not-error:ring-4 focus:not-error:ring-mint-400/15",
  {
    variants: {
      size: {
        sm: "text-sm py-1.5 px-3 rounded-sm",
        md: "text-base py-[9px] px-3.5 rounded-md",
        lg: "text-lg py-3 px-4 rounded-lg"
      },
      error: {
        true: "border-red-500! focus:ring-4 focus:ring-red-500/15"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var Input = React26.forwardRef(
  ({
    label,
    hint,
    error,
    size = "md",
    leftIcon,
    rightIcon,
    fullWidth = true,
    className,
    id,
    ...rest
  }, ref) => {
    const uid = React26.useId();
    const inputId = id ?? uid;
    const hasError = !!error;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex flex-col gap-sp-1", fullWidth && "w-full"), children: [
      label && /* @__PURE__ */ jsxRuntime.jsx("label", { htmlFor: inputId, className: "text-sm font-medium text-neutral-600", children: label }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative", children: [
        leftIcon && /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            className: "absolute top-1/2 -translate-y-1/2 left-3 text-neutral-400 flex items-center justify-center w-4 h-4 pointer-events-none",
            "aria-hidden": "true",
            children: leftIcon
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "input",
          {
            ref,
            id: inputId,
            className: cn(
              inputVariants({ size, error: hasError }),
              leftIcon && "pl-[38px]",
              rightIcon && "pr-[38px]",
              className
            ),
            "aria-describedby": hint ? `${inputId}-hint` : error ? `${inputId}-error` : void 0,
            "aria-invalid": hasError,
            ...rest
          }
        ),
        rightIcon && /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            className: "absolute top-1/2 -translate-y-1/2 right-3 text-neutral-400 flex items-center justify-center w-4 h-4 pointer-events-none",
            "aria-hidden": "true",
            children: rightIcon
          }
        )
      ] }),
      hint && !error && /* @__PURE__ */ jsxRuntime.jsx("span", { id: `${inputId}-hint`, className: "text-[11px] text-neutral-400", children: hint }),
      error && /* @__PURE__ */ jsxRuntime.jsx("span", { id: `${inputId}-error`, className: "text-[11px] text-red-500", role: "alert", children: error })
    ] });
  }
);
Input.displayName = "Input";
var toggleVariants = classVarianceAuthority.cva(
  "inline-flex items-center gap-sp-2 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var trackVariants = classVarianceAuthority.cva(
  "relative rounded-full shrink-0 transition-colors duration-200 peer-checked:bg-mint-400 bg-neutral-200",
  {
    variants: {
      size: {
        sm: "w-8 h-[18px]",
        md: "w-10 h-[22px]"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var thumbVariants = classVarianceAuthority.cva(
  "absolute bg-white rounded-full shadow-sm transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] top-[3px] left-[3px]",
  {
    variants: {
      size: {
        sm: "w-3 h-3 peer-checked:translate-x-[14px]",
        md: "w-4 h-4 peer-checked:translate-x-[18px]"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var Toggle = ({
  checked,
  defaultChecked,
  disabled = false,
  size = "md",
  label,
  onChange,
  className,
  style
}) => {
  const uid = React26.useId();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "label",
    {
      htmlFor: uid,
      className: cn(toggleVariants({ size }), className),
      style,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "input",
          {
            id: uid,
            type: "checkbox",
            className: "sr-only peer",
            checked,
            defaultChecked,
            disabled,
            onChange: (e) => onChange?.(e.target.checked),
            role: "switch",
            "aria-checked": checked
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: trackVariants({ size }), "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(thumbVariants({ size }), "peer-checked:translate-x-[18px]!") }) }),
        label && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-medium text-neutral-600", children: label })
      ]
    }
  );
};
Toggle.displayName = "Toggle";
var Stack = ({
  direction = "column",
  align = "stretch",
  justify = "start",
  gap = 4,
  wrap = false,
  className,
  children,
  ...props
}) => {
  const justifyMap = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly"
  };
  const alignMap = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline"
  };
  const directionMap = {
    row: "flex-row",
    column: "flex-col",
    "row-reverse": "flex-row-reverse",
    "column-reverse": "flex-col-reverse"
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn(
        "flex",
        directionMap[direction],
        alignMap[align],
        justifyMap[justify],
        wrap && "flex-wrap",
        // Using Tailwind dynamic gap is risky if not safelisted, but gap-1, 2, 4 etc are common.
        // We'll use a safer approach with a style object if it's a number
        className
      ),
      style: {
        gap: typeof gap === "number" ? `${gap * 0.25}rem` : gap,
        ...props.style
      },
      ...props,
      children
    }
  );
};
Stack.displayName = "Stack";
var AppBar = ({
  title,
  leftAction,
  rightActions,
  sticky = true,
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn(
        "h-14 flex items-center px-4 bg-background border-b border-border",
        sticky && "sticky top-0 z-30",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsxs(Stack, { direction: "row", align: "center", justify: "between", className: "w-full", children: [
        /* @__PURE__ */ jsxRuntime.jsxs(Stack, { direction: "row", align: "center", gap: 3, children: [
          leftAction && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center", children: leftAction }),
          title && /* @__PURE__ */ jsxRuntime.jsx("h1", { className: "text-lg font-bold truncate", children: title })
        ] }),
        rightActions && /* @__PURE__ */ jsxRuntime.jsx(Stack, { direction: "row", align: "center", gap: 2, children: rightActions })
      ] })
    }
  );
};
AppBar.displayName = "AppBar";
var BottomNavigation = ({
  items,
  activeId,
  onSelect,
  className
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "nav",
    {
      className: cn(
        "fixed bottom-0 left-0 right-0 z-40 h-16 bg-background/80 backdrop-blur-lg border-t border-border flex items-center justify-around px-4 pb-safe",
        className
      ),
      children: items.map((item) => {
        const isActive = item.id === activeId;
        return /* @__PURE__ */ jsxRuntime.jsxs(
          "button",
          {
            onClick: () => onSelect?.(item.id),
            className: cn(
              "flex flex-col items-center justify-center gap-1 transition-colors",
              isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
            ),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("transition-transform duration-200", isActive && "scale-110"), children: isActive && item.activeIcon ? item.activeIcon : item.icon }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider", children: item.label })
            ]
          },
          item.id
        );
      })
    }
  );
};
BottomNavigation.displayName = "BottomNavigation";
var Link = ({
  variant = "default",
  underline = "hover",
  className,
  children,
  ...props
}) => {
  const variantClasses2 = {
    default: "text-primary hover:opacity-80",
    muted: "text-neutral-400 hover:text-primary",
    brand: "text-mint-500 hover:text-mint-400"
  };
  const underlineClasses = {
    none: "no-underline",
    hover: "no-underline hover:underline",
    always: "underline"
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    {
      className: cn(
        "transition-all duration-150 cursor-pointer font-body inline-flex items-center gap-1.5",
        variantClasses2[variant],
        underlineClasses[underline],
        className
      ),
      ...props,
      children
    }
  );
};
Link.displayName = "Link";
var Breadcrumbs = ({
  items,
  separator = /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.ChevronRight, { size: 13, className: "text-neutral-600" }),
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "nav",
    {
      "aria-label": "Breadcrumb",
      className: cn("flex items-center", className),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("ol", { className: "flex flex-wrap items-center gap-1.5 list-none p-0 m-0", children: items.map((item, index) => {
        const isLast = index === items.length - 1;
        return /* @__PURE__ */ jsxRuntime.jsxs(React26__namespace.default.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx("li", { className: "flex items-center gap-1", children: item.href && !isLast ? /* @__PURE__ */ jsxRuntime.jsxs(
            Link,
            {
              href: item.href,
              variant: "muted",
              className: "flex items-center gap-1 text-sm font-body hover:text-primary transition-colors",
              children: [
                item.icon,
                item.label
              ]
            }
          ) : /* @__PURE__ */ jsxRuntime.jsxs(
            "span",
            {
              className: cn(
                "flex items-center gap-1 text-sm font-body",
                isLast ? "font-semibold text-primary" : "text-neutral-400"
              ),
              children: [
                item.icon,
                item.label
              ]
            }
          ) }),
          !isLast && /* @__PURE__ */ jsxRuntime.jsx("li", { "aria-hidden": "true", className: "flex items-center text-neutral-600", children: separator })
        ] }, item.label);
      }) })
    }
  );
};
Breadcrumbs.displayName = "Breadcrumbs";
var Drawer = ({
  open,
  onOpenChange,
  title,
  description,
  children,
  side = "right",
  className
}) => {
  const sideClasses = {
    right: "inset-y-0 right-0 h-full w-3/4 sm:max-w-sm border-l animate-in slide-in-from-right",
    left: "inset-y-0 left-0 h-full w-3/4 sm:max-w-sm border-r animate-in slide-in-from-left",
    top: "inset-x-0 top-0 h-auto w-full border-b animate-in slide-in-from-top",
    bottom: "inset-x-0 bottom-0 h-auto w-full border-t animate-in slide-in-from-bottom"
  };
  return /* @__PURE__ */ jsxRuntime.jsx(DialogPrimitive2__namespace.Root, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntime.jsxs(DialogPrimitive2__namespace.Portal, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(DialogPrimitive2__namespace.Overlay, { className: "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-in fade-in" }),
    /* @__PURE__ */ jsxRuntime.jsx(
      DialogPrimitive2__namespace.Content,
      {
        className: cn(
          "fixed z-50 bg-background p-6 shadow-xl outline-none duration-300",
          sideClasses[side],
          className
        ),
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col h-full", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-1", children: [
              title && /* @__PURE__ */ jsxRuntime.jsx(DialogPrimitive2__namespace.Title, { className: "text-lg font-bold leading-none tracking-tight", children: title }),
              description && /* @__PURE__ */ jsxRuntime.jsx(DialogPrimitive2__namespace.Description, { className: "text-sm text-muted-foreground", children: description })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs(DialogPrimitive2__namespace.Close, { className: "rounded-md opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none", children: [
              /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.X, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1 overflow-y-auto min-h-0", children })
        ] })
      }
    )
  ] }) });
};
Drawer.displayName = "Drawer";
var Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className
}) => {
  const getPages = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "ellipsis", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, "ellipsis", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "ellipsis", currentPage - 1, currentPage, currentPage + 1, "ellipsis", totalPages);
      }
    }
    return pages;
  };
  const btnBaseClass = "flex items-center justify-center w-9 h-9 rounded-lg border-none cursor-pointer font-body text-sm font-semibold transition-all duration-150 focus-visible:outline-none";
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      className: cn("flex items-center justify-center gap-1", className),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            className: cn(
              btnBaseClass,
              "bg-overlay text-neutral-400 hover:text-primary hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed"
            ),
            onClick: () => currentPage > 1 && onPageChange(currentPage - 1),
            disabled: currentPage === 1,
            "aria-label": "Previous",
            children: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.ChevronLeft, { size: 16 })
          }
        ),
        getPages().map((page, index) => /* @__PURE__ */ jsxRuntime.jsx(React26__namespace.default.Fragment, { children: page === "ellipsis" ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(btnBaseClass, "bg-transparent cursor-default text-neutral-600"), children: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.MoreHorizontal, { size: 16 }) }) : /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            className: cn(
              btnBaseClass,
              currentPage === page ? "bg-mint-500 text-white shadow-brand hover:bg-mint-600" : "bg-overlay text-neutral-400 hover:bg-neutral-800 hover:text-primary"
            ),
            onClick: () => onPageChange(page),
            "aria-label": `Page ${page}`,
            "aria-current": currentPage === page ? "page" : void 0,
            children: page
          }
        ) }, index)),
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            className: cn(
              btnBaseClass,
              "bg-overlay text-neutral-400 hover:text-primary hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed"
            ),
            onClick: () => currentPage < totalPages && onPageChange(currentPage + 1),
            disabled: currentPage === totalPages,
            "aria-label": "Next",
            children: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.ChevronRight, { size: 16 })
          }
        )
      ]
    }
  );
};
Pagination.displayName = "Pagination";
var Menu = DropdownMenuPrimitive__namespace.Root;
var MenuTrigger = DropdownMenuPrimitive__namespace.Trigger;
var MenuGroup = DropdownMenuPrimitive__namespace.Group;
var MenuPortal = DropdownMenuPrimitive__namespace.Portal;
var MenuSub = DropdownMenuPrimitive__namespace.Sub;
var MenuContent = React26__namespace.default.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[12rem] overflow-hidden rounded-xl border bg-background/80 backdrop-blur-md p-1.5 shadow-xl animate-in fade-in zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
MenuContent.displayName = DropdownMenuPrimitive__namespace.Content.displayName;
var MenuItem = React26__namespace.default.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-lg px-2.5 py-2 text-sm outline-none transition-colors focus:bg-muted focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
MenuItem.displayName = DropdownMenuPrimitive__namespace.Item.displayName;
var MenuLabel = React26__namespace.default.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Label,
  {
    ref,
    className: cn("px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider opacity-40", inset && "pl-8", className),
    ...props
  }
));
MenuLabel.displayName = DropdownMenuPrimitive__namespace.Label.displayName;
var MenuSeparator = React26__namespace.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Separator,
  {
    ref,
    className: cn("-mx-1.5 my-1.5 h-px bg-border", className),
    ...props
  }
));
MenuSeparator.displayName = DropdownMenuPrimitive__namespace.Separator.displayName;
var Popover = PopoverPrimitive__namespace.Root;
var PopoverTrigger = PopoverPrimitive__namespace.Trigger;
var PopoverContent = React26__namespace.default.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  PopoverPrimitive__namespace.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-xl border bg-background/80 backdrop-blur-md p-4 shadow-xl outline-none animate-in fade-in zoom-in-95 data-[state=open]:data-[side=bottom]:slide-in-from-top-2 data-[state=open]:data-[side=left]:slide-in-from-right-2 data-[state=open]:data-[side=right]:slide-in-from-left-2 data-[state=open]:data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive__namespace.Content.displayName;
var IconButton = React26__namespace.default.forwardRef(
  ({ icon, className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Button,
      {
        ref,
        iconOnly: true,
        className: cn("rounded-xl", className),
        ...props,
        children: icon
      }
    );
  }
);
IconButton.displayName = "IconButton";
var CheckBox = React26__namespace.default.forwardRef(({ label, error, className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-sp-1", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn(
      "flex items-center gap-2.5",
      props.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
    ), children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        CheckboxPrimitive__namespace.Root,
        {
          ref,
          className: cn(
            "flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border transition-all duration-200 focus-visible:outline-none",
            "border-border bg-surface hover:border-mint-400",
            "data-[state=checked]:bg-mint-500 data-[state=checked]:border-mint-500",
            error && "border-red-500 text-red-500",
            className
          ),
          ...props,
          children: /* @__PURE__ */ jsxRuntime.jsx(CheckboxPrimitive__namespace.Indicator, { className: "flex items-center justify-center text-white", children: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.Check, { size: 13, strokeWidth: 3 }) })
        }
      ),
      label && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-body text-primary select-none leading-none", children: label })
    ] }),
    error && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-red-500 pl-[30px] font-medium", children: error })
  ] });
});
CheckBox.displayName = "CheckBox";
var RadioGroup = RadioGroupPrimitive__namespace.Root;
var RadioGroupItem = React26__namespace.default.forwardRef(({ label, className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn(
    "flex items-center gap-2.5",
    props.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
  ), children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      RadioGroupPrimitive__namespace.Item,
      {
        ref,
        className: cn(
          "h-5 w-5 shrink-0 rounded-full border border-border bg-surface transition-all duration-150 focus-visible:outline-none",
          "hover:border-mint-400 group-hover:border-mint-400",
          "data-[state=checked]:border-mint-500",
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(RadioGroupPrimitive__namespace.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-2.5 w-2.5 rounded-full bg-mint-500" }) })
      }
    ),
    label && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-body text-primary select-none", children: label })
  ] });
});
RadioGroupItem.displayName = "RadioGroupItem";
var Switch = React26__namespace.default.forwardRef(({ label, className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn(
    "flex items-center gap-3",
    props.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
  ), children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      SwitchPrimitive__namespace.Root,
      {
        ref,
        className: cn(
          "relative h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 focus-visible:ring-offset-2",
          "bg-neutral-800",
          "data-[state=checked]:bg-mint-500",
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(
          SwitchPrimitive__namespace.Thumb,
          {
            className: cn(
              "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-200",
              "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
            )
          }
        )
      }
    ),
    label && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-body text-primary select-none font-medium", children: label })
  ] });
});
Switch.displayName = "Switch";
var Slider = React26__namespace.default.forwardRef(({ label, error, className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex w-full flex-col gap-2.5", children: [
  label && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-semibold font-body text-neutral-400", children: label }),
  /* @__PURE__ */ jsxRuntime.jsxs(
    SliderPrimitive__namespace.Root,
    {
      ref,
      className: cn(
        "relative flex w-full touch-none select-none items-center",
        props.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(SliderPrimitive__namespace.Track, { className: "relative h-1 w-full grow overflow-hidden rounded-full bg-neutral-800", children: /* @__PURE__ */ jsxRuntime.jsx(SliderPrimitive__namespace.Range, { className: "absolute h-full bg-gradient-to-r from-mint-500 to-mint-400" }) }),
        /* @__PURE__ */ jsxRuntime.jsx(SliderPrimitive__namespace.Thumb, { className: "block h-5 w-5 rounded-full border-[2.5px] border-surface bg-mint-500 shadow-brand transition-all duration-150 focus-visible:outline-none focus-visible:scale-110 active:scale-95 disabled:pointer-events-none" })
      ]
    }
  ),
  error && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-red-500 font-medium", children: error })
] }));
Slider.displayName = "Slider";
var TextField = React26__namespace.default.forwardRef(
  ({ className, label, error, leftIcon, rightIcon, containerClassName, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex flex-col gap-1.5 w-full", containerClassName), children: [
      label && /* @__PURE__ */ jsxRuntime.jsx("label", { className: "text-sm font-semibold text-foreground/80 leading-none", children: label }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative group", children: [
        leftIcon && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors", children: leftIcon }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "input",
          {
            ref,
            className: cn(
              "flex h-11 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm shadow-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              error && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20",
              className
            ),
            ...props
          }
        ),
        rightIcon && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors", children: rightIcon })
      ] }),
      error && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs font-medium text-red-500", children: error })
    ] });
  }
);
TextField.displayName = "TextField";
var TextFieldPassword = React26__namespace.default.forwardRef(
  (props, ref) => {
    const [showPassword, setShowPassword] = React26.useState(false);
    return /* @__PURE__ */ jsxRuntime.jsx(
      TextField,
      {
        ...props,
        ref,
        type: showPassword ? "text" : "password",
        rightIcon: /* @__PURE__ */ jsxRuntime.jsx(
          IconButton,
          {
            type: "button",
            variant: "ghost",
            size: "sm",
            className: "h-8 w-8 text-muted-foreground hover:text-foreground",
            onClick: () => setShowPassword(!showPassword),
            icon: showPassword ? /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.EyeOff, { size: 16 }) : /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.Eye, { size: 16 })
          }
        )
      }
    );
  }
);
TextFieldPassword.displayName = "TextFieldPassword";
var DigitInput = ({
  length = 6,
  value = "",
  onChange,
  disabled = false,
  error = false,
  className,
  containerClassName
}) => {
  const inputsRef = React26.useRef([]);
  const handleChange = (e, index) => {
    const val = e.target.value;
    if (!/^\d*$/.test(val)) return;
    const newValue = value.split("");
    newValue[index] = val.slice(-1);
    const updatedValue = newValue.join("");
    onChange?.(updatedValue);
    if (val && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, length);
    if (!/^\d+$/.test(pasteData)) return;
    onChange?.(pasteData);
    inputsRef.current[Math.min(pasteData.length, length - 1)]?.focus();
  };
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("flex gap-2 justify-center", containerClassName), children: Array.from({ length }).map((_, i) => /* @__PURE__ */ jsxRuntime.jsx(
    "input",
    {
      ref: (el) => {
        inputsRef.current[i] = el;
      },
      type: "text",
      inputMode: "numeric",
      pattern: "\\d*",
      maxLength: 1,
      value: value[i] || "",
      onChange: (e) => handleChange(e, i),
      onKeyDown: (e) => handleKeyDown(e, i),
      onPaste: handlePaste,
      disabled,
      className: cn(
        "w-12 h-14 text-center text-xl font-bold bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
        error && "border-red-500 focus:ring-red-500/20 focus:border-red-500",
        className
      )
    },
    i
  )) });
};
DigitInput.displayName = "DigitInput";
var TextArea = React26__namespace.default.forwardRef(
  ({ className, label, error, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-1.5 w-full", children: [
      label && /* @__PURE__ */ jsxRuntime.jsx("label", { className: "text-sm font-semibold text-foreground/80 leading-none", children: label }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "textarea",
        {
          ref,
          className: cn(
            "flex min-h-[100px] w-full rounded-xl border border-border bg-background px-3 py-2 text-sm shadow-sm transition-all placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 resize-none",
            error && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20",
            className
          ),
          ...props
        }
      ),
      error && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs font-medium text-red-500", children: error })
    ] });
  }
);
TextArea.displayName = "TextArea";
var Select = SelectPrimitive__namespace.Root;
var SelectValue = SelectPrimitive__namespace.Value;
var SelectTrigger = React26__namespace.default.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  SelectPrimitive__namespace.Trigger,
  {
    ref,
    className: cn(
      "flex h-11 w-full items-center justify-between rounded-xl border border-border bg-background px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive__namespace.Trigger.displayName;
var SelectContent = React26__namespace.default.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  SelectPrimitive__namespace.Content,
  {
    ref,
    className: cn(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-xl border bg-background/80 backdrop-blur-md text-popover-foreground shadow-xl animate-in fade-in zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      SelectPrimitive__namespace.Viewport,
      {
        className: cn(
          "p-1.5",
          position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children
      }
    )
  }
) }));
SelectContent.displayName = SelectPrimitive__namespace.Content.displayName;
var SelectItem = React26__namespace.default.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  SelectPrimitive__namespace.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-lg py-2 pl-8 pr-2.5 text-sm outline-none transition-colors focus:bg-muted focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.Check, { className: "h-4 w-4 text-primary stroke-[3]" }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive__namespace.Item.displayName;
var FileUploader = ({
  onFilesSelected,
  maxFiles = 5,
  accept,
  className,
  label
}) => {
  const [selectedFiles, setSelectedFiles] = React26.useState([]);
  const [isDragging, setIsDragging] = React26.useState(false);
  const fileInputRef = React26.useRef(null);
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    addFiles(files);
  };
  const handleFileSelect = (e) => {
    if (e.target.files) {
      addFiles(Array.from(e.target.files));
    }
  };
  const addFiles = (files) => {
    const newFiles = [...selectedFiles, ...files].slice(0, maxFiles);
    setSelectedFiles(newFiles);
    onFilesSelected?.(newFiles);
  };
  const removeFile = (index) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    onFilesSelected?.(newFiles);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex flex-col gap-3 w-full", className), children: [
    label && /* @__PURE__ */ jsxRuntime.jsx("label", { className: "text-sm font-semibold text-foreground/80", children: label }),
    /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        onClick: () => fileInputRef.current?.click(),
        className: cn(
          "relative border-2 border-dashed border-border rounded-2xl p-8 flex flex-col items-center justify-center gap-3 transition-all cursor-pointer hover:border-primary/50 hover:bg-primary/5Bg-primary/5",
          isDragging && "border-primary bg-primary/10",
          selectedFiles.length >= maxFiles && "pointer-events-none opacity-50"
        ),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            {
              ref: fileInputRef,
              type: "file",
              multiple: maxFiles > 1,
              accept,
              onChange: handleFileSelect,
              className: "hidden"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary", children: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.Upload, { size: 24 }) }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-bold", children: "Click or drag to upload" }),
            /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
              "Up to ",
              maxFiles,
              " files ",
              accept ? `(${accept})` : ""
            ] })
          ] })
        ]
      }
    ),
    selectedFiles.length > 0 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "grid grid-cols-1 gap-2 mt-2", children: selectedFiles.map((file, i) => /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: "flex items-center justify-between p-3 rounded-xl bg-muted/50 border border-border animate-in slide-in-from-top-2",
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.File, { size: 18, className: "text-primary" }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium truncate max-w-[200px]", children: file.name }),
              /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-muted-foreground italic", children: [
                (file.size / 1024 / 1024).toFixed(2),
                " MB"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(
            IconButton,
            {
              variant: "ghost",
              size: "sm",
              icon: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.X, { size: 16 }),
              onClick: (e) => {
                e.stopPropagation();
                removeFile(i);
              }
            }
          )
        ]
      },
      i
    )) })
  ] });
};
FileUploader.displayName = "FileUploader";
var DatePicker = ({
  value,
  onChange,
  label,
  error,
  placeholder = "Pick a date",
  className
}) => {
  const [currentMonth, setCurrentMonth] = React26.useState(value || /* @__PURE__ */ new Date());
  const days = dateFns.eachDayOfInterval({
    start: dateFns.startOfWeek(dateFns.startOfMonth(currentMonth)),
    end: dateFns.endOfWeek(dateFns.endOfMonth(currentMonth))
  });
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex flex-col gap-1.5 w-full", className), children: [
    label && /* @__PURE__ */ jsxRuntime.jsx("label", { className: "text-sm font-semibold text-foreground/80 leading-none", children: label }),
    /* @__PURE__ */ jsxRuntime.jsxs(Popover, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          variant: "secondary",
          className: cn(
            "w-full justify-start text-left font-normal rounded-xl h-11 border-border bg-background hover:bg-muted/50",
            !value && "text-muted-foreground",
            error && "border-red-500"
          ),
          leftIcon: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.Calendar, { className: "mr-2 h-4 w-4" }),
          children: value ? dateFns.format(value, "PPP") : /* @__PURE__ */ jsxRuntime.jsx("span", { children: placeholder })
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx(PopoverContent, { className: "w-auto p-4", align: "start", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "font-bold text-sm tracking-tight", children: dateFns.format(currentMonth, "MMMM yyyy") }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-1", children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                iconOnly: true,
                onClick: () => setCurrentMonth(dateFns.subMonths(currentMonth, 1)),
                children: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.ChevronLeft, { size: 16 })
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                iconOnly: true,
                onClick: () => setCurrentMonth(dateFns.addMonths(currentMonth, 1)),
                children: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.ChevronLeft, { className: "rotate-180", size: 16 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-7 gap-1", children: [
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-[10px] font-bold text-center opacity-40 uppercase py-1", children: day }, day)),
          days.map((day) => {
            const isSelected = value && dateFns.isSameDay(day, value);
            const isCurrentMonth = dateFns.isSameMonth(day, currentMonth);
            return /* @__PURE__ */ jsxRuntime.jsx(
              "button",
              {
                onClick: () => {
                  onChange?.(day);
                },
                className: cn(
                  "h-8 w-8 text-xs rounded-lg transition-all flex items-center justify-center",
                  isSelected ? "bg-primary text-primary-foreground font-bold shadow-md" : "hover:bg-muted text-foreground",
                  !isCurrentMonth && "opacity-20 pointer-events-none"
                ),
                children: dateFns.format(day, "d")
              },
              day.toISOString()
            );
          })
        ] })
      ] }) })
    ] }),
    error && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs font-medium text-red-500", children: error })
  ] });
};
DatePicker.displayName = "DatePicker";
var Autocomplete = ({
  options,
  value,
  onChange,
  placeholder = "Select an option...",
  label,
  error,
  className
}) => {
  const [open, setOpen] = React26.useState(false);
  const [searchTerm, setSearchTerm] = React26.useState("");
  const filteredOptions = options.filter(
    (option) => option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const selectedOption = options.find((opt) => opt.value === value);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex flex-col gap-1.5 w-full", className), children: [
    label && /* @__PURE__ */ jsxRuntime.jsx("label", { className: "text-sm font-semibold text-foreground/80 leading-none", children: label }),
    /* @__PURE__ */ jsxRuntime.jsxs(Popover, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxRuntime.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          variant: "secondary",
          role: "combobox",
          "aria-expanded": open,
          className: cn(
            "w-full justify-between font-normal rounded-xl h-11 border-border bg-background hover:bg-muted/50 transition-all",
            !value && "text-muted-foreground",
            error && "border-red-500"
          ),
          rightIcon: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" }),
          children: selectedOption ? selectedOption.label : placeholder
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx(PopoverContent, { className: "w-[var(--radix-popover-trigger-width)] p-1.5", align: "start", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative flex items-center px-2 py-2 border-b border-border/50 mb-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.Search, { className: "h-4 w-4 absolute left-3 opacity-40" }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            {
              className: "w-full bg-transparent pl-8 text-sm outline-none placeholder:opacity-50",
              placeholder: "Search...",
              value: searchTerm,
              onChange: (e) => setSearchTerm(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "max-h-60 overflow-y-auto min-h-0 custom-scrollbar", children: filteredOptions.length === 0 ? /* @__PURE__ */ jsxRuntime.jsx("p", { className: "p-3 text-xs text-center text-muted-foreground italic", children: "No options found." }) : filteredOptions.map((option) => /* @__PURE__ */ jsxRuntime.jsxs(
          "button",
          {
            onClick: () => {
              onChange?.(option.value);
              setOpen(false);
            },
            className: cn(
              "flex w-full items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors text-left",
              value === option.value ? "bg-primary/10 text-primary font-bold" : "hover:bg-muted text-foreground"
            ),
            children: [
              option.label,
              value === option.value && /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.Check, { className: "h-4 w-4" })
            ]
          },
          option.value
        )) })
      ] }) })
    ] }),
    error && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs font-medium text-red-500", children: error })
  ] });
};
Autocomplete.displayName = "Autocomplete";
var Fab = React26__namespace.default.forwardRef(
  ({ icon, children, position = "none", className, ...props }, ref) => {
    const positionClasses = {
      "bottom-right": "fixed bottom-8 right-8 z-50",
      "bottom-left": "fixed bottom-8 left-8 z-50",
      "top-right": "fixed top-24 right-8 z-50",
      "top-left": "fixed top-24 left-8 z-50",
      none: "relative"
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      Button,
      {
        ref,
        variant: "primary",
        size: "lg",
        className: cn(
          "rounded-full shadow-[0_8px_32px_rgba(0,179,138,0.4)] hover:shadow-[0_12px_48px_rgba(0,179,138,0.6)] flex items-center justify-center p-0 transition-all duration-300",
          !children && "aspect-square w-14 h-14",
          children && "px-6 py-4 aspect-auto h-14",
          positionClasses[position],
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
          icon,
          children && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-bold tracking-tight", children })
        ] })
      }
    );
  }
);
Fab.displayName = "Fab";
var variantClasses = {
  default: "bg-surface text-neutral-400 border-border shadow-sm",
  primary: "bg-mint-500/10 text-mint-500 border-mint-500/25",
  secondary: "bg-white/10 text-primary border-white/5",
  outline: "bg-transparent border border-border text-primary"
};
var sizeClasses = {
  sm: "h-6 px-2 text-[10px]",
  md: "h-7 px-3 text-[11px]"
};
var Tag = ({
  label,
  onRemove,
  onClick,
  variant = "default",
  size = "md",
  className
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      onClick,
      className: cn(
        "inline-flex items-center gap-1.5 rounded-full font-bold uppercase tracking-widest transition-all duration-150 border",
        variantClasses[variant],
        sizeClasses[size],
        onClick ? "cursor-pointer hover:scale-105 active:scale-95" : "cursor-default",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: label }),
        onRemove && /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            onClick: (e) => {
              e.stopPropagation();
              onRemove();
            },
            className: "flex items-center justify-center p-0.5 rounded-full hover:bg-white/15 transition-colors cursor-pointer border-none bg-transparent",
            children: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.X, { size: size === "sm" ? 8 : 10 })
          }
        )
      ]
    }
  );
};
Tag.displayName = "Tag";
var TagGroup = ({
  tags,
  onRemoveTag,
  variant,
  size,
  label,
  className
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex flex-col gap-2", className), children: [
    label && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-neutral-400 font-body", children: label }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-wrap gap-1.5", children: tags.map((tag) => /* @__PURE__ */ jsxRuntime.jsx(
      Tag,
      {
        label: tag,
        variant,
        size,
        onRemove: onRemoveTag ? () => onRemoveTag(tag) : void 0
      },
      tag
    )) })
  ] });
};
TagGroup.displayName = "TagGroup";
var sizeClasses2 = {
  sm: "h-3.5 w-3.5",
  md: "h-5 w-5",
  lg: "h-7 w-7"
};
var Rating = ({
  value = 0,
  max = 5,
  onChange,
  readonly = false,
  size = "md",
  className,
  label
}) => {
  const [hoverValue, setHoverValue] = React26.useState(null);
  const displayValue = hoverValue !== null ? hoverValue : value;
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex flex-col gap-1.5", className), children: [
    label && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-semibold text-neutral-400 font-body", children: label }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center gap-1", children: Array.from({ length: max }).map((_, i) => {
      const starValue = i + 1;
      const isFull = displayValue >= starValue;
      const isHalf = !isFull && displayValue >= starValue - 0.5;
      return /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          type: "button",
          disabled: readonly,
          onMouseEnter: () => !readonly && setHoverValue(starValue),
          onMouseLeave: () => !readonly && setHoverValue(null),
          onClick: () => !readonly && onChange?.(starValue),
          className: cn(
            "flex items-center justify-center p-0 bg-transparent border-none transition-transform duration-150 outline-none",
            readonly ? "cursor-default" : "cursor-pointer hover:scale-110 active:scale-90"
          ),
          children: /* @__PURE__ */ jsxRuntime.jsx(
            LucideIcons.Star,
            {
              className: cn(
                sizeClasses2[size],
                "transition-all duration-150",
                isFull || isHalf ? "text-amber-500" : "text-border/20",
                isFull && "fill-amber-500"
              )
            }
          )
        },
        i
      );
    }) })
  ] });
};
Rating.displayName = "Rating";
var Avatar = React26__namespace.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AvatarPrimitive__namespace.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-surface shadow-md",
      className
    ),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive__namespace.Root.displayName;
var AvatarImage = React26__namespace.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AvatarPrimitive__namespace.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full object-cover", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive__namespace.Image.displayName;
var AvatarFallback = React26__namespace.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AvatarPrimitive__namespace.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-mint-500/15 text-mint-500 text-[0.7em] font-bold uppercase tracking-widest font-body",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive__namespace.Fallback.displayName;
var colorVariants = {
  default: "bg-surface text-neutral-400 border-border",
  primary: "bg-mint-500/10 text-mint-500 border-mint-500/30",
  secondary: "bg-white/5 text-primary border-white/10",
  success: "bg-green-500/10 text-green-500 border-green-500/25",
  warning: "bg-yellow-500/10 text-yellow-500 border-yellow-500/25",
  error: "bg-red-500/10 text-red-500 border-red-500/25"
};
var Chip = ({
  label,
  onDelete,
  icon,
  variant = "filled",
  color = "default",
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold font-body transition-all duration-150 border",
        variant === "filled" && colorVariants[color],
        variant === "outline" && "bg-transparent",
        variant === "outline" && color === "default" && "border-border text-neutral-400",
        variant === "outline" && color !== "default" && colorVariants[color].replace(/bg-[^\s]*/, "bg-transparent"),
        variant === "ghost" && "bg-transparent border-transparent",
        className
      ),
      ...props,
      children: [
        icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex-shrink-0", children: icon }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "truncate max-w-[160px] uppercase tracking-wider", children: label }),
        onDelete && /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            onClick: (e) => {
              e.stopPropagation();
              onDelete();
            },
            className: "flex items-center justify-center h-4 w-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-current border-none p-0 cursor-pointer",
            children: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.X, { size: 10 })
          }
        )
      ]
    }
  );
};
Chip.displayName = "Chip";
var Image2 = ({
  className,
  aspectRatio = "none",
  fallback,
  containerClassName,
  src,
  alt,
  ...props
}) => {
  const [error, setError] = React26__namespace.default.useState(false);
  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    none: ""
  };
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("overflow-hidden rounded-2xl bg-muted/30", aspectRatioClasses[aspectRatio], containerClassName), children: /* @__PURE__ */ jsxRuntime.jsx(
    "img",
    {
      src: error && fallback ? fallback : src,
      alt,
      onError: () => setError(true),
      className: cn(
        "h-full w-full object-cover transition-all hover:scale-105 duration-500",
        className
      ),
      loading: "lazy",
      ...props
    }
  ) });
};
Image2.displayName = "Image";
var ImageList = ({
  children,
  cols = 3,
  gap = 4,
  className
}) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6"
  }[cols] || "grid-cols-3";
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn(
        "grid",
        gridCols,
        className
      ),
      style: { gap: `${gap * 0.25}rem` },
      children
    }
  );
};
ImageList.displayName = "ImageList";
var Table = React26__namespace.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative w-full overflow-auto rounded-2xl border border-border", children: /* @__PURE__ */ jsxRuntime.jsx(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
var TableHeader = React26__namespace.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("thead", { ref, className: cn("[&_tr]:border-b bg-muted/30", className), ...props }));
TableHeader.displayName = "TableHeader";
var TableBody = React26__namespace.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
var TableFooter = React26__namespace.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&_tr:last-child]:border-0",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
var TableRow = React26__namespace.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "tr",
  {
    ref,
    className: cn(
      "border-b border-border/50 transition-colors hover:bg-muted/30 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
var TableHead = React26__namespace.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "th",
  {
    ref,
    className: cn(
      "h-12 px-4 text-left align-middle font-bold text-muted-foreground uppercase tracking-wider text-[10px] [&:has([role=checkbox])]:pr-0",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
var TableCell = React26__namespace.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium", className),
    ...props
  }
));
TableCell.displayName = "TableCell";
var TableCaption = React26__namespace.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
function DataTable({
  columns,
  data,
  searchKey,
  searchPlaceholder = "Search...",
  highlightKey,
  pageSize = 10
}) {
  const [searchValue, setSearchValue] = React26__namespace.useState("");
  const [sortConfig, setSortConfig] = React26__namespace.useState({ key: "", direction: null });
  const filteredData = React26__namespace.useMemo(() => {
    if (!searchKey || !searchValue) return data;
    return data.filter((item) => {
      const value = item[searchKey];
      return String(value).toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [data, searchKey, searchValue]);
  const sortedData = React26__namespace.useMemo(() => {
    if (!sortConfig.key || !sortConfig.direction) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortConfig]);
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
    else if (sortConfig.key === key && sortConfig.direction === "desc") direction = null;
    setSortConfig({ key, direction });
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-4 w-full", children: [
    searchKey && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center gap-4", children: searchKey && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative flex-1 max-w-sm", children: [
      /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.Search, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Input,
        {
          placeholder: searchPlaceholder,
          value: searchValue,
          onChange: (e) => setSearchValue(e.target.value),
          className: "pl-9"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "rounded-xl border border-border-subtle bg-bg-surface overflow-hidden", children: /* @__PURE__ */ jsxRuntime.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntime.jsx(TableRow, { className: "hover:bg-transparent border-b border-border-subtle", children: columns.map((column) => /* @__PURE__ */ jsxRuntime.jsx(
        TableHead,
        {
          className: cn(
            "font-semibold text-text-secondary uppercase text-[11px] tracking-wider py-3",
            column.sortable && "cursor-pointer select-none hover:text-text-primary"
          ),
          onClick: () => column.sortable && handleSort(String(column.accessorKey || column.id)),
          children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
            column.header,
            column.sortable && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-text-tertiary", children: sortConfig.key === (column.accessorKey || column.id) ? sortConfig.direction === "asc" ? /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.ChevronUp, { className: "h-3 w-3" }) : sortConfig.direction === "desc" ? /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.ChevronDown, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.ChevronsUpDown, { className: "h-3 w-3 opacity-30" }) : /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.ChevronsUpDown, { className: "h-3 w-3 opacity-30" }) })
          ] })
        },
        column.id
      )) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(TableBody, { children: sortedData.length > 0 ? sortedData.map((row, i) => /* @__PURE__ */ jsxRuntime.jsx(
        TableRow,
        {
          className: cn(
            "border-b border-border-subtle last:border-0",
            highlightKey && row[highlightKey] && "bg-brand-soft/30 hover:bg-brand-soft/40"
          ),
          children: columns.map((column) => /* @__PURE__ */ jsxRuntime.jsx(TableCell, { className: "text-[13px] py-3.5", children: column.cell ? column.cell(row) : column.accessorKey ? String(row[column.accessorKey]) : null }, column.id))
        },
        i
      )) : /* @__PURE__ */ jsxRuntime.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntime.jsx(
        TableCell,
        {
          colSpan: columns.length,
          className: "h-24 text-center text-text-tertiary",
          children: "No results found."
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between text-[12px] text-text-tertiary px-2", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        "Showing ",
        /* @__PURE__ */ jsxRuntime.jsx("b", { children: sortedData.length }),
        " of ",
        /* @__PURE__ */ jsxRuntime.jsx("b", { children: data.length }),
        " records"
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx("button", { className: "px-3 py-1 border border-border-subtle rounded-md hover:bg-bg-overlay transition-colors", children: "Previous" }),
        /* @__PURE__ */ jsxRuntime.jsx("button", { className: "px-3 py-1 border border-border-subtle rounded-md hover:bg-bg-overlay transition-colors", children: "Next" })
      ] })
    ] })
  ] });
}
var List = ({ children, className }) => {
  return /* @__PURE__ */ jsxRuntime.jsx("ul", { className: cn("flex flex-col gap-1 w-full", className), children });
};
var ListItem = ({
  children,
  icon,
  secondaryAction,
  onClick,
  className
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "li",
    {
      onClick,
      className: cn(
        "flex items-center justify-between p-3 rounded-xl transition-all",
        onClick ? "cursor-pointer hover:bg-muted/50 active:scale-[0.98]" : "",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-4 flex-1", children: [
          icon && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-primary shrink-0", children: icon }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1 text-sm font-medium tracking-tight", children })
        ] }),
        secondaryAction && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "ml-4 shrink-0", children: secondaryAction })
      ]
    }
  );
};
List.displayName = "List";
ListItem.displayName = "ListItem";
var TooltipProvider = TooltipPrimitive__namespace.Provider;
var Tooltip = TooltipPrimitive__namespace.Root;
var TooltipTrigger = TooltipPrimitive__namespace.Trigger;
var TooltipContent = React26__namespace.default.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TooltipPrimitive__namespace.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-[9999] overflow-hidden rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-wider",
      "bg-neutral-900/95 backdrop-blur-lg border border-white/5",
      "text-primary shadow-xl animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive__namespace.Content.displayName;
var progressVariants = classVarianceAuthority.cva(
  "w-full overflow-hidden rounded-full bg-overlay",
  {
    variants: {
      size: {
        xs: "h-1",
        sm: "h-2",
        md: "h-3",
        lg: "h-4"
      }
    },
    defaultVariants: {
      size: "sm"
    }
  }
);
var barVariants = classVarianceAuthority.cva(
  "h-full w-full flex-1 transition-all duration-500 ease-smooth",
  {
    variants: {
      color: {
        brand: "bg-mint-500 shadow-brand",
        success: "bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.3)]",
        danger: "bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.3)]",
        warning: "bg-yellow-500 shadow-[0_0_12px_rgba(234,179,8,0.3)]",
        info: "bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.3)]"
      }
    },
    defaultVariants: {
      color: "brand"
    }
  }
);
var Progress = React26__namespace.default.forwardRef(
  ({ className, value, max = 100, size, color = "brand", label, showValue, ...props }, ref) => {
    const pct = Math.min(100, Math.max(0, value / max * 100));
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn("flex w-full flex-col gap-2", className),
        ...props,
        children: [
          (label || showValue) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between items-center px-0.5", children: [
            label && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs font-semibold text-neutral-400 font-body", children: label }),
            showValue && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-xs font-mono text-neutral-500", children: [
              Math.round(pct),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(progressVariants({ size })), children: /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: cn(barVariants({ color })),
              style: { transform: `translateX(-${100 - pct}%)` }
            }
          ) })
        ]
      }
    );
  }
);
Progress.displayName = "Progress";
var containerVariants = classVarianceAuthority.cva(
  "flex relative",
  {
    variants: {
      variant: {
        default: "gap-[2px] bg-neutral-100 border border-neutral-200 rounded-lg p-[3px] w-fit",
        brand: "gap-[2px] bg-neutral-100 border border-neutral-200 rounded-lg p-[3px] w-fit",
        pills: "gap-sp-1 w-fit",
        underline: "gap-0 border-b border-neutral-100 w-full"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var itemVariants = classVarianceAuthority.cva(
  "inline-flex items-center gap-sp-2 font-body font-medium whitespace-nowrap transition-all duration-120 ease-out focus-visible:outline-2 focus-visible:outline-mint-400 focus-visible:outline-offset-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-transparent text-neutral-400 rounded-md hover:not-active:text-neutral-900",
        brand: "bg-transparent text-neutral-400 rounded-md hover:not-active:text-neutral-900",
        pills: "bg-transparent text-neutral-600 rounded-full border border-transparent hover:not-active:bg-neutral-100 hover:not-active:text-neutral-900",
        underline: "bg-transparent text-neutral-400 rounded-none border-b-2 border-transparent -mb-[1px] hover:not-active:text-neutral-900"
      },
      size: {
        sm: "text-xs px-3 py-1.5",
        md: "text-sm px-4 py-[7px]"
      },
      isActive: {
        true: "",
        false: ""
      },
      disabled: {
        true: "opacity-40 cursor-not-allowed pointer-events-none"
      }
    },
    compoundVariants: [
      { variant: "default", isActive: true, className: "bg-surface text-neutral-900 shadow-sm font-semibold" },
      { variant: "brand", isActive: true, className: "bg-mint-400 text-[#001A13] font-bold shadow-[0_4px_16px_rgba(0,179,138,0.25)]" },
      { variant: "pills", isActive: true, className: "bg-mint-50 text-mint-600 border-mint-400/25" },
      { variant: "underline", isActive: true, className: "text-mint-600 border-b-mint-400 font-semibold" }
    ],
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
var Tabs = ({
  items,
  activeId: controlledActiveId,
  defaultActiveId,
  variant = "default",
  size = "md",
  onChange,
  className,
  style
}) => {
  const [internalActiveId, setInternalActiveId] = React26.useState(
    defaultActiveId ?? items[0]?.id
  );
  const activeId = controlledActiveId ?? internalActiveId;
  const handleSelect = (id) => {
    setInternalActiveId(id);
    onChange?.(id);
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn(containerVariants({ variant }), className),
      role: "tablist",
      style,
      children: items.map((item) => {
        const isActive = item.id === activeId;
        return /* @__PURE__ */ jsxRuntime.jsxs(
          "button",
          {
            role: "tab",
            "aria-selected": isActive,
            "aria-disabled": item.disabled,
            className: itemVariants({ variant, size, isActive, disabled: item.disabled }),
            onClick: () => !item.disabled && handleSelect(item.id),
            tabIndex: isActive ? 0 : -1,
            children: [
              item.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "inline-flex items-center", "aria-hidden": "true", children: item.icon }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { children: item.label }),
              item.badge !== void 0 && /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn(
                "text-[10px] font-bold rounded-full px-1.5 py-0.5",
                isActive ? "bg-mint-400/15 text-mint-600" : "bg-neutral-100 text-neutral-400"
              ), children: item.badge })
            ]
          },
          item.id
        );
      })
    }
  );
};
Tabs.displayName = "Tabs";
var Separator2 = React26__namespace.default.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref,
      role: decorative ? "none" : "separator",
      "aria-orientation": decorative ? void 0 : orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator2.displayName = "Separator";
var Box = ({
  as: Component = "div",
  className,
  children,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(Component, { className: cn(className), ...props, children });
};
Box.displayName = "Box";
var Divider = ({
  orientation = "horizontal",
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      role: "separator",
      "aria-orientation": orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  );
};
Divider.displayName = "Divider";
var Accordion = AccordionPrimitive__namespace.Root;
var AccordionItem = React26__namespace.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AccordionPrimitive__namespace.Item,
  {
    ref,
    className: cn("border-b border-border/10", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React26__namespace.default.forwardRef(({ children, className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(AccordionPrimitive__namespace.Header, { className: "flex", children: /* @__PURE__ */ jsxRuntime.jsxs(
  AccordionPrimitive__namespace.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-semibold text-primary transition-all hover:text-mint-400 [&[data-state=open]>svg]:rotate-180",
      "focus-visible:outline-none focus-visible:text-mint-400",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.ChevronDown, { className: "h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive__namespace.Trigger.displayName;
var AccordionContent = React26__namespace.default.forwardRef(({ children, className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AccordionPrimitive__namespace.Content,
  {
    ref,
    className: cn(
      "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "pb-4 pt-0 text-neutral-400 leading-relaxed font-body", children })
  }
));
AccordionContent.displayName = AccordionPrimitive__namespace.Content.displayName;
var alertVariants = classVarianceAuthority.cva(
  "flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-surface text-primary border-border",
        info: "bg-info/10 text-info border-info/20",
        success: "bg-success/10 text-success border-success/20",
        warning: "bg-warning/10 text-warning border-warning/20",
        destructive: "bg-danger/10 text-danger border-danger/20",
        brand: "bg-brand text-inverse border-brand shadow-brand"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var icons = {
  default: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.Info, { size: 20 }),
  info: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.Info, { size: 20 }),
  success: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.CheckCircle2, { size: 20 }),
  warning: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.AlertCircle, { size: 20 }),
  destructive: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.XCircle, { size: 20 }),
  brand: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.Info, { size: 20 })
};
var Alert = React26__namespace.default.forwardRef(
  ({ className, variant = "default", title, description, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        role: "alert",
        className: cn(alertVariants({ variant }), className),
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex-shrink-0 mt-0.5 text-current opacity-90", children: icons[variant ?? "default"] }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 min-w-0", children: [
            title && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-bold mb-1 tracking-tight leading-none text-current", children: title }),
            description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs opacity-90 leading-relaxed font-body text-current", children: description }),
            children
          ] })
        ]
      }
    );
  }
);
Alert.displayName = "Alert";
var loaderVariants = classVarianceAuthority.cva(
  "flex flex-col items-center justify-center gap-2",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-8 w-8",
        lg: "h-12 w-12",
        xl: "h-16 w-16"
      },
      color: {
        brand: "text-mint-500",
        primary: "text-primary",
        neutral: "text-neutral-400"
      }
    },
    defaultVariants: {
      size: "md",
      color: "brand"
    }
  }
);
var Loader = React26__namespace.default.forwardRef(
  ({ className, size, color = "brand", label, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn(loaderVariants({ size, color }), className),
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs(
            "svg",
            {
              viewBox: "0 0 24 24",
              fill: "none",
              className: "h-full w-full animate-spin",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  "circle",
                  {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeOpacity: "0.15",
                    strokeWidth: "3"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  "path",
                  {
                    d: "M12 2a10 10 0 0 1 10 10",
                    stroke: "currentColor",
                    strokeWidth: "3",
                    strokeLinecap: "round"
                  }
                )
              ]
            }
          ),
          label && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-neutral-500 font-body", children: label })
        ]
      }
    );
  }
);
Loader.displayName = "Loader";
var ProgressIndicator = React26__namespace.default.forwardRef(({ className, value, indicatorClassName, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ProgressPrimitive__namespace.Root,
  {
    ref,
    className: cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-muted",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      ProgressPrimitive__namespace.Indicator,
      {
        className: cn(
          "h-full w-full flex-1 bg-primary transition-all duration-500 ease-in-out",
          indicatorClassName
        ),
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
ProgressIndicator.displayName = ProgressPrimitive__namespace.Root.displayName;
var ProgressTracker = ({
  steps,
  currentStepIndex,
  className
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("flex w-full justify-between items-start", className), children: steps.map((step, index) => {
    const isCompleted = index < currentStepIndex;
    const isActive = index === currentStepIndex;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-center flex-1 relative", children: [
      index < steps.length - 1 && /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: cn(
            "absolute top-5 left-1/2 w-full h-[2px] -translate-y-1/2 -z-10 transition-colors duration-500",
            index < currentStepIndex ? "bg-primary" : "bg-muted"
          )
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: cn(
            "h-10 w-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-sm",
            isCompleted ? "bg-primary border-primary text-white" : isActive ? "bg-background border-primary text-primary ring-4 ring-primary/10" : "bg-background border-muted text-muted-foreground"
          ),
          children: isCompleted ? /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.Check, { size: 20, className: "stroke-[3]" }) : /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-bold", children: index + 1 })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mt-3 text-center px-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "p",
          {
            className: cn(
              "text-xs font-bold uppercase tracking-widest",
              isActive ? "text-primary" : "text-foreground/60"
            ),
            children: step.label
          }
        ),
        step.description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-[10px] text-muted-foreground mt-1 max-w-[120px] line-clamp-2 italic", children: step.description })
      ] })
    ] }, step.id);
  }) });
};
ProgressTracker.displayName = "ProgressTracker";
function Skeleton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn(
        "bg-white/5 rounded-md animate-gentle-pulse",
        className
      ),
      ...props
    }
  );
}
var Dialog = DialogPrimitive2__namespace.Root;
var DialogTrigger = DialogPrimitive2__namespace.Trigger;
var DialogPortal = DialogPrimitive2__namespace.Portal;
var DialogClose = DialogPrimitive2__namespace.Close;
var DialogOverlay = React26__namespace.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DialogPrimitive2__namespace.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=fade-in-0] data-[state=closed]:fade-out-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive2__namespace.Overlay.displayName;
var DialogContent = React26__namespace.default.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntime.jsxs(
    DialogPrimitive2__namespace.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-3xl",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsxs(DialogPrimitive2__namespace.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive2__namespace.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React26__namespace.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DialogPrimitive2__namespace.Title,
  {
    ref,
    className: cn(
      "text-lg font-bold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive2__namespace.Title.displayName;
var DialogDescription = React26__namespace.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DialogPrimitive2__namespace.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive2__namespace.Description.displayName;
var ToastProvider = ToastPrimitive__namespace.Provider;
var ToastViewport = React26__namespace.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ToastPrimitive__namespace.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitive__namespace.Viewport.displayName;
var toastVariants = classVarianceAuthority.cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-2xl border p-4 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
        success: "border-green-500 bg-green-500 text-white",
        warning: "border-yellow-500 bg-yellow-500 text-white",
        info: "border-primary bg-primary text-white"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Toast = React26__namespace.default.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToastPrimitive__namespace.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitive__namespace.Root.displayName;
var ToastAction = React26__namespace.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ToastPrimitive__namespace.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitive__namespace.Action.displayName;
var ToastClose = React26__namespace.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ToastPrimitive__namespace.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitive__namespace.Close.displayName;
var ToastTitle = React26__namespace.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ToastPrimitive__namespace.Title,
  {
    ref,
    className: cn("text-sm font-bold", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitive__namespace.Title.displayName;
var ToastDescription = React26__namespace.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ToastPrimitive__namespace.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitive__namespace.Description.displayName;
var Backdrop = ({
  show,
  onClick,
  className,
  blur = true
}) => {
  if (!show) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      onClick,
      className: cn(
        "fixed inset-0 z-40 bg-black/60 transition-all duration-300",
        blur ? "backdrop-blur-sm" : "",
        show ? "opacity-100" : "opacity-0",
        className
      )
    }
  );
};
Backdrop.displayName = "Backdrop";
var NotiStackProvider = ({
  children
}) => {
  const [toasts, setToasts] = React26__namespace.default.useState([]);
  const addToast = React26__namespace.default.useCallback(
    (toast) => {
      const id = Math.random().toString(36).substr(2, 9);
      setToasts((current) => [...current, { ...toast, id }]);
      return id;
    },
    []
  );
  const removeToast = React26__namespace.default.useCallback((id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx(ToastContext.Provider, { value: { addToast, removeToast }, children: /* @__PURE__ */ jsxRuntime.jsxs(ToastProvider, { children: [
    children,
    toasts.map(({ id, title, description, type, action }) => /* @__PURE__ */ jsxRuntime.jsxs(
      Toast,
      {
        variant: type === "error" ? "destructive" : type,
        onOpenChange: (open) => {
          if (!open) removeToast(id);
        },
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid gap-1", children: [
            title && /* @__PURE__ */ jsxRuntime.jsx(ToastTitle, { children: title }),
            description && /* @__PURE__ */ jsxRuntime.jsx(ToastDescription, { children: description })
          ] }),
          action,
          /* @__PURE__ */ jsxRuntime.jsx(ToastClose, {})
        ]
      },
      id
    )),
    /* @__PURE__ */ jsxRuntime.jsx(ToastViewport, {})
  ] }) });
};
var ToastContext = React26__namespace.default.createContext({
  addToast: () => "",
  removeToast: () => {
  }
});
var useToast = () => React26__namespace.default.useContext(ToastContext);
var useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = React26.useState(0);
  const [scrollSnaps, setScrollSnaps] = React26.useState([]);
  const onDotButtonClick = React26.useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );
  const onInit = React26.useCallback((emblaApi2) => {
    setScrollSnaps(emblaApi2.scrollSnapList());
  }, []);
  const onSelect = React26.useCallback((emblaApi2) => {
    setSelectedIndex(emblaApi2.selectedScrollSnap());
  }, []);
  React26.useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);
  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  };
};
var usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = React26.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React26.useState(true);
  const onPrevButtonClick = React26.useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);
  const onNextButtonClick = React26.useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);
  const onSelect = React26.useCallback((emblaApi2) => {
    setPrevBtnDisabled(!emblaApi2.canScrollPrev());
    setNextBtnDisabled(!emblaApi2.canScrollNext());
  }, []);
  React26.useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);
  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  };
};
var Carousel = ({
  children,
  options,
  className,
  style
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel__default.default({ loop: true, ...options });
  const [hovered, setHovered] = React26.useState(false);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: cn("relative group w-full", className),
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            ref: emblaRef,
            className: "overflow-hidden rounded-xl",
            children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex", children: React26__namespace.default.Children.map(children, (child) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-[0_0_100%] min-w-0 px-2", children: child })) })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            onClick: onPrevButtonClick,
            disabled: prevBtnDisabled,
            className: cn(
              "absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200",
              "bg-neutral-900/80 backdrop-blur-md border border-white/10 text-primary",
              "hover:bg-neutral-800 hover:border-mint-500/50",
              "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto",
              prevBtnDisabled && "opacity-0 invisible"
            ),
            "aria-label": "Previous slide",
            children: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.ChevronLeft, { size: 20 })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            onClick: onNextButtonClick,
            disabled: nextBtnDisabled,
            className: cn(
              "absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200",
              "bg-neutral-900/80 backdrop-blur-md border border-white/10 text-primary",
              "hover:bg-neutral-800 hover:border-mint-500/50",
              "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto",
              nextBtnDisabled && "opacity-0 invisible"
            ),
            "aria-label": "Next slide",
            children: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.ChevronRight, { size: 20 })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex justify-center gap-1.5 mt-4", children: scrollSnaps.map((_, index) => /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            onClick: () => onDotButtonClick(index),
            className: cn(
              "h-1.5 rounded-full transition-all duration-300",
              index === selectedIndex ? "w-5 bg-mint-500 shadow-brand" : "w-1.5 bg-white/20 hover:bg-white/40"
            ),
            "aria-label": `Go to slide ${index + 1}`
          },
          index
        )) })
      ]
    }
  );
};
Carousel.displayName = "Carousel";
var FadeIn = ({ children, className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
  framerMotion.motion.div,
  {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
    className,
    ...props,
    children
  }
);
var SlideIn = ({ children, className, direction = "up", ...props }) => {
  const variants = {
    up: { y: 20, opacity: 0 },
    down: { y: -20, opacity: 0 },
    left: { x: 20, opacity: 0 },
    right: { x: -20, opacity: 0 }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.div,
    {
      initial: variants[direction],
      animate: { x: 0, y: 0, opacity: 1 },
      transition: { duration: 0.5, ease: "easeOut" },
      className,
      ...props,
      children
    }
  );
};
var ScaleIn = ({ children, className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
  framerMotion.motion.div,
  {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.4, ease: "easeOut" },
    className,
    ...props,
    children
  }
);
var Nudge = ({
  id,
  title,
  description,
  variant = "info",
  onClose,
  onAction,
  actionLabel,
  className
}) => {
  const icons2 = {
    info: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.Info, { className: "text-blue-500", size: 18 }),
    warning: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.AlertTriangle, { className: "text-amber-500", size: 18 }),
    success: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.CheckCircle2, { className: "text-green-500", size: 18 }),
    neutral: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.Info, { className: "text-slate-500", size: 18 })
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.div,
    {
      layout: true,
      initial: { opacity: 0, scale: 0.95, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.95, x: 20 },
      className: cn(
        "group relative p-4 rounded-xl border bg-background/80 backdrop-blur-md shadow-lg flex gap-4 min-w-[320px] max-w-[400px]",
        variant === "info" && "border-blue-500/20",
        variant === "warning" && "border-amber-500/20",
        variant === "success" && "border-green-500/20",
        variant === "neutral" && "border-border",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-1", children: icons2[variant] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "font-bold text-sm leading-tight mb-1", children: title }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: description }),
          onAction && actionLabel && /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              onClick: () => onAction(id),
              className: "mt-3 text-xs font-bold text-primary hover:underline",
              children: actionLabel
            }
          )
        ] }),
        onClose && /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            onClick: () => onClose(id),
            className: "absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-muted rounded-md",
            children: /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.X, { size: 14 })
          }
        )
      ]
    }
  );
};
var NudgesPanel = ({
  nudges,
  onClose,
  onAction,
  position = "bottom-right",
  className
}) => {
  const positionClasses = {
    "top-right": "top-6 right-6 flex-col-reverse",
    "bottom-right": "bottom-6 right-6 flex-col",
    "bottom-center": "bottom-6 left-1/2 -translate-x-1/2 flex-col"
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn(
        "fixed z-50 flex gap-3 pointer-events-none",
        positionClasses[position],
        className
      ),
      children: /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { children: nudges.map((nudge) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "pointer-events-auto", children: /* @__PURE__ */ jsxRuntime.jsx(
        Nudge,
        {
          ...nudge,
          onClose,
          onAction
        }
      ) }, nudge.id)) })
    }
  );
};
var InsightCard = ({
  data,
  className,
  onClick
}) => /* @__PURE__ */ jsxRuntime.jsxs(
  "div",
  {
    className: cn(
      "bg-surface border border-neutral-100 border-l-[3px] border-l-mint-400 rounded-r-lg p-sp-5 transition-all duration-300 ease-out",
      onClick && "cursor-pointer hover:shadow-[0_4px_16px_rgba(0,179,138,0.25)] hover:-translate-y-[2px] focus-visible:outline-2 focus-visible:outline-mint-400 focus-visible:outline-offset-2",
      className
    ),
    onClick,
    role: onClick ? "button" : void 0,
    tabIndex: onClick ? 0 : void 0,
    onKeyDown: onClick ? (e) => {
      if (e.key === "Enter" || e.key === " ") onClick();
    } : void 0,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-mint-600 mb-sp-2", children: data.tag }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-base font-semibold text-neutral-900 leading-[1.4] mb-sp-2", children: data.title }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-neutral-600 leading-tight", children: data.body }),
      data.badges && data.badges.length > 0 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-wrap gap-sp-2 mt-sp-3", children: data.badges.map((b, i) => /* @__PURE__ */ jsxRuntime.jsx(Badge, { variant: b.variant, size: "sm", children: b.label }, i)) })
    ]
  }
);
InsightCard.displayName = "InsightCard";
var priceVariants = classVarianceAuthority.cva(
  "inline-flex items-center gap-[3px] font-mono text-sm font-medium leading-none",
  {
    variants: {
      direction: {
        up: "text-green-500",
        down: "text-red-500",
        flat: "text-neutral-400"
      }
    },
    defaultVariants: {
      direction: "flat"
    }
  }
);
var ArrowUp = () => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsxRuntime.jsx("polyline", { points: "18 15 12 9 6 15" })
  }
);
var ArrowDown = () => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsxRuntime.jsx("polyline", { points: "6 9 12 15 18 9" })
  }
);
var Dash = () => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
  }
);
function getDirection(value) {
  if (value > 0) return "up";
  if (value < 0) return "down";
  return "flat";
}
var PriceChange = ({
  value,
  percent,
  direction,
  showIcon = true,
  className
}) => {
  const dir = direction ?? getDirection(value);
  const formatted = percent !== void 0 ? `${value > 0 ? "+" : ""}${value.toFixed(2)} (${Math.abs(percent).toFixed(2)}%)` : `${value > 0 ? "+" : ""}${value.toFixed(2)}`;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    {
      className: cn(priceVariants({ direction: dir }), className),
      "aria-label": `${dir === "up" ? "Up" : dir === "down" ? "Down" : "Flat"} ${formatted}`,
      children: [
        showIcon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "inline-flex items-center shrink-0", children: dir === "up" ? /* @__PURE__ */ jsxRuntime.jsx(ArrowUp, {}) : dir === "down" ? /* @__PURE__ */ jsxRuntime.jsx(ArrowDown, {}) : /* @__PURE__ */ jsxRuntime.jsx(Dash, {}) }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "tabular-nums", children: formatted })
      ]
    }
  );
};
PriceChange.displayName = "PriceChange";
var cardVariants2 = classVarianceAuthority.cva(
  "bg-surface border border-neutral-100 rounded-lg p-5",
  {
    variants: {
      compact: {
        true: "p-3 px-4",
        false: "p-5"
      }
    },
    defaultVariants: {
      compact: false
    }
  }
);
var MetricCard = ({
  data,
  className,
  compact = false
}) => {
  const dir = data.direction ?? (data.delta !== void 0 ? getDirection(data.delta) : "flat");
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn(cardVariants2({ compact }), className), children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-[11px] text-neutral-400 font-medium uppercase tracking-widest mb-2", children: data.label }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn(
      "font-display font-bold text-neutral-900 leading-none tabular-nums tracking-[-0.5px] mb-2",
      compact ? "text-2xl" : "text-3xl"
    ), children: [
      data.prefix && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-lg text-neutral-600 mr-[1px]", children: data.prefix }),
      typeof data.value === "number" ? data.value.toLocaleString("en-IN") : data.value,
      data.suffix && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-body text-neutral-400 font-normal ml-[2px]", children: data.suffix })
    ] }),
    data.delta !== void 0 && /* @__PURE__ */ jsxRuntime.jsx(
      PriceChange,
      {
        value: data.delta,
        percent: void 0,
        direction: dir,
        className: "mt-1"
      }
    ),
    data.deltaLabel && !data.delta && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs text-neutral-400 mt-1", children: data.deltaLabel })
  ] });
};
MetricCard.displayName = "MetricCard";
function normalise(data, h) {
  if (data.length < 2) return "";
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const step = 200 / (data.length - 1);
  return data.map((v, i) => {
    const x = i * step;
    const y = h - (v - min) / range * (h - 4) - 2;
    return `${x},${y}`;
  }).join(" ");
}
var colorMap = {
  up: { stroke: "#22C55E", fill: "rgba(34,197,94,0.1)" },
  down: { stroke: "#EF4444", fill: "rgba(239,68,68,0.1)" },
  flat: { stroke: "#94A3B8", fill: "rgba(148,163,184,0.1)" }
};
var Sparkline = ({
  data,
  direction = "up",
  width = 200,
  height = 40,
  className
}) => {
  if (!data || data.length < 2) return null;
  const pts = normalise(data, height);
  const colors = colorMap[direction] ?? colorMap.up;
  const closedPts = `0,${height} ${pts} 200,${height}`;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      className: cn("block w-full", className),
      viewBox: `0 0 200 ${height}`,
      preserveAspectRatio: "none",
      "aria-hidden": "true",
      style: { height },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("polygon", { points: closedPts, fill: colors.fill, stroke: "none" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "polyline",
          {
            points: pts,
            fill: "none",
            stroke: colors.stroke,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
};
Sparkline.displayName = "Sparkline";
var priceVariants2 = classVarianceAuthority.cva(
  "font-display text-2xl font-bold tabular-nums tracking-tighter",
  {
    variants: {
      direction: {
        up: "text-green-500",
        down: "text-red-500",
        flat: "text-neutral-900"
      }
    },
    defaultVariants: {
      direction: "flat"
    }
  }
);
var StockCard = ({
  data,
  onClick,
  className
}) => {
  const direction = getDirection(data.change);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: cn(
        "bg-surface border border-neutral-100 rounded-lg p-sp-4 transition-all duration-300 ease-out",
        onClick && "cursor-pointer hover:border-mint-400 hover:shadow-[0_4px_16px_rgba(0,179,138,0.25)] hover:-translate-y-[2px] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-mint-400 focus-visible:outline-offset-2",
        className
      ),
      onClick,
      role: onClick ? "button" : void 0,
      tabIndex: onClick ? 0 : void 0,
      onKeyDown: onClick ? (e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      } : void 0,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between items-start mb-sp-3", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "font-display text-xl font-bold text-neutral-900 tracking-tight", children: data.ticker }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs text-neutral-400 mt-0.5", children: data.name })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-right flex flex-col items-end gap-0.5", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn(priceVariants2({ direction })), children: [
              "\u20B9",
              data.price.toLocaleString("en-IN")
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx(
              PriceChange,
              {
                value: data.change,
                percent: data.changePercent,
                direction
              }
            )
          ] })
        ] }),
        data.sparkline && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "my-sp-3 rounded-sm overflow-hidden", children: /* @__PURE__ */ jsxRuntime.jsx(Sparkline, { data: data.sparkline, direction, height: 40 }) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-3 gap-sp-2 pt-sp-3 border-t border-neutral-100", children: [
          data.open !== void 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-[10px] text-neutral-400 uppercase tracking-wider mb-0.5", children: "Open" }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "font-mono text-sm font-semibold text-neutral-900 tabular-nums", children: data.open.toLocaleString("en-IN") })
          ] }),
          data.high !== void 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-[10px] text-neutral-400 uppercase tracking-wider mb-0.5", children: direction === "down" ? "Low" : "High" }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "font-mono text-sm font-semibold text-neutral-900 tabular-nums", children: (direction === "down" ? data.low : data.high)?.toLocaleString(
              "en-IN"
            ) })
          ] }),
          data.volume && /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-[10px] text-neutral-400 uppercase tracking-wider mb-0.5", children: "Vol" }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "font-mono text-sm font-semibold text-neutral-900 tabular-nums", children: data.volume })
          ] })
        ] })
      ]
    }
  );
};
StockCard.displayName = "StockCard";
var AdvancedRealTimeChart = ({
  symbol = "NASDAQ:AAPL",
  interval = "D",
  theme = "dark",
  autosize = true,
  height = 500,
  ...rest
}) => {
  const container = React26.useRef(null);
  const scriptId = `tradingview-advanced-${symbol}`;
  React26.useEffect(() => {
    if (container.current && !document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://s3.tradingview.com/tv.js";
      script.type = "text/javascript";
      script.async = true;
      script.onload = () => {
        if (window.TradingView) {
          new window.TradingView.widget({
            autosize,
            symbol,
            interval,
            timezone: "Etc/UTC",
            theme,
            style: "1",
            locale: "en",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: container.current?.id,
            height,
            ...rest
          });
        }
      };
      document.head.appendChild(script);
    }
  }, [symbol, interval, theme, autosize, height, scriptId, rest]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: "tradingview-widget-container",
      style: { height: autosize ? "100%" : height, width: "100%" },
      children: /* @__PURE__ */ jsxRuntime.jsx("div", { id: `tv_chart_${symbol.replace(/[^a-zA-Z0-9]/g, "_")}`, ref: container, style: { height: "100%", width: "100%" } })
    }
  );
};
var TechnicalAnalysis = ({
  symbol = "NASDAQ:AAPL",
  theme = "dark",
  width = "100%",
  height = 450,
  interval = "1D"
}) => {
  const container = React26.useRef(null);
  React26.useEffect(() => {
    if (container.current) {
      container.current.innerHTML = "";
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        interval,
        width,
        isTransparent: false,
        height,
        symbol,
        showIntervalTabs: true,
        locale: "en",
        colorTheme: theme,
        ...theme === "dark" ? {
          "gridLineColor": "rgba(42, 46, 57, 0)",
          "fontColor": "#d1d4dc",
          "underLineColor": "rgba(41, 98, 255, 0.3)",
          "trendLineColor": "rgba(41, 98, 255, 1)"
        } : {}
      });
      container.current.appendChild(script);
    }
  }, [symbol, interval, theme, width, height]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "tradingview-widget-container", ref: container, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "tradingview-widget-container__widget" }) });
};
var MarketOverview = ({
  theme = "dark",
  width = "100%",
  height = 400,
  symbols = [
    { s: "FOREXCOM:SPX500", d: "S&P 500" },
    { s: "FOREXCOM:NSXUSD", d: "Nasdaq 100" },
    { s: "FX_IDC:INRUSD", d: "USD/INR" },
    { s: "BITSTAMP:BTCUSD", d: "Bitcoin" }
  ]
}) => {
  const container = React26.useRef(null);
  React26.useEffect(() => {
    if (container.current) {
      container.current.innerHTML = "";
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        colorTheme: theme,
        dateRange: "12M",
        showChart: true,
        locale: "en",
        width,
        height,
        largeChartAtBottom: false,
        isTransparent: false,
        showSymbolLogo: true,
        showFloatingTooltip: false,
        tabs: [
          {
            title: "Indices",
            symbols
          }
        ]
      });
      container.current.appendChild(script);
    }
  }, [theme, width, height, symbols]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "tradingview-widget-container", ref: container, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "tradingview-widget-container__widget" }) });
};
var SymbolOverviewMini = ({
  symbol = "NASDAQ:AAPL",
  theme = "dark",
  width = "100%",
  height = 200
}) => {
  const container = React26.useRef(null);
  React26.useEffect(() => {
    if (container.current) {
      container.current.innerHTML = "";
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbol,
        width,
        height,
        locale: "en",
        dateRange: "12M",
        colorTheme: theme,
        isTransparent: false,
        autosize: false,
        largeChartAtBottom: false
      });
      container.current.appendChild(script);
    }
  }, [symbol, theme, width, height]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "tradingview-widget-container", ref: container, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "tradingview-widget-container__widget" }) });
};
var TickerTape = ({
  theme = "dark",
  symbols = [
    { proName: "FOREXCOM:SPX500", title: "S&P 500" },
    { proName: "FOREXCOM:NSXUSD", title: "Nasdaq 100" },
    { proName: "FX_IDC:EURUSD", title: "EUR/USD" },
    { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
    { proName: "BITSTAMP:ETHUSD", title: "Ethereum" }
  ]
}) => {
  const container = React26.useRef(null);
  React26.useEffect(() => {
    if (container.current) {
      container.current.innerHTML = "";
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbols,
        showSymbolLogo: true,
        colorTheme: theme,
        isTransparent: false,
        displayMode: "adaptive",
        locale: "en"
      });
      container.current.appendChild(script);
    }
  }, [theme, symbols]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "tradingview-widget-container", ref: container, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "tradingview-widget-container__widget" }) });
};
var LWC_URL = "https://unpkg.com/lightweight-charts@4.2.0/dist/lightweight-charts.standalone.production.js";
var scriptPromise = null;
var loadScript = () => {
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      if (window.LightweightCharts) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = LWC_URL;
      script.id = "lwc-script-v4";
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load LightweightCharts"));
      document.head.appendChild(script);
    });
  }
  return scriptPromise;
};
var BaseChart = ({
  renderFn,
  height = 300,
  theme = "dark",
  className
}) => {
  const containerRef = React26.useRef(null);
  const chartRef = React26.useRef(null);
  const [error, setError] = React26.useState(null);
  React26.useEffect(() => {
    let chart = null;
    let cancelled = false;
    const init = async () => {
      try {
        await loadScript();
        if (cancelled || !containerRef.current) return;
        const LWT = window.LightweightCharts;
        if (!LWT?.createChart) {
          setError("LightweightCharts not available");
          return;
        }
        if (chartRef.current) {
          try {
            chartRef.current.remove();
          } catch (_) {
          }
          chartRef.current = null;
        }
        chart = LWT.createChart(containerRef.current, {
          layout: {
            background: { type: "solid", color: "transparent" },
            textColor: theme === "dark" ? "#9BACA6" : "#3A524D",
            fontFamily: "'DM Sans', sans-serif"
          },
          grid: {
            vertLines: { color: theme === "dark" ? "rgba(232,239,237,0.06)" : "rgba(8,14,13,0.06)" },
            horzLines: { color: theme === "dark" ? "rgba(232,239,237,0.06)" : "rgba(8,14,13,0.06)" }
          },
          crosshair: {
            vertLine: { color: "#3DDCBA", width: 1, style: 3, labelBackgroundColor: "#00B38A" },
            horzLine: { color: "#3DDCBA", width: 1, style: 3, labelBackgroundColor: "#00B38A" }
          },
          timeScale: {
            borderColor: theme === "dark" ? "rgba(232,239,237,0.1)" : "rgba(8,14,13,0.1)",
            timeVisible: true
          },
          rightPriceScale: {
            borderColor: theme === "dark" ? "rgba(232,239,237,0.1)" : "rgba(8,14,13,0.1)"
          },
          width: containerRef.current.clientWidth,
          height
        });
        chartRef.current = chart;
        renderFn(LWT, chart);
        const handleResize = () => {
          if (containerRef.current && chartRef.current) {
            chartRef.current.applyOptions({ width: containerRef.current.clientWidth });
          }
        };
        window.addEventListener("resize", handleResize);
        return handleResize;
      } catch (err) {
        if (!cancelled) setError(err.message ?? "Chart error");
      }
    };
    init();
    return () => {
      cancelled = true;
      if (chartRef.current) {
        try {
          chartRef.current.remove();
        } catch (_) {
        }
        chartRef.current = null;
      }
    };
  }, [theme, height]);
  if (error) {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { height, display: "flex", alignItems: "center", justifyContent: "center", color: "#EF4444", fontSize: 13, borderRadius: 12, border: "1px solid rgba(239,68,68,0.3)", background: "rgba(239,68,68,0.05)" }, children: [
      "Chart failed to load: ",
      error
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref: containerRef,
      className,
      style: {
        width: "100%",
        height,
        borderRadius: 12,
        overflow: "hidden",
        background: theme === "dark" ? "rgba(13,22,20,0.4)" : "rgba(245,248,247,0.8)",
        border: `1px solid ${theme === "dark" ? "rgba(232,239,237,0.08)" : "rgba(8,14,13,0.1)"}`
      }
    }
  );
};
var AreaChart = ({ data, color = "#00B38A", ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
  BaseChart,
  {
    ...props,
    renderFn: (_LWT, chart) => {
      const series = chart.addAreaSeries({
        topColor: `${color}4D`,
        bottomColor: `${color}00`,
        lineColor: color,
        lineWidth: 2
      });
      series.setData(data);
    }
  }
);
var CandlestickChart = ({ data, ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
  BaseChart,
  {
    ...props,
    renderFn: (_LWT, chart) => {
      const series = chart.addCandlestickSeries({
        upColor: "#00B38A",
        downColor: "#EF4444",
        borderVisible: false,
        wickUpColor: "#00B38A",
        wickDownColor: "#EF4444"
      });
      series.setData(data);
    }
  }
);
var BaselineChart = ({ data, color = "#00B38A", ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
  BaseChart,
  {
    ...props,
    renderFn: (_LWT, chart) => {
      const series = chart.addBaselineSeries({
        topFillColor1: `${color}4D`,
        topFillColor2: `${color}00`,
        topLineColor: color,
        bottomFillColor1: "rgba(239,68,68,0)",
        bottomFillColor2: "rgba(239,68,68,0.3)",
        bottomLineColor: "#EF4444",
        lineWidth: 2
      });
      series.setData(data);
    }
  }
);
var VolumeChart = ({ data, color = "#00B38A", ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
  BaseChart,
  {
    ...props,
    renderFn: (_LWT, chart) => {
      const series = chart.addHistogramSeries({
        priceFormat: { type: "volume" },
        priceScaleId: "volume"
      });
      chart.priceScale("volume").applyOptions({
        scaleMargins: { top: 0.1, bottom: 0 }
      });
      series.setData(
        data.map((d) => ({
          time: d.time,
          value: d.value ?? 0,
          color: (d.value ?? 0) > 25 ? `${color}B3` : "#EF444480"
        }))
      );
    }
  }
);
var CustomTickerTape = ({
  items,
  speed = 20,
  className
}) => {
  const displayItems = [...items, ...items, ...items];
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("relative w-full overflow-hidden bg-background/50 backdrop-blur-sm border-y border-border py-2", className), children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      framerMotion.motion.div,
      {
        className: "flex whitespace-nowrap",
        animate: {
          x: [0, -100 * items.length + "%"]
        },
        transition: {
          duration: speed,
          repeat: Infinity,
          ease: "linear"
        },
        children: displayItems.map((item, index) => /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            className: "flex items-center gap-4 px-8 border-r border-border/50 last:border-r-0",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-bold text-sm tracking-tight", children: item.symbol }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-mono text-sm", children: item.price }),
              /* @__PURE__ */ jsxRuntime.jsxs(
                "span",
                {
                  className: cn(
                    "flex items-center gap-1 text-xs font-semibold",
                    item.isPositive ? "text-green-500" : "text-red-500"
                  ),
                  children: [
                    item.isPositive ? /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.TrendingUp, { size: 12 }) : /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.TrendingDown, { size: 12 }),
                    item.change,
                    "%"
                  ]
                }
              )
            ]
          },
          `${item.symbol}-${index}`
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" })
  ] });
};
var MarketStatus = ({
  status,
  market = "Global Market",
  className
}) => {
  const config = {
    open: {
      color: "bg-green-500",
      text: "Market Open",
      pulse: "bg-green-500/50"
    },
    closed: {
      color: "bg-red-500",
      text: "Market Closed",
      pulse: "bg-red-500/50"
    },
    "closing-soon": {
      color: "bg-amber-500",
      text: "Closing Soon",
      pulse: "bg-amber-500/50"
    }
  };
  const current = config[status];
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex items-center gap-3 px-4 py-2 rounded-full bg-background/40 border border-border w-fit", className), children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative flex h-2.5 w-2.5", children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", current.pulse) }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn("relative inline-flex rounded-full h-2.5 w-2.5", current.color) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-[10px] uppercase tracking-wider font-bold opacity-50 leading-none", children: market }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-semibold leading-tight", children: current.text })
    ] })
  ] });
};

// src/components/shell/AppHeader.tsx
var import_link = __toESM(require_link2());
var import_navigation = __toESM(require_navigation2());
var DEFAULT_NAV = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsxRuntime.jsx("rect", { width: "7", height: "9", x: "3", y: "3", rx: "1" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { width: "7", height: "5", x: "14", y: "3", rx: "1" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { width: "7", height: "9", x: "14", y: "12", rx: "1" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { width: "7", height: "5", x: "3", y: "16", rx: "1" })
    ] })
  },
  {
    label: "Markets",
    href: "/market-overview",
    icon: /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsxRuntime.jsx("polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17" }),
      /* @__PURE__ */ jsxRuntime.jsx("polyline", { points: "16 7 22 7 22 13" })
    ] }),
    children: [
      { label: "Market Overview", href: "/market-overview" },
      { label: "Gainers & Losers", href: "/gainers-losers" },
      { label: "Pre-Open Data", href: "/market-overview#preopen" },
      { label: "Sector Heatmap", href: "/market-overview#heatmap" }
    ]
  },
  {
    label: "Screener",
    href: "/technical-screener",
    badge: "Pro",
    icon: /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntime.jsx("polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }) })
  },
  {
    label: "FII / DII",
    href: "/fii-dii",
    icon: /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsxRuntime.jsx("rect", { width: "20", height: "14", x: "2", y: "7", rx: "2" }),
      /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "2", x2: "22", y1: "12", y2: "12" })
    ] })
  },
  {
    label: "Academy",
    href: "/academy",
    icon: /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M22 10v6M2 10l10-5 10 5-10 5z" }),
      /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6 12v5c3 3 9 3 12 0v-5" })
    ] })
  }
];
function Logo({ collapsed = false }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    import_link.default,
    {
      href: "/",
      className: "flex items-center gap-2 font-display text-[15px] font-extrabold tracking-tight text-[var(--t1)] transition-opacity hover:opacity-90",
      "aria-label": "Mintx home",
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "26", height: "26", viewBox: "0 0 96 96", fill: "none", "aria-hidden": true, children: [
          /* @__PURE__ */ jsxRuntime.jsx("rect", { width: "96", height: "96", rx: "20", fill: "var(--mint)" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20 64L34 42L44 52L62 30", stroke: "#001A13", strokeWidth: "5", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "62", cy: "30", r: "6", fill: "#001A13" })
        ] }),
        !collapsed && /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
          "Mintx",
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-[var(--mint)]", children: "." })
        ] })
      ]
    }
  );
}
function NavBadge({ text }) {
  const isPro = text === "Pro";
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      className: cn(
        "ml-1 inline-flex rounded-full px-1.5 py-px font-mono text-[9px] font-bold uppercase leading-tight",
        isPro ? "bg-[var(--mint-l)] text-[var(--mint-d)]" : "bg-[var(--bd2)] text-[var(--t3)] border border-[var(--bd)]"
      ),
      children: text
    }
  );
}
function NavLink({
  item,
  active,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    import_link.default,
    {
      href: item.href,
      onClick,
      className: cn(
        "flex items-center gap-1.5 rounded-[var(--r1)] px-2.5 py-1.5 text-[13px] font-medium transition-all duration-150",
        active ? "bg-[var(--mint-l)] text-[var(--mint-d)] font-semibold" : "text-[var(--t2)] hover:bg-[var(--bd2)] hover:text-[var(--t1)]"
      ),
      children: [
        item.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn("opacity-70", active && "opacity-100 text-[var(--mint)]"), children: item.icon }),
        item.label,
        item.badge && /* @__PURE__ */ jsxRuntime.jsx(NavBadge, { text: item.badge })
      ]
    }
  );
}
function NavDropdown({ item, active }) {
  const [open, setOpen] = React26.useState(false);
  const ref = React26.useRef(null);
  React26.useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { ref, className: "relative", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        onClick: () => setOpen((v) => !v),
        "aria-expanded": open,
        className: cn(
          "flex items-center gap-1.5 rounded-[var(--r1)] px-2.5 py-1.5 text-[13px] font-medium transition-all duration-150",
          active || open ? "bg-[var(--mint-l)] text-[var(--mint-d)] font-semibold" : "text-[var(--t2)] hover:bg-[var(--bd2)] hover:text-[var(--t1)]"
        ),
        children: [
          item.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "opacity-70", children: item.icon }),
          item.label,
          /* @__PURE__ */ jsxRuntime.jsx(
            "svg",
            {
              width: "10",
              height: "10",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: cn("transition-transform duration-150 opacity-60", open && "rotate-180"),
              children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "m6 9 6 6 6-6" })
            }
          )
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: cn(
          "absolute left-0 top-full z-50 mt-1.5 min-w-[180px] origin-top-left",
          "rounded-[var(--r2)] border border-[var(--bd)] bg-[var(--surf)] py-1 shadow-[var(--sh2)]",
          "animate-in fade-in slide-in-from-top-2 duration-150"
        ),
        children: item.children?.map((child) => /* @__PURE__ */ jsxRuntime.jsxs(
          import_link.default,
          {
            href: child.href,
            onClick: () => setOpen(false),
            className: "flex items-center gap-2 px-3.5 py-2 text-[13px] text-[var(--t2)] transition-colors hover:bg-[var(--bd2)] hover:text-[var(--t1)]",
            children: [
              child.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "opacity-60", children: child.icon }),
              child.label,
              child.badge && /* @__PURE__ */ jsxRuntime.jsx(NavBadge, { text: child.badge })
            ]
          },
          child.href
        ))
      }
    )
  ] });
}
function UserMenu({
  user,
  onLogout
}) {
  const [open, setOpen] = React26.useState(false);
  const ref = React26.useRef(null);
  React26.useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  const initials = user.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { ref, className: "relative", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        onClick: () => setOpen((v) => !v),
        "aria-expanded": open,
        "aria-label": "Open user menu",
        className: "flex items-center gap-2 rounded-[var(--r2)] px-2 py-1.5 transition-colors hover:bg-[var(--bd2)]",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--mint)] to-[var(--mint-d)] font-display text-[11px] font-bold text-[#001A13]", children: user.avatarUrl ? /* @__PURE__ */ jsxRuntime.jsx("img", { src: user.avatarUrl, alt: user.name, className: "h-7 w-7 rounded-full object-cover" }) : initials }),
          user.plan === "pro" && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "rounded-full bg-[var(--mint-l)] px-1.5 py-px font-mono text-[9px] font-bold text-[var(--mint-d)]", children: "PRO" }),
          /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "10", height: "10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: cn("opacity-40 transition-transform duration-150", open && "rotate-180"), children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "m6 9 6 6 6-6" }) })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn(
      "absolute right-0 top-full z-50 mt-1.5 w-56 origin-top-right",
      "rounded-[var(--r3)] border border-[var(--bd)] bg-[var(--surf)] shadow-[var(--sh2)]",
      "animate-in fade-in slide-in-from-top-2 duration-150"
    ), children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "border-b border-[var(--bd)] px-4 py-3", children: [
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-[13px] font-semibold text-[var(--t1)] truncate", children: user.name }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-[11px] text-[var(--t3)] truncate", children: user.email })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "py-1", children: [
        { label: "Your account", href: "/account" },
        { label: "Portfolio tracker", href: "/portfolio" },
        { label: "Watchlist", href: "/watchlist" },
        { label: "Referrals & credits", href: "/referrals" }
      ].map((item) => /* @__PURE__ */ jsxRuntime.jsx(
        import_link.default,
        {
          href: item.href,
          onClick: () => setOpen(false),
          className: "block px-4 py-2 text-[13px] text-[var(--t2)] hover:bg-[var(--bd2)] hover:text-[var(--t1)] transition-colors",
          children: item.label
        },
        item.href
      )) }),
      user.plan === "free" && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "border-t border-[var(--bd)] p-2", children: /* @__PURE__ */ jsxRuntime.jsx(
        import_link.default,
        {
          href: "/pricing",
          onClick: () => setOpen(false),
          className: "block w-full rounded-[var(--r1)] bg-[var(--mint)] px-3 py-2 text-center text-[12px] font-semibold text-[#001A13] shadow-[var(--sh-brand)] hover:bg-[var(--mint-300)] transition-colors",
          children: "Upgrade to Pro \u2197"
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "border-t border-[var(--bd)] py-1", children: /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          onClick: () => {
            setOpen(false);
            onLogout?.();
          },
          className: "w-full px-4 py-2 text-left text-[13px] text-[var(--red)] hover:bg-[rgba(239,68,68,0.06)] transition-colors",
          children: "Sign out"
        }
      ) })
    ] })
  ] });
}
function NotificationBell({ count = 0 }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      "aria-label": `Notifications${count > 0 ? ` (${count} unread)` : ""}`,
      className: "relative flex h-8 w-8 items-center justify-center rounded-[var(--r1)] text-[var(--t3)] transition-colors hover:bg-[var(--bd2)] hover:text-[var(--t1)]",
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" })
        ] }),
        count > 0 && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute right-1 top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[var(--red)] font-mono text-[8px] font-bold text-white", children: count > 9 ? "9+" : count })
      ]
    }
  );
}
function MarketStatus2() {
  const [status, setStatus] = React26.useState("closed");
  React26.useEffect(() => {
    const now = /* @__PURE__ */ new Date();
    const istOffset = 5.5 * 60 * 60 * 1e3;
    const ist = new Date(now.getTime() + istOffset - now.getTimezoneOffset() * 6e4);
    const day = ist.getDay();
    const hour = ist.getHours();
    const min = ist.getMinutes();
    const totalMins = hour * 60 + min;
    if (day === 0 || day === 6) {
      setStatus("closed");
      return;
    }
    if (totalMins >= 9 * 60 && totalMins < 9 * 60 + 15) {
      setStatus("preopen");
      return;
    }
    if (totalMins >= 9 * 60 + 15 && totalMins < 15 * 60 + 30) {
      setStatus("open");
      return;
    }
    setStatus("closed");
  }, []);
  const cfg = {
    open: { label: "Market Open", color: "var(--grn)", pulse: true },
    preopen: { label: "Pre-Open", color: "var(--amb)", pulse: true },
    closed: { label: "Market Closed", color: "var(--t4)", pulse: false }
  }[status];
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-1.5 rounded-full border border-[var(--bd)] px-2.5 py-1 text-[11px] font-medium text-[var(--t3)]", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
      cfg.pulse && /* @__PURE__ */ jsxRuntime.jsx(
        "span",
        {
          className: "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
          style: { background: cfg.color }
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full", style: { background: cfg.color } })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "hidden sm:block", children: cfg.label })
  ] });
}
function MobileMenu({
  items,
  open,
  onClose,
  user,
  onLogout
}) {
  const pathname = (0, import_navigation.usePathname)();
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "fixed inset-0 z-50 flex flex-col bg-[var(--surf)] lg:hidden", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between border-b border-[var(--bd)] px-6 py-4", children: [
      /* @__PURE__ */ jsxRuntime.jsx(Logo, {}),
      /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          onClick: onClose,
          "aria-label": "Close menu",
          className: "flex h-8 w-8 items-center justify-center rounded-[var(--r1)] text-[var(--t3)] hover:bg-[var(--bd2)]",
          children: /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18 6 6 18M6 6l12 12" }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "flex flex-1 flex-col overflow-y-auto px-4 py-4 gap-1", children: items.map((item) => /* @__PURE__ */ jsxRuntime.jsxs(
      import_link.default,
      {
        href: item.href,
        onClick: onClose,
        className: cn(
          "flex items-center gap-2.5 rounded-[var(--r2)] px-3 py-2.5 text-sm font-medium",
          pathname === item.href || pathname.startsWith(item.href + "/") ? "bg-[var(--mint-l)] text-[var(--mint-d)] font-semibold" : "text-[var(--t2)] hover:bg-[var(--bd2)]"
        ),
        children: [
          item.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "opacity-70", children: item.icon }),
          item.label,
          item.badge && /* @__PURE__ */ jsxRuntime.jsx(NavBadge, { text: item.badge })
        ]
      },
      item.href
    )) }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "border-t border-[var(--bd)] p-4", children: user ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "px-2 text-xs text-[var(--t3)]", children: [
        "Signed in as ",
        /* @__PURE__ */ jsxRuntime.jsx("strong", { className: "text-[var(--t2)]", children: user.email })
      ] }),
      user.plan === "free" && /* @__PURE__ */ jsxRuntime.jsx(
        import_link.default,
        {
          href: "/pricing",
          onClick: onClose,
          className: "w-full rounded-[var(--r2)] bg-[var(--mint)] py-2.5 text-center text-sm font-semibold text-[#001A13]",
          children: "Upgrade to Pro"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          onClick: () => {
            onClose();
            onLogout?.();
          },
          className: "w-full rounded-[var(--r2)] py-2 text-sm text-[var(--red)] hover:bg-[rgba(239,68,68,0.06)]",
          children: "Sign out"
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        import_link.default,
        {
          href: "/auth/login",
          onClick: onClose,
          className: "w-full rounded-[var(--r2)] border border-[var(--bd)] py-2.5 text-center text-sm font-medium text-[var(--t1)]",
          children: "Sign in"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        import_link.default,
        {
          href: "/auth/signup",
          onClick: onClose,
          className: "w-full rounded-[var(--r2)] bg-[var(--mint)] py-2.5 text-center text-sm font-semibold text-[#001A13] shadow-[var(--sh-brand)]",
          children: "Get started free"
        }
      )
    ] }) })
  ] });
}
function AppHeader({
  user = null,
  navItems = DEFAULT_NAV,
  onLogout,
  cta
}) {
  const pathname = (0, import_navigation.usePathname)();
  const [mobileOpen, setMobileOpen] = React26.useState(false);
  const [scrolled, setScrolled] = React26.useState(false);
  React26.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  React26.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "header",
      {
        className: cn(
          "sticky top-0 z-40 w-full border-b border-[var(--bd)] bg-[var(--surf)]/90 backdrop-blur-md",
          "transition-shadow duration-150",
          scrolled && "shadow-[var(--sh)]"
        ),
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mx-auto flex h-14 max-w-screen-xl items-center justify-between gap-4 px-4 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntime.jsx(Logo, {}),
            /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "ml-4 hidden items-center gap-0.5 lg:flex", "aria-label": "Main navigation", children: navItems.map(
              (item) => item.children ? /* @__PURE__ */ jsxRuntime.jsx(
                NavDropdown,
                {
                  item,
                  active: pathname === item.href || pathname.startsWith(item.href + "/")
                },
                item.href
              ) : /* @__PURE__ */ jsxRuntime.jsx(
                NavLink,
                {
                  item,
                  active: pathname === item.href || pathname.startsWith(item.href + "/")
                },
                item.href
              )
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntime.jsx(MarketStatus2, {}),
            user ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
              /* @__PURE__ */ jsxRuntime.jsx(NotificationBell, { count: 3 }),
              /* @__PURE__ */ jsxRuntime.jsx(UserMenu, { user, onLogout })
            ] }) : cta ? cta : /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "hidden items-center gap-2 lg:flex", children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                import_link.default,
                {
                  href: "/auth/login",
                  className: "rounded-[var(--r2)] px-3 py-1.5 text-[13px] font-medium text-[var(--t2)] hover:bg-[var(--bd2)] hover:text-[var(--t1)] transition-colors",
                  children: "Sign in"
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                import_link.default,
                {
                  href: "/auth/signup",
                  className: "rounded-[var(--r2)] bg-[var(--mint)] px-3.5 py-1.5 text-[13px] font-semibold text-[#001A13] shadow-[var(--sh-brand)] hover:bg-[var(--mint-300)] transition-all",
                  children: "Get started"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx(
              "button",
              {
                onClick: () => setMobileOpen(true),
                "aria-label": "Open navigation menu",
                "aria-expanded": mobileOpen,
                className: "flex h-8 w-8 items-center justify-center rounded-[var(--r1)] text-[var(--t2)] hover:bg-[var(--bd2)] lg:hidden transition-colors",
                children: /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                  /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "4", x2: "20", y1: "12", y2: "12" }),
                  /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "4", x2: "20", y1: "6", y2: "6" }),
                  /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "4", x2: "20", y1: "18", y2: "18" })
                ] })
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      MobileMenu,
      {
        items: navItems,
        open: mobileOpen,
        onClose: () => setMobileOpen(false),
        user,
        onLogout
      }
    )
  ] });
}

// src/components/shell/AppFooter.tsx
var import_link2 = __toESM(require_link2());
var DEFAULT_COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Market Overview", href: "/market-overview" },
      { label: "Stock Screener", href: "/technical-screener" },
      { label: "FII / DII Flows", href: "/fii-dii" },
      { label: "Options Analytics", href: "/options/NIFTY" },
      { label: "Holidays Calendar", href: "/holidays" }
    ]
  },
  {
    title: "Learn",
    links: [
      { label: "Academy", href: "/academy" },
      { label: "Fibonacci Guide", href: "/academy/fibonacci" },
      { label: "IPO Analysis", href: "/academy/ipo" },
      { label: "Investment Fundamentals", href: "/academy/fundamentals" },
      { label: "Daily Insight Cards", href: "/academy#insights" }
    ]
  },
  {
    title: "Product",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Referrals", href: "/referrals" },
      { label: "Changelog", href: "/changelog" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Status", href: "https://status.mintx.trade", external: true }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "mailto:support@mintx.trade", external: true },
      { label: "Community", href: "/community" }
    ]
  }
];
var LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookie Policy", href: "/cookies" }
];
var SEBI_DISCLAIMER = `Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Mintx Technologies Pvt Ltd is not registered with SEBI as an Investment Adviser or Research Analyst. The information on this platform is for educational and informational purposes only and does not constitute investment advice, a recommendation to buy or sell any security, or a solicitation of any offer to buy or sell securities.`;
var SocialLinks = () => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center gap-3", children: [
  {
    label: "Twitter / X",
    href: "https://twitter.com/mintx_trade",
    icon: /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) })
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/mintx-trade",
    icon: /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "currentColor", children: [
      /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" }),
      /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "4", cy: "4", r: "2" })
    ] })
  },
  {
    label: "Telegram",
    href: "https://t.me/mintx_trade",
    icon: /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.078 9.76c-.156.698-.567.868-1.148.54l-3.184-2.342-1.537 1.478c-.17.17-.313.313-.64.313l.228-3.247 5.905-5.327c.257-.228-.056-.354-.398-.126L6.68 14.413 3.54 13.44c-.683-.215-.698-.683.143-.997l10.875-4.193c.57-.213 1.068.128.904.998z" }) })
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@mintx_trade",
    icon: /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }) })
  }
].map((s) => /* @__PURE__ */ jsxRuntime.jsx(
  "a",
  {
    href: s.href,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": s.label,
    className: "flex h-8 w-8 items-center justify-center rounded-[var(--r1)] text-[var(--t3)] transition-colors hover:bg-[var(--bd2)] hover:text-[var(--t1)]",
    children: s.icon
  },
  s.label
)) });
var FooterLogo = () => /* @__PURE__ */ jsxRuntime.jsxs(
  import_link2.default,
  {
    href: "/",
    className: "flex items-center gap-2 font-display text-[15px] font-extrabold tracking-tight text-[var(--t1)] transition-opacity hover:opacity-90",
    "aria-label": "Mintx home",
    children: [
      /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "26", height: "26", viewBox: "0 0 96 96", fill: "none", "aria-hidden": true, children: [
        /* @__PURE__ */ jsxRuntime.jsx("rect", { width: "96", height: "96", rx: "20", fill: "var(--mint)" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20 64L34 42L44 52L62 30", stroke: "#001A13", strokeWidth: "5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "62", cy: "30", r: "6", fill: "#001A13" })
      ] }),
      "Mintx",
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-[var(--mint)]", children: "." })
    ]
  }
);
function AppFooter({
  columns = DEFAULT_COLUMNS,
  showDisclaimer = true,
  compact = false,
  className
}) {
  if (compact) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "footer",
      {
        className: cn(
          "border-t border-[var(--bd)] bg-[var(--surf)]/60 backdrop-blur-sm",
          className
        ),
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row lg:px-8", children: [
          /* @__PURE__ */ jsxRuntime.jsx(FooterLogo, {}),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-wrap items-center justify-center gap-x-4 gap-y-1", children: LEGAL_LINKS.map((l) => /* @__PURE__ */ jsxRuntime.jsx(
            import_link2.default,
            {
              href: l.href,
              className: "text-xs text-[var(--t4)] hover:text-[var(--t2)] transition-colors",
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-mono text-[10px] text-[var(--t4)]", children: [
            "\xA9 ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " Mintx Technologies Pvt Ltd"
          ] })
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "footer",
    {
      className: cn(
        "border-t border-[var(--bd)] bg-[var(--surf)]/80 backdrop-blur-sm",
        className
      ),
      children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mx-auto max-w-screen-xl px-4 py-12 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "col-span-2 flex flex-col gap-4 sm:col-span-3 lg:col-span-1 xl:col-span-2", children: [
            /* @__PURE__ */ jsxRuntime.jsx(FooterLogo, {}),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "max-w-[240px] text-xs leading-relaxed text-[var(--t3)]", children: "Institutional-grade market intelligence for Indian retail investors. SEBI-compliant. Always educational. Never advisory." }),
            /* @__PURE__ */ jsxRuntime.jsx(SocialLinks, {}),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-[var(--bd)] bg-[var(--bd2)] px-2.5 py-1 font-mono text-[10px] text-[var(--t4)]", children: [
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--grn)]" }),
              "NSE data | Supabase snapshots"
            ] }) })
          ] }),
          columns.map((col) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-3", children: [
            /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--t3)]", children: col.title }),
            /* @__PURE__ */ jsxRuntime.jsx("ul", { className: "flex flex-col gap-2", children: col.links.map((link) => /* @__PURE__ */ jsxRuntime.jsx("li", { children: link.external ? /* @__PURE__ */ jsxRuntime.jsxs(
              "a",
              {
                href: link.href,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-1 text-[13px] text-[var(--t3)] hover:text-[var(--t1)] transition-colors",
                children: [
                  link.label,
                  /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "10", height: "10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "opacity-40", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7 7h10v10M7 17 17 7" }) })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntime.jsx(
              import_link2.default,
              {
                href: link.href,
                className: "text-[13px] text-[var(--t3)] hover:text-[var(--t1)] transition-colors",
                children: link.label
              }
            ) }, link.href)) })
          ] }, col.title))
        ] }),
        showDisclaimer && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-10 rounded-[var(--r2)] border border-[var(--bd)] bg-[var(--bd2)] px-4 py-3", children: /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-center text-[10.5px] leading-relaxed text-[var(--t4)]", children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-semibold text-[var(--t3)]", children: "SEBI Disclaimer - " }),
          SEBI_DISCLAIMER
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mt-8 flex flex-col items-center justify-between gap-3 border-t border-[var(--bd)] pt-6 sm:flex-row", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-mono text-[11px] text-[var(--t4)]", children: [
            "\xA9 ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " Mintx Technologies Pvt Ltd | mintx.trade | mintx.in"
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center gap-4", children: LEGAL_LINKS.map((l) => /* @__PURE__ */ jsxRuntime.jsx(
            import_link2.default,
            {
              href: l.href,
              className: "text-[11px] text-[var(--t4)] hover:text-[var(--t2)] transition-colors",
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-1.5 font-mono text-[10px] text-[var(--t4)]", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Built on" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "rounded px-1 py-0.5 bg-[var(--bd2)] border border-[var(--bd)]", children: "Next.js 14" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { children: "|" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "rounded px-1 py-0.5 bg-[var(--bd2)] border border-[var(--bd)]", children: "Supabase" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { children: "|" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "rounded px-1 py-0.5 bg-[var(--bd2)] border border-[var(--bd)]", children: "Vercel" })
          ] })
        ] })
      ] })
    }
  );
}
var markSizes = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 48,
  xl: 96
};
var wordmarkSizes = {
  xs: 12,
  sm: 14,
  md: 17,
  lg: 22,
  xl: 36
};
var IconMark = ({
  size,
  theme
}) => {
  const bgColor = theme === "white" ? "#FFFFFF" : theme === "light" ? "#F5F8F7" : "#00B38A";
  const strokeColor = theme === "white" || theme === "light" ? "#00B38A" : "#001A13";
  const rx = Math.round(size * 0.25);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 96 96",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("rect", { width: "96", height: "96", rx, fill: bgColor }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M20 64L34 42L44 52L62 30",
            stroke: strokeColor,
            strokeWidth: "5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "62", cy: "30", r: "6", fill: strokeColor }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M20 72H76",
            stroke: strokeColor,
            strokeWidth: "3",
            strokeLinecap: "round",
            opacity: "0.3"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M44 52L44 72",
            stroke: strokeColor,
            strokeWidth: "3",
            strokeLinecap: "round",
            opacity: "0.2"
          }
        )
      ]
    }
  );
};
var Wordmark = ({
  fontSize,
  theme
}) => {
  const primaryColor = theme === "white" ? "#FFFFFF" : theme === "dark" ? "#E8EFED" : "#141F1D";
  const accentColor = theme === "white" ? "rgba(255,255,255,0.7)" : "#00B38A";
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    {
      className: "inline-block",
      style: {
        fontFamily: "var(--font-display, 'Syne', sans-serif)",
        fontWeight: 800,
        fontSize,
        letterSpacing: "-0.04em",
        lineHeight: 1,
        color: primaryColor,
        userSelect: "none"
      },
      children: [
        "Mint",
        /* @__PURE__ */ jsxRuntime.jsx("span", { style: { color: accentColor }, children: "x" })
      ]
    }
  );
};
var MintxLogo = ({
  variant = "full",
  theme = "brand",
  size = "md",
  className,
  style
}) => {
  const markSize = markSizes[size];
  const wordSize = wordmarkSizes[size];
  if (variant === "mark") {
    return /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn("inline-flex items-center shrink-0", className), style, "aria-label": "Mintx", children: /* @__PURE__ */ jsxRuntime.jsx(IconMark, { size: markSize, theme }) });
  }
  if (variant === "wordmark") {
    return /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn("inline-flex items-center shrink-0", className), style, "aria-label": "Mintx", children: /* @__PURE__ */ jsxRuntime.jsx(Wordmark, { fontSize: wordSize, theme }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    {
      className: cn("inline-flex items-center shrink-0", className),
      style: { gap: Math.round(markSize * 0.25), ...style },
      "aria-label": "Mintx",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(IconMark, { size: markSize, theme }),
        /* @__PURE__ */ jsxRuntime.jsx(Wordmark, { fontSize: wordSize, theme })
      ]
    }
  );
};
MintxLogo.displayName = "MintxLogo";
var SunIcon = () => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "12", cy: "12", r: "5" }),
      /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "12", y1: "1", x2: "12", y2: "3" }),
      /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "12", y1: "21", x2: "12", y2: "23" }),
      /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }),
      /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }),
      /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "1", y1: "12", x2: "3", y2: "12" }),
      /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "21", y1: "12", x2: "23", y2: "12" }),
      /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }),
      /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })
    ]
  }
);
var MoonIcon = () => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" })
  }
);
var ThemeToggle = ({
  className,
  showLabel = true
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      className: cn(
        "inline-flex items-center gap-sp-2 font-body text-xs font-medium text-neutral-400 bg-none border border-neutral-200 rounded-full px-sp-3 py-sp-1 cursor-pointer transition-colors duration-120 whitespace-nowrap hover:border-mint-400 hover:text-mint-600 focus-visible:outline-2 focus-visible:outline-mint-400 focus-visible:outline-offset-2",
        className
      ),
      onClick: toggleTheme,
      "aria-label": `Switch to ${isDark ? "light" : "dark"} mode`,
      title: `Switch to ${isDark ? "light" : "dark"} mode`,
      children: [
        isDark ? /* @__PURE__ */ jsxRuntime.jsx(SunIcon, {}) : /* @__PURE__ */ jsxRuntime.jsx(MoonIcon, {}),
        showLabel && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "leading-none", children: isDark ? "Light" : "Dark" })
      ]
    }
  );
};
ThemeToggle.displayName = "ThemeToggle";
var sidebarItemVariants = classVarianceAuthority.cva(
  "flex items-center gap-sp-2 w-full px-sp-2 border-none border-l-2 border-transparent bg-none cursor-pointer font-body text-sm font-medium text-neutral-600 text-left transition-all duration-120 min-h-[36px] relative hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-mint-400 focus-visible:outline-offset-[-2px]",
  {
    variants: {
      isActive: {
        true: "bg-mint-50 text-mint-600 border-l-mint-400 font-semibold dark:bg-mint-400/10"
      },
      collapsed: {
        true: "justify-center px-sp-2 rounded-sm border-l-0"
      },
      depth: {
        0: "",
        1: "text-xs min-h-[30px] pl-sp-3"
      }
    },
    compoundVariants: [
      { collapsed: true, isActive: true, className: "bg-mint-50 dark:bg-mint-400/10" }
    ],
    defaultVariants: {
      isActive: false,
      collapsed: false,
      depth: 0
    }
  }
);
var ChevronRight5 = () => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsxRuntime.jsx("polyline", { points: "9 18 15 12 9 6" })
  }
);
var CollapseIcon = () => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
      /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
      /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
    ]
  }
);
var Sidebar = ({
  sections,
  activeId,
  onNavigate,
  collapsed = false,
  onCollapsedChange,
  footer,
  className
}) => {
  const [expandedIds, setExpandedIds] = React26.useState(/* @__PURE__ */ new Set());
  const toggleExpanded = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };
  const renderItem = (item, depth = 0) => {
    const isActive = item.id === activeId;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedIds.has(item.id);
    return /* @__PURE__ */ jsxRuntime.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(
        "button",
        {
          className: cn(sidebarItemVariants({ isActive, collapsed, depth })),
          onClick: () => {
            if (hasChildren) toggleExpanded(item.id);
            else onNavigate?.(item);
          },
          "aria-current": isActive ? "page" : void 0,
          title: collapsed ? item.label : void 0,
          children: [
            item.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "inline-flex items-center shrink-0 color-inherit w-[18px] h-[18px]", "aria-hidden": "true", children: item.icon }),
            !collapsed && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex-1 overflow-hidden text-ellipsis whitespace-nowrap", children: item.label }),
              item.badge && /* @__PURE__ */ jsxRuntime.jsx(
                "span",
                {
                  className: cn(
                    "text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-mint-50 text-mint-600 shrink-0",
                    item.badgeVariant === "amber" && "bg-amber-100/50 text-amber-600 dark:text-amber-400"
                  ),
                  children: item.badge
                }
              ),
              hasChildren && /* @__PURE__ */ jsxRuntime.jsx(
                "span",
                {
                  className: cn(
                    "inline-flex items-center text-neutral-400 shrink-0 transition-transform duration-200",
                    isExpanded && "rotate-90"
                  ),
                  children: /* @__PURE__ */ jsxRuntime.jsx(ChevronRight5, {})
                }
              )
            ] })
          ]
        }
      ),
      hasChildren && isExpanded && !collapsed && /* @__PURE__ */ jsxRuntime.jsx("ul", { className: "list-none p-0 m-0 pl-sp-4", children: item.children.map((child) => renderItem(child, depth + 1)) })
    ] }, item.id);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "aside",
    {
      className: cn(
        "flex flex-col h-full bg-surface border-r border-neutral-100 overflow-hidden transition-[width] duration-300 ease-out",
        collapsed ? "w-[60px]" : "w-[240px]",
        className
      ),
      "aria-label": "Main navigation",
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn(
          "flex items-center shrink-0 min-h-[56px] border-b border-neutral-100",
          collapsed ? "justify-center px-sp-3 py-sp-4" : "justify-between px-sp-4 py-sp-4"
        ), children: [
          collapsed ? /* @__PURE__ */ jsxRuntime.jsx(MintxLogo, { variant: "mark", size: "sm" }) : /* @__PURE__ */ jsxRuntime.jsx(MintxLogo, { variant: "full", size: "sm" }),
          !collapsed && /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              className: "flex items-center justify-center w-7 h-7 border-none bg-none cursor-pointer text-neutral-400 rounded-sm transition-colors duration-120 hover:bg-neutral-100 hover:text-neutral-900",
              onClick: () => onCollapsedChange?.(!collapsed),
              "aria-label": collapsed ? "Expand sidebar" : "Collapse sidebar",
              children: /* @__PURE__ */ jsxRuntime.jsx(CollapseIcon, {})
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "flex-1 overflow-y-auto overflow-x-hidden py-sp-3 scrollbar-thin scrollbar-thumb-neutral-200", children: sections.map((section, si) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "px-sp-2 pb-sp-3", children: [
          section.label && !collapsed && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "block text-[10px] font-bold uppercase tracking-wider text-neutral-400 px-sp-2 py-sp-1 mt-sp-3", children: section.label }),
          section.label && !collapsed && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-[1px] bg-neutral-100 mx-sp-2 mb-sp-2" }),
          /* @__PURE__ */ jsxRuntime.jsx("ul", { className: "list-none p-0 m-0", children: section.items.map((item) => renderItem(item)) })
        ] }, si)) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(
          "shrink-0 p-sp-4 border-t border-neutral-100 flex items-center",
          collapsed && "justify-center p-sp-3"
        ), children: footer ?? /* @__PURE__ */ jsxRuntime.jsx(ThemeToggle, { showLabel: !collapsed }) })
      ]
    }
  );
};
Sidebar.displayName = "Sidebar";
var BottomNav = ({
  items,
  activeId,
  onNavigate,
  className
}) => /* @__PURE__ */ jsxRuntime.jsx(
  "nav",
  {
    className: cn(
      "fixed bottom-0 left-0 right-0 z-100 bg-surface/90 border-t border-neutral-100 pb-[env(safe-area-inset-bottom,0px)] backdrop-blur-xl dark:bg-[#0D1614]/90",
      className
    ),
    "aria-label": "Mobile navigation",
    role: "navigation",
    children: /* @__PURE__ */ jsxRuntime.jsx("ul", { className: "flex list-none m-0 p-0", children: items.map((item) => {
      const isActive = item.id === activeId;
      return /* @__PURE__ */ jsxRuntime.jsx("li", { className: "flex-1", children: /* @__PURE__ */ jsxRuntime.jsxs(
        "button",
        {
          className: cn(
            "flex flex-col items-center justify-center gap-0.5 w-full p-sp-2 pb-2.5 bg-none border-none cursor-pointer relative text-neutral-400 transition-all duration-120 min-h-[56px] active:scale-92",
            isActive && "text-mint-600 dark:text-mint-400 font-bold"
          ),
          onClick: () => onNavigate?.(item),
          "aria-current": isActive ? "page" : void 0,
          "aria-label": item.label,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn(
              "flex items-center justify-center w-6 h-6 transition-transform duration-200",
              isActive && "-translate-y-[1px]"
            ), "aria-hidden": "true", children: isActive && item.activeIcon ? item.activeIcon : item.icon }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-body text-[10px] leading-none transition-[font-weight] duration-200", children: item.label }),
            isActive && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute top-[6px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-mint-400", "aria-hidden": "true" })
          ]
        }
      ) }, item.id);
    }) })
  }
);
BottomNav.displayName = "BottomNav";
classVarianceAuthority.cva(
  "w-[7px] h-[7px] rounded-full shrink-0",
  {
    variants: {
      color: {
        green: "bg-green-500",
        amber: "bg-amber-500",
        neutral: "bg-neutral-300"
      },
      pulse: {
        true: "animate-pulse-live",
        false: ""
      }
    },
    defaultVariants: {
      color: "neutral",
      pulse: false
    }
  }
);

// src/components/AssetData.ts
var ICONS = [
  {
    "name": "Home",
    "category": "navigation",
    "musrStories": [
      "MUSR-01",
      "MUSR-02"
    ]
  },
  {
    "name": "LayoutDashboard",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "Menu",
    "category": "navigation",
    "musrStories": [
      "MUSR-01",
      "MUSR-02"
    ]
  },
  {
    "name": "X",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "Search",
    "category": "navigation",
    "musrStories": [
      "MUSR-01",
      "MUSR-08",
      "MUSR-16"
    ]
  },
  {
    "name": "Bell",
    "category": "navigation",
    "musrStories": [
      "MUSR-01",
      "MUSR-03"
    ]
  },
  {
    "name": "BellOff",
    "category": "navigation",
    "musrStories": [
      "MUSR-03"
    ]
  },
  {
    "name": "User",
    "category": "navigation",
    "musrStories": [
      "MUSR-01",
      "MUSR-02"
    ]
  },
  {
    "name": "Users",
    "category": "navigation",
    "musrStories": [
      "MUSR-14",
      "MUSR-19"
    ]
  },
  {
    "name": "Settings",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "LogOut",
    "category": "navigation",
    "musrStories": [
      "MUSR-02"
    ]
  },
  {
    "name": "ChevronDown",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "ChevronRight",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "ChevronLeft",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "ArrowLeft",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "ArrowRight",
    "category": "navigation",
    "musrStories": [
      "MUSR-01",
      "MUSR-22"
    ]
  },
  {
    "name": "Slash",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "SlidersHorizontal",
    "category": "navigation",
    "musrStories": [
      "MUSR-16",
      "MUSR-20"
    ]
  },
  {
    "name": "ExternalLink",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "Grid2X2",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "List",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "PanelLeft",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "Compass",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "Bookmark",
    "category": "navigation",
    "musrStories": [
      "MUSR-01",
      "MUSR-05"
    ]
  },
  {
    "name": "MoreHorizontal",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "MoreVertical",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "Pin",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "Maximize2",
    "category": "navigation",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "TrendingUp",
    "category": "market",
    "musrStories": [
      "MUSR-05",
      "MUSR-13",
      "MUSR-16"
    ]
  },
  {
    "name": "TrendingDown",
    "category": "market",
    "musrStories": [
      "MUSR-05",
      "MUSR-13",
      "MUSR-16"
    ]
  },
  {
    "name": "BarChart2",
    "category": "market",
    "musrStories": [
      "MUSR-16",
      "MUSR-17"
    ]
  },
  {
    "name": "BarChart4",
    "category": "market",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "LineChart",
    "category": "market",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "AreaChart",
    "category": "market",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "PieChart",
    "category": "market",
    "musrStories": [
      "MUSR-14"
    ]
  },
  {
    "name": "CandlestickChart",
    "category": "market",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "Activity",
    "category": "market",
    "musrStories": [
      "MUSR-09",
      "MUSR-16"
    ]
  },
  {
    "name": "Percent",
    "category": "market",
    "musrStories": [
      "MUSR-05"
    ]
  },
  {
    "name": "IndianRupee",
    "category": "market",
    "musrStories": [
      "MUSR-04",
      "MUSR-06",
      "MUSR-13"
    ]
  },
  {
    "name": "DollarSign",
    "category": "market",
    "musrStories": [
      "MUSR-04"
    ]
  },
  {
    "name": "ArrowUpRight",
    "category": "market",
    "musrStories": [
      "MUSR-13",
      "MUSR-05"
    ]
  },
  {
    "name": "ArrowDownRight",
    "category": "market",
    "musrStories": [
      "MUSR-13",
      "MUSR-05"
    ]
  },
  {
    "name": "Minus",
    "category": "market",
    "musrStories": [
      "MUSR-05"
    ]
  },
  {
    "name": "Wallet",
    "category": "market",
    "musrStories": [
      "MUSR-04",
      "MUSR-06"
    ]
  },
  {
    "name": "Briefcase",
    "category": "market",
    "musrStories": [
      "MUSR-14"
    ]
  },
  {
    "name": "Building2",
    "category": "market",
    "musrStories": [
      "MUSR-13",
      "MUSR-17"
    ]
  },
  {
    "name": "Scale",
    "category": "market",
    "musrStories": [
      "MUSR-13"
    ]
  },
  {
    "name": "Layers",
    "category": "market",
    "musrStories": [
      "MUSR-17"
    ]
  },
  {
    "name": "Zap",
    "category": "market",
    "musrStories": [
      "MUSR-03",
      "MUSR-20"
    ]
  },
  {
    "name": "Target",
    "category": "market",
    "musrStories": [
      "MUSR-05",
      "MUSR-14"
    ]
  },
  {
    "name": "Eye",
    "category": "market",
    "musrStories": [
      "MUSR-02"
    ]
  },
  {
    "name": "EyeOff",
    "category": "market",
    "musrStories": [
      "MUSR-02"
    ]
  },
  {
    "name": "Star",
    "category": "market",
    "musrStories": [
      "MUSR-05"
    ]
  },
  {
    "name": "Clock",
    "category": "market",
    "musrStories": [
      "MUSR-01",
      "MUSR-08"
    ]
  },
  {
    "name": "Calendar",
    "category": "market",
    "musrStories": [
      "MUSR-05",
      "MUSR-08"
    ]
  },
  {
    "name": "Globe",
    "category": "market",
    "musrStories": [
      "MUSR-08",
      "MUSR-17"
    ]
  },
  {
    "name": "Newspaper",
    "category": "market",
    "musrStories": [
      "MUSR-05"
    ]
  },
  {
    "name": "Hash",
    "category": "market",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "Gauge",
    "category": "market",
    "musrStories": [
      "MUSR-09"
    ]
  },
  {
    "name": "Plus",
    "category": "action",
    "musrStories": [
      "MUSR-01",
      "MUSR-04"
    ]
  },
  {
    "name": "Pencil",
    "category": "action",
    "musrStories": [
      "MUSR-01",
      "MUSR-08"
    ]
  },
  {
    "name": "Trash2",
    "category": "action",
    "musrStories": [
      "MUSR-01",
      "MUSR-21"
    ]
  },
  {
    "name": "Save",
    "category": "action",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "Copy",
    "category": "action",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "Download",
    "category": "action",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "Upload",
    "category": "action",
    "musrStories": [
      "MUSR-08"
    ]
  },
  {
    "name": "Share2",
    "category": "action",
    "musrStories": [
      "MUSR-21"
    ]
  },
  {
    "name": "RefreshCw",
    "category": "action",
    "musrStories": [
      "MUSR-08",
      "MUSR-09"
    ]
  },
  {
    "name": "Filter",
    "category": "action",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "SortAsc",
    "category": "action",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "QrCode",
    "category": "action",
    "musrStories": [
      "MUSR-21"
    ]
  },
  {
    "name": "Link2",
    "category": "action",
    "musrStories": [
      "MUSR-08",
      "MUSR-21"
    ]
  },
  {
    "name": "Send",
    "category": "action",
    "musrStories": [
      "MUSR-03",
      "MUSR-19"
    ]
  },
  {
    "name": "Mail",
    "category": "action",
    "musrStories": [
      "MUSR-02"
    ]
  },
  {
    "name": "MessageSquare",
    "category": "action",
    "musrStories": [
      "MUSR-03"
    ]
  },
  {
    "name": "Phone",
    "category": "action",
    "musrStories": [
      "MUSR-03"
    ]
  },
  {
    "name": "FileText",
    "category": "action",
    "musrStories": [
      "MUSR-14"
    ]
  },
  {
    "name": "Clipboard",
    "category": "action",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "Printer",
    "category": "action",
    "musrStories": [
      "MUSR-14"
    ]
  },
  {
    "name": "Maximize",
    "category": "action",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "Minimize2",
    "category": "action",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "RotateCcw",
    "category": "action",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "ZoomIn",
    "category": "action",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "ZoomOut",
    "category": "action",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "Gift",
    "category": "action",
    "musrStories": [
      "MUSR-21"
    ]
  },
  {
    "name": "Tag",
    "category": "action",
    "musrStories": [
      "MUSR-04",
      "MUSR-21"
    ]
  },
  {
    "name": "Sparkles",
    "category": "action",
    "musrStories": [
      "MUSR-22"
    ]
  },
  {
    "name": "Wand2",
    "category": "action",
    "musrStories": [
      "MUSR-20"
    ]
  },
  {
    "name": "Play",
    "category": "action",
    "musrStories": [
      "MUSR-15"
    ]
  },
  {
    "name": "CheckCircle2",
    "category": "status",
    "musrStories": [
      "MUSR-09",
      "MUSR-12",
      "MUSR-22"
    ]
  },
  {
    "name": "XCircle",
    "category": "status",
    "musrStories": [
      "MUSR-09",
      "MUSR-12"
    ]
  },
  {
    "name": "AlertTriangle",
    "category": "status",
    "musrStories": [
      "MUSR-03",
      "MUSR-09"
    ]
  },
  {
    "name": "AlertCircle",
    "category": "status",
    "musrStories": [
      "MUSR-03",
      "MUSR-09"
    ]
  },
  {
    "name": "Info",
    "category": "status",
    "musrStories": [
      "MUSR-03"
    ]
  },
  {
    "name": "Loader2",
    "category": "status",
    "musrStories": [
      "MUSR-09",
      "MUSR-05"
    ]
  },
  {
    "name": "CheckCheck",
    "category": "status",
    "musrStories": [
      "MUSR-04",
      "MUSR-22"
    ]
  },
  {
    "name": "Check",
    "category": "status",
    "musrStories": [
      "MUSR-04"
    ]
  },
  {
    "name": "Ban",
    "category": "status",
    "musrStories": [
      "MUSR-12"
    ]
  },
  {
    "name": "Wifi",
    "category": "status",
    "musrStories": [
      "MUSR-18"
    ]
  },
  {
    "name": "WifiOff",
    "category": "status",
    "musrStories": [
      "MUSR-18"
    ]
  },
  {
    "name": "Signal",
    "category": "status",
    "musrStories": [
      "MUSR-09"
    ]
  },
  {
    "name": "ShieldCheck",
    "category": "status",
    "musrStories": [
      "MUSR-02",
      "MUSR-12"
    ]
  },
  {
    "name": "Lock",
    "category": "status",
    "musrStories": [
      "MUSR-02",
      "MUSR-04"
    ]
  },
  {
    "name": "Unlock",
    "category": "status",
    "musrStories": [
      "MUSR-02"
    ]
  },
  {
    "name": "Crown",
    "category": "status",
    "musrStories": [
      "MUSR-04"
    ]
  },
  {
    "name": "Trophy",
    "category": "status",
    "musrStories": [
      "MUSR-11"
    ]
  },
  {
    "name": "Flame",
    "category": "status",
    "musrStories": [
      "MUSR-11"
    ]
  },
  {
    "name": "BadgeCheck",
    "category": "status",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "Circle",
    "category": "status",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "CircleDot",
    "category": "status",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "Clock3",
    "category": "status",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "HeartPulse",
    "category": "status",
    "musrStories": [
      "MUSR-09"
    ]
  },
  {
    "name": "Hourglass",
    "category": "status",
    "musrStories": [
      "MUSR-09"
    ]
  },
  {
    "name": "Heart",
    "category": "social",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "ThumbsUp",
    "category": "social",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "ThumbsDown",
    "category": "social",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "MessageCircle",
    "category": "social",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "UserPlus",
    "category": "social",
    "musrStories": [
      "MUSR-21",
      "MUSR-22"
    ]
  },
  {
    "name": "UserCheck",
    "category": "social",
    "musrStories": [
      "MUSR-21"
    ]
  },
  {
    "name": "AtSign",
    "category": "social",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "MessagesSquare",
    "category": "social",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "Repeat2",
    "category": "social",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "Quote",
    "category": "social",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "Award",
    "category": "social",
    "musrStories": [
      "MUSR-11",
      "MUSR-19"
    ]
  },
  {
    "name": "Milestone",
    "category": "social",
    "musrStories": [
      "MUSR-22"
    ]
  },
  {
    "name": "Rocket",
    "category": "social",
    "musrStories": [
      "MUSR-20"
    ]
  },
  {
    "name": "Handshake",
    "category": "social",
    "musrStories": [
      "MUSR-21"
    ]
  },
  {
    "name": "Network",
    "category": "social",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "Podcast",
    "category": "social",
    "musrStories": [
      "MUSR-15"
    ]
  },
  {
    "name": "Video",
    "category": "social",
    "musrStories": [
      "MUSR-15",
      "MUSR-19"
    ]
  },
  {
    "name": "Megaphone",
    "category": "social",
    "musrStories": [
      "MUSR-03",
      "MUSR-19"
    ]
  },
  {
    "name": "Contact",
    "category": "social",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "Group",
    "category": "social",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "Rss",
    "category": "social",
    "musrStories": [
      "MUSR-05",
      "MUSR-08"
    ]
  },
  {
    "name": "Smile",
    "category": "social",
    "musrStories": [
      "MUSR-22"
    ]
  },
  {
    "name": "Smartphone",
    "category": "device",
    "musrStories": [
      "MUSR-11",
      "MUSR-18"
    ]
  },
  {
    "name": "Monitor",
    "category": "device",
    "musrStories": [
      "MUSR-18"
    ]
  },
  {
    "name": "Tablet",
    "category": "device",
    "musrStories": [
      "MUSR-18"
    ]
  },
  {
    "name": "Laptop",
    "category": "device",
    "musrStories": [
      "MUSR-18"
    ]
  },
  {
    "name": "Cloud",
    "category": "device",
    "musrStories": [
      "MUSR-11",
      "MUSR-18"
    ]
  },
  {
    "name": "CloudDownload",
    "category": "device",
    "musrStories": [
      "MUSR-11"
    ]
  },
  {
    "name": "HardDrive",
    "category": "device",
    "musrStories": [
      "MUSR-09"
    ]
  },
  {
    "name": "Server",
    "category": "device",
    "musrStories": [
      "MUSR-09"
    ]
  },
  {
    "name": "Cpu",
    "category": "device",
    "musrStories": [
      "MUSR-09"
    ]
  },
  {
    "name": "Database",
    "category": "device",
    "musrStories": [
      "MUSR-08",
      "MUSR-09"
    ]
  },
  {
    "name": "Fingerprint",
    "category": "device",
    "musrStories": [
      "MUSR-02"
    ]
  },
  {
    "name": "BatteryMedium",
    "category": "device",
    "musrStories": [
      "MUSR-11"
    ]
  },
  {
    "name": "Power",
    "category": "device",
    "musrStories": [
      "MUSR-18"
    ]
  },
  {
    "name": "Vibrate",
    "category": "device",
    "musrStories": [
      "MUSR-11"
    ]
  },
  {
    "name": "Volume2",
    "category": "device",
    "musrStories": [
      "MUSR-11"
    ]
  },
  {
    "name": "Bluetooth",
    "category": "device",
    "musrStories": [
      "MUSR-18"
    ]
  },
  {
    "name": "Cast",
    "category": "device",
    "musrStories": [
      "MUSR-18"
    ]
  },
  {
    "name": "ToggleLeft",
    "category": "device",
    "musrStories": [
      "MUSR-20"
    ]
  },
  {
    "name": "CreditCard",
    "category": "finance",
    "musrStories": [
      "MUSR-04",
      "MUSR-06"
    ]
  },
  {
    "name": "Banknote",
    "category": "finance",
    "musrStories": [
      "MUSR-04",
      "MUSR-06"
    ]
  },
  {
    "name": "Landmark",
    "category": "finance",
    "musrStories": [
      "MUSR-14"
    ]
  },
  {
    "name": "PiggyBank",
    "category": "finance",
    "musrStories": [
      "MUSR-06"
    ]
  },
  {
    "name": "Receipt",
    "category": "finance",
    "musrStories": [
      "MUSR-04",
      "MUSR-06"
    ]
  },
  {
    "name": "TrendingUpDown",
    "category": "finance",
    "musrStories": [
      "MUSR-05",
      "MUSR-16"
    ]
  },
  {
    "name": "CircleDollarSign",
    "category": "finance",
    "musrStories": [
      "MUSR-04"
    ]
  },
  {
    "name": "Sigma",
    "category": "finance",
    "musrStories": [
      "MUSR-16",
      "MUSR-17"
    ]
  },
  {
    "name": "Calculator",
    "category": "finance",
    "musrStories": [
      "MUSR-06"
    ]
  },
  {
    "name": "ListOrdered",
    "category": "finance",
    "musrStories": [
      "MUSR-13"
    ]
  },
  {
    "name": "Presentation",
    "category": "finance",
    "musrStories": [
      "MUSR-14"
    ]
  },
  {
    "name": "TableProperties",
    "category": "finance",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "CirclePercent",
    "category": "finance",
    "musrStories": [
      "MUSR-17"
    ]
  },
  {
    "name": "ArrowUpDown",
    "category": "finance",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "GitCompare",
    "category": "finance",
    "musrStories": [
      "MUSR-20"
    ]
  },
  {
    "name": "FileSpreadsheet",
    "category": "finance",
    "musrStories": [
      "MUSR-14"
    ]
  },
  {
    "name": "Split",
    "category": "finance",
    "musrStories": [
      "MUSR-06"
    ]
  },
  {
    "name": "FolderOpen",
    "category": "finance",
    "musrStories": [
      "MUSR-14"
    ]
  },
  {
    "name": "GraduationCap",
    "category": "academy",
    "musrStories": [
      "MUSR-15",
      "MUSR-22"
    ]
  },
  {
    "name": "BookOpen",
    "category": "academy",
    "musrStories": [
      "MUSR-15"
    ]
  },
  {
    "name": "BookMarked",
    "category": "academy",
    "musrStories": [
      "MUSR-15"
    ]
  },
  {
    "name": "Brain",
    "category": "academy",
    "musrStories": [
      "MUSR-15",
      "MUSR-22"
    ]
  },
  {
    "name": "Lightbulb",
    "category": "academy",
    "musrStories": [
      "MUSR-15"
    ]
  },
  {
    "name": "PencilLine",
    "category": "academy",
    "musrStories": [
      "MUSR-15"
    ]
  },
  {
    "name": "FlaskConical",
    "category": "academy",
    "musrStories": [
      "MUSR-15"
    ]
  },
  {
    "name": "GalleryVerticalEnd",
    "category": "academy",
    "musrStories": [
      "MUSR-15"
    ]
  },
  {
    "name": "ScrollText",
    "category": "academy",
    "musrStories": [
      "MUSR-15"
    ]
  },
  {
    "name": "CirclePlay",
    "category": "academy",
    "musrStories": [
      "MUSR-15"
    ]
  },
  {
    "name": "Medal",
    "category": "academy",
    "musrStories": [
      "MUSR-11",
      "MUSR-15"
    ]
  },
  {
    "name": "Microscope",
    "category": "academy",
    "musrStories": [
      "MUSR-15"
    ]
  }
];
var ILLUSTRATIONS = [
  // ── Empty States ──────────────────────────────────────────────────────────
  {
    id: "svg-empty-watchlist",
    name: "Empty Watchlist",
    use: "Watchlist page \u2014 no stocks added yet",
    category: "empty-state",
    musrStories: ["MUSR-01"],
    tags: ["watchlist", "empty"]
  },
  {
    id: "svg-empty-portfolio",
    name: "Empty Portfolio",
    use: "Portfolio tracker \u2014 no positions logged",
    category: "empty-state",
    musrStories: ["MUSR-01"],
    tags: ["portfolio", "empty"]
  },
  {
    id: "svg-empty-feed",
    name: "Empty Feed",
    use: "Home feed / news \u2014 no items yet",
    category: "empty-state",
    musrStories: ["MUSR-05"],
    tags: ["feed", "news", "empty"]
  },
  {
    id: "svg-empty-notifs",
    name: "No Notifications",
    use: "Notification centre \u2014 all read / none",
    category: "empty-state",
    musrStories: ["MUSR-03"],
    tags: ["notifications", "empty"]
  },
  {
    id: "svg-empty-search",
    name: "No Search Results",
    use: "Screener / search \u2014 no matches found",
    category: "empty-state",
    musrStories: ["MUSR-16"],
    tags: ["search", "screener", "empty"]
  },
  {
    id: "svg-empty-community",
    name: "Empty Community",
    use: "Community / forum \u2014 no posts yet",
    category: "empty-state",
    musrStories: ["MUSR-19"],
    tags: ["community", "empty"]
  },
  // ── Onboarding Steps ──────────────────────────────────────────────────────
  {
    id: "svg-onboard-welcome",
    name: "Welcome",
    use: "Onboarding step 1 \u2014 Introduction",
    category: "onboarding",
    musrStories: ["MUSR-22"],
    tags: ["onboarding", "welcome"]
  },
  {
    id: "svg-onboard-experience",
    name: "Experience Level",
    use: "Onboarding step 2 \u2014 Personalisation",
    category: "onboarding",
    musrStories: ["MUSR-22"],
    tags: ["onboarding", "experience"]
  },
  {
    id: "svg-onboard-goals",
    name: "Set Goals",
    use: "Onboarding step 3 \u2014 Goal selection",
    category: "onboarding",
    musrStories: ["MUSR-22"],
    tags: ["onboarding", "goals"]
  },
  {
    id: "svg-onboard-ready",
    name: "All Set!",
    use: "Onboarding step 4 \u2014 Completion",
    category: "onboarding",
    musrStories: ["MUSR-22"],
    tags: ["onboarding", "complete"]
  },
  // ── Pro Upgrade ───────────────────────────────────────────────────────────
  {
    id: "svg-pro-locked",
    name: "Pro Feature Gate",
    use: "Feature locked \u2014 upgrade prompt",
    category: "pro-upgrade",
    musrStories: ["MUSR-04"],
    tags: ["pro", "locked", "upgrade"]
  },
  {
    id: "svg-pro-rocket",
    name: "Upgrade \u2014 Analytics",
    use: "Advanced analytics Pro upsell",
    category: "pro-upgrade",
    musrStories: ["MUSR-04", "MUSR-16"],
    tags: ["pro", "analytics", "upgrade"]
  },
  {
    id: "svg-pro-crown",
    name: "Pro Plan Card",
    use: "Pricing page \u2014 Pro tier visual",
    category: "pro-upgrade",
    musrStories: ["MUSR-04"],
    tags: ["pro", "pricing", "crown"]
  },
  // ── Error States ──────────────────────────────────────────────────────────
  {
    id: "svg-404",
    name: "404 Not Found",
    use: "Page / route missing",
    category: "error",
    musrStories: [],
    tags: ["error", "404"]
  },
  {
    id: "svg-500",
    name: "Server Error 500",
    use: "API failure / server down",
    category: "error",
    musrStories: ["MUSR-09"],
    tags: ["error", "500", "server"]
  },
  {
    id: "svg-offline",
    name: "No Internet",
    use: "Offline / connection lost",
    category: "error",
    musrStories: ["MUSR-18"],
    tags: ["error", "offline"]
  },
  {
    id: "svg-session",
    name: "Session Expired",
    use: "Auth token expired \u2014 re-login",
    category: "error",
    musrStories: ["MUSR-02"],
    tags: ["error", "session", "auth"]
  },
  // ── Market Status ─────────────────────────────────────────────────────────
  {
    id: "svg-market-closed",
    name: "Market Closed",
    use: "Weekend / holiday \u2014 dashboard header",
    category: "market-status",
    musrStories: ["MUSR-05"],
    tags: ["market", "closed", "weekend"]
  },
  {
    id: "svg-pre-open",
    name: "Pre-Open Session",
    use: "Pre-market 9:00\u20139:15 AM",
    category: "market-status",
    musrStories: ["MUSR-05"],
    tags: ["market", "pre-open"]
  },
  {
    id: "svg-loading-data",
    name: "Loading Market Data",
    use: "Chart skeleton / data fetch",
    category: "market-status",
    musrStories: ["MUSR-16"],
    tags: ["loading", "market", "chart"]
  },
  // ── Success & Celebration ─────────────────────────────────────────────────
  {
    id: "svg-payment-success",
    name: "Payment Success",
    use: "Pro subscription activated",
    category: "success",
    musrStories: ["MUSR-04"],
    tags: ["success", "payment", "pro"]
  },
  {
    id: "svg-referral-earned",
    name: "Referral Earned",
    use: "Credit added after referral",
    category: "success",
    musrStories: ["MUSR-21"],
    tags: ["success", "referral", "credit"]
  },
  {
    id: "svg-module-complete",
    name: "Module Completed",
    use: "Academy module finished",
    category: "success",
    musrStories: ["MUSR-15"],
    tags: ["success", "academy", "module"]
  },
  {
    id: "svg-streak-done",
    name: "Streak Milestone",
    use: "Daily streak achievement",
    category: "success",
    musrStories: ["MUSR-11"],
    tags: ["success", "streak", "gamification"]
  },
  // ── Academy ───────────────────────────────────────────────────────────────
  {
    id: "svg-course-fundamentals",
    name: "Investment Fundamentals",
    use: "Course thumbnail \u2014 beginner",
    category: "academy",
    musrStories: ["MUSR-15"],
    tags: ["academy", "course", "beginner"]
  },
  {
    id: "svg-course-fibonacci",
    name: "Fibonacci Mastery",
    use: "Course thumbnail \u2014 intermediate",
    category: "academy",
    musrStories: ["MUSR-15"],
    tags: ["academy", "course", "fibonacci"]
  },
  {
    id: "svg-course-ipo",
    name: "IPO Analysis",
    use: "Course thumbnail \u2014 advanced",
    category: "academy",
    musrStories: ["MUSR-15"],
    tags: ["academy", "course", "ipo"]
  },
  {
    id: "svg-quiz-correct",
    name: "Quiz Correct",
    use: "Quiz answer \u2014 correct feedback (+XP)",
    category: "academy",
    musrStories: ["MUSR-11", "MUSR-15"],
    tags: ["academy", "quiz", "gamification"]
  },
  // ── Social Moments ────────────────────────────────────────────────────────
  {
    id: "svg-first-post",
    name: "First Post",
    use: "Community \u2014 first contribution",
    category: "social",
    musrStories: ["MUSR-19"],
    tags: ["social", "community", "first"]
  },
  {
    id: "svg-verified",
    name: "Verified Analyst",
    use: "Community badge \u2014 expert status",
    category: "social",
    musrStories: ["MUSR-19"],
    tags: ["social", "verified", "badge"]
  },
  {
    id: "svg-ambassador",
    name: "Ambassador Badge",
    use: "Referral tier 4 \u2014 25+ referrals",
    category: "social",
    musrStories: ["MUSR-21"],
    tags: ["social", "ambassador", "referral"]
  }
];
var SVGS = {
  "svg-empty-watchlist": '<svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <circle cx="80" cy="80" r="60" fill="#E6FBF5" opacity="0.8"/>\n          <rect x="44" y="52" width="72" height="56" rx="8" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <line x1="55" y1="68" x2="105" y2="68" stroke="rgba(232,239,237,0.12)" stroke-width="2" stroke-linecap="round"/>\n          <line x1="55" y1="80" x2="95" y2="80" stroke="rgba(232,239,237,0.12)" stroke-width="2" stroke-linecap="round"/>\n          <line x1="55" y1="92" x2="88" y2="92" stroke="rgba(232,239,237,0.12)" stroke-width="2" stroke-linecap="round"/>\n          <circle cx="108" cy="98" r="18" fill="#10C9A0"/>\n          <line x1="108" y1="91" x2="108" y2="105" stroke="#001A13" stroke-width="2.5" stroke-linecap="round"/>\n          <line x1="101" y1="98" x2="115" y2="98" stroke="#001A13" stroke-width="2.5" stroke-linecap="round"/>\n          <path d="M62 60 L66 56 L70 60" stroke="#10C9A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>\n        </svg>',
  "svg-empty-portfolio": '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="60" fill="#E6FBF5" opacity="0.6"/>\n          <rect x="48" y="60" width="64" height="48" rx="8" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <rect x="48" y="60" width="64" height="14" rx="8" fill="#E6FBF5"/>\n          <rect x="48" y="67" width="64" height="7" rx="0" fill="#E6FBF5"/>\n          <path d="M56 88 L66 76 L76 82 L88 70 L98 74" stroke="rgba(232,239,237,0.12)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n          <circle cx="56" cy="88" r="2.5" fill="#5A706A"/>\n          <circle cx="66" cy="76" r="2.5" fill="#5A706A"/>\n          <circle cx="88" cy="70" r="2.5" fill="#10C9A0"/>\n          <text x="80" y="75" font-family="DM Sans" font-size="8" fill="#5A706A" text-anchor="middle">No positions yet</text>\n          <circle cx="106" cy="102" r="16" fill="#10C9A0"/>\n          <line x1="106" y1="96" x2="106" y2="108" stroke="#001A13" stroke-width="2.5" stroke-linecap="round"/>\n          <line x1="100" y1="102" x2="112" y2="102" stroke="#001A13" stroke-width="2.5" stroke-linecap="round"/>\n        </svg>',
  "svg-empty-feed": '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="60" fill="rgba(59,130,246,.07)"/>\n          <rect x="40" y="46" width="80" height="22" rx="6" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <rect x="40" y="76" width="80" height="22" rx="6" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <rect x="40" y="106" width="80" height="22" rx="6" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <circle cx="50" cy="57" r="5" fill="rgba(232,239,237,0.12)"/>\n          <rect x="60" y="53" width="40" height="4" rx="2" fill="rgba(232,239,237,0.12)"/>\n          <rect x="60" y="59" width="25" height="3" rx="1.5" fill="rgba(232,239,237,0.06)"/>\n          <circle cx="50" cy="87" r="5" fill="rgba(232,239,237,0.12)"/>\n          <rect x="60" y="83" width="35" height="4" rx="2" fill="rgba(232,239,237,0.12)"/>\n          <rect x="60" y="89" width="20" height="3" rx="1.5" fill="rgba(232,239,237,0.06)"/>\n          <circle cx="50" cy="117" r="5" fill="rgba(232,239,237,0.12)"/>\n          <rect x="60" y="113" width="45" height="4" rx="2" fill="rgba(232,239,237,0.12)"/>\n          <rect x="60" y="119" width="28" height="3" rx="1.5" fill="rgba(232,239,237,0.06)"/>\n          <circle cx="112" cy="68" r="14" fill="#10C9A0"/>\n          <line x1="112" y1="63" x2="112" y2="73" stroke="#001A13" stroke-width="2.5" stroke-linecap="round"/>\n          <line x1="107" y1="68" x2="117" y2="68" stroke="#001A13" stroke-width="2.5" stroke-linecap="round"/>\n        </svg>',
  "svg-empty-notifs": '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="60" fill="rgba(245,158,11,.07)"/>\n          <path d="M64 68a16 16 0 0 1 32 0c0 18 8 24 8 24H56s8-6 8-24z" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <path d="M74 92a6 6 0 0 0 12 0" fill="none" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <circle cx="80" cy="68" r="3" fill="#FBBF24" opacity="0.4"/>\n          <line x1="68" y1="54" x2="92" y2="54" stroke="rgba(232,239,237,0.06)" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3 2"/>\n          <path d="M72 110 L80 124 L88 110" stroke="#10C9A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>\n          <text x="80" y="138" font-family="DM Sans" font-size="9" fill="#5A706A" text-anchor="middle">All caught up!</text>\n        </svg>',
  "svg-empty-search": '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="60" fill="rgba(232,239,237,0.06)"/>\n          <circle cx="74" cy="74" r="26" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="2"/>\n          <line x1="93" y1="93" x2="110" y2="110" stroke="rgba(232,239,237,0.12)" stroke-width="3.5" stroke-linecap="round"/>\n          <path d="M66 74 Q72 66 80 70" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round" fill="none"/>\n          <text x="74" y="81" font-family="DM Sans" font-size="14" fill="rgba(232,239,237,0.12)" text-anchor="middle">?</text>\n          <circle cx="110" cy="110" r="8" fill="rgba(232,239,237,0.12)" opacity="0.4"/>\n        </svg>',
  "svg-empty-community": '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="60" fill="rgba(139,92,246,.07)"/>\n          <circle cx="58" cy="72" r="14" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <circle cx="102" cy="72" r="14" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <circle cx="80" cy="66" r="16" fill="#0D1614" stroke="#10C9A0" stroke-width="1.5"/>\n          <path d="M44 100 Q44 90 58 90 Q64 90 70 93" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round" fill="none"/>\n          <path d="M116 100 Q116 90 102 90 Q96 90 90 93" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round" fill="none"/>\n          <path d="M64 94 Q64 82 80 82 Q96 82 96 94" stroke="#10C9A0" stroke-width="1.5" stroke-linecap="round" fill="none"/>\n          <circle cx="80" cy="60" r="5" fill="#E6FBF5"/>\n          <line x1="80" y1="57" x2="80" y2="63" stroke="#10C9A0" stroke-width="1.5" stroke-linecap="round"/>\n          <line x1="77" y1="60" x2="83" y2="60" stroke="#10C9A0" stroke-width="1.5" stroke-linecap="round"/>\n        </svg>',
  "svg-onboard-welcome": '<svg width="140" height="140" viewBox="0 0 140 140" fill="none">\n          <circle cx="70" cy="70" r="55" fill="#E6FBF5"/>\n          <circle cx="70" cy="58" r="20" fill="#10C9A0" opacity="0.9"/>\n          <path d="M50 95 Q50 78 70 78 Q90 78 90 95" fill="#10C9A0" opacity="0.7"/>\n          <path d="M38 62 L46 58 L38 54" stroke="#3DDCBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>\n          <path d="M102 62 L94 58 L102 54" stroke="#3DDCBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>\n          <circle cx="64" cy="55" r="2" fill="#001A13" opacity="0.7"/>\n          <circle cx="76" cy="55" r="2" fill="#001A13" opacity="0.7"/>\n          <path d="M65 65 Q70 70 75 65" stroke="#001A13" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.7"/>\n          <text x="70" y="118" font-family="DM Sans" font-size="10" font-weight="600" fill="#006B52" text-anchor="middle">Welcome!</text>\n        </svg>',
  "svg-onboard-experience": '<svg width="140" height="140" viewBox="0 0 140 140" fill="none">\n          <circle cx="70" cy="70" r="55" fill="rgba(59,130,246,.07)"/>\n          <rect x="30" y="52" width="80" height="56" rx="10" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <rect x="38" y="64" width="64" height="12" rx="6" fill="#E6FBF5" stroke="#10C9A0" stroke-width="1"/>\n          <rect x="38" y="82" width="64" height="12" rx="6" fill="rgba(232,239,237,0.06)" stroke="rgba(232,239,237,0.12)" stroke-width="1"/>\n          <rect x="38" y="100" width="64" height="12" rx="6" fill="rgba(232,239,237,0.06)" stroke="rgba(232,239,237,0.12)" stroke-width="1"/>\n          <circle cx="44" cy="70" r="3" fill="#10C9A0"/>\n          <text x="52" y="73" font-family="DM Sans" font-size="7" fill="#006B52">Complete beginner</text>\n          <circle cx="44" cy="88" r="3" fill="rgba(232,239,237,0.12)"/>\n          <text x="52" y="91" font-family="DM Sans" font-size="7" fill="#5A706A">Some knowledge</text>\n          <circle cx="44" cy="106" r="3" fill="rgba(232,239,237,0.12)"/>\n          <text x="52" y="109" font-family="DM Sans" font-size="7" fill="#5A706A">Experienced</text>\n        </svg>',
  "svg-onboard-goals": '<svg width="140" height="140" viewBox="0 0 140 140" fill="none">\n          <circle cx="70" cy="70" r="55" fill="rgba(245,158,11,.07)"/>\n          <circle cx="70" cy="70" r="32" fill="none" stroke="rgba(232,239,237,0.12)" stroke-width="2"/>\n          <circle cx="70" cy="70" r="22" fill="none" stroke="rgba(232,239,237,0.12)" stroke-width="2"/>\n          <circle cx="70" cy="70" r="12" fill="none" stroke="#10C9A0" stroke-width="2.5"/>\n          <circle cx="70" cy="70" r="4" fill="#10C9A0"/>\n          <line x1="70" y1="38" x2="70" y2="45" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round"/>\n          <line x1="70" y1="95" x2="70" y2="102" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round"/>\n          <line x1="38" y1="70" x2="45" y2="70" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round"/>\n          <line x1="95" y1="70" x2="102" y2="70" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round"/>\n          <path d="M102 45 L74 70" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>\n          <circle cx="102" cy="45" r="4" fill="#FBBF24"/>\n          <text x="70" y="118" font-family="DM Sans" font-size="9" font-weight="600" fill="#9BACA6" text-anchor="middle">Set your goals</text>\n        </svg>',
  "svg-onboard-ready": `<svg width="140" height="140" viewBox="0 0 140 140" fill="none">
          <circle cx="70" cy="70" r="55" fill="#E6FBF5"/>
          <circle cx="70" cy="70" r="32" fill="#10C9A0" opacity="0.9"/>
          <path d="M52 70 L65 83 L88 58" stroke="#001A13" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <!-- Sparkles -->
          <line x1="32" y1="32" x2="32" y2="42" stroke="#10C9A0" stroke-width="2" stroke-linecap="round"/>
          <line x1="27" y1="37" x2="37" y2="37" stroke="#10C9A0" stroke-width="2" stroke-linecap="round"/>
          <line x1="108" y1="28" x2="108" y2="36" stroke="#3DDCBA" stroke-width="2" stroke-linecap="round"/>
          <line x1="104" y1="32" x2="112" y2="32" stroke="#3DDCBA" stroke-width="2" stroke-linecap="round"/>
          <line x1="118" y1="95" x2="118" y2="101" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>
          <line x1="115" y1="98" x2="121" y2="98" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>
          <text x="70" y="118" font-family="DM Sans" font-size="10" font-weight="700" fill="#006B52" text-anchor="middle">You're all set! \u{1F389}</text>
        </svg>`,
  "svg-pro-locked": '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="55" fill="rgba(0,179,138,.1)"/>\n          <rect x="56" y="74" width="48" height="38" rx="8" fill="rgba(0,179,138,.15)" stroke="rgba(0,179,138,.4)" stroke-width="1.5"/>\n          <path d="M66 74 L66 64 Q66 52 80 52 Q94 52 94 64 L94 74" fill="none" stroke="rgba(0,179,138,.5)" stroke-width="2.5" stroke-linecap="round"/>\n          <rect x="72" y="88" width="16" height="14" rx="4" fill="#10C9A0" opacity="0.9"/>\n          <line x1="80" y1="92" x2="80" y2="98" stroke="#001A13" stroke-width="2.5" stroke-linecap="round"/>\n          <!-- Crown -->\n          <path d="M62 46 L70 56 L80 44 L90 56 L98 46 L96 62 L64 62 Z" fill="#FBBF24" opacity="0.9"/>\n          <circle cx="80" cy="44" r="3" fill="#FBBF24"/>\n          <circle cx="62" cy="46" r="2.5" fill="#FBBF24"/>\n          <circle cx="98" cy="46" r="2.5" fill="#FBBF24"/>\n          <text x="80" y="126" font-family="DM Sans" font-size="10" font-weight="600" fill="#3DDCBA" text-anchor="middle">Pro Feature</text>\n        </svg>',
  "svg-pro-rocket": '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="55" fill="rgba(0,179,138,.08)"/>\n          <!-- Chart going up -->\n          <path d="M36 110 L52 92 L68 98 L84 74 L100 66 L116 48" stroke="rgba(0,179,138,.4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n          <path d="M36 110 L52 92 L68 98 L84 74 L100 66 L116 48 L116 110 Z" fill="rgba(0,179,138,.08)"/>\n          <!-- Rocket -->\n          <path d="M80 54 Q88 44 96 42 Q98 50 94 58 L86 66 Z" fill="#10C9A0" opacity="0.9"/>\n          <circle cx="84" cy="60" r="5" fill="#001A13" opacity="0.4"/>\n          <path d="M80 54 L72 70 L80 66 L86 66 Z" fill="#006B52"/>\n          <path d="M86 66 L94 72 L94 58" fill="#3DDCBA" opacity="0.6"/>\n          <path d="M76 66 Q72 74 74 80" stroke="#FBBF24" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.7"/>\n          <path d="M80 68 Q76 76 78 82" stroke="#FBBF24" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.5"/>\n          <text x="80" y="122" font-family="DM Sans" font-size="10" font-weight="600" fill="#3DDCBA" text-anchor="middle">Unlock Pro Analytics</text>\n        </svg>',
  "svg-pro-crown": '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="55" fill="rgba(245,158,11,.07)"/>\n          <!-- Stars -->\n          <polygon points="80,42 83,52 93,52 85,58 88,68 80,62 72,68 75,58 67,52 77,52" fill="#FBBF24" opacity="0.9"/>\n          <polygon points="46,74 48,80 54,80 49,84 51,90 46,86 41,90 43,84 38,80 44,80" fill="#FBBF24" opacity="0.5" transform="scale(0.7) translate(20,38)"/>\n          <polygon points="114,74 116,80 122,80 117,84 119,90 114,86 109,90 111,84 106,80 112,80" fill="#FBBF24" opacity="0.5" transform="scale(0.7) translate(-28,38)"/>\n          <rect x="52" y="88" width="56" height="8" rx="4" fill="rgba(245,158,11,.2)" stroke="#FBBF24" stroke-width="1"/>\n          <rect x="56" y="100" width="48" height="20" rx="6" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <text x="80" y="114" font-family="DM Sans" font-size="9" font-weight="700" fill="#E8EFED" text-anchor="middle">Mintx Pro</text>\n          <text x="80" y="123" font-family="DM Mono" font-size="8" fill="#10C9A0" text-anchor="middle">\u20B9999/mo</text>\n        </svg>',
  "svg-404": '<svg width="140" height="140" viewBox="0 0 140 140" fill="none">\n          <circle cx="70" cy="70" r="52" fill="rgba(232,239,237,0.06)"/>\n          <text x="70" y="82" font-family="Syne" font-size="36" font-weight="800" fill="rgba(232,239,237,0.12)" text-anchor="middle">404</text>\n          <circle cx="70" cy="68" r="28" fill="none" stroke="rgba(232,239,237,0.12)" stroke-width="2" stroke-dasharray="4 3"/>\n          <path d="M54 56 L86 84" stroke="#F87171" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>\n          <path d="M86 56 L54 84" stroke="#F87171" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>\n          <text x="70" y="112" font-family="DM Sans" font-size="9" fill="#5A706A" text-anchor="middle">Page not found</text>\n        </svg>',
  "svg-500": '<svg width="140" height="140" viewBox="0 0 140 140" fill="none">\n          <circle cx="70" cy="70" r="52" fill="rgba(239,68,68,.05)"/>\n          <rect x="40" y="50" width="60" height="48" rx="8" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <rect x="40" y="50" width="60" height="12" rx="8" fill="rgba(239,68,68,.1)"/>\n          <rect x="40" y="56" width="60" height="6" rx="0" fill="rgba(239,68,68,.1)"/>\n          <circle cx="50" cy="56" r="2.5" fill="rgba(239,68,68,.4)"/>\n          <circle cx="58" cy="56" r="2.5" fill="rgba(245,158,11,.4)"/>\n          <circle cx="66" cy="56" r="2.5" fill="rgba(34,197,94,.4)"/>\n          <path d="M52 74 Q70 66 88 74" stroke="#F87171" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.5"/>\n          <text x="70" y="82" font-family="DM Mono" font-size="9" fill="#F87171" text-anchor="middle">Error 500</text>\n          <text x="70" y="92" font-family="DM Sans" font-size="7" fill="#5A706A" text-anchor="middle">Something went wrong</text>\n          <path d="M62 104 L70 116 L78 104" stroke="#10C9A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>\n          <text x="70" y="126" font-family="DM Sans" font-size="8" fill="#10C9A0" text-anchor="middle">Retry</text>\n        </svg>',
  "svg-offline": '<svg width="140" height="140" viewBox="0 0 140 140" fill="none">\n          <circle cx="70" cy="70" r="52" fill="rgba(232,239,237,0.06)"/>\n          <path d="M30 54 Q70 34 110 54" stroke="rgba(232,239,237,0.12)" stroke-width="2.5" stroke-linecap="round" fill="none"/>\n          <path d="M42 66 Q70 50 98 66" stroke="rgba(232,239,237,0.12)" stroke-width="2.5" stroke-linecap="round" fill="none"/>\n          <path d="M54 78 Q70 66 86 78" stroke="rgba(232,239,237,0.12)" stroke-width="2.5" stroke-linecap="round" fill="none"/>\n          <circle cx="70" cy="90" r="5" fill="rgba(232,239,237,0.12)"/>\n          <line x1="30" y1="34" x2="110" y2="106" stroke="#F87171" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>\n          <text x="70" y="118" font-family="DM Sans" font-size="9" fill="#5A706A" text-anchor="middle">No connection</text>\n        </svg>',
  "svg-session": '<svg width="140" height="140" viewBox="0 0 140 140" fill="none">\n          <circle cx="70" cy="70" r="52" fill="rgba(245,158,11,.07)"/>\n          <rect x="50" y="60" width="40" height="36" rx="7" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <path d="M60 60 L60 52 Q60 44 70 44 Q80 44 80 52 L80 60" fill="none" stroke="rgba(232,239,237,0.12)" stroke-width="2" stroke-linecap="round"/>\n          <rect x="62" y="74" width="16" height="12" rx="3" fill="#FBBF24" opacity="0.7"/>\n          <line x1="70" y1="77" x2="70" y2="82" stroke="#fff" stroke-width="2" stroke-linecap="round"/>\n          <path d="M58 44 Q50 42 46 50" stroke="#FBBF24" stroke-width="1.5" stroke-linecap="round" fill="none" stroke-dasharray="2 2"/>\n          <circle cx="44" cy="52" r="3" fill="#FBBF24" opacity="0.5"/>\n          <text x="70" y="110" font-family="DM Sans" font-size="9" fill="#5A706A" text-anchor="middle">Session expired</text>\n          <text x="70" y="120" font-family="DM Sans" font-size="8" fill="#10C9A0" text-anchor="middle">Sign in again</text>\n        </svg>',
  "svg-market-closed": '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="56" fill="rgba(0,179,138,.07)"/>\n          <!-- Moon + stars = market closed at night -->\n          <path d="M92 52 Q78 56 76 70 Q74 86 86 92 Q68 96 58 82 Q50 66 60 54 Q72 44 92 52Z" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.2)" stroke-width="1.5"/>\n          <circle cx="108" cy="42" r="2" fill="rgba(255,255,255,.4)"/>\n          <circle cx="118" cy="58" r="1.5" fill="rgba(255,255,255,.3)"/>\n          <circle cx="104" cy="62" r="1" fill="rgba(255,255,255,.3)"/>\n          <circle cx="40" cy="46" r="1.5" fill="rgba(255,255,255,.3)"/>\n          <circle cx="50" cy="36" r="2" fill="rgba(255,255,255,.4)"/>\n          <rect x="48" y="96" width="64" height="24" rx="2" fill="rgba(0,179,138,.15)" stroke="rgba(0,179,138,.3)" stroke-width="1"/>\n          <rect x="60" y="90" width="40" height="8" rx="1" fill="rgba(0,179,138,.2)"/>\n          <line x1="60" y1="104" x2="60" y2="120" stroke="rgba(0,179,138,.3)" stroke-width="1"/>\n          <line x1="72" y1="104" x2="72" y2="120" stroke="rgba(0,179,138,.3)" stroke-width="1"/>\n          <line x1="88" y1="104" x2="88" y2="120" stroke="rgba(0,179,138,.3)" stroke-width="1"/>\n          <line x1="100" y1="104" x2="100" y2="120" stroke="rgba(0,179,138,.3)" stroke-width="1"/>\n          <text x="80" y="135" font-family="DM Sans" font-size="9" font-weight="600" fill="rgba(0,179,138,.6)" text-anchor="middle">Market Closed</text>\n          <text x="80" y="145" font-family="DM Mono" font-size="8" fill="rgba(255,255,255,.3)" text-anchor="middle">Opens Mon 9:15 AM IST</text>\n        </svg>',
  "svg-loading-data": '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="56" fill="#E6FBF5" opacity="0.5"/>\n          <rect x="44" y="100" width="12" height="24" rx="3" fill="rgba(232,239,237,0.12)"/>\n          <rect x="62" y="82" width="12" height="42" rx="3" fill="rgba(232,239,237,0.12)"/>\n          <rect x="80" y="68" width="12" height="56" rx="3" fill="#10C9A0" opacity="0.5"/>\n          <rect x="98" y="76" width="12" height="48" rx="3" fill="rgba(232,239,237,0.12)"/>\n          <rect x="116" y="90" width="12" height="34" rx="3" fill="rgba(232,239,237,0.12)"/>\n          <rect x="44" y="100" width="12" height="24" rx="3" fill="url(#shimmerGrad)" opacity="0.6"/>\n          <rect x="62" y="82" width="12" height="42" rx="3" fill="url(#shimmerGrad)" opacity="0.4"/>\n          <defs><linearGradient id="shimmerGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="transparent"/><stop offset="50%" stop-color="rgba(255,255,255,.4)"/><stop offset="100%" stop-color="transparent"/></linearGradient></defs>\n          <circle cx="80" cy="50" r="12" fill="none" stroke="rgba(232,239,237,0.12)" stroke-width="3"/>\n          <path d="M80 38 A12 12 0 0 1 92 50" stroke="#10C9A0" stroke-width="3" stroke-linecap="round" fill="none"/>\n          <text x="80" y="140" font-family="DM Sans" font-size="9" fill="#5A706A" text-anchor="middle">Loading market data\u2026</text>\n        </svg>',
  "svg-pre-open": '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="56" fill="rgba(245,158,11,.07)"/>\n          <!-- Rising sun = pre-open -->\n          <path d="M46 96 Q80 50 114 96" fill="rgba(245,158,11,.15)" stroke="#FBBF24" stroke-width="1.5"/>\n          <circle cx="80" cy="80" r="20" fill="#FBBF24" opacity="0.7"/>\n          <!-- Sun rays -->\n          <line x1="80" y1="46" x2="80" y2="54" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>\n          <line x1="104" y1="56" x2="99" y2="61" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>\n          <line x1="56" y1="56" x2="61" y2="61" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>\n          <line x1="112" y1="80" x2="104" y2="80" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>\n          <line x1="48" y1="80" x2="56" y2="80" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>\n          <!-- Horizon line -->\n          <line x1="36" y1="100" x2="124" y2="100" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round"/>\n          <text x="80" y="118" font-family="DM Sans" font-size="9" font-weight="600" fill="#9BACA6" text-anchor="middle">Pre-Open Session</text>\n          <text x="80" y="128" font-family="DM Mono" font-size="8" fill="#FBBF24" text-anchor="middle">9:00 \u2013 9:15 AM IST</text>\n        </svg>',
  "svg-payment-success": '<svg width="140" height="140" viewBox="0 0 140 140" fill="none">\n          <circle cx="70" cy="70" r="52" fill="#E6FBF5"/>\n          <circle cx="70" cy="66" r="28" fill="#10C9A0" opacity="0.9"/>\n          <path d="M54 66 L65 77 L86 54" stroke="#001A13" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>\n          <rect x="48" y="96" width="44" height="18" rx="6" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1"/>\n          <text x="70" y="109" font-family="DM Sans" font-size="9" font-weight="700" fill="#22C55E" text-anchor="middle">Payment Successful!</text>\n          <!-- Confetti -->\n          <rect x="36" y="44" width="5" height="5" rx="1" fill="#FBBF24" transform="rotate(20 36 44)" opacity="0.8"/>\n          <rect x="96" y="38" width="4" height="4" rx="1" fill="#60A5FA" transform="rotate(-15 96 38)" opacity="0.8"/>\n          <rect x="108" y="60" width="4" height="6" rx="1" fill="#A78BFA" transform="rotate(30 108 60)" opacity="0.7"/>\n          <rect x="30" y="68" width="5" height="4" rx="1" fill="#3DDCBA" transform="rotate(-20 30 68)" opacity="0.7"/>\n        </svg>',
  "svg-referral-earned": '<svg width="140" height="140" viewBox="0 0 140 140" fill="none">\n          <circle cx="70" cy="70" r="52" fill="#E6FBF5"/>\n          <circle cx="50" cy="70" r="16" fill="#10C9A0" opacity="0.8"/>\n          <circle cx="90" cy="70" r="16" fill="#006B52"/>\n          <line x1="66" y1="70" x2="74" y2="70" stroke="#3DDCBA" stroke-width="2.5" stroke-linecap="round"/>\n          <path d="M70 66 L74 70 L70 74" stroke="#3DDCBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>\n          <circle cx="50" cy="66" r="4" fill="#001A13" opacity="0.3"/>\n          <circle cx="90" cy="66" r="4" fill="rgba(255,255,255,.3)"/>\n          <rect x="46" y="92" width="48" height="16" rx="6" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1"/>\n          <text x="70" y="104" font-family="DM Mono" font-size="9" font-weight="700" fill="#10C9A0" text-anchor="middle">+1 Month Free!</text>\n        </svg>',
  "svg-module-complete": '<svg width="140" height="140" viewBox="0 0 140 140" fill="none">\n          <circle cx="70" cy="70" r="52" fill="rgba(59,130,246,.07)"/>\n          <!-- Graduation cap -->\n          <polygon points="70,42 96,54 70,66 44,54" fill="#60A5FA" opacity="0.8"/>\n          <path d="M96 54 L96 70 Q96 78 82 82" fill="none" stroke="#60A5FA" stroke-width="2" stroke-linecap="round" opacity="0.6"/>\n          <path d="M44 54 L44 68" fill="none" stroke="#60A5FA" stroke-width="2" stroke-linecap="round" opacity="0.4"/>\n          <rect x="52" y="68" width="36" height="22" rx="6" fill="#0D1614" stroke="rgba(59,130,246,.3)" stroke-width="1.5"/>\n          <path d="M60 79 L67 86 L82 72" stroke="#60A5FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>\n          <text x="70" y="106" font-family="DM Sans" font-size="8" font-weight="700" fill="#60A5FA" text-anchor="middle">Module Complete!</text>\n          <text x="70" y="116" font-family="DM Mono" font-size="8" fill="#10C9A0" text-anchor="middle">+75 XP earned</text>\n        </svg>',
  "svg-streak-done": '<svg width="140" height="140" viewBox="0 0 140 140" fill="none">\n          <circle cx="70" cy="70" r="52" fill="rgba(245,158,11,.07)"/>\n          <text x="70" y="82" font-size="52" text-anchor="middle">\u{1F525}</text>\n          <rect x="42" y="94" width="56" height="16" rx="6" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1"/>\n          <text x="70" y="106" font-family="DM Sans" font-size="9" font-weight="700" fill="#FBBF24" text-anchor="middle">15-Day Streak! \u{1F389}</text>\n          <!-- Small dots for days -->\n          <circle cx="46" cy="116" r="3" fill="#FBBF24"/>\n          <circle cx="54" cy="116" r="3" fill="#FBBF24"/>\n          <circle cx="62" cy="116" r="3" fill="#FBBF24"/>\n          <circle cx="70" cy="116" r="3" fill="#FBBF24"/>\n          <circle cx="78" cy="116" r="3" fill="#FBBF24"/>\n          <circle cx="86" cy="116" r="3" fill="#FBBF24"/>\n          <circle cx="94" cy="116" r="3.5" fill="#10C9A0" stroke="#006B52" stroke-width="1"/>\n        </svg>',
  "svg-course-fundamentals": '<svg width="120" height="100" viewBox="0 0 120 100" fill="none">\n          <path d="M20 80 L35 58 L50 64 L65 48 L80 52 L95 34" stroke="rgba(255,255,255,.8)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>\n          <circle cx="65" cy="48" r="5" fill="#fff"/>\n          <path d="M20 80 L35 58 L50 64 L65 48 L80 52 L95 34 L95 80 Z" fill="rgba(255,255,255,.1)"/>\n          <text x="60" y="94" font-family="DM Sans" font-size="9" font-weight="600" fill="rgba(255,255,255,.8)" text-anchor="middle">Fundamentals</text>\n        </svg>',
  "svg-course-fibonacci": '<svg width="120" height="100" viewBox="0 0 120 100" fill="none">\n          <!-- Fibonacci spiral hint -->\n          <rect x="10" y="10" width="100" height="80" rx="4" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="1"/>\n          <line x1="10" y1="50" x2="110" y2="50" stroke="rgba(255,255,255,.2)" stroke-width="1"/>\n          <line x1="72" y1="10" x2="72" y2="90" stroke="rgba(255,255,255,.2)" stroke-width="1"/>\n          <!-- Golden ratio spiral approximation -->\n          <path d="M72 50 Q72 20 100 20 Q110 20 110 50 Q110 90 60 90 Q10 90 10 40 Q10 10 50 10 Q72 10 72 50" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="2"/>\n          <!-- Fib level lines -->\n          <line x1="10" y1="19" x2="110" y2="19" stroke="#22C55E" stroke-width="1" opacity="0.5"/>\n          <line x1="10" y1="34" x2="110" y2="34" stroke="#FBBF24" stroke-width="1" opacity="0.5"/>\n          <line x1="10" y1="50" x2="110" y2="50" stroke="rgba(0,179,138,.8)" stroke-width="1.5"/>\n          <line x1="10" y1="66" x2="110" y2="66" stroke="#60A5FA" stroke-width="1" opacity="0.5"/>\n          <text x="60" y="98" font-family="DM Sans" font-size="9" font-weight="600" fill="rgba(255,255,255,.8)" text-anchor="middle">Fibonacci</text>\n        </svg>',
  "svg-course-ipo": '<svg width="120" height="100" viewBox="0 0 120 100" fill="none">\n          <rect x="20" y="28" width="80" height="50" rx="6" fill="rgba(255,255,255,.1)" stroke="rgba(255,255,255,.2)" stroke-width="1"/>\n          <text x="60" y="46" font-family="Syne" font-size="12" font-weight="800" fill="#fff" text-anchor="middle">IPO</text>\n          <line x1="28" y1="54" x2="92" y2="54" stroke="rgba(255,255,255,.2)" stroke-width="1"/>\n          <text x="60" y="64" font-family="DM Mono" font-size="8" fill="rgba(255,255,255,.6)" text-anchor="middle">\u20B9450 \u2013 \u20B9475</text>\n          <text x="60" y="73" font-family="DM Sans" font-size="7" fill="rgba(255,255,255,.4)" text-anchor="middle">Issue Price</text>\n          <!-- Confetti -->\n          <circle cx="28" cy="24" r="2" fill="#FBBF24" opacity="0.8"/>\n          <circle cx="92" cy="20" r="2.5" fill="#22C55E" opacity="0.8"/>\n          <rect x="98" y="28" width="4" height="4" rx="1" fill="rgba(255,255,255,.4)" transform="rotate(30 98 28)"/>\n          <text x="60" y="98" font-family="DM Sans" font-size="9" font-weight="600" fill="rgba(255,255,255,.8)" text-anchor="middle">IPO Analysis</text>\n        </svg>',
  "svg-quiz-correct": '<svg width="140" height="120" viewBox="0 0 140 120" fill="none">\n          <circle cx="70" cy="54" r="34" fill="#E6FBF5"/>\n          <circle cx="70" cy="54" r="24" fill="#10C9A0" opacity="0.9"/>\n          <path d="M56 54 L66 64 L84 44" stroke="#001A13" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>\n          <text x="70" y="96" font-family="DM Sans" font-size="11" font-weight="700" fill="#22C55E" text-anchor="middle">Correct! +25 XP</text>\n          <text x="70" y="110" font-family="DM Sans" font-size="9" fill="#5A706A" text-anchor="middle">The golden ratio \u2728</text>\n        </svg>',
  "svg-first-post": '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="58" fill="rgba(139,92,246,.07)"/>\n          <!-- Chat bubble -->\n          <rect x="36" y="46" width="88" height="62" rx="12" fill="#0D1614" stroke="#A78BFA" stroke-width="1.5"/>\n          <path d="M50 108 L44 120 L62 108" fill="#0D1614" stroke="#A78BFA" stroke-width="1.5" stroke-linejoin="round"/>\n          <line x1="48" y1="62" x2="112" y2="62" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round"/>\n          <line x1="48" y1="72" x2="100" y2="72" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round"/>\n          <line x1="48" y1="82" x2="88" y2="82" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round"/>\n          <!-- Sparkle on first post -->\n          <circle cx="108" cy="52" r="12" fill="#A78BFA" opacity="0.8"/>\n          <text x="108" y="56" font-size="12" text-anchor="middle">\u2728</text>\n          <text x="80" y="136" font-family="DM Sans" font-size="9" font-weight="600" fill="#9BACA6" text-anchor="middle">First post published!</text>\n        </svg>',
  "svg-verified": '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="58" fill="#E6FBF5" opacity="0.6"/>\n          <circle cx="80" cy="72" r="22" fill="#10C9A0" opacity="0.85"/>\n          <path d="M68 72 L77 81 L93 63" stroke="#001A13" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>\n          <path d="M80 94 Q80 100 80 106" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round"/>\n          <rect x="56" y="106" width="48" height="20" rx="8" fill="#10C9A0" opacity="0.9"/>\n          <text x="80" y="120" font-family="DM Sans" font-size="9" font-weight="700" fill="#001A13" text-anchor="middle">Verified Analyst</text>\n          <!-- Badge stars -->\n          <circle cx="52" cy="56" r="4" fill="#3DDCBA" opacity="0.6"/>\n          <circle cx="108" cy="50" r="5" fill="#3DDCBA" opacity="0.5"/>\n          <circle cx="116" cy="76" r="3" fill="#3DDCBA" opacity="0.4"/>\n          <circle cx="44" cy="78" r="3" fill="#3DDCBA" opacity="0.4"/>\n        </svg>',
  "svg-ambassador": '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="58" fill="rgba(245,158,11,.07)"/>\n          <!-- Ambassador badge -->\n          <polygon points="80,38 86,56 106,56 91,68 97,86 80,74 63,86 69,68 54,56 74,56" fill="#FBBF24" opacity="0.9"/>\n          <polygon points="80,46 84,58 98,58 87,66 91,78 80,70 69,78 73,66 62,58 76,58" fill="rgba(255,255,255,.3)"/>\n          <rect x="52" y="96" width="56" height="20" rx="8" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <text x="80" y="107" font-family="DM Sans" font-size="8" font-weight="700" fill="#FBBF24" text-anchor="middle">Mintx Ambassador</text>\n          <text x="80" y="116" font-family="DM Mono" font-size="7" fill="#5A706A" text-anchor="middle">25+ referrals</text>\n          <text x="80" y="132" font-family="DM Sans" font-size="8" fill="#5A706A" text-anchor="middle">Annual Pro \u2014 free forever</text>\n        </svg>'
};
function AssetLibrary({
  showHeader = true,
  mode
}) {
  const [activeTab, setActiveTab] = React26.useState(mode || "icons");
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { fontFamily: "'DM Sans', sans-serif", color: "var(--text-primary, #E8EFED)", background: "var(--bg-base, #080E0D)", padding: "24px", borderRadius: "16px", border: "1px solid rgba(232,239,237,0.08)" }, children: [
    showHeader && /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", gap: "8px", marginBottom: "24px", borderBottom: "1px solid rgba(232,239,237,0.08)", paddingBottom: "12px" }, children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          onClick: () => setActiveTab("icons"),
          style: { padding: "8px 16px", borderRadius: "8px", border: "none", cursor: "pointer", background: activeTab === "icons" ? "var(--bg-brand, #10C9A0)" : "transparent", color: activeTab === "icons" ? "#001A13" : "var(--text-tertiary)", fontWeight: 600 },
          children: "Icons"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          onClick: () => setActiveTab("illustrations"),
          style: { padding: "8px 16px", borderRadius: "8px", border: "none", cursor: "pointer", background: activeTab === "illustrations" ? "var(--bg-brand, #10C9A0)" : "transparent", color: activeTab === "illustrations" ? "#001A13" : "var(--text-tertiary)", fontWeight: 600 },
          children: "Illustrations"
        }
      )
    ] }),
    activeTab === "icons" ? /* @__PURE__ */ jsxRuntime.jsx(IconLibrary, {}) : /* @__PURE__ */ jsxRuntime.jsx(IllustrationLibrary, {})
  ] });
}
function IconLibrary() {
  const [query, setQuery] = React26.useState("");
  const filtered = React26.useMemo(() => ICONS.filter((i) => i.name.toLowerCase().includes(query.toLowerCase())), [query]);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { position: "relative", marginBottom: "20px" }, children: [
      /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.Search, { size: 16, style: { position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#5A706A" } }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "input",
        {
          value: query,
          onChange: (e) => setQuery(e.target.value),
          placeholder: "Search icons...",
          style: { width: "100%", padding: "10px 12px 10px 40px", borderRadius: "10px", background: "var(--bg-surface, #0D1614)", border: "1px solid rgba(232,239,237,0.1)", color: "#fff", outline: "none" }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))", gap: "12px" }, children: filtered.map((icon) => /* @__PURE__ */ jsxRuntime.jsx(AssetCard, { name: icon.name, type: "icon" }, icon.name)) })
  ] });
}
function IllustrationLibrary() {
  const [query, setQuery] = React26.useState("");
  const filtered = React26.useMemo(() => ILLUSTRATIONS.filter((i) => i.name.toLowerCase().includes(query.toLowerCase())), [query]);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { position: "relative", marginBottom: "20px" }, children: [
      /* @__PURE__ */ jsxRuntime.jsx(LucideIcons.Search, { size: 16, style: { position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#5A706A" } }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "input",
        {
          value: query,
          onChange: (e) => setQuery(e.target.value),
          placeholder: "Search illustrations...",
          style: { width: "100%", padding: "10px 12px 10px 40px", borderRadius: "10px", background: "var(--bg-surface, #0D1614)", border: "1px solid rgba(232,239,237,0.1)", color: "#fff", outline: "none" }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "16px" }, children: filtered.map((illus) => /* @__PURE__ */ jsxRuntime.jsx(AssetCard, { id: illus.id, name: illus.name, type: "illustration" }, illus.id)) })
  ] });
}
function AssetCard({ name, id, type }) {
  const [copied, setCopied] = React26.useState(false);
  const handleCopy = () => {
    const text = type === "icon" ? `import { ${name} } from 'lucide-react';` : SVGS[id] || "";
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      onClick: handleCopy,
      style: { background: "var(--bg-surface, #0D1614)", border: "1px solid rgba(232,239,237,0.08)", borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", cursor: "pointer", position: "relative", transition: "all 0.2s" },
      children: [
        copied && /* @__PURE__ */ jsxRuntime.jsx("span", { style: { position: "absolute", top: "5px", right: "5px", background: "#22C55E", color: "#fff", fontSize: "10px", padding: "2px 6px", borderRadius: "4px" }, children: "Copied!" }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { style: { height: type === "icon" ? "24px" : "80px", display: "flex", alignItems: "center", justifyContent: "center" }, children: type === "icon" ? (() => {
          const Icon2 = LucideIcons__namespace[name];
          return Icon2 ? /* @__PURE__ */ jsxRuntime.jsx(Icon2, { size: 20 }) : null;
        })() : /* @__PURE__ */ jsxRuntime.jsx("div", { dangerouslySetInnerHTML: { __html: SVGS[id] || "" }, style: { transform: "scale(0.5)" } }) }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { style: { fontSize: "11px", color: "var(--text-tertiary)", textAlign: "center", wordBreak: "break-all" }, children: name })
      ]
    }
  );
}
function FibSpiral({ theme = "dark", className }) {
  const dark = theme === "dark";
  const lineAlpha = dark ? "rgba(232,239,237," : "rgba(20,31,29,";
  const chipBg = dark ? "rgba(8,14,13,0.93)" : "rgba(245,248,247,0.95)";
  const chipBd = dark ? "rgba(0,179,138,0.22)" : "rgba(0,179,138,0.3)";
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: cn("relative flex items-center justify-center select-none", className),
      "aria-hidden": true,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: "absolute inset-0 rounded-full pointer-events-none",
            style: {
              background: "radial-gradient(60% 55% at 50% 50%, rgba(0,179,138,0.07) 0%, transparent 70%)",
              transform: "scale(1.2)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "svg",
          {
            viewBox: "-300 -220 600 440",
            className: "w-full max-w-[540px]",
            style: { filter: "drop-shadow(0 0 48px rgba(0,179,138,0.10))" },
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("defs", { children: [
                /* @__PURE__ */ jsxRuntime.jsx("style", { children: `
            @keyframes drawSpiral{from{stroke-dashoffset:2200}to{stroke-dashoffset:0}}
            @keyframes popIn{from{opacity:0;transform:scale(0.9)}to{opacity:1;transform:scale(1)}}
            @keyframes pulseDot{0%,100%{r:4}50%{r:7}}
            @keyframes pulseRing{0%,100%{r:8;opacity:0.25}50%{r:14;opacity:0}}
            .sp{stroke-dasharray:2200;stroke-dashoffset:2200;animation:drawSpiral 3.2s cubic-bezier(0.16,1,0.3,1) 0.4s forwards}
            .pi{opacity:0;animation:popIn 0.4s ease forwards}
            .d1{animation-delay:0.8s}.d2{animation-delay:1.1s}.d3{animation-delay:1.4s}
            .d4{animation-delay:1.7s}.d5{animation-delay:2.0s}.d6{animation-delay:2.3s}
            .d7{animation-delay:2.6s}.d8{animation-delay:2.9s}
          ` }),
                /* @__PURE__ */ jsxRuntime.jsxs("filter", { id: "glow2", x: "-30%", y: "-30%", width: "160%", height: "160%", children: [
                  /* @__PURE__ */ jsxRuntime.jsx("feGaussianBlur", { stdDeviation: "2.5", result: "b" }),
                  /* @__PURE__ */ jsxRuntime.jsxs("feMerge", { children: [
                    /* @__PURE__ */ jsxRuntime.jsx("feMergeNode", { in: "b" }),
                    /* @__PURE__ */ jsxRuntime.jsx("feMergeNode", { in: "SourceGraphic" })
                  ] })
                ] })
              ] }),
              [-200, -100, 0, 100, 200].map((v) => /* @__PURE__ */ jsxRuntime.jsxs("g", { children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  "line",
                  {
                    x1: v,
                    y1: "-220",
                    x2: v,
                    y2: "220",
                    stroke: `${lineAlpha}0.025)`,
                    strokeWidth: "1"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  "line",
                  {
                    x1: "-290",
                    y1: v,
                    x2: "290",
                    y2: v,
                    stroke: `${lineAlpha}0.025)`,
                    strokeWidth: "1"
                  }
                )
              ] }, v)),
              /* @__PURE__ */ jsxRuntime.jsx(
                "rect",
                {
                  x: "-280",
                  y: "-170",
                  width: "280",
                  height: "170",
                  fill: "none",
                  stroke: "rgba(0,179,138,0.06)",
                  strokeWidth: "1",
                  strokeDasharray: "4 4",
                  className: "pi d1"
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "rect",
                {
                  x: "-170",
                  y: "-170",
                  width: "170",
                  height: "170",
                  fill: "rgba(0,179,138,0.022)",
                  stroke: "rgba(0,179,138,0.10)",
                  strokeWidth: "1",
                  className: "pi d2"
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "rect",
                {
                  x: "-170",
                  y: "-60",
                  width: "105",
                  height: "60",
                  fill: "rgba(0,179,138,0.035)",
                  stroke: "rgba(0,179,138,0.16)",
                  strokeWidth: "1",
                  className: "pi d3"
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "rect",
                {
                  x: "-170",
                  y: "-60",
                  width: "66",
                  height: "60",
                  fill: "rgba(0,179,138,0.055)",
                  stroke: "rgba(0,179,138,0.24)",
                  strokeWidth: "1.5",
                  className: "pi d4"
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "rect",
                {
                  x: "-170",
                  y: "-22",
                  width: "40",
                  height: "22",
                  fill: "rgba(0,179,138,0.08)",
                  stroke: "rgba(0,179,138,0.35)",
                  strokeWidth: "1.5",
                  className: "pi d5"
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "rect",
                {
                  x: "-170",
                  y: "-22",
                  width: "25",
                  height: "22",
                  fill: "rgba(0,179,138,0.12)",
                  stroke: "rgba(0,179,138,0.50)",
                  strokeWidth: "2",
                  className: "pi d6"
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "path",
                {
                  className: "sp",
                  d: "M-145,-22 A25,25 0 0,1 -170,0 A40,40 0 0,0 -130,40 A66,66 0 0,1 -170,106 A105,105 0 0,0 -65,0 A170,170 0 0,1 105,-170 A280,280 0 0,0 -170,110",
                  fill: "none",
                  stroke: "#00B38A",
                  strokeWidth: "1.8",
                  strokeLinecap: "round",
                  filter: "url(#glow2)"
                }
              ),
              [
                {
                  y: -170,
                  pct: "0%",
                  lbl: "High - start of move",
                  cls: "d2",
                  bold: false
                },
                {
                  y: -130,
                  pct: "23.6%",
                  lbl: "First pause zone",
                  cls: "d3",
                  bold: false
                },
                {
                  y: -100,
                  pct: "38.2%",
                  lbl: "Shallow pullback",
                  cls: "d4",
                  bold: false
                },
                {
                  y: -66,
                  pct: "50.0%",
                  lbl: "Midpoint - watch closely",
                  cls: "d5",
                  bold: false
                },
                {
                  y: -22,
                  pct: "61.8%",
                  lbl: "Golden ratio support \u2605",
                  cls: "d6",
                  bold: true
                },
                {
                  y: 0,
                  pct: "100%",
                  lbl: "Low - base of move",
                  cls: "d7",
                  bold: false
                }
              ].map(({ y, pct, lbl, cls, bold }) => /* @__PURE__ */ jsxRuntime.jsxs("g", { className: cn("pi", cls), children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  "line",
                  {
                    x1: "-290",
                    x2: "270",
                    y1: y,
                    y2: y,
                    stroke: bold ? "#00B38A" : `${lineAlpha}0.14)`,
                    strokeWidth: bold ? 1.5 : 0.75,
                    strokeDasharray: bold ? void 0 : "3 6"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  "text",
                  {
                    x: "-286",
                    y: y - 4,
                    fontFamily: "DM Mono,monospace",
                    fontSize: bold ? 9.5 : 8,
                    fontWeight: bold ? 700 : 400,
                    fill: bold ? "#00B38A" : `${lineAlpha}0.35)`,
                    children: pct
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  "text",
                  {
                    x: "268",
                    y: y - 4,
                    fontFamily: "DM Mono,monospace",
                    fontSize: "7.5",
                    fill: bold ? "rgba(0,179,138,0.6)" : `${lineAlpha}0.22)`,
                    textAnchor: "end",
                    children: lbl
                  }
                ),
                bold && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntime.jsx(
                    "circle",
                    {
                      cx: "-65",
                      cy: y,
                      r: "4",
                      fill: "#00B38A",
                      filter: "url(#glow2)"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsxs("circle", { cx: "-65", cy: y, r: "4", fill: "#00B38A", children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
                      "animate",
                      {
                        attributeName: "r",
                        values: "4;12;4",
                        dur: "2.8s",
                        repeatCount: "indefinite"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntime.jsx(
                      "animate",
                      {
                        attributeName: "opacity",
                        values: "0.8;0;0.8",
                        dur: "2.8s",
                        repeatCount: "indefinite"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntime.jsx(
                    "text",
                    {
                      x: "-53",
                      y: y + 4,
                      fontFamily: "DM Mono,monospace",
                      fontSize: "8",
                      fontWeight: "600",
                      fill: "#00B38A",
                      children: "\u2190 move zone"
                    }
                  )
                ] })
              ] }, pct)),
              /* @__PURE__ */ jsxRuntime.jsxs("g", { className: "pi d8", children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  "rect",
                  {
                    x: "58",
                    y: "-52",
                    width: "134",
                    height: "40",
                    rx: "7",
                    fill: chipBg,
                    stroke: chipBd,
                    strokeWidth: "1"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  "text",
                  {
                    x: "126",
                    y: "-33",
                    fontFamily: "DM Mono,monospace",
                    fontSize: "10",
                    fontWeight: "700",
                    fill: "#3DDCBA",
                    textAnchor: "middle",
                    children: "TCS | \u20B93,847"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  "text",
                  {
                    x: "126",
                    y: "-19",
                    fontFamily: "DM Mono,monospace",
                    fontSize: "7.5",
                    fill: "rgba(34,197,94,0.75)",
                    textAnchor: "middle",
                    children: "\u25B2 +2.37% | 61.8% move zone \u2713"
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}
function Hero({
  tag,
  title,
  description,
  features = [],
  theme = "dark",
  className,
  children,
  socialProof,
  chips
}) {
  const dark = theme === "dark";
  const t3 = dark ? "#5A706A" : "#748A83";
  const t4 = dark ? "#3A524D" : "#9BACA6";
  return /* @__PURE__ */ jsxRuntime.jsx("section", { className: cn("relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-12 lg:pt-14", className), children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col lg:max-w-2xl", children: [
      tag && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "rev-up mb-6 flex items-center gap-3", children: /* @__PURE__ */ jsxRuntime.jsxs(
        "span",
        {
          className: "inline-flex items-center gap-1.5 rounded-full px-3 py-1",
          style: {
            fontFamily: "DM Mono, monospace",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#00B38A",
            background: "rgba(0,179,138,0.08)",
            border: "1px solid rgba(0,179,138,0.2)"
          },
          children: [
            /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "span",
                {
                  className: "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
                  style: { background: "#00B38A" }
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "span",
                {
                  className: "relative flex h-1.5 w-1.5 rounded-full",
                  style: { background: "#00B38A" }
                }
              )
            ] }),
            tag
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "h1",
        {
          className: "rev-up",
          style: {
            fontFamily: "Syne, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(44px, 6.2vw, 88px)",
            lineHeight: 0.94,
            letterSpacing: "-0.04em"
          },
          children: title
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "p",
        {
          className: "rev-up mt-7 max-w-[440px]",
          style: {
            fontSize: "16px",
            lineHeight: 1.7,
            color: t3
          },
          children: description
        }
      ),
      features.length > 0 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "rev-up mt-5 flex flex-wrap gap-2 text-center", children: features.map((f) => /* @__PURE__ */ jsxRuntime.jsx(
        "span",
        {
          className: "rounded-full px-3 py-1",
          style: {
            fontFamily: "DM Mono, monospace",
            fontSize: "11px",
            color: dark ? "#9BACA6" : "#3A524D",
            background: dark ? "rgba(232,239,237,0.05)" : "rgba(20,31,29,0.05)",
            border: `1px solid ${dark ? "rgba(232,239,237,0.08)" : "rgba(20,31,29,0.09)"}`
          },
          children: f
        },
        f
      )) }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "rev-up mt-8 w-full max-w-[440px]", children }),
      socialProof && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "rev-up mt-6 flex items-center gap-3", children: socialProof })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "rev-fd relative lg:flex lg:justify-end", children: [
      /* @__PURE__ */ jsxRuntime.jsx(FibSpiral, { theme }),
      chips?.left && /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          className: "float-a absolute -left-2 top-[22%] hidden rounded-xl px-3.5 py-2.5 lg:block",
          style: {
            border: "1px solid rgba(0,179,138,0.2)",
            background: dark ? "rgba(8,14,13,0.92)" : "rgba(245,248,247,0.95)",
            backdropFilter: "blur(12px)"
          },
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                style: {
                  fontFamily: "DM Mono, monospace",
                  fontSize: "9px",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: t4,
                  marginBottom: "3px"
                },
                children: chips.left.label
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                style: {
                  fontFamily: "DM Mono, monospace",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#00B38A"
                },
                children: chips.left.value
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                style: {
                  fontFamily: "DM Mono, monospace",
                  fontSize: "10px",
                  color: "#22C55E"
                },
                children: chips.left.sub
              }
            )
          ]
        }
      ),
      chips?.right && /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          className: "float-b absolute -right-1 bottom-[22%] hidden rounded-xl px-3.5 py-2.5 lg:block",
          style: {
            border: "1px solid rgba(0,179,138,0.2)",
            background: dark ? "rgba(8,14,13,0.92)" : "rgba(245,248,247,0.95)",
            backdropFilter: "blur(12px)"
          },
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                style: {
                  fontFamily: "DM Mono, monospace",
                  fontSize: "9px",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: t4,
                  marginBottom: "3px"
                },
                children: chips.right.label
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                style: {
                  fontFamily: "DM Mono, monospace",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#3DDCBA"
                },
                children: chips.right.value
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                style: {
                  fontFamily: "DM Mono, monospace",
                  fontSize: "10px",
                  color: t3
                },
                children: chips.right.sub
              }
            )
          ]
        }
      )
    ] })
  ] }) });
}
function Ticker({ items, theme = "dark", className }) {
  const dark = theme === "dark";
  const doubled = [...items, ...items];
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn("overflow-hidden py-2.5", className),
      style: {
        borderTop: `1px solid ${dark ? "rgba(232,239,237,0.05)" : "rgba(20,31,29,0.06)"}`,
        borderBottom: `1px solid ${dark ? "rgba(232,239,237,0.05)" : "rgba(20,31,29,0.06)"}`,
        background: dark ? "rgba(13,22,20,0.7)" : "rgba(235,243,240,0.8)",
        backdropFilter: "blur(8px)"
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: "flex gap-10 whitespace-nowrap",
          style: { animation: "ticker 46s linear infinite" },
          children: doubled.map((item, i) => /* @__PURE__ */ jsxRuntime.jsxs(
            "span",
            {
              className: "shrink-0",
              style: {
                fontFamily: "DM Mono, monospace",
                fontSize: "11px",
                letterSpacing: "0.05em",
                color: dark ? "rgba(232,239,237,0.28)" : "rgba(20,31,29,0.38)"
              },
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  "span",
                  {
                    style: { color: "#00B38A", opacity: 0.5, marginRight: "10px" },
                    children: "\u25C6"
                  }
                ),
                item
              ]
            },
            i
          ))
        }
      )
    }
  );
}
function HowItWorks({
  label,
  steps,
  theme = "dark",
  className
}) {
  const dark = theme === "dark";
  const divider = dark ? "rgba(232,239,237,0.05)" : "rgba(20,31,29,0.06)";
  return /* @__PURE__ */ jsxRuntime.jsx(
    "section",
    {
      className: cn("", className),
      style: {
        borderTop: `1px solid ${divider}`,
        borderBottom: `1px solid ${divider}`
      },
      children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-20 lg:px-12", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mb-12 flex items-center gap-5", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              style: {
                fontFamily: "DM Mono, monospace",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: dark ? "#3A524D" : "#9BACA6"
              },
              children: label
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-px flex-1", style: { background: divider } })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative grid grid-cols-1 gap-12 md:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              "aria-hidden": true,
              className: "absolute left-0 top-5 hidden h-px w-full md:block",
              style: {
                background: "linear-gradient(90deg, transparent, rgba(0,179,138,0.10), transparent)"
              }
            }
          ),
          steps.map((step, i) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: "relative flex h-11 w-11 items-center justify-center rounded-xl",
                style: {
                  border: "1px solid rgba(0,179,138,0.2)",
                  background: "rgba(0,179,138,0.06)",
                  fontFamily: "DM Mono, monospace",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#00B38A"
                },
                children: step.n
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              "h3",
              {
                style: {
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 800,
                  fontSize: "18px",
                  lineHeight: 1.2,
                  color: dark ? "#E8EFED" : "#141F1D"
                },
                children: step.title
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx("p", { style: { fontSize: "13px", lineHeight: 1.7, color: dark ? "#5A706A" : "#748A83" }, children: step.body })
          ] }, step.n))
        ] })
      ] })
    }
  );
}
function DiffCard({ item, i, theme = "dark" }) {
  const dark = theme === "dark";
  const [hovered, setHovered] = React26.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "article",
    {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      className: "group relative flex flex-col gap-5 overflow-hidden rounded-2xl p-6 transition-all duration-500 cursor-default",
      style: {
        background: dark ? "rgba(13,22,20,0.55)" : "rgba(255,255,255,0.75)",
        border: `1px solid ${hovered ? `${item.accent}35` : dark ? "rgba(232,239,237,0.07)" : "rgba(20,31,29,0.08)"}`,
        backdropFilter: "blur(12px)",
        boxShadow: hovered ? `0 0 48px ${item.accent}0A` : "none",
        transition: "all 0.4s ease"
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: "pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-bl-[100%] transition-opacity duration-500",
            style: {
              background: `radial-gradient(circle at top right, ${item.accent}14, transparent 70%)`,
              opacity: hovered ? 1 : 0
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "flex h-9 w-9 items-center justify-center rounded-xl transition-colors duration-300",
              style: {
                background: hovered ? `${item.accent}18` : dark ? "rgba(232,239,237,0.05)" : "rgba(20,31,29,0.04)",
                border: `1px solid ${hovered ? `${item.accent}30` : dark ? "rgba(232,239,237,0.08)" : "rgba(20,31,29,0.08)"}`,
                color: hovered ? item.accent : dark ? "#5A706A" : "#748A83"
              },
              children: item.icon
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: "rounded-full px-2.5 py-0.5",
              style: {
                fontFamily: "DM Mono, monospace",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                background: `${item.accent}12`,
                color: item.accent,
                border: `1px solid ${item.accent}25`
              },
              children: item.tag
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "h3",
          {
            className: "leading-tight tracking-tight transition-colors duration-300",
            style: {
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(20px, 2.2vw, 26px)",
              color: dark ? "#E8EFED" : "#141F1D",
              whiteSpace: "pre-line"
            },
            children: item.title
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "p",
          {
            style: {
              fontSize: "13px",
              lineHeight: 1.7,
              color: dark ? "#5A706A" : "#748A83"
            },
            children: item.body
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            className: "mt-auto flex items-end justify-between pt-4",
            style: {
              borderTop: `1px solid ${dark ? "rgba(232,239,237,0.05)" : "rgba(20,31,29,0.06)"}`
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  "div",
                  {
                    style: {
                      fontFamily: "DM Mono, monospace",
                      fontSize: "28px",
                      fontWeight: 700,
                      lineHeight: 1,
                      color: item.accent
                    },
                    children: item.metric
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  "div",
                  {
                    style: {
                      fontFamily: "DM Mono, monospace",
                      fontSize: "10px",
                      color: dark ? "#3A524D" : "#9BACA6",
                      marginTop: "4px"
                    },
                    children: item.metricSub
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300",
                  style: {
                    border: `1px solid ${item.accent}${hovered ? "45" : "20"}`,
                    color: item.accent,
                    opacity: hovered ? 1 : 0.4
                  },
                  children: /* @__PURE__ */ jsxRuntime.jsx(
                    "svg",
                    {
                      width: "13",
                      height: "13",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7 17 17 7M7 7h10v10" })
                    }
                  )
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function Differentiators({
  title,
  items,
  theme = "dark",
  className
}) {
  const dark = theme === "dark";
  const divider = dark ? "rgba(232,239,237,0.05)" : "rgba(20,31,29,0.06)";
  return /* @__PURE__ */ jsxRuntime.jsxs("section", { className: cn("mx-auto max-w-7xl px-6 py-20 lg:px-12", className), children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mb-10 flex items-center gap-5", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "span",
        {
          style: {
            fontFamily: "DM Mono, monospace",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            color: dark ? "#3A524D" : "#9BACA6"
          },
          children: title
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-px flex-1", style: { background: divider } })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-3", children: items.map((item, i) => /* @__PURE__ */ jsxRuntime.jsx(DiffCard, { item, i, theme }, item.rank)) })
  ] });
}

// src/components/marketing/WaitlistForm.tsx
var import_link3 = __toESM(require_link2());
function WaitlistForm({
  theme = "dark",
  size = "md",
  className,
  onSuccess
}) {
  const dark = theme === "dark";
  const [email, setEmail] = React26.useState("");
  const [status, setStatus] = React26.useState("idle");
  const [position, setPos] = React26.useState(null);
  const [error, setError] = React26.useState(null);
  const inputRef = React26.useRef(null);
  const submit = React26.useCallback(
    async (e) => {
      e.preventDefault();
      const val = email.trim();
      if (!val || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        setError("Enter a valid email address.");
        inputRef.current?.focus();
        return;
      }
      setStatus("loading");
      setError(null);
      try {
        const res = await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: val })
        });
        if (!res.ok) throw new Error();
        const data = await res.json();
        setPos(data.position ?? null);
        setStatus("success");
        onSuccess?.(val, data.position);
      } catch {
        setStatus("error");
        setError("Something went wrong. Please try again.");
      }
    },
    [email, onSuccess]
  );
  if (status === "success") {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: cn(
          "flex flex-col items-center gap-3 rounded-2xl p-6 text-center",
          className
        ),
        style: {
          background: dark ? "rgba(0,179,138,0.05)" : "rgba(0,179,138,0.07)",
          border: "1px solid rgba(0,179,138,0.2)"
        },
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "flex h-11 w-11 items-center justify-center rounded-full",
              style: {
                background: "rgba(0,179,138,0.12)",
                border: "1px solid rgba(0,179,138,0.3)"
              },
              children: /* @__PURE__ */ jsxRuntime.jsx(
                "svg",
                {
                  width: "18",
                  height: "18",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "#00B38A",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20 6 9 17l-5-5" })
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(
            "p",
            {
              style: {
                fontFamily: "Syne, sans-serif",
                fontWeight: 800,
                fontSize: "18px",
                color: dark ? "#E8EFED" : "#141F1D"
              },
              children: [
                "You\u2019re in",
                position ? ` - #${position.toLocaleString("en-IN")}` : ""
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs("p", { style: { fontSize: "13px", color: dark ? "#5A706A" : "#748A83" }, children: [
            "We\u2019ll email",
            " ",
            /* @__PURE__ */ jsxRuntime.jsx("span", { style: { color: dark ? "#9BACA6" : "#3A524D" }, children: email }),
            " ",
            "when early access opens."
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("form", { onSubmit: submit, noValidate: true, className: cn("w-full", className), children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: "flex overflow-hidden rounded-2xl transition-all duration-300",
        style: {
          border: `1px solid ${dark ? "rgba(232,239,237,0.09)" : "rgba(20,31,29,0.12)"}`,
          background: dark ? "rgba(13,22,20,0.85)" : "rgba(255,255,255,0.9)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 0 0 0 transparent"
        },
        onFocusCapture: (e) => e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,179,138,0.10)",
        onBlurCapture: (e) => e.currentTarget.style.boxShadow = "0 0 0 0 transparent",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            {
              ref: inputRef,
              type: "email",
              value: email,
              onChange: (e) => {
                setEmail(e.target.value);
                setError(null);
              },
              placeholder: "your@email.com",
              disabled: status === "loading",
              "aria-label": "Email for early access",
              style: {
                flex: 1,
                background: "transparent",
                padding: size === "sm" ? "12px 20px" : "15px 20px",
                fontFamily: "DM Sans, sans-serif",
                fontSize: "14px",
                color: dark ? "#E8EFED" : "#141F1D",
                outline: "none",
                border: "none"
              },
              className: "placeholder:text-[#5A706A]"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              type: "submit",
              disabled: status === "loading",
              className: "m-1.5 flex shrink-0 items-center gap-2 rounded-xl transition-all duration-200 active:scale-95 disabled:opacity-50",
              style: {
                background: "#00B38A",
                padding: "10px 20px",
                fontFamily: "DM Sans, sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                color: "#001A13",
                boxShadow: "0 4px 20px rgba(0,179,138,0.32)",
                whiteSpace: "nowrap"
              },
              onMouseEnter: (e) => {
                e.currentTarget.style.background = "#3DDCBA";
                e.currentTarget.style.boxShadow = "0 6px 28px rgba(0,179,138,0.48)";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.background = "#00B38A";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,179,138,0.32)";
              },
              children: status === "loading" ? /* @__PURE__ */ jsxRuntime.jsx(
                "svg",
                {
                  className: "h-4 w-4 animate-spin",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })
                }
              ) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
                "Get early access",
                " ",
                /* @__PURE__ */ jsxRuntime.jsx(
                  "svg",
                  {
                    width: "11",
                    height: "11",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
                  }
                )
              ] })
            }
          )
        ]
      }
    ),
    error && /* @__PURE__ */ jsxRuntime.jsx(
      "p",
      {
        className: "mt-2 text-center text-xs",
        style: { color: "#EF4444" },
        role: "alert",
        children: error
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(
      "p",
      {
        className: "mt-3 text-center",
        style: {
          fontFamily: "DM Sans, sans-serif",
          fontSize: "11px",
          color: dark ? "#3A524D" : "#9BACA6"
        },
        children: [
          "No spam. Unsubscribe anytime.",
          " ",
          /* @__PURE__ */ jsxRuntime.jsx(
            import_link3.default,
            {
              href: "/privacy",
              className: "underline underline-offset-2 transition-colors",
              style: { color: dark ? "#5A706A" : "#748A83" },
              children: "Privacy policy"
            }
          )
        ]
      }
    )
  ] });
}
function StatsSection({
  stats,
  theme = "dark",
  className
}) {
  const dark = theme === "dark";
  const divider = dark ? "rgba(232,239,237,0.05)" : "rgba(20,31,29,0.06)";
  const bg = dark ? "#080E0D" : "#F5F8F7";
  const t1 = dark ? "#E8EFED" : "#141F1D";
  const t4 = dark ? "#3A524D" : "#9BACA6";
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn("grid grid-cols-2 lg:grid-cols-4", className),
      style: { gap: "1px", background: divider },
      children: stats.map((s) => /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          className: "flex flex-col items-center justify-center gap-1 px-6 py-8 text-center transition-colors duration-500",
          style: { background: bg },
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "span",
              {
                style: {
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                  letterSpacing: "-0.03em",
                  color: t1
                },
                children: s.val
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              "span",
              {
                style: {
                  fontFamily: "DM Mono, monospace",
                  fontSize: "10px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "#00B38A"
                },
                children: s.label
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx("span", { style: { fontSize: "11px", color: t4 }, children: s.sub })
          ]
        },
        s.label
      ))
    }
  );
}
function CommunitySection({
  theme = "dark",
  className,
  title,
  description,
  label = "Join the founding community",
  perks = [],
  children
}) {
  const dark = theme === "dark";
  const t1 = dark ? "#E8EFED" : "#141F1D";
  const t3 = dark ? "#5A706A" : "#748A83";
  const t4 = dark ? "#3A524D" : "#9BACA6";
  return /* @__PURE__ */ jsxRuntime.jsxs("section", { className: cn("relative overflow-hidden", className), children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute inset-0",
        style: {
          background: "radial-gradient(70% 55% at 50% 100%, rgba(0,179,138,0.07) 0%, transparent 70%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative mx-auto max-w-2xl px-6 py-24 text-center lg:px-10", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "span",
        {
          style: {
            fontFamily: "DM Mono, monospace",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: t4
          },
          children: label
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "h2",
        {
          className: "mt-4",
          style: {
            fontFamily: "Syne, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(34px, 5vw, 62px)",
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            color: t1
          },
          children: title
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "p",
        {
          className: "mx-auto mt-5 max-w-sm",
          style: { fontSize: "15px", lineHeight: 1.7, color: t3 },
          children: description
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mx-auto mt-8 max-w-md", children }),
      perks.length > 0 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3", children: perks.map((perk) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "svg",
          {
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#00B38A",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20 6 9 17l-5-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("span", { style: { fontSize: "12px", color: t3 }, children: perk })
      ] }, perk)) })
    ] })
  ] });
}
var dotVariants2 = classVarianceAuthority.cva(
  "w-[7px] h-[7px] rounded-full shrink-0",
  {
    variants: {
      color: {
        green: "bg-mint-500",
        amber: "bg-amber-500",
        neutral: "bg-neutral-300"
      },
      pulse: {
        true: "animate-pulse-live",
        false: ""
      }
    },
    defaultVariants: {
      color: "neutral",
      pulse: false
    }
  }
);
var sessionConfig2 = {
  "pre-open": { color: "amber", label: "Pre-open", pulse: false },
  open: { color: "green", label: "Market Open", pulse: true },
  closed: { color: "neutral", label: "Closed", pulse: false },
  "post-close": { color: "neutral", label: "Post-close", pulse: false }
};
var SupportLiveBar2 = ({
  marketStatus,
  onSupportClick,
  className
}) => {
  const session = marketStatus?.session ?? "closed";
  const cfg = sessionConfig2[session];
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex items-center justify-between p-sp-2 px-sp-4 bg-surface border-t border-neutral-100 gap-sp-3", className), children: [
    marketStatus && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-sp-2 text-xs text-neutral-600 flex-1 min-w-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "span",
        {
          className: dotVariants2({ color: cfg.color, pulse: cfg.pulse }),
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-semibold text-neutral-900 shrink-0 whitespace-nowrap overflow-hidden text-ellipsis", children: marketStatus.label ?? cfg.label }),
      marketStatus.nextEvent && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-neutral-400 whitespace-nowrap overflow-hidden text-ellipsis", children: [
        "\xB7 ",
        marketStatus.nextEvent,
        marketStatus.nextEventTime && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-mono ml-0.5", children: marketStatus.nextEventTime })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        className: "inline-flex items-center gap-sp-1 font-body text-xs font-semibold text-mint-600 bg-mint-50 border border-mint-400/20 rounded-full py-1 px-2.5 cursor-pointer shrink-0 transition-all duration-120 whitespace-nowrap hover:bg-mint-400/20 hover:border-mint-400 focus-visible:outline-2 focus-visible:outline-mint-400 focus-visible:outline-offset-2",
        onClick: onSupportClick,
        "aria-label": "Contact support",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "svg",
            {
              width: "13",
              height: "13",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Support" })
        ]
      }
    )
  ] });
};
SupportLiveBar2.displayName = "SupportLiveBar";

exports.Accordion = Accordion;
exports.AccordionContent = AccordionContent;
exports.AccordionItem = AccordionItem;
exports.AccordionTrigger = AccordionTrigger;
exports.AdvancedRealTimeChart = AdvancedRealTimeChart;
exports.Alert = Alert;
exports.AppBar = AppBar;
exports.AppFooter = AppFooter;
exports.AppHeader = AppHeader;
exports.AreaChart = AreaChart;
exports.AssetLibrary = AssetLibrary;
exports.Autocomplete = Autocomplete;
exports.Avatar = Avatar;
exports.AvatarFallback = AvatarFallback;
exports.AvatarImage = AvatarImage;
exports.Backdrop = Backdrop;
exports.Badge = Badge;
exports.BaselineChart = BaselineChart;
exports.BottomNav = BottomNav;
exports.BottomNavigation = BottomNavigation;
exports.Box = Box;
exports.Breadcrumbs = Breadcrumbs;
exports.Button = Button;
exports.CandlestickChart = CandlestickChart;
exports.Card = Card;
exports.Carousel = Carousel;
exports.CheckBox = CheckBox;
exports.Chip = Chip;
exports.CommunitySection = CommunitySection;
exports.CustomTickerTape = CustomTickerTape;
exports.DataTable = DataTable;
exports.DatePicker = DatePicker;
exports.Dialog = Dialog;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogOverlay = DialogOverlay;
exports.DialogPortal = DialogPortal;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
exports.DiffCard = DiffCard;
exports.Differentiators = Differentiators;
exports.DigitInput = DigitInput;
exports.Divider = Divider;
exports.Drawer = Drawer;
exports.Fab = Fab;
exports.FadeIn = FadeIn;
exports.FibSpiral = FibSpiral;
exports.FileUploader = FileUploader;
exports.Hero = Hero;
exports.HowItWorks = HowItWorks;
exports.ICONS = ICONS;
exports.ILLUSTRATIONS = ILLUSTRATIONS;
exports.IconButton = IconButton;
exports.Image = Image2;
exports.ImageList = ImageList;
exports.Input = Input;
exports.InsightCard = InsightCard;
exports.Link = Link;
exports.List = List;
exports.ListItem = ListItem;
exports.Loader = Loader;
exports.MarketOverview = MarketOverview;
exports.MarketStatus = MarketStatus;
exports.Menu = Menu;
exports.MenuContent = MenuContent;
exports.MenuGroup = MenuGroup;
exports.MenuItem = MenuItem;
exports.MenuLabel = MenuLabel;
exports.MenuPortal = MenuPortal;
exports.MenuSeparator = MenuSeparator;
exports.MenuSub = MenuSub;
exports.MenuTrigger = MenuTrigger;
exports.MetricCard = MetricCard;
exports.MintxLogo = MintxLogo;
exports.NotiStackProvider = NotiStackProvider;
exports.Nudge = Nudge;
exports.NudgesPanel = NudgesPanel;
exports.Pagination = Pagination;
exports.Popover = Popover;
exports.PopoverContent = PopoverContent;
exports.PopoverTrigger = PopoverTrigger;
exports.PriceChange = PriceChange;
exports.Progress = Progress;
exports.ProgressIndicator = ProgressIndicator;
exports.ProgressTracker = ProgressTracker;
exports.RadioGroup = RadioGroup;
exports.RadioGroupItem = RadioGroupItem;
exports.Rating = Rating;
exports.SVGS = SVGS;
exports.ScaleIn = ScaleIn;
exports.Select = Select;
exports.SelectContent = SelectContent;
exports.SelectItem = SelectItem;
exports.SelectTrigger = SelectTrigger;
exports.SelectValue = SelectValue;
exports.Separator = Separator2;
exports.Sidebar = Sidebar;
exports.Skeleton = Skeleton;
exports.SlideIn = SlideIn;
exports.Slider = Slider;
exports.Sparkline = Sparkline;
exports.Stack = Stack;
exports.StatsSection = StatsSection;
exports.StockCard = StockCard;
exports.SupportLiveBar = SupportLiveBar2;
exports.Switch = Switch;
exports.SymbolOverviewMini = SymbolOverviewMini;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCaption = TableCaption;
exports.TableCell = TableCell;
exports.TableFooter = TableFooter;
exports.TableHead = TableHead;
exports.TableHeader = TableHeader;
exports.TableRow = TableRow;
exports.Tabs = Tabs;
exports.Tag = Tag;
exports.TagGroup = TagGroup;
exports.TechnicalAnalysis = TechnicalAnalysis;
exports.TextArea = TextArea;
exports.TextField = TextField;
exports.TextFieldPassword = TextFieldPassword;
exports.ThemeProvider = ThemeProvider;
exports.ThemeToggle = ThemeToggle;
exports.Ticker = Ticker;
exports.TickerTape = TickerTape;
exports.Toast = Toast;
exports.ToastAction = ToastAction;
exports.ToastClose = ToastClose;
exports.ToastContext = ToastContext;
exports.ToastDescription = ToastDescription;
exports.ToastProvider = ToastProvider;
exports.ToastTitle = ToastTitle;
exports.ToastViewport = ToastViewport;
exports.Toggle = Toggle;
exports.Tooltip = Tooltip;
exports.TooltipContent = TooltipContent;
exports.TooltipProvider = TooltipProvider;
exports.TooltipTrigger = TooltipTrigger;
exports.VolumeChart = VolumeChart;
exports.WaitlistForm = WaitlistForm;
exports.badgeVariants = badgeVariants;
exports.cn = cn;
exports.getDirection = getDirection;
exports.useCountUp = useCountUp;
exports.useDisclosure = useDisclosure;
exports.useIsMobile = useIsMobile;
exports.useLocalStorage = useLocalStorage;
exports.useMediaQuery = useMediaQuery;
exports.usePriceDirection = usePriceDirection;
exports.useTheme = useTheme;
exports.useToast = useToast;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map