var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../node_modules/.pnpm/@trpc+server@11.4.3_typescript@5.8.3/node_modules/@trpc/server/dist/utils-DdbbrDku.mjs
var TRPC_ERROR_CODES_BY_KEY = {
  PARSE_ERROR: -32700,
  BAD_REQUEST: -32600,
  INTERNAL_SERVER_ERROR: -32603,
  NOT_IMPLEMENTED: -32603,
  BAD_GATEWAY: -32603,
  SERVICE_UNAVAILABLE: -32603,
  GATEWAY_TIMEOUT: -32603,
  UNAUTHORIZED: -32001,
  PAYMENT_REQUIRED: -32002,
  FORBIDDEN: -32003,
  NOT_FOUND: -32004,
  METHOD_NOT_SUPPORTED: -32005,
  TIMEOUT: -32008,
  CONFLICT: -32009,
  PRECONDITION_FAILED: -32012,
  PAYLOAD_TOO_LARGE: -32013,
  UNSUPPORTED_MEDIA_TYPE: -32015,
  UNPROCESSABLE_CONTENT: -32022,
  TOO_MANY_REQUESTS: -32029,
  CLIENT_CLOSED_REQUEST: -32099
};
var TRPC_ERROR_CODES_BY_NUMBER = {
  [-32700]: "PARSE_ERROR",
  [-32600]: "BAD_REQUEST",
  [-32603]: "INTERNAL_SERVER_ERROR",
  [-32001]: "UNAUTHORIZED",
  [-32002]: "PAYMENT_REQUIRED",
  [-32003]: "FORBIDDEN",
  [-32004]: "NOT_FOUND",
  [-32005]: "METHOD_NOT_SUPPORTED",
  [-32008]: "TIMEOUT",
  [-32009]: "CONFLICT",
  [-32012]: "PRECONDITION_FAILED",
  [-32013]: "PAYLOAD_TOO_LARGE",
  [-32015]: "UNSUPPORTED_MEDIA_TYPE",
  [-32022]: "UNPROCESSABLE_CONTENT",
  [-32029]: "TOO_MANY_REQUESTS",
  [-32099]: "CLIENT_CLOSED_REQUEST"
};
var retryableRpcCodes = [
  TRPC_ERROR_CODES_BY_KEY.BAD_GATEWAY,
  TRPC_ERROR_CODES_BY_KEY.SERVICE_UNAVAILABLE,
  TRPC_ERROR_CODES_BY_KEY.GATEWAY_TIMEOUT,
  TRPC_ERROR_CODES_BY_KEY.INTERNAL_SERVER_ERROR
];
function mergeWithoutOverrides(obj1, ...objs) {
  const newObj = Object.assign(/* @__PURE__ */ Object.create(null), obj1);
  for (const overrides of objs) for (const key in overrides) {
    if (key in newObj && newObj[key] !== overrides[key]) throw new Error(`Duplicate key ${key}`);
    newObj[key] = overrides[key];
  }
  return newObj;
}
__name(mergeWithoutOverrides, "mergeWithoutOverrides");
function isObject(value) {
  return !!value && !Array.isArray(value) && typeof value === "object";
}
__name(isObject, "isObject");
function isFunction(fn) {
  return typeof fn === "function";
}
__name(isFunction, "isFunction");
function omitPrototype(obj) {
  return Object.assign(/* @__PURE__ */ Object.create(null), obj);
}
__name(omitPrototype, "omitPrototype");
var asyncIteratorsSupported = typeof Symbol === "function" && !!Symbol.asyncIterator;
function isAsyncIterable(value) {
  return asyncIteratorsSupported && isObject(value) && Symbol.asyncIterator in value;
}
__name(isAsyncIterable, "isAsyncIterable");
var run = /* @__PURE__ */ __name((fn) => fn(), "run");
function identity(it) {
  return it;
}
__name(identity, "identity");

// ../node_modules/.pnpm/@trpc+server@11.4.3_typescript@5.8.3/node_modules/@trpc/server/dist/getErrorShape-Uhlrl4Bk.mjs
var __create = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = /* @__PURE__ */ __name((cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
}, "__commonJS");
var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
    key = keys[i];
    if (!__hasOwnProp.call(to, key) && key !== except) __defProp2(to, key, {
      get: ((k) => from[k]).bind(null, key),
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
}, "__copyProps");
var __toESM = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod)), "__toESM");
var noop = /* @__PURE__ */ __name(() => {
}, "noop");
var freezeIfAvailable = /* @__PURE__ */ __name((obj) => {
  if (Object.freeze) Object.freeze(obj);
}, "freezeIfAvailable");
function createInnerProxy(callback, path, memo2) {
  var _memo$cacheKey;
  const cacheKey = path.join(".");
  (_memo$cacheKey = memo2[cacheKey]) !== null && _memo$cacheKey !== void 0 || (memo2[cacheKey] = new Proxy(noop, {
    get(_obj, key) {
      if (typeof key !== "string" || key === "then") return void 0;
      return createInnerProxy(callback, [...path, key], memo2);
    },
    apply(_1, _2, args) {
      const lastOfPath = path[path.length - 1];
      let opts = {
        args,
        path
      };
      if (lastOfPath === "call") opts = {
        args: args.length >= 2 ? [args[1]] : [],
        path: path.slice(0, -1)
      };
      else if (lastOfPath === "apply") opts = {
        args: args.length >= 2 ? args[1] : [],
        path: path.slice(0, -1)
      };
      freezeIfAvailable(opts.args);
      freezeIfAvailable(opts.path);
      return callback(opts);
    }
  }));
  return memo2[cacheKey];
}
__name(createInnerProxy, "createInnerProxy");
var createRecursiveProxy = /* @__PURE__ */ __name((callback) => createInnerProxy(callback, [], /* @__PURE__ */ Object.create(null)), "createRecursiveProxy");
var JSONRPC2_TO_HTTP_CODE = {
  PARSE_ERROR: 400,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_SUPPORTED: 405,
  TIMEOUT: 408,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
};
function getStatusCodeFromKey(code) {
  var _JSONRPC2_TO_HTTP_COD;
  return (_JSONRPC2_TO_HTTP_COD = JSONRPC2_TO_HTTP_CODE[code]) !== null && _JSONRPC2_TO_HTTP_COD !== void 0 ? _JSONRPC2_TO_HTTP_COD : 500;
}
__name(getStatusCodeFromKey, "getStatusCodeFromKey");
function getHTTPStatusCode(json) {
  const arr = Array.isArray(json) ? json : [json];
  const httpStatuses = new Set(arr.map((res) => {
    if ("error" in res && isObject(res.error.data)) {
      var _res$error$data;
      if (typeof ((_res$error$data = res.error.data) === null || _res$error$data === void 0 ? void 0 : _res$error$data["httpStatus"]) === "number") return res.error.data["httpStatus"];
      const code = TRPC_ERROR_CODES_BY_NUMBER[res.error.code];
      return getStatusCodeFromKey(code);
    }
    return 200;
  }));
  if (httpStatuses.size !== 1) return 207;
  const httpStatus = httpStatuses.values().next().value;
  return httpStatus;
}
__name(getHTTPStatusCode, "getHTTPStatusCode");
function getHTTPStatusCodeFromError(error) {
  return getStatusCodeFromKey(error.code);
}
__name(getHTTPStatusCodeFromError, "getHTTPStatusCodeFromError");
var require_typeof = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js"(exports, module) {
  function _typeof$2(o) {
    "@babel/helpers - typeof";
    return module.exports = _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o$1) {
      return typeof o$1;
    } : function(o$1) {
      return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof$2(o);
  }
  __name(_typeof$2, "_typeof$2");
  module.exports = _typeof$2, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var require_toPrimitive = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js"(exports, module) {
  var _typeof$1 = require_typeof()["default"];
  function toPrimitive$1(t2, r) {
    if ("object" != _typeof$1(t2) || !t2) return t2;
    var e = t2[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t2, r || "default");
      if ("object" != _typeof$1(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t2);
  }
  __name(toPrimitive$1, "toPrimitive$1");
  module.exports = toPrimitive$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var require_toPropertyKey = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js"(exports, module) {
  var _typeof = require_typeof()["default"];
  var toPrimitive = require_toPrimitive();
  function toPropertyKey$1(t2) {
    var i = toPrimitive(t2, "string");
    return "symbol" == _typeof(i) ? i : i + "";
  }
  __name(toPropertyKey$1, "toPropertyKey$1");
  module.exports = toPropertyKey$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var require_defineProperty = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js"(exports, module) {
  var toPropertyKey = require_toPropertyKey();
  function _defineProperty(e, r, t2) {
    return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t2,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[r] = t2, e;
  }
  __name(_defineProperty, "_defineProperty");
  module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var require_objectSpread2 = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js"(exports, module) {
  var defineProperty = require_defineProperty();
  function ownKeys(e, r) {
    var t2 = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r$1) {
        return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
      })), t2.push.apply(t2, o);
    }
    return t2;
  }
  __name(ownKeys, "ownKeys");
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t2 = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t2), true).forEach(function(r$1) {
        defineProperty(e, r$1, t2[r$1]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r$1) {
        Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t2, r$1));
      });
    }
    return e;
  }
  __name(_objectSpread2, "_objectSpread2");
  module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var import_objectSpread2 = __toESM(require_objectSpread2(), 1);
function getErrorShape(opts) {
  const { path, error, config } = opts;
  const { code } = opts.error;
  const shape = {
    message: error.message,
    code: TRPC_ERROR_CODES_BY_KEY[code],
    data: {
      code,
      httpStatus: getHTTPStatusCodeFromError(error)
    }
  };
  if (config.isDev && typeof opts.error.stack === "string") shape.data.stack = opts.error.stack;
  if (typeof path === "string") shape.data.path = path;
  return config.errorFormatter((0, import_objectSpread2.default)((0, import_objectSpread2.default)({}, opts), {}, { shape }));
}
__name(getErrorShape, "getErrorShape");

