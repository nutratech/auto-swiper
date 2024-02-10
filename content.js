var pr = Object.defineProperty;
var fr = (ue, V, re) =>
  V in ue
    ? pr(ue, V, { enumerable: !0, configurable: !0, writable: !0, value: re })
    : (ue[V] = re);
var v = (ue, V, re) => (fr(ue, typeof V != "symbol" ? V + "" : V, re), re);
(function () {
  "use strict";
  var ue =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {};
  function V(t) {
    return t &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, "default")
      ? t.default
      : t;
  }
  var re = { exports: {} };
  (function (t, e) {
    (function (r, i) {
      i(t);
    })(
      typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : ue,
      function (r) {
        var i, n;
        if (
          !(
            (n = (i = globalThis.chrome) == null ? void 0 : i.runtime) !=
              null && n.id
          )
        )
          throw new Error(
            "This script should only be loaded in a browser extension."
          );
        if (
          typeof globalThis.browser > "u" ||
          Object.getPrototypeOf(globalThis.browser) !== Object.prototype
        ) {
          const o = "The message port closed before a response was received.",
            a = (l) => {
              const u = {
                alarms: {
                  clear: { minArgs: 0, maxArgs: 1 },
                  clearAll: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                },
                bookmarks: {
                  create: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getChildren: { minArgs: 1, maxArgs: 1 },
                  getRecent: { minArgs: 1, maxArgs: 1 },
                  getSubTree: { minArgs: 1, maxArgs: 1 },
                  getTree: { minArgs: 0, maxArgs: 0 },
                  move: { minArgs: 2, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeTree: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                browserAction: {
                  disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                  getBadgeText: { minArgs: 1, maxArgs: 1 },
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  openPopup: { minArgs: 0, maxArgs: 0 },
                  setBadgeBackgroundColor: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setBadgeText: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                },
                browsingData: {
                  remove: { minArgs: 2, maxArgs: 2 },
                  removeCache: { minArgs: 1, maxArgs: 1 },
                  removeCookies: { minArgs: 1, maxArgs: 1 },
                  removeDownloads: { minArgs: 1, maxArgs: 1 },
                  removeFormData: { minArgs: 1, maxArgs: 1 },
                  removeHistory: { minArgs: 1, maxArgs: 1 },
                  removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                  removePasswords: { minArgs: 1, maxArgs: 1 },
                  removePluginData: { minArgs: 1, maxArgs: 1 },
                  settings: { minArgs: 0, maxArgs: 0 },
                },
                commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                contextMenus: {
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeAll: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                cookies: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 1, maxArgs: 1 },
                  getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
                devtools: {
                  inspectedWindow: {
                    eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                  },
                  panels: {
                    create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                    elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } },
                  },
                },
                downloads: {
                  cancel: { minArgs: 1, maxArgs: 1 },
                  download: { minArgs: 1, maxArgs: 1 },
                  erase: { minArgs: 1, maxArgs: 1 },
                  getFileIcon: { minArgs: 1, maxArgs: 2 },
                  open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  pause: { minArgs: 1, maxArgs: 1 },
                  removeFile: { minArgs: 1, maxArgs: 1 },
                  resume: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                extension: {
                  isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                  isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
                },
                history: {
                  addUrl: { minArgs: 1, maxArgs: 1 },
                  deleteAll: { minArgs: 0, maxArgs: 0 },
                  deleteRange: { minArgs: 1, maxArgs: 1 },
                  deleteUrl: { minArgs: 1, maxArgs: 1 },
                  getVisits: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                },
                i18n: {
                  detectLanguage: { minArgs: 1, maxArgs: 1 },
                  getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
                },
                identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                management: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getSelf: { minArgs: 0, maxArgs: 0 },
                  setEnabled: { minArgs: 2, maxArgs: 2 },
                  uninstallSelf: { minArgs: 0, maxArgs: 1 },
                },
                notifications: {
                  clear: { minArgs: 1, maxArgs: 1 },
                  create: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                pageAction: {
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                permissions: {
                  contains: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  request: { minArgs: 1, maxArgs: 1 },
                },
                runtime: {
                  getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                  getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                  openOptionsPage: { minArgs: 0, maxArgs: 0 },
                  requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                  sendMessage: { minArgs: 1, maxArgs: 3 },
                  sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                  setUninstallURL: { minArgs: 1, maxArgs: 1 },
                },
                sessions: {
                  getDevices: { minArgs: 0, maxArgs: 1 },
                  getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                  restore: { minArgs: 0, maxArgs: 1 },
                },
                storage: {
                  local: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                  managed: {
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  },
                  sync: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                },
                tabs: {
                  captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                  create: { minArgs: 1, maxArgs: 1 },
                  detectLanguage: { minArgs: 0, maxArgs: 1 },
                  discard: { minArgs: 0, maxArgs: 1 },
                  duplicate: { minArgs: 1, maxArgs: 1 },
                  executeScript: { minArgs: 1, maxArgs: 2 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 0 },
                  getZoom: { minArgs: 0, maxArgs: 1 },
                  getZoomSettings: { minArgs: 0, maxArgs: 1 },
                  goBack: { minArgs: 0, maxArgs: 1 },
                  goForward: { minArgs: 0, maxArgs: 1 },
                  highlight: { minArgs: 1, maxArgs: 1 },
                  insertCSS: { minArgs: 1, maxArgs: 2 },
                  move: { minArgs: 2, maxArgs: 2 },
                  query: { minArgs: 1, maxArgs: 1 },
                  reload: { minArgs: 0, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeCSS: { minArgs: 1, maxArgs: 2 },
                  sendMessage: { minArgs: 2, maxArgs: 3 },
                  setZoom: { minArgs: 1, maxArgs: 2 },
                  setZoomSettings: { minArgs: 1, maxArgs: 2 },
                  update: { minArgs: 1, maxArgs: 2 },
                },
                topSites: { get: { minArgs: 0, maxArgs: 0 } },
                webNavigation: {
                  getAllFrames: { minArgs: 1, maxArgs: 1 },
                  getFrame: { minArgs: 1, maxArgs: 1 },
                },
                webRequest: {
                  handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
                },
                windows: {
                  create: { minArgs: 0, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 1 },
                  getLastFocused: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
              };
              if (Object.keys(u).length === 0)
                throw new Error(
                  "api-metadata.json has not been included in browser-polyfill"
                );
              class c extends WeakMap {
                constructor(_, C = void 0) {
                  super(C), (this.createItem = _);
                }
                get(_) {
                  return (
                    this.has(_) || this.set(_, this.createItem(_)), super.get(_)
                  );
                }
              }
              const h = (y) =>
                  y && typeof y == "object" && typeof y.then == "function",
                g =
                  (y, _) =>
                  (...C) => {
                    l.runtime.lastError
                      ? y.reject(new Error(l.runtime.lastError.message))
                      : _.singleCallbackArg ||
                        (C.length <= 1 && _.singleCallbackArg !== !1)
                      ? y.resolve(C[0])
                      : y.resolve(C);
                  },
                p = (y) => (y == 1 ? "argument" : "arguments"),
                d = (y, _) =>
                  function (T, ...L) {
                    if (L.length < _.minArgs)
                      throw new Error(
                        `Expected at least ${_.minArgs} ${p(
                          _.minArgs
                        )} for ${y}(), got ${L.length}`
                      );
                    if (L.length > _.maxArgs)
                      throw new Error(
                        `Expected at most ${_.maxArgs} ${p(
                          _.maxArgs
                        )} for ${y}(), got ${L.length}`
                      );
                    return new Promise((F, j) => {
                      if (_.fallbackToNoCallback)
                        try {
                          T[y](...L, g({ resolve: F, reject: j }, _));
                        } catch (k) {
                          console.warn(
                            `${y} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                            k
                          ),
                            T[y](...L),
                            (_.fallbackToNoCallback = !1),
                            (_.noCallback = !0),
                            F();
                        }
                      else
                        _.noCallback
                          ? (T[y](...L), F())
                          : T[y](...L, g({ resolve: F, reject: j }, _));
                    });
                  },
                m = (y, _, C) =>
                  new Proxy(_, {
                    apply(T, L, F) {
                      return C.call(L, y, ...F);
                    },
                  });
              let x = Function.call.bind(Object.prototype.hasOwnProperty);
              const w = (y, _ = {}, C = {}) => {
                  let T = Object.create(null),
                    L = {
                      has(j, k) {
                        return k in y || k in T;
                      },
                      get(j, k, K) {
                        if (k in T) return T[k];
                        if (!(k in y)) return;
                        let U = y[k];
                        if (typeof U == "function")
                          if (typeof _[k] == "function") U = m(y, y[k], _[k]);
                          else if (x(C, k)) {
                            let ve = d(k, C[k]);
                            U = m(y, y[k], ve);
                          } else U = U.bind(y);
                        else if (
                          typeof U == "object" &&
                          U !== null &&
                          (x(_, k) || x(C, k))
                        )
                          U = w(U, _[k], C[k]);
                        else if (x(C, "*")) U = w(U, _[k], C["*"]);
                        else
                          return (
                            Object.defineProperty(T, k, {
                              configurable: !0,
                              enumerable: !0,
                              get() {
                                return y[k];
                              },
                              set(ve) {
                                y[k] = ve;
                              },
                            }),
                            U
                          );
                        return (T[k] = U), U;
                      },
                      set(j, k, K, U) {
                        return k in T ? (T[k] = K) : (y[k] = K), !0;
                      },
                      defineProperty(j, k, K) {
                        return Reflect.defineProperty(T, k, K);
                      },
                      deleteProperty(j, k) {
                        return Reflect.deleteProperty(T, k);
                      },
                    },
                    F = Object.create(y);
                  return new Proxy(F, L);
                },
                D = (y) => ({
                  addListener(_, C, ...T) {
                    _.addListener(y.get(C), ...T);
                  },
                  hasListener(_, C) {
                    return _.hasListener(y.get(C));
                  },
                  removeListener(_, C) {
                    _.removeListener(y.get(C));
                  },
                }),
                M = new c((y) =>
                  typeof y != "function"
                    ? y
                    : function (C) {
                        const T = w(
                          C,
                          {},
                          { getContent: { minArgs: 0, maxArgs: 0 } }
                        );
                        y(T);
                      }
                ),
                H = new c((y) =>
                  typeof y != "function"
                    ? y
                    : function (C, T, L) {
                        let F = !1,
                          j,
                          k = new Promise((xe) => {
                            j = function (Q) {
                              (F = !0), xe(Q);
                            };
                          }),
                          K;
                        try {
                          K = y(C, T, j);
                        } catch (xe) {
                          K = Promise.reject(xe);
                        }
                        const U = K !== !0 && h(K);
                        if (K !== !0 && !U && !F) return !1;
                        const ve = (xe) => {
                          xe.then(
                            (Q) => {
                              L(Q);
                            },
                            (Q) => {
                              let rt;
                              Q &&
                              (Q instanceof Error ||
                                typeof Q.message == "string")
                                ? (rt = Q.message)
                                : (rt = "An unexpected error occurred"),
                                L({
                                  __mozWebExtensionPolyfillReject__: !0,
                                  message: rt,
                                });
                            }
                          ).catch((Q) => {
                            console.error(
                              "Failed to send onMessage rejected reply",
                              Q
                            );
                          });
                        };
                        return ve(U ? K : k), !0;
                      }
                ),
                pe = ({ reject: y, resolve: _ }, C) => {
                  l.runtime.lastError
                    ? l.runtime.lastError.message === o
                      ? _()
                      : y(new Error(l.runtime.lastError.message))
                    : C && C.__mozWebExtensionPolyfillReject__
                    ? y(new Error(C.message))
                    : _(C);
                },
                Y = (y, _, C, ...T) => {
                  if (T.length < _.minArgs)
                    throw new Error(
                      `Expected at least ${_.minArgs} ${p(
                        _.minArgs
                      )} for ${y}(), got ${T.length}`
                    );
                  if (T.length > _.maxArgs)
                    throw new Error(
                      `Expected at most ${_.maxArgs} ${p(
                        _.maxArgs
                      )} for ${y}(), got ${T.length}`
                    );
                  return new Promise((L, F) => {
                    const j = pe.bind(null, { resolve: L, reject: F });
                    T.push(j), C.sendMessage(...T);
                  });
                },
                tt = {
                  devtools: { network: { onRequestFinished: D(M) } },
                  runtime: {
                    onMessage: D(H),
                    onMessageExternal: D(H),
                    sendMessage: Y.bind(null, "sendMessage", {
                      minArgs: 1,
                      maxArgs: 3,
                    }),
                  },
                  tabs: {
                    sendMessage: Y.bind(null, "sendMessage", {
                      minArgs: 2,
                      maxArgs: 3,
                    }),
                  },
                },
                z = {
                  clear: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                };
              return (
                (u.privacy = {
                  network: { "*": z },
                  services: { "*": z },
                  websites: { "*": z },
                }),
                w(l, tt, u)
              );
            };
          r.exports = a(chrome);
        } else r.exports = globalThis.browser;
      }
    );
  })(re);
  var qt = re.exports;
  const E = V(qt);
  var Z = { DEBUG: !1, LIB_VERSION: "2.48.1" },
    R;
  if (typeof window > "u") {
    var it = { hostname: "" };
    R = {
      navigator: { userAgent: "" },
      document: { location: it, referrer: "" },
      screen: { width: 0, height: 0 },
      location: it,
    };
  } else R = window;
  var ke = Array.prototype,
    Pt = Function.prototype,
    st = Object.prototype,
    ie = ke.slice,
    we = st.toString,
    Ee = st.hasOwnProperty,
    N = R.console,
    se = R.navigator,
    I = R.document,
    Ce = R.opera,
    qe = R.screen,
    G = se.userAgent,
    Re = Pt.bind,
    nt = ke.forEach,
    ot = ke.indexOf,
    at = ke.map,
    Tt = Array.isArray,
    Ne = {},
    s = {
      trim: function (t) {
        return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      },
    },
    q = {
      log: function () {
        if (Z.DEBUG && !s.isUndefined(N) && N)
          try {
            N.log.apply(N, arguments);
          } catch {
            s.each(arguments, function (e) {
              N.log(e);
            });
          }
      },
      warn: function () {
        if (Z.DEBUG && !s.isUndefined(N) && N) {
          var t = ["Mixpanel warning:"].concat(s.toArray(arguments));
          try {
            N.warn.apply(N, t);
          } catch {
            s.each(t, function (r) {
              N.warn(r);
            });
          }
        }
      },
      error: function () {
        if (Z.DEBUG && !s.isUndefined(N) && N) {
          var t = ["Mixpanel error:"].concat(s.toArray(arguments));
          try {
            N.error.apply(N, t);
          } catch {
            s.each(t, function (r) {
              N.error(r);
            });
          }
        }
      },
      critical: function () {
        if (!s.isUndefined(N) && N) {
          var t = ["Mixpanel error:"].concat(s.toArray(arguments));
          try {
            N.error.apply(N, t);
          } catch {
            s.each(t, function (r) {
              N.error(r);
            });
          }
        }
      },
    },
    Ue = function (t, e) {
      return function () {
        return (
          (arguments[0] = "[" + e + "] " + arguments[0]), t.apply(q, arguments)
        );
      };
    },
    Le = function (t) {
      return {
        log: Ue(q.log, t),
        error: Ue(q.error, t),
        critical: Ue(q.critical, t),
      };
    };
  (s.bind = function (t, e) {
    var r, i;
    if (Re && t.bind === Re) return Re.apply(t, ie.call(arguments, 1));
    if (!s.isFunction(t)) throw new TypeError();
    return (
      (r = ie.call(arguments, 2)),
      (i = function () {
        if (!(this instanceof i))
          return t.apply(e, r.concat(ie.call(arguments)));
        var n = {};
        n.prototype = t.prototype;
        var o = new n();
        n.prototype = null;
        var a = t.apply(o, r.concat(ie.call(arguments)));
        return Object(a) === a ? a : o;
      }),
      i
    );
  }),
    (s.each = function (t, e, r) {
      if (t != null) {
        if (nt && t.forEach === nt) t.forEach(e, r);
        else if (t.length === +t.length) {
          for (var i = 0, n = t.length; i < n; i++)
            if (i in t && e.call(r, t[i], i, t) === Ne) return;
        } else
          for (var o in t)
            if (Ee.call(t, o) && e.call(r, t[o], o, t) === Ne) return;
      }
    }),
    (s.extend = function (t) {
      return (
        s.each(ie.call(arguments, 1), function (e) {
          for (var r in e) e[r] !== void 0 && (t[r] = e[r]);
        }),
        t
      );
    }),
    (s.isArray =
      Tt ||
      function (t) {
        return we.call(t) === "[object Array]";
      }),
    (s.isFunction = function (t) {
      try {
        return /^\s*\bfunction\b/.test(t);
      } catch {
        return !1;
      }
    }),
    (s.isArguments = function (t) {
      return !!(t && Ee.call(t, "callee"));
    }),
    (s.toArray = function (t) {
      return t
        ? t.toArray
          ? t.toArray()
          : s.isArray(t) || s.isArguments(t)
          ? ie.call(t)
          : s.values(t)
        : [];
    }),
    (s.map = function (t, e, r) {
      if (at && t.map === at) return t.map(e, r);
      var i = [];
      return (
        s.each(t, function (n) {
          i.push(e.call(r, n));
        }),
        i
      );
    }),
    (s.keys = function (t) {
      var e = [];
      return (
        t === null ||
          s.each(t, function (r, i) {
            e[e.length] = i;
          }),
        e
      );
    }),
    (s.values = function (t) {
      var e = [];
      return (
        t === null ||
          s.each(t, function (r) {
            e[e.length] = r;
          }),
        e
      );
    }),
    (s.include = function (t, e) {
      var r = !1;
      return t === null
        ? r
        : ot && t.indexOf === ot
        ? t.indexOf(e) != -1
        : (s.each(t, function (i) {
            if (r || (r = i === e)) return Ne;
          }),
          r);
    }),
    (s.includes = function (t, e) {
      return t.indexOf(e) !== -1;
    }),
    (s.inherit = function (t, e) {
      return (
        (t.prototype = new e()),
        (t.prototype.constructor = t),
        (t.superclass = e.prototype),
        t
      );
    }),
    (s.isObject = function (t) {
      return t === Object(t) && !s.isArray(t);
    }),
    (s.isEmptyObject = function (t) {
      if (s.isObject(t)) {
        for (var e in t) if (Ee.call(t, e)) return !1;
        return !0;
      }
      return !1;
    }),
    (s.isUndefined = function (t) {
      return t === void 0;
    }),
    (s.isString = function (t) {
      return we.call(t) == "[object String]";
    }),
    (s.isDate = function (t) {
      return we.call(t) == "[object Date]";
    }),
    (s.isNumber = function (t) {
      return we.call(t) == "[object Number]";
    }),
    (s.isElement = function (t) {
      return !!(t && t.nodeType === 1);
    }),
    (s.encodeDates = function (t) {
      return (
        s.each(t, function (e, r) {
          s.isDate(e)
            ? (t[r] = s.formatDate(e))
            : s.isObject(e) && (t[r] = s.encodeDates(e));
        }),
        t
      );
    }),
    (s.timestamp = function () {
      return (
        (Date.now =
          Date.now ||
          function () {
            return +new Date();
          }),
        Date.now()
      );
    }),
    (s.formatDate = function (t) {
      function e(r) {
        return r < 10 ? "0" + r : r;
      }
      return (
        t.getUTCFullYear() +
        "-" +
        e(t.getUTCMonth() + 1) +
        "-" +
        e(t.getUTCDate()) +
        "T" +
        e(t.getUTCHours()) +
        ":" +
        e(t.getUTCMinutes()) +
        ":" +
        e(t.getUTCSeconds())
      );
    }),
    (s.strip_empty_properties = function (t) {
      var e = {};
      return (
        s.each(t, function (r, i) {
          s.isString(r) && r.length > 0 && (e[i] = r);
        }),
        e
      );
    }),
    (s.truncate = function (t, e) {
      var r;
      return (
        typeof t == "string"
          ? (r = t.slice(0, e))
          : s.isArray(t)
          ? ((r = []),
            s.each(t, function (i) {
              r.push(s.truncate(i, e));
            }))
          : s.isObject(t)
          ? ((r = {}),
            s.each(t, function (i, n) {
              r[n] = s.truncate(i, e);
            }))
          : (r = t),
        r
      );
    }),
    (s.JSONEncode = (function () {
      return function (t) {
        var e = t,
          r = function (n) {
            var o =
                /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
              a = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\",
              };
            return (
              (o.lastIndex = 0),
              o.test(n)
                ? '"' +
                  n.replace(o, function (l) {
                    var u = a[l];
                    return typeof u == "string"
                      ? u
                      : "\\u" +
                          ("0000" + l.charCodeAt(0).toString(16)).slice(-4);
                  }) +
                  '"'
                : '"' + n + '"'
            );
          },
          i = function (n, o) {
            var a = "",
              l = "    ",
              u = 0,
              c = "",
              h = "",
              g = 0,
              p = a,
              d = [],
              m = o[n];
            switch (
              (m &&
                typeof m == "object" &&
                typeof m.toJSON == "function" &&
                (m = m.toJSON(n)),
              typeof m)
            ) {
              case "string":
                return r(m);
              case "number":
                return isFinite(m) ? String(m) : "null";
              case "boolean":
              case "null":
                return String(m);
              case "object":
                if (!m) return "null";
                if (((a += l), (d = []), we.apply(m) === "[object Array]")) {
                  for (g = m.length, u = 0; u < g; u += 1)
                    d[u] = i(u, m) || "null";
                  return (
                    (h =
                      d.length === 0
                        ? "[]"
                        : a
                        ? `[
` +
                          a +
                          d.join(
                            `,
` + a
                          ) +
                          `
` +
                          p +
                          "]"
                        : "[" + d.join(",") + "]"),
                    (a = p),
                    h
                  );
                }
                for (c in m)
                  Ee.call(m, c) &&
                    ((h = i(c, m)), h && d.push(r(c) + (a ? ": " : ":") + h));
                return (
                  (h =
                    d.length === 0
                      ? "{}"
                      : a
                      ? "{" + d.join(",") + p + "}"
                      : "{" + d.join(",") + "}"),
                  (a = p),
                  h
                );
            }
          };
        return i("", { "": e });
      };
    })()),
    (s.JSONDecode = (function () {
      var t,
        e,
        r = {
          '"': '"',
          "\\": "\\",
          "/": "/",
          b: "\b",
          f: "\f",
          n: `
`,
          r: "\r",
          t: "	",
        },
        i,
        n = function (d) {
          var m = new SyntaxError(d);
          throw ((m.at = t), (m.text = i), m);
        },
        o = function (d) {
          return (
            d && d !== e && n("Expected '" + d + "' instead of '" + e + "'"),
            (e = i.charAt(t)),
            (t += 1),
            e
          );
        },
        a = function () {
          var d,
            m = "";
          for (e === "-" && ((m = "-"), o("-")); e >= "0" && e <= "9"; )
            (m += e), o();
          if (e === ".") for (m += "."; o() && e >= "0" && e <= "9"; ) m += e;
          if (e === "e" || e === "E")
            for (
              m += e, o(), (e === "-" || e === "+") && ((m += e), o());
              e >= "0" && e <= "9";

            )
              (m += e), o();
          if (((d = +m), !isFinite(d))) n("Bad number");
          else return d;
        },
        l = function () {
          var d,
            m,
            x = "",
            w;
          if (e === '"')
            for (; o(); ) {
              if (e === '"') return o(), x;
              if (e === "\\")
                if ((o(), e === "u")) {
                  for (
                    w = 0, m = 0;
                    m < 4 && ((d = parseInt(o(), 16)), !!isFinite(d));
                    m += 1
                  )
                    w = w * 16 + d;
                  x += String.fromCharCode(w);
                } else if (typeof r[e] == "string") x += r[e];
                else break;
              else x += e;
            }
          n("Bad string");
        },
        u = function () {
          for (; e && e <= " "; ) o();
        },
        c = function () {
          switch (e) {
            case "t":
              return o("t"), o("r"), o("u"), o("e"), !0;
            case "f":
              return o("f"), o("a"), o("l"), o("s"), o("e"), !1;
            case "n":
              return o("n"), o("u"), o("l"), o("l"), null;
          }
          n('Unexpected "' + e + '"');
        },
        h,
        g = function () {
          var d = [];
          if (e === "[") {
            if ((o("["), u(), e === "]")) return o("]"), d;
            for (; e; ) {
              if ((d.push(h()), u(), e === "]")) return o("]"), d;
              o(","), u();
            }
          }
          n("Bad array");
        },
        p = function () {
          var d,
            m = {};
          if (e === "{") {
            if ((o("{"), u(), e === "}")) return o("}"), m;
            for (; e; ) {
              if (
                ((d = l()),
                u(),
                o(":"),
                Object.hasOwnProperty.call(m, d) &&
                  n('Duplicate key "' + d + '"'),
                (m[d] = h()),
                u(),
                e === "}")
              )
                return o("}"), m;
              o(","), u();
            }
          }
          n("Bad object");
        };
      return (
        (h = function () {
          switch ((u(), e)) {
            case "{":
              return p();
            case "[":
              return g();
            case '"':
              return l();
            case "-":
              return a();
            default:
              return e >= "0" && e <= "9" ? a() : c();
          }
        }),
        function (d) {
          var m;
          return (
            (i = d),
            (t = 0),
            (e = " "),
            (m = h()),
            u(),
            e && n("Syntax error"),
            m
          );
        }
      );
    })()),
    (s.base64Encode = function (t) {
      var e =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        r,
        i,
        n,
        o,
        a,
        l,
        u,
        c,
        h = 0,
        g = 0,
        p = "",
        d = [];
      if (!t) return t;
      t = s.utf8Encode(t);
      do
        (r = t.charCodeAt(h++)),
          (i = t.charCodeAt(h++)),
          (n = t.charCodeAt(h++)),
          (c = (r << 16) | (i << 8) | n),
          (o = (c >> 18) & 63),
          (a = (c >> 12) & 63),
          (l = (c >> 6) & 63),
          (u = c & 63),
          (d[g++] = e.charAt(o) + e.charAt(a) + e.charAt(l) + e.charAt(u));
      while (h < t.length);
      switch (((p = d.join("")), t.length % 3)) {
        case 1:
          p = p.slice(0, -2) + "==";
          break;
        case 2:
          p = p.slice(0, -1) + "=";
          break;
      }
      return p;
    }),
    (s.utf8Encode = function (t) {
      t = (t + "")
        .replace(
          /\r\n/g,
          `
`
        )
        .replace(
          /\r/g,
          `
`
        );
      var e = "",
        r,
        i,
        n = 0,
        o;
      for (r = i = 0, n = t.length, o = 0; o < n; o++) {
        var a = t.charCodeAt(o),
          l = null;
        a < 128
          ? i++
          : a > 127 && a < 2048
          ? (l = String.fromCharCode((a >> 6) | 192, (a & 63) | 128))
          : (l = String.fromCharCode(
              (a >> 12) | 224,
              ((a >> 6) & 63) | 128,
              (a & 63) | 128
            )),
          l !== null &&
            (i > r && (e += t.substring(r, i)), (e += l), (r = i = o + 1));
      }
      return i > r && (e += t.substring(r, t.length)), e;
    }),
    (s.UUID = (function () {
      var t = function () {
          var i = 1 * new Date(),
            n;
          if (R.performance && R.performance.now) n = R.performance.now();
          else for (n = 0; i == 1 * new Date(); ) n++;
          return i.toString(16) + Math.floor(n).toString(16);
        },
        e = function () {
          return Math.random().toString(16).replace(".", "");
        },
        r = function () {
          var i = G,
            n,
            o,
            a = [],
            l = 0;
          function u(c, h) {
            var g,
              p = 0;
            for (g = 0; g < h.length; g++) p |= a[g] << (g * 8);
            return c ^ p;
          }
          for (n = 0; n < i.length; n++)
            (o = i.charCodeAt(n)),
              a.unshift(o & 255),
              a.length >= 4 && ((l = u(l, a)), (a = []));
          return a.length > 0 && (l = u(l, a)), l.toString(16);
        };
      return function () {
        var i = (qe.height * qe.width).toString(16);
        return t() + "-" + e() + "-" + r() + "-" + i + "-" + t();
      };
    })());
  var ut = [
    "ahrefsbot",
    "baiduspider",
    "bingbot",
    "bingpreview",
    "chrome-lighthouse",
    "facebookexternal",
    "petalbot",
    "pinterest",
    "screaming frog",
    "yahoo! slurp",
    "yandexbot",
    "adsbot-google",
    "apis-google",
    "duplexweb-google",
    "feedfetcher-google",
    "google favicon",
    "google web preview",
    "google-read-aloud",
    "googlebot",
    "googleweblight",
    "mediapartners-google",
    "storebot-google",
  ];
  (s.isBlockedUA = function (t) {
    var e;
    for (t = t.toLowerCase(), e = 0; e < ut.length; e++)
      if (t.indexOf(ut[e]) !== -1) return !0;
    return !1;
  }),
    (s.HTTPBuildQuery = function (t, e) {
      var r,
        i,
        n = [];
      return (
        s.isUndefined(e) && (e = "&"),
        s.each(t, function (o, a) {
          (r = encodeURIComponent(o.toString())),
            (i = encodeURIComponent(a)),
            (n[n.length] = i + "=" + r);
        }),
        n.join(e)
      );
    }),
    (s.getQueryParam = function (t, e) {
      e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
      var r = "[\\?&]" + e + "=([^&#]*)",
        i = new RegExp(r),
        n = i.exec(t);
      if (n === null || (n && typeof n[1] != "string" && n[1].length))
        return "";
      var o = n[1];
      try {
        o = decodeURIComponent(o);
      } catch {
        q.error("Skipping decoding for malformed query param: " + o);
      }
      return o.replace(/\+/g, " ");
    }),
    (s.cookie = {
      get: function (t) {
        for (
          var e = t + "=", r = I.cookie.split(";"), i = 0;
          i < r.length;
          i++
        ) {
          for (var n = r[i]; n.charAt(0) == " "; ) n = n.substring(1, n.length);
          if (n.indexOf(e) === 0)
            return decodeURIComponent(n.substring(e.length, n.length));
        }
        return null;
      },
      parse: function (t) {
        var e;
        try {
          e = s.JSONDecode(s.cookie.get(t)) || {};
        } catch {}
        return e;
      },
      set_seconds: function (t, e, r, i, n, o, a) {
        var l = "",
          u = "",
          c = "";
        if (a) l = "; domain=" + a;
        else if (i) {
          var h = lt(I.location.hostname);
          l = h ? "; domain=." + h : "";
        }
        if (r) {
          var g = new Date();
          g.setTime(g.getTime() + r * 1e3),
            (u = "; expires=" + g.toGMTString());
        }
        o && ((n = !0), (c = "; SameSite=None")),
          n && (c += "; secure"),
          (I.cookie = t + "=" + encodeURIComponent(e) + u + "; path=/" + l + c);
      },
      set: function (t, e, r, i, n, o, a) {
        var l = "",
          u = "",
          c = "";
        if (a) l = "; domain=" + a;
        else if (i) {
          var h = lt(I.location.hostname);
          l = h ? "; domain=." + h : "";
        }
        if (r) {
          var g = new Date();
          g.setTime(g.getTime() + r * 24 * 60 * 60 * 1e3),
            (u = "; expires=" + g.toGMTString());
        }
        o && ((n = !0), (c = "; SameSite=None")), n && (c += "; secure");
        var p = t + "=" + encodeURIComponent(e) + u + "; path=/" + l + c;
        return (I.cookie = p), p;
      },
      remove: function (t, e, r) {
        s.cookie.set(t, "", -1, e, !1, !1, r);
      },
    });
  var Be = null,
    Pe = function (t, e) {
      if (Be !== null && !e) return Be;
      var r = !0;
      try {
        t = t || window.localStorage;
        var i = "__mplss_" + Fe(8),
          n = "xyz";
        t.setItem(i, n), t.getItem(i) !== n && (r = !1), t.removeItem(i);
      } catch {
        r = !1;
      }
      return (Be = r), r;
    };
  (s.localStorage = {
    is_supported: function (t) {
      var e = Pe(null, t);
      return (
        e || q.error("localStorage unsupported; falling back to cookie store"),
        e
      );
    },
    error: function (t) {
      q.error("localStorage error: " + t);
    },
    get: function (t) {
      try {
        return window.localStorage.getItem(t);
      } catch (e) {
        s.localStorage.error(e);
      }
      return null;
    },
    parse: function (t) {
      try {
        return s.JSONDecode(s.localStorage.get(t)) || {};
      } catch {}
      return null;
    },
    set: function (t, e) {
      try {
        window.localStorage.setItem(t, e);
      } catch (r) {
        s.localStorage.error(r);
      }
    },
    remove: function (t) {
      try {
        window.localStorage.removeItem(t);
      } catch (e) {
        s.localStorage.error(e);
      }
    },
  }),
    (s.register_event = (function () {
      var t = function (i, n, o, a, l) {
        if (!i) {
          q.error("No valid element provided to register_event");
          return;
        }
        if (i.addEventListener && !a) i.addEventListener(n, o, !!l);
        else {
          var u = "on" + n,
            c = i[u];
          i[u] = e(i, o, c);
        }
      };
      function e(i, n, o) {
        var a = function (l) {
          if (((l = l || r(window.event)), !!l)) {
            var u = !0,
              c,
              h;
            return (
              s.isFunction(o) && (c = o(l)),
              (h = n.call(i, l)),
              (c === !1 || h === !1) && (u = !1),
              u
            );
          }
        };
        return a;
      }
      function r(i) {
        return (
          i &&
            ((i.preventDefault = r.preventDefault),
            (i.stopPropagation = r.stopPropagation)),
          i
        );
      }
      return (
        (r.preventDefault = function () {
          this.returnValue = !1;
        }),
        (r.stopPropagation = function () {
          this.cancelBubble = !0;
        }),
        t
      );
    })());
  var It = new RegExp(
    '^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$'
  );
  s.dom_query = (function () {
    function t(n) {
      return n.all ? n.all : n.getElementsByTagName("*");
    }
    var e = /[\t\r\n]/g;
    function r(n, o) {
      var a = " " + o + " ";
      return (" " + n.className + " ").replace(e, " ").indexOf(a) >= 0;
    }
    function i(n) {
      if (!I.getElementsByTagName) return [];
      var o = n.split(" "),
        a,
        l,
        u,
        c,
        h,
        g,
        p,
        d,
        m,
        x,
        w = [I];
      for (g = 0; g < o.length; g++) {
        if (
          ((a = o[g].replace(/^\s+/, "").replace(/\s+$/, "")),
          a.indexOf("#") > -1)
        ) {
          (l = a.split("#")), (u = l[0]);
          var D = l[1],
            M = I.getElementById(D);
          if (!M || (u && M.nodeName.toLowerCase() != u)) return [];
          w = [M];
          continue;
        }
        if (a.indexOf(".") > -1) {
          (l = a.split(".")), (u = l[0]);
          var H = l[1];
          for (u || (u = "*"), c = [], h = 0, p = 0; p < w.length; p++)
            for (
              u == "*" ? (m = t(w[p])) : (m = w[p].getElementsByTagName(u)),
                d = 0;
              d < m.length;
              d++
            )
              c[h++] = m[d];
          for (w = [], x = 0, p = 0; p < c.length; p++)
            c[p].className &&
              s.isString(c[p].className) &&
              r(c[p], H) &&
              (w[x++] = c[p]);
          continue;
        }
        var pe = a.match(It);
        if (pe) {
          u = pe[1];
          var Y = pe[2],
            tt = pe[3],
            z = pe[4];
          for (u || (u = "*"), c = [], h = 0, p = 0; p < w.length; p++)
            for (
              u == "*" ? (m = t(w[p])) : (m = w[p].getElementsByTagName(u)),
                d = 0;
              d < m.length;
              d++
            )
              c[h++] = m[d];
          (w = []), (x = 0);
          var y;
          switch (tt) {
            case "=":
              y = function (_) {
                return _.getAttribute(Y) == z;
              };
              break;
            case "~":
              y = function (_) {
                return _.getAttribute(Y).match(new RegExp("\\b" + z + "\\b"));
              };
              break;
            case "|":
              y = function (_) {
                return _.getAttribute(Y).match(new RegExp("^" + z + "-?"));
              };
              break;
            case "^":
              y = function (_) {
                return _.getAttribute(Y).indexOf(z) === 0;
              };
              break;
            case "$":
              y = function (_) {
                return (
                  _.getAttribute(Y).lastIndexOf(z) ==
                  _.getAttribute(Y).length - z.length
                );
              };
              break;
            case "*":
              y = function (_) {
                return _.getAttribute(Y).indexOf(z) > -1;
              };
              break;
            default:
              y = function (_) {
                return _.getAttribute(Y);
              };
          }
          for (w = [], x = 0, p = 0; p < c.length; p++)
            y(c[p]) && (w[x++] = c[p]);
          continue;
        }
        for (u = a, c = [], h = 0, p = 0; p < w.length; p++)
          for (m = w[p].getElementsByTagName(u), d = 0; d < m.length; d++)
            c[h++] = m[d];
        w = c;
      }
      return w;
    }
    return function (n) {
      return s.isElement(n)
        ? [n]
        : s.isObject(n) && !s.isUndefined(n.length)
        ? n
        : i.call(this, n);
    };
  })();
  var Ot = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
    ],
    Dt = [
      "dclid",
      "fbclid",
      "gclid",
      "ko_click_id",
      "li_fat_id",
      "msclkid",
      "ttclid",
      "twclid",
      "wbraid",
    ];
  s.info = {
    campaignParams: function (t) {
      var e = "",
        r = {};
      return (
        s.each(Ot, function (i) {
          (e = s.getQueryParam(I.URL, i)),
            e.length ? (r[i] = e) : t !== void 0 && (r[i] = t);
        }),
        r
      );
    },
    clickParams: function () {
      var t = "",
        e = {};
      return (
        s.each(Dt, function (r) {
          (t = s.getQueryParam(I.URL, r)), t.length && (e[r] = t);
        }),
        e
      );
    },
    marketingParams: function () {
      return s.extend(s.info.campaignParams(), s.info.clickParams());
    },
    searchEngine: function (t) {
      return t.search("https?://(.*)google.([^/?]*)") === 0
        ? "google"
        : t.search("https?://(.*)bing.com") === 0
        ? "bing"
        : t.search("https?://(.*)yahoo.com") === 0
        ? "yahoo"
        : t.search("https?://(.*)duckduckgo.com") === 0
        ? "duckduckgo"
        : null;
    },
    searchInfo: function (t) {
      var e = s.info.searchEngine(t),
        r = e != "yahoo" ? "q" : "p",
        i = {};
      if (e !== null) {
        i.$search_engine = e;
        var n = s.getQueryParam(t, r);
        n.length && (i.mp_keyword = n);
      }
      return i;
    },
    browser: function (t, e, r) {
      return (
        (e = e || ""),
        r || s.includes(t, " OPR/")
          ? s.includes(t, "Mini")
            ? "Opera Mini"
            : "Opera"
          : /(BlackBerry|PlayBook|BB10)/i.test(t)
          ? "BlackBerry"
          : s.includes(t, "IEMobile") || s.includes(t, "WPDesktop")
          ? "Internet Explorer Mobile"
          : s.includes(t, "SamsungBrowser/")
          ? "Samsung Internet"
          : s.includes(t, "Edge") || s.includes(t, "Edg/")
          ? "Microsoft Edge"
          : s.includes(t, "FBIOS")
          ? "Facebook Mobile"
          : s.includes(t, "Chrome")
          ? "Chrome"
          : s.includes(t, "CriOS")
          ? "Chrome iOS"
          : s.includes(t, "UCWEB") || s.includes(t, "UCBrowser")
          ? "UC Browser"
          : s.includes(t, "FxiOS")
          ? "Firefox iOS"
          : s.includes(e, "Apple")
          ? s.includes(t, "Mobile")
            ? "Mobile Safari"
            : "Safari"
          : s.includes(t, "Android")
          ? "Android Mobile"
          : s.includes(t, "Konqueror")
          ? "Konqueror"
          : s.includes(t, "Firefox")
          ? "Firefox"
          : s.includes(t, "MSIE") || s.includes(t, "Trident/")
          ? "Internet Explorer"
          : s.includes(t, "Gecko")
          ? "Mozilla"
          : ""
      );
    },
    browserVersion: function (t, e, r) {
      var i = s.info.browser(t, e, r),
        n = {
          "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
          "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
          Chrome: /Chrome\/(\d+(\.\d+)?)/,
          "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
          "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
          Safari: /Version\/(\d+(\.\d+)?)/,
          "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
          Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
          Firefox: /Firefox\/(\d+(\.\d+)?)/,
          "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
          Konqueror: /Konqueror:(\d+(\.\d+)?)/,
          BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
          "Android Mobile": /android\s(\d+(\.\d+)?)/,
          "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
          "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
          Mozilla: /rv:(\d+(\.\d+)?)/,
        },
        o = n[i];
      if (o === void 0) return null;
      var a = t.match(o);
      return a ? parseFloat(a[a.length - 2]) : null;
    },
    os: function () {
      var t = G;
      return /Windows/i.test(t)
        ? /Phone/.test(t) || /WPDesktop/.test(t)
          ? "Windows Phone"
          : "Windows"
        : /(iPhone|iPad|iPod)/.test(t)
        ? "iOS"
        : /Android/.test(t)
        ? "Android"
        : /(BlackBerry|PlayBook|BB10)/i.test(t)
        ? "BlackBerry"
        : /Mac/i.test(t)
        ? "Mac OS X"
        : /Linux/.test(t)
        ? "Linux"
        : /CrOS/.test(t)
        ? "Chrome OS"
        : "";
    },
    device: function (t) {
      return /Windows Phone/i.test(t) || /WPDesktop/.test(t)
        ? "Windows Phone"
        : /iPad/.test(t)
        ? "iPad"
        : /iPod/.test(t)
        ? "iPod Touch"
        : /iPhone/.test(t)
        ? "iPhone"
        : /(BlackBerry|PlayBook|BB10)/i.test(t)
        ? "BlackBerry"
        : /Android/.test(t)
        ? "Android"
        : "";
    },
    referringDomain: function (t) {
      var e = t.split("/");
      return e.length >= 3 ? e[2] : "";
    },
    properties: function () {
      return s.extend(
        s.strip_empty_properties({
          $os: s.info.os(),
          $browser: s.info.browser(G, se.vendor, Ce),
          $referrer: I.referrer,
          $referring_domain: s.info.referringDomain(I.referrer),
          $device: s.info.device(G),
        }),
        {
          $current_url: R.location.href,
          $browser_version: s.info.browserVersion(G, se.vendor, Ce),
          $screen_height: qe.height,
          $screen_width: qe.width,
          mp_lib: "web",
          $lib_version: Z.LIB_VERSION,
          $insert_id: Fe(),
          time: s.timestamp() / 1e3,
        }
      );
    },
    people_properties: function () {
      return s.extend(
        s.strip_empty_properties({
          $os: s.info.os(),
          $browser: s.info.browser(G, se.vendor, Ce),
        }),
        { $browser_version: s.info.browserVersion(G, se.vendor, Ce) }
      );
    },
    mpPageViewProperties: function () {
      return s.strip_empty_properties({
        current_page_title: I.title,
        current_domain: R.location.hostname,
        current_url_path: R.location.pathname,
        current_url_protocol: R.location.protocol,
        current_url_search: R.location.search,
      });
    },
  };
  var Fe = function (t) {
      var e =
        Math.random().toString(36).substring(2, 10) +
        Math.random().toString(36).substring(2, 10);
      return t ? e.substring(0, t) : e;
    },
    Mt = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
    Rt = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
    lt = function (t) {
      var e = Rt,
        r = t.split("."),
        i = r[r.length - 1];
      (i.length > 4 || i === "com" || i === "org") && (e = Mt);
      var n = t.match(e);
      return n ? n[0] : "";
    },
    Te = null,
    Ie = null;
  typeof JSON < "u" && ((Te = JSON.stringify), (Ie = JSON.parse)),
    (Te = Te || s.JSONEncode),
    (Ie = Ie || s.JSONDecode),
    (s.toArray = s.toArray),
    (s.isObject = s.isObject),
    (s.JSONEncode = s.JSONEncode),
    (s.JSONDecode = s.JSONDecode),
    (s.isBlockedUA = s.isBlockedUA),
    (s.isEmptyObject = s.isEmptyObject),
    (s.info = s.info),
    (s.info.device = s.info.device),
    (s.info.browser = s.info.browser),
    (s.info.browserVersion = s.info.browserVersion),
    (s.info.properties = s.info.properties);
  var ee = function () {};
  (ee.prototype.create_properties = function () {}),
    (ee.prototype.event_handler = function () {}),
    (ee.prototype.after_track_handler = function () {}),
    (ee.prototype.init = function (t) {
      return (this.mp = t), this;
    }),
    (ee.prototype.track = function (t, e, r, i) {
      var n = this,
        o = s.dom_query(t);
      if (o.length === 0) {
        q.error("The DOM query (" + t + ") returned 0 elements");
        return;
      }
      return (
        s.each(
          o,
          function (a) {
            s.register_event(a, this.override_event, function (l) {
              var u = {},
                c = n.create_properties(r, this),
                h = n.mp.get_config("track_links_timeout");
              n.event_handler(l, this, u),
                window.setTimeout(n.track_callback(i, c, u, !0), h),
                n.mp.track(e, c, n.track_callback(i, c, u));
            });
          },
          this
        ),
        !0
      );
    }),
    (ee.prototype.track_callback = function (t, e, r, i) {
      i = i || !1;
      var n = this;
      return function () {
        r.callback_fired ||
          ((r.callback_fired = !0),
          !(t && t(i, e) === !1) && n.after_track_handler(e, r, i));
      };
    }),
    (ee.prototype.create_properties = function (t, e) {
      var r;
      return typeof t == "function" ? (r = t(e)) : (r = s.extend({}, t)), r;
    });
  var fe = function () {
    this.override_event = "click";
  };
  s.inherit(fe, ee),
    (fe.prototype.create_properties = function (t, e) {
      var r = fe.superclass.create_properties.apply(this, arguments);
      return e.href && (r.url = e.href), r;
    }),
    (fe.prototype.event_handler = function (t, e, r) {
      (r.new_tab =
        t.which === 2 || t.metaKey || t.ctrlKey || e.target === "_blank"),
        (r.href = e.href),
        r.new_tab || t.preventDefault();
    }),
    (fe.prototype.after_track_handler = function (t, e) {
      e.new_tab ||
        setTimeout(function () {
          window.location = e.href;
        }, 0);
    });
  var Oe = function () {
    this.override_event = "submit";
  };
  s.inherit(Oe, ee),
    (Oe.prototype.event_handler = function (t, e, r) {
      (r.element = e), t.preventDefault();
    }),
    (Oe.prototype.after_track_handler = function (t, e) {
      setTimeout(function () {
        e.element.submit();
      }, 0);
    });
  var Nt = Le("lock"),
    ct = function (t, e) {
      (e = e || {}),
        (this.storageKey = t),
        (this.storage = e.storage || window.localStorage),
        (this.pollIntervalMS = e.pollIntervalMS || 100),
        (this.timeoutMS = e.timeoutMS || 2e3);
    };
  ct.prototype.withLock = function (t, e, r) {
    !r && typeof e != "function" && ((r = e), (e = null));
    var i = r || new Date().getTime() + "|" + Math.random(),
      n = new Date().getTime(),
      o = this.storageKey,
      a = this.pollIntervalMS,
      l = this.timeoutMS,
      u = this.storage,
      c = o + ":X",
      h = o + ":Y",
      g = o + ":Z",
      p = function (M) {
        e && e(M);
      },
      d = function (M) {
        if (new Date().getTime() - n > l) {
          Nt.error(
            "Timeout waiting for mutex on " + o + "; clearing lock. [" + i + "]"
          ),
            u.removeItem(g),
            u.removeItem(h),
            w();
          return;
        }
        setTimeout(function () {
          try {
            M();
          } catch (H) {
            p(H);
          }
        }, a * (Math.random() + 0.1));
      },
      m = function (M, H) {
        M()
          ? H()
          : d(function () {
              m(M, H);
            });
      },
      x = function () {
        var M = u.getItem(h);
        if (M && M !== i) return !1;
        if ((u.setItem(h, i), u.getItem(h) === i)) return !0;
        if (!Pe(u, !0))
          throw new Error("localStorage support dropped while acquiring lock");
        return !1;
      },
      w = function () {
        u.setItem(c, i),
          m(x, function () {
            if (u.getItem(c) === i) {
              D();
              return;
            }
            d(function () {
              if (u.getItem(h) !== i) {
                w();
                return;
              }
              m(function () {
                return !u.getItem(g);
              }, D);
            });
          });
      },
      D = function () {
        u.setItem(g, "1");
        try {
          t();
        } finally {
          u.removeItem(g),
            u.getItem(h) === i && u.removeItem(h),
            u.getItem(c) === i && u.removeItem(c);
        }
      };
    try {
      if (Pe(u, !0)) w();
      else throw new Error("localStorage support check failed");
    } catch (M) {
      p(M);
    }
  };
  var pt = Le("batch"),
    ne = function (t, e) {
      (e = e || {}),
        (this.storageKey = t),
        (this.storage = e.storage || window.localStorage),
        (this.reportError = e.errorReporter || s.bind(pt.error, pt)),
        (this.lock = new ct(t, { storage: this.storage })),
        (this.pid = e.pid || null),
        (this.memQueue = []);
    };
  (ne.prototype.enqueue = function (t, e, r) {
    var i = { id: Fe(), flushAfter: new Date().getTime() + e * 2, payload: t };
    this.lock.withLock(
      s.bind(function () {
        var o;
        try {
          var a = this.readFromStorage();
          a.push(i), (o = this.saveToStorage(a)), o && this.memQueue.push(i);
        } catch {
          this.reportError("Error enqueueing item", t), (o = !1);
        }
        r && r(o);
      }, this),
      s.bind(function (o) {
        this.reportError("Error acquiring storage lock", o), r && r(!1);
      }, this),
      this.pid
    );
  }),
    (ne.prototype.fillBatch = function (t) {
      var e = this.memQueue.slice(0, t);
      if (e.length < t) {
        var r = this.readFromStorage();
        if (r.length) {
          var i = {};
          s.each(e, function (a) {
            i[a.id] = !0;
          });
          for (var n = 0; n < r.length; n++) {
            var o = r[n];
            if (
              new Date().getTime() > o.flushAfter &&
              !i[o.id] &&
              ((o.orphaned = !0), e.push(o), e.length >= t)
            )
              break;
          }
        }
      }
      return e;
    });
  var ft = function (t, e) {
    var r = [];
    return (
      s.each(t, function (i) {
        i.id && !e[i.id] && r.push(i);
      }),
      r
    );
  };
  ne.prototype.removeItemsByID = function (t, e) {
    var r = {};
    s.each(t, function (n) {
      r[n] = !0;
    }),
      (this.memQueue = ft(this.memQueue, r));
    var i = s.bind(function () {
      var n;
      try {
        var o = this.readFromStorage();
        if (((o = ft(o, r)), (n = this.saveToStorage(o)), n)) {
          o = this.readFromStorage();
          for (var a = 0; a < o.length; a++) {
            var l = o[a];
            if (l.id && r[l.id])
              return this.reportError("Item not removed from storage"), !1;
          }
        }
      } catch {
        this.reportError("Error removing items", t), (n = !1);
      }
      return n;
    }, this);
    this.lock.withLock(
      function () {
        var o = i();
        e && e(o);
      },
      s.bind(function (o) {
        var a = !1;
        if (
          (this.reportError("Error acquiring storage lock", o),
          !Pe(this.storage, !0) && ((a = i()), !a))
        )
          try {
            this.storage.removeItem(this.storageKey);
          } catch (l) {
            this.reportError("Error clearing queue", l);
          }
        e && e(a);
      }, this),
      this.pid
    );
  };
  var ht = function (t, e) {
    var r = [];
    return (
      s.each(t, function (i) {
        var n = i.id;
        if (n in e) {
          var o = e[n];
          o !== null && ((i.payload = o), r.push(i));
        } else r.push(i);
      }),
      r
    );
  };
  (ne.prototype.updatePayloads = function (t, e) {
    (this.memQueue = ht(this.memQueue, t)),
      this.lock.withLock(
        s.bind(function () {
          var i;
          try {
            var n = this.readFromStorage();
            (n = ht(n, t)), (i = this.saveToStorage(n));
          } catch {
            this.reportError("Error updating items", t), (i = !1);
          }
          e && e(i);
        }, this),
        s.bind(function (i) {
          this.reportError("Error acquiring storage lock", i), e && e(!1);
        }, this),
        this.pid
      );
  }),
    (ne.prototype.readFromStorage = function () {
      var t;
      try {
        (t = this.storage.getItem(this.storageKey)),
          t &&
            ((t = Ie(t)),
            s.isArray(t) ||
              (this.reportError("Invalid storage entry:", t), (t = null)));
      } catch (e) {
        this.reportError("Error retrieving queue", e), (t = null);
      }
      return t || [];
    }),
    (ne.prototype.saveToStorage = function (t) {
      try {
        return this.storage.setItem(this.storageKey, Te(t)), !0;
      } catch (e) {
        return this.reportError("Error saving queue", e), !1;
      }
    }),
    (ne.prototype.clear = function () {
      (this.memQueue = []), this.storage.removeItem(this.storageKey);
    });
  var Ut = 10 * 60 * 1e3,
    Se = Le("batch"),
    X = function (t, e) {
      (this.errorReporter = e.errorReporter),
        (this.queue = new ne(t, {
          errorReporter: s.bind(this.reportError, this),
          storage: e.storage,
        })),
        (this.libConfig = e.libConfig),
        (this.sendRequest = e.sendRequestFunc),
        (this.beforeSendHook = e.beforeSendHook),
        (this.stopAllBatching = e.stopAllBatchingFunc),
        (this.batchSize = this.libConfig.batch_size),
        (this.flushInterval = this.libConfig.batch_flush_interval_ms),
        (this.stopped = !this.libConfig.batch_autostart),
        (this.consecutiveRemovalFailures = 0),
        (this.itemIdsSentSuccessfully = {});
    };
  (X.prototype.enqueue = function (t, e) {
    this.queue.enqueue(t, this.flushInterval, e);
  }),
    (X.prototype.start = function () {
      (this.stopped = !1), (this.consecutiveRemovalFailures = 0), this.flush();
    }),
    (X.prototype.stop = function () {
      (this.stopped = !0),
        this.timeoutID &&
          (clearTimeout(this.timeoutID), (this.timeoutID = null));
    }),
    (X.prototype.clear = function () {
      this.queue.clear();
    }),
    (X.prototype.resetBatchSize = function () {
      this.batchSize = this.libConfig.batch_size;
    }),
    (X.prototype.resetFlush = function () {
      this.scheduleFlush(this.libConfig.batch_flush_interval_ms);
    }),
    (X.prototype.scheduleFlush = function (t) {
      (this.flushInterval = t),
        this.stopped ||
          (this.timeoutID = setTimeout(
            s.bind(this.flush, this),
            this.flushInterval
          ));
    }),
    (X.prototype.flush = function (t) {
      try {
        if (this.requestInProgress) {
          Se.log("Flush: Request already in progress");
          return;
        }
        t = t || {};
        var e = this.libConfig.batch_request_timeout_ms,
          r = new Date().getTime(),
          i = this.batchSize,
          n = this.queue.fillBatch(i),
          o = [],
          a = {};
        if (
          (s.each(
            n,
            function (c) {
              var h = c.payload;
              if (
                (this.beforeSendHook &&
                  !c.orphaned &&
                  (h = this.beforeSendHook(h)),
                h)
              ) {
                h.event &&
                  h.properties &&
                  (h.properties = s.extend({}, h.properties, {
                    mp_sent_by_lib_version: Z.LIB_VERSION,
                  }));
                var g = !0,
                  p = c.id;
                p
                  ? (this.itemIdsSentSuccessfully[p] || 0) > 5 &&
                    (this.reportError(
                      "[dupe] item ID sent too many times, not sending",
                      {
                        item: c,
                        batchSize: n.length,
                        timesSent: this.itemIdsSentSuccessfully[p],
                      }
                    ),
                    (g = !1))
                  : this.reportError("[dupe] found item with no ID", {
                      item: c,
                    }),
                  g && o.push(h);
              }
              a[c.id] = h;
            },
            this
          ),
          o.length < 1)
        ) {
          this.resetFlush();
          return;
        }
        this.requestInProgress = !0;
        var l = s.bind(function (c) {
            this.requestInProgress = !1;
            try {
              var h = !1;
              if (t.unloading) this.queue.updatePayloads(a);
              else if (
                s.isObject(c) &&
                c.error === "timeout" &&
                new Date().getTime() - r >= e
              )
                this.reportError("Network timeout; retrying"), this.flush();
              else if (
                s.isObject(c) &&
                c.xhr_req &&
                (c.xhr_req.status >= 500 ||
                  c.xhr_req.status === 429 ||
                  c.error === "timeout")
              ) {
                var g = this.flushInterval * 2,
                  p = c.xhr_req.responseHeaders;
                if (p) {
                  var d = p["Retry-After"];
                  d && (g = parseInt(d, 10) * 1e3 || g);
                }
                (g = Math.min(Ut, g)),
                  this.reportError("Error; retry in " + g + " ms"),
                  this.scheduleFlush(g);
              } else if (s.isObject(c) && c.xhr_req && c.xhr_req.status === 413)
                if (n.length > 1) {
                  var m = Math.max(1, Math.floor(i / 2));
                  (this.batchSize = Math.min(this.batchSize, m, n.length - 1)),
                    this.reportError(
                      "413 response; reducing batch size to " + this.batchSize
                    ),
                    this.resetFlush();
                } else
                  this.reportError(
                    "Single-event request too large; dropping",
                    n
                  ),
                    this.resetBatchSize(),
                    (h = !0);
              else h = !0;
              h &&
                (this.queue.removeItemsByID(
                  s.map(n, function (x) {
                    return x.id;
                  }),
                  s.bind(function (x) {
                    x
                      ? ((this.consecutiveRemovalFailures = 0), this.flush())
                      : (this.reportError("Failed to remove items from queue"),
                        ++this.consecutiveRemovalFailures > 5
                          ? (this.reportError(
                              "Too many queue failures; disabling batching system."
                            ),
                            this.stopAllBatching())
                          : this.resetFlush());
                  }, this)
                ),
                s.each(
                  n,
                  s.bind(function (x) {
                    var w = x.id;
                    w
                      ? ((this.itemIdsSentSuccessfully[w] =
                          this.itemIdsSentSuccessfully[w] || 0),
                        this.itemIdsSentSuccessfully[w]++,
                        this.itemIdsSentSuccessfully[w] > 5 &&
                          this.reportError(
                            "[dupe] item ID sent too many times",
                            {
                              item: x,
                              batchSize: n.length,
                              timesSent: this.itemIdsSentSuccessfully[w],
                            }
                          ))
                      : this.reportError(
                          "[dupe] found item with no ID while removing",
                          { item: x }
                        );
                  }, this)
                ));
            } catch (x) {
              this.reportError("Error handling API response", x),
                this.resetFlush();
            }
          }, this),
          u = {
            method: "POST",
            verbose: !0,
            ignore_json_errors: !0,
            timeout_ms: e,
          };
        t.unloading && (u.transport = "sendBeacon"),
          Se.log("MIXPANEL REQUEST:", o),
          this.sendRequest(o, u, l);
      } catch (c) {
        this.reportError("Error flushing request queue", c), this.resetFlush();
      }
    }),
    (X.prototype.reportError = function (t, e) {
      if ((Se.error.apply(Se.error, arguments), this.errorReporter))
        try {
          e instanceof Error || (e = new Error(t)), this.errorReporter(t, e);
        } catch (r) {
          Se.error(r);
        }
    });
  var Lt = "__mp_opt_in_out_";
  function Bt(t, e) {
    mt(!0, t, e);
  }
  function Ft(t, e) {
    mt(!1, t, e);
  }
  function $t(t, e) {
    return gt(t, e) === "1";
  }
  function dt(t, e) {
    if (Kt(e))
      return (
        q.warn(
          'This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'
        ),
        !0
      );
    var r = gt(t, e) === "0";
    return (
      r &&
        q.warn(
          "You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."
        ),
      r
    );
  }
  function he(t) {
    return Ke(t, function (e) {
      return this.get_config(e);
    });
  }
  function oe(t) {
    return Ke(t, function (e) {
      return this._get_config(e);
    });
  }
  function de(t) {
    return Ke(t, function (e) {
      return this._get_config(e);
    });
  }
  function jt(t, e) {
    (e = e || {}),
      $e(e).remove(je(t, e), !!e.crossSubdomainCookie, e.cookieDomain);
  }
  function $e(t) {
    return (
      (t = t || {}),
      t.persistenceType === "localStorage" ? s.localStorage : s.cookie
    );
  }
  function je(t, e) {
    return (e = e || {}), (e.persistencePrefix || Lt) + t;
  }
  function gt(t, e) {
    return $e(e).get(je(t, e));
  }
  function Kt(t) {
    if (t && t.ignoreDnt) return !1;
    var e = (t && t.window) || R,
      r = e.navigator || {},
      i = !1;
    return (
      s.each([r.doNotTrack, r.msDoNotTrack, e.doNotTrack], function (n) {
        s.includes([!0, 1, "1", "yes"], n) && (i = !0);
      }),
      i
    );
  }
  function mt(t, e, r) {
    if (!s.isString(e) || !e.length) {
      q.error(
        "gdpr." + (t ? "optIn" : "optOut") + " called with an invalid token"
      );
      return;
    }
    (r = r || {}),
      $e(r).set(
        je(e, r),
        t ? 1 : 0,
        s.isNumber(r.cookieExpiration) ? r.cookieExpiration : null,
        !!r.crossSubdomainCookie,
        !!r.secureCookie,
        !!r.crossSiteCookie,
        r.cookieDomain
      ),
      r.track &&
        t &&
        r.track(r.trackEventName || "$opt_in", r.trackProperties, {
          send_immediately: !0,
        });
  }
  function Ke(t, e) {
    return function () {
      var r = !1;
      try {
        var i = e.call(this, "token"),
          n = e.call(this, "ignore_dnt"),
          o = e.call(this, "opt_out_tracking_persistence_type"),
          a = e.call(this, "opt_out_tracking_cookie_prefix"),
          l = e.call(this, "window");
        i &&
          (r = dt(i, {
            ignoreDnt: n,
            persistenceType: o,
            persistencePrefix: a,
            window: l,
          }));
      } catch (c) {
        q.error("Unexpected error when checking tracking opt-out status: " + c);
      }
      if (!r) return t.apply(this, arguments);
      var u = arguments[arguments.length - 1];
      typeof u == "function" && u(0);
    };
  }
  var ae = "$set",
    ge = "$set_once",
    W = "$unset",
    le = "$add",
    J = "$append",
    ce = "$union",
    te = "$remove",
    Wt = "$delete",
    _t = {
      set_action: function (t, e) {
        var r = {},
          i = {};
        return (
          s.isObject(t)
            ? s.each(
                t,
                function (n, o) {
                  this._is_reserved_property(o) || (i[o] = n);
                },
                this
              )
            : (i[t] = e),
          (r[ae] = i),
          r
        );
      },
      unset_action: function (t) {
        var e = {},
          r = [];
        return (
          s.isArray(t) || (t = [t]),
          s.each(
            t,
            function (i) {
              this._is_reserved_property(i) || r.push(i);
            },
            this
          ),
          (e[W] = r),
          e
        );
      },
      set_once_action: function (t, e) {
        var r = {},
          i = {};
        return (
          s.isObject(t)
            ? s.each(
                t,
                function (n, o) {
                  this._is_reserved_property(o) || (i[o] = n);
                },
                this
              )
            : (i[t] = e),
          (r[ge] = i),
          r
        );
      },
      union_action: function (t, e) {
        var r = {},
          i = {};
        return (
          s.isObject(t)
            ? s.each(
                t,
                function (n, o) {
                  this._is_reserved_property(o) ||
                    (i[o] = s.isArray(n) ? n : [n]);
                },
                this
              )
            : (i[t] = s.isArray(e) ? e : [e]),
          (r[ce] = i),
          r
        );
      },
      append_action: function (t, e) {
        var r = {},
          i = {};
        return (
          s.isObject(t)
            ? s.each(
                t,
                function (n, o) {
                  this._is_reserved_property(o) || (i[o] = n);
                },
                this
              )
            : (i[t] = e),
          (r[J] = i),
          r
        );
      },
      remove_action: function (t, e) {
        var r = {},
          i = {};
        return (
          s.isObject(t)
            ? s.each(
                t,
                function (n, o) {
                  this._is_reserved_property(o) || (i[o] = n);
                },
                this
              )
            : (i[t] = e),
          (r[te] = i),
          r
        );
      },
      delete_action: function () {
        var t = {};
        return (t[Wt] = ""), t;
      },
    },
    O = function () {};
  s.extend(O.prototype, _t),
    (O.prototype._init = function (t, e, r) {
      (this._mixpanel = t), (this._group_key = e), (this._group_id = r);
    }),
    (O.prototype.set = de(function (t, e, r) {
      var i = this.set_action(t, e);
      return s.isObject(t) && (r = e), this._send_request(i, r);
    })),
    (O.prototype.set_once = de(function (t, e, r) {
      var i = this.set_once_action(t, e);
      return s.isObject(t) && (r = e), this._send_request(i, r);
    })),
    (O.prototype.unset = de(function (t, e) {
      var r = this.unset_action(t);
      return this._send_request(r, e);
    })),
    (O.prototype.union = de(function (t, e, r) {
      s.isObject(t) && (r = e);
      var i = this.union_action(t, e);
      return this._send_request(i, r);
    })),
    (O.prototype.delete = de(function (t) {
      var e = this.delete_action();
      return this._send_request(e, t);
    })),
    (O.prototype.remove = de(function (t, e, r) {
      var i = this.remove_action(t, e);
      return this._send_request(i, r);
    })),
    (O.prototype._send_request = function (t, e) {
      (t.$group_key = this._group_key),
        (t.$group_id = this._group_id),
        (t.$token = this._get_config("token"));
      var r = s.encodeDates(t);
      return this._mixpanel._track_or_batch(
        {
          type: "groups",
          data: r,
          endpoint:
            this._get_config("api_host") +
            "/" +
            this._get_config("api_routes").groups,
          batcher: this._mixpanel.request_batchers.groups,
        },
        e
      );
    }),
    (O.prototype._is_reserved_property = function (t) {
      return t === "$group_key" || t === "$group_id";
    }),
    (O.prototype._get_config = function (t) {
      return this._mixpanel.get_config(t);
    }),
    (O.prototype.toString = function () {
      return (
        this._mixpanel.toString() +
        ".group." +
        this._group_key +
        "." +
        this._group_id
      );
    }),
    (O.prototype.remove = O.prototype.remove),
    (O.prototype.set = O.prototype.set),
    (O.prototype.set_once = O.prototype.set_once),
    (O.prototype.union = O.prototype.union),
    (O.prototype.unset = O.prototype.unset),
    (O.prototype.toString = O.prototype.toString);
  var S = function () {};
  s.extend(S.prototype, _t),
    (S.prototype._init = function (t) {
      this._mixpanel = t;
    }),
    (S.prototype.set = oe(function (t, e, r) {
      var i = this.set_action(t, e);
      return (
        s.isObject(t) && (r = e),
        this._get_config("save_referrer") &&
          this._mixpanel.persistence.update_referrer_info(document.referrer),
        (i[ae] = s.extend(
          {},
          s.info.people_properties(),
          this._mixpanel.persistence.get_referrer_info(),
          i[ae]
        )),
        this._send_request(i, r)
      );
    })),
    (S.prototype.set_once = oe(function (t, e, r) {
      var i = this.set_once_action(t, e);
      return s.isObject(t) && (r = e), this._send_request(i, r);
    })),
    (S.prototype.unset = oe(function (t, e) {
      var r = this.unset_action(t);
      return this._send_request(r, e);
    })),
    (S.prototype.increment = oe(function (t, e, r) {
      var i = {},
        n = {};
      return (
        s.isObject(t)
          ? (s.each(
              t,
              function (o, a) {
                if (!this._is_reserved_property(a))
                  if (isNaN(parseFloat(o))) {
                    q.error(
                      "Invalid increment value passed to mixpanel.people.increment - must be a number"
                    );
                    return;
                  } else n[a] = o;
              },
              this
            ),
            (r = e))
          : (s.isUndefined(e) && (e = 1), (n[t] = e)),
        (i[le] = n),
        this._send_request(i, r)
      );
    })),
    (S.prototype.append = oe(function (t, e, r) {
      s.isObject(t) && (r = e);
      var i = this.append_action(t, e);
      return this._send_request(i, r);
    })),
    (S.prototype.remove = oe(function (t, e, r) {
      s.isObject(t) && (r = e);
      var i = this.remove_action(t, e);
      return this._send_request(i, r);
    })),
    (S.prototype.union = oe(function (t, e, r) {
      s.isObject(t) && (r = e);
      var i = this.union_action(t, e);
      return this._send_request(i, r);
    })),
    (S.prototype.track_charge = oe(function (t, e, r) {
      if (!s.isNumber(t) && ((t = parseFloat(t)), isNaN(t))) {
        q.error(
          "Invalid value passed to mixpanel.people.track_charge - must be a number"
        );
        return;
      }
      return this.append("$transactions", s.extend({ $amount: t }, e), r);
    })),
    (S.prototype.clear_charges = function (t) {
      return this.set("$transactions", [], t);
    }),
    (S.prototype.delete_user = function () {
      if (!this._identify_called()) {
        q.error(
          "mixpanel.people.delete_user() requires you to call identify() first"
        );
        return;
      }
      var t = { $delete: this._mixpanel.get_distinct_id() };
      return this._send_request(t);
    }),
    (S.prototype.toString = function () {
      return this._mixpanel.toString() + ".people";
    }),
    (S.prototype._send_request = function (t, e) {
      (t.$token = this._get_config("token")),
        (t.$distinct_id = this._mixpanel.get_distinct_id());
      var r = this._mixpanel.get_property("$device_id"),
        i = this._mixpanel.get_property("$user_id"),
        n = this._mixpanel.get_property("$had_persisted_distinct_id");
      r && (t.$device_id = r),
        i && (t.$user_id = i),
        n && (t.$had_persisted_distinct_id = n);
      var o = s.encodeDates(t);
      return this._identify_called()
        ? this._mixpanel._track_or_batch(
            {
              type: "people",
              data: o,
              endpoint:
                this._get_config("api_host") +
                "/" +
                this._get_config("api_routes").engage,
              batcher: this._mixpanel.request_batchers.people,
            },
            e
          )
        : (this._enqueue(t),
          s.isUndefined(e) ||
            (this._get_config("verbose")
              ? e({ status: -1, error: null })
              : e(-1)),
          s.truncate(o, 255));
    }),
    (S.prototype._get_config = function (t) {
      return this._mixpanel.get_config(t);
    }),
    (S.prototype._identify_called = function () {
      return this._mixpanel._flags.identify_called === !0;
    }),
    (S.prototype._enqueue = function (t) {
      ae in t
        ? this._mixpanel.persistence._add_to_people_queue(ae, t)
        : ge in t
        ? this._mixpanel.persistence._add_to_people_queue(ge, t)
        : W in t
        ? this._mixpanel.persistence._add_to_people_queue(W, t)
        : le in t
        ? this._mixpanel.persistence._add_to_people_queue(le, t)
        : J in t
        ? this._mixpanel.persistence._add_to_people_queue(J, t)
        : te in t
        ? this._mixpanel.persistence._add_to_people_queue(te, t)
        : ce in t
        ? this._mixpanel.persistence._add_to_people_queue(ce, t)
        : q.error("Invalid call to _enqueue():", t);
    }),
    (S.prototype._flush_one_queue = function (t, e, r, i) {
      var n = this,
        o = s.extend({}, this._mixpanel.persistence.load_queue(t)),
        a = o;
      !s.isUndefined(o) &&
        s.isObject(o) &&
        !s.isEmptyObject(o) &&
        (n._mixpanel.persistence._pop_from_people_queue(t, o),
        n._mixpanel.persistence.save(),
        i && (a = i(o)),
        e.call(n, a, function (l, u) {
          l === 0 && n._mixpanel.persistence._add_to_people_queue(t, o),
            s.isUndefined(r) || r(l, u);
        }));
    }),
    (S.prototype._flush = function (t, e, r, i, n, o, a) {
      var l = this;
      this._flush_one_queue(ae, this.set, t),
        this._flush_one_queue(ge, this.set_once, i),
        this._flush_one_queue(W, this.unset, o, function (w) {
          return s.keys(w);
        }),
        this._flush_one_queue(le, this.increment, e),
        this._flush_one_queue(ce, this.union, n);
      var u = this._mixpanel.persistence.load_queue(J);
      if (!s.isUndefined(u) && s.isArray(u) && u.length)
        for (
          var c,
            h = function (w, D) {
              w === 0 && l._mixpanel.persistence._add_to_people_queue(J, c),
                s.isUndefined(r) || r(w, D);
            },
            g = u.length - 1;
          g >= 0;
          g--
        )
          (u = this._mixpanel.persistence.load_queue(J)),
            (c = u.pop()),
            l._mixpanel.persistence.save(),
            s.isEmptyObject(c) || l.append(c, h);
      var p = this._mixpanel.persistence.load_queue(te);
      if (!s.isUndefined(p) && s.isArray(p) && p.length)
        for (
          var d,
            m = function (w, D) {
              w === 0 && l._mixpanel.persistence._add_to_people_queue(te, d),
                s.isUndefined(a) || a(w, D);
            },
            x = p.length - 1;
          x >= 0;
          x--
        )
          (p = this._mixpanel.persistence.load_queue(te)),
            (d = p.pop()),
            l._mixpanel.persistence.save(),
            s.isEmptyObject(d) || l.remove(d, m);
    }),
    (S.prototype._is_reserved_property = function (t) {
      return (
        t === "$distinct_id" ||
        t === "$token" ||
        t === "$device_id" ||
        t === "$user_id" ||
        t === "$had_persisted_distinct_id"
      );
    }),
    (S.prototype.set = S.prototype.set),
    (S.prototype.set_once = S.prototype.set_once),
    (S.prototype.unset = S.prototype.unset),
    (S.prototype.increment = S.prototype.increment),
    (S.prototype.append = S.prototype.append),
    (S.prototype.remove = S.prototype.remove),
    (S.prototype.union = S.prototype.union),
    (S.prototype.track_charge = S.prototype.track_charge),
    (S.prototype.clear_charges = S.prototype.clear_charges),
    (S.prototype.delete_user = S.prototype.delete_user),
    (S.prototype.toString = S.prototype.toString);
  var We = "__mps",
    He = "__mpso",
    Ye = "__mpus",
    ze = "__mpa",
    Ve = "__mpap",
    Ge = "__mpr",
    Xe = "__mpu",
    yt = "$people_distinct_id",
    De = "__alias",
    be = "__timers",
    Ht = [We, He, Ye, ze, Ve, Ge, Xe, yt, De, be],
    A = function (t) {
      (this.props = {}),
        (this.campaign_params_saved = !1),
        t.persistence_name
          ? (this.name = "mp_" + t.persistence_name)
          : (this.name = "mp_" + t.token + "_mixpanel");
      var e = t.persistence;
      e !== "cookie" &&
        e !== "localStorage" &&
        (q.critical(
          "Unknown persistence type " + e + "; falling back to cookie"
        ),
        (e = t.persistence = "cookie")),
        e === "localStorage" && s.localStorage.is_supported()
          ? (this.storage = s.localStorage)
          : (this.storage = s.cookie),
        this.load(),
        this.update_config(t),
        this.upgrade(t),
        this.save();
    };
  (A.prototype.properties = function () {
    var t = {};
    return (
      this.load(),
      s.each(this.props, function (e, r) {
        s.include(Ht, r) || (t[r] = e);
      }),
      t
    );
  }),
    (A.prototype.load = function () {
      if (!this.disabled) {
        var t = this.storage.parse(this.name);
        t && (this.props = s.extend({}, t));
      }
    }),
    (A.prototype.upgrade = function (t) {
      var e = t.upgrade,
        r,
        i;
      e &&
        ((r = "mp_super_properties"),
        typeof e == "string" && (r = e),
        (i = this.storage.parse(r)),
        this.storage.remove(r),
        this.storage.remove(r, !0),
        i && (this.props = s.extend(this.props, i.all, i.events))),
        !t.cookie_name &&
          t.name !== "mixpanel" &&
          ((r = "mp_" + t.token + "_" + t.name),
          (i = this.storage.parse(r)),
          i &&
            (this.storage.remove(r),
            this.storage.remove(r, !0),
            this.register_once(i))),
        this.storage === s.localStorage &&
          ((i = s.cookie.parse(this.name)),
          s.cookie.remove(this.name),
          s.cookie.remove(this.name, !0),
          i && this.register_once(i));
    }),
    (A.prototype.save = function () {
      this.disabled ||
        this.storage.set(
          this.name,
          s.JSONEncode(this.props),
          this.expire_days,
          this.cross_subdomain,
          this.secure,
          this.cross_site,
          this.cookie_domain
        );
    }),
    (A.prototype.load_prop = function (t) {
      return this.load(), this.props[t];
    }),
    (A.prototype.remove = function () {
      this.storage.remove(this.name, !1, this.cookie_domain),
        this.storage.remove(this.name, !0, this.cookie_domain);
    }),
    (A.prototype.clear = function () {
      this.remove(), (this.props = {});
    }),
    (A.prototype.register_once = function (t, e, r) {
      return s.isObject(t)
        ? (typeof e > "u" && (e = "None"),
          (this.expire_days = typeof r > "u" ? this.default_expiry : r),
          this.load(),
          s.each(
            t,
            function (i, n) {
              (!this.props.hasOwnProperty(n) || this.props[n] === e) &&
                (this.props[n] = i);
            },
            this
          ),
          this.save(),
          !0)
        : !1;
    }),
    (A.prototype.register = function (t, e) {
      return s.isObject(t)
        ? ((this.expire_days = typeof e > "u" ? this.default_expiry : e),
          this.load(),
          s.extend(this.props, t),
          this.save(),
          !0)
        : !1;
    }),
    (A.prototype.unregister = function (t) {
      this.load(), t in this.props && (delete this.props[t], this.save());
    }),
    (A.prototype.update_search_keyword = function (t) {
      this.register(s.info.searchInfo(t));
    }),
    (A.prototype.update_referrer_info = function (t) {
      this.register_once(
        {
          $initial_referrer: t || "$direct",
          $initial_referring_domain: s.info.referringDomain(t) || "$direct",
        },
        ""
      );
    }),
    (A.prototype.get_referrer_info = function () {
      return s.strip_empty_properties({
        $initial_referrer: this.props.$initial_referrer,
        $initial_referring_domain: this.props.$initial_referring_domain,
      });
    }),
    (A.prototype.update_config = function (t) {
      (this.default_expiry = this.expire_days = t.cookie_expiration),
        this.set_disabled(t.disable_persistence),
        this.set_cookie_domain(t.cookie_domain),
        this.set_cross_site(t.cross_site_cookie),
        this.set_cross_subdomain(t.cross_subdomain_cookie),
        this.set_secure(t.secure_cookie);
    }),
    (A.prototype.set_disabled = function (t) {
      (this.disabled = t), this.disabled ? this.remove() : this.save();
    }),
    (A.prototype.set_cookie_domain = function (t) {
      t !== this.cookie_domain &&
        (this.remove(), (this.cookie_domain = t), this.save());
    }),
    (A.prototype.set_cross_site = function (t) {
      t !== this.cross_site &&
        ((this.cross_site = t), this.remove(), this.save());
    }),
    (A.prototype.set_cross_subdomain = function (t) {
      t !== this.cross_subdomain &&
        ((this.cross_subdomain = t), this.remove(), this.save());
    }),
    (A.prototype.get_cross_subdomain = function () {
      return this.cross_subdomain;
    }),
    (A.prototype.set_secure = function (t) {
      t !== this.secure && ((this.secure = !!t), this.remove(), this.save());
    }),
    (A.prototype._add_to_people_queue = function (t, e) {
      var r = this._get_queue_key(t),
        i = e[t],
        n = this._get_or_create_queue(ae),
        o = this._get_or_create_queue(ge),
        a = this._get_or_create_queue(W),
        l = this._get_or_create_queue(le),
        u = this._get_or_create_queue(ce),
        c = this._get_or_create_queue(te, []),
        h = this._get_or_create_queue(J, []);
      r === We
        ? (s.extend(n, i),
          this._pop_from_people_queue(le, i),
          this._pop_from_people_queue(ce, i),
          this._pop_from_people_queue(W, i))
        : r === He
        ? (s.each(i, function (g, p) {
            p in o || (o[p] = g);
          }),
          this._pop_from_people_queue(W, i))
        : r === Ye
        ? s.each(i, function (g) {
            s.each([n, o, l, u], function (p) {
              g in p && delete p[g];
            }),
              s.each(h, function (p) {
                g in p && delete p[g];
              }),
              (a[g] = !0);
          })
        : r === ze
        ? (s.each(
            i,
            function (g, p) {
              p in n ? (n[p] += g) : (p in l || (l[p] = 0), (l[p] += g));
            },
            this
          ),
          this._pop_from_people_queue(W, i))
        : r === Xe
        ? (s.each(i, function (g, p) {
            s.isArray(g) && (p in u || (u[p] = []), (u[p] = u[p].concat(g)));
          }),
          this._pop_from_people_queue(W, i))
        : r === Ge
        ? (c.push(i), this._pop_from_people_queue(J, i))
        : r === Ve && (h.push(i), this._pop_from_people_queue(W, i)),
        q.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"),
        q.log(e),
        this.save();
    }),
    (A.prototype._pop_from_people_queue = function (t, e) {
      var r = this.props[this._get_queue_key(t)];
      s.isUndefined(r) ||
        s.each(
          e,
          function (i, n) {
            t === J || t === te
              ? s.each(r, function (o) {
                  o[n] === i && delete o[n];
                })
              : delete r[n];
          },
          this
        );
    }),
    (A.prototype.load_queue = function (t) {
      return this.load_prop(this._get_queue_key(t));
    }),
    (A.prototype._get_queue_key = function (t) {
      if (t === ae) return We;
      if (t === ge) return He;
      if (t === W) return Ye;
      if (t === le) return ze;
      if (t === J) return Ve;
      if (t === te) return Ge;
      if (t === ce) return Xe;
      q.error("Invalid queue:", t);
    }),
    (A.prototype._get_or_create_queue = function (t, e) {
      var r = this._get_queue_key(t);
      return (
        (e = s.isUndefined(e) ? {} : e), this.props[r] || (this.props[r] = e)
      );
    }),
    (A.prototype.set_event_timer = function (t, e) {
      var r = this.load_prop(be) || {};
      (r[t] = e), (this.props[be] = r), this.save();
    }),
    (A.prototype.remove_event_timer = function (t) {
      var e = this.load_prop(be) || {},
        r = e[t];
      return s.isUndefined(r) || (delete this.props[be][t], this.save()), r;
    });
  var Je,
    B,
    vt = 0,
    Yt = 1,
    zt = function (t) {
      return t;
    },
    Ae = function () {},
    $ = "mixpanel",
    wt = "base64",
    Vt = "json",
    Qe = "$device:",
    me = R.XMLHttpRequest && "withCredentials" in new XMLHttpRequest(),
    St = !me && G.indexOf("MSIE") === -1 && G.indexOf("Mozilla") === -1,
    Me = null;
  se.sendBeacon &&
    (Me = function () {
      return se.sendBeacon.apply(se, arguments);
    });
  var bt = { track: "track/", engage: "engage/", groups: "groups/" },
    At = {
      api_host: "https://api-js.mixpanel.com",
      api_routes: bt,
      api_method: "POST",
      api_transport: "XHR",
      api_payload_format: wt,
      app_host: "https://mixpanel.com",
      cdn: "https://cdn.mxpnl.com",
      cross_site_cookie: !1,
      cross_subdomain_cookie: !0,
      error_reporter: Ae,
      persistence: "cookie",
      persistence_name: "",
      cookie_domain: "",
      cookie_name: "",
      loaded: Ae,
      track_marketing: !0,
      track_pageview: !1,
      skip_first_touch_marketing: !1,
      store_google: !0,
      save_referrer: !0,
      test: !1,
      verbose: !1,
      img: !1,
      debug: !1,
      track_links_timeout: 300,
      cookie_expiration: 365,
      upgrade: !1,
      disable_persistence: !1,
      disable_cookie: !1,
      secure_cookie: !1,
      ip: !0,
      opt_out_tracking_by_default: !1,
      opt_out_persistence_by_default: !1,
      opt_out_tracking_persistence_type: "localStorage",
      opt_out_tracking_cookie_prefix: null,
      property_blacklist: [],
      xhr_headers: {},
      ignore_dnt: !1,
      batch_requests: !0,
      batch_size: 50,
      batch_flush_interval_ms: 5e3,
      batch_request_timeout_ms: 9e4,
      batch_autostart: !0,
      hooks: {},
    },
    xt = !1,
    f = function () {},
    Ze = function (t, e, r) {
      var i,
        n = r === $ ? B : B[r];
      if (n && Je === vt) i = n;
      else {
        if (n && !s.isArray(n)) {
          q.error("You have already initialized " + r);
          return;
        }
        i = new f();
      }
      if (
        ((i._cached_groups = {}),
        i._init(t, e, r),
        (i.people = new S()),
        i.people._init(i),
        !i.get_config("skip_first_touch_marketing"))
      ) {
        var o = s.info.campaignParams(null),
          a = {},
          l = !1;
        s.each(o, function (u, c) {
          (a["initial_" + c] = u), u && (l = !0);
        }),
          l && i.people.set_once(a);
      }
      return (
        (Z.DEBUG = Z.DEBUG || i.get_config("debug")),
        !s.isUndefined(n) &&
          s.isArray(n) &&
          (i._execute_array.call(i.people, n.people), i._execute_array(n)),
        i
      );
    };
  (f.prototype.init = function (t, e, r) {
    if (s.isUndefined(r)) {
      this.report_error(
        "You must name your new library: init(token, config, name)"
      );
      return;
    }
    if (r === $) {
      this.report_error(
        "You must initialize the main mixpanel object right after you include the Mixpanel js snippet"
      );
      return;
    }
    var i = Ze(t, e, r);
    return (B[r] = i), i._loaded(), i;
  }),
    (f.prototype._init = function (t, e, r) {
      (e = e || {}), (this.__loaded = !0), (this.config = {});
      var i = {};
      if (!("api_payload_format" in e)) {
        var n = e.api_host || At.api_host;
        n.match(/\.mixpanel\.com/) && (i.api_payload_format = Vt);
      }
      if (
        (this.set_config(
          s.extend({}, At, i, e, {
            name: r,
            token: t,
            callback_fn: (r === $ ? r : $ + "." + r) + "._jsc",
          })
        ),
        (this._jsc = Ae),
        (this.__dom_loaded_queue = []),
        (this.__request_queue = []),
        (this.__disabled_events = []),
        (this._flags = { disable_all_events: !1, identify_called: !1 }),
        (this.request_batchers = {}),
        (this._batch_requests = this.get_config("batch_requests")),
        this._batch_requests)
      ) {
        if (!s.localStorage.is_supported(!0) || !me)
          (this._batch_requests = !1),
            q.log(
              "Turning off Mixpanel request-queueing; needs XHR and localStorage support"
            ),
            s.each(this.get_batcher_configs(), function (l) {
              q.log("Clearing batch queue " + l.queue_key),
                s.localStorage.remove(l.queue_key);
            });
        else if ((this.init_batchers(), Me && R.addEventListener)) {
          var o = s.bind(function () {
            this.request_batchers.events.stopped ||
              this.request_batchers.events.flush({ unloading: !0 });
          }, this);
          R.addEventListener("pagehide", function (l) {
            l.persisted && o();
          }),
            R.addEventListener("visibilitychange", function () {
              I.visibilityState === "hidden" && o();
            });
        }
      }
      (this.persistence = this.cookie = new A(this.config)),
        (this.unpersisted_superprops = {}),
        this._gdpr_init();
      var a = s.UUID();
      this.get_distinct_id() ||
        this.register_once({ distinct_id: Qe + a, $device_id: a }, ""),
        this.get_config("track_pageview") && this.track_pageview();
    }),
    (f.prototype._loaded = function () {
      this.get_config("loaded")(this), this._set_default_superprops();
    }),
    (f.prototype._set_default_superprops = function () {
      this.persistence.update_search_keyword(I.referrer),
        this.get_config("store_google") &&
          this.register(s.info.campaignParams()),
        this.get_config("save_referrer") &&
          this.persistence.update_referrer_info(I.referrer);
    }),
    (f.prototype._dom_loaded = function () {
      s.each(
        this.__dom_loaded_queue,
        function (t) {
          this._track_dom.apply(this, t);
        },
        this
      ),
        this.has_opted_out_tracking() ||
          s.each(
            this.__request_queue,
            function (t) {
              this._send_request.apply(this, t);
            },
            this
          ),
        delete this.__dom_loaded_queue,
        delete this.__request_queue;
    }),
    (f.prototype._track_dom = function (t, e) {
      if (this.get_config("img"))
        return (
          this.report_error(
            "You can't use DOM tracking functions with img = true."
          ),
          !1
        );
      if (!xt) return this.__dom_loaded_queue.push([t, e]), !1;
      var r = new t().init(this);
      return r.track.apply(r, e);
    }),
    (f.prototype._prepare_callback = function (t, e) {
      if (s.isUndefined(t)) return null;
      if (me) {
        var r = function (a) {
          t(a, e);
        };
        return r;
      } else {
        var i = this._jsc,
          n = "" + Math.floor(Math.random() * 1e8),
          o = this.get_config("callback_fn") + "[" + n + "]";
        return (
          (i[n] = function (a) {
            delete i[n], t(a, e);
          }),
          o
        );
      }
    }),
    (f.prototype._send_request = function (t, e, r, i) {
      var n = !0;
      if (St) return this.__request_queue.push(arguments), n;
      var o = {
          method: this.get_config("api_method"),
          transport: this.get_config("api_transport"),
          verbose: this.get_config("verbose"),
        },
        a = null;
      !i && (s.isFunction(r) || typeof r == "string") && ((i = r), (r = null)),
        (r = s.extend(o, r || {})),
        me || (r.method = "GET");
      var l = r.method === "POST",
        u = Me && l && r.transport.toLowerCase() === "sendbeacon",
        c = r.verbose;
      e.verbose && (c = !0),
        this.get_config("test") && (e.test = 1),
        c && (e.verbose = 1),
        this.get_config("img") && (e.img = 1),
        me ||
          (i
            ? (e.callback = i)
            : (c || this.get_config("test")) &&
              (e.callback = "(function(){})")),
        (e.ip = this.get_config("ip") ? 1 : 0),
        (e._ = new Date().getTime().toString()),
        l && ((a = "data=" + encodeURIComponent(e.data)), delete e.data),
        (t += "?" + s.HTTPBuildQuery(e));
      var h = this;
      if ("img" in e) {
        var g = I.createElement("img");
        (g.src = t), I.body.appendChild(g);
      } else if (u) {
        try {
          n = Me(t, a);
        } catch (D) {
          h.report_error(D), (n = !1);
        }
        try {
          i && i(n ? 1 : 0);
        } catch (D) {
          h.report_error(D);
        }
      } else if (me)
        try {
          var p = new XMLHttpRequest();
          p.open(r.method, t, !0);
          var d = this.get_config("xhr_headers");
          if (
            (l && (d["Content-Type"] = "application/x-www-form-urlencoded"),
            s.each(d, function (D, M) {
              p.setRequestHeader(M, D);
            }),
            r.timeout_ms && typeof p.timeout < "u")
          ) {
            p.timeout = r.timeout_ms;
            var m = new Date().getTime();
          }
          (p.withCredentials = !0),
            (p.onreadystatechange = function () {
              if (p.readyState === 4)
                if (p.status === 200) {
                  if (i)
                    if (c) {
                      var D;
                      try {
                        D = s.JSONDecode(p.responseText);
                      } catch (H) {
                        if ((h.report_error(H), r.ignore_json_errors))
                          D = p.responseText;
                        else return;
                      }
                      i(D);
                    } else i(Number(p.responseText));
                } else {
                  var M;
                  p.timeout &&
                  !p.status &&
                  new Date().getTime() - m >= p.timeout
                    ? (M = "timeout")
                    : (M = "Bad HTTP status: " + p.status + " " + p.statusText),
                    h.report_error(M),
                    i && i(c ? { status: 0, error: M, xhr_req: p } : 0);
                }
            }),
            p.send(a);
        } catch (D) {
          h.report_error(D), (n = !1);
        }
      else {
        var x = I.createElement("script");
        (x.type = "text/javascript"),
          (x.async = !0),
          (x.defer = !0),
          (x.src = t);
        var w = I.getElementsByTagName("script")[0];
        w.parentNode.insertBefore(x, w);
      }
      return n;
    }),
    (f.prototype._execute_array = function (t) {
      var e,
        r = [],
        i = [],
        n = [];
      s.each(
        t,
        function (a) {
          a &&
            ((e = a[0]),
            s.isArray(e)
              ? n.push(a)
              : typeof a == "function"
              ? a.call(this)
              : s.isArray(a) && e === "alias"
              ? r.push(a)
              : s.isArray(a) &&
                e.indexOf("track") !== -1 &&
                typeof this[e] == "function"
              ? n.push(a)
              : i.push(a));
        },
        this
      );
      var o = function (a, l) {
        s.each(
          a,
          function (u) {
            if (s.isArray(u[0])) {
              var c = l;
              s.each(u, function (h) {
                c = c[h[0]].apply(c, h.slice(1));
              });
            } else this[u[0]].apply(this, u.slice(1));
          },
          l
        );
      };
      o(r, this), o(i, this), o(n, this);
    }),
    (f.prototype.are_batchers_initialized = function () {
      return !!this.request_batchers.events;
    }),
    (f.prototype.get_batcher_configs = function () {
      var t = "__mpq_" + this.get_config("token"),
        e = this.get_config("api_routes");
      return (
        (this._batcher_configs = this._batcher_configs || {
          events: {
            type: "events",
            endpoint: "/" + e.track,
            queue_key: t + "_ev",
          },
          people: {
            type: "people",
            endpoint: "/" + e.engage,
            queue_key: t + "_pp",
          },
          groups: {
            type: "groups",
            endpoint: "/" + e.groups,
            queue_key: t + "_gr",
          },
        }),
        this._batcher_configs
      );
    }),
    (f.prototype.init_batchers = function () {
      if (!this.are_batchers_initialized()) {
        var t = s.bind(function (r) {
            return new X(r.queue_key, {
              libConfig: this.config,
              sendRequestFunc: s.bind(function (i, n, o) {
                this._send_request(
                  this.get_config("api_host") + r.endpoint,
                  this._encode_data_for_request(i),
                  n,
                  this._prepare_callback(o, i)
                );
              }, this),
              beforeSendHook: s.bind(function (i) {
                return this._run_hook("before_send_" + r.type, i);
              }, this),
              errorReporter: this.get_config("error_reporter"),
              stopAllBatchingFunc: s.bind(this.stop_batch_senders, this),
            });
          }, this),
          e = this.get_batcher_configs();
        this.request_batchers = {
          events: t(e.events),
          people: t(e.people),
          groups: t(e.groups),
        };
      }
      this.get_config("batch_autostart") && this.start_batch_senders();
    }),
    (f.prototype.start_batch_senders = function () {
      (this._batchers_were_started = !0),
        this.are_batchers_initialized() &&
          ((this._batch_requests = !0),
          s.each(this.request_batchers, function (t) {
            t.start();
          }));
    }),
    (f.prototype.stop_batch_senders = function () {
      (this._batch_requests = !1),
        s.each(this.request_batchers, function (t) {
          t.stop(), t.clear();
        });
    }),
    (f.prototype.push = function (t) {
      this._execute_array([t]);
    }),
    (f.prototype.disable = function (t) {
      typeof t > "u"
        ? (this._flags.disable_all_events = !0)
        : (this.__disabled_events = this.__disabled_events.concat(t));
    }),
    (f.prototype._encode_data_for_request = function (t) {
      var e = s.JSONEncode(t);
      return (
        this.get_config("api_payload_format") === wt && (e = s.base64Encode(e)),
        { data: e }
      );
    }),
    (f.prototype._track_or_batch = function (t, e) {
      var r = s.truncate(t.data, 255),
        i = t.endpoint,
        n = t.batcher,
        o = t.should_send_immediately,
        a = t.send_request_options || {};
      e = e || Ae;
      var l = !0,
        u = s.bind(function () {
          return (
            a.skip_hooks || (r = this._run_hook("before_send_" + t.type, r)),
            r
              ? (q.log("MIXPANEL REQUEST:"),
                q.log(r),
                this._send_request(
                  i,
                  this._encode_data_for_request(r),
                  a,
                  this._prepare_callback(e, r)
                ))
              : null
          );
        }, this);
      return (
        this._batch_requests && !o
          ? n.enqueue(r, function (c) {
              c ? e(1, r) : u();
            })
          : (l = u()),
        l && r
      );
    }),
    (f.prototype.track = he(function (t, e, r, i) {
      !i && typeof r == "function" && ((i = r), (r = null)), (r = r || {});
      var n = r.transport;
      n && (r.transport = n);
      var o = r.send_immediately;
      if ((typeof i != "function" && (i = Ae), s.isUndefined(t))) {
        this.report_error("No event name provided to mixpanel.track");
        return;
      }
      if (this._event_is_disabled(t)) {
        i(0);
        return;
      }
      (e = s.extend({}, e)), (e.token = this.get_config("token"));
      var a = this.persistence.remove_event_timer(t);
      if (!s.isUndefined(a)) {
        var l = new Date().getTime() - a;
        e.$duration = parseFloat((l / 1e3).toFixed(3));
      }
      this._set_default_superprops();
      var u = this.get_config("track_marketing")
        ? s.info.marketingParams()
        : {};
      e = s.extend(
        {},
        s.info.properties(),
        u,
        this.persistence.properties(),
        this.unpersisted_superprops,
        e
      );
      var c = this.get_config("property_blacklist");
      s.isArray(c)
        ? s.each(c, function (p) {
            delete e[p];
          })
        : this.report_error(
            "Invalid value for property_blacklist config: " + c
          );
      var h = { event: t, properties: e },
        g = this._track_or_batch(
          {
            type: "events",
            data: h,
            endpoint:
              this.get_config("api_host") +
              "/" +
              this.get_config("api_routes").track,
            batcher: this.request_batchers.events,
            should_send_immediately: o,
            send_request_options: r,
          },
          i
        );
      return g;
    })),
    (f.prototype.set_group = he(function (t, e, r) {
      s.isArray(e) || (e = [e]);
      var i = {};
      return (i[t] = e), this.register(i), this.people.set(t, e, r);
    })),
    (f.prototype.add_group = he(function (t, e, r) {
      var i = this.get_property(t),
        n = {};
      return (
        i === void 0
          ? ((n[t] = [e]), this.register(n))
          : i.indexOf(e) === -1 && (i.push(e), (n[t] = i), this.register(n)),
        this.people.union(t, e, r)
      );
    })),
    (f.prototype.remove_group = he(function (t, e, r) {
      var i = this.get_property(t);
      if (i !== void 0) {
        var n = i.indexOf(e);
        n > -1 && (i.splice(n, 1), this.register({ group_key: i })),
          i.length === 0 && this.unregister(t);
      }
      return this.people.remove(t, e, r);
    })),
    (f.prototype.track_with_groups = he(function (t, e, r, i) {
      var n = s.extend({}, e || {});
      return (
        s.each(r, function (o, a) {
          o != null && (n[a] = o);
        }),
        this.track(t, n, i)
      );
    })),
    (f.prototype._create_map_key = function (t, e) {
      return t + "_" + JSON.stringify(e);
    }),
    (f.prototype._remove_group_from_cache = function (t, e) {
      delete this._cached_groups[this._create_map_key(t, e)];
    }),
    (f.prototype.get_group = function (t, e) {
      var r = this._create_map_key(t, e),
        i = this._cached_groups[r];
      return (
        (i === void 0 || i._group_key !== t || i._group_id !== e) &&
          ((i = new O()), i._init(this, t, e), (this._cached_groups[r] = i)),
        i
      );
    }),
    (f.prototype.track_pageview = he(function (t, e) {
      typeof t != "object" && (t = {}), (e = e || {});
      var r = e.event_name || "$mp_web_page_view",
        i = s.extend(
          s.info.mpPageViewProperties(),
          s.info.campaignParams(),
          s.info.clickParams()
        ),
        n = s.extend({}, i, t);
      return this.track(r, n);
    })),
    (f.prototype.track_links = function () {
      return this._track_dom.call(this, fe, arguments);
    }),
    (f.prototype.track_forms = function () {
      return this._track_dom.call(this, Oe, arguments);
    }),
    (f.prototype.time_event = function (t) {
      if (s.isUndefined(t)) {
        this.report_error("No event name provided to mixpanel.time_event");
        return;
      }
      this._event_is_disabled(t) ||
        this.persistence.set_event_timer(t, new Date().getTime());
    });
  var Gt = { persistent: !0 },
    et = function (t) {
      var e;
      return (
        s.isObject(t)
          ? (e = t)
          : s.isUndefined(t)
          ? (e = {})
          : (e = { days: t }),
        s.extend({}, Gt, e)
      );
    };
  (f.prototype.register = function (t, e) {
    var r = et(e);
    r.persistent
      ? this.persistence.register(t, r.days)
      : s.extend(this.unpersisted_superprops, t);
  }),
    (f.prototype.register_once = function (t, e, r) {
      var i = et(r);
      i.persistent
        ? this.persistence.register_once(t, e, i.days)
        : (typeof e > "u" && (e = "None"),
          s.each(
            t,
            function (n, o) {
              (!this.unpersisted_superprops.hasOwnProperty(o) ||
                this.unpersisted_superprops[o] === e) &&
                (this.unpersisted_superprops[o] = n);
            },
            this
          ));
    }),
    (f.prototype.unregister = function (t, e) {
      (e = et(e)),
        e.persistent
          ? this.persistence.unregister(t)
          : delete this.unpersisted_superprops[t];
    }),
    (f.prototype._register_single = function (t, e) {
      var r = {};
      (r[t] = e), this.register(r);
    }),
    (f.prototype.identify = function (t, e, r, i, n, o, a, l) {
      var u = this.get_distinct_id();
      if (t && u !== t) {
        if (typeof t == "string" && t.indexOf(Qe) === 0)
          return (
            this.report_error("distinct_id cannot have $device: prefix"), -1
          );
        this.register({ $user_id: t });
      }
      if (!this.get_property("$device_id")) {
        var c = u;
        this.register_once(
          { $had_persisted_distinct_id: !0, $device_id: c },
          ""
        );
      }
      t !== u &&
        t !== this.get_property(De) &&
        (this.unregister(De), this.register({ distinct_id: t })),
        (this._flags.identify_called = !0),
        this.people._flush(e, r, i, n, o, a, l),
        t !== u &&
          this.track(
            "$identify",
            { distinct_id: t, $anon_distinct_id: u },
            { skip_hooks: !0 }
          );
    }),
    (f.prototype.reset = function () {
      this.persistence.clear(), (this._flags.identify_called = !1);
      var t = s.UUID();
      this.register_once({ distinct_id: Qe + t, $device_id: t }, "");
    }),
    (f.prototype.get_distinct_id = function () {
      return this.get_property("distinct_id");
    }),
    (f.prototype.alias = function (t, e) {
      if (t === this.get_property(yt))
        return (
          this.report_error(
            "Attempting to create alias for existing People user - aborting."
          ),
          -2
        );
      var r = this;
      return (
        s.isUndefined(e) && (e = this.get_distinct_id()),
        t !== e
          ? (this._register_single(De, t),
            this.track(
              "$create_alias",
              { alias: t, distinct_id: e },
              { skip_hooks: !0 },
              function () {
                r.identify(t);
              }
            ))
          : (this.report_error(
              "alias matches current distinct_id - skipping api call."
            ),
            this.identify(t),
            -1)
      );
    }),
    (f.prototype.name_tag = function (t) {
      this._register_single("mp_name_tag", t);
    }),
    (f.prototype.set_config = function (t) {
      if (s.isObject(t)) {
        s.extend(this.config, t);
        var e = t.batch_size;
        e &&
          s.each(this.request_batchers, function (r) {
            r.resetBatchSize();
          }),
          this.get_config("persistence_name") ||
            (this.config.persistence_name = this.config.cookie_name),
          this.get_config("disable_persistence") ||
            (this.config.disable_persistence = this.config.disable_cookie),
          this.persistence && this.persistence.update_config(this.config),
          (Z.DEBUG = Z.DEBUG || this.get_config("debug"));
      }
    }),
    (f.prototype.get_config = function (t) {
      return this.config[t];
    }),
    (f.prototype._run_hook = function (t) {
      var e = (this.config.hooks[t] || zt).apply(this, ie.call(arguments, 1));
      return (
        typeof e > "u" &&
          (this.report_error(t + " hook did not return a value"), (e = null)),
        e
      );
    }),
    (f.prototype.get_property = function (t) {
      return this.persistence.load_prop([t]);
    }),
    (f.prototype.toString = function () {
      var t = this.get_config("name");
      return t !== $ && (t = $ + "." + t), t;
    }),
    (f.prototype._event_is_disabled = function (t) {
      return (
        s.isBlockedUA(G) ||
        this._flags.disable_all_events ||
        s.include(this.__disabled_events, t)
      );
    }),
    (f.prototype._gdpr_init = function () {
      var t =
        this.get_config("opt_out_tracking_persistence_type") === "localStorage";
      t &&
        s.localStorage.is_supported() &&
        (!this.has_opted_in_tracking() &&
          this.has_opted_in_tracking({ persistence_type: "cookie" }) &&
          this.opt_in_tracking({ enable_persistence: !1 }),
        !this.has_opted_out_tracking() &&
          this.has_opted_out_tracking({ persistence_type: "cookie" }) &&
          this.opt_out_tracking({ clear_persistence: !1 }),
        this.clear_opt_in_out_tracking({
          persistence_type: "cookie",
          enable_persistence: !1,
        })),
        this.has_opted_out_tracking()
          ? this._gdpr_update_persistence({ clear_persistence: !0 })
          : !this.has_opted_in_tracking() &&
            (this.get_config("opt_out_tracking_by_default") ||
              s.cookie.get("mp_optout")) &&
            (s.cookie.remove("mp_optout"),
            this.opt_out_tracking({
              clear_persistence: this.get_config(
                "opt_out_persistence_by_default"
              ),
            }));
    }),
    (f.prototype._gdpr_update_persistence = function (t) {
      var e;
      if (t && t.clear_persistence) e = !0;
      else if (t && t.enable_persistence) e = !1;
      else return;
      !this.get_config("disable_persistence") &&
        this.persistence.disabled !== e &&
        this.persistence.set_disabled(e),
        e
          ? this.stop_batch_senders()
          : this._batchers_were_started && this.start_batch_senders();
    }),
    (f.prototype._gdpr_call_func = function (t, e) {
      return (
        (e = s.extend(
          {
            track: s.bind(this.track, this),
            persistence_type: this.get_config(
              "opt_out_tracking_persistence_type"
            ),
            cookie_prefix: this.get_config("opt_out_tracking_cookie_prefix"),
            cookie_expiration: this.get_config("cookie_expiration"),
            cross_site_cookie: this.get_config("cross_site_cookie"),
            cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
            cookie_domain: this.get_config("cookie_domain"),
            secure_cookie: this.get_config("secure_cookie"),
            ignore_dnt: this.get_config("ignore_dnt"),
          },
          e
        )),
        s.localStorage.is_supported() || (e.persistence_type = "cookie"),
        t(this.get_config("token"), {
          track: e.track,
          trackEventName: e.track_event_name,
          trackProperties: e.track_properties,
          persistenceType: e.persistence_type,
          persistencePrefix: e.cookie_prefix,
          cookieDomain: e.cookie_domain,
          cookieExpiration: e.cookie_expiration,
          crossSiteCookie: e.cross_site_cookie,
          crossSubdomainCookie: e.cross_subdomain_cookie,
          secureCookie: e.secure_cookie,
          ignoreDnt: e.ignore_dnt,
        })
      );
    }),
    (f.prototype.opt_in_tracking = function (t) {
      (t = s.extend({ enable_persistence: !0 }, t)),
        this._gdpr_call_func(Bt, t),
        this._gdpr_update_persistence(t);
    }),
    (f.prototype.opt_out_tracking = function (t) {
      (t = s.extend({ clear_persistence: !0, delete_user: !0 }, t)),
        t.delete_user &&
          this.people &&
          this.people._identify_called() &&
          (this.people.delete_user(), this.people.clear_charges()),
        this._gdpr_call_func(Ft, t),
        this._gdpr_update_persistence(t);
    }),
    (f.prototype.has_opted_in_tracking = function (t) {
      return this._gdpr_call_func($t, t);
    }),
    (f.prototype.has_opted_out_tracking = function (t) {
      return this._gdpr_call_func(dt, t);
    }),
    (f.prototype.clear_opt_in_out_tracking = function (t) {
      (t = s.extend({ enable_persistence: !0 }, t)),
        this._gdpr_call_func(jt, t),
        this._gdpr_update_persistence(t);
    }),
    (f.prototype.report_error = function (t, e) {
      q.error.apply(q.error, arguments);
      try {
        !e && !(t instanceof Error) && (t = new Error(t)),
          this.get_config("error_reporter")(t, e);
      } catch (r) {
        q.error(r);
      }
    }),
    (f.prototype.init = f.prototype.init),
    (f.prototype.reset = f.prototype.reset),
    (f.prototype.disable = f.prototype.disable),
    (f.prototype.time_event = f.prototype.time_event),
    (f.prototype.track = f.prototype.track),
    (f.prototype.track_links = f.prototype.track_links),
    (f.prototype.track_forms = f.prototype.track_forms),
    (f.prototype.track_pageview = f.prototype.track_pageview),
    (f.prototype.register = f.prototype.register),
    (f.prototype.register_once = f.prototype.register_once),
    (f.prototype.unregister = f.prototype.unregister),
    (f.prototype.identify = f.prototype.identify),
    (f.prototype.alias = f.prototype.alias),
    (f.prototype.name_tag = f.prototype.name_tag),
    (f.prototype.set_config = f.prototype.set_config),
    (f.prototype.get_config = f.prototype.get_config),
    (f.prototype.get_property = f.prototype.get_property),
    (f.prototype.get_distinct_id = f.prototype.get_distinct_id),
    (f.prototype.toString = f.prototype.toString),
    (f.prototype.opt_out_tracking = f.prototype.opt_out_tracking),
    (f.prototype.opt_in_tracking = f.prototype.opt_in_tracking),
    (f.prototype.has_opted_out_tracking = f.prototype.has_opted_out_tracking),
    (f.prototype.has_opted_in_tracking = f.prototype.has_opted_in_tracking),
    (f.prototype.clear_opt_in_out_tracking =
      f.prototype.clear_opt_in_out_tracking),
    (f.prototype.get_group = f.prototype.get_group),
    (f.prototype.set_group = f.prototype.set_group),
    (f.prototype.add_group = f.prototype.add_group),
    (f.prototype.remove_group = f.prototype.remove_group),
    (f.prototype.track_with_groups = f.prototype.track_with_groups),
    (f.prototype.start_batch_senders = f.prototype.start_batch_senders),
    (f.prototype.stop_batch_senders = f.prototype.stop_batch_senders),
    (f.prototype.DEFAULT_API_ROUTES = bt),
    (A.prototype.properties = A.prototype.properties),
    (A.prototype.update_search_keyword = A.prototype.update_search_keyword),
    (A.prototype.update_referrer_info = A.prototype.update_referrer_info),
    (A.prototype.get_cross_subdomain = A.prototype.get_cross_subdomain),
    (A.prototype.clear = A.prototype.clear);
  var _e = {},
    Xt = function () {
      s.each(_e, function (t, e) {
        e !== $ && (B[e] = t);
      }),
        (B._ = s);
    },
    Jt = function () {
      B.init = function (t, e, r) {
        if (r)
          return B[r] || ((B[r] = _e[r] = Ze(t, e, r)), B[r]._loaded()), B[r];
        var i = B;
        _e[$]
          ? (i = _e[$])
          : t && ((i = Ze(t, e, $)), i._loaded(), (_e[$] = i)),
          (B = i),
          Je === Yt && (R[$] = B),
          Xt();
      };
    },
    Qt = function () {
      function t() {
        t.done ||
          ((t.done = !0),
          (xt = !0),
          (St = !1),
          s.each(_e, function (i) {
            i._dom_loaded();
          }));
      }
      function e() {
        try {
          I.documentElement.doScroll("left");
        } catch {
          setTimeout(e, 1);
          return;
        }
        t();
      }
      if (I.addEventListener)
        I.readyState === "complete"
          ? t()
          : I.addEventListener("DOMContentLoaded", t, !1);
      else if (I.attachEvent) {
        I.attachEvent("onreadystatechange", t);
        var r = !1;
        try {
          r = R.frameElement === null;
        } catch {}
        I.documentElement.doScroll && r && e();
      }
      s.register_event(R, "load", t, !0);
    };
  function Zt() {
    return (Je = vt), (B = new f()), Jt(), B.init(), Qt(), B;
  }
  var er = Zt(),
    tr = er;
  const ye = V(tr);
  let kt = !1;
  async function Et() {
    const t = await E.storage.local.get({ withDebuggerOutput: null });
    t.withDebuggerOutput !== null && (kt = t.withDebuggerOutput);
  }
  Et();
  async function b(...t) {
    kt && console.log(...t);
  }
  class rr {
    constructor() {
      v(this, "autoSwiper", null);
      v(this, "profileCard", null);
      v(this, "recentlyActive", !1);
      v(this, "supportRandomUsageSimulation", !0);
      v(this, "activePictureIndex", 0);
    }
    getSiteName() {
      return "Tinder";
    }
    getSwipeSpeedModifier() {
      return window.location.href.includes("app/likes-you") ||
        window.location.href.includes("app/gold-home")
        ? 1
        : 0.65;
    }
    getElementForKeyEvents() {
      return window.body;
    }
    swipeLeft() {
      var e, r, i, n;
      try {
        const o =
          (n =
            (i =
              (r =
                (e = document.querySelector(".profileCard__card")) == null
                  ? void 0
                  : e.parentElement) == null
                ? void 0
                : r.parentElement) == null
              ? void 0
              : i.children[1]) == null
            ? void 0
            : n.querySelectorAll("button")[0];
        o && o.click();
      } catch {
        return !1;
      }
    }
    swipeRight() {
      var e, r, i, n;
      try {
        const o =
          (n =
            (i =
              (r =
                (e = document.querySelector(".profileCard__card")) == null
                  ? void 0
                  : e.parentElement) == null
                ? void 0
                : r.parentElement) == null
              ? void 0
              : i.children[1]) == null
            ? void 0
            : n.querySelectorAll("button")[2];
        o && o.click();
      } catch {
        return !1;
      }
    }
    removeMessages() {
      var i, n, o;
      const e = document.querySelector('[role="dialog"]');
      if (e) {
        const a = e.querySelectorAll("button");
        try {
          ((i = e.children[2]) == null ? void 0 : i.children.length) === 2
            ? e.textContent.search("Super") > 0
              ? (n = e.children[2]) == null || n.children[1].click()
              : (this.autoSwiper.stop = !0)
            : ((o = e.children[3]) == null ? void 0 : o.children.length) === 1
            ? e.children[3].click()
            : a.length === 2
            ? a[1].click()
            : e.children[5] && e.children[5].click();
        } catch (l) {
          log(l);
        }
      }
      let r = document.querySelector('[data-testid="recCard_info"]');
      r && r.click(),
        (r = document.querySelector(".close")),
        r && !window.location.href.includes("app/likes-you") && r.click();
    }
    getProfileCard() {
      var n;
      let e = null,
        r = !0;
      if (
        ((window.location.href.includes("app/recs") ||
          window.location.href.includes("app/explore") ||
          window.location.href.includes("app/likes-you") ||
          window.location.href.includes("app/gold-home")) &&
          (r = !1),
        r)
      ) {
        var i = document.querySelector("[href='/app/profile']");
        i && i.hidden === !1 && i.click(),
          setTimeout(function () {
            var o = document.querySelector("[href='/app/recs']");
            o &&
              o.className.toString().includes("Op(1)") === !1 &&
              o.hidden === !1 &&
              o.click();
          }, 250);
      }
      if (this.autoSwiper.mobile)
        if (
          window.location.href.includes("app/likes-you") ||
          window.location.href.includes("app/gold-home")
        ) {
          const o = document.querySelectorAll('[data-testid="likesYouCard"]');
          o && o.length > 0 && o[0].children[2].click();
        } else
          (e = document.querySelector(".profileCard__card")),
            e ||
              document
                .querySelector(".recsCardboard__cardsContainer")
                .querySelector("button.focus-button-style")
                .click();
      else if (window.location.href.includes("app/likes-you")) {
        const o = document.querySelectorAll('[data-testid="likesYouCard"]');
        o && o.length > 0 && o[0].children[2].click();
      } else {
        const o = document.querySelector(".recsCardboard__cardsContainer");
        if (o) {
          const a = document.getElementsByClassName(
            "Sq(8px) Bdrs(50%) Mend(4px) My(4px) Bgc($c-ds-background-badge-online-now-default)"
          );
          if (((this.recentlyActive = !1), a.length > 0))
            for (let l of a) this.isVisible(l) && (this.recentlyActive = !0);
          (n = o.querySelector("button.focus-button-style")) == null ||
            n.click();
        }
      }
      return document.querySelector(".profileCard__card");
    }
    getName() {
      return this.profileCard.querySelector(".Fxs\\(1\\)").innerText.trim();
    }
    getAge() {
      return this.profileCard.querySelector(".Whs\\(nw\\)").innerText.trim();
    }
    getHeight() {
      const e = this.getProfileText(),
        r = /(\d{1,3}\s?cm)|(\d'?\d{0,2})'(\d{0,2})"?/g,
        i = e.match(r);
      if (i) {
        const n = i[0];
        if (n.includes("cm")) return parseInt(n);
        {
          const [o, a] = n.split("'"),
            u =
              (parseInt(o) * 12 + (a ? parseInt(a.replace('"', "")) : 0)) *
              2.54;
          return Math.round(u);
        }
      }
      return null;
    }
    getDistance() {
      var a, l, u, c;
      let e = 5e5;
      try {
        var r =
          (c =
            (u =
              (l =
                (a = this.profileCard.children[1]) == null
                  ? void 0
                  : a.children[0]) == null
                ? void 0
                : l.children[0]) == null
              ? void 0
              : u.children[1]) == null
            ? void 0
            : c.children;
        for (const h of r) {
          var i = h.innerText,
            n = i.match(/\d+/),
            o = null;
          n && (o = parseInt(n[0])), Number.isInteger(o) && (e = o);
        }
      } catch (h) {
        log(h);
      }
      return e;
    }
    getProfileDescriptionText() {
      const e = this.profileCard.querySelector(".BreakWord");
      return e ? e.innerText : "";
    }
    getProfileText() {
      const e = [];
      e.push(this.getName().toLowerCase());
      const r = Array.from(this.profileCard.querySelectorAll(".Us\\(t\\)"));
      e.push(r.map((o) => o.innerText.trim().toLowerCase()).join(" "));
      const i = Array.from(
        this.profileCard.querySelectorAll(".Bdrs\\(100px\\)")
      );
      e.push(i.map((o) => o.innerText.trim().toLowerCase()).join(" "));
      const n = Array.from(
        this.profileCard.querySelectorAll(".Px\\(16px\\).My\\(12px\\)")
      );
      return (
        e.push(n.map((o) => o.innerText.trim().toLowerCase()).join(" ")),
        e.join(" ")
      );
    }
    getPhotoCount() {
      var e = this.profileCard.querySelector(".Expand>.CenterAlign");
      return e ? e.childNodes.length : 1;
    }
    getVerifiedStatus() {
      return !!this.profileCard.querySelector(".Mstart\\(4px\\)");
    }
    getRecentlyActive() {
      return this.recentlyActive;
    }
    isVisible(e) {
      try {
        if (!this.isVisibleByStyles(e) || this.isBehindOtherElement(e))
          return !1;
      } catch (r) {
        return log(r), !1;
      }
      return !0;
    }
    isVisibleByStyles(e) {
      const r = window.getComputedStyle(e);
      return r.visibility !== "hidden" && r.display !== "none";
    }
    isBehindOtherElement(e) {
      const r = e.getBoundingClientRect(),
        i = r.left + 1,
        n = r.right - 1,
        o = r.top + 1,
        a = r.bottom - 1;
      return (
        document.elementFromPoint(i, o) !== e ||
        document.elementFromPoint(n, o) !== e ||
        document.elementFromPoint(i, a) !== e ||
        document.elementFromPoint(n, a) !== e
      );
    }
    doRandomUsageSimulation() {
      var i;
      this.activePictureIndex++,
        this.activePictureIndex > this.getPhotoCount() &&
          (this.activePictureIndex = 0);
      let e = Math.floor(Math.random() * 700 + 300),
        r = Math.floor(Math.random() * 700 + 300);
      this.activePictureIndex === 1
        ? (this.profileCard.scroll({ top: e, left: 0, behavior: "smooth" }),
          setTimeout(() => {
            this.profileCard &&
              this.profileCard.scroll({ top: 0, left: 0, behavior: "smooth" }),
              this.getPhotoCount() > 1 &&
                setTimeout(() => {
                  var n;
                  (n = document.querySelector(".Expand>.CenterAlign").children[
                    this.activePictureIndex
                  ]) == null || n.click();
                }, r);
          }, r))
        : this.getPhotoCount() > 1 &&
          ((i = document.querySelector(".Expand>.CenterAlign").children[
            this.activePictureIndex
          ]) == null ||
            i.click());
    }
    reset() {
      this.activePictureIndex = 0;
    }
  }
  class ir {
    constructor() {
      v(this, "autoSwiper", null);
      v(this, "profileCard", null);
      v(this, "supportRandomUsageSimulation", !0);
    }
    getSiteName() {
      return "Bumble";
    }
    getSwipeSpeedModifier() {
      return 1;
    }
    getElementForKeyEvents() {
      return window;
    }
    swipeLeft() {
      if (window.location.href.includes("app/beeline")) {
        const e = document.querySelector(".user-card__action--no");
        e && this.autoSwiper.simulateDebuggerMouseClick(e);
      } else
        this.autoSwiper.simulateDebuugerKeyEvent(
          this.autoSwiper.keys.arrowLeft
        );
    }
    swipeRight() {
      if (window.location.href.includes("app/beeline")) {
        const e = document.querySelector(".user-card__action--yes");
        e && this.autoSwiper.simulateDebuggerMouseClick(e);
      } else
        this.autoSwiper.simulateDebuugerKeyEvent(
          this.autoSwiper.keys.arrowRight
        );
    }
    removeMessages() {
      var i;
      if (document.querySelector(".encounters-user__blocker")) {
        this.autoSwiper.stop = !0;
        return;
      }
      const r = document.getElementsByClassName("encounters-match__cta-action");
      if (r.length > 0) {
        let n = (i = r[1]) == null ? void 0 : i.children[0];
        n && this.autoSwiper.simulateDebuggerMouseClick(n);
      }
      this.autoSwiper.simulateDebuugerKeyEvent(this.autoSwiper.keys.escape),
        this.autoSwiper.simulateDebuugerKeyEvent(this.autoSwiper.keys.escape);
    }
    getProfileCard() {
      if (window.location.href.includes("app/beeline")) {
        let e = document.querySelector(".profile");
        if (e) return e;
        {
          let r = document.querySelectorAll(
            ".user-card.has-hoverable-actions:not(.has-visible-actions)"
          );
          r && r.length > 0 && this.autoSwiper.simulateDebuggerMouseClick(r[0]);
        }
      }
      return document.querySelector(".encounters-user__frame");
    }
    getName() {
      return window.location.href.includes("app/beeline")
        ? this.profileCard.querySelector(".profile__name").innerText.trim()
        : this.profileCard
            .querySelector(".encounters-story-profile__name")
            .innerText.trim();
    }
    getAge() {
      if (window.location.href.includes("app/beeline"))
        this.profileCard
          .querySelector(".profile__age")
          .innerText.trim()
          .split(" ")[1];
      else
        return this.profileCard
          .querySelector(".encounters-story-profile__age")
          .innerText.trim()
          .split(" ")[1];
    }
    getHeight() {
      const e = this.getProfileText(),
        r = /(\d{1,3}\s?cm)|(\d'?\d{0,2})'(\d{0,2})"?/g,
        i = e.match(r);
      if (i) {
        const n = i[0];
        if (n.includes("cm")) return parseInt(n);
        {
          const [o, a] = n.split("'"),
            u =
              (parseInt(o) * 12 + (a ? parseInt(a.replace('"', "")) : 0)) *
              2.54;
          return Math.round(u);
        }
      }
      return null;
    }
    getDistance() {
      let e = 5e5;
      var r = this.profileCard.querySelector(".location-widget__distance");
      if (r) {
        var i = parseInt(r.firstChild.innerText.split(" ")[0].replace("~", ""));
        Number.isInteger(i) && (e = i);
      }
      return e;
    }
    getProfileDescriptionText() {
      const e = [];
      let r = null;
      return (
        window.location.href.includes("app/beeline")
          ? (r = Array.from(
              this.profileCard.querySelectorAll(".profile__about")
            ))
          : (r = Array.from(
              this.profileCard.querySelectorAll(".encounters-story-about__text")
            )),
        e.push(r.map((i) => i.textContent.trim().toLowerCase()).join(" ")),
        e.join("")
      );
    }
    getProfileText() {
      return this.profileCard.innerText.toLowerCase();
    }
    getPhotoCount() {
      return window.location.href.includes("app/beeline")
        ? document.querySelectorAll(".profile__photo").length
        : document.querySelectorAll(".media-box__picture-image").length;
    }
    getVerifiedStatus() {
      let e = null;
      return (
        window.location.href.includes("app/beeline")
          ? (e = this.profileCard.querySelector(".profile__verify"))
          : (e = this.profileCard.querySelector(
              ".encounters-story-profile__verification"
            )),
        !!e
      );
    }
    getRecentlyActive() {
      return !0;
    }
    doRandomUsageSimulation() {
      let e = Math.floor(Math.random() * 700 + 300);
      setTimeout(() => {
        this.autoSwiper.simulateDebuugerKeyEvent(
          this.autoSwiper.keys.arrowDown
        );
      }, e);
    }
    reset() {}
  }
  class sr {
    constructor() {
      v(this, "autoSwiper", null);
      v(this, "profileCard", null);
      v(this, "supportRandomUsageSimulation", !1);
    }
    getSiteName() {
      return "OkCupid";
    }
    getSwipeSpeedModifier() {
      return 1;
    }
    getElementForKeyEvents() {
      return window.body;
    }
    swipeLeft() {
      let e = null;
      this.autoSwiper.mobile
        ? (e = document.querySelector(".profile-buttons-actions-pass"))
        : (e = document.querySelector(
            '[class="dt-action-buttons-button pass"]'
          )),
        e && e.click();
    }
    swipeRight() {
      let e = null;
      this.autoSwiper.mobile
        ? (e = document.querySelector(".profile-buttons-actions-like"))
        : (e = document.querySelector(
            '[class="dt-action-buttons-button like"]'
          )),
        e && e.click();
    }
    removeMessages() {
      const e = document.querySelector(".dynamic-likes-cap-modal"),
        r = document.querySelector(".likes-cap-breather-modal");
      (e || r) && (this.autoSwiper.stop = !0);
      let i = null,
        n = document.querySelector(".OkModalContent-main");
      if (
        (n &&
          ((i = n.querySelector(".likes-celebration-actions-anticta")),
          i && i.click(),
          (i = n.querySelector(".photo-requirements-cancel")),
          i && i.click()),
        (n = document.querySelector(".reactmodal-contents")),
        n &&
          ((i = n.querySelector(".superlike-upgrade-your-like-dismiss")),
          i && i.click()),
        (i = document.querySelector(".connection-view-container-close-button")),
        i && i.click(),
        (n = document.querySelector(".FullscreenOverlay-inner")),
        n)
      ) {
        let a = n.querySelectorAll("button");
        a && Array.isArray(a) && a.length > 1 && a[1].click();
      }
      if (
        ((i = document.querySelector(".profile-buttons-modal-buttons-cancel")),
        i)
      ) {
        i.click();
        const a = document.querySelector("[href='/discover']");
        a && a.hidden === !1 && a.click();
      }
      let o = document.querySelector('[data-cy="matchEvent.closeButton"]');
      o && o.click();
    }
    getProfileCard() {
      if (!this.autoSwiper.mobile) {
        if (!window.location.href.includes("discover")) {
          var e = document.querySelector("[href='/discover']");
          e && e.hidden === !1 && e.click();
        }
      }
      let r = null;
      if (this.autoSwiper.mobile)
        if (((r = document.querySelector("#profile")), r === null))
          document.querySelector(".i-arrow-down") && btn.click();
        else return r;
      else return document.querySelector(".desktop-dt-content");
    }
    getName() {
      let e = "",
        r = null;
      return (
        this.autoSwiper.mobile
          ? (r = this.profileCard.querySelector(".card-content-header__text"))
          : (r = this.profileCard.querySelector(
              ".card-content-header__name-container"
            )),
        r && (e = r.innerText.trim()),
        e
      );
    }
    getAge() {
      let e = 0,
        r = this.profileCard.querySelector(".card-content-header__location");
      return r && (e = r.innerText.split(" ")[0]), e;
    }
    getHeight() {
      const e = this.getProfileText(),
        r = /(\d{1,3}\s?cm)|(\d'?\d{0,2})'(\d{0,2})"?/g,
        i = e.match(r);
      if (i) {
        const n = i[0];
        if (n.includes("cm")) return parseInt(n);
        {
          const [o, a] = n.split("'"),
            u =
              (parseInt(o) * 12 + (a ? parseInt(a.replace('"', "")) : 0)) *
              2.54;
          return Math.round(u);
        }
      }
      return null;
    }
    getDistance() {
      return 0;
    }
    getProfileDescriptionText() {
      let e = "";
      return (
        this.autoSwiper.mobile
          ? (e = this.profileCard.querySelector(".profile-essay-contents"))
          : (e = this.profileCard.querySelector(".dt-essay")),
        e ? e.innerText.trim().toLowerCase() : null
      );
    }
    getProfileText() {
      const e = [];
      e.push(this.getName().toLowerCase());
      const r = this.getProfileDescriptionText();
      r && e.push(r);
      const i = this.profileCard.querySelector(".matchprofile-details");
      return i && e.push(i.innerText.trim().toLowerCase()), e.join(" ");
    }
    getPhotoCount() {
      var r;
      let e = null;
      return (
        this.autoSwiper.mobile
          ? (e = this.profileCard.querySelector(
              ".tappy-thumbs-outer-container"
            ))
          : (e = this.profileCard.querySelector(
              ".sliding-pagination-inner-content"
            )),
        (e != null &&
          e.childNodes &&
          Array.isArray(e.childNodes) &&
          ((r = e == null ? void 0 : e.childNodes) == null
            ? void 0
            : r.length)) ||
          1
      );
    }
    getVerifiedStatus() {
      return !0;
    }
    getRecentlyActive() {
      return !0;
    }
    doRandomUsageSimulation() {}
    reset() {}
  }
  class nr {
    constructor() {
      v(this, "autoSwiper", null);
      v(this, "profileCard", null);
      v(this, "supportRandomUsageSimulation", !1);
    }
    getSiteName() {
      return "Lovoo";
    }
    getSwipeSpeedModifier() {
      return 1;
    }
    getElementForKeyEvents() {
      return document.querySelector(".modal-content");
    }
    removeProfileModal() {
      document.querySelector(".modal-backdrop").hide(),
        document.querySelector(".modal-dialog").remove();
    }
    swipeLeft() {
      this.autoSwiper.simulateKeyEvent("keyup", this.autoSwiper.keys.escape),
        this.autoSwiper.simulateKeyEvent(
          "keydown",
          this.autoSwiper.keys.escape
        ),
        this.autoSwiper.simulateKeyEvent(
          "keypress",
          this.autoSwiper.keys.escape
        ),
        this.autoSwiper.simulateKeyEvent("keyup", this.autoSwiper.keys.escape),
        this.autoSwiper.simulateKeyEvent(
          "keydown",
          this.autoSwiper.keys.escape
        ),
        this.autoSwiper.simulateKeyEvent(
          "keypress",
          this.autoSwiper.keys.escape
        );
      const e = document.querySelector('[data-automation-id="vote-no-button"]');
      e && e.click();
    }
    swipeRight() {
      this.autoSwiper.simulateKeyEvent("keyup", this.autoSwiper.keys.escape),
        this.autoSwiper.simulateKeyEvent(
          "keydown",
          this.autoSwiper.keys.escape
        ),
        this.autoSwiper.simulateKeyEvent(
          "keypress",
          this.autoSwiper.keys.escape
        ),
        this.autoSwiper.simulateKeyEvent("keyup", this.autoSwiper.keys.escape),
        this.autoSwiper.simulateKeyEvent(
          "keydown",
          this.autoSwiper.keys.escape
        ),
        this.autoSwiper.simulateKeyEvent(
          "keypress",
          this.autoSwiper.keys.escape
        );
      const e = document.querySelector(
        '[data-automation-id="vote-yes-button"]'
      );
      e && e.click();
    }
    removeMessages() {
      document.querySelector('[data-automation-id="match-booster-dialog"]') &&
        ((this.autoSwiper.stop = !0),
        this.autoSwiper.simulateKeyEvent("keyup", this.autoSwiper.keys.escape));
    }
    getProfileCard() {
      if (this.autoSwiper.stop) return null;
      if (!window.location.href.includes("match")) {
        var e = document.querySelector("[href='/match']");
        e && e.hidden === !1 && e.click();
      }
      const r = document.querySelector(
        '[data-automation-id="match-user-profile-link"]'
      );
      return r && r.click(), document.querySelector(".modal-content");
    }
    getName() {
      return this.profileCard
        .querySelector(".profile-details")
        .children[0].innerText.split(", ")[0];
    }
    getAge() {
      return this.profileCard
        .querySelector(".profile-details")
        .children[0].innerText.split(", ")[1];
    }
    getHeight() {
      const e = this.getProfileText(),
        r = /(\d{1,3}\s?cm)|(\d'?\d{0,2})'(\d{0,2})"?/g,
        i = e.match(r);
      if (i) {
        const n = i[0];
        if (n.includes("cm")) return parseInt(n);
        {
          const [o, a] = n.split("'"),
            u =
              (parseInt(o) * 12 + (a ? parseInt(a.replace('"', "")) : 0)) *
              2.54;
          return Math.round(u);
        }
      }
      return null;
    }
    getDistance() {
      return 0;
    }
    getProfileDescriptionText() {
      const e = this.profileCard.querySelector(".tab-content");
      return e
        ? e.querySelector('[ng-switch-when="false"]')
          ? ""
          : e.innerText
        : "";
    }
    getProfileText() {
      const e = [];
      e.push(this.getName().toLowerCase());
      const r = this.profileCard.querySelector(
        '[ng-if="post.owner.locations.home.city"]'
      );
      r && e.push(r.innerText.trim().toLowerCase());
      const i = this.profileCard.querySelector(".tab-content");
      i && e.push(i.innerText.trim().toLowerCase());
      const n = this.profileCard.querySelector(".media-list-devided");
      return n && e.push(n.innerText.trim().toLowerCase()), e.join(" ");
    }
    getPhotoCount() {
      var e = this.profileCard.querySelectorAll(
        ".feed-post-image-container"
      ).length;
      return e || 1;
    }
    getVerifiedStatus() {
      return !!document
        .querySelector('[ng-switch="!!user.verified"]')
        .querySelector('[ng-switch-when="true"]');
    }
    getRecentlyActive() {
      return !0;
    }
    doRandomUsageSimulation() {}
    reset() {}
  }
  class or {
    constructor() {
      v(this, "autoSwiper", null);
      v(this, "profileCard", null);
      v(this, "newUi", !1);
      v(this, "supportRandomUsageSimulation", !0);
      v(this, "lastScroll", 0);
    }
    getSiteName() {
      return "Badoo";
    }
    getSwipeSpeedModifier() {
      return 1;
    }
    getElementForKeyEvents() {
      return document;
    }
    swipeLeft() {
      this.autoSwiper.simulateKeyEvent("keydown", this.autoSwiper.keys.Digit2);
    }
    swipeRight() {
      this.autoSwiper.simulateKeyEvent("keydown", this.autoSwiper.keys.Digit1);
    }
    removeMessages() {
      var h, g, p;
      const e = document.querySelectorAll(".csms-actionsheet__list-item");
      e && e.length > 1 && ((h = e[1].children[0]) == null || h.click());
      const r = document.querySelector(".csms-screen");
      if (r) {
        let d = r.querySelector('[data-qa="close-button"]');
        if (d) {
          d.click();
          return;
        }
        if (
          ((d = r.querySelector(
            '[data-qa="profile-question-blocker-secondary"]'
          )),
          d)
        ) {
          d.click();
          return;
        }
        if (
          ((d = r.querySelector('[data-qa-icon-name="navigation-bar-close"]')),
          d)
        ) {
          d.click();
          return;
        }
      }
      const i = document.querySelector(".mutual-attractions-wrapper");
      if (i) {
        let d = i.querySelector('[data-qa-icon="navigation-bar-close"]');
        if (d) {
          d.click();
          return;
        }
      }
      const n = document.querySelector(".csms-modal");
      if (n) {
        let d = n.querySelectorAll(".csms-action-row");
        if (d && d.length > 1) {
          d[1].click();
          return;
        }
      }
      document.querySelector(".encounters-card-no-results") &&
        ((g = document.querySelectorAll(".csms-tabbar__item")[0]) == null ||
          g.click()),
        document.querySelector(".promo-card") &&
          this.autoSwiper.simulateMouseDragAndDropRightToLeft(
            document.querySelector(".promo-card__inner")
          ),
        document.querySelector("[data-qa='promo-card-cta']") &&
          this.autoSwiper.simulateMouseDragAndDropRightToLeft(
            document.querySelector(".promo-card__inner")
          );
      let u = document.querySelector(".overlay-page");
      if (u) {
        let d = u.querySelectorAll(".csms-button");
        d && d.length === 2 && d[1].click();
      }
      (p = document.querySelector('[data-qa="modal-close"]')) == null ||
        p.click();
      let c = document.querySelector('[data-qa="modal-action-cancel"]');
      c && c.click();
    }
    getProfileCard() {
      var r;
      window.location.href.includes("encounters") ||
        (r = document.querySelectorAll(".csms-tabbar__item")[1]) == null ||
        r.click();
      let e = null;
      return (e = document.querySelector('[data-qa="first-card"]')), e;
    }
    getName() {
      var r, i;
      let e = "";
      return (
        (e =
          (i =
            (r = this.profileCard.querySelector(".profile-card-info__name")) ==
            null
              ? void 0
              : r.querySelector('[data-qa="profile-info__name"]')) == null
            ? void 0
            : i.innerText.trim()),
        e
      );
    }
    getAge() {
      var r, i;
      let e = "";
      return (
        (e =
          (i =
            (r = this.profileCard.querySelector(".profile-card-info__name")) ==
            null
              ? void 0
              : r.querySelector('[data-qa="profile-info__age"]')) == null
            ? void 0
            : i.innerText.trim()),
        e
      );
    }
    getHeight() {
      const e = this.getProfileText(),
        r = /(\d{1,3}\s?cm)|(\d'?\d{0,2})'(\d{0,2})"?/g,
        i = e.match(r);
      if (i) {
        const n = i[0];
        if (n.includes("cm")) return parseInt(n);
        {
          const [o, a] = n.split("'"),
            u =
              (parseInt(o) * 12 + (a ? parseInt(a.replace('"', "")) : 0)) *
              2.54;
          return Math.round(u);
        }
      }
      return null;
    }
    getDistance() {
      return 0;
    }
    getProfileDescriptionText() {
      let e = null;
      return (
        (e = this.profileCard.querySelector(".profile-card-full__content")),
        e ? e.innerText : ""
      );
    }
    getProfileText() {
      var i;
      const e = [];
      e.push((i = this.getName()) == null ? void 0 : i.toLowerCase());
      let r = this.profileCard.querySelector(".profile-card-full__content");
      return r && e.push(r.innerText.trim().toLowerCase()), e.join(" ");
    }
    getPhotoCount() {
      const e = this.profileCard.querySelectorAll(".user-section--photo");
      return e ? e.length : 1;
    }
    getVerifiedStatus() {
      return !!this.profileCard.querySelector(
        '[data-qa="verification-status-full"]'
      );
    }
    getRecentlyActive() {
      return !0;
    }
    doRandomUsageSimulation() {
      const e = document
          .querySelector('[data-qa="first-card"]')
          .querySelector(".profile-card__content-scroller"),
        r = Math.floor(Math.random() * 1100 + 500) + this.lastScroll,
        i = Math.floor(Math.random() * 500 + 500);
      (this.lastScroll = r),
        e &&
          (e.scroll({ top: r, left: 0, behavior: "smooth" }),
          this.autoSwiper.randomUsageCounter ===
            this.autoSwiper.radnomUsageNumber &&
            (setTimeout(() => {
              e.scroll({ top: 0, left: 0, behavior: "smooth" });
            }, i),
            (this.lastScroll = 0)));
    }
    reset() {}
  }
  class ar {
    constructor() {
      v(this, "autoSwiper", null);
      v(this, "profileCard", null);
      v(this, "supportRandomUsageSimulation", !1);
    }
    getSiteName() {
      return "PoF";
    }
    getSwipeSpeedModifier() {
      return 1;
    }
    getElementForKeyEvents() {
      return window.body;
    }
    swipeLeft() {
      const e = document.querySelector("#meetmevotebutton-no");
      e && e.click();
    }
    swipeRight() {
      const e = document.querySelector("#meetmevotebutton-yes");
      e && e.click();
    }
    removeMessages() {
      var r;
      const e = document.querySelector(".upgrade-like-to-like-plus-container");
      e && ((r = e.querySelector("a")) == null || r.click());
    }
    getProfileCard() {
      if (!window.location.href.includes("meetme")) {
        var e = document.querySelector("[href='/meetme']");
        e && e.hidden === !1 && e.click();
      }
      return document.querySelector("#meetme-stack").children[0];
    }
    getName() {
      return "NOT SUPPORTED";
    }
    getAge() {
      return this.profileCard
        .querySelector(".meetmeimage")
        .children[1].children[1].innerText.trim()
        .split(", ")[0];
    }
    getHeight() {
      const e = this.getProfileText(),
        r = /(\d{1,3}\s?cm)|(\d'?\d{0,2})'(\d{0,2})"?/g,
        i = e.match(r);
      if (i) {
        const n = i[0];
        if (n.includes("cm")) return parseInt(n);
        {
          const [o, a] = n.split("'"),
            u =
              (parseInt(o) * 12 + (a ? parseInt(a.replace('"', "")) : 0)) *
              2.54;
          return Math.round(u);
        }
      }
      return null;
    }
    getDistance() {
      return 0;
    }
    getProfileDescriptionText() {
      return this.profileCard
        .querySelector(".meetmeimage")
        .children[1].children[1].innerText.trim();
    }
    getProfileText() {
      return this.profileCard
        .querySelector(".meetmeimage")
        .children[1].children[1].innerText.trim();
    }
    getPhotoCount() {
      return 1;
    }
    getVerifiedStatus() {
      return !0;
    }
    getRecentlyActive() {
      return !0;
    }
    doRandomUsageSimulation() {}
    reset() {}
  }
  class ur {
    constructor() {
      v(this, "autoSwiper", null);
      v(this, "profileCard", null);
      v(this, "supportRandomUsageSimulation", !1);
    }
    getSiteName() {
      return "Zoosk";
    }
    getSwipeSpeedModifier() {
      return 1;
    }
    getElementForKeyEvents() {
      return window;
    }
    swipeLeft() {
      try {
        const e = this.profileCard.querySelector(".profile-card-v2-button-no");
        e && e.click(), this.clickNextProfileBtn();
      } catch {
        return !1;
      }
    }
    swipeRight() {
      try {
        const e = this.profileCard.querySelector(".profile-card-v2-button-yes");
        e && e.click(), this.clickNextProfileBtn();
      } catch {
        return !1;
      }
    }
    clickNextProfileBtn() {
      const e = this.profileCard.querySelector(".slide-nav-v3__next");
      e && e.click();
    }
    removeMessages() {
      document.querySelector(".encounters-user__blocker") &&
        (this.autoSwiper.stop = !0);
      const r = document.getElementsByClassName("encounters-match__cta-action");
      r.length > 0 && r[1].children[0].click(),
        this.autoSwiper.simulateKeyEvent("keyup", this.autoSwiper.keys.escape),
        this.autoSwiper.simulateKeyEvent(
          "keydown",
          this.autoSwiper.keys.escape
        ),
        this.autoSwiper.simulateKeyEvent(
          "keypress",
          this.autoSwiper.keys.escape
        );
    }
    getProfileCard() {
      return document.querySelector("[data-zat=current-card-true]");
    }
    getName() {
      return this.profileCard
        .querySelector("[data-zat=profile-other-user-name-and-age]")
        .innerText.trim()
        .split(", ")[0];
    }
    getAge() {
      return this.profileCard
        .querySelector("[data-zat=profile-other-user-name-and-age]")
        .innerText.trim()
        .split(", ")[1];
    }
    getHeight() {
      const e = this.getProfileText(),
        r = /(\d{1,3}\s?cm)|(\d'?\d{0,2})'(\d{0,2})"?/g,
        i = e.match(r);
      if (i) {
        const n = i[0];
        if (n.includes("cm")) return parseInt(n);
        {
          const [o, a] = n.split("'"),
            u =
              (parseInt(o) * 12 + (a ? parseInt(a.replace('"', "")) : 0)) *
              2.54;
          return Math.round(u);
        }
      }
      return null;
    }
    getDistance() {
      let e = 5e5;
      const r = this.profileCard
        .querySelector("[data-zat=profile-other-user-location]")
        .innerText.trim();
      if (r) {
        const i = parseInt(r.split("(")[1].split(" ")[0]);
        Number.isInteger(i) && (e = i);
      }
      return e;
    }
    getProfileDescriptionText() {
      const e = [],
        r = document.querySelectorAll(".extended-info")[1];
      return (
        e.push(
          r.querySelector(".basics-v2-list").innerText.replaceAll(
            `
`,
            " "
          )
        ),
        e.join(" ")
      );
    }
    getProfileText() {
      const e = [];
      return (
        e.push(this.getName().toLowerCase()),
        e.push(this.getProfileDescriptionText()),
        e.push(
          this.profileCard
            .querySelector("[data-zat=profile-other-user-location]")
            .innerText.trim()
        ),
        e.join(" ")
      );
    }
    getPhotoCount() {
      return this.profileCard.querySelectorAll(".photo-counter").length;
    }
    getVerifiedStatus() {
      return !!this.profileCard.querySelector(
        ".profile-card-icon--video-verified"
      );
    }
    getRecentlyActive() {
      return !0;
    }
    isVisible(e) {
      try {
        if (!this.isVisibleByStyles(e) || this.isBehindOtherElement(e))
          return !1;
      } catch (r) {
        return log(r), !1;
      }
      return !0;
    }
    isVisibleByStyles(e) {
      const r = window.getComputedStyle(e);
      return r.visibility !== "hidden" && r.display !== "none";
    }
    isBehindOtherElement(e) {
      const r = e.getBoundingClientRect(),
        i = r.left + 1,
        n = r.right - 1,
        o = r.top + 1,
        a = r.bottom - 1;
      return (
        document.elementFromPoint(i, o) !== e ||
        document.elementFromPoint(n, o) !== e ||
        document.elementFromPoint(i, a) !== e ||
        document.elementFromPoint(n, a) !== e
      );
    }
    doRandomUsageSimulation() {}
    reset() {}
  }
  class Ct {
    constructor(e) {
      v(this, "version", null);
      v(this, "site", null);
      v(this, "cardTryCounter", 0);
      v(this, "sameProfileFoundCounter", 0);
      v(this, "sameProfileFoundReloadCounter", 0);
      v(this, "lastProfile", null);
      v(this, "lastLastProfile", null);
      v(this, "stop", !1);
      v(this, "userStopped", !1);
      v(this, "ignoreUnload", !1);
      v(this, "swipeCounts", { total: 0, left: 0, right: 0 });
      v(this, "nextSwipes", []);
      v(this, "mixpanelStartSent", !1);
      v(this, "mixpanelDonSent", !1);
      v(this, "swipeCount", 0);
      v(this, "reloadPageAtSwipes", null);
      v(this, "breakAtSwipes", null);
      v(this, "breakDuration", null);
      v(this, "longitude", null);
      v(this, "latitude", null);
      v(this, "options", {
        uuid: null,
        userId: null,
        userEmail: "",
        isFree: !0,
        isBasic: !1,
        isPro: !1,
        isUltimate: !1,
        enableMaxSwipesFilter: !1,
        maxSwipes: 5000,
        enableLeftSwipesPercentageFilter: !1,
        leftSwipePercentage: [25, 50],
        enableAgeFilter: !1,
        minMaxAge: [18, 99],
        enableHeightFilter: !1,
        minMaxHeight: [155, 180],
        enableDistanceFilter: !1,
        maxDistance: 10,
        skipEmptyDistance: !1,
        enableMinPicturesFilter: !1,
        minPictures: 2,
        minMaxSwipeTime: [2, 6],
        enableBreak: !1,
        breakBetweenSwipes: [150, 250],
        breakDuration: [20, 360],
        enableAutomaticPageReload: !1,
        reloadPageBetweenSwipes: [150, 200],
        enableDelayAfterPageReload: !1,
        delayBetweenAfterPageReload: [120, 720],
        delayAfterPageReload: null,
        enableRandomUsageSimulation: !0,
        randomUsageSimulation: [1, 4],
        noEmptyDescription: !1,
        onlyVerifyedProfiles: !1,
        onlyRecentlyActive: !1,
        bannedWords: [],
        preferredWords: [],
        requiredWords: [],
        stats: {
          swipes_left: 0,
          swipes_right: 0,
          bannedWords: {},
          preferredWords: {},
        },
        log: [],
        tabId: null,
        withNotification: !0,
      });
      v(this, "profile", {
        datetime: "",
        reason: "",
        name: "",
        age: 0,
        height: 0,
        distance: 0,
        photosCount: 0,
        description: "",
        verifyed: !1,
      });
      v(this, "keys", {
        arrowLeft: {
          key: "ArrowLeft",
          code: "ArrowLeft",
          keyCode: 37,
          which: 37,
          charCode: 0,
        },
        arrowUp: {
          key: "ArrowUp",
          code: "ArrowUp",
          keyCode: 38,
          which: 38,
          charCode: 0,
        },
        arrowRight: {
          key: "ArrowRight",
          code: "ArrowRight",
          keyCode: 39,
          which: 39,
          charCode: 0,
        },
        arrowDown: {
          key: "ArrowDown",
          code: "ArrowDown",
          keyCode: 40,
          which: 40,
          charCode: 0,
        },
        escape: { key: "Escape", keyCode: 27, code: 27 },
        Digit1: {
          key: "1",
          code: "Digit1",
          keyCode: 49,
          which: 49,
          charCode: 49,
        },
        Digit2: {
          key: "2",
          code: "Digit2",
          keyCode: 50,
          which: 50,
          charCode: 50,
        },
      });
      v(this, "mobile", !1);
      var r;
      (this.options = e),
        this.setSite(),
        this.setMobile(),
        (this.mixpanelStartSent = !1),
        (this.mixpanelDonSent = !1),
        (this.version = E.runtime.getManifest().version),
        e.userId > 0
          ? ye.identify(e.userId)
          : ((r = e.userEmail) == null ? void 0 : r.length) > 0
          ? ye.identify(e.userEmail)
          : ye.identify(e.uuid),
        this.mixpanelSendStartEvent(),
        this.regenerateRandomSettings(),
        this.fetchLocation();
    }
    regenerateRandomSettings() {
      (this.breakAtSwipes = Math.round(
        this.getRandom(
          this.options.breakBetweenSwipes[0],
          this.options.breakBetweenSwipes[1]
        )
      )),
        (this.breakDuration = Math.round(
          this.getRandom(
            this.options.breakDuration[0],
            this.options.breakDuration[1]
          )
        )),
        this.options.enableBreak &&
          (b("automatic break at " + this.breakAtSwipes + " swipes"),
          b("automatic break duration " + this.breakDuration + " minutes")),
        (this.reloadPageAtSwipes = Math.round(
          this.getRandom(
            this.options.reloadPageBetweenSwipes[0],
            this.options.reloadPageBetweenSwipes[1]
          )
        )),
        (this.options.delayAfterPageReload = Math.round(
          this.getRandom(
            this.options.delayBetweenAfterPageReload[0],
            this.options.delayBetweenAfterPageReload[1]
          )
        )),
        this.options.enableAutomaticPageReload &&
          (b("automatic page reload at " + this.reloadPageAtSwipes + " swipes"),
          b(
            "automatic page reload delay " +
              this.options.delayAfterPageReload +
              " minutes"
          )),
        this.regenerateRandomUsageNumber();
    }
    regenerateRandomUsageNumber() {
      this.radnomUsageNumber = Math.floor(
        this.getRandom(
          this.options.randomUsageSimulation[0],
          this.options.randomUsageSimulation[1]
        )
      );
    }
    mixpanelSendStartEvent() {
      this.mixpanelStartSent ||
        (ye.track("startAutoSwipe", {
          site: this.site.getSiteName(),
          version: this.version,
          filterIsFree: this.options.isFree,
          filterIsBasic: this.options.isBasic,
          filterIsPro: this.options.isPro,
          filterIsUltimate: this.options.isUltimate,
          filterMaxSwipes: this.options.maxSwipes,
          filterLeftSwipePercentage: this.options.leftSwipePercentage,
          filterMinMaxAge: this.options.minMaxAge,
          filterMaxDistance: this.options.maxDistance,
          filterMinPictures: this.options.minPictures,
          filterBannedWords: this.options.bannedWords,
          filterPreferredWords: this.options.preferredWords,
          filterMinMaxSwipeTime: this.options.minMaxSwipeTime,
          filterNoEmptyDescription: this.options.noEmptyDescription,
          filterOnlyVerifyedProfiles: this.options.onlyVerifyedProfiles,
          filterOnlyRecentlyActive: this.options.onlyRecentlyActive,
          filterSkipEmptyDistance: this.options.skipEmptyDistance,
          filterIgnoreDistance: this.options.ignoreDistance,
          enableRandomUsageSimulation: this.options.enableRandomUsageSimulation,
          randomUsageSimulationMarks: this.options.randomUsageSimulation,
        }),
        (this.mixpanelStartSent = !0));
    }
    mixpanelSendDonEvent(e) {
      this.mixpanelDonSent ||
        (ye.track(
          "donAutoSwipe",
          {
            swipeCountTotal: e.swipeCounts.total,
            swipeCountLeft: e.swipeCounts.left,
            swipeCountRight: e.swipeCounts.right,
            site: e.site.getSiteName(),
            version: e.version,
            filterIsFree: e.options.isFree,
            filterIsBasic: e.options.isBasic,
            filterIsPro: e.options.isPro,
            filterIsUltimate: e.options.isUltimate,
          },
          { transport: "sendBeacon" }
        ),
        (this.mixpanelDonSent = !0));
    }
    getRandom(e, r) {
      return Math.random() * (r - e) + e;
    }
    loadProfileData() {
      (this.profile.datetime = new Date().toISOString()),
        (this.profile.name = this.site.getName()),
        (this.profile.age = this.site.getAge()),
        (this.profile.height = this.site.getHeight()),
        (this.profile.distance = this.site.getDistance()),
        (this.profile.photosCount = this.site.getPhotoCount()),
        (this.profile.description = this.site.getProfileDescriptionText()),
        (this.profile.texts = this.site.getProfileText()),
        (this.profile.verifyed = this.site.getVerifiedStatus());
    }
    getWords(e) {
      const r = [],
        i = this.options[e],
        n = this.options.stats[e] || {};
      return (
        b("searching for", e, "words", i),
        i.find((o) => {
          let a = !1,
            l = null;
          try {
            l = new RegExp(o);
          } catch {}
          l instanceof RegExp
            ? (a = l.test(this.profile.texts))
            : (a =
                this.profile.texts.search(
                  "[^a-zA-Z]" + o.toLowerCase() + "[^a-zA-Z]"
                ) !== -1 ||
                (o === "@" &&
                  this.profile.texts.search(o.toLowerCase()) !== -1)),
            a && (n[o] === void 0 && (n[o] = 0), n[o]++, r.push(o));
        }),
        (r == null ? void 0 : r.length) > 0 && b(`found ${e} words:`, r),
        (this.options.stats[e] = n),
        r
      );
    }
    getBannedWords() {
      return this.getWords("bannedWords");
    }
    getPreferredWords() {
      return this.getWords("preferredWords");
    }
    getRequiredWords() {
      return this.getWords("requiredWords");
    }
    createMarkerAt(e, r, i) {
      const n = document.createElement("div");
      (n.style.position = "absolute"),
        (n.style.left = `${e}px`),
        (n.style.top = `${r}px`),
        (n.style.width = "10px"),
        (n.style.height = "10px"),
        (n.style.backgroundColor = "red"),
        (n.style.color = "white"),
        (n.style.textAlign = "center"),
        (n.style.borderRadius = "50%"),
        (n.style.zIndex = "1000"),
        (n.innerText = i),
        document.body.appendChild(n);
    }
    simulateMouseDragAndDropRightToLeft(e) {
      const r = e.getBoundingClientRect(),
        i = this.getRandom(60, 200),
        n = this.getRandom(-120, 120),
        o = this.getRandom(120, 220),
        a = this.getRandom(-120, 120),
        l = r.left + (r.right - r.left) / 2 + i,
        u = r.top + (r.bottom - r.top) / 2 + n,
        c = r.left + (r.right - r.left) / 2 - o,
        h = r.top + (r.bottom - r.top) / 2 + a;
      this.simulateMouseDragAndDrop(e, l, u, c, h);
    }
    simulateMouseDragAndDrop(e, r, i, n, o) {
      function a(h, g, p) {
        return new MouseEvent(h, {
          bubbles: !0,
          cancelable: !0,
          clientX: g,
          clientY: p,
          view: window,
        });
      }
      const l = a("mousedown", r, i);
      e.dispatchEvent(l);
      const u = a("mousemove", n, o);
      e.dispatchEvent(u);
      const c = a("mouseup", n, o);
      e.dispatchEvent(c);
    }
    simulateKeyEvent(e, r) {
      const i = new KeyboardEvent(e, {
          char: "",
          shiftKey: !1,
          bubbles: !0,
          cancelable: !0,
          ...r,
        }),
        n = this.site.getElementForKeyEvents();
      n && n.dispatchEvent(i);
    }
    simulateDebuugerKeyEvent(e) {
      b("sent: auto-swiper-message-backgroundjs-simulate-key-event"),
        E.runtime.sendMessage({
          action: "auto-swiper-message-backgroundjs-simulate-key-event",
          tabId: this.options.tabId,
          keyData: e,
        });
    }
    simulateDebuggerMouseClick(e) {
      const r = e.getBoundingClientRect(),
        i = 12,
        n = r.left + (r.right - r.left) / 2 + (Math.random() * 2 * i - i),
        o = r.top + (r.bottom - r.top) / 2 + (Math.random() * 2 * i - i);
      b("sent: auto-swiper-message-backgroundjs-simulate-mouse-click"),
        E.runtime.sendMessage({
          action: "auto-swiper-message-backgroundjs-simulate-mouse-click",
          tabId: this.options.tabId,
          x: n,
          y: o,
        });
    }
    addLog() {
      this.options.log.push(this.profile);
    }
    resetAfterSwipe() {
      this.regenerateRandomUsageNumber();
    }
    swipe(e) {
      this.swipeCount++,
        this.swipeCounts.total++,
        this.swipeCounts[e]++,
        this.options.stats[`swipes_${e}`]++,
        this.addLog(),
        b(this.swipeCounts.total),
        b(
          this.profile.name,
          this.profile.age,
          "Years",
          this.profile.height,
          "Height",
          this.profile.distance,
          "Distance",
          this.profile.photosCount,
          "Pictures"
        ),
        b(e === "left" ? "<--" : "-->", this.profile.reason),
        (this.lastProfile = { ...this.profile }),
        (this.lastLastProfile = { ...this.lastProfile }),
        this.site.reset(),
        this.site[`swipe${e.charAt(0).toUpperCase() + e.slice(1)}`]();
    }
    swipeLeft() {
      this.swipe("left");
    }
    swipeRight() {
      this.swipe("right");
    }
    resetProfile() {
      (this.profile = {
        datetime: "",
        reason: null,
        name: "",
        age: 0,
        distance: 0,
        photosCount: 0,
      }),
        this.site.removeMessages();
    }
    setSite() {
      const e = {
          bumble: ir,
          tinder: rr,
          okcupid: sr,
          lovoo: nr,
          badoo: or,
          pof: ar,
          zoosk: ur,
        },
        r = Object.keys(e).find((n) => window.location.href.includes(n)),
        i = e[r];
      if (i) {
        const n = new i();
        (n.autoSwiper = this), (this.site = n);
      }
    }
    setMobile() {
      this.mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }
    cardNotFound() {
      this.cardTryCounter > 10
        ? (b("auto swiper profile card not found auto reload page"),
          (this.ignoreUnload = !0),
          (this.cardTryCounter = 0),
          b("sent: auto-swiper-message-backgroundjs-reload-tab"),
          E.runtime.sendMessage({
            action: "auto-swiper-message-backgroundjs-reload-tab",
            swipeCounts: this.swipeCounts,
            options: this.options,
          }))
        : this.cardTryCounter++;
    }
    sameProfileFound() {
      this.sameProfileFoundCounter > 25
        ? (b("auto swiper: same card as last time something is wrong"),
          (this.ignoreUnload = !0),
          (this.sameProfileFoundCounter = 0),
          (this.lastProfile = null),
          (this.lastLastProfile = null),
          this.sameProfileFoundReloadCounter > 5
            ? this.sendMessageToApp("ERROR_SWIPING_NOT_WORKING")
            : (b(
                "auto swiper: same card as last time auto reload page for the " +
                  this.sameProfileFoundReloadCounter +
                  " time"
              ),
              this.sameProfileFoundReloadCounter++,
              b("sent: auto-swiper-message-backgroundjs-reload-tab"),
              E.runtime.sendMessage({
                action: "auto-swiper-message-backgroundjs-reload-tab",
                swipeCounts: this.swipeCounts,
                options: this.options,
              })))
        : (b(
            "auto swiper: same card as last time on try " +
              this.sameProfileFoundCounter
          ),
          this.sameProfileFoundCounter++);
    }
    getProfileCard() {
      let e = null;
      try {
        (e = this.site.getProfileCard()),
          e
            ? ((this.cardTryCounter = 0), (this.cardFoundCounter = 0))
            : this.cardNotFound();
      } catch {
        this.cardNotFound();
      }
      return e;
    }
    sendMessageToApp(e) {
      b("sent: auto-swiper-message-popupjs-show-message"),
        E.runtime.sendMessage({
          action: "auto-swiper-message-popupjs-show-message",
          message: e,
        });
    }
    distributeSwipesEvenly(e, r) {
      let i = [],
        n = e.length / (e.length + r.length),
        o = 1 - n,
        a = 0,
        l = 0;
      for (let u = 0; u < e.length + r.length; u++)
        u * n >= a && a < e.length
          ? (i.push(e[a]), a++)
          : u * o >= l && l < r.length && (i.push(r[l]), l++);
      return i;
    }
    getCurrentLocation() {
      return new Promise((e, r) => {
        navigator.geolocation.getCurrentPosition(e, r);
      });
    }
    async fetchLocation() {
      try {
        const e = await this.getCurrentLocation();
        (this.longitude = e.coords.latitude),
          (this.latitude = e.coords.latitude),
          b("Latitude is :", this.latitude),
          b("Longitude is :", this.longitude);
      } catch (e) {
        b("Could not get current position", e);
      }
    }
    check() {
      var r, i, n, o, a, l;
      if (
        (this.options.enableMaxSwipesFilter &&
          this.options.maxSwipes === this.swipeCounts.total &&
          ((this.stop = !0), (this.ignoreUnload = !0)),
        this.options.isFree === !0 &&
          this.swipeCounts.total === 5000 &&
          ((this.stop = !0), (this.ignoreUnload = !0)),
        this.options.isBasic === !0 &&
          this.swipeCounts.total === 1e3 &&
          ((this.stop = !0), (this.ignoreUnload = !0)),
        (this.site.profileCard = this.getProfileCard()),
        this.stop || !this.site.profileCard)
      )
        return;
      if (this.site.profileCard)
        if (
          this.site.supportRandomUsageSimulation &&
          this.options.enableRandomUsageSimulation &&
          this.randomUsageCounter <= this.radnomUsageNumber
        ) {
          this.randomUsageCounter++, this.site.doRandomUsageSimulation();
          return;
        } else this.randomUsageCounter = 0;
      this.loadProfileData();
      const e = (u, c) =>
        u.name === c.name &&
        u.age === c.age &&
        u.distance === c.distance &&
        u.photosCount === c.photosCount &&
        u.description === c.description &&
        u.texts === c.texts &&
        u.verifyed === c.verifyed;
      if (
        (this.lastProfile &&
        e(this.profile, this.lastProfile) &&
        this.lastLastProfile &&
        e(this.lastProfile, this.lastLastProfile)
          ? this.sameProfileFound()
          : (this.sameProfileFoundCounter = 0),
        (this.options.isBasic ||
          this.options.isPro ||
          this.options.isUltimate) &&
          this.options.enableLeftSwipesPercentageFilter)
      ) {
        if (((r = this.nextSwipes) == null ? void 0 : r.length) > 0)
          return this.nextSwipes.shift() === "left"
            ? ((this.profile.reason = E.i18n.getMessage(
                "LEFT_SWIPES_PERCENTAGE"
              )),
              this.swipeLeft())
            : this.swipeRight();
        {
          let u = this.getRandom(
            this.options.leftSwipePercentage[0],
            this.options.leftSwipePercentage[1]
          );
          b("left swipe percentage for the next 100 swipes: " + u);
          let c = 100 - u,
            h = [];
          for (let p = 1; p <= u; p++) h.push("left");
          let g = [];
          for (let p = 1; p <= c; p++) g.push("right");
          this.nextSwipes = this.distributeSwipesEvenly(h, g);
          return;
        }
      }
      if (((i = this.options.bannedWords) == null ? void 0 : i.length) > 0) {
        let u = this.getBannedWords();
        if ((u == null ? void 0 : u.length) > 0)
          return (
            (this.profile.reason =
              E.i18n.getMessage("REASON_BANNED_WORD") + " = " + u.join(", ")),
            this.swipeLeft()
          );
      }
      if (
        (this.options.isBasic ||
          this.options.isPro ||
          this.options.isUltimate) &&
        ((n = this.options.preferredWords) == null ? void 0 : n.length) > 0
      ) {
        let u = this.getPreferredWords();
        if ((u == null ? void 0 : u.length) > 0) return this.swipeRight();
      }
      if (this.options.enableAgeFilter) {
        if (
          this.profile.age !== "" &&
          this.profile.age <
            Math.min(this.options.minMaxAge[0], this.options.minMaxAge[1])
        )
          return (
            (this.profile.reason = E.i18n.getMessage("REASON_TO_YOUNG")),
            this.swipeLeft()
          );
        if (
          this.profile.age !== "" &&
          this.profile.age >
            Math.max(this.options.minMaxAge[0], this.options.minMaxAge[1])
        )
          return (
            (this.profile.reason = E.i18n.getMessage("REASON_TO_OLD")),
            this.swipeLeft()
          );
      }
      if (this.options.enableHeightFilter && this.profile.height !== null) {
        if (
          this.profile.height !== "" &&
          this.profile.height <
            Math.min(this.options.minMaxHeight[0], this.options.minMaxHeight[1])
        )
          return (
            (this.profile.reason = E.i18n.getMessage("REASON_HEIGHT_TO_SMALL")),
            this.swipeLeft()
          );
        if (
          this.profile.height !== "" &&
          this.profile.height >
            Math.max(this.options.minMaxHeight[0], this.options.minMaxHeight[1])
        )
          return (
            (this.profile.reason = E.i18n.getMessage("REASON_HEIGHT_TO_TALL")),
            this.swipeLeft()
          );
      }
      if (
        this.site.getSiteName() !== "PoF" &&
        this.options.enableMinPicturesFilter &&
        this.profile.photosCount < this.options.minPictures
      )
        return (
          (this.profile.reason = E.i18n.getMessage("REASON_TO_LESS_PICTURES")),
          this.swipeLeft()
        );
      if (
        (this.site.getSiteName() === "Tinder" ||
          this.site.getSiteName() === "Bumble" ||
          this.site.getSiteName() === "Zoosk") &&
        this.options.enableDistanceFilter &&
        this.options.maxDistance !== 0 &&
        this.profile.distance > this.options.maxDistance &&
        !(this.options.skipEmptyDistance && this.profile.maxDistance === 5e5)
      )
        return (
          (this.profile.reason =
            E.i18n.getMessage("REASON_TO_FAR_AWAY") +
            " " +
            this.profile.distance +
            " Distance"),
          this.swipeLeft()
        );
      if (
        this.options.isBasic ||
        this.options.isPro ||
        this.options.isUltimate
      ) {
        if (
          ((a = (o = this.profile) == null ? void 0 : o.description) == null
            ? void 0
            : a.length) === 0 &&
          this.options.noEmptyDescription
        )
          return (
            (this.profile.reason = E.i18n.getMessage(
              "REASON_EMPTY_DESCRIPTION"
            )),
            this.swipeLeft()
          );
        if (
          (this.site.getSiteName() === "Tinder" ||
            this.site.getSiteName() === "Bumble" ||
            this.site.getSiteName() === "Lovoo") &&
          !this.profile.verifyed &&
          this.options.onlyVerifyedProfiles
        )
          return (
            (this.profile.reason = E.i18n.getMessage(
              "REASON_ONLY_VERIFYED_PROFILES"
            )),
            this.swipeLeft()
          );
        if (
          this.site.getSiteName() === "Tinder" &&
          !this.site.getRecentlyActive() &&
          this.options.onlyRecentlyActive
        )
          return (
            (this.profile.reason = E.i18n.getMessage(
              "REASON_ONLY_RECENTLY_ACTIVE"
            )),
            this.swipeLeft()
          );
      }
      if (
        (this.options.isBasic ||
          this.options.isPro ||
          this.options.isUltimate) &&
        ((l = this.options.requiredWords) == null ? void 0 : l.length) > 0
      ) {
        let u = this.getRequiredWords();
        if ((b("required words", u), (u == null ? void 0 : u.length) < 1))
          return (
            b("required words not found"),
            (this.profile.reason = E.i18n.getMessage("REASON_REQUIRED_WORD")),
            this.swipeLeft()
          );
      }
      return this.swipeRight();
    }
    sendProgressUpdateAutoSwipe() {
      let e = this;
      try {
        b("sent: auto-swiper-message-popupjs-progress-update"),
          E.runtime.sendMessage({
            action: "auto-swiper-message-popupjs-progress-update",
            swipeCounts: e.swipeCounts,
            profile: e.profile,
            stats: e.options.stats,
            log: e.options.log,
          });
      } catch (r) {
        b("Error on sending auto-swiper-message-popupjs-progress-update", r);
      }
    }
    sendDonAutoSwipe() {
      let e = this;
      if (
        (this.mixpanelSendDonEvent(this),
        (this.options.isFree || this.options.isBasic) &&
          E.storage.local.set({ lastSwipeCount: e.swipeCounts.total }),
        b("sent: auto-swiper-message-popupjs-done"),
        E.runtime.sendMessage({
          action: "auto-swiper-message-popupjs-done",
          swipeCounts: e.swipeCounts,
          stats: e.options.stats,
          log: e.options.log,
          site: this.site.getSiteName(),
        }),
        b("sent: auto-swiper-message-backgroundjs-stopped"),
        E.runtime.sendMessage({
          action: "auto-swiper-message-backgroundjs-stopped",
          tabId: this.options.tabId,
        }),
        !this.userStopped && this.options.withNotification)
      ) {
        let r =
          E.i18n.getMessage("BROWSER_NOTIFICATION_DON_TEXT") +
          " " +
          E.i18n.getMessage("LEFT") +
          ": " +
          this.swipeCounts.left +
          " " +
          E.i18n.getMessage("RIGHT") +
          ": " +
          this.swipeCounts.right +
          " " +
          E.i18n.getMessage("TOTAL") +
          ": " +
          (this.swipeCounts.left + this.swipeCounts.right);
        b("sent: auto-swiper-message-backgroundjs-send-notification"),
          E.runtime.sendMessage({
            action: "auto-swiper-message-backgroundjs-send-notification",
            message: r,
          });
      }
    }
    startSwiping() {
      Et(),
        b("sent: auto-swiper-message-backgroundjs-start-loop"),
        E.runtime.sendMessage({
          action: "auto-swiper-message-backgroundjs-start-loop",
          options: this.options,
          siteSwipeSpeedModifier: this.site.getSwipeSpeedModifier(),
        });
    }
    stopSwiping() {
      b("sent: auto-swiper-message-backgroundjs-stop-loop"),
        E.runtime.sendMessage({
          action: "auto-swiper-message-backgroundjs-stop-loop",
        });
    }
    checkLoop() {
      const e = this;
      e.resetProfile(),
        setTimeout(() => {
          e.check(),
            e.sendProgressUpdateAutoSwipe(),
            e.stop === !1
              ? e.options.enableAutomaticPageReload &&
                e.swipeCount === e.reloadPageAtSwipes
                ? ((e.ignoreUnload = !0),
                  b("sent: auto-swiper-message-backgroundjs-reload-tab"),
                  E.runtime.sendMessage({
                    action: "auto-swiper-message-backgroundjs-reload-tab",
                    swipeCounts: e.swipeCounts,
                    options: e.options,
                  }))
                : e.options.enableBreak &&
                  e.swipeCount === e.breakAtSwipes &&
                  (b("initiate break"),
                  (e.stop = !0),
                  e.stopSwiping(),
                  b(
                    "sent: auto-swiper-message-backgroundjs-create-restart-alarm"
                  ),
                  E.runtime.sendMessage({
                    action:
                      "auto-swiper-message-backgroundjs-create-restart-alarm",
                    options: e.options,
                    breakDuration: e.breakDuration,
                  }))
              : (e.stopSwiping(), e.sendDonAutoSwipe());
        }, 1e3);
    }
  }
  let P = null;
  const lr = function (t) {
      P &&
        !P.ignoreUnload &&
        (t.returnValue = "Are you sure you want to stop Auto Swiper?");
    },
    cr = function (t) {
      P &&
        !P.ignoreUnload &&
        ((P.stop = !0), (P.ignoreUnload = !0), P.sendDonAutoSwipe());
    };
  addEventListener("beforeunload", lr.bind(void 0), { capture: !0 }),
    addEventListener("unload", cr.bind(void 0), { capture: !0 }),
    E.runtime.onMessage.addListener(function (t, e, r) {
      t.action === "auto-swiper-message-contentjs-start" &&
        (b("recived: auto-swiper-message-contentjs-start"),
        (P = new Ct(t.options)),
        P.startSwiping()),
        t.action === "auto-swiper-message-contentjs-start-after-tab-reload" &&
          (b("recived: auto-swiper-message-contentjs-start-after-tab-reload"),
          (P = new Ct(t.options)),
          (P.swipeCounts = t.swipeCounts),
          (P.ignoreUnload = !1),
          (P.stop = !1),
          P.startSwiping()),
        t.action === "auto-swiper-message-contentjs-restart" &&
          (b("recived: auto-swiper-message-contentjs-restart"),
          (P.stop = !1),
          (P.ignoreUnload = !1),
          P.regenerateRandomSettings(),
          (P.breakAtSwipes += P.swipeCount),
          P.startSwiping()),
        t.action === "auto-swiper-message-contentjs-stop" &&
          (b("recived: auto-swiper-message-contentjs-stop"),
          (P.stop = !0),
          (P.userStopped = !0),
          (P.ignoreUnload = !0)),
        t.action === "auto-swiper-message-contentjs-check-progress" &&
          (b("recived: auto-swiper-message-contentjs-check-progress"),
          P && P.stop === !1 && P.sendProgressUpdateAutoSwipe()),
        t.action === "auto-swiper-message-contentjs-check-loop" &&
          (b("recived: auto-swiper-message-contentjs-check-loop"),
          P && P.checkLoop()),
        r();
    }),
    ye.init("1bbc2f3aac871c8d2f6a40f4b0a46b6f", { ignore_dnt: !0 }),
    b("auto-swiper-content.js loaded"),
    setTimeout(function () {
      b("sent: auto-swiper-message-backgroundjs-loaded"),
        E.runtime.sendMessage({
          action: "auto-swiper-message-backgroundjs-loaded",
        });
    }, 2500);
})();
