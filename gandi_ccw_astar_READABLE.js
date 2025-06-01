/*! For license information please see gandi_ccw_astar.7e7c1915.js.LICENSE.txt */
"use strict";
(self.webpackChunkscratch_extensions = self.webpackChunkscratch_extensions || []).push([
    [8533], {
        78058: (n, e, t) => {
            t.r(e), t.d(e, {
                default: () => H
            });
            var r = t(80673),
                a = t.n(r),
                o = t(29122),
                i = t.n(o),
                s = t(83392),
                l = t.n(s),
                u = t(68496),
                c = t.n(u),
                h = {
                    name: "A* Odyssey",
                    document: "📖 Document",
                    documentURL: "https://getgandi.com/extensions/odyssey",
                    divSetup: "🔧 Setup",
                    divPathFinding: "🛰 Path Finding",
                    divDebug: "💬 Debug",
                    divListUtils: "📝 List Utils",
                    divObstacle: "🚫 Obstacle",
                    toggleDebugWindow: "🩻 Toggle Debug Window",
                    createMap: "🐌 load an obstacle to a map [NAME], the obstacle from [SPRITE]'s costume [COSTUME] with options dX:[DX] dY:[DY] scale:[SCALE]%",
                    clearMap: "clear map [NAME], x:[X] y:[Y] width:[WIDTH] height:[HEIGHT]",
                    findPath: "🐌 find path on [MAP] from x:[SX] y:[SY] to x:[EX] y:[EY], and fill to [LIST] and [METHOD]",
                    findPathBetweenSprites: "🐌 find path on [MAP] from [START] to [END], and fill to [LIST] and [METHOD]",
                    drawDebugCanvasWithPath: "draw debug canvas with [MAP]",
                    fillPathToList: "fill path of the map [MAP] to list [LIST]",
                    itemOfList: "#[INDEX] of [LIST]'s #[IDX] item",
                    isWalkable: "is map [MAP]'s x:[X] y:[Y] walkable?",
                    isCurrentTargetOnWalkable: "in map [MAP] walkable area?",
                    fillMethodSmooth: "smooth result",
                    fillMethodRaw: "keep raw result",
                    fastOrAccurate: "choose the [PATH_FINDING]'s [ALGORITHM] algorithm",
                    pathFindingAstar: "A*",
                    pathFindingJps: "JPS",
                    fastOrAccurateAccurate: "more accurate",
                    fastOrAccurateFaster: "faster",
                    addRectangleObstacle: "add rectangle obstacle to [MAP] at x:[X] y:[Y] width:[WIDTH] height:[HEIGHT]"
                },
                p = {
                    name: "A* 奥德赛",
                    document: "📖 文档",
                    documentURL: "https://getgandi.com/cn/extensions/odyssey",
                    divSetup: "🔧 设置",
                    divPathFinding: "🛰 寻路",
                    divDebug: "💬 调试",
                    divListUtils: "📝 列表工具",
                    divObstacle: "🚫 障碍物",
                    toggleDebugWindow: "🩻 显示/隐藏调试窗口",
                    createMap: "🐌 为地图 [NAME] 载入从 [SPRITE] 的 #[COSTUME] 造型创建的障碍物，并且 x 偏移:[DX] y 偏移:[DY] 大小:[SCALE]%",
                    clearMap: "清除名为 [NAME] 地图上的障碍物, 区域 x:[X] y:[Y] 宽:[WIDTH] 高:[HEIGHT]",
                    findPath: "🐌 在地图 [MAP] 上寻路，起点 x:[SX] y:[SY] 终点 x:[EX] y:[EY]，填充结果到 [LIST] 并且 [METHOD]",
                    findPathBetweenSprites: "🐌 在地图 [MAP] 上寻路，从 [START] 到 [END]，填充结果到 [LIST] 并且 [METHOD]",
                    drawDebugCanvasWithPath: "在调试窗口中画出地图 [MAP] 及寻路结果",
                    fillPathToList: "填充地图 [MAP] 的寻路结果到列表 [LIST]",
                    itemOfList: "[LIST] 的第 [INDEX] 项内容中的第 [IDX] 部分",
                    isWalkable: "地图 [MAP] 的 x:[X] y:[Y] 不是障碍?",
                    isCurrentTargetOnWalkable: "在地图 [MAP] 的非障碍区?",
                    fillMethodSmooth: "简化结果",
                    fillMethodRaw: "保持原始结果",
                    show: "显示",
                    hide: "隐藏",
                    addRectangleObstacle: "为[MAP]添加一个障碍区，在 x:[X] y:[Y] 宽:[WIDTH] 高:[HEIGHT]",
                    fastOrAccurate: "选择 [PATH_FINDING] 的 [ALGORITHM] 算法",
                    pathFindingAstar: "A*",
                    pathFindingJps: "JPS",
                    fastOrAccurateAccurate: "更精确",
                    fastOrAccurateFaster: "更快"
                },
                d = t(49576),
                f = t(23279),
                m = t.n(f);

            function y(n, e) {
                for (var t = 0; t < e.length; t++) {
                    var r = e[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
                }
            }
            const g = new(function() {
                function n() {
                    ! function(n, e) {
                        if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), this.decodeImageCache = {}, this.imageCache = {}
                }
                var e, t;
                return e = n, (t = [{
                    key: "clearCache",
                    value: function() {
                        this.decodeImageCache = null, this.decodeImageCache = {}, Object.values(this.imageCache).length > 99 && (this.imageCache = null, this.imageCache = {})
                    }
                }, {
                    key: "decodeImage",
                    value: function(n) {
                        var e = this;
                        if (this.decodeImageCache[n.assetId]) return Promise.resolve(!0);
                        var t = m()((function() {
                            delete e.decodeImageCache[n.assetId]
                        }), 500);
                        if ("svg" === n.assetType.runtimeFormat) {
                            var r = n.decodeText();
                            return new Promise((function(a) {
                                var o = new Image;
                                o.onload = function() {
                                    return o.onload = null, e.decodeImageCache[n.assetId] = {
                                        bmp: o,
                                        removeDecode: t
                                    }, a(!0)
                                }, o.src = "data:image/svg+xml;utf8,".concat(encodeURIComponent(r))
                            }))
                        }
                        return createImageBitmap(new Blob([n.data], {
                            type: n.assetType.contentType
                        })).then((function(r) {
                            return e.decodeImageCache[n.assetId] = {
                                bmp: r,
                                removeDecode: t
                            }, !0
                        }))
                    }
                }]) && y(e.prototype, t), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), n
            }());
            var b = t(74138),
                w = t(93379),
                M = t.n(w),
                N = t(50043);
            M()(N.Z, {
                insert: "head",
                singleton: !1
            }), N.Z.locals;
            const v = t.p + "static/wasm/7dc984e9.wasm";
            var x = t(78299);

            function T(n) {
                return T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                    return typeof n
                } : function(n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                }, T(n)
            }

            function D() {
                D = function() {
                    return n
                };
                var n = {},
                    e = Object.prototype,
                    t = e.hasOwnProperty,
                    r = Object.defineProperty || function(n, e, t) {
                        n[e] = t.value
                    },
                    a = "function" == typeof Symbol ? Symbol : {},
                    o = a.iterator || "@@iterator",
                    i = a.asyncIterator || "@@asyncIterator",
                    s = a.toStringTag || "@@toStringTag";

                function l(n, e, t) {
                    return Object.defineProperty(n, e, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), n[e]
                }
                try {
                    l({}, "")
                } catch (n) {
                    l = function(n, e, t) {
                        return n[e] = t
                    }
                }

                function u(n, e, t, a) {
                    var o = e && e.prototype instanceof p ? e : p,
                        i = Object.create(o.prototype),
                        s = new A(a || []);
                    return r(i, "_invoke", {
                        value: N(n, t, s)
                    }), i
                }

                function c(n, e, t) {
                    try {
                        return {
                            type: "normal",
                            arg: n.call(e, t)
                        }
                    } catch (n) {
                        return {
                            type: "throw",
                            arg: n
                        }
                    }
                }
                n.wrap = u;
                var h = {};

                function p() {}

                function d() {}

                function f() {}
                var m = {};
                l(m, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    g = y && y(y(_([])));
                g && g !== e && t.call(g, o) && (m = g);
                var b = f.prototype = p.prototype = Object.create(m);

                function w(n) {
                    ["next", "throw", "return"].forEach((function(e) {
                        l(n, e, (function(n) {
                            return this._invoke(e, n)
                        }))
                    }))
                }

                function M(n, e) {
                    function a(r, o, i, s) {
                        var l = c(n[r], n, o);
                        if ("throw" !== l.type) {
                            var u = l.arg,
                                h = u.value;
                            return h && "object" == T(h) && t.call(h, "__await") ? e.resolve(h.__await).then((function(n) {
                                a("next", n, i, s)
                            }), (function(n) {
                                a("throw", n, i, s)
                            })) : e.resolve(h).then((function(n) {
                                u.value = n, i(u)
                            }), (function(n) {
                                return a("throw", n, i, s)
                            }))
                        }
                        s(l.arg)
                    }
                    var o;
                    r(this, "_invoke", {
                        value: function(n, t) {
                            function r() {
                                return new e((function(e, r) {
                                    a(n, t, e, r)
                                }))
                            }
                            return o = o ? o.then(r, r) : r()
                        }
                    })
                }

                function N(n, e, t) {
                    var r = "suspendedStart";
                    return function(a, o) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === a) throw o;
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                        for (t.method = a, t.arg = o;;) {
                            var i = t.delegate;
                            if (i) {
                                var s = v(i, t);
                                if (s) {
                                    if (s === h) continue;
                                    return s
                                }
                            }
                            if ("next" === t.method) t.sent = t._sent = t.arg;
                            else if ("throw" === t.method) {
                                if ("suspendedStart" === r) throw r = "completed", t.arg;
                                t.dispatchException(t.arg)
                            } else "return" === t.method && t.abrupt("return", t.arg);
                            r = "executing";
                            var l = c(n, e, t);
                            if ("normal" === l.type) {
                                if (r = t.done ? "completed" : "suspendedYield", l.arg === h) continue;
                                return {
                                    value: l.arg,
                                    done: t.done
                                }
                            }
                            "throw" === l.type && (r = "completed", t.method = "throw", t.arg = l.arg)
                        }
                    }
                }

                function v(n, e) {
                    var t = n.iterator[e.method];
                    if (void 0 === t) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (n.iterator.return && (e.method = "return", e.arg = void 0, v(n, e), "throw" === e.method)) return h;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var r = c(t, n.iterator, e.arg);
                    if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, h;
                    var a = r.arg;
                    return a ? a.done ? (e[n.resultName] = a.value, e.next = n.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, h) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, h)
                }

                function x(n) {
                    var e = {
                        tryLoc: n[0]
                    };
                    1 in n && (e.catchLoc = n[1]), 2 in n && (e.finallyLoc = n[2], e.afterLoc = n[3]), this.tryEntries.push(e)
                }

                function I(n) {
                    var e = n.completion || {};
                    e.type = "normal", delete e.arg, n.completion = e
                }

                function A(n) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], n.forEach(x, this), this.reset(!0)
                }

                function _(n) {
                    if (n) {
                        var e = n[o];
                        if (e) return e.call(n);
                        if ("function" == typeof n.next) return n;
                        if (!isNaN(n.length)) {
                            var r = -1,
                                a = function e() {
                                    for (; ++r < n.length;)
                                        if (t.call(n, r)) return e.value = n[r], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return a.next = a
                        }
                    }
                    return {
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = f, r(b, "constructor", {
                    value: f,
                    configurable: !0
                }), r(f, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(f, s, "GeneratorFunction"), n.isGeneratorFunction = function(n) {
                    var e = "function" == typeof n && n.constructor;
                    return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
                }, n.mark = function(n) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(n, f) : (n.__proto__ = f, l(n, s, "GeneratorFunction")), n.prototype = Object.create(b), n
                }, n.awrap = function(n) {
                    return {
                        __await: n
                    }
                }, w(M.prototype), l(M.prototype, i, (function() {
                    return this
                })), n.AsyncIterator = M, n.async = function(e, t, r, a, o) {
                    void 0 === o && (o = Promise);
                    var i = new M(u(e, t, r, a), o);
                    return n.isGeneratorFunction(t) ? i : i.next().then((function(n) {
                        return n.done ? n.value : i.next()
                    }))
                }, w(b), l(b, s, "Generator"), l(b, o, (function() {
                    return this
                })), l(b, "toString", (function() {
                    return "[object Generator]"
                })), n.keys = function(n) {
                    var e = Object(n),
                        t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var r = t.pop();
                                if (r in e) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, n.values = _, A.prototype = {
                    constructor: A,
                    reset: function(n) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(I), !n)
                            for (var e in this) "t" === e.charAt(0) && t.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var n = this.tryEntries[0].completion;
                        if ("throw" === n.type) throw n.arg;
                        return this.rval
                    },
                    dispatchException: function(n) {
                        if (this.done) throw n;
                        var e = this;

                        function r(t, r) {
                            return i.type = "throw", i.arg = n, e.next = t, r && (e.method = "next", e.arg = void 0), !!r
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a],
                                i = o.completion;
                            if ("root" === o.tryLoc) return r("end");
                            if (o.tryLoc <= this.prev) {
                                var s = t.call(o, "catchLoc"),
                                    l = t.call(o, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(n, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var a = this.tryEntries[r];
                            if (a.tryLoc <= this.prev && t.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var o = a;
                                break
                            }
                        }
                        o && ("break" === n || "continue" === n) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = n, i.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(i)
                    },
                    complete: function(n, e) {
                        if ("throw" === n.type) throw n.arg;
                        return "break" === n.type || "continue" === n.type ? this.next = n.arg : "return" === n.type ? (this.rval = this.arg = n.arg, this.method = "return", this.next = "end") : "normal" === n.type && e && (this.next = e), h
                    },
                    finish: function(n) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var t = this.tryEntries[e];
                            if (t.finallyLoc === n) return this.complete(t.completion, t.afterLoc), I(t), h
                        }
                    },
                    catch: function(n) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var t = this.tryEntries[e];
                            if (t.tryLoc === n) {
                                var r = t.completion;
                                if ("throw" === r.type) {
                                    var a = r.arg;
                                    I(t)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(n, e, t) {
                        return this.delegate = {
                            iterator: _(n),
                            resultName: e,
                            nextLoc: t
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, n
            }

            function I(n, e, t, r, a, o, i) {
                try {
                    var s = n[o](i),
                        l = s.value
                } catch (n) {
                    return void t(n)
                }
                s.done ? e(l) : Promise.resolve(l).then(r, a)
            }

            function A(n) {
                return function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var o = n.apply(e, t);

                        function i(n) {
                            I(o, r, a, i, s, "next", n)
                        }

                        function s(n) {
                            I(o, r, a, i, s, "throw", n)
                        }
                        i(void 0)
                    }))
                }
            }

            function _(n, e) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, e) {
                    var t = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != t) {
                        var r, a, o = [],
                            i = !0,
                            s = !1;
                        try {
                            for (t = t.call(n); !(i = (r = t.next()).done) && (o.push(r.value), !e || o.length !== e); i = !0);
                        } catch (n) {
                            s = !0, a = n
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return o
                    }
                }(n, e) || function(n, e) {
                    if (n) {
                        if ("string" == typeof n) return j(n, e);
                        var t = Object.prototype.toString.call(n).slice(8, -1);
                        return "Object" === t && n.constructor && (t = n.constructor.name), "Map" === t || "Set" === t ? Array.from(n) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? j(n, e) : void 0
                    }
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function j(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }

            function O(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(n);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function S(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? O(Object(t), !0).forEach((function(e) {
                        C(n, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return n
            }

            function k(n, e) {
                for (var t = 0; t < e.length; t++) {
                    var r = e[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
                }
            }

            function E(n, e) {
                return E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, e) {
                    return n.__proto__ = e, n
                }, E(n, e)
            }

            function L(n, e) {
                if (e && ("object" === T(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return U(n)
            }

            function U(n) {
                if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return n
            }

            function P(n) {
                return P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
                    return n.__proto__ || Object.getPrototypeOf(n)
                }, P(n)
            }

            function C(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }
            var R = "GandiAStarExtension",
                z = 640,
                Y = 360,
                H = function(n) {
                    ! function(n, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        n.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: n,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(n, "prototype", {
                            writable: !1
                        }), e && E(n, e)
                    }(b, n);
                    var e, t, r, o, s, u, f, m, y = (f = b, m = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (n) {
                            return !1
                        }
                    }(), function() {
                        var n, e = P(f);
                        if (m) {
                            var t = P(this).constructor;
                            n = Reflect.construct(e, arguments, t)
                        } else n = e.apply(this, arguments);
                        return L(this, n)
                    });

                    function b(n) {
                        var e;
                        if (function(n, e) {
                                if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, b), C(U(e = y.call(this, n, {
                                NS: R,
                                cn: p,
                                en: h
                            })), "_getWorker", (function(n) {
                                var t;
                                try {
                                    if (t = e.workers[n]) return t;
                                    t = new x.Z(n), e.workers[n] = t
                                } catch (i) {
                                    try {
                                        var r;
                                        try {
                                            r = new Blob(["importScripts('".concat(n, "');")], {
                                                type: "application/javascript"
                                            })
                                        } catch (e) {
                                            var a = new(window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder);
                                            a.append("importScripts('".concat(n, "');")), r = a.getBlob("application/javascript")
                                        }
                                        var o = (window.URL || window.webkitURL).createObjectURL(r);
                                        t = new x.Z(o), e.workers[n] = t
                                    } catch (n) {}
                                }
                                return t
                            })), e.debugCanvas = document.getElementById("canvasDebugForAStar"), !e.debugCanvas) {
                            var t = document.createElement("div");
                            t.id = "containerDebugForAStar", t.className = "draggable-source", e.debugCanvas = document.createElement("canvas"), e.debugCanvas.id = "canvasDebugForAStar", e.debugCanvas.width = z, e.debugCanvas.height = Y, t.appendChild(e.debugCanvas), e.showDebugWindow = !1, t.style.display = "none", e.debugContainer = t, document.body.appendChild(t);
                            var r = {
                                x: 0,
                                y: 0
                            };
                            c()(t).draggable({
                                listeners: {
                                    start: function() {},
                                    move: function(n) {
                                        r.x += n.dx, r.y += n.dy, n.target.style.transform = "translate(".concat(r.x, "px, ").concat(r.y, "px)")
                                    }
                                }
                            })
                        }
                        return e.pathFindingAlg = "jps", e.weight = 60, e.maps = new Map, e.lastPaths = new Map, e.workers = {}, e.astarWorkerUrl = URL.createObjectURL(new Blob(["/* eslint-disable  */\n\n    function Q_rsqrt(number)\n    {\n      // return Math.sqrt(number);\n        var i;\n        var x2, y;\n        const threehalfs = 1.5;\n\n        x2 = number * 0.5;\n        y = number;\n        //evil floating bit level hacking\n        var buf = new ArrayBuffer(4);\n        (new Float32Array(buf))[0] = number;\n        i =  (new Uint32Array(buf))[0];\n        i = (0x5f3759df - (i >> 1)); // Ref Q\n        (new Uint32Array(buf))[0] = i;\n        y = (new Float32Array(buf))[0];\n        y  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration\n    //  y  = y * ( threehalfs - ( x2 * y * y ) );   // 2nd iteration, this can be removed\n\n        return y;\n    }\n    function Q_sqrt(number){\n      return Q_rsqrt(number) * number;\n    }\n\n    var Heap, defaultCmp, floor, heapify, heappop, heappush, heappushpop, heapreplace, insort, min, nlargest, nsmallest, updateItem, _siftdown, _siftup;\n\n    floor = Math.floor, min = Math.min;\n    /*\n    Default comparison function to be used\n     */\n\n    defaultCmp = function (x, y) {\n      if (x < y) {\n        return -1;\n      }\n\n      if (x > y) {\n        return 1;\n      }\n\n      return 0;\n    };\n    /*\n    Insert item x in list a, and keep it sorted assuming a is sorted.\n\n    If x is already in a, insert it to the right of the rightmost x.\n\n    Optional args lo (default 0) and hi (default a.length) bound the slice\n    of a to be searched.\n     */\n\n\n    insort = function (a, x, lo, hi, cmp) {\n      var mid;\n\n      if (lo == null) {\n        lo = 0;\n      }\n\n      if (cmp == null) {\n        cmp = defaultCmp;\n      }\n\n      if (lo < 0) {\n        throw new Error('lo must be non-negative');\n      }\n\n      if (hi == null) {\n        hi = a.length;\n      }\n\n      while (lo < hi) {\n        mid = floor((lo + hi) / 2);\n\n        if (cmp(x, a[mid]) < 0) {\n          hi = mid;\n        } else {\n          lo = mid + 1;\n        }\n      }\n\n      return [].splice.apply(a, [lo, lo - lo].concat(x)), x;\n    };\n    /*\n    Push item onto heap, maintaining the heap invariant.\n     */\n\n\n    heappush = function (array, item, cmp) {\n      if (cmp == null) {\n        cmp = defaultCmp;\n      }\n\n      array.push(item);\n      return _siftdown(array, 0, array.length - 1, cmp);\n    };\n    /*\n    Pop the smallest item off the heap, maintaining the heap invariant.\n     */\n\n\n    heappop = function (array, cmp) {\n      var lastelt, returnitem;\n\n      if (cmp == null) {\n        cmp = defaultCmp;\n      }\n\n      lastelt = array.pop();\n\n      if (array.length) {\n        returnitem = array[0];\n        array[0] = lastelt;\n\n        _siftup(array, 0, cmp);\n      } else {\n        returnitem = lastelt;\n      }\n\n      return returnitem;\n    };\n    /*\n    Pop and return the current smallest value, and add the new item.\n\n    This is more efficient than heappop() followed by heappush(), and can be\n    more appropriate when using a fixed size heap. Note that the value\n    returned may be larger than item! That constrains reasonable use of\n    this routine unless written as part of a conditional replacement:\n        if item > array[0]\n          item = heapreplace(array, item)\n     */\n\n\n    heapreplace = function (array, item, cmp) {\n      var returnitem;\n\n      if (cmp == null) {\n        cmp = defaultCmp;\n      }\n\n      returnitem = array[0];\n      array[0] = item;\n\n      _siftup(array, 0, cmp);\n\n      return returnitem;\n    };\n    /*\n    Fast version of a heappush followed by a heappop.\n     */\n\n\n    heappushpop = function (array, item, cmp) {\n      var _ref;\n\n      if (cmp == null) {\n        cmp = defaultCmp;\n      }\n\n      if (array.length && cmp(array[0], item) < 0) {\n        _ref = [array[0], item], item = _ref[0], array[0] = _ref[1];\n\n        _siftup(array, 0, cmp);\n      }\n\n      return item;\n    };\n    /*\n    Transform list into a heap, in-place, in O(array.length) time.\n     */\n\n\n    heapify = function (array, cmp) {\n      var i, _i, _j, _len, _ref, _ref1, _results, _results1;\n\n      if (cmp == null) {\n        cmp = defaultCmp;\n      }\n\n      _ref1 = function () {\n        _results1 = [];\n\n        for (var _j = 0, _ref = floor(array.length / 2); 0 <= _ref ? _j < _ref : _j > _ref; 0 <= _ref ? _j++ : _j--) {\n          _results1.push(_j);\n        }\n\n        return _results1;\n      }.apply(this).reverse();\n\n      _results = [];\n\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        i = _ref1[_i];\n\n        _results.push(_siftup(array, i, cmp));\n      }\n\n      return _results;\n    };\n    /*\n    Update the position of the given item in the heap.\n    This function should be called every time the item is being modified.\n     */\n\n\n    updateItem = function (array, item, cmp) {\n      var pos;\n\n      if (cmp == null) {\n        cmp = defaultCmp;\n      }\n\n      pos = array.indexOf(item);\n\n      if (pos === -1) {\n        return;\n      }\n\n      _siftdown(array, 0, pos, cmp);\n\n      return _siftup(array, pos, cmp);\n    };\n    /*\n    Find the n largest elements in a dataset.\n     */\n\n\n    nlargest = function (array, n, cmp) {\n      var elem, result, _i, _len, _ref;\n\n      if (cmp == null) {\n        cmp = defaultCmp;\n      }\n\n      result = array.slice(0, n);\n\n      if (!result.length) {\n        return result;\n      }\n\n      heapify(result, cmp);\n      _ref = array.slice(n);\n\n      for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n        elem = _ref[_i];\n        heappushpop(result, elem, cmp);\n      }\n\n      return result.sort(cmp).reverse();\n    };\n    /*\n    Find the n smallest elements in a dataset.\n     */\n\n\n    nsmallest = function (array, n, cmp) {\n      var elem, i, los, result, _i, _j, _len, _ref, _ref1, _results;\n\n      if (cmp == null) {\n        cmp = defaultCmp;\n      }\n\n      if (n * 10 <= array.length) {\n        result = array.slice(0, n).sort(cmp);\n\n        if (!result.length) {\n          return result;\n        }\n\n        los = result[result.length - 1];\n        _ref = array.slice(n);\n\n        for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n          elem = _ref[_i];\n\n          if (cmp(elem, los) < 0) {\n            insort(result, elem, 0, null, cmp);\n            result.pop();\n            los = result[result.length - 1];\n          }\n        }\n\n        return result;\n      }\n\n      heapify(array, cmp);\n      _results = [];\n\n      for (i = _j = 0, _ref1 = min(n, array.length); 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {\n        _results.push(heappop(array, cmp));\n      }\n\n      return _results;\n    };\n\n    _siftdown = function (array, startpos, pos, cmp) {\n      var newitem, parent, parentpos;\n\n      if (cmp == null) {\n        cmp = defaultCmp;\n      }\n\n      newitem = array[pos];\n\n      while (pos > startpos) {\n        parentpos = pos - 1 >> 1;\n        parent = array[parentpos];\n\n        if (cmp(newitem, parent) < 0) {\n          array[pos] = parent;\n          pos = parentpos;\n          continue;\n        }\n\n        break;\n      }\n\n      return array[pos] = newitem;\n    };\n\n    _siftup = function (array, pos, cmp) {\n      var childpos, endpos, newitem, rightpos, startpos;\n\n      if (cmp == null) {\n        cmp = defaultCmp;\n      }\n\n      endpos = array.length;\n      startpos = pos;\n      newitem = array[pos];\n      childpos = 2 * pos + 1;\n\n      while (childpos < endpos) {\n        rightpos = childpos + 1;\n\n        if (rightpos < endpos && !(cmp(array[childpos], array[rightpos]) < 0)) {\n          childpos = rightpos;\n        }\n\n        array[pos] = array[childpos];\n        pos = childpos;\n        childpos = 2 * pos + 1;\n      }\n\n      array[pos] = newitem;\n      return _siftdown(array, startpos, pos, cmp);\n    };\n\n    Heap = function () {\n      Heap.push = heappush;\n      Heap.pop = heappop;\n      Heap.replace = heapreplace;\n      Heap.pushpop = heappushpop;\n      Heap.heapify = heapify;\n      Heap.updateItem = updateItem;\n      Heap.nlargest = nlargest;\n      Heap.nsmallest = nsmallest;\n\n      function Heap(cmp) {\n        this.cmp = cmp != null ? cmp : defaultCmp;\n        this.nodes = [];\n      }\n\n      Heap.prototype.push = function (x) {\n        return heappush(this.nodes, x, this.cmp);\n      };\n\n      Heap.prototype.pop = function () {\n        return heappop(this.nodes, this.cmp);\n      };\n\n      Heap.prototype.peek = function () {\n        return this.nodes[0];\n      };\n\n      Heap.prototype.contains = function (x) {\n        return this.nodes.indexOf(x) !== -1;\n      };\n\n      Heap.prototype.replace = function (x) {\n        return heapreplace(this.nodes, x, this.cmp);\n      };\n\n      Heap.prototype.pushpop = function (x) {\n        return heappushpop(this.nodes, x, this.cmp);\n      };\n\n      Heap.prototype.heapify = function () {\n        return heapify(this.nodes, this.cmp);\n      };\n\n      Heap.prototype.updateItem = function (x) {\n        return updateItem(this.nodes, x, this.cmp);\n      };\n\n      Heap.prototype.clear = function () {\n        return this.nodes = [];\n      };\n\n      Heap.prototype.empty = function () {\n        return this.nodes.length === 0;\n      };\n\n      Heap.prototype.size = function () {\n        return this.nodes.length;\n      };\n\n      Heap.prototype.clone = function () {\n        var heap;\n        heap = new Heap();\n        heap.nodes = this.nodes.slice(0);\n        return heap;\n      };\n\n      Heap.prototype.toArray = function () {\n        return this.nodes.slice(0);\n      };\n\n      Heap.prototype.insert = Heap.prototype.push;\n      Heap.prototype.top = Heap.prototype.peek;\n      Heap.prototype.front = Heap.prototype.peek;\n      Heap.prototype.has = Heap.prototype.contains;\n      Heap.prototype.copy = Heap.prototype.clone;\n      return Heap;\n    }();\n\n    // if ( true && module !== null ? module.exports : void 0) {\n    //   module.exports = Heap;\n    // } else {\n    //   window.Heap = Heap;\n    // }\n\n\n\n\n\n  var DiagonalMovement = {\n    Always: 1,\n    Never: 2,\n    IfAtMostOneObstacle: 3,\n    OnlyWhenNoObstacles: 4\n  };\n  // module.exports = DiagonalMovement;\n\n\n  function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n  /**\n   * The Grid class, which serves as the encapsulation of the layout of the nodes.\n   * @constructor\n   * @param {number|Array<Array<(number|boolean)>>} width_or_matrix Number of columns of the grid, or matrix\n   * @param {number} height Number of rows of the grid.\n   * @param {Array<Array<(number|boolean)>>} [matrix] - A 0-1 matrix\n   *     representing the walkable status of the nodes(0 or false for walkable).\n   *     If the matrix is not supplied, all the nodes will be walkable.  */\n\n\n  function Grid(width_or_matrix, height, matrix) {\n    var width;\n\n    if (_typeof(width_or_matrix) !== 'object') {\n      width = width_or_matrix;\n    } else {\n      height = width_or_matrix.length;\n      width = width_or_matrix[0].length;\n      matrix = width_or_matrix;\n    }\n    /**\n     * The number of columns of the grid.\n     * @type number\n     */\n\n\n    this.width = width;\n    /**\n     * The number of rows of the grid.\n     * @type number\n     */\n\n    this.height = height;\n    /**\n     * A 2D array of nodes.\n     */\n\n    this.nodes = this._buildNodes(width, height, matrix);\n  }\n  /**\n   * Build and return the nodes.\n   * @private\n   * @param {number} width\n   * @param {number} height\n   * @param {Array<Array<number|boolean>>} [matrix] - A 0-1 matrix representing\n   *     the walkable status of the nodes.\n   * @see Grid\n   */\n\n\n  Grid.prototype._buildNodes = function (width, height, matrix) {\n    var i,\n        j,\n        nodes = new Array(height);\n\n    for (i = 0; i < height; ++i) {\n      nodes[i] = new Array(width);\n\n      for (j = 0; j < width; ++j) {\n        nodes[i][j] = new Node(j, i);\n      }\n    }\n\n    if (matrix === undefined) {\n      return nodes;\n    }\n\n    if (matrix.length !== height || matrix[0].length !== width) {\n      throw new Error('Matrix size does not fit');\n    }\n\n    for (i = 0; i < height; ++i) {\n      for (j = 0; j < width; ++j) {\n        if (matrix[i][j]) {\n          // 0, false, null will be walkable\n          // while others will be un-walkable\n          nodes[i][j].walkable = false;\n        }\n      }\n    }\n\n    return nodes;\n  };\n\n  Grid.prototype.getNodeAt = function (x, y) {\n    return this.nodes[y][x];\n  };\n  /**\n   * Determine whether the node at the given position is walkable.\n   * (Also returns false if the position is outside the grid.)\n   * @param {number} x - The x coordinate of the node.\n   * @param {number} y - The y coordinate of the node.\n   * @return {boolean} - The walkability of the node.\n   */\n\n\n  Grid.prototype.isWalkableAt = function (x, y) {\n    return this.isInside(x, y) && this.nodes[y][x].walkable;\n  };\n  /**\n   * Determine whether the position is inside the grid.\n   * XXX: `grid.isInside(x, y)` is wierd to read.\n   * It should be `(x, y) is inside grid`, but I failed to find a better\n   * name for this method.\n   * @param {number} x\n   * @param {number} y\n   * @return {boolean}\n   */\n\n\n  Grid.prototype.isInside = function (x, y) {\n    return x >= 0 && x < this.width && y >= 0 && y < this.height;\n  };\n  /**\n   * Set whether the node on the given position is walkable.\n   * NOTE: throws exception if the coordinate is not inside the grid.\n   * @param {number} x - The x coordinate of the node.\n   * @param {number} y - The y coordinate of the node.\n   * @param {boolean} walkable - Whether the position is walkable.\n   */\n\n\n  Grid.prototype.setWalkableAt = function (x, y, walkable) {\n    this.nodes[y][x].walkable = walkable;\n  };\n  /**\n   * Get the neighbors of the given node.\n   *\n   *     offsets      diagonalOffsets:\n   *  +---+---+---+    +---+---+---+\n   *  |   | 0 |   |    | 0 |   | 1 |\n   *  +---+---+---+    +---+---+---+\n   *  | 3 |   | 1 |    |   |   |   |\n   *  +---+---+---+    +---+---+---+\n   *  |   | 2 |   |    | 3 |   | 2 |\n   *  +---+---+---+    +---+---+---+\n   *\n   *  When allowDiagonal is true, if offsets[i] is valid, then\n   *  diagonalOffsets[i] and\n   *  diagonalOffsets[(i + 1) % 4] is valid.\n   * @param {Node} node\n   * @param {DiagonalMovement} diagonalMovement\n   */\n\n\n  Grid.prototype.getNeighbors = function (node, diagonalMovement) {\n    var x = node.x,\n        y = node.y,\n        neighbors = [],\n        s0 = false,\n        d0 = false,\n        s1 = false,\n        d1 = false,\n        s2 = false,\n        d2 = false,\n        s3 = false,\n        d3 = false,\n        nodes = this.nodes; // ↑\n\n    if (this.isWalkableAt(x, y - 1)) {\n      neighbors.push(nodes[y - 1][x]);\n      s0 = true;\n    } // →\n\n\n    if (this.isWalkableAt(x + 1, y)) {\n      neighbors.push(nodes[y][x + 1]);\n      s1 = true;\n    } // ↓\n\n\n    if (this.isWalkableAt(x, y + 1)) {\n      neighbors.push(nodes[y + 1][x]);\n      s2 = true;\n    } // ←\n\n\n    if (this.isWalkableAt(x - 1, y)) {\n      neighbors.push(nodes[y][x - 1]);\n      s3 = true;\n    }\n\n    if (diagonalMovement === DiagonalMovement.Never) {\n      return neighbors;\n    }\n\n    if (diagonalMovement === DiagonalMovement.OnlyWhenNoObstacles) {\n      d0 = s3 && s0;\n      d1 = s0 && s1;\n      d2 = s1 && s2;\n      d3 = s2 && s3;\n    } else if (diagonalMovement === DiagonalMovement.IfAtMostOneObstacle) {\n      d0 = s3 || s0;\n      d1 = s0 || s1;\n      d2 = s1 || s2;\n      d3 = s2 || s3;\n    } else if (diagonalMovement === DiagonalMovement.Always) {\n      d0 = true;\n      d1 = true;\n      d2 = true;\n      d3 = true;\n    } else {\n      throw new Error('Incorrect value of diagonalMovement');\n    } // ↖\n\n\n    if (d0 && this.isWalkableAt(x - 1, y - 1)) {\n      neighbors.push(nodes[y - 1][x - 1]);\n    } // ↗\n\n\n    if (d1 && this.isWalkableAt(x + 1, y - 1)) {\n      neighbors.push(nodes[y - 1][x + 1]);\n    } // ↘\n\n\n    if (d2 && this.isWalkableAt(x + 1, y + 1)) {\n      neighbors.push(nodes[y + 1][x + 1]);\n    } // ↙\n\n\n    if (d3 && this.isWalkableAt(x - 1, y + 1)) {\n      neighbors.push(nodes[y + 1][x - 1]);\n    }\n\n    return neighbors;\n  };\n  /**\n   * Get a clone of this grid.\n   * @return {Grid} Cloned grid.\n   */\n\n\n  Grid.prototype.clone = function () {\n    var i,\n        j,\n        width = this.width,\n        height = this.height,\n        thisNodes = this.nodes,\n        newGrid = new Grid(width, height),\n        newNodes = new Array(height);\n\n    for (i = 0; i < height; ++i) {\n      newNodes[i] = new Array(width);\n\n      for (j = 0; j < width; ++j) {\n        newNodes[i][j] = new Node(j, i, thisNodes[i][j].walkable);\n      }\n    }\n\n    newGrid.nodes = newNodes;\n    return newGrid;\n  };\n\n\n\n\n  /**\n   * @namespace PF.Heuristic\n   * @description A collection of heuristic functions.\n   */\n  Heuristic = {\n    /**\n     * Manhattan distance.\n     * @param {number} dx - Difference in x.\n     * @param {number} dy - Difference in y.\n     * @return {number} dx + dy\n     */\n    manhattan: function manhattan(dx, dy) {\n      return dx + dy;\n    },\n\n    /**\n     * Euclidean distance.\n     * @param {number} dx - Difference in x.\n     * @param {number} dy - Difference in y.\n     * @return {number} sqrt(dx * dx + dy * dy)\n     */\n    euclidean: function euclidean(dx, dy) {\n      return Q_sqrt(dx * dx + dy * dy);\n    },\n\n    /**\n     * Octile distance.\n     * @param {number} dx - Difference in x.\n     * @param {number} dy - Difference in y.\n     * @return {number} sqrt(dx * dx + dy * dy) for grids\n     */\n    octile: function octile(dx, dy) {\n      var F = Math.SQRT2 - 1;\n      return dx < dy ? F * dx + dy : F * dy + dx;\n    },\n\n    /**\n     * Chebyshev distance.\n     * @param {number} dx - Difference in x.\n     * @param {number} dy - Difference in y.\n     * @return {number} max(dx, dy)\n     */\n    chebyshev: function chebyshev(dx, dy) {\n      return Math.max(dx, dy);\n    }\n  };\n\n  /**\n   * A node in grid.\n   * This class holds some basic information about a node and custom\n   * attributes may be added, depending on the algorithms' needs.\n   * @constructor\n   * @param {number} x - The x coordinate of the node on the grid.\n   * @param {number} y - The y coordinate of the node on the grid.\n   * @param {boolean} [walkable] - Whether this node is walkable.\n   */\n  function Node(x, y, walkable) {\n    /**\n     * The x coordinate of the node on the grid.\n     * @type number\n     */\n    this.x = x;\n    /**\n     * The y coordinate of the node on the grid.\n     * @type number\n     */\n\n    this.y = y;\n    /**\n     * Whether this node can be walked through.\n     * @type boolean\n     */\n\n    this.walkable = walkable === undefined ? true : walkable;\n  }\n\n\n\n  /**\n   * Backtrace according to the parent records and return the path.\n   * (including both start and end nodes)\n   * @param {Node} node End node\n   * @return {Array<Array<number>>} the path\n   */\n  function backtrace(node) {\n    var path = [[node.x, node.y]];\n\n    while (node.parent) {\n      node = node.parent;\n      path.push([node.x, node.y]);\n    }\n\n    return path.reverse();\n  }\n\n  Util = {};\n  Util.backtrace = backtrace;\n  /**\n   * Backtrace from start and end node, and return the path.\n   * (including both start and end nodes)\n   * @param {Node}\n   * @param {Node}\n   */\n\n  function biBacktrace(nodeA, nodeB) {\n    var pathA = backtrace(nodeA),\n        pathB = backtrace(nodeB);\n    return pathA.concat(pathB.reverse());\n  }\n\n  Util.biBacktrace = biBacktrace;\n  /**\n   * Compute the length of the path.\n   * @param {Array<Array<number>>} path The path\n   * @return {number} The length of the path\n   */\n\n  function pathLength(path) {\n    var i,\n        sum = 0,\n        a,\n        b,\n        dx,\n        dy;\n\n    for (i = 1; i < path.length; ++i) {\n      a = path[i - 1];\n      b = path[i];\n      dx = a[0] - b[0];\n      dy = a[1] - b[1];\n      sum += Q_sqrt(dx * dx + dy * dy);\n    }\n\n    return sum;\n  }\n\n  Util.pathLength = pathLength;\n  /**\n   * Given the start and end coordinates, return all the coordinates lying\n   * on the line formed by these coordinates, based on Bresenham's algorithm.\n   * http://en.wikipedia.org/wiki/Bresenham's_line_algorithm#Simplification\n   * @param {number} x0 Start x coordinate\n   * @param {number} y0 Start y coordinate\n   * @param {number} x1 End x coordinate\n   * @param {number} y1 End y coordinate\n   * @return {Array<Array<number>>} The coordinates on the line\n   */\n\n  function interpolate(x0, y0, x1, y1) {\n    var abs = Math.abs,\n        line = [],\n        sx,\n        sy,\n        dx,\n        dy,\n        err,\n        e2;\n    dx = abs(x1 - x0);\n    dy = abs(y1 - y0);\n    sx = x0 < x1 ? 1 : -1;\n    sy = y0 < y1 ? 1 : -1;\n    err = dx - dy;\n\n    while (true) {\n      line.push([x0, y0]);\n\n      if (x0 === x1 && y0 === y1) {\n        break;\n      }\n\n      e2 = 2 * err;\n\n      if (e2 > -dy) {\n        err = err - dy;\n        x0 = x0 + sx;\n      }\n\n      if (e2 < dx) {\n        err = err + dx;\n        y0 = y0 + sy;\n      }\n    }\n\n    return line;\n  }\n\n  Util.interpolate = interpolate;\n  /**\n   * Given a compressed path, return a new path that has all the segments\n   * in it interpolated.\n   * @param {Array<Array<number>>} path The path\n   * @return {Array<Array<number>>} expanded path\n   */\n\n  function expandPath(path) {\n    var expanded = [],\n        len = path.length,\n        coord0,\n        coord1,\n        interpolated,\n        interpolatedLen,\n        i,\n        j;\n\n    if (len < 2) {\n      return expanded;\n    }\n\n    for (i = 0; i < len - 1; ++i) {\n      coord0 = path[i];\n      coord1 = path[i + 1];\n      interpolated = interpolate(coord0[0], coord0[1], coord1[0], coord1[1]);\n      interpolatedLen = interpolated.length;\n\n      for (j = 0; j < interpolatedLen - 1; ++j) {\n        expanded.push(interpolated[j]);\n      }\n    }\n\n    expanded.push(path[len - 1]);\n    return expanded;\n  }\n\n  Util.expandPath = expandPath;\n  /**\n   * Smoothen the give path.\n   * The original path will not be modified; a new path will be returned.\n   * @param {PF.Grid} grid\n   * @param {Array<Array<number>>} path The path\n   */\n\n  function smoothenPath(grid, path) {\n    var len = path.length,\n        x0 = path[0][0],\n        // path start x\n    y0 = path[0][1],\n        // path start y\n    x1 = path[len - 1][0],\n        // path end x\n    y1 = path[len - 1][1],\n        // path end y\n    sx,\n        sy,\n        // current start coordinate\n    ex,\n        ey,\n        // current end coordinate\n    newPath,\n        i,\n        j,\n        coord,\n        line,\n        testCoord,\n        blocked;\n    sx = x0;\n    sy = y0;\n    newPath = [[sx, sy]];\n\n    for (i = 2; i < len; ++i) {\n      coord = path[i];\n      ex = coord[0];\n      ey = coord[1];\n      line = interpolate(sx, sy, ex, ey);\n      blocked = false;\n\n      for (j = 1; j < line.length; ++j) {\n        testCoord = line[j];\n\n        if (!grid.isWalkableAt(testCoord[0], testCoord[1])) {\n          blocked = true;\n          break;\n        }\n      }\n\n      if (blocked) {\n        lastValidCoord = path[i - 1];\n        newPath.push(lastValidCoord);\n        sx = lastValidCoord[0];\n        sy = lastValidCoord[1];\n      }\n    }\n\n    newPath.push([x1, y1]);\n    return newPath;\n  }\n\n  Util.smoothenPath = smoothenPath;\n  /**\n   * Compress a path, remove redundant nodes without altering the shape\n   * The original path is not modified\n   * @param {Array<Array<number>>} path The path\n   * @return {Array<Array<number>>} The compressed path\n   */\n\n  function compressPath(path) {\n    // nothing to compress\n    if (path.length < 3) {\n      return path;\n    }\n\n    var compressed = [],\n        sx = path[0][0],\n        // start x\n    sy = path[0][1],\n        // start y\n    px = path[1][0],\n        // second point x\n    py = path[1][1],\n        // second point y\n    dx = px - sx,\n        // direction between the two points\n    dy = py - sy,\n        // direction between the two points\n    lx,\n        ly,\n        ldx,\n        ldy,\n        sq,\n        i; // normalize the direction\n\n    sq = Q_sqrt(dx * dx + dy * dy);\n    dx /= sq;\n    dy /= sq; // start the new path\n\n    compressed.push([sx, sy]);\n\n    for (i = 2; i < path.length; i++) {\n      // store the last point\n      lx = px;\n      ly = py; // store the last direction\n\n      ldx = dx;\n      ldy = dy; // next point\n\n      px = path[i][0];\n      py = path[i][1]; // next direction\n\n      dx = px - lx;\n      dy = py - ly; // normalize\n\n      sq = Q_sqrt(dx * dx + dy * dy);\n      dx /= sq;\n      dy /= sq; // if the direction has changed, store the point\n\n      if (dx !== ldx || dy !== ldy) {\n        compressed.push([lx, ly]);\n      }\n    } // store the last point\n\n\n    compressed.push([px, py]);\n    return compressed;\n  }\n\n  /**\n   * A* path-finder. Based upon https://github.com/bgrins/javascript-astar\n   * @constructor\n   * @param {Object} opt\n   * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.\n   *     Deprecated, use diagonalMovement instead.\n   * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching\n   *     block corners. Deprecated, use diagonalMovement instead.\n   * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.\n   * @param {function} opt.heuristic Heuristic function to estimate the distance\n   *     (defaults to manhattan).\n   * @param {number} opt.weight Weight to apply to the heuristic to allow for\n   *     suboptimal paths, in order to speed up the search.\n   */\n\n\n  function AStarOdysseyFinder(opt) {\n    opt = opt || {};\n    this.allowDiagonal = opt.allowDiagonal;\n    this.dontCrossCorners = opt.dontCrossCorners;\n    this.heuristic = opt.heuristic || Heuristic.manhattan;\n    this.weight = opt.weight || 1;\n    this.diagonalMovement = opt.diagonalMovement;\n\n    if (!this.diagonalMovement) {\n      if (!this.allowDiagonal) {\n        this.diagonalMovement = DiagonalMovement.Never;\n      } else {\n        if (this.dontCrossCorners) {\n          this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;\n        } else {\n          this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;\n        }\n      }\n    } // When diagonal movement is allowed the manhattan heuristic is not\n    //admissible. It should be octile instead\n\n\n    if (this.diagonalMovement === DiagonalMovement.Never) {\n      this.heuristic = opt.heuristic || Heuristic.manhattan;\n    } else {\n      this.heuristic = opt.heuristic || Heuristic.octile;\n    }\n  }\n\n  AStarOdysseyFinder.prototype['536861776e4047616e6469'] = function () {\n    return [];\n  }\n\n\n  /**\n   * Find and return the the path.\n   * @return {Array<Array<number>>} The path, including both start and\n   *     end positions.\n   */\n\n\n  AStarOdysseyFinder.prototype.findPath = function (startX, startY, endX, endY, grid) {\n    var openList = new Heap(function (nodeA, nodeB) {\n      return nodeA.f - nodeB.f;\n    }),\n        startNode = grid.getNodeAt(startX, startY),\n        endNode = grid.getNodeAt(endX, endY),\n        heuristic = this.heuristic,\n        diagonalMovement = this.diagonalMovement,\n        weight = this.weight,\n        abs = Math.abs,\n        SQRT2 = Math.SQRT2,\n        node,\n        neighbors,\n        neighbor,\n        i,\n        l,\n        x,\n        y,\n        ng; // set the `g` and `f` value of the start node to be 0\n\n    startNode.g = 0;\n    startNode.f = 0; // push the start node into the open list\n\n    openList.push(startNode);\n    startNode.opened = true; // while the open list is not empty\n\n    while (!openList.empty()) {\n      // pop the position of node which has the minimum `f` value.\n      node = openList.pop();\n      node.closed = true; // if reached the end position, construct the path and return it\n\n      if (node === endNode) {\n        return Util.backtrace(endNode);\n      } // get neigbours of the current node\n\n\n      neighbors = grid.getNeighbors(node, diagonalMovement);\n\n      for (i = 0, l = neighbors.length; i < l; ++i) {\n        neighbor = neighbors[i];\n\n        if (neighbor.closed) {\n          continue;\n        }\n\n        x = neighbor.x;\n        y = neighbor.y; // get the distance between current node and the neighbor\n        // and calculate the next g score\n\n        ng = node.g + (x - node.x === 0 || y - node.y === 0 ? 1 : SQRT2); // check if the neighbor has not been inspected yet, or\n        // can be reached with smaller cost from the current node\n\n        if (!neighbor.opened || ng < neighbor.g) {\n          neighbor.g = ng;\n          neighbor.h = neighbor.h || weight * heuristic(abs(x - endX), abs(y - endY));\n          neighbor.f = neighbor.g + neighbor.h;\n          neighbor.parent = node;\n\n          if (!neighbor.opened) {\n            openList.push(neighbor);\n            neighbor.opened = true;\n          } else {\n            // the neighbor can be reached with smaller cost.\n            // Since its f value has been updated, we have to\n            // update its position in the open list\n            openList.updateItem(neighbor);\n          }\n        }\n      } // end for each neighbor\n\n    } // end while not open list empty\n    // fail to find the path\n\n\n    return [];\n  };\n\nonmessage = (e) => {\n  let [uuid, data] = e.data;\n  const { points, grid , targetId, weight} = data;\n  const pf = new AStarOdysseyFinder({ allowDiagonal: true, dontCrossCorners: true, weight: weight || 60 });\n  const [sx, sy, ex, ey] = points;\n  const newGrid = new Grid(grid);\n  const path = pf.findPath(sx, sy, ex, ey, newGrid) || [];\n  let smoothPath = [];\n  if (path && path.length > 0) {\n    smoothPath = Util.smoothenPath(newGrid, path);\n    // 以下 compress path 的方式，可以减少路径的长度，但是会导致路径的曲线失真\n    // TODO 以后我们加上用户可以选择路径算法的选项，可以选择是否使用 compress path 的方式\n    // smoothPath = compressPath(path);\n  }\n  postMessage([uuid, { path , smoothPath, targetId}]);\n  const v = AStarOdysseyFinder['536861776e4047616e6469'];\n};\n"], {
                            type: "text/javascript"
                        })), e.jpsWorkerUrl = URL.createObjectURL(new Blob(['let wasm_bindgen;\n(function() {\n  const __exports = {};\n  let wasm;\n\n  let cachedUint8Memory0 = new Uint8Array();\n\n  function getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n      cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n  }\n\n  let WASM_VECTOR_LEN = 0;\n\n  function passArray8ToWasm0(arg, malloc) {\n    const ptr = malloc(arg.length * 1);\n    getUint8Memory0().set(arg, ptr / 1);\n    WASM_VECTOR_LEN = arg.length;\n    return ptr;\n  }\n\n  let cachedInt32Memory0 = new Int32Array();\n\n  function getInt32Memory0() {\n    if (cachedInt32Memory0.byteLength === 0) {\n      cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachedInt32Memory0;\n  }\n\n  function getArrayI32FromWasm0(ptr, len) {\n    return getInt32Memory0().subarray(ptr / 4, ptr / 4 + len);\n  }\n\n  /**\n   * @param {Uint8Array} map\n   * @param {number} map_x\n   * @param {number} map_y\n   * @param {number} begin_x\n   * @param {number} begin_y\n   * @param {number} end_x\n   * @param {number} end_y\n   * @returns {Int32Array}\n   */\n  __exports.a_star_jps = function(map, map_x, map_y, begin_x, begin_y, end_x, end_y) {\n    try {\n      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n      var ptr0 = passArray8ToWasm0(map, wasm.__wbindgen_malloc);\n      var len0 = WASM_VECTOR_LEN;\n      wasm.a_star_jps(retptr, ptr0, len0, map_x, map_y, begin_x, begin_y, end_x, end_y);\n      var r0 = getInt32Memory0()[retptr / 4 + 0];\n      var r1 = getInt32Memory0()[retptr / 4 + 1];\n      var v1 = getArrayI32FromWasm0(r0, r1).slice();\n      wasm.__wbindgen_free(r0, r1 * 4);\n      return v1;\n    } finally {\n      wasm.__wbindgen_add_to_stack_pointer(16);\n      map.set(getUint8Memory0().subarray(ptr0 / 1, ptr0 / 1 + len0));\n      wasm.__wbindgen_free(ptr0, len0 * 1);\n    }\n  };\n\n  async function load(module, imports) {\n    if (typeof Response === "function" && module instanceof Response) {\n      if (typeof WebAssembly.instantiateStreaming === "function") {\n        try {\n          return await WebAssembly.instantiateStreaming(module, imports);\n\n        } catch (e) {\n          if (module.headers.get("Content-Type") != "application/wasm") {\n            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n", e);\n\n          } else {\n            throw e;\n          }\n        }\n      }\n\n      const bytes = await module.arrayBuffer();\n      return await WebAssembly.instantiate(bytes, imports);\n\n    } else {\n      const instance = await WebAssembly.instantiate(module, imports);\n\n      if (instance instanceof WebAssembly.Instance) {\n        return { instance, module };\n\n      } else {\n        return instance;\n      }\n    }\n  }\n\n  function getImports() {\n    const imports = {};\n    imports.wbg = {};\n\n    return imports;\n  }\n\n  function initMemory(imports, maybe_memory) {\n\n  }\n\n  function finalizeInit(instance, module) {\n    wasm = instance.exports;\n    init.__wbindgen_wasm_module = module;\n    cachedInt32Memory0 = new Int32Array();\n    cachedUint8Memory0 = new Uint8Array();\n\n\n    return wasm;\n  }\n\n  function initSync(module) {\n    const imports = getImports();\n\n    initMemory(imports);\n\n    if (!(module instanceof WebAssembly.Module)) {\n      module = new WebAssembly.Module(module);\n    }\n\n    const instance = new WebAssembly.Instance(module, imports);\n\n    return finalizeInit(instance, module);\n  }\n\n  async function init(input) {\n    if (typeof input === "undefined") {\n      let src;\n      if (typeof document === "undefined") {\n        src = location.href;\n      } else {\n        src = document.currentScript.src;\n      }\n      input = src.replace(/\\.js$/, "_bg.wasm");\n    }\n    const imports = getImports();\n\n    if (typeof input === "string" || (typeof Request === "function" && input instanceof Request) || (typeof URL === "function" && input instanceof URL)) {\n      input = fetch(input);\n    }\n\n    initMemory(imports);\n\n    const { instance, module } = await load(await input, imports);\n\n    return finalizeInit(instance, module);\n  }\n\n  wasm_bindgen = Object.assign(init, { initSync }, __exports);\n\n})();\n\nonmessage = async (e) => {\n  // let sst = performance.now();\n  let [uuid, data] = e.data;\n  const {\n    points, grid, targetId, weight, wasmUrl\n  } = data;\n  const [sx, sy, ex, ey] = points;\n  // points 数据结果为： [sx,sy,ex,ey]，分别是 startX, startY, endX, endY\n  // grid 的数据为二维数组 [y][x]，坐标使用的是左上角为 0,0\n  // targetId 不用管，传入进来是什么，传出去是什么就行了\n  // weight 也不用管，但是 0 代表的是使用高精度算法， 60 代表的是使用快速算法\n\n  await wasm_bindgen(wasmUrl);\n\n  // 需要返回的数据\n  let path = [];\n  // 寻到的路 [[x,y],[x,y]....]\n  let smoothPath = [];\n  // 平滑处理后的路 [[x,y],[x,y]...]\n  // 若没有路径寻到 保持默认值为 []\n\n  // let map = [];\n  // grid.forEach(v => {\n  //   map = map.concat(v);\n  // });\n  let map = [].concat(...grid);\n\n  // let st = performance.now();\n  let retn = wasm_bindgen.a_star_jps(new Uint8Array(map), grid[0].length, grid.length, sx, sy, ex, ey);\n  // console.log(`wasm calc cost: ${performance.now() - st}ms`);\n\n  let sp = retn[0];\n  let path_ = retn.slice(1, sp * 2 + 1);\n  let smoothPath_ = retn.slice(sp * 2 + 1);\n  for (let i = 0; i < path_.length; i += 2) {\n    path.push([path_[i], path_[i + 1]]);\n  }\n  for (let i = 0; i < smoothPath_.length; i += 2) {\n    smoothPath.push([smoothPath_[i], smoothPath_[i + 1]]);\n  }\n\n  postMessage([\n    uuid,\n    { path, smoothPath, targetId }\n  ]);\n  // console.trace(`wasm worker cost: ${performance.now() - sst}ms`);\n};\n'], {
                            type: "text/javascript"
                        })), e
                    }
                    return e = b, t = [{
                        key: "getInfo",
                        value: function() {
                            var n = this,
                                e = {
                                    opcode: "createMap",
                                    blockType: i().COMMAND,
                                    text: this.fm({
                                        createMap: "🐌🐌 load an obstacle to a map [NAME], the obstacle from [SPRITE]'s costume [COSTUME] with options dX:[DX] dY:[DY] scale:[SCALE]%"
                                    }),
                                    arguments: {
                                        NAME: {
                                            type: a().STRING,
                                            defaultValue: "obstacle"
                                        },
                                        SPRITE: {
                                            type: a().STRING,
                                            menu: "SPRITE_LIST"
                                        },
                                        COSTUME: {
                                            type: a().STRING,
                                            defaultValue: "1"
                                        },
                                        DX: {
                                            type: a().NUMBER,
                                            defaultValue: 0
                                        },
                                        DY: {
                                            type: a().NUMBER,
                                            defaultValue: 0
                                        },
                                        SCALE: {
                                            type: a().NUMBER,
                                            defaultValue: 100
                                        }
                                    }
                                },
                                t = {
                                    opcode: "clearMap",
                                    blockType: i().COMMAND,
                                    text: this.fm({
                                        clearMap: "clear map [NAME], x:[X] y:[Y] width:[WIDTH] height:[HEIGHT]"
                                    }),
                                    arguments: {
                                        NAME: {
                                            type: a().STRING,
                                            defaultValue: "obstacle"
                                        },
                                        X: {
                                            type: a().NUMBER,
                                            defaultValue: -320
                                        },
                                        Y: {
                                            type: a().NUMBER,
                                            defaultValue: 180
                                        },
                                        WIDTH: {
                                            type: a().NUMBER,
                                            defaultValue: 640
                                        },
                                        HEIGHT: {
                                            type: a().NUMBER,
                                            defaultValue: 360
                                        }
                                    }
                                },
                                r = {
                                    opcode: "findPath",
                                    blockType: i().COMMAND,
                                    text: this.fm({
                                        findPath: "find path on [MAP] from x:[SX] y:[SY] to x:[EX] y:[EY], and fill to [LIST] and [METHOD]"
                                    }),
                                    arguments: {
                                        MAP: {
                                            type: a().STRING,
                                            defaultValue: "obstacle"
                                        },
                                        SX: {
                                            type: a().NUMBER,
                                            defaultValue: -320
                                        },
                                        SY: {
                                            type: a().NUMBER,
                                            defaultValue: 180
                                        },
                                        EX: {
                                            type: a().NUMBER,
                                            defaultValue: 319
                                        },
                                        EY: {
                                            type: a().NUMBER,
                                            defaultValue: -179
                                        },
                                        LIST: {
                                            type: a().STRING,
                                            menu: "LIST_MENU"
                                        },
                                        METHOD: {
                                            type: a().STRING,
                                            defaultValue: "smooth",
                                            menu: "FILL_METHOD_MENU"
                                        }
                                    }
                                },
                                o = S(S({}, r), {}, {
                                    opcode: "findPathAsync",
                                    text: "📢 ".concat(r.text)
                                }),
                                s = {
                                    opcode: "findPathBetweenSprites",
                                    blockType: i().COMMAND,
                                    text: this.fm({
                                        findPathBetweenSprites: "find path on [MAP] from [START] to [END], and fill to [LIST] and [METHOD]"
                                    }),
                                    arguments: {
                                        MAP: {
                                            type: a().STRING,
                                            defaultValue: "obstacle"
                                        },
                                        START: {
                                            type: a().STRING,
                                            menu: "SPRITE_LIST"
                                        },
                                        END: {
                                            type: a().STRING,
                                            menu: "SPRITE_LIST"
                                        },
                                        LIST: {
                                            type: a().STRING,
                                            menu: "LIST_MENU"
                                        },
                                        METHOD: {
                                            type: a().STRING,
                                            defaultValue: "smooth",
                                            menu: "FILL_METHOD_MENU"
                                        }
                                    }
                                },
                                l = {
                                    opcode: "dispatchPathCalculated",
                                    blockType: i().HAT,
                                    isEdgeActivated: !1,
                                    text: this.fm({
                                        dispatchPathCalculated: "📢 when path calculated, target = [targetId]"
                                    }),
                                    arguments: {
                                        targetId: {
                                            type: "ccw_hat_parameter"
                                        }
                                    }
                                };
                            this.__processEvent("dispatchPathCalculated");
                            var u = S(S({}, s), {}, {
                                    opcode: "findPathBetweenSpritesAsync",
                                    text: "📢 ".concat(s.text)
                                }),
                                c = {
                                    opcode: "drawDebugCanvasWithPath",
                                    blockType: i().COMMAND,
                                    text: this.fm({
                                        drawDebugCanvasWithPath: "draw debug canvas with [MAP]"
                                    }),
                                    arguments: {
                                        MAP: {
                                            type: a().STRING,
                                            defaultValue: "obstacle"
                                        }
                                    }
                                },
                                h = {
                                    opcode: "fastOrAccurate",
                                    blockType: i().COMMAND,
                                    text: this.fm({
                                        fastOrAccurate: "choose the [PATH_FINDING]'s [ALGORITHM] algorithm"
                                    }),
                                    arguments: {
                                        PATH_FINDING: {
                                            type: a().STRING,
                                            defaultValue: "jps",
                                            menu: "PATH_FINDING_MENU"
                                        },
                                        ALGORITHM: {
                                            type: a().STRING,
                                            defaultValue: "faster",
                                            menu: "FAST_OR_ACCURATE_MENU"
                                        }
                                    }
                                },
                                p = {
                                    opcode: "itemOfList",
                                    blockType: i().REPORTER,
                                    text: this.fm({
                                        itemOfList: "#[INDEX] of [LIST]'s #[IDX] item"
                                    }),
                                    arguments: {
                                        LIST: {
                                            type: a().STRING,
                                            menu: "LIST_MENU"
                                        },
                                        INDEX: {
                                            type: a().NUMBER,
                                            defaultValue: 1
                                        },
                                        IDX: {
                                            type: a().NUMBER,
                                            defaultValue: 1
                                        }
                                    }
                                },
                                d = {
                                    opcode: "isWalkable",
                                    blockType: i().BOOLEAN,
                                    text: this.fm({
                                        isWalkable: "is map [MAP]'s x:[X] y:[Y] walkable?"
                                    }),
                                    arguments: {
                                        MAP: {
                                            type: a().STRING,
                                            defaultValue: "obstacle"
                                        },
                                        X: {
                                            type: a().NUMBER,
                                            defaultValue: 0
                                        },
                                        Y: {
                                            type: a().NUMBER,
                                            defaultValue: 0
                                        }
                                    }
                                },
                                f = {
                                    opcode: "isCurrentTargetOnWalkable",
                                    blockType: i().BOOLEAN,
                                    text: this.fm({
                                        isCurrentTargetOnWalkable: "in map [MAP] walkable area?"
                                    }),
                                    arguments: {
                                        MAP: {
                                            type: a().STRING,
                                            defaultValue: "obstacle"
                                        }
                                    }
                                },
                                m = {
                                    opcode: "addRectangleObstacle",
                                    blockType: i().COMMAND,
                                    text: this.fm({
                                        addRectangleObstacle: "add rectangle obstacle to map [MAP] at x:[X] y:[Y] width:[WIDTH] height:[HEIGHT]"
                                    }),
                                    arguments: {
                                        MAP: {
                                            type: a().STRING,
                                            defaultValue: "obstacle"
                                        },
                                        X: {
                                            type: a().NUMBER,
                                            defaultValue: 0
                                        },
                                        Y: {
                                            type: a().NUMBER,
                                            defaultValue: 0
                                        },
                                        WIDTH: {
                                            type: a().NUMBER,
                                            defaultValue: 1
                                        },
                                        HEIGHT: {
                                            type: a().NUMBER,
                                            defaultValue: 1
                                        }
                                    }
                                },
                                y = {
                                    opcode: "goTo",
                                    blockType: i().COMMAND,
                                    text: this.fm({
                                        goTo: "go to :[XY]"
                                    }),
                                    arguments: {
                                        XY: {
                                            type: a().STRING,
                                            defaultValue: "0,0"
                                        }
                                    }
                                },
                                g = {
                                    blockType: i().BUTTON,
                                    text: this.fm({
                                        toggleDebugWindow: "Toggle Debug Window"
                                    }),
                                    onClick: function() {
                                        n.showDebugWindow = !n.showDebugWindow, n.debugContainer.style.display = n.showDebugWindow ? "block" : "none"
                                    }
                                },
                                b = {
                                    opcode: "setWorkerManually",
                                    blockType: i().COMMAND,
                                    text: this.fm({
                                        setWorkerManually: "set worker URL: [URL]"
                                    }),
                                    arguments: {
                                        URL: {
                                            type: a().STRING,
                                            defaultValue: "https://"
                                        }
                                    }
                                },
                                w = function(e, t) {
                                    var r = {};
                                    return r[e] = t, "--- ".concat(n.fm(r))
                                },
                                M = {
                                    blockType: i().BUTTON,
                                    text: this.fm({
                                        document: "Document"
                                    }),
                                    onClick: function() {
                                        var e = n.fm({
                                            documentURL: "https://getgandi.com/extensions/odyssey"
                                        });
                                        window.open(e, "_blank")
                                    }
                                };
                            return this.__hideBlocks([o, u, l, b]), {
                                id: R,
                                name: this.fm({
                                    name: "A* Odyssey"
                                }),
                                color1: "#44C5B8",
                                menuIconURI: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI5IiBoZWlnaHQ9IjEyOSIgdmlld0JveD0iMCAwIDEyOSAxMjkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00NS44ODI3IDk5Ljg1ODZMNTEuOTgwNCA4My4xODI3SDc3Ljk1ODVMODQuMDY5NSA5OS44NjAxTDg0LjY3MDQgMTAxLjVIODYuNDE2OUg5Nkg5OS42NDE4TDk4LjMzMyA5OC4xMDE1TDcxLjM3NDMgMjguMTAxNUw3MC43NTc2IDI2LjVINjkuNTY3OEg2OS4wNDE0SDY3LjAwODZINjIuODk0Nkg2MC44NjE4SDYwLjMzNTRINTkuMTQzNEw1OC41Mjc4IDI4LjEwNDNMMzEuNjY2IDk4LjEwNDNMMzAuMzYyOSAxMDEuNUgzNEg0My41MzQ3SDQ1LjI4MjVMNDUuODgyNyA5OS44NTg2Wk01Ni41ODY0IDcwLjU4NjVMNjQuOTU2IDQ3LjY5NzdMNzMuMzQzIDcwLjU4NjVINTYuNTg2NFoiIGZpbGw9IiNGQUZGMDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iNSIvPgo8cGF0aCBkPSJNODkuNTA3OCA0Ny42NTIzTDk3LjU1NTcgMzYuNjAxNkw4NS40NjM5IDMyLjk5OEw4Ny4zNDU3IDI2Ljk5MjJMOTkuNDM3NSAzMS40MzY1TDk5LjA3NzEgMTcuNjYzMUgxMDUuMTYzTDEwNC43NjMgMzEuNjc2OEwxMTYuNjk0IDI3LjIzMjRMMTE4LjUzNiAzMy4zNTg0TDEwNi4yNDQgMzcuMDAyTDExNC4xMzIgNDcuODUyNUwxMDkuMTY3IDUxLjU3NjJMMTAxLjc2IDQwLjA0NDlMOTQuNTEyNyA1MS4yOTU5TDg5LjUwNzggNDcuNjUyM1oiIGZpbGw9IiNGOUY5RjkiIGZpbGwtb3BhY2l0eT0iMC40NSIvPgo8cGF0aCBkPSJNODguMjk1MyA0Ni43NjkzTDg3LjQxMjEgNDcuOTgyTDg4LjYyNSA0OC44NjVMOTMuNjI5OSA1Mi41MDg2TDk0LjkxMzggNTMuNDQzM0w5NS43NzM3IDUyLjEwODJMMTAxLjc1OCA0Mi44MTc2TDEwNy45MDUgNTIuMzg2OUwxMDguNzc3IDUzLjc0MzlMMTEwLjA2NyA1Mi43NzYyTDExNS4wMzIgNDkuMDUyNUwxMTYuMjE0IDQ4LjE2NTlMMTE1LjM0NSA0Ni45NzA1TDEwOC43MDYgMzcuODM2OUwxMTguOTYyIDM0Ljc5NjVMMTIwLjQwNiAzNC4zNjg2TDExOS45NzMgMzIuOTI2NUwxMTguMTMxIDI2LjgwMDVMMTE3LjY3IDI1LjI2ODNMMTE2LjE3MSAyNS44MjY4TDEwNi4zMjYgMjkuNDkzOUwxMDYuNjYyIDE3LjcwNTlMMTA2LjcwNyAxNi4xNjMxSDEwNS4xNjNIOTkuMDc3MUg5Ny41Mzc0TDk3LjU3NzcgMTcuNzAyM0w5Ny44ODAyIDI5LjI2Nkw4Ny44NjMyIDI1LjU4NDNMODYuMzg1MiAyNS4wNDFMODUuOTE0MyAyNi41NDM3TDg0LjAzMjUgMzIuNTQ5NUw4My41Nzc3IDM0LjAwMTFMODUuMDM1NSAzNC40MzU2TDk1LjA5NDQgMzcuNDMzM0w4OC4yOTUzIDQ2Ljc2OTNaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utb3BhY2l0eT0iMC40NSIgc3Ryb2tlLXdpZHRoPSIzIi8+Cjwvc3ZnPgo=",
                                blockIconURI: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI5IiBoZWlnaHQ9IjEyOSIgdmlld0JveD0iMCAwIDEyOSAxMjkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00NS44ODI3IDk5Ljg1ODZMNTEuOTgwNCA4My4xODI3SDc3Ljk1ODVMODQuMDY5NSA5OS44NjAxTDg0LjY3MDQgMTAxLjVIODYuNDE2OUg5Nkg5OS42NDE4TDk4LjMzMyA5OC4xMDE1TDcxLjM3NDMgMjguMTAxNUw3MC43NTc2IDI2LjVINjkuNTY3OEg2OS4wNDE0SDY3LjAwODZINjIuODk0Nkg2MC44NjE4SDYwLjMzNTRINTkuMTQzNEw1OC41Mjc4IDI4LjEwNDNMMzEuNjY2IDk4LjEwNDNMMzAuMzYyOSAxMDEuNUgzNEg0My41MzQ3SDQ1LjI4MjVMNDUuODgyNyA5OS44NTg2Wk01Ni41ODY0IDcwLjU4NjVMNjQuOTU2IDQ3LjY5NzdMNzMuMzQzIDcwLjU4NjVINTYuNTg2NFoiIGZpbGw9IiNGQUZGMDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iNSIvPgo8cGF0aCBkPSJNODkuNTA3OCA0Ny42NTIzTDk3LjU1NTcgMzYuNjAxNkw4NS40NjM5IDMyLjk5OEw4Ny4zNDU3IDI2Ljk5MjJMOTkuNDM3NSAzMS40MzY1TDk5LjA3NzEgMTcuNjYzMUgxMDUuMTYzTDEwNC43NjMgMzEuNjc2OEwxMTYuNjk0IDI3LjIzMjRMMTE4LjUzNiAzMy4zNTg0TDEwNi4yNDQgMzcuMDAyTDExNC4xMzIgNDcuODUyNUwxMDkuMTY3IDUxLjU3NjJMMTAxLjc2IDQwLjA0NDlMOTQuNTEyNyA1MS4yOTU5TDg5LjUwNzggNDcuNjUyM1oiIGZpbGw9IiNGOUY5RjkiIGZpbGwtb3BhY2l0eT0iMC40NSIvPgo8cGF0aCBkPSJNODguMjk1MyA0Ni43NjkzTDg3LjQxMjEgNDcuOTgyTDg4LjYyNSA0OC44NjVMOTMuNjI5OSA1Mi41MDg2TDk0LjkxMzggNTMuNDQzM0w5NS43NzM3IDUyLjEwODJMMTAxLjc1OCA0Mi44MTc2TDEwNy45MDUgNTIuMzg2OUwxMDguNzc3IDUzLjc0MzlMMTEwLjA2NyA1Mi43NzYyTDExNS4wMzIgNDkuMDUyNUwxMTYuMjE0IDQ4LjE2NTlMMTE1LjM0NSA0Ni45NzA1TDEwOC43MDYgMzcuODM2OUwxMTguOTYyIDM0Ljc5NjVMMTIwLjQwNiAzNC4zNjg2TDExOS45NzMgMzIuOTI2NUwxMTguMTMxIDI2LjgwMDVMMTE3LjY3IDI1LjI2ODNMMTE2LjE3MSAyNS44MjY4TDEwNi4zMjYgMjkuNDkzOUwxMDYuNjYyIDE3LjcwNTlMMTA2LjcwNyAxNi4xNjMxSDEwNS4xNjNIOTkuMDc3MUg5Ny41Mzc0TDk3LjU3NzcgMTcuNzAyM0w5Ny44ODAyIDI5LjI2Nkw4Ny44NjMyIDI1LjU4NDNMODYuMzg1MiAyNS4wNDFMODUuOTE0MyAyNi41NDM3TDg0LjAzMjUgMzIuNTQ5NUw4My41Nzc3IDM0LjAwMTFMODUuMDM1NSAzNC40MzU2TDk1LjA5NDQgMzcuNDMzM0w4OC4yOTUzIDQ2Ljc2OTNaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utb3BhY2l0eT0iMC40NSIgc3Ryb2tlLXdpZHRoPSIzIi8+Cjwvc3ZnPgo=",
                                blocks: [M, w("divSetup", "Setup"), e, t, w("divObstacle", "Obstacle"), d, f, m, w("divPathFinding", "Path Finding"), h, r, s, o, u, l, w("divListUtils", "List Utils"), p, y, w("divDebug", "Debug"), g, c, b],
                                menus: {
                                    SPRITE_LIST: {
                                        acceptReporters: !0,
                                        items: "__spriteList"
                                    },
                                    LIST_MENU: {
                                        acceptReporters: !0,
                                        items: "__listList"
                                    },
                                    FILL_METHOD_MENU: [{
                                        text: this.fm({
                                            fillMethodSmooth: "smooth result"
                                        }),
                                        value: "smooth"
                                    }, {
                                        text: this.fm({
                                            fillMethodRaw: "keep raw result"
                                        }),
                                        value: "raw"
                                    }],
                                    FAST_OR_ACCURATE_MENU: [{
                                        text: this.fm({
                                            fastOrAccurateFaster: "faster"
                                        }),
                                        value: "faster"
                                    }, {
                                        text: this.fm({
                                            fastOrAccurateAccurate: "more accurate"
                                        }),
                                        value: "accurate"
                                    }],
                                    PATH_FINDING_MENU: [{
                                        text: this.fm({
                                            pathFindingJps: "jps"
                                        }),
                                        value: "jps"
                                    }, {
                                        text: this.fm({
                                            pathFindingAstar: "astar"
                                        }),
                                        value: "astar"
                                    }]
                                }
                            }
                        }
                    }, {
                        key: "_create_initial_grid",
                        value: function() {
                            return new Array(Y).fill(null).map((function() {
                                return new Array(z).fill(0)
                            }))
                        }
                    }, {
                        key: "_drawDebugCanvas",
                        value: function(n) {
                            var e = this.maps.get(n);
                            if (e) {
                                var t = this.debugCanvas.getContext("2d");
                                t.clearRect(0, 0, this.debugCanvas.width, this.debugCanvas.height);
                                for (var r = 0; r < z; r++)
                                    for (var a = 0; a < Y; a++) {
                                        var o = e[a][r];
                                        t.fillStyle = o ? "#FFADAD" : "#C1FF8F", t.fillRect(r, a, 1, 1)
                                    }
                                try {
                                    var i = this.lastPaths.get(n).path;
                                    i && i.length > 0 && (t.strokeStyle = "#03A4FF", t.beginPath(), t.moveTo(i[0][0], i[0][1]), i.forEach((function(n) {
                                        var e = _(n, 2),
                                            r = e[0],
                                            a = e[1];
                                        t.lineTo(r, a)
                                    })), t.stroke())
                                } catch (n) {}
                            }
                        }
                    }, {
                        key: "_addObstacle",
                        value: function(n, e) {
                            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                    scale: 1,
                                    dX: 0,
                                    dY: 0,
                                    rx: 0,
                                    ry: 0,
                                    width: 0,
                                    height: 0
                                },
                                r = this.maps.get(n);
                            return r || (r = this._create_initial_grid(), this.maps.set(n, r)), g.decodeImage(e).then((function() {
                                var n = document.createElement("canvas");
                                n.width = z, n.height = Y;
                                var a = n.getContext("2d", {
                                        willReadFrequently: !0
                                    }),
                                    o = g.decodeImageCache[e.assetId],
                                    i = t.scale / 100,
                                    s = Math.floor(t.width * i),
                                    l = Math.floor(t.height * i),
                                    u = Math.floor(t.dX - t.rx * i + n.width / 2),
                                    c = Math.floor(-t.dY - t.ry * i + n.height / 2);
                                a.drawImage(o.bmp, u, c, s, l), (0, d.g4)("start add obstacle", u, c, s, l);
                                for (var h = 0, p = a.getImageData(0, 0, n.width, n.height), f = 0; f < n.width; f++)
                                    for (var m = 0; m < n.height; m++) p.data[4 * (f + m * n.width) + 3] > 128 && (r[m][f] = 1, h++);
                                (0, d.g4)("end add obstacle, wall: ".concat(h))
                            }))
                        }
                    }, {
                        key: "_getObstacleAssets",
                        value: function(n) {
                            var e = this.runtime.getSpriteTargetByName(n.sprite),
                                t = null == e ? void 0 : e.getCostumes()[n.costume];
                            return e && t ? {
                                costume: t,
                                asset: t.asset,
                                config: {
                                    scale: n.scale / t.bitmapResolution,
                                    dX: n.dX,
                                    dY: n.dY,
                                    rx: t.rotationCenterX,
                                    ry: t.rotationCenterY,
                                    width: t.size[0],
                                    height: t.size[1]
                                }
                            } : {
                                costume: null,
                                asset: null,
                                config: null
                            }
                        }
                    }, {
                        key: "_transPathToScratch",
                        value: function(n) {
                            if (n && n.length >= 0) {
                                var e = [];
                                return n.forEach((function(n) {
                                    var t = _(n, 2),
                                        r = t[0],
                                        a = t[1];
                                    e.push([Math.floor(r - 320), Math.floor(180 - a)])
                                })), e
                            }
                            return n
                        }
                    }, {
                        key: "createMap",
                        value: (u = A(D().mark((function n(e) {
                            var t, r, a, o, i, s, u, c, h, p, f, m, y;
                            return D().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (t = l().toString(e.NAME), r = e.SPRITE, a = e.COSTUME, o = e.DX, i = e.DY, s = e.SCALE, u = this.runtime.getSpriteTargetByName(r), c = l().toString(a), -1 === (h = u.getCostumeIndexByName(c)) && (h = l().toNumber(a) - 1), h >= 0 ? u.getCostumes()[h] : u.getCostumes()[l().toNumber(c) - 1]) {
                                            n.next = 10;
                                            break
                                        }
                                        return (0, d.ZK)("[createMap]", "costume not found", c), n.abrupt("return");
                                    case 10:
                                        if (p = {
                                                sprite: r,
                                                costume: h,
                                                dX: l().toNumber(o),
                                                dY: l().toNumber(i),
                                                scale: l().toNumber(s)
                                            }, f = this._getObstacleAssets(p), m = f.asset, y = f.config, !m) {
                                            n.next = 15;
                                            break
                                        }
                                        return n.next = 15, this._addObstacle(t, m, y);
                                    case 15:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, this)
                        }))), function(n) {
                            return u.apply(this, arguments)
                        })
                    }, {
                        key: "findPath",
                        value: (s = A(D().mark((function n(e, t) {
                            var r, a, o, i, s, u, c, h, p, d, f, m, y, g, b = this;
                            return D().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = l().toString(e.MAP), a = l().toNumber(e.SX), o = l().toNumber(e.SY), i = l().toNumber(e.EX), s = l().toNumber(e.EY), u = l().toString(e.LIST), c = "smooth" === l().toString(e.METHOD), (h = this.maps.get(r)) || (h = this._create_initial_grid()), p = Math.floor(320 + a), d = Math.floor(180 - o), f = Math.floor(i + 320), m = Math.floor(180 - s), p = Math.min(Math.max(p, 0), 639), d = Math.min(Math.max(d, 0), 359), f = Math.min(Math.max(f, 0), 639), m = Math.min(Math.max(m, 0), 359), y = this, g = function(n, e) {
                                            var t = [p, d, f, m];
                                            return new Promise((function(r) {
                                                if (1 === h[d][p] || 1 === h[m][f] || p === f && d === m) r({
                                                    path: [],
                                                    smoothPath: [],
                                                    targetId: n.target.id,
                                                    me: e,
                                                    util: n
                                                });
                                                else {
                                                    var a = "jps" === b.pathFindingAlg ? b.jpsWorkerUrl : b.astarWorkerUrl;
                                                    b.workerURL && (a = new URL(b.workerURL, "file:///data/jenkins/workspace/stein-ci/src/extensions/gandi_ccw_astar/index.js"));
                                                    var o = b._getWorker(a),
                                                        i = v;
                                                    i.startsWith("http://") || i.startsWith("https://") || (i = document.location.protocol + "//" + document.location.host + "/" + v), o.submit({
                                                        points: t,
                                                        grid: h,
                                                        targetId: n.target.id,
                                                        weight: b.weight,
                                                        wasmUrl: i
                                                    }).then((function(t) {
                                                        var a = t.path,
                                                            o = t.smoothPath,
                                                            i = t.targetId;
                                                        r({
                                                            path: a,
                                                            smoothPath: o,
                                                            targetId: i,
                                                            me: e,
                                                            util: n
                                                        })
                                                    }))
                                                }
                                            }))
                                        }, n.next = 21, g(t, y).then((function(n) {
                                            var e = n.path,
                                                t = n.smoothPath,
                                                a = n.targetId,
                                                o = b._transPathToScratch(t),
                                                i = b._transPathToScratch(e);
                                            b.lastPaths.set(r, {
                                                path: t,
                                                pathTrans: o
                                            });
                                            var s = b.runtime.getTargetById(a);
                                            b.__fillArrayToList(c ? o : i, u, {
                                                overwrite: !0
                                            }, s)
                                        }));
                                    case 21:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, this)
                        }))), function(n, e) {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "findPathAsync",
                        value: function(n, e) {
                            this.findPath(n, e)
                        }
                    }, {
                        key: "findPathBetweenSprites",
                        value: (o = A(D().mark((function n(e, t) {
                            var r, a, o, i;
                            return D().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (r = l().toString(e.START), a = l().toString(e.END), o = this.__getSpriteTargetByNameOrId(r), i = this.__getSpriteTargetByNameOrId(a), o && i) {
                                            n.next = 7;
                                            break
                                        }
                                        return (0, d.ZK)("[findPathBetweenSprites]", "start or end target is not found"), n.abrupt("return");
                                    case 7:
                                        return n.next = 9, this.findPath(S(S({}, e), {}, {
                                            SX: o.x,
                                            SY: o.y,
                                            EX: i.x,
                                            EY: i.y
                                        }), t);
                                    case 9:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, this)
                        }))), function(n, e) {
                            return o.apply(this, arguments)
                        })
                    }, {
                        key: "findPathBetweenSpritesAsync",
                        value: function(n, e) {
                            this.findPathBetweenSprites(n, e)
                        }
                    }, {
                        key: "drawDebugCanvasWithPath",
                        value: function(n) {
                            if (this.showDebugWindow) {
                                var e = l().toString(n.MAP);
                                this._drawDebugCanvas(e)
                            }
                        }
                    }, {
                        key: "clearMap",
                        value: function(n) {
                            var e = l().toString(n.NAME),
                                t = this.maps.get(e);
                            if (t)
                                for (var r = l().toNumber(n.X), a = l().toNumber(n.Y), o = l().toNumber(n.WIDTH), i = l().toNumber(n.HEIGHT), s = Math.floor(r + 320), u = Math.floor(180 - a), c = s; c < o + s; c++)
                                    for (var h = u; h < i + u; h++) c >= z || h >= Y || c < 0 || h < 0 || (t[h][c] = 0);
                            else(0, d.ZK)("[clearMap]", "map not found", e)
                        }
                    }, {
                        key: "fillPathToList",
                        value: function(n, e) {
                            if ("empty" !== n.LIST) {
                                var t = l().toString(n.MAP),
                                    r = this.lastPaths.get(t).pathTrans;
                                void 0 !== r && 0 !== r.length && this.__fillArrayToList(r, l().toString(n.LIST), {
                                    overwrite: !0
                                }, e.target)
                            }
                        }
                    }, {
                        key: "itemOfList",
                        value: function(n, e) {
                            var t = this.__findList(l().toString(n.LIST), e.target);
                            if (!t) return 0;
                            var r = l().toNumber(n.INDEX) - 1,
                                a = l().toNumber(n.IDX) - 1;
                            if (r >= t.value.length || r < 0) return 0;
                            if (0 !== a && 1 !== a) return 0;
                            var o = t.value[r];
                            return l().toString(o).replace(/[\[\]\(\)]/gm, "").split(",")[a]
                        }
                    }, {
                        key: "isWalkable",
                        value: function(n) {
                            var e = l().toString(n.MAP),
                                t = l().toNumber(n.X),
                                r = l().toNumber(n.Y),
                                a = this.maps.get(e);
                            if (!a) return (0, d.ZK)("[isWalkable]", "map not found", e), !1;
                            var o = Math.floor(t + 320),
                                i = Math.floor(180 - r);
                            return !(o >= z || i >= Y || o < 0 || i < 0) && 0 === a[i][o]
                        }
                    }, {
                        key: "isCurrentTargetOnWalkable",
                        value: function(n, e) {
                            return this.isWalkable(S(S({}, n), {}, {
                                X: e.target.x,
                                Y: e.target.y
                            }))
                        }
                    }, {
                        key: "goTo",
                        value: function(n, e) {
                            var t = _(l().toString(n.XY).replace(/[\[\]\(\)]/gm, "").split(","), 2),
                                r = t[0],
                                a = t[1],
                                o = l().toNumber(r) || 0,
                                i = l().toNumber(a) || 0;
                            e.target.setXY(o, i, !0)
                        }
                    }, {
                        key: "fastOrAccurate",
                        value: function(n) {
                            var e = "accurate" === l().toString(n.ALGORITHM),
                                t = n.PATH_FINDING ? l().toString(n.PATH_FINDING) : "jps";
                            this.weight = e ? 1 : 60, this.pathFindingAlg = t
                        }
                    }, {
                        key: "addRectangleObstacle",
                        value: function(n) {
                            var e = l().toString(n.MAP),
                                t = l().toNumber(n.X),
                                r = l().toNumber(n.Y),
                                a = l().toNumber(n.WIDTH),
                                o = l().toNumber(n.HEIGHT),
                                i = this.maps.get(e);
                            i || (i = this._create_initial_grid(), this.maps.set(e, i));
                            for (var s = Math.floor(t + 320), u = Math.floor(180 - r), c = s; c < a + s; c++)
                                for (var h = u; h < o + u; h++) c >= z || h >= Y || c < 0 || h < 0 || (i[h][c] = 1)
                        }
                    }, {
                        key: "setWorkerManually",
                        value: function(n) {
                            var e = l().toString(n.URL);
                            e && e.startsWith("http") ? this.workerURL = e : this.workerURL = void 0
                        }
                    }], r = [{
                        key: "STATE_KEY",
                        get: function() {
                            return R
                        }
                    }], t && k(e.prototype, t), r && k(e, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), b
                }(b.a)
        },
        78299: (n, e, t) => {
            function r(n, e) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, e) {
                    var t = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != t) {
                        var r, a, o = [],
                            i = !0,
                            s = !1;
                        try {
                            for (t = t.call(n); !(i = (r = t.next()).done) && (o.push(r.value), !e || o.length !== e); i = !0);
                        } catch (n) {
                            s = !0, a = n
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return o
                    }
                }(n, e) || function(n, e) {
                    if (n) {
                        if ("string" == typeof n) return a(n, e);
                        var t = Object.prototype.toString.call(n).slice(8, -1);
                        return "Object" === t && n.constructor && (t = n.constructor.name), "Map" === t || "Set" === t ? Array.from(n) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? a(n, e) : void 0
                    }
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }
            t.d(e, {
                Z: () => i
            });
            var o = function(n, e) {
                this.url = n, this.count = e || navigator.hardwareConcurrency || 4, this.queue = [], this.callbacks = {}, this.pool = [], this.idx = 0
            };
            o.prototype.submit = function(n) {
                var e = this,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                return new Promise((function(r, a) {
                    e.queue.push([n, r, a, t]), e._nextJob()
                }))
            }, o.prototype.clear = function() {
                this.pool.map((function(n) {
                    return n[0].terminate()
                })), this.pool = []
            }, o.prototype._nextJob = function() {
                var n;
                for (n = 0; n < this.pool.length && this.pool[n][1]; n++);
                if (n < this.pool.length) this._startJob(n);
                else if (this.pool.length < this.count) {
                    var e = this._newWorker();
                    this.pool.push([e, !1]), this._startJob(this.pool.length - 1)
                }
            }, o.prototype._newWorker = function() {
                var n = this,
                    e = new Worker(this.url);
                e.onmessage = function(e) {
                    var t = r(e.data, 2),
                        a = t[0],
                        o = t[1],
                        i = r(n.callbacks[a], 2),
                        s = i[0],
                        l = i[1];
                    e.data.length > 2 && l ? l(e.data[2]) : (s(o), delete n.callbacks[a])
                };
                var t = function(t, r) {
                    return new Promise((function(a, o) {
                        var i = n.idx++;
                        n.callbacks[i] = [a, r], e.onerror = function(n) {
                            o("ERROR: Line " + n.lineno + " in " + n.url + ": " + n.message)
                        }, e.postMessage([i, t])
                    }))
                };
                return t.terminate = function() {
                    e.terminate()
                }, t
            }, o.prototype._startJob = function(n) {
                var e = this.pool[n];
                if (e[1] = !0, 0 !== this.queue.length) {
                    var t = r(this.queue.shift(), 4),
                        a = t[0],
                        o = t[1],
                        i = t[2],
                        s = t[3],
                        l = this;
                    e[0](a, s).then(o, i).then((function() {
                        l._startJob(n)
                    }))
                } else e[1] = !1
            };
            const i = o
        },
        50043: (n, e, t) => {
            t.d(e, {
                Z: () => o
            });
            var r = t(23645),
                a = t.n(r)()((function(n) {
                    return n[1]
                }));
            a.push([n.id, '#containerDebugForAStar{\n  position: fixed;\n  left: 350px;\n  bottom: 100px;\n  z-index: 100;\n  touch-action: none;\n  user-select: none;\n  width: 326px;\n  height: 208px;\n  transition: background 0.5s ease-in-out, border 0.5s ease-in-out;\n  border: 3px rgba(255,255,255,0) solid;\n  border-radius: 3px;\n}\n#canvasDebugForAStar{\n  background-color: #cecece;\n  transform: scale(0.5) translate(-320px, -180px);\n  opacity: 0.6;\n  cursor: move;\n  transition: all 0.5s ease-in-out;\n\n}\n#containerDebugForAStar:hover #canvasDebugForAStar{\n  opacity: 1;\n}\n\n#containerDebugForAStar:hover{\n  background-color: aquamarine;\n  border: 3px aquamarine solid;\n}\n#containerDebugForAStar::before{\n  content: "A* Odyssey Debug Window @ Gandi IDE";\n  height: 16px;\n  font-size: 12px;\n  line-height: 16px;\n  color: rgba(0,0,0,0);\n  transition: all 0.5s ease-in-out;\n}\n#containerDebugForAStar:hover::before{\n  color: rgba(0,0,0,.6);\n}', ""]);
            const o = a
        }
    }
]);