// ../node_modules/.pnpm/@trpc+server@11.4.3_typescript@5.8.3/node_modules/@trpc/server/dist/tracked-gU3ttYjg.mjs
var defaultFormatter = /* @__PURE__ */ __name(({ shape }) => {
  return shape;
}, "defaultFormatter");
var import_defineProperty = __toESM(require_defineProperty(), 1);
var UnknownCauseError = class extends Error {
  static {
    __name(this, "UnknownCauseError");
  }
};
function getCauseFromUnknown(cause) {
  if (cause instanceof Error) return cause;
  const type = typeof cause;
  if (type === "undefined" || type === "function" || cause === null) return void 0;
  if (type !== "object") return new Error(String(cause));
  if (isObject(cause)) return Object.assign(new UnknownCauseError(), cause);
  return void 0;
}
__name(getCauseFromUnknown, "getCauseFromUnknown");
function getTRPCErrorFromUnknown(cause) {
  if (cause instanceof TRPCError) return cause;
  if (cause instanceof Error && cause.name === "TRPCError") return cause;
  const trpcError = new TRPCError({
    code: "INTERNAL_SERVER_ERROR",
    cause
  });
  if (cause instanceof Error && cause.stack) trpcError.stack = cause.stack;
  return trpcError;
}
__name(getTRPCErrorFromUnknown, "getTRPCErrorFromUnknown");
var TRPCError = class extends Error {
  static {
    __name(this, "TRPCError");
  }
  constructor(opts) {
    var _ref, _opts$message, _this$cause;
    const cause = getCauseFromUnknown(opts.cause);
    const message = (_ref = (_opts$message = opts.message) !== null && _opts$message !== void 0 ? _opts$message : cause === null || cause === void 0 ? void 0 : cause.message) !== null && _ref !== void 0 ? _ref : opts.code;
    super(message, { cause });
    (0, import_defineProperty.default)(this, "cause", void 0);
    (0, import_defineProperty.default)(this, "code", void 0);
    this.code = opts.code;
    this.name = "TRPCError";
    (_this$cause = this.cause) !== null && _this$cause !== void 0 || (this.cause = cause);
  }
};
var import_objectSpread2$1 = __toESM(require_objectSpread2(), 1);
function getDataTransformer(transformer) {
  if ("input" in transformer) return transformer;
  return {
    input: transformer,
    output: transformer
  };
}
__name(getDataTransformer, "getDataTransformer");
var defaultTransformer = {
  input: {
    serialize: /* @__PURE__ */ __name((obj) => obj, "serialize"),
    deserialize: /* @__PURE__ */ __name((obj) => obj, "deserialize")
  },
  output: {
    serialize: /* @__PURE__ */ __name((obj) => obj, "serialize"),
    deserialize: /* @__PURE__ */ __name((obj) => obj, "deserialize")
  }
};
function transformTRPCResponseItem(config, item) {
  if ("error" in item) return (0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, item), {}, { error: config.transformer.output.serialize(item.error) });
  if ("data" in item.result) return (0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, item), {}, { result: (0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, item.result), {}, { data: config.transformer.output.serialize(item.result.data) }) });
  return item;
}
__name(transformTRPCResponseItem, "transformTRPCResponseItem");
function transformTRPCResponse(config, itemOrItems) {
  return Array.isArray(itemOrItems) ? itemOrItems.map((item) => transformTRPCResponseItem(config, item)) : transformTRPCResponseItem(config, itemOrItems);
}
__name(transformTRPCResponse, "transformTRPCResponse");
var import_objectSpread22 = __toESM(require_objectSpread2(), 1);
var lazySymbol = Symbol("lazy");
function once(fn) {
  const uncalled = Symbol();
  let result = uncalled;
  return () => {
    if (result === uncalled) result = fn();
    return result;
  };
}
__name(once, "once");
function isLazy(input) {
  return typeof input === "function" && lazySymbol in input;
}
__name(isLazy, "isLazy");
function isRouter(value) {
  return isObject(value) && isObject(value["_def"]) && "router" in value["_def"];
}
__name(isRouter, "isRouter");
var emptyRouter = {
  _ctx: null,
  _errorShape: null,
  _meta: null,
  queries: {},
  mutations: {},
  subscriptions: {},
  errorFormatter: defaultFormatter,
  transformer: defaultTransformer
};
var reservedWords = [
  "then",
  "call",
  "apply"
];
function createRouterFactory(config) {
  function createRouterInner(input) {
    const reservedWordsUsed = new Set(Object.keys(input).filter((v) => reservedWords.includes(v)));
    if (reservedWordsUsed.size > 0) throw new Error("Reserved words used in `router({})` call: " + Array.from(reservedWordsUsed).join(", "));
    const procedures = omitPrototype({});
    const lazy$1 = omitPrototype({});
    function createLazyLoader(opts) {
      return {
        ref: opts.ref,
        load: once(async () => {
          const router$1 = await opts.ref();
          const lazyPath = [...opts.path, opts.key];
          const lazyKey = lazyPath.join(".");
          opts.aggregate[opts.key] = step(router$1._def.record, lazyPath);
          delete lazy$1[lazyKey];
          for (const [nestedKey, nestedItem] of Object.entries(router$1._def.lazy)) {
            const nestedRouterKey = [...lazyPath, nestedKey].join(".");
            lazy$1[nestedRouterKey] = createLazyLoader({
              ref: nestedItem.ref,
              path: lazyPath,
              key: nestedKey,
              aggregate: opts.aggregate[opts.key]
            });
          }
        })
      };
    }
    __name(createLazyLoader, "createLazyLoader");
    function step(from, path = []) {
      const aggregate = omitPrototype({});
      for (const [key, item] of Object.entries(from !== null && from !== void 0 ? from : {})) {
        if (isLazy(item)) {
          lazy$1[[...path, key].join(".")] = createLazyLoader({
            path,
            ref: item,
            key,
            aggregate
          });
          continue;
        }
        if (isRouter(item)) {
          aggregate[key] = step(item._def.record, [...path, key]);
          continue;
        }
        if (!isProcedure(item)) {
          aggregate[key] = step(item, [...path, key]);
          continue;
        }
        const newPath = [...path, key].join(".");
        if (procedures[newPath]) throw new Error(`Duplicate key: ${newPath}`);
        procedures[newPath] = item;
        aggregate[key] = item;
      }
      return aggregate;
    }
    __name(step, "step");
    const record = step(input);
    const _def = (0, import_objectSpread22.default)((0, import_objectSpread22.default)({
      _config: config,
      router: true,
      procedures,
      lazy: lazy$1
    }, emptyRouter), {}, { record });
    const router2 = (0, import_objectSpread22.default)((0, import_objectSpread22.default)({}, record), {}, {
      _def,
      createCaller: createCallerFactory()({ _def })
    });
    return router2;
  }
  __name(createRouterInner, "createRouterInner");
  return createRouterInner;
}
__name(createRouterFactory, "createRouterFactory");
function isProcedure(procedureOrRouter) {
  return typeof procedureOrRouter === "function";
}
__name(isProcedure, "isProcedure");
async function getProcedureAtPath(router2, path) {
  const { _def } = router2;
  let procedure = _def.procedures[path];
  while (!procedure) {
    const key = Object.keys(_def.lazy).find((key$1) => path.startsWith(key$1));
    if (!key) return null;
    const lazyRouter = _def.lazy[key];
    await lazyRouter.load();
    procedure = _def.procedures[path];
  }
  return procedure;
}
__name(getProcedureAtPath, "getProcedureAtPath");
function createCallerFactory() {
  return /* @__PURE__ */ __name(function createCallerInner(router2) {
    const { _def } = router2;
    return /* @__PURE__ */ __name(function createCaller(ctxOrCallback, opts) {
      return createRecursiveProxy(async ({ path, args }) => {
        const fullPath = path.join(".");
        if (path.length === 1 && path[0] === "_def") return _def;
        const procedure = await getProcedureAtPath(router2, fullPath);
        let ctx = void 0;
        try {
          if (!procedure) throw new TRPCError({
            code: "NOT_FOUND",
            message: `No procedure found on path "${path}"`
          });
          ctx = isFunction(ctxOrCallback) ? await Promise.resolve(ctxOrCallback()) : ctxOrCallback;
          return await procedure({
            path: fullPath,
            getRawInput: /* @__PURE__ */ __name(async () => args[0], "getRawInput"),
            ctx,
            type: procedure._def.type,
            signal: opts === null || opts === void 0 ? void 0 : opts.signal
          });
        } catch (cause) {
          var _opts$onError, _procedure$_def$type;
          opts === null || opts === void 0 || (_opts$onError = opts.onError) === null || _opts$onError === void 0 || _opts$onError.call(opts, {
            ctx,
            error: getTRPCErrorFromUnknown(cause),
            input: args[0],
            path: fullPath,
            type: (_procedure$_def$type = procedure === null || procedure === void 0 ? void 0 : procedure._def.type) !== null && _procedure$_def$type !== void 0 ? _procedure$_def$type : "unknown"
          });
          throw cause;
        }
      });
    }, "createCaller");
  }, "createCallerInner");
}
__name(createCallerFactory, "createCallerFactory");
function mergeRouters(...routerList) {
  var _routerList$;
  const record = mergeWithoutOverrides({}, ...routerList.map((r) => r._def.record));
  const errorFormatter = routerList.reduce((currentErrorFormatter, nextRouter) => {
    if (nextRouter._def._config.errorFormatter && nextRouter._def._config.errorFormatter !== defaultFormatter) {
      if (currentErrorFormatter !== defaultFormatter && currentErrorFormatter !== nextRouter._def._config.errorFormatter) throw new Error("You seem to have several error formatters");
      return nextRouter._def._config.errorFormatter;
    }
    return currentErrorFormatter;
  }, defaultFormatter);
  const transformer = routerList.reduce((prev, current) => {
    if (current._def._config.transformer && current._def._config.transformer !== defaultTransformer) {
      if (prev !== defaultTransformer && prev !== current._def._config.transformer) throw new Error("You seem to have several transformers");
      return current._def._config.transformer;
    }
    return prev;
  }, defaultTransformer);
  const router2 = createRouterFactory({
    errorFormatter,
    transformer,
    isDev: routerList.every((r) => r._def._config.isDev),
    allowOutsideOfServer: routerList.every((r) => r._def._config.allowOutsideOfServer),
    isServer: routerList.every((r) => r._def._config.isServer),
    $types: (_routerList$ = routerList[0]) === null || _routerList$ === void 0 ? void 0 : _routerList$._def._config.$types
  })(record);
  return router2;
}
__name(mergeRouters, "mergeRouters");
var trackedSymbol = Symbol();
function isTrackedEnvelope(value) {
  return Array.isArray(value) && value[2] === trackedSymbol;
}
__name(isTrackedEnvelope, "isTrackedEnvelope");

// ../node_modules/.pnpm/@trpc+server@11.4.3_typescript@5.8.3/node_modules/@trpc/server/dist/observable-UMO3vUa_.mjs
function isObservable(x) {
  return typeof x === "object" && x !== null && "subscribe" in x;
}
__name(isObservable, "isObservable");
function observableToReadableStream(observable$1, signal) {
  let unsub = null;
  const onAbort = /* @__PURE__ */ __name(() => {
    unsub === null || unsub === void 0 || unsub.unsubscribe();
    unsub = null;
    signal.removeEventListener("abort", onAbort);
  }, "onAbort");
  return new ReadableStream({
    start(controller) {
      unsub = observable$1.subscribe({
        next(data) {
          controller.enqueue({
            ok: true,
            value: data
          });
        },
        error(error) {
          controller.enqueue({
            ok: false,
            error
          });
          controller.close();
        },
        complete() {
          controller.close();
        }
      });
      if (signal.aborted) onAbort();
      else signal.addEventListener("abort", onAbort, { once: true });
    },
    cancel() {
      onAbort();
    }
  });
}
__name(observableToReadableStream, "observableToReadableStream");
function observableToAsyncIterable(observable$1, signal) {
  const stream = observableToReadableStream(observable$1, signal);
  const reader = stream.getReader();
  const iterator = {
    async next() {
      const value = await reader.read();
      if (value.done) return {
        value: void 0,
        done: true
      };
      const { value: result } = value;
      if (!result.ok) throw result.error;
      return {
        value: result.value,
        done: false
      };
    },
    async return() {
      await reader.cancel();
      return {
        value: void 0,
        done: true
      };
    }
  };
  return { [Symbol.asyncIterator]() {
    return iterator;
  } };
}
__name(observableToAsyncIterable, "observableToAsyncIterable");

