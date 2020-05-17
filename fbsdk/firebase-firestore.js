!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], e) : e((t = t || self).firebase);
})(this, function (cp) {
  "use strict";
  try {
      (function () {
          cp = cp && Object.prototype.hasOwnProperty.call(cp, "default") ? cp.default : cp;
          var t,
              l,
              e,
              r = function (t, e) {
                  return (r =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                          function (t, e) {
                              t.__proto__ = e;
                          }) ||
                      function (t, e) {
                          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
              };
          function n(t, e) {
              function n() {
                  this.constructor = t;
              }
              r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
          }
          function y(t, s, u, a) {
              return new (u = u || Promise)(function (n, e) {
                  function r(t) {
                      try {
                          o(a.next(t));
                      } catch (t) {
                          e(t);
                      }
                  }
                  function i(t) {
                      try {
                          o(a.throw(t));
                      } catch (t) {
                          e(t);
                      }
                  }
                  function o(t) {
                      var e;
                      t.done
                          ? n(t.value)
                          : ((e = t.value) instanceof u
                                ? e
                                : new u(function (t) {
                                      t(e);
                                  })
                            ).then(r, i);
                  }
                  o((a = a.apply(t, s || [])).next());
              });
          }
          function v(n, r) {
              var i,
                  o,
                  s,
                  t,
                  u = {
                      label: 0,
                      sent: function () {
                          if (1 & s[0]) throw s[1];
                          return s[1];
                      },
                      trys: [],
                      ops: [],
                  };
              return (
                  (t = { next: e(0), throw: e(1), return: e(2) }),
                  "function" == typeof Symbol &&
                      (t[Symbol.iterator] = function () {
                          return this;
                      }),
                  t
              );
              function e(e) {
                  return function (t) {
                      return (function (e) {
                          if (i) throw new TypeError("Generator is already executing.");
                          for (; u; )
                              try {
                                  if (((i = 1), o && (s = 2 & e[0] ? o.return : e[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, e[1])).done)) return s;
                                  switch (((o = 0), s && (e = [2 & e[0], s.value]), e[0])) {
                                      case 0:
                                      case 1:
                                          s = e;
                                          break;
                                      case 4:
                                          return u.label++, { value: e[1], done: !1 };
                                      case 5:
                                          u.label++, (o = e[1]), (e = [0]);
                                          continue;
                                      case 7:
                                          (e = u.ops.pop()), u.trys.pop();
                                          continue;
                                      default:
                                          if (!(s = 0 < (s = u.trys).length && s[s.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                              u = 0;
                                              continue;
                                          }
                                          if (3 === e[0] && (!s || (e[1] > s[0] && e[1] < s[3]))) {
                                              u.label = e[1];
                                              break;
                                          }
                                          if (6 === e[0] && u.label < s[1]) {
                                              (u.label = s[1]), (s = e);
                                              break;
                                          }
                                          if (s && u.label < s[2]) {
                                              (u.label = s[2]), u.ops.push(e);
                                              break;
                                          }
                                          s[2] && u.ops.pop(), u.trys.pop();
                                          continue;
                                  }
                                  e = r.call(n, u);
                              } catch (t) {
                                  (e = [6, t]), (o = 0);
                              } finally {
                                  i = s = 0;
                              }
                          if (5 & e[0]) throw e[1];
                          return { value: e[0] ? e[1] : void 0, done: !0 };
                      })([e, t]);
                  };
              }
          }
          function i() {
              for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
              var r = Array(t),
                  i = 0;
              for (e = 0; e < n; e++) for (var o = arguments[e], s = 0, u = o.length; s < u; s++, i++) r[i] = o[s];
              return r;
          }
          function s() {
              for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
              var r = Array(t),
                  i = 0;
              for (e = 0; e < n; e++) for (var o = arguments[e], s = 0, u = o.length; s < u; s++, i++) r[i] = o[s];
              return r;
          }
          ((e = l = l || {})[(e.DEBUG = 0)] = "DEBUG"), (e[(e.VERBOSE = 1)] = "VERBOSE"), (e[(e.INFO = 2)] = "INFO"), (e[(e.WARN = 3)] = "WARN"), (e[(e.ERROR = 4)] = "ERROR"), (e[(e.SILENT = 5)] = "SILENT");
          l.DEBUG, l.VERBOSE, l.INFO, l.WARN, l.ERROR, l.SILENT;
          function o(t, e) {
              for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
              if (!(e < t.logLevel)) {
                  var i = new Date().toISOString(),
                      o = a[e];
                  if (!o) throw new Error("Attempted to log a message with an invalid logType (value: " + e + ")");
                  console[o].apply(console, s(["[" + i + "]  " + t.name + ":"], n));
              }
          }
          var u = l.INFO,
              a = (((t = {})[l.DEBUG] = "log"), (t[l.VERBOSE] = "log"), (t[l.INFO] = "info"), (t[l.WARN] = "warn"), (t[l.ERROR] = "error"), t),
              h =
                  (Object.defineProperty(c.prototype, "logLevel", {
                      get: function () {
                          return this._logLevel;
                      },
                      set: function (t) {
                          if (!(t in l)) throw new TypeError("Invalid value assigned to `logLevel`");
                          this._logLevel = t;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Object.defineProperty(c.prototype, "logHandler", {
                      get: function () {
                          return this._logHandler;
                      },
                      set: function (t) {
                          if ("function" != typeof t) throw new TypeError("Value assigned to `logHandler` must be a function");
                          this._logHandler = t;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Object.defineProperty(c.prototype, "userLogHandler", {
                      get: function () {
                          return this._userLogHandler;
                      },
                      set: function (t) {
                          this._userLogHandler = t;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (c.prototype.debug = function () {
                      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                      this._userLogHandler && this._userLogHandler.apply(this, s([this, l.DEBUG], t)), this._logHandler.apply(this, s([this, l.DEBUG], t));
                  }),
                  (c.prototype.log = function () {
                      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                      this._userLogHandler && this._userLogHandler.apply(this, s([this, l.VERBOSE], t)), this._logHandler.apply(this, s([this, l.VERBOSE], t));
                  }),
                  (c.prototype.info = function () {
                      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                      this._userLogHandler && this._userLogHandler.apply(this, s([this, l.INFO], t)), this._logHandler.apply(this, s([this, l.INFO], t));
                  }),
                  (c.prototype.warn = function () {
                      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                      this._userLogHandler && this._userLogHandler.apply(this, s([this, l.WARN], t)), this._logHandler.apply(this, s([this, l.WARN], t));
                  }),
                  (c.prototype.error = function () {
                      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                      this._userLogHandler && this._userLogHandler.apply(this, s([this, l.ERROR], t)), this._logHandler.apply(this, s([this, l.ERROR], t));
                  }),
                  c);
          function c(t) {
              (this.name = t), (this._logLevel = u), (this._logHandler = o), (this._userLogHandler = null);
          }
          function p() {
              return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : "";
          }
          var f,
              d = (n(g, (f = Error)), g);
          function g(t, e) {
              var n = f.call(this, e) || this;
              return (n.code = t), (n.name = "FirebaseError"), Object.setPrototypeOf(n, g.prototype), Error.captureStackTrace && Error.captureStackTrace(n, m.prototype.create), n;
          }
          var m =
              ((w.prototype.create = function (t) {
                  for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                  for (
                      var r,
                          i = e[0] || {},
                          o = this.service + "/" + t,
                          s = this.errors[t],
                          u = s
                              ? ((r = i),
                                s.replace(b, function (t, e) {
                                    var n = r[e];
                                    return null != n ? n.toString() : "<" + e + "?>";
                                }))
                              : "Error",
                          a = this.serviceName + ": " + u + " (" + o + ").",
                          h = new d(o, a),
                          c = 0,
                          f = Object.keys(i);
                      c < f.length;
                      c++
                  ) {
                      var l = f[c];
                      "_" !== l.slice(-1) && (l in h && console.warn('Overwriting FirebaseError base field "' + l + '" can cause unexpected behavior.'), (h[l] = i[l]));
                  }
                  return h;
              }),
              w);
          function w(t, e, n) {
              (this.service = t), (this.serviceName = e), (this.errors = n);
          }
          var b = /\{\$([^}]+)}/g,
              E =
                  ((T.prototype.setInstantiationMode = function (t) {
                      return (this.instantiationMode = t), this;
                  }),
                  (T.prototype.setMultipleInstances = function (t) {
                      return (this.multipleInstances = t), this;
                  }),
                  (T.prototype.setServiceProps = function (t) {
                      return (this.serviceProps = t), this;
                  }),
                  T);
          function T(t, e, n) {
              (this.name = t), (this.instanceFactory = e), (this.type = n), (this.multipleInstances = !1), (this.serviceProps = {}), (this.instantiationMode = "LAZY");
          }
          function I(t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                  n = e && t[e],
                  r = 0;
              if (n) return n.call(t);
              if (t && "number" == typeof t.length)
                  return {
                      next: function () {
                          return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
                      },
                  };
              throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
          }
          var N,
              A = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
              _ = _ || {},
              S = A || self;
          function k() {}
          function D(t) {
              var e = typeof t;
              if ("object" == e) {
                  if (!t) return "null";
                  if (t instanceof Array) return "array";
                  if (t instanceof Object) return e;
                  var n = Object.prototype.toString.call(t);
                  if ("[object Window]" == n) return "object";
                  if ("[object Array]" == n || ("number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("splice"))) return "array";
                  if ("[object Function]" == n || (void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("call"))) return "function";
              } else if ("function" == e && void 0 === t.call) return "object";
              return e;
          }
          function x(t) {
              var e = D(t);
              return "array" == e || ("object" == e && "number" == typeof t.length);
          }
          function O(t) {
              var e = typeof t;
              return ("object" == e && null != t) || "function" == e;
          }
          var R = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
              P = 0;
          function V(t, e, n) {
              return t.call.apply(t.bind, arguments);
          }
          function L(e, n, t) {
              if (!e) throw Error();
              if (2 < arguments.length) {
                  var r = Array.prototype.slice.call(arguments, 2);
                  return function () {
                      var t = Array.prototype.slice.call(arguments);
                      return Array.prototype.unshift.apply(t, r), e.apply(n, t);
                  };
              }
              return function () {
                  return e.apply(n, arguments);
              };
          }
          function C(t, e, n) {
              return (C = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? V : L).apply(null, arguments);
          }
          function M(e, t) {
              var n = Array.prototype.slice.call(arguments, 1);
              return function () {
                  var t = n.slice();
                  return t.push.apply(t, arguments), e.apply(this, t);
              };
          }
          var U =
              Date.now ||
              function () {
                  return +new Date();
              };
          function j(t, e) {
              function n() {}
              (n.prototype = e.prototype), (t.M = e.prototype), (t.prototype = new n()), (t.prototype.constructor = t);
          }
          function q() {
              (this.j = this.j), (this.i = this.i);
          }
          (q.prototype.j = !1),
              (q.prototype.da = function () {
                  if (!this.j && ((this.j = !0), this.C(), 0)) (t = this), (Object.prototype.hasOwnProperty.call(t, R) && t[R]) || (t[R] = ++P);
                  var t;
              }),
              (q.prototype.C = function () {
                  if (this.i) for (; this.i.length; ) this.i.shift()();
              });
          var F = Array.prototype.indexOf
                  ? function (t, e) {
                        return Array.prototype.indexOf.call(t, e, void 0);
                    }
                  : function (t, e) {
                        if ("string" == typeof t) return "string" != typeof e || 1 != e.length ? -1 : t.indexOf(e, 0);
                        for (var n = 0; n < t.length; n++) if (n in t && t[n] === e) return n;
                        return -1;
                    },
              B = Array.prototype.forEach
                  ? function (t, e, n) {
                        Array.prototype.forEach.call(t, e, n);
                    }
                  : function (t, e, n) {
                        for (var r = t.length, i = "string" == typeof t ? t.split("") : t, o = 0; o < r; o++) o in i && e.call(n, i[o], o, t);
                    };
          function G(t) {
              return Array.prototype.concat.apply([], arguments);
          }
          function z(t) {
              var e = t.length;
              if (0 < e) {
                  for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
                  return n;
              }
              return [];
          }
          function W(t) {
              return /^[\s\xa0]*$/.test(t);
          }
          var Q,
              K = String.prototype.trim
                  ? function (t) {
                        return t.trim();
                    }
                  : function (t) {
                        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
                    };
          function H(t, e) {
              return -1 != t.indexOf(e);
          }
          function Y(t, e) {
              return t < e ? -1 : e < t ? 1 : 0;
          }
          t: {
              var X = S.navigator;
              if (X) {
                  var $ = X.userAgent;
                  if ($) {
                      Q = $;
                      break t;
                  }
              }
              Q = "";
          }
          function J(t, e, n) {
              for (var r in t) e.call(n, t[r], r, t);
          }
          function Z(t) {
              var e = {};
              for (var n in t) e[n] = t[n];
              return e;
          }
          var tt = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
          function et(t, e) {
              for (var n, r, i = 1; i < arguments.length; i++) {
                  for (n in (r = arguments[i])) t[n] = r[n];
                  for (var o = 0; o < tt.length; o++) (n = tt[o]), Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
          }
          function nt(t) {
              return nt[" "](t), t;
          }
          nt[" "] = k;
          var rt,
              it,
              ot = H(Q, "Opera"),
              st = H(Q, "Trident") || H(Q, "MSIE"),
              ut = H(Q, "Edge"),
              at = ut || st,
              ht = H(Q, "Gecko") && !(H(Q.toLowerCase(), "webkit") && !H(Q, "Edge")) && !(H(Q, "Trident") || H(Q, "MSIE")) && !H(Q, "Edge"),
              ct = H(Q.toLowerCase(), "webkit") && !H(Q, "Edge");
          function ft() {
              var t = S.document;
              return t ? t.documentMode : void 0;
          }
          t: {
              var lt = "",
                  pt = ((it = Q), ht ? /rv:([^\);]+)(\)|;)/.exec(it) : ut ? /Edge\/([\d\.]+)/.exec(it) : st ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(it) : ct ? /WebKit\/(\S+)/.exec(it) : ot ? /(?:Version)[ \/]?(\S+)/.exec(it) : void 0);
              if ((pt && (lt = pt ? pt[1] : ""), st)) {
                  var dt = ft();
                  if (null != dt && dt > parseFloat(lt)) {
                      rt = String(dt);
                      break t;
                  }
              }
              rt = lt;
          }
          var yt,
              vt = {};
          function gt(u) {
              return (
                  (t = u),
                  (e = function () {
                      for (var t = 0, e = K(String(rt)).split("."), n = K(String(u)).split("."), r = Math.max(e.length, n.length), i = 0; 0 == t && i < r; i++) {
                          var o = e[i] || "",
                              s = n[i] || "";
                          do {
                              if (((o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""]), (s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""]), 0 == o[0].length && 0 == s[0].length)) break;
                              (t = Y(0 == o[1].length ? 0 : parseInt(o[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || Y(0 == o[2].length, 0 == s[2].length) || Y(o[2], s[2])), (o = o[3]), (s = s[3]);
                          } while (0 == t);
                      }
                      return 0 <= t;
                  }),
                  (n = vt),
                  Object.prototype.hasOwnProperty.call(n, t) ? n[t] : (n[t] = e(t))
              );
              var t, e, n;
          }
          if (S.document && st) {
              var mt = ft();
              yt = mt || parseInt(rt, 10) || void 0;
          } else yt = void 0;
          var wt = yt,
              bt = !st || 9 <= Number(wt),
              Et = st && !gt("9"),
              Tt = (function () {
                  if (!S.addEventListener || !Object.defineProperty) return !1;
                  var t = !1,
                      e = Object.defineProperty({}, "passive", {
                          get: function () {
                              t = !0;
                          },
                      });
                  try {
                      S.addEventListener("test", k, e), S.removeEventListener("test", k, e);
                  } catch (t) {}
                  return t;
              })();
          function It(t, e) {
              (this.type = t), (this.a = this.target = e), (this.defaultPrevented = !1);
          }
          function Nt(t, e) {
              if (
                  (It.call(this, t ? t.type : ""),
                  (this.relatedTarget = this.a = this.target = null),
                  (this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0),
                  (this.key = ""),
                  (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
                  (this.pointerId = 0),
                  (this.pointerType = ""),
                  (this.c = null),
                  t)
              ) {
                  var n = (this.type = t.type),
                      r = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
                  if (((this.target = t.target || t.srcElement), (this.a = e), (e = t.relatedTarget))) {
                      if (ht) {
                          t: {
                              try {
                                  nt(e.nodeName);
                                  var i = !0;
                                  break t;
                              } catch (t) {}
                              i = !1;
                          }
                          i || (e = null);
                      }
                  } else "mouseover" == n ? (e = t.fromElement) : "mouseout" == n && (e = t.toElement);
                  (this.relatedTarget = e),
                      r
                          ? ((this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX), (this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY), (this.screenX = r.screenX || 0), (this.screenY = r.screenY || 0))
                          : ((this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX), (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY), (this.screenX = t.screenX || 0), (this.screenY = t.screenY || 0)),
                      (this.button = t.button),
                      (this.key = t.key || ""),
                      (this.ctrlKey = t.ctrlKey),
                      (this.altKey = t.altKey),
                      (this.shiftKey = t.shiftKey),
                      (this.metaKey = t.metaKey),
                      (this.pointerId = t.pointerId || 0),
                      (this.pointerType = "string" == typeof t.pointerType ? t.pointerType : At[t.pointerType] || ""),
                      (this.c = t).defaultPrevented && this.b();
              }
          }
          (It.prototype.b = function () {
              this.defaultPrevented = !0;
          }),
              j(Nt, It);
          var At = { 2: "touch", 3: "pen", 4: "mouse" };
          Nt.prototype.b = function () {
              Nt.M.b.call(this);
              var t = this.c;
              if (t.preventDefault) t.preventDefault();
              else if (((t.returnValue = !1), Et))
                  try {
                      (t.ctrlKey || (112 <= t.keyCode && t.keyCode <= 123)) && (t.keyCode = -1);
                  } catch (t) {}
          };
          var _t = "closure_listenable_" + ((1e6 * Math.random()) | 0),
              St = 0;
          function kt(t, e, n, r, i) {
              (this.listener = t), (this.proxy = null), (this.src = e), (this.type = n), (this.capture = !!r), (this.aa = i), (this.key = ++St), (this.V = this.X = !1);
          }
          function Dt(t) {
              (t.V = !0), (t.listener = null), (t.proxy = null), (t.src = null), (t.aa = null);
          }
          function xt(t) {
              (this.src = t), (this.a = {}), (this.b = 0);
          }
          function Ot(t, e) {
              var n = e.type;
              if (n in t.a) {
                  var r,
                      i = t.a[n],
                      o = F(i, e);
                  (r = 0 <= o) && Array.prototype.splice.call(i, o, 1), r && (Dt(e), 0 == t.a[n].length && (delete t.a[n], t.b--));
              }
          }
          function Rt(t, e, n, r) {
              for (var i = 0; i < t.length; ++i) {
                  var o = t[i];
                  if (!o.V && o.listener == e && o.capture == !!n && o.aa == r) return i;
              }
              return -1;
          }
          xt.prototype.add = function (t, e, n, r, i) {
              var o = t.toString();
              (t = this.a[o]) || ((t = this.a[o] = []), this.b++);
              var s = Rt(t, e, r, i);
              return -1 < s ? ((e = t[s]), n || (e.X = !1)) : (((e = new kt(e, this.src, o, !!r, i)).X = n), t.push(e)), e;
          };
          var Pt = "closure_lm_" + ((1e6 * Math.random()) | 0),
              Vt = {};
          function Lt(t, e, n, r, i) {
              if (r && r.once)
                  return (function t(e, n, r, i, o) {
                      if (Array.isArray(n)) {
                          for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
                          return null;
                      }
                      r = Gt(r);
                      return e && e[_t] ? e.sa(n, r, O(i) ? !!i.capture : !!i, o) : Ct(e, n, r, !0, i, o);
                  })(t, e, n, r, i);
              if (Array.isArray(e)) {
                  for (var o = 0; o < e.length; o++) Lt(t, e[o], n, r, i);
                  return null;
              }
              return (n = Gt(n)), t && t[_t] ? t.ra(e, n, O(r) ? !!r.capture : !!r, i) : Ct(t, e, n, !1, r, i);
          }
          function Ct(t, e, n, r, i, o) {
              if (!e) throw Error("Invalid event type");
              var s = O(i) ? !!i.capture : !!i;
              if (s && !bt) return null;
              var u,
                  a,
                  h = Ft(t);
              if ((h || (t[Pt] = h = new xt(t)), (n = h.add(e, n, r, s, o)).proxy)) return n;
              if (
                  ((u = qt),
                  (r = a = bt
                      ? function (t) {
                            return u.call(a.src, a.listener, t);
                        }
                      : function (t) {
                            if (!(t = u.call(a.src, a.listener, t))) return t;
                        }),
                  ((n.proxy = r).src = t),
                  (r.listener = n),
                  t.addEventListener)
              )
                  Tt || (i = s), void 0 === i && (i = !1), t.addEventListener(e.toString(), r, i);
              else if (t.attachEvent) t.attachEvent(Ut(e.toString()), r);
              else {
                  if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
                  t.addListener(r);
              }
              return n;
          }
          function Mt(t) {
              if ("number" != typeof t && t && !t.V) {
                  var e = t.src;
                  if (e && e[_t]) Ot(e.c, t);
                  else {
                      var n = t.type,
                          r = t.proxy;
                      e.removeEventListener ? e.removeEventListener(n, r, t.capture) : e.detachEvent ? e.detachEvent(Ut(n), r) : e.addListener && e.removeListener && e.removeListener(r),
                          (n = Ft(e)) ? (Ot(n, t), 0 == n.b && ((n.src = null), (e[Pt] = null))) : Dt(t);
                  }
              }
          }
          function Ut(t) {
              return t in Vt ? Vt[t] : (Vt[t] = "on" + t);
          }
          function jt(t, e) {
              var n = t.listener,
                  r = t.aa || t.src;
              return t.X && Mt(t), n.call(r, e);
          }
          function qt(t, e) {
              if (t.V) return !0;
              if (bt) return jt(t, new Nt(e, this));
              if (!e)
                  t: {
                      e = ["window", "event"];
                      for (var n = S, r = 0; r < e.length; r++)
                          if (null == (n = n[e[r]])) {
                              e = null;
                              break t;
                          }
                      e = n;
                  }
              return jt(t, (e = new Nt(e, this)));
          }
          function Ft(t) {
              return (t = t[Pt]) instanceof xt ? t : null;
          }
          var Bt = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
          function Gt(e) {
              return "function" == D(e)
                  ? e
                  : (e[Bt] ||
                        (e[Bt] = function (t) {
                            return e.handleEvent(t);
                        }),
                    e[Bt]);
          }
          function zt() {
              q.call(this), (this.c = new xt(this)), ((this.J = this).A = null);
          }
          function Wt(t, e, n, r) {
              if (!(e = t.c.a[String(e)])) return !0;
              e = e.concat();
              for (var i = !0, o = 0; o < e.length; ++o) {
                  var s = e[o];
                  if (s && !s.V && s.capture == n) {
                      var u = s.listener,
                          a = s.aa || s.src;
                      s.X && Ot(t.c, s), (i = !1 !== u.call(a, r) && i);
                  }
              }
              return i && !r.defaultPrevented;
          }
          j(zt, q),
              (zt.prototype[_t] = !0),
              ((N = zt.prototype).addEventListener = function (t, e, n, r) {
                  Lt(this, t, e, n, r);
              }),
              (N.removeEventListener = function (t, e, n, r) {
                  !(function t(e, n, r, i, o) {
                      if (Array.isArray(n)) for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
                      else
                          (i = O(i) ? !!i.capture : !!i),
                              (r = Gt(r)),
                              e && e[_t]
                                  ? ((e = e.c), (n = String(n).toString()) in e.a && -1 < (r = Rt((s = e.a[n]), r, i, o)) && (Dt(s[r]), Array.prototype.splice.call(s, r, 1), 0 == s.length && (delete e.a[n], e.b--)))
                                  : (e = e && Ft(e)) && ((n = e.a[n.toString()]), (e = -1), n && (e = Rt(n, r, i, o)), (r = -1 < e ? n[e] : null) && Mt(r));
                  })(this, t, e, n, r);
              }),
              (N.dispatchEvent = function (t) {
                  var e,
                      n = this.A;
                  if (n) for (e = []; n; n = n.A) e.push(n);
                  n = this.J;
                  var r = t.type || t;
                  if ("string" == typeof t) t = new It(t, n);
                  else if (t instanceof It) t.target = t.target || n;
                  else {
                      var i = t;
                      et((t = new It(r, n)), i);
                  }
                  if (((i = !0), e))
                      for (var o = e.length - 1; 0 <= o; o--) {
                          var s = (t.a = e[o]);
                          i = Wt(s, r, !0, t) && i;
                      }
                  if (((i = Wt((s = t.a = n), r, !0, t) && i), (i = Wt(s, r, !1, t) && i), e)) for (o = 0; o < e.length; o++) i = Wt((s = t.a = e[o]), r, !1, t) && i;
                  return i;
              }),
              (N.C = function () {
                  if ((zt.M.C.call(this), this.c)) {
                      var t,
                          e = this.c;
                      for (t in e.a) {
                          for (var n = e.a[t], r = 0; r < n.length; r++) Dt(n[r]);
                          delete e.a[t], e.b--;
                      }
                  }
                  this.A = null;
              }),
              (N.ra = function (t, e, n, r) {
                  return this.c.add(String(t), e, !1, n, r);
              }),
              (N.sa = function (t, e, n, r) {
                  return this.c.add(String(t), e, !0, n, r);
              });
          var Qt = S.JSON.stringify;
          function Kt() {
              this.b = this.a = null;
          }
          var Ht,
              Yt =
                  ((Xt.prototype.get = function () {
                      var t;
                      return 0 < this.b ? (this.b--, (t = this.a), (this.a = t.next), (t.next = null)) : (t = this.c()), t;
                  }),
                  new Xt(
                      function () {
                          return new $t();
                      },
                      function (t) {
                          t.reset();
                      },
                      100
                  ));
          function Xt(t, e, n) {
              (this.f = n), (this.c = t), (this.g = e), (this.b = 0), (this.a = null);
          }
          function $t() {
              this.next = this.b = this.a = null;
          }
          function Jt(t) {
              S.setTimeout(function () {
                  throw t;
              }, 0);
          }
          function Zt(t, e) {
              var n;
              Ht ||
                  ((n = S.Promise.resolve(void 0)),
                  (Ht = function () {
                      n.then(ne);
                  })),
                  te || (Ht(), (te = !0)),
                  ee.add(t, e);
          }
          (Kt.prototype.add = function (t, e) {
              var n = Yt.get();
              n.set(t, e), this.b ? (this.b.next = n) : (this.a = n), (this.b = n);
          }),
              ($t.prototype.set = function (t, e) {
                  (this.a = t), (this.b = e), (this.next = null);
              });
          var te = !($t.prototype.reset = function () {
                  this.next = this.b = this.a = null;
              }),
              ee = new Kt();
          function ne() {
              for (var t; (r = n = void 0), (r = null), (n = ee).a && ((r = n.a), (n.a = n.a.next), n.a || (n.b = null), (r.next = null)), (t = r); ) {
                  try {
                      t.a.call(t.b);
                  } catch (t) {
                      Jt(t);
                  }
                  var e = Yt;
                  e.g(t), e.b < e.f && (e.b++, (t.next = e.a), (e.a = t));
              }
              var n, r;
              te = !1;
          }
          function re(t, e) {
              zt.call(this), (this.b = t || 1), (this.a = e || S), (this.f = C(this.Ua, this)), (this.g = U());
          }
          function ie(t) {
              (t.Z = !1), t.L && (t.a.clearTimeout(t.L), (t.L = null));
          }
          function oe(t, e, n) {
              if ("function" == D(t)) n && (t = C(t, n));
              else {
                  if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
                  t = C(t.handleEvent, t);
              }
              return 2147483647 < Number(e) ? -1 : S.setTimeout(t, e || 0);
          }
          function se(t, e, n) {
              q.call(this), (this.f = null != n ? C(t, n) : t), (this.c = e), (this.b = C(this.Pa, this)), (this.a = []);
          }
          function ue(t) {
              (t.T = oe(t.b, t.c)), t.f.apply(null, t.a);
          }
          function ae(t) {
              q.call(this), (this.b = t), (this.a = {});
          }
          j(re, zt),
              ((N = re.prototype).Z = !1),
              (N.L = null),
              (N.Ua = function () {
                  if (this.Z) {
                      var t = U() - this.g;
                      0 < t && t < 0.8 * this.b ? (this.L = this.a.setTimeout(this.f, this.b - t)) : (this.L && (this.a.clearTimeout(this.L), (this.L = null)), this.dispatchEvent("tick"), this.Z && (ie(this), this.start()));
                  }
              }),
              (N.start = function () {
                  (this.Z = !0), this.L || ((this.L = this.a.setTimeout(this.f, this.b)), (this.g = U()));
              }),
              (N.C = function () {
                  re.M.C.call(this), ie(this), delete this.a;
              }),
              j(se, q),
              ((N = se.prototype).ba = !1),
              (N.T = null),
              (N.Ia = function (t) {
                  (this.a = arguments), this.T ? (this.ba = !0) : ue(this);
              }),
              (N.C = function () {
                  se.M.C.call(this), this.T && (S.clearTimeout(this.T), (this.T = null), (this.ba = !1), (this.a = []));
              }),
              (N.Pa = function () {
                  (this.T = null), this.ba && ((this.ba = !1), ue(this));
              }),
              j(ae, q);
          var he = [];
          function ce(t, e, n, r) {
              Array.isArray(n) || (n && (he[0] = n.toString()), (n = he));
              for (var i = 0; i < n.length; i++) {
                  var o = Lt(e, n[i], r || t.handleEvent, !1, t.b || t);
                  if (!o) break;
                  t.a[o.key] = o;
              }
          }
          function fe(t) {
              J(
                  t.a,
                  function (t, e) {
                      this.a.hasOwnProperty(e) && Mt(t);
                  },
                  t
              ),
                  (t.a = {});
          }
          function le() {}
          (ae.prototype.C = function () {
              ae.M.C.call(this), fe(this);
          }),
              (ae.prototype.handleEvent = function () {
                  throw Error("EventHandler.handleEvent not implemented");
              });
          var pe = null;
          function de() {
              return (pe = pe || new zt());
          }
          function ye(t) {
              It.call(this, "serverreachability", t);
          }
          function ve(t) {
              var e = de();
              e.dispatchEvent(new ye(e));
          }
          function ge(t) {
              It.call(this, "statevent", t);
          }
          function me(t) {
              var e = de();
              e.dispatchEvent(new ge(e));
          }
          function we(t) {
              It.call(this, "timingevent", t);
          }
          function be(t, e) {
              if ("function" != D(t)) throw Error("Fn must not be null and must be a function");
              return S.setTimeout(function () {
                  t();
              }, e);
          }
          j(ye, It), j(ge, It), j(we, It);
          var Ee = { NO_ERROR: 0, Va: 1, bb: 2, ab: 3, Ya: 4, $a: 5, cb: 6, za: 7, TIMEOUT: 8, gb: 9 },
              Te = { Xa: "complete", kb: "success", Aa: "error", za: "abort", ib: "ready", jb: "readystatechange", TIMEOUT: "timeout", eb: "incrementaldata", hb: "progress", Za: "downloadprogress", lb: "uploadprogress" };
          function Ie() {}
          function Ne(t) {
              var e;
              return (e = t.a) || (e = t.a = {}), e;
          }
          function Ae() {}
          Ie.prototype.a = null;
          var _e,
              Se = { OPEN: "a", Wa: "b", Aa: "c", fb: "d" };
          function ke() {
              It.call(this, "d");
          }
          function De() {
              It.call(this, "c");
          }
          function xe() {}
          function Oe(t, e, n) {
              (this.g = t),
                  (this.W = e),
                  (this.U = n || 1),
                  (this.G = new ae(this)),
                  (this.N = Re),
                  (t = at ? 125 : void 0),
                  (this.O = new re(t)),
                  (this.m = null),
                  (this.b = !1),
                  (this.j = this.A = this.f = this.B = this.s = this.P = this.h = null),
                  (this.i = []),
                  (this.a = null),
                  (this.w = 0),
                  (this.c = this.v = null),
                  (this.H = -1),
                  (this.l = !1),
                  (this.J = 0),
                  (this.D = null),
                  (this.o = this.R = this.F = !1);
          }
          j(ke, It), j(De, It), j(xe, Ie), (_e = new xe());
          var Re = 45e3,
              Pe = {},
              Ve = {};
          function Le(t, e, n) {
              (t.B = 1), (t.f = rn($e(e))), (t.j = n), (t.F = !0), Ce(t, null);
          }
          function Ce(t, e) {
              (t.s = U()), je(t), (t.A = $e(t.f));
              var n = t.A,
                  r = t.U;
              Array.isArray(r) || (r = [String(r)]),
                  gn(n.b, "t", r),
                  (t.w = 0),
                  (t.a = ar(t.g, t.g.w ? e : null)),
                  0 < t.J && (t.D = new se(C(t.ya, t, t.a), t.J)),
                  ce(t.G, t.a, "readystatechange", t.Sa),
                  (e = t.m ? Z(t.m) : {}),
                  t.j ? (t.v || (t.v = "POST"), (e["Content-Type"] = "application/x-www-form-urlencoded"), t.a.$(t.A, t.v, t.j, e)) : ((t.v = "GET"), t.a.$(t.A, t.v, null, e)),
                  ve(1);
          }
          function Me(t, e, n) {
              for (var r = !0; !t.l && t.w < n.length; ) {
                  var i = Ue(t, n);
                  if (i == Ve) {
                      4 == e && ((t.c = 4), me(14), (r = !1));
                      break;
                  }
                  if (i == Pe) {
                      (t.c = 4), me(15), (r = !1);
                      break;
                  }
                  ze(t, i);
              }
              4 == e && 0 == n.length && ((t.c = 1), me(16), (r = !1)), (t.b = t.b && r), r || (Ge(t), Be(t));
          }
          function Ue(t, e) {
              var n = t.w,
                  r = e.indexOf("\n", n);
              return -1 == r ? Ve : ((n = Number(e.substring(n, r))), isNaN(n) ? Pe : (r += 1) + n > e.length ? Ve : ((e = e.substr(r, n)), (t.w = r + n), e));
          }
          function je(t) {
              (t.P = U() + t.N), qe(t, t.N);
          }
          function qe(t, e) {
              if (null != t.h) throw Error("WatchDog timer not null");
              t.h = be(C(t.Qa, t), e);
          }
          function Fe(t) {
              t.h && (S.clearTimeout(t.h), (t.h = null));
          }
          function Be(t) {
              0 == t.g.u || t.l || rr(t.g, t);
          }
          function Ge(t) {
              Fe(t);
              var e = t.D;
              e && "function" == typeof e.da && e.da(), (t.D = null), ie(t.O), fe(t.G), t.a && ((e = t.a), (t.a = null), e.abort(), e.da());
          }
          function ze(t, e) {
              try {
                  var n = t.g;
                  if (0 != n.u && (n.a == t || Nn(n.b, t)))
                      if (((n.A = t.H), !t.o && Nn(n.b, t) && 3 == n.u)) {
                          try {
                              var r = n.ja.a.parse(e);
                          } catch (t) {
                              r = null;
                          }
                          if (Array.isArray(r) && 3 == r.length) {
                              var i = r;
                              if (0 == i[0]) {
                                  t: if (!n.i) {
                                      if (n.a) {
                                          if (!(n.a.s + 3e3 < t.s)) break t;
                                          nr(n), n.a.cancel(), (n.a = null);
                                      }
                                      er(n), me(18);
                                  }
                              } else (n.ia = i[1]), 0 < n.ia - n.G && i[2] < 37500 && n.U && 0 == n.m && !n.l && (n.l = be(C(n.Na, n), 6e3));
                              if (In(n.b) <= 1 && n.O) {
                                  try {
                                      n.O();
                                  } catch (t) {}
                                  n.O = void 0;
                              }
                          } else or(n, 11);
                      } else if (((!t.o && n.a != t) || nr(n), !W(e)))
                          for (e = r = n.ja.a.parse(e), r = 0; r < e.length; r++)
                              if (((i = e[r]), (n.G = i[0]), (i = i[1]), 2 == n.u))
                                  if ("c" == i[0]) {
                                      (n.B = i[1]), (n.R = i[2]);
                                      var o = i[3];
                                      null != o && (n.oa = o);
                                      var s = i[5];
                                      null != s && "number" == typeof s && 0 < s && (n.D = 1.5 * s);
                                      var u = n,
                                          a = t.a;
                                      if (a) {
                                          var h = a.a ? a.a.getResponseHeader("X-Client-Wire-Protocol") : null;
                                          if (h) {
                                              var c = u.b;
                                              !c.a && (H(h, "spdy") || H(h, "quic") || H(h, "h2")) && ((c.f = c.g), (c.a = new Set()), c.b && (An(c, c.b), (c.b = null)));
                                          }
                                          if (u.s) {
                                              var f = a.a ? a.a.getResponseHeader("X-HTTP-Session-Id") : null;
                                              f && ((u.ha = f), nn(u.v, u.s, f));
                                          }
                                      }
                                      (n.u = 3), n.c && n.c.na();
                                      var l = t;
                                      if ((((u = n).ea = ur(u, u.w ? u.R : null, u.P)), l.o)) {
                                          _n(u.b, l);
                                          var p = l,
                                              d = u.D;
                                          d && p.setTimeout(d), p.h && (Fe(p), je(p)), (u.a = l);
                                      } else tr(u);
                                      0 < n.f.length && Xn(n);
                                  } else ("stop" != i[0] && "close" != i[0]) || or(n, 7);
                              else 3 == n.u && ("stop" == i[0] || "close" == i[0] ? ("stop" == i[0] ? or(n, 7) : Kn(n)) : "noop" != i[0] && n.c && n.c.ma(i), (n.m = 0));
                  ve(4);
              } catch (t) {}
          }
          function We(t, e) {
              if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
              else if (x(t) || "string" == typeof t) B(t, e, void 0);
              else {
                  if (t.K && "function" == typeof t.K) var n = t.K();
                  else if (t.I && "function" == typeof t.I) n = void 0;
                  else if (x(t) || "string" == typeof t) {
                      n = [];
                      for (var r = t.length, i = 0; i < r; i++) n.push(i);
                  } else for (i in ((n = []), (r = 0), t)) n[r++] = i;
                  i = (r = (function (t) {
                      if (t.I && "function" == typeof t.I) return t.I();
                      if ("string" == typeof t) return t.split("");
                      if (x(t)) {
                          for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
                          return e;
                      }
                      for (r in ((e = []), (n = 0), t)) e[n++] = t[r];
                      return e;
                  })(t)).length;
                  for (var o = 0; o < i; o++) e.call(void 0, r[o], n && n[o], t);
              }
          }
          function Qe(t, e) {
              (this.b = {}), (this.a = []), (this.c = 0);
              var n = arguments.length;
              if (1 < n) {
                  if (n % 2) throw Error("Uneven number of arguments");
                  for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1]);
              } else if (t)
                  if (t instanceof Qe) for (n = t.K(), r = 0; r < n.length; r++) this.set(n[r], t.get(n[r]));
                  else for (r in t) this.set(r, t[r]);
          }
          function Ke(t) {
              if (t.c != t.a.length) {
                  for (var e = 0, n = 0; e < t.a.length; ) {
                      var r = t.a[e];
                      He(t.b, r) && (t.a[n++] = r), e++;
                  }
                  t.a.length = n;
              }
              if (t.c != t.a.length) {
                  var i = {};
                  for (n = e = 0; e < t.a.length; ) He(i, (r = t.a[e])) || (i[(t.a[n++] = r)] = 1), e++;
                  t.a.length = n;
              }
          }
          function He(t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
          }
          ((N = Oe.prototype).setTimeout = function (t) {
              this.N = t;
          }),
              (N.Sa = function (t) {
                  t = t.target;
                  var e = this.D;
                  e && 3 == Gn(t) ? e.Ia() : this.ya(t);
              }),
              (N.ya = function (t) {
                  try {
                      if (t == this.a)
                          t: {
                              var e = Gn(this.a),
                                  n = this.a.qa(),
                                  r = this.a.S();
                              if (!(e < 3 || (3 == e && !at && !this.a.Y()))) {
                                  this.l || 4 != e || 7 == n || ve(8 == n || r <= 0 ? 3 : 2), Fe(this);
                                  var i = this.a.S();
                                  this.H = i;
                                  var o = this.a.Y();
                                  if ((this.b = 200 == i)) {
                                      if (this.R && !this.o) {
                                          e: {
                                              if (this.a) {
                                                  var s,
                                                      u = this.a;
                                                  if ((s = u.a ? u.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !W(s)) {
                                                      var a = s;
                                                      break e;
                                                  }
                                              }
                                              a = null;
                                          }
                                          if (!a) {
                                              (this.b = !1), (this.c = 3), me(12), Ge(this), Be(this);
                                              break t;
                                          }
                                          (this.o = !0), ze(this, a);
                                      }
                                      this.F ? (Me(this, e, o), at && this.b && 3 == e && (ce(this.G, this.O, "tick", this.Ra), this.O.start())) : ze(this, o),
                                          4 == e && Ge(this),
                                          this.b && !this.l && (4 == e ? rr(this.g, this) : ((this.b = !1), je(this)));
                                  } else 400 == i && 0 < o.indexOf("Unknown SID") ? ((this.c = 3), me(12)) : ((this.c = 0), me(13)), Ge(this), Be(this);
                              }
                          }
                  } catch (t) {}
              }),
              (N.Ra = function () {
                  if (this.a) {
                      var t = Gn(this.a),
                          e = this.a.Y();
                      this.w < e.length && (Fe(this), Me(this, t, e), this.b && 4 != t && je(this));
                  }
              }),
              (N.cancel = function () {
                  (this.l = !0), Ge(this);
              }),
              (N.Qa = function () {
                  this.h = null;
                  var t = U();
                  0 <= t - this.P ? (2 != this.B && (ve(3), me(17)), Ge(this), (this.c = 2), Be(this)) : qe(this, this.P - t);
              }),
              ((N = Qe.prototype).I = function () {
                  Ke(this);
                  for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]);
                  return t;
              }),
              (N.K = function () {
                  return Ke(this), this.a.concat();
              }),
              (N.get = function (t, e) {
                  return He(this.b, t) ? this.b[t] : e;
              }),
              (N.set = function (t, e) {
                  He(this.b, t) || (this.c++, this.a.push(t)), (this.b[t] = e);
              }),
              (N.forEach = function (t, e) {
                  for (var n = this.K(), r = 0; r < n.length; r++) {
                      var i = n[r],
                          o = this.get(i);
                      t.call(e, o, i, this);
                  }
              });
          var Ye = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
          function Xe(t, e) {
              if (((this.c = this.j = this.f = ""), (this.h = null), (this.i = this.g = ""), (this.a = !1), t instanceof Xe)) {
                  (this.a = void 0 !== e ? e : t.a), Je(this, t.f), (this.j = t.j), Ze(this, t.c), tn(this, t.h), (this.g = t.g), (e = t.b);
                  var n = new pn();
                  (n.c = e.c), e.a && ((n.a = new Qe(e.a)), (n.b = e.b)), en(this, n), (this.i = t.i);
              } else
                  t && (n = String(t).match(Ye))
                      ? ((this.a = !!e), Je(this, n[1] || "", !0), (this.j = on(n[2] || "")), Ze(this, n[3] || "", !0), tn(this, n[4]), (this.g = on(n[5] || "", !0)), en(this, n[6] || "", !0), (this.i = on(n[7] || "")))
                      : ((this.a = !!e), (this.b = new pn(null, this.a)));
          }
          function $e(t) {
              return new Xe(t);
          }
          function Je(t, e, n) {
              (t.f = n ? on(e, !0) : e), t.f && (t.f = t.f.replace(/:$/, ""));
          }
          function Ze(t, e, n) {
              t.c = n ? on(e, !0) : e;
          }
          function tn(t, e) {
              if (e) {
                  if (((e = Number(e)), isNaN(e) || e < 0)) throw Error("Bad port number " + e);
                  t.h = e;
              } else t.h = null;
          }
          function en(t, e, n) {
              var r, i;
              e instanceof pn
                  ? ((t.b = e),
                    (r = t.b),
                    (i = t.a) &&
                        !r.f &&
                        (dn(r),
                        (r.c = null),
                        r.a.forEach(function (t, e) {
                            var n = e.toLowerCase();
                            e != n && (yn(this, e), gn(this, n, t));
                        }, r)),
                    (r.f = i))
                  : (n || (e = sn(e, fn)), (t.b = new pn(e, t.a)));
          }
          function nn(t, e, n) {
              t.b.set(e, n);
          }
          function rn(t) {
              return nn(t, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ U()).toString(36)), t;
          }
          function on(t, e) {
              return t ? (e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t)) : "";
          }
          function sn(t, e, n) {
              return "string" == typeof t ? ((t = encodeURI(t).replace(e, un)), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t) : null;
          }
          function un(t) {
              return "%" + (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) + (15 & t).toString(16);
          }
          Xe.prototype.toString = function () {
              var t = [],
                  e = this.f;
              e && t.push(sn(e, an, !0), ":");
              var n = this.c;
              return (
                  (!n && "file" != e) || (t.push("//"), (e = this.j) && t.push(sn(e, an, !0), "@"), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.h) && t.push(":", String(n))),
                  (n = this.g) && (this.c && "/" != n.charAt(0) && t.push("/"), t.push(sn(n, "/" == n.charAt(0) ? cn : hn, !0))),
                  (n = this.b.toString()) && t.push("?", n),
                  (n = this.i) && t.push("#", sn(n, ln)),
                  t.join("")
              );
          };
          var an = /[#\/\?@]/g,
              hn = /[#\?:]/g,
              cn = /[#\?]/g,
              fn = /[#\?@]/g,
              ln = /#/g;
          function pn(t, e) {
              (this.b = this.a = null), (this.c = t || null), (this.f = !!e);
          }
          function dn(n) {
              n.a ||
                  ((n.a = new Qe()),
                  (n.b = 0),
                  n.c &&
                      (function (t, e) {
                          if (t) {
                              t = t.split("&");
                              for (var n = 0; n < t.length; n++) {
                                  var r = t[n].indexOf("="),
                                      i = null;
                                  if (0 <= r) {
                                      var o = t[n].substring(0, r);
                                      i = t[n].substring(r + 1);
                                  } else o = t[n];
                                  e(o, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "");
                              }
                          }
                      })(n.c, function (t, e) {
                          n.add(decodeURIComponent(t.replace(/\+/g, " ")), e);
                      }));
          }
          function yn(t, e) {
              dn(t), (e = mn(t, e)), He(t.a.b, e) && ((t.c = null), (t.b -= t.a.get(e).length), He((t = t.a).b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && Ke(t)));
          }
          function vn(t, e) {
              return dn(t), (e = mn(t, e)), He(t.a.b, e);
          }
          function gn(t, e, n) {
              yn(t, e), 0 < n.length && ((t.c = null), t.a.set(mn(t, e), z(n)), (t.b += n.length));
          }
          function mn(t, e) {
              return (e = String(e)), t.f && (e = e.toLowerCase()), e;
          }
          function wn(t, e) {
              (this.b = t), (this.a = e);
          }
          function bn(t) {
              (this.g = t || En),
                  (t = S.PerformanceNavigationTiming ? 0 < (t = S.performance.getEntriesByType("navigation")).length && ("hq" == t[0].nextHopProtocol || "h2" == t[0].nextHopProtocol) : !!(S.ca && S.ca.ua && S.ca.ua() && S.ca.ua().mb)),
                  (this.f = t ? this.g : 1),
                  (this.a = null),
                  1 < this.f && (this.a = new Set()),
                  (this.b = null),
                  (this.c = []);
          }
          ((N = pn.prototype).add = function (t, e) {
              dn(this), (this.c = null), (t = mn(this, t));
              var n = this.a.get(t);
              return n || this.a.set(t, (n = [])), n.push(e), (this.b += 1), this;
          }),
              (N.forEach = function (n, r) {
                  dn(this),
                      this.a.forEach(function (t, e) {
                          B(
                              t,
                              function (t) {
                                  n.call(r, t, e, this);
                              },
                              this
                          );
                      }, this);
              }),
              (N.K = function () {
                  dn(this);
                  for (var t = this.a.I(), e = this.a.K(), n = [], r = 0; r < e.length; r++) for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]);
                  return n;
              }),
              (N.I = function (t) {
                  dn(this);
                  var e = [];
                  if ("string" == typeof t) vn(this, t) && (e = G(e, this.a.get(mn(this, t))));
                  else {
                      t = this.a.I();
                      for (var n = 0; n < t.length; n++) e = G(e, t[n]);
                  }
                  return e;
              }),
              (N.set = function (t, e) {
                  return dn(this), (this.c = null), vn(this, (t = mn(this, t))) && (this.b -= this.a.get(t).length), this.a.set(t, [e]), (this.b += 1), this;
              }),
              (N.get = function (t, e) {
                  return t && 0 < (t = this.I(t)).length ? String(t[0]) : e;
              }),
              (N.toString = function () {
                  if (this.c) return this.c;
                  if (!this.a) return "";
                  for (var t = [], e = this.a.K(), n = 0; n < e.length; n++) {
                      var r = e[n],
                          i = encodeURIComponent(String(r));
                      r = this.I(r);
                      for (var o = 0; o < r.length; o++) {
                          var s = i;
                          "" !== r[o] && (s += "=" + encodeURIComponent(String(r[o]))), t.push(s);
                      }
                  }
                  return (this.c = t.join("&"));
              });
          var En = 10;
          function Tn(t) {
              return t.b || (t.a && t.a.size >= t.f);
          }
          function In(t) {
              return t.b ? 1 : t.a ? t.a.size : 0;
          }
          function Nn(t, e) {
              return t.b ? t.b == e : t.a && t.a.has(e);
          }
          function An(t, e) {
              t.a ? t.a.add(e) : (t.b = e);
          }
          function _n(t, e) {
              t.b && t.b == e ? (t.b = null) : t.a && t.a.has(e) && t.a.delete(e);
          }
          function Sn(t) {
              var e, n;
              if (null != t.b) return t.c.concat(t.b.i);
              if (null == t.a || 0 === t.a.size) return z(t.c);
              var r = t.c;
              try {
                  for (var i = I(t.a.values()), o = i.next(); !o.done; o = i.next()) {
                      var s = o.value;
                      r = r.concat(s.i);
                  }
              } catch (t) {
                  e = { error: t };
              } finally {
                  try {
                      o && !o.done && (n = i.return) && n.call(i);
                  } finally {
                      if (e) throw e.error;
                  }
              }
              return r;
          }
          function kn() {}
          function Dn() {
              this.a = new kn();
          }
          function xn(t, r, e) {
              var i = e || "";
              try {
                  We(t, function (t, e) {
                      var n = t;
                      O(t) && (n = Qt(t)), r.push(i + e + "=" + encodeURIComponent(n));
                  });
              } catch (t) {
                  throw (r.push(i + "type=" + encodeURIComponent("_badmap")), t);
              }
          }
          function On(t, e, n, r, i) {
              try {
                  (e.onload = null), (e.onerror = null), (e.onabort = null), (e.ontimeout = null), i(r);
              } catch (t) {}
          }
          (bn.prototype.cancel = function () {
              var e, t;
              if (((this.c = Sn(this)), this.b)) this.b.cancel(), (this.b = null);
              else if (this.a && 0 !== this.a.size) {
                  try {
                      for (var n = I(this.a.values()), r = n.next(); !r.done; r = n.next()) {
                          r.value.cancel();
                      }
                  } catch (t) {
                      e = { error: t };
                  } finally {
                      try {
                          r && !r.done && (t = n.return) && t.call(n);
                      } finally {
                          if (e) throw e.error;
                      }
                  }
                  this.a.clear();
              }
          }),
              (kn.prototype.stringify = function (t) {
                  return S.JSON.stringify(t, void 0);
              }),
              (kn.prototype.parse = function (t) {
                  return S.JSON.parse(t, void 0);
              });
          var Rn = S.JSON.parse;
          function Pn(t) {
              zt.call(this),
                  (this.headers = new Qe()),
                  (this.G = t || null),
                  (this.b = !1),
                  (this.s = this.a = null),
                  (this.D = ""),
                  (this.h = 0),
                  (this.f = ""),
                  (this.g = this.w = this.l = this.v = !1),
                  (this.o = 0),
                  (this.m = null),
                  (this.H = Vn),
                  (this.B = this.F = !1);
          }
          j(Pn, zt);
          var Vn = "",
              Ln = /^https?$/i,
              Cn = ["POST", "PUT"];
          function Mn(t) {
              return "content-type" == t.toLowerCase();
          }
          function Un(t, e) {
              (t.b = !1), t.a && ((t.g = !0), t.a.abort(), (t.g = !1)), (t.f = e), (t.h = 5), jn(t), Fn(t);
          }
          function jn(t) {
              t.v || ((t.v = !0), t.dispatchEvent("complete"), t.dispatchEvent("error"));
          }
          function qn(t) {
              if (t.b && void 0 !== _ && (!t.s[1] || 4 != Gn(t) || 2 != t.S()))
                  if (t.l && 4 == Gn(t)) oe(t.va, 0, t);
                  else if ((t.dispatchEvent("readystatechange"), 4 == Gn(t))) {
                      t.b = !1;
                      try {
                          var e,
                              n = t.S();
                          t: switch (n) {
                              case 200:
                              case 201:
                              case 202:
                              case 204:
                              case 206:
                              case 304:
                              case 1223:
                                  var r = !0;
                                  break t;
                              default:
                                  r = !1;
                          }
                          if (!(e = r)) {
                              var i;
                              if ((i = 0 === n)) {
                                  var o = String(t.D).match(Ye)[1] || null;
                                  if (!o && S.self && S.self.location) {
                                      var s = S.self.location.protocol;
                                      o = s.substr(0, s.length - 1);
                                  }
                                  i = !Ln.test(o ? o.toLowerCase() : "");
                              }
                              e = i;
                          }
                          if (e) t.dispatchEvent("complete"), t.dispatchEvent("success");
                          else {
                              t.h = 6;
                              try {
                                  var u = 2 < Gn(t) ? t.a.statusText : "";
                              } catch (t) {
                                  u = "";
                              }
                              (t.f = u + " [" + t.S() + "]"), jn(t);
                          }
                      } finally {
                          Fn(t);
                      }
                  }
          }
          function Fn(t, e) {
              if (t.a) {
                  Bn(t);
                  var n = t.a,
                      r = t.s[0] ? k : null;
                  (t.a = null), (t.s = null), e || t.dispatchEvent("ready");
                  try {
                      n.onreadystatechange = r;
                  } catch (t) {}
              }
          }
          function Bn(t) {
              t.a && t.B && (t.a.ontimeout = null), t.m && (S.clearTimeout(t.m), (t.m = null));
          }
          function Gn(t) {
              return t.a ? t.a.readyState : 0;
          }
          function zn(t, e, n) {
              t: {
                  for (r in n) {
                      var r = !1;
                      break t;
                  }
                  r = !0;
              }
              var i;
              r ||
                  ((i = ""),
                  J(n, function (t, e) {
                      (i += e), (i += ":"), (i += t), (i += "\r\n");
                  }),
                  (n = i),
                  "string" == typeof t ? null != n && encodeURIComponent(String(n)) : nn(t, e, n));
          }
          function Wn(t, e, n) {
              return (n && n.internalChannelParams && n.internalChannelParams[t]) || e;
          }
          function Qn(t) {
              (this.f = []),
                  (this.R = this.ea = this.v = this.P = this.a = this.ha = this.s = this.N = this.h = this.F = this.j = null),
                  (this.Fa = this.H = 0),
                  (this.Ca = Wn("failFast", !1, t)),
                  (this.U = this.l = this.i = this.g = this.c = null),
                  (this.W = !0),
                  (this.A = this.ia = this.G = -1),
                  (this.J = this.m = this.o = 0),
                  (this.Ba = Wn("baseRetryDelayMs", 5e3, t)),
                  (this.Ga = Wn("retryDelaySeedMs", 1e4, t)),
                  (this.Da = Wn("forwardChannelMaxRetries", 2, t)),
                  (this.ga = Wn("forwardChannelRequestTimeoutMs", 2e4, t)),
                  (this.Ea = (t && t.nb) || void 0),
                  (this.D = void 0),
                  (this.w = (t && t.supportsCrossDomainXhr) || !1),
                  (this.B = ""),
                  (this.b = new bn(t && t.concurrentRequestLimit)),
                  (this.ja = new Dn()),
                  (this.fa = (t && t.fastHandshake) || !1),
                  t && t.forceLongPolling && (this.W = !1),
                  (this.O = void 0);
          }
          function Kn(t) {
              if ((Hn(t), 3 == t.u)) {
                  var e = t.H++,
                      n = $e(t.v);
                  nn(n, "SID", t.B),
                      nn(n, "RID", e),
                      nn(n, "TYPE", "terminate"),
                      Jn(t, n),
                      ((e = new Oe(t, e, void 0)).B = 2),
                      (e.f = rn($e(n))),
                      (n = !1),
                      S.navigator && S.navigator.sendBeacon && (n = S.navigator.sendBeacon(e.f.toString(), "")),
                      !n && S.Image && ((new Image().src = e.f), (n = !0)),
                      n || ((e.a = ar(e.g, null)), e.a.$(e.f)),
                      (e.s = U()),
                      je(e);
              }
              sr(t);
          }
          function Hn(t) {
              t.a && (t.a.cancel(), (t.a = null)), t.i && (S.clearTimeout(t.i), (t.i = null)), nr(t), t.b.cancel(), t.g && ("number" == typeof t.g && S.clearTimeout(t.g), (t.g = null));
          }
          function Yn(t, e) {
              t.f.push(new wn(t.Fa++, e)), 3 == t.u && Xn(t);
          }
          function Xn(t) {
              Tn(t.b) || t.g || ((t.g = !0), Zt(t.xa, t), (t.o = 0));
          }
          function $n(t, e) {
              var n;
              n = e ? e.W : t.H++;
              var r = $e(t.v);
              nn(r, "SID", t.B),
                  nn(r, "RID", n),
                  nn(r, "AID", t.G),
                  Jn(t, r),
                  t.h && t.j && zn(r, t.h, t.j),
                  (n = new Oe(t, n, t.o + 1)),
                  null === t.h && (n.m = t.j),
                  e && (t.f = e.i.concat(t.f)),
                  (e = Zn(t, n, 1e3)),
                  n.setTimeout(Math.round(0.5 * t.ga) + Math.round(0.5 * t.ga * Math.random())),
                  An(t.b, n),
                  Le(n, r, e);
          }
          function Jn(t, n) {
              t.c &&
                  We({}, function (t, e) {
                      nn(n, e, t);
                  });
          }
          function Zn(t, e, n) {
              n = Math.min(t.f.length, n);
              var r = t.c ? C(t.c.Ha, t.c, t) : null;
              t: for (var i = t.f, o = -1; ; ) {
                  var s = ["count=" + n];
                  -1 == o ? (0 < n ? ((o = i[0].b), s.push("ofs=" + o)) : (o = 0)) : s.push("ofs=" + o);
                  for (var u = !0, a = 0; a < n; a++) {
                      var h = i[a].b,
                          c = i[a].a;
                      if ((h -= o) < 0) (o = Math.max(0, i[a].b - 100)), (u = !1);
                      else
                          try {
                              xn(c, s, "req" + h + "_");
                          } catch (t) {
                              r && r(c);
                          }
                  }
                  if (u) {
                      r = s.join("&");
                      break t;
                  }
              }
              return (t = t.f.splice(0, n)), (e.i = t), r;
          }
          function tr(t) {
              t.a || t.i || ((t.J = 1), Zt(t.wa, t), (t.m = 0));
          }
          function er(t) {
              return !(t.a || t.i || 3 <= t.m) && (t.J++, (t.i = be(C(t.wa, t), ir(t, t.m))), t.m++, 1);
          }
          function nr(t) {
              null != t.l && (S.clearTimeout(t.l), (t.l = null));
          }
          function rr(t, e) {
              var n = null;
              if (t.a == e) {
                  nr(t), (t.a = null);
                  var r = 2;
              } else {
                  if (!Nn(t.b, e)) return;
                  (n = e.i), _n(t.b, e), (r = 1);
              }
              if (((t.A = e.H), 0 != t.u))
                  if (e.b)
                      if (1 == r) {
                          (n = e.j ? e.j.length : 0), (e = U() - e.s);
                          var i = t.o;
                          (r = de()).dispatchEvent(new we(r)), Xn(t);
                      } else tr(t);
                  else if (
                      3 == (i = e.c) ||
                      (0 == i && 0 < t.A) ||
                      !(
                          (1 == r &&
                              (function (t, e) {
                                  if (!(In(t.b) >= t.b.f - (t.g ? 1 : 0))) {
                                      if (t.g) return (t.f = e.i.concat(t.f)), 1;
                                      if (!(1 == t.u || 2 == t.u || t.o >= (t.Ca ? 0 : t.Da))) return (t.g = be(C(t.xa, t, e), ir(t, t.o))), t.o++, 1;
                                  }
                              })(t, e)) ||
                          (2 == r && er(t))
                      )
                  )
                      switch ((n && 0 < n.length && ((e = t.b), (e.c = e.c.concat(n))), i)) {
                          case 1:
                              or(t, 5);
                              break;
                          case 4:
                              or(t, 10);
                              break;
                          case 3:
                              or(t, 6);
                              break;
                          default:
                              or(t, 2);
                      }
          }
          function ir(t, e) {
              var n = t.Ba + Math.floor(Math.random() * t.Ga);
              return t.c || (n *= 2), n * e;
          }
          function or(t, e) {
              if (2 == e) {
                  var n = null;
                  t.c && (n = null);
                  var r = C(t.Ta, t);
                  n || ((n = new Xe("//www.google.com/images/cleardot.gif")), (S.location && "http" == S.location.protocol) || Je(n, "https"), rn(n)),
                      (function (t, e) {
                          var n = new le();
                          if (S.Image) {
                              var r = new Image();
                              (r.onload = M(On, n, r, "TestLoadImage: loaded", !0, e)),
                                  (r.onerror = M(On, n, r, "TestLoadImage: error", !1, e)),
                                  (r.onabort = M(On, n, r, "TestLoadImage: abort", !1, e)),
                                  (r.ontimeout = M(On, n, r, "TestLoadImage: timeout", !1, e)),
                                  S.setTimeout(function () {
                                      r.ontimeout && r.ontimeout();
                                  }, 1e4),
                                  (r.src = t);
                          } else e(!1);
                      })(n.toString(), r);
              } else me(2);
              (t.u = 0), t.c && t.c.la(e), sr(t), Hn(t);
          }
          function sr(t) {
              (t.u = 0), (t.A = -1), t.c && ((0 == Sn(t.b).length && 0 == t.f.length) || ((t.b.c.length = 0), z(t.f), (t.f.length = 0)), t.c.ka());
          }
          function ur(t, e, n) {
              var r,
                  i,
                  o,
                  s,
                  u,
                  a,
                  h = (r = n) instanceof Xe ? $e(r) : new Xe(r, void 0);
              if ("" != h.c) e && Ze(h, e + "." + h.c), tn(h, h.h);
              else {
                  var c = S.location;
                  (i = c.protocol), (o = e ? e + "." + c.hostname : c.hostname), (s = +c.port), (u = n), (a = new Xe(null, void 0)), i && Je(a, i), o && Ze(a, o), s && tn(a, s), u && (a.g = u), (h = a);
              }
              return (
                  t.N &&
                      J(t.N, function (t, e) {
                          nn(h, e, t);
                      }),
                  (e = t.s),
                  (n = t.ha),
                  e && n && nn(h, e, n),
                  nn(h, "VER", t.oa),
                  Jn(t, h),
                  h
              );
          }
          function ar(t, e) {
              if (e && !t.w) throw Error("Can't create secondary domain capable XhrIo object.");
              return ((e = new Pn(t.Ea)).F = t.w), e;
          }
          function hr() {}
          function cr() {
              if (st && !(10 <= Number(wt))) throw Error("Environmental error: no available transport.");
          }
          function fr(t, e) {
              zt.call(this),
                  (this.a = new Qn(e)),
                  (this.l = t),
                  (this.b = (e && e.messageUrlParams) || null),
                  (t = (e && e.messageHeaders) || null),
                  e && e.clientProtocolHeaderRequired && (t ? (t["X-Client-Protocol"] = "webchannel") : (t = { "X-Client-Protocol": "webchannel" })),
                  (this.a.j = t),
                  (t = (e && e.initMessageHeaders) || null),
                  e && e.messageContentType && (t ? (t["X-WebChannel-Content-Type"] = e.messageContentType) : (t = { "X-WebChannel-Content-Type": e.messageContentType })),
                  e && e.pa && (t ? (t["X-WebChannel-Client-Profile"] = e.pa) : (t = { "X-WebChannel-Client-Profile": e.pa })),
                  (this.a.F = t),
                  (t = e && e.httpHeadersOverwriteParam) && !W(t) && (this.a.h = t),
                  (this.h = (e && e.supportsCrossDomainXhr) || !1),
                  (this.g = (e && e.sendRawJson) || !1),
                  (e = e && e.httpSessionIdParam) && !W(e) && ((this.a.s = e), null !== (t = this.b) && e in t && e in (t = this.b) && delete t[e]),
                  (this.f = new dr(this));
          }
          function lr(t) {
              ke.call(this);
              var e = t.__sm__;
              if (e) {
                  t: {
                      for (var n in e) {
                          t = n;
                          break t;
                      }
                      t = void 0;
                  }
                  (this.c = t) ? ((t = this.c), (this.data = null !== e && t in e ? e[t] : void 0)) : (this.data = e);
              } else this.data = t;
          }
          function pr() {
              De.call(this), (this.status = 1);
          }
          function dr(t) {
              this.a = t;
          }
          ((N = Pn.prototype).$ = function (t, e, n, r) {
              if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + t);
              (e = e ? e.toUpperCase() : "GET"),
                  (this.D = t),
                  (this.f = ""),
                  (this.h = 0),
                  (this.v = !1),
                  (this.b = !0),
                  (this.a = new XMLHttpRequest()),
                  (this.s = this.G ? Ne(this.G) : Ne(_e)),
                  (this.a.onreadystatechange = C(this.va, this));
              try {
                  (this.w = !0), this.a.open(e, String(t), !0), (this.w = !1);
              } catch (t) {
                  return void Un(this, t);
              }
              t = n || "";
              var i,
                  o = new Qe(this.headers);
              r &&
                  We(r, function (t, e) {
                      o.set(e, t);
                  }),
                  (r = (function (t) {
                      t: {
                          for (var e = Mn, n = t.length, r = "string" == typeof t ? t.split("") : t, i = 0; i < n; i++)
                              if (i in r && e.call(void 0, r[i], i, t)) {
                                  e = i;
                                  break t;
                              }
                          e = -1;
                      }
                      return e < 0 ? null : "string" == typeof t ? t.charAt(e) : t[e];
                  })(o.K())),
                  (n = S.FormData && t instanceof S.FormData),
                  0 <= F(Cn, e) && !r && !n && o.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"),
                  o.forEach(function (t, e) {
                      this.a.setRequestHeader(e, t);
                  }, this),
                  this.H && (this.a.responseType = this.H),
                  "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);
              try {
                  Bn(this),
                      0 < this.o &&
                          ((this.B = ((i = this.a), st && gt(9) && "number" == typeof i.timeout && void 0 !== i.ontimeout)) ? ((this.a.timeout = this.o), (this.a.ontimeout = C(this.ta, this))) : (this.m = oe(this.ta, this.o, this))),
                      (this.l = !0),
                      this.a.send(t),
                      (this.l = !1);
              } catch (t) {
                  Un(this, t);
              }
          }),
              (N.ta = function () {
                  void 0 !== _ && this.a && ((this.f = "Timed out after " + this.o + "ms, aborting"), (this.h = 8), this.dispatchEvent("timeout"), this.abort(8));
              }),
              (N.abort = function (t) {
                  this.a && this.b && ((this.b = !1), (this.g = !0), this.a.abort(), (this.g = !1), (this.h = t || 7), this.dispatchEvent("complete"), this.dispatchEvent("abort"), Fn(this));
              }),
              (N.C = function () {
                  this.a && (this.b && ((this.b = !1), (this.g = !0), this.a.abort(), (this.g = !1)), Fn(this, !0)), Pn.M.C.call(this);
              }),
              (N.va = function () {
                  this.j || (this.w || this.l || this.g ? qn(this) : this.Oa());
              }),
              (N.Oa = function () {
                  qn(this);
              }),
              (N.S = function () {
                  try {
                      return 2 < Gn(this) ? this.a.status : -1;
                  } catch (t) {
                      return -1;
                  }
              }),
              (N.Y = function () {
                  try {
                      return this.a ? this.a.responseText : "";
                  } catch (t) {
                      return "";
                  }
              }),
              (N.Ja = function (t) {
                  if (this.a) {
                      var e = this.a.responseText;
                      return t && 0 == e.indexOf(t) && (e = e.substring(t.length)), Rn(e);
                  }
              }),
              (N.qa = function () {
                  return this.h;
              }),
              (N.Ma = function () {
                  return "string" == typeof this.f ? this.f : String(this.f);
              }),
              ((N = Qn.prototype).oa = 8),
              (N.u = 1),
              (N.xa = function (t) {
                  if (this.g)
                      if (((this.g = null), 1 == this.u)) {
                          if (!t) {
                              (this.H = Math.floor(1e5 * Math.random())), (t = this.H++);
                              var e,
                                  n = new Oe(this, t, void 0),
                                  r = this.j;
                              if ((this.F && (r ? et((r = Z(r)), this.F) : (r = this.F)), null === this.h && (n.m = r), this.fa))
                                  t: {
                                      for (var i = (e = 0); i < this.f.length; i++) {
                                          var o = this.f[i];
                                          if (("__data__" in o.a && "string" == typeof (o = o.a.__data__) ? (o = o.length) : (o = void 0), void 0 === o)) break;
                                          if (4096 < (e += o)) {
                                              e = i;
                                              break t;
                                          }
                                          if (4096 === e || i === this.f.length - 1) {
                                              e = i + 1;
                                              break t;
                                          }
                                      }
                                      e = 1e3;
                                  }
                              else e = 1e3;
                              (e = Zn(this, n, e)),
                                  nn((i = $e(this.v)), "RID", t),
                                  nn(i, "CVER", 22),
                                  this.s && nn(i, "X-HTTP-Session-Id", this.s),
                                  Jn(this, i),
                                  this.h && r && zn(i, this.h, r),
                                  An(this.b, n),
                                  this.fa ? (nn(i, "$req", e), nn(i, "SID", "null"), (n.R = !0), Le(n, i, null)) : Le(n, i, e),
                                  (this.u = 2);
                          }
                      } else 3 == this.u && (t ? $n(this, t) : 0 == this.f.length || Tn(this.b) || $n(this));
              }),
              (N.wa = function () {
                  (this.i = null), (this.a = new Oe(this, "rpc", this.J)), null === this.h && (this.a.m = this.j), (this.a.J = 0);
                  var t = $e(this.ea);
                  nn(t, "RID", "rpc"), nn(t, "SID", this.B), nn(t, "CI", this.U ? "0" : "1"), nn(t, "AID", this.G), Jn(this, t), nn(t, "TYPE", "xmlhttp"), this.h && this.j && zn(t, this.h, this.j), this.D && this.a.setTimeout(this.D);
                  var e = this.a,
                      n = this.R;
                  (e.B = 1), (e.f = rn($e(t))), (e.j = null), (e.F = !0), Ce(e, n);
              }),
              (N.Na = function () {
                  null != this.l && ((this.l = null), this.a.cancel(), (this.a = null), er(this), me(19));
              }),
              (N.Ta = function (t) {
                  me(t ? 2 : 1);
              }),
              ((N = hr.prototype).na = function () {}),
              (N.ma = function () {}),
              (N.la = function () {}),
              (N.ka = function () {}),
              (N.Ha = function () {}),
              (cr.prototype.a = function (t, e) {
                  return new fr(t, e);
              }),
              j(fr, zt),
              ((N = fr.prototype).addEventListener = function (t, e, n, r) {
                  fr.M.addEventListener.call(this, t, e, n, r);
              }),
              (N.removeEventListener = function (t, e, n, r) {
                  fr.M.removeEventListener.call(this, t, e, n, r);
              }),
              (N.Ka = function () {
                  (this.a.c = this.f), this.h && (this.a.w = !0);
                  var t = this.a,
                      e = this.l,
                      n = this.b || void 0;
                  me(0), (t.P = e), (t.N = n || {}), (t.U = t.W), (t.v = ur(t, null, t.P)), Xn(t);
              }),
              (N.close = function () {
                  Kn(this.a);
              }),
              (N.La = function (t) {
                  if ("string" == typeof t) {
                      var e = {};
                      (e.__data__ = t), Yn(this.a, e);
                  } else this.g ? (((e = {}).__data__ = Qt(t)), Yn(this.a, e)) : Yn(this.a, t);
              }),
              (N.C = function () {
                  (this.a.c = null), delete this.f, Kn(this.a), delete this.a, fr.M.C.call(this);
              }),
              j(lr, ke),
              j(pr, De),
              j(dr, hr),
              (dr.prototype.na = function () {
                  this.a.dispatchEvent("a");
              }),
              (dr.prototype.ma = function (t) {
                  this.a.dispatchEvent(new lr(t));
              }),
              (dr.prototype.la = function (t) {
                  this.a.dispatchEvent(new pr());
              }),
              (dr.prototype.ka = function () {
                  this.a.dispatchEvent("b");
              }),
              (cr.prototype.createWebChannel = cr.prototype.a),
              (fr.prototype.send = fr.prototype.La),
              (fr.prototype.open = fr.prototype.Ka),
              (fr.prototype.close = fr.prototype.close),
              (Ee.NO_ERROR = 0),
              (Ee.TIMEOUT = 8),
              (Ee.HTTP_ERROR = 6),
              (Te.COMPLETE = "complete"),
              ((Ae.EventType = Se).OPEN = "a"),
              (Se.CLOSE = "b"),
              (Se.ERROR = "c"),
              (Se.MESSAGE = "d"),
              (zt.prototype.listen = zt.prototype.ra),
              (Pn.prototype.listenOnce = Pn.prototype.sa),
              (Pn.prototype.getLastError = Pn.prototype.Ma),
              (Pn.prototype.getLastErrorCode = Pn.prototype.qa),
              (Pn.prototype.getStatus = Pn.prototype.S),
              (Pn.prototype.getResponseJson = Pn.prototype.Ja),
              (Pn.prototype.getResponseText = Pn.prototype.Y),
              (Pn.prototype.send = Pn.prototype.$);
          var yr = {
                  createWebChannelTransport: function () {
                      return new cr();
                  },
                  ErrorCode: Ee,
                  EventType: Te,
                  WebChannel: Ae,
                  XhrIo: Pn,
              },
              vr = yr.createWebChannelTransport,
              gr = yr.ErrorCode,
              mr = yr.EventType,
              wr = yr.WebChannel,
              br = yr.XhrIo,
              Er = cp.SDK_VERSION,
              Tr =
                  ((Ir.prototype.t = function () {
                      return null != this.uid;
                  }),
                  (Ir.prototype.s = function () {
                      return this.t() ? "uid:" + this.uid : "anonymous-user";
                  }),
                  (Ir.prototype.isEqual = function (t) {
                      return t.uid === this.uid;
                  }),
                  Ir);
          function Ir(t) {
              this.uid = t;
          }
          (Tr.UNAUTHENTICATED = new Tr(null)), (Tr.i = new Tr("google-credentials-uid")), (Tr.h = new Tr("first-party-uid"));
          function Nr(t, e) {
              (this.user = e), (this.type = "OAuth"), (this.o = {}), (this.o.Authorization = "Bearer " + t);
          }
          var Ar,
              _r,
              Sr = {
                  OK: "ok",
                  CANCELLED: "cancelled",
                  UNKNOWN: "unknown",
                  INVALID_ARGUMENT: "invalid-argument",
                  DEADLINE_EXCEEDED: "deadline-exceeded",
                  NOT_FOUND: "not-found",
                  ALREADY_EXISTS: "already-exists",
                  PERMISSION_DENIED: "permission-denied",
                  UNAUTHENTICATED: "unauthenticated",
                  RESOURCE_EXHAUSTED: "resource-exhausted",
                  FAILED_PRECONDITION: "failed-precondition",
                  ABORTED: "aborted",
                  OUT_OF_RANGE: "out-of-range",
                  UNIMPLEMENTED: "unimplemented",
                  INTERNAL: "internal",
                  UNAVAILABLE: "unavailable",
                  DATA_LOSS: "data-loss",
              },
              kr = (n(Wr, (_r = Error)), Wr),
              Dr =
                  ((zr.prototype.getToken = function () {
                      return Promise.resolve(null);
                  }),
                  (zr.prototype._ = function () {}),
                  (zr.prototype.l = function (t) {
                      (this.u = t)(Tr.UNAUTHENTICATED);
                  }),
                  (zr.prototype.T = function () {
                      this.u = null;
                  }),
                  zr),
              xr =
                  ((Gr.prototype.getToken = function () {
                      var e = this,
                          n = this.A,
                          t = this.forceRefresh;
                      return (
                          (this.forceRefresh = !1),
                          this.auth
                              ? this.auth.getToken(t).then(function (t) {
                                    if (e.A !== n) throw new kr(Sr.ABORTED, "getToken aborted due to token change.");
                                    return t ? (Zs("string" == typeof t.accessToken), new Nr(t.accessToken, e.currentUser)) : null;
                                })
                              : Promise.resolve(null)
                      );
                  }),
                  (Gr.prototype._ = function () {
                      this.forceRefresh = !0;
                  }),
                  (Gr.prototype.l = function (t) {
                      (this.u = t), this.R && t(this.currentUser);
                  }),
                  (Gr.prototype.T = function () {
                      this.auth && this.auth.removeAuthTokenListener(this.I), (this.I = null), (this.u = null);
                  }),
                  (Gr.prototype.m = function () {
                      var t = this.auth && this.auth.getUid();
                      return Zs(null === t || "string" == typeof t), new Tr(t);
                  }),
                  Gr),
              Or =
                  (Object.defineProperty(Br.prototype, "o", {
                      get: function () {
                          var t = { "X-Goog-AuthUser": this.V },
                              e = this.P.auth.g([]);
                          return e && (t.Authorization = e), t;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Br),
              Rr =
                  ((Fr.prototype.getToken = function () {
                      return Promise.resolve(new Or(this.P, this.V));
                  }),
                  (Fr.prototype.l = function (t) {
                      t(Tr.h);
                  }),
                  (Fr.prototype.T = function () {}),
                  (Fr.prototype._ = function () {}),
                  Fr),
              Pr =
                  ((qr.now = function () {
                      return qr.fromMillis(Date.now());
                  }),
                  (qr.fromDate = function (t) {
                      return qr.fromMillis(t.getTime());
                  }),
                  (qr.fromMillis = function (t) {
                      var e = Math.floor(t / 1e3);
                      return new qr(e, 1e6 * (t - 1e3 * e));
                  }),
                  (qr.prototype.toDate = function () {
                      return new Date(this.toMillis());
                  }),
                  (qr.prototype.toMillis = function () {
                      return 1e3 * this.seconds + this.nanoseconds / 1e6;
                  }),
                  (qr.prototype.p = function (t) {
                      return this.seconds === t.seconds ? ru(this.nanoseconds, t.nanoseconds) : ru(this.seconds, t.seconds);
                  }),
                  (qr.prototype.isEqual = function (t) {
                      return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
                  }),
                  (qr.prototype.toString = function () {
                      return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
                  }),
                  (qr.prototype.valueOf = function () {
                      var t = this.seconds - -62135596800;
                      return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
                  }),
                  qr),
              Vr =
                  ((jr.v = function (t) {
                      return new jr(t);
                  }),
                  (jr.min = function () {
                      return new jr(new Pr(0, 0));
                  }),
                  (jr.prototype.S = function (t) {
                      return this.timestamp.p(t.timestamp);
                  }),
                  (jr.prototype.isEqual = function (t) {
                      return this.timestamp.isEqual(t.timestamp);
                  }),
                  (jr.prototype.D = function () {
                      return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
                  }),
                  (jr.prototype.toString = function () {
                      return "SnapshotVersion(" + this.timestamp.toString() + ")";
                  }),
                  (jr.prototype.C = function () {
                      return this.timestamp;
                  }),
                  jr),
              Lr =
                  (Object.defineProperty(Ur.prototype, "length", {
                      get: function () {
                          return this.F;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (Ur.prototype.isEqual = function (t) {
                      return 0 === Ur.N(this, t);
                  }),
                  (Ur.prototype.child = function (t) {
                      var e = this.segments.slice(this.offset, this.limit());
                      return (
                          t instanceof Ur
                              ? t.forEach(function (t) {
                                    e.push(t);
                                })
                              : e.push(t),
                          this.k(e)
                      );
                  }),
                  (Ur.prototype.limit = function () {
                      return this.offset + this.length;
                  }),
                  (Ur.prototype.$ = function (t) {
                      return (t = void 0 === t ? 1 : t), this.k(this.segments, this.offset + t, this.length - t);
                  }),
                  (Ur.prototype.M = function () {
                      return this.k(this.segments, this.offset, this.length - 1);
                  }),
                  (Ur.prototype.L = function () {
                      return this.segments[this.offset];
                  }),
                  (Ur.prototype.O = function () {
                      return this.get(this.length - 1);
                  }),
                  (Ur.prototype.get = function (t) {
                      return this.segments[this.offset + t];
                  }),
                  (Ur.prototype.B = function () {
                      return 0 === this.length;
                  }),
                  (Ur.prototype.q = function (t) {
                      if (t.length < this.length) return !1;
                      for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
                      return !0;
                  }),
                  (Ur.prototype.U = function (t) {
                      if (this.length + 1 !== t.length) return !1;
                      for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
                      return !0;
                  }),
                  (Ur.prototype.forEach = function (t) {
                      for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
                  }),
                  (Ur.prototype.W = function () {
                      return this.segments.slice(this.offset, this.limit());
                  }),
                  (Ur.N = function (t, e) {
                      for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
                          var i = t.get(r),
                              o = e.get(r);
                          if (i < o) return -1;
                          if (o < i) return 1;
                      }
                      return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
                  }),
                  Ur),
              Cr =
                  (n(Mr, (Ar = Lr)),
                  (Mr.prototype.k = function (t, e, n) {
                      return new Mr(t, e, n);
                  }),
                  (Mr.prototype.j = function () {
                      return this.W().join("/");
                  }),
                  (Mr.prototype.toString = function () {
                      return this.j();
                  }),
                  (Mr.K = function (t) {
                      if (0 <= t.indexOf("//")) throw new kr(Sr.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them.");
                      return new Mr(
                          t.split("/").filter(function (t) {
                              return 0 < t.length;
                          })
                      );
                  }),
                  Mr);
          function Mr() {
              return (null !== Ar && Ar.apply(this, arguments)) || this;
          }
          function Ur(t, e, n) {
              void 0 === e ? (e = 0) : e > t.length && Js(), void 0 === n ? (n = t.length - e) : n > t.length - e && Js(), (this.segments = t), (this.offset = e), (this.F = n);
          }
          function jr(t) {
              this.timestamp = t;
          }
          function qr(t, e) {
              if (((this.seconds = t), (this.nanoseconds = e) < 0)) throw new kr(Sr.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
              if (1e9 <= e) throw new kr(Sr.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
              if (t < -62135596800) throw new kr(Sr.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
              if (253402300800 <= t) throw new kr(Sr.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
          }
          function Fr(t, e) {
              (this.P = t), (this.V = e);
          }
          function Br(t, e) {
              (this.P = t), (this.V = e), (this.type = "FirstParty"), (this.user = Tr.h);
          }
          function Gr(t) {
              var e = this;
              (this.I = null),
                  (this.currentUser = Tr.UNAUTHENTICATED),
                  (this.R = !1),
                  (this.A = 0),
                  (this.u = null),
                  (this.forceRefresh = !1),
                  (this.I = function () {
                      e.A++, (e.currentUser = e.m()), (e.R = !0), e.u && e.u(e.currentUser);
                  }),
                  (this.A = 0),
                  (this.auth = t.getImmediate({ optional: !0 })),
                  this.auth
                      ? this.auth.addAuthTokenListener(this.I)
                      : (this.I(null),
                        t.get().then(
                            function (t) {
                                (e.auth = t), e.I && e.auth.addAuthTokenListener(e.I);
                            },
                            function () {}
                        ));
          }
          function zr() {
              this.u = null;
          }
          function Wr(t, e) {
              var n = this;
              return (
                  ((n = _r.call(this, e) || this).code = t),
                  (n.message = e),
                  (n.name = "FirebaseError"),
                  (n.toString = function () {
                      return n.name + ": [code=" + n.code + "]: " + n.message;
                  }),
                  n
              );
          }
          Cr.G = new Cr([]);
          var Qr,
              Kr = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
              Hr =
                  (n(Yr, (Qr = Lr)),
                  (Yr.prototype.k = function (t, e, n) {
                      return new Yr(t, e, n);
                  }),
                  (Yr.H = function (t) {
                      return Kr.test(t);
                  }),
                  (Yr.prototype.j = function () {
                      return this.W()
                          .map(function (t) {
                              return (t = t.replace("\\", "\\\\").replace("`", "\\`")), Yr.H(t) || (t = "`" + t + "`"), t;
                          })
                          .join(".");
                  }),
                  (Yr.prototype.toString = function () {
                      return this.j();
                  }),
                  (Yr.prototype.Y = function () {
                      return 1 === this.length && "__name__" === this.get(0);
                  }),
                  (Yr.J = function () {
                      return new Yr(["__name__"]);
                  }),
                  (Yr.X = function (t) {
                      for (
                          var e = [],
                              n = "",
                              r = 0,
                              i = function () {
                                  if (0 === n.length) throw new kr(Sr.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
                                  e.push(n), (n = "");
                              },
                              o = !1;
                          r < t.length;

                      ) {
                          var s = t[r];
                          if ("\\" === s) {
                              if (r + 1 === t.length) throw new kr(Sr.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                              var u = t[r + 1];
                              if ("\\" !== u && "." !== u && "`" !== u) throw new kr(Sr.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                              (n += u), (r += 2);
                          } else "`" === s ? (o = !o) : "." !== s || o ? (n += s) : i(), r++;
                      }
                      if ((i(), o)) throw new kr(Sr.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
                      return new Yr(e);
                  }),
                  Yr);
          function Yr() {
              return (null !== Qr && Qr.apply(this, arguments)) || this;
          }
          Hr.G = new Hr([]);
          var Xr =
              (($r.Z = function (t) {
                  return new $r(Cr.K(t).$(5));
              }),
              ($r.prototype.tt = function (t) {
                  return 2 <= this.path.length && this.path.get(this.path.length - 2) === t;
              }),
              ($r.prototype.isEqual = function (t) {
                  return null !== t && 0 === Cr.N(this.path, t.path);
              }),
              ($r.prototype.toString = function () {
                  return this.path.toString();
              }),
              ($r.N = function (t, e) {
                  return Cr.N(t.path, e.path);
              }),
              ($r.et = function (t) {
                  return t.length % 2 == 0;
              }),
              ($r.st = function (t) {
                  return new $r(new Cr(t.slice()));
              }),
              $r);
          function $r(t) {
              this.path = t;
          }
          function Jr(t) {
              var e = 0;
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
              return e;
          }
          function Zr(t, e) {
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
          }
          function ti(t) {
              for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
              return !0;
          }
          Xr.EMPTY = new Xr(new Cr([]));
          var ei =
              ((ni.fromBase64String = function (t) {
                  return new ni(zs.nt().atob(t));
              }),
              (ni.fromUint8Array = function (t) {
                  return new ni(
                      (function (t) {
                          for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
                          return e;
                      })(t)
                  );
              }),
              (ni.prototype.toBase64 = function () {
                  return zs.nt().btoa(this.it);
              }),
              (ni.prototype.toUint8Array = function () {
                  return (function (t) {
                      for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
                      return e;
                  })(this.it);
              }),
              (ni.prototype.rt = function () {
                  return 2 * this.it.length;
              }),
              (ni.prototype.S = function (t) {
                  return ru(this.it, t.it);
              }),
              (ni.prototype.isEqual = function (t) {
                  return this.it === t.it;
              }),
              ni);
          function ni(t) {
              this.it = t;
          }
          function ri(t) {
              return null == t;
          }
          function ii(t) {
              return -0 === t && 1 / t == -1 / 0;
          }
          function oi(t) {
              return "number" == typeof t && Number.isInteger(t) && !ii(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
          }
          function si(t) {
              var e, n;
              return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
          }
          function ui(t) {
              var e = yi(t.mapValue.fields.__local_write_time__.timestampValue);
              return new Pr(e.seconds, e.nanos);
          }
          ei.ht = new ei("");
          var ai = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
          function hi(t) {
              return "nullValue" in t
                  ? 0
                  : "booleanValue" in t
                  ? 1
                  : "integerValue" in t || "doubleValue" in t
                  ? 2
                  : "timestampValue" in t
                  ? 3
                  : "stringValue" in t
                  ? 5
                  : "bytesValue" in t
                  ? 6
                  : "referenceValue" in t
                  ? 7
                  : "geoPointValue" in t
                  ? 8
                  : "arrayValue" in t
                  ? 9
                  : "mapValue" in t
                  ? si(t)
                      ? 4
                      : 10
                  : Js();
          }
          function ci(i, t) {
              var e,
                  n,
                  r,
                  o = hi(i);
              if (o !== hi(t)) return !1;
              switch (o) {
                  case 0:
                      return !0;
                  case 1:
                      return i.booleanValue === t.booleanValue;
                  case 4:
                      return ui(i).isEqual(ui(t));
                  case 3:
                      return (function (t) {
                          if ("string" == typeof i.timestampValue && "string" == typeof t.timestampValue && i.timestampValue.length === t.timestampValue.length) return i.timestampValue === t.timestampValue;
                          var e = yi(i.timestampValue),
                              n = yi(t.timestampValue);
                          return e.seconds === n.seconds && e.nanos === n.nanos;
                      })(t);
                  case 5:
                      return i.stringValue === t.stringValue;
                  case 6:
                      return (r = t), gi(i.bytesValue).isEqual(gi(r.bytesValue));
                  case 7:
                      return i.referenceValue === t.referenceValue;
                  case 8:
                      return (n = t), vi((e = i).geoPointValue.latitude) === vi(n.geoPointValue.latitude) && vi(e.geoPointValue.longitude) === vi(n.geoPointValue.longitude);
                  case 2:
                      return (function (t, e) {
                          if ("integerValue" in t && "integerValue" in e) return vi(t.integerValue) === vi(e.integerValue);
                          if ("doubleValue" in t && "doubleValue" in e) {
                              var n = vi(t.doubleValue),
                                  r = vi(e.doubleValue);
                              return n === r ? ii(n) === ii(r) : isNaN(n) && isNaN(r);
                          }
                          return !1;
                      })(i, t);
                  case 9:
                      return iu(i.arrayValue.values || [], t.arrayValue.values || [], ci);
                  case 10:
                      return (function (t) {
                          var e = i.mapValue.fields || {},
                              n = t.mapValue.fields || {};
                          if (Jr(e) !== Jr(n)) return !1;
                          for (var r in e) if (e.hasOwnProperty(r) && (void 0 === n[r] || !ci(e[r], n[r]))) return !1;
                          return !0;
                      })(t);
                  default:
                      return Js();
              }
          }
          function fi(t, e) {
              return (
                  void 0 !==
                  (t.values || []).find(function (t) {
                      return ci(t, e);
                  })
              );
          }
          function li(t, e) {
              var n,
                  r,
                  i,
                  o,
                  s,
                  u,
                  a,
                  h,
                  c,
                  f,
                  l = hi(t),
                  p = hi(e);
              if (l !== p) return ru(l, p);
              switch (l) {
                  case 0:
                      return 0;
                  case 1:
                      return ru(t.booleanValue, e.booleanValue);
                  case 2:
                      return (h = e), (c = vi(t.integerValue || t.doubleValue)), (f = vi(h.integerValue || h.doubleValue)), c < f ? -1 : f < c ? 1 : c === f ? 0 : isNaN(c) ? (isNaN(f) ? 0 : -1) : 1;
                  case 3:
                      return pi(t.timestampValue, e.timestampValue);
                  case 4:
                      return pi(ui(t), ui(e));
                  case 5:
                      return ru(t.stringValue, e.stringValue);
                  case 6:
                      return (o = t.bytesValue), (s = e.bytesValue), (u = gi(o)), (a = gi(s)), u.S(a);
                  case 7:
                      return (function (t, e) {
                          for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
                              var o = ru(n[i], r[i]);
                              if (0 !== o) return o;
                          }
                          return ru(n.length, r.length);
                      })(t.referenceValue, e.referenceValue);
                  case 8:
                      return (n = t.geoPointValue), (r = e.geoPointValue), 0 !== (i = ru(vi(n.latitude), vi(r.latitude))) ? i : ru(vi(n.longitude), vi(r.longitude));
                  case 9:
                      return (function (t, e) {
                          for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
                              var o = li(n[i], r[i]);
                              if (o) return o;
                          }
                          return ru(n.length, r.length);
                      })(t.arrayValue, e.arrayValue);
                  case 10:
                      return (function (t, e) {
                          var n = t.fields || {},
                              r = Object.keys(n),
                              i = e.fields || {},
                              o = Object.keys(i);
                          r.sort(), o.sort();
                          for (var s = 0; s < r.length && s < o.length; ++s) {
                              var u = ru(r[s], o[s]);
                              if (0 !== u) return u;
                              var a = li(n[r[s]], i[o[s]]);
                              if (0 !== a) return a;
                          }
                          return ru(r.length, o.length);
                      })(t.mapValue, e.mapValue);
                  default:
                      throw Js();
              }
          }
          function pi(t, e) {
              if ("string" == typeof t && "string" == typeof e && t.length === e.length) return ru(t, e);
              var n = yi(t),
                  r = yi(e),
                  i = ru(n.seconds, r.seconds);
              return 0 !== i ? i : ru(n.nanos, r.nanos);
          }
          function di(t) {
              return (function s(i) {
                  return "nullValue" in i
                      ? "null"
                      : "booleanValue" in i
                      ? "" + i.booleanValue
                      : "integerValue" in i
                      ? "" + i.integerValue
                      : "doubleValue" in i
                      ? "" + i.doubleValue
                      : "timestampValue" in i
                      ? "time(" + (t = yi(i.timestampValue)).seconds + "," + t.nanos + ")"
                      : "stringValue" in i
                      ? i.stringValue
                      : "bytesValue" in i
                      ? gi(i.bytesValue).toBase64()
                      : "referenceValue" in i
                      ? ((n = i.referenceValue), Xr.Z(n).toString())
                      : "geoPointValue" in i
                      ? "geo(" + (e = i.geoPointValue).latitude + "," + e.longitude + ")"
                      : "arrayValue" in i
                      ? (function () {
                            for (var t = "[", e = !0, n = 0, r = i.arrayValue.values || []; n < r.length; n++) {
                                e ? (e = !1) : (t += ","), (t += s(r[n]));
                            }
                            return t + "]";
                        })()
                      : "mapValue" in i
                      ? (function (t) {
                            for (var e = "{", n = !0, r = 0, i = Object.keys(t.fields || {}).sort(); r < i.length; r++) {
                                var o = i[r];
                                n ? (n = !1) : (e += ","), (e += o + ":" + s(t.fields[o]));
                            }
                            return e + "}";
                        })(i.mapValue)
                      : Js();
                  var t, e, n;
              })(t);
          }
          function yi(t) {
              if ((Zs(!!t), "string" != typeof t)) return { seconds: vi(t.seconds), nanos: vi(t.nanos) };
              var e = 0,
                  n = ai.exec(t);
              if ((Zs(!!n), n[1])) {
                  var r = n[1];
                  (r = (r + "000000000").substr(0, 9)), (e = Number(r));
              }
              var i = new Date(t);
              return { seconds: Math.floor(i.getTime() / 1e3), nanos: e };
          }
          function vi(t) {
              return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
          }
          function gi(t) {
              return "string" == typeof t ? ei.fromBase64String(t) : ei.fromUint8Array(t);
          }
          function mi(t, e) {
              return { referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.j() };
          }
          function wi(t) {
              return t && "integerValue" in t;
          }
          function bi(t) {
              return !!t && "arrayValue" in t;
          }
          function Ei(t) {
              return t && "nullValue" in t;
          }
          function Ti(t) {
              return t && "doubleValue" in t && isNaN(Number(t.doubleValue));
          }
          function Ii(t) {
              return t && "mapValue" in t;
          }
          var Ni =
              ((Ai.prototype.ot = function (t, e) {
                  return (n = { fields: { __type__: { stringValue: "server_timestamp" }, __local_write_time__: { timestampValue: { seconds: e.seconds, nanos: e.nanoseconds } } } }), t && (n.fields.__previous_value__ = t), { mapValue: n };
                  var n;
              }),
              (Ai.prototype.at = function (t, e) {
                  return e;
              }),
              (Ai.prototype.ut = function (t) {
                  return null;
              }),
              (Ai.prototype.isEqual = function (t) {
                  return t instanceof Ai;
              }),
              Ai);
          function Ai() {}
          Ni.instance = new Ni();
          var _i =
                  ((Oi.prototype.ot = function (t, e) {
                      return this.apply(t);
                  }),
                  (Oi.prototype.at = function (t, e) {
                      return this.apply(t);
                  }),
                  (Oi.prototype.apply = function (t) {
                      for (
                          var n = Ri(t),
                              e = function (e) {
                                  n.some(function (t) {
                                      return ci(t, e);
                                  }) || n.push(e);
                              },
                              r = 0,
                              i = this.elements;
                          r < i.length;
                          r++
                      )
                          e(i[r]);
                      return { arrayValue: { values: n } };
                  }),
                  (Oi.prototype.ut = function (t) {
                      return null;
                  }),
                  (Oi.prototype.isEqual = function (t) {
                      return t instanceof Oi && iu(this.elements, t.elements, ci);
                  }),
                  Oi),
              Si =
                  ((xi.prototype.ot = function (t, e) {
                      return this.apply(t);
                  }),
                  (xi.prototype.at = function (t, e) {
                      return this.apply(t);
                  }),
                  (xi.prototype.apply = function (t) {
                      for (
                          var n = Ri(t),
                              e = function (e) {
                                  n = n.filter(function (t) {
                                      return !ci(t, e);
                                  });
                              },
                              r = 0,
                              i = this.elements;
                          r < i.length;
                          r++
                      )
                          e(i[r]);
                      return { arrayValue: { values: n } };
                  }),
                  (xi.prototype.ut = function (t) {
                      return null;
                  }),
                  (xi.prototype.isEqual = function (t) {
                      return t instanceof xi && iu(this.elements, t.elements, ci);
                  }),
                  xi),
              ki =
                  ((Di.prototype.ot = function (t, e) {
                      var n = this.ut(t),
                          r = this.asNumber(n) + this.asNumber(this.ct);
                      return wi(n) && wi(this.ct) ? this.serializer._t(r) : this.serializer.lt(r);
                  }),
                  (Di.prototype.at = function (t, e) {
                      return e;
                  }),
                  (Di.prototype.ut = function (t) {
                      return wi((e = t)) || (e && "doubleValue" in e) ? t : { integerValue: 0 };
                      var e;
                  }),
                  (Di.prototype.isEqual = function (t) {
                      return t instanceof Di && ci(this.ct, t.ct);
                  }),
                  (Di.prototype.asNumber = function (t) {
                      return vi(t.integerValue || t.doubleValue);
                  }),
                  Di);
          function Di(t, e) {
              (this.serializer = t), (this.ct = e);
          }
          function xi(t) {
              this.elements = t;
          }
          function Oi(t) {
              this.elements = t;
          }
          function Ri(t) {
              return bi(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
          }
          function Pi(t, e) {
              (this.version = t), (this.transformResults = e);
          }
          var Vi,
              Li,
              Ci,
              Mi,
              Ui,
              ji =
                  ((so.prototype.dt = function (t) {
                      for (var e = 0, n = this.fields; e < n.length; e++) if (n[e].q(t)) return !0;
                      return !1;
                  }),
                  (so.prototype.isEqual = function (t) {
                      return iu(this.fields, t.fields, function (t, e) {
                          return t.isEqual(e);
                      });
                  }),
                  so),
              qi =
                  ((oo.prototype.isEqual = function (t) {
                      return this.field.isEqual(t.field) && this.transform.isEqual(t.transform);
                  }),
                  oo),
              Fi =
                  ((io.ft = function () {
                      return new io();
                  }),
                  (io.exists = function (t) {
                      return new io(void 0, t);
                  }),
                  (io.updateTime = function (t) {
                      return new io(t);
                  }),
                  Object.defineProperty(io.prototype, "Tt", {
                      get: function () {
                          return void 0 === this.updateTime && void 0 === this.exists;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (io.prototype.Et = function (t) {
                      return void 0 !== this.updateTime ? t instanceof To && t.version.isEqual(this.updateTime) : void 0 === this.exists || this.exists === t instanceof To;
                  }),
                  (io.prototype.isEqual = function (t) {
                      return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
                  }),
                  io),
              Bi =
                  ((ro.prototype.It = function (t) {}),
                  (ro.wt = function (t) {
                      return t instanceof To ? t.version : Vr.min();
                  }),
                  ro),
              Gi =
                  (n(no, (Ui = Bi)),
                  (no.prototype.at = function (t, e) {
                      this.It(t);
                      var n = e.version;
                      return new To(this.key, n, this.value, { hasCommittedMutations: !0 });
                  }),
                  (no.prototype.ot = function (t, e, n) {
                      if ((this.It(t), !this.Rt.Et(t))) return t;
                      var r = Bi.wt(t);
                      return new To(this.key, r, this.value, { At: !0 });
                  }),
                  (no.prototype.Pt = function (t) {
                      return null;
                  }),
                  (no.prototype.isEqual = function (t) {
                      return t instanceof no && this.key.isEqual(t.key) && this.value.isEqual(t.value) && this.Rt.isEqual(t.Rt);
                  }),
                  no),
              zi =
                  (n(eo, (Mi = Bi)),
                  (eo.prototype.at = function (t, e) {
                      if ((this.It(t), !this.Rt.Et(t))) return new No(this.key, e.version);
                      var n = this.gt(t);
                      return new To(this.key, e.version, n, { hasCommittedMutations: !0 });
                  }),
                  (eo.prototype.ot = function (t, e, n) {
                      if ((this.It(t), !this.Rt.Et(t))) return t;
                      var r = Bi.wt(t),
                          i = this.gt(t);
                      return new To(this.key, r, i, { At: !0 });
                  }),
                  (eo.prototype.Pt = function (t) {
                      return null;
                  }),
                  (eo.prototype.isEqual = function (t) {
                      return t instanceof eo && this.key.isEqual(t.key) && this.Vt.isEqual(t.Vt) && this.Rt.isEqual(t.Rt);
                  }),
                  (eo.prototype.gt = function (t) {
                      var e;
                      return (e = t instanceof To ? t.data() : Hi.empty()), this.pt(e);
                  }),
                  (eo.prototype.pt = function (t) {
                      var n = this,
                          r = new Yi(t);
                      return (
                          this.Vt.fields.forEach(function (t) {
                              if (!t.B()) {
                                  var e = n.data.field(t);
                                  null !== e ? r.set(t, e) : r.delete(t);
                              }
                          }),
                          r.yt()
                      );
                  }),
                  eo),
              Wi =
                  (n(to, (Ci = Bi)),
                  (to.prototype.at = function (t, e) {
                      if ((this.It(t), Zs(null != e.transformResults), !this.Rt.Et(t))) return new No(this.key, e.version);
                      var n = this.bt(t),
                          r = this.vt(t, e.transformResults),
                          i = e.version,
                          o = this.St(n.data(), r);
                      return new To(this.key, i, o, { hasCommittedMutations: !0 });
                  }),
                  (to.prototype.ot = function (t, e, n) {
                      if ((this.It(t), !this.Rt.Et(t))) return t;
                      var r = this.bt(t),
                          i = this.Dt(n, t, e),
                          o = this.St(r.data(), i);
                      return new To(this.key, r.version, o, { At: !0 });
                  }),
                  (to.prototype.Pt = function (t) {
                      for (var e = null, n = 0, r = this.fieldTransforms; n < r.length; n++) {
                          var i = r[n],
                              o = t instanceof To ? t.field(i.field) : void 0,
                              s = i.transform.ut(o || null);
                          null != s && (e = null == e ? new Yi().set(i.field, s) : e.set(i.field, s));
                      }
                      return e ? e.yt() : null;
                  }),
                  (to.prototype.isEqual = function (t) {
                      return (
                          t instanceof to &&
                          this.key.isEqual(t.key) &&
                          iu(this.fieldTransforms, t.fieldTransforms, function (t, e) {
                              return t.isEqual(e);
                          }) &&
                          this.Rt.isEqual(t.Rt)
                      );
                  }),
                  (to.prototype.bt = function (t) {
                      return t;
                  }),
                  (to.prototype.vt = function (t, e) {
                      var n = [];
                      Zs(this.fieldTransforms.length === e.length);
                      for (var r = 0; r < e.length; r++) {
                          var i = this.fieldTransforms[r],
                              o = i.transform,
                              s = null;
                          t instanceof To && (s = t.field(i.field)), n.push(o.at(s, e[r]));
                      }
                      return n;
                  }),
                  (to.prototype.Dt = function (t, e, n) {
                      for (var r = [], i = 0, o = this.fieldTransforms; i < o.length; i++) {
                          var s = o[i],
                              u = s.transform,
                              a = null;
                          e instanceof To && (a = e.field(s.field)), null === a && n instanceof To && (a = n.field(s.field)), r.push(u.ot(a, t));
                      }
                      return r;
                  }),
                  (to.prototype.St = function (t, e) {
                      for (var n = new Yi(t), r = 0; r < this.fieldTransforms.length; r++) {
                          var i = this.fieldTransforms[r].field;
                          n.set(i, e[r]);
                      }
                      return n.yt();
                  }),
                  to),
              Qi =
                  (n(Zi, (Li = Bi)),
                  (Zi.prototype.at = function (t, e) {
                      return this.It(t), new Io(this.key, e.version, { hasCommittedMutations: !0 });
                  }),
                  (Zi.prototype.ot = function (t, e, n) {
                      return this.It(t), this.Rt.Et(t) ? new Io(this.key, Vr.min()) : t;
                  }),
                  (Zi.prototype.Pt = function (t) {
                      return null;
                  }),
                  (Zi.prototype.isEqual = function (t) {
                      return t instanceof Zi && this.key.isEqual(t.key) && this.Rt.isEqual(t.Rt);
                  }),
                  Zi),
              Ki =
                  (n(Ji, (Vi = Bi)),
                  (Ji.prototype.at = function (t, e) {
                      Js();
                  }),
                  (Ji.prototype.ot = function (t, e, n) {
                      Js();
                  }),
                  (Ji.prototype.Pt = function (t) {
                      Js();
                  }),
                  (Ji.prototype.isEqual = function (t) {
                      return t instanceof Ji && this.key.isEqual(t.key) && this.Rt.isEqual(t.Rt);
                  }),
                  Ji),
              Hi =
                  (($i.empty = function () {
                      return new $i({ mapValue: {} });
                  }),
                  ($i.prototype.field = function (t) {
                      if (t.B()) return this.proto;
                      for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
                          if (!e.mapValue.fields) return null;
                          if (!Ii((e = e.mapValue.fields[t.get(n)]))) return null;
                      }
                      return (e = (e.mapValue.fields || {})[t.O()]) || null;
                  }),
                  ($i.prototype.isEqual = function (t) {
                      return ci(this.proto, t.proto);
                  }),
                  $i),
              Yi =
                  ((Xi.prototype.set = function (t, e) {
                      return this.Nt(t, e), this;
                  }),
                  (Xi.prototype.delete = function (t) {
                      return this.Nt(t, null), this;
                  }),
                  (Xi.prototype.Nt = function (t, e) {
                      for (var n = this.Ft, r = 0; r < t.length - 1; ++r) {
                          var i = t.get(r),
                              o = n.get(i);
                          o instanceof Map || ((o = o && 10 === hi(o) ? new Map(Object.entries(o.mapValue.fields || {})) : new Map()), n.set(i, o)), (n = o);
                      }
                      n.set(t.O(), e);
                  }),
                  (Xi.prototype.yt = function () {
                      var t = this.kt(Hr.G, this.Ft);
                      return null != t ? new Hi(t) : this.Ct;
                  }),
                  (Xi.prototype.kt = function (r, t) {
                      var i = this,
                          o = !1,
                          e = this.Ct.field(r),
                          s = Ii(e) ? Object.assign({}, e.mapValue.fields) : {};
                      return (
                          t.forEach(function (t, e) {
                              if (t instanceof Map) {
                                  var n = i.kt(r.child(e), t);
                                  null != n && ((s[e] = n), (o = !0));
                              } else null !== t ? ((s[e] = t), (o = !0)) : s.hasOwnProperty(e) && (delete s[e], (o = !0));
                          }),
                          o ? { mapValue: { fields: s } } : null
                      );
                  }),
                  Xi);
          function Xi(t) {
              void 0 === t && (t = Hi.empty()), (this.Ct = t), (this.Ft = new Map());
          }
          function $i(t) {
              this.proto = t;
          }
          function Ji(t, e) {
              var n = this;
              return ((n = Vi.call(this) || this).key = t), (n.Rt = e), (n.type = 4), n;
          }
          function Zi(t, e) {
              var n = this;
              return ((n = Li.call(this) || this).key = t), (n.Rt = e), (n.type = 3), n;
          }
          function to(t, e) {
              var n = this;
              return ((n = Ci.call(this) || this).key = t), (n.fieldTransforms = e), (n.type = 2), (n.Rt = Fi.exists(!0)), n;
          }
          function eo(t, e, n, r) {
              var i = this;
              return ((i = Mi.call(this) || this).key = t), (i.data = e), (i.Vt = n), (i.Rt = r), (i.type = 1), i;
          }
          function no(t, e, n) {
              var r = this;
              return ((r = Ui.call(this) || this).key = t), (r.value = e), (r.Rt = n), (r.type = 0), r;
          }
          function ro() {}
          function io(t, e) {
              (this.updateTime = t), (this.exists = e);
          }
          function oo(t, e) {
              (this.field = t), (this.transform = e);
          }
          function so(t) {
              (this.fields = t).sort(Hr.N);
          }
          function uo(t) {
              var u = [];
              return (
                  Zr(t.fields || {}, function (t, e) {
                      var n = new Hr([t]);
                      if (Ii(e)) {
                          var r = uo(e.mapValue).fields;
                          if (0 === r.length) u.push(n);
                          else
                              for (var i = 0, o = r; i < o.length; i++) {
                                  var s = o[i];
                                  u.push(n.child(s));
                              }
                      } else u.push(n);
                  }),
                  new ji(u)
              );
          }
          function ao(t, e) {
              (this.key = t), (this.version = e);
          }
          function ho(t) {
              this.count = t;
          }
          var co,
              fo,
              lo,
              po,
              yo,
              vo,
              go,
              mo,
              wo,
              bo,
              Eo,
              To =
                  (n(Yo, (Eo = ao)),
                  (Yo.prototype.field = function (t) {
                      return this.$t.field(t);
                  }),
                  (Yo.prototype.data = function () {
                      return this.$t;
                  }),
                  (Yo.prototype.Mt = function () {
                      return this.$t.proto;
                  }),
                  (Yo.prototype.isEqual = function (t) {
                      return t instanceof Yo && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.At === t.At && this.hasCommittedMutations === t.hasCommittedMutations && this.$t.isEqual(t.$t);
                  }),
                  (Yo.prototype.toString = function () {
                      return "Document(" + this.key + ", " + this.version + ", " + this.$t.toString() + ", {hasLocalMutations: " + this.At + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
                  }),
                  Object.defineProperty(Yo.prototype, "hasPendingWrites", {
                      get: function () {
                          return this.At || this.hasCommittedMutations;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Yo),
              Io =
                  (n(Ho, (bo = ao)),
                  (Ho.prototype.toString = function () {
                      return "NoDocument(" + this.key + ", " + this.version + ")";
                  }),
                  Object.defineProperty(Ho.prototype, "hasPendingWrites", {
                      get: function () {
                          return this.hasCommittedMutations;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (Ho.prototype.isEqual = function (t) {
                      return t instanceof Ho && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
                  }),
                  Ho),
              No =
                  (n(Ko, (wo = ao)),
                  (Ko.prototype.toString = function () {
                      return "UnknownDocument(" + this.key + ", " + this.version + ")";
                  }),
                  Object.defineProperty(Ko.prototype, "hasPendingWrites", {
                      get: function () {
                          return !0;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (Ko.prototype.isEqual = function (t) {
                      return t instanceof Ko && t.version.isEqual(this.version) && t.key.isEqual(this.key);
                  }),
                  Ko),
              Ao =
                  ((Qo.prototype.canonicalId = function () {
                      if (null === this.Lt) {
                          var t = this.path.j();
                          null !== this.collectionGroup && (t += "|cg:" + this.collectionGroup),
                              (t += "|f:"),
                              (t += this.filters
                                  .map(function (t) {
                                      return t.canonicalId();
                                  })
                                  .join(",")),
                              (t += "|ob:"),
                              (t += this.orderBy
                                  .map(function (t) {
                                      return t.canonicalId();
                                  })
                                  .join(",")),
                              ri(this.limit) || ((t += "|l:"), (t += this.limit)),
                              this.startAt && ((t += "|lb:"), (t += this.startAt.canonicalId())),
                              this.endAt && ((t += "|ub:"), (t += this.endAt.canonicalId())),
                              (this.Lt = t);
                      }
                      return this.Lt;
                  }),
                  (Qo.prototype.toString = function () {
                      var t = this.path.j();
                      return (
                          null !== this.collectionGroup && (t += " collectionGroup=" + this.collectionGroup),
                          0 < this.filters.length && (t += ", filters: [" + this.filters.join(", ") + "]"),
                          ri(this.limit) || (t += ", limit: " + this.limit),
                          0 < this.orderBy.length && (t += ", orderBy: [" + this.orderBy.join(", ") + "]"),
                          this.startAt && (t += ", startAt: " + this.startAt.canonicalId()),
                          this.endAt && (t += ", endAt: " + this.endAt.canonicalId()),
                          "Target(" + t + ")"
                      );
                  }),
                  (Qo.prototype.isEqual = function (t) {
                      if (this.limit !== t.limit) return !1;
                      if (this.orderBy.length !== t.orderBy.length) return !1;
                      for (var e = 0; e < this.orderBy.length; e++) if (!this.orderBy[e].isEqual(t.orderBy[e])) return !1;
                      if (this.filters.length !== t.filters.length) return !1;
                      for (var n = 0; n < this.filters.length; n++) if (!this.filters[n].isEqual(t.filters[n])) return !1;
                      return (
                          this.collectionGroup === t.collectionGroup &&
                          !!this.path.isEqual(t.path) &&
                          !!(null !== this.startAt ? this.startAt.isEqual(t.startAt) : null === t.startAt) &&
                          (null !== this.endAt ? this.endAt.isEqual(t.endAt) : null === t.endAt)
                      );
                  }),
                  (Qo.prototype.Ot = function () {
                      return Xr.et(this.path) && null === this.collectionGroup && 0 === this.filters.length;
                  }),
                  Qo),
              _o =
                  ((Wo.Wt = function (t) {
                      return new Wo(t);
                  }),
                  Object.defineProperty(Wo.prototype, "orderBy", {
                      get: function () {
                          if (null === this.qt) {
                              this.qt = [];
                              var t = this.jt(),
                                  e = this.Kt();
                              if (null !== t && null === e) t.Y() || this.qt.push(new Vo(t)), this.qt.push(new Vo(Hr.J(), "asc"));
                              else {
                                  for (var n = !1, r = 0, i = this.xt; r < i.length; r++) {
                                      var o = i[r];
                                      this.qt.push(o), o.field.Y() && (n = !0);
                                  }
                                  if (!n) {
                                      var s = 0 < this.xt.length ? this.xt[this.xt.length - 1].dir : "asc";
                                      this.qt.push(new Vo(Hr.J(), s));
                                  }
                              }
                          }
                          return this.qt;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (Wo.prototype.Gt = function (t) {
                      var e = this.filters.concat([t]);
                      return new Wo(this.path, this.collectionGroup, this.xt.slice(), e, this.limit, this.Bt, this.startAt, this.endAt);
                  }),
                  (Wo.prototype.zt = function (t) {
                      var e = this.xt.concat([t]);
                      return new Wo(this.path, this.collectionGroup, e, this.filters.slice(), this.limit, this.Bt, this.startAt, this.endAt);
                  }),
                  (Wo.prototype.Ht = function (t) {
                      return new Wo(this.path, this.collectionGroup, this.xt.slice(), this.filters.slice(), t, "F", this.startAt, this.endAt);
                  }),
                  (Wo.prototype.Yt = function (t) {
                      return new Wo(this.path, this.collectionGroup, this.xt.slice(), this.filters.slice(), t, "L", this.startAt, this.endAt);
                  }),
                  (Wo.prototype.Jt = function (t) {
                      return new Wo(this.path, this.collectionGroup, this.xt.slice(), this.filters.slice(), this.limit, this.Bt, t, this.endAt);
                  }),
                  (Wo.prototype.Xt = function (t) {
                      return new Wo(this.path, this.collectionGroup, this.xt.slice(), this.filters.slice(), this.limit, this.Bt, this.startAt, t);
                  }),
                  (Wo.prototype.Zt = function (t) {
                      return new Wo(t, null, this.xt.slice(), this.filters.slice(), this.limit, this.Bt, this.startAt, this.endAt);
                  }),
                  (Wo.prototype.te = function () {
                      return 0 === this.filters.length && null === this.limit && null == this.startAt && null == this.endAt && (0 === this.xt.length || (1 === this.xt.length && this.xt[0].field.Y()));
                  }),
                  (Wo.prototype.canonicalId = function () {
                      return this.ee().canonicalId() + "|lt:" + this.Bt;
                  }),
                  (Wo.prototype.toString = function () {
                      return "Query(target=" + this.ee().toString() + "; limitType=" + this.Bt + ")";
                  }),
                  (Wo.prototype.isEqual = function (t) {
                      return this.ee().isEqual(t.ee()) && this.Bt === t.Bt;
                  }),
                  (Wo.prototype.se = function (t, e) {
                      for (var n = !1, r = 0, i = this.orderBy; r < i.length; r++) {
                          var o = i[r],
                              s = o.compare(t, e);
                          if (0 !== s) return s;
                          n = n || o.field.Y();
                      }
                      return 0;
                  }),
                  (Wo.prototype.matches = function (t) {
                      return this.ie(t) && this.ne(t) && this.re(t) && this.he(t);
                  }),
                  (Wo.prototype.oe = function () {
                      return !ri(this.limit) && "F" === this.Bt;
                  }),
                  (Wo.prototype.ae = function () {
                      return !ri(this.limit) && "L" === this.Bt;
                  }),
                  (Wo.prototype.Kt = function () {
                      return 0 < this.xt.length ? this.xt[0].field : null;
                  }),
                  (Wo.prototype.jt = function () {
                      for (var t = 0, e = this.filters; t < e.length; t++) {
                          var n = e[t];
                          if (n instanceof So && n.ue()) return n.field;
                      }
                      return null;
                  }),
                  (Wo.prototype.ce = function (t) {
                      for (var e = 0, n = this.filters; e < n.length; e++) {
                          var r = n[e];
                          if (r instanceof So && 0 <= t.indexOf(r.op)) return r.op;
                      }
                      return null;
                  }),
                  (Wo.prototype.Ot = function () {
                      return this.ee().Ot();
                  }),
                  (Wo.prototype._e = function () {
                      return null !== this.collectionGroup;
                  }),
                  (Wo.prototype.ee = function () {
                      if (!this.Ut)
                          if ("F" === this.Bt) this.Ut = new Ao(this.path, this.collectionGroup, this.orderBy, this.filters, this.limit, this.startAt, this.endAt);
                          else {
                              for (var t = [], e = 0, n = this.orderBy; e < n.length; e++) {
                                  var r = n[e],
                                      i = "desc" === r.dir ? "asc" : "desc";
                                  t.push(new Vo(r.field, i));
                              }
                              var o = this.endAt ? new Po(this.endAt.position, !this.endAt.before) : null,
                                  s = this.startAt ? new Po(this.startAt.position, !this.startAt.before) : null;
                              this.Ut = new Ao(this.path, this.collectionGroup, t, this.filters, this.limit, o, s);
                          }
                      return this.Ut;
                  }),
                  (Wo.prototype.ie = function (t) {
                      var e = t.key.path;
                      return null !== this.collectionGroup ? t.key.tt(this.collectionGroup) && this.path.q(e) : Xr.et(this.path) ? this.path.isEqual(e) : this.path.U(e);
                  }),
                  (Wo.prototype.ne = function (t) {
                      for (var e = 0, n = this.xt; e < n.length; e++) {
                          var r = n[e];
                          if (!r.field.Y() && null === t.field(r.field)) return !1;
                      }
                      return !0;
                  }),
                  (Wo.prototype.re = function (t) {
                      for (var e = 0, n = this.filters; e < n.length; e++) if (!n[e].matches(t)) return !1;
                      return !0;
                  }),
                  (Wo.prototype.he = function (t) {
                      return !((this.startAt && !this.startAt.le(this.orderBy, t)) || (this.endAt && this.endAt.le(this.orderBy, t)));
                  }),
                  (Wo.prototype.Qt = function (t) {}),
                  Wo),
              So =
                  (n(zo, (mo = function () {})),
                  (zo.create = function (t, e, n) {
                      if (t.Y()) return "in" === e ? new Do(t, n) : new ko(t, e, n);
                      if (Ei(n)) {
                          if ("==" !== e) throw new kr(Sr.INVALID_ARGUMENT, "Invalid query. Null supports only equality comparisons.");
                          return new zo(t, e, n);
                      }
                      if (Ti(n)) {
                          if ("==" !== e) throw new kr(Sr.INVALID_ARGUMENT, "Invalid query. NaN supports only equality comparisons.");
                          return new zo(t, e, n);
                      }
                      return "array-contains" === e ? new xo(t, n) : "in" === e ? new Oo(t, n) : "array-contains-any" === e ? new Ro(t, n) : new zo(t, e, n);
                  }),
                  (zo.prototype.matches = function (t) {
                      var e = t.field(this.field);
                      return null !== e && hi(this.value) === hi(e) && this.de(li(e, this.value));
                  }),
                  (zo.prototype.de = function (t) {
                      switch (this.op) {
                          case "<":
                              return t < 0;
                          case "<=":
                              return t <= 0;
                          case "==":
                              return 0 === t;
                          case ">":
                              return 0 < t;
                          case ">=":
                              return 0 <= t;
                          default:
                              return Js();
                      }
                  }),
                  (zo.prototype.ue = function () {
                      return 0 <= ["<", "<=", ">", ">="].indexOf(this.op);
                  }),
                  (zo.prototype.canonicalId = function () {
                      return this.field.j() + this.op.toString() + di(this.value);
                  }),
                  (zo.prototype.isEqual = function (t) {
                      return t instanceof zo && this.op === t.op && this.field.isEqual(t.field) && ci(this.value, t.value);
                  }),
                  (zo.prototype.toString = function () {
                      return this.field.j() + " " + this.op + " " + di(this.value);
                  }),
                  zo),
              ko =
                  (n(Go, (go = So)),
                  (Go.prototype.matches = function (t) {
                      var e = Xr.N(t.key, this.key);
                      return this.de(e);
                  }),
                  Go),
              Do =
                  (n(Bo, (vo = So)),
                  (Bo.prototype.matches = function (e) {
                      return this.keys.some(function (t) {
                          return t.isEqual(e.key);
                      });
                  }),
                  Bo),
              xo =
                  (n(Fo, (yo = So)),
                  (Fo.prototype.matches = function (t) {
                      var e = t.field(this.field);
                      return bi(e) && fi(e.arrayValue, this.value);
                  }),
                  Fo),
              Oo =
                  (n(qo, (po = So)),
                  (qo.prototype.matches = function (t) {
                      var e = t.field(this.field);
                      return null !== e && fi(this.value.arrayValue, e);
                  }),
                  qo),
              Ro =
                  (n(jo, (lo = So)),
                  (jo.prototype.matches = function (t) {
                      var e = this,
                          n = t.field(this.field);
                      return (
                          !(!bi(n) || !n.arrayValue.values) &&
                          n.arrayValue.values.some(function (t) {
                              return fi(e.value.arrayValue, t);
                          })
                      );
                  }),
                  jo),
              Po =
                  ((Uo.prototype.canonicalId = function () {
                      return (
                          (this.before ? "b" : "a") +
                          ":" +
                          this.position
                              .map(function (t) {
                                  return di(t);
                              })
                              .join(",")
                      );
                  }),
                  (Uo.prototype.le = function (t, e) {
                      for (var n = 0, r = 0; r < this.position.length; r++) {
                          var i = t[r],
                              o = this.position[r];
                          if (((n = i.field.Y() ? Xr.N(Xr.Z(o.referenceValue), e.key) : li(o, e.field(i.field))), "desc" === i.dir && (n *= -1), 0 !== n)) break;
                      }
                      return this.before ? n <= 0 : n < 0;
                  }),
                  (Uo.prototype.isEqual = function (t) {
                      if (null === t) return !1;
                      if (this.before !== t.before || this.position.length !== t.position.length) return !1;
                      for (var e = 0; e < this.position.length; e++) if (!ci(this.position[e], t.position[e])) return !1;
                      return !0;
                  }),
                  Uo),
              Vo =
                  ((Mo.prototype.compare = function (t, e) {
                      var n,
                          r,
                          i,
                          o,
                          s = this.fe ? Xr.N(t.key, e.key) : ((n = this.field), (r = e), (i = t.field(n)), (o = r.field(n)), null !== i && null !== o ? li(i, o) : Js());
                      switch (this.dir) {
                          case "asc":
                              return s;
                          case "desc":
                              return -1 * s;
                          default:
                              return Js();
                      }
                  }),
                  (Mo.prototype.canonicalId = function () {
                      return this.field.j() + this.dir.toString();
                  }),
                  (Mo.prototype.toString = function () {
                      return this.field.j() + " (" + this.dir + ")";
                  }),
                  (Mo.prototype.isEqual = function (t) {
                      return this.dir === t.dir && this.field.isEqual(t.field);
                  }),
                  Mo),
              Lo =
                  ((Co.prototype.Ie = function (t) {
                      return new Co(this.target, this.targetId, this.Te, t, this.Ee, this.lastLimboFreeSnapshotVersion, this.resumeToken);
                  }),
                  (Co.prototype.we = function (t, e) {
                      return new Co(this.target, this.targetId, this.Te, this.sequenceNumber, e, this.lastLimboFreeSnapshotVersion, t);
                  }),
                  (Co.prototype.Re = function (t) {
                      return new Co(this.target, this.targetId, this.Te, this.sequenceNumber, this.Ee, t, this.resumeToken);
                  }),
                  Co);
          function Co(t, e, n, r, i, o, s) {
              void 0 === i && (i = Vr.min()),
                  void 0 === o && (o = Vr.min()),
                  void 0 === s && (s = ei.ht),
                  (this.target = t),
                  (this.targetId = e),
                  (this.Te = n),
                  (this.sequenceNumber = r),
                  (this.Ee = i),
                  (this.lastLimboFreeSnapshotVersion = o),
                  (this.resumeToken = s);
          }
          function Mo(t, e) {
              (this.field = t), void 0 === e && (e = "asc"), (this.dir = e), (this.fe = t.Y());
          }
          function Uo(t, e) {
              (this.position = t), (this.before = e);
          }
          function jo(t, e) {
              return lo.call(this, t, "array-contains-any", e) || this;
          }
          function qo(t, e) {
              return po.call(this, t, "in", e) || this;
          }
          function Fo(t, e) {
              return yo.call(this, t, "array-contains", e) || this;
          }
          function Bo(t, e) {
              var n = this;
              return (
                  ((n = vo.call(this, t, "in", e) || this).keys = (e.arrayValue.values || []).map(function (t) {
                      return Xr.Z(t.referenceValue);
                  })),
                  n
              );
          }
          function Go(t, e, n) {
              var r = this;
              return ((r = go.call(this, t, e, n) || this).key = Xr.Z(n.referenceValue)), r;
          }
          function zo(t, e, n) {
              var r = this;
              return ((r = mo.call(this) || this).field = t), (r.op = e), (r.value = n), r;
          }
          function Wo(t, e, n, r, i, o, s, u) {
              void 0 === e && (e = null),
                  void 0 === n && (n = []),
                  void 0 === r && (r = []),
                  void 0 === i && (i = null),
                  void 0 === o && (o = "F"),
                  void 0 === s && (s = null),
                  void 0 === u && (u = null),
                  (this.path = t),
                  (this.collectionGroup = e),
                  (this.xt = n),
                  (this.filters = r),
                  (this.limit = i),
                  (this.Bt = o),
                  (this.startAt = s),
                  (this.endAt = u),
                  (this.qt = null),
                  (this.Ut = null),
                  this.startAt && this.Qt(this.startAt),
                  this.endAt && this.Qt(this.endAt);
          }
          function Qo(t, e, n, r, i, o, s) {
              void 0 === e && (e = null),
                  void 0 === n && (n = []),
                  void 0 === r && (r = []),
                  void 0 === i && (i = null),
                  void 0 === o && (o = null),
                  void 0 === s && (s = null),
                  (this.path = t),
                  (this.collectionGroup = e),
                  (this.orderBy = n),
                  (this.filters = r),
                  (this.limit = i),
                  (this.startAt = o),
                  (this.endAt = s),
                  (this.Lt = null);
          }
          function Ko() {
              return (null !== wo && wo.apply(this, arguments)) || this;
          }
          function Ho(t, e, n) {
              var r = this;
              return ((r = bo.call(this, t, e) || this).hasCommittedMutations = !(!n || !n.hasCommittedMutations)), r;
          }
          function Yo(t, e, n, r) {
              var i = this;
              return ((i = Eo.call(this, t, e) || this).$t = n), (i.At = !!r.At), (i.hasCommittedMutations = !!r.hasCommittedMutations), i;
          }
          function Xo(t) {
              switch (t) {
                  case Sr.OK:
                      return Js();
                  case Sr.CANCELLED:
                  case Sr.UNKNOWN:
                  case Sr.DEADLINE_EXCEEDED:
                  case Sr.RESOURCE_EXHAUSTED:
                  case Sr.INTERNAL:
                  case Sr.UNAVAILABLE:
                  case Sr.UNAUTHENTICATED:
                      return;
                  case Sr.INVALID_ARGUMENT:
                  case Sr.NOT_FOUND:
                  case Sr.ALREADY_EXISTS:
                  case Sr.PERMISSION_DENIED:
                  case Sr.FAILED_PRECONDITION:
                  case Sr.ABORTED:
                  case Sr.OUT_OF_RANGE:
                  case Sr.UNIMPLEMENTED:
                  case Sr.DATA_LOSS:
                      return 1;
                  default:
                      return Js();
              }
          }
          function $o(t) {
              if (void 0 === t) return Xs("GRPC error has no .code"), Sr.UNKNOWN;
              switch (t) {
                  case co.OK:
                      return Sr.OK;
                  case co.CANCELLED:
                      return Sr.CANCELLED;
                  case co.UNKNOWN:
                      return Sr.UNKNOWN;
                  case co.DEADLINE_EXCEEDED:
                      return Sr.DEADLINE_EXCEEDED;
                  case co.RESOURCE_EXHAUSTED:
                      return Sr.RESOURCE_EXHAUSTED;
                  case co.INTERNAL:
                      return Sr.INTERNAL;
                  case co.UNAVAILABLE:
                      return Sr.UNAVAILABLE;
                  case co.UNAUTHENTICATED:
                      return Sr.UNAUTHENTICATED;
                  case co.INVALID_ARGUMENT:
                      return Sr.INVALID_ARGUMENT;
                  case co.NOT_FOUND:
                      return Sr.NOT_FOUND;
                  case co.ALREADY_EXISTS:
                      return Sr.ALREADY_EXISTS;
                  case co.PERMISSION_DENIED:
                      return Sr.PERMISSION_DENIED;
                  case co.FAILED_PRECONDITION:
                      return Sr.FAILED_PRECONDITION;
                  case co.ABORTED:
                      return Sr.ABORTED;
                  case co.OUT_OF_RANGE:
                      return Sr.OUT_OF_RANGE;
                  case co.UNIMPLEMENTED:
                      return Sr.UNIMPLEMENTED;
                  case co.DATA_LOSS:
                      return Sr.DATA_LOSS;
                  default:
                      return Js();
              }
          }
          ((fo = co = co || {})[(fo.OK = 0)] = "OK"),
              (fo[(fo.CANCELLED = 1)] = "CANCELLED"),
              (fo[(fo.UNKNOWN = 2)] = "UNKNOWN"),
              (fo[(fo.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
              (fo[(fo.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
              (fo[(fo.NOT_FOUND = 5)] = "NOT_FOUND"),
              (fo[(fo.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
              (fo[(fo.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
              (fo[(fo.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
              (fo[(fo.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
              (fo[(fo.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
              (fo[(fo.ABORTED = 10)] = "ABORTED"),
              (fo[(fo.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
              (fo[(fo.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
              (fo[(fo.INTERNAL = 13)] = "INTERNAL"),
              (fo[(fo.UNAVAILABLE = 14)] = "UNAVAILABLE"),
              (fo[(fo.DATA_LOSS = 15)] = "DATA_LOSS");
          var Jo =
                  ((rs.prototype.Ae = function (t, e) {
                      return new rs(this.N, this.root.Ae(t, e, this.N).me(null, null, ts.Pe, null, null));
                  }),
                  (rs.prototype.remove = function (t) {
                      return new rs(this.N, this.root.remove(t, this.N).me(null, null, ts.Pe, null, null));
                  }),
                  (rs.prototype.get = function (t) {
                      for (var e = this.root; !e.B(); ) {
                          var n = this.N(t, e.key);
                          if (0 === n) return e.value;
                          n < 0 ? (e = e.left) : 0 < n && (e = e.right);
                      }
                      return null;
                  }),
                  (rs.prototype.indexOf = function (t) {
                      for (var e = 0, n = this.root; !n.B(); ) {
                          var r = this.N(t, n.key);
                          if (0 === r) return e + n.left.size;
                          n = r < 0 ? n.left : ((e += n.left.size + 1), n.right);
                      }
                      return -1;
                  }),
                  (rs.prototype.B = function () {
                      return this.root.B();
                  }),
                  Object.defineProperty(rs.prototype, "size", {
                      get: function () {
                          return this.root.size;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (rs.prototype.Ve = function () {
                      return this.root.Ve();
                  }),
                  (rs.prototype.ge = function () {
                      return this.root.ge();
                  }),
                  (rs.prototype.pe = function (t) {
                      return this.root.pe(t);
                  }),
                  (rs.prototype.forEach = function (n) {
                      this.pe(function (t, e) {
                          return n(t, e), !1;
                      });
                  }),
                  (rs.prototype.toString = function () {
                      var n = [];
                      return (
                          this.pe(function (t, e) {
                              return n.push(t + ":" + e), !1;
                          }),
                          "{" + n.join(", ") + "}"
                      );
                  }),
                  (rs.prototype.ye = function (t) {
                      return this.root.ye(t);
                  }),
                  (rs.prototype.be = function () {
                      return new Zo(this.root, null, this.N, !1);
                  }),
                  (rs.prototype.ve = function (t) {
                      return new Zo(this.root, t, this.N, !1);
                  }),
                  (rs.prototype.Se = function () {
                      return new Zo(this.root, null, this.N, !0);
                  }),
                  (rs.prototype.De = function (t) {
                      return new Zo(this.root, t, this.N, !0);
                  }),
                  rs),
              Zo =
                  ((ns.prototype.Ne = function () {
                      var t = this.Fe.pop(),
                          e = { key: t.key, value: t.value };
                      if (this.Ce) for (t = t.left; !t.B(); ) this.Fe.push(t), (t = t.right);
                      else for (t = t.right; !t.B(); ) this.Fe.push(t), (t = t.left);
                      return e;
                  }),
                  (ns.prototype.ke = function () {
                      return 0 < this.Fe.length;
                  }),
                  (ns.prototype.$e = function () {
                      if (0 === this.Fe.length) return null;
                      var t = this.Fe[this.Fe.length - 1];
                      return { key: t.key, value: t.value };
                  }),
                  ns),
              ts =
                  ((es.prototype.me = function (t, e, n, r, i) {
                      return new es(null != t ? t : this.key, null != e ? e : this.value, null != n ? n : this.color, null != r ? r : this.left, null != i ? i : this.right);
                  }),
                  (es.prototype.B = function () {
                      return !1;
                  }),
                  (es.prototype.pe = function (t) {
                      return this.left.pe(t) || t(this.key, this.value) || this.right.pe(t);
                  }),
                  (es.prototype.ye = function (t) {
                      return this.right.ye(t) || t(this.key, this.value) || this.left.ye(t);
                  }),
                  (es.prototype.min = function () {
                      return this.left.B() ? this : this.left.min();
                  }),
                  (es.prototype.Ve = function () {
                      return this.min().key;
                  }),
                  (es.prototype.ge = function () {
                      return this.right.B() ? this.key : this.right.ge();
                  }),
                  (es.prototype.Ae = function (t, e, n) {
                      var r = this,
                          i = n(t, r.key);
                      return (r = i < 0 ? r.me(null, null, null, r.left.Ae(t, e, n), null) : 0 === i ? r.me(null, e, null, null, null) : r.me(null, null, null, null, r.right.Ae(t, e, n))).Me();
                  }),
                  (es.prototype.Le = function () {
                      if (this.left.B()) return es.EMPTY;
                      var t = this;
                      return t.left.Oe() || t.left.left.Oe() || (t = t.xe()), (t = t.me(null, null, null, t.left.Le(), null)).Me();
                  }),
                  (es.prototype.remove = function (t, e) {
                      var n,
                          r = this;
                      if (e(t, r.key) < 0) r.left.B() || r.left.Oe() || r.left.left.Oe() || (r = r.xe()), (r = r.me(null, null, null, r.left.remove(t, e), null));
                      else {
                          if ((r.left.Oe() && (r = r.Be()), r.right.B() || r.right.Oe() || r.right.left.Oe() || (r = r.qe()), 0 === e(t, r.key))) {
                              if (r.right.B()) return es.EMPTY;
                              (n = r.right.min()), (r = r.me(n.key, n.value, null, null, r.right.Le()));
                          }
                          r = r.me(null, null, null, null, r.right.remove(t, e));
                      }
                      return r.Me();
                  }),
                  (es.prototype.Oe = function () {
                      return this.color;
                  }),
                  (es.prototype.Me = function () {
                      var t = this;
                      return t.right.Oe() && !t.left.Oe() && (t = t.Ue()), t.left.Oe() && t.left.left.Oe() && (t = t.Be()), t.left.Oe() && t.right.Oe() && (t = t.Qe()), t;
                  }),
                  (es.prototype.xe = function () {
                      var t = this.Qe();
                      return t.right.left.Oe() && (t = (t = (t = t.me(null, null, null, null, t.right.Be())).Ue()).Qe()), t;
                  }),
                  (es.prototype.qe = function () {
                      var t = this.Qe();
                      return t.left.left.Oe() && (t = (t = t.Be()).Qe()), t;
                  }),
                  (es.prototype.Ue = function () {
                      var t = this.me(null, null, es.RED, null, this.right.left);
                      return this.right.me(null, null, this.color, t, null);
                  }),
                  (es.prototype.Be = function () {
                      var t = this.me(null, null, es.RED, this.left.right, null);
                      return this.left.me(null, null, this.color, null, t);
                  }),
                  (es.prototype.Qe = function () {
                      var t = this.left.me(null, null, !this.left.color, null, null),
                          e = this.right.me(null, null, !this.right.color, null, null);
                      return this.me(null, null, !this.color, t, e);
                  }),
                  (es.prototype.We = function () {
                      var t = this.je();
                      return Math.pow(2, t) <= this.size + 1;
                  }),
                  (es.prototype.je = function () {
                      if (this.Oe() && this.left.Oe()) throw Js();
                      if (this.right.Oe()) throw Js();
                      var t = this.left.je();
                      if (t !== this.right.je()) throw Js();
                      return t + (this.Oe() ? 0 : 1);
                  }),
                  es);
          function es(t, e, n, r, i) {
              (this.key = t), (this.value = e), (this.color = null != n ? n : es.RED), (this.left = null != r ? r : es.EMPTY), (this.right = null != i ? i : es.EMPTY), (this.size = this.left.size + 1 + this.right.size);
          }
          function ns(t, e, n, r) {
              (this.Ce = r), (this.Fe = []);
              for (var i = 1; !t.B(); )
                  if (((i = e ? n(t.key, e) : 1), r && (i *= -1), i < 0)) t = this.Ce ? t.left : t.right;
                  else {
                      if (0 === i) {
                          this.Fe.push(t);
                          break;
                      }
                      this.Fe.push(t), (t = this.Ce ? t.right : t.left);
                  }
          }
          function rs(t, e) {
              (this.N = t), (this.root = e || ts.EMPTY);
          }
          function is() {
              this.size = 0;
          }
          (ts.EMPTY = null),
              (ts.RED = !0),
              (ts.Pe = !1),
              (ts.EMPTY =
                  (Object.defineProperty(is.prototype, "key", {
                      get: function () {
                          throw Js();
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Object.defineProperty(is.prototype, "value", {
                      get: function () {
                          throw Js();
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Object.defineProperty(is.prototype, "color", {
                      get: function () {
                          throw Js();
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Object.defineProperty(is.prototype, "left", {
                      get: function () {
                          throw Js();
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Object.defineProperty(is.prototype, "right", {
                      get: function () {
                          throw Js();
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (is.prototype.me = function (t, e, n, r, i) {
                      return this;
                  }),
                  (is.prototype.Ae = function (t, e, n) {
                      return new ts(t, e);
                  }),
                  (is.prototype.remove = function (t, e) {
                      return this;
                  }),
                  (is.prototype.B = function () {
                      return !0;
                  }),
                  (is.prototype.pe = function (t) {
                      return !1;
                  }),
                  (is.prototype.ye = function (t) {
                      return !1;
                  }),
                  (is.prototype.Ve = function () {
                      return null;
                  }),
                  (is.prototype.ge = function () {
                      return null;
                  }),
                  (is.prototype.Oe = function () {
                      return !1;
                  }),
                  (is.prototype.We = function () {
                      return !0;
                  }),
                  (is.prototype.je = function () {
                      return 0;
                  }),
                  new is()));
          var os =
                  ((hs.prototype.has = function (t) {
                      return null !== this.data.get(t);
                  }),
                  (hs.prototype.first = function () {
                      return this.data.Ve();
                  }),
                  (hs.prototype.last = function () {
                      return this.data.ge();
                  }),
                  Object.defineProperty(hs.prototype, "size", {
                      get: function () {
                          return this.data.size;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (hs.prototype.indexOf = function (t) {
                      return this.data.indexOf(t);
                  }),
                  (hs.prototype.forEach = function (n) {
                      this.data.pe(function (t, e) {
                          return n(t), !1;
                      });
                  }),
                  (hs.prototype.Ke = function (t, e) {
                      for (var n = this.data.ve(t[0]); n.ke(); ) {
                          var r = n.Ne();
                          if (0 <= this.N(r.key, t[1])) return;
                          e(r.key);
                      }
                  }),
                  (hs.prototype.Ge = function (t, e) {
                      var n;
                      for (n = void 0 !== e ? this.data.ve(e) : this.data.be(); n.ke(); ) if (!t(n.Ne().key)) return;
                  }),
                  (hs.prototype.ze = function (t) {
                      var e = this.data.ve(t);
                      return e.ke() ? e.Ne().key : null;
                  }),
                  (hs.prototype.be = function () {
                      return new ss(this.data.be());
                  }),
                  (hs.prototype.ve = function (t) {
                      return new ss(this.data.ve(t));
                  }),
                  (hs.prototype.add = function (t) {
                      return this.me(this.data.remove(t).Ae(t, !0));
                  }),
                  (hs.prototype.delete = function (t) {
                      return this.has(t) ? this.me(this.data.remove(t)) : this;
                  }),
                  (hs.prototype.B = function () {
                      return this.data.B();
                  }),
                  (hs.prototype.He = function (t) {
                      var e = this;
                      return (
                          e.size < t.size && ((e = t), (t = this)),
                          t.forEach(function (t) {
                              e = e.add(t);
                          }),
                          e
                      );
                  }),
                  (hs.prototype.isEqual = function (t) {
                      if (!(t instanceof hs)) return !1;
                      if (this.size !== t.size) return !1;
                      for (var e = this.data.be(), n = t.data.be(); e.ke(); ) {
                          var r = e.Ne().key,
                              i = n.Ne().key;
                          if (0 !== this.N(r, i)) return !1;
                      }
                      return !0;
                  }),
                  (hs.prototype.W = function () {
                      var e = [];
                      return (
                          this.forEach(function (t) {
                              e.push(t);
                          }),
                          e
                      );
                  }),
                  (hs.prototype.toString = function () {
                      var e = [];
                      return (
                          this.forEach(function (t) {
                              return e.push(t);
                          }),
                          "SortedSet(" + e.toString() + ")"
                      );
                  }),
                  (hs.prototype.me = function (t) {
                      var e = new hs(this.N);
                      return (e.data = t), e;
                  }),
                  hs),
              ss =
                  ((as.prototype.Ne = function () {
                      return this.Ye.Ne().key;
                  }),
                  (as.prototype.ke = function () {
                      return this.Ye.ke();
                  }),
                  as),
              us = new Jo(Xr.N);
          function as(t) {
              this.Ye = t;
          }
          function hs(t) {
              (this.N = t), (this.data = new Jo(this.N));
          }
          function cs() {
              return us;
          }
          function fs() {
              return cs();
          }
          var ls = new Jo(Xr.N);
          function ps() {
              return ls;
          }
          var ds = new Jo(Xr.N);
          function ys() {
              return ds;
          }
          var vs = new os(Xr.N);
          function gs() {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
              for (var n = vs, r = 0, i = t; r < i.length; r++) {
                  var o = i[r];
                  n = n.add(o);
              }
              return n;
          }
          var ms = new os(ru);
          function ws() {
              return ms;
          }
          function bs(t, e, n, r) {
              (this.ws = t), (this.removedTargetIds = e), (this.key = n), (this.Rs = r);
          }
          function Es(t, e) {
              (this.targetId = t), (this.As = e);
          }
          function Ts(t, e, n, r) {
              void 0 === n && (n = ei.ht), void 0 === r && (r = null), (this.state = t), (this.targetIds = e), (this.resumeToken = n), (this.cause = r);
          }
          var Is =
                  ((Cs.Ze = function (t) {
                      return new Cs(t.N);
                  }),
                  (Cs.prototype.has = function (t) {
                      return null != this.Je.get(t);
                  }),
                  (Cs.prototype.get = function (t) {
                      return this.Je.get(t);
                  }),
                  (Cs.prototype.first = function () {
                      return this.Xe.Ve();
                  }),
                  (Cs.prototype.last = function () {
                      return this.Xe.ge();
                  }),
                  (Cs.prototype.B = function () {
                      return this.Xe.B();
                  }),
                  (Cs.prototype.indexOf = function (t) {
                      var e = this.Je.get(t);
                      return e ? this.Xe.indexOf(e) : -1;
                  }),
                  Object.defineProperty(Cs.prototype, "size", {
                      get: function () {
                          return this.Xe.size;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (Cs.prototype.forEach = function (n) {
                      this.Xe.pe(function (t, e) {
                          return n(t), !1;
                      });
                  }),
                  (Cs.prototype.add = function (t) {
                      var e = this.delete(t.key);
                      return e.me(e.Je.Ae(t.key, t), e.Xe.Ae(t, null));
                  }),
                  (Cs.prototype.delete = function (t) {
                      var e = this.get(t);
                      return e ? this.me(this.Je.remove(t), this.Xe.remove(e)) : this;
                  }),
                  (Cs.prototype.isEqual = function (t) {
                      if (!(t instanceof Cs)) return !1;
                      if (this.size !== t.size) return !1;
                      for (var e = this.Xe.be(), n = t.Xe.be(); e.ke(); ) {
                          var r = e.Ne().key,
                              i = n.Ne().key;
                          if (!r.isEqual(i)) return !1;
                      }
                      return !0;
                  }),
                  (Cs.prototype.toString = function () {
                      var e = [];
                      return (
                          this.forEach(function (t) {
                              e.push(t.toString());
                          }),
                          0 === e.length ? "DocumentSet ()" : "DocumentSet (\n  " + e.join("  \n") + "\n)"
                      );
                  }),
                  (Cs.prototype.me = function (t, e) {
                      var n = new Cs();
                      return (n.N = this.N), (n.Je = t), (n.Xe = e), n;
                  }),
                  Cs),
              Ns =
                  ((Ls.prototype.track = function (t) {
                      var e = t.doc.key,
                          n = this.ts.get(e);
                      !n || (0 !== t.type && 3 === n.type)
                          ? (this.ts = this.ts.Ae(e, t))
                          : 3 === t.type && 1 !== n.type
                          ? (this.ts = this.ts.Ae(e, { type: n.type, doc: t.doc }))
                          : 2 === t.type && 2 === n.type
                          ? (this.ts = this.ts.Ae(e, { type: 2, doc: t.doc }))
                          : 2 === t.type && 0 === n.type
                          ? (this.ts = this.ts.Ae(e, { type: 0, doc: t.doc }))
                          : 1 === t.type && 0 === n.type
                          ? (this.ts = this.ts.remove(e))
                          : 1 === t.type && 2 === n.type
                          ? (this.ts = this.ts.Ae(e, { type: 1, doc: n.doc }))
                          : 0 === t.type && 1 === n.type
                          ? (this.ts = this.ts.Ae(e, { type: 2, doc: t.doc }))
                          : Js();
                  }),
                  (Ls.prototype.es = function () {
                      var n = [];
                      return (
                          this.ts.pe(function (t, e) {
                              n.push(e);
                          }),
                          n
                      );
                  }),
                  Ls),
              As =
                  ((Vs.os = function (t, e, n, r) {
                      var i = [];
                      return (
                          e.forEach(function (t) {
                              i.push({ type: 0, doc: t });
                          }),
                          new Vs(t, e, Is.Ze(e), i, n, r, !0, !1)
                      );
                  }),
                  Object.defineProperty(Vs.prototype, "hasPendingWrites", {
                      get: function () {
                          return !this.ns.B();
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (Vs.prototype.isEqual = function (t) {
                      if (!(this.fromCache === t.fromCache && this.rs === t.rs && this.ns.isEqual(t.ns) && this.query.isEqual(t.query) && this.docs.isEqual(t.docs) && this.ss.isEqual(t.ss))) return !1;
                      var e = this.docChanges,
                          n = t.docChanges;
                      if (e.length !== n.length) return !1;
                      for (var r = 0; r < e.length; r++) if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
                      return !0;
                  }),
                  Vs),
              _s =
                  ((Ps.ls = function (t, e) {
                      var n = new Map();
                      return n.set(t, Ss.ds(t, e)), new Ps(Vr.min(), n, ws(), cs(), gs());
                  }),
                  Ps),
              Ss =
                  ((Rs.ds = function (t, e) {
                      return new Rs(ei.ht, e, gs(), gs(), gs());
                  }),
                  Rs),
              ks =
                  (Object.defineProperty(Os.prototype, "fs", {
                      get: function () {
                          return this.gs;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Object.defineProperty(Os.prototype, "resumeToken", {
                      get: function () {
                          return this.Vs;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Object.defineProperty(Os.prototype, "ys", {
                      get: function () {
                          return 0 !== this.ms;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Object.defineProperty(Os.prototype, "bs", {
                      get: function () {
                          return this.ps;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (Os.prototype.vs = function (t) {
                      0 < t.rt() && ((this.ps = !0), (this.Vs = t));
                  }),
                  (Os.prototype.Ss = function () {
                      var n = gs(),
                          r = gs(),
                          i = gs();
                      return (
                          this.Ps.forEach(function (t, e) {
                              switch (e) {
                                  case 0:
                                      n = n.add(t);
                                      break;
                                  case 2:
                                      r = r.add(t);
                                      break;
                                  case 1:
                                      i = i.add(t);
                                      break;
                                  default:
                                      Js();
                              }
                          }),
                          new Ss(this.Vs, this.gs, n, r, i)
                      );
                  }),
                  (Os.prototype.Ds = function () {
                      (this.ps = !1), (this.Ps = Us());
                  }),
                  (Os.prototype.Cs = function (t, e) {
                      (this.ps = !0), (this.Ps = this.Ps.Ae(t, e));
                  }),
                  (Os.prototype.Fs = function (t) {
                      (this.ps = !0), (this.Ps = this.Ps.remove(t));
                  }),
                  (Os.prototype.Ns = function () {
                      this.ms += 1;
                  }),
                  (Os.prototype.ks = function () {
                      --this.ms;
                  }),
                  (Os.prototype.$s = function () {
                      (this.ps = !0), (this.gs = !0);
                  }),
                  Os),
              Ds =
                  ((xs.prototype.qs = function (t) {
                      for (var e = 0, n = t.ws; e < n.length; e++) {
                          var r = n[e];
                          t.Rs instanceof To ? this.Us(r, t.Rs) : t.Rs instanceof Io && this.Qs(r, t.key, t.Rs);
                      }
                      for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
                          var s = o[i];
                          this.Qs(s, t.key, t.Rs);
                      }
                  }),
                  (xs.prototype.Ws = function (n) {
                      var r = this;
                      this.js(n, function (t) {
                          var e = r.Ks(t);
                          switch (n.state) {
                              case 0:
                                  r.Gs(t) && e.vs(n.resumeToken);
                                  break;
                              case 1:
                                  e.ks(), e.ys || e.Ds(), e.vs(n.resumeToken);
                                  break;
                              case 2:
                                  e.ks(), e.ys || r.removeTarget(t);
                                  break;
                              case 3:
                                  r.Gs(t) && (e.$s(), e.vs(n.resumeToken));
                                  break;
                              case 4:
                                  r.Gs(t) && (r.zs(t), e.vs(n.resumeToken));
                                  break;
                              default:
                                  Js();
                          }
                      });
                  }),
                  (xs.prototype.js = function (t, n) {
                      var r = this;
                      0 < t.targetIds.length
                          ? t.targetIds.forEach(n)
                          : this.Ls.forEach(function (t, e) {
                                r.Gs(e) && n(e);
                            });
                  }),
                  (xs.prototype.Hs = function (t) {
                      var e = t.targetId,
                          n = t.As.count,
                          r = this.Ys(e);
                      if (r) {
                          var i = r.target;
                          if (i.Ot())
                              if (0 === n) {
                                  var o = new Xr(i.path);
                                  this.Qs(e, o, new Io(o, Vr.min()));
                              } else Zs(1 === n);
                          else this.Js(e) !== n && (this.zs(e), (this.Bs = this.Bs.add(e)));
                      }
                  }),
                  (xs.prototype.Xs = function (i) {
                      var o = this,
                          s = new Map();
                      this.Ls.forEach(function (t, e) {
                          var n = o.Ys(e);
                          if (n) {
                              if (t.fs && n.target.Ot()) {
                                  var r = new Xr(n.target.path);
                                  null !== o.Os.get(r) || o.Zs(e, r) || o.Qs(e, r, new Io(r, i));
                              }
                              t.bs && (s.set(e, t.Ss()), t.Ds());
                          }
                      });
                      var r = gs();
                      this.xs.forEach(function (t, e) {
                          var n = !0;
                          e.Ge(function (t) {
                              var e = o.Ys(t);
                              return !e || 2 === e.Te || (n = !1);
                          }),
                              n && (r = r.add(t));
                      });
                      var t = new _s(i, s, this.Bs, this.Os, r);
                      return (this.Os = cs()), (this.xs = Ms()), (this.Bs = new os(ru)), t;
                  }),
                  (xs.prototype.Us = function (t, e) {
                      if (this.Gs(t)) {
                          var n = this.Zs(t, e.key) ? 2 : 0;
                          this.Ks(t).Cs(e.key, n), (this.Os = this.Os.Ae(e.key, e)), (this.xs = this.xs.Ae(e.key, this.ti(e.key).add(t)));
                      }
                  }),
                  (xs.prototype.Qs = function (t, e, n) {
                      if (this.Gs(t)) {
                          var r = this.Ks(t);
                          this.Zs(t, e) ? r.Cs(e, 1) : r.Fs(e), (this.xs = this.xs.Ae(e, this.ti(e).delete(t))), n && (this.Os = this.Os.Ae(e, n));
                      }
                  }),
                  (xs.prototype.removeTarget = function (t) {
                      this.Ls.delete(t);
                  }),
                  (xs.prototype.Js = function (t) {
                      var e = this.Ks(t).Ss();
                      return this.Ms.ei(t).size + e.Ts.size - e.Is.size;
                  }),
                  (xs.prototype.Ns = function (t) {
                      this.Ks(t).Ns();
                  }),
                  (xs.prototype.Ks = function (t) {
                      var e = this.Ls.get(t);
                      return e || ((e = new ks()), this.Ls.set(t, e)), e;
                  }),
                  (xs.prototype.ti = function (t) {
                      var e = this.xs.get(t);
                      return e || ((e = new os(ru)), (this.xs = this.xs.Ae(t, e))), e;
                  }),
                  (xs.prototype.Gs = function (t) {
                      var e = null !== this.Ys(t);
                      return e || Ys("WatchChangeAggregator", "Detected inactive target", t), e;
                  }),
                  (xs.prototype.Ys = function (t) {
                      var e = this.Ls.get(t);
                      return e && e.ys ? null : this.Ms.si(t);
                  }),
                  (xs.prototype.zs = function (e) {
                      var n = this;
                      this.Ls.set(e, new ks()),
                          this.Ms.ei(e).forEach(function (t) {
                              n.Qs(e, t, null);
                          });
                  }),
                  (xs.prototype.Zs = function (t, e) {
                      return this.Ms.ei(t).has(e);
                  }),
                  xs);
          function xs(t) {
              (this.Ms = t), (this.Ls = new Map()), (this.Os = cs()), (this.xs = Ms()), (this.Bs = new os(ru));
          }
          function Os() {
              (this.ms = 0), (this.Ps = Us()), (this.Vs = ei.ht), (this.gs = !1), (this.ps = !0);
          }
          function Rs(t, e, n, r, i) {
              (this.resumeToken = t), (this.fs = e), (this.Ts = n), (this.Es = r), (this.Is = i);
          }
          function Ps(t, e, n, r, i) {
              (this.Ee = t), (this.as = e), (this.us = n), (this.cs = r), (this._s = i);
          }
          function Vs(t, e, n, r, i, o, s, u) {
              (this.query = t), (this.docs = e), (this.ss = n), (this.docChanges = r), (this.ns = i), (this.fromCache = o), (this.rs = s), (this.hs = u);
          }
          function Ls() {
              this.ts = new Jo(Xr.N);
          }
          function Cs(n) {
              (this.N = n
                  ? function (t, e) {
                        return n(t, e) || Xr.N(t.key, e.key);
                    }
                  : function (t, e) {
                        return Xr.N(t.key, e.key);
                    }),
                  (this.Je = ps()),
                  (this.Xe = new Jo(this.N));
          }
          function Ms() {
              return new Jo(Xr.N);
          }
          function Us() {
              return new Jo(Xr.N);
          }
          var js = { asc: "ASCENDING", desc: "DESCENDING" },
              qs = { "<": "LESS_THAN", "<=": "LESS_THAN_OR_EQUAL", ">": "GREATER_THAN", ">=": "GREATER_THAN_OR_EQUAL", "==": "EQUAL", "array-contains": "ARRAY_CONTAINS", in: "IN", "array-contains-any": "ARRAY_CONTAINS_ANY" },
              Fs =
                  ((Bs.prototype.ni = function (t) {
                      var e = void 0 === t.code ? Sr.UNKNOWN : $o(t.code);
                      return new kr(e, t.message || "");
                  }),
                  (Bs.prototype.ri = function (t) {
                      return this.options.hi || ri(t) ? t : { value: t };
                  }),
                  (Bs.prototype.oi = function (t) {
                      var e;
                      return ri((e = "object" == typeof t ? t.value : t)) ? null : e;
                  }),
                  (Bs.prototype._t = function (t) {
                      return { integerValue: "" + t };
                  }),
                  (Bs.prototype.lt = function (t) {
                      if (this.options.hi) {
                          if (isNaN(t)) return { doubleValue: "NaN" };
                          if (t === 1 / 0) return { doubleValue: "Infinity" };
                          if (t === -1 / 0) return { doubleValue: "-Infinity" };
                      }
                      return { doubleValue: ii(t) ? "-0" : t };
                  }),
                  (Bs.prototype.ai = function (t) {
                      return oi(t) ? this._t(t) : this.lt(t);
                  }),
                  (Bs.prototype.C = function (t) {
                      return this.options.hi ? new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + t.nanoseconds).slice(-9) + "Z" : { seconds: "" + t.seconds, nanos: t.nanoseconds };
                  }),
                  (Bs.prototype.v = function (t) {
                      var e = yi(t);
                      return new Pr(e.seconds, e.nanos);
                  }),
                  (Bs.prototype.ui = function (t) {
                      return this.options.hi ? t.toBase64() : t.toUint8Array();
                  }),
                  (Bs.prototype.ci = function (t) {
                      return this.options.hi ? (Zs(void 0 === t || "string" == typeof t), ei.fromBase64String(t || "")) : (Zs(void 0 === t || t instanceof Uint8Array), ei.fromUint8Array(t || new Uint8Array()));
                  }),
                  (Bs.prototype.toVersion = function (t) {
                      return this.C(t.C());
                  }),
                  (Bs.prototype.fromVersion = function (t) {
                      return Zs(!!t), Vr.v(this.v(t));
                  }),
                  (Bs.prototype._i = function (t, e) {
                      return this.li(e || this.ii)
                          .child("documents")
                          .child(t)
                          .j();
                  }),
                  (Bs.prototype.di = function (t) {
                      var e = Cr.K(t);
                      return Zs(Gs(e)), e;
                  }),
                  (Bs.prototype.fi = function (t) {
                      return this._i(t.path);
                  }),
                  (Bs.prototype.Z = function (t) {
                      var e = this.di(t);
                      return Zs(e.get(1) === this.ii.projectId), Zs((!e.get(3) && !this.ii.database) || e.get(3) === this.ii.database), new Xr(this.Ti(e));
                  }),
                  (Bs.prototype.Ei = function (t) {
                      return this._i(t);
                  }),
                  (Bs.prototype.Ii = function (t) {
                      var e = this.di(t);
                      return 4 === e.length ? Cr.G : this.Ti(e);
                  }),
                  Object.defineProperty(Bs.prototype, "wi", {
                      get: function () {
                          return new Cr(["projects", this.ii.projectId, "databases", this.ii.database]).j();
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (Bs.prototype.li = function (t) {
                      return new Cr(["projects", t.projectId, "databases", t.database]);
                  }),
                  (Bs.prototype.Ti = function (t) {
                      return Zs(4 < t.length && "documents" === t.get(4)), t.$(5);
                  }),
                  (Bs.prototype.Ri = function (t, e) {
                      return { name: this.fi(t), fields: e.proto.mapValue.fields };
                  }),
                  (Bs.prototype.Ai = function (t) {
                      return { name: this.fi(t.key), fields: t.Mt().mapValue.fields, updateTime: this.C(t.version.C()) };
                  }),
                  (Bs.prototype.mi = function (t, e) {
                      var n = this.Z(t.name),
                          r = this.fromVersion(t.updateTime),
                          i = new Hi({ mapValue: { fields: t.fields } });
                      return new To(n, r, i, { hasCommittedMutations: !!e });
                  }),
                  (Bs.prototype.Pi = function (t) {
                      Zs(!!t.found), t.found.name, t.found.updateTime;
                      var e = this.Z(t.found.name),
                          n = this.fromVersion(t.found.updateTime),
                          r = new Hi({ mapValue: { fields: t.found.fields } });
                      return new To(e, n, r, {});
                  }),
                  (Bs.prototype.Vi = function (t) {
                      Zs(!!t.missing), Zs(!!t.readTime);
                      var e = this.Z(t.missing),
                          n = this.fromVersion(t.readTime);
                      return new Io(e, n);
                  }),
                  (Bs.prototype.gi = function (t) {
                      return "found" in t ? this.Pi(t) : "missing" in t ? this.Vi(t) : Js();
                  }),
                  (Bs.prototype.pi = function (t) {
                      var e;
                      if ("targetChange" in t) {
                          t.targetChange;
                          var n = this.yi(t.targetChange.targetChangeType || "NO_CHANGE"),
                              r = t.targetChange.targetIds || [],
                              i = this.ci(t.targetChange.resumeToken),
                              o = t.targetChange.cause,
                              s = o && this.ni(o);
                          e = new Ts(n, r, i, s || null);
                      } else if ("documentChange" in t) {
                          t.documentChange;
                          var u = t.documentChange;
                          u.document, u.document.name, u.document.updateTime;
                          var a = this.Z(u.document.name),
                              h = this.fromVersion(u.document.updateTime),
                              c = new Hi({ mapValue: { fields: u.document.fields } }),
                              f = new To(a, h, c, {}),
                              l = u.targetIds || [],
                              p = u.removedTargetIds || [];
                          e = new bs(l, p, f.key, f);
                      } else if ("documentDelete" in t) {
                          t.documentDelete;
                          var d = t.documentDelete;
                          d.document;
                          var y = this.Z(d.document),
                              v = d.readTime ? this.fromVersion(d.readTime) : Vr.min(),
                              g = new Io(y, v),
                              m = d.removedTargetIds || [];
                          e = new bs([], m, g.key, g);
                      } else if ("documentRemove" in t) {
                          t.documentRemove;
                          var w = t.documentRemove;
                          w.document;
                          var b = this.Z(w.document),
                              E = w.removedTargetIds || [];
                          e = new bs([], E, b, null);
                      } else {
                          if (!("filter" in t)) return Js();
                          t.filter;
                          var T = t.filter;
                          T.targetId;
                          var I = T.count || 0,
                              N = new ho(I),
                              A = T.targetId;
                          e = new Es(A, N);
                      }
                      return e;
                  }),
                  (Bs.prototype.yi = function (t) {
                      return "NO_CHANGE" === t ? 0 : "ADD" === t ? 1 : "REMOVE" === t ? 2 : "CURRENT" === t ? 3 : "RESET" === t ? 4 : Js();
                  }),
                  (Bs.prototype.bi = function (t) {
                      if (!("targetChange" in t)) return Vr.min();
                      var e = t.targetChange;
                      return (e.targetIds && e.targetIds.length) || !e.readTime ? Vr.min() : this.fromVersion(e.readTime);
                  }),
                  (Bs.prototype.vi = function (t) {
                      var e,
                          n = this;
                      if (t instanceof Gi) e = { update: this.Ri(t.key, t.value) };
                      else if (t instanceof Qi) e = { delete: this.fi(t.key) };
                      else if (t instanceof zi) e = { update: this.Ri(t.key, t.data), updateMask: this.Si(t.Vt) };
                      else if (t instanceof Wi)
                          e = {
                              transform: {
                                  document: this.fi(t.key),
                                  fieldTransforms: t.fieldTransforms.map(function (t) {
                                      return n.Di(t);
                                  }),
                              },
                          };
                      else {
                          if (!(t instanceof Ki)) return Js();
                          e = { verify: this.fi(t.key) };
                      }
                      return t.Rt.Tt || (e.currentDocument = this.Ci(t.Rt)), e;
                  }),
                  (Bs.prototype.Fi = function (t) {
                      var e = this,
                          n = t.currentDocument ? this.Ni(t.currentDocument) : Fi.ft();
                      if (t.update) {
                          t.update.name;
                          var r = this.Z(t.update.name),
                              i = new Hi({ mapValue: { fields: t.update.fields } });
                          if (t.updateMask) {
                              var o = this.ki(t.updateMask);
                              return new zi(r, i, o, n);
                          }
                          return new Gi(r, i, n);
                      }
                      if (t.delete) {
                          var s = this.Z(t.delete);
                          return new Qi(s, n);
                      }
                      if (t.transform) {
                          var u = this.Z(t.transform.document),
                              a = t.transform.fieldTransforms.map(function (t) {
                                  return e.$i(t);
                              });
                          return Zs(!0 === n.exists), new Wi(u, a);
                      }
                      if (t.verify) {
                          var h = this.Z(t.verify);
                          return new Ki(h, n);
                      }
                      return Js();
                  }),
                  (Bs.prototype.Ci = function (t) {
                      return void 0 !== t.updateTime ? { updateTime: this.toVersion(t.updateTime) } : void 0 !== t.exists ? { exists: t.exists } : Js();
                  }),
                  (Bs.prototype.Ni = function (t) {
                      return void 0 !== t.updateTime ? Fi.updateTime(this.fromVersion(t.updateTime)) : void 0 !== t.exists ? Fi.exists(t.exists) : Fi.ft();
                  }),
                  (Bs.prototype.Mi = function (t, e) {
                      var n = t.updateTime ? this.fromVersion(t.updateTime) : this.fromVersion(e);
                      n.isEqual(Vr.min()) && (n = this.fromVersion(e));
                      var r = null;
                      return t.transformResults && 0 < t.transformResults.length && (r = t.transformResults), new Pi(n, r);
                  }),
                  (Bs.prototype.Li = function (t, e) {
                      var n = this;
                      return t && 0 < t.length
                          ? (Zs(void 0 !== e),
                            t.map(function (t) {
                                return n.Mi(t, e);
                            }))
                          : [];
                  }),
                  (Bs.prototype.Di = function (t) {
                      var e = t.transform;
                      if (e instanceof Ni) return { fieldPath: t.field.j(), setToServerValue: "REQUEST_TIME" };
                      if (e instanceof _i) return { fieldPath: t.field.j(), appendMissingElements: { values: e.elements } };
                      if (e instanceof Si) return { fieldPath: t.field.j(), removeAllFromArray: { values: e.elements } };
                      if (e instanceof ki) return { fieldPath: t.field.j(), increment: e.ct };
                      throw Js();
                  }),
                  (Bs.prototype.$i = function (t) {
                      var e = null;
                      if ("setToServerValue" in t) Zs("REQUEST_TIME" === t.setToServerValue), (e = Ni.instance);
                      else if ("appendMissingElements" in t) {
                          var n = t.appendMissingElements.values || [];
                          e = new _i(n);
                      } else if ("removeAllFromArray" in t) {
                          var r = t.removeAllFromArray.values || [];
                          e = new Si(r);
                      } else "increment" in t ? (e = new ki(this, t.increment)) : Js();
                      var i = Hr.X(t.fieldPath);
                      return new qi(i, e);
                  }),
                  (Bs.prototype.Oi = function (t) {
                      return { documents: [this.Ei(t.path)] };
                  }),
                  (Bs.prototype.xi = function (t) {
                      Zs(1 === t.documents.length);
                      var e = t.documents[0];
                      return _o.Wt(this.Ii(e)).ee();
                  }),
                  (Bs.prototype.Bi = function (t) {
                      var e = { structuredQuery: {} },
                          n = t.path;
                      null !== t.collectionGroup
                          ? ((e.parent = this.Ei(n)), (e.structuredQuery.from = [{ collectionId: t.collectionGroup, allDescendants: !0 }]))
                          : ((e.parent = this.Ei(n.M())), (e.structuredQuery.from = [{ collectionId: n.O() }]));
                      var r = this.qi(t.filters);
                      r && (e.structuredQuery.where = r);
                      var i = this.Ui(t.orderBy);
                      i && (e.structuredQuery.orderBy = i);
                      var o = this.ri(t.limit);
                      return null !== o && (e.structuredQuery.limit = o), t.startAt && (e.structuredQuery.startAt = this.Qi(t.startAt)), t.endAt && (e.structuredQuery.endAt = this.Qi(t.endAt)), e;
                  }),
                  (Bs.prototype.Wi = function (t) {
                      var e = this.Ii(t.parent),
                          n = t.structuredQuery,
                          r = n.from ? n.from.length : 0,
                          i = null;
                      if (0 < r) {
                          Zs(1 === r);
                          var o = n.from[0];
                          o.allDescendants ? (i = o.collectionId) : (e = e.child(o.collectionId));
                      }
                      var s = [];
                      n.where && (s = this.ji(n.where));
                      var u = [];
                      n.orderBy && (u = this.Ki(n.orderBy));
                      var a = null;
                      n.limit && (a = this.oi(n.limit));
                      var h = null;
                      n.startAt && (h = this.Gi(n.startAt));
                      var c = null;
                      return n.endAt && (c = this.Gi(n.endAt)), new _o(e, i, u, s, a, "F", h, c).ee();
                  }),
                  (Bs.prototype.zi = function (t) {
                      var e = this.Hi(t.Te);
                      return null == e ? null : { "goog-listen-tags": e };
                  }),
                  (Bs.prototype.Hi = function (t) {
                      switch (t) {
                          case 0:
                              return null;
                          case 1:
                              return "existence-filter-mismatch";
                          case 2:
                              return "limbo-document";
                          default:
                              return Js();
                      }
                  }),
                  (Bs.prototype.ee = function (t) {
                      var e,
                          n = t.target;
                      return ((e = n.Ot() ? { documents: this.Oi(n) } : { query: this.Bi(n) }).targetId = t.targetId), 0 < t.resumeToken.rt() && (e.resumeToken = this.ui(t.resumeToken)), e;
                  }),
                  (Bs.prototype.qi = function (t) {
                      var e = this;
                      if (0 !== t.length) {
                          var n = t.map(function (t) {
                              return t instanceof So ? e.Yi(t) : Js();
                          });
                          return 1 === n.length ? n[0] : { compositeFilter: { op: "AND", filters: n } };
                      }
                  }),
                  (Bs.prototype.ji = function (t) {
                      var e = this;
                      return t
                          ? void 0 !== t.unaryFilter
                              ? [this.Ji(t)]
                              : void 0 !== t.fieldFilter
                              ? [this.Xi(t)]
                              : void 0 !== t.compositeFilter
                              ? t.compositeFilter.filters
                                    .map(function (t) {
                                        return e.ji(t);
                                    })
                                    .reduce(function (t, e) {
                                        return t.concat(e);
                                    })
                              : Js()
                          : [];
                  }),
                  (Bs.prototype.Ui = function (t) {
                      var e = this;
                      if (0 !== t.length)
                          return t.map(function (t) {
                              return e.Zi(t);
                          });
                  }),
                  (Bs.prototype.Ki = function (t) {
                      var e = this;
                      return t.map(function (t) {
                          return e.tn(t);
                      });
                  }),
                  (Bs.prototype.Qi = function (t) {
                      return { before: t.before, values: t.position };
                  }),
                  (Bs.prototype.Gi = function (t) {
                      var e = !!t.before,
                          n = t.values || [];
                      return new Po(n, e);
                  }),
                  (Bs.prototype.en = function (t) {
                      return js[t];
                  }),
                  (Bs.prototype.sn = function (t) {
                      switch (t) {
                          case "ASCENDING":
                              return "asc";
                          case "DESCENDING":
                              return "desc";
                          default:
                              return;
                      }
                  }),
                  (Bs.prototype.nn = function (t) {
                      return qs[t];
                  }),
                  (Bs.prototype.rn = function (t) {
                      switch (t) {
                          case "EQUAL":
                              return "==";
                          case "GREATER_THAN":
                              return ">";
                          case "GREATER_THAN_OR_EQUAL":
                              return ">=";
                          case "LESS_THAN":
                              return "<";
                          case "LESS_THAN_OR_EQUAL":
                              return "<=";
                          case "ARRAY_CONTAINS":
                              return "array-contains";
                          case "IN":
                              return "in";
                          case "ARRAY_CONTAINS_ANY":
                              return "array-contains-any";
                          case "OPERATOR_UNSPECIFIED":
                          default:
                              return Js();
                      }
                  }),
                  (Bs.prototype.hn = function (t) {
                      return { fieldPath: t.j() };
                  }),
                  (Bs.prototype.on = function (t) {
                      return Hr.X(t.fieldPath);
                  }),
                  (Bs.prototype.Zi = function (t) {
                      return { field: this.hn(t.field), direction: this.en(t.dir) };
                  }),
                  (Bs.prototype.tn = function (t) {
                      return new Vo(this.on(t.field), this.sn(t.direction));
                  }),
                  (Bs.prototype.Xi = function (t) {
                      return So.create(this.on(t.fieldFilter.field), this.rn(t.fieldFilter.op), t.fieldFilter.value);
                  }),
                  (Bs.prototype.Yi = function (t) {
                      if ("==" === t.op) {
                          if (Ti(t.value)) return { unaryFilter: { field: this.hn(t.field), op: "IS_NAN" } };
                          if (Ei(t.value)) return { unaryFilter: { field: this.hn(t.field), op: "IS_NULL" } };
                      }
                      return { fieldFilter: { field: this.hn(t.field), op: this.nn(t.op), value: t.value } };
                  }),
                  (Bs.prototype.Ji = function (t) {
                      switch (t.unaryFilter.op) {
                          case "IS_NAN":
                              var e = this.on(t.unaryFilter.field);
                              return So.create(e, "==", { doubleValue: NaN });
                          case "IS_NULL":
                              var n = this.on(t.unaryFilter.field);
                              return So.create(n, "==", { nullValue: "NULL_VALUE" });
                          case "OPERATOR_UNSPECIFIED":
                          default:
                              return Js();
                      }
                  }),
                  (Bs.prototype.Si = function (t) {
                      var e = [];
                      return (
                          t.fields.forEach(function (t) {
                              return e.push(t.j());
                          }),
                          { fieldPaths: e }
                      );
                  }),
                  (Bs.prototype.ki = function (t) {
                      var e = t.fieldPaths || [];
                      return new ji(
                          e.map(function (t) {
                              return Hr.X(t);
                          })
                      );
                  }),
                  Bs);
          function Bs(t, e) {
              (this.ii = t), (this.options = e);
          }
          function Gs(t) {
              return 4 <= t.length && "projects" === t.get(0) && "databases" === t.get(2);
          }
          var zs =
                  ((Qs.an = function (t) {
                      Qs.platform && Js(), (Qs.platform = t);
                  }),
                  (Qs.nt = function () {
                      return Qs.platform || Js(), Qs.platform;
                  }),
                  Qs),
              Ws = new h("@firebase/firestore");
          function Qs() {}
          function Ks() {
              return Ws.logLevel;
          }
          function Hs(t) {
              Ws.logLevel = t;
          }
          function Ys(t) {
              for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
              if (Ws.logLevel <= l.DEBUG) {
                  var r = e.map($s);
                  Ws.debug.apply(Ws, i(["Firestore (" + Er + "): " + t], r));
              }
          }
          function Xs(t) {
              for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
              if (Ws.logLevel <= l.ERROR) {
                  var r = e.map($s);
                  Ws.error.apply(Ws, i(["Firestore (" + Er + "): " + t], r));
              }
          }
          function $s(t) {
              if ("string" == typeof t) return t;
              var e = zs.nt();
              try {
                  return e.un(t);
              } catch (e) {
                  return t;
              }
          }
          function Js(t) {
              void 0 === t && (t = "Unexpected state");
              var e = "FIRESTORE (" + Er + ") INTERNAL ASSERTION FAILED: " + t;
              throw (Xs(e), new Error(e));
          }
          function Zs(t) {
              t || Js();
          }
          function tu(t) {
              return t;
          }
          var eu =
              ((nu.cn = function () {
                  for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = ""; n.length < 20; )
                      for (var r = zs.nt()._n(40), i = 0; i < r.length; ++i) n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
                  return n;
              }),
              nu);
          function nu() {}
          function ru(t, e) {
              return t < e ? -1 : e < t ? 1 : 0;
          }
          function iu(t, n, r) {
              return (
                  t.length === n.length &&
                  t.every(function (t, e) {
                      return r(t, n[e]);
                  })
              );
          }
          function ou(t) {
              return t + "\0";
          }
          function su(t, e, n, r, i) {
              (this.ii = t), (this.persistenceKey = e), (this.host = n), (this.ssl = r), (this.forceLongPolling = i);
          }
          var uu =
                  (Object.defineProperty(Su.prototype, "ln", {
                      get: function () {
                          return "(default)" === this.database;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (Su.prototype.isEqual = function (t) {
                      return t instanceof Su && t.projectId === this.projectId && t.database === this.database;
                  }),
                  (Su.prototype.S = function (t) {
                      return ru(this.projectId, t.projectId) || ru(this.database, t.database);
                  }),
                  Su),
              au =
                  ((_u.prototype.get = function (t) {
                      var e = this.dn(t),
                          n = this.fn[e];
                      if (void 0 !== n)
                          for (var r = 0, i = n; r < i.length; r++) {
                              var o = i[r],
                                  s = o[0],
                                  u = o[1];
                              if (s.isEqual(t)) return u;
                          }
                  }),
                  (_u.prototype.has = function (t) {
                      return void 0 !== this.get(t);
                  }),
                  (_u.prototype.set = function (t, e) {
                      var n = this.dn(t),
                          r = this.fn[n];
                      if (void 0 !== r) {
                          for (var i = 0; i < r.length; i++) if (r[i][0].isEqual(t)) return void (r[i] = [t, e]);
                          r.push([t, e]);
                      } else this.fn[n] = [[t, e]];
                  }),
                  (_u.prototype.delete = function (t) {
                      var e = this.dn(t),
                          n = this.fn[e];
                      if (void 0 === n) return !1;
                      for (var r = 0; r < n.length; r++) if (n[r][0].isEqual(t)) return 1 === n.length ? delete this.fn[e] : n.splice(r, 1), !0;
                      return !1;
                  }),
                  (_u.prototype.forEach = function (u) {
                      Zr(this.fn, function (t, e) {
                          for (var n = 0, r = e; n < r.length; n++) {
                              var i = r[n],
                                  o = i[0],
                                  s = i[1];
                              u(o, s);
                          }
                      });
                  }),
                  (_u.prototype.B = function () {
                      return ti(this.fn);
                  }),
                  _u),
              hu =
                  ((Au.prototype.at = function (t, e, n) {
                      for (var r = n.En, i = 0; i < this.mutations.length; i++) {
                          var o = this.mutations[i];
                          if (o.key.isEqual(t)) {
                              var s = r[i];
                              e = o.at(e, s);
                          }
                      }
                      return e;
                  }),
                  (Au.prototype.ot = function (t, e) {
                      for (var n = 0, r = this.baseMutations; n < r.length; n++) {
                          var i = r[n];
                          i.key.isEqual(t) && (e = i.ot(e, e, this.Tn));
                      }
                      for (var o = e, s = 0, u = this.mutations; s < u.length; s++) {
                          var a = u[s];
                          a.key.isEqual(t) && (e = a.ot(e, o, this.Tn));
                      }
                      return e;
                  }),
                  (Au.prototype.In = function (n) {
                      var r = this,
                          i = n;
                      return (
                          this.mutations.forEach(function (t) {
                              var e = r.ot(t.key, n.get(t.key));
                              e && (i = i.Ae(t.key, e));
                          }),
                          i
                      );
                  }),
                  (Au.prototype.keys = function () {
                      return this.mutations.reduce(function (t, e) {
                          return t.add(e.key);
                      }, gs());
                  }),
                  (Au.prototype.isEqual = function (t) {
                      return (
                          this.batchId === t.batchId &&
                          iu(this.mutations, t.mutations, function (t, e) {
                              return t.isEqual(e);
                          }) &&
                          iu(this.baseMutations, t.baseMutations, function (t, e) {
                              return t.isEqual(e);
                          })
                      );
                  }),
                  Au),
              cu =
                  ((Nu.from = function (t, e, n, r) {
                      Zs(t.mutations.length === n.length);
                      for (var i = ys(), o = t.mutations, s = 0; s < o.length; s++) i = i.Ae(o[s].key, n[s].version);
                      return new Nu(t, e, n, r, i);
                  }),
                  Nu),
              fu =
                  ((Iu.prototype.catch = function (t) {
                      return this.next(void 0, t);
                  }),
                  (Iu.prototype.next = function (r, i) {
                      var o = this;
                      return (
                          this.Vn && Js(),
                          (this.Vn = !0),
                          this.Pn
                              ? this.error
                                  ? this.gn(i, this.error)
                                  : this.pn(r, this.result)
                              : new Iu(function (e, n) {
                                    (o.An = function (t) {
                                        o.pn(r, t).next(e, n);
                                    }),
                                        (o.mn = function (t) {
                                            o.gn(i, t).next(e, n);
                                        });
                                })
                      );
                  }),
                  (Iu.prototype.yn = function () {
                      var n = this;
                      return new Promise(function (t, e) {
                          n.next(t, e);
                      });
                  }),
                  (Iu.prototype.bn = function (t) {
                      try {
                          var e = t();
                          return e instanceof Iu ? e : Iu.resolve(e);
                      } catch (t) {
                          return Iu.reject(t);
                      }
                  }),
                  (Iu.prototype.pn = function (t, e) {
                      return t
                          ? this.bn(function () {
                                return t(e);
                            })
                          : Iu.resolve(e);
                  }),
                  (Iu.prototype.gn = function (t, e) {
                      return t
                          ? this.bn(function () {
                                return t(e);
                            })
                          : Iu.reject(e);
                  }),
                  (Iu.resolve = function (n) {
                      return new Iu(function (t, e) {
                          t(n);
                      });
                  }),
                  (Iu.reject = function (n) {
                      return new Iu(function (t, e) {
                          e(n);
                      });
                  }),
                  (Iu.vn = function (t) {
                      return new Iu(function (e, n) {
                          var r = 0,
                              i = 0,
                              o = !1;
                          t.forEach(function (t) {
                              ++r,
                                  t.next(
                                      function () {
                                          ++i, o && i === r && e();
                                      },
                                      function (t) {
                                          return n(t);
                                      }
                                  );
                          }),
                              (o = !0),
                              i === r && e();
                      });
                  }),
                  (Iu.Sn = function (t) {
                      for (
                          var n = Iu.resolve(!1),
                              e = function (e) {
                                  n = n.next(function (t) {
                                      return t ? Iu.resolve(t) : e();
                                  });
                              },
                              r = 0,
                              i = t;
                          r < i.length;
                          r++
                      )
                          e(i[r]);
                      return n;
                  }),
                  (Iu.forEach = function (t, n) {
                      var r = this,
                          i = [];
                      return (
                          t.forEach(function (t, e) {
                              i.push(n.call(r, t, e));
                          }),
                          this.vn(i)
                      );
                  }),
                  Iu),
              lu =
                  (Object.defineProperty(Tu.prototype, "readTime", {
                      get: function () {
                          return this.Fn;
                      },
                      set: function (t) {
                          this.Fn = t;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (Tu.prototype.Nn = function (t, e) {
                      this.kn(), (this.readTime = e), this.Dn.set(t.key, t);
                  }),
                  (Tu.prototype.$n = function (t, e) {
                      this.kn(), e && (this.readTime = e), this.Dn.set(t, null);
                  }),
                  (Tu.prototype.Mn = function (t, e) {
                      this.kn();
                      var n = this.Dn.get(e);
                      return void 0 !== n ? fu.resolve(n) : this.Ln(t, e);
                  }),
                  (Tu.prototype.getEntries = function (t, e) {
                      return this.On(t, e);
                  }),
                  (Tu.prototype.apply = function (t) {
                      return this.kn(), (this.Cn = !0), this.xn(t);
                  }),
                  (Tu.prototype.kn = function () {}),
                  Tu),
              pu = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
              du =
                  ((Eu.prototype.qn = function (t) {
                      this.Bn.push(t);
                  }),
                  (Eu.prototype.Un = function () {
                      this.Bn.forEach(function (t) {
                          return t();
                      });
                  }),
                  Eu),
              yu =
                  ((bu.prototype.Kn = function (e, n) {
                      var r = this;
                      return this.Wn.Gn(e, n).next(function (t) {
                          return r.zn(e, n, t);
                      });
                  }),
                  (bu.prototype.zn = function (t, r, i) {
                      return this.Qn.Mn(t, r).next(function (t) {
                          for (var e = 0, n = i; e < n.length; e++) t = n[e].ot(r, t);
                          return t;
                      });
                  }),
                  (bu.prototype.Hn = function (t, e, i) {
                      var o = fs();
                      return (
                          e.forEach(function (t, e) {
                              for (var n = 0, r = i; n < r.length; n++) e = r[n].ot(t, e);
                              o = o.Ae(t, e);
                          }),
                          o
                      );
                  }),
                  (bu.prototype.Yn = function (e, t) {
                      var n = this;
                      return this.Qn.getEntries(e, t).next(function (t) {
                          return n.Jn(e, t);
                      });
                  }),
                  (bu.prototype.Jn = function (r, i) {
                      var o = this;
                      return this.Wn.Xn(r, i).next(function (t) {
                          var e = o.Hn(r, i, t),
                              n = cs();
                          return (
                              e.forEach(function (t, e) {
                                  (e = e || new Io(t, Vr.min())), (n = n.Ae(t, e));
                              }),
                              n
                          );
                      });
                  }),
                  (bu.prototype.Zn = function (t, e, n) {
                      return e.Ot() ? this.tr(t, e.path) : e._e() ? this.er(t, e, n) : this.sr(t, e, n);
                  }),
                  (bu.prototype.tr = function (t, e) {
                      return this.Kn(t, new Xr(e)).next(function (t) {
                          var e = ps();
                          return t instanceof To && (e = e.Ae(t.key, t)), e;
                      });
                  }),
                  (bu.prototype.er = function (n, r, i) {
                      var o = this,
                          s = r.collectionGroup,
                          u = ps();
                      return this.jn.ir(n, s).next(function (t) {
                          return fu
                              .forEach(t, function (t) {
                                  var e = r.Zt(t.child(s));
                                  return o.sr(n, e, i).next(function (t) {
                                      t.forEach(function (t, e) {
                                          u = u.Ae(t, e);
                                      });
                                  });
                              })
                              .next(function () {
                                  return u;
                              });
                      });
                  }),
                  (bu.prototype.sr = function (e, n, t) {
                      var c,
                          f,
                          r = this;
                      return this.Qn.Zn(e, n, t)
                          .next(function (t) {
                              return (c = t), r.Wn.nr(e, n);
                          })
                          .next(function (t) {
                              return (
                                  (f = t),
                                  r.rr(e, f, c).next(function (t) {
                                      c = t;
                                      for (var e = 0, n = f; e < n.length; e++)
                                          for (var r = n[e], i = 0, o = r.mutations; i < o.length; i++) {
                                              var s = o[i],
                                                  u = s.key,
                                                  a = c.get(u),
                                                  h = s.ot(a, a, r.Tn);
                                              c = h instanceof To ? c.Ae(u, h) : c.remove(u);
                                          }
                                  })
                              );
                          })
                          .next(function () {
                              return (
                                  c.forEach(function (t, e) {
                                      n.matches(e) || (c = c.remove(t));
                                  }),
                                  c
                              );
                          });
                  }),
                  (bu.prototype.rr = function (t, e, n) {
                      for (var r = gs(), i = 0, o = e; i < o.length; i++)
                          for (var s = 0, u = o[i].mutations; s < u.length; s++) {
                              var a = u[s];
                              a instanceof zi && null === n.get(a.key) && (r = r.add(a.key));
                          }
                      var h = n;
                      return this.Qn.getEntries(t, r).next(function (t) {
                          return (
                              t.forEach(function (t, e) {
                                  null !== e && e instanceof To && (h = h.Ae(t, e));
                              }),
                              h
                          );
                      });
                  }),
                  bu),
              vu =
                  ((wu.ar = function (t, e) {
                      for (var n = gs(), r = gs(), i = 0, o = e.docChanges; i < o.length; i++) {
                          var s = o[i];
                          switch (s.type) {
                              case 0:
                                  n = n.add(s.doc.key);
                                  break;
                              case 1:
                                  r = r.add(s.doc.key);
                          }
                      }
                      return new wu(t, e.fromCache, n, r);
                  }),
                  wu),
              gu =
                  ((mu.prototype.cr = function (t) {
                      return (this.previousValue = Math.max(t, this.previousValue)), this.previousValue;
                  }),
                  (mu.prototype.next = function () {
                      var t = ++this.previousValue;
                      return this._r && this._r(t), t;
                  }),
                  mu);
          function mu(t, e) {
              var n = this;
              (this.previousValue = t),
                  e &&
                      ((e.ur = function (t) {
                          return n.cr(t);
                      }),
                      (this._r = function (t) {
                          return e.lr(t);
                      }));
          }
          function wu(t, e, n, r) {
              (this.targetId = t), (this.fromCache = e), (this.hr = n), (this.or = r);
          }
          function bu(t, e, n) {
              (this.Qn = t), (this.Wn = e), (this.jn = n);
          }
          function Eu() {
              this.Bn = [];
          }
          function Tu() {
              (this.Dn = new au(function (t) {
                  return t.toString();
              })),
                  (this.Cn = !1);
          }
          function Iu(t) {
              var e = this;
              (this.An = null),
                  (this.mn = null),
                  (this.result = void 0),
                  (this.error = void 0),
                  (this.Pn = !1),
                  (this.Vn = !1),
                  t(
                      function (t) {
                          (e.Pn = !0), (e.result = t), e.An && e.An(t);
                      },
                      function (t) {
                          (e.Pn = !0), (e.error = t), e.mn && e.mn(t);
                      }
                  );
          }
          function Nu(t, e, n, r, i) {
              (this.batch = t), (this.wn = e), (this.En = n), (this.streamToken = r), (this.Rn = i);
          }
          function Au(t, e, n, r) {
              (this.batchId = t), (this.Tn = e), (this.baseMutations = n), (this.mutations = r);
          }
          function _u(t) {
              (this.dn = t), (this.fn = {});
          }
          function Su(t, e) {
              (this.projectId = t), (this.database = e || "(default)");
          }
          gu.dr = -1;
          function ku() {
              var n = this;
              this.promise = new Promise(function (t, e) {
                  (n.resolve = t), (n.reject = e);
              });
          }
          var Du =
                  ((Vu.prototype.reset = function () {
                      this.Ar = 0;
                  }),
                  (Vu.prototype.Vr = function () {
                      this.Ar = this.Rr;
                  }),
                  (Vu.prototype.gr = function (t) {
                      var e = this;
                      this.cancel();
                      var n = Math.floor(this.Ar + this.pr()),
                          r = Math.max(0, Date.now() - this.Pr),
                          i = Math.max(0, n - r);
                      0 < i && Ys("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.Ar + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"),
                          (this.mr = this.Tr.yr(this.Er, i, function () {
                              return (e.Pr = Date.now()), t();
                          })),
                          (this.Ar *= this.wr),
                          this.Ar < this.Ir && (this.Ar = this.Ir),
                          this.Ar > this.Rr && (this.Ar = this.Rr);
                  }),
                  (Vu.prototype.cancel = function () {
                      null !== this.mr && (this.mr.cancel(), (this.mr = null));
                  }),
                  (Vu.prototype.pr = function () {
                      return (Math.random() - 0.5) * this.Ar;
                  }),
                  Vu),
              xu =
                  ((Pu.Cr = function (t, e, n, r, i) {
                      var o = new Pu(t, e, Date.now() + n, r, i);
                      return o.start(n), o;
                  }),
                  (Pu.prototype.start = function (t) {
                      var e = this;
                      this.Fr = setTimeout(function () {
                          return e.Nr();
                      }, t);
                  }),
                  (Pu.prototype.kr = function () {
                      return this.Nr();
                  }),
                  (Pu.prototype.cancel = function (t) {
                      null !== this.Fr && (this.clearTimeout(), this.Dr.reject(new kr(Sr.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
                  }),
                  (Pu.prototype.Nr = function () {
                      var e = this;
                      this.br.$r(function () {
                          return null !== e.Fr
                              ? (e.clearTimeout(),
                                e.op().then(function (t) {
                                    return e.Dr.resolve(t);
                                }))
                              : Promise.resolve();
                      });
                  }),
                  (Pu.prototype.clearTimeout = function () {
                      null !== this.Fr && (this.Sr(this), clearTimeout(this.Fr), (this.Fr = null));
                  }),
                  Pu),
              Ou =
                  (Object.defineProperty(Ru.prototype, "Kr", {
                      get: function () {
                          return this.Or;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (Ru.prototype.$r = function (t) {
                      this.enqueue(t);
                  }),
                  (Ru.prototype.Gr = function (t) {
                      this.zr(), this.Hr(t);
                  }),
                  (Ru.prototype.Yr = function (t) {
                      return this.zr(), this.Hr(t);
                  }),
                  (Ru.prototype.Jr = function (n) {
                      return y(this, void 0, void 0, function () {
                          var e;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return this.zr(), this.Or ? [3, 2] : ((this.Or = !0), (e = zs.nt().window) && e.removeEventListener("visibilitychange", this.Wr), [4, this.Yr(n)]);
                                  case 1:
                                      t.sent(), (t.label = 2);
                                  case 2:
                                      return [2];
                              }
                          });
                      });
                  }),
                  (Ru.prototype.enqueue = function (t) {
                      return this.zr(), this.Or ? new Promise(function (t) {}) : this.Hr(t);
                  }),
                  (Ru.prototype.Xr = function (i) {
                      var t = this;
                      this.zr(),
                          this.Or ||
                              (this.Lr = this.Lr.then(function () {
                                  var n = new ku(),
                                      r = function () {
                                          return y(t, void 0, void 0, function () {
                                              var e;
                                              return v(this, function (t) {
                                                  switch (t.label) {
                                                      case 0:
                                                          return t.trys.push([0, 2, , 3]), [4, i()];
                                                      case 1:
                                                          return t.sent(), n.resolve(), this.Qr.reset(), [3, 3];
                                                      case 2:
                                                          if ("IndexedDbTransactionError" !== (e = t.sent()).name) throw (n.resolve(), e);
                                                          return Ys("AsyncQueue", "Operation failed with retryable error: " + e), this.Qr.gr(r), [3, 3];
                                                      case 3:
                                                          return [2];
                                                  }
                                              });
                                          });
                                      };
                                  return t.$r(r), n.promise;
                              }));
                  }),
                  (Ru.prototype.Hr = function (t) {
                      var e = this,
                          n = this.Mr.then(function () {
                              return (
                                  (e.qr = !0),
                                  t()
                                      .catch(function (t) {
                                          throw ((e.Br = t), (e.qr = !1), Xs("INTERNAL UNHANDLED ERROR: ", t.stack || t.message || ""), t);
                                      })
                                      .then(function (t) {
                                          return (e.qr = !1), t;
                                      })
                              );
                          });
                      return (this.Mr = n);
                  }),
                  (Ru.prototype.yr = function (t, e, n) {
                      var r = this;
                      this.zr(), -1 < this.Ur.indexOf(t) && (e = 0);
                      var i = xu.Cr(this, t, e, n, function (t) {
                          return r.Zr(t);
                      });
                      return this.xr.push(i), i;
                  }),
                  (Ru.prototype.zr = function () {
                      this.Br && Js();
                  }),
                  (Ru.prototype.th = function () {}),
                  (Ru.prototype.eh = function () {
                      return y(this, void 0, void 0, function () {
                          var e;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return [4, (e = this.Mr)];
                                  case 1:
                                      t.sent(), (t.label = 2);
                                  case 2:
                                      if (e !== this.Mr) return [3, 0];
                                      t.label = 3;
                                  case 3:
                                      return [2];
                              }
                          });
                      });
                  }),
                  (Ru.prototype.sh = function (t) {
                      for (var e = 0, n = this.xr; e < n.length; e++) if (n[e].Er === t) return !0;
                      return !1;
                  }),
                  (Ru.prototype.jr = function (r) {
                      var i = this;
                      return this.eh().then(function () {
                          i.xr.sort(function (t, e) {
                              return t.vr - e.vr;
                          });
                          for (var t = 0, e = i.xr; t < e.length; t++) {
                              var n = e[t];
                              if ((n.kr(), "all" !== r && n.Er === r)) break;
                          }
                          return i.eh();
                      });
                  }),
                  (Ru.prototype.ih = function (t) {
                      this.Ur.push(t);
                  }),
                  (Ru.prototype.Zr = function (t) {
                      var e = this.xr.indexOf(t);
                      this.xr.splice(e, 1);
                  }),
                  Ru);
          function Ru() {
              var t = this;
              (this.Mr = Promise.resolve()),
                  (this.Lr = Promise.resolve()),
                  (this.Or = !1),
                  (this.xr = []),
                  (this.Br = null),
                  (this.qr = !1),
                  (this.Ur = []),
                  (this.Qr = new Du(this, "async_queue_retry")),
                  (this.Wr = function () {
                      t.jr("async_queue_retry");
                  });
              var e = zs.nt().window;
              e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.Wr);
          }
          function Pu(t, e, n, r, i) {
              (this.br = t),
                  (this.Er = e),
                  (this.vr = n),
                  (this.op = r),
                  (this.Sr = i),
                  (this.Dr = new ku()),
                  (this.then = this.Dr.promise.then.bind(this.Dr.promise)),
                  (this.catch = this.Dr.promise.catch.bind(this.Dr.promise)),
                  this.Dr.promise.catch(function (t) {});
          }
          function Vu(t, e, n, r, i) {
              void 0 === n && (n = 1e3),
                  void 0 === r && (r = 1.5),
                  void 0 === i && (i = 6e4),
                  (this.Tr = t),
                  (this.Er = e),
                  (this.Ir = n),
                  (this.wr = r),
                  (this.Rr = i),
                  (this.Ar = 0),
                  (this.mr = null),
                  (this.Pr = Date.now()),
                  this.reset();
          }
          function Lu(t, e) {
              var n = t[0],
                  r = t[1],
                  i = e[0],
                  o = e[1],
                  s = ru(n, i);
              return 0 === s ? ru(r, o) : s;
          }
          var Cu =
                  ((qu.prototype.hh = function () {
                      return ++this.rh;
                  }),
                  (qu.prototype.oh = function (t) {
                      var e = [t, this.hh()];
                      if (this.buffer.size < this.nh) this.buffer = this.buffer.add(e);
                      else {
                          var n = this.buffer.last();
                          Lu(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e));
                      }
                  }),
                  Object.defineProperty(qu.prototype, "maxValue", {
                      get: function () {
                          return this.buffer.last()[0];
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  qu),
              Mu = { ah: !1, uh: 0, _h: 0, lh: 0 },
              Uu =
                  ((ju.Eh = function (t) {
                      return new ju(t, ju.Ih, ju.wh);
                  }),
                  ju);
          function ju(t, e, n) {
              (this.dh = t), (this.fh = e), (this.Th = n);
          }
          function qu(t) {
              (this.nh = t), (this.buffer = new os(Lu)), (this.rh = 0);
          }
          (Uu.Rh = -1), (Uu.Ah = 1048576), (Uu.mh = 41943040), (Uu.Ih = 10), (Uu.wh = 1e3), (Uu.Ph = new Uu(Uu.mh, Uu.Ih, Uu.wh)), (Uu.DISABLED = new Uu(Uu.Rh, 0, 0));
          var Fu =
                  ((zu.prototype.start = function (t) {
                      this.Vh.yh.dh !== Uu.Rh && this.bh(t);
                  }),
                  (zu.prototype.stop = function () {
                      this.ph && (this.ph.cancel(), (this.ph = null));
                  }),
                  Object.defineProperty(zu.prototype, "vh", {
                      get: function () {
                          return null !== this.ph;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (zu.prototype.bh = function (n) {
                      var t = this,
                          e = this.gh ? 3e5 : 6e4;
                      Ys("LruGarbageCollector", "Garbage collection scheduled in " + e + "ms"),
                          (this.ph = this.br.yr("lru_garbage_collection", e, function () {
                              return y(t, void 0, void 0, function () {
                                  var e;
                                  return v(this, function (t) {
                                      switch (t.label) {
                                          case 0:
                                              (this.ph = null), (this.gh = !0), (t.label = 1);
                                          case 1:
                                              return t.trys.push([1, 3, , 7]), [4, n.Sh(this.Vh)];
                                          case 2:
                                              return t.sent(), [3, 7];
                                          case 3:
                                              return "IndexedDbTransactionError" !== (e = t.sent()).name ? [3, 4] : (Ys("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", e), [3, 6]);
                                          case 4:
                                              return [4, Ih(e)];
                                          case 5:
                                              t.sent(), (t.label = 6);
                                          case 6:
                                              return [3, 7];
                                          case 7:
                                              return [4, this.bh(n)];
                                          case 8:
                                              return t.sent(), [2];
                                      }
                                  });
                              });
                          }));
                  }),
                  zu),
              Bu =
                  ((Gu.prototype.Ch = function (t, e) {
                      return this.Dh.Fh(t).next(function (t) {
                          return Math.floor((e / 100) * t);
                      });
                  }),
                  (Gu.prototype.Nh = function (t, e) {
                      var n = this;
                      if (0 === e) return fu.resolve(gu.dr);
                      var r = new Cu(e);
                      return this.Dh.js(t, function (t) {
                          return r.oh(t.sequenceNumber);
                      })
                          .next(function () {
                              return n.Dh.kh(t, function (t) {
                                  return r.oh(t);
                              });
                          })
                          .next(function () {
                              return r.maxValue;
                          });
                  }),
                  (Gu.prototype.$h = function (t, e, n) {
                      return this.Dh.$h(t, e, n);
                  }),
                  (Gu.prototype.Mh = function (t, e) {
                      return this.Dh.Mh(t, e);
                  }),
                  (Gu.prototype.Lh = function (e, n) {
                      var r = this;
                      return this.yh.dh === Uu.Rh
                          ? (Ys("LruGarbageCollector", "Garbage collection skipped; disabled"), fu.resolve(Mu))
                          : this.Oh(e).next(function (t) {
                                return t < r.yh.dh ? (Ys("LruGarbageCollector", "Garbage collection skipped; Cache size " + t + " is lower than threshold " + r.yh.dh), Mu) : r.xh(e, n);
                            });
                  }),
                  (Gu.prototype.Oh = function (t) {
                      return this.Dh.Oh(t);
                  }),
                  (Gu.prototype.xh = function (e, n) {
                      var r,
                          i,
                          o,
                          s,
                          u,
                          a,
                          h,
                          c = this,
                          f = Date.now();
                      return this.Ch(e, this.yh.fh)
                          .next(function (t) {
                              return (i = t > c.yh.Th ? (Ys("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + c.yh.Th + " from " + t), c.yh.Th) : t), (s = Date.now()), c.Nh(e, i);
                          })
                          .next(function (t) {
                              return (r = t), (u = Date.now()), c.$h(e, r, n);
                          })
                          .next(function (t) {
                              return (o = t), (a = Date.now()), c.Mh(e, r);
                          })
                          .next(function (t) {
                              return (
                                  (h = Date.now()),
                                  Ks() <= l.DEBUG &&
                                      Ys(
                                          "LruGarbageCollector",
                                          "LRU Garbage Collection\n\tCounted targets in " +
                                              (s - f) +
                                              "ms\n\tDetermined least recently used " +
                                              i +
                                              " in " +
                                              (u - s) +
                                              "ms\n\tRemoved " +
                                              o +
                                              " targets in " +
                                              (a - u) +
                                              "ms\n\tRemoved " +
                                              t +
                                              " documents in " +
                                              (h - a) +
                                              "ms\nTotal Duration: " +
                                              (h - f) +
                                              "ms"
                                      ),
                                  fu.resolve({ ah: !0, uh: i, _h: o, lh: t })
                              );
                          });
                  }),
                  Gu);
          function Gu(t, e) {
              (this.Dh = t), (this.yh = e);
          }
          function zu(t, e) {
              (this.Vh = t), (this.br = e), (this.gh = !1), (this.ph = null);
          }
          function Wu(t) {
              for (var e = "", n = 0; n < t.length; n++) 0 < e.length && (e = Ku(e)), (e = Qu(t.get(n), e));
              return Ku(e);
          }
          function Qu(t, e) {
              for (var n = e, r = t.length, i = 0; i < r; i++) {
                  var o = t.charAt(i);
                  switch (o) {
                      case "\0":
                          n += "";
                          break;
                      case "":
                          n += "";
                          break;
                      default:
                          n += o;
                  }
              }
              return n;
          }
          function Ku(t) {
              return t + "";
          }
          function Hu(t) {
              var e = t.length;
              if ((Zs(2 <= e), 2 === e)) return Zs("" === t.charAt(0) && "" === t.charAt(1)), Cr.G;
              for (var n = e - 2, r = [], i = "", o = 0; o < e; ) {
                  var s = t.indexOf("", o);
                  switch (((s < 0 || n < s) && Js(), t.charAt(s + 1))) {
                      case "":
                          var u = t.substring(o, s),
                              a = void 0;
                          0 === i.length ? (a = u) : ((a = i += u), (i = "")), r.push(a);
                          break;
                      case "":
                          (i += t.substring(o, s)), (i += "\0");
                          break;
                      case "":
                          i += t.substring(o, s + 1);
                          break;
                      default:
                          Js();
                  }
                  o = s + 2;
              }
              return new Cr(r);
          }
          var Yu,
              Xu =
                  ((oa.qh = function (o, t, s) {
                      return (
                          Ys("SimpleDb", "Opening database:", o),
                          new fu(function (n, r) {
                              var i = window.indexedDB.open(o, t);
                              (i.onsuccess = function (t) {
                                  var e = t.target.result;
                                  n(new oa(e));
                              }),
                                  (i.onblocked = function () {
                                      r(new kr(Sr.FAILED_PRECONDITION, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
                                  }),
                                  (i.onerror = function (t) {
                                      var e = t.target.error;
                                      "VersionError" === e.name
                                          ? r(
                                                new kr(
                                                    Sr.FAILED_PRECONDITION,
                                                    "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh."
                                                )
                                            )
                                          : r(e);
                                  }),
                                  (i.onupgradeneeded = function (t) {
                                      Ys("SimpleDb", 'Database "' + o + '" requires upgrade from version:', t.oldVersion);
                                      var e = t.target.result;
                                      s.createOrUpgrade(e, i.transaction, t.oldVersion, La).next(function () {
                                          Ys("SimpleDb", "Database upgrade to version " + La + " complete");
                                      });
                                  });
                          }).yn()
                      );
                  }),
                  (oa.delete = function (t) {
                      return Ys("SimpleDb", "Removing database:", t), sa(window.indexedDB.deleteDatabase(t)).yn();
                  }),
                  (oa.Uh = function () {
                      if ("undefined" == typeof window || null == window.indexedDB) return !1;
                      if (oa.Qh()) return !0;
                      if (void 0 === window.navigator) return !1;
                      var t = p(),
                          e = oa.Bh(t),
                          n = 0 < e && e < 10,
                          r = oa.Wh(t),
                          i = 0 < r && r < 4.5;
                      return !(0 < t.indexOf("MSIE ") || 0 < t.indexOf("Trident/") || 0 < t.indexOf("Edge/") || n || i);
                  }),
                  (oa.Qh = function () {
                      var t;
                      return "undefined" != typeof __PRIVATE_process && "YES" === (null === (t = __PRIVATE_process.__PRIVATE_env) || void 0 === t ? void 0 : t.jh);
                  }),
                  (oa.Kh = function (t, e) {
                      return t.store(e);
                  }),
                  (oa.Bh = function (t) {
                      var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
                          n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
                      return Number(n);
                  }),
                  (oa.Wh = function (t) {
                      var e = t.match(/Android ([\d.]+)/i),
                          n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
                      return Number(n);
                  }),
                  (oa.prototype.Gh = function (e) {
                      this.db.onversionchange = function (t) {
                          return e(t);
                      };
                  }),
                  (oa.prototype.runTransaction = function (r, h, c) {
                      return y(this, void 0, void 0, function () {
                          var s, u, e, a, n;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      (s = "readonly" === r),
                                          (u = 0),
                                          (e = function () {
                                              var e, n, r, i, o;
                                              return v(this, function (t) {
                                                  switch (t.label) {
                                                      case 0:
                                                          ++u, (e = Zu.open(a.db, s ? "readonly" : "readwrite", h)), (t.label = 1);
                                                      case 1:
                                                          return (
                                                              t.trys.push([1, 3, , 4]),
                                                              (n = c(e)
                                                                  .catch(function (t) {
                                                                      return e.abort(t), fu.reject(t);
                                                                  })
                                                                  .yn()),
                                                              (r = {}),
                                                              n.catch(function () {}),
                                                              [4, e.zh]
                                                          );
                                                      case 2:
                                                          return [2, ((r.value = (t.sent(), n)), r)];
                                                      case 3:
                                                          return (
                                                              (i = t.sent()),
                                                              (o = "FirebaseError" !== i.name && u < 3),
                                                              Ys("SimpleDb", "Transaction failed with error: %s. Retrying: %s.", i.message, o),
                                                              o ? [3, 4] : [2, { value: Promise.reject(i) }]
                                                          );
                                                      case 4:
                                                          return [2];
                                                  }
                                              });
                                          }),
                                          (a = this),
                                          (t.label = 1);
                                  case 1:
                                      return [5, e()];
                                  case 2:
                                      if ("object" == typeof (n = t.sent())) return [2, n.value];
                                      t.label = 3;
                                  case 3:
                                      return [3, 1];
                                  case 4:
                                      return [2];
                              }
                          });
                      });
                  }),
                  (oa.prototype.close = function () {
                      this.db.close();
                  }),
                  oa),
              $u =
                  (Object.defineProperty(ia.prototype, "Pn", {
                      get: function () {
                          return this.Yh;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Object.defineProperty(ia.prototype, "Xh", {
                      get: function () {
                          return this.Jh;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Object.defineProperty(ia.prototype, "cursor", {
                      set: function (t) {
                          this.Hh = t;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (ia.prototype.done = function () {
                      this.Yh = !0;
                  }),
                  (ia.prototype.Zh = function (t) {
                      this.Jh = t;
                  }),
                  (ia.prototype.delete = function () {
                      return sa(this.Hh.delete());
                  }),
                  ia),
              Ju = (n(ra, (Yu = kr)), ra),
              Zu =
                  ((na.open = function (t, e, n) {
                      return new na(t.transaction(n, e));
                  }),
                  Object.defineProperty(na.prototype, "zh", {
                      get: function () {
                          return this.to.promise;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (na.prototype.abort = function (t) {
                      t && this.to.reject(t), this.aborted || (Ys("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), (this.aborted = !0), this.transaction.abort());
                  }),
                  (na.prototype.store = function (t) {
                      var e = this.transaction.objectStore(t);
                      return new ta(e);
                  }),
                  na),
              ta =
                  ((ea.prototype.put = function (t, e) {
                      return sa(void 0 !== e ? (Ys("SimpleDb", "PUT", this.store.name, t, e), this.store.put(e, t)) : (Ys("SimpleDb", "PUT", this.store.name, "<auto-key>", t), this.store.put(t)));
                  }),
                  (ea.prototype.add = function (t) {
                      return Ys("SimpleDb", "ADD", this.store.name, t, t), sa(this.store.add(t));
                  }),
                  (ea.prototype.get = function (e) {
                      var n = this;
                      return sa(this.store.get(e)).next(function (t) {
                          return void 0 === t && (t = null), Ys("SimpleDb", "GET", n.store.name, e, t), t;
                      });
                  }),
                  (ea.prototype.delete = function (t) {
                      return Ys("SimpleDb", "DELETE", this.store.name, t), sa(this.store.delete(t));
                  }),
                  (ea.prototype.count = function () {
                      return Ys("SimpleDb", "COUNT", this.store.name), sa(this.store.count());
                  }),
                  (ea.prototype.eo = function (t, e) {
                      var n = this.cursor(this.options(t, e)),
                          r = [];
                      return this.so(n, function (t, e) {
                          r.push(e);
                      }).next(function () {
                          return r;
                      });
                  }),
                  (ea.prototype.io = function (t, e) {
                      Ys("SimpleDb", "DELETE ALL", this.store.name);
                      var n = this.options(t, e);
                      n.no = !1;
                      var r = this.cursor(n);
                      return this.so(r, function (t, e, n) {
                          return n.delete();
                      });
                  }),
                  (ea.prototype.ro = function (t, e) {
                      var n;
                      e ? (n = t) : ((n = {}), (e = t));
                      var r = this.cursor(n);
                      return this.so(r, e);
                  }),
                  (ea.prototype.ho = function (i) {
                      var t = this.cursor({});
                      return new fu(function (n, r) {
                          (t.onerror = function (t) {
                              var e = aa(t.target.error);
                              r(e);
                          }),
                              (t.onsuccess = function (t) {
                                  var e = t.target.result;
                                  e
                                      ? i(e.primaryKey, e.value).next(function (t) {
                                            t ? e.continue() : n();
                                        })
                                      : n();
                              });
                      });
                  }),
                  (ea.prototype.so = function (t, s) {
                      var u = [];
                      return new fu(function (o, e) {
                          (t.onerror = function (t) {
                              e(t.target.error);
                          }),
                              (t.onsuccess = function (t) {
                                  var e = t.target.result;
                                  if (e) {
                                      var n = new $u(e),
                                          r = s(e.primaryKey, e.value, n);
                                      if (r instanceof fu) {
                                          var i = r.catch(function (t) {
                                              return n.done(), fu.reject(t);
                                          });
                                          u.push(i);
                                      }
                                      n.Pn ? o() : null === n.Xh ? e.continue() : e.continue(n.Xh);
                                  } else o();
                              });
                      }).next(function () {
                          return fu.vn(u);
                      });
                  }),
                  (ea.prototype.options = function (t, e) {
                      var n = void 0;
                      return void 0 !== t && ("string" == typeof t ? (n = t) : (e = t)), { index: n, range: e };
                  }),
                  (ea.prototype.cursor = function (t) {
                      var e = "next";
                      if ((t.reverse && (e = "prev"), t.index)) {
                          var n = this.store.index(t.index);
                          return t.no ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
                      }
                      return this.store.openCursor(t.range, e);
                  }),
                  ea);
          function ea(t) {
              this.store = t;
          }
          function na(t) {
              var n = this;
              (this.transaction = t),
                  (this.aborted = !1),
                  (this.to = new ku()),
                  (this.transaction.oncomplete = function () {
                      n.to.resolve();
                  }),
                  (this.transaction.onabort = function () {
                      t.error ? n.to.reject(new Ju(t.error)) : n.to.resolve();
                  }),
                  (this.transaction.onerror = function (t) {
                      var e = aa(t.target.error);
                      n.to.reject(new Ju(e));
                  });
          }
          function ra(t) {
              var e = this;
              return ((e = Yu.call(this, Sr.UNAVAILABLE, "IndexedDB transaction failed: " + t) || this).name = "IndexedDbTransactionError"), e;
          }
          function ia(t) {
              (this.Hh = t), (this.Yh = !1), (this.Jh = null);
          }
          function oa(t) {
              (this.db = t),
                  12.2 === oa.Bh(p()) && Xs("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
          }
          function sa(t) {
              return new fu(function (n, r) {
                  (t.onsuccess = function (t) {
                      var e = t.target.result;
                      n(e);
                  }),
                      (t.onerror = function (t) {
                          var e = aa(t.target.error);
                          r(e);
                      });
              });
          }
          var ua = !1;
          function aa(t) {
              var e = Xu.Bh(p());
              if (12.2 <= e && e < 13) {
                  var n = "An internal error was encountered in the Indexed Database server";
                  if (0 <= t.message.indexOf(n)) {
                      var r = new kr(
                          "internal",
                          "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."
                      );
                      return (
                          ua ||
                              ((ua = !0),
                              setTimeout(function () {
                                  throw r;
                              }, 0)),
                          r
                      );
                  }
              }
              return t;
          }
          var ha =
              ((ca.uo = function (t, e, n, r) {
                  return Zs("" !== t.uid), new ca(t.t() ? t.uid : "", e, n, r);
              }),
              (ca.prototype.co = function (t) {
                  var r = !0,
                      e = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
                  return pa(t)
                      .ro({ index: Ba.userMutationsIndex, range: e }, function (t, e, n) {
                          (r = !1), n.done();
                      })
                      .next(function () {
                          return r;
                      });
              }),
              (ca.prototype._o = function (e, t, n) {
                  return this.lo(e).next(function (t) {
                      return (t.lastStreamToken = n.toBase64()), ya(e).put(t);
                  });
              }),
              (ca.prototype.do = function (t) {
                  return this.lo(t).next(function (t) {
                      return ei.fromBase64String(t.lastStreamToken);
                  });
              }),
              (ca.prototype.fo = function (e, n) {
                  return this.lo(e).next(function (t) {
                      return (t.lastStreamToken = n.toBase64()), ya(e).put(t);
                  });
              }),
              (ca.prototype.To = function (h, c, f, l) {
                  var p = this,
                      d = da(h),
                      y = pa(h);
                  return y.add({}).next(function (t) {
                      Zs("number" == typeof t);
                      for (
                          var e = new hu(t, c, f, l),
                              n = p.serializer.Eo(p.userId, e),
                              r = [],
                              i = new os(function (t, e) {
                                  return ru(t.j(), e.j());
                              }),
                              o = 0,
                              s = l;
                          o < s.length;
                          o++
                      ) {
                          var u = s[o],
                              a = Ga.key(p.userId, u.key.path, t);
                          (i = i.add(u.key.path.M())), r.push(y.put(n)), r.push(d.put(a, Ga.PLACEHOLDER));
                      }
                      return (
                          i.forEach(function (t) {
                              r.push(p.jn.Io(h, t));
                          }),
                          h.qn(function () {
                              p.ao[t] = e.keys();
                          }),
                          fu.vn(r).next(function () {
                              return e;
                          })
                      );
                  });
              }),
              (ca.prototype.wo = function (t, e) {
                  var n = this;
                  return pa(t)
                      .get(e)
                      .next(function (t) {
                          return t ? (Zs(t.userId === n.userId), n.serializer.Ro(t)) : null;
                      });
              }),
              (ca.prototype.Ao = function (t, n) {
                  var r = this;
                  return this.ao[n]
                      ? fu.resolve(this.ao[n])
                      : this.wo(t, n).next(function (t) {
                            if (t) {
                                var e = t.keys();
                                return (r.ao[n] = e);
                            }
                            return null;
                        });
              }),
              (ca.prototype.mo = function (t, e) {
                  var r = this,
                      i = e + 1,
                      n = IDBKeyRange.lowerBound([this.userId, i]),
                      o = null;
                  return pa(t)
                      .ro({ index: Ba.userMutationsIndex, range: n }, function (t, e, n) {
                          e.userId === r.userId && (Zs(e.batchId >= i), (o = r.serializer.Ro(e))), n.done();
                      })
                      .next(function () {
                          return o;
                      });
              }),
              (ca.prototype.Po = function (t) {
                  var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]),
                      r = -1;
                  return pa(t)
                      .ro({ index: Ba.userMutationsIndex, range: e, reverse: !0 }, function (t, e, n) {
                          (r = e.batchId), n.done();
                      })
                      .next(function () {
                          return r;
                      });
              }),
              (ca.prototype.Vo = function (t) {
                  var e = this,
                      n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
                  return pa(t)
                      .eo(Ba.userMutationsIndex, n)
                      .next(function (t) {
                          return t.map(function (t) {
                              return e.serializer.Ro(t);
                          });
                      });
              }),
              (ca.prototype.Gn = function (u, a) {
                  var h = this,
                      t = Ga.prefixForPath(this.userId, a.path),
                      e = IDBKeyRange.lowerBound(t),
                      c = [];
                  return da(u)
                      .ro({ range: e }, function (t, e, n) {
                          var r = t[0],
                              i = t[1],
                              o = t[2],
                              s = Hu(i);
                          if (r === h.userId && a.path.isEqual(s))
                              return pa(u)
                                  .get(o)
                                  .next(function (t) {
                                      if (!t) throw Js();
                                      Zs(t.userId === h.userId), c.push(h.serializer.Ro(t));
                                  });
                          n.done();
                      })
                      .next(function () {
                          return c;
                      });
              }),
              (ca.prototype.Xn = function (r, t) {
                  var a = this,
                      h = new os(ru),
                      i = [];
                  return (
                      t.forEach(function (u) {
                          var t = Ga.prefixForPath(a.userId, u.path),
                              e = IDBKeyRange.lowerBound(t),
                              n = da(r).ro({ range: e }, function (t, e, n) {
                                  var r = t[0],
                                      i = t[1],
                                      o = t[2],
                                      s = Hu(i);
                                  r === a.userId && u.path.isEqual(s) ? (h = h.add(o)) : n.done();
                              });
                          i.push(n);
                      }),
                      fu.vn(i).next(function () {
                          return a.po(r, h);
                      })
                  );
              }),
              (ca.prototype.nr = function (t, e) {
                  var u = this,
                      a = e.path,
                      h = a.length + 1,
                      n = Ga.prefixForPath(this.userId, a),
                      r = IDBKeyRange.lowerBound(n),
                      c = new os(ru);
                  return da(t)
                      .ro({ range: r }, function (t, e, n) {
                          var r = t[0],
                              i = t[1],
                              o = t[2],
                              s = Hu(i);
                          r === u.userId && a.q(s) ? s.length === h && (c = c.add(o)) : n.done();
                      })
                      .next(function () {
                          return u.po(t, c);
                      });
              }),
              (ca.prototype.po = function (e, t) {
                  var n = this,
                      r = [],
                      i = [];
                  return (
                      t.forEach(function (t) {
                          i.push(
                              pa(e)
                                  .get(t)
                                  .next(function (t) {
                                      if (null === t) throw Js();
                                      Zs(t.userId === n.userId), r.push(n.serializer.Ro(t));
                                  })
                          );
                      }),
                      fu.vn(i).next(function () {
                          return r;
                      })
                  );
              }),
              (ca.prototype.yo = function (e, n) {
                  var r = this;
                  return la(e.bo, this.userId, n).next(function (t) {
                      return (
                          e.qn(function () {
                              r.vo(n.batchId);
                          }),
                          fu.forEach(t, function (t) {
                              return r.oo.So(e, t);
                          })
                      );
                  });
              }),
              (ca.prototype.vo = function (t) {
                  delete this.ao[t];
              }),
              (ca.prototype.Do = function (n) {
                  var o = this;
                  return this.co(n).next(function (t) {
                      if (!t) return fu.resolve();
                      var e = IDBKeyRange.lowerBound(Ga.prefixForUser(o.userId)),
                          i = [];
                      return da(n)
                          .ro({ range: e }, function (t, e, n) {
                              if (t[0] === o.userId) {
                                  var r = Hu(t[1]);
                                  i.push(r);
                              } else n.done();
                          })
                          .next(function () {
                              Zs(0 === i.length);
                          });
                  });
              }),
              (ca.prototype.Co = function (t, e) {
                  return fa(t, this.userId, e);
              }),
              (ca.prototype.lo = function (t) {
                  var e = this;
                  return ya(t)
                      .get(this.userId)
                      .next(function (t) {
                          return t || new Fa(e.userId, -1, "");
                      });
              }),
              ca);
          function ca(t, e, n, r) {
              (this.userId = t), (this.serializer = e), (this.jn = n), (this.oo = r), (this.ao = {});
          }
          function fa(t, o, e) {
              var n = Ga.prefixForPath(o, e.path),
                  s = n[1],
                  r = IDBKeyRange.lowerBound(n),
                  u = !1;
              return da(t)
                  .ro({ range: r, no: !0 }, function (t, e, n) {
                      var r = t[0],
                          i = t[1];
                      t[2], r === o && i === s && (u = !0), n.done();
                  })
                  .next(function () {
                      return u;
                  });
          }
          function la(t, e, n) {
              var r = t.store(Ba.store),
                  i = t.store(Ga.store),
                  o = [],
                  s = IDBKeyRange.only(n.batchId),
                  u = 0,
                  a = r.ro({ range: s }, function (t, e, n) {
                      return u++, n.delete();
                  });
              o.push(
                  a.next(function () {
                      Zs(1 === u);
                  })
              );
              for (var h = [], c = 0, f = n.mutations; c < f.length; c++) {
                  var l = f[c],
                      p = Ga.key(e, l.key.path, n.batchId);
                  o.push(i.delete(p)), h.push(l.key);
              }
              return fu.vn(o).next(function () {
                  return h;
              });
          }
          function pa(t) {
              return hh.Kh(t, Ba.store);
          }
          function da(t) {
              return hh.Kh(t, Ga.store);
          }
          function ya(t) {
              return hh.Kh(t, Fa.store);
          }
          var va =
                  ((wa.prototype.next = function () {
                      return (this.Fo += 2), this.Fo;
                  }),
                  (wa.No = function () {
                      return new wa(0);
                  }),
                  (wa.ko = function () {
                      return new wa(-1);
                  }),
                  wa),
              ga =
                  ((ma.prototype.$o = function (n) {
                      var r = this;
                      return this.Mo(n).next(function (t) {
                          var e = new va(t.highestTargetId);
                          return (
                              (t.highestTargetId = e.next()),
                              r.Lo(n, t).next(function () {
                                  return t.highestTargetId;
                              })
                          );
                      });
                  }),
                  (ma.prototype.Oo = function (t) {
                      return this.Mo(t).next(function (t) {
                          return Vr.v(new Pr(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds));
                      });
                  }),
                  (ma.prototype.xo = function (t) {
                      return Ta(t.bo);
                  }),
                  (ma.prototype.Bo = function (e, n, r) {
                      var i = this;
                      return this.Mo(e).next(function (t) {
                          return (t.highestListenSequenceNumber = n), r && (t.lastRemoteSnapshotVersion = r.C()), n > t.highestListenSequenceNumber && (t.highestListenSequenceNumber = n), i.Lo(e, t);
                      });
                  }),
                  (ma.prototype.qo = function (e, n) {
                      var r = this;
                      return this.Uo(e, n).next(function () {
                          return r.Mo(e).next(function (t) {
                              return (t.targetCount += 1), r.Qo(n, t), r.Lo(e, t);
                          });
                      });
                  }),
                  (ma.prototype.Wo = function (t, e) {
                      return this.Uo(t, e);
                  }),
                  (ma.prototype.jo = function (e, t) {
                      var n = this;
                      return this.Ko(e, t.targetId)
                          .next(function () {
                              return ba(e).delete(t.targetId);
                          })
                          .next(function () {
                              return n.Mo(e);
                          })
                          .next(function (t) {
                              return Zs(0 < t.targetCount), --t.targetCount, n.Lo(e, t);
                          });
                  }),
                  (ma.prototype.$h = function (r, i, o) {
                      var s = this,
                          u = 0,
                          a = [];
                      return ba(r)
                          .ro(function (t, e) {
                              var n = s.serializer.Go(e);
                              n.sequenceNumber <= i && null === o.get(n.targetId) && (u++, a.push(s.jo(r, n)));
                          })
                          .next(function () {
                              return fu.vn(a);
                          })
                          .next(function () {
                              return u;
                          });
                  }),
                  (ma.prototype.js = function (t, r) {
                      var i = this;
                      return ba(t).ro(function (t, e) {
                          var n = i.serializer.Go(e);
                          r(n);
                      });
                  }),
                  (ma.prototype.Mo = function (t) {
                      return Ea(t.bo);
                  }),
                  (ma.prototype.Lo = function (t, e) {
                      return hh.Kh(t, $a.store).put($a.key, e);
                  }),
                  (ma.prototype.Uo = function (t, e) {
                      return ba(t).put(this.serializer.zo(e));
                  }),
                  (ma.prototype.Qo = function (t, e) {
                      var n = !1;
                      return t.targetId > e.highestTargetId && ((e.highestTargetId = t.targetId), (n = !0)), t.sequenceNumber > e.highestListenSequenceNumber && ((e.highestListenSequenceNumber = t.sequenceNumber), (n = !0)), n;
                  }),
                  (ma.prototype.Ho = function (t) {
                      return this.Mo(t).next(function (t) {
                          return t.targetCount;
                      });
                  }),
                  (ma.prototype.Yo = function (t, i) {
                      var o = this,
                          e = i.canonicalId(),
                          n = IDBKeyRange.bound([e, Number.NEGATIVE_INFINITY], [e, Number.POSITIVE_INFINITY]),
                          s = null;
                      return ba(t)
                          .ro({ range: n, index: Ya.queryTargetsIndexName }, function (t, e, n) {
                              var r = o.serializer.Go(e);
                              i.isEqual(r.target) && ((s = r), n.done());
                          })
                          .next(function () {
                              return s;
                          });
                  }),
                  (ma.prototype.Jo = function (n, t, r) {
                      var i = this,
                          o = [],
                          s = Ia(n);
                      return (
                          t.forEach(function (t) {
                              var e = Wu(t.path);
                              o.push(s.put(new Xa(r, e))), o.push(i.oo.Xo(n, r, t));
                          }),
                          fu.vn(o)
                      );
                  }),
                  (ma.prototype.Zo = function (n, t, r) {
                      var i = this,
                          o = Ia(n);
                      return fu.forEach(t, function (t) {
                          var e = Wu(t.path);
                          return fu.vn([o.delete([r, e]), i.oo.ta(n, r, t)]);
                      });
                  }),
                  (ma.prototype.Ko = function (t, e) {
                      var n = Ia(t),
                          r = IDBKeyRange.bound([e], [e + 1], !1, !0);
                      return n.delete(r);
                  }),
                  (ma.prototype.ea = function (t, e) {
                      var n = IDBKeyRange.bound([e], [e + 1], !1, !0),
                          r = Ia(t),
                          o = gs();
                      return r
                          .ro({ range: n, no: !0 }, function (t, e, n) {
                              var r = Hu(t[1]),
                                  i = new Xr(r);
                              o = o.add(i);
                          })
                          .next(function () {
                              return o;
                          });
                  }),
                  (ma.prototype.Co = function (t, e) {
                      var n = Wu(e.path),
                          r = IDBKeyRange.bound([n], [ou(n)], !1, !0),
                          i = 0;
                      return Ia(t)
                          .ro({ index: Xa.documentTargetsIndex, no: !0, range: r }, function (t, e, n) {
                              var r = t[0];
                              t[1], 0 !== r && (i++, n.done());
                          })
                          .next(function () {
                              return 0 < i;
                          });
                  }),
                  (ma.prototype.si = function (t, e) {
                      var n = this;
                      return ba(t)
                          .get(e)
                          .next(function (t) {
                              return t ? n.serializer.Go(t) : null;
                          });
                  }),
                  ma);
          function ma(t, e) {
              (this.oo = t), (this.serializer = e);
          }
          function wa(t) {
              this.Fo = t;
          }
          function ba(t) {
              return hh.Kh(t, Ya.store);
          }
          function Ea(t) {
              return Xu.Kh(t, $a.store)
                  .get($a.key)
                  .next(function (t) {
                      return Zs(null !== t), t;
                  });
          }
          function Ta(t) {
              return Ea(t).next(function (t) {
                  return t.highestListenSequenceNumber;
              });
          }
          function Ia(t) {
              return hh.Kh(t, Xa.store);
          }
          var Na,
              Aa =
                  ((_a.prototype.Nn = function (t, e, n) {
                      return ka(t).put(Da(e), n);
                  }),
                  (_a.prototype.$n = function (t, e) {
                      var n = ka(t),
                          r = Da(e);
                      return n.delete(r);
                  }),
                  (_a.prototype.updateMetadata = function (e, n) {
                      var r = this;
                      return this.getMetadata(e).next(function (t) {
                          return (t.byteSize += n), r.sa(e, t);
                      });
                  }),
                  (_a.prototype.Mn = function (t, e) {
                      var n = this;
                      return ka(t)
                          .get(Da(e))
                          .next(function (t) {
                              return n.ia(t);
                          });
                  }),
                  (_a.prototype.na = function (t, e) {
                      var n = this;
                      return ka(t)
                          .get(Da(e))
                          .next(function (t) {
                              var e = n.ia(t);
                              return e ? { ra: e, size: xa(t) } : null;
                          });
                  }),
                  (_a.prototype.getEntries = function (t, e) {
                      var r = this,
                          i = fs();
                      return this.ha(t, e, function (t, e) {
                          var n = r.ia(e);
                          i = i.Ae(t, n);
                      }).next(function () {
                          return i;
                      });
                  }),
                  (_a.prototype.oa = function (t, e) {
                      var r = this,
                          i = fs(),
                          o = new Jo(Xr.N);
                      return this.ha(t, e, function (t, e) {
                          var n = r.ia(e);
                          o = n ? ((i = i.Ae(t, n)), o.Ae(t, xa(e))) : ((i = i.Ae(t, null)), o.Ae(t, 0));
                      }).next(function () {
                          return { aa: i, ua: o };
                      });
                  }),
                  (_a.prototype.ha = function (t, e, i) {
                      if (e.B()) return fu.resolve();
                      var n = IDBKeyRange.bound(e.first().path.W(), e.last().path.W()),
                          o = e.be(),
                          s = o.Ne();
                      return ka(t)
                          .ro({ range: n }, function (t, e, n) {
                              for (var r = Xr.st(t); s && Xr.N(s, r) < 0; ) i(s, null), (s = o.Ne());
                              s && s.isEqual(r) && (i(s, e), (s = o.ke() ? o.Ne() : null)), s ? n.Zh(s.path.W()) : n.done();
                          })
                          .next(function () {
                              for (; s; ) i(s, null), (s = o.ke() ? o.Ne() : null);
                          });
                  }),
                  (_a.prototype.Zn = function (t, i, e) {
                      var o = this,
                          s = ps(),
                          u = i.path.length + 1,
                          n = {};
                      if (e.isEqual(Vr.min())) {
                          var r = i.path.W();
                          n.range = IDBKeyRange.lowerBound(r);
                      } else {
                          var a = i.path.W(),
                              h = this.serializer.ca(e);
                          (n.range = IDBKeyRange.lowerBound([a, h], !0)), (n.index = Ka.collectionReadTimeIndex);
                      }
                      return ka(t)
                          .ro(n, function (t, e, n) {
                              if (t.length === u) {
                                  var r = o.serializer._a(e);
                                  i.path.q(r.key.path) ? r instanceof To && i.matches(r) && (s = s.Ae(r.key, r)) : n.done();
                              }
                          })
                          .next(function () {
                              return s;
                          });
                  }),
                  (_a.prototype.la = function (t, e) {
                      var r = this,
                          i = cs(),
                          o = this.serializer.ca(e),
                          n = ka(t),
                          s = IDBKeyRange.lowerBound(o, !0);
                      return n
                          .ro({ index: Ka.readTimeIndex, range: s }, function (t, e) {
                              var n = r.serializer._a(e);
                              (i = i.Ae(n.key, n)), (o = e.readTime);
                          })
                          .next(function () {
                              return { da: i, readTime: r.serializer.fa(o) };
                          });
                  }),
                  (_a.prototype.Ta = function (t) {
                      var r = this,
                          e = ka(t),
                          i = Vr.min();
                      return e
                          .ro({ index: Ka.readTimeIndex, reverse: !0 }, function (t, e, n) {
                              e.readTime && (i = r.serializer.fa(e.readTime)), n.done();
                          })
                          .next(function () {
                              return i;
                          });
                  }),
                  (_a.prototype.Ea = function (t) {
                      return new _a.Ia(this, !!t && t.wa);
                  }),
                  (_a.prototype.Ra = function (t) {
                      return this.getMetadata(t).next(function (t) {
                          return t.byteSize;
                      });
                  }),
                  (_a.prototype.getMetadata = function (t) {
                      return Sa(t)
                          .get(Ha.key)
                          .next(function (t) {
                              return Zs(!!t), t;
                          });
                  }),
                  (_a.prototype.sa = function (t, e) {
                      return Sa(t).put(Ha.key, e);
                  }),
                  (_a.prototype.ia = function (t) {
                      if (t) {
                          var e = this.serializer._a(t);
                          return e instanceof Io && e.version.isEqual(Vr.min()) ? null : e;
                      }
                      return null;
                  }),
                  _a);
          function _a(t, e) {
              (this.serializer = t), (this.jn = e);
          }
          function Sa(t) {
              return hh.Kh(t, Ha.store);
          }
          function ka(t) {
              return hh.Kh(t, Ka.store);
          }
          function Da(t) {
              return t.path.W();
          }
          function xa(t) {
              var e;
              if (t.document) e = t.document;
              else if (t.unknownDocument) e = t.unknownDocument;
              else {
                  if (!t.noDocument) throw Js();
                  e = t.noDocument;
              }
              return JSON.stringify(e).length;
          }
          function Oa(t, e) {
              var n = this;
              return (
                  ((n = Na.call(this) || this).Aa = t),
                  (n.wa = e),
                  (n.ma = new au(function (t) {
                      return t.toString();
                  })),
                  n
              );
          }
          Aa.Ia =
              (n(Oa, (Na = lu)),
              (Oa.prototype.xn = function (s) {
                  var u = this,
                      a = [],
                      h = 0,
                      c = new os(function (t, e) {
                          return ru(t.j(), e.j());
                      });
                  return (
                      this.Dn.forEach(function (t, e) {
                          var n = u.ma.get(t);
                          if (e) {
                              var r = u.Aa.serializer.Pa(e, u.readTime);
                              c = c.add(t.path.M());
                              var i = xa(r);
                              (h += i - n), a.push(u.Aa.Nn(s, t, r));
                          } else if (((h -= n), u.wa)) {
                              var o = u.Aa.serializer.Pa(new Io(t, Vr.min()), u.readTime);
                              a.push(u.Aa.Nn(s, t, o));
                          } else a.push(u.Aa.$n(s, t));
                      }),
                      c.forEach(function (t) {
                          a.push(u.Aa.jn.Io(s, t));
                      }),
                      a.push(this.Aa.updateMetadata(s, h)),
                      fu.vn(a)
                  );
              }),
              (Oa.prototype.Ln = function (t, e) {
                  var n = this;
                  return this.Aa.na(t, e).next(function (t) {
                      return null === t ? (n.ma.set(e, 0), null) : (n.ma.set(e, t.size), t.ra);
                  });
              }),
              (Oa.prototype.On = function (t, e) {
                  var n = this;
                  return this.Aa.oa(t, e).next(function (t) {
                      var e = t.aa;
                      return (
                          t.ua.forEach(function (t, e) {
                              n.ma.set(t, e);
                          }),
                          e
                      );
                  });
              }),
              Oa);
          function Ra(t, e) {
              (this.seconds = t), (this.nanoseconds = e);
          }
          var Pa =
                  ((qa.prototype.Io = function (t, e) {
                      return this.Va.add(e), fu.resolve();
                  }),
                  (qa.prototype.ir = function (t, e) {
                      return fu.resolve(this.Va.getEntries(e));
                  }),
                  qa),
              Va =
                  ((ja.prototype.add = function (t) {
                      var e = t.O(),
                          n = t.M(),
                          r = this.index[e] || new os(Cr.N),
                          i = !r.has(n);
                      return (this.index[e] = r.add(n)), i;
                  }),
                  (ja.prototype.has = function (t) {
                      var e = t.O(),
                          n = t.M(),
                          r = this.index[e];
                      return r && r.has(n);
                  }),
                  (ja.prototype.getEntries = function (t) {
                      return (this.index[t] || new os(Cr.N)).W();
                  }),
                  ja),
              La = 10,
              Ca =
                  ((Ua.prototype.createOrUpgrade = function (n, r, t, e) {
                      var i = this;
                      Zs(t < e && 0 <= t && e <= La);
                      var o,
                          s = new Zu(r);
                      t < 1 &&
                          1 <= e &&
                          (n.createObjectStore(Ma.store),
                          (o = n).createObjectStore(Fa.store, { keyPath: Fa.keyPath }),
                          o.createObjectStore(Ba.store, { keyPath: Ba.keyPath, autoIncrement: !0 }).createIndex(Ba.userMutationsIndex, Ba.userMutationsKeyPath, { unique: !0 }),
                          o.createObjectStore(Ga.store),
                          Za(n),
                          n.createObjectStore(Ka.store));
                      var u,
                          a = fu.resolve();
                      return (
                          t < 3 &&
                              3 <= e &&
                              (0 !== t && ((u = n).deleteObjectStore(Xa.store), u.deleteObjectStore(Ya.store), u.deleteObjectStore($a.store), Za(n)),
                              (a = a.next(function () {
                                  return (t = s.store($a.store)), (e = new $a(0, 0, Vr.min().C(), 0)), t.put($a.key, e);
                                  var t, e;
                              }))),
                          t < 4 &&
                              4 <= e &&
                              (0 !== t &&
                                  (a = a.next(function () {
                                      return (
                                          (r = n),
                                          (i = s)
                                              .store(Ba.store)
                                              .eo()
                                              .next(function (t) {
                                                  r.deleteObjectStore(Ba.store), r.createObjectStore(Ba.store, { keyPath: Ba.keyPath, autoIncrement: !0 }).createIndex(Ba.userMutationsIndex, Ba.userMutationsKeyPath, { unique: !0 });
                                                  var e = i.store(Ba.store),
                                                      n = t.map(function (t) {
                                                          return e.put(t);
                                                      });
                                                  return fu.vn(n);
                                              })
                                      );
                                      var r, i;
                                  })),
                              (a = a.next(function () {
                                  n.createObjectStore(th.store, { keyPath: th.keyPath });
                              }))),
                          t < 5 &&
                              5 <= e &&
                              (a = a.next(function () {
                                  return i.removeAcknowledgedMutations(s);
                              })),
                          t < 6 &&
                              6 <= e &&
                              (a = a.next(function () {
                                  return n.createObjectStore(Ha.store), i.addDocumentGlobal(s);
                              })),
                          t < 7 &&
                              7 <= e &&
                              (a = a.next(function () {
                                  return i.ensureSequenceNumbers(s);
                              })),
                          t < 8 &&
                              8 <= e &&
                              (a = a.next(function () {
                                  return i.createCollectionParentIndex(n, s);
                              })),
                          t < 9 &&
                              9 <= e &&
                              (a = a.next(function () {
                                  var t, e;
                                  (e = n).objectStoreNames.contains("remoteDocumentChanges") && e.deleteObjectStore("remoteDocumentChanges"),
                                      (t = r.objectStore(Ka.store)).createIndex(Ka.readTimeIndex, Ka.readTimeIndexPath, { unique: !1 }),
                                      t.createIndex(Ka.collectionReadTimeIndex, Ka.collectionReadTimeIndexPath, { unique: !1 });
                              })),
                          t < 10 &&
                              10 <= e &&
                              (a = a.next(function () {
                                  return i.rewriteCanonicalIds(s);
                              })),
                          a
                      );
                  }),
                  (Ua.prototype.addDocumentGlobal = function (e) {
                      var n = 0;
                      return e
                          .store(Ka.store)
                          .ro(function (t, e) {
                              n += xa(e);
                          })
                          .next(function () {
                              var t = new Ha(n);
                              return e.store(Ha.store).put(Ha.key, t);
                          });
                  }),
                  (Ua.prototype.removeAcknowledgedMutations = function (r) {
                      var i = this,
                          t = r.store(Fa.store),
                          e = r.store(Ba.store);
                      return t.eo().next(function (t) {
                          return fu.forEach(t, function (n) {
                              var t = IDBKeyRange.bound([n.userId, -1], [n.userId, n.lastAcknowledgedBatchId]);
                              return e.eo(Ba.userMutationsIndex, t).next(function (t) {
                                  return fu.forEach(t, function (t) {
                                      Zs(t.userId === n.userId);
                                      var e = i.serializer.Ro(t);
                                      return la(r, n.userId, e).next(function () {});
                                  });
                              });
                          });
                      });
                  }),
                  (Ua.prototype.ensureSequenceNumbers = function (t) {
                      var s = t.store(Xa.store),
                          e = t.store(Ka.store);
                      return Ta(t).next(function (i) {
                          var o = [];
                          return e
                              .ro(function (t, e) {
                                  var n = new Cr(t),
                                      r = [0, Wu(n)];
                                  o.push(
                                      s.get(r).next(function (t) {
                                          return t ? fu.resolve() : ((e = n), s.put(new Xa(0, Wu(e), i)));
                                          var e;
                                      })
                                  );
                              })
                              .next(function () {
                                  return fu.vn(o);
                              });
                      });
                  }),
                  (Ua.prototype.createCollectionParentIndex = function (t, e) {
                      function i(t) {
                          if (o.add(t)) {
                              var e = t.O(),
                                  n = t.M();
                              return r.put({ collectionId: e, parent: Wu(n) });
                          }
                      }
                      t.createObjectStore(Ja.store, { keyPath: Ja.keyPath });
                      var r = e.store(Ja.store),
                          o = new Va();
                      return e
                          .store(Ka.store)
                          .ro({ no: !0 }, function (t, e) {
                              var n = new Cr(t);
                              return i(n.M());
                          })
                          .next(function () {
                              return e.store(Ga.store).ro({ no: !0 }, function (t, e) {
                                  t[0];
                                  var n = t[1],
                                      r = (t[2], Hu(n));
                                  return i(r.M());
                              });
                          });
                  }),
                  (Ua.prototype.rewriteCanonicalIds = function (t) {
                      var i = this,
                          o = t.store(Ya.store);
                      return o.ro(function (t, e) {
                          var n = i.serializer.Go(e),
                              r = i.serializer.zo(n);
                          return o.put(r);
                      });
                  }),
                  Ua),
              Ma = function (t, e, n) {
                  (this.ownerId = t), (this.allowTabSynchronization = e), (this.leaseTimestampMs = n);
              };
          function Ua(t) {
              this.serializer = t;
          }
          function ja() {
              this.index = {};
          }
          function qa() {
              this.Va = new Va();
          }
          (Ma.store = "owner"), (Ma.key = "owner");
          var Fa = function (t, e, n) {
              (this.userId = t), (this.lastAcknowledgedBatchId = e), (this.lastStreamToken = n);
          };
          (Fa.store = "mutationQueues"), (Fa.keyPath = "userId");
          var Ba = function (t, e, n, r, i) {
              (this.userId = t), (this.batchId = e), (this.localWriteTimeMs = n), (this.baseMutations = r), (this.mutations = i);
          };
          (Ba.store = "mutations"), (Ba.keyPath = "batchId"), (Ba.userMutationsIndex = "userMutationsIndex"), (Ba.userMutationsKeyPath = ["userId", "batchId"]);
          var Ga =
              ((za.prefixForUser = function (t) {
                  return [t];
              }),
              (za.prefixForPath = function (t, e) {
                  return [t, Wu(e)];
              }),
              (za.key = function (t, e, n) {
                  return [t, Wu(e), n];
              }),
              za);
          function za() {}
          (Ga.store = "documentMutations"), (Ga.PLACEHOLDER = new Ga());
          function Wa(t, e) {
              (this.path = t), (this.readTime = e);
          }
          function Qa(t, e) {
              (this.path = t), (this.version = e);
          }
          var Ka = function (t, e, n, r, i, o) {
              (this.unknownDocument = t), (this.noDocument = e), (this.document = n), (this.hasCommittedMutations = r), (this.readTime = i), (this.parentPath = o);
          };
          (Ka.store = "remoteDocuments"), (Ka.readTimeIndex = "readTimeIndex"), (Ka.readTimeIndexPath = "readTime"), (Ka.collectionReadTimeIndex = "collectionReadTimeIndex"), (Ka.collectionReadTimeIndexPath = ["parentPath", "readTime"]);
          var Ha = function (t) {
              this.byteSize = t;
          };
          (Ha.store = "remoteDocumentGlobal"), (Ha.key = "remoteDocumentGlobalKey");
          var Ya = function (t, e, n, r, i, o, s) {
              (this.targetId = t), (this.canonicalId = e), (this.readTime = n), (this.resumeToken = r), (this.lastListenSequenceNumber = i), (this.lastLimboFreeSnapshotVersion = o), (this.query = s);
          };
          (Ya.store = "targets"), (Ya.keyPath = "targetId"), (Ya.queryTargetsIndexName = "queryTargetsIndex"), (Ya.queryTargetsKeyPath = ["canonicalId", "targetId"]);
          var Xa = function (t, e, n) {
              (this.targetId = t), (this.path = e), (this.sequenceNumber = n);
          };
          (Xa.store = "targetDocuments"), (Xa.keyPath = ["targetId", "path"]), (Xa.documentTargetsIndex = "documentTargetsIndex"), (Xa.documentTargetsKeyPath = ["path", "targetId"]);
          var $a = function (t, e, n, r) {
              (this.highestTargetId = t), (this.highestListenSequenceNumber = e), (this.lastRemoteSnapshotVersion = n), (this.targetCount = r);
          };
          ($a.key = "targetGlobalKey"), ($a.store = "targetGlobal");
          var Ja = function (t, e) {
              (this.collectionId = t), (this.parent = e);
          };
          function Za(t) {
              t.createObjectStore(Xa.store, { keyPath: Xa.keyPath }).createIndex(Xa.documentTargetsIndex, Xa.documentTargetsKeyPath, { unique: !0 }),
                  t.createObjectStore(Ya.store, { keyPath: Ya.keyPath }).createIndex(Ya.queryTargetsIndexName, Ya.queryTargetsKeyPath, { unique: !0 }),
                  t.createObjectStore($a.store);
          }
          (Ja.store = "collectionParents"), (Ja.keyPath = ["collectionId", "parent"]);
          var th = function (t, e, n, r) {
              (this.clientId = t), (this.updateTimeMs = e), (this.networkEnabled = n), (this.inForeground = r);
          };
          (th.store = "clientMetadata"), (th.keyPath = "clientId");
          var eh = i(i(i([Fa.store, Ba.store, Ga.store, Ka.store, Ya.store, Ma.store, $a.store, Xa.store], [th.store]), [Ha.store]), [Ja.store]),
              nh =
                  ((rh.prototype.Io = function (t, e) {
                      var n = this;
                      if (this.ga.has(e)) return fu.resolve();
                      var r = e.O(),
                          i = e.M();
                      t.qn(function () {
                          n.ga.add(e);
                      });
                      var o = { collectionId: r, parent: Wu(i) };
                      return ih(t).put(o);
                  }),
                  (rh.prototype.ir = function (t, i) {
                      var o = [],
                          e = IDBKeyRange.bound([i, ""], [ou(i), ""], !1, !0);
                      return ih(t)
                          .eo(e)
                          .next(function (t) {
                              for (var e = 0, n = t; e < n.length; e++) {
                                  var r = n[e];
                                  if (r.collectionId !== i) break;
                                  o.push(Hu(r.parent));
                              }
                              return o;
                          });
                  }),
                  rh);
          function rh() {
              this.ga = new Va();
          }
          function ih(t) {
              return hh.Kh(t, Ja.store);
          }
          var oh,
              sh =
                  ((lh.prototype._a = function (t) {
                      if (t.document) return this.pa.mi(t.document, !!t.hasCommittedMutations);
                      if (t.noDocument) {
                          var e = Xr.st(t.noDocument.path),
                              n = this.ya(t.noDocument.readTime);
                          return new Io(e, n, { hasCommittedMutations: !!t.hasCommittedMutations });
                      }
                      if (t.unknownDocument) {
                          var r = Xr.st(t.unknownDocument.path),
                              i = this.ya(t.unknownDocument.version);
                          return new No(r, i);
                      }
                      return Js();
                  }),
                  (lh.prototype.Pa = function (t, e) {
                      var n = this.ca(e),
                          r = t.key.path.M().W();
                      if (t instanceof To) {
                          var i = this.pa.Ai(t),
                              o = t.hasCommittedMutations;
                          return new Ka(null, null, i, o, n, r);
                      }
                      if (t instanceof Io) {
                          var s = t.key.path.W(),
                              u = this.ba(t.version),
                              a = t.hasCommittedMutations;
                          return new Ka(null, new Wa(s, u), null, a, n, r);
                      }
                      if (t instanceof No) {
                          var h = t.key.path.W(),
                              c = this.ba(t.version);
                          return new Ka(new Qa(h, c), null, null, !0, n, r);
                      }
                      return Js();
                  }),
                  (lh.prototype.ca = function (t) {
                      var e = t.C();
                      return [e.seconds, e.nanoseconds];
                  }),
                  (lh.prototype.fa = function (t) {
                      var e = new Pr(t[0], t[1]);
                      return Vr.v(e);
                  }),
                  (lh.prototype.ba = function (t) {
                      var e = t.C();
                      return new Ra(e.seconds, e.nanoseconds);
                  }),
                  (lh.prototype.ya = function (t) {
                      var e = new Pr(t.seconds, t.nanoseconds);
                      return Vr.v(e);
                  }),
                  (lh.prototype.Eo = function (t, e) {
                      var n = this,
                          r = e.baseMutations.map(function (t) {
                              return n.pa.vi(t);
                          }),
                          i = e.mutations.map(function (t) {
                              return n.pa.vi(t);
                          });
                      return new Ba(t, e.batchId, e.Tn.toMillis(), r, i);
                  }),
                  (lh.prototype.Ro = function (t) {
                      var e = this,
                          n = (t.baseMutations || []).map(function (t) {
                              return e.pa.Fi(t);
                          }),
                          r = t.mutations.map(function (t) {
                              return e.pa.Fi(t);
                          }),
                          i = Pr.fromMillis(t.localWriteTimeMs);
                      return new hu(t.batchId, i, n, r);
                  }),
                  (lh.prototype.Go = function (t) {
                      var e,
                          n = this.ya(t.readTime),
                          r = void 0 !== t.lastLimboFreeSnapshotVersion ? this.ya(t.lastLimboFreeSnapshotVersion) : Vr.min();
                      return (e = void 0 !== t.query.documents ? this.pa.xi(t.query) : this.pa.Wi(t.query)), new Lo(e, t.targetId, 0, t.lastListenSequenceNumber, n, r, ei.fromBase64String(t.resumeToken));
                  }),
                  (lh.prototype.zo = function (t) {
                      var e,
                          n = this.ba(t.Ee),
                          r = this.ba(t.lastLimboFreeSnapshotVersion);
                      e = t.target.Ot() ? this.pa.Oi(t.target) : this.pa.Bi(t.target);
                      var i = t.resumeToken.toBase64();
                      return new Ya(t.targetId, t.target.canonicalId(), n, i, t.sequenceNumber, r, e);
                  }),
                  lh),
              uh = "Another tab has exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs.",
              ah = (n(fh, (oh = du)), fh),
              hh =
                  ((ch.Kh = function (t, e) {
                      if (t instanceof ah) return Xu.Kh(t.bo, e);
                      throw Js();
                  }),
                  (ch.prototype.start = function () {
                      var e = this;
                      return Xu.qh(this.Ma, La, new Ca(this.serializer))
                          .then(function (t) {
                              return (e.Ba = t), e.qa();
                          })
                          .then(function () {
                              return (
                                  e.Ua(),
                                  e.Qa(),
                                  e.Wa(),
                                  e.Ba.runTransaction("readonly", [$a.store], function (t) {
                                      return Ta(t);
                                  })
                              );
                          })
                          .then(function (t) {
                              e.ja = new gu(t, e.Sa);
                          })
                          .then(function () {
                              e.Da = !0;
                          })
                          .catch(function (t) {
                              return e.Ba && e.Ba.close(), Promise.reject(t);
                          });
                  }),
                  (ch.prototype.Ka = function (n) {
                      var t = this;
                      return (
                          (this.$a = function (e) {
                              return y(t, void 0, void 0, function () {
                                  return v(this, function (t) {
                                      return this.vh ? [2, n(e)] : [2];
                                  });
                              });
                          }),
                          n(this.isPrimary)
                      );
                  }),
                  (ch.prototype.Ga = function (n) {
                      var t = this;
                      this.Ba.Gh(function (e) {
                          return y(t, void 0, void 0, function () {
                              return v(this, function (t) {
                                  switch (t.label) {
                                      case 0:
                                          return null === e.newVersion ? [4, n()] : [3, 2];
                                      case 1:
                                          t.sent(), (t.label = 2);
                                      case 2:
                                          return [2];
                                  }
                              });
                          });
                      });
                  }),
                  (ch.prototype.za = function (t) {
                      var e = this;
                      this.networkEnabled !== t &&
                          ((this.networkEnabled = t),
                          this.Tr.$r(function () {
                              return y(e, void 0, void 0, function () {
                                  return v(this, function (t) {
                                      switch (t.label) {
                                          case 0:
                                              return this.vh ? [4, this.qa()] : [3, 2];
                                          case 1:
                                              t.sent(), (t.label = 2);
                                          case 2:
                                              return [2];
                                      }
                                  });
                              });
                          }));
                  }),
                  (ch.prototype.qa = function () {
                      var n = this;
                      return this.Ba.runTransaction("readwrite", eh, function (e) {
                          return dh(e)
                              .put(new th(n.clientId, Date.now(), n.networkEnabled, n.inForeground))
                              .next(function () {
                                  if (n.isPrimary)
                                      return n.Ha(e).next(function (t) {
                                          t ||
                                              ((n.isPrimary = !1),
                                              n.Tr.$r(function () {
                                                  return n.$a(!1);
                                              }));
                                      });
                              })
                              .next(function () {
                                  return n.Ya(e);
                              })
                              .next(function (t) {
                                  return n.isPrimary && !t
                                      ? n.Ja(e).next(function () {
                                            return !1;
                                        })
                                      : !!t &&
                                            n.Xa(e).next(function () {
                                                return !0;
                                            });
                              });
                      })
                          .catch(function (t) {
                              if (!n.allowTabSynchronization) throw t;
                              return Ys("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", t), !1;
                          })
                          .then(function (t) {
                              n.isPrimary !== t &&
                                  n.Tr.$r(function () {
                                      return n.$a(t);
                                  }),
                                  (n.isPrimary = t);
                          });
                  }),
                  (ch.prototype.Ha = function (t) {
                      var e = this;
                      return ph(t)
                          .get(Ma.key)
                          .next(function (t) {
                              return fu.resolve(e.Za(t));
                          });
                  }),
                  (ch.prototype.tu = function (t) {
                      return dh(t).delete(this.clientId);
                  }),
                  (ch.prototype.eu = function () {
                      return y(this, void 0, void 0, function () {
                          var i = this;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return !this.isPrimary || this.su(this.ka, 18e5)
                                          ? [3, 2]
                                          : ((this.ka = Date.now()),
                                            [
                                                4,
                                                this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", function (t) {
                                                    var r = ch.Kh(t, th.store);
                                                    return r.eo().next(function (t) {
                                                        var e = i.iu(t, 18e5),
                                                            n = t.filter(function (t) {
                                                                return -1 === e.indexOf(t);
                                                            });
                                                        return fu
                                                            .forEach(n, function (t) {
                                                                return r.delete(t.clientId);
                                                            })
                                                            .next(function () {
                                                                return n;
                                                            });
                                                    });
                                                }).catch(function () {
                                                    return [];
                                                }),
                                            ]);
                                  case 1:
                                      t.sent().forEach(function (t) {
                                          i.window.localStorage.removeItem(i.nu(t.clientId));
                                      }),
                                          (t.label = 2);
                                  case 2:
                                      return [2];
                              }
                          });
                      });
                  }),
                  (ch.prototype.Wa = function () {
                      var t = this;
                      this.Na = this.Tr.yr("client_metadata_refresh", 4e3, function () {
                          return t
                              .qa()
                              .then(function () {
                                  return t.eu();
                              })
                              .then(function () {
                                  return t.Wa();
                              });
                      });
                  }),
                  (ch.prototype.Za = function (t) {
                      return !!t && t.ownerId === this.clientId;
                  }),
                  (ch.prototype.Ya = function (e) {
                      var i = this;
                      return ph(e)
                          .get(Ma.key)
                          .next(function (t) {
                              if (null !== t && i.su(t.leaseTimestampMs, 5e3) && !i.ru(t.ownerId)) {
                                  if (i.Za(t) && i.networkEnabled) return !0;
                                  if (!i.Za(t)) {
                                      if (!t.allowTabSynchronization) throw new kr(Sr.FAILED_PRECONDITION, uh);
                                      return !1;
                                  }
                              }
                              return (
                                  !(!i.networkEnabled || !i.inForeground) ||
                                  dh(e)
                                      .eo()
                                      .next(function (t) {
                                          return (
                                              void 0 ===
                                              i.iu(t, 5e3).find(function (t) {
                                                  if (i.clientId !== t.clientId) {
                                                      var e = !i.networkEnabled && t.networkEnabled,
                                                          n = !i.inForeground && t.inForeground,
                                                          r = i.networkEnabled === t.networkEnabled;
                                                      if (e || (n && r)) return !0;
                                                  }
                                                  return !1;
                                              })
                                          );
                                      })
                              );
                          })
                          .next(function (t) {
                              return i.isPrimary !== t && Ys("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), t;
                          });
                  }),
                  (ch.prototype.hu = function () {
                      return y(this, void 0, void 0, function () {
                          var e = this;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return (
                                          (this.Da = !1),
                                          this.ou(),
                                          this.Na && (this.Na.cancel(), (this.Na = null)),
                                          this.au(),
                                          this.uu(),
                                          [
                                              4,
                                              this.Ba.runTransaction("readwrite", [Ma.store, th.store], function (t) {
                                                  return e.Ja(t).next(function () {
                                                      return e.tu(t);
                                                  });
                                              }),
                                          ]
                                      );
                                  case 1:
                                      return t.sent(), this.Ba.close(), this.cu(), [2];
                              }
                          });
                      });
                  }),
                  (ch.prototype.iu = function (t, e) {
                      var n = this;
                      return t.filter(function (t) {
                          return n.su(t.updateTimeMs, e) && !n.ru(t.clientId);
                      });
                  }),
                  (ch.prototype._u = function () {
                      var e = this;
                      return this.Ba.runTransaction("readonly", [th.store], function (t) {
                          return dh(t)
                              .eo()
                              .next(function (t) {
                                  return e.iu(t, 18e5).map(function (t) {
                                      return t.clientId;
                                  });
                              });
                      });
                  }),
                  (ch.clearPersistence = function (n) {
                      return y(this, void 0, void 0, function () {
                          var e;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return ch.Uh() ? ((e = n + ch.La), [4, Xu.delete(e)]) : [2, Promise.resolve()];
                                  case 1:
                                      return t.sent(), [2];
                              }
                          });
                      });
                  }),
                  Object.defineProperty(ch.prototype, "vh", {
                      get: function () {
                          return this.Da;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (ch.prototype.lu = function (t) {
                      return ha.uo(t, this.serializer, this.jn, this.oo);
                  }),
                  (ch.prototype.du = function () {
                      return this.Oa;
                  }),
                  (ch.prototype.fu = function () {
                      return this.Qn;
                  }),
                  (ch.prototype.Tu = function () {
                      return this.jn;
                  }),
                  (ch.prototype.runTransaction = function (n, t, r) {
                      var i = this;
                      Ys("IndexedDbPersistence", "Starting transaction:", n);
                      var o,
                          e = "readonly" === t ? "readonly" : "readwrite";
                      return this.Ba.runTransaction(e, eh, function (e) {
                          return (
                              (o = new ah(e, i.ja.next())),
                              "readwrite-primary" === t
                                  ? i
                                        .Ha(e)
                                        .next(function (t) {
                                            return !!t || i.Ya(e);
                                        })
                                        .next(function (t) {
                                            if (!t)
                                                throw (
                                                    (Xs("Failed to obtain primary lease for action '" + n + "'."),
                                                    (i.isPrimary = !1),
                                                    i.Tr.$r(function () {
                                                        return i.$a(!1);
                                                    }),
                                                    new kr(Sr.FAILED_PRECONDITION, pu))
                                                );
                                            return r(o);
                                        })
                                        .next(function (t) {
                                            return i.Xa(e).next(function () {
                                                return t;
                                            });
                                        })
                                  : i.Eu(e).next(function () {
                                        return r(o);
                                    })
                          );
                      }).then(function (t) {
                          return o.Un(), t;
                      });
                  }),
                  (ch.prototype.Eu = function (t) {
                      var e = this;
                      return ph(t)
                          .get(Ma.key)
                          .next(function (t) {
                              if (null !== t && e.su(t.leaseTimestampMs, 5e3) && !e.ru(t.ownerId) && !e.Za(t) && !t.allowTabSynchronization) throw new kr(Sr.FAILED_PRECONDITION, uh);
                          });
                  }),
                  (ch.prototype.Xa = function (t) {
                      var e = new Ma(this.clientId, this.allowTabSynchronization, Date.now());
                      return ph(t).put(Ma.key, e);
                  }),
                  (ch.Uh = function () {
                      return Xu.Uh();
                  }),
                  (ch.Iu = function (t) {
                      var e = t.ii.projectId;
                      return t.ii.ln || (e += "." + t.ii.database), "firestore/" + t.persistenceKey + "/" + e + "/";
                  }),
                  (ch.prototype.Ja = function (t) {
                      var e = this,
                          n = ph(t);
                      return n.get(Ma.key).next(function (t) {
                          return e.Za(t) ? (Ys("IndexedDbPersistence", "Releasing primary lease."), n.delete(Ma.key)) : fu.resolve();
                      });
                  }),
                  (ch.prototype.su = function (t, e) {
                      var n = Date.now();
                      return !(t < n - e || (n < t && (Xs("Detected an update time that is in the future: " + t + " > " + n), 1)));
                  }),
                  (ch.prototype.Ua = function () {
                      var t = this;
                      null !== this.document &&
                          "function" == typeof this.document.addEventListener &&
                          ((this.Fa = function () {
                              t.Tr.$r(function () {
                                  return (t.inForeground = "visible" === t.document.visibilityState), t.qa();
                              });
                          }),
                          this.document.addEventListener("visibilitychange", this.Fa),
                          (this.inForeground = "visible" === this.document.visibilityState));
                  }),
                  (ch.prototype.au = function () {
                      this.Fa && (this.document.removeEventListener("visibilitychange", this.Fa), (this.Fa = null));
                  }),
                  (ch.prototype.Qa = function () {
                      var t = this;
                      "function" == typeof this.window.addEventListener &&
                          ((this.Ca = function () {
                              t.ou(),
                                  t.Tr.$r(function () {
                                      return t.hu();
                                  });
                          }),
                          this.window.addEventListener("unload", this.Ca));
                  }),
                  (ch.prototype.uu = function () {
                      this.Ca && (this.window.removeEventListener("unload", this.Ca), (this.Ca = null));
                  }),
                  (ch.prototype.ru = function (t) {
                      try {
                          var e = null !== this.xa.getItem(this.nu(t));
                          return Ys("IndexedDbPersistence", "Client '" + t + "' " + (e ? "is" : "is not") + " zombied in LocalStorage"), e;
                      } catch (t) {
                          return Xs("IndexedDbPersistence", "Failed to get zombied client id.", t), !1;
                      }
                  }),
                  (ch.prototype.ou = function () {
                      try {
                          this.xa.setItem(this.nu(this.clientId), String(Date.now()));
                      } catch (t) {
                          Xs("Failed to set zombie client id.", t);
                      }
                  }),
                  (ch.prototype.cu = function () {
                      try {
                          this.xa.removeItem(this.nu(this.clientId));
                      } catch (t) {}
                  }),
                  (ch.prototype.nu = function (t) {
                      return "firestore_zombie_" + this.persistenceKey + "_" + t;
                  }),
                  ch);
          function ch(t, e, n, r, i, o, s, u) {
              if (
                  ((this.allowTabSynchronization = t),
                  (this.persistenceKey = e),
                  (this.clientId = n),
                  (this.Tr = o),
                  (this.Sa = u),
                  (this.Da = !1),
                  (this.isPrimary = !1),
                  (this.networkEnabled = !0),
                  (this.Ca = null),
                  (this.inForeground = !1),
                  (this.Fa = null),
                  (this.Na = null),
                  (this.ka = Number.NEGATIVE_INFINITY),
                  (this.$a = function (t) {
                      return Promise.resolve();
                  }),
                  !ch.Uh())
              )
                  throw new kr(Sr.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
              if (
                  ((this.oo = new yh(this, i)),
                  (this.Ma = e + ch.La),
                  (this.serializer = new sh(s)),
                  (this.document = r.document),
                  (this.Oa = new ga(this.oo, this.serializer)),
                  (this.jn = new nh()),
                  (this.Qn = new Aa(this.serializer, this.jn)),
                  !r.window || !r.window.localStorage)
              )
                  throw new kr(Sr.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
              (this.window = r.window), (this.xa = this.window.localStorage);
          }
          function fh(t, e) {
              var n = this;
              return ((n = oh.call(this) || this).bo = t), (n.va = e), n;
          }
          function lh(t) {
              this.pa = t;
          }
          function ph(t) {
              return t.store(Ma.store);
          }
          function dh(t) {
              return t.store(th.store);
          }
          hh.La = "main";
          var yh =
              ((vh.prototype.Fh = function (t) {
                  var n = this.wu(t);
                  return this.db
                      .du()
                      .Ho(t)
                      .next(function (e) {
                          return n.next(function (t) {
                              return e + t;
                          });
                      });
              }),
              (vh.prototype.wu = function (t) {
                  var e = 0;
                  return this.kh(t, function (t) {
                      e++;
                  }).next(function () {
                      return e;
                  });
              }),
              (vh.prototype.js = function (t, e) {
                  return this.db.du().js(t, e);
              }),
              (vh.prototype.kh = function (t, n) {
                  return this.Ru(t, function (t, e) {
                      return n(e);
                  });
              }),
              (vh.prototype.Xo = function (t, e, n) {
                  return gh(t, n);
              }),
              (vh.prototype.ta = function (t, e, n) {
                  return gh(t, n);
              }),
              (vh.prototype.$h = function (t, e, n) {
                  return this.db.du().$h(t, e, n);
              }),
              (vh.prototype.So = function (t, e) {
                  return gh(t, e);
              }),
              (vh.prototype.Au = function (t, e) {
                  return (
                      (r = e),
                      (i = !1),
                      ya((n = t))
                          .ho(function (t) {
                              return fa(n, t, r).next(function (t) {
                                  return t && (i = !0), fu.resolve(!t);
                              });
                          })
                          .next(function () {
                              return i;
                          })
                  );
                  var n, r, i;
              }),
              (vh.prototype.Mh = function (r, i) {
                  var o = this,
                      s = this.db.fu().Ea(),
                      u = [],
                      a = 0;
                  return this.Ru(r, function (e, t) {
                      if (t <= i) {
                          var n = o.Au(r, e).next(function (t) {
                              if (!t)
                                  return (
                                      a++,
                                      s.Mn(r, e).next(function () {
                                          return s.$n(e), Ia(r).delete([0, Wu(e.path)]);
                                      })
                                  );
                          });
                          u.push(n);
                      }
                  })
                      .next(function () {
                          return fu.vn(u);
                      })
                      .next(function () {
                          return s.apply(r);
                      })
                      .next(function () {
                          return a;
                      });
              }),
              (vh.prototype.removeTarget = function (t, e) {
                  var n = e.Ie(t.va);
                  return this.db.du().Wo(t, n);
              }),
              (vh.prototype.mu = function (t, e) {
                  return gh(t, e);
              }),
              (vh.prototype.Ru = function (t, o) {
                  var s,
                      e = Ia(t),
                      u = gu.dr;
                  return e
                      .ro({ index: Xa.documentTargetsIndex }, function (t, e) {
                          var n = t[0],
                              r = (t[1], e.path),
                              i = e.sequenceNumber;
                          0 === n ? (u !== gu.dr && o(new Xr(Hu(s)), u), (u = i), (s = r)) : (u = gu.dr);
                      })
                      .next(function () {
                          u !== gu.dr && o(new Xr(Hu(s)), u);
                      });
              }),
              (vh.prototype.Oh = function (t) {
                  return this.db.fu().Ra(t);
              }),
              vh);
          function vh(t, e) {
              (this.db = t), (this.Vh = new Bu(this, e));
          }
          function gh(t, e) {
              return Ia(t).put(((n = e), (r = t.va), new Xa(0, Wu(n.path), r)));
              var n, r;
          }
          var mh =
              ((wh.prototype.start = function () {
                  return Promise.resolve();
              }),
              (wh.prototype.Su = function (i) {
                  return y(this, void 0, void 0, function () {
                      var e,
                          m,
                          n,
                          r = this;
                      return v(this, function (t) {
                          switch (t.label) {
                              case 0:
                                  return (
                                      (e = this.Wn),
                                      (m = this.bu),
                                      [
                                          4,
                                          this.persistence.runTransaction("Handle user change", "readonly", function (v) {
                                              var g;
                                              return r.Wn.Vo(v)
                                                  .next(function (t) {
                                                      return (g = t), (e = r.persistence.lu(i)), (m = new yu(r.yu, e, r.persistence.Tu())), e.Vo(v);
                                                  })
                                                  .next(function (t) {
                                                      for (var e = [], n = [], r = gs(), i = 0, o = g; i < o.length; i++) {
                                                          var s = o[i];
                                                          e.push(s.batchId);
                                                          for (var u = 0, a = s.mutations; u < a.length; u++) {
                                                              var h = a[u];
                                                              r = r.add(h.key);
                                                          }
                                                      }
                                                      for (var c = 0, f = t; c < f.length; c++) {
                                                          var l = f[c];
                                                          n.push(l.batchId);
                                                          for (var p = 0, d = l.mutations; p < d.length; p++) {
                                                              var y = d[p];
                                                              r = r.add(y.key);
                                                          }
                                                      }
                                                      return m.Yn(v, r).next(function (t) {
                                                          return { Du: t, Cu: e, Fu: n };
                                                      });
                                                  });
                                          }),
                                      ]
                                  );
                              case 1:
                                  return (n = t.sent()), [2, ((this.Wn = e), (this.bu = m), this.Pu.vu(this.bu), n)];
                          }
                      });
                  });
              }),
              (wh.prototype.Nu = function (u) {
                  var a,
                      h = this,
                      c = Pr.now(),
                      t = u.reduce(function (t, e) {
                          return t.add(e.key);
                      }, gs());
                  return this.persistence
                      .runTransaction("Locally write mutations", "readwrite", function (s) {
                          return h.bu.Yn(s, t).next(function (t) {
                              a = t;
                              for (var e = [], n = 0, r = u; n < r.length; n++) {
                                  var i = r[n],
                                      o = i.Pt(a.get(i.key));
                                  null != o && e.push(new zi(i.key, o, uo(o.proto.mapValue), Fi.exists(!0)));
                              }
                              return h.Wn.To(s, c, e, u);
                          });
                      })
                      .then(function (t) {
                          var e = t.In(a);
                          return { batchId: t.batchId, Dn: e };
                      });
              }),
              (wh.prototype._o = function (r) {
                  var i = this;
                  return this.persistence.runTransaction("Acknowledge batch", "readwrite-primary", function (t) {
                      var e = r.batch.keys(),
                          n = i.yu.Ea({ wa: !0 });
                      return i.Wn._o(t, r.batch, r.streamToken)
                          .next(function () {
                              return i.ku(t, r, n);
                          })
                          .next(function () {
                              return n.apply(t);
                          })
                          .next(function () {
                              return i.Wn.Do(t);
                          })
                          .next(function () {
                              return i.bu.Yn(t, e);
                          });
                  });
              }),
              (wh.prototype.$u = function (t) {
                  var r = this;
                  return this.persistence.runTransaction("Reject batch", "readwrite-primary", function (e) {
                      var n;
                      return r.Wn.wo(e, t)
                          .next(function (t) {
                              return Zs(null !== t), (n = t.keys()), r.Wn.yo(e, t);
                          })
                          .next(function () {
                              return r.Wn.Do(e);
                          })
                          .next(function () {
                              return r.bu.Yn(e, n);
                          });
                  });
              }),
              (wh.prototype.Po = function () {
                  var e = this;
                  return this.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", function (t) {
                      return e.Wn.Po(t);
                  });
              }),
              (wh.prototype.do = function () {
                  var e = this;
                  return this.persistence.runTransaction("Get last stream token", "readonly", function (t) {
                      return e.Wn.do(t);
                  });
              }),
              (wh.prototype.fo = function (e) {
                  var n = this;
                  return this.persistence.runTransaction("Set last stream token", "readwrite-primary", function (t) {
                      return n.Wn.fo(t, e);
                  });
              }),
              (wh.prototype.Oo = function () {
                  var e = this;
                  return this.persistence.runTransaction("Get last remote snapshot version", "readonly", function (t) {
                      return e.Oa.Oo(t);
                  });
              }),
              (wh.prototype.Mu = function (a) {
                  var h = this,
                      c = a.Ee,
                      f = this.Vu;
                  return this.persistence
                      .runTransaction("Apply remote event", "readwrite-primary", function (o) {
                          var i = h.yu.Ea({ wa: !0 });
                          f = h.Vu;
                          var s = [];
                          a.as.forEach(function (t, e) {
                              var n = f.get(e);
                              if (n) {
                                  s.push(
                                      h.Oa.Zo(o, t.Is, e).next(function () {
                                          return h.Oa.Jo(o, t.Ts, e);
                                      })
                                  );
                                  var r = t.resumeToken;
                                  if (0 < r.rt()) {
                                      var i = n.we(r, c).Ie(o.va);
                                      (f = f.Ae(e, i)), wh.Lu(n, i, t) && s.push(h.Oa.Wo(o, i));
                                  }
                              }
                          });
                          var u = cs(),
                              n = gs();
                          if (
                              (a.cs.forEach(function (t, e) {
                                  n = n.add(t);
                              }),
                              s.push(
                                  i.getEntries(o, n).next(function (r) {
                                      a.cs.forEach(function (t, e) {
                                          var n = r.get(t);
                                          e instanceof Io && e.version.isEqual(Vr.min())
                                              ? (i.$n(t, c), (u = u.Ae(t, e)))
                                              : null == n || 0 < e.version.S(n.version) || (0 === e.version.S(n.version) && n.hasPendingWrites)
                                              ? (i.Nn(e, c), (u = u.Ae(t, e)))
                                              : Ys("LocalStore", "Ignoring outdated watch update for ", t, ". Current version:", n.version, " Watch version:", e.version),
                                              a._s.has(t) && s.push(h.persistence.oo.mu(o, t));
                                      });
                                  })
                              ),
                              !c.isEqual(Vr.min()))
                          ) {
                              var t = h.Oa.Oo(o).next(function (t) {
                                  return h.Oa.Bo(o, o.va, c);
                              });
                              s.push(t);
                          }
                          return fu
                              .vn(s)
                              .next(function () {
                                  return i.apply(o);
                              })
                              .next(function () {
                                  return h.bu.Jn(o, u);
                              });
                      })
                      .then(function (t) {
                          return (h.Vu = f), t;
                      });
              }),
              (wh.Lu = function (t, e, n) {
                  return Zs(0 < e.resumeToken.rt()), 0 === t.resumeToken.rt() || e.Ee.D() - t.Ee.D() >= this.Ou || 0 < n.Ts.size + n.Es.size + n.Is.size;
              }),
              (wh.prototype.xu = function (u) {
                  var a = this;
                  return this.persistence
                      .runTransaction("notifyLocalViewChanges", "readwrite", function (n) {
                          return fu.forEach(u, function (e) {
                              return fu
                                  .forEach(e.hr, function (t) {
                                      return a.persistence.oo.Xo(n, e.targetId, t);
                                  })
                                  .next(function () {
                                      return fu.forEach(e.or, function (t) {
                                          return a.persistence.oo.ta(n, e.targetId, t);
                                      });
                                  });
                          });
                      })
                      .then(function () {
                          for (var t = 0, e = u; t < e.length; t++) {
                              var n = e[t],
                                  r = n.targetId;
                              if (!n.fromCache) {
                                  var i = a.Vu.get(r),
                                      o = i.Ee,
                                      s = i.Re(o);
                                  a.Vu = a.Vu.Ae(r, s);
                              }
                          }
                      });
              }),
              (wh.prototype.Bu = function (e) {
                  var n = this;
                  return this.persistence.runTransaction("Get next mutation batch", "readonly", function (t) {
                      return void 0 === e && (e = -1), n.Wn.mo(t, e);
                  });
              }),
              (wh.prototype.qu = function (e) {
                  var n = this;
                  return this.persistence.runTransaction("read document", "readonly", function (t) {
                      return n.bu.Kn(t, e);
                  });
              }),
              (wh.prototype.Uu = function (r) {
                  var i = this;
                  return this.persistence
                      .runTransaction("Allocate target", "readwrite", function (e) {
                          var n;
                          return i.Oa.Yo(e, r).next(function (t) {
                              return t
                                  ? ((n = t), fu.resolve(n))
                                  : i.Oa.$o(e).next(function (t) {
                                        return (
                                            (n = new Lo(r, t, 0, e.va)),
                                            i.Oa.qo(e, n).next(function () {
                                                return n;
                                            })
                                        );
                                    });
                          });
                      })
                      .then(function (t) {
                          return null === i.Vu.get(t.targetId) && ((i.Vu = i.Vu.Ae(t.targetId, t)), i.gu.set(r, t.targetId)), t;
                      });
              }),
              (wh.prototype.Yo = function (t, e) {
                  var n = this.gu.get(e);
                  return void 0 !== n ? fu.resolve(this.Vu.get(n)) : this.Oa.Yo(t, e);
              }),
              (wh.prototype.Qu = function (t, e) {
                  var n = this,
                      r = this.Vu.get(t),
                      i = e ? "readwrite" : "readwrite-primary";
                  return this.persistence
                      .runTransaction("Release target", i, function (t) {
                          return e ? fu.resolve() : n.persistence.oo.removeTarget(t, r);
                      })
                      .then(function () {
                          (n.Vu = n.Vu.remove(t)), n.gu.delete(r.target);
                      });
              }),
              (wh.prototype.Wu = function (t, n) {
                  var r = this,
                      i = Vr.min(),
                      o = gs();
                  return this.persistence.runTransaction("Execute query", "readonly", function (e) {
                      return r
                          .Yo(e, t.ee())
                          .next(function (t) {
                              if (t)
                                  return (
                                      (i = t.lastLimboFreeSnapshotVersion),
                                      r.Oa.ea(e, t.targetId).next(function (t) {
                                          o = t;
                                      })
                                  );
                          })
                          .next(function () {
                              return r.Pu.Zn(e, t, n ? i : Vr.min(), n ? o : gs());
                          })
                          .next(function (t) {
                              return { documents: t, ju: o };
                          });
                  });
              }),
              (wh.prototype.ku = function (t, i, o) {
                  var e = this,
                      s = i.batch,
                      n = s.keys(),
                      u = fu.resolve();
                  return (
                      n.forEach(function (r) {
                          u = u
                              .next(function () {
                                  return o.Mn(t, r);
                              })
                              .next(function (t) {
                                  var e = t,
                                      n = i.Rn.get(r);
                                  Zs(null !== n), (!e || e.version.S(n) < 0) && (e = s.at(r, e, i)) && o.Nn(e, i.wn);
                              });
                      }),
                      u.next(function () {
                          return e.Wn.yo(t, s);
                      })
                  );
              }),
              (wh.prototype.Sh = function (e) {
                  var n = this;
                  return this.persistence.runTransaction("Collect garbage", "readwrite-primary", function (t) {
                      return e.Lh(t, n.Vu);
                  });
              }),
              wh);
          function wh(t, e, n) {
              (this.persistence = t),
                  (this.Pu = e),
                  (this.Vu = new Jo(ru)),
                  (this.gu = new au(function (t) {
                      return t.canonicalId();
                  })),
                  (this.pu = Vr.min()),
                  (this.Wn = t.lu(n)),
                  (this.yu = t.fu()),
                  (this.Oa = t.du()),
                  (this.bu = new yu(this.yu, this.Wn, this.persistence.Tu())),
                  this.Pu.vu(this.bu);
          }
          mh.Ou = 3e8;
          var bh,
              Eh =
                  (n(Th, (bh = mh)),
                  (Th.prototype.start = function () {
                      return this.Ku();
                  }),
                  (Th.prototype.Gu = function (t) {
                      var n = this;
                      return this.persistence.runTransaction("Lookup mutation documents", "readonly", function (e) {
                          return n.Wn.Ao(e, t).next(function (t) {
                              return t ? n.bu.Yn(e, t) : fu.resolve(null);
                          });
                      });
                  }),
                  (Th.prototype.zu = function (t) {
                      this.Wn.vo(t);
                  }),
                  (Th.prototype.za = function (t) {
                      this.persistence.za(t);
                  }),
                  (Th.prototype._u = function () {
                      return this.persistence._u();
                  }),
                  (Th.prototype.Hu = function (e) {
                      var n = this,
                          t = this.Vu.get(e);
                      return t
                          ? Promise.resolve(t.target)
                          : this.persistence.runTransaction("Get target data", "readonly", function (t) {
                                return n.Oa.si(t, e).next(function (t) {
                                    return t ? t.target : null;
                                });
                            });
                  }),
                  (Th.prototype.la = function () {
                      var r = this;
                      return this.persistence
                          .runTransaction("Get new document changes", "readonly", function (t) {
                              return r.yu.la(t, r.pu);
                          })
                          .then(function (t) {
                              var e = t.da,
                                  n = t.readTime;
                              return (r.pu = n), e;
                          });
                  }),
                  (Th.prototype.Ku = function () {
                      return y(this, void 0, void 0, function () {
                          var e,
                              n = this;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return [
                                          4,
                                          (e = this).persistence.runTransaction("Synchronize last document change read time", "readonly", function (t) {
                                              return n.yu.Ta(t);
                                          }),
                                      ];
                                  case 1:
                                      return (e.pu = t.sent()), [2];
                              }
                          });
                      });
                  }),
                  Th);
          function Th(t, e, n) {
              var r = this;
              return ((r = bh.call(this, t, e, n) || this).persistence = t), (r.Wn = t.lu(n)), (r.yu = t.fu()), (r.Oa = t.du()), r;
          }
          function Ih(e) {
              return y(this, void 0, void 0, function () {
                  return v(this, function (t) {
                      if (e.code !== Sr.FAILED_PRECONDITION || e.message !== pu) throw e;
                      return Ys("LocalStore", "Unexpectedly lost primary lease"), [2];
                  });
              });
          }
          var Nh =
                  ((Sh.prototype.B = function () {
                      return this.Yu.B();
                  }),
                  (Sh.prototype.Xo = function (t, e) {
                      var n = new Ah(t, e);
                      (this.Yu = this.Yu.add(n)), (this.Xu = this.Xu.add(n));
                  }),
                  (Sh.prototype.tc = function (t, e) {
                      var n = this;
                      t.forEach(function (t) {
                          return n.Xo(t, e);
                      });
                  }),
                  (Sh.prototype.ta = function (t, e) {
                      this.ec(new Ah(t, e));
                  }),
                  (Sh.prototype.sc = function (t, e) {
                      var n = this;
                      t.forEach(function (t) {
                          return n.ta(t, e);
                      });
                  }),
                  (Sh.prototype.ic = function (t) {
                      var e = this,
                          n = Xr.EMPTY,
                          r = new Ah(n, t),
                          i = new Ah(n, t + 1),
                          o = [];
                      return (
                          this.Xu.Ke([r, i], function (t) {
                              e.ec(t), o.push(t.key);
                          }),
                          o
                      );
                  }),
                  (Sh.prototype.nc = function () {
                      var e = this;
                      this.Yu.forEach(function (t) {
                          return e.ec(t);
                      });
                  }),
                  (Sh.prototype.ec = function (t) {
                      (this.Yu = this.Yu.delete(t)), (this.Xu = this.Xu.delete(t));
                  }),
                  (Sh.prototype.rc = function (t) {
                      var e = Xr.EMPTY,
                          n = new Ah(e, t),
                          r = new Ah(e, t + 1),
                          i = gs();
                      return (
                          this.Xu.Ke([n, r], function (t) {
                              i = i.add(t.key);
                          }),
                          i
                      );
                  }),
                  (Sh.prototype.Co = function (t) {
                      var e = new Ah(t, 0),
                          n = this.Yu.ze(e);
                      return null !== n && t.isEqual(n.key);
                  }),
                  Sh),
              Ah =
                  ((_h.Ju = function (t, e) {
                      return Xr.N(t.key, e.key) || ru(t.hc, e.hc);
                  }),
                  (_h.Zu = function (t, e) {
                      return ru(t.hc, e.hc) || Xr.N(t.key, e.key);
                  }),
                  _h);
          function _h(t, e) {
              (this.key = t), (this.hc = e);
          }
          function Sh() {
              (this.Yu = new os(Ah.Ju)), (this.Xu = new os(Ah.Zu));
          }
          function kh(t, e) {
              if (0 !== e.length) throw new kr(Sr.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + Wh(e.length, "argument") + ".");
          }
          function Dh(t, e, n) {
              if (e.length !== n) throw new kr(Sr.INVALID_ARGUMENT, "Function " + t + "() requires " + Wh(n, "argument") + ", but was called with " + Wh(e.length, "argument") + ".");
          }
          function xh(t, e, n) {
              if (e.length < n) throw new kr(Sr.INVALID_ARGUMENT, "Function " + t + "() requires at least " + Wh(n, "argument") + ", but was called with " + Wh(e.length, "argument") + ".");
          }
          function Oh(t, e, n, r) {
              if (e.length < n || e.length > r) throw new kr(Sr.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + Wh(e.length, "argument") + ".");
          }
          function Rh(t, e, n, r) {
              Mh(t, e, zh(n) + " argument", r);
          }
          function Ph(t, e, n, r) {
              void 0 !== r && Rh(t, e, n, r);
          }
          function Vh(t, e, n, r) {
              Mh(t, e, n + " option", r);
          }
          function Lh(t, e, n, r) {
              void 0 !== r && Vh(t, e, n, r);
          }
          function Ch(t, e, n, r, a) {
              void 0 !== r &&
                  (function (t, e, n) {
                      for (var r = [], i = 0, o = a; i < o.length; i++) {
                          var s = o[i];
                          if (s === n) return;
                          r.push(jh(s));
                      }
                      var u = jh(n);
                      throw new kr(Sr.INVALID_ARGUMENT, "Invalid value " + u + " provided to function " + t + '() for option "' + e + '". Acceptable values: ' + r.join(", "));
                  })(t, n, r);
          }
          function Mh(t, e, n, r) {
              if (!("object" === e ? Uh(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : typeof r === e)) {
                  var i = jh(r);
                  throw new kr(Sr.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i);
              }
          }
          function Uh(t) {
              return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
          }
          function jh(e) {
              if (void 0 === e) return "undefined";
              if (null === e) return "null";
              if ("string" == typeof e) return 20 < e.length && (e = e.substring(0, 20) + "..."), JSON.stringify(e);
              if ("number" == typeof e || "boolean" == typeof e) return "" + e;
              if ("object" != typeof e) return "function" == typeof e ? "a function" : Js();
              if (e instanceof Array) return "an array";
              var t = (function () {
                  if (e.constructor) {
                      var t = /function\s+([^\s(]+)\s*\(/.exec(e.constructor.toString());
                      if (t && 1 < t.length) return t[1];
                  }
                  return null;
              })();
              return t ? "a custom " + t + " object" : "an object";
          }
          function qh(t, e, n) {
              if (void 0 === n) throw new kr(Sr.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + zh(e) + " argument, but it was undefined.");
          }
          function Fh(n, t, r) {
              Zr(t, function (t, e) {
                  if (r.indexOf(t) < 0) throw new kr(Sr.INVALID_ARGUMENT, "Unknown option '" + t + "' passed to function " + n + "(). Available options: " + r.join(", "));
              });
          }
          function Bh(t, e, n, r) {
              var i = jh(r);
              return new kr(Sr.INVALID_ARGUMENT, "Function " + t + "() requires its " + zh(n) + " argument to be a " + e + ", but it was: " + i);
          }
          function Gh(t, e, n) {
              if (n <= 0) throw new kr(Sr.INVALID_ARGUMENT, 'Function "' + t + '()" requires its ' + zh(e) + " argument to be a positive number, but it was: " + n + ".");
          }
          function zh(t) {
              switch (t) {
                  case 1:
                      return "first";
                  case 2:
                      return "second";
                  case 3:
                      return "third";
                  default:
                      return t + "th";
              }
          }
          function Wh(t, e) {
              return t + " " + e + (1 === t ? "" : "s");
          }
          function Qh() {
              if ("undefined" == typeof Uint8Array) throw new kr(Sr.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
          }
          function Kh() {
              if (!zs.nt().oc) throw new kr(Sr.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
          }
          var Hh =
                  (($h.fromBase64String = function (t) {
                      Dh("Blob.fromBase64String", arguments, 1), Rh("Blob.fromBase64String", "string", 1, t), Kh();
                      try {
                          return new $h(ei.fromBase64String(t));
                      } catch (t) {
                          throw new kr(Sr.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + t);
                      }
                  }),
                  ($h.fromUint8Array = function (t) {
                      if ((Dh("Blob.fromUint8Array", arguments, 1), Qh(), !(t instanceof Uint8Array))) throw Bh("Blob.fromUint8Array", "Uint8Array", 1, t);
                      return new $h(ei.fromUint8Array(t));
                  }),
                  ($h.prototype.toBase64 = function () {
                      return Dh("Blob.toBase64", arguments, 0), Kh(), this.ac.toBase64();
                  }),
                  ($h.prototype.toUint8Array = function () {
                      return Dh("Blob.toUint8Array", arguments, 0), Qh(), this.ac.toUint8Array();
                  }),
                  ($h.prototype.toString = function () {
                      return "Blob(base64: " + this.toBase64() + ")";
                  }),
                  ($h.prototype.isEqual = function (t) {
                      return this.ac.isEqual(t.ac);
                  }),
                  $h),
              Yh =
                  ((Xh.documentId = function () {
                      return Xh.cc;
                  }),
                  (Xh.prototype.isEqual = function (t) {
                      if (!(t instanceof Xh)) throw Bh("isEqual", "FieldPath", 1, t);
                      return this.uc.isEqual(t.uc);
                  }),
                  Xh);
          function Xh() {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
              !(function () {
                  if (!(t instanceof Array) || t.length < 1) throw new kr(Sr.INVALID_ARGUMENT, "Function FieldPath() requires its fieldNames argument to be an array with at least 1 element.");
              })();
              for (var n = 0; n < t.length; ++n) if ((Rh("FieldPath", "string", n, t[n]), 0 === t[n].length)) throw new kr(Sr.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
              this.uc = new Hr(t);
          }
          function $h(t) {
              Kh(), (this.ac = t);
          }
          Yh.cc = new Yh(Hr.J().j());
          var Jh,
              Zh,
              tc,
              ec,
              nc,
              rc = new RegExp("[~\\*/\\[\\]]"),
              ic = function (t) {
                  this._c = t;
              },
              oc =
                  (n(Ec, (nc = ic)),
                  (Ec.prototype.Di = function (t) {
                      if (2 !== t.lc) throw 1 === t.lc ? t.dc("FieldValue.delete() can only appear at the top level of your update data") : t.dc("FieldValue.delete() cannot be used with set() unless you pass {merge:true}");
                      return t.Vt.push(t.path), null;
                  }),
                  (Ec.prototype.isEqual = function (t) {
                      return t instanceof Ec;
                  }),
                  Ec),
              sc =
                  (n(bc, (ec = ic)),
                  (bc.prototype.Di = function (t) {
                      return new qi(t.path, Ni.instance);
                  }),
                  (bc.prototype.isEqual = function (t) {
                      return t instanceof bc;
                  }),
                  bc),
              uc =
                  (n(wc, (tc = ic)),
                  (wc.prototype.Di = function (t) {
                      var e = new Ic({ lc: 3, methodName: this._c, Tc: !0 }, t.ii, t.serializer),
                          n = this.fc.map(function (t) {
                              return Sc(t, e);
                          }),
                          r = new _i(n);
                      return new qi(t.path, r);
                  }),
                  (wc.prototype.isEqual = function (t) {
                      return this === t;
                  }),
                  wc),
              ac =
                  (n(mc, (Zh = ic)),
                  (mc.prototype.Di = function (t) {
                      var e = new Ic({ lc: 3, methodName: this._c, Tc: !0 }, t.ii, t.serializer),
                          n = this.fc.map(function (t) {
                              return Sc(t, e);
                          }),
                          r = new Si(n);
                      return new qi(t.path, r);
                  }),
                  (mc.prototype.isEqual = function (t) {
                      return this === t;
                  }),
                  mc),
              hc =
                  (n(gc, (Jh = ic)),
                  (gc.prototype.Di = function (t) {
                      var e = new Ic({ lc: 3, methodName: this._c }, t.ii, t.serializer),
                          n = Sc(this.Ec, e),
                          r = new ki(t.serializer, n);
                      return new qi(t.path, r);
                  }),
                  (gc.prototype.isEqual = function (t) {
                      return this === t;
                  }),
                  gc),
              cc =
                  (Object.defineProperty(vc.prototype, "latitude", {
                      get: function () {
                          return this.Ic;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Object.defineProperty(vc.prototype, "longitude", {
                      get: function () {
                          return this.wc;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (vc.prototype.isEqual = function (t) {
                      return this.Ic === t.Ic && this.wc === t.wc;
                  }),
                  (vc.prototype.p = function (t) {
                      return ru(this.Ic, t.Ic) || ru(this.wc, t.wc);
                  }),
                  vc),
              fc = /^__.*__$/,
              lc =
                  ((yc.prototype.Rc = function (t, e) {
                      var n = [];
                      return null !== this.Vt ? n.push(new zi(t, this.data, this.Vt, e)) : n.push(new Gi(t, this.data, e)), 0 < this.fieldTransforms.length && n.push(new Wi(t, this.fieldTransforms)), n;
                  }),
                  yc),
              pc =
                  ((dc.prototype.Rc = function (t, e) {
                      var n = [new zi(t, this.data, this.Vt, e)];
                      return 0 < this.fieldTransforms.length && n.push(new Wi(t, this.fieldTransforms)), n;
                  }),
                  dc);
          function dc(t, e, n) {
              (this.data = t), (this.Vt = e), (this.fieldTransforms = n);
          }
          function yc(t, e, n) {
              (this.data = t), (this.Vt = e), (this.fieldTransforms = n);
          }
          function vc(t, e) {
              if ((Dh("GeoPoint", arguments, 2), Rh("GeoPoint", "number", 1, t), Rh("GeoPoint", "number", 2, e), !isFinite(t) || t < -90 || 90 < t))
                  throw new kr(Sr.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
              if (!isFinite(e) || e < -180 || 180 < e) throw new kr(Sr.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
              (this.Ic = t), (this.wc = e);
          }
          function gc(t) {
              var e = this;
              return ((e = Jh.call(this, "FieldValue.increment") || this).Ec = t), e;
          }
          function mc(t) {
              var e = this;
              return ((e = Zh.call(this, "FieldValue.arrayRemove") || this).fc = t), e;
          }
          function wc(t) {
              var e = this;
              return ((e = tc.call(this, "FieldValue.arrayUnion") || this).fc = t), e;
          }
          function bc() {
              return ec.call(this, "FieldValue.serverTimestamp") || this;
          }
          function Ec() {
              return nc.call(this, "FieldValue.delete") || this;
          }
          function Tc(t) {
              switch (t) {
                  case 0:
                  case 2:
                  case 1:
                      return 1;
                  case 3:
                  case 4:
                      return;
                  default:
                      throw Js();
              }
          }
          var Ic =
                  (Object.defineProperty(_c.prototype, "path", {
                      get: function () {
                          return this.settings.path;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Object.defineProperty(_c.prototype, "lc", {
                      get: function () {
                          return this.settings.lc;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (_c.prototype.mc = function (t) {
                      return new _c(Object.assign(Object.assign({}, this.settings), t), this.ii, this.serializer, this.fieldTransforms, this.Vt);
                  }),
                  (_c.prototype.Pc = function (t) {
                      var e,
                          n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
                          r = this.mc({ path: n, Tc: !1 });
                      return r.Vc(t), r;
                  }),
                  (_c.prototype.gc = function (t) {
                      var e,
                          n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
                          r = this.mc({ path: n, Tc: !1 });
                      return r.Ac(), r;
                  }),
                  (_c.prototype.pc = function (t) {
                      return this.mc({ path: void 0, Tc: !0 });
                  }),
                  (_c.prototype.dc = function (t) {
                      var e = !this.path || this.path.B() ? "" : " (found in field " + this.path.toString() + ")";
                      return new kr(Sr.INVALID_ARGUMENT, "Function " + this.settings.methodName + "() called with invalid data. " + t + e);
                  }),
                  (_c.prototype.contains = function (e) {
                      return (
                          void 0 !==
                              this.Vt.find(function (t) {
                                  return e.q(t);
                              }) ||
                          void 0 !==
                              this.fieldTransforms.find(function (t) {
                                  return e.q(t.field);
                              })
                      );
                  }),
                  (_c.prototype.Ac = function () {
                      if (this.path) for (var t = 0; t < this.path.length; t++) this.Vc(this.path.get(t));
                  }),
                  (_c.prototype.Vc = function (t) {
                      if (0 === t.length) throw this.dc("Document fields must not be empty");
                      if (Tc(this.lc) && fc.test(t)) throw this.dc('Document fields cannot begin and end with "__"');
                  }),
                  _c),
              Nc =
                  ((Ac.prototype.bc = function (t, e) {
                      var n = this.vc(0, t);
                      xc("Data must be an object, but it was:", n, e);
                      var r = kc(e, n);
                      return new lc(new Hi(r), null, n.fieldTransforms);
                  }),
                  (Ac.prototype.Sc = function (t, e, n) {
                      var r = this.vc(2, t);
                      xc("Data must be an object, but it was:", r, e);
                      var i,
                          o,
                          s = kc(e, r);
                      if (n) {
                          for (var u = [], a = 0, h = n; a < h.length; a++) {
                              var c = h[a],
                                  f = void 0;
                              if (c instanceof Yh) f = c.uc;
                              else {
                                  if ("string" != typeof c) throw Js();
                                  f = Rc(t, c);
                              }
                              if (!r.contains(f)) throw new kr(Sr.INVALID_ARGUMENT, "Field '" + f + "' is specified in your field mask but missing from your input data.");
                              Pc(u, f) || u.push(f);
                          }
                          (i = new ji(u)),
                              (o = r.fieldTransforms.filter(function (t) {
                                  return i.dt(t.field);
                              }));
                      } else (i = new ji(r.Vt)), (o = r.fieldTransforms);
                      return new lc(new Hi(s), i, o);
                  }),
                  (Ac.prototype.Dc = function (o, t) {
                      var s = this.vc(1, o);
                      xc("Data must be an object, but it was:", s, t);
                      var u = [],
                          a = new Yi();
                      Zr(t, function (t, e) {
                          var n = Rc(o, t),
                              r = s.gc(n);
                          if (e instanceof oc) u.push(n);
                          else {
                              var i = Sc(e, r);
                              null != i && (u.push(n), a.set(n, i));
                          }
                      });
                      var e = new ji(u);
                      return new pc(a.yt(), e, s.fieldTransforms);
                  }),
                  (Ac.prototype.Cc = function (t, e, n, r) {
                      var i = this.vc(1, t),
                          o = [Oc(t, e)],
                          s = [n];
                      if (r.length % 2 != 0) throw new kr(Sr.INVALID_ARGUMENT, "Function " + t + "() needs to be called with an even number of arguments that alternate between field names and values.");
                      for (var u = 0; u < r.length; u += 2) o.push(Oc(t, r[u])), s.push(r[u + 1]);
                      for (var a = [], h = new Yi(), c = o.length - 1; 0 <= c; --c)
                          if (!Pc(a, o[c])) {
                              var f = o[c],
                                  l = s[c],
                                  p = i.gc(f);
                              if (l instanceof oc) a.push(f);
                              else {
                                  var d = Sc(l, p);
                                  null != d && (a.push(f), h.set(f, d));
                              }
                          }
                      var y = new ji(a);
                      return new pc(h.yt(), y, i.fieldTransforms);
                  }),
                  (Ac.prototype.vc = function (t, e) {
                      return new Ic({ lc: t, methodName: e, path: Hr.G, Tc: !1 }, this.ii, this.serializer);
                  }),
                  (Ac.prototype.Fc = function (t, e, n) {
                      return void 0 === n && (n = !1), Sc(e, this.vc(n ? 4 : 3, t));
                  }),
                  Ac);
          function Ac(t, e) {
              (this.ii = t), (this.serializer = e || zs.nt().yc(t));
          }
          function _c(t, e, n, r, i) {
              (this.settings = t), (this.ii = e), (this.serializer = n), void 0 === r && this.Ac(), (this.fieldTransforms = r || []), (this.Vt = i || []);
          }
          function Sc(s, t) {
              if (Dc(s)) return xc("Unsupported field value:", t, s), kc(s, t);
              if (s instanceof ic)
                  return (
                      (function (t, e) {
                          if (!Tc(e.lc)) throw e.dc(t._c + "() can only be used with update() and set()");
                          if (null === e.path) throw e.dc(t._c + "() is not currently supported inside arrays");
                          var n = t.Di(e);
                          n && e.fieldTransforms.push(n);
                      })(s, t),
                      null
                  );
              if ((t.path && t.Vt.push(t.path), s instanceof Array)) {
                  if (t.settings.Tc && 4 !== t.lc) throw t.dc("Nested arrays are not supported");
                  return (function (t) {
                      for (var e = [], n = 0, r = 0, i = s; r < i.length; r++) {
                          var o = Sc(i[r], t.pc(n));
                          null == o && (o = { nullValue: "NULL_VALUE" }), e.push(o), n++;
                      }
                      return { arrayValue: { values: e } };
                  })(t);
              }
              return (function (t, e) {
                  if (null === t) return { nullValue: "NULL_VALUE" };
                  if ("number" == typeof t) return e.serializer.ai(t);
                  if ("boolean" == typeof t) return { booleanValue: t };
                  if ("string" == typeof t) return { stringValue: t };
                  if (t instanceof Date) {
                      var n = Pr.fromDate(t);
                      return { timestampValue: e.serializer.C(n) };
                  }
                  if (t instanceof Pr) {
                      var r = new Pr(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
                      return { timestampValue: e.serializer.C(r) };
                  }
                  if (t instanceof cc) return { geoPointValue: { latitude: t.latitude, longitude: t.longitude } };
                  if (t instanceof Hh) return { bytesValue: e.serializer.ui(t) };
                  if (t instanceof dl) {
                      var i = e.ii,
                          o = t.firestore.Nc;
                      if (!o.isEqual(i)) throw e.dc("Document reference is for database " + o.projectId + "/" + o.database + " but should be for database " + i.projectId + "/" + i.database);
                      return { referenceValue: e.serializer._i(t.kc.path, t.firestore.Nc) };
                  }
                  throw e.dc("Unsupported field value: " + jh(t));
              })(s, t);
          }
          function kc(t, r) {
              var i = {};
              return (
                  ti(t)
                      ? r.path && 0 < r.path.length && r.Vt.push(r.path)
                      : Zr(t, function (t, e) {
                            var n = Sc(e, r.Pc(t));
                            null != n && (i[t] = n);
                        }),
                  { mapValue: { fields: i } }
              );
          }
          function Dc(t) {
              return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof Pr || t instanceof cc || t instanceof Hh || t instanceof dl || t instanceof ic);
          }
          function xc(t, e, n) {
              if (!Dc(n) || !Uh(n)) {
                  var r = jh(n);
                  throw "an object" === r ? e.dc(t + " a custom object") : e.dc(t + " " + r);
              }
          }
          function Oc(t, e) {
              if (e instanceof Yh) return e.uc;
              if ("string" == typeof e) return Rc(t, e);
              throw new kr(Sr.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. Field path arguments must be of type string or FieldPath.");
          }
          function Rc(t, e) {
              try {
                  return (function (e) {
                      if (0 <= e.search(rc)) throw new kr(Sr.INVALID_ARGUMENT, "Invalid field path (" + e + "). Paths must not contain '~', '*', '/', '[', or ']'");
                      try {
                          return new (Yh.bind.apply(Yh, i([void 0], e.split("."))))();
                      } catch (t) {
                          throw new kr(Sr.INVALID_ARGUMENT, "Invalid field path (" + e + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
                      }
                  })(e).uc;
              } catch (e) {
                  var n = e instanceof Error ? e.message : e.toString();
                  throw new kr(Sr.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. " + n);
              }
          }
          function Pc(t, e) {
              return t.some(function (t) {
                  return t.isEqual(e);
              });
          }
          var Vc,
              Lc,
              Cc,
              Mc =
                  ((Xc.prototype.Bc = function () {
                      return 1 === this.state || 2 === this.state || 4 === this.state;
                  }),
                  (Xc.prototype.qc = function () {
                      return 2 === this.state;
                  }),
                  (Xc.prototype.start = function () {
                      3 !== this.state ? this.auth() : this.Uc();
                  }),
                  (Xc.prototype.stop = function () {
                      return y(this, void 0, void 0, function () {
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return this.Bc() ? [4, this.close(0)] : [3, 2];
                                  case 1:
                                      t.sent(), (t.label = 2);
                                  case 2:
                                      return [2];
                              }
                          });
                      });
                  }),
                  (Xc.prototype.Qc = function () {
                      (this.state = 0), this.Qr.reset();
                  }),
                  (Xc.prototype.Wc = function () {
                      var t = this;
                      this.qc() &&
                          null === this.xc &&
                          (this.xc = this.Tr.yr(this.$c, 6e4, function () {
                              return t.jc();
                          }));
                  }),
                  (Xc.prototype.Kc = function (t) {
                      this.Gc(), this.stream.send(t);
                  }),
                  (Xc.prototype.jc = function () {
                      return y(this, void 0, void 0, function () {
                          return v(this, function (t) {
                              return this.qc() ? [2, this.close(0)] : [2];
                          });
                      });
                  }),
                  (Xc.prototype.Gc = function () {
                      this.xc && (this.xc.cancel(), (this.xc = null));
                  }),
                  (Xc.prototype.close = function (e, n) {
                      return y(this, void 0, void 0, function () {
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return (
                                          this.Gc(),
                                          this.Qr.cancel(),
                                          this.Oc++,
                                          3 !== e
                                              ? this.Qr.reset()
                                              : n && n.code === Sr.RESOURCE_EXHAUSTED
                                              ? (Xs(n.toString()), Xs("Using maximum backoff delay to prevent overloading the backend."), this.Qr.Vr())
                                              : n && n.code === Sr.UNAUTHENTICATED && this.Lc._(),
                                          null !== this.stream && (this.zc(), this.stream.close(), (this.stream = null)),
                                          (this.state = e),
                                          [4, this.listener.Hc(n)]
                                      );
                                  case 1:
                                      return t.sent(), [2];
                              }
                          });
                      });
                  }),
                  (Xc.prototype.zc = function () {}),
                  (Xc.prototype.auth = function () {
                      var n = this;
                      this.state = 1;
                      var t = this.Yc(this.Oc),
                          e = this.Oc;
                      this.Lc.getToken().then(
                          function (t) {
                              n.Oc === e && n.Jc(t);
                          },
                          function (e) {
                              t(function () {
                                  var t = new kr(Sr.UNKNOWN, "Fetching auth token failed: " + e.message);
                                  return n.Xc(t);
                              });
                          }
                      );
                  }),
                  (Xc.prototype.Jc = function (t) {
                      var e = this,
                          n = this.Yc(this.Oc);
                      (this.stream = this.Zc(t)),
                          this.stream.t_(function () {
                              n(function () {
                                  return (e.state = 2), e.listener.t_();
                              });
                          }),
                          this.stream.Hc(function (t) {
                              n(function () {
                                  return e.Xc(t);
                              });
                          }),
                          this.stream.onMessage(function (t) {
                              n(function () {
                                  return e.onMessage(t);
                              });
                          });
                  }),
                  (Xc.prototype.Uc = function () {
                      var t = this;
                      (this.state = 4),
                          this.Qr.gr(function () {
                              return y(t, void 0, void 0, function () {
                                  return v(this, function (t) {
                                      return (this.state = 0), this.start(), [2];
                                  });
                              });
                          });
                  }),
                  (Xc.prototype.Xc = function (t) {
                      return Ys("PersistentStream", "close with error: " + t), (this.stream = null), this.close(3, t);
                  }),
                  (Xc.prototype.Yc = function (e) {
                      var n = this;
                      return function (t) {
                          n.Tr.$r(function () {
                              return n.Oc === e ? t() : (Ys("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve());
                          });
                      };
                  }),
                  Xc),
              Uc =
                  (n(Yc, (Cc = Mc)),
                  (Yc.prototype.Zc = function (t) {
                      return this.Mc.e_("Listen", t);
                  }),
                  (Yc.prototype.onMessage = function (t) {
                      this.Qr.reset();
                      var e = this.serializer.pi(t),
                          n = this.serializer.bi(t);
                      return this.listener.s_(e, n);
                  }),
                  (Yc.prototype.i_ = function (t) {
                      var e = {};
                      (e.database = this.serializer.wi), (e.addTarget = this.serializer.ee(t));
                      var n = this.serializer.zi(t);
                      n && (e.labels = n), this.Kc(e);
                  }),
                  (Yc.prototype.n_ = function (t) {
                      var e = {};
                      (e.database = this.serializer.wi), (e.removeTarget = t), this.Kc(e);
                  }),
                  Yc),
              jc =
                  (n(Hc, (Lc = Mc)),
                  Object.defineProperty(Hc.prototype, "h_", {
                      get: function () {
                          return this.r_;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (Hc.prototype.start = function () {
                      (this.r_ = !1), Lc.prototype.start.call(this);
                  }),
                  (Hc.prototype.zc = function () {
                      this.r_ && this.o_([]);
                  }),
                  (Hc.prototype.Zc = function (t) {
                      return this.Mc.e_("Write", t);
                  }),
                  (Hc.prototype.onMessage = function (t) {
                      if ((Zs(!!t.streamToken), (this.lastStreamToken = this.serializer.ci(t.streamToken)), this.r_)) {
                          this.Qr.reset();
                          var e = this.serializer.Li(t.writeResults, t.commitTime),
                              n = this.serializer.fromVersion(t.commitTime);
                          return this.listener.a_(n, e);
                      }
                      return Zs(!t.writeResults || 0 === t.writeResults.length), (this.r_ = !0), this.listener.u_();
                  }),
                  (Hc.prototype.c_ = function () {
                      var t = {};
                      (t.database = this.serializer.wi), this.Kc(t);
                  }),
                  (Hc.prototype.o_ = function (t) {
                      var e = this,
                          n = {
                              streamToken: this.serializer.ui(this.lastStreamToken),
                              writes: t.map(function (t) {
                                  return e.serializer.vi(t);
                              }),
                          };
                      this.Kc(n);
                  }),
                  Hc),
              qc =
                  (n(
                      Kc,
                      (Vc = function () {
                          this.__ = void 0;
                      })
                  ),
                  (Kc.prototype.l_ = function (e, n) {
                      var r = this;
                      return this.credentials
                          .getToken()
                          .then(function (t) {
                              return r.Mc.l_(e, n, t);
                          })
                          .catch(function (t) {
                              throw (t.code === Sr.UNAUTHENTICATED && r.credentials._(), t);
                          });
                  }),
                  (Kc.prototype.d_ = function (e, n) {
                      var r = this;
                      return this.credentials
                          .getToken()
                          .then(function (t) {
                              return r.Mc.d_(e, n, t);
                          })
                          .catch(function (t) {
                              throw (t.code === Sr.UNAUTHENTICATED && r.credentials._(), t);
                          });
                  }),
                  Kc),
              Fc =
                  ((Qc.prototype.R_ = function (r) {
                      return y(this, void 0, void 0, function () {
                          var e,
                              n = this;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      if ((this.A_(), 0 < this.mutations.length)) throw new kr(Sr.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                                      return [
                                          4,
                                          (function (s, u) {
                                              return y(this, void 0, void 0, function () {
                                                  var n, e, r, i, o;
                                                  return v(this, function (t) {
                                                      switch (t.label) {
                                                          case 0:
                                                              return (
                                                                  (n = tu(s)),
                                                                  (e = {
                                                                      database: n.serializer.wi,
                                                                      documents: u.map(function (t) {
                                                                          return n.serializer.fi(t);
                                                                      }),
                                                                  }),
                                                                  [4, n.d_("BatchGetDocuments", e)]
                                                              );
                                                          case 1:
                                                              return (
                                                                  (r = t.sent()),
                                                                  (i = new Map()),
                                                                  r.forEach(function (t) {
                                                                      var e = n.serializer.gi(t);
                                                                      i.set(e.key.toString(), e);
                                                                  }),
                                                                  (o = []),
                                                                  [
                                                                      2,
                                                                      (u.forEach(function (t) {
                                                                          var e = i.get(t.toString());
                                                                          Zs(!!e), o.push(e);
                                                                      }),
                                                                      o),
                                                                  ]
                                                              );
                                                      }
                                                  });
                                              });
                                          })(this.f_, r),
                                      ];
                                  case 1:
                                      return [
                                          2,
                                          ((e = t.sent()).forEach(function (t) {
                                              t instanceof Io || t instanceof To ? n.m_(t) : Js();
                                          }),
                                          e),
                                      ];
                              }
                          });
                      });
                  }),
                  (Qc.prototype.set = function (t, e) {
                      this.write(e.Rc(t, this.Rt(t))), this.w_.add(t);
                  }),
                  (Qc.prototype.update = function (t, e) {
                      try {
                          this.write(e.Rc(t, this.P_(t)));
                      } catch (t) {
                          this.I_ = t;
                      }
                      this.w_.add(t);
                  }),
                  (Qc.prototype.delete = function (t) {
                      this.write([new Qi(t, this.Rt(t))]), this.w_.add(t);
                  }),
                  (Qc.prototype.commit = function () {
                      return y(this, void 0, void 0, function () {
                          var e,
                              n = this;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      if ((this.A_(), this.I_)) throw this.I_;
                                      return (
                                          (e = this.T_),
                                          this.mutations.forEach(function (t) {
                                              e = e.remove(t.key);
                                          }),
                                          e.forEach(function (t, e) {
                                              n.mutations.push(new Ki(t, n.Rt(t)));
                                          }),
                                          [
                                              4,
                                              (function (i, o) {
                                                  return y(this, void 0, void 0, function () {
                                                      var e, n, r;
                                                      return v(this, function (t) {
                                                          switch (t.label) {
                                                              case 0:
                                                                  return (
                                                                      (e = tu(i)),
                                                                      (n = {
                                                                          database: e.serializer.wi,
                                                                          writes: o.map(function (t) {
                                                                              return e.serializer.vi(t);
                                                                          }),
                                                                      }),
                                                                      [4, e.l_("Commit", n)]
                                                                  );
                                                              case 1:
                                                                  return (r = t.sent()), [2, e.serializer.Li(r.writeResults, r.commitTime)];
                                                          }
                                                      });
                                                  });
                                              })(this.f_, this.mutations),
                                          ]
                                      );
                                  case 1:
                                      return t.sent(), (this.E_ = !0), [2];
                              }
                          });
                      });
                  }),
                  (Qc.prototype.m_ = function (t) {
                      var e;
                      if (t instanceof To) e = t.version;
                      else {
                          if (!(t instanceof Io)) throw Js();
                          e = Vr.min();
                      }
                      var n = this.T_.get(t.key);
                      if (null !== n) {
                          if (!e.isEqual(n)) throw new kr(Sr.ABORTED, "Document version changed between two reads.");
                      } else this.T_ = this.T_.Ae(t.key, e);
                  }),
                  (Qc.prototype.Rt = function (t) {
                      var e = this.T_.get(t);
                      return !this.w_.has(t) && e ? Fi.updateTime(e) : Fi.ft();
                  }),
                  (Qc.prototype.P_ = function (t) {
                      var e = this.T_.get(t);
                      if (this.w_.has(t) || !e) return Fi.exists(!0);
                      if (e.isEqual(Vr.min())) throw new kr(Sr.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
                      return Fi.updateTime(e);
                  }),
                  (Qc.prototype.write = function (t) {
                      this.A_(), (this.mutations = this.mutations.concat(t));
                  }),
                  (Qc.prototype.A_ = function () {}),
                  Qc),
              Bc =
                  ((Wc.prototype.b_ = function () {
                      var t = this;
                      0 === this.g_ &&
                          (this.v_("Unknown"),
                          (this.p_ = this.br.yr("online_state_timeout", 1e4, function () {
                              return (t.p_ = null), t.S_("Backend didn't respond within 10 seconds."), t.v_("Offline"), Promise.resolve();
                          })));
                  }),
                  (Wc.prototype.D_ = function (t) {
                      "Online" === this.state ? this.v_("Unknown") : (this.g_++, 1 <= this.g_ && (this.C_(), this.S_("Connection failed 1 times. Most recent error: " + t.toString()), this.v_("Offline")));
                  }),
                  (Wc.prototype.set = function (t) {
                      this.C_(), (this.g_ = 0), "Online" === t && (this.y_ = !1), this.v_(t);
                  }),
                  (Wc.prototype.v_ = function (t) {
                      t !== this.state && ((this.state = t), this.V_(t));
                  }),
                  (Wc.prototype.S_ = function (t) {
                      var e =
                          "Could not reach Cloud Firestore backend. " +
                          t +
                          "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
                      this.y_ ? (Xs(e), (this.y_ = !1)) : Ys("OnlineStateTracker", e);
                  }),
                  (Wc.prototype.C_ = function () {
                      null !== this.p_ && (this.p_.cancel(), (this.p_ = null));
                  }),
                  Wc),
              Gc =
                  ((zc.prototype.start = function () {
                      return this.enableNetwork();
                  }),
                  (zc.prototype.enableNetwork = function () {
                      return (this.networkEnabled = !0), this.J_();
                  }),
                  (zc.prototype.J_ = function () {
                      return y(this, void 0, void 0, function () {
                          var e;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return this.B_() ? ((e = this.G_), [4, this.F_.do()]) : [3, 3];
                                  case 1:
                                      return (e.lastStreamToken = t.sent()), this.X_() ? this.Z_() : this.U_.set("Unknown"), [4, this.tl()];
                                  case 2:
                                      t.sent(), (t.label = 3);
                                  case 3:
                                      return [2];
                              }
                          });
                      });
                  }),
                  (zc.prototype.disableNetwork = function () {
                      return y(this, void 0, void 0, function () {
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return (this.networkEnabled = !1), [4, this.el()];
                                  case 1:
                                      return t.sent(), this.U_.set("Offline"), [2];
                              }
                          });
                      });
                  }),
                  (zc.prototype.el = function () {
                      return y(this, void 0, void 0, function () {
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return [4, this.G_.stop()];
                                  case 1:
                                      return t.sent(), [4, this.Q_.stop()];
                                  case 2:
                                      return t.sent(), 0 < this.N_.length && (Ys("RemoteStore", "Stopping write stream with " + this.N_.length + " pending writes"), (this.N_ = [])), this.sl(), [2];
                              }
                          });
                      });
                  }),
                  (zc.prototype.hu = function () {
                      return y(this, void 0, void 0, function () {
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return Ys("RemoteStore", "RemoteStore shutting down."), (this.networkEnabled = !1), [4, this.el()];
                                  case 1:
                                      return t.sent(), this.O_.hu(), this.U_.set("Unknown"), [2];
                              }
                          });
                      });
                  }),
                  (zc.prototype.listen = function (t) {
                      this.k_.has(t.targetId) || (this.k_.set(t.targetId, t), this.X_() ? this.Z_() : this.Q_.qc() && this.il(t));
                  }),
                  (zc.prototype.nl = function (t) {
                      this.k_.delete(t), this.Q_.qc() && this.rl(t), 0 === this.k_.size && (this.Q_.qc() ? this.Q_.Wc() : this.B_() && this.U_.set("Unknown"));
                  }),
                  (zc.prototype.si = function (t) {
                      return this.k_.get(t) || null;
                  }),
                  (zc.prototype.ei = function (t) {
                      return this.hl.ei(t);
                  }),
                  (zc.prototype.il = function (t) {
                      this.M_.Ns(t.targetId), this.Q_.i_(t);
                  }),
                  (zc.prototype.rl = function (t) {
                      this.M_.Ns(t), this.Q_.n_(t);
                  }),
                  (zc.prototype.Z_ = function () {
                      (this.M_ = new Ds(this)), this.Q_.start(), this.U_.b_();
                  }),
                  (zc.prototype.X_ = function () {
                      return this.B_() && !this.Q_.Bc() && 0 < this.k_.size;
                  }),
                  (zc.prototype.B_ = function () {
                      return !this.L_ && this.isPrimary && this.networkEnabled;
                  }),
                  (zc.prototype.sl = function () {
                      this.M_ = null;
                  }),
                  (zc.prototype.W_ = function () {
                      return y(this, void 0, void 0, function () {
                          var n = this;
                          return v(this, function (t) {
                              return (
                                  this.k_.forEach(function (t, e) {
                                      n.il(t);
                                  }),
                                  [2]
                              );
                          });
                      });
                  }),
                  (zc.prototype.j_ = function (e) {
                      return y(this, void 0, void 0, function () {
                          return v(this, function (t) {
                              return this.sl(), this.X_() ? (this.U_.D_(e), this.Z_()) : this.U_.set("Unknown"), [2];
                          });
                      });
                  }),
                  (zc.prototype.K_ = function (i, o) {
                      return y(this, void 0, void 0, function () {
                          var e, n, r;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      if ((this.U_.set("Online"), !(i instanceof Ts && 2 === i.state && i.cause))) return [3, 6];
                                      t.label = 1;
                                  case 1:
                                      return t.trys.push([1, 3, , 5]), [4, this.ol(i)];
                                  case 2:
                                      return t.sent(), [3, 5];
                                  case 3:
                                      return (e = t.sent()), Ys("RemoteStore", "Failed to remove targets %s: %s ", i.targetIds.join(","), e), [4, this.al(e)];
                                  case 4:
                                      return t.sent(), [3, 5];
                                  case 5:
                                      return [3, 13];
                                  case 6:
                                      if ((i instanceof bs ? this.M_.qs(i) : i instanceof Es ? this.M_.Hs(i) : this.M_.Ws(i), o.isEqual(Vr.min()))) return [3, 13];
                                      t.label = 7;
                                  case 7:
                                      return t.trys.push([7, 11, , 13]), [4, this.F_.Oo()];
                                  case 8:
                                      return (n = t.sent()), 0 <= o.S(n) ? [4, this.ul(o)] : [3, 10];
                                  case 9:
                                      t.sent(), (t.label = 10);
                                  case 10:
                                      return [3, 13];
                                  case 11:
                                      return Ys("RemoteStore", "Failed to raise snapshot:", (r = t.sent())), [4, this.al(r)];
                                  case 12:
                                      return t.sent(), [3, 13];
                                  case 13:
                                      return [2];
                              }
                          });
                      });
                  }),
                  (zc.prototype.al = function (n) {
                      return y(this, void 0, void 0, function () {
                          var e = this;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      if ("IndexedDbTransactionError" !== n.name) throw n;
                                      return (this.L_ = !0), [4, this.el()];
                                  case 1:
                                      return (
                                          t.sent(),
                                          this.U_.set("Offline"),
                                          this.br.Xr(function () {
                                              return y(e, void 0, void 0, function () {
                                                  return v(this, function (t) {
                                                      switch (t.label) {
                                                          case 0:
                                                              return Ys("RemoteStore", "Retrying IndexedDB access"), [4, this.F_.Oo()];
                                                          case 1:
                                                              return t.sent(), (this.L_ = !1), [4, this.J_()];
                                                          case 2:
                                                              return t.sent(), [2];
                                                      }
                                                  });
                                              });
                                          }),
                                          [2]
                                      );
                              }
                          });
                      });
                  }),
                  (zc.prototype.ul = function (r) {
                      var i = this,
                          t = this.M_.Xs(r);
                      return (
                          t.as.forEach(function (t, e) {
                              if (0 < t.resumeToken.rt()) {
                                  var n = i.k_.get(e);
                                  n && i.k_.set(e, n.we(t.resumeToken, r));
                              }
                          }),
                          t.us.forEach(function (t) {
                              var e = i.k_.get(t);
                              if (e) {
                                  i.k_.set(t, e.we(ei.ht, e.Ee)), i.rl(t);
                                  var n = new Lo(e.target, t, 1, e.sequenceNumber);
                                  i.il(n);
                              }
                          }),
                          this.hl.Mu(t)
                      );
                  }),
                  (zc.prototype.ol = function (o) {
                      return y(this, void 0, void 0, function () {
                          var e, n, r, i;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      (e = o.cause), (n = 0), (r = o.targetIds), (t.label = 1);
                                  case 1:
                                      return n < r.length ? ((i = r[n]), this.k_.has(i) ? [4, this.hl.cl(i, e)] : [3, 3]) : [3, 5];
                                  case 2:
                                      t.sent(), this.k_.delete(i), this.M_.removeTarget(i), (t.label = 3);
                                  case 3:
                                      t.label = 4;
                                  case 4:
                                      return n++, [3, 1];
                                  case 5:
                                      return [2];
                              }
                          });
                      });
                  }),
                  (zc.prototype.tl = function () {
                      return y(this, void 0, void 0, function () {
                          var e, n;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return this._l() ? ((e = 0 < this.N_.length ? this.N_[this.N_.length - 1].batchId : -1), [4, this.F_.Bu(e)]) : [3, 5];
                                  case 1:
                                      return null !== (n = t.sent()) ? [3, 2] : (0 === this.N_.length && this.G_.Wc(), [3, 4]);
                                  case 2:
                                      return this.ll(n), [4, this.tl()];
                                  case 3:
                                      t.sent(), (t.label = 4);
                                  case 4:
                                      t.label = 5;
                                  case 5:
                                      return this.dl() && this.fl(), [2];
                              }
                          });
                      });
                  }),
                  (zc.prototype._l = function () {
                      return this.B_() && this.N_.length < 10;
                  }),
                  (zc.prototype.Tl = function () {
                      return this.N_.length;
                  }),
                  (zc.prototype.ll = function (t) {
                      this.N_.push(t), this.G_.qc() && this.G_.h_ && this.G_.o_(t.mutations);
                  }),
                  (zc.prototype.dl = function () {
                      return this.B_() && !this.G_.Bc() && 0 < this.N_.length;
                  }),
                  (zc.prototype.fl = function () {
                      this.G_.start();
                  }),
                  (zc.prototype.z_ = function () {
                      return y(this, void 0, void 0, function () {
                          return v(this, function (t) {
                              return this.G_.c_(), [2];
                          });
                      });
                  }),
                  (zc.prototype.Y_ = function () {
                      var r = this;
                      return this.F_.fo(this.G_.lastStreamToken)
                          .then(function () {
                              for (var t = 0, e = r.N_; t < e.length; t++) {
                                  var n = e[t];
                                  r.G_.o_(n.mutations);
                              }
                          })
                          .catch(Ih);
                  }),
                  (zc.prototype.a_ = function (t, e) {
                      var n = this,
                          r = this.N_.shift(),
                          i = cu.from(r, t, e, this.G_.lastStreamToken);
                      return this.hl.El(i).then(function () {
                          return n.tl();
                      });
                  }),
                  (zc.prototype.H_ = function (e) {
                      return y(this, void 0, void 0, function () {
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return e && 0 < this.N_.length ? (this.G_.h_ ? [4, this.Il(e)] : [3, 2]) : [3, 5];
                                  case 1:
                                      return t.sent(), [3, 4];
                                  case 2:
                                      return [4, this.wl(e)];
                                  case 3:
                                      t.sent(), (t.label = 4);
                                  case 4:
                                      this.dl() && this.fl(), (t.label = 5);
                                  case 5:
                                      return [2];
                              }
                          });
                      });
                  }),
                  (zc.prototype.wl = function (e) {
                      return y(this, void 0, void 0, function () {
                          return v(this, function (t) {
                              return Xo(e.code)
                                  ? [2, (Ys("RemoteStore", "RemoteStore error before completed handshake; resetting stream token: ", this.G_.lastStreamToken), (this.G_.lastStreamToken = ei.ht), this.F_.fo(ei.ht).catch(Ih))]
                                  : [2];
                          });
                      });
                  }),
                  (zc.prototype.Il = function (i) {
                      return y(this, void 0, void 0, function () {
                          var e,
                              n,
                              r = this;
                          return v(this, function (t) {
                              return Xo((n = i.code)) && n !== Sr.ABORTED
                                  ? ((e = this.N_.shift()),
                                    [
                                        2,
                                        (this.G_.Qc(),
                                        this.hl.Rl(e.batchId, i).then(function () {
                                            return r.tl();
                                        })),
                                    ])
                                  : [2];
                          });
                      });
                  }),
                  (zc.prototype.Al = function () {
                      return new Fc(this.f_);
                  }),
                  (zc.prototype.q_ = function () {
                      return y(this, void 0, void 0, function () {
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return (this.networkEnabled = !1), [4, this.el()];
                                  case 1:
                                      return t.sent(), this.U_.set("Unknown"), [4, this.enableNetwork()];
                                  case 2:
                                      return t.sent(), [2];
                              }
                          });
                      });
                  }),
                  (zc.prototype.ml = function () {
                      return y(this, void 0, void 0, function () {
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return this.B_() ? (Ys("RemoteStore", "RemoteStore restarting streams for new credential"), [4, this.q_()]) : [3, 2];
                                  case 1:
                                      t.sent(), (t.label = 2);
                                  case 2:
                                      return [2];
                              }
                          });
                      });
                  }),
                  (zc.prototype.Pl = function (e) {
                      return y(this, void 0, void 0, function () {
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return (this.isPrimary = e) && this.networkEnabled ? [4, this.enableNetwork()] : [3, 2];
                                  case 1:
                                      return t.sent(), [3, 5];
                                  case 2:
                                      return e ? [3, 4] : [4, this.el()];
                                  case 3:
                                      t.sent(), this.U_.set("Unknown"), (t.label = 4);
                                  case 4:
                                      t.label = 5;
                                  case 5:
                                      return [2];
                              }
                          });
                      });
                  }),
                  zc);
          function zc(t, e, n, r, i) {
              var o,
                  s,
                  u,
                  a,
                  h,
                  c,
                  f,
                  l,
                  p = this;
              (this.F_ = t),
                  (this.f_ = e),
                  (this.br = n),
                  (this.N_ = []),
                  (this.k_ = new Map()),
                  (this.M_ = null),
                  (this.networkEnabled = !1),
                  (this.isPrimary = !1),
                  (this.L_ = !1),
                  (this.O_ = i),
                  this.O_.x_(function (t) {
                      n.$r(function () {
                          return y(p, void 0, void 0, function () {
                              return v(this, function (t) {
                                  switch (t.label) {
                                      case 0:
                                          return this.B_() ? (Ys("RemoteStore", "Restarting streams for network reachability change."), [4, this.q_()]) : [3, 2];
                                      case 1:
                                          t.sent(), (t.label = 2);
                                      case 2:
                                          return [2];
                                  }
                              });
                          });
                      });
                  }),
                  (this.U_ = new Bc(n, r)),
                  (this.Q_ = ((h = this.f_), (c = n), (f = { t_: this.W_.bind(this), Hc: this.j_.bind(this), s_: this.K_.bind(this) }), (l = tu(h)), new Uc(c, l.Mc, l.credentials, l.serializer, f))),
                  (this.G_ = ((o = this.f_), (s = n), (u = { t_: this.z_.bind(this), Hc: this.H_.bind(this), u_: this.Y_.bind(this), a_: this.a_.bind(this) }), (a = tu(o)), new jc(s, a.Mc, a.credentials, a.serializer, u)));
          }
          function Wc(t, e) {
              (this.br = t), (this.V_ = e), (this.state = "Unknown"), (this.g_ = 0), (this.p_ = null), (this.y_ = !0);
          }
          function Qc(t) {
              (this.f_ = t), (this.T_ = ys()), (this.mutations = []), (this.E_ = !1), (this.I_ = null), (this.w_ = new Set());
          }
          function Kc(t, e, n) {
              var r = this;
              return ((r = Vc.call(this) || this).Mc = t), (r.credentials = e), (r.serializer = n), r;
          }
          function Hc(t, e, n, r, i) {
              var o = this;
              return ((o = Lc.call(this, t, "write_stream_connection_backoff", "write_stream_idle", e, n, i) || this).serializer = r), (o.r_ = !1), (o.lastStreamToken = ei.ht), o;
          }
          function Yc(t, e, n, r, i) {
              var o = this;
              return ((o = Cc.call(this, t, "listen_stream_connection_backoff", "listen_stream_idle", e, n, i) || this).serializer = r), o;
          }
          function Xc(t, e, n, r, i, o) {
              (this.Tr = t), (this.$c = n), (this.Mc = r), (this.Lc = i), (this.listener = o), (this.state = 0), (this.Oc = 0), (this.xc = null), (this.stream = null), (this.Qr = new Du(t, e));
          }
          function $c(t, e) {
              return "firestore_clients_" + t + "_" + e;
          }
          function Jc(t, e, n) {
              var r = "firestore_mutations_" + t + "_" + n;
              return e.t() && (r += "_" + e.uid), r;
          }
          function Zc(t, e) {
              return "firestore_targets_" + t + "_" + e;
          }
          function tf(t) {
              this.key = t;
          }
          function ef(t) {
              this.key = t;
          }
          function nf(t, e, n) {
              (this.query = t), (this.targetId = e), (this.view = n);
          }
          function rf(t) {
              (this.key = t), (this.Bd = !1);
          }
          function of() {
              (this.Pf = void 0), (this.Vf = []);
          }
          var sf,
              uf,
              af =
                  ((jf.Vl = function (t, e, n) {
                      var r = JSON.parse(n),
                          i = "object" == typeof r && -1 !== ["pending", "acknowledged", "rejected"].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error),
                          o = void 0;
                      return (
                          i && r.error && (i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new kr(r.error.code, r.error.message)),
                          i ? new jf(t, e, r.state, o) : (Xs("SharedClientState", "Failed to parse mutation state for ID '" + e + "': " + n), null)
                      );
                  }),
                  (jf.prototype.gl = function () {
                      var t = { state: this.state, updateTimeMs: Date.now() };
                      return this.error && (t.error = { code: this.error.code, message: this.error.message }), JSON.stringify(t);
                  }),
                  jf),
              hf =
                  ((Uf.Vl = function (t, e) {
                      var n = JSON.parse(e),
                          r = "object" == typeof n && -1 !== ["not-current", "current", "rejected"].indexOf(n.state) && (void 0 === n.error || "object" == typeof n.error),
                          i = void 0;
                      return (
                          r && n.error && (r = "string" == typeof n.error.message && "string" == typeof n.error.code) && (i = new kr(n.error.code, n.error.message)),
                          r ? new Uf(t, n.state, i) : (Xs("SharedClientState", "Failed to parse target state for ID '" + t + "': " + e), null)
                      );
                  }),
                  (Uf.prototype.gl = function () {
                      var t = { state: this.state, updateTimeMs: Date.now() };
                      return this.error && (t.error = { code: this.error.code, message: this.error.message }), JSON.stringify(t);
                  }),
                  Uf),
              cf =
                  ((Mf.Vl = function (t, e) {
                      for (var n = JSON.parse(e), r = "object" == typeof n && n.activeTargetIds instanceof Array, i = ws(), o = 0; r && o < n.activeTargetIds.length; ++o) (r = oi(n.activeTargetIds[o])), (i = i.add(n.activeTargetIds[o]));
                      return r ? new Mf(t, i) : (Xs("SharedClientState", "Failed to parse client data for instance '" + t + "': " + e), null);
                  }),
                  Mf),
              ff =
                  ((Cf.Vl = function (t) {
                      var e = JSON.parse(t);
                      return "object" == typeof e && -1 !== ["Unknown", "Online", "Offline"].indexOf(e.onlineState) && "string" == typeof e.clientId
                          ? new Cf(e.clientId, e.onlineState)
                          : (Xs("SharedClientState", "Failed to parse online state: " + t), null);
                  }),
                  Cf),
              lf =
                  ((Lf.prototype.pl = function (t) {
                      this.activeTargetIds = this.activeTargetIds.add(t);
                  }),
                  (Lf.prototype.yl = function (t) {
                      this.activeTargetIds = this.activeTargetIds.delete(t);
                  }),
                  (Lf.prototype.gl = function () {
                      var t = { activeTargetIds: this.activeTargetIds.W(), updateTimeMs: Date.now() };
                      return JSON.stringify(t);
                  }),
                  Lf),
              pf =
                  ((Vf.Uh = function (t) {
                      return !(!t.window || null == t.window.localStorage);
                  }),
                  (Vf.prototype.start = function () {
                      return y(this, void 0, void 0, function () {
                          var e,
                              n,
                              r,
                              i,
                              o,
                              s,
                              u,
                              a,
                              h,
                              c,
                              f,
                              l = this;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return [4, this.hl._u()];
                                  case 1:
                                      for (e = t.sent(), n = 0, r = e; n < r.length; n++) (i = r[n]) !== this.bl && (o = this.getItem($c(this.persistenceKey, i))) && (s = cf.Vl(i, o)) && (this.Dl = this.Dl.Ae(s.clientId, s));
                                      for (this.Ol(), (u = this.storage.getItem(this.Ll)) && (a = this.xl(u)) && this.Bl(a), h = 0, c = this.Cl; h < c.length; h++) (f = c[h]), this.Sl(f);
                                      return (
                                          (this.Cl = []),
                                          this.platform.window.addEventListener("unload", function () {
                                              return l.hu();
                                          }),
                                          (this.vh = !0),
                                          [2]
                                      );
                              }
                          });
                      });
                  }),
                  (Vf.prototype.lr = function (t) {
                      this.setItem(this.Nl, JSON.stringify(t));
                  }),
                  (Vf.prototype.ql = function () {
                      return this.Ul(this.Dl);
                  }),
                  (Vf.prototype.Ql = function (n) {
                      var r = !1;
                      return (
                          this.Dl.forEach(function (t, e) {
                              e.activeTargetIds.has(n) && (r = !0);
                          }),
                          r
                      );
                  }),
                  (Vf.prototype.Wl = function (t) {
                      this.jl(t, "pending");
                  }),
                  (Vf.prototype.Kl = function (t, e, n) {
                      this.jl(t, e, n), this.Gl(t);
                  }),
                  (Vf.prototype.zl = function (t) {
                      var e = "not-current";
                      if (this.Ql(t)) {
                          var n = this.storage.getItem(Zc(this.persistenceKey, t));
                          if (n) {
                              var r = hf.Vl(t, n);
                              r && (e = r.state);
                          }
                      }
                      return this.Hl.pl(t), this.Ol(), e;
                  }),
                  (Vf.prototype.Yl = function (t) {
                      this.Hl.yl(t), this.Ol();
                  }),
                  (Vf.prototype.Jl = function (t) {
                      return this.Hl.activeTargetIds.has(t);
                  }),
                  (Vf.prototype.Xl = function (t) {
                      this.removeItem(Zc(this.persistenceKey, t));
                  }),
                  (Vf.prototype.Zl = function (t, e, n) {
                      this.td(t, e, n);
                  }),
                  (Vf.prototype.Su = function (t, e, n) {
                      var r = this;
                      e.forEach(function (t) {
                          r.Gl(t);
                      }),
                          (this.currentUser = t),
                          n.forEach(function (t) {
                              r.Wl(t);
                          });
                  }),
                  (Vf.prototype.ed = function (t) {
                      this.sd(t);
                  }),
                  (Vf.prototype.hu = function () {
                      this.vh && (this.platform.window.removeEventListener("storage", this.vl), this.removeItem(this.Fl), (this.vh = !1));
                  }),
                  (Vf.prototype.getItem = function (t) {
                      var e = this.storage.getItem(t);
                      return Ys("SharedClientState", "READ", t, e), e;
                  }),
                  (Vf.prototype.setItem = function (t, e) {
                      Ys("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
                  }),
                  (Vf.prototype.removeItem = function (t) {
                      Ys("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
                  }),
                  (Vf.prototype.Sl = function (u) {
                      var t = this;
                      if (u.storageArea === this.storage) {
                          if ((Ys("SharedClientState", "EVENT", u.key, u.newValue), u.key === this.Fl)) return void Xs("Received WebStorage notification for local change. Another client might have garbage-collected our state");
                          this.Tr.Xr(function () {
                              return y(t, void 0, void 0, function () {
                                  var e, n, r, i, o, s;
                                  return v(this, function (t) {
                                      if (this.vh) {
                                          if (null !== u.key)
                                              if (this.kl.test(u.key)) {
                                                  if (null == u.newValue) return (e = this.nd(u.key)), [2, this.rd(e, null)];
                                                  if ((n = this.hd(u.key, u.newValue))) return [2, this.rd(n.clientId, n)];
                                              } else if (this.$l.test(u.key)) {
                                                  if (null !== u.newValue && (r = this.od(u.key, u.newValue))) return [2, this.ad(r)];
                                              } else if (this.Ml.test(u.key)) {
                                                  if (null !== u.newValue && (i = this.ud(u.key, u.newValue))) return [2, this._d(i)];
                                              } else if (u.key === this.Ll) {
                                                  if (null !== u.newValue && (o = this.xl(u.newValue))) return [2, this.Bl(o)];
                                              } else
                                                  u.key === this.Nl &&
                                                      (s = (function (t) {
                                                          var e = gu.dr;
                                                          if (null != t)
                                                              try {
                                                                  var n = JSON.parse(t);
                                                                  Zs("number" == typeof n), (e = n);
                                                              } catch (t) {
                                                                  Xs("SharedClientState", "Failed to read sequence number from WebStorage", t);
                                                              }
                                                          return e;
                                                      })(u.newValue)) !== gu.dr &&
                                                      this.ur(s);
                                      } else this.Cl.push(u);
                                      return [2];
                                  });
                              });
                          });
                      }
                  }),
                  Object.defineProperty(Vf.prototype, "Hl", {
                      get: function () {
                          return this.Dl.get(this.bl);
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (Vf.prototype.Ol = function () {
                      this.setItem(this.Fl, this.Hl.gl());
                  }),
                  (Vf.prototype.jl = function (t, e, n) {
                      var r = new af(this.currentUser, t, e, n),
                          i = Jc(this.persistenceKey, this.currentUser, t);
                      this.setItem(i, r.gl());
                  }),
                  (Vf.prototype.Gl = function (t) {
                      var e = Jc(this.persistenceKey, this.currentUser, t);
                      this.removeItem(e);
                  }),
                  (Vf.prototype.sd = function (t) {
                      var e = { clientId: this.bl, onlineState: t };
                      this.storage.setItem(this.Ll, JSON.stringify(e));
                  }),
                  (Vf.prototype.td = function (t, e, n) {
                      var r = Zc(this.persistenceKey, t),
                          i = new hf(t, e, n);
                      this.setItem(r, i.gl());
                  }),
                  (Vf.prototype.nd = function (t) {
                      var e = this.kl.exec(t);
                      return e ? e[1] : null;
                  }),
                  (Vf.prototype.hd = function (t, e) {
                      var n = this.nd(t);
                      return cf.Vl(n, e);
                  }),
                  (Vf.prototype.od = function (t, e) {
                      var n = this.$l.exec(t),
                          r = Number(n[1]),
                          i = void 0 !== n[2] ? n[2] : null;
                      return af.Vl(new Tr(i), r, e);
                  }),
                  (Vf.prototype.ud = function (t, e) {
                      var n = this.Ml.exec(t),
                          r = Number(n[1]);
                      return hf.Vl(r, e);
                  }),
                  (Vf.prototype.xl = function (t) {
                      return ff.Vl(t);
                  }),
                  (Vf.prototype.ad = function (e) {
                      return y(this, void 0, void 0, function () {
                          return v(this, function (t) {
                              return e.user.uid === this.currentUser.uid ? [2, this.hl.ld(e.batchId, e.state, e.error)] : (Ys("SharedClientState", "Ignoring mutation for non-active user " + e.user.uid), [2]);
                          });
                      });
                  }),
                  (Vf.prototype._d = function (t) {
                      return this.hl.dd(t.targetId, t.state, t.error);
                  }),
                  (Vf.prototype.rd = function (t, e) {
                      var n = this,
                          r = e ? this.Dl.Ae(t, e) : this.Dl.remove(t),
                          i = this.Ul(this.Dl),
                          o = this.Ul(r),
                          s = [],
                          u = [];
                      return (
                          o.forEach(function (t) {
                              i.has(t) || s.push(t);
                          }),
                          i.forEach(function (t) {
                              o.has(t) || u.push(t);
                          }),
                          this.hl.fd(s, u).then(function () {
                              n.Dl = r;
                          })
                      );
                  }),
                  (Vf.prototype.Bl = function (t) {
                      this.Dl.get(t.clientId) && this.V_(t.onlineState);
                  }),
                  (Vf.prototype.Ul = function (t) {
                      var n = ws();
                      return (
                          t.forEach(function (t, e) {
                              n = n.He(e.activeTargetIds);
                          }),
                          n
                      );
                  }),
                  Vf),
              df =
                  ((Pf.prototype.Wl = function (t) {}),
                  (Pf.prototype.Kl = function (t, e, n) {}),
                  (Pf.prototype.zl = function (t) {
                      return this.Td.pl(t), this.Ed[t] || "not-current";
                  }),
                  (Pf.prototype.Zl = function (t, e, n) {
                      this.Ed[t] = e;
                  }),
                  (Pf.prototype.Yl = function (t) {
                      this.Td.yl(t);
                  }),
                  (Pf.prototype.Jl = function (t) {
                      return this.Td.activeTargetIds.has(t);
                  }),
                  (Pf.prototype.Xl = function (t) {
                      delete this.Ed[t];
                  }),
                  (Pf.prototype.ql = function () {
                      return this.Td.activeTargetIds;
                  }),
                  (Pf.prototype.Ql = function (t) {
                      return this.Td.activeTargetIds.has(t);
                  }),
                  (Pf.prototype.start = function () {
                      return (this.Td = new lf()), Promise.resolve();
                  }),
                  (Pf.prototype.Su = function (t, e, n) {}),
                  (Pf.prototype.ed = function (t) {}),
                  (Pf.prototype.hu = function () {}),
                  (Pf.prototype.lr = function (t) {}),
                  Pf),
              yf =
                  (Object.defineProperty(Rf.prototype, "md", {
                      get: function () {
                          return this.Id;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (Rf.prototype.Pd = function (t, e) {
                      var u = this,
                          a = e ? e.Vd : new Ns(),
                          h = e ? e.Ad : this.Ad,
                          c = e ? e.ns : this.ns,
                          f = h,
                          l = !1,
                          p = this.query.oe() && h.size === this.query.limit ? h.last() : null,
                          d = this.query.ae() && h.size === this.query.limit ? h.first() : null;
                      if (
                          (t.pe(function (t, e) {
                              var n = h.get(t),
                                  r = e instanceof To ? e : null;
                              r = r && (u.query.matches(r) ? r : null);
                              var i = !!n && u.ns.has(n.key),
                                  o = !!r && (r.At || (u.ns.has(r.key) && r.hasCommittedMutations)),
                                  s = !1;
                              n && r
                                  ? n.data().isEqual(r.data())
                                      ? i !== o && (a.track({ type: 3, doc: r }), (s = !0))
                                      : u.gd(n, r) || (a.track({ type: 2, doc: r }), (s = !0), ((p && 0 < u.query.se(r, p)) || (d && u.query.se(r, d) < 0)) && (l = !0))
                                  : !n && r
                                  ? (a.track({ type: 0, doc: r }), (s = !0))
                                  : n && !r && (a.track({ type: 1, doc: n }), (s = !0), (p || d) && (l = !0)),
                                  s && (c = r ? ((f = f.add(r)), o ? c.add(t) : c.delete(t)) : ((f = f.delete(t)), c.delete(t)));
                          }),
                          this.query.oe() || this.query.ae())
                      )
                          for (; f.size > this.query.limit; ) {
                              var n = this.query.oe() ? f.last() : f.first();
                              (f = f.delete(n.key)), (c = c.delete(n.key)), a.track({ type: 1, doc: n });
                          }
                      return { Ad: f, Vd: a, pd: l, ns: c };
                  }),
                  (Rf.prototype.gd = function (t, e) {
                      return t.At && e.hasCommittedMutations && !e.At;
                  }),
                  (Rf.prototype.xn = function (t, e, n) {
                      var o = this,
                          r = this.Ad;
                      (this.Ad = t.Ad), (this.ns = t.ns);
                      var i = t.Vd.es();
                      i.sort(function (t, e) {
                          return (r = t.type), (i = e.type), n(r) - n(i) || o.query.se(t.doc, e.doc);
                          function n(t) {
                              switch (t) {
                                  case 0:
                                      return 1;
                                  case 2:
                                  case 3:
                                      return 2;
                                  case 1:
                                      return 0;
                                  default:
                                      return Js();
                              }
                          }
                          var r, i;
                      }),
                          this.yd(n);
                      var s = e ? this.bd() : [],
                          u = 0 === this.Rd.size && this.fs ? 1 : 0,
                          a = u !== this.wd;
                      return (this.wd = u), 0 !== i.length || a ? { snapshot: new As(this.query, t.Ad, r, i, t.ns, 0 == u, a, !1), vd: s } : { vd: s };
                  }),
                  (Rf.prototype.Sd = function (t) {
                      return this.fs && "Offline" === t ? ((this.fs = !1), this.xn({ Ad: this.Ad, Vd: new Ns(), ns: this.ns, pd: !1 }, !1)) : { vd: [] };
                  }),
                  (Rf.prototype.Dd = function (t) {
                      return !this.Id.has(t) && !!this.Ad.has(t) && !this.Ad.get(t).At;
                  }),
                  (Rf.prototype.yd = function (t) {
                      var e = this;
                      t &&
                          (t.Ts.forEach(function (t) {
                              return (e.Id = e.Id.add(t));
                          }),
                          t.Es.forEach(function (t) {}),
                          t.Is.forEach(function (t) {
                              return (e.Id = e.Id.delete(t));
                          }),
                          (this.fs = t.fs));
                  }),
                  (Rf.prototype.bd = function () {
                      var e = this;
                      if (!this.fs) return [];
                      var n = this.Rd;
                      (this.Rd = gs()),
                          this.Ad.forEach(function (t) {
                              e.Dd(t.key) && (e.Rd = e.Rd.add(t.key));
                          });
                      var r = [];
                      return (
                          n.forEach(function (t) {
                              e.Rd.has(t) || r.push(new ef(t));
                          }),
                          this.Rd.forEach(function (t) {
                              n.has(t) || r.push(new tf(t));
                          }),
                          r
                      );
                  }),
                  (Rf.prototype.Cd = function (t) {
                      (this.Id = t.ju), (this.Rd = gs());
                      var e = this.Pd(t.documents);
                      return this.xn(e, !0);
                  }),
                  (Rf.prototype.Fd = function () {
                      return As.os(this.query, this.Ad, this.ns, 0 === this.wd);
                  }),
                  Rf),
              vf =
                  ((Of.prototype.$d = function () {
                      this.Md();
                  }),
                  (Of.prototype.Md = function () {
                      var t = this;
                      this.Qr.gr(function () {
                          return y(t, void 0, void 0, function () {
                              var e,
                                  n,
                                  r = this;
                              return v(this, function (t) {
                                  return (
                                      (e = this.Nd.Al()),
                                      (n = this.Ld(e)) &&
                                          n
                                              .then(function (t) {
                                                  r.br.$r(function () {
                                                      return e
                                                          .commit()
                                                          .then(function () {
                                                              r.Dr.resolve(t);
                                                          })
                                                          .catch(function (t) {
                                                              r.Od(t);
                                                          });
                                                  });
                                              })
                                              .catch(function (t) {
                                                  r.Od(t);
                                              }),
                                      [2]
                                  );
                              });
                          });
                      });
                  }),
                  (Of.prototype.Ld = function (t) {
                      try {
                          var e = this.updateFunction(t);
                          return !ri(e) && e.catch && e.then ? e : (this.Dr.reject(Error("Transaction callback must return a Promise")), null);
                      } catch (t) {
                          return this.Dr.reject(t), null;
                      }
                  }),
                  (Of.prototype.Od = function (t) {
                      var e = this;
                      0 < this.kd && this.xd(t)
                          ? (--this.kd,
                            this.br.$r(function () {
                                return e.Md(), Promise.resolve();
                            }))
                          : this.Dr.reject(t);
                  }),
                  (Of.prototype.xd = function (t) {
                      if ("FirebaseError" !== t.name) return !1;
                      var e = t.code;
                      return "aborted" === e || "failed-precondition" === e || !Xo(e);
                  }),
                  Of),
              gf =
                  (Object.defineProperty(xf.prototype, "Zd", {
                      get: function () {
                          return !0;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (xf.prototype.subscribe = function (t) {
                      this.Qd = t;
                  }),
                  (xf.prototype.listen = function (s) {
                      return y(this, void 0, void 0, function () {
                          var e, n, r, i, o;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return this.tf("listen()"), (r = this.Wd.get(s)) ? ((e = r.targetId), this.qd.zl(e), (n = r.view.Fd()), [3, 4]) : [3, 1];
                                  case 1:
                                      return [4, this.F_.Uu(s.ee())];
                                  case 2:
                                      return (i = t.sent()), (o = this.qd.zl(i.targetId)), (e = i.targetId), [4, this.ef(s, e, "current" === o)];
                                  case 3:
                                      (n = t.sent()), this.Zd && this.Nd.listen(i), (t.label = 4);
                                  case 4:
                                      return [2, n];
                              }
                          });
                      });
                  }),
                  (xf.prototype.ef = function (u, a, h) {
                      return y(this, void 0, void 0, function () {
                          var e, n, r, i, o, s;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return [4, this.F_.Wu(u, !0)];
                                  case 1:
                                      return (
                                          (e = t.sent()),
                                          (n = new yf(u, e.ju)),
                                          (r = n.Pd(e.documents)),
                                          (i = Ss.ds(a, h && "Offline" !== this.onlineState)),
                                          (o = n.xn(r, this.Zd, i)),
                                          this.sf(a, o.vd),
                                          (s = new nf(u, a, n)),
                                          [2, (this.Wd.set(u, s), this.jd.has(a) ? this.jd.get(a).push(u) : this.jd.set(a, [u]), o.snapshot)]
                                      );
                              }
                          });
                      });
                  }),
                  (xf.prototype.nl = function (i) {
                      return y(this, void 0, void 0, function () {
                          var e,
                              n,
                              r = this;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return (
                                          this.tf("unlisten()"),
                                          (e = this.Wd.get(i)),
                                          1 < (n = this.jd.get(e.targetId)).length
                                              ? [
                                                    2,
                                                    (this.jd.set(
                                                        e.targetId,
                                                        n.filter(function (t) {
                                                            return !t.isEqual(i);
                                                        })
                                                    ),
                                                    void this.Wd.delete(i)),
                                                ]
                                              : this.Zd
                                              ? (this.qd.Yl(e.targetId),
                                                this.qd.Ql(e.targetId)
                                                    ? [3, 2]
                                                    : [
                                                          4,
                                                          this.F_.Qu(e.targetId, !1)
                                                              .then(function () {
                                                                  r.qd.Xl(e.targetId), r.Nd.nl(e.targetId), r.if(e.targetId);
                                                              })
                                                              .catch(Ih),
                                                      ])
                                              : [3, 3]
                                      );
                                  case 1:
                                      t.sent(), (t.label = 2);
                                  case 2:
                                      return [3, 5];
                                  case 3:
                                      return this.if(e.targetId), [4, this.F_.Qu(e.targetId, !0)];
                                  case 4:
                                      t.sent(), (t.label = 5);
                                  case 5:
                                      return [2];
                              }
                          });
                      });
                  }),
                  (xf.prototype.write = function (r, i) {
                      return y(this, void 0, void 0, function () {
                          var e, n;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      this.tf("write()"), (t.label = 1);
                                  case 1:
                                      return t.trys.push([1, 3, , 4]), [4, this.F_.Nu(r)];
                                  case 2:
                                      return (e = t.sent()), [3, 4];
                                  case 3:
                                      if ("IndexedDbTransactionError" === (n = t.sent()).name)
                                          return [2, (Xs("SyncEngine", "Dropping write that cannot be persisted: " + n), void i.reject(new kr(Sr.UNAVAILABLE, "Failed to persist write: " + n)))];
                                      throw n;
                                  case 4:
                                      return this.qd.Wl(e.batchId), this.nf(e.batchId, i), [4, this.rf(e.Dn)];
                                  case 5:
                                      return t.sent(), [4, this.Nd.tl()];
                                  case 6:
                                      return t.sent(), [2];
                              }
                          });
                      });
                  }),
                  (xf.prototype.runTransaction = function (t, e, n) {
                      new vf(t, this.Nd, e, n).$d();
                  }),
                  (xf.prototype.Mu = function (n) {
                      return y(this, void 0, void 0, function () {
                          var e,
                              r = this;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      this.tf("applyRemoteEvent()"), (t.label = 1);
                                  case 1:
                                      return t.trys.push([1, 4, , 6]), [4, this.F_.Mu(n)];
                                  case 2:
                                      return (
                                          (e = t.sent()),
                                          n.as.forEach(function (t, e) {
                                              var n = r.zd.get(e);
                                              n && (Zs(t.Ts.size + t.Es.size + t.Is.size <= 1), 0 < t.Ts.size ? (n.Bd = !0) : 0 < t.Es.size ? Zs(n.Bd) : 0 < t.Is.size && (Zs(n.Bd), (n.Bd = !1)));
                                          }),
                                          [4, this.rf(e, n)]
                                      );
                                  case 3:
                                      return t.sent(), [3, 6];
                                  case 4:
                                      return [4, Ih(t.sent())];
                                  case 5:
                                      return t.sent(), [3, 6];
                                  case 6:
                                      return [2];
                              }
                          });
                      });
                  }),
                  (xf.prototype.Sd = function (r, t) {
                      this.tf("applyOnlineStateChange()");
                      var i = [];
                      this.Wd.forEach(function (t, e) {
                          var n = e.view.Sd(r);
                          n.snapshot && i.push(n.snapshot);
                      }),
                          this.Qd.hf(r),
                          this.Qd.s_(i),
                          (this.onlineState = r);
                  }),
                  (xf.prototype.cl = function (u, a) {
                      return y(this, void 0, void 0, function () {
                          var e,
                              n,
                              r,
                              i,
                              o,
                              s = this;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return (
                                          this.tf("rejectListens()"),
                                          this.qd.Zl(u, "rejected", a),
                                          (e = this.zd.get(u)),
                                          (n = e && e.key)
                                              ? ((this.Gd = this.Gd.remove(n)),
                                                this.zd.delete(u),
                                                this.af(),
                                                (r = (r = new Jo(Xr.N)).Ae(n, new Io(n, Vr.min()))),
                                                (i = gs().add(n)),
                                                (o = new _s(Vr.min(), new Map(), new os(ru), r, i)),
                                                [2, this.Mu(o)])
                                              : [
                                                    4,
                                                    this.F_.Qu(u, !1)
                                                        .then(function () {
                                                            return s.if(u, a);
                                                        })
                                                        .catch(Ih),
                                                ]
                                      );
                                  case 1:
                                      return t.sent(), [2];
                              }
                          });
                      });
                  }),
                  (xf.prototype.El = function (r) {
                      return y(this, void 0, void 0, function () {
                          var e, n;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      this.tf("applySuccessfulWrite()"), (e = r.batch.batchId), this.uf(e, null), this.cf(e), (t.label = 1);
                                  case 1:
                                      return t.trys.push([1, 4, , 6]), [4, this.F_._o(r)];
                                  case 2:
                                      return (n = t.sent()), this.qd.Kl(e, "acknowledged"), [4, this.rf(n)];
                                  case 3:
                                      return t.sent(), [3, 6];
                                  case 4:
                                      return [4, Ih(t.sent())];
                                  case 5:
                                      return t.sent(), [3, 6];
                                  case 6:
                                      return [2];
                              }
                          });
                      });
                  }),
                  (xf.prototype.Rl = function (n, r) {
                      return y(this, void 0, void 0, function () {
                          var e;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      this.tf("rejectFailedWrite()"), this.uf(n, r), this.cf(n), (t.label = 1);
                                  case 1:
                                      return t.trys.push([1, 4, , 6]), [4, this.F_.$u(n)];
                                  case 2:
                                      return (e = t.sent()), this.qd.Kl(n, "rejected", r), [4, this.rf(e)];
                                  case 3:
                                      return t.sent(), [3, 6];
                                  case 4:
                                      return [4, Ih(t.sent())];
                                  case 5:
                                      return t.sent(), [3, 6];
                                  case 6:
                                      return [2];
                              }
                          });
                      });
                  }),
                  (xf.prototype._f = function (r) {
                      return y(this, void 0, void 0, function () {
                          var e, n;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return this.Nd.B_() || Ys("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), [4, this.F_.Po()];
                                  case 1:
                                      return -1 === (e = t.sent()) ? [2, void r.resolve()] : ((n = this.Jd.get(e) || []).push(r), this.Jd.set(e, n), [2]);
                              }
                          });
                      });
                  }),
                  (xf.prototype.cf = function (t) {
                      (this.Jd.get(t) || []).forEach(function (t) {
                          t.resolve();
                      }),
                          this.Jd.delete(t);
                  }),
                  (xf.prototype.lf = function (e) {
                      this.Jd.forEach(function (t) {
                          t.forEach(function (t) {
                              t.reject(new kr(Sr.CANCELLED, e));
                          });
                      }),
                          this.Jd.clear();
                  }),
                  (xf.prototype.nf = function (t, e) {
                      var n = this.Yd[this.currentUser.s()];
                      (n = (n = n || new Jo(ru)).Ae(t, e)), (this.Yd[this.currentUser.s()] = n);
                  }),
                  (xf.prototype.uf = function (t, e) {
                      var n = this.Yd[this.currentUser.s()];
                      if (n) {
                          var r = n.get(t);
                          r && (e ? r.reject(e) : r.resolve(), (n = n.remove(t))), (this.Yd[this.currentUser.s()] = n);
                      }
                  }),
                  (xf.prototype.if = function (t, e) {
                      var n = this;
                      void 0 === e && (e = null), this.qd.Yl(t);
                      for (var r = 0, i = this.jd.get(t); r < i.length; r++) {
                          var o = i[r];
                          this.Wd.delete(o), e && this.Qd.df(o, e);
                      }
                      this.jd.delete(t),
                          this.Zd &&
                              this.Hd.ic(t).forEach(function (t) {
                                  n.Hd.Co(t) || n.ff(t);
                              });
                  }),
                  (xf.prototype.ff = function (t) {
                      var e = this.Gd.get(t);
                      null !== e && (this.Nd.nl(e), (this.Gd = this.Gd.remove(t)), this.zd.delete(e), this.af());
                  }),
                  (xf.prototype.sf = function (t, e) {
                      for (var n = 0, r = e; n < r.length; n++) {
                          var i = r[n];
                          i instanceof tf ? (this.Hd.Xo(i.key, t), this.Tf(i)) : i instanceof ef ? (Ys("SyncEngine", "Document no longer in limbo: " + i.key), this.Hd.ta(i.key, t), this.Hd.Co(i.key) || this.ff(i.key)) : Js();
                      }
                  }),
                  (xf.prototype.Tf = function (t) {
                      var e = t.key;
                      this.Gd.get(e) || (Ys("SyncEngine", "New document in limbo: " + e), this.Kd.push(e), this.af());
                  }),
                  (xf.prototype.af = function () {
                      for (; 0 < this.Kd.length && this.Gd.size < this.Ud; ) {
                          var t = this.Kd.shift(),
                              e = this.Xd.next();
                          this.zd.set(e, new rf(t)), (this.Gd = this.Gd.Ae(t, e)), this.Nd.listen(new Lo(_o.Wt(t.path).ee(), e, 2, gu.dr));
                      }
                  }),
                  (xf.prototype.Ef = function () {
                      return this.Gd;
                  }),
                  (xf.prototype.If = function () {
                      return this.Kd;
                  }),
                  (xf.prototype.rf = function (r, a) {
                      return y(this, void 0, void 0, function () {
                          var o,
                              s,
                              e,
                              u = this;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return (
                                          (o = []),
                                          (s = []),
                                          (e = []),
                                          this.Wd.forEach(function (t, i) {
                                              e.push(
                                                  Promise.resolve()
                                                      .then(function () {
                                                          var n = i.view.Pd(r);
                                                          return n.pd
                                                              ? u.F_.Wu(i.query, !1).then(function (t) {
                                                                    var e = t.documents;
                                                                    return i.view.Pd(e, n);
                                                                })
                                                              : n;
                                                      })
                                                      .then(function (t) {
                                                          var e = a && a.as.get(i.targetId),
                                                              n = i.view.xn(t, u.Zd, e);
                                                          if ((u.sf(i.targetId, n.vd), n.snapshot)) {
                                                              u.Zd && u.qd.Zl(i.targetId, n.snapshot.fromCache ? "not-current" : "current"), o.push(n.snapshot);
                                                              var r = vu.ar(i.targetId, n.snapshot);
                                                              s.push(r);
                                                          }
                                                      })
                                              );
                                          }),
                                          [4, Promise.all(e)]
                                      );
                                  case 1:
                                      return t.sent(), this.Qd.s_(o), [4, this.F_.xu(s)];
                                  case 2:
                                      return t.sent(), [2];
                              }
                          });
                      });
                  }),
                  (xf.prototype.tf = function (t) {}),
                  (xf.prototype.ml = function (r) {
                      return y(this, void 0, void 0, function () {
                          var e, n;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return (e = !this.currentUser.isEqual(r)), (this.currentUser = r), e ? (this.lf("'waitForPendingWrites' promise is rejected due to a user change."), [4, this.F_.Su(r)]) : [3, 3];
                                  case 1:
                                      return (n = t.sent()), this.qd.Su(r, n.Cu, n.Fu), [4, this.rf(n.Du)];
                                  case 2:
                                      t.sent(), (t.label = 3);
                                  case 3:
                                      return [4, this.Nd.ml()];
                                  case 4:
                                      return t.sent(), [2];
                              }
                          });
                      });
                  }),
                  (xf.prototype.enableNetwork = function () {
                      return this.Nd.enableNetwork();
                  }),
                  (xf.prototype.disableNetwork = function () {
                      return this.Nd.disableNetwork();
                  }),
                  (xf.prototype.ei = function (t) {
                      var e = this.zd.get(t);
                      if (e && e.Bd) return gs().add(e.key);
                      var n = gs(),
                          r = this.jd.get(t);
                      if (!r) return n;
                      for (var i = 0, o = r; i < o.length; i++) {
                          var s = o[i],
                              u = this.Wd.get(s);
                          n = n.He(u.view.md);
                      }
                      return n;
                  }),
                  xf),
              mf =
                  (n(Df, (sf = gf)),
                  Object.defineProperty(Df.prototype, "Zd", {
                      get: function () {
                          return !0 === this.isPrimary;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (Df.prototype.enableNetwork = function () {
                      return this.F_.za(!0), sf.prototype.enableNetwork.call(this);
                  }),
                  (Df.prototype.disableNetwork = function () {
                      return this.F_.za(!1), sf.prototype.disableNetwork.call(this);
                  }),
                  (Df.prototype.wf = function (r) {
                      return y(this, void 0, void 0, function () {
                          var e, n;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return [4, this.F_.Wu(r.query, !0)];
                                  case 1:
                                      return (e = t.sent()), (n = r.view.Cd(e)), [2, (this.isPrimary && this.sf(r.targetId, n.vd), n)];
                              }
                          });
                      });
                  }),
                  (Df.prototype.Sd = function (t, e) {
                      this.Zd && 0 === e && (sf.prototype.Sd.call(this, t, e), this.qd.ed(t)), this.Zd || 1 !== e || sf.prototype.Sd.call(this, t, e);
                  }),
                  (Df.prototype.ld = function (n, r, i) {
                      return y(this, void 0, void 0, function () {
                          var e;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return this.tf("applyBatchState()"), [4, this.F_.Gu(n)];
                                  case 1:
                                      return null === (e = t.sent()) ? [3, 6] : "pending" !== r ? [3, 3] : [4, this.Nd.tl()];
                                  case 2:
                                      return t.sent(), [3, 4];
                                  case 3:
                                      "acknowledged" === r || "rejected" === r ? (this.uf(n, i || null), this.F_.zu(n)) : Js(), (t.label = 4);
                                  case 4:
                                      return [4, this.rf(e)];
                                  case 5:
                                      return t.sent(), [3, 7];
                                  case 6:
                                      Ys("SyncEngine", "Cannot apply mutation batch with id: " + n), (t.label = 7);
                                  case 7:
                                      return [2];
                              }
                          });
                      });
                  }),
                  (Df.prototype.Pl = function (h) {
                      return y(this, void 0, void 0, function () {
                          var e,
                              n,
                              r,
                              i,
                              o,
                              s,
                              u,
                              a = this;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return !0 !== h || !0 === this.isPrimary ? [3, 3] : ((this.isPrimary = !0), [4, this.Nd.Pl(!0)]);
                                  case 1:
                                      return t.sent(), (e = this.qd.ql()), [4, this.Rf(e.W())];
                                  case 2:
                                      for (n = t.sent(), r = 0, i = n; r < i.length; r++) (o = i[r]), this.Nd.listen(o);
                                      return [3, 7];
                                  case 3:
                                      return !1 !== h || !1 === this.isPrimary
                                          ? [3, 7]
                                          : ((this.isPrimary = !1),
                                            (s = []),
                                            (u = Promise.resolve()),
                                            this.jd.forEach(function (t, e) {
                                                a.qd.Jl(e)
                                                    ? s.push(e)
                                                    : (u = u.then(function () {
                                                          return a.if(e), a.F_.Qu(e, !0);
                                                      })),
                                                    a.Nd.nl(e);
                                            }),
                                            [4, u]);
                                  case 4:
                                      return t.sent(), [4, this.Rf(s)];
                                  case 5:
                                      return t.sent(), this.Af(), [4, this.Nd.Pl(!1)];
                                  case 6:
                                      t.sent(), (t.label = 7);
                                  case 7:
                                      return [2];
                              }
                          });
                      });
                  }),
                  (Df.prototype.Af = function () {
                      var n = this;
                      this.zd.forEach(function (t, e) {
                          n.Nd.nl(e);
                      }),
                          this.Hd.nc(),
                          (this.zd = new Map()),
                          (this.Gd = new Jo(Xr.N));
                  }),
                  (Df.prototype.Rf = function (d) {
                      return y(this, void 0, void 0, function () {
                          var e, n, r, i, o, s, u, a, h, c, f, l, p;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      (e = []), (n = []), (r = 0), (i = d), (t.label = 1);
                                  case 1:
                                      return r < i.length ? ((o = i[r]), (s = void 0), (u = this.jd.get(o)) && 0 !== u.length ? [4, this.F_.Qu(o, !0)] : [3, 8]) : [3, 14];
                                  case 2:
                                      return t.sent(), [4, this.F_.Uu(u[0].ee())];
                                  case 3:
                                      (s = t.sent()), (a = 0), (h = u), (t.label = 4);
                                  case 4:
                                      return a < h.length ? ((c = h[a]), (f = this.Wd.get(c)), [4, this.wf(f)]) : [3, 7];
                                  case 5:
                                      (l = t.sent()).snapshot && n.push(l.snapshot), (t.label = 6);
                                  case 6:
                                      return a++, [3, 4];
                                  case 7:
                                      return [3, 12];
                                  case 8:
                                      return [4, this.F_.Hu(o)];
                                  case 9:
                                      return (p = t.sent()), [4, this.F_.Uu(p)];
                                  case 10:
                                      return (s = t.sent()), [4, this.ef(this.mf(p), o, !1)];
                                  case 11:
                                      t.sent(), (t.label = 12);
                                  case 12:
                                      e.push(s), (t.label = 13);
                                  case 13:
                                      return r++, [3, 1];
                                  case 14:
                                      return [2, (this.Qd.s_(n), e)];
                              }
                          });
                      });
                  }),
                  (Df.prototype.mf = function (t) {
                      return new _o(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F", t.startAt, t.endAt);
                  }),
                  (Df.prototype._u = function () {
                      return this.F_._u();
                  }),
                  (Df.prototype.dd = function (r, i, o) {
                      return y(this, void 0, void 0, function () {
                          var e, n;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return this.isPrimary ? (Ys("SyncEngine", "Ignoring unexpected query state notification."), [3, 8]) : [3, 1];
                                  case 1:
                                      if (!this.jd.has(r)) return [3, 8];
                                      switch (i) {
                                          case "current":
                                          case "not-current":
                                              return [3, 2];
                                          case "rejected":
                                              return [3, 5];
                                      }
                                      return [3, 7];
                                  case 2:
                                      return [4, this.F_.la()];
                                  case 3:
                                      return (e = t.sent()), (n = _s.ls(r, "current" === i)), [4, this.rf(e, n)];
                                  case 4:
                                      return t.sent(), [3, 8];
                                  case 5:
                                      return [4, this.F_.Qu(r, !0)];
                                  case 6:
                                      return t.sent(), this.if(r, o), [3, 8];
                                  case 7:
                                      Js(), (t.label = 8);
                                  case 8:
                                      return [2];
                              }
                          });
                      });
                  }),
                  (Df.prototype.fd = function (l, p) {
                      return y(this, void 0, void 0, function () {
                          var e,
                              n,
                              r,
                              i,
                              o,
                              s,
                              u,
                              a,
                              h,
                              c,
                              f = this;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      if (!this.isPrimary) return [3, 10];
                                      (e = 0), (n = l), (t.label = 1);
                                  case 1:
                                      return e < n.length ? ((r = n[e]), this.jd.has(r) ? (Ys("SyncEngine", "Adding an already active target " + r), [3, 5]) : [4, this.F_.Hu(r)]) : [3, 6];
                                  case 2:
                                      return (i = t.sent()), [4, this.F_.Uu(i)];
                                  case 3:
                                      return (o = t.sent()), [4, this.ef(this.mf(i), o.targetId, !1)];
                                  case 4:
                                      t.sent(), this.Nd.listen(o), (t.label = 5);
                                  case 5:
                                      return e++, [3, 1];
                                  case 6:
                                      (s = function (e) {
                                          return v(this, function (t) {
                                              switch (t.label) {
                                                  case 0:
                                                      return u.jd.has(e)
                                                          ? [
                                                                4,
                                                                u.F_.Qu(e, !1)
                                                                    .then(function () {
                                                                        f.Nd.nl(e), f.if(e);
                                                                    })
                                                                    .catch(Ih),
                                                            ]
                                                          : [3, 2];
                                                  case 1:
                                                      t.sent(), (t.label = 2);
                                                  case 2:
                                                      return [2];
                                              }
                                          });
                                      }),
                                          (u = this),
                                          (a = 0),
                                          (h = p),
                                          (t.label = 7);
                                  case 7:
                                      return a < h.length ? ((c = h[a]), [5, s(c)]) : [3, 10];
                                  case 8:
                                      t.sent(), (t.label = 9);
                                  case 9:
                                      return a++, [3, 7];
                                  case 10:
                                      return [2];
                              }
                          });
                      });
                  }),
                  Df),
              wf =
                  ((kf.prototype.listen = function (u) {
                      return y(this, void 0, void 0, function () {
                          var e, n, r, i, o, s;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      if (((e = u.query), (n = !1), (r = this.gf.get(e)) || ((n = !0), (r = new of())), !n)) return [3, 4];
                                      t.label = 1;
                                  case 1:
                                      return t.trys.push([1, 3, , 4]), (i = r), [4, this.hl.listen(e)];
                                  case 2:
                                      return (i.Pf = t.sent()), [3, 4];
                                  case 3:
                                      if (((o = t.sent()), Xs("EventManager", (s = "Initialization of query '" + e + "' failed: " + o)), "IndexedDbTransactionError" !== o.name)) throw o;
                                      return [2, void u.onError(new kr(Sr.UNAVAILABLE, s))];
                                  case 4:
                                      return this.gf.set(e, r), r.Vf.push(u), u.Sd(this.onlineState), r.Pf && u.yf(r.Pf) && this.bf(), [2];
                              }
                          });
                      });
                  }),
                  (kf.prototype.nl = function (o) {
                      return y(this, void 0, void 0, function () {
                          var e, n, r, i;
                          return v(this, function (t) {
                              return (e = o.query), (n = !1), (r = this.gf.get(e)) && 0 <= (i = r.Vf.indexOf(o)) && (r.Vf.splice(i, 1), (n = 0 === r.Vf.length)), n ? [2, (this.gf.delete(e), this.hl.nl(e))] : [2];
                          });
                      });
                  }),
                  (kf.prototype.s_ = function (t) {
                      for (var e = !1, n = 0, r = t; n < r.length; n++) {
                          var i = r[n],
                              o = i.query,
                              s = this.gf.get(o);
                          if (s) {
                              for (var u = 0, a = s.Vf; u < a.length; u++) a[u].yf(i) && (e = !0);
                              s.Pf = i;
                          }
                      }
                      e && this.bf();
                  }),
                  (kf.prototype.df = function (t, e) {
                      var n = this.gf.get(t);
                      if (n) for (var r = 0, i = n.Vf; r < i.length; r++) i[r].onError(e);
                      this.gf.delete(t);
                  }),
                  (kf.prototype.hf = function (i) {
                      this.onlineState = i;
                      var o = !1;
                      this.gf.forEach(function (t, e) {
                          for (var n = 0, r = e.Vf; n < r.length; n++) r[n].Sd(i) && (o = !0);
                      }),
                          o && this.bf();
                  }),
                  (kf.prototype.vf = function (t) {
                      this.pf.add(t), t.next();
                  }),
                  (kf.prototype.Sf = function (t) {
                      this.pf.delete(t);
                  }),
                  (kf.prototype.bf = function () {
                      this.pf.forEach(function (t) {
                          t.next();
                      });
                  }),
                  kf),
              bf =
                  ((Sf.prototype.yf = function (t) {
                      if (!this.options.includeMetadataChanges) {
                          for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                              var i = r[n];
                              3 !== i.type && e.push(i);
                          }
                          t = new As(t.query, t.docs, t.ss, e, t.ns, t.fromCache, t.rs, !0);
                      }
                      var o = !1;
                      return this.Cf ? this.Nf(t) && (this.Df.next(t), (o = !0)) : this.kf(t, this.onlineState) && (this.$f(t), (o = !0)), (this.Ff = t), o;
                  }),
                  (Sf.prototype.onError = function (t) {
                      this.Df.error(t);
                  }),
                  (Sf.prototype.Sd = function (t) {
                      this.onlineState = t;
                      var e = !1;
                      return this.Ff && !this.Cf && this.kf(this.Ff, t) && (this.$f(this.Ff), (e = !0)), e;
                  }),
                  (Sf.prototype.kf = function (t, e) {
                      if (!t.fromCache) return !0;
                      var n = "Offline" !== e;
                      return !((this.options.Mf && n) || (t.docs.B() && "Offline" !== e));
                  }),
                  (Sf.prototype.Nf = function (t) {
                      if (0 < t.docChanges.length) return !0;
                      var e = this.Ff && this.Ff.hasPendingWrites !== t.hasPendingWrites;
                      return !(!t.rs && !e) && !0 === this.options.includeMetadataChanges;
                  }),
                  (Sf.prototype.$f = function (t) {
                      (t = As.os(t.query, t.docs, t.ns, t.fromCache)), (this.Cf = !0), this.Df.next(t);
                  }),
                  Sf),
              Ef =
                  ((_f.prototype.vu = function (t) {
                      this.Lf = t;
                  }),
                  (_f.prototype.Zn = function (e, r, i, o) {
                      var s = this;
                      return r.te() || i.isEqual(Vr.min())
                          ? this.Of(e, r)
                          : this.Lf.Yn(e, o).next(function (t) {
                                var n = s.xf(r, t);
                                return (r.oe() || r.ae()) && s.pd(r.Bt, n, o, i)
                                    ? s.Of(e, r)
                                    : (Ks() <= l.DEBUG && Ys("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", i.toString(), r.toString()),
                                      s.Lf.Zn(e, r, i).next(function (e) {
                                          return (
                                              n.forEach(function (t) {
                                                  e = e.Ae(t.key, t);
                                              }),
                                              e
                                          );
                                      }));
                            });
                  }),
                  (_f.prototype.xf = function (n, t) {
                      var r = new os(function (t, e) {
                          return n.se(t, e);
                      });
                      return (
                          t.forEach(function (t, e) {
                              e instanceof To && n.matches(e) && (r = r.add(e));
                          }),
                          r
                      );
                  }),
                  (_f.prototype.pd = function (t, e, n, r) {
                      if (n.size !== e.size) return !0;
                      var i = "F" === t ? e.last() : e.first();
                      return !!i && (i.hasPendingWrites || 0 < i.version.S(r));
                  }),
                  (_f.prototype.Of = function (t, e) {
                      return Ks() <= l.DEBUG && Ys("IndexFreeQueryEngine", "Using full collection scan to execute query: %s", e.toString()), this.Lf.Zn(t, e, Vr.min());
                  }),
                  _f),
              Tf =
                  ((Af.prototype.co = function (t) {
                      return fu.resolve(0 === this.Wn.length);
                  }),
                  (Af.prototype._o = function (t, e, n) {
                      var r = e.batchId,
                          i = this.Uf(r, "acknowledged");
                      return Zs(0 === i), this.Wn[i], (this.lastStreamToken = n), fu.resolve();
                  }),
                  (Af.prototype.do = function (t) {
                      return fu.resolve(this.lastStreamToken);
                  }),
                  (Af.prototype.fo = function (t, e) {
                      return (this.lastStreamToken = e), fu.resolve();
                  }),
                  (Af.prototype.To = function (t, e, n, r) {
                      var i = this.Bf;
                      this.Bf++, 0 < this.Wn.length && this.Wn[this.Wn.length - 1];
                      var o = new hu(i, e, n, r);
                      this.Wn.push(o);
                      for (var s = 0, u = r; s < u.length; s++) {
                          var a = u[s];
                          (this.qf = this.qf.add(new Ah(a.key, i))), this.jn.Io(t, a.key.path.M());
                      }
                      return fu.resolve(o);
                  }),
                  (Af.prototype.wo = function (t, e) {
                      return fu.resolve(this.Qf(e));
                  }),
                  (Af.prototype.mo = function (t, e) {
                      var n = e + 1,
                          r = this.Wf(n),
                          i = r < 0 ? 0 : r;
                      return fu.resolve(this.Wn.length > i ? this.Wn[i] : null);
                  }),
                  (Af.prototype.Po = function () {
                      return fu.resolve(0 === this.Wn.length ? -1 : this.Bf - 1);
                  }),
                  (Af.prototype.Vo = function (t) {
                      return fu.resolve(this.Wn.slice());
                  }),
                  (Af.prototype.Gn = function (t, e) {
                      var n = this,
                          r = new Ah(e, 0),
                          i = new Ah(e, Number.POSITIVE_INFINITY),
                          o = [];
                      return (
                          this.qf.Ke([r, i], function (t) {
                              var e = n.Qf(t.hc);
                              o.push(e);
                          }),
                          fu.resolve(o)
                      );
                  }),
                  (Af.prototype.Xn = function (t, e) {
                      var r = this,
                          i = new os(ru);
                      return (
                          e.forEach(function (t) {
                              var e = new Ah(t, 0),
                                  n = new Ah(t, Number.POSITIVE_INFINITY);
                              r.qf.Ke([e, n], function (t) {
                                  i = i.add(t.hc);
                              });
                          }),
                          fu.resolve(this.jf(i))
                      );
                  }),
                  (Af.prototype.nr = function (t, e) {
                      var n = e.path,
                          r = n.length + 1,
                          i = n;
                      Xr.et(i) || (i = i.child(""));
                      var o = new Ah(new Xr(i), 0),
                          s = new os(ru);
                      return (
                          this.qf.Ge(function (t) {
                              var e = t.key.path;
                              return !!n.q(e) && (e.length === r && (s = s.add(t.hc)), !0);
                          }, o),
                          fu.resolve(this.jf(s))
                      );
                  }),
                  (Af.prototype.jf = function (t) {
                      var n = this,
                          r = [];
                      return (
                          t.forEach(function (t) {
                              var e = n.Qf(t);
                              null !== e && r.push(e);
                          }),
                          r
                      );
                  }),
                  (Af.prototype.yo = function (n, r) {
                      var i = this;
                      Zs(0 === this.Uf(r.batchId, "removed")), this.Wn.shift();
                      var o = this.qf;
                      return fu
                          .forEach(r.mutations, function (t) {
                              var e = new Ah(t.key, r.batchId);
                              return (o = o.delete(e)), i.oo.So(n, t.key);
                          })
                          .next(function () {
                              i.qf = o;
                          });
                  }),
                  (Af.prototype.vo = function (t) {}),
                  (Af.prototype.Co = function (t, e) {
                      var n = new Ah(e, 0),
                          r = this.qf.ze(n);
                      return fu.resolve(e.isEqual(r && r.key));
                  }),
                  (Af.prototype.Do = function (t) {
                      return this.Wn.length, fu.resolve();
                  }),
                  (Af.prototype.Uf = function (t, e) {
                      return this.Wf(t);
                  }),
                  (Af.prototype.Wf = function (t) {
                      return 0 === this.Wn.length ? 0 : t - this.Wn[0].batchId;
                  }),
                  (Af.prototype.Qf = function (t) {
                      var e = this.Wf(t);
                      return e < 0 || e >= this.Wn.length ? null : this.Wn[e];
                  }),
                  Af),
              If =
                  ((Nf.prototype.Nn = function (t, e, n) {
                      var r = e.key,
                          i = this.docs.get(r),
                          o = i ? i.size : 0,
                          s = this.Kf(e);
                      return (this.docs = this.docs.Ae(r, { ra: e, size: s, readTime: n })), (this.size += s - o), this.jn.Io(t, r.path.M());
                  }),
                  (Nf.prototype.$n = function (t) {
                      var e = this.docs.get(t);
                      e && ((this.docs = this.docs.remove(t)), (this.size -= e.size));
                  }),
                  (Nf.prototype.Mn = function (t, e) {
                      var n = this.docs.get(e);
                      return fu.resolve(n ? n.ra : null);
                  }),
                  (Nf.prototype.getEntries = function (t, e) {
                      var n = this,
                          r = fs();
                      return (
                          e.forEach(function (t) {
                              var e = n.docs.get(t);
                              r = r.Ae(t, e ? e.ra : null);
                          }),
                          fu.resolve(r)
                      );
                  }),
                  (Nf.prototype.Zn = function (t, e, n) {
                      for (var r = ps(), i = new Xr(e.path.child("")), o = this.docs.ve(i); o.ke(); ) {
                          var s = o.Ne(),
                              u = s.key,
                              a = s.value,
                              h = a.ra,
                              c = a.readTime;
                          if (!e.path.q(u.path)) break;
                          c.S(n) <= 0 || (h instanceof To && e.matches(h) && (r = r.Ae(h.key, h)));
                      }
                      return fu.resolve(r);
                  }),
                  (Nf.prototype.Gf = function (t, e) {
                      return fu.forEach(this.docs, function (t) {
                          return e(t);
                      });
                  }),
                  (Nf.prototype.Ea = function (t) {
                      return new Nf.Ia(this);
                  }),
                  (Nf.prototype.Ra = function (t) {
                      return fu.resolve(this.size);
                  }),
                  Nf);
          function Nf(t, e) {
              (this.jn = t), (this.Kf = e), (this.docs = new Jo(Xr.N)), (this.size = 0);
          }
          function Af(t, e) {
              (this.jn = t), (this.oo = e), (this.Wn = []), (this.Bf = 1), (this.lastStreamToken = ei.ht), (this.qf = new os(Ah.Ju));
          }
          function _f() {}
          function Sf(t, e, n) {
              (this.query = t), (this.Df = e), (this.Cf = !1), (this.Ff = null), (this.onlineState = "Unknown"), (this.options = n || {});
          }
          function kf(t) {
              (this.hl = t),
                  (this.gf = new au(function (t) {
                      return t.canonicalId();
                  })),
                  (this.onlineState = "Unknown"),
                  (this.pf = new Set()),
                  this.hl.subscribe(this);
          }
          function Df(t, e, n, r, i) {
              var o = this;
              return ((o = sf.call(this, t, e, n, r, i) || this).F_ = t), (o.isPrimary = void 0), o;
          }
          function xf(t, e, n, r, i) {
              (this.F_ = t),
                  (this.Nd = e),
                  (this.qd = n),
                  (this.currentUser = r),
                  (this.Ud = i),
                  (this.Qd = null),
                  (this.Wd = new au(function (t) {
                      return t.canonicalId();
                  })),
                  (this.jd = new Map()),
                  (this.Kd = []),
                  (this.Gd = new Jo(Xr.N)),
                  (this.zd = new Map()),
                  (this.Hd = new Nh()),
                  (this.Yd = {}),
                  (this.Jd = new Map()),
                  (this.Xd = va.ko()),
                  (this.onlineState = "Unknown");
          }
          function Of(t, e, n, r) {
              (this.br = t), (this.Nd = e), (this.updateFunction = n), (this.Dr = r), (this.kd = 5), (this.Qr = new Du(this.br, "transaction_retry"));
          }
          function Rf(t, e) {
              (this.query = t), (this.Id = e), (this.wd = null), (this.fs = !1), (this.Rd = gs()), (this.ns = gs()), (this.Ad = new Is(t.se.bind(t)));
          }
          function Pf() {
              (this.Td = new lf()), (this.Ed = {}), (this.hl = null), (this.V_ = null), (this.ur = null);
          }
          function Vf(t, e, n, r, i) {
              if (
                  ((this.Tr = t),
                  (this.platform = e),
                  (this.persistenceKey = n),
                  (this.bl = r),
                  (this.hl = null),
                  (this.V_ = null),
                  (this.ur = null),
                  (this.vl = this.Sl.bind(this)),
                  (this.Dl = new Jo(ru)),
                  (this.vh = !1),
                  (this.Cl = []),
                  !Vf.Uh(this.platform))
              )
                  throw new kr(Sr.UNIMPLEMENTED, "LocalStorage is not available on this platform.");
              var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
              (this.storage = this.platform.window.localStorage),
                  (this.currentUser = i),
                  (this.Fl = $c(this.persistenceKey, this.bl)),
                  (this.Nl = "firestore_sequence_number_" + this.persistenceKey),
                  (this.Dl = this.Dl.Ae(this.bl, new lf())),
                  (this.kl = new RegExp("^firestore_clients_" + o + "_([^_]*)$")),
                  (this.$l = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$")),
                  (this.Ml = new RegExp("^firestore_targets_" + o + "_(\\d+)$")),
                  (this.Ll = "firestore_online_state_" + this.persistenceKey),
                  this.platform.window.addEventListener("storage", this.vl);
          }
          function Lf() {
              this.activeTargetIds = ws();
          }
          function Cf(t, e) {
              (this.clientId = t), (this.onlineState = e);
          }
          function Mf(t, e) {
              (this.clientId = t), (this.activeTargetIds = e);
          }
          function Uf(t, e, n) {
              (this.targetId = t), (this.state = e), (this.error = n);
          }
          function jf(t, e, n, r) {
              (this.user = t), (this.batchId = e), (this.state = n), (this.error = r);
          }
          function qf(t) {
              var e = this;
              return ((e = uf.call(this) || this).Aa = t), e;
          }
          If.Ia =
              (n(qf, (uf = lu)),
              (qf.prototype.xn = function (n) {
                  var r = this,
                      i = [];
                  return (
                      this.Dn.forEach(function (t, e) {
                          e ? i.push(r.Aa.Nn(n, e, r.readTime)) : r.Aa.$n(t);
                      }),
                      fu.vn(i)
                  );
              }),
              (qf.prototype.Ln = function (t, e) {
                  return this.Aa.Mn(t, e);
              }),
              (qf.prototype.On = function (t, e) {
                  return this.Aa.getEntries(t, e);
              }),
              qf);
          var Ff,
              Bf,
              Gf =
                  ((il.prototype.js = function (t, n) {
                      return (
                          this.zf.forEach(function (t, e) {
                              return n(e);
                          }),
                          fu.resolve()
                      );
                  }),
                  (il.prototype.Oo = function (t) {
                      return fu.resolve(this.lastRemoteSnapshotVersion);
                  }),
                  (il.prototype.xo = function (t) {
                      return fu.resolve(this.Hf);
                  }),
                  (il.prototype.$o = function (t) {
                      return (this.highestTargetId = this.Jf.next()), fu.resolve(this.highestTargetId);
                  }),
                  (il.prototype.Bo = function (t, e, n) {
                      return n && (this.lastRemoteSnapshotVersion = n), e > this.Hf && (this.Hf = e), fu.resolve();
                  }),
                  (il.prototype.Uo = function (t) {
                      this.zf.set(t.target, t);
                      var e = t.targetId;
                      e > this.highestTargetId && ((this.Jf = new va(e)), (this.highestTargetId = e)), t.sequenceNumber > this.Hf && (this.Hf = t.sequenceNumber);
                  }),
                  (il.prototype.qo = function (t, e) {
                      return this.Uo(e), (this.targetCount += 1), fu.resolve();
                  }),
                  (il.prototype.Wo = function (t, e) {
                      return this.Uo(e), fu.resolve();
                  }),
                  (il.prototype.jo = function (t, e) {
                      return this.zf.delete(e.target), this.Yf.ic(e.targetId), --this.targetCount, fu.resolve();
                  }),
                  (il.prototype.$h = function (n, r, i) {
                      var o = this,
                          s = 0,
                          u = [];
                      return (
                          this.zf.forEach(function (t, e) {
                              e.sequenceNumber <= r && null === i.get(e.targetId) && (o.zf.delete(t), u.push(o.Ko(n, e.targetId)), s++);
                          }),
                          fu.vn(u).next(function () {
                              return s;
                          })
                      );
                  }),
                  (il.prototype.Ho = function (t) {
                      return fu.resolve(this.targetCount);
                  }),
                  (il.prototype.Yo = function (t, e) {
                      var n = this.zf.get(e) || null;
                      return fu.resolve(n);
                  }),
                  (il.prototype.Jo = function (t, e, n) {
                      return this.Yf.tc(e, n), fu.resolve();
                  }),
                  (il.prototype.Zo = function (e, t, n) {
                      this.Yf.sc(t, n);
                      var r = this.persistence.oo,
                          i = [];
                      return (
                          r &&
                              t.forEach(function (t) {
                                  i.push(r.So(e, t));
                              }),
                          fu.vn(i)
                      );
                  }),
                  (il.prototype.Ko = function (t, e) {
                      return this.Yf.ic(e), fu.resolve();
                  }),
                  (il.prototype.ea = function (t, e) {
                      var n = this.Yf.rc(e);
                      return fu.resolve(n);
                  }),
                  (il.prototype.Co = function (t, e) {
                      return fu.resolve(this.Yf.Co(e));
                  }),
                  il),
              zf =
                  ((rl.prototype.start = function () {
                      return Promise.resolve();
                  }),
                  (rl.prototype.hu = function () {
                      return (this.Da = !1), Promise.resolve();
                  }),
                  Object.defineProperty(rl.prototype, "vh", {
                      get: function () {
                          return this.Da;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (rl.prototype.Ga = function () {}),
                  (rl.prototype.Tu = function () {
                      return this.jn;
                  }),
                  (rl.prototype.lu = function (t) {
                      var e = this.Xf[t.s()];
                      return e || ((e = new Tf(this.jn, this.oo)), (this.Xf[t.s()] = e)), e;
                  }),
                  (rl.prototype.du = function () {
                      return this.Oa;
                  }),
                  (rl.prototype.fu = function () {
                      return this.Qn;
                  }),
                  (rl.prototype.runTransaction = function (t, e, n) {
                      var r = this;
                      Ys("MemoryPersistence", "Starting transaction:", t);
                      var i = new Wf(this.ja.next());
                      return (
                          this.oo.tT(),
                          n(i)
                              .next(function (t) {
                                  return r.oo.eT(i).next(function () {
                                      return t;
                                  });
                              })
                              .yn()
                              .then(function (t) {
                                  return i.Un(), t;
                              })
                      );
                  }),
                  (rl.prototype.sT = function (e, n) {
                      return fu.Sn(
                          Object.values(this.Xf).map(function (t) {
                              return function () {
                                  return t.Co(e, n);
                              };
                          })
                      );
                  }),
                  rl),
              Wf = (n(nl, (Bf = du)), nl),
              Qf =
                  ((el.rT = function (t) {
                      return new el(t);
                  }),
                  Object.defineProperty(el.prototype, "hT", {
                      get: function () {
                          if (this.nT) return this.nT;
                          throw Js();
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (el.prototype.Xo = function (t, e, n) {
                      return this.iT.Xo(n, e), this.hT.delete(n), fu.resolve();
                  }),
                  (el.prototype.ta = function (t, e, n) {
                      return this.iT.ta(n, e), this.hT.add(n), fu.resolve();
                  }),
                  (el.prototype.So = function (t, e) {
                      return this.hT.add(e), fu.resolve();
                  }),
                  (el.prototype.removeTarget = function (t, e) {
                      var n = this;
                      this.iT.ic(e.targetId).forEach(function (t) {
                          return n.hT.add(t);
                      });
                      var r = this.persistence.du();
                      return r
                          .ea(t, e.targetId)
                          .next(function (t) {
                              t.forEach(function (t) {
                                  return n.hT.add(t);
                              });
                          })
                          .next(function () {
                              return r.jo(t, e);
                          });
                  }),
                  (el.prototype.tT = function () {
                      this.nT = new Set();
                  }),
                  (el.prototype.eT = function (t) {
                      var n = this,
                          r = this.persistence.fu().Ea();
                      return fu
                          .forEach(this.hT, function (e) {
                              return n.oT(t, e).next(function (t) {
                                  t || r.$n(e);
                              });
                          })
                          .next(function () {
                              return (n.nT = null), r.apply(t);
                          });
                  }),
                  (el.prototype.mu = function (t, e) {
                      var n = this;
                      return this.oT(t, e).next(function (t) {
                          t ? n.hT.delete(e) : n.hT.add(e);
                      });
                  }),
                  (el.prototype.Zf = function (t) {
                      return 0;
                  }),
                  (el.prototype.oT = function (t, e) {
                      var n = this;
                      return fu.Sn([
                          function () {
                              return fu.resolve(n.iT.Co(e));
                          },
                          function () {
                              return n.persistence.du().Co(t, e);
                          },
                          function () {
                              return n.persistence.sT(t, e);
                          },
                      ]);
                  }),
                  el),
              Kf =
                  ((tl.prototype.initialize = function (n) {
                      return y(this, void 0, void 0, function () {
                          var e = this;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return (this.qd = this.aT(n)), (this.persistence = this.uT(n)), [4, this.persistence.start()];
                                  case 1:
                                      return (
                                          t.sent(),
                                          (this.cT = this._T(n)),
                                          (this.F_ = this.lT(n)),
                                          (this.Nd = this.dT(n)),
                                          (this.hl = this.fT(n)),
                                          (this.TT = this.ET(n)),
                                          (this.qd.V_ = function (t) {
                                              return e.hl.Sd(t, 1);
                                          }),
                                          (this.Nd.hl = this.hl),
                                          [4, this.F_.start()]
                                      );
                                  case 2:
                                      return t.sent(), [4, this.qd.start()];
                                  case 3:
                                      return t.sent(), [4, this.Nd.start()];
                                  case 4:
                                      return t.sent(), [4, this.Nd.Pl(this.hl.Zd)];
                                  case 5:
                                      return t.sent(), [2];
                              }
                          });
                      });
                  }),
                  (tl.prototype.ET = function (t) {
                      return new wf(this.hl);
                  }),
                  (tl.prototype._T = function (t) {
                      return null;
                  }),
                  (tl.prototype.lT = function (t) {
                      return new mh(this.persistence, new Ef(), t.IT);
                  }),
                  (tl.prototype.uT = function (t) {
                      return new zf(Qf.rT);
                  }),
                  (tl.prototype.dT = function (t) {
                      var e = this;
                      return new Gc(
                          this.F_,
                          t.f_,
                          t.br,
                          function (t) {
                              return e.hl.Sd(t, 0);
                          },
                          t.platform.wT()
                      );
                  }),
                  (tl.prototype.aT = function (t) {
                      return new df();
                  }),
                  (tl.prototype.fT = function (t) {
                      return new gf(this.F_, this.Nd, this.qd, t.IT, t.Ud);
                  }),
                  (tl.prototype.clearPersistence = function (t) {
                      throw new kr(Sr.FAILED_PRECONDITION, "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.");
                  }),
                  tl),
              Hf =
                  (n(Zf, (Ff = Kf)),
                  (Zf.prototype.initialize = function (e) {
                      return y(this, void 0, void 0, function () {
                          var n = this;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return [4, Ff.prototype.initialize.call(this, e)];
                                  case 1:
                                      return (
                                          t.sent(),
                                          [
                                              4,
                                              this.persistence.Ka(function (e) {
                                                  return y(n, void 0, void 0, function () {
                                                      return v(this, function (t) {
                                                          switch (t.label) {
                                                              case 0:
                                                                  return [4, this.hl.Pl(e)];
                                                              case 1:
                                                                  return t.sent(), this.cT && (e && !this.cT.vh ? this.cT.start(this.F_) : e || this.cT.stop()), [2];
                                                          }
                                                      });
                                                  });
                                              }),
                                          ]
                                      );
                                  case 2:
                                      return t.sent(), [2];
                              }
                          });
                      });
                  }),
                  (Zf.prototype.lT = function (t) {
                      return new Eh(this.persistence, new Ef(), t.IT);
                  }),
                  (Zf.prototype.fT = function (t) {
                      var e = new mf(this.F_, this.Nd, this.qd, t.IT, t.Ud);
                      return this.qd instanceof pf && (this.qd.hl = e), e;
                  }),
                  (Zf.prototype._T = function (t) {
                      var e = this.persistence.oo.Vh;
                      return new Fu(e, t.br);
                  }),
                  (Zf.prototype.uT = function (t) {
                      var e = hh.Iu(t.RT),
                          n = t.platform.yc(t.RT.ii);
                      return new hh(t.AT.synchronizeTabs, e, t.clientId, t.platform, Uu.Eh(t.AT.cacheSizeBytes), t.br, n, this.qd);
                  }),
                  (Zf.prototype.aT = function (t) {
                      if (t.AT.mT && t.AT.synchronizeTabs) {
                          if (!pf.Uh(t.platform)) throw new kr(Sr.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
                          var e = hh.Iu(t.RT);
                          return new pf(t.br, t.platform, e, t.clientId, t.IT);
                      }
                      return new df();
                  }),
                  (Zf.prototype.clearPersistence = function (t) {
                      var e = hh.Iu(t);
                      return hh.clearPersistence(e);
                  }),
                  Zf),
              Yf =
                  ((Jf.prototype.start = function (e, n) {
                      var r = this;
                      this.PT();
                      var i = new ku(),
                          o = new ku(),
                          s = !1;
                      return (
                          this.credentials.l(function (t) {
                              if (!s) return (s = !0), Ys("FirestoreClient", "Initializing. user=", t.uid), r.VT(e, n, t, o).then(i.resolve, i.reject);
                              r.br.$r(function () {
                                  return r.ml(t);
                              });
                          }),
                          this.br.$r(function () {
                              return i.promise;
                          }),
                          o.promise
                      );
                  }),
                  (Jf.prototype.enableNetwork = function () {
                      var t = this;
                      return (
                          this.PT(),
                          this.br.enqueue(function () {
                              return t.hl.enableNetwork();
                          })
                      );
                  }),
                  (Jf.prototype.VT = function (a, h, c, f) {
                      return y(this, void 0, void 0, function () {
                          var r,
                              i,
                              o,
                              s,
                              u = this;
                          return v(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return t.trys.push([0, 3, , 4]), [4, this.platform.gT(this.RT)];
                                  case 1:
                                      return (
                                          (r = t.sent()),
                                          (i = this.platform.yc(this.RT.ii)),
                                          (e = r),
                                          (n = this.credentials),
                                          (o = new qc(e, n, i)),
                                          [4, a.initialize({ br: this.br, RT: this.RT, platform: this.platform, f_: o, clientId: this.clientId, IT: c, Ud: 100, AT: h })]
                                      );
                                  case 2:
                                      return (
                                          t.sent(),
                                          (this.persistence = a.persistence),
                                          (this.qd = a.qd),
                                          (this.F_ = a.F_),
                                          (this.Nd = a.Nd),
                                          (this.hl = a.hl),
                                          (this.cT = a.cT),
                                          (this.pT = a.TT),
                                          this.persistence.Ga(function () {
                                              return y(u, void 0, void 0, function () {
                                                  return v(this, function (t) {
                                                      switch (t.label) {
                                                          case 0:
                                                              return [4, this.terminate()];
                                                          case 1:
                                                              return t.sent(), [2];
                                                      }
                                                  });
                                              });
                                          }),
                                          f.resolve(),
                                          [3, 4]
                                      );
                                  case 3:
                                      if (((s = t.sent()), f.reject(s), !this.yT(s))) throw s;
                                      return [2, (console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + s), this.VT(new Kf(), { mT: !1 }, c, f))];
                                  case 4:
                                      return [2];
                              }
                              var e, n;
                          });
                      });
                  }),
                  (Jf.prototype.yT = function (t) {
                      return "FirebaseError" === t.name
                          ? t.code === Sr.FAILED_PRECONDITION || t.code === Sr.UNIMPLEMENTED
                          : !("undefined" != typeof DOMException && t instanceof DOMException) || 22 === t.code || 20 === t.code || 11 === t.code;
                  }),
                  (Jf.prototype.PT = function () {
                      if (this.br.Kr) throw new kr(Sr.FAILED_PRECONDITION, "The client has already been terminated.");
                  }),
                  (Jf.prototype.ml = function (t) {
                      return this.br.th(), Ys("FirestoreClient", "Credential Changed. Current user: " + t.uid), this.hl.ml(t);
                  }),
                  (Jf.prototype.disableNetwork = function () {
                      var t = this;
                      return (
                          this.PT(),
                          this.br.enqueue(function () {
                              return t.hl.disableNetwork();
                          })
                      );
                  }),
                  (Jf.prototype.terminate = function () {
                      var t = this;
                      return this.br.Jr(function () {
                          return y(t, void 0, void 0, function () {
                              return v(this, function (t) {
                                  switch (t.label) {
                                      case 0:
                                          return this.cT && this.cT.stop(), [4, this.Nd.hu()];
                                      case 1:
                                          return t.sent(), [4, this.qd.hu()];
                                      case 2:
                                          return t.sent(), [4, this.persistence.hu()];
                                      case 3:
                                          return t.sent(), this.credentials.T(), [2];
                                  }
                              });
                          });
                      });
                  }),
                  (Jf.prototype.waitForPendingWrites = function () {
                      var t = this;
                      this.PT();
                      var e = new ku();
                      return (
                          this.br.$r(function () {
                              return t.hl._f(e);
                          }),
                          e.promise
                      );
                  }),
                  (Jf.prototype.listen = function (t, e, n) {
                      var r = this;
                      this.PT();
                      var i = new bf(t, e, n);
                      return (
                          this.br.$r(function () {
                              return r.pT.listen(i);
                          }),
                          i
                      );
                  }),
                  (Jf.prototype.nl = function (t) {
                      var e = this;
                      this.bT ||
                          this.br.$r(function () {
                              return e.pT.nl(t);
                          });
                  }),
                  (Jf.prototype.vT = function (t) {
                      var e = this;
                      return (
                          this.PT(),
                          this.br
                              .enqueue(function () {
                                  return e.F_.qu(t);
                              })
                              .then(function (t) {
                                  if (t instanceof To) return t;
                                  if (t instanceof Io) return null;
                                  throw new kr(
                                      Sr.UNAVAILABLE,
                                      "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"
                                  );
                              })
                      );
                  }),
                  (Jf.prototype.ST = function (i) {
                      var t = this;
                      return (
                          this.PT(),
                          this.br.enqueue(function () {
                              return y(t, void 0, void 0, function () {
                                  var e, n, r;
                                  return v(this, function (t) {
                                      switch (t.label) {
                                          case 0:
                                              return [4, this.F_.Wu(i, !0)];
                                          case 1:
                                              return (e = t.sent()), (n = new yf(i, e.ju)), (r = n.Pd(e.documents)), [2, n.xn(r, !1).snapshot];
                                      }
                                  });
                              });
                          })
                      );
                  }),
                  (Jf.prototype.write = function (t) {
                      var e = this;
                      this.PT();
                      var n = new ku();
                      return (
                          this.br.$r(function () {
                              return e.hl.write(t, n);
                          }),
                          n.promise
                      );
                  }),
                  (Jf.prototype.ii = function () {
                      return this.RT.ii;
                  }),
                  (Jf.prototype.vf = function (t) {
                      var e = this;
                      this.PT(),
                          this.br.$r(function () {
                              return e.pT.vf(t), Promise.resolve();
                          });
                  }),
                  (Jf.prototype.Sf = function (t) {
                      this.bT || this.pT.Sf(t);
                  }),
                  Object.defineProperty(Jf.prototype, "bT", {
                      get: function () {
                          return this.br.Kr;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (Jf.prototype.transaction = function (t) {
                      var e = this;
                      this.PT();
                      var n = new ku();
                      return (
                          this.br.$r(function () {
                              return e.hl.runTransaction(e.br, t, n), Promise.resolve();
                          }),
                          n.promise
                      );
                  }),
                  Jf),
              Xf =
                  (($f.prototype.next = function (t) {
                      this.DT(this.observer.next, t);
                  }),
                  ($f.prototype.error = function (t) {
                      this.DT(this.observer.error, t);
                  }),
                  ($f.prototype.CT = function () {
                      this.muted = !0;
                  }),
                  ($f.prototype.DT = function (t, e) {
                      var n = this;
                      this.muted ||
                          setTimeout(function () {
                              n.muted || t(e);
                          }, 0);
                  }),
                  $f);
          function $f(t) {
              (this.observer = t), (this.muted = !1);
          }
          function Jf(t, e, n, r) {
              (this.platform = t), (this.RT = e), (this.credentials = n), (this.br = r), (this.clientId = eu.cn());
          }
          function Zf() {
              return (null !== Ff && Ff.apply(this, arguments)) || this;
          }
          function tl() {}
          function el(t) {
              (this.persistence = t), (this.iT = new Nh()), (this.nT = null);
          }
          function nl(t) {
              var e = this;
              return ((e = Bf.call(this) || this).va = t), e;
          }
          function rl(t) {
              var e = this;
              (this.Xf = {}),
                  (this.ja = new gu(0)),
                  (this.Da = !1),
                  (this.Da = !0),
                  (this.oo = t(this)),
                  (this.Oa = new Gf(this)),
                  (this.jn = new Pa()),
                  (this.Qn = new If(this.jn, function (t) {
                      return e.oo.Zf(t);
                  }));
          }
          function il(t) {
              (this.persistence = t),
                  (this.zf = new au(function (t) {
                      return t.canonicalId();
                  })),
                  (this.lastRemoteSnapshotVersion = Vr.min()),
                  (this.highestTargetId = 0),
                  (this.Hf = 0),
                  (this.Yf = new Nh()),
                  (this.targetCount = 0),
                  (this.Jf = va.No());
          }
          function ol(i) {
              return (function () {
                  if ("object" == typeof i && null !== i)
                      for (var t = i, e = 0, n = ["next", "error", "complete"]; e < n.length; e++) {
                          var r = n[e];
                          if (r in t && "function" == typeof t[r]) return 1;
                      }
              })();
          }
          var sl,
              ul,
              al =
                  ((Rl.prototype.NT = function (t) {
                      switch (hi(t)) {
                          case 0:
                              return null;
                          case 1:
                              return t.booleanValue;
                          case 2:
                              return vi(t.integerValue || t.doubleValue);
                          case 3:
                              return this.kT(t.timestampValue);
                          case 4:
                              return this.$T(t);
                          case 5:
                              return t.stringValue;
                          case 6:
                              return new Hh(gi(t.bytesValue));
                          case 7:
                              return this.MT(t.referenceValue);
                          case 8:
                              return this.LT(t.geoPointValue);
                          case 9:
                              return this.OT(t.arrayValue);
                          case 10:
                              return this.xT(t.mapValue);
                          default:
                              throw Js();
                      }
                  }),
                  (Rl.prototype.xT = function (t) {
                      var n = this,
                          r = {};
                      return (
                          Zr(t.fields || {}, function (t, e) {
                              r[t] = n.NT(e);
                          }),
                          r
                      );
                  }),
                  (Rl.prototype.LT = function (t) {
                      return new cc(vi(t.latitude), vi(t.longitude));
                  }),
                  (Rl.prototype.OT = function (t) {
                      var e = this;
                      return (t.values || []).map(function (t) {
                          return e.NT(t);
                      });
                  }),
                  (Rl.prototype.$T = function (t) {
                      switch (this.FT) {
                          case "previous":
                              var e = (function t(e) {
                                  var n = e.mapValue.fields.__previous_value__;
                                  return si(n) ? t(n) : n;
                              })(t);
                              return null == e ? null : this.NT(e);
                          case "estimate":
                              return this.kT(ui(t));
                          default:
                              return null;
                      }
                  }),
                  (Rl.prototype.kT = function (t) {
                      var e = yi(t),
                          n = new Pr(e.seconds, e.nanos);
                      return this.timestampsInSnapshots ? n : n.toDate();
                  }),
                  (Rl.prototype.MT = function (t) {
                      var e = Cr.K(t);
                      Zs(Gs(e));
                      var n = new uu(e.get(1), e.get(3)),
                          r = new Xr(e.$(5));
                      return (
                          n.isEqual(this.firestore.Nc) ||
                              Xs(
                                  "Document " +
                                      r +
                                      " contains a document reference within a different database (" +
                                      n.projectId +
                                      "/" +
                                      n.database +
                                      ") which is not supported. It will be treated as a reference in the current database (" +
                                      this.firestore.Nc.projectId +
                                      "/" +
                                      this.firestore.Nc.database +
                                      ") instead."
                              ),
                          new dl(r, this.firestore, this.converter)
                      );
                  }),
                  Rl),
              hl = Uu.Rh,
              cl =
                  ((Ol.prototype.isEqual = function (t) {
                      return (
                          this.host === t.host &&
                          this.ssl === t.ssl &&
                          this.timestampsInSnapshots === t.timestampsInSnapshots &&
                          this.credentials === t.credentials &&
                          this.cacheSizeBytes === t.cacheSizeBytes &&
                          this.forceLongPolling === t.forceLongPolling
                      );
                  }),
                  Ol),
              fl =
                  ((xl.prototype.settings = function (t) {
                      Dh("Firestore.settings", arguments, 1), Rh("Firestore.settings", "object", 1, t);
                      var e = new cl(t);
                      if (this.QT && !this.zT.isEqual(e))
                          throw new kr(Sr.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
                      void 0 !== (this.zT = e).credentials &&
                          (this.KT = (function (t) {
                              if (!t) return new Dr();
                              switch (t.type) {
                                  case "gapi":
                                      var e = t.YT;
                                      return Zs(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), new Rr(e, t.V || "0");
                                  case "provider":
                                      return t.YT;
                                  default:
                                      throw new kr(Sr.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
                              }
                          })(e.credentials));
                  }),
                  (xl.prototype.enableNetwork = function () {
                      return this.UT(), this.QT.enableNetwork();
                  }),
                  (xl.prototype.disableNetwork = function () {
                      return this.UT(), this.QT.disableNetwork();
                  }),
                  (xl.prototype.enablePersistence = function (t) {
                      var e, n;
                      if (this.QT)
                          throw new kr(Sr.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
                      var r = !1;
                      return (
                          t &&
                              (void 0 !== t.experimentalTabSynchronization && Xs("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."),
                              (r = null !== (n = null !== (e = t.synchronizeTabs) && void 0 !== e ? e : t.experimentalTabSynchronization) && void 0 !== n && n)),
                          this.JT(this.GT, { mT: !0, cacheSizeBytes: this.zT.cacheSizeBytes, synchronizeTabs: r })
                      );
                  }),
                  (xl.prototype.clearPersistence = function () {
                      return y(this, void 0, void 0, function () {
                          var r,
                              e = this;
                          return v(this, function (t) {
                              if (void 0 !== this.QT && !this.QT.bT) throw new kr(Sr.FAILED_PRECONDITION, "Persistence cannot be cleared after this Firestore instance is initialized.");
                              return (
                                  (r = new ku()),
                                  [
                                      2,
                                      (this.qT.Gr(function () {
                                          return y(e, void 0, void 0, function () {
                                              var e, n;
                                              return v(this, function (t) {
                                                  switch (t.label) {
                                                      case 0:
                                                          return t.trys.push([0, 2, , 3]), (e = this.XT()), [4, this.GT.clearPersistence(e)];
                                                      case 1:
                                                          return t.sent(), r.resolve(), [3, 3];
                                                      case 2:
                                                          return (n = t.sent()), r.reject(n), [3, 3];
                                                      case 3:
                                                          return [2];
                                                  }
                                              });
                                          });
                                      }),
                                      r.promise),
                                  ]
                              );
                          });
                      });
                  }),
                  (xl.prototype.terminate = function () {
                      return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete();
                  }),
                  Object.defineProperty(xl.prototype, "ZT", {
                      get: function () {
                          return this.UT(), this.QT.bT;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (xl.prototype.waitForPendingWrites = function () {
                      return this.UT(), this.QT.waitForPendingWrites();
                  }),
                  (xl.prototype.onSnapshotsInSync = function (t) {
                      if ((this.UT(), ol(t))) return this.tE(t);
                      Rh("Firestore.onSnapshotsInSync", "function", 1, t);
                      var e = { next: t };
                      return this.tE(e);
                  }),
                  (xl.prototype.tE = function (t) {
                      var e = this,
                          n = new Xf({
                              next: function () {
                                  t.next && t.next();
                              },
                              error: function (t) {
                                  throw Js();
                              },
                          });
                      return (
                          this.QT.vf(n),
                          function () {
                              n.CT(), e.QT.Sf(n);
                          }
                      );
                  }),
                  (xl.prototype.UT = function () {
                      return this.QT || this.JT(new Kf(), { mT: !1 }), this.QT;
                  }),
                  (xl.prototype.XT = function () {
                      return new su(this.Nc, this.jT, this.zT.host, this.zT.ssl, this.zT.forceLongPolling);
                  }),
                  (xl.prototype.JT = function (t, e) {
                      var n = this.XT();
                      return (this.QT = new Yf(zs.nt(), n, this.KT, this.qT)), this.QT.start(t, e);
                  }),
                  (xl.WT = function (t) {
                      if (((e = t.options), !Object.prototype.hasOwnProperty.call(e, "projectId"))) throw new kr(Sr.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
                      var e,
                          n = t.options.projectId;
                      if (!n || "string" != typeof n) throw new kr(Sr.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
                      return new uu(n);
                  }),
                  Object.defineProperty(xl.prototype, "app", {
                      get: function () {
                          if (!this.BT) throw new kr(Sr.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
                          return this.BT;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (xl.prototype.collection = function (t) {
                      return Dh("Firestore.collection", arguments, 1), Rh("Firestore.collection", "non-empty string", 1, t), this.UT(), new bl(Cr.K(t), this);
                  }),
                  (xl.prototype.doc = function (t) {
                      return Dh("Firestore.doc", arguments, 1), Rh("Firestore.doc", "non-empty string", 1, t), this.UT(), dl.eE(Cr.K(t), this);
                  }),
                  (xl.prototype.collectionGroup = function (t) {
                      if ((Dh("Firestore.collectionGroup", arguments, 1), Rh("Firestore.collectionGroup", "non-empty string", 1, t), 0 <= t.indexOf("/")))
                          throw new kr(Sr.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
                      return this.UT(), new ml(new _o(Cr.G, t), this);
                  }),
                  (xl.prototype.runTransaction = function (e) {
                      var n = this;
                      return (
                          Dh("Firestore.runTransaction", arguments, 1),
                          Rh("Firestore.runTransaction", "function", 1, e),
                          this.UT().transaction(function (t) {
                              return e(new ll(n, t));
                          })
                      );
                  }),
                  (xl.prototype.batch = function () {
                      return this.UT(), new pl(this);
                  }),
                  Object.defineProperty(xl, "logLevel", {
                      get: function () {
                          switch (Ks()) {
                              case l.DEBUG:
                                  return "debug";
                              case l.SILENT:
                                  return "silent";
                              default:
                                  return "error";
                          }
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (xl.setLogLevel = function (t) {
                      switch ((Dh("Firestore.setLogLevel", arguments, 1), Rh("Firestore.setLogLevel", "non-empty string", 1, t), t)) {
                          case "debug":
                              Hs(l.DEBUG);
                              break;
                          case "error":
                              Hs(l.ERROR);
                              break;
                          case "silent":
                              Hs(l.SILENT);
                              break;
                          default:
                              throw new kr(Sr.INVALID_ARGUMENT, "Invalid log level: " + t);
                      }
                  }),
                  (xl.prototype.sE = function () {
                      return this.zT.timestampsInSnapshots;
                  }),
                  xl),
              ll =
                  ((Dl.prototype.get = function (t) {
                      var n = this;
                      Dh("Transaction.get", arguments, 1);
                      var r = Cl("Transaction.get", t, this.iE);
                      return this.nE.R_([r.kc]).then(function (t) {
                          if (!t || 1 !== t.length) return Js();
                          var e = t[0];
                          if (e instanceof Io) return new vl(n.iE, r.kc, null, !1, !1, r.rE);
                          if (e instanceof To) return new vl(n.iE, r.kc, e, !1, !1, r.rE);
                          throw Js();
                      });
                  }),
                  (Dl.prototype.set = function (t, e, n) {
                      Oh("Transaction.set", arguments, 2, 3);
                      var r = Cl("Transaction.set", t, this.iE);
                      n = Pl("Transaction.set", n);
                      var i = Ml(r.rE, e, "Transaction.set"),
                          o = i[0],
                          s = i[1],
                          u = n.merge || n.mergeFields ? this.iE.HT.Sc(s, o, n.mergeFields) : this.iE.HT.bc(s, o);
                      return this.nE.set(r.kc, u), this;
                  }),
                  (Dl.prototype.update = function (t, e, n) {
                      for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
                      return (
                          (i =
                              "string" == typeof e || e instanceof Yh
                                  ? (xh("Transaction.update", arguments, 3), (r = Cl("Transaction.update", t, this.iE)), this.iE.HT.Cc("Transaction.update", e, n, o))
                                  : (Dh("Transaction.update", arguments, 2), (r = Cl("Transaction.update", t, this.iE)), this.iE.HT.Dc("Transaction.update", e))),
                          this.nE.update(r.kc, i),
                          this
                      );
                  }),
                  (Dl.prototype.delete = function (t) {
                      Dh("Transaction.delete", arguments, 1);
                      var e = Cl("Transaction.delete", t, this.iE);
                      return this.nE.delete(e.kc), this;
                  }),
                  Dl),
              pl =
                  ((kl.prototype.set = function (t, e, n) {
                      Oh("WriteBatch.set", arguments, 2, 3), this.aE();
                      var r = Cl("WriteBatch.set", t, this.iE);
                      n = Pl("WriteBatch.set", n);
                      var i = Ml(r.rE, e, "WriteBatch.set"),
                          o = i[0],
                          s = i[1],
                          u = n.merge || n.mergeFields ? this.iE.HT.Sc(s, o, n.mergeFields) : this.iE.HT.bc(s, o);
                      return (this.hE = this.hE.concat(u.Rc(r.kc, Fi.ft()))), this;
                  }),
                  (kl.prototype.update = function (t, e, n) {
                      for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
                      return (
                          this.aE(),
                          (i =
                              "string" == typeof e || e instanceof Yh
                                  ? (xh("WriteBatch.update", arguments, 3), (r = Cl("WriteBatch.update", t, this.iE)), this.iE.HT.Cc("WriteBatch.update", e, n, o))
                                  : (Dh("WriteBatch.update", arguments, 2), (r = Cl("WriteBatch.update", t, this.iE)), this.iE.HT.Dc("WriteBatch.update", e))),
                          (this.hE = this.hE.concat(i.Rc(r.kc, Fi.exists(!0)))),
                          this
                      );
                  }),
                  (kl.prototype.delete = function (t) {
                      Dh("WriteBatch.delete", arguments, 1), this.aE();
                      var e = Cl("WriteBatch.delete", t, this.iE);
                      return (this.hE = this.hE.concat(new Qi(e.kc, Fi.ft()))), this;
                  }),
                  (kl.prototype.commit = function () {
                      return this.aE(), (this.oE = !0), 0 < this.hE.length ? this.iE.UT().write(this.hE) : Promise.resolve();
                  }),
                  (kl.prototype.aE = function () {
                      if (this.oE) throw new kr(Sr.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
                  }),
                  kl),
              dl =
                  ((Sl.eE = function (t, e, n) {
                      if (t.length % 2 != 0) throw new kr(Sr.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.j() + " has " + t.length);
                      return new Sl(new Xr(t), e, n);
                  }),
                  Object.defineProperty(Sl.prototype, "id", {
                      get: function () {
                          return this.kc.path.O();
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Object.defineProperty(Sl.prototype, "parent", {
                      get: function () {
                          return new bl(this.kc.path.M(), this.firestore, this.rE);
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Object.defineProperty(Sl.prototype, "path", {
                      get: function () {
                          return this.kc.path.j();
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (Sl.prototype.collection = function (t) {
                      if ((Dh("DocumentReference.collection", arguments, 1), Rh("DocumentReference.collection", "non-empty string", 1, t), !t)) throw new kr(Sr.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
                      var e = Cr.K(t);
                      return new bl(this.kc.path.child(e), this.firestore);
                  }),
                  (Sl.prototype.isEqual = function (t) {
                      if (!(t instanceof Sl)) throw Bh("isEqual", "DocumentReference", 1, t);
                      return this.firestore === t.firestore && this.kc.isEqual(t.kc) && this.rE === t.rE;
                  }),
                  (Sl.prototype.set = function (t, e) {
                      Oh("DocumentReference.set", arguments, 1, 2), (e = Pl("DocumentReference.set", e));
                      var n = Ml(this.rE, t, "DocumentReference.set"),
                          r = n[0],
                          i = n[1],
                          o = e.merge || e.mergeFields ? this.firestore.HT.Sc(i, r, e.mergeFields) : this.firestore.HT.bc(i, r);
                      return this.QT.write(o.Rc(this.kc, Fi.ft()));
                  }),
                  (Sl.prototype.update = function (t, e) {
                      for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                      return (
                          (n =
                              "string" == typeof t || t instanceof Yh
                                  ? (xh("DocumentReference.update", arguments, 2), this.firestore.HT.Cc("DocumentReference.update", t, e, r))
                                  : (Dh("DocumentReference.update", arguments, 1), this.firestore.HT.Dc("DocumentReference.update", t))),
                          this.QT.write(n.Rc(this.kc, Fi.exists(!0)))
                      );
                  }),
                  (Sl.prototype.delete = function () {
                      return Dh("DocumentReference.delete", arguments, 0), this.QT.write([new Qi(this.kc, Fi.ft())]);
                  }),
                  (Sl.prototype.onSnapshot = function () {
                      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                      Oh("DocumentReference.onSnapshot", arguments, 1, 4);
                      var n,
                          r = { includeMetadataChanges: !1 },
                          i = 0;
                      "object" != typeof t[i] ||
                          ol(t[i]) ||
                          (Fh("DocumentReference.onSnapshot", (r = t[i]), ["includeMetadataChanges"]), Lh("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), i++);
                      var o = { includeMetadataChanges: r.includeMetadataChanges };
                      return (
                          (n = ol(t[i])
                              ? t[i]
                              : (Rh("DocumentReference.onSnapshot", "function", i, t[i]),
                                Ph("DocumentReference.onSnapshot", "function", i + 1, t[i + 1]),
                                Ph("DocumentReference.onSnapshot", "function", i + 2, t[i + 2]),
                                { next: t[i], error: t[i + 1], complete: t[i + 2] })),
                          this.uE(o, n)
                      );
                  }),
                  (Sl.prototype.uE = function (t, n) {
                      var r = this,
                          e = function (t) {
                              console.error("Uncaught Error in onSnapshot:", t);
                          };
                      n.error && (e = n.error.bind(n));
                      var i = new Xf({
                              next: function (t) {
                                  if (n.next) {
                                      var e = t.docs.get(r.kc);
                                      n.next(new vl(r.firestore, r.kc, e, t.fromCache, t.hasPendingWrites, r.rE));
                                  }
                              },
                              error: e,
                          }),
                          o = this.QT.listen(_o.Wt(this.kc.path), i, t);
                      return function () {
                          i.CT(), r.QT.nl(o);
                      };
                  }),
                  (Sl.prototype.get = function (n) {
                      var r = this;
                      return (
                          Oh("DocumentReference.get", arguments, 0, 1),
                          Ll("DocumentReference.get", n),
                          new Promise(function (e, t) {
                              n && "cache" === n.source
                                  ? r.firestore
                                        .UT()
                                        .vT(r.kc)
                                        .then(function (t) {
                                            e(new vl(r.firestore, r.kc, t, !0, t instanceof To && t.At, r.rE));
                                        }, t)
                                  : r.cE(e, t, n);
                          })
                      );
                  }),
                  (Sl.prototype.cE = function (e, n, r) {
                      var i = this.uE(
                          { includeMetadataChanges: !0, Mf: !0 },
                          {
                              next: function (t) {
                                  i(),
                                      !t.exists && t.metadata.fromCache
                                          ? n(new kr(Sr.UNAVAILABLE, "Failed to get document because the client is offline."))
                                          : t.exists && t.metadata.fromCache && r && "server" === r.source
                                          ? n(
                                                new kr(
                                                    Sr.UNAVAILABLE,
                                                    'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                                                )
                                            )
                                          : e(t);
                              },
                              error: n,
                          }
                      );
                  }),
                  (Sl.prototype.withConverter = function (t) {
                      return new Sl(this.kc, this.firestore, t);
                  }),
                  Sl),
              yl =
                  ((_l.prototype.isEqual = function (t) {
                      return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
                  }),
                  _l),
              vl =
                  ((Al.prototype.data = function (t) {
                      if ((Oh("DocumentSnapshot.data", arguments, 0, 1), (t = Vl("DocumentSnapshot.data", t)), this._E)) {
                          if (this.rE) {
                              var e = new gl(this.iE, this.kc, this._E, this.lE, this.dE);
                              return this.rE.fromFirestore(e, t);
                          }
                          return new al(this.iE, this.iE.sE(), t.serverTimestamps, void 0).NT(this._E.Mt());
                      }
                  }),
                  (Al.prototype.get = function (t, e) {
                      if ((Oh("DocumentSnapshot.get", arguments, 1, 2), (e = Vl("DocumentSnapshot.get", e)), this._E)) {
                          var n = this._E.data().field(Oc("DocumentSnapshot.get", t));
                          if (null !== n) return new al(this.iE, this.iE.sE(), e.serverTimestamps, this.rE).NT(n);
                      }
                  }),
                  Object.defineProperty(Al.prototype, "id", {
                      get: function () {
                          return this.kc.path.O();
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Object.defineProperty(Al.prototype, "ref", {
                      get: function () {
                          return new dl(this.kc, this.iE, this.rE);
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Object.defineProperty(Al.prototype, "exists", {
                      get: function () {
                          return null !== this._E;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Object.defineProperty(Al.prototype, "metadata", {
                      get: function () {
                          return new yl(this.dE, this.lE);
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (Al.prototype.isEqual = function (t) {
                      if (!(t instanceof Al)) throw Bh("isEqual", "DocumentSnapshot", 1, t);
                      return this.iE === t.iE && this.lE === t.lE && this.kc.isEqual(t.kc) && (null === this._E ? null === t._E : this._E.isEqual(t._E)) && this.rE === t.rE;
                  }),
                  Al),
              gl =
                  (n(Nl, (ul = vl)),
                  (Nl.prototype.data = function (t) {
                      return ul.prototype.data.call(this, t);
                  }),
                  Nl),
              ml =
                  ((Il.prototype.where = function (t, e, n) {
                      Dh("Query.where", arguments, 3), qh("Query.where", 3, n);
                      var r,
                          i = (function (t, e) {
                              if (
                                  !t.some(function (t) {
                                      return t === e;
                                  })
                              )
                                  throw new kr(Sr.INVALID_ARGUMENT, "Invalid value " + jh(e) + " provided to function Query.where() for its " + zh(2) + " argument. Acceptable values: " + t.join(", "));
                              return e;
                          })(["<", "<=", "==", ">=", ">", "array-contains", "in", "array-contains-any"], e),
                          o = Oc("Query.where", t);
                      if (o.Y()) {
                          if ("array-contains" === i || "array-contains-any" === i) throw new kr(Sr.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + i + "' queries on FieldPath.documentId().");
                          if ("in" === i) {
                              this.TE(n, i);
                              for (var s = [], u = 0, a = n; u < a.length; u++) {
                                  var h = a[u];
                                  s.push(this.EE(h));
                              }
                              r = { arrayValue: { values: s } };
                          } else r = this.EE(n);
                      } else ("in" !== i && "array-contains-any" !== i) || this.TE(n, i), (r = this.firestore.HT.Fc("Query.where", n, "in" === i));
                      var c = So.create(o, i, r);
                      return this.IE(c), new Il(this.fE.Gt(c), this.firestore, this.rE);
                  }),
                  (Il.prototype.orderBy = function (t, e) {
                      var n;
                      if ((Oh("Query.orderBy", arguments, 1, 2), Ph("Query.orderBy", "non-empty string", 2, e), void 0 === e || "asc" === e)) n = "asc";
                      else {
                          if ("desc" !== e) throw new kr(Sr.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + e + "', expected 'asc' or 'desc'.");
                          n = "desc";
                      }
                      if (null !== this.fE.startAt) throw new kr(Sr.INVALID_ARGUMENT, "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().");
                      if (null !== this.fE.endAt) throw new kr(Sr.INVALID_ARGUMENT, "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().");
                      var r = Oc("Query.orderBy", t),
                          i = new Vo(r, n);
                      return this.wE(i), new Il(this.fE.zt(i), this.firestore, this.rE);
                  }),
                  (Il.prototype.limit = function (t) {
                      return Dh("Query.limit", arguments, 1), Rh("Query.limit", "number", 1, t), Gh("Query.limit", 1, t), new Il(this.fE.Ht(t), this.firestore, this.rE);
                  }),
                  (Il.prototype.limitToLast = function (t) {
                      return Dh("Query.limitToLast", arguments, 1), Rh("Query.limitToLast", "number", 1, t), Gh("Query.limitToLast", 1, t), new Il(this.fE.Yt(t), this.firestore, this.rE);
                  }),
                  (Il.prototype.startAt = function (t) {
                      for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                      xh("Query.startAt", arguments, 1);
                      var r = this.RE("Query.startAt", t, e, !0);
                      return new Il(this.fE.Jt(r), this.firestore, this.rE);
                  }),
                  (Il.prototype.startAfter = function (t) {
                      for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                      xh("Query.startAfter", arguments, 1);
                      var r = this.RE("Query.startAfter", t, e, !1);
                      return new Il(this.fE.Jt(r), this.firestore, this.rE);
                  }),
                  (Il.prototype.endBefore = function (t) {
                      for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                      xh("Query.endBefore", arguments, 1);
                      var r = this.RE("Query.endBefore", t, e, !0);
                      return new Il(this.fE.Xt(r), this.firestore, this.rE);
                  }),
                  (Il.prototype.endAt = function (t) {
                      for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                      xh("Query.endAt", arguments, 1);
                      var r = this.RE("Query.endAt", t, e, !1);
                      return new Il(this.fE.Xt(r), this.firestore, this.rE);
                  }),
                  (Il.prototype.isEqual = function (t) {
                      if (!(t instanceof Il)) throw Bh("isEqual", "Query", 1, t);
                      return this.firestore === t.firestore && this.fE.isEqual(t.fE);
                  }),
                  (Il.prototype.withConverter = function (t) {
                      return new Il(this.fE, this.firestore, t);
                  }),
                  (Il.prototype.RE = function (t, e, n, r) {
                      if ((qh(t, 1, e), e instanceof vl)) {
                          if (0 < n.length) throw new kr(Sr.INVALID_ARGUMENT, "Too many arguments provided to " + t + "().");
                          var i = e;
                          if (!i.exists) throw new kr(Sr.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + t + "().");
                          return this.AE(i._E, r);
                      }
                      var o = [e].concat(n);
                      return this.mE(t, o, r);
                  }),
                  (Il.prototype.AE = function (t, e) {
                      for (var n = [], r = 0, i = this.fE.orderBy; r < i.length; r++) {
                          var o = i[r];
                          if (o.field.Y()) n.push(mi(this.firestore.Nc, t.key));
                          else {
                              var s = t.field(o.field);
                              if (si(s))
                                  throw new kr(
                                      Sr.INVALID_ARGUMENT,
                                      'Invalid query. You are trying to start or end a query using a document for which the field "' +
                                          o.field +
                                          '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)'
                                  );
                              if (null === s) {
                                  var u = o.field.j();
                                  throw new kr(Sr.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + u + "' (used as the orderBy) does not exist.");
                              }
                              n.push(s);
                          }
                      }
                      return new Po(n, e);
                  }),
                  (Il.prototype.mE = function (t, e, n) {
                      var r = this.fE.xt;
                      if (e.length > r.length) throw new kr(Sr.INVALID_ARGUMENT, "Too many arguments provided to " + t + "(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses");
                      for (var i = [], o = 0; o < e.length; o++) {
                          var s = e[o];
                          if (r[o].field.Y()) {
                              if ("string" != typeof s) throw new kr(Sr.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + t + "(), but got a " + typeof s);
                              if (!this.fE._e() && -1 !== s.indexOf("/"))
                                  throw new kr(
                                      Sr.INVALID_ARGUMENT,
                                      "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + t + "() must be a plain document ID, but '" + s + "' contains a slash."
                                  );
                              var u = this.fE.path.child(Cr.K(s));
                              if (!Xr.et(u))
                                  throw new kr(
                                      Sr.INVALID_ARGUMENT,
                                      "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " +
                                          t +
                                          "() must result in a valid document path, but '" +
                                          u +
                                          "' is not because it contains an odd number of segments."
                                  );
                              var a = new Xr(u);
                              i.push(mi(this.firestore.Nc, a));
                          } else {
                              var h = this.firestore.HT.Fc(t, s);
                              i.push(h);
                          }
                      }
                      return new Po(i, n);
                  }),
                  (Il.prototype.onSnapshot = function () {
                      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                      Oh("Query.onSnapshot", arguments, 1, 4);
                      var n,
                          r = {},
                          i = 0;
                      return (
                          "object" != typeof t[i] || ol(t[i]) || (Fh("Query.onSnapshot", (r = t[i]), ["includeMetadataChanges"]), Lh("Query.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), i++),
                          (n = ol(t[i])
                              ? t[i]
                              : (Rh("Query.onSnapshot", "function", i, t[i]), Ph("Query.onSnapshot", "function", i + 1, t[i + 1]), Ph("Query.onSnapshot", "function", i + 2, t[i + 2]), { next: t[i], error: t[i + 1], complete: t[i + 2] })),
                          this.PE(this.fE),
                          this.uE(r, n)
                      );
                  }),
                  (Il.prototype.uE = function (t, e) {
                      var n = this,
                          r = function (t) {
                              console.error("Uncaught Error in onSnapshot:", t);
                          };
                      e.error && (r = e.error.bind(e));
                      var i = new Xf({
                              next: function (t) {
                                  e.next && e.next(new wl(n.firestore, n.fE, t, n.rE));
                              },
                              error: r,
                          }),
                          o = this.firestore.UT(),
                          s = o.listen(this.fE, i, t);
                      return function () {
                          i.CT(), o.nl(s);
                      };
                  }),
                  (Il.prototype.PE = function (t) {
                      if (t.ae() && 0 === t.xt.length) throw new kr(Sr.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
                  }),
                  (Il.prototype.get = function (n) {
                      var r = this;
                      return (
                          Oh("Query.get", arguments, 0, 1),
                          Ll("Query.get", n),
                          this.PE(this.fE),
                          new Promise(function (e, t) {
                              n && "cache" === n.source
                                  ? r.firestore
                                        .UT()
                                        .ST(r.fE)
                                        .then(function (t) {
                                            e(new wl(r.firestore, r.fE, t, r.rE));
                                        }, t)
                                  : r.cE(e, t, n);
                          })
                      );
                  }),
                  (Il.prototype.cE = function (e, n, r) {
                      var i = this.uE(
                          { includeMetadataChanges: !0, Mf: !0 },
                          {
                              next: function (t) {
                                  i(),
                                      t.metadata.fromCache && r && "server" === r.source
                                          ? n(
                                                new kr(
                                                    Sr.UNAVAILABLE,
                                                    'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                                                )
                                            )
                                          : e(t);
                              },
                              error: n,
                          }
                      );
                  }),
                  (Il.prototype.EE = function (t) {
                      if ("string" == typeof t) {
                          if ("" === t) throw new kr(Sr.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
                          if (!this.fE._e() && -1 !== t.indexOf("/"))
                              throw new kr(Sr.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + t + "' contains a '/' character.");
                          var e = this.fE.path.child(Cr.K(t));
                          if (!Xr.et(e))
                              throw new kr(
                                  Sr.INVALID_ARGUMENT,
                                  "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" +
                                      e +
                                      "' is not because it has an odd number of segments (" +
                                      e.length +
                                      ")."
                              );
                          return mi(this.firestore.Nc, new Xr(e));
                      }
                      if (t instanceof dl) {
                          var n = t;
                          return mi(this.firestore.Nc, n.kc);
                      }
                      throw new kr(Sr.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + jh(t) + ".");
                  }),
                  (Il.prototype.TE = function (t, e) {
                      if (!Array.isArray(t) || 0 === t.length) throw new kr(Sr.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
                      if (10 < t.length) throw new kr(Sr.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
                      if (0 <= t.indexOf(null)) throw new kr(Sr.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array.");
                      if (
                          0 <
                          t.filter(function (t) {
                              return Number.isNaN(t);
                          }).length
                      )
                          throw new kr(Sr.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.");
                  }),
                  (Il.prototype.IE = function (t) {
                      if (t instanceof So) {
                          var e = ["array-contains", "array-contains-any"],
                              n = ["in", "array-contains-any"],
                              r = 0 <= e.indexOf(t.op),
                              i = 0 <= n.indexOf(t.op);
                          if (t.ue()) {
                              var o = this.fE.jt();
                              if (null !== o && !o.isEqual(t.field))
                                  throw new kr(
                                      Sr.INVALID_ARGUMENT,
                                      "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + o.toString() + "' and '" + t.field.toString() + "'"
                                  );
                              var s = this.fE.Kt();
                              null !== s && this.VE(t.field, s);
                          } else if (i || r) {
                              var u = null;
                              if ((i && (u = this.fE.ce(n)), null === u && r && (u = this.fE.ce(e)), null != u))
                                  throw u === t.op
                                      ? new kr(Sr.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + t.op.toString() + "' filter.")
                                      : new kr(Sr.INVALID_ARGUMENT, "Invalid query. You cannot use '" + t.op.toString() + "' filters with '" + u.toString() + "' filters.");
                          }
                      }
                  }),
                  (Il.prototype.wE = function (t) {
                      if (null === this.fE.Kt()) {
                          var e = this.fE.jt();
                          null !== e && this.VE(e, t.field);
                      }
                  }),
                  (Il.prototype.VE = function (t, e) {
                      if (!e.isEqual(t))
                          throw new kr(
                              Sr.INVALID_ARGUMENT,
                              "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" +
                                  t.toString() +
                                  "' and so you must also use '" +
                                  t.toString() +
                                  "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" +
                                  e.toString() +
                                  "' instead."
                          );
                  }),
                  Il),
              wl =
                  (Object.defineProperty(Tl.prototype, "docs", {
                      get: function () {
                          var e = [];
                          return (
                              this.forEach(function (t) {
                                  return e.push(t);
                              }),
                              e
                          );
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Object.defineProperty(Tl.prototype, "empty", {
                      get: function () {
                          return this.pE.docs.B();
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Object.defineProperty(Tl.prototype, "size", {
                      get: function () {
                          return this.pE.docs.size;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (Tl.prototype.forEach = function (e, n) {
                      var r = this;
                      Oh("QuerySnapshot.forEach", arguments, 1, 2),
                          Rh("QuerySnapshot.forEach", "function", 1, e),
                          this.pE.docs.forEach(function (t) {
                              e.call(n, r.vE(t));
                          });
                  }),
                  Object.defineProperty(Tl.prototype, "query", {
                      get: function () {
                          return new ml(this.gE, this.iE, this.rE);
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (Tl.prototype.docChanges = function (t) {
                      t && (Fh("QuerySnapshot.docChanges", t, ["includeMetadataChanges"]), Lh("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
                      var e = !(!t || !t.includeMetadataChanges);
                      if (e && this.pE.hs) throw new kr(Sr.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
                      return (
                          (this.yE && this.bE === e) ||
                              ((this.yE = (function (i, e, o, s) {
                                  if (o.ss.B()) {
                                      var n = 0;
                                      return o.docChanges.map(function (t) {
                                          var e = new gl(i, t.doc.key, t.doc, o.fromCache, o.ns.has(t.doc.key), s);
                                          return t.doc, { type: "added", doc: e, oldIndex: -1, newIndex: n++ };
                                      });
                                  }
                                  var u = o.ss;
                                  return o.docChanges
                                      .filter(function (t) {
                                          return e || 3 !== t.type;
                                      })
                                      .map(function (t) {
                                          var e = new gl(i, t.doc.key, t.doc, o.fromCache, o.ns.has(t.doc.key), s),
                                              n = -1,
                                              r = -1;
                                          return (
                                              0 !== t.type && ((n = u.indexOf(t.doc.key)), (u = u.delete(t.doc.key))),
                                              1 !== t.type && (r = (u = u.add(t.doc)).indexOf(t.doc.key)),
                                              {
                                                  type: (function (t) {
                                                      switch (t) {
                                                          case 0:
                                                              return "added";
                                                          case 2:
                                                          case 3:
                                                              return "modified";
                                                          case 1:
                                                              return "removed";
                                                          default:
                                                              return Js();
                                                      }
                                                  })(t.type),
                                                  doc: e,
                                                  oldIndex: n,
                                                  newIndex: r,
                                              }
                                          );
                                      });
                              })(this.iE, e, this.pE, this.rE)),
                              (this.bE = e)),
                          this.yE
                      );
                  }),
                  (Tl.prototype.isEqual = function (t) {
                      if (!(t instanceof Tl)) throw Bh("isEqual", "QuerySnapshot", 1, t);
                      return this.iE === t.iE && this.gE.isEqual(t.gE) && this.pE.isEqual(t.pE) && this.rE === t.rE;
                  }),
                  (Tl.prototype.vE = function (t) {
                      return new gl(this.iE, t.key, t, this.metadata.fromCache, this.pE.ns.has(t.key), this.rE);
                  }),
                  Tl),
              bl =
                  (n(El, (sl = ml)),
                  Object.defineProperty(El.prototype, "id", {
                      get: function () {
                          return this.fE.path.O();
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Object.defineProperty(El.prototype, "parent", {
                      get: function () {
                          var t = this.fE.path.M();
                          return t.B() ? null : new dl(new Xr(t), this.firestore);
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  Object.defineProperty(El.prototype, "path", {
                      get: function () {
                          return this.fE.path.j();
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (El.prototype.doc = function (t) {
                      if ((Oh("CollectionReference.doc", arguments, 0, 1), 0 === arguments.length && (t = eu.cn()), Rh("CollectionReference.doc", "non-empty string", 1, t), "" === t))
                          throw new kr(Sr.INVALID_ARGUMENT, "Document path must be a non-empty string");
                      var e = Cr.K(t);
                      return dl.eE(this.fE.path.child(e), this.firestore, this.rE);
                  }),
                  (El.prototype.add = function (t) {
                      Dh("CollectionReference.add", arguments, 1), Rh("CollectionReference.add", "object", 1, this.rE ? this.rE.toFirestore(t) : t);
                      var e = this.doc();
                      return e.set(t).then(function () {
                          return e;
                      });
                  }),
                  (El.prototype.withConverter = function (t) {
                      return new El(this.SE, this.firestore, t);
                  }),
                  El);
          function El(t, e, n) {
              var r = this;
              if (((r = sl.call(this, _o.Wt(t), e, n) || this).SE = t).length % 2 != 1)
                  throw new kr(Sr.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t.j() + " has " + t.length);
              return r;
          }
          function Tl(t, e, n, r) {
              (this.iE = t), (this.gE = e), (this.pE = n), (this.rE = r), (this.yE = null), (this.bE = null), (this.metadata = new yl(n.hasPendingWrites, n.fromCache));
          }
          function Il(t, e, n) {
              (this.fE = t), (this.firestore = e), (this.rE = n);
          }
          function Nl() {
              return (null !== ul && ul.apply(this, arguments)) || this;
          }
          function Al(t, e, n, r, i, o) {
              (this.iE = t), (this.kc = e), (this._E = n), (this.lE = r), (this.dE = i), (this.rE = o);
          }
          function _l(t, e) {
              (this.hasPendingWrites = t), (this.fromCache = e);
          }
          function Sl(t, e, n) {
              (this.kc = t), (this.firestore = e), (this.rE = n), (this.QT = this.firestore.UT());
          }
          function kl(t) {
              (this.iE = t), (this.hE = []), (this.oE = !1);
          }
          function Dl(t, e) {
              (this.iE = t), (this.nE = e);
          }
          function xl(t, e, n) {
              var r = this;
              if (
                  (void 0 === n && (n = new Kf()),
                  (this.BT = null),
                  (this.qT = new Ou()),
                  (this.INTERNAL = {
                      delete: function () {
                          return y(r, void 0, void 0, function () {
                              return v(this, function (t) {
                                  switch (t.label) {
                                      case 0:
                                          return this.UT(), [4, this.QT.terminate()];
                                      case 1:
                                          return t.sent(), [2];
                                  }
                              });
                          });
                      },
                  }),
                  "object" == typeof t.options)
              ) {
                  var i = t;
                  (this.BT = i), (this.Nc = xl.WT(i)), (this.jT = i.name), (this.KT = new xr(e));
              } else {
                  var o = t;
                  if (!o.projectId) throw new kr(Sr.INVALID_ARGUMENT, "Must provide projectId");
                  (this.Nc = new uu(o.projectId, o.database)), (this.jT = "[DEFAULT]"), (this.KT = new Dr());
              }
              (this.GT = n), (this.zT = new cl({})), (this.HT = new Nc(this.Nc));
          }
          function Ol(t) {
              var e, n;
              if (void 0 === t.host) {
                  if (void 0 !== t.ssl) throw new kr(Sr.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
                  (this.host = "firestore.googleapis.com"), (this.ssl = !0);
              } else Vh("settings", "non-empty string", "host", t.host), (this.host = t.host), Lh("settings", "boolean", "ssl", t.ssl), (this.ssl = null === (e = t.ssl) || void 0 === e || e);
              if (
                  (Fh("settings", t, ["host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling"]),
                  Lh("settings", "object", "credentials", t.credentials),
                  (this.credentials = t.credentials),
                  Lh("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots),
                  !0 === t.timestampsInSnapshots
                      ? Xs("The setting 'timestampsInSnapshots: true' is no longer required and should be removed.")
                      : !1 === t.timestampsInSnapshots && Xs("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."),
                  (this.timestampsInSnapshots = null === (n = t.timestampsInSnapshots) || void 0 === n || n),
                  Lh("settings", "number", "cacheSizeBytes", t.cacheSizeBytes),
                  void 0 === t.cacheSizeBytes)
              )
                  this.cacheSizeBytes = Uu.mh;
              else {
                  if (t.cacheSizeBytes !== hl && t.cacheSizeBytes < Uu.Ah) throw new kr(Sr.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + Uu.Ah);
                  this.cacheSizeBytes = t.cacheSizeBytes;
              }
              Lh("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), (this.forceLongPolling = void 0 !== t.experimentalForceLongPolling && t.experimentalForceLongPolling);
          }
          function Rl(t, e, n, r) {
              (this.firestore = t), (this.timestampsInSnapshots = e), (this.FT = n), (this.converter = r);
          }
          function Pl(t, e) {
              if (void 0 === e) return { merge: !1 };
              if (
                  (Fh(t, e, ["merge", "mergeFields"]),
                  Lh(t, "boolean", "merge", e.merge),
                  (n = t),
                  void 0 !== (r = e.mergeFields) &&
                      (function (t, e, n, r) {
                          if (!(n instanceof Array)) throw new kr(Sr.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + jh(n));
                          for (var i = 0; i < n.length; ++i)
                              if (!r(n[i])) throw new kr(Sr.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be a string or a FieldPath, but the value at index " + i + " was: " + jh(n[i]));
                      })(n, "mergeFields", r, function (t) {
                          return "string" == typeof t || t instanceof Yh;
                      }),
                  void 0 !== e.mergeFields && void 0 !== e.merge)
              )
                  throw new kr(Sr.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
              var n, r;
              return e;
          }
          function Vl(t, e) {
              return void 0 === e ? {} : (Fh(t, e, ["serverTimestamps"]), Ch(t, 0, "serverTimestamps", e.serverTimestamps, ["estimate", "previous", "none"]), e);
          }
          function Ll(t, e) {
              Ph(t, "object", 1, e), e && (Fh(t, e, ["source"]), Ch(t, 0, "source", e.source, ["default", "server", "cache"]));
          }
          function Cl(t, e, n) {
              if (e instanceof dl) {
                  if (e.firestore !== n) throw new kr(Sr.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
                  return e;
              }
              throw Bh(t, "DocumentReference", 1, e);
          }
          function Ml(t, e, n) {
              var r;
              return t ? ((r = t.toFirestore(e)), (n = "toFirestore() in " + n)) : (r = e), [r, n];
          }
          function Ul(t, e) {
              function n() {
                  var t = "This constructor is private.";
                  throw (e && ((t += " "), (t += e)), new kr(Sr.INVALID_ARGUMENT, t));
              }
              return (n.prototype = t.prototype), Object.assign(n, t), n;
          }
          var jl,
              ql = Ul(fl, "Use firebase.firestore() instead."),
              Fl = Ul(ll, "Use firebase.firestore().runTransaction() instead."),
              Bl = Ul(pl, "Use firebase.firestore().batch() instead."),
              Gl = Ul(dl, "Use firebase.firestore().doc() instead."),
              zl = Ul(vl),
              Wl = Ul(gl),
              Ql = Ul(ml),
              Kl = Ul(wl),
              Hl = Ul(bl, "Use firebase.firestore().collection() instead."),
              Yl = Ul(
                  ((ap.delete = function () {
                      return kh("FieldValue.delete", arguments), new oc();
                  }),
                  (ap.serverTimestamp = function () {
                      return kh("FieldValue.serverTimestamp", arguments), new sc();
                  }),
                  (ap.arrayUnion = function () {
                      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                      return xh("FieldValue.arrayUnion", arguments, 1), new uc(t);
                  }),
                  (ap.arrayRemove = function () {
                      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                      return xh("FieldValue.arrayRemove", arguments, 1), new ac(t);
                  }),
                  (ap.increment = function (t) {
                      return Rh("FieldValue.increment", "number", 1, t), Dh("FieldValue.increment", arguments, 1), new hc(t);
                  }),
                  (ap.prototype.isEqual = function (t) {
                      return this === t;
                  }),
                  ap),
                  "Use FieldValue.<field>() instead."
              ),
              Xl = Ul(Hh, "Use Blob.fromUint8Array() or Blob.fromBase64String() instead."),
              $l = {
                  Firestore: ql,
                  GeoPoint: cc,
                  Timestamp: Pr,
                  Blob: Xl,
                  Transaction: Fl,
                  WriteBatch: Bl,
                  DocumentReference: Gl,
                  DocumentSnapshot: zl,
                  Query: Ql,
                  QueryDocumentSnapshot: Wl,
                  QuerySnapshot: Kl,
                  CollectionReference: Hl,
                  FieldPath: Yh,
                  FieldValue: Yl,
                  setLogLevel: fl.setLogLevel,
                  CACHE_SIZE_UNLIMITED: hl,
              },
              Jl = ((up.prototype.x_ = function (t) {}), (up.prototype.hu = function () {}), up),
              Zl =
                  ((sp.prototype.x_ = function (t) {
                      this.kE.push(t);
                  }),
                  (sp.prototype.hu = function () {
                      window.removeEventListener("online", this.DE), window.removeEventListener("offline", this.FE);
                  }),
                  (sp.prototype.$E = function () {
                      window.addEventListener("online", this.DE), window.addEventListener("offline", this.FE);
                  }),
                  (sp.prototype.CE = function () {
                      Ys("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
                      for (var t = 0, e = this.kE; t < e.length; t++) (0, e[t])(0);
                  }),
                  (sp.prototype.NE = function () {
                      Ys("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
                      for (var t = 0, e = this.kE; t < e.length; t++) (0, e[t])(1);
                  }),
                  (sp.Uh = function () {
                      return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
                  }),
                  sp),
              tp =
                  ((op.prototype.t_ = function (t) {
                      this.OE = t;
                  }),
                  (op.prototype.Hc = function (t) {
                      this.xE = t;
                  }),
                  (op.prototype.onMessage = function (t) {
                      this.BE = t;
                  }),
                  (op.prototype.close = function () {
                      this.LE();
                  }),
                  (op.prototype.send = function (t) {
                      this.ME(t);
                  }),
                  (op.prototype.qE = function () {
                      this.OE();
                  }),
                  (op.prototype.UE = function (t) {
                      this.xE(t);
                  }),
                  (op.prototype.QE = function (t) {
                      this.BE(t);
                  }),
                  op),
              ep = { BatchGetDocuments: "batchGet", Commit: "commit" },
              np = "gl-js/ fire/" + Er,
              rp =
                  ((ip.prototype.jE = function (t, e) {
                      if (e) for (var n in e.o) e.o.hasOwnProperty(n) && (t[n] = e.o[n]);
                      t["X-Goog-Api-Client"] = np;
                  }),
                  (ip.prototype.l_ = function (a, r, i) {
                      var h = this,
                          c = this.KE(a);
                      return new Promise(function (o, s) {
                          var u = new br();
                          u.listenOnce(mr.COMPLETE, function () {
                              try {
                                  switch (u.getLastErrorCode()) {
                                      case gr.NO_ERROR:
                                          var t = u.getResponseJson();
                                          Ys("Connection", "XHR received:", JSON.stringify(t)), o(t);
                                          break;
                                      case gr.TIMEOUT:
                                          Ys("Connection", 'RPC "' + a + '" timed out'), s(new kr(Sr.DEADLINE_EXCEEDED, "Request time out"));
                                          break;
                                      case gr.HTTP_ERROR:
                                          var e = u.getStatus();
                                          if ((Ys("Connection", 'RPC "' + a + '" failed with status:', e, "response text:", u.getResponseText()), 0 < e)) {
                                              var n = u.getResponseJson().error;
                                              if (n && n.status && n.message) {
                                                  var r = ((i = n.status.toLowerCase().replace("_", "-")), 0 <= Object.values(Sr).indexOf(i) ? i : Sr.UNKNOWN);
                                                  s(new kr(r, n.message));
                                              } else s(new kr(Sr.UNKNOWN, "Server responded with status " + u.getStatus()));
                                          } else Ys("Connection", 'RPC "' + a + '" failed'), s(new kr(Sr.UNAVAILABLE, "Connection failed."));
                                          break;
                                      default:
                                          Js();
                                  }
                              } finally {
                                  Ys("Connection", 'RPC "' + a + '" completed.');
                              }
                              var i;
                          });
                          var t = Object.assign({}, r);
                          delete t.database;
                          var e = JSON.stringify(t);
                          Ys("Connection", "XHR sending: ", c + " " + e);
                          var n = { "Content-Type": "text/plain" };
                          h.jE(n, i), u.send(c, "POST", e, n, 15);
                      });
                  }),
                  (ip.prototype.d_ = function (t, e, n) {
                      return this.l_(t, e, n);
                  }),
                  (ip.prototype.e_ = function (t, e) {
                      var n,
                          r,
                          i = [this.WE, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
                          o = vr(),
                          s = {
                              httpSessionIdParam: "gsessionid",
                              initMessageHeaders: {},
                              messageUrlParams: { database: "projects/" + this.ii.projectId + "/databases/" + this.ii.database },
                              sendRawJson: !0,
                              supportsCrossDomainXhr: !0,
                              internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
                              forceLongPolling: this.forceLongPolling,
                          };
                      this.jE(s.initMessageHeaders, e),
                          ("undefined" != typeof window && (window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p())) ||
                              ("object" == typeof navigator && "ReactNative" === navigator.product) ||
                              0 <= p().indexOf("Electron/") ||
                              0 <= (r = p()).indexOf("MSIE ") ||
                              0 <= r.indexOf("Trident/") ||
                              0 <= p().indexOf("MSAppHost/") ||
                              ("object" == typeof (n = "object" == typeof chrome ? chrome.runtime : "object" == typeof browser ? browser.runtime : void 0) && void 0 !== n.id) ||
                              (s.httpHeadersOverwriteParam = "$httpHeaders");
                      var u = i.join("");
                      function a(t, e) {
                          h.listen(t, function (t) {
                              try {
                                  e(t);
                              } catch (t) {
                                  setTimeout(function () {
                                      throw t;
                                  }, 0);
                              }
                          });
                      }
                      Ys("Connection", "Creating WebChannel: " + u + " " + s);
                      var h = o.createWebChannel(u, s),
                          c = !1,
                          f = !1,
                          l = new tp({
                              ME: function (t) {
                                  f
                                      ? Ys("Connection", "Not sending because WebChannel is closed:", t)
                                      : (c || (Ys("Connection", "Opening WebChannel transport."), h.open(), (c = !0)), Ys("Connection", "WebChannel sending:", t), h.send(t));
                              },
                              LE: function () {
                                  return h.close();
                              },
                          });
                      return (
                          a(wr.EventType.OPEN, function () {
                              f || Ys("Connection", "WebChannel transport opened.");
                          }),
                          a(wr.EventType.CLOSE, function () {
                              f || ((f = !0), Ys("Connection", "WebChannel transport closed"), l.UE());
                          }),
                          a(wr.EventType.ERROR, function (t) {
                              f || ((f = !0), Ys("Connection", "WebChannel transport errored:", t), l.UE(new kr(Sr.UNAVAILABLE, "The operation could not be completed")));
                          }),
                          a(wr.EventType.MESSAGE, function (t) {
                              var e;
                              if (!f) {
                                  var n = t.data[0];
                                  Zs(!!n);
                                  var r = n.error || (null === (e = n[0]) || void 0 === e ? void 0 : e.error);
                                  if (r) {
                                      Ys("Connection", "WebChannel received error:", r);
                                      var i = r.status,
                                          o = (function () {
                                              var t = co[i];
                                              if (void 0 !== t) return $o(t);
                                          })(),
                                          s = r.message;
                                      void 0 === o && ((o = Sr.INTERNAL), (s = "Unknown error status: " + i + " with message " + r.message)), (f = !0), l.UE(new kr(o, s)), h.close();
                                  } else Ys("Connection", "WebChannel received:", n), l.QE(n);
                              }
                          }),
                          setTimeout(function () {
                              l.qE();
                          }, 0),
                          l
                      );
                  }),
                  (ip.prototype.KE = function (t) {
                      var e = ep[t];
                      return this.WE + "/v1/projects/" + this.ii.projectId + "/databases/" + this.ii.database + "/documents:" + e;
                  }),
                  ip);
          function ip(t) {
              this.ii = t.ii;
              var e = t.ssl ? "https" : "http";
              (this.WE = e + "://" + t.host), (this.forceLongPolling = t.forceLongPolling);
          }
          function op(t) {
              (this.ME = t.ME), (this.LE = t.LE);
          }
          function sp() {
              var t = this;
              (this.DE = function () {
                  return t.CE();
              }),
                  (this.FE = function () {
                      return t.NE();
                  }),
                  (this.kE = []),
                  this.$E();
          }
          function up() {}
          function ap() {}
          function hp() {
              this.oc = "undefined" != typeof atob;
          }
          zs.an(
              (Object.defineProperty(hp.prototype, "document", {
                  get: function () {
                      return "undefined" != typeof document ? document : null;
                  },
                  enumerable: !0,
                  configurable: !0,
              }),
              Object.defineProperty(hp.prototype, "window", {
                  get: function () {
                      return "undefined" != typeof window ? window : null;
                  },
                  enumerable: !0,
                  configurable: !0,
              }),
              (hp.prototype.gT = function (t) {
                  return Promise.resolve(new rp(t));
              }),
              (hp.prototype.wT = function () {
                  return new (Zl.Uh() ? Zl : Jl)();
              }),
              (hp.prototype.yc = function (t) {
                  return new Fs(t, { hi: !0 });
              }),
              (hp.prototype.un = function (t) {
                  return JSON.stringify(t);
              }),
              (hp.prototype.atob = function (t) {
                  return atob(t);
              }),
              (hp.prototype.btoa = function (t) {
                  return btoa(t);
              }),
              (hp.prototype._n = function (t) {
                  var e = "undefined" != typeof self && (self.crypto || self.msCrypto),
                      n = new Uint8Array(t);
                  if (e) e.getRandomValues(n);
                  else for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
                  return n;
              }),
              new hp())
          ),
              (jl = cp).INTERNAL.registerComponent(
                  new E(
                      "firestore",
                      function (t) {
                          return (e = t.getProvider("app").getImmediate()), (n = t.getProvider("auth-internal")), new fl(e, n, new Hf());
                          var e, n;
                      },
                      "PUBLIC"
                  ).setServiceProps(Object.assign({}, $l))
              ),
              jl.registerVersion("@firebase/firestore", "1.14.4");
      }.apply(this, arguments));
  } catch (t) {
      throw (console.error(t), new Error("Cannot instantiate firebase-firestore.js - be sure to load firebase-app.js first."));
  }
});
//# sourceMappingURL=firebase-firestore.js.map
