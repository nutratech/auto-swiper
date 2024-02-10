(function () {
  "use strict";
  var Z =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {};
  function G(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var F = { exports: {} };
  (function (e, c) {
    (function (l, x) {
      x(e);
    })(
      typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Z,
      function (l) {
        var x, P;
        if (
          !(
            (P = (x = globalThis.chrome) == null ? void 0 : x.runtime) !=
              null && P.id
          )
        )
          throw new Error(
            "This script should only be loaded in a browser extension."
          );
        if (
          typeof globalThis.browser > "u" ||
          Object.getPrototypeOf(globalThis.browser) !== Object.prototype
        ) {
          const q = "The message port closed before a response was received.",
            ee = (h) => {
              const R = {
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
              if (Object.keys(R).length === 0)
                throw new Error(
                  "api-metadata.json has not been included in browser-polyfill"
                );
              class B extends WeakMap {
                constructor(r, a = void 0) {
                  super(a), (this.createItem = r);
                }
                get(r) {
                  return (
                    this.has(r) || this.set(r, this.createItem(r)), super.get(r)
                  );
                }
              }
              const se = (s) =>
                  s && typeof s == "object" && typeof s.then == "function",
                W =
                  (s, r) =>
                  (...a) => {
                    h.runtime.lastError
                      ? s.reject(new Error(h.runtime.lastError.message))
                      : r.singleCallbackArg ||
                        (a.length <= 1 && r.singleCallbackArg !== !1)
                      ? s.resolve(a[0])
                      : s.resolve(a);
                  },
                T = (s) => (s == 1 ? "argument" : "arguments"),
                re = (s, r) =>
                  function (n, ...m) {
                    if (m.length < r.minArgs)
                      throw new Error(
                        `Expected at least ${r.minArgs} ${T(
                          r.minArgs
                        )} for ${s}(), got ${m.length}`
                      );
                    if (m.length > r.maxArgs)
                      throw new Error(
                        `Expected at most ${r.maxArgs} ${T(
                          r.maxArgs
                        )} for ${s}(), got ${m.length}`
                      );
                    return new Promise((A, u) => {
                      if (r.fallbackToNoCallback)
                        try {
                          n[s](...m, W({ resolve: A, reject: u }, r));
                        } catch (t) {
                          console.warn(
                            `${s} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                            t
                          ),
                            n[s](...m),
                            (r.fallbackToNoCallback = !1),
                            (r.noCallback = !0),
                            A();
                        }
                      else
                        r.noCallback
                          ? (n[s](...m), A())
                          : n[s](...m, W({ resolve: A, reject: u }, r));
                    });
                  },
                U = (s, r, a) =>
                  new Proxy(r, {
                    apply(n, m, A) {
                      return a.call(m, s, ...A);
                    },
                  });
              let j = Function.call.bind(Object.prototype.hasOwnProperty);
              const E = (s, r = {}, a = {}) => {
                  let n = Object.create(null),
                    m = {
                      has(u, t) {
                        return t in s || t in n;
                      },
                      get(u, t, d) {
                        if (t in n) return n[t];
                        if (!(t in s)) return;
                        let i = s[t];
                        if (typeof i == "function")
                          if (typeof r[t] == "function") i = U(s, s[t], r[t]);
                          else if (j(a, t)) {
                            let k = re(t, a[t]);
                            i = U(s, s[t], k);
                          } else i = i.bind(s);
                        else if (
                          typeof i == "object" &&
                          i !== null &&
                          (j(r, t) || j(a, t))
                        )
                          i = E(i, r[t], a[t]);
                        else if (j(a, "*")) i = E(i, r[t], a["*"]);
                        else
                          return (
                            Object.defineProperty(n, t, {
                              configurable: !0,
                              enumerable: !0,
                              get() {
                                return s[t];
                              },
                              set(k) {
                                s[t] = k;
                              },
                            }),
                            i
                          );
                        return (n[t] = i), i;
                      },
                      set(u, t, d, i) {
                        return t in n ? (n[t] = d) : (s[t] = d), !0;
                      },
                      defineProperty(u, t, d) {
                        return Reflect.defineProperty(n, t, d);
                      },
                      deleteProperty(u, t) {
                        return Reflect.deleteProperty(n, t);
                      },
                    },
                    A = Object.create(s);
                  return new Proxy(A, m);
                },
                D = (s) => ({
                  addListener(r, a, ...n) {
                    r.addListener(s.get(a), ...n);
                  },
                  hasListener(r, a) {
                    return r.hasListener(s.get(a));
                  },
                  removeListener(r, a) {
                    r.removeListener(s.get(a));
                  },
                }),
                te = new B((s) =>
                  typeof s != "function"
                    ? s
                    : function (a) {
                        const n = E(
                          a,
                          {},
                          { getContent: { minArgs: 0, maxArgs: 0 } }
                        );
                        s(n);
                      }
                ),
                z = new B((s) =>
                  typeof s != "function"
                    ? s
                    : function (a, n, m) {
                        let A = !1,
                          u,
                          t = new Promise((C) => {
                            u = function (b) {
                              (A = !0), C(b);
                            };
                          }),
                          d;
                        try {
                          d = s(a, n, u);
                        } catch (C) {
                          d = Promise.reject(C);
                        }
                        const i = d !== !0 && se(d);
                        if (d !== !0 && !i && !A) return !1;
                        const k = (C) => {
                          C.then(
                            (b) => {
                              m(b);
                            },
                            (b) => {
                              let O;
                              b &&
                              (b instanceof Error ||
                                typeof b.message == "string")
                                ? (O = b.message)
                                : (O = "An unexpected error occurred"),
                                m({
                                  __mozWebExtensionPolyfillReject__: !0,
                                  message: O,
                                });
                            }
                          ).catch((b) => {
                            console.error(
                              "Failed to send onMessage rejected reply",
                              b
                            );
                          });
                        };
                        return k(i ? d : t), !0;
                      }
                ),
                ae = ({ reject: s, resolve: r }, a) => {
                  h.runtime.lastError
                    ? h.runtime.lastError.message === q
                      ? r()
                      : s(new Error(h.runtime.lastError.message))
                    : a && a.__mozWebExtensionPolyfillReject__
                    ? s(new Error(a.message))
                    : r(a);
                },
                K = (s, r, a, ...n) => {
                  if (n.length < r.minArgs)
                    throw new Error(
                      `Expected at least ${r.minArgs} ${T(
                        r.minArgs
                      )} for ${s}(), got ${n.length}`
                    );
                  if (n.length > r.maxArgs)
                    throw new Error(
                      `Expected at most ${r.maxArgs} ${T(
                        r.maxArgs
                      )} for ${s}(), got ${n.length}`
                    );
                  return new Promise((m, A) => {
                    const u = ae.bind(null, { resolve: m, reject: A });
                    n.push(u), a.sendMessage(...n);
                  });
                },
                ne = {
                  devtools: { network: { onRequestFinished: D(te) } },
                  runtime: {
                    onMessage: D(z),
                    onMessageExternal: D(z),
                    sendMessage: K.bind(null, "sendMessage", {
                      minArgs: 1,
                      maxArgs: 3,
                    }),
                  },
                  tabs: {
                    sendMessage: K.bind(null, "sendMessage", {
                      minArgs: 2,
                      maxArgs: 3,
                    }),
                  },
                },
                I = {
                  clear: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                };
              return (
                (R.privacy = {
                  network: { "*": I },
                  services: { "*": I },
                  websites: { "*": I },
                }),
                E(h, ne, R)
              );
            };
          l.exports = ee(chrome);
        } else l.exports = globalThis.browser;
      }
    );
  })(F);
  var H = F.exports;
  const g = G(H);
  let L = !1;
  async function N() {
    const e = await g.storage.local.get({ withDebuggerOutput: null });
    e.withDebuggerOutput !== null && (L = e.withDebuggerOutput);
  }
  N();
  async function o(...e) {
    L && console.log(...e);
  }
  function V(e) {
    g.notifications.create({
      type: "basic",
      iconUrl: "icons/icon_128.png",
      title: "Auto Swiper",
      message: e,
    });
  }
  const J = async (e, c) => Math.random() * (c - e) + e,
    M = async () => {
      const e = await g.storage.local.get({ longitude: null, latitude: null });
      await g.scripting
        .unregisterContentScripts({ ids: ["protected", "unprotected"] })
        .catch(() => {}),
        e.longitude !== null &&
          (await g.scripting.registerContentScripts([
            {
              id: "unprotected",
              matches: ["*://*/*"],
              allFrames: !0,
              matchOriginAsFallback: !0,
              runAt: "document_start",
              js: ["unprotected.js"],
              world: "MAIN",
            },
            {
              id: "protected",
              matches: ["*://*/*"],
              allFrames: !0,
              matchOriginAsFallback: !0,
              runAt: "document_start",
              js: ["protected.js"],
              world: "ISOLATED",
            },
          ]));
    },
    Q = async () => {
      (
        await g.tabs.query({
          url: [
            "*://tinder.com/*",
            "*://*.tinder.com/*",
            "*://bumble.com/app/*",
            "*://*.bumble.com/app/*",
            "*://lovoo.com/*",
            "*://*.lovoo.com/*",
            "*://okcupid.com/*",
            "*://*.okcupid.com/*",
            "*://badoo.com/*",
            "*://*.badoo.com/*",
            "*://pof.com/*",
            "*://*.pof.com/*",
            "*://zoosk.com/*",
            "*://*.zoosk.com/*",
          ],
        })
      ).forEach(function (c) {
        g.tabs.reload(c.id);
      });
    };
  chrome.runtime.onStartup.addListener(M),
    chrome.runtime.onInstalled.addListener(M);
  let S = !1,
    p = null,
    _ = null,
    f = 0;
  const X = async (e, c, l) => {
      const x = () => {
        (f = e),
          chrome.debugger.sendCommand(
            { tabId: e },
            "Input.dispatchMouseEvent",
            { type: "mousePressed", x: c, y: l, button: "left", clickCount: 1 },
            () => {
              chrome.debugger.sendCommand(
                { tabId: e },
                "Input.dispatchMouseEvent",
                {
                  type: "mouseReleased",
                  x: c,
                  y: l,
                  button: "left",
                  clickCount: 1,
                },
                () => {}
              );
            }
          );
      };
      f === e ? x() : chrome.debugger.attach({ tabId: e }, "1.2", x);
    },
    Y = async (e, c) => {
      const l = { type: "keyDown", key: "ArrowDown", code: "ArrowDown" };
      (l.key = c.key.toString()), (l.code = c.code.toString());
      const x = () => {
        (f = e),
          chrome.debugger.sendCommand(
            { tabId: e },
            "Input.dispatchKeyEvent",
            l,
            function (P) {
              (l.type = "keyUp"),
                chrome.debugger.sendCommand(
                  { tabId: e },
                  "Input.dispatchKeyEvent",
                  l,
                  () => {}
                );
            }
          );
      };
      f === e ? x() : chrome.debugger.attach({ tabId: e }, "1.2", x);
    };
  let y = !1,
    w = null,
    v = 1;
  const $ = async () => {
    const e = await J(
        w.minMaxSwipeTime[0] * v * 1e3,
        w.minMaxSwipeTime[1] * v * 1e3
      ),
      c = Date.now() + e;
    setTimeout(function () {
      y ||
        (o("sent: auto-swiper-message-contentjs-check-loop"),
        g.tabs.sendMessage(w.tabId, {
          action: "auto-swiper-message-contentjs-check-loop",
        }),
        g.alarms.create("auto-swiper-alarm-loop", { when: c }));
    }, e);
  };
  g.runtime.onMessage.addListener(function (e, c, l) {
    e.action === "auto-swiper-message-backgroundjs-send-notification" &&
      (o("recived: auto-swiper-message-backgroundjs-send-notification"),
      V(e.message)),
      e.action === "auto-swiper-message-backgroundjs-reload-tab" &&
        (o("recived: auto-swiper-message-backgroundjs-reload-tab"),
        (S = !0),
        (p = e),
        g.tabs.reload(e.options.tabId)),
      e.action === "auto-swiper-message-backgroundjs-loaded" &&
        S &&
        (o("recived: auto-swiper-message-backgroundjs-loaded"),
        (S = !1),
        (f = 0),
        p.options.enableDelayAfterPageReload
          ? (o("send alarm set: " + p.options.delayAfterPageReload + "mins"),
            g.alarms.create("auto-swiper-alarm-start", {
              delayInMinutes: p.options.delayAfterPageReload,
            }))
          : (o("auto-swiper will start after 5 seconds"),
            setTimeout(function () {
              o("sent: auto-swiper-message-contentjs-start-after-tab-reload"),
                g.tabs.sendMessage(p.options.tabId, {
                  action:
                    "auto-swiper-message-contentjs-start-after-tab-reload",
                  swipeCounts: p.swipeCounts,
                  options: p.options,
                });
            }, 5e3))),
      e.action === "auto-swiper-message-backgroundjs-spoof-location" &&
        (o("recived: auto-swiper-message-backgroundjs-spoof-location"),
        M(),
        Q()),
      e.action === "auto-swiper-message-backgroundjs-simulate-mouse-click" &&
        (o("recived: auto-swiper-message-backgroundjs-simulate-mouse-click"),
        X(e.tabId, e.x, e.y)),
      e.action === "auto-swiper-message-backgroundjs-simulate-key-event" &&
        (o("recived: auto-swiper-message-backgroundjs-simulate-key-event"),
        Y(e.tabId, e.keyData)),
      e.action === "auto-swiper-message-backgroundjs-stopped" &&
        (o("recived: auto-swiper-message-backgroundjs-stopped"),
        (f = 0),
        (y = !0),
        chrome.debugger.detach({ tabId: e.tabId })),
      e.action === "auto-swiper-message-backgroundjs-start-loop" &&
        (N(),
        o("recived: auto-swiper-message-backgroundjs-start-loop"),
        (y = !1),
        (w = e.options),
        (v = e.siteSwipeSpeedModifier),
        $()),
      e.action === "auto-swiper-message-backgroundjs-stop-loop" &&
        (o("recived: auto-swiper-message-backgroundjs-stop-loop"),
        (y = !0),
        (w = null),
        (v = 1)),
      e.action === "auto-swiper-message-backgroundjs-create-restart-alarm" &&
        (o("recived: auto-swiper-message-backgroundjs-create-restart-alarm"),
        (y = !0),
        (w = null),
        (v = 1),
        (_ = e),
        o("created: auto-swiper-alarm-restart"),
        o("auto-swiper break duration is: " + e.breakDuration + "mins"),
        g.alarms.create("auto-swiper-alarm-restart", {
          delayInMinutes: e.breakDuration,
        })),
      l();
  }),
    g.alarms.onAlarm.addListener(function (e) {
      e.name === "auto-swiper-alarm-start" &&
        (o("recived: auto-swiper-alarm-start"),
        o("sent: auto-swiper-message-contentjs-start-after-tab-reload"),
        g.tabs.sendMessage(p.options.tabId, {
          action: "auto-swiper-message-contentjs-start-after-tab-reload",
          swipeCounts: p.swipeCounts,
          options: p.options,
        }),
        chrome.alarms.clear("auto-swiper-alarm-start")),
        e.name === "auto-swiper-alarm-loop" &&
          (o("recived: auto-swiper-alarm-loop"),
          $(),
          chrome.alarms.clear("auto-swiper-alarm-loop")),
        e.name === "auto-swiper-alarm-restart" &&
          (o("recived: auto-swiper-alarm-restart"),
          o("sent: auto-swiper-message-contentjs-restart"),
          g.tabs.sendMessage(_.options.tabId, {
            action: "auto-swiper-message-contentjs-restart",
          }),
          chrome.alarms.clear("auto-swiper-alarm-restart"));
    });
})();