// ../node_modules/.pnpm/@trpc+server@11.4.3_typescript@5.8.3/node_modules/@trpc/server/dist/resolveResponse-CzlbRpCI.mjs
function parseConnectionParamsFromUnknown(parsed) {
  try {
    if (parsed === null) return null;
    if (!isObject(parsed)) throw new Error("Expected object");
    const nonStringValues = Object.entries(parsed).filter(([_key, value]) => typeof value !== "string");
    if (nonStringValues.length > 0) throw new Error(`Expected connectionParams to be string values. Got ${nonStringValues.map(([key, value]) => `${key}: ${typeof value}`).join(", ")}`);
    return parsed;
  } catch (cause) {
    throw new TRPCError({
      code: "PARSE_ERROR",
      message: "Invalid connection params shape",
      cause
    });
  }
}
__name(parseConnectionParamsFromUnknown, "parseConnectionParamsFromUnknown");
function parseConnectionParamsFromString(str) {
  let parsed;
  try {
    parsed = JSON.parse(str);
  } catch (cause) {
    throw new TRPCError({
      code: "PARSE_ERROR",
      message: "Not JSON-parsable query params",
      cause
    });
  }
  return parseConnectionParamsFromUnknown(parsed);
}
__name(parseConnectionParamsFromString, "parseConnectionParamsFromString");
var import_objectSpread2$12 = __toESM(require_objectSpread2(), 1);
function memo(fn) {
  let promise = null;
  const sym = Symbol.for("@trpc/server/http/memo");
  let value = sym;
  return {
    read: /* @__PURE__ */ __name(async () => {
      var _promise;
      if (value !== sym) return value;
      (_promise = promise) !== null && _promise !== void 0 || (promise = fn().catch((cause) => {
        if (cause instanceof TRPCError) throw cause;
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: cause instanceof Error ? cause.message : "Invalid input",
          cause
        });
      }));
      value = await promise;
      promise = null;
      return value;
    }, "read"),
    result: /* @__PURE__ */ __name(() => {
      return value !== sym ? value : void 0;
    }, "result")
  };
}
__name(memo, "memo");
var jsonContentTypeHandler = {
  isMatch(req) {
    var _req$headers$get;
    return !!((_req$headers$get = req.headers.get("content-type")) === null || _req$headers$get === void 0 ? void 0 : _req$headers$get.startsWith("application/json"));
  },
  async parse(opts) {
    var _types$values$next$va;
    const { req } = opts;
    const isBatchCall = opts.searchParams.get("batch") === "1";
    const paths = isBatchCall ? opts.path.split(",") : [opts.path];
    const getInputs = memo(async () => {
      let inputs = void 0;
      if (req.method === "GET") {
        const queryInput = opts.searchParams.get("input");
        if (queryInput) inputs = JSON.parse(queryInput);
      } else inputs = await req.json();
      if (inputs === void 0) return {};
      if (!isBatchCall) return { 0: opts.router._def._config.transformer.input.deserialize(inputs) };
      if (!isObject(inputs)) throw new TRPCError({
        code: "BAD_REQUEST",
        message: '"input" needs to be an object when doing a batch call'
      });
      const acc = {};
      for (const index of paths.keys()) {
        const input = inputs[index];
        if (input !== void 0) acc[index] = opts.router._def._config.transformer.input.deserialize(input);
      }
      return acc;
    });
    const calls = await Promise.all(paths.map(async (path, index) => {
      const procedure = await getProcedureAtPath(opts.router, path);
      return {
        path,
        procedure,
        getRawInput: /* @__PURE__ */ __name(async () => {
          const inputs = await getInputs.read();
          let input = inputs[index];
          if ((procedure === null || procedure === void 0 ? void 0 : procedure._def.type) === "subscription") {
            var _ref, _opts$headers$get;
            const lastEventId = (_ref = (_opts$headers$get = opts.headers.get("last-event-id")) !== null && _opts$headers$get !== void 0 ? _opts$headers$get : opts.searchParams.get("lastEventId")) !== null && _ref !== void 0 ? _ref : opts.searchParams.get("Last-Event-Id");
            if (lastEventId) if (isObject(input)) input = (0, import_objectSpread2$12.default)((0, import_objectSpread2$12.default)({}, input), {}, { lastEventId });
            else {
              var _input;
              (_input = input) !== null && _input !== void 0 || (input = { lastEventId });
            }
          }
          return input;
        }, "getRawInput"),
        result: /* @__PURE__ */ __name(() => {
          var _getInputs$result;
          return (_getInputs$result = getInputs.result()) === null || _getInputs$result === void 0 ? void 0 : _getInputs$result[index];
        }, "result")
      };
    }));
    const types = new Set(calls.map((call) => {
      var _call$procedure;
      return (_call$procedure = call.procedure) === null || _call$procedure === void 0 ? void 0 : _call$procedure._def.type;
    }).filter(Boolean));
    if (types.size > 1) throw new TRPCError({
      code: "BAD_REQUEST",
      message: `Cannot mix procedure types in call: ${Array.from(types).join(", ")}`
    });
    const type = (_types$values$next$va = types.values().next().value) !== null && _types$values$next$va !== void 0 ? _types$values$next$va : "unknown";
    const connectionParamsStr = opts.searchParams.get("connectionParams");
    const info = {
      isBatchCall,
      accept: req.headers.get("trpc-accept"),
      calls,
      type,
      connectionParams: connectionParamsStr === null ? null : parseConnectionParamsFromString(connectionParamsStr),
      signal: req.signal,
      url: opts.url
    };
    return info;
  }
};
var formDataContentTypeHandler = {
  isMatch(req) {
    var _req$headers$get2;
    return !!((_req$headers$get2 = req.headers.get("content-type")) === null || _req$headers$get2 === void 0 ? void 0 : _req$headers$get2.startsWith("multipart/form-data"));
  },
  async parse(opts) {
    const { req } = opts;
    if (req.method !== "POST") throw new TRPCError({
      code: "METHOD_NOT_SUPPORTED",
      message: "Only POST requests are supported for multipart/form-data requests"
    });
    const getInputs = memo(async () => {
      const fd = await req.formData();
      return fd;
    });
    const procedure = await getProcedureAtPath(opts.router, opts.path);
    return {
      accept: null,
      calls: [{
        path: opts.path,
        getRawInput: getInputs.read,
        result: getInputs.result,
        procedure
      }],
      isBatchCall: false,
      type: "mutation",
      connectionParams: null,
      signal: req.signal,
      url: opts.url
    };
  }
};
var octetStreamContentTypeHandler = {
  isMatch(req) {
    var _req$headers$get3;
    return !!((_req$headers$get3 = req.headers.get("content-type")) === null || _req$headers$get3 === void 0 ? void 0 : _req$headers$get3.startsWith("application/octet-stream"));
  },
  async parse(opts) {
    const { req } = opts;
    if (req.method !== "POST") throw new TRPCError({
      code: "METHOD_NOT_SUPPORTED",
      message: "Only POST requests are supported for application/octet-stream requests"
    });
    const getInputs = memo(async () => {
      return req.body;
    });
    return {
      calls: [{
        path: opts.path,
        getRawInput: getInputs.read,
        result: getInputs.result,
        procedure: await getProcedureAtPath(opts.router, opts.path)
      }],
      isBatchCall: false,
      accept: null,
      type: "mutation",
      connectionParams: null,
      signal: req.signal,
      url: opts.url
    };
  }
};
var handlers = [
  jsonContentTypeHandler,
  formDataContentTypeHandler,
  octetStreamContentTypeHandler
];
function getContentTypeHandler(req) {
  const handler = handlers.find((handler$1) => handler$1.isMatch(req));
  if (handler) return handler;
  if (!handler && req.method === "GET") return jsonContentTypeHandler;
  throw new TRPCError({
    code: "UNSUPPORTED_MEDIA_TYPE",
    message: req.headers.has("content-type") ? `Unsupported content-type "${req.headers.get("content-type")}` : "Missing content-type header"
  });
}
__name(getContentTypeHandler, "getContentTypeHandler");
async function getRequestInfo(opts) {
  const handler = getContentTypeHandler(opts.req);
  return await handler.parse(opts);
}
__name(getRequestInfo, "getRequestInfo");
function isAbortError(error) {
  return isObject(error) && error["name"] === "AbortError";
}
__name(isAbortError, "isAbortError");
function throwAbortError(message = "AbortError") {
  throw new DOMException(message, "AbortError");
}
__name(throwAbortError, "throwAbortError");
var import_defineProperty2 = __toESM(require_defineProperty(), 1);
var _Symbol$toStringTag;
var subscribableCache = /* @__PURE__ */ new WeakMap();
var NOOP = /* @__PURE__ */ __name(() => {
}, "NOOP");
_Symbol$toStringTag = Symbol.toStringTag;
var Unpromise = class Unpromise2 {
  static {
    __name(this, "Unpromise");
  }
  constructor(arg) {
    (0, import_defineProperty2.default)(this, "promise", void 0);
    (0, import_defineProperty2.default)(this, "subscribers", []);
    (0, import_defineProperty2.default)(this, "settlement", null);
    (0, import_defineProperty2.default)(this, _Symbol$toStringTag, "Unpromise");
    if (typeof arg === "function") this.promise = new Promise(arg);
    else this.promise = arg;
    const thenReturn = this.promise.then((value) => {
      const { subscribers } = this;
      this.subscribers = null;
      this.settlement = {
        status: "fulfilled",
        value
      };
      subscribers === null || subscribers === void 0 || subscribers.forEach(({ resolve }) => {
        resolve(value);
      });
    });
    if ("catch" in thenReturn) thenReturn.catch((reason) => {
      const { subscribers } = this;
      this.subscribers = null;
      this.settlement = {
        status: "rejected",
        reason
      };
      subscribers === null || subscribers === void 0 || subscribers.forEach(({ reject }) => {
        reject(reason);
      });
    });
  }
  /** Create a promise that mitigates uncontrolled subscription to a long-lived
  * Promise via .then() and .catch() - otherwise a source of memory leaks.
  *
  * The returned promise has an `unsubscribe()` method which can be called when
  * the Promise is no longer being tracked by application logic, and which
  * ensures that there is no reference chain from the original promise to the
  * new one, and therefore no memory leak.
  *
  * If original promise has not yet settled, this adds a new unique promise
  * that listens to then/catch events, along with an `unsubscribe()` method to
  * detach it.
  *
  * If original promise has settled, then creates a new Promise.resolve() or
  * Promise.reject() and provided unsubscribe is a noop.
  *
  * If you call `unsubscribe()` before the returned Promise has settled, it
  * will never settle.
  */
  subscribe() {
    let promise;
    let unsubscribe;
    const { settlement } = this;
    if (settlement === null) {
      if (this.subscribers === null) throw new Error("Unpromise settled but still has subscribers");
      const subscriber = withResolvers();
      this.subscribers = listWithMember(this.subscribers, subscriber);
      promise = subscriber.promise;
      unsubscribe = /* @__PURE__ */ __name(() => {
        if (this.subscribers !== null) this.subscribers = listWithoutMember(this.subscribers, subscriber);
      }, "unsubscribe");
    } else {
      const { status } = settlement;
      if (status === "fulfilled") promise = Promise.resolve(settlement.value);
      else promise = Promise.reject(settlement.reason);
      unsubscribe = NOOP;
    }
    return Object.assign(promise, { unsubscribe });
  }
  /** STANDARD PROMISE METHODS (but returning a SubscribedPromise) */
  then(onfulfilled, onrejected) {
    const subscribed = this.subscribe();
    const { unsubscribe } = subscribed;
    return Object.assign(subscribed.then(onfulfilled, onrejected), { unsubscribe });
  }
  catch(onrejected) {
    const subscribed = this.subscribe();
    const { unsubscribe } = subscribed;
    return Object.assign(subscribed.catch(onrejected), { unsubscribe });
  }
  finally(onfinally) {
    const subscribed = this.subscribe();
    const { unsubscribe } = subscribed;
    return Object.assign(subscribed.finally(onfinally), { unsubscribe });
  }
  /** Unpromise STATIC METHODS */
  /** Create or Retrieve the proxy Unpromise (a re-used Unpromise for the VM lifetime
  * of the provided Promise reference) */
  static proxy(promise) {
    const cached = Unpromise2.getSubscribablePromise(promise);
    return typeof cached !== "undefined" ? cached : Unpromise2.createSubscribablePromise(promise);
  }
  /** Create and store an Unpromise keyed by an original Promise. */
  static createSubscribablePromise(promise) {
    const created = new Unpromise2(promise);
    subscribableCache.set(promise, created);
    subscribableCache.set(created, created);
    return created;
  }
  /** Retrieve a previously-created Unpromise keyed by an original Promise. */
  static getSubscribablePromise(promise) {
    return subscribableCache.get(promise);
  }
  /** Promise STATIC METHODS */
  /** Lookup the Unpromise for this promise, and derive a SubscribedPromise from
  * it (that can be later unsubscribed to eliminate Memory leaks) */
  static resolve(value) {
    const promise = typeof value === "object" && value !== null && "then" in value && typeof value.then === "function" ? value : Promise.resolve(value);
    return Unpromise2.proxy(promise).subscribe();
  }
  static async any(values) {
    const valuesArray = Array.isArray(values) ? values : [...values];
    const subscribedPromises = valuesArray.map(Unpromise2.resolve);
    try {
      return await Promise.any(subscribedPromises);
    } finally {
      subscribedPromises.forEach(({ unsubscribe }) => {
        unsubscribe();
      });
    }
  }
  static async race(values) {
    const valuesArray = Array.isArray(values) ? values : [...values];
    const subscribedPromises = valuesArray.map(Unpromise2.resolve);
    try {
      return await Promise.race(subscribedPromises);
    } finally {
      subscribedPromises.forEach(({ unsubscribe }) => {
        unsubscribe();
      });
    }
  }
  /** Create a race of SubscribedPromises that will fulfil to a single winning
  * Promise (in a 1-Tuple). Eliminates memory leaks from long-lived promises
  * accumulating .then() and .catch() subscribers. Allows simple logic to
  * consume the result, like...
  * ```ts
  * const [ winner ] = await Unpromise.race([ promiseA, promiseB ]);
  * if(winner === promiseB){
  *   const result = await promiseB;
  *   // do the thing
  * }
  * ```
  * */
  static async raceReferences(promises) {
    const selfPromises = promises.map(resolveSelfTuple);
    try {
      return await Promise.race(selfPromises);
    } finally {
      for (const promise of selfPromises) promise.unsubscribe();
    }
  }
};
function resolveSelfTuple(promise) {
  return Unpromise.proxy(promise).then(() => [promise]);
}
__name(resolveSelfTuple, "resolveSelfTuple");
function withResolvers() {
  let resolve;
  let reject;
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  return {
    promise,
    resolve,
    reject
  };
}
__name(withResolvers, "withResolvers");
function listWithMember(arr, member) {
  return [...arr, member];
}
__name(listWithMember, "listWithMember");
function listWithoutIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
__name(listWithoutIndex, "listWithoutIndex");
function listWithoutMember(arr, member) {
  const index = arr.indexOf(member);
  if (index !== -1) return listWithoutIndex(arr, index);
  return arr;
}
__name(listWithoutMember, "listWithoutMember");
var _Symbol;
var _Symbol$dispose;
var _Symbol2;
var _Symbol2$asyncDispose;
(_Symbol$dispose = (_Symbol = Symbol).dispose) !== null && _Symbol$dispose !== void 0 || (_Symbol.dispose = Symbol());
(_Symbol2$asyncDispose = (_Symbol2 = Symbol).asyncDispose) !== null && _Symbol2$asyncDispose !== void 0 || (_Symbol2.asyncDispose = Symbol());
function makeResource(thing, dispose) {
  const it = thing;
  const existing = it[Symbol.dispose];
  it[Symbol.dispose] = () => {
    dispose();
    existing === null || existing === void 0 || existing();
  };
  return it;
}
__name(makeResource, "makeResource");
function makeAsyncResource(thing, dispose) {
  const it = thing;
  const existing = it[Symbol.asyncDispose];
  it[Symbol.asyncDispose] = async () => {
    await dispose();
    await (existing === null || existing === void 0 ? void 0 : existing());
  };
  return it;
}
__name(makeAsyncResource, "makeAsyncResource");
var disposablePromiseTimerResult = Symbol();
function timerResource(ms) {
  let timer = null;
  return makeResource({ start() {
    if (timer) throw new Error("Timer already started");
    const promise = new Promise((resolve) => {
      timer = setTimeout(() => resolve(disposablePromiseTimerResult), ms);
    });
    return promise;
  } }, () => {
    if (timer) clearTimeout(timer);
  });
}
__name(timerResource, "timerResource");
var require_usingCtx = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/usingCtx.js"(exports, module) {
  function _usingCtx() {
    var r = "function" == typeof SuppressedError ? SuppressedError : function(r$1, e$1) {
      var n$1 = Error();
      return n$1.name = "SuppressedError", n$1.error = r$1, n$1.suppressed = e$1, n$1;
    }, e = {}, n = [];
    function using(r$1, e$1) {
      if (null != e$1) {
        if (Object(e$1) !== e$1) throw new TypeError("using declarations can only be used with objects, functions, null, or undefined.");
        if (r$1) var o = e$1[Symbol.asyncDispose || Symbol["for"]("Symbol.asyncDispose")];
        if (void 0 === o && (o = e$1[Symbol.dispose || Symbol["for"]("Symbol.dispose")], r$1)) var t2 = o;
        if ("function" != typeof o) throw new TypeError("Object is not disposable.");
        t2 && (o = /* @__PURE__ */ __name(function o$1() {
          try {
            t2.call(e$1);
          } catch (r$2) {
            return Promise.reject(r$2);
          }
        }, "o$1")), n.push({
          v: e$1,
          d: o,
          a: r$1
        });
      } else r$1 && n.push({
        d: e$1,
        a: r$1
      });
      return e$1;
    }
    __name(using, "using");
    return {
      e,
      u: using.bind(null, false),
      a: using.bind(null, true),
      d: /* @__PURE__ */ __name(function d() {
        var o, t2 = this.e, s = 0;
        function next() {
          for (; o = n.pop(); ) try {
            if (!o.a && 1 === s) return s = 0, n.push(o), Promise.resolve().then(next);
            if (o.d) {
              var r$1 = o.d.call(o.v);
              if (o.a) return s |= 2, Promise.resolve(r$1).then(next, err);
            } else s |= 1;
          } catch (r$2) {
            return err(r$2);
          }
          if (1 === s) return t2 !== e ? Promise.reject(t2) : Promise.resolve();
          if (t2 !== e) throw t2;
        }
        __name(next, "next");
        function err(n$1) {
          return t2 = t2 !== e ? new r(n$1, t2) : n$1, next();
        }
        __name(err, "err");
        return next();
      }, "d")
    };
  }
  __name(_usingCtx, "_usingCtx");
  module.exports = _usingCtx, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var require_OverloadYield = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/OverloadYield.js"(exports, module) {
  function _OverloadYield(e, d) {
    this.v = e, this.k = d;
  }
  __name(_OverloadYield, "_OverloadYield");
  module.exports = _OverloadYield, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var require_awaitAsyncGenerator = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/awaitAsyncGenerator.js"(exports, module) {
  var OverloadYield$2 = require_OverloadYield();
  function _awaitAsyncGenerator$5(e) {
    return new OverloadYield$2(e, 0);
  }
  __name(_awaitAsyncGenerator$5, "_awaitAsyncGenerator$5");
  module.exports = _awaitAsyncGenerator$5, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var require_wrapAsyncGenerator = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/wrapAsyncGenerator.js"(exports, module) {
  var OverloadYield$1 = require_OverloadYield();
  function _wrapAsyncGenerator$6(e) {
    return function() {
      return new AsyncGenerator(e.apply(this, arguments));
    };
  }
  __name(_wrapAsyncGenerator$6, "_wrapAsyncGenerator$6");
  function AsyncGenerator(e) {
    var r, t2;
    function resume(r$1, t$1) {
      try {
        var n = e[r$1](t$1), o = n.value, u = o instanceof OverloadYield$1;
        Promise.resolve(u ? o.v : o).then(function(t$2) {
          if (u) {
            var i = "return" === r$1 ? "return" : "next";
            if (!o.k || t$2.done) return resume(i, t$2);
            t$2 = e[i](t$2).value;
          }
          settle(n.done ? "return" : "normal", t$2);
        }, function(e$1) {
          resume("throw", e$1);
        });
      } catch (e$1) {
        settle("throw", e$1);
      }
    }
    __name(resume, "resume");
    function settle(e$1, n) {
      switch (e$1) {
        case "return":
          r.resolve({
            value: n,
            done: true
          });
          break;
        case "throw":
          r.reject(n);
          break;
        default:
          r.resolve({
            value: n,
            done: false
          });
      }
      (r = r.next) ? resume(r.key, r.arg) : t2 = null;
    }
    __name(settle, "settle");
    this._invoke = function(e$1, n) {
      return new Promise(function(o, u) {
        var i = {
          key: e$1,
          arg: n,
          resolve: o,
          reject: u,
          next: null
        };
        t2 ? t2 = t2.next = i : (r = t2 = i, resume(e$1, n));
      });
    }, "function" != typeof e["return"] && (this["return"] = void 0);
  }
  __name(AsyncGenerator, "AsyncGenerator");
  AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
    return this;
  }, AsyncGenerator.prototype.next = function(e) {
    return this._invoke("next", e);
  }, AsyncGenerator.prototype["throw"] = function(e) {
    return this._invoke("throw", e);
  }, AsyncGenerator.prototype["return"] = function(e) {
    return this._invoke("return", e);
  };
  module.exports = _wrapAsyncGenerator$6, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var import_usingCtx$4 = __toESM(require_usingCtx(), 1);
var import_awaitAsyncGenerator$4 = __toESM(require_awaitAsyncGenerator(), 1);
var import_wrapAsyncGenerator$5 = __toESM(require_wrapAsyncGenerator(), 1);
function iteratorResource(iterable) {
  const iterator = iterable[Symbol.asyncIterator]();
  if (iterator[Symbol.asyncDispose]) return iterator;
  return makeAsyncResource(iterator, async () => {
    var _iterator$return;
    await ((_iterator$return = iterator.return) === null || _iterator$return === void 0 ? void 0 : _iterator$return.call(iterator));
  });
}
__name(iteratorResource, "iteratorResource");
function withMaxDuration(_x, _x2) {
  return _withMaxDuration.apply(this, arguments);
}
__name(withMaxDuration, "withMaxDuration");
function _withMaxDuration() {
  _withMaxDuration = (0, import_wrapAsyncGenerator$5.default)(function* (iterable, opts) {
    try {
      var _usingCtx$1 = (0, import_usingCtx$4.default)();
      const iterator = _usingCtx$1.a(iteratorResource(iterable));
      const timer = _usingCtx$1.u(timerResource(opts.maxDurationMs));
      const timerPromise = timer.start();
      let result;
      while (true) {
        result = yield (0, import_awaitAsyncGenerator$4.default)(Unpromise.race([iterator.next(), timerPromise]));
        if (result === disposablePromiseTimerResult) throwAbortError();
        if (result.done) return result;
        yield result.value;
        result = null;
      }
    } catch (_) {
      _usingCtx$1.e = _;
    } finally {
      yield (0, import_awaitAsyncGenerator$4.default)(_usingCtx$1.d());
    }
  });
  return _withMaxDuration.apply(this, arguments);
}
__name(_withMaxDuration, "_withMaxDuration");
function takeWithGrace(_x3, _x4) {
  return _takeWithGrace.apply(this, arguments);
}
__name(takeWithGrace, "takeWithGrace");
function _takeWithGrace() {
  _takeWithGrace = (0, import_wrapAsyncGenerator$5.default)(function* (iterable, opts) {
    try {
      var _usingCtx3 = (0, import_usingCtx$4.default)();
      const iterator = _usingCtx3.a(iteratorResource(iterable));
      let result;
      const timer = _usingCtx3.u(timerResource(opts.gracePeriodMs));
      let count = opts.count;
      let timerPromise = new Promise(() => {
      });
      while (true) {
        result = yield (0, import_awaitAsyncGenerator$4.default)(Unpromise.race([iterator.next(), timerPromise]));
        if (result === disposablePromiseTimerResult) throwAbortError();
        if (result.done) return result.value;
        yield result.value;
        if (--count === 0) timerPromise = timer.start();
        result = null;
      }
    } catch (_) {
      _usingCtx3.e = _;
    } finally {
      yield (0, import_awaitAsyncGenerator$4.default)(_usingCtx3.d());
    }
  });
  return _takeWithGrace.apply(this, arguments);
}
__name(_takeWithGrace, "_takeWithGrace");
function createDeferred() {
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return {
    promise,
    resolve,
    reject
  };
}
__name(createDeferred, "createDeferred");
var import_usingCtx$3 = __toESM(require_usingCtx(), 1);
var import_awaitAsyncGenerator$3 = __toESM(require_awaitAsyncGenerator(), 1);
var import_wrapAsyncGenerator$4 = __toESM(require_wrapAsyncGenerator(), 1);
function createManagedIterator(iterable, onResult) {
  const iterator = iterable[Symbol.asyncIterator]();
  let state = "idle";
  function cleanup() {
    state = "done";
    onResult = /* @__PURE__ */ __name(() => {
    }, "onResult");
  }
  __name(cleanup, "cleanup");
  function pull() {
    if (state !== "idle") return;
    state = "pending";
    const next = iterator.next();
    next.then((result) => {
      if (result.done) {
        state = "done";
        onResult({
          status: "return",
          value: result.value
        });
        cleanup();
        return;
      }
      state = "idle";
      onResult({
        status: "yield",
        value: result.value
      });
    }).catch((cause) => {
      onResult({
        status: "error",
        error: cause
      });
      cleanup();
    });
  }
  __name(pull, "pull");
  return {
    pull,
    destroy: /* @__PURE__ */ __name(async () => {
      var _iterator$return;
      cleanup();
      await ((_iterator$return = iterator.return) === null || _iterator$return === void 0 ? void 0 : _iterator$return.call(iterator));
    }, "destroy")
  };
}
__name(createManagedIterator, "createManagedIterator");
function mergeAsyncIterables() {
  let state = "idle";
  let flushSignal = createDeferred();
  const iterables = [];
  const iterators = /* @__PURE__ */ new Set();
  const buffer = [];
  function initIterable(iterable) {
    if (state !== "pending") return;
    const iterator = createManagedIterator(iterable, (result) => {
      if (state !== "pending") return;
      switch (result.status) {
        case "yield":
          buffer.push([iterator, result]);
          break;
        case "return":
          iterators.delete(iterator);
          break;
        case "error":
          buffer.push([iterator, result]);
          iterators.delete(iterator);
          break;
      }
      flushSignal.resolve();
    });
    iterators.add(iterator);
    iterator.pull();
  }
  __name(initIterable, "initIterable");
  return {
    add(iterable) {
      switch (state) {
        case "idle":
          iterables.push(iterable);
          break;
        case "pending":
          initIterable(iterable);
          break;
        case "done":
          break;
      }
    },
    [Symbol.asyncIterator]() {
      return (0, import_wrapAsyncGenerator$4.default)(function* () {
        try {
          var _usingCtx$1 = (0, import_usingCtx$3.default)();
          if (state !== "idle") throw new Error("Cannot iterate twice");
          state = "pending";
          const _finally = _usingCtx$1.a(makeAsyncResource({}, async () => {
            state = "done";
            const errors = [];
            await Promise.all(Array.from(iterators.values()).map(async (it) => {
              try {
                await it.destroy();
              } catch (cause) {
                errors.push(cause);
              }
            }));
            buffer.length = 0;
            iterators.clear();
            flushSignal.resolve();
            if (errors.length > 0) throw new AggregateError(errors);
          }));
          while (iterables.length > 0) initIterable(iterables.shift());
          while (iterators.size > 0) {
            yield (0, import_awaitAsyncGenerator$3.default)(flushSignal.promise);
            while (buffer.length > 0) {
              const [iterator, result] = buffer.shift();
              switch (result.status) {
                case "yield":
                  yield result.value;
                  iterator.pull();
                  break;
                case "error":
                  throw result.error;
              }
            }
            flushSignal = createDeferred();
          }
        } catch (_) {
          _usingCtx$1.e = _;
        } finally {
          yield (0, import_awaitAsyncGenerator$3.default)(_usingCtx$1.d());
        }
      })();
    }
  };
}
__name(mergeAsyncIterables, "mergeAsyncIterables");
function readableStreamFrom(iterable) {
  const iterator = iterable[Symbol.asyncIterator]();
  return new ReadableStream({
    async cancel() {
      var _iterator$return;
      await ((_iterator$return = iterator.return) === null || _iterator$return === void 0 ? void 0 : _iterator$return.call(iterator));
    },
    async pull(controller) {
      const result = await iterator.next();
      if (result.done) {
        controller.close();
        return;
      }
      controller.enqueue(result.value);
    }
  });
}
__name(readableStreamFrom, "readableStreamFrom");
var import_usingCtx$2 = __toESM(require_usingCtx(), 1);
var import_awaitAsyncGenerator$2 = __toESM(require_awaitAsyncGenerator(), 1);
var import_wrapAsyncGenerator$3 = __toESM(require_wrapAsyncGenerator(), 1);
var PING_SYM = Symbol("ping");
function withPing(_x, _x2) {
  return _withPing.apply(this, arguments);
}
__name(withPing, "withPing");
function _withPing() {
  _withPing = (0, import_wrapAsyncGenerator$3.default)(function* (iterable, pingIntervalMs) {
    try {
      var _usingCtx$1 = (0, import_usingCtx$2.default)();
      const iterator = _usingCtx$1.a(iteratorResource(iterable));
      let result;
      let nextPromise = iterator.next();
      while (true) try {
        var _usingCtx3 = (0, import_usingCtx$2.default)();
        const pingPromise = _usingCtx3.u(timerResource(pingIntervalMs));
        result = yield (0, import_awaitAsyncGenerator$2.default)(Unpromise.race([nextPromise, pingPromise.start()]));
        if (result === disposablePromiseTimerResult) {
          yield PING_SYM;
          continue;
        }
        if (result.done) return result.value;
        nextPromise = iterator.next();
        yield result.value;
        result = null;
      } catch (_) {
        _usingCtx3.e = _;
      } finally {
        _usingCtx3.d();
      }
    } catch (_) {
      _usingCtx$1.e = _;
    } finally {
      yield (0, import_awaitAsyncGenerator$2.default)(_usingCtx$1.d());
    }
  });
  return _withPing.apply(this, arguments);
}
__name(_withPing, "_withPing");
var require_asyncIterator = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncIterator.js"(exports, module) {
  function _asyncIterator$2(r) {
    var n, t2, o, e = 2;
    for ("undefined" != typeof Symbol && (t2 = Symbol.asyncIterator, o = Symbol.iterator); e--; ) {
      if (t2 && null != (n = r[t2])) return n.call(r);
      if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r));
      t2 = "@@asyncIterator", o = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
  }
  __name(_asyncIterator$2, "_asyncIterator$2");
  function AsyncFromSyncIterator(r) {
    function AsyncFromSyncIteratorContinuation(r$1) {
      if (Object(r$1) !== r$1) return Promise.reject(new TypeError(r$1 + " is not an object."));
      var n = r$1.done;
      return Promise.resolve(r$1.value).then(function(r$2) {
        return {
          value: r$2,
          done: n
        };
      });
    }
    __name(AsyncFromSyncIteratorContinuation, "AsyncFromSyncIteratorContinuation");
    return AsyncFromSyncIterator = /* @__PURE__ */ __name(function AsyncFromSyncIterator$1(r$1) {
      this.s = r$1, this.n = r$1.next;
    }, "AsyncFromSyncIterator$1"), AsyncFromSyncIterator.prototype = {
      s: null,
      n: null,
      next: /* @__PURE__ */ __name(function next() {
        return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
      }, "next"),
      "return": /* @__PURE__ */ __name(function _return(r$1) {
        var n = this.s["return"];
        return void 0 === n ? Promise.resolve({
          value: r$1,
          done: true
        }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
      }, "_return"),
      "throw": /* @__PURE__ */ __name(function _throw(r$1) {
        var n = this.s["return"];
        return void 0 === n ? Promise.reject(r$1) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
      }, "_throw")
    }, new AsyncFromSyncIterator(r);
  }
  __name(AsyncFromSyncIterator, "AsyncFromSyncIterator");
  module.exports = _asyncIterator$2, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var import_awaitAsyncGenerator$1 = __toESM(require_awaitAsyncGenerator(), 1);
var import_wrapAsyncGenerator$2 = __toESM(require_wrapAsyncGenerator(), 1);
var import_usingCtx$1 = __toESM(require_usingCtx(), 1);
var import_asyncIterator$1 = __toESM(require_asyncIterator(), 1);
function isPlainObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}
__name(isPlainObject, "isPlainObject");
var CHUNK_VALUE_TYPE_PROMISE = 0;
var CHUNK_VALUE_TYPE_ASYNC_ITERABLE = 1;
var PROMISE_STATUS_FULFILLED = 0;
var PROMISE_STATUS_REJECTED = 1;
var ASYNC_ITERABLE_STATUS_RETURN = 0;
var ASYNC_ITERABLE_STATUS_YIELD = 1;
var ASYNC_ITERABLE_STATUS_ERROR = 2;
function isPromise(value) {
  return (isObject(value) || isFunction(value)) && typeof (value === null || value === void 0 ? void 0 : value["then"]) === "function" && typeof (value === null || value === void 0 ? void 0 : value["catch"]) === "function";
}
__name(isPromise, "isPromise");
var MaxDepthError = class extends Error {
  static {
    __name(this, "MaxDepthError");
  }
  constructor(path) {
    super("Max depth reached at path: " + path.join("."));
    this.path = path;
  }
};
function createBatchStreamProducer(_x3) {
  return _createBatchStreamProducer.apply(this, arguments);
}
__name(createBatchStreamProducer, "createBatchStreamProducer");
function _createBatchStreamProducer() {
  _createBatchStreamProducer = (0, import_wrapAsyncGenerator$2.default)(function* (opts) {
    const { data } = opts;
    let counter = 0;
    const placeholder = 0;
    const mergedIterables = mergeAsyncIterables();
    function registerAsync(callback) {
      const idx = counter++;
      const iterable$1 = callback(idx);
      mergedIterables.add(iterable$1);
      return idx;
    }
    __name(registerAsync, "registerAsync");
    function encodePromise(promise, path) {
      return registerAsync(/* @__PURE__ */ function() {
        var _ref = (0, import_wrapAsyncGenerator$2.default)(function* (idx) {
          const error = checkMaxDepth(path);
          if (error) {
            promise.catch((cause) => {
              var _opts$onError;
              (_opts$onError = opts.onError) === null || _opts$onError === void 0 || _opts$onError.call(opts, {
                error: cause,
                path
              });
            });
            promise = Promise.reject(error);
          }
          try {
            const next = yield (0, import_awaitAsyncGenerator$1.default)(promise);
            yield [
              idx,
              PROMISE_STATUS_FULFILLED,
              encode(next, path)
            ];
          } catch (cause) {
            var _opts$onError2, _opts$formatError;
            (_opts$onError2 = opts.onError) === null || _opts$onError2 === void 0 || _opts$onError2.call(opts, {
              error: cause,
              path
            });
            yield [
              idx,
              PROMISE_STATUS_REJECTED,
              (_opts$formatError = opts.formatError) === null || _opts$formatError === void 0 ? void 0 : _opts$formatError.call(opts, {
                error: cause,
                path
              })
            ];
          }
        });
        return function(_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    __name(encodePromise, "encodePromise");
    function encodeAsyncIterable(iterable$1, path) {
      return registerAsync(/* @__PURE__ */ function() {
        var _ref2 = (0, import_wrapAsyncGenerator$2.default)(function* (idx) {
          try {
            var _usingCtx$1 = (0, import_usingCtx$1.default)();
            const error = checkMaxDepth(path);
            if (error) throw error;
            const iterator = _usingCtx$1.a(iteratorResource(iterable$1));
            try {
              while (true) {
                const next = yield (0, import_awaitAsyncGenerator$1.default)(iterator.next());
                if (next.done) {
                  yield [
                    idx,
                    ASYNC_ITERABLE_STATUS_RETURN,
                    encode(next.value, path)
                  ];
                  break;
                }
                yield [
                  idx,
                  ASYNC_ITERABLE_STATUS_YIELD,
                  encode(next.value, path)
                ];
              }
            } catch (cause) {
              var _opts$onError3, _opts$formatError2;
              (_opts$onError3 = opts.onError) === null || _opts$onError3 === void 0 || _opts$onError3.call(opts, {
                error: cause,
                path
              });
              yield [
                idx,
                ASYNC_ITERABLE_STATUS_ERROR,
                (_opts$formatError2 = opts.formatError) === null || _opts$formatError2 === void 0 ? void 0 : _opts$formatError2.call(opts, {
                  error: cause,
                  path
                })
              ];
            }
          } catch (_) {
            _usingCtx$1.e = _;
          } finally {
            yield (0, import_awaitAsyncGenerator$1.default)(_usingCtx$1.d());
          }
        });
        return function(_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
    __name(encodeAsyncIterable, "encodeAsyncIterable");
    function checkMaxDepth(path) {
      if (opts.maxDepth && path.length > opts.maxDepth) return new MaxDepthError(path);
      return null;
    }
    __name(checkMaxDepth, "checkMaxDepth");
    function encodeAsync(value, path) {
      if (isPromise(value)) return [CHUNK_VALUE_TYPE_PROMISE, encodePromise(value, path)];
      if (isAsyncIterable(value)) {
        if (opts.maxDepth && path.length >= opts.maxDepth) throw new Error("Max depth reached");
        return [CHUNK_VALUE_TYPE_ASYNC_ITERABLE, encodeAsyncIterable(value, path)];
      }
      return null;
    }
    __name(encodeAsync, "encodeAsync");
    function encode(value, path) {
      if (value === void 0) return [[]];
      const reg = encodeAsync(value, path);
      if (reg) return [[placeholder], [null, ...reg]];
      if (!isPlainObject(value)) return [[value]];
      const newObj = {};
      const asyncValues = [];
      for (const [key, item] of Object.entries(value)) {
        const transformed = encodeAsync(item, [...path, key]);
        if (!transformed) {
          newObj[key] = item;
          continue;
        }
        newObj[key] = placeholder;
        asyncValues.push([key, ...transformed]);
      }
      return [[newObj], ...asyncValues];
    }
    __name(encode, "encode");
    const newHead = {};
    for (const [key, item] of Object.entries(data)) newHead[key] = encode(item, [key]);
    yield newHead;
    let iterable = mergedIterables;
    if (opts.pingMs) iterable = withPing(mergedIterables, opts.pingMs);
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;
    var _iteratorError;
    try {
      for (var _iterator = (0, import_asyncIterator$1.default)(iterable), _step; _iteratorAbruptCompletion = !(_step = yield (0, import_awaitAsyncGenerator$1.default)(_iterator.next())).done; _iteratorAbruptCompletion = false) {
        const value = _step.value;
        yield value;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) yield (0, import_awaitAsyncGenerator$1.default)(_iterator.return());
      } finally {
        if (_didIteratorError) throw _iteratorError;
      }
    }
  });
  return _createBatchStreamProducer.apply(this, arguments);
}
__name(_createBatchStreamProducer, "_createBatchStreamProducer");
function jsonlStreamProducer(opts) {
  let stream = readableStreamFrom(createBatchStreamProducer(opts));
  const { serialize } = opts;
  if (serialize) stream = stream.pipeThrough(new TransformStream({ transform(chunk, controller) {
    if (chunk === PING_SYM) controller.enqueue(PING_SYM);
    else controller.enqueue(serialize(chunk));
  } }));
  return stream.pipeThrough(new TransformStream({ transform(chunk, controller) {
    if (chunk === PING_SYM) controller.enqueue(" ");
    else controller.enqueue(JSON.stringify(chunk) + "\n");
  } })).pipeThrough(new TextEncoderStream());
}
__name(jsonlStreamProducer, "jsonlStreamProducer");
var require_asyncGeneratorDelegate = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncGeneratorDelegate.js"(exports, module) {
  var OverloadYield = require_OverloadYield();
  function _asyncGeneratorDelegate$1(t2) {
    var e = {}, n = false;
    function pump(e$1, r) {
      return n = true, r = new Promise(function(n$1) {
        n$1(t2[e$1](r));
      }), {
        done: false,
        value: new OverloadYield(r, 1)
      };
    }
    __name(pump, "pump");
    return e["undefined" != typeof Symbol && Symbol.iterator || "@@iterator"] = function() {
      return this;
    }, e.next = function(t$1) {
      return n ? (n = false, t$1) : pump("next", t$1);
    }, "function" == typeof t2["throw"] && (e["throw"] = function(t$1) {
      if (n) throw n = false, t$1;
      return pump("throw", t$1);
    }), "function" == typeof t2["return"] && (e["return"] = function(t$1) {
      return n ? (n = false, t$1) : pump("return", t$1);
    }), e;
  }
  __name(_asyncGeneratorDelegate$1, "_asyncGeneratorDelegate$1");
  module.exports = _asyncGeneratorDelegate$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var import_asyncIterator = __toESM(require_asyncIterator(), 1);
var import_awaitAsyncGenerator = __toESM(require_awaitAsyncGenerator(), 1);
var import_wrapAsyncGenerator$1 = __toESM(require_wrapAsyncGenerator(), 1);
var import_asyncGeneratorDelegate = __toESM(require_asyncGeneratorDelegate(), 1);
var import_usingCtx = __toESM(require_usingCtx(), 1);
var PING_EVENT = "ping";
var SERIALIZED_ERROR_EVENT = "serialized-error";
var CONNECTED_EVENT = "connected";
var RETURN_EVENT = "return";
function sseStreamProducer(opts) {
  var _opts$ping$enabled, _opts$ping, _opts$ping$intervalMs, _opts$ping2, _opts$client;
  const { serialize = identity } = opts;
  const ping = {
    enabled: (_opts$ping$enabled = (_opts$ping = opts.ping) === null || _opts$ping === void 0 ? void 0 : _opts$ping.enabled) !== null && _opts$ping$enabled !== void 0 ? _opts$ping$enabled : false,
    intervalMs: (_opts$ping$intervalMs = (_opts$ping2 = opts.ping) === null || _opts$ping2 === void 0 ? void 0 : _opts$ping2.intervalMs) !== null && _opts$ping$intervalMs !== void 0 ? _opts$ping$intervalMs : 1e3
  };
  const client = (_opts$client = opts.client) !== null && _opts$client !== void 0 ? _opts$client : {};
  if (ping.enabled && client.reconnectAfterInactivityMs && ping.intervalMs > client.reconnectAfterInactivityMs) throw new Error(`Ping interval must be less than client reconnect interval to prevent unnecessary reconnection - ping.intervalMs: ${ping.intervalMs} client.reconnectAfterInactivityMs: ${client.reconnectAfterInactivityMs}`);
  function generator() {
    return _generator.apply(this, arguments);
  }
  __name(generator, "generator");
  function _generator() {
    _generator = (0, import_wrapAsyncGenerator$1.default)(function* () {
      yield {
        event: CONNECTED_EVENT,
        data: JSON.stringify(client)
      };
      let iterable = opts.data;
      if (opts.emitAndEndImmediately) iterable = takeWithGrace(iterable, {
        count: 1,
        gracePeriodMs: 1
      });
      if (opts.maxDurationMs && opts.maxDurationMs > 0 && opts.maxDurationMs !== Infinity) iterable = withMaxDuration(iterable, { maxDurationMs: opts.maxDurationMs });
      if (ping.enabled && ping.intervalMs !== Infinity && ping.intervalMs > 0) iterable = withPing(iterable, ping.intervalMs);
      let value;
      let chunk;
      var _iteratorAbruptCompletion = false;
      var _didIteratorError = false;
      var _iteratorError;
      try {
        for (var _iterator = (0, import_asyncIterator.default)(iterable), _step; _iteratorAbruptCompletion = !(_step = yield (0, import_awaitAsyncGenerator.default)(_iterator.next())).done; _iteratorAbruptCompletion = false) {
          value = _step.value;
          {
            if (value === PING_SYM) {
              yield {
                event: PING_EVENT,
                data: ""
              };
              continue;
            }
            chunk = isTrackedEnvelope(value) ? {
              id: value[0],
              data: value[1]
            } : { data: value };
            chunk.data = JSON.stringify(serialize(chunk.data));
            yield chunk;
            value = null;
            chunk = null;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (_iteratorAbruptCompletion && _iterator.return != null) yield (0, import_awaitAsyncGenerator.default)(_iterator.return());
        } finally {
          if (_didIteratorError) throw _iteratorError;
        }
      }
    });
    return _generator.apply(this, arguments);
  }
  __name(_generator, "_generator");
  function generatorWithErrorHandling() {
    return _generatorWithErrorHandling.apply(this, arguments);
  }
  __name(generatorWithErrorHandling, "generatorWithErrorHandling");
  function _generatorWithErrorHandling() {
    _generatorWithErrorHandling = (0, import_wrapAsyncGenerator$1.default)(function* () {
      try {
        yield* (0, import_asyncGeneratorDelegate.default)((0, import_asyncIterator.default)(generator()));
        yield {
          event: RETURN_EVENT,
          data: ""
        };
      } catch (cause) {
        var _opts$formatError, _opts$formatError2;
        if (isAbortError(cause)) return;
        const error = getTRPCErrorFromUnknown(cause);
        const data = (_opts$formatError = (_opts$formatError2 = opts.formatError) === null || _opts$formatError2 === void 0 ? void 0 : _opts$formatError2.call(opts, { error })) !== null && _opts$formatError !== void 0 ? _opts$formatError : null;
        yield {
          event: SERIALIZED_ERROR_EVENT,
          data: JSON.stringify(serialize(data))
        };
      }
    });
    return _generatorWithErrorHandling.apply(this, arguments);
  }
  __name(_generatorWithErrorHandling, "_generatorWithErrorHandling");
  const stream = readableStreamFrom(generatorWithErrorHandling());
  return stream.pipeThrough(new TransformStream({ transform(chunk, controller) {
    if ("event" in chunk) controller.enqueue(`event: ${chunk.event}
`);
    if ("data" in chunk) controller.enqueue(`data: ${chunk.data}
`);
    if ("id" in chunk) controller.enqueue(`id: ${chunk.id}
`);
    if ("comment" in chunk) controller.enqueue(`: ${chunk.comment}
`);
    controller.enqueue("\n\n");
  } })).pipeThrough(new TextEncoderStream());
}
__name(sseStreamProducer, "sseStreamProducer");
var sseHeaders = {
  "Content-Type": "text/event-stream",
  "Cache-Control": "no-cache, no-transform",
  "X-Accel-Buffering": "no",
  Connection: "keep-alive"
};
var import_wrapAsyncGenerator = __toESM(require_wrapAsyncGenerator(), 1);
var import_objectSpread23 = __toESM(require_objectSpread2(), 1);
function errorToAsyncIterable(err) {
  return run((0, import_wrapAsyncGenerator.default)(function* () {
    throw err;
  }));
}
__name(errorToAsyncIterable, "errorToAsyncIterable");
var TYPE_ACCEPTED_METHOD_MAP = {
  mutation: ["POST"],
  query: ["GET"],
  subscription: ["GET"]
};
var TYPE_ACCEPTED_METHOD_MAP_WITH_METHOD_OVERRIDE = {
  mutation: ["POST"],
  query: ["GET", "POST"],
  subscription: ["GET", "POST"]
};
function initResponse(initOpts) {
  var _responseMeta, _info$calls$find$proc, _info$calls$find;
  const { ctx, info, responseMeta, untransformedJSON, errors = [], headers } = initOpts;
  let status = untransformedJSON ? getHTTPStatusCode(untransformedJSON) : 200;
  const eagerGeneration = !untransformedJSON;
  const data = eagerGeneration ? [] : Array.isArray(untransformedJSON) ? untransformedJSON : [untransformedJSON];
  const meta = (_responseMeta = responseMeta === null || responseMeta === void 0 ? void 0 : responseMeta({
    ctx,
    info,
    paths: info === null || info === void 0 ? void 0 : info.calls.map((call) => call.path),
    data,
    errors,
    eagerGeneration,
    type: (_info$calls$find$proc = info === null || info === void 0 || (_info$calls$find = info.calls.find((call) => {
      var _call$procedure;
      return (_call$procedure = call.procedure) === null || _call$procedure === void 0 ? void 0 : _call$procedure._def.type;
    })) === null || _info$calls$find === void 0 || (_info$calls$find = _info$calls$find.procedure) === null || _info$calls$find === void 0 ? void 0 : _info$calls$find._def.type) !== null && _info$calls$find$proc !== void 0 ? _info$calls$find$proc : "unknown"
  })) !== null && _responseMeta !== void 0 ? _responseMeta : {};
  if (meta.headers) {
    if (meta.headers instanceof Headers) for (const [key, value] of meta.headers.entries()) headers.append(key, value);
    else
      for (const [key, value] of Object.entries(meta.headers)) if (Array.isArray(value)) for (const v of value) headers.append(key, v);
      else if (typeof value === "string") headers.set(key, value);
  }
  if (meta.status) status = meta.status;
  return { status };
}
__name(initResponse, "initResponse");
function caughtErrorToData(cause, errorOpts) {
  const { router: router2, req, onError } = errorOpts.opts;
  const error = getTRPCErrorFromUnknown(cause);
  onError === null || onError === void 0 || onError({
    error,
    path: errorOpts.path,
    input: errorOpts.input,
    ctx: errorOpts.ctx,
    type: errorOpts.type,
    req
  });
  const untransformedJSON = { error: getErrorShape({
    config: router2._def._config,
    error,
    type: errorOpts.type,
    path: errorOpts.path,
    input: errorOpts.input,
    ctx: errorOpts.ctx
  }) };
  const transformedJSON = transformTRPCResponse(router2._def._config, untransformedJSON);
  const body = JSON.stringify(transformedJSON);
  return {
    error,
    untransformedJSON,
    body
  };
}
__name(caughtErrorToData, "caughtErrorToData");
function isDataStream(v) {
  if (!isObject(v)) return false;
  if (isAsyncIterable(v)) return true;
  return Object.values(v).some(isPromise) || Object.values(v).some(isAsyncIterable);
}
__name(isDataStream, "isDataStream");
async function resolveResponse(opts) {
  var _ref, _opts$allowBatching, _opts$batching, _opts$allowMethodOver, _config$sse$enabled, _config$sse;
  const { router: router2, req } = opts;
  const headers = new Headers([["vary", "trpc-accept"]]);
  const config = router2._def._config;
  const url = new URL(req.url);
  if (req.method === "HEAD") return new Response(null, { status: 204 });
  const allowBatching = (_ref = (_opts$allowBatching = opts.allowBatching) !== null && _opts$allowBatching !== void 0 ? _opts$allowBatching : (_opts$batching = opts.batching) === null || _opts$batching === void 0 ? void 0 : _opts$batching.enabled) !== null && _ref !== void 0 ? _ref : true;
  const allowMethodOverride = ((_opts$allowMethodOver = opts.allowMethodOverride) !== null && _opts$allowMethodOver !== void 0 ? _opts$allowMethodOver : false) && req.method === "POST";
  const infoTuple = await run(async () => {
    try {
      return [void 0, await getRequestInfo({
        req,
        path: decodeURIComponent(opts.path),
        router: router2,
        searchParams: url.searchParams,
        headers: opts.req.headers,
        url
      })];
    } catch (cause) {
      return [getTRPCErrorFromUnknown(cause), void 0];
    }
  });
  const ctxManager = run(() => {
    let result = void 0;
    return {
      valueOrUndefined: /* @__PURE__ */ __name(() => {
        if (!result) return void 0;
        return result[1];
      }, "valueOrUndefined"),
      value: /* @__PURE__ */ __name(() => {
        const [err, ctx] = result;
        if (err) throw err;
        return ctx;
      }, "value"),
      create: /* @__PURE__ */ __name(async (info) => {
        if (result) throw new Error("This should only be called once - report a bug in tRPC");
        try {
          const ctx = await opts.createContext({ info });
          result = [void 0, ctx];
        } catch (cause) {
          result = [getTRPCErrorFromUnknown(cause), void 0];
        }
      }, "create")
    };
  });
  const methodMapper = allowMethodOverride ? TYPE_ACCEPTED_METHOD_MAP_WITH_METHOD_OVERRIDE : TYPE_ACCEPTED_METHOD_MAP;
  const isStreamCall = req.headers.get("trpc-accept") === "application/jsonl";
  const experimentalSSE = (_config$sse$enabled = (_config$sse = config.sse) === null || _config$sse === void 0 ? void 0 : _config$sse.enabled) !== null && _config$sse$enabled !== void 0 ? _config$sse$enabled : true;
  try {
    const [infoError, info] = infoTuple;
    if (infoError) throw infoError;
    if (info.isBatchCall && !allowBatching) throw new TRPCError({
      code: "BAD_REQUEST",
      message: `Batching is not enabled on the server`
    });
    if (isStreamCall && !info.isBatchCall) throw new TRPCError({
      message: `Streaming requests must be batched (you can do a batch of 1)`,
      code: "BAD_REQUEST"
    });
    await ctxManager.create(info);
    const rpcCalls = info.calls.map(async (call) => {
      const proc = call.procedure;
      try {
        if (opts.error) throw opts.error;
        if (!proc) throw new TRPCError({
          code: "NOT_FOUND",
          message: `No procedure found on path "${call.path}"`
        });
        if (!methodMapper[proc._def.type].includes(req.method)) throw new TRPCError({
          code: "METHOD_NOT_SUPPORTED",
          message: `Unsupported ${req.method}-request to ${proc._def.type} procedure at path "${call.path}"`
        });
        if (proc._def.type === "subscription") {
          if (info.isBatchCall) throw new TRPCError({
            code: "BAD_REQUEST",
            message: `Cannot batch subscription calls`
          });
        }
        const data = await proc({
          path: call.path,
          getRawInput: call.getRawInput,
          ctx: ctxManager.value(),
          type: proc._def.type,
          signal: opts.req.signal
        });
        return [void 0, { data }];
      } catch (cause) {
        var _opts$onError, _call$procedure$_def$, _call$procedure2;
        const error = getTRPCErrorFromUnknown(cause);
        const input = call.result();
        (_opts$onError = opts.onError) === null || _opts$onError === void 0 || _opts$onError.call(opts, {
          error,
          path: call.path,
          input,
          ctx: ctxManager.valueOrUndefined(),
          type: (_call$procedure$_def$ = (_call$procedure2 = call.procedure) === null || _call$procedure2 === void 0 ? void 0 : _call$procedure2._def.type) !== null && _call$procedure$_def$ !== void 0 ? _call$procedure$_def$ : "unknown",
          req: opts.req
        });
        return [error, void 0];
      }
    });
    if (!info.isBatchCall) {
      const [call] = info.calls;
      const [error, result] = await rpcCalls[0];
      switch (info.type) {
        case "unknown":
        case "mutation":
        case "query": {
          headers.set("content-type", "application/json");
          if (isDataStream(result === null || result === void 0 ? void 0 : result.data)) throw new TRPCError({
            code: "UNSUPPORTED_MEDIA_TYPE",
            message: "Cannot use stream-like response in non-streaming request - use httpBatchStreamLink"
          });
          const res = error ? { error: getErrorShape({
            config,
            ctx: ctxManager.valueOrUndefined(),
            error,
            input: call.result(),
            path: call.path,
            type: info.type
          }) } : { result: { data: result.data } };
          const headResponse$1 = initResponse({
            ctx: ctxManager.valueOrUndefined(),
            info,
            responseMeta: opts.responseMeta,
            errors: error ? [error] : [],
            headers,
            untransformedJSON: [res]
          });
          return new Response(JSON.stringify(transformTRPCResponse(config, res)), {
            status: headResponse$1.status,
            headers
          });
        }
        case "subscription": {
          const iterable = run(() => {
            if (error) return errorToAsyncIterable(error);
            if (!experimentalSSE) return errorToAsyncIterable(new TRPCError({
              code: "METHOD_NOT_SUPPORTED",
              message: 'Missing experimental flag "sseSubscriptions"'
            }));
            if (!isObservable(result.data) && !isAsyncIterable(result.data)) return errorToAsyncIterable(new TRPCError({
              message: `Subscription ${call.path} did not return an observable or a AsyncGenerator`,
              code: "INTERNAL_SERVER_ERROR"
            }));
            const dataAsIterable = isObservable(result.data) ? observableToAsyncIterable(result.data, opts.req.signal) : result.data;
            return dataAsIterable;
          });
          const stream = sseStreamProducer((0, import_objectSpread23.default)((0, import_objectSpread23.default)({}, config.sse), {}, {
            data: iterable,
            serialize: /* @__PURE__ */ __name((v) => config.transformer.output.serialize(v), "serialize"),
            formatError(errorOpts) {
              var _call$procedure$_def$2, _call$procedure3, _opts$onError2;
              const error$1 = getTRPCErrorFromUnknown(errorOpts.error);
              const input = call === null || call === void 0 ? void 0 : call.result();
              const path = call === null || call === void 0 ? void 0 : call.path;
              const type = (_call$procedure$_def$2 = call === null || call === void 0 || (_call$procedure3 = call.procedure) === null || _call$procedure3 === void 0 ? void 0 : _call$procedure3._def.type) !== null && _call$procedure$_def$2 !== void 0 ? _call$procedure$_def$2 : "unknown";
              (_opts$onError2 = opts.onError) === null || _opts$onError2 === void 0 || _opts$onError2.call(opts, {
                error: error$1,
                path,
                input,
                ctx: ctxManager.valueOrUndefined(),
                req: opts.req,
                type
              });
              const shape = getErrorShape({
                config,
                ctx: ctxManager.valueOrUndefined(),
                error: error$1,
                input,
                path,
                type
              });
              return shape;
            }
          }));
          for (const [key, value] of Object.entries(sseHeaders)) headers.set(key, value);
          const headResponse$1 = initResponse({
            ctx: ctxManager.valueOrUndefined(),
            info,
            responseMeta: opts.responseMeta,
            errors: [],
            headers,
            untransformedJSON: null
          });
          return new Response(stream, {
            headers,
            status: headResponse$1.status
          });
        }
      }
    }
    if (info.accept === "application/jsonl") {
      headers.set("content-type", "application/json");
      headers.set("transfer-encoding", "chunked");
      const headResponse$1 = initResponse({
        ctx: ctxManager.valueOrUndefined(),
        info,
        responseMeta: opts.responseMeta,
        errors: [],
        headers,
        untransformedJSON: null
      });
      const stream = jsonlStreamProducer((0, import_objectSpread23.default)((0, import_objectSpread23.default)({}, config.jsonl), {}, {
        maxDepth: Infinity,
        data: rpcCalls.map(async (res) => {
          const [error, result] = await res;
          const call = info.calls[0];
          if (error) {
            var _procedure$_def$type, _procedure;
            return { error: getErrorShape({
              config,
              ctx: ctxManager.valueOrUndefined(),
              error,
              input: call.result(),
              path: call.path,
              type: (_procedure$_def$type = (_procedure = call.procedure) === null || _procedure === void 0 ? void 0 : _procedure._def.type) !== null && _procedure$_def$type !== void 0 ? _procedure$_def$type : "unknown"
            }) };
          }
          const iterable = isObservable(result.data) ? observableToAsyncIterable(result.data, opts.req.signal) : Promise.resolve(result.data);
          return { result: Promise.resolve({ data: iterable }) };
        }),
        serialize: config.transformer.output.serialize,
        onError: /* @__PURE__ */ __name((cause) => {
          var _opts$onError3, _info$type;
          (_opts$onError3 = opts.onError) === null || _opts$onError3 === void 0 || _opts$onError3.call(opts, {
            error: getTRPCErrorFromUnknown(cause),
            path: void 0,
            input: void 0,
            ctx: ctxManager.valueOrUndefined(),
            req: opts.req,
            type: (_info$type = info === null || info === void 0 ? void 0 : info.type) !== null && _info$type !== void 0 ? _info$type : "unknown"
          });
        }, "onError"),
        formatError(errorOpts) {
          var _call$procedure$_def$3, _call$procedure4;
          const call = info === null || info === void 0 ? void 0 : info.calls[errorOpts.path[0]];
          const error = getTRPCErrorFromUnknown(errorOpts.error);
          const input = call === null || call === void 0 ? void 0 : call.result();
          const path = call === null || call === void 0 ? void 0 : call.path;
          const type = (_call$procedure$_def$3 = call === null || call === void 0 || (_call$procedure4 = call.procedure) === null || _call$procedure4 === void 0 ? void 0 : _call$procedure4._def.type) !== null && _call$procedure$_def$3 !== void 0 ? _call$procedure$_def$3 : "unknown";
          const shape = getErrorShape({
            config,
            ctx: ctxManager.valueOrUndefined(),
            error,
            input,
            path,
            type
          });
          return shape;
        }
      }));
      return new Response(stream, {
        headers,
        status: headResponse$1.status
      });
    }
    headers.set("content-type", "application/json");
    const results = (await Promise.all(rpcCalls)).map((res) => {
      const [error, result] = res;
      if (error) return res;
      if (isDataStream(result.data)) return [new TRPCError({
        code: "UNSUPPORTED_MEDIA_TYPE",
        message: "Cannot use stream-like response in non-streaming request - use httpBatchStreamLink"
      }), void 0];
      return res;
    });
    const resultAsRPCResponse = results.map(([error, result], index) => {
      const call = info.calls[index];
      if (error) {
        var _call$procedure$_def$4, _call$procedure5;
        return { error: getErrorShape({
          config,
          ctx: ctxManager.valueOrUndefined(),
          error,
          input: call.result(),
          path: call.path,
          type: (_call$procedure$_def$4 = (_call$procedure5 = call.procedure) === null || _call$procedure5 === void 0 ? void 0 : _call$procedure5._def.type) !== null && _call$procedure$_def$4 !== void 0 ? _call$procedure$_def$4 : "unknown"
        }) };
      }
      return { result: { data: result.data } };
    });
    const errors = results.map(([error]) => error).filter(Boolean);
    const headResponse = initResponse({
      ctx: ctxManager.valueOrUndefined(),
      info,
      responseMeta: opts.responseMeta,
      untransformedJSON: resultAsRPCResponse,
      errors,
      headers
    });
    return new Response(JSON.stringify(transformTRPCResponse(config, resultAsRPCResponse)), {
      status: headResponse.status,
      headers
    });
  } catch (cause) {
    var _info$type2;
    const [_infoError, info] = infoTuple;
    const ctx = ctxManager.valueOrUndefined();
    const { error, untransformedJSON, body } = caughtErrorToData(cause, {
      opts,
      ctx: ctxManager.valueOrUndefined(),
      type: (_info$type2 = info === null || info === void 0 ? void 0 : info.type) !== null && _info$type2 !== void 0 ? _info$type2 : "unknown"
    });
    const headResponse = initResponse({
      ctx,
      info,
      responseMeta: opts.responseMeta,
      untransformedJSON,
      errors: [error],
      headers
    });
    return new Response(body, {
      status: headResponse.status,
      headers
    });
  }
}
__name(resolveResponse, "resolveResponse");

// ../node_modules/.pnpm/@trpc+server@11.4.3_typescript@5.8.3/node_modules/@trpc/server/dist/adapters/fetch/index.mjs
var import_objectSpread24 = __toESM(require_objectSpread2(), 1);
var trimSlashes = /* @__PURE__ */ __name((path) => {
  path = path.startsWith("/") ? path.slice(1) : path;
  path = path.endsWith("/") ? path.slice(0, -1) : path;
  return path;
}, "trimSlashes");
async function fetchRequestHandler(opts) {
  const resHeaders = new Headers();
  const createContext2 = /* @__PURE__ */ __name(async (innerOpts) => {
    var _opts$createContext;
    return (_opts$createContext = opts.createContext) === null || _opts$createContext === void 0 ? void 0 : _opts$createContext.call(opts, (0, import_objectSpread24.default)({
      req: opts.req,
      resHeaders
    }, innerOpts));
  }, "createContext");
  const url = new URL(opts.req.url);
  const pathname = trimSlashes(url.pathname);
  const endpoint = trimSlashes(opts.endpoint);
  const path = trimSlashes(pathname.slice(endpoint.length));
  return await resolveResponse((0, import_objectSpread24.default)((0, import_objectSpread24.default)({}, opts), {}, {
    req: opts.req,
    createContext: createContext2,
    path,
    error: null,
    onError(o) {
      var _opts$onError;
      opts === null || opts === void 0 || (_opts$onError = opts.onError) === null || _opts$onError === void 0 || _opts$onError.call(opts, (0, import_objectSpread24.default)((0, import_objectSpread24.default)({}, o), {}, { req: opts.req }));
    },
    responseMeta(data) {
      var _opts$responseMeta;
      const meta = (_opts$responseMeta = opts.responseMeta) === null || _opts$responseMeta === void 0 ? void 0 : _opts$responseMeta.call(opts, data);
      if (meta === null || meta === void 0 ? void 0 : meta.headers) {
        if (meta.headers instanceof Headers) for (const [key, value] of meta.headers.entries()) resHeaders.append(key, value);
        else
          for (const [key, value] of Object.entries(meta.headers)) if (Array.isArray(value)) for (const v of value) resHeaders.append(key, v);
          else if (typeof value === "string") resHeaders.set(key, value);
      }
      return {
        headers: resHeaders,
        status: meta === null || meta === void 0 ? void 0 : meta.status
      };
    }
  }));
}
__name(fetchRequestHandler, "fetchRequestHandler");

// src/context.ts
var createContext = /* @__PURE__ */ __name(async ({
  req,
  env,
  resHeaders
}) => {
  return {
    req,
    env,
    resHeaders
  };
}, "createContext");

// ../node_modules/.pnpm/@trpc+server@11.4.3_typescript@5.8.3/node_modules/@trpc/server/dist/initTRPC-IT_6ZYJd.mjs
var import_objectSpread2$2 = __toESM(require_objectSpread2(), 1);
var middlewareMarker = "middlewareMarker";
function createMiddlewareFactory() {
  function createMiddlewareInner(middlewares) {
    return {
      _middlewares: middlewares,
      unstable_pipe(middlewareBuilderOrFn) {
        const pipedMiddleware = "_middlewares" in middlewareBuilderOrFn ? middlewareBuilderOrFn._middlewares : [middlewareBuilderOrFn];
        return createMiddlewareInner([...middlewares, ...pipedMiddleware]);
      }
    };
  }
  __name(createMiddlewareInner, "createMiddlewareInner");
  function createMiddleware(fn) {
    return createMiddlewareInner([fn]);
  }
  __name(createMiddleware, "createMiddleware");
  return createMiddleware;
}
__name(createMiddlewareFactory, "createMiddlewareFactory");
function createInputMiddleware(parse) {
  const inputMiddleware = /* @__PURE__ */ __name(async function inputValidatorMiddleware(opts) {
    let parsedInput;
    const rawInput = await opts.getRawInput();
    try {
      parsedInput = await parse(rawInput);
    } catch (cause) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        cause
      });
    }
    const combinedInput = isObject(opts.input) && isObject(parsedInput) ? (0, import_objectSpread2$2.default)((0, import_objectSpread2$2.default)({}, opts.input), parsedInput) : parsedInput;
    return opts.next({ input: combinedInput });
  }, "inputValidatorMiddleware");
  inputMiddleware._type = "input";
  return inputMiddleware;
}
__name(createInputMiddleware, "createInputMiddleware");
function createOutputMiddleware(parse) {
  const outputMiddleware = /* @__PURE__ */ __name(async function outputValidatorMiddleware({ next }) {
    const result = await next();
    if (!result.ok) return result;
    try {
      const data = await parse(result.data);
      return (0, import_objectSpread2$2.default)((0, import_objectSpread2$2.default)({}, result), {}, { data });
    } catch (cause) {
      throw new TRPCError({
        message: "Output validation failed",
        code: "INTERNAL_SERVER_ERROR",
        cause
      });
    }
  }, "outputValidatorMiddleware");
  outputMiddleware._type = "output";
  return outputMiddleware;
}
__name(createOutputMiddleware, "createOutputMiddleware");
var import_defineProperty3 = __toESM(require_defineProperty(), 1);
var StandardSchemaV1Error = class extends Error {
  static {
    __name(this, "StandardSchemaV1Error");
  }
  /**
  * Creates a schema error with useful information.
  *
  * @param issues The schema issues.
  */
  constructor(issues) {
    var _issues$;
    super((_issues$ = issues[0]) === null || _issues$ === void 0 ? void 0 : _issues$.message);
    (0, import_defineProperty3.default)(this, "issues", void 0);
    this.name = "SchemaError";
    this.issues = issues;
  }
};
function getParseFn(procedureParser) {
  const parser = procedureParser;
  const isStandardSchema = "~standard" in parser;
  if (typeof parser === "function" && typeof parser.assert === "function") return parser.assert.bind(parser);
  if (typeof parser === "function" && !isStandardSchema) return parser;
  if (typeof parser.parseAsync === "function") return parser.parseAsync.bind(parser);
  if (typeof parser.parse === "function") return parser.parse.bind(parser);
  if (typeof parser.validateSync === "function") return parser.validateSync.bind(parser);
  if (typeof parser.create === "function") return parser.create.bind(parser);
  if (typeof parser.assert === "function") return (value) => {
    parser.assert(value);
    return value;
  };
  if (isStandardSchema) return async (value) => {
    const result = await parser["~standard"].validate(value);
    if (result.issues) throw new StandardSchemaV1Error(result.issues);
    return result.value;
  };
  throw new Error("Could not find a validator fn");
}
__name(getParseFn, "getParseFn");
var require_objectWithoutPropertiesLoose = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutPropertiesLoose.js"(exports, module) {
  function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t2 = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (e.includes(n)) continue;
      t2[n] = r[n];
    }
    return t2;
  }
  __name(_objectWithoutPropertiesLoose, "_objectWithoutPropertiesLoose");
  module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var require_objectWithoutProperties = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutProperties.js"(exports, module) {
  var objectWithoutPropertiesLoose = require_objectWithoutPropertiesLoose();
  function _objectWithoutProperties$1(e, t2) {
    if (null == e) return {};
    var o, r, i = objectWithoutPropertiesLoose(e, t2);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (r = 0; r < s.length; r++) o = s[r], t2.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  __name(_objectWithoutProperties$1, "_objectWithoutProperties$1");
  module.exports = _objectWithoutProperties$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var import_objectWithoutProperties = __toESM(require_objectWithoutProperties(), 1);
var import_objectSpread2$13 = __toESM(require_objectSpread2(), 1);
var _excluded = [
  "middlewares",
  "inputs",
  "meta"
];
function createNewBuilder(def1, def2) {
  const { middlewares = [], inputs, meta } = def2, rest = (0, import_objectWithoutProperties.default)(def2, _excluded);
  return createBuilder((0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, mergeWithoutOverrides(def1, rest)), {}, {
    inputs: [...def1.inputs, ...inputs !== null && inputs !== void 0 ? inputs : []],
    middlewares: [...def1.middlewares, ...middlewares],
    meta: def1.meta && meta ? (0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, def1.meta), meta) : meta !== null && meta !== void 0 ? meta : def1.meta
  }));
}
__name(createNewBuilder, "createNewBuilder");
function createBuilder(initDef = {}) {
  const _def = (0, import_objectSpread2$13.default)({
    procedure: true,
    inputs: [],
    middlewares: []
  }, initDef);
  const builder = {
    _def,
    input(input) {
      const parser = getParseFn(input);
      return createNewBuilder(_def, {
        inputs: [input],
        middlewares: [createInputMiddleware(parser)]
      });
    },
    output(output) {
      const parser = getParseFn(output);
      return createNewBuilder(_def, {
        output,
        middlewares: [createOutputMiddleware(parser)]
      });
    },
    meta(meta) {
      return createNewBuilder(_def, { meta });
    },
    use(middlewareBuilderOrFn) {
      const middlewares = "_middlewares" in middlewareBuilderOrFn ? middlewareBuilderOrFn._middlewares : [middlewareBuilderOrFn];
      return createNewBuilder(_def, { middlewares });
    },
    unstable_concat(builder$1) {
      return createNewBuilder(_def, builder$1._def);
    },
    concat(builder$1) {
      return createNewBuilder(_def, builder$1._def);
    },
    query(resolver) {
      return createResolver((0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, _def), {}, { type: "query" }), resolver);
    },
    mutation(resolver) {
      return createResolver((0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, _def), {}, { type: "mutation" }), resolver);
    },
    subscription(resolver) {
      return createResolver((0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, _def), {}, { type: "subscription" }), resolver);
    },
    experimental_caller(caller) {
      return createNewBuilder(_def, { caller });
    }
  };
  return builder;
}
__name(createBuilder, "createBuilder");
function createResolver(_defIn, resolver) {
  const finalBuilder = createNewBuilder(_defIn, {
    resolver,
    middlewares: [/* @__PURE__ */ __name(async function resolveMiddleware(opts) {
      const data = await resolver(opts);
      return {
        marker: middlewareMarker,
        ok: true,
        data,
        ctx: opts.ctx
      };
    }, "resolveMiddleware")]
  });
  const _def = (0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, finalBuilder._def), {}, {
    type: _defIn.type,
    experimental_caller: Boolean(finalBuilder._def.caller),
    meta: finalBuilder._def.meta,
    $types: null
  });
  const invoke = createProcedureCaller(finalBuilder._def);
  const callerOverride = finalBuilder._def.caller;
  if (!callerOverride) return invoke;
  const callerWrapper = /* @__PURE__ */ __name(async (...args) => {
    return await callerOverride({
      args,
      invoke,
      _def
    });
  }, "callerWrapper");
  callerWrapper._def = _def;
  return callerWrapper;
}
__name(createResolver, "createResolver");
var codeblock = `
This is a client-only function.
If you want to call this function on the server, see https://trpc.io/docs/v11/server/server-side-calls
`.trim();
async function callRecursive(index, _def, opts) {
  try {
    const middleware = _def.middlewares[index];
    const result = await middleware((0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, opts), {}, {
      meta: _def.meta,
      input: opts.input,
      next(_nextOpts) {
        var _nextOpts$getRawInput;
        const nextOpts = _nextOpts;
        return callRecursive(index + 1, _def, (0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, opts), {}, {
          ctx: (nextOpts === null || nextOpts === void 0 ? void 0 : nextOpts.ctx) ? (0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, opts.ctx), nextOpts.ctx) : opts.ctx,
          input: nextOpts && "input" in nextOpts ? nextOpts.input : opts.input,
          getRawInput: (_nextOpts$getRawInput = nextOpts === null || nextOpts === void 0 ? void 0 : nextOpts.getRawInput) !== null && _nextOpts$getRawInput !== void 0 ? _nextOpts$getRawInput : opts.getRawInput
        }));
      }
    }));
    return result;
  } catch (cause) {
    return {
      ok: false,
      error: getTRPCErrorFromUnknown(cause),
      marker: middlewareMarker
    };
  }
}
__name(callRecursive, "callRecursive");
function createProcedureCaller(_def) {
  async function procedure(opts) {
    if (!opts || !("getRawInput" in opts)) throw new Error(codeblock);
    const result = await callRecursive(0, _def, opts);
    if (!result) throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "No result from middlewares - did you forget to `return next()`?"
    });
    if (!result.ok) throw result.error;
    return result.data;
  }
  __name(procedure, "procedure");
  procedure._def = _def;
  procedure.procedure = true;
  procedure.meta = _def.meta;
  return procedure;
}
__name(createProcedureCaller, "createProcedureCaller");
var _globalThis$process;
var _globalThis$process2;
var _globalThis$process3;
var isServerDefault = typeof window === "undefined" || "Deno" in window || ((_globalThis$process = globalThis.process) === null || _globalThis$process === void 0 || (_globalThis$process = _globalThis$process.env) === null || _globalThis$process === void 0 ? void 0 : _globalThis$process["NODE_ENV"]) === "test" || !!((_globalThis$process2 = globalThis.process) === null || _globalThis$process2 === void 0 || (_globalThis$process2 = _globalThis$process2.env) === null || _globalThis$process2 === void 0 ? void 0 : _globalThis$process2["JEST_WORKER_ID"]) || !!((_globalThis$process3 = globalThis.process) === null || _globalThis$process3 === void 0 || (_globalThis$process3 = _globalThis$process3.env) === null || _globalThis$process3 === void 0 ? void 0 : _globalThis$process3["VITEST_WORKER_ID"]);
var import_objectSpread25 = __toESM(require_objectSpread2(), 1);
var TRPCBuilder = class TRPCBuilder2 {
  static {
    __name(this, "TRPCBuilder");
  }
  /**
  * Add a context shape as a generic to the root object
  * @see https://trpc.io/docs/v11/server/context
  */
  context() {
    return new TRPCBuilder2();
  }
  /**
  * Add a meta shape as a generic to the root object
  * @see https://trpc.io/docs/v11/quickstart
  */
  meta() {
    return new TRPCBuilder2();
  }
  /**
  * Create the root object
  * @see https://trpc.io/docs/v11/server/routers#initialize-trpc
  */
  create(opts) {
    var _opts$transformer, _opts$isDev, _globalThis$process$1, _opts$allowOutsideOfS, _opts$errorFormatter, _opts$isServer;
    const config = (0, import_objectSpread25.default)((0, import_objectSpread25.default)({}, opts), {}, {
      transformer: getDataTransformer((_opts$transformer = opts === null || opts === void 0 ? void 0 : opts.transformer) !== null && _opts$transformer !== void 0 ? _opts$transformer : defaultTransformer),
      isDev: (_opts$isDev = opts === null || opts === void 0 ? void 0 : opts.isDev) !== null && _opts$isDev !== void 0 ? _opts$isDev : ((_globalThis$process$1 = globalThis.process) === null || _globalThis$process$1 === void 0 ? void 0 : _globalThis$process$1.env["NODE_ENV"]) !== "production",
      allowOutsideOfServer: (_opts$allowOutsideOfS = opts === null || opts === void 0 ? void 0 : opts.allowOutsideOfServer) !== null && _opts$allowOutsideOfS !== void 0 ? _opts$allowOutsideOfS : false,
      errorFormatter: (_opts$errorFormatter = opts === null || opts === void 0 ? void 0 : opts.errorFormatter) !== null && _opts$errorFormatter !== void 0 ? _opts$errorFormatter : defaultFormatter,
      isServer: (_opts$isServer = opts === null || opts === void 0 ? void 0 : opts.isServer) !== null && _opts$isServer !== void 0 ? _opts$isServer : isServerDefault,
      $types: null
    });
    {
      var _opts$isServer2;
      const isServer = (_opts$isServer2 = opts === null || opts === void 0 ? void 0 : opts.isServer) !== null && _opts$isServer2 !== void 0 ? _opts$isServer2 : isServerDefault;
      if (!isServer && (opts === null || opts === void 0 ? void 0 : opts.allowOutsideOfServer) !== true) throw new Error(`You're trying to use @trpc/server in a non-server environment. This is not supported by default.`);
    }
    return {
      _config: config,
      procedure: createBuilder({ meta: opts === null || opts === void 0 ? void 0 : opts.defaultMeta }),
      middleware: createMiddlewareFactory(),
      router: createRouterFactory(config),
      mergeRouters,
      createCallerFactory: createCallerFactory()
    };
  }
};
var initTRPC = new TRPCBuilder();

// src/trpc.ts
var t = initTRPC.context().create();
var router = t.router;
var publicProcedure = t.procedure;

// src/routes/routes.ts
var appRouter = router({});

// src/index.ts
var src_default = {
  async fetch(request, env) {
    return fetchRequestHandler({
      endpoint: "/api",
      req: request,
      router: appRouter,
      createContext: /* @__PURE__ */ __name((options) => createContext({
        ...options,
        env
      }), "createContext")
    });
  }
};

// ../node_modules/.pnpm/wrangler@4.27.0_@cloudflare+workers-types@4.20250801.0/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../node_modules/.pnpm/wrangler@4.27.0_@cloudflare+workers-types@4.20250801.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-1UBCjL/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// ../node_modules/.pnpm/wrangler@4.27.0_@cloudflare+workers-types@4.20250801.0/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-1UBCjL/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*! Bundled license information:

@trpc/server/dist/resolveResponse-CzlbRpCI.mjs:
@trpc/server/dist/resolveResponse-CzlbRpCI.mjs:
  (* istanbul ignore if -- @preserve *)
*/
//# sourceMappingURL=index.js.map
